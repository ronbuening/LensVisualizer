// This import is correct for a root-level draft. generate:metadata will rewrite it after maker-folder organization.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ - The patent omits clear apertures. The stop radius is derived from the     ║
 * ║   design f-number, the patent F-number 2.0441, using the traced entrance    ║
 * ║   pupil.                                                                    ║
 * ║ - Group-envelope maxima are measured from patent Fig. 1 (7.8 / 6.8 /       ║
 * ║   8.0 / 9.2 mm); within-element rim proportions remain preserved.            ║
 * ║ - The selected SDs preserve positive edge thickness, actual rim slopes      ║
 * ║   below the current limit, cross-gap clearance, and representative          ║
 * ║   off-axis-ray containment at infinity and close focus.                     ║
 * ║                                                                            ║
 * ║ SPECTRAL DATA:                                                              ║
 * ║ - nd and νd are the patent's d-line prescription values.                    ║
 * ║ - nC, nF, and ng are vendor-catalog values. HOYA line indices were          ║
 * ║   evaluated from the catalog dispersion formula; HIKARI and OHARA values    ║
 * ║   were transcribed from their current data sheets.                          ║
 * ║                                                                            ║
 * ║ NOTE ON PARTIAL DISPERSION:                                                 ║
 * ║ - The patent prints no PgF and defines no deviation formula. `dPgF` is      ║
 * ║   the PgF of the authored nC/nF/ng minus the engine's normal line           ║
 * ║   (0.6438 − 0.001682·νd). It is not a vendor data-sheet ΔPgF: each vendor   ║
 * ║   measures that from its own line (the HOYA FDS90 and TAFD55 figures fit    ║
 * ║   0.64833 − 0.0018·νd).                                                     ║
 * ║ - All six elements author nC/nF/ng, so the trace uses those indices and     ║
 * ║   `dPgF` is an annotation.                                                  ║
 * ║                                                                            ║
 * ║ OMITTED: No sensor cover glass, filter, inactive dummy plane, flare cutter, ║
 * ║ or mechanical component is part of the sequential optical model.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-ultron-27mm-f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON 27mm f/2",
  subtitle: "JP 2024-167569 A Example 1 — production correlation to ULTRON 27mm F2 X-mount",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "PATENT f = 27.8000 mm",
      "PATENT F/2.0441",
      "2ω = 53.6546°",
      "ALL-SPHERICAL",
      "PUBLISHED UNIT FOCUS",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 27, design: 27.8 },
    fNumber: { marketing: 2, design: 2.0441 },
  },

  source: {
    patentNumber: "JP 2024-167569 A",
    patentYear: 2024,
    authors: ["Tatsuya Moriyama"],
    assignees: ["Cosina Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1f",
      label: "Front Doublet — Positive Element",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      focalLengthMm: 16.4273,
      glass: "TAFD37A (HOYA)",
      role: "Front positive collector in the first positive cemented group.",
      cemented: "D1",
      dPgF: -0.0043,
      nC: 1.893326,
      nF: 1.917419,
      ng: 1.931313,
    },
    {
      id: 2,
      name: "L1r",
      label: "Front Doublet — Negative Element",
      type: "Biconcave Negative",
      nd: 1.76181,
      vd: 26.58,
      focalLengthMm: -27.3216,
      glass: "J-SF14 (HIKARI)",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this element as anomalous-dispersion glass. The patent prints no partial dispersion; the authored HIKARI nC/nF/ng give PgF = 0.6127 (HIKARI data-sheet ΔPgF = +0.0130 on the vendor's own line), runtime dPgF +0.013637.",
      role: "Negative cemented partner providing axial-color and off-axis-aberration correction.",
      cemented: "D1",
      dPgF: 0.013637,
      nC: 1.75358,
      nF: 1.782237,
      ng: 1.799796,
    },
    {
      id: 3,
      name: "L2f",
      label: "Rear Doublet — Negative Element",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -10.183,
      glass: "FDS90 (HOYA)",
      role: "Strong negative front member of the second cemented component behind the stop.",
      cemented: "D2",
      dPgF: 0.015379,
      nC: 1.836492,
      nF: 1.872089,
      ng: 1.89413,
    },
    {
      id: 4,
      name: "L2r",
      label: "Rear Doublet — Positive Element",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      focalLengthMm: 12.033,
      glass: "TAFD37A (HOYA)",
      role: "Strong positive cemented partner; the doublet is weakly positive in situ.",
      cemented: "D2",
      dPgF: -0.0043,
      nC: 1.893326,
      nF: 1.917419,
      ng: 1.931313,
    },
    {
      id: 5,
      name: "L3",
      label: "High-Index Positive Singlet",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 30.8784,
      glass: "TAFD55 (HOYA)",
      role: "High-index positive singlet satisfying the patent's nd > 1.9 condition.",
      dPgF: 0.004679,
      nC: 1.991046,
      nF: 2.025404,
      ng: 2.046001,
    },
    {
      id: 6,
      name: "L4",
      label: "Rear Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.65411,
      vd: 39.68,
      focalLengthMm: -43.7707,
      glass: "S-NBH5 (OHARA)",
      apd: "patent",
      apdNote:
        "Patent-designated anomalous-dispersion rear meniscus; the patent prints no partial dispersion. The authored OHARA nC/nF/ng give PgF = 0.5740 (OHARA data-sheet Δθg,F = -0.0036 on the vendor's own line), runtime dPgF -0.003029.",
      role: "Rear negative meniscus used to shorten back focus and control field aberrations.",
      dPgF: -0.003029,
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 19.193, d: 3.1, sd: 7.8, medium: 1 },
    { label: "2", R: -59.566, d: 0.9, sd: 7.8, medium: 2 },
    { label: "3", R: 32.202, d: 2.1, sd: 6.9 },
    { label: "STO", R: "flat", d: 4.84 },
    { label: "5", R: -10.126, d: 1.2, sd: 5.9, medium: 3 },
    { label: "6", R: 61.183, d: 3.87, sd: 6.8, medium: 4 },
    { label: "7", R: -12.772, d: 0.15, sd: 6.7 },
    { label: "8", R: 430.535, d: 2.3, sd: 8.0, medium: 5 },
    { label: "9", R: -33.211, d: 3.89, sd: 8.0 },
    { label: "10", R: -12.646, d: 0.9, sd: 8.1, medium: 6 },
    { label: "11", R: -23.288, sd: 9.2 },
  ],

  focus: {
    closeFocusM: 0.24906,
    description:
      "PUBLISHED unit focus: the complete optical assembly translates 4.1312 mm toward the object. D11 changes from 15.2788 mm at infinity to 19.41 mm at the published 0.24906 m object-plane-to-image-plane conjugate; all internal gaps remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published unit-focus state ── */
  gaps: { "11": { label: "BF", values: [[15.2788, 19.41]] } },

  aperture: { nominalFNumber: 2.0441, fStops: [2.0441, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 10 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "5", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
