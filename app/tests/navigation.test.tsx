import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../components/navigation';

describe('Navigation', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <Navigation>
        <div>Hello, world!</div>
      </Navigation>
    );
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
