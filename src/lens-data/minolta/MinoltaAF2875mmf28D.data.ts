import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — MINOLTA AF 28–75mm f/2.8 (D)                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2004-101739 A, Tamron large-aperture zoom lens.   ║
 * ║  Embodiment: sole numerical example, f = 28.87–49.98–72.65 mm.     ║
 * ║  Production match: Tamron A09 / Konica Minolta AF 28-75mm F2.8 D.  ║
 * ║                                                                    ║
 * ║  Published construction is 16 elements / 14 groups with four       ║
 * ║  aspherical surfaces. The four 0.2 mm hybrid resin replica layers  ║
 * ║  are modeled explicitly as separate material entries so the ray     ║
 * ║  tracer sees the correct refractive transitions and aspheric faces. ║
 * ║  The elementCount field therefore reports the published photographic║
 * ║  element count, not the number of material entries in this file.    ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D16, D25, BF.                              ║
 * ║  Focus: inner focus by G2; D6 and D16 vary for close focus.         ║
 * ║  The rendered BF/IMG plane is set to the infinity traced best-focus ║
 * ║  plane at each zoom position and remains fixed while focus tracks.  ║
 * ║  Close-focus D6/D16 values are derived from the manufacturer        ║
 * ║  0.33 m MFD and 1:3.9 telephoto magnification because the patent    ║
 * ║  publishes infinity-focus spacings only.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent omits clear apertures. SDs are conservative estimates   ║
 * ║  constrained by the 67 mm filter target, condition (9), paraxial    ║
 * ║  stop geometry, element SD ratio ≤ 1.25, sd/|R| < 0.90, positive-K  ║
 * ║  conic limits, edge thickness, and cross-gap sag intrusion at all   ║
 * ║  zoom/focus end states.                                             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-28-75-f28-d",
  maker: "Minolta",
  name: "MINOLTA AF 28-75mm f/2.8 (D)",
  subtitle: "JP 2004-101739 A — Tamron / Yamada Yasuharu",

  catalog: {
    lensMounts: ["sony-a", "canon-ef", "nikon-f", "pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "28-75mm f/2.8",
      "16 elements / 14 groups",
      "4 hybrid aspherical surfaces",
      "Internal focus by G2",
      "0.33 m MFD",
    ],
    elementCount: 16,
    groupCount: 14,
    focalLengthMm: { marketing: [28, 75], design: [28.87166178015695, 72.6521152502488] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "JP 2004-101739 A",
    patentYear: 2004,
    authors: ["Yasuharu Yamada"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front dense flint meniscus",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -119.9,
      glass: "S-TIH53 (OHARA)",
      role: "Weak negative front meniscus; early chromatic balancing surface in G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 lanthanum crown positive",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 99.1,
      glass: "S-LAL14 (OHARA)",
      role: "Main positive collector in the first group.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 high-index lanthanum positive meniscus",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 118.2,
      glass: "S-LAH66 (OHARA)",
      role: "Positive meniscus closing G1; flint-side Abbe value despite lanthanum family name.",
    },
    {
      id: 4,
      name: "L21R",
      label: "L21 front resin asphere",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: -337.7,
      glass: "Unmatched hybrid aspheric resin (nd=1.53610, νd=41.2)",
      role: "Thin 0.2 mm resin replica carrying aspherical surface 7A.",
      cemented: "H21",
    },
    {
      id: 5,
      name: "L21",
      label: "L21 high-index lanthanum negative body",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -25.8,
      glass: "S-LAH65V (OHARA)",
      role: "Strong negative entry element of the variator/focusing group.",
      cemented: "H21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22 high-index lanthanum biconcave",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -32.9,
      glass: "S-LAH65V (OHARA)",
      role: "Strong negative variator power in G2.",
    },
    {
      id: 7,
      name: "L23",
      label: "L23 dense flint positive",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 29.4,
      glass: "S-TIH6 (OHARA; SF6 class)",
      role: "Positive dense-flint achromatizing member inside the negative variator.",
    },
    {
      id: 8,
      name: "L24",
      label: "L24 fluor-crown negative",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -30.3,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion crown member of the rear G2 cemented doublet.",
      cemented: "D24",
    },
    {
      id: 9,
      name: "L25",
      label: "L25 dense flint positive",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 90.6,
      glass: "S-TIH6 (OHARA; SF6 class)",
      role: "Dense-flint partner of the G2 cemented doublet.",
      cemented: "D24",
    },
    {
      id: 10,
      name: "L31",
      label: "L31 LD positive meniscus",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 77.4,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      apd: "inferred",
      apdNote: "Anomalous/low-dispersion fluorophosphate crown class; patent lists nd/νd only.",
      role: "Low-dispersion positive member immediately behind the stop.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 11,
      name: "L32R",
      label: "L32 front resin asphere",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 476.4,
      glass: "Unmatched hybrid aspheric resin (nd=1.53610, νd=41.2)",
      role: "Thin resin replica carrying aspherical surface 20A.",
      cemented: "H32",
    },
    {
      id: 12,
      name: "L32",
      label: "L32 fluor-crown positive body",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 110.7,
      glass: "S-FSL5 (OHARA)",
      role: "Weak positive body supporting the G3 hybrid asphere.",
      cemented: "H32",
    },
    {
      id: 13,
      name: "L33",
      label: "L33 LD positive meniscus",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 75.2,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      apd: "inferred",
      apdNote: "Anomalous/low-dispersion fluorophosphate crown class; patent lists nd/νd only.",
      role: "Positive low-dispersion member of the near-afocal G3 cemented doublet.",
      cemented: "D33",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 14,
      name: "L34",
      label: "L34 dense flint negative meniscus",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -78.4,
      glass: "S-TIH53 (OHARA)",
      role: "Dense-flint negative member paired with L33 for secondary-spectrum control.",
      cemented: "D33",
    },
    {
      id: 15,
      name: "L41",
      label: "L41 fluor-crown positive meniscus",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 127.2,
      glass: "S-FSL5 (OHARA)",
      role: "Weak positive opener of the rear group.",
    },
    {
      id: 16,
      name: "L42",
      label: "L42 LD biconvex positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 43,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      apd: "inferred",
      apdNote: "Anomalous/low-dispersion fluorophosphate crown class; patent lists nd/νd only.",
      role: "Strong low-dispersion positive element in G4.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 17,
      name: "L43",
      label: "L43 high-index lanthanum negative body",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -22.5,
      glass: "S-LAH60V (OHARA)",
      role: "High-index rear negative field-flattening body.",
      cemented: "H43",
    },
    {
      id: 18,
      name: "L43R",
      label: "L43 rear resin asphere",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 615.4,
      glass: "Unmatched hybrid aspheric resin (nd=1.53610, νd=41.2)",
      role: "Thin resin replica carrying aspherical surface 32A.",
      cemented: "H43",
    },
    {
      id: 19,
      name: "L44",
      label: "L44 light-flint positive body",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: 41.8,
      glass: "S-TIL25 (OHARA)",
      role: "Positive body of the final hybrid asphere.",
      cemented: "H44",
    },
    {
      id: 20,
      name: "L44R",
      label: "L44 rear resin asphere",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 401.5,
      glass: "Unmatched hybrid aspheric resin (nd=1.53610, νd=41.2)",
      role: "Final thin resin replica carrying aspherical surface 35A.",
      cemented: "H44",
    },
  ],

  surfaces: [
    { label: "1", R: 333.1075, d: 1.8, sd: 30.2, medium: 1 },
    { label: "2", R: 77.6323, d: 1, sd: 30 },
    { label: "3", R: 74.5678, d: 7.5878, sd: 29.6, medium: 2 },
    { label: "4", R: -899.7118, d: 0.2, sd: 29.5 },
    { label: "5", R: 47.0695, d: 5.5826, sd: 28.4, medium: 3 },
    { label: "6", R: 92.1516, sd: 28.2 },

    {
      label: "7A",
      R: 91.4948,
      d: 0.2,
      sd: 11.6,
      medium: 4,
      asphere: { K: 1.7698, A4: 1.51609e-5, A6: -2.40934e-9, A8: -3.815e-11, A10: 3.90581e-13 },
    },
    { label: "8", R: 60.7311, d: 1, sd: 11.4, medium: 5 },
    { label: "9", R: 15.3347, d: 5.7, sd: 10.3 },
    { label: "10", R: -49.6859, d: 0.8, sd: 10.3, medium: 6 },
    { label: "11", R: 56.8731, d: 0.1, sd: 10.3 },
    { label: "12", R: 34.3769, d: 5.0582, sd: 11.5, medium: 7 },
    { label: "13", R: -70.7589, d: 3.8077, sd: 11.5 },
    { label: "14", R: -17.7484, d: 1, sd: 11.5, medium: 8 },
    { label: "15", R: 88.895, d: 2.4, sd: 11.5, medium: 9 },
    { label: "16", R: -400.8377, sd: 11.5 },

    { label: "STO", R: "flat", d: 0.8 },
    { label: "18", R: 32.9501, d: 4.5533, sd: 13, medium: 10 },
    { label: "19", R: 218.9272, d: 0.334, sd: 13.4 },
    {
      label: "20A",
      R: 42.2568,
      d: 0.2,
      sd: 13.7,
      medium: 11,
      asphere: { K: -0.3805, A4: -1.01321e-5, A6: 2.64212e-10, A8: -9.59136e-12, A10: -5.6031e-14 },
    },
    { label: "21", R: 50.5518, d: 4.1798, sd: 13.8, medium: 12 },
    { label: "22", R: 774.1028, d: 0.2883, sd: 14.1 },
    { label: "23", R: -1096.67, d: 4.9331, sd: 14.5, medium: 13 },
    { label: "24", R: -36.1775, d: 1, sd: 14.5, medium: 14 },
    { label: "25", R: -80.5109, sd: 15.3 },

    { label: "26", R: 57.8584, d: 3.3516, sd: 15.6, medium: 15 },
    { label: "27", R: 851.4063, d: 0.11, sd: 15.8 },
    { label: "28", R: 37.524, d: 8.2312, sd: 15.9, medium: 16 },
    { label: "29", R: -46.1404, d: 4.8987, sd: 15.7 },
    { label: "30", R: -40.8554, d: 1, sd: 14.6, medium: 17 },
    { label: "31", R: 34.9959, d: 0.2, sd: 14.6, medium: 18 },
    {
      label: "32A",
      R: 39.0704,
      d: 0.2,
      sd: 14.5,
      asphere: { K: -6.2476, A4: 2.39974e-5, A6: -2.88771e-8, A8: -1.11697e-10, A10: 1.02647e-12 },
    },
    { label: "33", R: 34.4669, d: 5.8463, sd: 14.5, medium: 19 },
    { label: "34", R: -77.0642, d: 0.2, sd: 14.4, medium: 20 },
    {
      label: "35A",
      R: -56.7993,
      sd: 14.3,
      asphere: { K: 12.8865, A4: 2.35429e-5, A6: 4.67954e-8, A8: 1.1988e-10, A10: -1.40158e-13 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.87166178015695, label: "28 mm" },
      { focalLengthMm: 49.98203840232015 },
      { focalLengthMm: 72.6521152502488, label: "75 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.33,
    description:
      "Inner focus by movement of G2 only. Close-focus spacings are solved from a 0.33 m image-plane-referenced object distance; the patent gives infinity-focus zoom positions only.",
  },

  gaps: {
    "6": {
      label: "D6 / IF front",
      values: [
        [2.694, 0.8709432051761019],
        [16.985, 14.29225509487025],
        [27.814, 24.04674450870222],
      ],
    },
    "16": {
      label: "D16 / IF rear",
      values: [
        [9.782, 11.605056794823899],
        [3.828, 6.5207449051297495],
        [0.985, 4.752255491297781],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [6.786, 6.786],
        [2.409, 2.409],
        [0.997, 0.997],
      ],
    },
    "35A": {
      label: "BF",
      values: [
        [39.034437295299895, 39.034437295299895],
        [52.94180046910789, 52.94180046910789],
        [61.190097031090374, 61.190097031090374],
      ],
    },
  },

  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 7 },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "6" },
    { text: "G2 − / IF", fromSurface: "7A", toSurface: "16" },
    { text: "G3 +", fromSurface: "STO", toSurface: "25" },
    { text: "G4 +", fromSurface: "26", toSurface: "35A" },
  ],
  doublets: [
    { text: "H21", fromSurface: "7A", toSurface: "9" },
    { text: "D24", fromSurface: "14", toSurface: "16" },
    { text: "H32", fromSurface: "20A", toSurface: "22" },
    { text: "D33", fromSurface: "23", toSurface: "25" },
    { text: "H43", fromSurface: "30", toSurface: "32A" },
    { text: "H44", fromSurface: "33", toSurface: "35A" },
  ],

  layout: { scFill: 0.56, yScFill: 0.52, maxAspectRatio: 1.6 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
