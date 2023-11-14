import React from 'react';
import { customRender } from './custom-render';
import PageSection from '../components/page-section';

describe('PageSection', () => {
  let themeProviderProps = 'kings';

  it('renders the title, children, and correct kings theme class', () => {
    const title = 'Test Title';
    const children = 'Test Children';
    const { getByText } = customRender(
      <PageSection title={title}>{children}</PageSection>,
      themeProviderProps
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
    expect(getByText('Test Children')).toHaveClass('bg-gray-500');
  });

  it('renders the title, children, and correct dark theme class', () => {
    themeProviderProps = 'dark';
    const title = 'Test Title';
    const children = 'Test Children';
    const { getByText } = customRender(
      <PageSection title={title}>{children}</PageSection>,
      themeProviderProps
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
    expect(getByText('Test Children')).toHaveClass('bg-gray-500');
  });

  it('renders the title, children, and correct light theme class', () => {
    themeProviderProps = 'light';
    const title = 'Test Title';
    const children = 'Test Children';
    const { getByText } = customRender(
      <PageSection title={title}>{children}</PageSection>,
      themeProviderProps
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
    expect(getByText('Test Children')).toHaveClass('bg-gray-300');
  });
});
