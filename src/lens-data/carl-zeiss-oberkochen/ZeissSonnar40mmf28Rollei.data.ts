import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S)         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,994,576, Example 7 (Glatzel / Zajadatz).          ║
 * ║  Five elements in four components; the patent calls the type an      ║
 * ║  "expanded Tessar". Example 7 is the finished, glass-specified form  ║
 * ║  of the Example 1 preform (Examples 1–4 print nd only).              ║
 * ║  Correlation to the Rollei 35 S Sonnar is inferred, not confirmed    ║
 * ║  by Zeiss or Rollei. Patent: f/2.9, 2ω = 53.8°, all spherical.       ║
 * ║  The claim 8 copy of the same table prints 2ω = 53.5°.               ║
 * ║                                                                      ║
 * ║  SCALE: all patent lengths (F = 1.00000) are multiplied by 40.0.     ║
 * ║    The last gap is the printed back focus s'∞ = 0.6341 F.            ║
 * ║  STOP: the patent places the diaphragm in the central space s34      ║
 * ║    without an axial split; the model puts it at the midpoint         ║
 * ║    (0.0502925 F on each side). Its radius follows f/2.9.             ║
 * ║  SEMI-DIAMETERS: not printed. Front three elements follow real-ray   ║
 * ║    envelopes over the patent field, which agree with the rim         ║
 * ║    heights of the schematic FIGURE. The rear doublet (L4 front face, ║
 * ║    L4/L5 rims) follows the FIGURE's smaller rear member, so the      ║
 * ║    model vignettes towards the field corner.                         ║
 * ║  GLASSES: catalog equivalents matching the printed nd/νd.            ║
 * ║  FOCUS: the patent gives no close-focus spacing; the 0.9 m minimum   ║
 * ║    focus distance is the camera's published value only.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-sonnar-40f28-rollei",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S)",
  subtitle: "US 3,994,576, Example 7 — inferred production correlation",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 40.00 mm", "DESIGN F/2.90", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 40, design: 40.0005196645 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 3,994,576",
    patentYear: 1976,
    authors: ["Erhard Glatzel", "Heinz Zajadatz"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.99,
      indexReference: "d",
      focalLengthMm: 38.4100452701,
      glass: "LAF3 (HOYA; Schott LaF3 equivalent)",
      role: "Positive front collector (component A) of the front member",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.99,
      indexReference: "d",
      focalLengthMm: 33.4451819428,
      glass: "LAF3 (HOYA; Schott LaF3 equivalent)",
      role: "Second positive collector (component B); its rear surface bounds the dispersing air lens",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.76,
      indexReference: "d",
      focalLengthMm: -14.238144865,
      glass: "SF11 (Schott)",
      role: "Dense-flint negative element (component C) ahead of the stop",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.38,
      indexReference: "d",
      focalLengthMm: -22.6909844768,
      glass: "S-BSM18 (OHARA; Schott SK18 coordinate equivalent)",
      role: "Negative crown element of the cemented rear doublet (component D)",
      diagramLabel: "L4",
      cemented: "D",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.77,
      indexReference: "d",
      focalLengthMm: 13.8677329525,
      glass: "S-LAM2 (OHARA; Schott LaF2 coordinate equivalent)",
      role: "Positive lanthanum-flint element of the cemented rear doublet (component D)",
      diagramLabel: "L5",
      cemented: "D",
    },
  ],

  surfaces: [
    { label: "1", R: 15.6252, d: 3.4486, sd: 11.0, medium: 1 },
    { label: "2", R: 32.7876, d: 0.0958, sd: 10.3 },
    { label: "3", R: 13.8252, d: 2.82596, sd: 8.85, medium: 2 },
    { label: "4", R: 29.8604, d: 1.10164, sd: 7.82 },
    { label: "5", R: 92.4124, d: 0.81424, sd: 6.98, medium: 3 },
    { label: "6", R: 9.9292, d: 2.0117, sd: 5.6 },
    // Stop at the midpoint of the central space s34; the patent gives no axial split and its figure is not to scale.
    { label: "STO", R: "flat", d: 2.0117 },
    { label: "7", R: 110.624, d: 0.81424, sd: 5.5, medium: 4 },
    // Cemented L4→L5 junction: medium and elemId belong to the downstream element L5.
    { label: "8", R: 12.7744, d: 4.64604, sd: 7.6, medium: 5 },
    { label: "9", R: -45.3236, d: 25.364, sd: 7.6 },
  ],

  focus: {
    closeFocusM: 0.9,
    description:
      "Manual focus to 0.9 m on the camera. The patent prints the infinity state only, so no close-focus spacing is modeled.",
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "A", fromSurface: "1", toSurface: "2" },
    { text: "B", fromSurface: "3", toSurface: "4" },
    { text: "C", fromSurface: "5", toSurface: "6" },
    { text: "D", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
