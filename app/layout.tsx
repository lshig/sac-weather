import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Forecast for Sacramento, CA',
  description: 'A Next.js app with the NWS weather API'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <h1 className="text-4xl font-bold px-6 py-6 md:px-8 md:py-8 text-center">
          Weather Forecast for Sacramento, CA
        </h1>
        {children}
      </body>
    </html>
  );
}
