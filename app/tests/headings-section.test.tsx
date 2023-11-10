import { render } from '@testing-library/react';
import HeadingsSection from '../components/headings-section';

describe('HeadingsSection', () => {
  it('renders the top, middle, and bottom headings', () => {
    const top = 'Top Heading';
    const middle = 'Middle Heading';
    const bottom = 'Bottom Heading';
    const { getByText } = render(
      <HeadingsSection top={top} middle={middle} bottom={bottom} />
    );
    expect(getByText(top)).toBeInTheDocument();
    expect(getByText(middle)).toBeInTheDocument();
    expect(getByText(bottom)).toBeInTheDocument();
  });
});
