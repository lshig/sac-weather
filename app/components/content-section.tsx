import classNames from 'classnames';

export default function ContentSection({
  children,
  isDefaultMarginRemovable
}: {
  children: React.ReactNode;
  isDefaultMarginRemovable: boolean;
}) {
  return (
    <div
      className={classNames(
        'max-w-xs mx-auto grid grid-cols-1 md:grid-cols-2 py-6',
        {
          'md:mx-0': !isDefaultMarginRemovable
        }
      )}
    >
      {children}
    </div>
  );
}
