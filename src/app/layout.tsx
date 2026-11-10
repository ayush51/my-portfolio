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
  metadataBase: new URL("https://ayush-aggarwal.vercel.app"),
  title: "Ayush Aggarwal — Software Engineer",
  description:
    "Full-stack software engineer, backend-leaning. AWS lakehouse analytics and serverless pipelines at Ellucian, plus shipped Next.js, Supabase and TypeScript products. Open to opportunities.",
  keywords: [
    "Ayush Aggarwal",
    "Software Engineer",
    "AWS",
    "Backend Engineer",
    "Cloud Infrastructure",
    "Data Platforms",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ayush Aggarwal — Software Engineer",
    description:
      "Full-stack engineer building AWS data platforms and the products on top of them.",
    url: "https://ayush-aggarwal.vercel.app",
    siteName: "Ayush Aggarwal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Aggarwal — Software Engineer",
    description:
      "Full-stack engineer building AWS data platforms and the products on top of them.",
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
