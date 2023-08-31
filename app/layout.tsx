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
          className={`${inter.className} bg-gray-200 text-gray-950 dark:bg-gray-950 dark:text-gray-200`}
        >
          <Navigation>
            <div className="static">
              <button
                type="button"
                aria-label="Use Dark Mode"
                className="font-semibold uppercase visible dark:invisible bg-gray-950 hover:bg-gray-700 shadow-lg rounded-full p-2 text-gray-200 absolute right-4"
                onClick={() => {
                  setTheme(true);
                }}
              >
                <BsFillMoonStarsFill />
              </button>
              <button
                type="button"
                aria-label="Use Light Mode"
                className="font-semibold uppercase invisible dark:visible bg-gray-700 hover:bg-gray-400 shadow-lg rounded-full p-2 text-gray-200 absolute right-4"
                onClick={() => {
                  setTheme(false);
                }}
              >
                <BsFillSunFill />
              </button>
            </div>
          </Navigation>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
