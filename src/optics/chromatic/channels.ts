import type { ChromaticChannel, RefractiveIndexReferenceLine } from "../../types/optics.js";
import { LINE_NM } from "../spectralLines.js";

export interface ChromaticChannelMetadata {
  id: ChromaticChannel;
  displayLabel: ChromaticChannel;
  spectralLine: "C" | "d" | "F" | "g";
  wavelengthNm: number;
  wavelengthLabel: string;
  description: string;
}

export const CHROMATIC_CHANNEL_ORDER = Object.freeze(["R", "G", "B", "V"] as const);

export const CHROMATIC_CHANNEL_METADATA: Readonly<Record<ChromaticChannel, ChromaticChannelMetadata>> = Object.freeze({
  R: Object.freeze({
    id: "R",
    displayLabel: "R",
    spectralLine: "C",
    wavelengthNm: LINE_NM.C,
    wavelengthLabel: "C-line 656.3 nm",
    description: "red C-line",
  }),
  G: Object.freeze({
    id: "G",
    displayLabel: "G",
    spectralLine: "d",
    wavelengthNm: LINE_NM.d,
    wavelengthLabel: "d-line 587.6 nm",
    description: "green d-line",
  }),
  B: Object.freeze({
    id: "B",
    displayLabel: "B",
    spectralLine: "F",
    wavelengthNm: LINE_NM.F,
    wavelengthLabel: "F-line 486.1 nm",
    description: "blue F-line",
  }),
  V: Object.freeze({
    id: "V",
    displayLabel: "V",
    spectralLine: "g",
    wavelengthNm: LINE_NM.g,
    wavelengthLabel: "g-line 435.8 nm",
    description: "violet g-line secondary-spectrum probe",
  }),
});

interface ChromaticChannelText {
  spectralLine: string;
  wavelengthLabel: string;
  description: string;
}

/**
 * Lines a native e-line lens traces its channels at (`dispersion.ts`): C′, e and F′, with g unchanged.
 * `CHROMATIC_CHANNEL_METADATA` stays the d-line set that the tracer's channel wavelengths are keyed to.
 */
const E_LINE_CHANNEL_TEXT: Readonly<Record<ChromaticChannel, ChromaticChannelText>> = Object.freeze({
  R: Object.freeze({ spectralLine: "C′", wavelengthLabel: "C′-line 643.8 nm", description: "red C′-line" }),
  G: Object.freeze({ spectralLine: "e", wavelengthLabel: "e-line 546.1 nm", description: "green e-line" }),
  B: Object.freeze({ spectralLine: "F′", wavelengthLabel: "F′-line 480.0 nm", description: "blue F′-line" }),
  V: Object.freeze({
    spectralLine: CHROMATIC_CHANNEL_METADATA.V.spectralLine,
    wavelengthLabel: CHROMATIC_CHANNEL_METADATA.V.wavelengthLabel,
    description: CHROMATIC_CHANNEL_METADATA.V.description,
  }),
});

function channelText(
  reference: RefractiveIndexReferenceLine,
): Readonly<Record<ChromaticChannel, ChromaticChannelText>> {
  return reference === "e" ? E_LINE_CHANNEL_TEXT : CHROMATIC_CHANNEL_METADATA;
}

/**
 * Reference line a lens's chromatic channels are traced at.
 *
 * @param elements - the lens's glass elements
 * @returns "e" only when every element is e-referenced; a lens that mixes references keeps the d-line labels
 */
export function lensChromaticReference(
  elements: readonly { indexReference?: RefractiveIndexReferenceLine }[],
): RefractiveIndexReferenceLine {
  return elements.length > 0 && elements.every((element) => element.indexReference === "e") ? "e" : "d";
}

export function chromaticChannelWavelengthLabel(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return channelText(reference)[channel].wavelengthLabel;
}

export function chromaticChannelDescription(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return channelText(reference)[channel].description;
}

/** Spectral-line names of the four channels in trace order, e.g. "C, d, F, and g" or "C′, e, F′, and g". */
export function chromaticChannelLineList(reference: RefractiveIndexReferenceLine = "d"): string {
  const text = channelText(reference);
  const [first, second, third, last] = CHROMATIC_CHANNEL_ORDER.map((channel) => text[channel].spectralLine);
  return `${first}, ${second}, ${third}, and ${last}`;
}

export function chromaticChannelIndexLabel(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return `n${channelText(reference)[channel].spectralLine}`;
}
