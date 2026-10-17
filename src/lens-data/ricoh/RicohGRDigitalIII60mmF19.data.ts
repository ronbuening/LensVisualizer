import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL III)                ║
 * ╠════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2010-72639 A, Example 4 (Ricoh Co., Ltd.; Yoshifumi Sudoh).       ║
 * ║ Patent design: f=6.00 mm, F=1.93, half-field 39.1°, Y'=4.8 mm.               ║
 * ║ 8 elements / 6 air-separated groups; aspheres on source surfaces 4 and 14.   ║
 * ║                                                                              ║
 * ║ Focus status: PUBLISHED. The modeled focus slider uses only Table 11's        ║
 * ║ infinity and 300 mm object-to-image-plane states. Group I moves 0.10 mm       ║
 * ║ imageward and Group II 0.14 mm objectward; the aperture stop is fixed.        ║
 * ║ Ricoh's production 1 cm macro endpoint uses additional group motion that is   ║
 * ║ not numerically determined by Example 4 and is intentionally not modeled.     ║
 * ║                                                                              ║
 * ║ Sensor cover / color-filter equivalent plate (source surfaces 16–17) is        ║
 * ║ modeled in `rearPlates` (t=1.24 mm, n=1.50000, ν=64.00): traced, not drawn.    ║
 * ║ Surface 15 stores the printed physical gap C = 5.52 / 5.66 mm. The 0.8998 mm   ║
 * ║ plate→IMG gap is derived, not printed (patent leaves surface-17 D blank): it   ║
 * ║ preserves the previous normalized image plane (7.2464760762 mm air-equiv.).    ║
 * ║                                                                              ║
 * ║ Scaling: NONE. The patent's f=6.00 mm is used directly.                       ║
 * ║                                                                              ║
 * ║ Semi-diameters: not published. They are derived from exact meridional Snell   ║
 * ║ tracing using the F=1.93-calibrated stop. They contain the complete ±100%     ║
 * ║ stop bundle at 0.60× the 39.1° patent half-field in both published focus      ║
 * ║ states, and also contain the full-field chief ray. Independent edge, slope,  ║
 * ║ conic-domain, shared-gap-intrusion and trim-equivalent geometry checks pass   ║
 * ║ for the authored apertures.                                                   ║
 * ║                                                                              ║
 * ║ Glass: nd/νd are preserved from the patent. Normalized OHARA identities and   ║
 * ║ nC/nF/ng/dPgF are catalog-derived; those line data are not patent values.     ║
 * ╚════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "ricoh-gr-digital-iii-6mm-f19",
  maker: "Ricoh",
  name: "RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL III)",
  subtitle: "JP 2010-72639 A Example 4 — high-likelihood GR DIGITAL III production correlation",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-1.7-inch-type",
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "6.0 mm",
      "f/1.9 marketed / f/1.93 modeled",
      "2ω = 78.2°",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 6, design: 5.999720829550191 },
    fNumber: { marketing: 1.9, design: 1.93 },
  },

  source: {
    patentNumber: "JP 2010-72639 A",
    patentYear: 2010,
    authors: ["Yoshifumi Sudoh"],
    assignees: ["Ricoh Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: -22.444414609231288,
      glass: "S-FSL5 (OHARA)",
      role: "Front negative meniscus of Group I front section.",
      diagramLabel: "L1",
      dPgF: 0.0022,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (Rear Asphere)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: -13.8121489441316,
      glass: "L-BSL7 (OHARA)",
      role: "Second negative meniscus of Group I front section; rear surface is aspherical.",
      diagramLabel: "L2",
      dPgF: -0.0045,
      nC: 1.51385,
      nF: 1.52191,
      ng: 1.5262,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: 15.881209674555185,
      glass: "S-LAH59 (OHARA)",
      role: "Positive rear section of Group I; makes Group I weakly positive overall.",
      diagramLabel: "L3",
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 13.581512242881564,
      glass: "S-FPL51 (OHARA)",
      role: "Positive front member of the first cemented pair in Group II.",
      diagramLabel: "L4",
      cemented: "D1",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.51,
      focalLengthMm: -17.58597187901909,
      glass: "S-TIH4 (OHARA)",
      role: "Negative rear member of the first cemented pair in Group II.",
      diagramLabel: "L5",
      cemented: "D1",
      dPgF: 0.0133,
      nC: 1.7473,
      nF: 1.77475,
      ng: 1.7915,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.7,
      focalLengthMm: -45.702310043412034,
      glass: "S-TIM1 (OHARA)",
      role: "Negative front member of the second cemented pair in Group II.",
      diagramLabel: "L6",
      cemented: "D2",
      dPgF: 0.0056,
      nC: 1.62074,
      nF: 1.63828,
      ng: 1.64861,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 14.996688313767406,
      glass: "S-FPL51 (OHARA)",
      role: "Positive rear member of the second cemented pair in Group II.",
      diagramLabel: "L7",
      cemented: "D2",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus (Front Asphere)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: 38.18610405078085,
      glass: "L-BSL7 (OHARA)",
      role: "Aspherical positive rear section of Group II.",
      diagramLabel: "L8",
      dPgF: -0.0045,
      nC: 1.51385,
      nF: 1.52191,
      ng: 1.5262,
    },
  ],

  surfaces: [
    { label: "1", R: 21.977, d: 1.2, sd: 7.05, medium: 1 },
    { label: "2", R: 7.174, d: 2.56, sd: 5.6 },
    { label: "3", R: 14.459, d: 1.2, sd: 5.1, medium: 2 },
    {
      label: "4A",
      R: 4.641,
      d: 8.21,
      sd: 4.45,
      asphere: { K: -0.85391, A4: 1.14455e-4, A6: -4.25901e-6, A8: -1.59355e-8, A10: -2.97123e-9, A12: 0, A14: 0 },
    },
    { label: "5", R: 15.107, d: 1.79, sd: 4.1, medium: 3 },
    { label: "6", R: -86.292, sd: 4.1 },
    { label: "STO", R: "flat" },
    { label: "8", R: 33.384, d: 1.91, sd: 4.35, medium: 4 },
    { label: "9", R: -8.3, d: 1, sd: 4.55, medium: 5 },
    { label: "10", R: -23.278, d: 0.2, sd: 4.7 },
    { label: "11", R: 12.189, d: 1, sd: 4.75, medium: 6 },
    { label: "12", R: 8.277, d: 2.41, sd: 4.65, medium: 7 },
    { label: "13", R: -67.66, d: 2.94, sd: 4.6 },
    {
      label: "14A",
      R: 14.303,
      d: 1.37,
      sd: 4.4,
      medium: 8,
      asphere: { K: 0, A4: -3.89523e-4, A6: 2.62694e-6, A8: -1.62806e-7, A10: 1.73934e-9, A12: 0, A14: 0 },
    },
    { label: "15", R: 50.393, sd: 4.2 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "PUBLISHED patent states only: infinity to 300 mm object-to-image-plane focus. Group I shifts 0.10 mm imageward while Group II shifts 0.14 mm objectward; the stop remains fixed. The production 1 cm macro endpoint is not reconstructed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "6": { label: "D(A)", values: [[6.12, 6.02]] },
    STO: { label: "D(B)", values: [[3.82, 3.68]] },
    "15": { label: "C", values: [[5.52, 5.66]] },
  },

  aperture: { nominalFNumber: 1.93, fStops: [1.93, 2, 2.8, 4, 5.6, 8, 9], maxFNumber: 9 },

  /* ── Equivalent sensor-cover / color-filter plate (patent surfaces 16–17): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.24,
      nd: 1.5,
      vd: 64.0,
      gapAfterMm: 0.899809409564313,
      source:
        "JP 2010-72639 A, Example 4 Table 10 surfaces 16–17; gap to image derived, not printed (previous normalized 7.2464760762 mm air-equivalent BF − 5.52 − 1.24/1.50000)",
    },
  ],

  groups: [
    { text: "GROUP I", fromSurface: "1", toSurface: "6" },
    { text: "GROUP II", fromSurface: "8", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
