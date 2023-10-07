import {
  processDayNightWeather,
  processHourlyWeather
} from './process-weather';

export async function getDayNightWeather() {
  try {
    const response = await fetch(
      'https://api.weather.gov/gridpoints/STO/38,65/forecast',
      {
        next: { revalidate: 60 }
      }
    );

    let data = (await response.json()) as WeatherResponse;

    return processDayNightWeather(data) as WeatherForecast;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getHourlyWeather() {
  try {
    const response = await fetch(
      'https://api.weather.gov/gridpoints/STO/38,65/forecast/hourly',
      {
        next: { revalidate: 60 }
      }
    );

    let data = (await response.json()) as WeatherResponse;

    return processHourlyWeather(data) as WeatherGraphSeries;
  } catch (error: any) {
    throw new Error(error);
  }
}

export type Weather = {
  icon: string;
  isDaytime: boolean;
  isToday: boolean;
  name: string;
  number: number;
  shortForecast: string;
  startTime: string;
  temperature: number;
  temperatureUnit: string;
  time: string;
};

export type WeatherForecast = Weather[];

export interface WeatherForecastProps {
  listItems: WeatherForecast;
  showOnlyToday: boolean;
}

export type WeatherResponse = {
  properties: {
    periods: WeatherForecast;
  };
};

export type WeatherGraphPoint = {
  x: string;
  y: number;
};

export type WeatherGraphSeries = WeatherGraphPoint[];

export interface WeatherGraphProps {
  chartPoints: WeatherGraphSeries;
}
