'use client';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../context';

export default function PageSection({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  const theme = useContext(ThemeContext);

  return (
    <section className="py-6 md:py-8 px-6 md:px-0">
      <h1 className="text-3xl font-bold pb-6 text-center">{title}</h1>
      <div
        className={classNames(
          'mx-auto max-w-4xl px-6 py-6 md:px-8 md:py-8 rounded-lg',
          {
            'bg-gray-500': theme === 'dark' || theme === 'kings',
            'bg-gray-300': theme === 'light'
          }
        )}
      >
        {children}
      </div>
    </section>
  );
}
