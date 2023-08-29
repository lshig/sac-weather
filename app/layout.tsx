'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Navigation from './components/navigation';
import { ThemeContext } from './context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" className={theme}>
        <body
          className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}
        >
          <Navigation>
            <button
              type="button"
              aria-label="Use Dark Mode"
              className="font-semibold uppercase visible dark:invisible bg-gray-800 hover:bg-gray-900 shadow-lg rounded-lg p-4 text-white absolute top-0 right-0"
              onClick={(e) => {
                setTheme('dark');
              }}
            >
              Dark Mode
            </button>
            <button
              type="button"
              aria-label="Use Light Mode"
              className="font-semibold uppercase invisible dark:visible bg-gray-500 hover:bg-gray-600 shadow-lg rounded-lg p-4 text-black absolute top-0 right-0"
              onClick={(e) => {
                setTheme('light');
              }}
            >
              Light Mode
            </button>
          </Navigation>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
