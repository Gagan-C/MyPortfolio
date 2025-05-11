import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./Components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Gagan Chatu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div 
        className="bg-cover bg-center h-screen bg-image"
        style={{
          backgroundImage: `url(https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/background-img.jpg)`,
        }}
      >
          <div className="backdrop-blur-sm h-screen">
          <NavigationBar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
