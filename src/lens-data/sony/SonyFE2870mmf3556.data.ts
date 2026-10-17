import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sony FE 28-70mm F3.5-5.6 OSS                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0077859 A1, Numerical Example 4.            ║
 * ║  9 elements / 8 air-spaced groups; negative-positive-negative-     ║
 * ║  positive four-group standard zoom.                               ║
 * ║  Aspheres: surfaces 7, 8, 13, 14, and 16.                         ║
 * ║  Focus: inner focus by GR3, the single negative G8 element.        ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D14, D16 from patent Table 16.            ║
 * ║  Focus gaps: close-focus D14/D16 values are paraxial finite-       ║
 * ║  conjugate solves to Sony's 0.30 m wide / 0.45 m tele MFDs;        ║
 * ║  the mid-zoom MFD is linearly interpolated for viewer continuity.  ║
 * ║  Close focus moves GR3 image-ward: D14 increases and D16           ║
 * ║  decreases.                                                        ║
 * ║                                                                    ║
 * ║  Scaling: none. Patent Example 4 is already at 28.82-67.90 mm,     ║
 * ║  matching the production 28-70 mm class.                           ║
 * ║                                                                    ║
 * ║  Cover/filter handling: patent Table 13 filter FL (surfaces        ║
 * ║  19–20, 2.500 mm, nd 1.51680, νd 64.20) and its 1.000 mm air gap   ║
 * ║  to the image are modeled in `rearPlates` (traced, not drawn).     ║
 * ║  Surface 18 keeps the patent's 30.521 mm gap to the filter.        ║
 * ║                                                                    ║
 * ║  Semi-diameters: not patent-listed. Values are inferred by         ║
 * ║  paraxial marginal/chief-ray envelopes with mechanical clearance,  ║
 * ║  then reduced where needed to satisfy rim, edge-thickness, and     ║
 * ║  cross-gap sag constraints.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-28-70-f35-56-oss",
  maker: "Sony",
  name: "SONY FE 28-70mm f/3.5-5.6 OSS",
  subtitle: "US 2015/0077859 A1 Example 4 — Kanetaka / Nagamatsu, Sony",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "28-70mm f/3.5-5.6",
      "9 elements / 8 groups",
      "3 aspherical elements / 5 aspherical surfaces",
      "1 ED element",
      "Optical SteadyShot production lens",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: [28, 70], design: [28.82, 67.9] },
  },

  source: {
    patentNumber: "US 2015/0077859 A1",
    patentYear: 2015,
    authors: ["Fumikazu Kanetaka", "Kodai Nagamatsu"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8348,
      vd: 42.72,
      focalLengthMm: -49.53,
      glass: "S-LAH55V (OHARA) / TAFD5G class, 835427",
      role: "Front high-index negative meniscus; establishes the wide-end front-group divergence while limiting front diameter.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.72,
      focalLengthMm: -46.38,
      glass: "S-LAM2 / LaF2 class, 744447-448",
      role: "Second negative member of GR1; shares wide-angle negative power with G1 while changing glass dispersion relative to G1.",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      focalLengthMm: 71.03,
      glass: "E-FDS1 (HOYA) / N-SF66 class, 923209",
      role: "High-index, high-dispersion positive member completing the negative GR1 achromatic balance.",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5831,
      vd: 59.46,
      focalLengthMm: 29.95,
      glass: "L-BAL42 class (OHARA low-Tg / moldable barium crown), 583594",
      role: "Strong positive front element of GR2; primary power and spherical-aberration correction immediately before the stop.",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 32.03,
      glass: "FCD1 (HOYA) / S-FPL51 class, 497816",
      apd: "inferred",
      apdNote: "Catalog ED fluorophosphate class; patent publishes nd/vd only.",
      role: "ED positive element of the cemented doublet behind the stop; principal secondary-spectrum corrector.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.57,
      focalLengthMm: -19.66,
      glass: "E-FD7 (HOYA) / S-TIM27 class, 640346",
      role: "High-dispersion negative mate to G5; the G5/G6 cemented doublet is net negative in situ.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5831,
      vd: 59.46,
      focalLengthMm: 34.2,
      glass: "L-BAL42 class (OHARA low-Tg / moldable barium crown), 583594",
      role: "Positive rear member of GR2; strong double-sided aspherical correction after the cemented doublet.",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -36.25,
      glass: "L-LAL13 / S-LAL13 class (OHARA), 694532",
      role: "Single-element negative focusing group GR3; low moving mass and focus-dependent field-curvature trim.",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.04,
      focalLengthMm: 104.85,
      glass: "E-LAF7 (HOYA) / H-LaF4 class, 750350",
      role: "Fixed rear positive meniscus; reduces exit-ray angles and contributes field-curvature correction near the sensor.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.0816, d: 1.5, sd: 17.0, medium: 1 },
    { label: "2", R: 18.3083, d: 8.527, sd: 13.7 },
    { label: "3", R: -130.0576, d: 1.0, sd: 12.0, medium: 2 },
    { label: "4", R: 47.1173, d: 1.619, sd: 11.4 },
    { label: "5", R: 31.3904, d: 2.503, sd: 12.4, medium: 3 },
    { label: "6", R: 57.9296, sd: 11.0 },

    {
      label: "7A",
      R: 21.275,
      d: 3.573,
      sd: 10.1,
      medium: 4,
      asphere: { K: 0, A4: -3.98377e-6, A6: -5.79927e-8, A8: 4.30524e-10, A10: 0 },
    },
    { label: "8A", R: -91.5125, d: 3.432, sd: 9.6, asphere: { K: 0, A4: 1.00321e-5, A6: -4.12693e-8, A8: 3.39391e-10, A10: 0 } },
    { label: "STO", R: "flat", d: 1.2 },
    { label: "10", R: 22.7124, d: 3.075, sd: 8.1, medium: 5 },
    { label: "11", R: -50.8068, d: 0.9, sd: 8.1, medium: 6 },
    { label: "12", R: 16.8378, d: 3.965, sd: 8.1 },
    {
      label: "13A",
      R: 29.9134,
      d: 2.5,
      sd: 9.3,
      medium: 7,
      asphere: { K: 0, A4: 2.63642e-5, A6: -3.31405e-7, A8: 1.10828e-8, A10: 0 },
    },
    { label: "14A", R: -58.0071, sd: 9.3, asphere: { K: 0, A4: 3.68743e-5, A6: -3.76569e-7, A8: 1.27129e-8, A10: 0 } },

    { label: "15", R: -275.9198, d: 0.8, sd: 8.5, medium: 8 },
    { label: "16A", R: 27.696, sd: 8.5, asphere: { K: 0, A4: 2.00869e-5, A6: -1.53748e-7, A8: 6.54544e-10, A10: 0 } },

    { label: "17", R: -41.2519, d: 3.12, sd: 11.0, medium: 9 },
    { label: "18", R: -27.9283, d: 30.521, sd: 13.7 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.82, nominalFNumber: 3.5, label: "28mm" },
      { focalLengthMm: 44.26, nominalFNumber: 4.5 },
      { focalLengthMm: 67.9, nominalFNumber: 5.6, label: "70mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.3,
    description:
      "Inner focus by the single negative third group (G8). The patent gives infinity spacings only; close-focus spacings are paraxial finite-conjugate solves to the official endpoint MFDs, with mid-zoom MFD interpolated.",
  },

  gaps: {
    "6": {
      label: "D6 (GR1-GR2)",
      values: [
        [28.668, 28.668],
        [11.704, 11.704],
        [1.2, 1.2],
      ],
    },
    "14A": {
      label: "D14 (GR2-GR3)",
      values: [
        [2.99, 4.568372],
        [8.085, 10.811712],
        [14.42, 18.517296],
      ],
    },
    "16A": {
      label: "D16 (GR3-GR4)",
      values: [
        [4.959, 3.380628],
        [8.477, 5.750288],
        [16.115, 12.017704],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32, 36], maxFNumber: 36, blades: 7 },

  /* ── Filter FL (patent Table 13 surfaces 19–20): traced, not drawn ── */
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "US 2015/0077859 A1, Example 4 Table 13 surfaces 19–20",
    },
  ],

  groups: [
    { text: "GR1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "GR2 (+)", fromSurface: "7A", toSurface: "14A" },
    { text: "GR3 focus (-)", fromSurface: "15", toSurface: "16A" },
    { text: "GR4 fixed (+)", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [{ text: "D1 ED cemented doublet", fromSurface: "10", toSurface: "12" }],

  layout: { scFill: 0.68, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
