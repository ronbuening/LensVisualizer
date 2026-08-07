// Shared palette and path helpers for the spherical-aberration article figures.
// The static fallbacks in public/diagrams/spherical-aberration/*.svg mirror these
// colors via a prefers-color-scheme media query; keep the two in sync.

export interface SaColors {
  bg: string;
  border: string;
  axis: string;
  grid: string;
  tick: string;
  label: string;
  muted: string;
  lensFill: string;
  lensStroke: string;
  accent: string;
  warm: string;
  violet: string;
  red: string;
  green: string;
  blue: string;
  caustic: string;
  diskBright: string;
  diskMid: string;
  diskFaint: string;
  diskRim: string;
}

export const SA_DARK: SaColors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  axis: "rgba(150,170,210,0.35)",
  grid: "rgba(80,100,140,0.18)",
  tick: "rgba(150,170,210,0.4)",
  label: "#c8d8f0",
  muted: "rgba(150,170,200,0.65)",
  lensFill: "rgba(70,130,180,0.22)",
  lensStroke: "rgba(120,170,220,0.80)",
  accent: "#28d8ff",
  warm: "#ff8c20",
  violet: "rgba(200,160,255,0.90)",
  red: "#ff7066",
  green: "#58d078",
  blue: "#6a9eff",
  caustic: "rgba(40,216,255,0.10)",
  diskBright: "rgba(230,245,255,0.95)",
  diskMid: "rgba(120,210,255,0.45)",
  diskFaint: "rgba(120,210,255,0.16)",
  diskRim: "rgba(150,220,255,0.65)",
};

export const SA_LIGHT: SaColors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.32)",
  grid: "rgba(120,140,180,0.18)",
  tick: "rgba(60,80,120,0.35)",
  label: "#1a2540",
  muted: "rgba(60,80,120,0.60)",
  lensFill: "rgba(30,80,160,0.10)",
  lensStroke: "rgba(30,80,160,0.65)",
  accent: "#006878",
  warm: "#c05000",
  violet: "rgba(90,40,180,0.90)",
  red: "#b02020",
  green: "#1a7a40",
  blue: "#2545c8",
  caustic: "rgba(0,104,120,0.10)",
  diskBright: "rgba(10,40,90,0.95)",
  diskMid: "rgba(20,90,160,0.45)",
  diskFaint: "rgba(20,90,160,0.16)",
  diskRim: "rgba(20,90,160,0.65)",
};

export const SA_FONT = "'JetBrains Mono','SF Mono',monospace";

export function saColors(isDark: boolean): SaColors {
  return isDark ? SA_DARK : SA_LIGHT;
}

/** Sample fn over t in [0,1] and return an SVG polyline path string. */
export function saCurvePath(samples: number, fn: (t: number) => readonly [number, number]): string {
  const round = (v: number) => Math.round(v * 100) / 100;
  return Array.from({ length: samples }, (_, i) => {
    const [x, y] = fn(i / (samples - 1));
    return `${i === 0 ? "M" : "L"} ${round(x)},${round(y)}`;
  }).join(" ");
}
