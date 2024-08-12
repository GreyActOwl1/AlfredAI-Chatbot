
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="bg-white dark:bg-black w-full min-h-screen">
        {children}
      </div>

  );
}

