import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON SERIES E 100mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,303,314, Embodiment 1 / Claim 2 (Sei Matsui,    ║
 * ║  Nippon Kogaku K.K.). Compact four-element all-spherical           ║
 * ║  Ernostar-derived telephoto lens.                                  ║
 * ║  4 elements / 4 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit extension; only the final back-focus spacing varies.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Embodiment 1 is already normalized at f = 100 mm; no     ║
 * ║    production scaling was applied.                                  ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent specifies the stop between L3 and L4 but does not     ║
 * ║    tabulate its exact position inside d6 = 29.4 mm. The data file   ║
 * ║    inserts STO at the visual mid-gap position inferred from Fig. 1, ║
 * ║    splitting d6 as 14.70 mm + 14.70 mm. This does not affect EFL,   ║
 * ║    BFD, f12, f123, Petzval sum, or the patent conditions.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear semi-diameters. Values below were ║
 * ║    estimated from paraxial marginal/chief-ray footprints, the       ║
 * ║    f/2.8 entrance pupil, the 52 mm production filter-thread         ║
 * ║    constraint, the sd/|R| < 0.90 rim limit, element front/rear SD   ║
 * ║    ratio ≤ 1.25, and signed cross-gap sag clearance.               ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-series-e-100mm-f28",
  maker: "Nikon",
  name: "NIKON SERIES E 100mm f/2.8",
  subtitle: "US 4,303,314 Embodiment 1 — Nippon Kogaku / Sei Matsui",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["4 elements / 4 groups", "f = 100.02 mm", "F/2.8", "2ω = 24° patent", "0 aspherical surfaces"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 100.0167 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 4,303,314",
    patentYear: 1981,
    authors: ["Sei Matsui"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.61272,
      vd: 58.6,
      focalLengthMm: 76.98,
      glass: "613586 — dense crown (line-index backfill; patent nd=1.61272, νd=58.6)",
      role: "Front positive collector; sharper object-side curvature carries most of the element power.",
      nC: 1.60954,
      nF: 1.61999,
      ng: 1.62568,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 75.93,
      glass: "S-BSM16 (OHARA) / N-SK16 class",
      role: "Second positive collector; together with L1 forms the high-power f12 front subsystem.",
      nC: 1.61728,
      nF: 1.62757,
      ng: 1.63315,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -32.36,
      glass: "S-TIH1 (OHARA) / SF1 class",
      role: "Principal negative telephoto element; rear surface r6 is the patent's critical short-wavelength spherical-aberration control surface.",
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.7,
      focalLengthMm: 138.69,
      glass: "S-TIH13 (OHARA)",
      role: "Weak rear positive collector behind the stop; completes the telephoto layout and helps restrain Petzval curvature.",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
    },
  ],

  surfaces: [
    { label: "1", R: 41.0, d: 5.3, sd: 21.2, medium: 1 },
    { label: "2", R: 298.19, d: 0.75, sd: 20.8 },
    { label: "3", R: 29.92, d: 9.8, sd: 20.6, medium: 2 },
    { label: "4", R: 71.72, d: 1.8, sd: 19.2 },
    { label: "5", R: 149.221, d: 4.5, sd: 18.5, medium: 3 },
    { label: "6", R: 19.836, d: 14.7, sd: 16.8 },
    { label: "STO", R: "flat", d: 14.7 },
    { label: "7", R: 71.0, d: 2.0, sd: 15.5, medium: 4 },
    { label: "8", R: 227.07, sd: 15.5 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focusing by whole-lens extension; patent gives only infinity spacing, so close focus varies only the final BFD.",
  },

  gaps: { "8": { label: "BF", values: [[40.250371, 52.939466]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "L2", fromSurface: "3", toSurface: "4" },
    { text: "L3", fromSurface: "5", toSurface: "6" },
    { text: "L4", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
