// This import is correct for a root-level draft. generate:metadata will rewrite it after maker-folder organization.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER ULTRON 27mm f/2                                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2024-167569 A, Example 1 (Cosina Co., Ltd.; Tatsuya         ║
 * ║ Moriyama). Six elements in four groups; all refracting surfaces spherical.  ║
 * ║ Production correlation: Cosina ULTRON 27mm F2 X-mount.                      ║
 * ║ Focus status: PUBLISHED unit focus. The complete optical assembly moves;    ║
 * ║ only D11 changes in this fixed-camera reference model.                      ║
 * ║                                                                            ║
 * ║ SOURCE CORRECTIONS:                                                         ║
 * ║ - Patent ¶0024 prints L-H = 58.5290 mm; Table 4 and the prescription give   ║
 * ║   38.5290 mm.                                                               ║
 * ║ - Patent ¶0028 prints f = 27.20 mm; Table 1 and Table 4 give 27.80 mm.       ║
 * ║ - The printed positive-slope L4 nd–νd inequality is defective; Figure 2     ║
 * ║   implies the negative slope used for condition evaluation.                 ║
 * ║ - The prose calls L1r and L2f negative menisci, but Table 1 radii make both ║
 * ║   elements biconcave.                                                       ║
 * ║ - The prose calls L3 plano-convex, but its finite R8 = +430.535 mm makes it ║
 * ║   a weak-front biconvex positive element.                                   ║
 * ║                                                                            ║
 * ║ SCALING: None. Patent dimensions are retained directly.                     ║
 * ║                                                                            ║
 * ║ STOP AND SEMI-DIAMETERS:                                                    ║
 * ║ - The patent omits clear apertures. STO sd = 5.71192 mm is derived from     ║
 * ║   the patent F-number 2.0441 and the traced entrance pupil.                 ║
 * ║ - Group-envelope maxima are measured from patent Fig. 1 (7.8 / 6.8 /       ║
 * ║   8.0 / 9.2 mm); within-element rim proportions remain preserved.            ║
 * ║ - The selected SDs preserve positive edge thickness, actual rim slopes      ║
 * ║   below the current limit, cross-gap clearance, and representative          ║
 * ║   off-axis-ray containment at infinity and close focus.                     ║
 * ║                                                                            ║
 * ║ SPECTRAL DATA:                                                              ║
 * ║ - nd and νd are the patent's d-line prescription values.                    ║
 * ║ - nC, nF, ng, and dPgF are vendor-catalog values. HOYA line indices were    ║
 * ║   evaluated from the catalog dispersion formula; HIKARI and OHARA values    ║
 * ║   were transcribed from their current data sheets.                           ║
 * ║                                                                            ║
 * ║ OMITTED: No sensor cover glass, filter, inactive dummy plane, flare cutter, ║
 * ║ or mechanical component is part of the sequential optical model.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-ultron-27mm-f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON 27mm f/2",
  subtitle: "JP 2024-167569 A Example 1 — production correlation to ULTRON 27mm F2 X-mount",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "PATENT f = 27.8000 mm",
    "PATENT F/2.0441",
    "2ω = 53.6546°",
    "ALL-SPHERICAL",
    "PUBLISHED UNIT FOCUS",
  ],

  focalLengthMarketing: 27,
  focalLengthDesign: 27.8,
  apertureMarketing: 2,
  apertureDesign: 2.0441,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "JP 2024-167569 A",
  patentAuthors: ["Tatsuya Moriyama"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2024,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1f",
      label: "Front Doublet — Positive Element",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 16.4273,
      glass: "TAFD37A (HOYA)",
      nC: 1.893326,
      nF: 1.917419,
      ng: 1.931313,
      dPgF: -0.0043,
      cemented: "D1",
      role: "Front positive collector in the first positive cemented group.",
    },
    {
      id: 2,
      name: "L1r",
      label: "Front Doublet — Negative Element",
      type: "Biconcave Negative",
      nd: 1.76181,
      vd: 26.58,
      fl: -27.3216,
      glass: "J-SF14 (HIKARI)",
      apd: "inferred",
      apdNote: "Cosina's production section marks this element as anomalous-dispersion glass; HIKARI ΔPgF = +0.0130.",
      nC: 1.75358,
      nF: 1.782237,
      ng: 1.799796,
      dPgF: 0.013,
      cemented: "D1",
      role: "Negative cemented partner providing axial-color and off-axis-aberration correction.",
    },
    {
      id: 3,
      name: "L2f",
      label: "Rear Doublet — Negative Element",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -10.183,
      glass: "FDS90 (HOYA)",
      nC: 1.836492,
      nF: 1.872089,
      ng: 1.89413,
      dPgF: 0.0137,
      cemented: "D2",
      role: "Strong negative front member of the second cemented component behind the stop.",
    },
    {
      id: 4,
      name: "L2r",
      label: "Rear Doublet — Positive Element",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 12.033,
      glass: "TAFD37A (HOYA)",
      nC: 1.893326,
      nF: 1.917419,
      ng: 1.931313,
      dPgF: -0.0043,
      cemented: "D2",
      role: "Strong positive cemented partner; the doublet is weakly positive in situ.",
    },
    {
      id: 5,
      name: "L3",
      label: "High-Index Positive Singlet",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 30.8784,
      glass: "TAFD55 (HOYA)",
      nC: 1.991046,
      nF: 2.025404,
      ng: 2.046001,
      dPgF: 0.0036,
      role: "High-index positive singlet satisfying the patent's nd > 1.9 condition.",
    },
    {
      id: 6,
      name: "L4",
      label: "Rear Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.65411,
      vd: 39.68,
      fl: -43.7707,
      glass: "S-NBH5 (OHARA)",
      apd: "patent",
      apdNote: "Patent-designated anomalous-dispersion rear meniscus; OHARA Δθg,F = -0.0036.",
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
      dPgF: -0.0036,
      role: "Rear negative meniscus used to shorten back focus and control field aberrations.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 19.193, d: 3.1, nd: 1.90043, elemId: 1, sd: 7.8 },
    { label: "2", R: -59.566, d: 0.9, nd: 1.76181, elemId: 2, sd: 7.8 },
    { label: "3", R: 32.202, d: 2.1, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "STO", R: 1e15, d: 4.84, nd: 1.0, elemId: 0, sd: 5.71192 },
    { label: "5", R: -10.126, d: 1.2, nd: 1.84666, elemId: 3, sd: 5.9 },
    { label: "6", R: 61.183, d: 3.87, nd: 1.90043, elemId: 4, sd: 6.8 },
    { label: "7", R: -12.772, d: 0.15, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "8", R: 430.535, d: 2.3, nd: 2.001, elemId: 5, sd: 8.0 },
    { label: "9", R: -33.211, d: 3.89, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "10", R: -12.646, d: 0.9, nd: 1.65411, elemId: 6, sd: 8.1 },
    { label: "11", R: -23.288, d: 15.2788, nd: 1.0, elemId: 0, sd: 9.2 },
  ],

  asph: {},

  /* ── Published unit-focus state ── */
  var: {
    "11": [15.2788, 19.41],
  },
  varLabels: [["11", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "5", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  closeFocusM: 0.24906,
  focusDescription:
    "PUBLISHED unit focus: the complete optical assembly translates 4.1312 mm toward the object. D11 changes from 15.2788 mm at infinity to 19.41 mm at the published 0.24906 m object-plane-to-image-plane conjugate; all internal gaps remain fixed.",

  nominalFno: 2.0441,
  fstopSeries: [2.0441, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 10,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
