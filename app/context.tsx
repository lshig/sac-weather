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

  const getColorThemeButton = (theme: string) => {
    switch (theme) {
      case 'light':
        return (
          <ColorThemeButton
            theme="kings"
            handleToggleColorTheme={() => setTheme('kings')}
          />
        );
      case 'kings':
        return (
          <ColorThemeButton
            theme="dark"
            handleToggleColorTheme={() => setTheme('dark')}
          />
        );
      case 'dark':
        return (
          <ColorThemeButton
            theme="light"
            handleToggleColorTheme={() => setTheme('light')}
          />
        );
      default:
        return (
          <ColorThemeButton
            theme="dark"
            handleToggleColorTheme={() => setTheme('dark')}
          />
        );
    }
  };

  if (!theme) {
    return <PageLoader />;
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={classNames(`${inter.className}`, {
          'bg-gray-200 text-gray-950': theme === 'light',
          'bg-gray-950 text-gray-200': theme === 'dark',
          'bg-purple-950 text-gray-200': theme === 'kings'
        })}
      >
        <Navigation>
          <div className="static">{getColorThemeButton(theme)}</div>
        </Navigation>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
