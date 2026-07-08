import { chromaticChannelIndexLabel } from "../../../optics/chromatic/channels.js";
import type { ChromaticChannel } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

export function chromaticChannelColor(t: Theme, channel: ChromaticChannel): string {
  if (channel === "R") return t.rayChromR;
  if (channel === "G") return t.rayChromG;
  if (channel === "B") return t.rayChromB;
  return t.rayChromV;
}

export function chromaticChannelLegendLabel(channel: ChromaticChannel): string {
  return `${channel} ${chromaticChannelIndexLabel(channel)}`;
}

export function formatSignedUm(value: number): string {
  if (!isFinite(value)) return "n/a";
  if (Math.abs(value) < 0.05) return "0";
  const sign = value > 0 ? "+" : "";
  const abs = Math.abs(value);
  if (abs >= 100) return `${sign}${value.toFixed(0)}`;
  if (abs >= 10) return `${sign}${value.toFixed(1)}`;
  return `${sign}${value.toFixed(2)}`;
}

export function formatUmMagnitude(value: number): string {
  if (!isFinite(value)) return "n/a";
  const abs = Math.abs(value);
  if (abs < 0.05) return "0";
  if (abs >= 100) return abs.toFixed(0);
  if (abs >= 10) return abs.toFixed(1);
  return abs.toFixed(2);
}

/** Format a millimeter spread as a µm string; exact zero renders as the floor label. */
export function formatSpreadUmFromMm(mm: number): string {
  const um = Math.abs(mm * 1000);
  if (um === 0) return "< 0.1 µm";
  return um >= 1 ? `${um.toFixed(0)} µm` : `${um.toFixed(1)} µm`;
}
