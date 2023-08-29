import Image from 'next/image';
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
            className="float-right bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 flex flex-col"
            style={{ width: '100px', height: '100px' }}
          >
            <Image
              className="flex flex-col items-center justify-center m-auto"
              alt="Google Maps icon"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
              width={40}
              height={40}
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
