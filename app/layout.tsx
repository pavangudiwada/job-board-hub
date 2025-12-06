import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Resources",
  description: "One stop for all your job hunting needs - find specialized job boards across tech, design, remote work and more",
  openGraph: {
    title: "Job Resources",
    description: "One stop for all your job hunting needs - find specialized job boards across tech, design, remote work and more",
    url: "https://jobresources.fyi",
    siteName: "Job Resources",
    images: [
      {
        url: "/website_preview.png",
        width: 1200,
        height: 630,
        alt: "Job Resources - Your job hunting hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Resources",
    description: "One stop for all your job hunting needs - find specialized job boards across tech, design, remote work and more",
    images: ["/website_preview.png"],
  },
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
        {children}
      </body>
    </html>
  );
}
