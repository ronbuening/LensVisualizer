/**
 * US 2018/0246292 A1, Example 1: Tables 1–4 (PDF p. 40), Figure 1 (p. 2).
 * Source prescription at f=78.79 mm, f/2.88; source KA=1 maps to standard K=0.
 * Four motion groups; G4 is split into stabilization subgroup G4a and fixed G4b.
 * Optical rims inferred from the original 600 dpi figure and validated for clearance.
 * Cover plate omitted with air-equivalent rear spacing; catalog names are inferred.
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "fujifilm-xf80-f28-macro",
  name: "FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro",
  maker: "Fujifilm",
  subtitle: "US 2018/0246292 A1 — Example 1",
  specs: ["16 ELEMENTS / 12 GROUPS", "f = 78.79 mm", "F/2.88", "2 ASPHERICAL SURFACES", "FLOATING FOCUS"],
  focalLengthMarketing: 80,
  focalLengthDesign: 78.79,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2018/0246292 A1",
  patentAuthors: ["Ryoko Tomioka", "Daiki Kawamura"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2018,
  elementCount: 16,
  groupCount: 12,
  focusDescription:
    "Floating focus: G2 moves toward image, G3 moves toward object; G1 and G4 stationary. The patent identifies lateral stabilization by G4a; the centered diagram does not simulate OIS motion.",

  elements: [
    // ── Group 1 — Front positive (stationary) ───────────────────────────
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      fl: 83.0,
      glass: "S-LAL18 (inferred catalog counterpart; production material unspecified)",
      role: "Positive front singlet in fixed G1.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 76.6,
      glass: "S-FPL51 (inferred catalog counterpart; production material unspecified)",
      apd: "inferred",
      apdNote: "Catalog dispersion inferred from nd/νd; production ED classification is not established by the patent.",
      role: "Low-dispersion positive singlet in fixed G1.",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.7,
      fl: -30.8,
      glass: "E-F1 (inferred catalog counterpart; production material unspecified)",
      role: "Negative singlet in fixed G1.",
    },
    {
      id: 4,
      name: "L1d",
      label: "Element 4",
      type: "Biconvex Pos. (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 33.5,
      glass: "M-BACD12 (inferred catalog counterpart; production material unspecified)",
      role: "Positive singlet with both source aspheres in fixed G1.",
    },

    // ── Group 2 — Negative focusing group (moves toward image) ──────────
    {
      id: 5,
      name: "L2a",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.13,
      fl: -31.1,
      glass: "S-BAL35 (inferred catalog counterpart; production material unspecified)",
      role: "Negative singlet in imageward-moving G2.",
    },
    {
      id: 6,
      name: "L2b",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.15,
      fl: -29.2,
      glass: "S-NBH52 (inferred catalog counterpart; production material unspecified)",
      cemented: "D1",
      role: "Negative member of G2 cemented doublet D1.",
    },
    {
      id: 7,
      name: "L2c",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: 28.5,
      glass: "TAFD40 (inferred catalog counterpart; production material unspecified)",
      cemented: "D1",
      role: "Positive member of G2 cemented doublet D1.",
    },

    // ── Group 3 — Positive focusing group (moves toward object) ─────────
    {
      id: 8,
      name: "L3a",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.66,
      fl: 68.0,
      glass: "S-FPL55 (inferred catalog counterpart; production material unspecified)",
      apd: "inferred",
      apdNote: "Catalog dispersion inferred from nd/νd; production ED classification is not established by the patent.",
      role: "Low-dispersion positive singlet in objectward-moving G3.",
    },
    {
      id: 9,
      name: "L3b",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 41.8,
      glass: "S-FPL51 (inferred catalog counterpart; production material unspecified)",
      apd: "inferred",
      apdNote: "Catalog dispersion inferred from nd/νd; production ED classification is not established by the patent.",
      cemented: "D2",
      role: "Positive member of G3 cemented doublet D2.",
    },
    {
      id: 10,
      name: "L3c",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -92.5,
      glass: "S-TIH53 (inferred catalog counterpart; production material unspecified)",
      cemented: "D2",
      role: "Negative member of G3 cemented doublet D2.",
    },

    // ── Group 4a — OIS vibration-proof group (perpendicular shift) ──────
    {
      id: 11,
      name: "L4aa",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.32,
      fl: 51.5,
      glass: "E-FDS2 (inferred catalog counterpart; production material unspecified)",
      cemented: "D3",
      role: "Positive member of stabilization subgroup G4a cemented doublet D3.",
    },
    {
      id: 12,
      name: "L4ab",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.697,
      vd: 48.52,
      fl: -24.2,
      glass: "S-LAM59 (inferred catalog counterpart; production material unspecified)",
      cemented: "D3",
      role: "Negative member of stabilization subgroup G4a cemented doublet D3.",
    },
    {
      id: 13,
      name: "L4ac",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.53775,
      vd: 74.7,
      fl: -63.4,
      glass: "S-FPM3 (inferred catalog counterpart; production material unspecified)",
      apd: "inferred",
      apdNote: "Catalog dispersion inferred from nd/νd; production ED classification is not established by the patent.",
      role: "Low-dispersion negative singlet in stabilization subgroup G4a.",
    },

    // ── Group 4b — Rear fixed group (stationary) ────────────────────────
    {
      id: 14,
      name: "L4ba",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      fl: 41.4,
      glass: "S-LAH98 (inferred catalog counterpart; production material unspecified)",
      role: "Positive singlet in fixed G4b.",
    },
    {
      id: 15,
      name: "L4bb",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 49.0,
      glass: "S-BSL7 (inferred catalog counterpart; production material unspecified)",
      cemented: "D4",
      role: "Positive member of fixed rear doublet D4.",
    },
    {
      id: 16,
      name: "L4bc",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: -49.0,
      glass: "S-NPH3 (inferred catalog counterpart; production material unspecified)",
      cemented: "D4",
      role: "Negative member of fixed rear doublet D4.",
    },
  ],

  surfaces: [
    // ── Group 1 ─────────────────────────────────────────────────────────
    { label: "1", R: 119.8423, d: 5.44, nd: 1.72916, elemId: 1, sd: 22 },
    { label: "2", R: -119.8423, d: 0.8, nd: 1.0, elemId: 0, sd: 22 },
    { label: "3", R: 59.8966, d: 5.67, nd: 1.497, elemId: 2, sd: 17.9 },
    { label: "4", R: -101.2948, d: 0.71, nd: 1.0, elemId: 0, sd: 17.9 },
    { label: "5", R: -67.2399, d: 1.25, nd: 1.62588, elemId: 3, sd: 15.7 },
    { label: "6", R: 27.2189, d: 0.8, nd: 1.0, elemId: 0, sd: 17.8 },
    { label: "7A", R: 25.2054, d: 8.7, nd: 1.58313, elemId: 4, sd: 14.7 },
    { label: "8A", R: -75.345, d: 2.34, nd: 1.0, elemId: 0, sd: 14.7 },

    // ── Group 2 ─────────────────────────────────────────────────────────
    { label: "9", R: -115.0082, d: 1.0, nd: 1.58913, elemId: 5, sd: 12.7 },
    { label: "10", R: 21.8873, d: 3.2, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "11", R: -168.1721, d: 0.96, nd: 1.673, elemId: 6, sd: 10.2 },
    { label: "12", R: 22.32, d: 3.54, nd: 2.00069, elemId: 7, sd: 12.6 },
    { label: "13", R: 95.1317, d: 20.39, nd: 1.0, elemId: 0, sd: 12.4 },

    // ── Aperture Stop ───────────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 19.53, nd: 1.0, elemId: 0, sd: 9.6 },

    // ── Group 3 ─────────────────────────────────────────────────────────
    { label: "15", R: 75.2429, d: 3.52, nd: 1.43875, elemId: 8, sd: 12 },
    { label: "16", R: -48.6919, d: 0.1, nd: 1.0, elemId: 0, sd: 12 },
    { label: "17", R: 51.9815, d: 4.34, nd: 1.497, elemId: 9, sd: 11.8 },
    { label: "18", R: -33.69, d: 1.1, nd: 1.84666, elemId: 10, sd: 11.8 },
    { label: "19", R: -60.0019, d: 6.5, nd: 1.0, elemId: 0, sd: 11.8 },

    // ── Group 4a — OIS group ────────────────────────────────────────────
    { label: "20", R: -94.7357, d: 2.57, nd: 2.00272, elemId: 11, sd: 11.9 },
    { label: "21", R: -33.867, d: 0.91, nd: 1.697, elemId: 12, sd: 11.9 },
    { label: "22", R: 33.867, d: 1.56, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "23", R: 395.2263, d: 0.9, nd: 1.53775, elemId: 13, sd: 10 },
    { label: "24", R: 31.3496, d: 3.6, nd: 1.0, elemId: 0, sd: 11.8 },

    // ── Group 4b — Fixed rear ───────────────────────────────────────────
    { label: "25", R: 37.5229, d: 3.41, nd: 1.95375, elemId: 14, sd: 13.4 },
    { label: "26", R: 709.7839, d: 0.1, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "27", R: 59.0208, d: 4.9, nd: 1.5168, elemId: 15, sd: 13.7 },
    { label: "28", R: -43.109, d: 1.07, nd: 1.95906, elemId: 16, sd: 13.7 },
    // Source rear stack: 27.42 mm air + 2.85 mm / nd 1.5168 + 1 mm air.
    { label: "29", R: -528.8086, d: 30.298955696202533, nd: 1.0, elemId: 0, sd: 13.7 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: -3.4416765e-6,
      A6: -1.0271248e-8,
      A8: 7.8474028e-11,
      A10: -1.3012707e-12,
      A12: 5.9808897e-15,
      A14: 1.5649754e-17,
      A16: -3.3871063e-19,
      A18: 1.5229577e-21,
      A20: -2.5292727e-24,
    },
    "8A": {
      K: 0,
      A4: -5.6320686e-7,
      A6: -7.1694496e-9,
      A8: 5.3448304e-11,
      A10: -8.255492e-13,
      A12: 2.069052e-15,
      A14: 8.6700401e-18,
      A16: -2.1215378e-20,
      A18: -2.8133141e-22,
      A20: 7.4217077e-25,
    },
  },

  // Floating focus: G2 moves image-ward, G3 moves object-ward
  // Sum conserved: 48.76 mm at both infinity and β = −1.0
  var: {
    "8A": [2.34, 17.69],
    "13": [20.39, 5.04],
    STO: [19.53, 3.58],
    "19": [6.5, 22.45],
  },
  varLabels: [
    ["8A", "G1→G2"],
    ["13", "G2→Stop"],
    ["STO", "Stop→G3"],
    ["19", "G3→G4"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "8A" },
    { text: "G2 (−)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "19" },
    { text: "G4a (−) OIS", fromSurface: "20", toSurface: "24" },
    { text: "G4b (+)", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  // Inferred finite conjugate including physical thickness of the omitted 2.85 mm plate.
  closeFocusM: 0.24642928706318645,
  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16],

  scFill: 0.5,
  yScFill: 0.4,
  maxAspectRatio: 1.8,
} satisfies LensDataInput;

export default LENS_DATA;
