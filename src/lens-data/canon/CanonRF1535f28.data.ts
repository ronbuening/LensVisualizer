/** US20200257181A1 Numerical Example 1, PDF pages 14–15, Figures 1A–1B.
 * Source A16 terms and published physical iris schedule retained.
 * Air-only flare diaphragm S21 remains omitted; d20+d21 preserves vertex spacing
 * but does not simulate its clipping. No cover glass or filter block is present.
 * Finite-focus gaps are unpublished and focus remains disabled.
 */

import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "canon-rf-15-35-f28",
  maker: "Canon",
  name: "CANON RF 15-35mm f/2.8 L IS USM",
  subtitle: "US 2020/0257181 A1 · Example 1",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "16 elements / 12 groups",
      "3 aspherical elements (6 surfaces)",
      "Patent nd/vd; compatible glass counterparts",
      "Centered IS (B4)",
      "Infinity-focus model",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [15, 35], design: [15.45, 33.95] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "US 2020/0257181 A1",
    patentYear: 2020,
    authors: ["Yuichi Gyoda"],
    assignees: ["Canon Inc."],
  },

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
      focalLengthMm: -28.51,
      glass: "S-BAL42 — compatible catalog counterpart; patent identity unspecified",
      role: "Neg. Meniscus (2× Asph) singlet",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      focalLengthMm: -96.46,
      glass: "L-LAH85V — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Neg. (2× Asph) singlet",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: -50.16,
      glass: "S-FPM2 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Negative singlet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 47.0,
      glass: "S-NBH56 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive singlet",
    },
    // ── B2: Positive variator / focus unit (f = +73.31 mm) ──
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 72.07,
      glass: "S-TIH53 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive singlet; source B2 focus unit",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -44.91,
      glass: "PBH21 — compatible catalog counterpart; patent identity unspecified",
      role: "Negative Meniscus element of cemented doublet D1; source B2 focus unit",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.8,
      focalLengthMm: 45.2,
      glass: "S-TIL6 — compatible catalog counterpart; patent identity unspecified",
      role: "Positive Meniscus element of cemented doublet D1; source B2 focus unit",
      cemented: "D1",
    },
    // ── B3: Positive relay doublet (f = +52.20 mm) ──
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: -72.66,
      glass: "TAFD40 — compatible catalog counterpart; patent identity unspecified",
      role: "Negative Meniscus element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      focalLengthMm: 30.24,
      glass: "S-FPM3 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive element of cemented doublet D2",
      cemented: "D2",
    },
    // ── B4: Negative IS unit (f = −63.99 mm) ──
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 31.5,
      glass: "PBH21 — compatible catalog counterpart; patent identity unspecified",
      role: "Positive Meniscus element of cemented doublet D3; centered B4 stabilization group",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -21.72,
      glass: "S-LAH60 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Negative element of cemented doublet D3; centered B4 stabilization group",
      cemented: "D3",
    },
    // ── B5: Positive rear group / PL unit (f = +51.49 mm) ──
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 40.0,
      glass: "FCD1 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive singlet",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 33.68,
      glass: "FCD1 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Biconvex Positive element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 2.0509,
      vd: 26.9,
      focalLengthMm: -21.79,
      glass: "TAFD65 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconcave Negative element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      focalLengthMm: -93.22,
      glass: "L-LAH85V — compatible catalog counterpart; patent identity unspecified",
      role: "Neg. Meniscus (2× Asph) singlet",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 87.31,
      glass: "PBH21 — compatible catalog counterpart; patent identity unspecified",
      role: "Biconvex Positive singlet",
    },
  ],

  // ─── Surfaces (front to rear) ──────────────────────────────────────────────
  // Patent surface 21 (flare cutting stop FS) removed; its variable gap is
  // combined into surface "20" (see file header comment).
  // (moved from asph) ─── Aspherical coefficients ───────────────────────────────────────────────
  // Complete source aspheric coefficients, including A16 on surfaces 1, 3 and 27.
  surfaces: [
    // ── B1 ──
    {
      label: "1A",
      R: 3000.0,
      d: 2.85,
      sd: 27.52,
      medium: 1,
      asphere: {
        A4: 8.30213e-6,
        A6: -1.33976e-8,
        A8: 4.25008e-11,
        A10: -8.60253e-14,
        A12: 1.03363e-16,
        A14: -7.03702e-20,
        A16: 2.16318e-23,
      },
    },
    {
      label: "2A",
      R: 16.526,
      d: 10.57,
      sd: 18.92,
      asphere: {
        K: -9.81344e-1,
        A4: 4.49709e-7,
        A6: -2.34544e-8,
        A8: -1.05516e-10,
        A10: 8.07443e-13,
        A12: -2.78552e-15,
        A14: 3.05128e-18,
      },
    },
    {
      label: "3A",
      R: -809.327,
      d: 2.25,
      sd: 18.1,
      medium: 2,
      asphere: {
        A4: -9.01759e-6,
        A6: -1.39642e-7,
        A8: 1.23272e-9,
        A10: -3.49283e-12,
        A12: 3.62808e-15,
        A14: 5.24953e-19,
        A16: -2.43479e-21,
      },
    },
    {
      label: "4A",
      R: 91.828,
      d: 5.56,
      sd: 15.74,
      asphere: {
        A4: 6.34981e-6,
        A6: -1.29871e-7,
        A8: 1.6792e-9,
        A10: -6.48374e-12,
        A12: 1.50043e-14,
        A14: -1.59777e-17,
      },
    },
    { label: "5", R: -53.256, d: 1.2, sd: 15.59, medium: 3 },
    { label: "6", R: 68.528, d: 0.15, sd: 15.435 },
    { label: "7", R: 43.587, d: 5.03, sd: 15.55, medium: 4 },
    { label: "8", R: -485.244, sd: 15.31 },
    // ── B2 (focus unit) ──
    { label: "9", R: 63.607, d: 2.67, sd: 12.32, medium: 5 },
    { label: "10", R: -1472.964, d: 0.15, sd: 12.39 },
    { label: "11", R: 52.737, d: 1.0, sd: 12.535, medium: 6 },
    { label: "12", R: 22.996, d: 5.41, sd: 12.31, medium: 7 },
    { label: "13", R: 489.976, sd: 12.45 },
    // ── SP (Fno stop) ──
    { label: "STO", R: "flat" },
    // ── B3 ──
    { label: "15", R: 27.733, d: 1.2, sd: 13.86, medium: 8 },
    { label: "16", R: 19.641, d: 9.29, sd: 13.27, medium: 9 },
    { label: "17", R: -78.882, sd: 13.165 },
    // ── B4 (IS unit) ──
    { label: "18", R: -67.558, d: 4.31, sd: 10.99, medium: 10 },
    { label: "19", R: -20.948, d: 0.77, sd: 11.24, medium: 11 },
    { label: "20", R: 136.126, sd: 11.89 },
    // ── B5 (PL unit) ──
    { label: "22", R: 30.487, d: 11.2, sd: 17.43, medium: 12 },
    { label: "23", R: -50.182, d: 0.15, sd: 17.34 },
    { label: "24", R: 40.928, d: 11.0, sd: 15.735, medium: 13 },
    { label: "25", R: -25.8, d: 1.2, sd: 14.755, medium: 14 },
    { label: "26", R: 208.835, d: 4.54, sd: 14.74 },
    {
      label: "27A",
      R: -73.669,
      d: 2.1,
      sd: 14.775,
      medium: 15,
      asphere: {
        A4: -8.04129e-5,
        A6: 2.64851e-7,
        A8: -1.06038e-9,
        A10: 4.87911e-12,
        A12: -8.56493e-15,
        A14: -1.1788e-18,
        A16: -3.10043e-23,
      },
    },
    {
      label: "28A",
      R: -1000.0,
      d: 0.15,
      sd: 16.055,
      asphere: { A4: -6.00659e-5, A6: 2.67376e-7, A8: -7.05021e-10, A10: 2.04492e-12, A12: -2.97985e-15 },
    },
    { label: "29", R: 216.036, d: 3.4, sd: 17.125, medium: 16 },
    { label: "30", R: -127.538, sd: 17.44 },
  ],

  zoom: {
    // (moved from zoomPositions) ─── Zoom ───────────────────────────────────────────────────────────────────
    // (moved from zoomStopSemiDiameters) ─── Rendering & layout ────────────────────────────────────────────────────
    stations: [
      { focalLengthMm: 15.45, stopSemiDiameter: 8.26, label: "15.45 mm" },
      { focalLengthMm: 24.0, stopSemiDiameter: 10.465 },
      { focalLengthMm: 33.95, stopSemiDiameter: 13.325, label: "33.95 mm" },
    ],
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "Infinity-focus model: B2 (L5–L7) moves imageward for close focus, but the patent publishes no finite-focus gaps. The disabled 0.28 m endpoint is retained retail metadata. Source iris diameters vary with zoom. IS is centered; omitted flare diaphragm S21 clipping is not simulated.",
  },

  // (moved from var) ─── Variable air spacings (zoom format) ───────────────────────────────────
  // No close-focus data in patent; all pairs are [d_inf, d_inf].
  // Surface "20" = combined patent d20 (3.52 fixed) + d21 (FS variable).
  gaps: {
    "8": {
      label: "B1–B2",
      values: [
        [25.32, 25.32],
        [7.72, 7.72],
        [1.5, 1.5],
      ],
    },
    "13": {
      label: "B2–SP",
      values: [
        [8.24, 8.24],
        [11.3, 11.3],
        [7.4, 7.4],
      ],
    },
    STO: {
      label: "SP–B3",
      values: [
        [13.71, 13.71],
        [5.42, 5.42],
        [0.71, 0.71],
      ],
    },
    "17": {
      label: "B3–B4",
      values: [
        [1.6, 1.6],
        [9.89, 9.89],
        [14.61, 14.61],
      ],
    },
    "20": {
      label: "B4–B5",
      values: [
        [10.56, 10.56],
        [4.79, 4.79],
        [2.47, 2.47],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [14.0, 14.0],
        [22.21, 22.21],
        [32.15, 32.15],
      ],
    },
  },

  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  // ─── Group & doublet annotations ───────────────────────────────────────────
  groups: [
    { text: "B1 (−)", fromSurface: "1A", toSurface: "8" },
    { text: "B2 (+, Focus)", fromSurface: "9", toSurface: "13" },
    { text: "SP", fromSurface: "STO", toSurface: "STO" },
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

  layout: { scFill: 0.5, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
