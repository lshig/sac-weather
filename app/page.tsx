import type { Metadata } from 'next';
import { getDayNightWeather, getHourlyWeather } from './utils/get-weather';
import {
  processDayNightTodayWeather,
  processDayNightForecastWeather
} from './utils/process-weather';
import PageSection from './components/page-section';
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
  const dayNightTodayWeather = processDayNightTodayWeather(dayNightWeather);
  const dayNightForecastWeather =
    processDayNightForecastWeather(dayNightWeather);

  return (
    <div className="pt-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl gap-x-8">
        <PageSection title="Location">
          <LocationDisplay />
        </PageSection>
        <PageSection title="Time & Date">
          <DateTimeDisplay />
        </PageSection>
      </div>
      <PageSection title="Weather Today">
        <WeatherDayNightList
          listItems={dayNightTodayWeather}
          showOnlyToday={true}
        />
      </PageSection>
      <PageSection title="Weather Forecast">
        <WeatherDayNightList
          listItems={dayNightForecastWeather}
          showOnlyToday={false}
        />
      </PageSection>
      <PageSection title="Hourly Weather Forecast">
        <WeatherHourlyChart chartPoints={hourlyWeather} />
      </PageSection>
    </div>
  );
}
