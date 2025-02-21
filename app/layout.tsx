import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lavishly_Yours } from 'next/font/google';
import './globals.css';
import Navbar from './ui/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lavishlyYours = Lavishly_Yours({
  weight: '400',
  variable: '--font-lavishly-yours',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LUXE Thai Spa & Massage',
  description: 'A luxury thai spa and massage experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
