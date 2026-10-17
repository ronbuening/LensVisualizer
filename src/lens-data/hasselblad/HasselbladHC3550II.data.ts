import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — HASSELBLAD HC 50mm f/3.5 II                                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Optical source: US 2012/0063011 A1, Example 1 (Takashi Suzuki /          ║
 * ║ Fujifilm Corporation). Production correlation: Hasselblad HC 3,5/50-II.  ║
 * ║ 11 elements / 7 air-separated groups; all spherical.                     ║
 * ║                                                                            ║
 * ║ Scale: none. Patent f = 50.688 mm already agrees with Hasselblad's       ║
 * ║ published 50.7 mm actual focal length at source precision.               ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent specifies that G3   ║
 * ║ translates toward the object for close focus but publishes no travel.    ║
 * ║ The close endpoint is code-solved from Hasselblad's 0.60 m               ║
 * ║ object-to-sensor MFD, preserving G3 as one rigid translating group:      ║
 * ║ G3 travel = 5.9360536829 mm objectward; STO→S12 = 1.7039463171 mm;       ║
 * ║ S19→IMG = 67.7710536829 mm. Their adjacent-gap sum remains 69.475 mm.    ║
 * ║                                                                            ║
 * ║ Aperture: the patent publishes Fno. = 3.60 but not a physical stop       ║
 * ║ diameter. The stop radius is derived from the design f-number. The       ║
 * ║ marketed f/3.5 is kept separate.                                         ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent does not tabulate them. SDs are inferred from ║
 * ║ exact spherical meridional bundles at the published 34.65° half-field,   ║
 * ║ the 645 diagonal field at the reconstructed 0.60 m endpoint, Fig. 1      ║
 * ║ proportions, and current edge/slope/cross-gap constraints.               ║
 * ║ L7 S12–S13 use 9.5 mm from the optical rims in the 600-dpi Fig. 1.      ║
 * ║ Vignetting boundaries are on air-exposed surfaces;                       ║
 * ║ sampled bundles do not first clip at cemented interfaces.                ║
 * ║                                                                            ║
 * ║ Glass: the patent publishes nd/νd only and names no vendor. Class/code   ║
 * ║ labels are therefore used instead of vendor-specific glass identities.   ║
 * ║ nC, nF, ng, and dPgF are intentionally omitted because they are not      ║
 * ║ published for this embodiment and vendor identity is unresolved.         ║
 * ║                                                                            ║
 * ║ Source note: patent ¶0078 calls the post-stop meniscus “L11”, while      ║
 * ║ Fig. 1, ¶0057, and Table 1 place L7 at S12–S13. This file follows the    ║
 * ║ numerical table/figure ordering and preserves the contradiction in audit.║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "hasselblad-hc-50f35-ii",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 50mm f/3.5 II",
  subtitle: "US 2012/0063011 A1 Example 1 — Hasselblad HC 3,5/50-II correlation",

  catalog: {
    lensMounts: ["hasselblad-h"],
    imageFormat: "645",
    specs: [
      "11 ELEMENTS / 7 GROUPS",
      "MARKETED 50mm f/3.5",
      "DESIGN f=50.688 mm / FNO 3.60",
      "REAR FOCUS",
      "2ω=69.3° (PATENT)",
    ],
    elementCount: 11,
    groupCount: 7,
    focalLengthMm: { marketing: 50, design: 50.688445329 },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 2012/0063011 A1",
    patentYear: 2012,
    authors: ["Takashi Suzuki"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -105.842473,
      glass: "835427 class (vendor unresolved)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -48.766884,
      glass: "847239 class (vendor unresolved)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 36.608835,
      glass: "883408 class (vendor unresolved)",
      diagramLabel: "L3",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -37.915894,
      glass: "487702 class (vendor unresolved)",
      diagramLabel: "L4",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 65.030678,
      glass: "835427 class (vendor unresolved)",
      diagramLabel: "L5",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 108.393955,
      glass: "620603 class (vendor unresolved)",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 119.597568,
      glass: "847239 class (vendor unresolved)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 29.8,
      focalLengthMm: -31.237821,
      glass: "800298 class (vendor unresolved)",
      diagramLabel: "L8",
      cemented: "T2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 25.456853,
      glass: "497815 class (low-dispersion crown; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "The compatible K-PFK80 catalog curve has ΔPgF ≈ +0.030; inferred low-dispersion APD class, not a patent designation or production supplier identification.",
      diagramLabel: "L9",
      cemented: "T2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: -49.44627,
      glass: "702412 class (vendor unresolved)",
      diagramLabel: "L10",
      cemented: "T2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 80.229303,
      glass: "835427 class (vendor unresolved)",
      diagramLabel: "L11",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.666, d: 9.2, sd: 27.2, medium: 1 },
    { label: "2", R: 26.888, d: 6.47, sd: 20.5 },
    { label: "3", R: 85.626, d: 6.5, sd: 19.0, medium: 2 },
    { label: "4", R: 26.887, d: 8.32, sd: 17.2 },
    { label: "5", R: 97.855, d: 9.89, sd: 16.2, medium: 3 },
    { label: "6", R: -45.984, d: 10.02, sd: 15.8, medium: 4 },
    { label: "7", R: 33.114, d: 9.55, sd: 12.5, medium: 5 },
    { label: "8", R: 73.76, d: 1.85, sd: 9.7 },
    { label: "9", R: -47.229, d: 4.89, sd: 9.7, medium: 6 },
    { label: "10", R: -28.844, d: 6.75, sd: 11.3 },
    { label: "STO", R: "flat" },
    { label: "12", R: 33.067, d: 3.04, sd: 9.5, medium: 7 },
    { label: "13", R: 47.032, d: 7.21, sd: 9.5 },
    { label: "14", R: -175.66, d: 1.3, sd: 14.15, medium: 8 },
    { label: "15", R: 29.231, d: 12.75, sd: 15.5, medium: 9 },
    { label: "16", R: -19.077, d: 1.63, sd: 15.5, medium: 10 },
    { label: "17", R: -43.882, d: 0.2, sd: 15.5 },
    { label: "18", R: -144.9, d: 4.35, sd: 20.6, medium: 11 },
    { label: "19", R: -46.43, sd: 21.0 },
  ],

  focus: {
    closeFocusM: 0.6,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent rear focus moves G3 toward the object; close endpoint solved from Hasselblad 0.60 m object-to-sensor MFD with one rigid G3 translation and conserved adjacent-gap sum.",
  },

  /* (moved from var) ── Focus: one rigid G3 translation (constrained reconstruction) ── */
  gaps: {
    STO: { label: "G3 FRONT GAP", values: [[7.64, 1.7039463171]] },
    "19": { label: "BF", values: [[61.835, 67.7710536829]] },
  },

  aperture: { nominalFNumber: 3.6, fStops: [3.6, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "5", toSurface: "10" },
    { text: "G3", fromSurface: "12", toSurface: "19" },
  ],
  doublets: [
    { text: "T1 (L3–L5)", fromSurface: "5", toSurface: "8" },
    { text: "T2 (L8–L10)", fromSurface: "14", toSurface: "17" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
