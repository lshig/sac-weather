import { getDayNightWeather, getHourlyWeather } from './utils/get-weather';
import WeatherSection from './components/weather-section';
import WeatherDayNightList from './components/weather-day-night-list';
import WeatherHourlyChart from './components/weather-hourly-chart';
import DateTimeDisplay from './components/date-time-display';

export default async function Page() {
  const dayNightWeather = await getDayNightWeather();
  const hourlyWeather = await getHourlyWeather();

  return (
    <div>
      <WeatherSection title="Time & Date">
        <DateTimeDisplay />
      </WeatherSection>
      <WeatherSection title="Today">
        <WeatherDayNightList listItems={dayNightWeather} showOnlyToday={true} />
      </WeatherSection>
      <WeatherSection title="Extended Days & Nights">
        <WeatherDayNightList
          listItems={dayNightWeather}
          showOnlyToday={false}
        />
      </WeatherSection>
      <WeatherSection title="Hourly">
        <WeatherHourlyChart chartPoints={hourlyWeather} />
      </WeatherSection>
    </div>
  );
}
