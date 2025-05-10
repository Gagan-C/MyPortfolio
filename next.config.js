/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e21qb2sohxwlyxkx.public.blob.vercel-storage.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'brm-workforce.oracle.com',
                pathname: '/**'
            }
        ],
    },
};

export default nextConfig;