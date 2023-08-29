export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
      {children}
    </h2>
  );
}
