import { render, screen } from '@testing-library/react';
import moment from 'moment-timezone';
import DateTimeDisplay from '../components/date-time-display';

describe('DateTimeDisplay', () => {
  test('renders the current day of the week', () => {
    const now = moment().tz('America/Los_Angeles');
    const dayOfWeek = now.format('dddd');
    render(<DateTimeDisplay />);
    const dayOfWeekElement = screen.getByText(dayOfWeek + ' now');
    expect(dayOfWeekElement).toBeInTheDocument();
  });

  test('renders the current time in hours and minutes', () => {
    const now = moment().tz('America/Los_Angeles');
    const time = now.format('h:mmA');
    render(<DateTimeDisplay />);
    const timeElement = screen.getByText(time);
    expect(timeElement).toBeInTheDocument();
  });

  test('renders the current date and timezone', () => {
    const now = moment().tz('America/Los_Angeles');
    const date = now.format('MMMM D (z)');
    render(<DateTimeDisplay />);
    const dateElement = screen.getByText(date);
    expect(dateElement).toBeInTheDocument();
  });
});
