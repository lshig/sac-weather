import { Weather, WeatherForecastProps } from '../utils/get-weather';
import Image from 'next/image';
import HeadingsSection from './headings-section';

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
            <HeadingsSection
              top={item.name}
              middle={`${item.temperature}${'\u00b0'}${item.temperatureUnit}`}
              last={item.shortForecast}
            />
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

  return <div className={isTonight}>{WeatherDayNightListItems}</div>;
}
