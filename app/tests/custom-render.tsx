import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from '../context';

export function customRender(ui: React.ReactNode, themeProviderProps: string) {
  return render(
    <ThemeContext.Provider value={themeProviderProps}>
      {ui}
    </ThemeContext.Provider>
  );
}
