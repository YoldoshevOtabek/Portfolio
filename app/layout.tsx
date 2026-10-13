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
  title: "Otabek Yo‘ldoshev | Frontend Developer",
  description:
    "Otabek Yo‘ldoshev — Junior Frontend Developer. React, TypeScript, Next.js va Tailwind CSS yordamida zamonaviy web ilovalar yaratadi.",
  openGraph: {
    title: "Otabek Yo‘ldoshev | Frontend Developer",
    description:
      "Frontend portfolio — loyihalar, texnologiyalar va aloqa ma’lumotlari.",
    type: "website",
    images:[
      {
        url: "/portfolioBase.png",
        width:630,
        height:1200,
        alt:"Portfolio Img"
      }
    ]
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
