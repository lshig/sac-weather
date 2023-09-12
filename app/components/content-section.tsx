export default function ContentSection({
  children,
  isDefaultMarginRemovable
}: {
  children: React.ReactNode;
  isDefaultMarginRemovable: boolean;
}) {
  let defaultMargin = isDefaultMarginRemovable ? '' : 'md:mx-0';

  return (
    <div
      className={`max-w-xs mx-auto ${defaultMargin} grid grid-cols-1 md:grid-cols-2 py-6`}
    >
      {children}
    </div>
  );
}
