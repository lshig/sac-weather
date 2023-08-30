export default function VisualBox({
  children,
  isHoverable
}: {
  children: React.ReactNode;
  isHoverable?: boolean;
}) {
  const hoverBackgroundColor = isHoverable
    ? 'hover:bg-gray-400 dark:hover:bg-gray-800'
    : '';
  return (
    <div
      className={`md:float-right bg-gray-300 dark:bg-gray-700 ${hoverBackgroundColor} rounded-lg flex flex-col text-white dark:text-black}`}
      style={{ width: '100px', height: '100px' }}
    >
      {children}
    </div>
  );
}
