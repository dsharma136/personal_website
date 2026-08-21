type SectionProps = React.ComponentProps<"section">;

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section
      className={`py-[var(--section-y)] ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
