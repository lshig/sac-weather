import { render, screen } from '@testing-library/react';
import WeatherDayNightList from '../components/weather-day-night-list';

describe('WeatherDayNightList', () => {
  it('renders the correct number of list items', () => {
    const forecastListItems = [
      {
        number: 2,
        name: 'Friday',
        startTime: '2023-11-10T06:00:00-08:00',
        isDaytime: true,
        temperature: 66,
        temperatureUnit: 'F',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        isToday: false,
        time: '11/10 6am'
      },
      {
        number: 3,
        name: 'Friday Night',
        startTime: '2023-11-10T18:00:00-08:00',
        isDaytime: false,
        temperature: 43,
        temperatureUnit: 'F',
        icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
        shortForecast: 'Mostly Clear',
        isToday: false,
        time: '11/10 6pm'
      }
    ];
    const { container } = render(
      <WeatherDayNightList
        listItems={forecastListItems}
        showOnlyToday={false}
      />
    );
    expect(container.firstChild).toHaveClass('grid grid-cols-1 md:grid-cols-2');
    const content = screen.getAllByTestId('content-section');
    expect(content).toHaveLength(2);
  });

  it('renders only two list items when showOnlyToday is true', () => {
    const todayListItems = [
      {
        number: 1,
        name: 'Today',
        startTime: '2023-11-09T06:00:00-08:00',
        isDaytime: true,
        temperature: 65,
        temperatureUnit: 'F',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        isToday: true,
        time: '11/9 6am'
      },
      {
        number: 2,
        name: 'Tonight',
        startTime: '2023-11-09T18:00:00-08:00',
        isDaytime: false,
        temperature: 42,
        temperatureUnit: 'F',
        icon: 'https://api.weather.gov/icons/land/night/bkn?size=medium',
        shortForecast: 'Mostly Cloudy',
        isToday: true,
        time: '11/9 8pm'
      }
    ];
    const { container } = render(
      <WeatherDayNightList listItems={todayListItems} showOnlyToday={true} />
    );
    expect(container.firstChild).toHaveClass('grid grid-cols-1 md:grid-cols-2');
    const content = screen.getAllByTestId('content-section');
    expect(content).toHaveLength(2);
  });

  it('renders only one list item when showOnlyToday is true', () => {
    const tonightListItems = [
      {
        number: 1,
        name: 'Tonight',
        startTime: '2023-11-09T20:00:00-08:00',
        isDaytime: false,
        temperature: 42,
        temperatureUnit: 'F',
        icon: 'https://api.weather.gov/icons/land/night/bkn?size=medium',
        shortForecast: 'Mostly Cloudy',
        isToday: true,
        time: '11/9 8pm'
      }
    ];
    const { container } = render(
      <WeatherDayNightList listItems={tonightListItems} showOnlyToday={true} />
    );
    expect(container.firstChild).not.toHaveClass(
      'grid grid-cols-1 md:grid-cols-2'
    );
    const content = screen.getAllByTestId('content-section');
    expect(content).toHaveLength(1);
  });
});
