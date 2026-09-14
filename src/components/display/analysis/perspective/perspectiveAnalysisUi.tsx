import type { ReactNode } from "react";
import type { PerspectiveFieldStatus, SensorUv } from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";

interface PerspectiveSectionProps {
  title: string;
  copy: ReactNode;
  t: Theme;
  children: ReactNode;
  first?: boolean;
}

/** Shared shell for fixed-sensor perspective analysis sections. */
export function PerspectiveSection({ title, copy, t, children, first = false }: PerspectiveSectionProps) {
  return (
    <section
      style={{
        borderTop: first ? "none" : `1px solid ${t.panelBorder}`,
        paddingTop: first ? 0 : 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <span
        style={{
          color: t.value,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "color 0.3s",
        }}
      >
        {title}
      </span>
      <span style={{ color: t.muted, fontSize: 9, lineHeight: 1.45, transition: "color 0.3s" }}>{copy}</span>
      {children}
    </section>
  );
}

/** Human-readable fixed-sensor position that preserves signed top/bottom semantics. */
export function perspectiveFieldLabel(sensorUv: SensorUv): string {
  if (Math.abs(sensorUv.u) <= 1e-9 && Math.abs(sensorUv.v) <= 1e-9) return "Sensor center";
  const components: string[] = [];
  if (Math.abs(sensorUv.v) > 1e-9) {
    components.push(`${sensorUv.v < 0 ? "Top" : "Bottom"} ${formatFieldPercent(Math.abs(sensorUv.v))}`);
  }
  if (Math.abs(sensorUv.u) > 1e-9) {
    components.push(`${sensorUv.u < 0 ? "Left" : "Right"} ${formatFieldPercent(Math.abs(sensorUv.u))}`);
  }
  return components.join(" / ");
}

export function perspectiveStatusLabel(status: PerspectiveFieldStatus): string {
  switch (status) {
    case "usable":
      return "usable";
    case "clipped":
      return "clipped by lens or stop";
    case "missed-sensor":
      return "missed fixed sensor";
    case "chief-unreachable":
      return "chief ray unavailable";
    case "outside-projection-domain":
      return "outside active format";
  }
}

export function formatSignedMm(value: number | null | undefined, digits = 3): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return "n/a";
  const normalized = Math.abs(value) < 0.5 * 10 ** -digits ? 0 : value;
  return `${normalized > 0 ? "+" : ""}${normalized.toFixed(digits)} mm`;
}

export function formatUnsignedMm(value: number | null | undefined, digits = 3): string {
  return value === null || value === undefined || !Number.isFinite(value) ? "n/a" : `${value.toFixed(digits)} mm`;
}

export function formatSignedUm(valueMm: number | null | undefined, digits = 1): string {
  if (valueMm === null || valueMm === undefined || !Number.isFinite(valueMm)) return "n/a";
  const valueUm = valueMm * 1000;
  const normalized = Math.abs(valueUm) < 0.5 * 10 ** -digits ? 0 : valueUm;
  return `${normalized > 0 ? "+" : ""}${normalized.toFixed(digits)} um`;
}

export function formatUnsignedUm(valueMm: number | null | undefined, digits = 1): string {
  return valueMm === null || valueMm === undefined || !Number.isFinite(valueMm)
    ? "n/a"
    : `${(valueMm * 1000).toFixed(digits)} um`;
}

export function formatTransmission(value: number): string {
  return Number.isFinite(value) ? `${(Math.max(0, Math.min(1, value)) * 100).toFixed(0)}%` : "n/a";
}

export function PerspectiveUnavailable({ status, t }: { status: PerspectiveFieldStatus; t: Theme }) {
  return (
    <span style={{ color: t.muted, fontSize: 9, fontStyle: "italic" }} data-perspective-status={status}>
      Unavailable — {perspectiveStatusLabel(status)}
    </span>
  );
}

function formatFieldPercent(value: number): string {
  const percent = value * 100;
  return `${Number(percent.toFixed(Number.isInteger(percent) ? 0 : 1))}%`;
}
