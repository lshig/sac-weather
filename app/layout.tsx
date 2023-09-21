'use client';

import './globals.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ThemeContext } from './context';
import ColorThemeButton from './components/color-theme-button';
import Navigation from './components/navigation';

const inter = Inter({ subsets: ['latin'] });
const PREFERS_DARK_MODE_STORAGE_KEY = 'prefersDarkMode';

function getInitialIsDarkMode(): boolean {
  const storedPrefersDarkMode = window.localStorage?.getItem(
    PREFERS_DARK_MODE_STORAGE_KEY
  );

  return storedPrefersDarkMode != null
    ? JSON.parse(storedPrefersDarkMode)
    : window.matchMedia?.('prefers-color-scheme: dark').matches ?? false;
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setTheme] = useState(getInitialIsDarkMode());

  useEffect(() => {
    window.localStorage.setItem(
      PREFERS_DARK_MODE_STORAGE_KEY,
      isDarkMode.toString()
    );
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
