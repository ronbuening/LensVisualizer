import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * HD PENTAX-D FA 21mm F2.4 ED Limited DC WR
 *
 * Source: JP 2022-117775 A, Numerical Example 1 (Ricoh Company, Ltd.).
 * Infinity-focus prescription, 11 elements / 8 groups, four aspherical surfaces.
 *
 * The patent lists a 1.5 mm parallel plate CG (surfaces 21–22, nd 1.51633,
 * νd 64.1) after surface 20. It is modeled in `rearPlates` (traced, not drawn);
 * surface 20 keeps the patent's 38.340 mm gap to the plate. Table 1 prints no
 * gap after surface 22 ("-"); the 1.00 mm plate-to-image gap is derived from
 * Table 3 BF 40.33 (air-equivalent: 40.33 − 38.340 − 1.500/1.51633 = 1.00),
 * matching the paraxial focus (air-equivalent BFD 40.3293 mm) and L = 115.34.
 *
 * Semi-diameters are conservative renderer estimates derived from the design
 * f/2.45 stop, marginal ray trace, full-frame field, and edge/gap checks. The
 * patent does not publish clear-aperture or semi-diameter values. L2A (surfaces
 * 3A/4A) was raised to the 15.9/13.3 mm rims drawn in Fig. 1, which pass the
 * traced chief ray to the patent's Y = 21.64 mm (2026-09-24 field-coverage audit).
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-hd-dfa-21mm-f24-limited",
  maker: "Pentax",
  name: "PENTAX HD D FA 21mm f/2.4 ED Limited DC WR",
  subtitle: "JP 2022-117775 A — Numerical Example 1",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "11 elements / 8 groups",
      "f = 21.32 mm design",
      "F2.4 nominal / F2.45 design",
      "92° diagonal field",
      "4 aspherical surfaces",
    ],
    elementCount: 11,
    groupCount: 8,
    focalLengthMm: { marketing: 21, design: 21.3222 },
    fNumber: { marketing: 2.4, design: 2.45 },
  },

  source: {
    patentNumber: "JP 2022-117775 A",
    patentYear: 2022,
    authors: ["Tomoya Koga", "Yuichiro Ehashi", "Takashi Enomoto"],
    assignees: ["Ricoh Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1A",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -47.13,
      glass: "S-LAH99 (OHARA)",
      role: "Large front dense-flint negative meniscus; first-stage retrofocus bending and field control.",
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
    },
    {
      id: 2,
      name: "L2A",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5808,
      vd: 59.2,
      focalLengthMm: -46.09,
      glass: "Unmatched (BAL/SK moldable crown; nearest S-BAL42/M-BACD12-type catalog glasses are about 1.583/59.4)",
      role: "Front double-asphere for distortion, astigmatism, and field-curvature control.",
    },
    {
      id: 3,
      name: "L3A",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -95.26,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      role: "ED negative front member of the first cemented doublet.",
      cemented: "D1",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 4,
      name: "L4A",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 34.24,
      glass: "TAFD35 / TAFD35L (Hoya)",
      role: "High-index positive partner of the first front-group cemented doublet.",
      cemented: "D1",
      nC: 1.90324,
      nF: 1.92907,
      ng: 1.94414,
    },
    {
      id: 5,
      name: "L5A",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -110.86,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      role: "ED negative front member of the second front-group cemented doublet.",
      cemented: "D2",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 6,
      name: "L6A",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 62.05,
      glass: "TAFD37 / TAFD37A (Hoya)",
      role: "High-index positive meniscus closing the front group.",
      cemented: "D2",
      nC: 1.89333,
      nF: 1.91742,
      ng: 1.93131,
    },
    {
      id: 7,
      name: "L7A",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 49.72,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      role: "ED positive front member of the rear cemented lens BL.",
      cemented: "BL",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 8,
      name: "L8A",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -47.91,
      glass: "S-LAH59 (OHARA)",
      role: "Lanthanum negative partner of the rear cemented lens BL.",
      cemented: "BL",
    },
    {
      id: 9,
      name: "L9A",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      focalLengthMm: 37.32,
      glass: "S-FPL53 (OHARA)",
      role: "Super-ED biconvex rear-group positive element.",
    },
    {
      id: 10,
      name: "L10A",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -37.94,
      glass: "S-LAH99 (OHARA)",
      role: "Rear dense-flint negative meniscus for Petzval and field control.",
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
    },
    {
      id: 11,
      name: "L11A",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 41.03,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      role: "Rearmost ED biconvex double-asphere; exit correction and chromatic cleanup.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
  ],

  surfaces: [
    { label: "1", R: 33.991, d: 2.2, sd: 20.0, medium: 1 },
    { label: "2", R: 19.117, d: 4.91, sd: 16.0 },
    {
      label: "3A",
      R: 19,
      d: 2.7,
      sd: 15.9,
      medium: 2,
      asphere: { K: -1, A4: -0.1268e-4, A6: -0.4615e-7, A8: 0.1479e-9, A10: -0.2507e-12 },
    },
    {
      label: "4A",
      R: 10.532,
      d: 12.932,
      sd: 13.3,
      asphere: { K: -1, A4: -0.1307e-5, A6: -0.1753e-6, A8: 0.2686e-9, A10: -0.528e-12 },
    },
    { label: "5", R: 114.302, d: 1.65, sd: 12.0, medium: 3 },
    { label: "6", R: 33.318, d: 5.41, sd: 12.1, medium: 4 },
    { label: "7", R: -449.604, d: 3.26, sd: 12.2 },
    { label: "8", R: -45.215, d: 1.45, sd: 11.2, medium: 5 },
    { label: "9", R: -254.812, d: 2.6, sd: 11.3, medium: 6 },
    { label: "10", R: -46.047, d: 8.51, sd: 11.4 },
    { label: "STO", R: "flat", d: 5.125 },
    { label: "12", R: -22.025, d: 4.85, sd: 10.8, medium: 7 },
    { label: "13", R: -12.497, d: 1.3, sd: 10.8, medium: 8 },
    { label: "14", R: -19.227, d: 0.15, sd: 11.0 },
    { label: "15", R: 51.792, d: 6.65, sd: 13.0, medium: 9 },
    { label: "16", R: -23.01, d: 2.41, sd: 13.8 },
    { label: "17", R: -31.29, d: 1.2, sd: 15.2, medium: 10 },
    { label: "18", R: -181.145, d: 1.35, sd: 15.7 },
    {
      label: "19A",
      R: 117.398,
      d: 6.35,
      sd: 17.1,
      medium: 11,
      asphere: { K: 0, A4: -0.2287e-5, A6: 0.2084e-7, A8: 0.1124e-10, A10: 0 },
    },
    // Last surface: patent gap to the parallel plate CG
    {
      label: "20A",
      R: -24.237,
      d: 38.34,
      sd: 18.7,
      asphere: { K: 0, A4: 0.1927e-4, A6: 0.2797e-7, A8: 0.7616e-10, A10: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.18,
    description:
      "Rear/internal focus with floating aberration-correction group described qualitatively in JP 2022-117775 A; no close-focus spacing table is published.",
  },

  aperture: {
    nominalFNumber: 2.45,
    fStops: [2.45, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
    bladeRoundedness: 1,
  },

  /* ── Parallel plate CG (patent Table 1 surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 1.5,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 1.0,
      source: "JP 2022-117775 A, Example 1 Table 1 surfaces 21–22; 1.00 mm to image derived from Table 3 BF 40.33",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "20A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "BL", fromSurface: "12", toSurface: "14" },
  ],

  layout: { scFill: 0.52, yScFill: 0.46 },

  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
