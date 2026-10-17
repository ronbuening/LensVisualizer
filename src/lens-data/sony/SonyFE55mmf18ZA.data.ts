import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY SONNAR T* FE 55mm F1.8 ZA              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0092100 A1, Example 1 (Tables 1–3;          ║
 * ║    Sony Corporation / Yonghua Chen, Naoki Miyagawa).               ║
 * ║  Three-group inner-focus design, positive–negative–positive.       ║
 * ║  7 elements / 5 groups, 5 aspherical surfaces on 3 elements.      ║
 * ║  Focus: inner focus — G2 (single element L21) translates along    ║
 * ║    the axis. G1, STO, and G3 are fixed.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not published in the patent. Estimated via combined marginal    ║
 * ║    + chief ray trace at the design f-number and 60% field          ║
 * ║    fraction, with ~10% mechanical clearance. Front elements        ║
 * ║    constrained by 49 mm filter thread diameter.                    ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent publishes variable gaps at infinity and β = −0.033       ║
 * ║    (~1.68 m). Close-focus gaps at MFD = 0.5 m are extrapolated    ║
 * ║    via paraxial inner-focus solve (D7 + D9 = 16.48 mm constant). ║
 * ║                                                                    ║
 * ║  COVER GLASS:                                                      ║
 * ║    Patent Table 1 surfaces 14–15 (optical member SG, 2.00 mm,      ║
 * ║    nd 1.516798, νd 64.2) and the 1.00 mm air gap to the image      ║
 * ║    are modeled in `rearPlates` (traced, not drawn). Surface 13     ║
 * ║    keeps the patent's 11.78 mm gap to SG.                          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`)  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * MTF image-plane audit (2026-09-25): US20150092100A1 Example 1, Tables 1–3
 * (PDF p. 26) matches every radius, spacing, nd/vd and aspheric coefficient.
 * The physical SG stack is already complete: 11.78 mm air + 2 mm glass
 * (n=1.516798) + 1 mm air. The printed infinity state gives EFL 53.612458 mm
 * (53.61 printed), but paraxial focus is 0.039278 mm behind the authored plane.
 * No single transcription error was found. Retain the published plane; a
 * finite-aperture best-focus interpretation is possible, not established.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-sonnar-fe-55f18-za",
  maker: "Sony",
  name: "SONY SONNAR T* FE 55mm f/1.8 ZA",
  subtitle: "US 2015/0092100 A1 Example 1 — Sony / Chen, Miyagawa",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 53.6 mm", "F/1.8", "2ω ≈ 43°", "5 ASPHERICAL SURFACES (3 ELEMENTS)"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 55, design: 53.61 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "US 2015/0092100 A1",
    patentYear: 2015,
    authors: ["Yonghua Chen", "Naoki Miyagawa"],
    assignees: ["Sony Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: -36.6,
      glass: "E-FL5 (HOYA)",
      apd: false,
      role: "Front negative of G1 first doublet. Diverges incoming beam to reduce ray height on subsequent positive elements, moderating their spherical aberration contribution. Provides chromatic under-correction that L12 compensates.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 33.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive of G1 first doublet. Lanthanum crown provides strong convergence with controlled SA contribution. Cemented interface with L11 produces near-achromatic correction for the first doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.846663,
      vd: 23.8,
      focalLengthMm: -119.9,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Rear negative of G1 second doublet. Dense flint with high dispersion provides chromatic correction, negative Petzval contribution for field flattening, and gentle curvatures from the high index.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.768015,
      vd: 49.2,
      focalLengthMm: 37.6,
      glass: "M-TAF101 (HOYA)",
      apd: false,
      role: "Rear positive of G1 second doublet. Aspherical rear surface (S6A) corrects residual spherical aberration from G1 before the aperture stop. Moldable lanthanum flint consistent with PGM aspherical fabrication.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.487489,
      vd: 70.4,
      focalLengthMm: -49.3,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Focus group (G2). Double-sided aspherics control SA and coma variation during focus travel. Low-index fluorocrown minimizes weight for linear-motor AF and suppresses chromatic focus shift.",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.592014,
      vd: 67.0,
      focalLengthMm: 38.9,
      glass: "Fluorocrown / phosphate crown, PGM class (592/670, uncertain)",
      apd: false,
      role: "G3 front sub-group (GF). Primary positive relay element; nearly symmetric biconvex form with double-sided aspherics for higher-order SA, coma, and astigmatism correction. Thickest element in the system (12 mm).",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -49.3,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "G3 rear sub-group (GR). Negative field-flattener and distortion corrector. High dispersion relative to L31 provides chromatic correction across the G3 sub-system. Positioned far from stop for maximum off-axis leverage.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── G1: First cemented doublet (L11 + L12) ──
    { label: "1", R: -46.604, d: 3.78, sd: 19.5, medium: 1 },
    { label: "2", R: 40.397, d: 7.54, sd: 19.5, medium: 2 },
    { label: "3", R: -58.437, d: 0.4, sd: 18.4 },

    // ── G1: Second cemented doublet (L13 + L14) ──
    { label: "4", R: 32.361, d: 1.6, sd: 18.5, medium: 3 },
    { label: "5", R: 23.982, d: 5.44, sd: 18.0, medium: 4 },
    {
      label: "6A",
      R: 127.461,
      d: 2.78,
      sd: 15.5,
      asphere: { K: 0, A4: 4.72026e-6, A6: -6.13511e-9, A8: 3.19538e-11, A10: -5.08717e-14 },
    },

    // ── Aperture stop ──
    { label: "STO", R: "flat" },

    // ── G2: Focus group (L21) ──
    {
      label: "8A",
      R: 229.883,
      d: 1.0,
      sd: 13.5,
      medium: 5,
      asphere: { K: 0, A4: -1.53071e-5, A6: 5.95902e-8, A8: -1.03151e-10, A10: -1.18635e-13 },
    },
    {
      label: "9A",
      R: 21.728,
      sd: 13.0,
      asphere: { K: 0, A4: -1.66843e-5, A6: 5.20407e-8, A8: 3.77076e-12, A10: -6.66338e-13 },
    },

    // ── G3: Front sub-group GF (L31) ──
    {
      label: "10A",
      R: 43.205,
      d: 12.0,
      sd: 16.5,
      medium: 6,
      asphere: { K: 0, A4: 4.5895e-6, A6: -1.29121e-8, A8: 7.03681e-11, A10: -6.07907e-13 },
    },
    {
      label: "11A",
      R: -44.134,
      d: 12.35,
      sd: 16.5,
      asphere: { K: 0, A4: -3.28037e-6, A6: -2.72677e-8, A8: 9.31069e-11, A10: -5.99753e-13 },
    },

    // ── G3: Rear sub-group GR (L32) ──
    { label: "12", R: -18.057, d: 1.2, sd: 13.5, medium: 7 },
    // Last surface: patent gap to the optical member SG
    { label: "13", R: -39.016, d: 11.78, sd: 13.5 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    /* ── Variable air spacings (inner focus) ──
     *  G2 (L21) translates along axis; D_STO and D_9A change.
     *  Patent infinity and beta=-0.033 states precede the reconstructed 0.5 m
     *  endpoint (gap sum = 16.48 mm conserved).
     */
    keyframes: [0, 0.2855768087246185, 1],
    description:
      "Inner focus: the patent beta=-0.033 row is exact before the constrained 0.5 m endpoint. G2 (single element L21) translates while G1, STO, and G3 remain fixed.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: { STO: { label: "D7", values: [[2.81, 4.07, 8.08]] }, "9A": { label: "BF", values: [[13.67, 12.41, 8.4]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Optical member SG (patent Table 1 surfaces 14–15): traced, not drawn ── */
  rearPlates: [
    {
      label: "SG",
      thicknessMm: 2.0,
      nd: 1.516798,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "US 2015/0092100 A1, Example 1 Table 1 surfaces 14–15",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6A" },
    { text: "G2 (−)", fromSurface: "8A", toSurface: "9A" },
    { text: "G3 (+)", fromSurface: "10A", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
