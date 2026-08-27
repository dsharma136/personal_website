type SectionReadoutProps = {
  headingId: string;
  index: string;
  label: string;
};

export function SectionReadout({ headingId, index, label }: SectionReadoutProps) {
  return (
    <h2 id={headingId} className="section-label type-h2 mb-[var(--section-label-gap)]">
      <span>
        <span className="section-readout-index">{index}</span>
        {" / "}
        {label}
      </span>
    </h2>
  );
}
