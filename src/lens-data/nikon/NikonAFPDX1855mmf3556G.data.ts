import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 10,690,896 B2, First Example, Table 1 (Nikon).         ║
 * ║  Six-group negative-lead DX zoom: (−)(+)(−)(+)(−)(+).                  ║
 * ║  Manufacturer count: 12 elements / 9 groups, 2 aspherical elements.     ║
 * ║  Data model: L11's hybrid resin layer is modeled as a separate bonded   ║
 * ║  optical material, so the elements array contains 13 material bodies.    ║
 * ║  Focus: G3/L31 inner-focus group moves object-side at close focus.       ║
 * ║  VR: G2/L21 is the laterally shifted vibration-reduction group.          ║
 * ║                                                                            ║
 * ║  Zoom positions are the patent's W/M/T states: 18.50, 35.00, 53.40 mm.  ║
 * ║  Variable gaps: d6, d8, d10, d16, d19, and Bf.                          ║
 * ║  Focus close values are paraxially inferred for Nikon's 0.25 m MFD       ║
 * ║  by translating only L31 and keeping the patent image plane fixed.        ║
 * ║                                                                            ║
 * ║  Semi-diameters are not listed in the patent. They were estimated from   ║
 * ║  entrance-pupil/chief-ray geometry, then reduced where needed to satisfy ║
 * ║  edge-thickness and cross-gap sag-clearance constraints. The limiting    ║
 * ║  locations are the L11/L12 air gap, the 0.10 mm L41/L42 air gap, the     ║
 * ║  telephoto d19 gap, and the edge thickness of L21, L41, L51, and L62.    ║
 * ║                                                                            ║
 * ║  Sensor cover glass is not included.                                      ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-afp-dx-18-55mm-f35-56g-vr",
  maker: "Nikon",
  name: "NIKON AF-P DX NIKKOR 18-55mm f/3.5-5.6 G VR",
  subtitle: "US 10,690,896 B2 — First Example / Nikon",
  specs: [
    "12 elements / 9 groups (manufacturer count)",
    "13 modeled optical material bodies",
    "f = 18.50–53.40 mm patent design",
    "FNO = 3.64–5.88 patent design",
    "2 aspherical surfaces",
    "Inner focus; G2 VR group",
  ],

  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.5, 53.4],
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 10,690,896 B2",
  patentAuthors: ["Kosuke MACHIDA", "Takeshi Suzuki", "Takeru Uehara"],
  patentAssignees: ["Nikon Corp"],
  patentYear: 2020,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11g",
      label: "L11 glass body",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.22,
      fl: -42.34,
      glass: "J-SK5 (HIKARI); S-BAL35 / P-SK58A class, 589/612",
      apd: false,
      role: "Front negative field-collecting meniscus; glass substrate for the bonded resin asphere.",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L11r",
      label: "L11 resin aspherical layer",
      type: "Hybrid Resin Aspherical Layer",
      nd: 1.56093,
      vd: 36.64,
      fl: -324.42,
      glass: "UV-curable resin (patent material, no catalog match)",
      apd: false,
      role: "Thin bonded resin layer carrying the image-side aspherical profile of L11.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.12,
      fl: -30.61,
      glass: "J-SK15 (HIKARI); N-SK15 / BACD15 / S-BSM15 class, 623/581",
      apd: false,
      role: "Negative member of the G1 rear cemented doublet; lateral-color and field correction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 39.18,
      glass: "J-SF03 (HIKARI); S-TIH53 / dense flint class, 847/238",
      apd: false,
      role: "Positive high-dispersion partner in the G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 76.67,
      glass: "J-FK5 (HIKARI); S-FSL5 / N-FK5 class, 487/703",
      apd: false,
      role: "Single positive G2 element; linked zoom member and vibration-reduction group.",
    },
    {
      id: 6,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -60.9,
      glass: "J-LASF016 (HIKARI); S-LAH66 / N-LAF34 / TAF1 class, 773/496",
      apd: false,
      role: "Single negative inner-focus group, moved toward the object side at close focus.",
    },
    {
      id: 7,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 39.35,
      glass: "J-FK5 (HIKARI); S-FSL5 / N-FK5 class, 487/703",
      apd: false,
      role: "Front positive singlet of G4; primary relay convergence before the stop.",
    },
    {
      id: 8,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 26.88,
      glass: "J-FK5 (HIKARI); S-FSL5 / N-FK5 class, 487/703",
      apd: false,
      role: "Strong positive member of the G4 achromatized cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -52.43,
      glass: "J-SF03 (HIKARI); S-TIH53 / dense flint class, 847/238",
      apd: false,
      role: "High-dispersion negative partner in the G4 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.57,
      fl: 26.09,
      glass: "J-SF4 (HIKARI); S-TIH4 / N-SF4 / E-FD4 class, 755/276",
      apd: false,
      role: "Positive high-dispersion member of the negative G5 cemented group.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L52",
      label: "L52",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.02,
      fl: -14.51,
      glass: "J-BASF7 (HIKARI); S-BAH27 / BAFD7 class, 702/410",
      apd: false,
      role: "Strong negative rear member of G5; completes the negative correcting doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L61",
      label: "L61 plastic asphere",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.52444,
      vd: 56.21,
      fl: 1411.95,
      glass: "Optical plastic (patent material, no catalog match)",
      apd: false,
      role: "Weak positive plastic aspherical element in G6; field-dependent coma and astigmatism correction.",
    },
    {
      id: 13,
      name: "L62",
      label: "L62",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 63.88,
      fl: 48.14,
      glass: "J-BK7A (HIKARI); S-BSL7 / N-BK7 class, 517/641",
      apd: false,
      role: "Rear positive glass element of G6 and durable image-side terminal element.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 80.72, d: 2.0, nd: 1.58913, elemId: 1, sd: 15.3 },
    { label: "2", R: 18.88, d: 0.17, nd: 1.56093, elemId: 2, sd: 14.9 },
    { label: "3A", R: 17.05, d: 9.35, nd: 1.0, elemId: 0, sd: 14.7 },
    { label: "4", R: 240.48, d: 1.4, nd: 1.62299, elemId: 3, sd: 14.7 },
    { label: "5", R: 17.63, d: 5.0, nd: 1.84666, elemId: 4, sd: 14.5 },
    { label: "6", R: 32.74, d: 33.51, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "7", R: 164.19, d: 1.65, nd: 1.48749, elemId: 5, sd: 9.5 },
    { label: "8", R: -48.23, d: 6.23, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "9", R: -30.49, d: 0.8, nd: 1.7725, elemId: 6, sd: 10.5 },
    { label: "10", R: -87.64, d: 2.96, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "11", R: 46.43, d: 3.05, nd: 1.48749, elemId: 7, sd: 9.8 },
    { label: "12", R: -31.99, d: 0.1, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: 25.5, d: 4.2, nd: 1.48749, elemId: 8, sd: 9.5 },
    { label: "14", R: -25.5, d: 0.8, nd: 1.84666, elemId: 9, sd: 9.2 },
    { label: "15", R: -60.79, d: 0.75, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 7.65 },
    { label: "17", R: -43.88, d: 2.27, nd: 1.7552, elemId: 10, sd: 8.0 },
    { label: "18", R: -13.9, d: 0.8, nd: 1.70154, elemId: 11, sd: 8.0 },
    { label: "19", R: 38.98, d: 9.07, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "20", R: 81.93, d: 1.3, nd: 1.52444, elemId: 12, sd: 11.5 },
    { label: "21A", R: 91.62, d: 1.6, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "22", R: -179.92, d: 2.3, nd: 1.5168, elemId: 13, sd: 9.4 },
    { label: "23", R: -21.95, d: 43.85, nd: 1.0, elemId: 0, sd: 9.4 },
  ],

  /* ── Aspherical coefficients ── */
  // The patent tabulates conic coefficient κ in x=(h²/r)/(1+sqrt(1-κ(h/r)²))+... .
  // LensVisualizer uses the standard K convention x=(h²/R)/(1+sqrt(1-(1+K)(h/R)²))+... ; therefore K = κ - 1.
  asph: {
    "3A": {
      K: -1,
      A4: 1.43618e-5,
      A6: 3.23919e-8,
      A8: -6.25295e-11,
      A10: 2.95784e-13,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: -1,
      A4: 2.4315e-5,
      A6: -6.35221e-9,
      A8: 2.2476e-10,
      A10: -3.95108e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and focus variables ── */
  zoomPositions: [18.5, 35.0, 53.4],
  zoomStep: 0.004,
  zoomLabels: ["18.5 mm", "35 mm", "53.4 mm"],

  var: {
    "6": [
      [33.51, 33.51],
      [11.32, 11.32],
      [3.41, 3.41],
    ],
    "8": [
      [6.23, 3.414],
      [7.18, 3.816],
      [7.4, 3.338],
    ],
    "10": [
      [2.96, 5.776],
      [2.0, 5.364],
      [1.78, 5.842],
    ],
    STO: [
      [1.7, 1.7],
      [5.67, 5.67],
      [9.57, 9.57],
    ],
    "19": [
      [9.07, 9.07],
      [5.1, 5.1],
      [1.2, 1.2],
    ],
    "23": [
      [43.85, 43.85],
      [59.92, 59.92],
      [75.82, 75.82],
    ],
  },
  varLabels: [
    ["6", "d6: G1–G2"],
    ["8", "d8: G2–G3 / focus"],
    ["10", "d10: G3–G4 / focus"],
    ["STO", "d16: Stop–G5"],
    ["19", "d19: G5–G6"],
    ["23", "Bf"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2 / VR", fromSurface: "7", toSurface: "8" },
    { text: "G3 / Focus", fromSurface: "9", toSurface: "10" },
    { text: "G4", fromSurface: "11", toSurface: "STO" },
    { text: "G5", fromSurface: "17", toSurface: "19" },
    { text: "G6", fromSurface: "20", toSurface: "23" },
  ],

  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "4", toSurface: "6" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "Inner focus by G3/L31. Close-focus values are paraxially inferred for 0.25 m MFD by moving L31 object-side within the fixed G2–G4 pocket.",

  /* ── Aperture configuration ── */
  nominalFno: [3.5, 4.5, 5.6],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
