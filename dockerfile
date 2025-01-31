#Stage 1: Building application 

# Use the official Ubuntu base image
FROM ubuntu:24.04 AS builder

# Set the working directory
WORKDIR /app

# Install Node.js, npm, and nginx
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

#Stage 2: Serving the application with nginx
FROM ubuntu/nginx:1.24-24.04_beta

# Remove the default nginx configuration file
RUN rm /etc/nginx/sites-enabled/default
WORKDIR /app
COPY --from=builder /app/dist /app/dist

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/sites-available/default

# Enable the new nginx configuration file
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Expose the port the app runs on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]