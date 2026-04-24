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
  title: "Krishna Murari Jha - Full Stack Developer",
  description:
    "Portfolio showcasing innovative software development projects, technical expertise, and professional experience. 3D interactive showcase with modern web technologies.",
  keywords: [
    "developer",
    "full-stack",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "JavaScript",
  ],
  authors: [{ name: "Krishna Murari Jha" }],
  creator: "Krishna Murari Jha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2300d4ff'>K</text></svg>" />
      </head>
      <body className="bg-dark text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
