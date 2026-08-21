export function parseNumeral(value: string): {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
} | null {
  const match = value.match(/^(~?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const numeric = Number.parseFloat(match[2].replace(/,/g, ""));
  if (Number.isNaN(numeric)) return null;

  const decimals = match[2].includes(".") ? (match[2].split(".")[1]?.length ?? 0) : 0;

  return {
    prefix: match[1],
    target: numeric,
    suffix: match[3],
    decimals,
  };
}
