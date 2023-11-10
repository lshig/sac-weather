import { ReactNode } from 'react';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';

export default function HeadingsSection({
  top,
  middle,
  bottom,
  isDateTime
}: {
  top: React.ReactNode;
  middle: React.ReactNode;
  bottom: ReactNode;
  isDateTime?: boolean;
}) {
  return (
    <div className="text-gray-950 dark:text-gray-200 text-center md:text-left">
      <H1 isDateTime={isDateTime}>{top}</H1>
      <H2 isDateTime={isDateTime}>{middle}</H2>
      <H3 isDateTime={isDateTime}>{bottom}</H3>
    </div>
  );
}
