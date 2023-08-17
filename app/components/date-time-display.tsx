import moment from 'moment';
import 'moment-timezone';

export default function DateTimeDisplay() {
  const dateTimeNow = moment().tz('America/Los_Angeles');

  return (
    <div className="mx-auto max-w-4xl px-6 py-6 md:px-8 md:py-8 bg-gray-200">
      <div className="max-w-xs md:mx-auto grid grid-cols-2 py-6">
        <div className="pr-3">
          <div
            className="float-right bg-gray-300 flex flex-col"
            style={{ width: '100px', height: '100px' }}
          >
            <div className="flex flex-col items-center justify-center m-auto">
              <div className="font-extralight leading-none tracking-tight text-6xl text-white">
                {dateTimeNow.format('ss')}
              </div>
              <div className="leading-none tracking-tight text-small text-white">
                seconds
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-base font-semibold uppercase">{`${dateTimeNow.format(
            'dddd'
          )} now`}</h1>
          <h2 className="font-bold tracking-tight text-3xl sm:text-5xl">
            {dateTimeNow.format('h:mmA')}
          </h2>
          <p className="txt-base capitalize">
            {dateTimeNow.format('MMMM D (z)')}
          </p>
        </div>
      </div>
    </div>
  );
}
