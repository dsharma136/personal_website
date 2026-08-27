import { ArrowRight } from "lucide-react";
import { SectionReadout } from "@/components/SectionReadout";
import { mainSection, projects } from "@/lib/content";
import { displayPeriod, isLinkReady, resolveStack } from "@/lib/format";

const projectsMeta = mainSection("projects");

export function ProjectsSection() {
  return (
    <section id={projectsMeta.id} aria-labelledby="projects-heading">
      <SectionReadout
        headingId="projects-heading"
        index={projectsMeta.index}
        label={projectsMeta.label}
      />
      {projects.map((project) => {
        const periodLabel = displayPeriod(project.period);
        const stack = resolveStack(project.stack, project.name);
        const href = isLinkReady(project.href) ? project.href : undefined;

        return (
          <div key={project.name} className="group pb-4 last:pb-0">
            <div className="grid grid-cols-[72px_minmax(0,1fr)] items-baseline gap-x-4">
              {periodLabel && <span className="type-metric">{periodLabel}</span>}
              <span className={`type-body ${periodLabel ? "" : "col-span-2"}`}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[6px] group-hover:text-signal"
                  >
                    {project.name}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden
                      className="shrink-0 transition-transform duration-150 group-hover:translate-x-[2px]"
                    />
                  </a>
                ) : (
                  <span className="group-hover:text-signal">{project.name}</span>
                )}
              </span>
              {periodLabel && <div aria-hidden="true" />}
              <p className={`type-small text-muted ${periodLabel ? "" : "col-span-2"}`}>
                {project.blurb}
              </p>
            </div>

            {stack.length > 0 && (
              <div className="grid grid-cols-[72px_1fr] gap-x-4 pt-2">
                <div aria-hidden="true" />
                <p className="type-small font-mono">
                  {stack.join(", ")}
                </p>
              </div>
            )}

            <div className="mt-2 border-b border-hairline" />
          </div>
        );
      })}
    </section>
  );
}
