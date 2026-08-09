import type { LensDataInput } from "../../types/optics.js";

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
 * ║ Rear normalization: patent surfaces 16-17 are the parallel filter /        ║
 * ║ sensor-cover plate F and are excluded. Surface 15 d is replaced by the     ║
 * ║ independently solved air-equivalent paraxial BFD, 8.684199096476275 mm.   ║
 * ║                                                                            ║
 * ║ Asphere note: Example 4 omits K for patent surface 14. K = 0 is a          ║
 * ║ disclosed inference, consistent with the patent equation and sibling       ║
 * ║ Example 2; no sibling polynomial coefficient is imported.                  ║
 * ║                                                                            ║
 * ║ Semi-diameters: patent H values are maximum ray heights, not certified     ║
 * ║ mechanical clear apertures. Lens-surface SDs use H as lower bounds plus    ║
 * ║ 0.1-0.3 mm clearance, adjusted by nonparaxial field-ray and geometry       ║
 * ║ checks. STO sd = 3.3058820179300934 mm is the inverse paraxial F/1.99     ║
 * ║ stop-radius inference, not a published diaphragm radius.                    ║
 * ║                                                                            ║
 * ║ Glass: patent OHARA identities are retained. Historical S-LAH65 line data ║
 * ║ are taken from the OHARA 02-06 catalog (804466), not from S-LAH65V/VS.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr-lens-6mm-f19-gr-digital-iv",
  maker: "Ricoh",
  name: "RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL IV)",
  subtitle: "JP 2010-164839 A, Example 4 — GR DIGITAL IV correlation (not unique vs GR DIGITAL III)",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "6.0 mm",
    "f/1.9 marketed / f/1.99 patent design",
    "2ω = 78.2°",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 6.0,
  focalLengthDesign: 6.002506074668331,
  apertureMarketing: 1.9,
  apertureDesign: 1.99,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1/1.7-inch-type",
  patentNumber: "JP 2010-164839 A",
  patentAuthors: ["Yoshifumi Sudoh"],
  patentAssignees: ["Ricoh Co., Ltd."],
  patentYear: 2010,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: -21.845645,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      role: "First negative lens of the patent 1F front subgroup.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: -14.974371,
      glass: "L-BSL7 (OHARA)",
      nC: 1.51385,
      nF: 1.52191,
      ng: 1.5262,
      dPgF: -0.0045,
      role: "Second negative lens of 1F; rear surface 4A is aspheric.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.57,
      fl: 16.828456,
      glass: "S-LAH65 (OHARA)",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.8257,
      dPgF: -0.009,
      role: "Positive 1R singlet immediately before the stop.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 14.831177,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      cemented: "D1",
      role: "Positive member of the front cemented pair in patent subgroup 2F.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.13,
      fl: -15.029575,
      glass: "S-TIM35 (OHARA)",
      nC: 1.69222,
      nF: 1.71542,
      ng: 1.72941,
      dPgF: 0.0103,
      cemented: "D1",
      role: "Negative member of the front cemented pair in patent subgroup 2F.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      fl: -42.339755,
      glass: "S-NBH5 (OHARA)",
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
      dPgF: -0.0036,
      cemented: "D2",
      role: "Negative member of the rear cemented pair in patent subgroup 2F.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 13.093199,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      cemented: "D2",
      role: "Positive member of the rear cemented pair in patent subgroup 2F.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: 36.620423,
      glass: "L-BSL7 (OHARA)",
      nC: 1.51385,
      nF: 1.52191,
      ng: 1.5262,
      dPgF: -0.0045,
      role: "Rear 2R singlet; front surface 14A is aspheric.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 25.543, d: 1.2, nd: 1.497, elemId: 1, sd: 7.8 },
    { label: "2", R: 7.5, d: 2.24, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "3", R: 15.058, d: 1.2, nd: 1.51633, elemId: 2, sd: 5.9 },
    { label: "4A", R: 4.97, d: 9.57, nd: 1.0, elemId: 0, sd: 4.9 },
    { label: "5", R: 17.656, d: 1.79, nd: 1.804, elemId: 3, sd: 4.0 },
    { label: "6", R: -55.283, d: 6.35, nd: 1.0, elemId: 0, sd: 4.0 },
    { label: "STO", R: 1e15, d: 3.5, nd: 1.0, elemId: 0, sd: 3.3058820179300934 },
    { label: "8", R: -257.216, d: 2.19, nd: 1.497, elemId: 4, sd: 3.9 },
    { label: "9", R: -7.186, d: 1.0, nd: 1.69895, elemId: 5, sd: 4.0 },
    { label: "10", R: -24.047, d: 0.2, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "11", R: 13.244, d: 1.0, nd: 1.65412, elemId: 6, sd: 4.9 },
    { label: "12", R: 8.692, d: 2.96, nd: 1.497, elemId: 7, sd: 4.9 },
    { label: "13", R: -22.963, d: 2.56, nd: 1.0, elemId: 0, sd: 5.0 },
    { label: "14A", R: 21.924, d: 1.5, nd: 1.51633, elemId: 8, sd: 5.1 },
    { label: "15", R: -134.256, d: 8.684199096476275, nd: 1.0, elemId: 0, sd: 5.1 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "4A": {
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
    "14A": {
      // Example 4 omits K at surface 14; K = 0 is a disclosed modeling inference.
      K: 0.0,
      A4: -2.85929e-4,
      A6: 1.93947e-6,
      A8: -1.43395e-7,
      A10: 2.11542e-9,
      A12: 0,
      A14: 0,
    },
  },

  /* ── No internal focus reconstruction ── */
  var: {},
  varLabels: [],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.01,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP 2010-164839 A Example 4 publishes only the infinity prescription. The production GR DIGITAL IV reaches approximately 0.01 m in macro mode from the lens front, but no internal focus movement is reconstructed here.",

  /* ── Aperture configuration ── */
  nominalFno: 1.99,
  fstopSeries: [1.99, 2.8, 4, 5.6, 8, 9],
  maxFstop: 9,

  /* ── Layout ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
