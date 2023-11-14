import { render, screen, fireEvent } from '@testing-library/react';
import ColorThemeButton from '../components/color-theme-button';

describe('ColorThemeButton', () => {
  it('should render a button with the correct icon and class when theme light', () => {
    render(
      <ColorThemeButton handleToggleColorTheme={() => {}} theme="light" />
    );
    const button = screen.getByRole('button', {
      name: /Use Light Mode/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-700 hover:bg-gray-400');
  });

  it('should render a button with the correct icon and class when theme is dark', () => {
    render(<ColorThemeButton handleToggleColorTheme={() => {}} theme="dark" />);
    const button = screen.getByRole('button', {
      name: /Use Dark Mode/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-950 hover:bg-gray-700');
  });

  it('should render a button with the correct icon and class when theme is kings', () => {
    render(
      <ColorThemeButton handleToggleColorTheme={() => {}} theme="kings" />
    );
    const button = screen.getByRole('button', {
      name: /Use Kings Mode/i
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-purple-950 hover:bg-purple-700');
  });

  it('should call handleToggleColorTheme when clicked', () => {
    const handleToggleColorTheme = jest.fn();
    render(
      <ColorThemeButton
        handleToggleColorTheme={handleToggleColorTheme}
        theme="light"
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleToggleColorTheme).toHaveBeenCalled();
  });
});
