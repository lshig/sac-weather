import React from 'react';
import { render } from '@testing-library/react';
import H2 from '../components/h2';

describe('H2', () => {
  it('renders the children prop', () => {
    const { getByText } = render(<H2>Hello, world!</H2>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
