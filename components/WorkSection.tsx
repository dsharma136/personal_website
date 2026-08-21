import { labels, work } from "@/lib/content";
import { WorkEntry } from "@/components/WorkEntry";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <h2 id="work-heading" className="sr-only">
        {labels.work}
      </h2>
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
