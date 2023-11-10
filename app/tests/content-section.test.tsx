import React from 'react';
import { render } from '@testing-library/react';
import ContentSection from '../components/content-section';

describe('ContentSection', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ContentSection>
        <div>Hello, world!</div>
      </ContentSection>
    );
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('applies default margin', () => {
    const { container } = render(
      <ContentSection>Hello, world!</ContentSection>
    );
    expect(container.firstChild).toHaveClass('md:mx-0');
  });

  it('removes default margin', () => {
    const { container } = render(
      <ContentSection isDefaultMarginRemovable>Hello, world!</ContentSection>
    );
    expect(container.firstChild).not.toHaveClass('md:mx-0');
  });
});
