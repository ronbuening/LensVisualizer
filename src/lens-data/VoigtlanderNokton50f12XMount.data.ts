// Voigtländer NOKTON 50mm F1.2 — Fujifilm X-Mount
// Patent: JP 2025-058577 A (Cosina Co., Ltd.)
// Example 1 (実施例 1) — all-spherical, 9 elements in 8 groups
// Design: f = 48.5 mm, F/1.23, ω = 16.28°, TTL = 65.0 mm
// Unit focus: entire lens extends via precision helicoid
//
// Semi-diameters estimated from combined marginal ray (f/1.23)
// + chief ray (70% of full field ω = 16.28°) + 8% clearance,
// capped by 58 mm filter thread (~27 mm SD) for front group
// and sd/|R| < 0.88 for steeply curved surfaces.

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "nokton-50f12-xmount",
  name: "VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount",
  maker: "Voigtländer",
  subtitle: "JP 2025-058577 A — Example 1",
  specs: ["50 mm · f/1.2 · 9 elements / 8 groups", "APS-C · All-spherical · Unit focus"],
  visible: false,
  focalLengthMarketing: 50,
  focalLengthDesign: 48.5,
  apertureMarketing: 1.2,
  apertureDesign: 1.23,
  patentYear: 2025,
  elementCount: 9,
  groupCount: 8,

  // ─── Elements (front to rear) ─────────────────────────────
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 117.9,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Front collector — weak positive meniscus, first of three progressive convergence elements in G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 155.0,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Second positive meniscus — continues progressive beam convergence with tighter curvatures than L11.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 50.8,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Strongest positive element in G1 — carries substantial power with steepest front curvature of the trio.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4 (L14)",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.74,
      fl: -64.7,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "First negative flint in G1 — begins chromatic correction against the three positive crowns.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5 (L15)",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.58,
      fl: -27.1,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Strongest negative element — rear surface (R = 14.26 mm) is the steepest in the system. Completes G1 beam narrowing (Hs/Hh = 0.53).",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6 (L21)",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      fl: -54.2,
      glass: "S-TIH53 (OHARA)",
      cemented: "J21",
      apd: false,
      role: "Negative half of G2 cemented doublet — extremely high dispersion glass (νd = 22.76) provides strong chromatic leverage.",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7 (L22)",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 24.9,
      glass: "LASF type (unidentified, nd = 1.900, νd = 37.4)",
      cemented: "J21",
      apd: false,
      role: "Positive half of G2 doublet — highest-index glass in design (nd = 1.900). Combined doublet fl ≈ +46 mm.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8 (L31)",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 28.6,
      glass: "LASF type (same as L22)",
      apd: false,
      role: "Main positive power of G3 — nearly plano front (R ≈ 2708 mm), all power on steeply curved rear surface.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9 (L32)",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      fl: -43.7,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "Final field-flattening element — concave-to-object meniscus corrects residual Petzval curvature and astigmatism.",
    },
  ],

  // ─── Surfaces (front to rear) ─────────────────────────────
  surfaces: [
    // G1: Front group — three positive menisci + two negative menisci
    { label: "1", R: 53.73, d: 4.26, nd: 1.72916, elemId: 1, sd: 21.5 },
    { label: "2", R: 138.48, d: 0.15, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "3", R: 36.67, d: 3.67, nd: 1.72916, elemId: 2, sd: 21.0 },
    { label: "4", R: 52.0, d: 0.3, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "5", R: 26.68, d: 6.51, nd: 1.72916, elemId: 3, sd: 19.0 },
    { label: "6", R: 85.5, d: 2.98, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "7", R: 204.14, d: 1.4, nd: 1.74077, elemId: 4, sd: 14.5 },
    { label: "8", R: 38.68, d: 2.24, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "9", R: 47.82, d: 1.2, nd: 1.76182, elemId: 5, sd: 12.5 },
    { label: "10", R: 14.26, d: 7.54, nd: 1.0, elemId: 0, sd: 12.0 },

    // Aperture stop — between G1 and G2
    { label: "STO", R: 1e15, d: 1.15, nd: 1.0, elemId: 0, sd: 10.4 },

    // G2: Cemented doublet J21 (L21 + L22)
    { label: "12", R: 66.0, d: 1.1, nd: 1.80809, elemId: 6, sd: 11.0 },
    { label: "13", R: 26.13, d: 4.83, nd: 1.90043, elemId: 7, sd: 11.0 },
    { label: "14", R: -145.01, d: 7.09, nd: 1.0, elemId: 0, sd: 11.0 },

    // G3: Positive singlet + negative singlet
    { label: "15", R: 2707.72, d: 3.83, nd: 1.90043, elemId: 8, sd: 11.5 },
    { label: "16", R: -25.97, d: 2.97, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "17", R: -26.07, d: 1.2, nd: 1.65412, elemId: 9, sd: 10.5 },
    { label: "18", R: -300.0, d: 12.57, nd: 1.0, elemId: 0, sd: 10.5 },
  ],

  // ─── Aspherical coefficients ──────────────────────────────
  asph: {},

  // ─── Variable air spacings (unit focus) ───────────────────
  // Unit focus: entire lens translates forward; only BFD changes.
  // Patent: ZD18 = 12.57 (infinity) → 19.36 (close, ~370 mm object distance)
  var: {
    "18": [12.57, 19.36],
  },
  varLabels: [["18", "BF"]],
  focusDescription: "Unit focus — entire lens extends via precision helicoid",

  // ─── Group and doublet annotations ────────────────────────
  groups: [
    { text: "G1 (Gf)", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "18" },
  ],
  doublets: [{ text: "J21", fromSurface: "12", toSurface: "14" }],

  // ─── Rendering parameters ─────────────────────────────────
  nominalFno: 1.2,
  closeFocusM: 0.39,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,
  scFill: 0.52,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
