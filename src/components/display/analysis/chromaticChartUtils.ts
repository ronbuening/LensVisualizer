import { chromaticChannelIndexLabel } from "../../../optics/chromatic.js";
import type {
  ChromaticChannel,
  ChromaticChannelOmission,
  ChromaticChannelOmissionReason,
  ChromaticRayFanSpread,
  RefractiveIndexReferenceLine,
} from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

export function chromaticChannelColor(t: Theme, channel: ChromaticChannel): string {
  if (channel === "R") return t.rayChromR;
  if (channel === "G") return t.rayChromG;
  if (channel === "B") return t.rayChromB;
  return t.rayChromV;
}

export function chromaticChannelLegendLabel(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return `${channel} ${chromaticChannelIndexLabel(channel, reference)}`;
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

const OMISSION_REASON_LABEL: Record<ChromaticChannelOmissionReason, string> = {
  vignetted: "vignetted",
  "no-axis-crossing": "no axis crossing",
  unaimed: "unaimed",
  untraced: "not traced",
};

/** Name the channels a spread leaves out, grouped by reason: "B, V vignetted"; empty when none is left out. */
export function formatOmittedChannels(omitted: readonly ChromaticChannelOmission[] | undefined): string {
  const byReason = new Map<ChromaticChannelOmissionReason, ChromaticChannel[]>();
  for (const { channel, reason } of omitted ?? []) byReason.set(reason, [...(byReason.get(reason) ?? []), channel]);
  return Array.from(byReason, ([reason, channels]) => `${channels.join(", ")} ${OMISSION_REASON_LABEL[reason]}`).join(
    "; ",
  );
}

/**
 * State a chromatic spread's zone and the channels it compares: "0.97 R, R–G–B", or "0.90 R, R–G; B vignetted" when
 * a selected channel is left out.
 *
 * @param spread - the spread's signed fraction, compared channels and omissions
 * @param radius - what the fraction is of: "R", the stop radius, for aimed zones; "EP", the paraxial entrance-pupil
 *   radius, for the diagram's display fans
 */
export function formatChromaticZone(
  spread: Pick<ChromaticRayFanSpread, "fraction" | "channels" | "omittedChannels">,
  radius: "R" | "EP" = "R",
): string {
  const zone = spread.fraction === undefined ? "" : `${spread.fraction.toFixed(2)} ${radius}, `;
  const compared = `${zone}${(spread.channels ?? []).join("–")}`;
  const omitted = formatOmittedChannels(spread.omittedChannels);
  return omitted ? `${compared}; ${omitted}` : compared;
}
