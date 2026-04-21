// Canon FD 35mm f/2 S.S.C. (I)
// US Patent 3,748,022 — Tajima (Canon), 1973
// 9 elements in 8 groups, reverse telephoto (retrofocus)
// Floating focus: variable air interval d10 between Groups II₁ and II₂
//
// Patent prescription normalized to f = 1; scaled here by 35.0× to physical mm.
// Computed EFL: 35.0 mm (patent f = 1.0000)
// Computed BFD: 37.95 mm (patent: 38.73 mm; ~2% discrepancy from 4-digit rounding)
//
// STO position inferred from FIG. 1 iris placement: ~45% of d10 from R10.
// Close-focus d10 estimated from patent's linear proportionality
// at MFD 0.3 m (m = 0.194×; Canon Camera Museum).
//
// Thoriated glass: E5 and E8 (nd = 1.7737, vd = 49.2) are probable thorium-doped
// lanthanum crowns — no exact modern catalog match exists.

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "canon-fd-35-f2",
  name: "CANON FD 35mm f/2 S.S.C. (I)",
  maker: "Canon",
  subtitle: "US 3,748,022 · Tajima 1973",
  specs: ["35mm f/2", "9 elements / 8 groups", "Floating focus", "FD mount"],
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  patentYear: 1973,
  elementCount: 9,
  groupCount: 8,
  focusDescription: "Unit focus with floating rear group — whole lens shifts forward; d10 decreases proportionally",

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.697,
      vd: 48.5,
      fl: 362.5,
      glass: "LaK (697485, S-LAM2 family)",
      role: "Front negative meniscus shape, weakly positive power; concave-front signature of the S.S.C. (I)",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.0,
      fl: -46.6,
      glass: "BK7 (S-BSL7, exact match)",
      role: "Primary diverger of Group I; strongly curved rear surface carries most of the group's negative power",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.1,
      fl: -785.2,
      glass: "BaF (702411, S-BAH10 family)",
      role: "Weak negative field corrector at front of Group II₁; nearly concentric meniscus for astigmatism control",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7,
      vd: 48.0,
      fl: 57.3,
      glass: "LaK (700480, S-LAL7 family)",
      role: "Strong positive in Group II₁; begins convergence of diverged beam",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7737,
      vd: 49.2,
      fl: 60.9,
      glass: "LaK (774492, probable thoriated)",
      role: "Thick positive meniscus; controls rear principal plane for retrofocus BFD; probable thoriated glass",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      fl: -32.1,
      glass: "SF (762265, S-TIH6 family)",
      role: "Strongest negative element; leads Group II₂ after the variable gap; primary chromatic corrector",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -50.7,
      glass: "SF6 (805254, S-TIH14, exact match)",
      cemented: "D1",
      role: "Dense flint in cemented doublet; achromatic corrector paired with L8",
    },
    {
      id: 8,
      name: "L33",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7737,
      vd: 49.2,
      fl: 31.7,
      glass: "LaK (774492, probable thoriated)",
      cemented: "D1",
      role: "Crown element of cemented doublet; same thoriated glass as L5 for fabrication economy",
    },
    {
      id: 9,
      name: "L34",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.8,
      fl: 53.8,
      glass: "LaF (806408, S-LAH53 family)",
      role: "Rear positive element; controls exit pupil and final field flattening",
    },
  ],

  surfaces: [
    // ---- Group I (negative front group) ----
    { label: "1", R: -202.16, d: 3.41, nd: 1.697, elemId: 1, sd: 20.5 },
    { label: "2", R: -113.09, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "3", R: 63.56, d: 1.46, nd: 1.51633, elemId: 2, sd: 19.0 },
    { label: "4", R: 17.304, d: 12.12, nd: 1.0, elemId: 0, sd: 14.4 },
    // ---- Group II₁ (rear-front positive) ----
    { label: "5", R: -34.12, d: 3.4, nd: 1.70154, elemId: 3, sd: 16.5 },
    { label: "6", R: -37.87, d: 0.1, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "7", R: 37.52, d: 3.36, nd: 1.7, elemId: 4, sd: 16.5 },
    { label: "8", R: 554.05, d: 1.47, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "9", R: 46.655, d: 10.12, nd: 1.7737, elemId: 5, sd: 15.5 },
    { label: "10", R: 4343.5, d: 2.43, nd: 1.0, elemId: 0, sd: 12.5 },
    // ---- Aperture stop (inferred from FIG. 1, within variable gap d10) ----
    { label: "STO", R: 1e15, d: 2.97, nd: 1.0, elemId: 0, sd: 9.6 },
    // ---- Group II₂ (rear-back positive) ----
    { label: "11", R: -135.7, d: 0.98, nd: 1.76182, elemId: 6, sd: 11.0 },
    { label: "12", R: 29.939, d: 3.17, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: -40.95, d: 0.98, nd: 1.80518, elemId: 7, sd: 12.8 },
    { label: "14", R: 488.6, d: 4.29, nd: 1.7737, elemId: 8, sd: 12.8 },
    { label: "15", R: -24.46, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "16", R: 68.95, d: 2.89, nd: 1.8061, elemId: 9, sd: 14.5 },
    { label: "17", R: -114.73, d: 37.95, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  asph: {},

  var: {
    "10": [2.43, 1.92],
    STO: [2.97, 2.35],
    "17": [37.95, 45.5],
  },
  varLabels: [
    ["10", "D10a"],
    ["STO", "D10b"],
    ["17", "BF"],
  ],

  groups: [
    { text: "G1 (I neg)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (II₁ pos)", fromSurface: "5", toSurface: "10" },
    { text: "G3 (II₂ pos)", fromSurface: "11", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  closeFocusM: 0.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.55,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
