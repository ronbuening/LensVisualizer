import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AF 80-200mm f/2.8 APO                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1989-039542, Example 1 (Minolta Co., Ltd.).                ║
 * ║  Production correlation: Minolta AF Zoom 80-200mm F2.8 / code 2589.       ║
 * ║  16 elements / 13 air-separated groups; all spherical; no scale applied.  ║
 * ║                                                                            ║
 * ║  Zoom: patent gaps D7, D14, and D19 at 82 / 140 / 195 mm.                 ║
 * ║  Group II moves imageward; Group III reverses after the mid position;      ║
 * ║  Group IV is fixed to source precision and the lens-stack track is         ║
 * ║  effectively constant.                                                     ║
 * ║                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. Minolta's service material      ║
 * ║  identifies front focus by Group I and a 1.8 m MFD. The data model keeps   ║
 * ║  the front vertex fixed and increases D7, which is optically equivalent    ║
 * ║  up to a global axial translation. Close-focus D7 values were re-solved    ║
 * ║  from the final arrays with a fixed image plane and 1.8 m image-plane      ║
 * ║  distance; they are not patent-published spacings.                         ║
 * ║                                                                            ║
 * ║  Stop inference: the patent has no numerical stop row. Minolta service     ║
 * ║  material depicts the diaphragm inside Group IV between L13 and L14 and    ║
 * ║  gives a 2.4 mm minimum-side aperture. Patent d23 = 23.30 mm is split at   ║
 * ║  the code-solved STO station; sd = 13.333333 mm reproduces F/2.88 and      ║
 * ║  scales to a 2.4 mm diameter at f/32. The axial split remains inferred.    ║
 * ║                                                                            ║
 * ║  Image plane: the patent has no BFD row. r29.d = 41.793578 mm is the       ║
 * ║  independently computed 82 mm-state BFD and is held fixed; mid/tele        ║
 * ║  paraxial image-station residuals are below 0.002 mm and arise from source ║
 * ║  rounding.                                                                  ║
 * ║                                                                            ║
 * ║  Semi-diameters: not published numerically. They are inferred from exact   ║
 * ║  spherical marginal-ray checks, paraxial chief-ray/full-frame checks, the  ║
 * ║  patent optical section, the reconstructed 1.8 m state, and current        ║
 * ║  edge-thickness / rim-slope / shared-band cross-gap rules.                 ║
 * ║                                                                            ║
 * ║  Glass: the patent publishes only nd and νd. No per-element nC, nF, ng,   ║
 * ║  or dPgF data are available, so those fields are deliberately omitted.     ║
 * ║  Compatible catalog curves are used without asserting production vendor.  ║
 * ║  The remaining proprietary coordinates stay explicitly unresolved.       ║
 * ║                                                                            ║
 * ║  Source normalization: patent r19 = 0.000 is a plane and is stored as      ║
 * ║  R = 1e15. Patent condition (7) prints +0.101; independent substitution    ║
 * ║  gives -0.101609585. That source error does not alter the prescription.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-af-80-200mm-f28-apo",
  maker: "Minolta",
  name: "MINOLTA AF 80-200mm f/2.8 APO",
  subtitle: "JP1989-039542 Example 1 — correlated to Minolta AF Zoom 80-200mm F2.8 (2589)",
  specs: ["16 ELEMENTS / 13 GROUPS", "DESIGN 82-195mm", "F/2.88 DESIGN", "FRONT FOCUS", "ALL-SPHERICAL"],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [82, 195],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1989-039542 A",
  patentAuthors: ["Hisashi Tokumaru", "Masakuni Tai"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1989,
  elementCount: 16,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      fl: 398.329737,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      role: "First positive member of the front focusing group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      fl: 398.329737,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      role: "Second positive member of the front focusing group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 31.7,
      fl: -123.241254,
      glass: "740317 class (vendor unresolved)",
      cemented: "D1",
      role: "Negative member of the front-group cemented pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      fl: 84.290414,
      glass: "603607 class (vendor unresolved)",
      cemented: "D1",
      role: "Positive member completing the front-group cemented pair.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      fl: -64.52493,
      glass: "603607 class (vendor unresolved)",
      role: "Front negative member of the second zoom group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      fl: -46.020576,
      glass: "603607 class (vendor unresolved)",
      cemented: "D2",
      role: "Negative member of the second-group cemented pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.75,
      vd: 25.1,
      fl: 54.783874,
      glass: "750251 — dense-flint glass (catalog unresolved)",
      cemented: "D2",
      role: "Positive high-index member of the second-group cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.2,
      fl: -109.01076,
      glass: "694532 class (vendor unresolved)",
      role: "Rear negative member of the second zoom group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 88.291882,
      glass: "773496 class (vendor unresolved)",
      role: "Front positive member of the third zoom group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      fl: 76.567714,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      cemented: "D3",
      role: "Positive member of the third-group cemented pair.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Plano-Concave Negative",
      nd: 1.74,
      vd: 31.7,
      fl: -76.824324,
      glass: "740317 class (vendor unresolved)",
      cemented: "D3",
      role: "Negative plano-concave member completing the third group.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      fl: 65.271203,
      glass: "493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Strong positive front member of the fixed fourth group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -107.804685,
      glass: "755275 class (vendor unresolved)",
      role: "Negative member of the fixed fourth group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: 146.478864,
      glass: "717295 class (vendor unresolved)",
      role: "Positive meniscus in the fixed rear group.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -58.615443,
      glass: "834372 class (vendor unresolved)",
      role: "Strong negative meniscus near the rear of the fixed group.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.1,
      fl: 96.3227,
      glass: "689311 class (vendor unresolved)",
      role: "Final positive element before the modeled image plane.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 120.0, d: 4.8, nd: 1.48749, elemId: 1, sd: 35.5 },
    { label: "2", R: 310.0, d: 0.2, nd: 1.0, elemId: 0, sd: 35.5 },
    { label: "3", R: 120.0, d: 4.8, nd: 1.48749, elemId: 2, sd: 35.0 },
    { label: "4", R: 310.0, d: 0.2, nd: 1.0, elemId: 0, sd: 35.0 },
    { label: "5", R: 112.8, d: 2.25, nd: 1.74, elemId: 3, sd: 34.0 },
    { label: "6", R: 50.0, d: 13.25, nd: 1.60311, elemId: 4, sd: 33.0 },
    { label: "7", R: 2736.05, d: 3.461, nd: 1.0, elemId: 0, sd: 33.0 },
    { label: "8", R: -279.86, d: 1.3, nd: 1.60311, elemId: 5, sd: 16.8 },
    { label: "9", R: 45.28, d: 5.67, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "10", R: -90.0, d: 1.3, nd: 1.60311, elemId: 6, sd: 16.8 },
    { label: "11", R: 40.35, d: 6.15, nd: 1.75, elemId: 7, sd: 16.8 },
    { label: "12", R: 2100.0, d: 2.42, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "13", R: -78.442, d: 1.3, nd: 1.6935, elemId: 8, sd: 17.5 },
    { label: "14", R: 2100.0, d: 25.308, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "15", R: 384.91, d: 4.2, nd: 1.7725, elemId: 9, sd: 20.5 },
    { label: "16", R: -82.5, d: 0.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "17", R: 104.3, d: 7.0, nd: 1.48749, elemId: 10, sd: 20.5 },
    { label: "18", R: -56.85, d: 1.35, nd: 1.74, elemId: 11, sd: 20.5 },
    { label: "19", R: 1e15, d: 13.988, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "20", R: 38.6, d: 8.25, nd: 1.4931, elemId: 12, sd: 20.0 },
    { label: "21", R: -180.0, d: 7.46, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "22", R: -93.2, d: 1.35, nd: 1.7552, elemId: 13, sd: 17.0 },
    { label: "23", R: 647.815, d: 13.934190046639, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 9.365809953361, nd: 1.0, elemId: 0, sd: 13.333333333333 },
    { label: "24", R: -811.55, d: 3.5, nd: 1.71736, elemId: 14, sd: 16.0 },
    { label: "25", R: -93.2, d: 18.1, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "26", R: -26.0, d: 1.35, nd: 1.834, elemId: 15, sd: 16.0 },
    { label: "27", R: -56.85, d: 0.15, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "28", R: 104.3, d: 3.4, nd: 1.68893, elemId: 16, sd: 16.0 },
    { label: "29", R: -180.0, d: 41.793578, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  asph: {},

  /* ── Zoom and focus movement ── */
  zoomPositions: [82, 140, 195],
  zoomStep: 0.004,
  zoomLabels: ["82mm", "195mm"],

  var: {
    "7": [
      [3.461, 12.819425797714],
      [28.879, 38.238221860473],
      [39.015, 48.374098871419],
    ],
    "14": [
      [25.308, 25.308],
      [12.822, 12.822],
      [0.982, 0.982],
    ],
    "19": [
      [13.988, 13.988],
      [1.055, 1.055],
      [2.759, 2.759],
    ],
  },

  varLabels: [
    ["7", "D7 — ZOOM + FRONT FOCUS"],
    ["14", "D14 — ZOOM"],
    ["19", "D19 — ZOOM"],
  ],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "7" },
    { text: "II", fromSurface: "8", toSurface: "14" },
    { text: "III", fromSurface: "15", toSurface: "19" },
    { text: "IV", fromSurface: "20", toSurface: "29" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.8,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: front focus by patent Group I / production first lens group. The modeled first vertex is fixed and D7 increases by 9.3584-9.3592 mm at 1.8 m; Groups II-IV and the rear image spacing otherwise retain their infinity-focus geometry. MFD is referenced to the modeled image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout ── */
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
