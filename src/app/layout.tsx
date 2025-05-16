import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./Components/NavigationBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";
 import { GoogleAnalytics } from '@next/third-parties/google'

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
      <div className="bg-[url(https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/background-img.jpg)] bg-cover bg-scroll">
          <div className="backdrop-blur-sm">
            <NavigationBar/>
            {children}
            <SpeedInsights/>
            <Analytics/>
            <GoogleAnalytics gaId="G-BL54PMFQ4X" />
          </div>
        </div>
      </body>
    </html>
  );
}
