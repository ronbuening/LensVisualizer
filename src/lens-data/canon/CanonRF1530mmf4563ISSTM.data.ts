import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — CANON RF 15-30mm f/4.5-6.3 IS STM                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: EP 4 174 551 A1, Second Numerical Embodiment (Example 2).    ║
 * ║  Strong production correlation to Canon RF15-30mm F4.5-6.3 IS STM is an    ║
 * ║  inference, not a Canon statement that the embodiment is the production     ║
 * ║  prescription. Native patent scale is retained; no uniform scaling applied. ║
 * ║                                                                              ║
 * ║  13 elements / 11 air-separated groups / 2 aspherical surfaces.             ║
 * ║  Lens units: L1 negative, L2 positive, L3 negative focus singlet,            ║
 * ║  L4 positive, L5 positive. Exactly one aperture stop is retained.            ║
 * ║                                                                              ║
 * ║  Zoom variable gaps: D8 and D23 (zoom only).                                ║
 * ║  Focus variable gaps: D19 and D21 (zoom + focus).                           ║
 * ║  No zoom unit reverses direction across the three published zoom states.     ║
 * ║                                                                              ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. Patent ¶0047 identifies L3       ║
 * ║  (surfaces 20-21) as the focusing unit but publishes no finite-focus rows.   ║
 * ║  Close-focus D19/D21 values are code-solved for Canon's 0.280 m AF MFD       ║
 * ║  while conserving D19 + D21 = 11.86 mm at each zoom position. The special   ║
 * ║  0.128 m / 0.52× 15 mm manual-focus state is intentionally not generalized. ║
 * ║                                                                              ║
 * ║  Semi-diameters: patent effective diameters / 2 except STO and surface 5.    ║
 * ║  Patent STO ED 10.25 mm is a clear envelope, not the wide-open iris. STO sd  ║
 * ║  is 5.089324315 mm, derived from the modeled f/4.60 pupil geometry.          ║
 * ║  Surface 5 raw patent sd is 12.290 mm; stored 12.289 mm is an explicit       ║
 * ║  source-precision adjustment (1 µm) so the S4→S5 shared-band cross-gap       ║
 * ║  intrusion remains below the current gapSagFrac = 0.90 policy.               ║
 * ║                                                                              ║
 * ║  The patent does not publish per-element nC/nF/ng/dPgF. Vendor identity is   ║
 * ║  underdetermined for the patent nd/νd coordinates, so the data file keeps    ║
 * ║  class/code labels rather than inventing spectral line data or Sellmeier     ║
 * ║  identities. The doubly-aspheric E12 remains Unmatched PMo-resin class.      ║
 * ║                                                                              ║
 * ║  No sensor cover glass, filter, inactive dummy/flare-cutter plane, folded    ║
 * ║  path, or image-stabilizer decenter is present in the selected prescription. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-15-30mm-f4-5-6-3-is-stm",
  maker: "Canon",
  name: "CANON RF 15-30mm f/4.5-6.3 IS STM",
  subtitle: "EP 4 174 551 A1 — Second Numerical Embodiment; production correlation inferred",
  specs: [
    "13 ELEMENTS / 11 GROUPS",
    "15-30mm MARKETING / 15.45-29.15mm PATENT",
    "f/4.5-6.3 MARKETING / f/4.60-6.36 MODEL",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [15, 30],
  focalLengthDesign: [15.448247009546106, 29.139228253831426],
  apertureMarketing: 4.5,
  apertureDesign: 4.6,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "EP 4 174 551 A1",
  patentAuthors: ["Hiroki Ebe", "Shunji Iwamoto"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2023,
  elementCount: 13,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -39.383139973231984,
      glass: "001291 — high-index lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "First negative element of L1; high-index front-group bending for the wide-angle unit.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.4,
      fl: -33.21923102003975,
      glass: "900374 — high-index lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Second negative element of L1; adjacent negative lens B in the patent's ghost-control conditions.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      fl: -41.23081291222841,
      glass: "497815 — very-low-dispersion fluorophosphate-crown / UD-like class (vendor unresolved)",
      apd: false,
      role: "Third negative element of L1; one of two 1.49700/81.5 UD-like elements in the selected prescription.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      fl: 33.5291172855741,
      glass: "806333 — dense high-index flint class (vendor unresolved)",
      apd: false,
      role: "Positive rear element of L1; balances the three preceding negative elements.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6393,
      vd: 44.9,
      fl: 67.565765186738,
      glass: "639449 — barium-flint class (vendor unresolved)",
      apd: false,
      role: "Front positive singlet of L2, immediately ahead of the aperture-stop region.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.5,
      fl: -34.62710106228003,
      glass: "804465 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      cemented: "D1",
      role: "Negative member of the first cemented pair in L2.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 25.627994073423892,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the first cemented pair in L2; D1 net power is positive.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 41.11098455450291,
      glass: "487702 — low-index crown class (vendor unresolved)",
      apd: false,
      role: "Positive singlet in the central L2 relay.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.4,
      fl: -15.922545914281494,
      glass: "900374 — high-index lanthanum-flint class (vendor unresolved)",
      apd: false,
      cemented: "D2",
      role: "Negative member of the second cemented pair in L2.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 17.06424022513546,
      glass: "497815 — very-low-dispersion fluorophosphate-crown / UD-like class (vendor unresolved)",
      apd: false,
      cemented: "D2",
      role: "Positive UD-like member of the second cemented pair; D2 has weak net negative power.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35,
      fl: -32.49554579342068,
      glass: "801350 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Single negative L3 focusing element translated for the constrained close-focus reconstruction.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: 185.11915939007292,
      glass: "Unmatched (PMo optical-resin class; production-correlation inference)",
      apd: false,
      role: "Weak positive L4 element with both surfaces aspheric; PMo attribution is a production-correlation inference.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.5,
      fl: 72.63443548521461,
      glass: "804465 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Final positive L5 element; fixed relative to the image plane in the published zoom states.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.485, d: 1.8, nd: 2.001, elemId: 1, sd: 17.99 },
    { label: "2", R: 19.277, d: 6.35, nd: 1, elemId: 0, sd: 14.53 },
    { label: "3", R: 81.393, d: 1.4, nd: 1.90043, elemId: 2, sd: 13.945 },
    { label: "4", R: 21.695, d: 6.53, nd: 1, elemId: 0, sd: 12.375 },
    // Patent effective diameter is 24.58 mm (sd 12.290 mm). The 1 µm reduction is an explicit
    // source-precision adjustment for the current 0.90 cross-gap policy; the source value is preserved in the audit.
    { label: "5", R: -37.674, d: 1.3, nd: 1.497, elemId: 3, sd: 12.289 },
    { label: "6", R: 45.445, d: 1.55, nd: 1, elemId: 0, sd: 12.4 },
    { label: "7", R: 48.066, d: 6.33, nd: 1.8061, elemId: 4, sd: 12.68 },
    { label: "8", R: -58.121, d: 24.84, nd: 1, elemId: 0, sd: 12.595 },
    { label: "9", R: 75.709, d: 2.91, nd: 1.6393, elemId: 5, sd: 6.31 },
    { label: "10", R: -99.071, d: 5, nd: 1, elemId: 0, sd: 5.875 },
    // Patent surface-11 effective diameter is 10.25 mm and is treated as a clear envelope.
    // Wide-open physical iris diameter from the modeled f/4.60 pupil geometry is 10.178648629 mm.
    { label: "STO", R: 1e15, d: 3, nd: 1, elemId: 0, sd: 5.089324314726233 },
    { label: "12", R: 90.807, d: 1, nd: 1.804, elemId: 6, sd: 5.1 },
    { label: "13", R: 21.203, d: 2.41, nd: 1.713, elemId: 7, sd: 5.055 },
    { label: "14", R: -125.965, d: 2, nd: 1, elemId: 0, sd: 5.025 },
    { label: "15", R: 14.434, d: 3.39, nd: 1.48749, elemId: 8, sd: 5.23 },
    { label: "16", R: 47.619, d: 3.38, nd: 1, elemId: 0, sd: 5.35 },
    { label: "17", R: 40.616, d: 1, nd: 1.90043, elemId: 9, sd: 5.77 },
    { label: "18", R: 10.473, d: 5.52, nd: 1.497, elemId: 10, sd: 5.76 },
    { label: "19", R: -36.785, d: 2.86, nd: 1, elemId: 0, sd: 6.36 },
    { label: "20", R: -24.105, d: 1.1, nd: 1.801, elemId: 11, sd: 7.395 },
    { label: "21", R: -332.736, d: 9, nd: 1, elemId: 0, sd: 7.97 },
    { label: "22A", R: -50, d: 3, nd: 1.5311, elemId: 12, sd: 10.605 },
    { label: "23A", R: -33.834, d: 1.2, nd: 1, elemId: 0, sd: 11.635 },
    { label: "24", R: -186.603, d: 4.91, nd: 1.804, elemId: 13, sd: 18.73 },
    { label: "25", R: -45, d: 13.5, nd: 1, elemId: 0, sd: 19.205 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "22A": {
      K: 0,
      A4: -3.17244e-5,
      A6: 2.39294e-7,
      A8: -2.65521e-9,
      A10: 1.39956e-11,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 7.7828e-6,
      A6: 1.77889e-7,
      A8: -9.23774e-10,
      A10: 4.78158e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    "8": [
      [24.84, 24.84],
      [12.64, 12.64],
      [1.2, 1.2],
    ],
    "19": [
      [2.86, 3.624009364502819],
      [4.14, 5.261253083711491],
      [6.51, 8.37506622301785],
    ],
    "21": [
      [9, 8.235990635497181],
      [7.72, 6.598746916288508],
      [5.35, 3.4849337769821487],
    ],
    "23A": [
      [1.2, 1.2],
      [7.19, 7.19],
      [16.16, 16.16],
    ],
  },
  varLabels: [
    ["8", "D8 (ZOOM)"],
    ["19", "D19 (FOCUS)"],
    ["21", "D21 (FOCUS)"],
    ["23A", "D23 (ZOOM)"],
  ],

  zoomPositions: [15.45, 20.53, 29.15],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "19" },
    { text: "L3", fromSurface: "20", toSurface: "21" },
    { text: "L4", fromSurface: "22A", toSurface: "23A" },
    { text: "L5", fromSurface: "24", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent ¶0047 identifies L3 (surfaces 20-21) as the focusing unit but publishes no finite-focus spacing table. Close-focus D19/D21 values are code-solved for Canon's 0.280 m AF MFD by translating L3 toward the image and conserving D19+D21=11.86 mm at every zoom state. The 0.128 m / 0.52× 15 mm manual-focus special state is not modeled across the zoom range.",

  /* ── Aperture configuration ── */
  nominalFno: [4.6, 5.27, 6.36],
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
