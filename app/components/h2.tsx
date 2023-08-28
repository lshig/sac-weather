export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
      {children}
    </h2>
  );
}
