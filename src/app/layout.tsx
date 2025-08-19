import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  icons: {
    icon: '/favicon.ico',
    apple: 'https://skfqtizduqveimuroymj.supabase.co/storage/v1/object/public/stock-images/socials-picture-08-19-25.png',
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    type: 'website',
    locale: siteDetails.locale,
    images: [
      {
        url: 'https://skfqtizduqveimuroymj.supabase.co/storage/v1/object/public/stock-images/socials-picture-08-19-25.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
      {
        url: 'https://skfqtizduqveimuroymj.supabase.co/storage/v1/object/public/stock-images/socials-picture-08-19-25.png',
        width: 1200,
        height: 630,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['https://skfqtizduqveimuroymj.supabase.co/storage/v1/object/public/stock-images/socials-picture-08-19-25.png'],
  },
  other: {
    'msapplication-TileImage': 'https://skfqtizduqveimuroymj.supabase.co/storage/v1/object/public/stock-images/socials-picture-08-19-25.png',
    'msapplication-TileColor': '#000000',
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
        className={`${inter.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
