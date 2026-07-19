import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Nikon AF-S NIKKOR 24-120mm f/4G ED VR           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2010/0220400 A1, Example 1 (Nikon).               ║
 * ║  Five-group positive-negative-positive-negative-positive FX zoom.   ║
 * ║  17 elements / 13 air-spaced groups, 3 aspherical surfaces.        ║
 * ║  Focus: inner focus by G2; VR by the cemented negative component    ║
 * ║  in G4.                                                            ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d1, d2, d3, d4, and Bf.                       ║
 * ║  Focus variable gaps: d1 and d2 from the patent close-range table. ║
 * ║  The patent also changes d3(W) by +0.020 mm at close focus; this   ║
 * ║  value is transcribed because it is in Table 1, although the prose ║
 * ║  states G2-only focusing.                                          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║  No production scaling was applied. Patent design EFLs are          ║
 * ║  24.70 / 45.75 / 116.39 mm versus marketed 24-120 mm.              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not publish clear-aperture radii. Semi-diameters  ║
 * ║  below are conservative reconstruction values from paraxial         ║
 * ║  marginal/chief-ray envelopes, Fig. 1 proportions, the 77 mm       ║
 * ║  filter constraint, edge-thickness checks, sd/|R| < 0.90, and      ║
 * ║  cross-gap sag clearance.                                          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ No sensor cover glass, filters, or mechanical parts          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-afs-24-120mm-f4g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24-120mm f/4 G ED VR",
  subtitle: "US 2010/0220400 A1 Example 1 — Nikon",
  specs: [
    "17 elements / 13 groups",
    "24-120 mm f/4 FX standard zoom",
    "US 2010/0220400 A1 Example 1: f = 24.70 / 45.75 / 116.39 mm",
    "3 aspherical surfaces; 2 inferred ED elements",
    "G2 inner focus; G4 decentering VR group",
  ],

  focalLengthMarketing: [24, 120],
  focalLengthDesign: [24.7, 116.39],
  apertureMarketing: 4,
  apertureDesign: 4.13,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2010/0220400 A1",
  patentAuthors: ["Hiroshi Yamamoto", "Satoshi Miwa", "Takeshi Suzuki", "Haruo Sato"],
  patentAssignees: ["Nikon Corp"],
  patentYear: 2010,
  elementCount: 17,
  groupCount: 13,
  apertureBlades: 9,
  apertureBladeRoundedness: 0.75,

  nominalFno: 4,
  closeFocusM: 0.45,
  maxFstop: 22,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  yScFill: 0.82,
  scFill: 0.58,
  maxAspectRatio: 1.6,
  focusStep: 0.004,
  zoomStep: 0.004,

  zoomPositions: [24.7, 45.75, 116.39],
  zoomLabels: ["24 mm", "46 mm", "120 mm"],

  focusDescription:
    "Inner focus by rigid object-side translation of G2. Nikon's product MFD is 0.45 m; the patent close-range table is a shallow finite-conjugate aberration-characterization state.",

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.77,
      fl: -168.71,
      glass: "S-TIH53 (OHARA dense flint)",
      role: "High-index dense-flint front element of the G1 cemented doublet.",
      cemented: "D11-12",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.593189,
      vd: 67.87,
      fl: 134.77,
      glass: "J-PSKH1 (HIKARI; S-FPM2-class ED phosphate crown)",
      apd: "inferred",
      apdNote: "HIKARI J-PSKH1 lists ΔPgF = +0.0135; inferred as one of Nikon's two ED elements.",
      dPgF: 0.0135,
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
      role: "Low-dispersion anomalous positive crown in G1; chromatic correction at large front-group ray heights.",
      cemented: "D11-12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.29,
      fl: 125.94,
      glass: "S-LAH97 (OHARA lanthanum crown)",
      role: "Air-spaced positive singlet completing the front collector group.",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.816,
      vd: 46.63,
      fl: -19.71,
      glass: "S-LAH59 (OHARA lanthanum dense crown)",
      role: "Strong negative leading element of the variator/focus group; object-side asphere controls wide-angle field curvature and distortion.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.795,
      vd: 45.3,
      fl: -68.66,
      glass: "J-LASF017 (HIKARI lanthanum dense flint)",
      role: "Negative element immediately object-side of the strongest positive lens in G2; supplies conditional-expression shape term.",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.77,
      fl: 25.89,
      glass: "S-TIH53 (OHARA dense flint)",
      role: "Strong positive element embedded in the negative variator group.",
    },
    {
      id: 7,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.8061,
      vd: 40.94,
      fl: -34.65,
      glass: "S-LAH53 (OHARA lanthanum flint)",
      role: "Rear negative element of G2; image-side asphere corrects telephoto spherical aberration.",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.29,
      fl: 63.93,
      glass: "S-LAH97 (OHARA lanthanum crown)",
      role: "First positive relay element in G3, immediately object-side of the aperture stop.",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.77,
      fl: -50.63,
      glass: "S-TIH53 (OHARA dense flint)",
      role: "Dispersive negative member of the G3 cemented positive doublet.",
      cemented: "D32-33",
    },
    {
      id: 10,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.45,
      fl: 29.93,
      glass: "FC5 (HOYA) / N-FK5 class fluor-crown",
      role: "Low-dispersion positive member of the relay doublet near the stop.",
      cemented: "D32-33",
    },
    {
      id: 11,
      name: "L34",
      label: "L34",
      type: "Biconvex Positive",
      nd: 1.593189,
      vd: 67.87,
      fl: 64.94,
      glass: "J-PSKH1 (HIKARI; S-FPM2-class ED phosphate crown)",
      apd: "inferred",
      apdNote: "HIKARI J-PSKH1 lists ΔPgF = +0.0135; inferred as one of Nikon's two ED elements.",
      dPgF: 0.0135,
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
      role: "Rear G3 low-dispersion anomalous positive singlet.",
    },
    {
      id: 12,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: 28.08,
      glass: "J-LASF021 (HIKARI lanthanum dense flint)",
      role: "Positive front member of the cemented negative VR component.",
      cemented: "D41-42",
    },
    {
      id: 13,
      name: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.29,
      fl: -18.78,
      glass: "S-LAH97 (OHARA lanthanum crown)",
      role: "Strong negative rear member of the decentering VR doublet.",
      cemented: "D41-42",
    },
    {
      id: 14,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.89,
      fl: -80.74,
      glass: "S-LAL8 (OHARA lanthanum crown)",
      role: "Weak negative singlet completing the negative fourth group.",
    },
    {
      id: 15,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58913,
      vd: 61.18,
      fl: 32.93,
      glass: "S-BAL35 (OHARA barium crown)",
      role: "Strong positive lead element of the rear imaging group; object-side asphere corrects residual exit-cone aberrations.",
    },
    {
      id: 16,
      name: "L52",
      label: "L52",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.45,
      fl: 44.4,
      glass: "FC5 (HOYA) / N-FK5 class fluor-crown",
      role: "Low-dispersion positive member of the final cemented pair.",
      cemented: "D52-53",
    },
    {
      id: 17,
      name: "L53",
      label: "L53",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: -32.1,
      glass: "J-LASF021 (HIKARI lanthanum dense flint)",
      role: "High-index dispersive negative member of the rear cemented pair.",
      cemented: "D52-53",
    },
  ],

  surfaces: [
    { label: "1", R: 207.801, d: 2.0, nd: 1.84666, elemId: 1, sd: 36.0 },
    { label: "2", R: 84.2787, d: 7.595, nd: 1.593189, elemId: 2, sd: 32.0 },
    { label: "3", R: -1502.58, d: 0.1, nd: 1.0, elemId: 0, sd: 32.0 },
    { label: "4", R: 57.9483, d: 5.6, nd: 1.755, elemId: 3, sd: 28.5 },
    { label: "5", R: 142.1986, d: 2.899, nd: 1.0, elemId: 0, sd: 28.0 },

    { label: "6A", R: 1030.3484, d: 1.2, nd: 1.816, elemId: 4, sd: 14.0 },
    { label: "7", R: 15.8302, d: 8.018, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "8", R: -31.9349, d: 1.0, nd: 1.795, elemId: 5, sd: 11.5 },
    { label: "9", R: -78.0281, d: 0.1, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "10", R: 60.0996, d: 4.2, nd: 1.84666, elemId: 6, sd: 12.0 },
    { label: "11", R: -33.408, d: 0.537, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "12", R: -28.426, d: 1.0, nd: 1.8061, elemId: 7, sd: 10.5 },
    { label: "13A", R: 1638.3373, d: 24.017, nd: 1.0, elemId: 0, sd: 11.0 },

    { label: "14", R: 51.628, d: 2.6, nd: 1.755, elemId: 8, sd: 11.5 },
    { label: "15", R: -725.4606, d: 1.4, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 10.9 },
    { label: "17", R: 30.6214, d: 3.0, nd: 1.84666, elemId: 9, sd: 11.5 },
    { label: "18", R: 17.0593, d: 6.6, nd: 1.48749, elemId: 10, sd: 11.5 },
    { label: "19", R: -88.049, d: 0.1, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "20", R: 42.1543, d: 3.4, nd: 1.593189, elemId: 11, sd: 12.0 },
    { label: "21", R: -433.2258, d: 1.779, nd: 1.0, elemId: 0, sd: 12.0 },

    { label: "22", R: -54.3056, d: 3.5, nd: 1.85026, elemId: 12, sd: 11.0 },
    { label: "23", R: -17.0745, d: 1.0, nd: 1.755, elemId: 13, sd: 11.0 },
    { label: "24", R: 85.6576, d: 3.0, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "25", R: -54.2304, d: 1.0, nd: 1.713, elemId: 14, sd: 12.5 },
    { label: "26", R: -943.5177, d: 8.342, nd: 1.0, elemId: 0, sd: 12.5 },

    { label: "27A", R: 88.1343, d: 5.734, nd: 1.58913, elemId: 15, sd: 14.0 },
    { label: "28", R: -24.2775, d: 0.1, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "29", R: -207.7437, d: 6.509, nd: 1.48749, elemId: 16, sd: 14.0 },
    { label: "30", R: -19.8055, d: 1.0, nd: 1.85026, elemId: 17, sd: 13.5 },
    { label: "31", R: -73.88, d: 38.496, nd: 1.0, elemId: 0, sd: 13.5 },
  ],

  asph: {
    // Patent uses kappa in 1 - kappa * (y / r)^2. Standard K = kappa - 1.
    "6A": {
      K: 0,
      A4: 1.3187e-5,
      A6: -3.1049e-8,
      A8: 4.7444e-11,
      A10: -3.4386e-14,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -9.2669e-7,
      A6: -2.1215e-8,
      A8: 8.5264e-12,
      A10: -8.7463e-14,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: -4,
      A4: -7.1222e-6,
      A6: -3.5524e-9,
      A8: 4.1974e-11,
      A10: -1.1273e-13,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "5": [
      [2.899, 2.077],
      [17.248, 16.566],
      [44.501, 43.557],
    ],
    "13A": [
      [24.017, 24.84],
      [11.369, 12.051],
      [1.199, 2.143],
    ],
    "21": [
      [1.779, 1.799],
      [5.564, 5.564],
      [8.842, 8.842],
    ],
    "26": [
      [8.342, 8.342],
      [4.578, 4.578],
      [1.3, 1.3],
    ],
    "31": [
      [38.496, 38.496],
      [48.783, 48.783],
      [64.317, 64.317],
    ],
  },
  varLabels: [
    ["5", "d1 G1-G2"],
    ["13A", "d2 G2-G3"],
    ["21", "d3 G3-G4"],
    ["26", "d4 G4-G5"],
    ["31", "Bf"],
  ],

  groups: [
    { text: "G1 +106.848", fromSurface: "1", toSurface: "5" },
    { text: "G2 -17.844 IF", fromSurface: "6A", toSurface: "13A" },
    { text: "G3 +25.331", fromSurface: "14", toSurface: "21" },
    { text: "G4 -30.712 VR", fromSurface: "22", toSurface: "26" },
    { text: "G5 +45.007", fromSurface: "27A", toSurface: "31" },
  ],
  doublets: [
    { text: "D11-12", fromSurface: "1", toSurface: "3" },
    { text: "D32-33", fromSurface: "17", toSurface: "19" },
    { text: "D41-42", fromSurface: "22", toSurface: "24" },
    { text: "D52-53", fromSurface: "29", toSurface: "31" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
