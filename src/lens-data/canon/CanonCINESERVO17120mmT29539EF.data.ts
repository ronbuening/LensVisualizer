import type { LensDataInput } from "../../types/optics.js";

/**
 * CANON CINE-SERVO 17-120mm T2.95-3.9 (CN7×17 KAS S/E1) — JP 2015-94867 A, Numerical Example 1.
 * 27 elements / 22 air-separated groups / 2 aspherical surfaces; no dimensional scaling.
 * Zoom: three published infinity stations at 17, 51, and 119 mm. Gaps D18, D26, and D29 are zoom-only.
 * Focus: the patent identifies U12 (surfaces 7-8) as the internal focusing unit, but publishes no close-focus
 * numerical spacings. This file therefore uses NO_INTERNAL_RECONSTRUCTION: no U12 travel is invented.
 * closeFocusM = 0.85 is production MOD metadata from Canon, not an authored finite-conjugate prescription.
 * Aperture: nominalFno [2.8, 2.8, 3.4] is the patent/design schedule. zoomApertureModel infers the physical
 * iris radius required at each published zoom station; the patent's surface-30 effective diameter is not
 * treated as a published physical iris schedule.
 * Semi-diameters: source effective radii are retained except 20/21 -> 14.38 mm, 38 -> 10.87 mm,
 * 48/49 -> 13.95 mm for validated shared-gap/off-axis containment, and STO -> the inferred wide-state iris radius.
 * Glass strings are supplier-neutral spectral proxies resolved by the shared catalog,
 * not proof of Canon's actual supplier or melt. No catalog-derived line indices or dPgF values are authored.
 * Product correlation to CN7×17 KAS S/E1 is convergent but not manufacturer-confirmed.
 */

