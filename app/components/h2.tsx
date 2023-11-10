export default function H2({
  children,
  isDateTime
}: {
  children: React.ReactNode;
  isDateTime?: boolean;
}) {
  return (
    <h2
      className="text-3xl sm:text-4xl font-bold tracking-tight"
      suppressHydrationWarning={isDateTime}
    >
      {children}
    </h2>
  );
}
