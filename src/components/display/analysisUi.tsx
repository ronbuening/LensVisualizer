import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";

interface AnalysisMetricRowProps {
  label: string;
  value: ReactNode;
  t: Theme;
  suffix?: string;
  note?: ReactNode;
}

export function AnalysisMetricRow({ label, value, t, suffix, note }: AnalysisMetricRowProps) {
  const normalizedLabel = label.toLocaleUpperCase("en-US");

  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
      <span
        style={{
          color: t.muted,
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          transition: "color 0.3s",
        }}
      >
        {normalizedLabel}
      </span>
      <span
        style={{
          color: t.value,
          fontSize: 13,
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums",
          transition: "color 0.3s",
        }}
      >
        {value}
        {suffix ? <span style={{ color: t.muted, fontWeight: 500 }}> {suffix}</span> : null}
      </span>
      {note ? <span style={{ color: t.muted, fontSize: 10, transition: "color 0.3s" }}>{note}</span> : null}
    </div>
  );
}

interface AnalysisEmptyStateProps {
  children: ReactNode;
  t: Theme;
}

export function AnalysisEmptyState({ children, t }: AnalysisEmptyStateProps) {
  return <div style={{ color: t.muted, fontSize: 10, padding: 12, transition: "color 0.3s" }}>{children}</div>;
}
