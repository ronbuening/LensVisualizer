import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — NIKON W-NIKKOR 35mm f/1.8                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,896,506, Claim 3 numerical prescription.         ║
 * ║  Hideo Azuma / Nippon Kogaku K.K.; high-aperture wide-angle         ║
 * ║  objective normalized to f = 1, F:1.8, field angle = 63°.           ║
 * ║  7 elements / 5 air-spaced groups, all spherical.                   ║
 * ║  Focus: unit focus; only the back-focus gap varies in this file.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized to f = 1. All radii,           ║
 * ║    thicknesses, spacings, and inferred semi-diameters are scaled     ║
 * ║    ×35 to represent the 3.5 cm / 35 mm production lens.             ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                            ║
 * ║    The patent states that the diaphragm lies in the r5-r6 air gap,  ║
 * ║    but does not publish the exact axial split. The STO surface is   ║
 * ║    placed at the midpoint of that gap. The stop radius is derived   ║
 * ║    from the design f-number, F/1.8.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Patent semi-diameters are not published. Values below are         ║
 * ║    conservative inferred clear-aperture estimates checked against    ║
 * ║    rim slope, element edge thickness, adjacent-gap sag clearance,    ║
 * ║    and element front/rear SD-ratio constraints.                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-w-nikkor-35mm-f18",
  maker: "Nikon",
  name: "NIKON W-NIKKOR 35mm f/1.8",
  subtitle: "US 2,896,506 — Hideo Azuma / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-s", "leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["7 elements / 5 groups", "f = 35.005 mm", "F/1.8", "2ω = 63°", "all-spherical"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 35, design: 35.005 },
    fNumber: { marketing: 1.8, design: 1.8 },
  },

  source: {
    patentNumber: "US 2,896,506",
    patentYear: 1959,
    authors: ["Hideo Azuma"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7197,
      vd: 50.2,
      focalLengthMm: 48.9,
      glass: "J-LAK10 class (Nikon J-series match)",
      role: "Front positive meniscus collector in Component I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.662,
      vd: 57.7,
      focalLengthMm: 22.4,
      glass: "Unmatched (vintage high-index crown, 662/577)",
      role: "Positive crown member of the front cemented doublet in Component II.",
      cemented: "II",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6206,
      vd: 38,
      focalLengthMm: -14.5,
      glass: "F9 (HOYA legacy catalog equivalent; patent code 621380, supplier unspecified)",
      role: "Negative flint member of the front cemented doublet in Component II.",
      cemented: "II",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.785,
      vd: 25.9,
      focalLengthMm: -56.8,
      glass: "J-SF11 class (Nikon J-series match)",
      role: "Central dispersive meniscus behind the diaphragm in Component III.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7197,
      vd: 50.2,
      focalLengthMm: 27.3,
      glass: "J-LAK10 class (Nikon J-series match)",
      role: "Principal rear positive meniscus in Component IV.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.1,
      focalLengthMm: 59.4,
      glass: "J-LAK9 class (Nikon J-series match)",
      role: "Positive crown member of the rear field-flattening doublet in Component V.",
      cemented: "V",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.785,
      vd: 25.9,
      focalLengthMm: -86.4,
      glass: "J-SF11 class (Nikon J-series match)",
      role: "Negative dense-flint member of the rear field-flattening doublet in Component V.",
      cemented: "V",
    },
  ],

  surfaces: [
    { label: "1", R: 21.084, d: 3.5, sd: 13.2, medium: 1 },
    { label: "2", R: 48.93, d: 0.098, sd: 13.0 },
    { label: "3", R: 13.8005, d: 4.7635, sd: 9.4, medium: 2 },
    { label: "4", R: 167.72, d: 0.875, sd: 7.6, medium: 3 },
    { label: "5", R: 8.5365, d: 4.277, sd: 7.2 },
    { label: "STO", R: "flat", d: 4.277 },
    { label: "6", R: -8.967, d: 1.498, sd: 6.8, medium: 4 },
    { label: "7", R: -12.0505, d: 0.098, sd: 7.0 },
    { label: "8", R: -53.06, d: 5.152, sd: 10.8, medium: 5 },
    { label: "9", R: -14.9345, d: 0.098, sd: 11.3 },
    { label: "10", R: 68.04, d: 3.1115, sd: 12.8, medium: 6 },
    { label: "11", R: -101.605, d: 1.1655, sd: 13.6, medium: 7 },
    { label: "12", R: 204.925, sd: 14.2 },
  ],

  focus: { closeFocusM: 0.9 },

  gaps: { "12": { label: "BF", values: [[19.72844, 21.19985]] } },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "7" },
    { text: "IV", fromSurface: "8", toSurface: "9" },
    { text: "V", fromSurface: "10", toSurface: "12" },
  ],
  doublets: [
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "V", fromSurface: "10", toSurface: "12" },
  ],

  layout: { scFill: 0.62, yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
