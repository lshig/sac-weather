import moment from 'moment';
import 'moment-timezone';
import HeadingsSection from './headings-section';

export default function DateTimeDisplay() {
  const dateTimeNow = moment().tz('America/Los_Angeles');

  return (
    <div className="max-w-xs md:mx-auto grid grid-cols-2 py-6">
      <div className="pr-3">
        <div
          className="float-right bg-gray-300 dark:bg-gray-700 flex flex-col"
          style={{ width: '100px', height: '100px' }}
        >
          <div className="flex flex-col items-center justify-center m-auto">
            <div className="font-extralight leading-none tracking-tight text-6xl text-white dark:text-black">
              {dateTimeNow.format('ss')}
            </div>
            <div className="leading-none tracking-tight text-small text-white dark:text-black">
              seconds
            </div>
          </div>
        </div>
      </div>
      <HeadingsSection
        top={`${dateTimeNow.format('dddd')} now`}
        middle={dateTimeNow.format('h:mmA')}
        last={dateTimeNow.format('MMMM D (z)')}
      />
    </div>
  );
}
