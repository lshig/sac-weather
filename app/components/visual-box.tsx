'use client';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../context';

export default function VisualBox({
  children,
  isHoverable
}: {
  children: React.ReactNode;
  isHoverable?: boolean;
}) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames('md:float-right rounded-lg flex flex-col', {
        'text-gray-950 bg-gray-700': !isHoverable && theme === 'dark',
        'text-gray-950 bg-gray-700 hover:bg-gray-600':
          isHoverable && theme === 'dark',
        'text-gray-300 bg-gray-950': !isHoverable && theme === 'kings',
        'text-gray-300 bg-gray-950 hover:bg-gray-600':
          isHoverable && theme === 'kings',
        'text-gray-300 bg-gray-500': !isHoverable && theme === 'light',
        'text-gray-300 bg-gray-500 hover:bg-gray-400':
          isHoverable && theme === 'light'
      })}
      style={{ width: '100px', height: '100px' }}
    >
      {children}
    </div>
  );
}
