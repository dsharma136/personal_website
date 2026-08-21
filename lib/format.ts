export function resolveField(value: string, field: string): string | null {
  if (!value || value.startsWith("TODO")) {
    console.warn(`[content] Missing ${field}: ${value}`);
    return null;
  }
  return value;
}

/** Single year → "2026". Spans two calendar years → "2025–26". */
export function displayPeriod(period: string): string | null {
  if (period.startsWith("TODO")) {
    console.warn(`[content] Missing period: ${period}`);
    return null;
  }

  const years = period.match(/\d{4}/g);
  if (!years?.length) {
    console.warn(`[content] Unparseable period: ${period}`);
    return null;
  }

  if (years.length === 1) return years[0];

  const start = years[0];
  const end = years[years.length - 1];
  if (start === end) return start;

  return `${start}\u2013${end.slice(2)}`;
}

export function resolveStack(stack: string[], projectName: string): string[] {
  return stack.filter((item) => {
    if (item.startsWith("TODO")) {
      console.warn(`[content] Missing stack item for ${projectName}: ${item}`);
      return false;
    }
    return true;
  });
}

export function isLinkReady(href: string | undefined): href is string {
  if (href?.startsWith("TODO")) {
    console.warn(`[content] Missing href: ${href}`);
    return false;
  }
  return Boolean(href);
}
