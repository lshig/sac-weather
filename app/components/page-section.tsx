export default function PageSection({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="py-6 md:py-8 px-6 md:px-0">
      <h1 className="text-3xl font-bold pb-6 text-center">{title}</h1>
      <div className="mx-auto max-w-4xl px-6 py-6 md:px-8 md:py-8 bg-gray-200 dark:bg-gray-500 rounded-lg">
        {children}
      </div>
    </section>
  );
}
