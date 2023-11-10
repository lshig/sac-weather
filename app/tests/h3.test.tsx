import React from 'react';
import { render } from '@testing-library/react';
import H3 from '../components/h3';

describe('H3', () => {
  it('renders the children', () => {
    const { getByText } = render(<H3>Hello, world!</H3>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