const LENS_DATA = {
  key: "canon-cine-servo-17-120-t295-39-ef",
  maker: "Canon",
  name: "CANON CINE-SERVO 17-120mm T2.95-3.9 (CN7×17 KAS S/E1)",
  subtitle: "JP 2015-94867 A, Example 1 — production correlation is inferential",
  specs: [
    "27 ELEMENTS / 22 GROUPS",
    "17-120mm PRODUCT / 17.0206-118.9429mm DESIGN",
    "F2.8-3.4 DESIGN / T2.95-3.9 PRODUCT",
    "29.6mm PRODUCT IMAGE CIRCLE",
    "2 ASPHERICAL SURFACES",
  ],
  focalLengthMarketing: [17, 120],
  focalLengthDesign: [17.02059017073925, 118.9429343445522],
  imageFormat: "super-35-1.9",
  lensMounts: ["canon-ef"],
  imageCircleMm: 29.6,
  patentNumber: "JP 2015-94867 A",
  patentAuthors: ["Tsuyoshi Wakazono", "Tomoyuki Nakamura", "Kazuya Shimomura", "Yu Inomoto"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2015,
  elementCount: 27,
  groupCount: 22,

  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Negative Meniscus (1× Asph)", nd: 1.7725, vd: 49.6, indexReference: "d", fl: -68.47639009771741, glass: "S-LAH66 (supplier-neutral spectral proxy)", role: "U11 fixed negative front subgroup of U1." },
    { id: 2, name: "L2", label: "Element 2", type: "Biconcave Negative", nd: 1.7725, vd: 49.6, indexReference: "d", fl: -79.47602537154916, glass: "S-LAH66 (supplier-neutral spectral proxy)", role: "U11 fixed negative front subgroup of U1." },
    { id: 3, name: "L3", label: "Element 3", type: "Biconvex Positive", nd: 1.95906, vd: 17.5, indexReference: "d", fl: 143.7476114561888, glass: "S-NPH3 (supplier-neutral spectral proxy)", role: "U11 fixed negative front subgroup of U1." },
    { id: 4, name: "L4", label: "Element 4", type: "Biconvex Positive (1× Asph)", nd: 1.60311, vd: 60.6, indexReference: "d", fl: 118.63028733223949, glass: "S-BSM14 (supplier-neutral spectral proxy)", role: "U12 positive internal-focus element; source publishes imageward motion for nearer focus, but close-focus travel is not reconstructed." },
    { id: 5, name: "L5", label: "Element 5", type: "Biconvex Positive", nd: 1.497, vd: 81.5, indexReference: "d", fl: 174.14816244536422, glass: "S-FPL51 (supplier-neutral spectral proxy)", apd: "inferred", apdNote: "Catalog S-FPL51 spectral proxy has dPgF ≈ +0.0308; material identity is inferred, not patent-confirmed.", role: "U13 fixed positive rear subgroup of U1.", cemented: "D1" },
    { id: 6, name: "L6", label: "Element 6", type: "Negative Meniscus", nd: 1.84666, vd: 23.8, indexReference: "d", fl: -454.86372731632025, glass: "S-TIH53 (supplier-neutral spectral proxy)", role: "U13 fixed positive rear subgroup of U1.", cemented: "D1" },
    { id: 7, name: "L7", label: "Element 7", type: "Negative Meniscus", nd: 1.84666, vd: 23.8, indexReference: "d", fl: -113.58366976114729, glass: "S-TIH53 (supplier-neutral spectral proxy)", role: "U13 fixed positive rear subgroup of U1.", cemented: "D2" },
    { id: 8, name: "L8", label: "Element 8", type: "Positive Meniscus", nd: 1.43875, vd: 94.9, indexReference: "d", fl: 142.43079359714778, glass: "S-FPL53 (supplier-neutral spectral proxy)", apd: "inferred", apdNote: "Catalog S-FPL53 spectral proxy has dPgF ≈ +0.0502; material identity is inferred, not patent-confirmed.", role: "U13 fixed positive rear subgroup of U1.", cemented: "D2" },
    { id: 9, name: "L9", label: "Element 9", type: "Biconvex Positive", nd: 1.43387, vd: 95.1, indexReference: "d", fl: 310.1997671553082, glass: "CaF2 (supplier-neutral spectral proxy)", apd: "inferred", apdNote: "Catalog CaF2 spectral proxy has dPgF ≈ +0.0548; material identity is inferred, not patent-confirmed.", role: "U13 fixed positive rear subgroup of U1." },
    { id: 10, name: "L10", label: "Element 10", type: "Biconvex Positive", nd: 1.7725, vd: 49.6, indexReference: "d", fl: 104.13503870991441, glass: "S-LAH66 (supplier-neutral spectral proxy)", role: "U13 fixed positive rear subgroup of U1." },
    { id: 11, name: "L11", label: "Element 11", type: "Negative Meniscus", nd: 2.001, vd: 29.1, indexReference: "d", fl: -42.087939064338556, glass: "S-LAH99 (supplier-neutral spectral proxy)", role: "U2 moving negative variator." },
    { id: 12, name: "L12", label: "Element 12", type: "Biconcave Negative", nd: 1.72916, vd: 54.7, indexReference: "d", fl: -47.453811717796675, glass: "S-LAL18 (supplier-neutral spectral proxy)", role: "U2 moving negative variator." },
    { id: 13, name: "L13", label: "Element 13", type: "Biconvex Positive", nd: 1.78472, vd: 25.7, indexReference: "d", fl: 31.07213250706223, glass: "S-TIH11 (supplier-neutral spectral proxy)", role: "U2 moving negative variator." },
    { id: 14, name: "L14", label: "Element 14", type: "Negative Meniscus", nd: 1.83481, vd: 42.7, indexReference: "d", fl: -50.609137020752556, glass: "S-LAH55V (supplier-neutral spectral proxy)", role: "U2 moving negative variator." },
    { id: 15, name: "L15", label: "Element 15", type: "Biconcave Negative", nd: 1.72916, vd: 54.7, indexReference: "d", fl: -52.34164327636203, glass: "S-LAL18 (supplier-neutral spectral proxy)", role: "U3 moving negative compensator.", cemented: "D3" },
    { id: 16, name: "L16", label: "Element 16", type: "Biconvex Positive", nd: 1.92286, vd: 18.9, indexReference: "d", fl: 155.14136007850377, glass: "S-NPH2 (supplier-neutral spectral proxy)", role: "U3 moving negative compensator.", cemented: "D3" },
    { id: 17, name: "L17", label: "Element 17", type: "Biconvex Positive", nd: 1.60311, vd: 60.6, indexReference: "d", fl: 72.97533094805355, glass: "S-BSM14 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 18, name: "L18", label: "Element 18", type: "Biconvex Positive", nd: 1.48749, vd: 70.2, indexReference: "d", fl: 58.25857099269403, glass: "S-FSL5 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit.", cemented: "D4" },
    { id: 19, name: "L19", label: "Element 19", type: "Negative Meniscus", nd: 2.00069, vd: 25.5, indexReference: "d", fl: -54.178839030405996, glass: "J-LASFH17 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit.", cemented: "D4" },
    { id: 20, name: "L20", label: "Element 20", type: "Positive Meniscus", nd: 1.58913, vd: 61.1, indexReference: "d", fl: 68.90838919637562, glass: "S-BAL35 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 21, name: "L21", label: "Element 21", type: "Biconcave Negative", nd: 1.883, vd: 40.8, indexReference: "d", fl: -29.897619447065267, glass: "S-LAH58 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit.", cemented: "D5" },
    { id: 22, name: "L22", label: "Element 22", type: "Biconvex Positive", nd: 1.92286, vd: 18.9, indexReference: "d", fl: 23.69399324175252, glass: "S-NPH2 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit.", cemented: "D5" },
    { id: 23, name: "L23", label: "Element 23", type: "Biconcave Negative", nd: 2.00069, vd: 25.5, indexReference: "d", fl: -17.790035450492717, glass: "J-LASFH17 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 24, name: "L24", label: "Element 24", type: "Biconvex Positive", nd: 1.48749, vd: 70.2, indexReference: "d", fl: 54.715927810584965, glass: "S-FSL5 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 25, name: "L25", label: "Element 25", type: "Biconvex Positive", nd: 1.48749, vd: 70.2, indexReference: "d", fl: 45.450472140229124, glass: "S-FSL5 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 26, name: "L26", label: "Element 26", type: "Positive Meniscus", nd: 1.48749, vd: 70.2, indexReference: "d", fl: 156.5691984918956, glass: "S-FSL5 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
    { id: 27, name: "L27", label: "Element 27", type: "Negative Meniscus", nd: 1.84666, vd: 23.8, indexReference: "d", fl: -95.79006883496987, glass: "S-TIH53 (supplier-neutral spectral proxy)", role: "Ur fixed positive relay/imaging unit." },
  ],

  surfaces: [
    { label: "1A", R: 230.634, d: 3.0, nd: 1.7725, elemId: 1, sd: 44.135 },
    { label: "2", R: 42.785, d: 29.54, nd: 1.0, elemId: 0, sd: 34.8 },
    { label: "3", R: -81.327, d: 2.4, nd: 1.7725, elemId: 2, sd: 33.945 },
    { label: "4", R: 253.731, d: 0.63, nd: 1.0, elemId: 0, sd: 35.075 },
    { label: "5", R: 152.98, d: 6.97, nd: 1.95906, elemId: 3, sd: 35.99 },
    { label: "6", R: -1363.977, d: 0.93, nd: 1.0, elemId: 0, sd: 36.225 },
    { label: "7", R: 171.683, d: 11.17, nd: 1.60311, elemId: 4, sd: 37.505 },
    { label: "8A", R: -119.665, d: 4.8, nd: 1.0, elemId: 0, sd: 37.62 },
    { label: "9", R: 289.766, d: 10.63, nd: 1.497, elemId: 5, sd: 37.15 },
    { label: "10", R: -121.912, d: 2.4, nd: 1.84666, elemId: 6, sd: 36.98 },
    { label: "11", R: -179.99, d: 0.15, nd: 1.0, elemId: 0, sd: 37.035 },
    { label: "12", R: 135.831, d: 2.2, nd: 1.84666, elemId: 7, sd: 35.655 },
    { label: "13", R: 55.886, d: 13.26, nd: 1.43875, elemId: 8, sd: 33.845 },
    { label: "14", R: 490.455, d: 0.15, nd: 1.0, elemId: 0, sd: 33.675 },
    { label: "15", R: 189.444, d: 6.24, nd: 1.43387, elemId: 9, sd: 33.625 },
    { label: "16", R: -460.145, d: 0.15, nd: 1.0, elemId: 0, sd: 33.66 },
    { label: "17", R: 196.655, d: 8.96, nd: 1.7725, elemId: 10, sd: 33.81 },
    { label: "18", R: -133.427, d: 0.8, nd: 1.0, elemId: 0, sd: 33.715 },
    { label: "19", R: 55.041, d: 1.0, nd: 2.001, elemId: 11, sd: 16.97 },
    { label: "20", R: 23.647, d: 6.99, nd: 1.0, elemId: 0, sd: 14.38 }, // modeled SD reduced from source effective radius for gap policy
    { label: "21", R: -74.271, d: 1.0, nd: 1.72916, elemId: 12, sd: 14.38 }, // modeled SD reduced from source effective radius for gap policy
    { label: "22", R: 65.15, d: 3.0, nd: 1.0, elemId: 0, sd: 14.545 },
    { label: "23", R: 42.793, d: 6.54, nd: 1.78472, elemId: 13, sd: 14.605 },
    { label: "24", R: -52.868, d: 0.69, nd: 1.0, elemId: 0, sd: 14.305 },
    { label: "25", R: -41.519, d: 1.0, nd: 1.83481, elemId: 14, sd: 14.21 },
    { label: "26", R: -2429.214, d: 51.59, nd: 1.0, elemId: 0, sd: 13.895 },
    { label: "27", R: -47.481, d: 1.0, nd: 1.72916, elemId: 15, sd: 13.525 },
    { label: "28", R: 196.255, d: 2.71, nd: 1.92286, elemId: 16, sd: 14.14 },
    { label: "29", R: -525.842, d: 14.87, nd: 1.0, elemId: 0, sd: 14.44 },
    { label: "STO", R: 1e15, d: 1.46, nd: 1.0, elemId: 0, sd: 16.80248487168973 }, // inferred wide-state physical iris radius from F/2.8 calibration
    { label: "31", R: 533.292, d: 5.59, nd: 1.60311, elemId: 17, sd: 17.675 },
    { label: "32", R: -47.782, d: 0.15, nd: 1.0, elemId: 0, sd: 17.945 },
    { label: "33", R: 70.982, d: 7.73, nd: 1.48749, elemId: 18, sd: 17.965 },
    { label: "34", R: -45.653, d: 1.0, nd: 2.00069, elemId: 19, sd: 17.815 },
    { label: "35", R: -292.209, d: 0.15, nd: 1.0, elemId: 0, sd: 18.015 },
    { label: "36", R: 34.078, d: 5.98, nd: 1.58913, elemId: 20, sd: 18.23 },
    { label: "37", R: 198.44, d: 25.02, nd: 1.0, elemId: 0, sd: 17.925 },
    { label: "38", R: -612.903, d: 1.0, nd: 1.883, elemId: 21, sd: 10.87 }, // modeled SD matched to D5 cemented clear aperture for containment
    { label: "39", R: 27.609, d: 4.32, nd: 1.92286, elemId: 22, sd: 10.87 },
    { label: "40", R: -97.23, d: 3.05, nd: 1.0, elemId: 0, sd: 10.665 },
    { label: "41", R: -39.345, d: 1.0, nd: 2.00069, elemId: 23, sd: 9.675 },
    { label: "42", R: 32.927, d: 1.64, nd: 1.0, elemId: 0, sd: 9.495 },
    { label: "43", R: 56.013, d: 3.83, nd: 1.48749, elemId: 24, sd: 10.025 },
    { label: "44", R: -49.782, d: 8.94, nd: 1.0, elemId: 0, sd: 10.54 },
    { label: "45", R: 46.857, d: 6.88, nd: 1.48749, elemId: 25, sd: 14.495 },
    { label: "46", R: -40.009, d: 0.15, nd: 1.0, elemId: 0, sd: 14.655 },
    { label: "47", R: 75.878, d: 3.17, nd: 1.48749, elemId: 26, sd: 14.4 },
    { label: "48", R: 12752.683, d: 2.19, nd: 1.0, elemId: 0, sd: 13.95 }, // modeled SD reduced from source effective radius for gap policy
    { label: "49", R: -50.658, d: 1.0, nd: 1.84666, elemId: 27, sd: 13.95 }, // modeled SD reduced from source effective radius for gap policy
    { label: "50", R: -136.174, d: 46.02, nd: 1.0, elemId: 0, sd: 14.315 },
  ],

  asph: {
    "1A": {
      K: 2.77301,
      A4: 3.05128e-07,
      A6: 1.87256e-10,
      A8: -1.41108e-13,
      A10: 4.60119e-17,
      A12: -6.36153e-21,
      A14: 0,
    },
    "8A": {
      K: -4.64841,
      A4: 3.34659e-07,
      A6: 7.99224e-11,
      A8: -5.42827e-14,
      A10: 1.99335e-17,
      A12: -5.6222e-21,
      A14: 0,
    },
  },

  var: {
    "18": [[0.8, 0.8], [41.3, 41.3], [58.6, 58.6]],
    "26": [[51.59, 51.59], [8.6, 8.6], [7.16, 7.16]],
    "29": [[14.87, 14.87], [17.35, 17.35], [1.49, 1.49]],
  },
  varLabels: [
    ["18", "D18 U1→U2"],
    ["26", "D26 U2→U3"],
    ["29", "D29 U3→STO"],
  ],

  zoomPositions: [17, 51, 119],
  zoomLabels: ["Wide 17mm", "Tele 119mm"],
  zoomApertureModel: "from-nominal-fno",

  groups: [
    { text: "U1", fromSurface: "1A", toSurface: "18" },
    { text: "U2", fromSurface: "19", toSurface: "26" },
    { text: "U3", fromSurface: "27", toSurface: "29" },
    { text: "Ur", fromSurface: "31", toSurface: "50" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "27", toSurface: "29" },
    { text: "D4", fromSurface: "33", toSurface: "35" },
    { text: "D5", fromSurface: "38", toSurface: "40" },
  ],

  closeFocusM: 0.85,
  focusDescription: "Patent inner focus uses positive U12 (surfaces 7-8), moving imageward for nearer focus. Example 1 publishes only infinity-focus zoom spacings; production 0.85 m MOD is metadata only, so no internal close-focus motion is reconstructed.",
  nominalFno: [2.8, 2.8, 3.4],
  fstopSeries: [2.8, 3.4, 4, 5.6, 8, 11, 16],
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
