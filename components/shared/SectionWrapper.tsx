interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section className={`py-12 md:py-16 px-4 md:px-12 ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        {children}
      </div>
    </section>
  );
}
