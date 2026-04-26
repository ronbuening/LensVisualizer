/**
 * Canon RF 15-35mm f/2.8 L IS USM
 *
 * Patent:      US 2020/0257181 A1 (Gyoda, Canon), Numerical Example 1
 * Published:   August 13, 2020
 * Priority:    JP 2019-021356, February 8, 2019
 *
 * Prescription at design scale (not rescaled to marketing focal lengths).
 * Zoom positions: 15.45 / 24.00 / 33.95 mm (patent-stated EFL).
 * Constant f/2.91 across zoom range (marketed as f/2.8).
 *
 * Flare cutting stop (patent surface 21, R = ∞, between B4 and B5) has been
 * removed from the prescription. Its variable air gap is combined with the
 * preceding fixed gap (patent surface 20, d = 3.52 mm) into a single variable
 * gap at surface "20". At the telephoto end, the original FS gap was −1.05 mm
 * (physically overlapping the B5 front vertex); the combined gap is +2.47 mm,
 * satisfying the non-negative thickness validation constraint. Removing the FS
 * does not affect paraxial ray tracing — verified computationally.
 *
 * Close-focus spacing data is not provided in this patent. All var pairs use
 * identical [d_inf, d_inf] values. Focus slider is inoperative.
 *
 * A16 aspherical coefficients are present in the patent for surfaces 1*, 3*,
 * and 27* but are omitted here as the renderer's sag equation extends only
 * to A14. Maximum sag error from this omission is ~3 μm at the rim of
 * surface 1* — negligible for visualization.
 *
 * Semi-diameters start from the patent "Effective diameter" column ÷ 2, then
 * receive a modest construction-diagram pass so the rendered element outlines
 * track Canon's published section more closely. L1 front/rear SDs keep the full
 * patent values (27.52 / 18.92 mm) now that the renderer uses slope-based
 * validation instead of the old sd/|R| ratio check. The near-paraboloidal rear
 * surface (K = −0.981) has a gentle slope at these SDs (~49°, well under the
 * 64° threshold for spheres at sd/|R| = 0.9). STO semi-diameter uses the
 * wide-angle value (16.52 / 2 = 8.26 mm).
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "canon-rf-15-35-f28",
  name: "CANON RF 15-35mm f/2.8 L IS USM",
  maker: "Canon",
  subtitle: "US 2020/0257181 A1 · Example 1",
  specs: [
    "16 elements / 12 groups",
    "3 aspherical elements (6 surfaces)",
    "2 UD elements",
    "Optical IS (B4 shift)",
    "Inner focus (B2)",
  ],

  focalLengthMarketing: [15, 35] as [number, number],
  focalLengthDesign: [15.45, 33.95] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  patentYear: 2020,
  elementCount: 16,
  groupCount: 12,
  focusDescription:
    "Inner focus via B2 (L5, L6+L7). B2 moves image-ward for close focus. " +
    "No barrel extension; constant overall length during focus at each zoom position.",

  // ─── Zoom ───────────────────────────────────────────────────────────────────
  zoomPositions: [15.45, 24.0, 33.95],
  zoomLabels: ["Wide", "Tele"],

  // ─── Elements (front to rear) ──────────────────────────────────────────────
  elements: [
    // ── B1: Front negative group (f = −21.75 mm) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -28.51,
      glass: "S-BAL42 (OHARA)",
      role: "Front negative meniscus; double-asph with near-paraboloidal rear surface (K = −0.981). Primary negative power in B1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -96.46,
      glass: "S-LAH65V (OHARA)",
      role: "Supplementary negative asphere in B1; field-flattening and distortion correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      fl: -50.16,
      glass: "S-FPM2 (OHARA)",
      role: "Negative element in fluorophosphate crown; limits chromatic load from front group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      fl: 47.0,
      glass: "S-NPH1 (OHARA)",
      role: "Sole positive element in B1; partially offsets net negative power and contributes positive chromatic aberration to partially compensate L1–L3.",
    },
    // ── B2: Positive variator / focus unit (f = +73.31 mm) ──
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      fl: 72.07,
      glass: "S-TIH53 (OHARA)",
      role: "Primary positive power in B2 (focus unit).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: -44.91,
      glass: "S-NPH2 (OHARA)",
      cemented: "D1",
      role: "Negative element of achromatic corrector doublet D1 in B2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.8,
      fl: 45.2,
      glass: "S-TIL6 (OHARA)",
      cemented: "D1",
      role: "Positive element of D1; near-zero net power doublet corrects chromatic and spherical aberration from L5.",
    },
    // ── B3: Positive relay doublet (f = +52.20 mm) ──
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -72.66,
      glass: "TAFD25 (HOYA)",
      cemented: "D2",
      role: "Highest-index glass in system (nd > 2.0); negative element of achromatic relay doublet D2.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 30.24,
      glass: "S-FPM3 (OHARA)",
      cemented: "D2",
      role: "Positive crown in D2; Δνd = 49.2 provides strong achromatization in the relay section.",
    },
    // ── B4: Negative IS unit (f = −63.99 mm) ──
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 31.5,
      glass: "S-NPH2 (OHARA)",
      cemented: "D3",
      role: "Positive element of IS doublet D3; cemented construction ensures corrected aberrations during image stabilization shift.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -21.72,
      glass: "S-LAH55V (OHARA)",
      cemented: "D3",
      role: "Dominant negative element of IS unit; B4 shifts orthogonal to axis for image stabilization.",
    },
    // ── B5: Positive rear group / PL unit (f = +51.49 mm) ──
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 40.0,
      glass: "S-FPL51 / FCD1 (OHARA / HOYA)",
      apd: "inferred" as const,
      apdNote: "Canon UD designation; fluorophosphate crown with νd = 81.6",
      role: "First UD element; primary lateral chromatic aberration corrector at wide end.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 33.68,
      glass: "S-FPL51 / FCD1 (OHARA / HOYA)",
      apd: "inferred" as const,
      apdNote: "Canon UD designation; fluorophosphate crown with νd = 81.6",
      cemented: "D4",
      role: "Second UD element; cemented with L14 for combined lateral color and Petzval correction.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 2.0509,
      vd: 26.9,
      fl: -21.79,
      glass: "TAFD45 (HOYA)",
      cemented: "D4",
      role: "Ultra-high-index negative in D4; Δνd = 54.7 (strongest achromatic pair). Negative Petzval contribution moderates field curvature.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -93.22,
      glass: "S-LAH65V (OHARA)",
      role: "Third aspherical element; double-asph surfaces correct field curvature, astigmatism, and distortion at the image side.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 87.31,
      glass: "S-NPH2 (OHARA)",
      role: "Rearmost element; gentle curvatures from high index. Fluorine-coated in production.",
    },
  ],

  // ─── Surfaces (front to rear) ──────────────────────────────────────────────
  // Patent surface 21 (flare cutting stop FS) removed; its variable gap is
  // combined into surface "20" (see file header comment).
  surfaces: [
    // ── B1 ──
    { label: "1A", R: 3000.0, d: 2.85, nd: 1.58313, elemId: 1, sd: 27.52 },
    { label: "2A", R: 16.526, d: 10.57, nd: 1.0, elemId: 0, sd: 18.92 },
    { label: "3A", R: -809.327, d: 2.25, nd: 1.854, elemId: 2, sd: 18.23 },
    { label: "4A", R: 91.828, d: 5.56, nd: 1.0, elemId: 0, sd: 15.74 },
    { label: "5", R: -53.256, d: 1.2, nd: 1.59522, elemId: 3, sd: 15.59 },
    { label: "6", R: 68.528, d: 0.15, nd: 1.0, elemId: 0, sd: 15.44 },
    { label: "7", R: 43.587, d: 5.03, nd: 1.85478, elemId: 4, sd: 13.25 },
    { label: "8", R: -485.244, d: 25.32, nd: 1.0, elemId: 0, sd: 13.0 },
    // ── B2 (focus unit) ──
    { label: "9", R: 63.607, d: 2.67, nd: 1.84666, elemId: 5, sd: 12.32 },
    { label: "10", R: -1472.964, d: 0.15, nd: 1.0, elemId: 0, sd: 12.39 },
    { label: "11", R: 52.737, d: 1.0, nd: 1.92286, elemId: 6, sd: 11.35 },
    { label: "12", R: 22.996, d: 5.41, nd: 1.53172, elemId: 7, sd: 11.05 },
    { label: "13", R: 489.976, d: 8.24, nd: 1.0, elemId: 0, sd: 11.2 },
    // ── SP (Fno stop) ──
    { label: "STO", R: 1e15, d: 13.71, nd: 1.0, elemId: 0, sd: 8.26 },
    // ── B3 ──
    { label: "15", R: 27.733, d: 1.2, nd: 2.00069, elemId: 8, sd: 15.25 },
    { label: "16", R: 19.641, d: 9.29, nd: 1.53775, elemId: 9, sd: 15.0 },
    { label: "17", R: -78.882, d: 1.6, nd: 1.0, elemId: 0, sd: 14.8 },
    // ── B4 (IS unit) ──
    { label: "18", R: -67.558, d: 4.31, nd: 1.92286, elemId: 10, sd: 10.99 },
    { label: "19", R: -20.948, d: 0.77, nd: 1.834, elemId: 11, sd: 11.24 },
    { label: "20", R: 136.126, d: 10.56, nd: 1.0, elemId: 0, sd: 11.89 },
    // ── B5 (PL unit) ──
    { label: "22", R: 30.487, d: 11.2, nd: 1.497, elemId: 12, sd: 17.43 },
    { label: "23", R: -50.182, d: 0.15, nd: 1.0, elemId: 0, sd: 17.34 },
    { label: "24", R: 40.928, d: 11.0, nd: 1.497, elemId: 13, sd: 17.0 },
    { label: "25", R: -25.8, d: 1.2, nd: 2.0509, elemId: 14, sd: 16.6 },
    { label: "26", R: 208.835, d: 4.54, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "27A", R: -73.669, d: 2.1, nd: 1.854, elemId: 15, sd: 14.78 },
    { label: "28A", R: -1000.0, d: 0.15, nd: 1.0, elemId: 0, sd: 16.06 },
    { label: "29", R: 216.036, d: 3.4, nd: 1.92286, elemId: 16, sd: 17.13 },
    { label: "30", R: -127.538, d: 14.0, nd: 1.0, elemId: 0, sd: 17.44 },
  ],

  // ─── Aspherical coefficients ───────────────────────────────────────────────
  // Patent includes A16 for surfaces 1*, 3*, 27* — omitted (negligible contribution at production SDs).
  asph: {
    "1A": {
      K: 0,
      A4: 8.30213e-6,
      A6: -1.33976e-8,
      A8: 4.25008e-11,
      A10: -8.60253e-14,
      A12: 1.03363e-16,
      A14: -7.03702e-20,
    },
    "2A": {
      K: -9.81344e-1,
      A4: 4.49709e-7,
      A6: -2.34544e-8,
      A8: -1.05516e-10,
      A10: 8.07443e-13,
      A12: -2.78552e-15,
      A14: 3.05128e-18,
    },
    "3A": {
      K: 0,
      A4: -9.01759e-6,
      A6: -1.39642e-7,
      A8: 1.23272e-9,
      A10: -3.49283e-12,
      A12: 3.62808e-15,
      A14: 5.24953e-19,
    },
    "4A": {
      K: 0,
      A4: 6.34981e-6,
      A6: -1.29871e-7,
      A8: 1.6792e-9,
      A10: -6.48374e-12,
      A12: 1.50043e-14,
      A14: -1.59777e-17,
    },
    "27A": {
      K: 0,
      A4: -8.04129e-5,
      A6: 2.64851e-7,
      A8: -1.06038e-9,
      A10: 4.87911e-12,
      A12: -8.56493e-15,
      A14: -1.1788e-18,
    },
    "28A": {
      K: 0,
      A4: -6.00659e-5,
      A6: 2.67376e-7,
      A8: -7.05021e-10,
      A10: 2.04492e-12,
      A12: -2.97985e-15,
      A14: 0,
    },
  },

  // ─── Variable air spacings (zoom format) ───────────────────────────────────
  // No close-focus data in patent; all pairs are [d_inf, d_inf].
  // Surface "20" = combined patent d20 (3.52 fixed) + d21 (FS variable).
  var: {
    "8": [
      [25.32, 25.32],
      [7.72, 7.72],
      [1.5, 1.5],
    ],
    "13": [
      [8.24, 8.24],
      [11.3, 11.3],
      [7.4, 7.4],
    ],
    STO: [
      [13.71, 13.71],
      [5.42, 5.42],
      [0.71, 0.71],
    ],
    "17": [
      [1.6, 1.6],
      [9.89, 9.89],
      [14.61, 14.61],
    ],
    "20": [
      [10.56, 10.56],
      [4.79, 4.79],
      [2.47, 2.47],
    ],
    "30": [
      [14.0, 14.0],
      [22.21, 22.21],
      [32.15, 32.15],
    ],
  },
  varLabels: [
    ["8", "B1–B2"],
    ["13", "B2–SP"],
    ["STO", "SP–B3"],
    ["17", "B3–B4"],
    ["20", "B4–B5"],
    ["30", "BF"],
  ],

  // ─── Group & doublet annotations ───────────────────────────────────────────
  groups: [
    { text: "B1 (−)", fromSurface: "1A", toSurface: "8" },
    { text: "B2 (+, Focus)", fromSurface: "9", toSurface: "13" },
    { text: "B3 (+)", fromSurface: "15", toSurface: "17" },
    { text: "B4 (−, IS)", fromSurface: "18", toSurface: "20" },
    { text: "B5 (+, PL)", fromSurface: "22", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "24", toSurface: "26" },
  ],

  // ─── Rendering & layout ────────────────────────────────────────────────────
  nominalFno: 2.91,
  closeFocusM: 0.28,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.5,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
