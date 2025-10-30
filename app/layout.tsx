import type { Metadata } from 'next';
import { Bellefair } from 'next/font/google';
import './globals.css';

const bellefair = Bellefair({
  variable: '--font-bellefair',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism Website',
  icons: '/favicon-32x32.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bellefair.variable} antialiased`}>{children}</body>
    </html>
  );
}
