import type { LensDataInput } from "../../types/optics.js";

/**
 * FUJIFILM FUJINON XC 16-50mm f/3.5-5.6 OIS II — patent-correlated model.
 *
 * Source prescription: US 2014/0368925 A1, Example 1 (FUJIFILM Corporation / Daiki Kawamura).
 * The production correlation is strong but not manufacturer-confirmed; design and marketed values remain separate.
 * Source PP surfaces 24–25 are traced through rearPlates, hidden from the diagram.
 * The source lists 11.95 mm air before 2.85 mm glass but no trailing image gap.
 * The retained inferred image plane sets gapAfterMm=2.421486317 mm; this is not a published dimension.
 * No uniform scaling is applied (s = 1.0); all radii, thicknesses, and asphere coefficients retain patent scale.
 *
 * Zoom: published infinity states at 16.49, 27.98, and 48.56 mm. DD(3), DD(9), and DD(21) are zoom-only.
 * G3 and G4 move integrally; G5 is fixed. No sampled group reverses across the three published states.
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent identifies L41 as the focusing element and L42 as fixed,
 * but publishes no finite-focus spacing state. The var pairs therefore repeat infinity values; closeFocusM is
 * retained only as the marketed minimum focus distance and does not authorize invented internal motion.
 *
 * Aperture: the patent publishes F No. but no physical stop diameter. STO.sd is calibrated at the wide state from
 * the modeled entrance pupil and F No. 3.60; nominalFno carries the three modeled/published design targets.
 * Agreement to those targets is calibration, not independent evidence of the manufactured diaphragm diameter.
 *
 * Semi-diameters are estimated from the exact patent section at 600 dpi, excluding
 * mechanical shoulders, leaders, rays, and motion arrows. Geometry limits cap the
 * steep rear front-group surface and focusing asphere where a literal figure fit fails.
 * See the sibling audit log for per-surface changes and source locations.
 *
 * Aspheres: patent KA = 1 on surfaces 6, 7, 11, 12, 16, and 17; LensVisualizer uses K = KA - 1 = 0.
 * Published A3–A20 coefficients are retained exactly. Table 32 OIS L34 decenter values remain source evidence
 * in the dossier; no application decenter control is invented in this centered prescription.
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-xc-16-50mm-f35-56-ois-ii",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XC 16-50mm f/3.5-5.6 OIS II",
  subtitle: "US 2014/0368925 A1 Example 1 — strong convergent, unconfirmed production correlation",
  specs: [
    "12 ELEMENTS / 10 GROUPS",
    "MARKETED 16–50mm f/3.5–5.6",
    "EXAMPLE 1 f=16.49–48.56mm, F No.=3.60–5.59",
    "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
    "1 ED-CLASS ELEMENT",
    "OIS",
  ],
  focalLengthMarketing: [16, 50],
  focalLengthDesign: [16.48935857391683, 48.57539936019834],
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2014/0368925 A1",
  patentAuthors: ["Daiki Kawamura"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2014,
  elementCount: 12,
  groupCount: 10,

  elements: [
    { id: 1, name: "L11", diagramLabel: "L11", label: "L11", type: "Negative Meniscus", nd: 1.92286, vd: 18.90, indexReference: "d", fl: -124.170608996, glass: "S-NPH2 class (OHARA coordinate match; supplier unconfirmed)", cemented: "D1" },
    { id: 2, name: "L12", diagramLabel: "L12", label: "L12", type: "Positive Meniscus", nd: 1.83481, vd: 42.73, indexReference: "d", fl: 51.7623621888, glass: "835427 lanthanum class (supplier unconfirmed)", cemented: "D1" },
    { id: 3, name: "L21", diagramLabel: "L21", label: "L21", type: "Negative Meniscus", nd: 1.88300, vd: 40.76, indexReference: "d", fl: -15.4767307185, glass: "S-LAH58 class (OHARA coordinate match; supplier unconfirmed)" },
    { id: 4, name: "L22", diagramLabel: "L22", label: "L22", type: "Biconcave Negative (2× Asph)", nd: 1.58254, vd: 59.47, indexReference: "d", fl: -31.3596946845, glass: "Q-SK52S (HIKARI) — near-coordinate spectral proxy; supplier unspecified" },
    { id: 5, name: "L23", diagramLabel: "L23", label: "L23", type: "Positive Meniscus", nd: 1.94595, vd: 17.98, indexReference: "d", fl: 33.1124101486, glass: "FDS18 class (HOYA coordinate match; supplier unconfirmed)" },
    { id: 6, name: "L31", diagramLabel: "L31", label: "L31", type: "Biconvex Positive (2× Asph)", nd: 1.80348, vd: 40.44, indexReference: "d", fl: 21.1082453561, glass: "Unmatched (nd 1.80348 / νd 40.44; nearest audited S-LAH63 differs)" },
    { id: 7, name: "L32", diagramLabel: "L32", label: "L32", type: "Plano-Concave Negative", nd: 1.80000, vd: 29.84, indexReference: "d", fl: -16.3925, glass: "S-NBH55 class (OHARA coordinate match; supplier unconfirmed)", cemented: "D2" },
    { id: 8, name: "L33", diagramLabel: "L33", label: "L33", type: "Biconvex Positive", nd: 1.49700, vd: 81.54, indexReference: "d", fl: 13.9900543714, glass: "497816 ED/low-dispersion crown class (S-FPL51 coordinate; supplier unconfirmed)", cemented: "D2", apd: "inferred", apdNote: "S-FPL51 catalog curve gives delta PgF about +0.0308 against the project normal line; inferred material class, not patent-listed APD or supplier identity." },
    { id: 9, name: "L34", diagramLabel: "L34", label: "L34", type: "Biconcave Negative (2× Asph)", nd: 1.58517, vd: 59.41, indexReference: "d", fl: -36.7053650174, glass: "L-BAL43 (OHARA) — near-coordinate spectral proxy; supplier unspecified" },
    { id: 10, name: "L41", diagramLabel: "L41", label: "L41", type: "Biconvex Positive", nd: 1.61800, vd: 63.33, indexReference: "d", fl: 28.3300659199, glass: "618634 crown/phosphate-crown class (supplier unconfirmed)" },
    { id: 11, name: "L42", diagramLabel: "L42", label: "L42", type: "Plano-Concave Negative", nd: 1.54072, vd: 47.23, indexReference: "d", fl: -33.5032919071, glass: "S-TIL2 class (OHARA coordinate match; supplier unconfirmed)" },
    { id: 12, name: "L5", diagramLabel: "L5", label: "L5", type: "Plano-Convex Positive", nd: 1.71299, vd: 53.87, indexReference: "d", fl: 91.212499474, glass: "S-LAL8 class (OHARA near-coordinate match; supplier unconfirmed)" },
  ],

  surfaces: [
    { label: "1", R: 51.2772, d: 1.37, nd: 1.92286, elemId: 1, sd: 20.2 },
    { label: "2", R: 34.971, d: 5.2, nd: 1.83481, elemId: 2, sd: 17.9 },
    { label: "3", R: 170.9704, d: 0.7, nd: 1.00000, elemId: 0, sd: 17.9 },
    { label: "4", R: 45.0553, d: 1, nd: 1.88300, elemId: 3, sd: 13.1 },
    { label: "5", R: 10.3764, d: 6.2, nd: 1.00000, elemId: 0, sd: 8.5 },
    { label: "6A", R: -74.2538, d: 1.05, nd: 1.58254, elemId: 4, sd: 9.5 },
    { label: "7A", R: 24.3554, d: 0.1, nd: 1.00000, elemId: 0, sd: 9.5 },
    { label: "8", R: 18.4578, d: 2.5, nd: 1.94595, elemId: 5, sd: 9.1 },
    { label: "9", R: 41.9811, d: 14.58, nd: 1.00000, elemId: 0, sd: 9.1 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1.00000, elemId: 0, sd: 4.75328318891027 },
    { label: "11A", R: 21.0609, d: 3.3, nd: 1.80348, elemId: 6, sd: 5.9 },
    { label: "12A", R: -81.0221, d: 1.56, nd: 1.00000, elemId: 0, sd: 6.15 },
    { label: "13", R: 1e15, d: 0.71, nd: 1.80000, elemId: 7, sd: 6.35 },
    { label: "14", R: 13.114, d: 4.5, nd: 1.49700, elemId: 8, sd: 6.5 },
    { label: "15", R: -13.114, d: 2.32, nd: 1.00000, elemId: 0, sd: 6.8 },
    { label: "16A", R: -49.8789, d: 1, nd: 1.58517, elemId: 9, sd: 6.65 },
    { label: "17A", R: 38.0025, d: 5.2, nd: 1.00000, elemId: 0, sd: 6.55 },
    { label: "18", R: 48.9365, d: 3.1, nd: 1.61800, elemId: 10, sd: 8.6 },
    { label: "19", R: -26.6016, d: 3.6, nd: 1.00000, elemId: 0, sd: 8.6 },
    { label: "20", R: -18.1159, d: 0.8, nd: 1.54072, elemId: 11, sd: 10 },
    { label: "21", R: 1e15, d: 2.2, nd: 1.00000, elemId: 0, sd: 10 },
    { label: "22", R: 1e15, d: 2.8, nd: 1.71299, elemId: 12, sd: 13.9 },
    { label: "23", R: -65.0336, d: 11.95, nd: 1.00000, elemId: 0, sd: 13.9 },
  ],

  rearPlates: [{ label: "PP", thicknessMm: 2.85, nd: 1.5168, vd: 64.2, glass: "N-BK7 — coordinate-compatible spectral proxy; supplier unspecified", gapAfterMm: 2.4214863169307677, source: "US 2014/0368925 A1, Example 1 Table 1, surfaces 24-25; trailing gap inferred from retained image plane" }],

  asph: {
    "6A": {
      K: 0,
      A3: 0.00040933323,
      A4: -0.00060888867,
      A5: 0.00014419977,
      A6: -1.4619676e-05,
      A7: 8.0416169e-08,
      A8: 6.1299999e-08,
      A9: 3.1292229e-09,
      A10: -1.7635605e-10,
      A11: -4.1002904e-11,
      A12: -3.4140583e-12,
      A13: -6.609404e-14,
      A14: 2.4538915e-14,
      A15: 3.2551846e-15,
      A16: 3.5301237e-16,
      A17: -2.5050314e-17,
      A18: 3.1545594e-19,
      A19: -1.0455552e-19,
      A20: -1.2392007e-20,
    },
    "7A": {
      K: 0,
      A3: -0.00012811739,
      A4: -0.00026404611,
      A5: 4.0381724e-05,
      A6: 5.5734993e-07,
      A7: -6.1603008e-07,
      A8: -1.5625782e-09,
      A9: 6.4187304e-09,
      A10: 5.3217493e-10,
      A11: -1.9789871e-11,
      A12: -9.6388463e-12,
      A13: -1.0319722e-12,
      A14: -1.3216914e-14,
      A15: 1.0643318e-14,
      A16: 1.7477013e-15,
      A17: 1.1109141e-16,
      A18: -1.3183865e-17,
      A19: -2.3211123e-18,
      A20: 1.1419089e-19,
    },
    "11A": {
      K: 0,
      A3: 8.4079418e-05,
      A4: -0.00015884117,
      A5: 5.0163675e-05,
      A6: -8.3478199e-06,
      A7: -2.0759316e-06,
      A8: 8.7628996e-07,
      A9: -1.038198e-07,
      A10: 3.9240483e-09,
      A11: -6.6439218e-10,
      A12: 5.2203771e-11,
      A13: 3.0635548e-11,
      A14: 1.2779807e-12,
      A15: -9.2825959e-13,
      A16: -1.4403526e-13,
      A17: -1.4596389e-14,
      A18: 4.0192223e-15,
      A19: 1.7353656e-15,
      A20: -2.0085297e-16,
    },
    "12A": {
      K: 0,
      A3: 4.9336044e-05,
      A4: 1.6565053e-05,
      A5: -4.7377075e-05,
      A6: 2.7376819e-05,
      A7: -6.0241034e-06,
      A8: 2.5511112e-07,
      A9: -7.2866935e-09,
      A10: 2.0274318e-08,
      A11: -1.7781414e-10,
      A12: -5.0079019e-10,
      A13: -7.4718603e-11,
      A14: 7.0374446e-12,
      A15: 5.8406459e-12,
      A16: -8.237423e-13,
      A17: -2.082741e-14,
      A18: 2.2352161e-15,
      A19: 1.2506994e-15,
      A20: -8.5927388e-17,
    },
    "16A": {
      K: 0,
      A3: -0.00022718447,
      A4: 0.00025114346,
      A5: -4.9965869e-05,
      A6: 1.9673561e-06,
      A7: 8.9571158e-07,
      A8: 8.1475858e-08,
      A9: -8.8732257e-09,
      A10: -4.0745601e-09,
      A11: -6.4029472e-10,
      A12: -3.1160921e-11,
      A13: 1.2425429e-11,
      A14: 4.5091154e-12,
      A15: 7.7613196e-13,
      A16: 5.122776e-14,
      A17: -1.5128955e-14,
      A18: -6.5219152e-15,
      A19: -9.740058e-16,
      A20: 2.4600407e-16,
    },
    "17A": {
      K: 0,
      A3: 6.8549524e-05,
      A4: 8.8501534e-05,
      A5: -6.2564615e-06,
      A6: 5.6102257e-07,
      A7: -1.6412544e-07,
      A8: 7.836793e-09,
      A9: 8.2051813e-09,
      A10: 1.6270042e-09,
      A11: 1.0734148e-10,
      A12: -3.2465246e-11,
      A13: -1.3240197e-11,
      A14: -2.7277581e-12,
      A15: -2.9460504e-13,
      A16: 1.8727986e-14,
      A17: 1.9093148e-14,
      A18: 4.9610731e-15,
      A19: 4.8546866e-16,
      A20: -2.1226761e-16,
    },
  },

  var: {
    "3": [[0.7, 0.7], [8.67, 8.67], [22.21, 22.21]],
    "9": [[14.58, 14.58], [7.72, 7.72], [3.4, 3.4]],
    "21": [[2.2, 2.2], [13.24, 13.24], [25.01, 25.01]],
  },
  varLabels: [
    ["3", "DD(3)"],
    ["9", "DD(9)"],
    ["21", "DD(21)"],
  ],

  zoomPositions: [16.49, 27.98, 48.56],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "9" },
    { text: "G3", fromSurface: "11A", toSurface: "17A" },
    { text: "G4", fromSurface: "18", toSurface: "21" },
    { text: "G5", fromSurface: "22", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.15,
  focusDescription: "NO_INTERNAL_RECONSTRUCTION — patent infinity states only; L41 focuses axially while L42/G5 remain fixed, but no finite-focus spacing law is authored.",

  nominalFno: [3.6, 4.54, 5.59],
  fstopSeries: [3.6, 4, 4.5, 5.6, 8, 11, 16],

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
