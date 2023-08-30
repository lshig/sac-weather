import type { Metadata } from 'next';
import { getDayNightWeather, getHourlyWeather } from './utils/get-weather';
import Section from './components/section';
import LocationDisplay from './components/location-display';
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
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl gap-x-8 mt-8">
        <Section title="Location">
          <LocationDisplay />
        </Section>
        <Section title="Time & Date">
          <DateTimeDisplay />
        </Section>
      </div>
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
