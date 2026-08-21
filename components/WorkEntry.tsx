"use client";

import { useId, useState } from "react";
import { WorkMetrics } from "@/components/WorkMetrics";
import { displayPeriod } from "@/lib/format";

type WorkEntryProps = {
  org: string;
  title: string;
  period: string;
  detail: string[];
  metrics: Array<{ value: string; label: string }>;
  hintChevron?: boolean;
};

export function WorkEntry({
  org,
  title,
  period,
  detail,
  metrics,
  hintChevron = false,
}: WorkEntryProps) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const periodLabel = displayPeriod(period);

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={detailsId}
      aria-label={`${org} · ${title}`}
      onClick={() => setOpen((prev) => !prev)}
      className={`work-entry ${open ? "is-open" : ""}`}
    >
      <div className="work-row">
        {periodLabel && (
          <span
            className={`work-row-year type-metric ${open ? "text-signal" : ""}`}
          >
            {periodLabel}
          </span>
        )}

        <span className="work-row-role type-body">{org} · {title}</span>

        <WorkMetrics metrics={metrics} />

        <span
          className={`work-chevron-slot ${hintChevron ? "work-chevron-hint" : ""}`}
          aria-hidden="true"
        >
          <span className="work-chevron">▸</span>
        </span>
      </div>

      <div className="mt-2 border-b border-hairline" />

      <div className="work-detail-panel">
        <div>
          <div
            id={detailsId}
            aria-hidden={!open}
            className="work-detail-body grid grid-cols-[80px_1fr] gap-x-2.5 pt-3"
          >
            <div aria-hidden="true" />
            <ul className="list-none space-y-2">
              {detail.map((item) => (
                <li key={item} className="work-detail-text type-small">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </button>
  );
}
