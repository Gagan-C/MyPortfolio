import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./Components/NavigationBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";
 import { GoogleAnalytics } from '@next/third-parties/google'
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gagan Chatu's Portfolio",
  description: "Explore Gagan Chatu's projects, skills, and certifications.",
  keywords: "Gagan Chatu, Portfolio, Projects, Skills, Certifications, Contact, Gagan Chatu Resume, Gagan Chatu CV",
  authors: [{ name: "Gagan Chatu", url: "https://gaganchatu.com" }],
  openGraph: {
    title: "Gagan Chatu's Portfolio",
    description: "Explore Gagan Chatu's projects, skills, and certifications.",
    url: "https://www.gaganchatu.com/",
    type: "profile",
    images: [
      {
        url: "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/profile-pic.png",
        width: 600,
        height: 600,
        alt: "Gagan Chatu's Profile Picture",
      },
    ]    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([{
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gagan Chatu",
              url: "https://www.gaganchatu.com/",
              sameAs: [
                "https://github.com/Gagan-C",
                "https://www.linkedin.com/in/gaganchowdarychatu/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gagan Chatu's Portfolio",
              url: "https://www.gaganchatu.com/",
              description: "Explore Gagan Chatu's projects, skills, and certifications."
            }
          ])
          }}
        />
    </Head>
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
