import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Onest, Poppins, Permanent_Marker } from 'next/font/google';
import './globals.css';

const GOOGLE_ADS_ID = 'AW-18119034865';

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
});

const permanent = Permanent_Marker({
  variable: '--font-permanent',
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '700'],
});

const SITE_URL = 'https://www.itconnect.community';
const SITE_TITLE = 'IT Connect Belgrade — IT Community & Meetups | 7000+ members';
const SITE_DESCRIPTION = 'IT Connect is a community of IT professionals in Belgrade: meetups, networking and conferences. IT сообщество и айти митапы в Белграде: 7000+ участников, до 60 событий в год.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | IT Connect Belgrade',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'IT сообщество Белград',
    'айти митапы Белград',
    'нетворкинг Белград',
    'IT мероприятия Сербия',
    'IT community Belgrade',
    'IT meetup Belgrade',
    'tech networking Serbia',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'IT Connect Belgrade',
    locale: 'en_RS',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${poppins.variable} ${permanent.variable}`} id="homePage">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
