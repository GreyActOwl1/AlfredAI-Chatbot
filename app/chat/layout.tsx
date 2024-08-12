
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <div className="w-full h-full bg-white dark:bg-black">
        {children}
      </div>
    
  );
}

