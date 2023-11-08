'use client';
import './globals.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ThemeContext } from './context';
import isClient from './utils/is-client';
import ColorThemeButton from './components/color-theme-button';
import Navigation from './components/navigation';

const inter = Inter({ subsets: ['latin'] });
const PREFERS_DARK_MODE_STORAGE_KEY = 'prefersDarkMode';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setTheme] = useState(false);

  useEffect(() => {
    if (isClient()) {
      const storedPrefersDarkMode = window.localStorage?.getItem(
        PREFERS_DARK_MODE_STORAGE_KEY
      );

      const initialIsDarkMode =
        storedPrefersDarkMode != null
          ? JSON.parse(storedPrefersDarkMode)
          : window.matchMedia?.('(prefers-color-scheme: dark)').matches ??
            false;

      setTheme(initialIsDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isClient()) {
      window.localStorage.setItem(
        PREFERS_DARK_MODE_STORAGE_KEY,
        isDarkMode.toString()
      );
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <html lang="en" className={classNames('', { dark: isDarkMode })}>
        <body
          className={`${inter.className} bg-gray-200 text-gray-950 dark:bg-gray-950 dark:text-gray-200`}
        >
          <Navigation>
            <div className="static">
              <ColorThemeButton
                isDarkMode={true}
                handleToggleColorTheme={() => setTheme(true)}
              />
              <ColorThemeButton
                isDarkMode={false}
                handleToggleColorTheme={() => setTheme(false)}
              />
            </div>
          </Navigation>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
