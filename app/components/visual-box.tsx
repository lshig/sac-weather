import classNames from 'classnames';

export default function VisualBox({
  children,
  isHoverable
}: {
  children: React.ReactNode;
  isHoverable?: boolean;
}) {
  return (
    <div
      className={classNames(
        'md:float-right bg-gray-500 dark:bg-gray-700 rounded-lg flex flex-col text-gray-300 dark:text-gray-950',
        {
          'hover:bg-gray-400 dark:hover:bg-gray-600': isHoverable
        }
      )}
      style={{ width: '100px', height: '100px' }}
    >
      {children}
    </div>
  );
}
