"use client";

import { useEffect } from "react";

export function ProjectsScrollPad() {
  useEffect(() => {
    const section = document.getElementById("projects");
    const footer = document.querySelector(".page-content footer");
    if (!section) return;

    const apply = () => {
      const viewport = window.innerHeight;
      const box = section.getBoundingClientRect();
      const after = footer ? footer.getBoundingClientRect().bottom - box.bottom : 0;
      const margin = Number.parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
      const pad = Math.min(viewport, Math.max(96, viewport - margin - box.height - after));
      document.documentElement.style.setProperty("--projects-scroll-pad", `${pad}px`);
    };

    apply();
    window.addEventListener("resize", apply);
    const observer = new ResizeObserver(apply);
    observer.observe(section);
    if (footer) observer.observe(footer);

    return () => {
      window.removeEventListener("resize", apply);
      observer.disconnect();
    };
  }, []);

  return null;
}
