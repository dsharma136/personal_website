"use client";

import { useEffect, useState } from "react";
import { labels } from "@/lib/content";

const SECTIONS = [
  { id: "now", label: labels.now },
  { id: "work", label: labels.work },
  { id: "projects", label: labels.projects },
] as const;

export function SectionNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (elements.length === 0) return;

    const update = () => {
      const viewport = window.innerHeight;
      const lastId = SECTIONS[SECTIONS.length - 1].id;

      if (window.scrollY <= 8) {
        setActive(SECTIONS[0].id);
        return;
      }

      if (window.scrollY + viewport >= document.documentElement.scrollHeight - 8) {
        setActive(lastId);
        return;
      }

      let next = SECTIONS[0].id;
      let best = 0;
      for (const section of SECTIONS) {
        const node = document.getElementById(section.id);
        if (!node) continue;
        const rect = node.getBoundingClientRect();
        const visible = Math.min(rect.bottom, viewport) - Math.max(rect.top, 0);
        if (visible > best) {
          best = visible;
          next = section.id;
        }
      }
      setActive(next);
    };

    const observer = new IntersectionObserver(update, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    for (const element of elements) observer.observe(element);
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="section-nav type-small font-mono">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? "location" : undefined}
        >
          <span className="section-nav-tick" aria-hidden="true" />
          {section.label}
        </a>
      ))}
    </nav>
  );
}
