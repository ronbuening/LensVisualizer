/** Chromatic channel order, physical wavelengths and reference-aware display text. */

import type { ChromaticChannel, RefractiveIndexReferenceLine } from "../../types/optics.js";
import { LINE_NM } from "./spectralLines.js";

export interface ChromaticChannelMetadata {
  id: ChromaticChannel;
  displayLabel: ChromaticChannel;
  spectralLine: "C" | "d" | "F" | "g";
  wavelengthNm: number;
  wavelengthLabel: string;
  description: string;
  eLine: ChromaticChannelText;
}

export const CHROMATIC_CHANNEL_ORDER = Object.freeze(["R", "G", "B", "V"] as const);

const VIOLET_CHANNEL = Object.freeze({
  spectralLine: "g" as const,
  wavelengthNm: LINE_NM.g,
  wavelengthLabel: "g-line 435.8 nm",
  description: "violet g-line secondary-spectrum probe",
});

export const CHROMATIC_CHANNEL_METADATA: Readonly<Record<ChromaticChannel, ChromaticChannelMetadata>> = Object.freeze({
  R: Object.freeze({
    id: "R",
    displayLabel: "R",
    spectralLine: "C",
    wavelengthNm: LINE_NM.C,
    wavelengthLabel: "C-line 656.3 nm",
    description: "red C-line",
    eLine: Object.freeze({
      spectralLine: "C′",
      wavelengthNm: LINE_NM.CPrime,
      wavelengthLabel: "C′-line 643.8 nm",
      description: "red C′-line",
    }),
  }),
  G: Object.freeze({
    id: "G",
    displayLabel: "G",
    spectralLine: "d",
    wavelengthNm: LINE_NM.d,
    wavelengthLabel: "d-line 587.6 nm",
    description: "green d-line",
    eLine: Object.freeze({
      spectralLine: "e",
      wavelengthNm: LINE_NM.e,
      wavelengthLabel: "e-line 546.1 nm",
      description: "green e-line",
    }),
  }),
  B: Object.freeze({
    id: "B",
    displayLabel: "B",
    spectralLine: "F",
    wavelengthNm: LINE_NM.F,
    wavelengthLabel: "F-line 486.1 nm",
    description: "blue F-line",
    eLine: Object.freeze({
      spectralLine: "F′",
      wavelengthNm: LINE_NM.FPrime,
      wavelengthLabel: "F′-line 480.0 nm",
      description: "blue F′-line",
    }),
  }),
  V: Object.freeze({
    id: "V",
    displayLabel: "V",
    ...VIOLET_CHANNEL,
    eLine: VIOLET_CHANNEL,
  }),
});

interface ChromaticChannelText {
  spectralLine: string;
  wavelengthNm: number;
  wavelengthLabel: string;
  description: string;
}

function channelText(channel: ChromaticChannel, reference: RefractiveIndexReferenceLine): ChromaticChannelText {
  const metadata = CHROMATIC_CHANNEL_METADATA[channel];
  return reference === "e" ? metadata.eLine : metadata;
}

function channelWavelengths(reference: RefractiveIndexReferenceLine): Readonly<Record<ChromaticChannel, number>> {
  return Object.freeze(
    Object.fromEntries(
      CHROMATIC_CHANNEL_ORDER.map((channel) => [channel, channelText(channel, reference).wavelengthNm]),
    ),
  ) as Readonly<Record<ChromaticChannel, number>>;
}

/** The trace channel remains keyed to C/d/F/g even in a lens with native e-line elements. */
export const CHROMATIC_CHANNEL_WAVELENGTH_NM = channelWavelengths("d");
/** Native e-line material resolution uses C′/e/F′/g, preserving its authored reference index. */
export const E_LINE_CHANNEL_WAVELENGTH_NM = channelWavelengths("e");

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
  return channelText(channel, reference).wavelengthLabel;
}

export function chromaticChannelDescription(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return channelText(channel, reference).description;
}

/** Spectral-line names of the four channels in trace order, e.g. "C, d, F, and g" or "C′, e, F′, and g". */
export function chromaticChannelLineList(reference: RefractiveIndexReferenceLine = "d"): string {
  const [first, second, third, last] = CHROMATIC_CHANNEL_ORDER.map(
    (channel) => channelText(channel, reference).spectralLine,
  );
  return `${first}, ${second}, ${third}, and ${last}`;
}

export function chromaticChannelIndexLabel(
  channel: ChromaticChannel,
  reference: RefractiveIndexReferenceLine = "d",
): string {
  return `n${channelText(channel, reference).spectralLine}`;
}
