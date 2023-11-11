import React from 'react';
import { render } from '@testing-library/react';
import PageLoader from '../components/page-loader';

describe('PageLoader', () => {
  it('renders', () => {
    const { getByText } = render(<PageLoader />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
