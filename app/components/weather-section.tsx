export default function WeatherSection({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="py-6 md:py-8 px-6 md:px-8">
      <h1 className="text-3xl font-bold pb-6 text-center">{title}</h1>
      {children}
    </section>
  );
}
