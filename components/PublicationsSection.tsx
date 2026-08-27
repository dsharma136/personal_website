import { ArrowRight } from "lucide-react";
import { SectionReadout } from "@/components/SectionReadout";
import { SectionScrollPad } from "@/components/ProjectsScrollPad";
import { mainSection, profile, publications } from "@/lib/content";
import { displayPeriod, isLinkReady } from "@/lib/format";

const publicationsMeta = mainSection("publications");

export function PublicationsSection() {
  return (
    <section id={publicationsMeta.id} aria-labelledby="publications-heading">
      <SectionReadout
        headingId="publications-heading"
        index={publicationsMeta.index}
        label={publicationsMeta.label}
      />
      {publications.map((paper) => {
        const periodLabel = displayPeriod(paper.year);
        const href = isLinkReady(paper.href) ? paper.href : undefined;

        return (
          <div key={paper.title} className="group pb-4 last:pb-0">
            <div className="grid grid-cols-[72px_minmax(0,1fr)] items-baseline gap-x-4">
              {periodLabel && <span className="type-metric">{periodLabel}</span>}
              <span className={`type-body min-w-0 ${periodLabel ? "" : "col-span-2"}`}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-signal"
                  >
                    {paper.title}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden
                      className="ml-[6px] mb-px inline shrink-0 transition-transform duration-150 group-hover:translate-x-[2px]"
                    />
                  </a>
                ) : (
                  <span className="group-hover:text-signal">{paper.title}</span>
                )}
              </span>
              {periodLabel && <div aria-hidden="true" />}
              <p className={`type-small font-mono ${periodLabel ? "" : "col-span-2"}`}>
                {paper.authors.map((author, index) => (
                  <span key={`${paper.title}-${author}-${index}`}>
                    {index > 0 && ", "}
                    {author === profile.name ? (
                      <strong className="font-medium text-ink">{author}</strong>
                    ) : (
                      author
                    )}
                  </span>
                ))}
              </p>
              {periodLabel && <div aria-hidden="true" />}
              <p className={`type-small font-mono ${periodLabel ? "" : "col-span-2"}`}>
                {paper.venue}, {paper.year}
              </p>
            </div>
            <div className="mt-2 border-b border-hairline" />
          </div>
        );
      })}
      <SectionScrollPad sectionId={publicationsMeta.id} />
    </section>
  );
}
