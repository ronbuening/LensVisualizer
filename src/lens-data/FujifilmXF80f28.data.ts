/**
 * Fujifilm XF 80mm f/2.8 R LM OIS WR Macro
 *
 * Source: US 2018/0246292 A1 — Example 1
 * Inventors: Ryoko Tomioka, Daiki Kawamura (Fujifilm Corporation)
 * Filed: 2018-02-27 | Priority: JP 2017-036188, 2017-02-28
 *
 * Patent-scale prescription (f ≈ 78.79 mm); NOT rescaled to marketing 80 mm.
 * Computed EFL: 78.786 mm | Patent stated: 78.79 mm
 *
 * 16 elements in 12 groups — 4 group P-N-P-N architecture.
 * Floating focus (G2 + G3 move independently).
 * OIS via G4a perpendicular shift.
 *
 * Semi-diameters estimated via combined marginal + chief ray trace at
 * f/2.88, ω = 10.1°, with ~50% field vignetting and 8% mechanical clearance.
 * Patent does not list semi-diameters.
 */

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "fujifilm-xf80-f28-macro",
  name: "FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro",
  maker: "Fujifilm",
  subtitle: "US 2018/0246292 A1 — Example 1",
  specs: ["16 elements / 12 groups", "1 aspherical (2 surfaces)", "1 Super ED + 3 ED", "Floating IF + 5-stop OIS"],
  focalLengthMarketing: 80,
  focalLengthDesign: 78.79,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2018,
  elementCount: 16,
  groupCount: 12,
  focusDescription:
    "Floating focus: G2 moves toward image, G3 moves toward object; G1 and G4 stationary. OIS via G4a lateral shift.",

  elements: [
    // ── Group 1 — Front positive (stationary) ───────────────────────────
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      fl: 82.2,
      glass: "S-LAL18 (OHARA lanthanum crown)",
      role: "Front collector; symmetric biconvex minimizes coma at design conjugate.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 75.7,
      glass: "S-FPL51 (OHARA ED fluorophosphate)",
      apd: "inferred",
      apdNote: "νd = 81.54, anomalous partial dispersion; designated ED by Fujifilm.",
      role: "Primary chromatic corrector in G1. Paired with L1c (Δν = 45.8) for longitudinal achromatization and secondary spectrum reduction.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.7,
      fl: -31.0,
      glass: "S-TIM35 (OHARA dense flint)",
      role: "Chromatic counterpart to L1b. Strong negative power also corrects Petzval sum for flat-field macro performance.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Pos. (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 32.4,
      glass: "S-BAL41 (OHARA barium crown)",
      role: "Sole aspherical element (both surfaces). Strongest positive in G1, placed at large marginal ray height for maximum SA correction leverage.",
    },

    // ── Group 2 — Negative focusing group (moves toward image) ──────────
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.13,
      fl: -31.2,
      glass: "S-BSM2 (OHARA barium crown)",
      role: "Leading element of front focus group. Strongly curved rear surface (R = +21.9 mm) does the diverging.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.15,
      fl: -29.3,
      glass: "Barium flint (nearest: HOYA NBFD3; no exact OHARA match)",
      cemented: "D1",
      role: "Front element of G2 cemented pair. Near-zero net power with L2c; primary role is chromatic balance during focus shift.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: 29.1,
      glass: "S-NPH5 (OHARA ultra-high-index dense flint, nd > 2.0)",
      cemented: "D1",
      role: "Rear element of G2 cemented pair. Ultra-high index enables strong correction at the cemented junction with minimal curvature.",
    },

    // ── Group 3 — Positive focusing group (moves toward object) ─────────
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.66,
      fl: 67.4,
      glass: "S-FPL55 (OHARA Super ED — calcium-fluoride equivalent)",
      apd: "inferred",
      apdNote: "νd = 94.66, extreme anomalous partial dispersion; designated Super ED by Fujifilm.",
      role: "Most exotic element in design. Fluorite-equivalent APD corrects secondary spectrum across the full focus range.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 41.1,
      glass: "S-FPL51 (OHARA ED fluorophosphate)",
      apd: "inferred",
      apdNote: "νd = 81.54; designated ED by Fujifilm.",
      cemented: "D2",
      role: "Powerhouse achromatic crown of G3 cemented pair. Δν = 57.8 with L3c — largest achromatic lever in the design.",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -90.7,
      glass: "S-NPH4 (OHARA high-index dense flint)",
      cemented: "D2",
      role: "Achromatic flint of G3. High-index, high-dispersion partner to the ED crown L3b.",
    },

    // ── Group 4a — OIS vibration-proof group (perpendicular shift) ──────
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.32,
      fl: 52.6,
      glass: "S-NPH7 (OHARA ultra-high-index dense flint, nd > 2.0)",
      cemented: "D3",
      role: "VR cemented doublet front. nd = 2.003 enables strong correction at modest curvatures.",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.697,
      vd: 48.52,
      fl: -24.3,
      glass: "S-LAM66 (OHARA lanthanum crown)",
      cemented: "D3",
      role: "VR cemented doublet rear. Symmetric radii (|R| = 33.867 mm). Internal VR achromatization (Δν = 29.2).",
    },
    {
      id: 13,
      name: "L43",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.53775,
      vd: 74.7,
      fl: -63.3,
      glass: "S-FPM2 (OHARA fluorophosphate)",
      apd: "inferred",
      apdNote: "νd = 74.70 satisfies patent Cond. (9); moderate APD. Probable third ED per Fujifilm spec.",
      role: "Third VR element. High-νd fluorophosphate provides chromatic fine-tuning during lateral OIS shift.",
    },

    // ── Group 4b — Rear fixed group (stationary) ────────────────────────
    {
      id: 14,
      name: "L51",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      fl: 41.5,
      glass: "S-LAH79 (OHARA ultra-high-index lanthanum)",
      role: "Strong positive meniscus partially counteracts G4a negative power. Petzval sum control.",
    },
    {
      id: 15,
      name: "L52",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 48.2,
      glass: "S-BSL7 / N-BK7 (standard borosilicate crown)",
      cemented: "D4",
      role: "Standard borosilicate carrier for cemented junction with L4bc.",
    },
    {
      id: 16,
      name: "L53",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: -48.9,
      glass: "S-NPH53 (OHARA ultra-high-index dense flint, lowest νd in design)",
      cemented: "D4",
      role: "Final chromatic trim near image plane. νd = 17.47 provides extreme chromatic leverage for lateral color control.",
    },
  ],

  surfaces: [
    // ── Group 1 ─────────────────────────────────────────────────────────
    { label: "1", R: 119.8423, d: 5.44, nd: 1.72916, elemId: 1, sd: 20.5 },
    { label: "2", R: -119.8423, d: 0.8, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "3", R: 59.8966, d: 5.67, nd: 1.497, elemId: 2, sd: 19.5 },
    { label: "4", R: -101.2948, d: 0.71, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "5", R: -67.2399, d: 1.25, nd: 1.62588, elemId: 3, sd: 15.7 },
    { label: "6", R: 27.2189, d: 0.8, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "7A", R: 25.2054, d: 8.7, nd: 1.58313, elemId: 4, sd: 17.0 },
    { label: "8A", R: -75.345, d: 2.34, nd: 1.0, elemId: 0, sd: 15.5 },

    // ── Group 2 ─────────────────────────────────────────────────────────
    { label: "9", R: -115.0082, d: 1.0, nd: 1.58913, elemId: 5, sd: 13.5 },
    { label: "10", R: 21.8873, d: 3.2, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "11", R: -168.1721, d: 0.96, nd: 1.673, elemId: 6, sd: 10.2 },
    { label: "12", R: 22.32, d: 3.54, nd: 2.00069, elemId: 7, sd: 11.0 },
    { label: "13", R: 95.1317, d: 20.39, nd: 1.0, elemId: 0, sd: 11.5 },

    // ── Aperture Stop ───────────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 19.53, nd: 1.0, elemId: 0, sd: 9.6 },

    // ── Group 3 ─────────────────────────────────────────────────────────
    { label: "15", R: 75.2429, d: 3.52, nd: 1.43875, elemId: 8, sd: 12.5 },
    { label: "16", R: -48.6919, d: 0.1, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "17", R: 51.9815, d: 4.34, nd: 1.497, elemId: 9, sd: 12.5 },
    { label: "18", R: -33.69, d: 1.1, nd: 1.84666, elemId: 10, sd: 11.5 },
    { label: "19", R: -60.0019, d: 6.5, nd: 1.0, elemId: 0, sd: 11.0 },

    // ── Group 4a — OIS group ────────────────────────────────────────────
    { label: "20", R: -94.7357, d: 2.57, nd: 2.00272, elemId: 11, sd: 10.5 },
    { label: "21", R: -33.867, d: 0.91, nd: 1.697, elemId: 12, sd: 10.5 },
    { label: "22", R: 33.867, d: 1.56, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "23", R: 395.2263, d: 0.9, nd: 1.53775, elemId: 13, sd: 10.0 },
    { label: "24", R: 31.3496, d: 3.6, nd: 1.0, elemId: 0, sd: 10.0 },

    // ── Group 4b — Fixed rear ───────────────────────────────────────────
    { label: "25", R: 37.5229, d: 3.41, nd: 1.95375, elemId: 14, sd: 11.5 },
    { label: "26", R: 709.7839, d: 0.1, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "27", R: 59.0208, d: 4.9, nd: 1.5168, elemId: 15, sd: 11.5 },
    { label: "28", R: -43.109, d: 1.07, nd: 1.95906, elemId: 16, sd: 11.0 },
    { label: "29", R: -528.8086, d: 27.42, nd: 1.0, elemId: 0, sd: 11.0 },
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
    { text: "G4 (−, OIS)", fromSurface: "20", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 0.25,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.5,
  yScFill: 0.4,
  maxAspectRatio: 1.8,
} satisfies LensDataInput;

export default LENS_DATA;
