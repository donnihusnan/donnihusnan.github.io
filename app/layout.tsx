import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inconsolata = localFont({ src: './fonts/Inconsolata.ttf' });

export const metadata: Metadata = {
  title: 'Donni Husnan',
  description: 'Port-O-Folio',
  icons: {
    icon: '/images/cool.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased`}>{children}</body>
    </html>
  );
}
