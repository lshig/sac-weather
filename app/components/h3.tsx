export default function H3({
  children,
  isDateTime
}: {
  children: React.ReactNode;
  isDateTime?: boolean;
}) {
  return (
    <h3 className="text-xs italic leading-tight uppressHydrationWarning={isDateTime}">
      {children}
    </h3>
  );
}
