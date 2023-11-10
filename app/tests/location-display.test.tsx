import { render, screen } from '@testing-library/react';
import LocationDisplay from '../components/location-display';

describe('LocationDisplay', () => {
  test('renders the city name', () => {
    render(<LocationDisplay />);
    const cityName = screen.getByText(/Sacramento, CA/i);
    expect(cityName).toBeInTheDocument();
  });

  test('renders the zip code', () => {
    render(<LocationDisplay />);
    const zipCode = screen.getByText(/95814/i);
    expect(zipCode).toBeInTheDocument();
  });

  test('renders the latitude and longitude', () => {
    render(<LocationDisplay />);
    const latitude = screen.getByText(/38.5816° N/i);
    const longitude = screen.getByText(/121.4944° W/i);
    expect(latitude).toBeInTheDocument();
    expect(longitude).toBeInTheDocument();
  });

  test('renders a link to Google Maps', () => {
    render(<LocationDisplay />);
    const link = screen.getByRole('link', {
      name: /View Sacramento, CA on Google Maps/i
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://www.google.com/maps/place/Sacramento,+CA/'
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
