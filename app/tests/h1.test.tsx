import React from 'react';
import { render } from '@testing-library/react';
import H1 from '../components/h1';

describe('H1', () => {
  it('renders the children prop', () => {
    const { getByText } = render(<H1>Hello, world!</H1>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});
