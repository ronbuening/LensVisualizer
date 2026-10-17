import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL IV)              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2010-164839 A, Example 4 (Ricoh / Yoshifumi Sudoh).        ║
 * ║ 8 elements / 6 air-separated groups, 2 aspherical surfaces.               ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the    ║
 * ║ infinity prescription; no internal focus movement is authored.             ║
 * ║                                                                            ║
 * ║ Production correlation: the job card fixes the Ricoh GR DIGITAL IV lens.   ║
 * ║ Official specifications match 6.0 mm, 8/6, and two aspheric elements /    ║
 * ║ two aspheric surfaces. The marketed f/1.9 is not numerically identical to  ║
 * ║ Example 4's F1.99 and is kept separate; GR DIGITAL III shares the same     ║
 * ║ high-level production specifications.                                      ║
 * ║                                                                            ║
 * ║ Scaling: none (s = 1.0). The computed d-line EFL is 6.002506 mm.           ║
 * ║                                                                            ║
 * ║ Rear plate: patent surfaces 16-17 (parallel plate F, filter / sensor       ║
 * ║ cover glass, 1.50 mm, N = 1.50000, ν = 64.00) are modeled in `rearPlates`  ║
 * ║ (traced, not drawn). Surface 15 keeps the printed 7.08 mm gap to F. The    ║
 * ║ patent prints no gap after F; gapAfterMm = 0.604199 mm is derived, not     ║
 * ║ printed (legacy air-equivalent paraxial BFD 8.684199 - 7.08 - 1.50/1.50),  ║
 * ║ so the paraxial image plane is unchanged. No catalog glass matches.        ║
 * ║                                                                            ║
 * ║ Asphere note: Example 4 omits K for patent surface 14. K = 0 is a          ║
 * ║ disclosed inference, consistent with the patent equation and sibling       ║
 * ║ Example 2; no sibling polynomial coefficient is imported.                  ║
 * ║                                                                            ║
 * ║ Semi-diameters: patent H values are maximum ray heights, not certified     ║
 * ║ mechanical clear apertures. Lens-surface SDs use H as lower bounds plus    ║
 * ║ 0.1-0.3 mm clearance, adjusted by nonparaxial field-ray and geometry       ║
 * ║ checks. The stop radius is derived from the design f-number F/1.99, not a  ║
 * ║ published diaphragm radius.                                                ║
 * ║                                                                            ║
 * ║ Glass: patent OHARA identities are retained. Historical S-LAH65 line data ║
 * ║ are taken from the OHARA 02-06 catalog (804466), not from S-LAH65V/VS.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ricoh-gr-lens-6mm-f19-gr-digital-iv",
  maker: "Ricoh",
  name: "RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL IV)",
  subtitle: "JP 2010-164839 A, Example 4 — GR DIGITAL IV correlation (not unique vs GR DIGITAL III)",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-1.7-inch-type",
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "6.0 mm",
      "f/1.9 marketed / f/1.99 patent design",
      "2ω = 78.2°",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 6.0, design: 6.002506074668331 },
    fNumber: { marketing: 1.9, design: 1.99 },
  },

  source: {
    patentNumber: "JP 2010-164839 A",
    patentYear: 2010,
    authors: ["Yoshifumi Sudoh"],
    assignees: ["Ricoh Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: -21.845645,
      glass: "S-FPL51 (OHARA)",
      role: "First negative lens of the patent 1F front subgroup.",
      diagramLabel: "L1",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: -14.974371,
      glass: "L-BSL7 (OHARA)",
      role: "Second negative lens of 1F; rear surface 4A is aspheric.",
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
      nd: 1.804,
      vd: 46.57,
      focalLengthMm: 16.828456,
      glass: "S-LAH65 (OHARA)",
      role: "Positive 1R singlet immediately before the stop.",
      diagramLabel: "L3",
      dPgF: -0.009,
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.8257,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 14.831177,
      glass: "S-FPL51 (OHARA)",
      role: "Positive member of the front cemented pair in patent subgroup 2F.",
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
      nd: 1.69895,
      vd: 30.13,
      focalLengthMm: -15.029575,
      glass: "S-TIM35 (OHARA)",
      role: "Negative member of the front cemented pair in patent subgroup 2F.",
      diagramLabel: "L5",
      cemented: "D1",
      dPgF: 0.0103,
      nC: 1.69222,
      nF: 1.71542,
      ng: 1.72941,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      focalLengthMm: -42.339755,
      glass: "S-NBH5 (OHARA)",
      role: "Negative member of the rear cemented pair in patent subgroup 2F.",
      diagramLabel: "L6",
      cemented: "D2",
      dPgF: -0.0036,
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 13.093199,
      glass: "S-FPL51 (OHARA)",
      role: "Positive member of the rear cemented pair in patent subgroup 2F.",
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
      type: "Biconvex Positive (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: 36.620423,
      glass: "L-BSL7 (OHARA)",
      role: "Rear 2R singlet; front surface 14A is aspheric.",
      diagramLabel: "L8",
      dPgF: -0.0045,
      nC: 1.51385,
      nF: 1.52191,
      ng: 1.5262,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 25.543, d: 1.2, sd: 7.8, medium: 1 },
    { label: "2", R: 7.5, d: 2.24, sd: 6.1 },
    { label: "3", R: 15.058, d: 1.2, sd: 5.9, medium: 2 },
    {
      label: "4A",
      R: 4.97,
      d: 9.57,
      sd: 4.9,
      asphere: {
        K: -0.4,
        A4: -4.16841e-4,
        A6: -9.42561e-6,
        A8: -1.58154e-7,
        A10: -3.26524e-9,
        A12: -3.615e-11,
        A14: 2.1958e-14,
        A16: 8.93836e-15,
        A18: -1.95337e-15,
      },
    },
    { label: "5", R: 17.656, d: 1.79, sd: 4.0, medium: 3 },
    { label: "6", R: -55.283, d: 6.35, sd: 4.0 },
    { label: "STO", R: "flat", d: 3.5 },
    { label: "8", R: -257.216, d: 2.19, sd: 3.9, medium: 4 },
    { label: "9", R: -7.186, d: 1.0, sd: 4.0, medium: 5 },
    { label: "10", R: -24.047, d: 0.2, sd: 4.4 },
    { label: "11", R: 13.244, d: 1.0, sd: 4.9, medium: 6 },
    { label: "12", R: 8.692, d: 2.96, sd: 4.9, medium: 7 },
    { label: "13", R: -22.963, d: 2.56, sd: 5.0 },
    {
      label: "14A",
      R: 21.924,
      d: 1.5,
      sd: 5.1,
      medium: 8,
      // (moved from asph["14A"].K) Example 4 omits K at surface 14; K = 0 is a disclosed modeling inference.
      asphere: { K: 0, A4: -2.85929e-4, A6: 1.93947e-6, A8: -1.43395e-7, A10: 2.11542e-9, A12: 0, A14: 0 },
    },
    { label: "15", R: -134.256, d: 7.08, sd: 5.1 },
  ],

  /* ── Focus configuration ── */
  /* (moved from var) ── No internal focus reconstruction ── */
  focus: {
    closeFocusM: 0.01,
    description:
      "NO_INTERNAL_RECONSTRUCTION: JP 2010-164839 A Example 4 publishes only the infinity prescription. The production GR DIGITAL IV reaches approximately 0.01 m in macro mode from the lens front, but no internal focus movement is reconstructed here.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.99, fStops: [1.99, 2.8, 4, 5.6, 8, 9], maxFNumber: 9 },

  /* ── Filter / cover plate F (patent surfaces 16–17): traced, not drawn ── */
  rearPlates: [
    {
      label: "F",
      thicknessMm: 1.5,
      nd: 1.5,
      vd: 64.0,
      // Not printed: legacy air-equivalent paraxial BFD 8.684199096476275 − 7.08 − 1.50/1.50000.
      gapAfterMm: 0.604199096476275,
      source: "JP 2010-164839 A, Example 4 Table 7 surfaces 16–17 (gap after derived, not printed)",
    },
  ],

  groups: [
    { text: "1F", fromSurface: "1", toSurface: "4A" },
    { text: "1R", fromSurface: "5", toSurface: "6" },
    { text: "2F", fromSurface: "8", toSurface: "13" },
    { text: "2R", fromSurface: "14A", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
