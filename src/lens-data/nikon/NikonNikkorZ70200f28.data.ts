import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * WO 2020/105104 A1, Example 1; Table 1 and Figure 1.
 * 21 elements in 18 air-separated components and nine motion groups.
 * Internal zoom; G7/G8 focus in opposite directions at the source near station.
 * BFD 32.5469 mm; total track about 232.433 mm (source TL summary conflicts).
 * Rims inferred from the original figure and checked across zoom/focus.
 * Catalog names and APD counterparts do not establish production materials.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-z-70-200f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 70-200mm f/2.8 VR S",
  subtitle: "WO2020/105104 EXAMPLE 1 — NIKON / TAKERU UEHARA",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: ["21 ELEMENTS / 18 GROUPS", "f = 71.5–196 mm", "F/2.88", "2ω = 33.8°–12.3°", "2 ASPHERICAL SURFACES"],
    elementCount: 21,
    groupCount: 18,
    acceptsTeleconverters: true, // Nikon lists Z TELECONVERTER TC-1.4x compatibility
    focalLengthMm: { marketing: [70, 200], design: [71.5, 196] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "WO 2020/105104 A1",
    patentYear: 2020,
    authors: ["Takeru Uehara"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.12,
      focalLengthMm: -331.9,
      glass: "S-LAH99 (catalog counterpart)",
      apd: false,
      role: "Achromatic partner for L12; ultra-high nd minimizes surface curvatures",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 171,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Primary positive power for G1; low dispersion contributes chromatic correction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 243.4,
      glass: "CaF2 Fluorite",
      apd: "inferred",
      apdNote: "Fluorite, strong +ΔPgF",
      role: "Positive power with minimal chromatic contribution; lightweight",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.603,
      vd: 65.44,
      focalLengthMm: -118.7,
      glass: "S-PHM53 (catalog counterpart)",
      apd: false,
      role: "First negative element of variator; Petzval sum control",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: -135,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Strong negative power with low dispersion; LoCA correction in variator",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.66382,
      vd: 27.35,
      focalLengthMm: 162.3,
      glass: "J-SFH4 (inferred catalog counterpart; production material unspecified)",
      apd: "patent",
      apdNote: "θgF=0.6319; extreme +ΔPgF for secondary spectrum correction",
      role: "Anomalous-dispersion element — partial dispersion corrects secondary spectrum across zoom range",
      dPgF: 0.0341,
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: -79.3,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Additional variator negative power; chromatic balance with anomalous-dispersion L23",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: 110.7,
      glass: "FDS18 (catalog counterpart)",
      apd: false,
      role: "Zoom compensator; ultra-high nd minimizes SA from moving group",
    },
    {
      id: 9,
      name: "L41",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 127.6,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Relay positive power with minimal color contribution",
    },
    {
      id: 10,
      name: "L42",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 153.8,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Additional relay power; low-dispersion pair in G4",
    },
    {
      id: 11,
      name: "L51",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -34.8,
      glass: "N-SF66 (catalog counterpart)",
      apd: false,
      role: "Strong negative power; Petzval correction at stop",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L52",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 80.9,
      glass: "J-FKH1 (inferred catalog counterpart; low-dispersion glass)",
      apd: "inferred",
      apdNote: "Fluorophosphate crown, +ΔPgF",
      role: "Achromatic partner for L51",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L61",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      focalLengthMm: -158.1,
      glass: "J-LASF021 (catalog counterpart)",
      apd: false,
      role: "Aberration correction; high-index field corrector",
    },
    {
      id: 14,
      name: "L62",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      focalLengthMm: 49.5,
      glass: "J-PSKH4 (approximate catalog counterpart)",
      apd: false,
      role: "Aspheric front surface contributes spherical aberration and coma correction; production glass and manufacturing process unspecified",
      cemented: "D3",
    },
    {
      id: 15,
      name: "L63",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.4,
      focalLengthMm: -219.3,
      glass: "S-TIM2 (catalog counterpart)",
      apd: false,
      role: "Achromatic correction partner for L62",
      cemented: "D3",
    },
    {
      id: 16,
      name: "L64",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.801,
      vd: 34.92,
      focalLengthMm: 124.9,
      glass: "J-LAF016 (catalog counterpart)",
      apd: false,
      role: "Additional positive power; coma correction",
    },
    {
      id: 17,
      name: "L71",
      label: "Element 17",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: 141.8,
      glass: "FDS18 (catalog counterpart)",
      apd: false,
      role: "Positive element within negative focus group; SA balance during focus",
    },
    {
      id: 18,
      name: "L72",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.96,
      focalLengthMm: -53.6,
      glass: "N-LAK8 (catalog counterpart)",
      apd: false,
      role: "Dominant negative power for G7; lanthanum crown for Petzval control",
    },
    {
      id: 19,
      name: "L81",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.77,
      focalLengthMm: 66.6,
      glass: "J-LASFH9 (catalog counterpart)",
      apd: false,
      role: "Sole element of G8; symmetric form minimizes coma; high-nd for compact focus group",
    },
    {
      id: 20,
      name: "L91",
      label: "Element 20",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51696,
      vd: 64.14,
      focalLengthMm: -214.7,
      glass: "N-BK7 (approximate catalog counterpart)",
      apd: false,
      role: "Aspherical field flattener; corrects astigmatism and field curvature",
    },
    {
      id: 21,
      name: "L92",
      label: "Element 21",
      type: "Negative Meniscus",
      nd: 1.56384,
      vd: 60.71,
      focalLengthMm: -121.3,
      glass: "N-SK11 (catalog counterpart)",
      apd: false,
      role: "Final Petzval correction for 43.4 mm image circle",
    },
  ],

  /* ── Surface prescription ── */
  // (moved from asph) Equation (B), PDF p19: source κ = 0 means standard K = κ − 1 = −1.
  /* ── Aspherical coefficients ── */
  surfaces: [
    // ── G1: Fixed front group (positive, f = +148.0 mm) ──
    { label: "1", R: 116.34563, d: 2.8, sd: 36.5, medium: 1 }, // L11 front
    { label: "2", R: 85.133, d: 9.7, sd: 36.5, medium: 2 }, // L11→L12 junction
    { label: "3", R: "flat", d: 0.1, sd: 36 }, // L12 rear → air
    { label: "4", R: 92.01324, d: 7.7, sd: 35, medium: 3 }, // L13 front (fluorite)
    { label: "5", R: 696.98757, sd: 35 }, // L13 rear → air [VAR zoom]

    // ── G2: Variator (negative, f = −40.6 mm) — moves during zoom ──
    { label: "6", R: 58.77, d: 1.9, sd: 24, medium: 4 }, // L21 front
    { label: "7", R: 31.87745, d: 10.3, sd: 24 }, // L21 rear → air
    { label: "8", R: -186.53352, d: 1.6, sd: 21, medium: 5 }, // L22 front (ED)
    { label: "9", R: 105.34866, d: 0.8, sd: 21 }, // L22 rear → air
    { label: "10", R: 41.08366, d: 3.7, sd: 20, medium: 6 }, // L23 front (SR)
    { label: "11", R: 64.00891, d: 5.5, sd: 20 }, // L23 rear → air
    { label: "12", R: -71.62319, d: 1.9, sd: 18.1, medium: 7 }, // L24 front (ED)
    { label: "13", R: 88.67881, sd: 20 }, // L24 rear → air [VAR zoom]

    // ── G3: Compensator (positive, f = +110.7 mm) — moves during zoom ──
    { label: "14", R: 69.46271, d: 3.2, sd: 20.5, medium: 8 }, // L31 front
    { label: "15", R: 201.8299, sd: 20.5 }, // L31 rear → air [VAR zoom]

    // ── G4: Fixed relay (positive, f = +69.8 mm) ──
    { label: "16", R: 126.26563, d: 4.7, sd: 20.5, medium: 9 }, // L41 front (ED)
    { label: "17", R: -126.26563, d: 0.1, sd: 20.5 }, // L41 rear → air
    { label: "18", R: 47.66354, d: 3.85, sd: 19.5, medium: 10 }, // L42 front (ED)
    { label: "19", R: 122.86616, sd: 19.5 }, // L42 rear → air [VAR zoom]

    // ── G5: Moving group with aperture stop (negative, f = −62.6 mm) ──
    { label: "STO", R: "flat", d: 3.5 }, // Aperture stop
    { label: "21", R: -84.82141, d: 1.8, sd: 17, medium: 11 }, // L51 front
    { label: "22", R: 52.171, d: 5.0, sd: 17, medium: 12 }, // L51→L52 junction
    { label: "23", R: -170.93248, sd: 17 }, // L52 rear → air [VAR zoom]

    // ── G6: Fixed relay (positive, f = +56.9 mm) ──
    { label: "24", R: 111.64091, d: 1.7, sd: 17.5, medium: 13 }, // L61 front
    { label: "25", R: 60.55636, d: 2.0, sd: 17.5 }, // L61 rear → air
    {
      label: "26A",
      R: 58.68256,
      d: 7.7,
      sd: 17.5,
      medium: 14,
      asphere: { K: -1, A4: -2.0e-6, A6: 8.31e-10, A8: -6.83e-12, A10: 2.63e-14, A12: -3.55e-17 },
    }, // L62 front [ASPH]
    { label: "27", R: -55.839, d: 1.7, sd: 17.5, medium: 15 }, // L62→L63 junction
    { label: "28", R: -95.85894, d: 1.3, sd: 17.5 }, // L63 rear → air
    { label: "29", R: 58.0393, d: 2.7, sd: 17.5, medium: 16 }, // L64 front
    { label: "30", R: 135.30037, sd: 17.5 }, // L64 rear → air [VAR zoom+focus]

    // ── G7: Focus group 1 (negative, f = −87.3 mm) — moves toward image ──
    { label: "31", R: -369.28597, d: 2.0, sd: 15, medium: 17 }, // L71 front
    { label: "32", R: -98.65201, d: 0.8, sd: 15 }, // L71 rear → air
    { label: "33", R: 1344.92022, d: 1.25, sd: 14, medium: 18 }, // L72 front
    { label: "34", R: 37.13115, sd: 14 }, // L72 rear → air [VAR zoom+focus]

    // ── G8: Focus group 2 (positive, f = +66.6 mm) — moves toward object ──
    { label: "35", R: 119.39985, d: 3.85, sd: 18, medium: 19 }, // L81 front
    { label: "36", R: -119.39985, sd: 18 }, // L81 rear → air [VAR zoom+focus]

    // ── G9: Fixed field corrector (negative, f = −76.3 mm) ──
    {
      label: "37A",
      R: -83.23047,
      d: 1.9,
      sd: 18,
      medium: 20,
      asphere: { K: -1, A4: 1.18e-6, A6: 1.63e-9, A8: -7.32e-12, A10: 2.41e-14, A12: -2.65e-17 },
    }, // L91 front [ASPH]
    { label: "38", R: -335.27926, d: 4.1, sd: 18 }, // L91 rear → air
    { label: "39", R: -54.71091, d: 1.9, sd: 18.5, medium: 21 }, // L92 front
    { label: "40", R: -276.64763, d: 32.5469, sd: 18.5 }, // L92 rear → BF (constant)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom fields ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 71.5, nominalFNumber: 2.88277, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 135, nominalFNumber: 2.8637, published: true, publishedFocus: [1] },
      { focalLengthMm: 196, nominalFNumber: 2.87906, label: "Tele", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Patent focus stations: G7 moves toward the image and G8 toward the object. The tabulated gaps imply approximately 1.0 m object-to-image distance; tele travel is ±11.53 mm.",
  },

  /* (moved from var) ── Variable air spacings (zoom + focus) ──
   *  Zoom format: each value is an array of [d_infinity, d_close] pairs,
   *  one per zoom position (wide / mid / tele).
   *
   *  D5, D13, D15, D19, D23: zoom only (identical inf/close values).
   *  D30, D34, D36: zoom + focus (different inf/close values).
   *  BF (D40) = 32.5469 constant — not included here.
   */
  gaps: {
    // ── Zoom-only gaps ──
    "5": {
      label: "D5",
      values: [
        [1.59716, 1.59716],
        [33.49859, 33.49859],
        [49.53103, 49.53103],
      ],
    }, // G1→G2
    "13": {
      label: "D13",
      values: [
        [37.80333, 37.80333],
        [11.65214, 11.65214],
        [1.60516, 1.60516],
      ],
    }, // G2→G3
    "15": {
      label: "D15",
      values: [
        [14.09965, 14.09965],
        [8.34942, 8.34942],
        [2.36395, 2.36395],
      ],
    }, // G3→G4
    "19": {
      label: "D19",
      values: [
        [4.24982, 4.24982],
        [7.0795, 7.0795],
        [8.12305, 8.12305],
      ],
    }, // G4→STO/G5
    "23": {
      label: "D23",
      values: [
        [5.35666, 5.35666],
        [2.52698, 2.52698],
        [1.48342, 1.48342],
      ],
    }, // G5→G6
    // ── Zoom + focus gaps ──
    "30": {
      label: "D30",
      values: [
        [3.81632, 5.10137],
        [6.22894, 11.89468],
        [4.10722, 15.63265],
      ],
    }, // G6→G7
    "34": {
      label: "D34",
      values: [
        [28.12371, 24.58984],
        [22.59291, 10.97816],
        [27.70989, 4.65903],
      ],
    }, // G7→G8
    "36": {
      label: "D36",
      values: [
        [3.7896, 6.03843],
        [6.90778, 12.8568],
        [3.91252, 15.43795],
      ],
    }, // G8→G9
  },

  aperture: { fStops: [3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "15" },
    { text: "G4 (+)", fromSurface: "16", toSurface: "19" },
    { text: "G5 (−)", fromSurface: "STO", toSurface: "23" },
    { text: "G6 (+)", fromSurface: "24", toSurface: "30" },
    { text: "G7 (−)", fromSurface: "31", toSurface: "34" },
    { text: "G8 (+)", fromSurface: "35", toSurface: "36" },
    { text: "G9 (−)", fromSurface: "37A", toSurface: "40" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" }, // L11+L12 cemented
    { text: "D2", fromSurface: "21", toSurface: "23" }, // L51+L52 cemented
    { text: "D3", fromSurface: "26A", toSurface: "28" }, // L62+L63 cemented
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.65, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
