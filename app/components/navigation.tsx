export default function Navigation({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="sticky top-4">{children}</div>;
}
