import { BsMap } from 'react-icons/bs';
import ContentSection from './content-section';
import HeadingsSection from './headings-section';
import VisualSection from './visual-section';
import VisualBox from './visual-box';

export default function LocationDisplay() {
  return (
    <ContentSection>
      <VisualSection>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Sacramento,+CA/"
          rel="noopener noreferrer"
        >
          <VisualBox isHoverable={true}>
            <BsMap
              className="flex flex-col items-center justify-center m-auto"
              style={{ width: '50px', height: '50px' }}
            />
          </VisualBox>
        </a>
      </VisualSection>
      <HeadingsSection
        top="Sacramento, CA"
        middle="95814"
        bottom={`38.5816${'\u00b0'} N, 121.4944${'\u00b0'} W`}
      />
    </ContentSection>
  );
}
