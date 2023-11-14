import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from './custom-render';
import VisualBox from '../components/visual-box';

describe('VisualBox', () => {
  let themeProviderProps = 'kings';

  it('renders children', () => {
    customRender(<VisualBox>Hello, world!</VisualBox>, themeProviderProps);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('should apply correct kings theme classes when isHoverable prop is true', () => {
    customRender(
      <VisualBox isHoverable>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-300 bg-gray-950 hover:bg-gray-600'
    );
  });

  it('should apply correct kings theme classes when isHoverable prop is false', () => {
    customRender(
      <VisualBox isHoverable={false}>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-300 bg-gray-950'
    );
  });

  it('should apply correct dark theme classes when isHoverable prop is true', () => {
    themeProviderProps = 'dark';
    customRender(
      <VisualBox isHoverable>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-950 bg-gray-700 hover:bg-gray-600'
    );
  });

  it('should apply correct dark theme classes when isHoverable prop is false', () => {
    themeProviderProps = 'dark';
    customRender(
      <VisualBox isHoverable={false}>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-950 bg-gray-700'
    );
  });

  it('should apply correct light theme classes when isHoverable prop is true', () => {
    themeProviderProps = 'light';
    customRender(
      <VisualBox isHoverable>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-300 bg-gray-500 hover:bg-gray-400'
    );
  });

  it('should apply correct ligth theme classes when isHoverable prop is false', () => {
    themeProviderProps = 'light';
    customRender(
      <VisualBox isHoverable={false}>Hello, world!</VisualBox>,
      themeProviderProps
    );
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'text-gray-300 bg-gray-500'
    );
  });
});
