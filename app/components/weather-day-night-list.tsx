import { Weather, WeatherForecastProps } from '../utils/get-weather';
import Image from 'next/image';

export default function WeatherDayNightList({
  listItems,
  showOnlyToday
}: WeatherForecastProps) {
  const WeatherDayNightListItems = listItems.reduce<React.ReactElement[]>(
    (result, item: Weather) => {
      if (item.isToday === showOnlyToday) {
        result.push(
          <div
            className="max-w-xs md:mx-auto grid grid-cols-2 py-6"
            key={item.number}
          >
            <div className="pr-3">
              <Image
                className="float-right"
                src={item.icon}
                alt={item.shortForecast}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-base font-semibold uppercase">{item.name}</h1>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {item.temperature}&deg;{item.temperatureUnit}
              </h2>
              <p className="txt-base capitalize">{item.shortForecast}</p>
            </div>
          </div>
        );
      }

      return result;
    },
    []
  );

  const isTonight =
    showOnlyToday && WeatherDayNightListItems.length === 1
      ? ''
      : 'grid grid-cols-1 md:grid-cols-2';

  return (
    <div className="mx-auto max-w-4xl px-6 py-6 md:px-8 md:py-8 bg-gray-200">
      <div className={isTonight}>{WeatherDayNightListItems}</div>
    </div>
  );
}
