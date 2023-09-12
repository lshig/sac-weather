import { Weather, WeatherForecastProps } from '../utils/get-weather';
import Image from 'next/image';
import ContentSection from './content-section';
import HeadingsSection from './headings-section';
import VisualSection from './visual-section';

export default function WeatherDayNightList({
  listItems,
  showOnlyToday
}: WeatherForecastProps) {
  const isCustomLayoutRequired = showOnlyToday && listItems.length === 1;
  const WeatherDayNightListItems = listItems.map((item) => {
    return (
      <ContentSection
        key={item.number}
        isDefaultMarginRemovable={isCustomLayoutRequired}
      >
        <VisualSection>
          <Image
            className="md:float-right rounded-lg"
            src={item.icon}
            alt={item.shortForecast}
            width={100}
            height={100}
          />
        </VisualSection>
        <HeadingsSection
          top={item.name}
          middle={`${item.temperature}${'\u00b0'}${item.temperatureUnit}`}
          bottom={item.shortForecast}
        />
      </ContentSection>
    );
  });
  const isTonight = isCustomLayoutRequired
    ? ''
    : 'grid grid-cols-1 md:grid-cols-2';

  return <div className={isTonight}>{WeatherDayNightListItems}</div>;
}
