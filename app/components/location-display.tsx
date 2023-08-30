import { BsMap } from 'react-icons/bs';
import HeadingsSection from './headings-section';

export default function LocationDisplay() {
  return (
    <div className="max-w-xs md:mx-auto grid grid-cols-2 py-6">
      <div className="pr-3">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Sacramento,+CA/"
          rel="noopener noreferrer"
        >
          <div
            className="float-right bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-lg text-white dark:text-black flex flex-col"
            style={{ width: '100px', height: '100px' }}
          >
            <BsMap
              className="flex flex-col items-center justify-center m-auto"
              style={{ width: '50px', height: '50px' }}
            />
          </div>
        </a>
      </div>
      <HeadingsSection
        top="Sacramento, CA"
        middle="95814"
        last={`38.5816${'\u00b0'} N, 121.4944${'\u00b0'} W`}
      />
    </div>
  );
}
