type RevealSectionProps = {
  index: number;
  children: React.ReactNode;
  className?: string;
};

export function RevealSection({ index, children, className = "" }: RevealSectionProps) {
  return (
    <div
      className={`reveal-section ${className}`.trim()}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {children}
    </div>
  );
}
