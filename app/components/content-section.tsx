export default function ContentSection({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-xs mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-2 py-6">
      {children}
    </div>
  );
}
