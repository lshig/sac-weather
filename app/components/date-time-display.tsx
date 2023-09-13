'use client';
import moment from 'moment';
import 'moment-timezone';
import { useState, useEffect } from 'react';
import ContentSection from './content-section';
import HeadingsSection from './headings-section';
import VisualSection from './visual-section';
import VisualBox from './visual-box';

export default function DateTimeDisplay() {
  const [dateTimeNow, setDateTimeNow] = useState(
    moment().tz('America/Los_Angeles')
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDateTimeNow(moment().tz('America/Los_Angeles'));
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <ContentSection>
      <VisualSection>
        <VisualBox>
          <div className="flex flex-col items-center justify-center m-auto">
            <div
              className="font-light leading-none tracking-tight text-5xl"
              suppressHydrationWarning
            >
              {dateTimeNow.format('ss')}
            </div>
            <div className="leading-none tracking-tight text-xs font-extralight">
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
