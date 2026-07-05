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

export const metadata: Metadata = {
  title: 'IT CONNECT',
  description: 'IT community in Belgrade'
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
