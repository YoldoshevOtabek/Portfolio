import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./motion.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Otabek Yo‘ldoshev | Frontend Developer";
const description =
  "Otabek Yo‘ldoshev — Junior Frontend Developer. React, TypeScript, Next.js va Tailwind CSS yordamida zamonaviy web ilovalar, admin panellar va CRM tizimlari yaratadi.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoldoshevotabek.vercel.app",
  ),
  title: {
    default: title,
    template: "%s | Frontend Developer",
  },
  description,
  applicationName: "Otabek Yo‘ldoshev Portfolio",
  authors: [{ name: "Otabek Yo‘ldoshev" }],
  creator: "Otabek Yo‘ldoshev",
  publisher: "Otabek Yo‘ldoshev",
  keywords: [
    "Otabek Yo‘ldoshev",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "CRM",
    "Portfolio",
    "Uzbekistan",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "uz_UZ",
    siteName: "Otabek Yo‘ldoshev",
    images: [
      {
        url: "/.png",
        width: 1200,
        height: 630,
        alt: "Otabek Yo‘ldoshev — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/og.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Otabek Yo‘ldoshev",
  jobTitle: "Junior Frontend Developer",
  url: "https://github.com/YoldoshevOtabek",
  email: "mailto:yoldoshevo2000@gmail.com",
  telephone: "+998903224966",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toshkent",
    addressCountry: "UZ",
  },
  sameAs: [
    "https://github.com/YoldoshevOtabek",
    "https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/",
    "https://t.me/Otabek_Y_2000",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "REST API",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.add("light")}catch(e){}',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
