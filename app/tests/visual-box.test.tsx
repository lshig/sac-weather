import React from 'react';
import { render, screen } from '@testing-library/react';
import VisualBox from '../components/visual-box';

describe('VisualBox', () => {
  it('renders children', () => {
    render(<VisualBox>Hello, world!</VisualBox>);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('applies hoverable class when isHoverable prop is true', () => {
    render(<VisualBox isHoverable>Hello, world!</VisualBox>);
    expect(screen.getByText('Hello, world!')).toHaveClass(
      'hover:bg-gray-400 dark:hover:bg-gray-600'
    );
  });

  it('does not apply hoverable class when isHoverable prop is false', () => {
    render(<VisualBox isHoverable={false}>Hello, world!</VisualBox>);
    expect(screen.getByText('Hello, world!')).not.toHaveClass(
      'hover:bg-gray-400 dark:hover:bg-gray-600'
    );
  });
});
