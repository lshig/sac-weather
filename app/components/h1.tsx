export default function H1({
  children,
  isDateTime
}: {
  children: React.ReactNode;
  isDateTime?: boolean;
}) {
  return (
    <h1
      className="text-base font-semibold uppercase"
      suppressHydrationWarning={isDateTime}
    >
      {children}
    </h1>
  );
}
