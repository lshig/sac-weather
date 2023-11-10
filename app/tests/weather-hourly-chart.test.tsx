import { render, screen } from '@testing-library/react';
import WeatherHourlyChart from '../components/weather-hourly-chart';

describe('WeatherHourlyChart', () => {
  it('renders a chart', () => {
    const chartPoints = [
      { x: '2023-11-10T10:00:00-08:00', y: 54 },
      { x: '2023-11-10T11:00:00-08:00', y: 58 },
      { x: '2023-11-10T12:00:00-08:00', y: 61 },
      { x: '2023-11-10T13:00:00-08:00', y: 64 },
      { x: '2023-11-10T14:00:00-08:00', y: 65 },
      { x: '2023-11-10T15:00:00-08:00', y: 65 }
    ];
    render(<WeatherHourlyChart chartPoints={chartPoints} />);
    expect(screen.getByText('mock-line-chart')).toBeInTheDocument();
  });
});
