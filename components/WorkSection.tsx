import { SectionReadout } from "@/components/SectionReadout";
import { WorkEntry } from "@/components/WorkEntry";
import { mainSection, work } from "@/lib/content";

const workMeta = mainSection("work");

export function WorkSection() {
  return (
    <section id={workMeta.id} aria-labelledby="work-heading">
      <SectionReadout
        headingId="work-heading"
        index={workMeta.index}
        label={workMeta.label}
      />
      {work.map((entry, index) => (
        <WorkEntry
          key={`${entry.org}-${entry.period}`}
          org={entry.org}
          title={entry.title}
          period={entry.period}
          detail={entry.detail}
          metrics={entry.metrics}
          hintChevron={index === 0}
        />
      ))}
    </section>
  );
}
