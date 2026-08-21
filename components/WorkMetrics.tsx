import { CountUp } from "@/components/CountUp";

type WorkMetric = {
  value: string;
  label: string;
};

type WorkMetricsProps = {
  metrics: WorkMetric[];
};

export function WorkMetrics({ metrics }: WorkMetricsProps) {
  const startColumn = 4 - metrics.length;

  return (
    <div className="work-metrics">
      {metrics.map((metric, index) => (
        <div
          key={`${metric.value}-${metric.label}`}
          className="work-metric"
          style={{ ["--metric-col" as string]: String(startColumn + index) }}
        >
          <div className="work-metric-value type-metric">
            <CountUp value={metric.value} duration={700} />
          </div>
          <div className="work-metric-label">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
