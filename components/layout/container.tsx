export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-2xl w-full bg-stone-50">{children}</div>
    </div>
  );
}
