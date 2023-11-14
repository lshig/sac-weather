'use client';
import classNames from 'classnames';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../context';
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
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames('text-center md:text-left', {
        'text-gray-200': theme === 'dark',
        'text-gray-950': theme === 'light' || theme === 'kings'
      })}
    >
      <H1 isDateTime={isDateTime}>{top}</H1>
      <H2 isDateTime={isDateTime}>{middle}</H2>
      <H3 isDateTime={isDateTime}>{bottom}</H3>
    </div>
  );
}
