import { labels, now } from "@/lib/content";

export function NowSection() {
  return (
    <section id="now" aria-labelledby="now-heading">
      <h2 id="now-heading" className="section-label type-h2 mb-[var(--section-label-gap)]">
        {labels.now}
      </h2>
      <ul className="now-list type-body">
        {now.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
