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
  title: "Ayush Aggarwal — Software Engineer",
  description:
    "Software Engineer II at Ellucian building backend services, cloud infrastructure, and data platforms on AWS. Lakehouse analytics, serverless architectures, Node.js, Python, React.",
  keywords: [
    "Ayush Aggarwal",
    "Software Engineer",
    "AWS",
    "Backend Engineer",
    "Cloud Infrastructure",
    "Data Platforms",
  ],
  openGraph: {
    title: "Ayush Aggarwal — Software Engineer",
    description:
      "Backend services, cloud infrastructure, and data platforms on AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
