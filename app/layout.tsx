'use client';

import './globals.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ThemeContext } from './context';
import ColorThemeButton from './components/color-theme-button';
import Navigation from './components/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setTheme] = useState(true);

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
