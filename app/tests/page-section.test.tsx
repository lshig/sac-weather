import React from 'react';
import { render } from '@testing-library/react';
import PageSection from '../components/page-section';

describe('PageSection', () => {
  it('renders the title and children', () => {
    const title = 'Test Title';
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <PageSection title={title}>{children}</PageSection>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
  });
});
