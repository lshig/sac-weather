import React from 'react';
import { render } from '@testing-library/react';
import VisualSection from '../components/visual-section';

describe('VisualSection', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <VisualSection>
        <div>Hello, world!</div>
      </VisualSection>
    );

    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
