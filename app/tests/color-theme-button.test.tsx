import { render, screen, fireEvent } from '@testing-library/react';
import ColorThemeButton from '../components/color-theme-button';

describe('ColorThemeButton', () => {
  it('should render a button with the correct icon and class when isDarkMode is false', () => {
    render(
      <ColorThemeButton handleToggleColorTheme={() => {}} isDarkMode={false} />
    );
    const button = screen.getByRole('button', {
      name: /Use Light Mode/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'invisible dark:visible bg-gray-700 hover:bg-gray-400'
    );
  });

  it('should render a button with the correct icon and class when isDarkMode is true', () => {
    render(
      <ColorThemeButton handleToggleColorTheme={() => {}} isDarkMode={true} />
    );
    const button = screen.getByRole('button', {
      name: /Use Dark Mode/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'visible dark:invisible bg-gray-950 hover:bg-gray-700'
    );
  });

  it('should call handleToggleColorTheme when clicked', () => {
    const handleToggleColorTheme = jest.fn();
    render(
      <ColorThemeButton
        handleToggleColorTheme={handleToggleColorTheme}
        isDarkMode={false}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleToggleColorTheme).toHaveBeenCalled();
  });
});
