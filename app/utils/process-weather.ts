import moment from 'moment';
import {
  WeatherForecast,
  WeatherGraphSeries,
  WeatherResponse
} from './get-weather';

export function processTime(timestamp: string) {
  return moment(timestamp).format('M/D ha');
}

export function isTimeToday(timestamp: string) {
  return moment(timestamp).isSame(new Date(), 'day');
}

export function processDayNightWeather(rawWeather: WeatherResponse) {
  let rawWeatherPeriods = rawWeather.properties.periods;
  let processedWeather = [];

  for (let i = 0; i < rawWeatherPeriods.length; i++) {
    processedWeather.push(rawWeatherPeriods[i]);
    processedWeather[i].isToday = isTimeToday(rawWeatherPeriods[i].startTime);
    processedWeather[i].time = processTime(rawWeatherPeriods[i].startTime);
  }
  return processedWeather as WeatherForecast;
}

export function processHourlyWeather(rawWeather: WeatherResponse) {
  let rawWeatherPeriods = rawWeather.properties.periods;
  let processedWeather = [];

  for (let i = 0; i < rawWeatherPeriods.length; i++) {
    let graphPoint = {
      x: '',
      y: 0
    };
    graphPoint.x = rawWeatherPeriods[i].startTime;
    graphPoint.y = rawWeatherPeriods[i].temperature;
    processedWeather.push(graphPoint);
  }

  return processedWeather as WeatherGraphSeries;
}
