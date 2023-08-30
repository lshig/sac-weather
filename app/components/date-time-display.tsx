import moment from 'moment';
import 'moment-timezone';
import ContentSection from './content-section';
import HeadingsSection from './headings-section';
import VisualSection from './visual-section';
import VisualBox from './visual-box';

export default function DateTimeDisplay() {
  const dateTimeNow = moment().tz('America/Los_Angeles');

  return (
    <ContentSection>
      <VisualSection>
        <VisualBox>
          <div className="flex flex-col items-center justify-center m-auto">
            <div className="font-extralight leading-none tracking-tight text-6xl text-white dark:text-black">
              {dateTimeNow.format('ss')}
            </div>
            <div className="leading-none tracking-tight text-small text-white dark:text-black">
              seconds
            </div>
          </div>
        </VisualBox>
      </VisualSection>
      <HeadingsSection
        top={`${dateTimeNow.format('dddd')} now`}
        middle={dateTimeNow.format('h:mmA')}
        bottom={dateTimeNow.format('MMMM D (z)')}
      />
    </ContentSection>
  );
}
