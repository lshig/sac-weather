'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Navigation from './components/navigation';
import { ThemeContext } from './context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setTheme] = useState(true);
  const themeColor = isDarkMode ? 'dark' : '';

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <html lang="en" className={themeColor}>
        <body
          className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}
        >
          <Navigation>
            <button
              type="button"
              aria-label="Use Dark Mode"
              className="font-semibold uppercase visible dark:invisible bg-gray-800 hover:bg-gray-900 shadow-lg rounded-lg p-2 text-white absolute top-0 right-0"
              onClick={() => {
                setTheme(true);
              }}
            >
              <BsFillMoonStarsFill />
            </button>
            <button
              type="button"
              aria-label="Use Light Mode"
              className="font-semibold uppercase invisible dark:visible bg-white hover:bg-gray-300 shadow-lg rounded-lg p-2 text-black absolute top-0 right-0"
              onClick={() => {
                setTheme(false);
              }}
            >
              <BsFillSunFill />
            </button>
          </Navigation>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
