import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — KODAK WIDE-FIELD EKTAR 100mm f/6.3              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,518,719, Max Reiss / Eastman Kodak, Example 2.  ║
 * ║  Four simple meniscus elements in four air-spaced groups.          ║
 * ║  Topogon-family positive-negative-negative-positive architecture.   ║
 * ║  4 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit-focus model; only the final BFD varies.               ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to EF = 100 mm. No        ║
 * ║    production scaling is applied. The rounded prescription traces  ║
 * ║    to EFL = 100.086 mm.                                            ║
 * ║                                                                    ║
 * ║  NOTE ON R7:                                                       ║
 * ║    Fig. 2 appears to read R7 = -63.4, but the repeated text table, ║
 * ║    Claim 6 normalized value, and surface-power table all require   ║
 * ║    R7 = -68.4. The data uses -68.4.                                ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent states only that the diaphragm is closer to the       ║
 * ║    front component than to the rear in Examples 1 and 2, but not   ║
 * ║    more than twice as close. The 10.60 mm central airspace is       ║
 * ║    split as 4.00 mm before the stop and 6.60 mm after the stop.    ║
 * ║    The stop radius is derived from the design f-number.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters     ║
 * ║    were inferred from the f/6.3 on-axis bundle, a 4x5-format       ║
 * ║    off-axis trace check, element edge thickness, and cross-gap     ║
 * ║    sag constraints. The opposed central-gap surfaces are capped at ║
 * ║    11.35 mm to keep their combined sag inside the 90% render       ║
 * ║    clearance budget for the 10.60 mm patent airspace. They are     ║
 * ║    visualization apertures, not measured mechanical clear          ║
 * ║    apertures.                                                      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and unit-focus BFD variation                    ║
 * ║    ✗ No shutter, filter, lens board, or mechanical mount data      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "kodak-wide-field-ektar-100f63",
  maker: "Kodak",
  name: "KODAK WIDE-FIELD EKTAR 100mm f/6.3",
  subtitle: "US 2,518,719 Example 2 — Eastman Kodak / Max Reiss",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: ["4 elements / 4 groups", "EFL 100.09 mm", "f/6.3", "All-spherical", "4x5 format model"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 100.086 },
    fNumber: { marketing: 6.3, design: 6.3 },
  },

  source: {
    patentNumber: "US 2,518,719",
    patentYear: 1950,
    authors: ["Max Reiss"],
    assignees: ["Eastman Kodak Company"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Lens I",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      focalLengthMm: 70.91,
      glass: "N-SK16 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Front positive meniscus collector; crown-class partner for the front negative component.",
    },
    {
      id: 2,
      name: "L2",
      label: "Lens II",
      type: "Negative Meniscus",
      nd: 1.621,
      vd: 36.2,
      focalLengthMm: -90.39,
      glass: "F2 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Front negative meniscus of the central pair; strong rear surface supplies major negative field-flattening power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Lens III",
      type: "Negative Meniscus",
      nd: 1.605,
      vd: 38.0,
      focalLengthMm: -60.66,
      glass: "F5 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Rear negative meniscus; asymmetric counterpart to Lens II for coma and chromatic balancing.",
    },
    {
      id: 4,
      name: "L4",
      label: "Lens IV",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      focalLengthMm: 47.0,
      glass: "N-SK16 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Rear positive meniscus collector; strongest standalone positive element in the design.",
    },
  ],

  surfaces: [
    { label: "1", R: 24.6, d: 4.89, sd: 17.4, medium: 1 },
    { label: "2", R: 51.6, d: 0.65, sd: 17.4 },
    { label: "3", R: 22.0, d: 2.2, sd: 13.5, medium: 2 },
    { label: "4", R: 15.2, d: 4.0, sd: 11.35 },
    { label: "STO", R: "flat", d: 6.6 },
    { label: "5", R: -16.8, d: 2.04, sd: 11.35, medium: 3 },
    { label: "6", R: -32.4, d: 0.81, sd: 13.4 },
    { label: "7", R: -68.4, d: 4.07, sd: 14.1, medium: 4 },
    { label: "8", R: -20.9, sd: 14.1 },
  ],

  focus: {
    closeFocusM: 1.0,
    description: "Unit-focus model. Patent gives infinity data only; close focus is represented by BFD extension.",
  },

  gaps: { "8": { label: "BF", values: [[89.00961, 99.96037]] } },

  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "6" },
    { text: "IV", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  layout: { scFill: 0.68, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
