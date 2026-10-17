import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Nikon AF-S NIKKOR 24-70mm f/2.8G ED             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,508,592 B2, Example 2 (Hiroki Harada / Nikon).  ║
 * ║  Five-group negative-positive-negative-positive-positive zoom.      ║
 * ║  Production count: 15 elements / 11 groups; the data model uses     ║
 * ║  16 optical media because the replicated resin aspheric layer on    ║
 * ║  L4 is represented explicitly.                                      ║
 * ║  Focus: front sub-group of G2 (G2a) moves toward the image side.    ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D14, D20, D25A.                            ║
 * ║  Focus variable gaps: D6 and D12, derived paraxially from the       ║
 * ║  manufacturer close-focus distance because the patent tabulates     ║
 * ║  infinity-focus spacings only.                                      ║
 * ║  Reversing groups: G1 moves imageward then objectward; this is      ║
 * ║  implicit in the D6 sequence.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not publish clear apertures. Semi-diameters below  ║
 * ║  are conservative inferred clear apertures from paraxial marginal   ║
 * ║  and chief-ray envelopes, then reduced where necessary to satisfy   ║
 * ║  surface slope, edge-thickness, and cross-gap sag constraints.      ║
 * ║  They are rendering apertures, not manufacturer mechanical specs.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-afs-24-70mm-f28g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24-70mm f/2.8 G ED",
  subtitle: "US 7,508,592 B2 Example 2 — Hiroki Harada / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "24-70mm f/2.8 marketed; f=24.78-67.70mm, FNO=2.91 design",
      "15 elements / 11 groups production count",
      "16 modeled optical media including replicated resin asphere layer",
      "3 ED elements, 3 aspherical surfaces",
      "Internal focus: G2a moves imageward",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: [24, 70], design: [24.78, 67.7] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "US 7,508,592 B2",
    patentYear: 2009,
    authors: ["Hiroki Harada"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1x Asph)",
      nd: 1.744429,
      vd: 49.52,
      focalLengthMm: -46.58,
      glass: "M-NBF1 (Hoya catalog equivalent; patent code 744495, supplier unspecified)",
      apd: false,
      role: "Large negative lead meniscus; rear asphere corrects wide-angle off-axis aberrations.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.33,
      focalLengthMm: -122.06,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Low-dispersion negative element in the first group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 205.38,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Weak positive dense-flint corrector completing the negative first group.",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 resin layer",
      type: "Thin Positive Meniscus (Asph)",
      nd: 1.55389,
      vd: 38.09,
      focalLengthMm: 2487.85,
      glass: "553381 — unmatched UV-cure replicated resin (patent nd=1.55389, νd=38.09; not catalog glass)",
      apd: false,
      role: "Thin replicated aspheric shell on the object side of L4; modeled explicitly from the patent media layer.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4g",
      label: "Element 4 glass body",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: 74.87,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "High-index lanthanum glass body of the second-group hybrid asphere.",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.761821,
      vd: 26.52,
      focalLengthMm: -53.98,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Dense-flint negative member of the G2a cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive ED",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 55.52,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED/anomalous-dispersion crown; patent gives nd and νd only.",
      role: "First ED crown; satisfies the second-group high-Abbe condition.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.882997,
      vd: 40.76,
      focalLengthMm: 61.07,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "High-index rear positive sub-group of G2.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 44.76,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Positive dense-flint member of the leading G3 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.729157,
      vd: 54.68,
      focalLengthMm: -30.08,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Negative lanthanum-crown member of the G3 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.729157,
      vd: 54.68,
      focalLengthMm: -74.89,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Trailing negative meniscus completing the third group.",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.805181,
      vd: 25.42,
      focalLengthMm: -69.57,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Negative dense-flint member of the fourth-group positive doublet.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive ED",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 39.87,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED/anomalous-dispersion crown; patent gives nd and νd only.",
      role: "Second ED crown in the fourth-group converging doublet.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: 198.12,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Weak positive field element with rear aspheric surface.",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus ED",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 84.1,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED/anomalous-dispersion crown; patent gives nd and νd only.",
      role: "Third ED crown and positive member of the fixed final group.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.805181,
      vd: 25.42,
      focalLengthMm: -106.31,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Negative dense-flint rear member of the telephoto-type final cemented group.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 125.62, d: 3.2, sd: 36.0, medium: 1 },
    {
      label: "2A",
      R: 26.88,
      d: 14.95,
      sd: 29.8,
      asphere: { K: -1.1438, A4: 3.8749e-6, A6: -2.261e-10, A8: 6.0954e-12, A10: -8.9785e-15, A12: 6.529e-18 },
    },
    { label: "3", R: -140.0, d: 2.2, sd: 22.0, medium: 2 },
    { label: "4", R: 164.53, d: 0.2, sd: 22.0 },
    { label: "5", R: 53.97, d: 4.0, sd: 30.0, medium: 3 },
    { label: "6", R: 75.6, sd: 30.0 },
    {
      label: "7A",
      R: 59.74,
      d: 0.1,
      sd: 22.8,
      medium: 4,
      asphere: {
        K: -1.4588,
        A4: -2.4347e-7,
        A6: -1.2907e-10,
        A8: 1.7953e-12,
        A10: -1.973e-15,
        A12: 0,
      },
    },
    { label: "8", R: 62.41, d: 5.0, sd: 22.8, medium: 5 },
    { label: "9", R: -762.32, d: 6.0, sd: 22.8 },
    { label: "10", R: 113.72, d: 1.5, sd: 22.0, medium: 6 },
    { label: "11", R: 30.03, d: 8.3, sd: 19.5, medium: 7 },
    { label: "12", R: -315.2, sd: 19.5 },
    { label: "13", R: 60.55, d: 4.84, sd: 21.5, medium: 8 },
    { label: "14", R: -474.6, sd: 21.5 },
    { label: "STO", R: "flat", d: 1.65 },
    { label: "16", R: -1292.82, d: 3.05, sd: 12.3, medium: 9 },
    { label: "17", R: -36.86, d: 1.15, sd: 11.9, medium: 10 },
    { label: "18", R: 54.86, d: 3.3, sd: 11.45 },
    { label: "19", R: -39.1, d: 1.15, sd: 11.45, medium: 11 },
    { label: "20", R: -139.4, sd: 11.45 },
    { label: "21", R: 285.08, d: 1.2, sd: 16.0, medium: 12 },
    { label: "22", R: 46.73, d: 7.11, sd: 15.5, medium: 13 },
    { label: "23", R: -32.76, d: 0.2, sd: 15.5 },
    { label: "24", R: 508.57, d: 2.8, sd: 16.0, medium: 14 },
    {
      label: "25A",
      R: -127.81,
      sd: 17.0,
      asphere: {
        K: 12.3795,
        A4: 3.3574e-6,
        A6: 3.1407e-9,
        A8: -8.1398e-12,
        A10: 1.4058e-14,
        A12: 0,
      },
    },
    { label: "26", R: 39.24, d: 5.05, sd: 18.5, medium: 15 },
    { label: "27", R: 599.11, d: 1.4, sd: 18.0, medium: 16 },
    { label: "28", R: 74.82, d: 41.87943175, sd: 18.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.78, label: "24mm" },
      { focalLengthMm: 51.92 },
      { focalLengthMm: 67.7, label: "70mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "Internal focus by imageward movement of G2a (hybrid asphere L4 plus L5/L6 cemented doublet); close-focus spacings are paraxial estimates because the patent gives infinity data only.",
  },

  gaps: {
    "6": {
      label: "D6 / G1-G2a",
      values: [
        [47.46, 54.4454275],
        [9.09, 15.04941145],
        [1.87, 8.27008502],
      ],
    },
    "12": {
      label: "D12 / focus",
      values: [
        [7.35, 0.3645725],
        [7.35, 1.39058855],
        [7.35, 0.94991498],
      ],
    },
    "14": {
      label: "D14 / G2-G3",
      values: [
        [1.35, 1.35],
        [19.1, 19.1],
        [26.58, 26.58],
      ],
    },
    "20": {
      label: "D20 / G3-G4",
      values: [
        [16.24, 16.24],
        [6.48, 6.48],
        [1.6, 1.6],
      ],
    },
    "25A": {
      label: "D25 / G4-G5",
      values: [
        [1.4, 1.4],
        [14.23, 14.23],
        [23.79, 23.79],
      ],
    },
  },

  aperture: {
    nominalFNumber: 2.91,
    fStops: [2.91, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
    bladeRoundedness: 0.7,
  },

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "G2a (+ focus)", fromSurface: "7A", toSurface: "12" },
    { text: "G2b (+)", fromSurface: "13", toSurface: "14" },
    { text: "G3 (-)", fromSurface: "STO", toSurface: "20" },
    { text: "G4 (+)", fromSurface: "21", toSurface: "25A" },
    { text: "G5 (+ fixed)", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "H1", fromSurface: "7A", toSurface: "9" },
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.56, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
