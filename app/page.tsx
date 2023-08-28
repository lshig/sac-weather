import type { Metadata } from 'next';
import { getDayNightWeather, getHourlyWeather } from './utils/get-weather';
import Section from './components/section';
import H1 from './components/h1';
import H2 from './components/h2';
import H3 from './components/h3';
import WeatherDayNightList from './components/weather-day-night-list';
import WeatherHourlyChart from './components/weather-hourly-chart';
import DateTimeDisplay from './components/date-time-display';

export const metadata: Metadata = {
  title: 'Weather Forecast for Sacramento, CA',
  description: 'A Next.js app with the NWS weather API'
};

export default async function Page() {
  const dayNightWeather = await getDayNightWeather();
  const hourlyWeather = await getHourlyWeather();

  return (
    <div>
      <Section title="Location">
        <H1>Sacramento, CA</H1>
        <H2>95814</H2>
        <H3>38.5816&deg; N, 121.4944&deg; W</H3>
      </Section>
      <Section title="Time & Date">
        <DateTimeDisplay />
      </Section>
      <Section title="Today">
        <WeatherDayNightList listItems={dayNightWeather} showOnlyToday={true} />
      </Section>
      <Section title="Extended Days & Nights">
        <WeatherDayNightList
          listItems={dayNightWeather}
          showOnlyToday={false}
        />
      </Section>
      <Section title="Hourly">
        <WeatherHourlyChart chartPoints={hourlyWeather} />
      </Section>
    </div>
  );
}
