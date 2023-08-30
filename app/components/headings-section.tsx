import { ReactNode } from 'react';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';

export default function HeadingsSection({
  top,
  middle,
  bottom
}: {
  top: React.ReactNode;
  middle: React.ReactNode;
  bottom: ReactNode;
}) {
  return (
    <div className="text-black dark:text-white text-center md:text-left">
      <H1>{top}</H1>
      <H2>{middle}</H2>
      <H3>{bottom}</H3>
    </div>
  );
}
