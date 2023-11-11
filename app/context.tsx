'use client';
import './globals.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { createContext, useState, useEffect } from 'react';
import isClient from './utils/is-client';
import ColorThemeButton from './components/color-theme-button';
import Navigation from './components/navigation';
import PageLoader from './components/page-loader';

const inter = Inter({ subsets: ['latin'] });
const PREFERS_THEME_STORAGE_KEY = 'preferredColorTheme';

export const ThemeContext = createContext<string | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (isClient()) {
      const themeLocalStorage = window.localStorage.getItem(
        PREFERS_THEME_STORAGE_KEY
      );

      if (themeLocalStorage) {
        setTheme(themeLocalStorage);
        return;
      }

      const themeSystem = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (themeSystem) {
        setTheme('dark');
        return;
      }
    }

    setTheme('light');
  }, []);

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem(PREFERS_THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  if (!theme) {
    return <PageLoader />;
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={classNames('', { dark: theme === 'dark' })}>
        <div
          className={`${inter.className} bg-gray-200 text-gray-950 dark:bg-gray-950 dark:text-gray-200`}
        >
          <Navigation>
            <div className="static">
              <ColorThemeButton
                isDarkMode={true}
                handleToggleColorTheme={() => setTheme('dark')}
              />
              <ColorThemeButton
                isDarkMode={false}
                handleToggleColorTheme={() => setTheme('light')}
              />
            </div>
          </Navigation>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
