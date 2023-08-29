import { ReactNode } from 'react';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';

export default function HeadingsSection({
  top,
  middle,
  last
}: {
  top: React.ReactNode;
  middle: React.ReactNode;
  last: ReactNode;
}) {
  return (
    <div className="text-black dark:text-white">
      <H1>{top}</H1>
      <H2>{middle}</H2>
      <H3>{last}</H3>
    </div>
  );
}
