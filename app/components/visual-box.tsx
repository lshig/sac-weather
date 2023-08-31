export default function VisualBox({
  children,
  isHoverable
}: {
  children: React.ReactNode;
  isHoverable?: boolean;
}) {
  const hoverBackgroundColor = isHoverable
    ? 'hover:bg-gray-400 dark:hover:bg-gray-600'
    : '';
  return (
    <div
      className={`md:float-right bg-gray-500 dark:bg-gray-700 ${hoverBackgroundColor} rounded-lg flex flex-col text-gray-300 dark:text-gray-950`}
      style={{ width: '100px', height: '100px' }}
    >
      {children}
    </div>
  );
}
