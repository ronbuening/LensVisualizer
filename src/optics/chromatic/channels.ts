import type { ChromaticChannel } from "../../types/optics.js";
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

export function chromaticChannelWavelengthLabel(channel: ChromaticChannel): string {
  return CHROMATIC_CHANNEL_METADATA[channel].wavelengthLabel;
}

export function chromaticChannelIndexLabel(channel: ChromaticChannel): string {
  return `n${CHROMATIC_CHANNEL_METADATA[channel].spectralLine}`;
}
