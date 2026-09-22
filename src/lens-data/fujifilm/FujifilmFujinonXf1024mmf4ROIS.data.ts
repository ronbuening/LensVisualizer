import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 10-24mm f/4 R OIS                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0131163 A1, Example 1 (Taiga Noda / FUJIFILM Corporation). ║
 * ║ Five functional zoom groups with power signs − / + / − / + / +.           ║
 * ║ 14 physical glass elements / 10 air-separated optical components.          ║
 * ║ Eight aspherical surfaces on four physical elements.                        ║
 * ║                                                                              ║
 * ║ ZOOM: published infinity states at 10.33, 15.20, and 23.36 mm.              ║
 * ║ Variable gaps are D8, D14, D17, and D23. G1 reverses direction between      ║
 * ║ the intermediate and telephoto states. G5 is fixed to the image plane.       ║
 * ║                                                                              ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. Patent ¶0066 permits L41-only focusing,  ║
 * ║ but Example 1 gives no finite-focus spacing table or travel. Production      ║
 * ║ 0.24 m MFD is retained only as product metadata; the authored var vectors    ║
 * ║ therefore repeat infinity spacing at both focus endpoints.                   ║
 * ║                                                                              ║
 * ║ REAR PLATE: source PP surfaces 26–27 are omitted. Surface 25A-to-image d is ║
 * ║ the d-line air-equivalent 5 + 2.85/1.516798 + 7.6391 = 14.5180581737 mm.    ║
 * ║                                                                              ║
 * ║ STOP: Table 2 gives FNo=4.12 at all three zoom states, but Fig. 7 labels   ║
 * ║ the Example-1 telephoto aberration panel FNo=4.55. The model follows the     ║
 * ║ explicit Table-2 state table; the source discrepancy is retained in audit.  ║
 * ║ No diaphragm diameter is published. STO.sd is the wide-state paraxial       ║
 * ║ calibration (4.0483914768 mm); agreement is calibration, not measurement.   ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: modeled, not patent-published. They were solved from exact   ║
 * ║ meridional ray envelopes using the published aspheres, all three zoom states,║
 * ║ representative interpolated zoom states, the full wide-open pupil at 0 and  ║
 * ║ 0.6× published half-field, plus a full-field edge-image ray. Edge thickness, ║
 * ║ actual rim slope, conic domain, shared-band gap intrusion, and sampled       ║
 * ║ off-axis containment are checked by the Stage-2 dossier verifier.            ║
 * ║ Figure review: Fig. 1 at 600 dpi enlarges G1 toward the optical rims;       ║
 * ║ S2/S3A are capped at 13.7 mm and S4A at 11.2 mm for air-gap clearance.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-xf-10-24mm-f4-r-ois",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 10-24mm f/4 R OIS",
  subtitle: "US 2015/0131163 A1 Example 1 — high-confidence production correlation",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "10.33–23.36 mm DESIGN RANGE",
    "f/4.12 DESIGN APERTURE",
    "112.0°–61.6° PUBLISHED FULL FIELD",
    "8 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [10, 24],
  focalLengthDesign: [10.3258082792, 23.3599771477],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2015/0131163 A1",
  patentAuthors: ["Taiga Noda"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.754999,
      vd: 52.32,
      indexReference: "d",
      fl: -35.720568,
      glass: "755523 — S-YGH51 / S-LAH97 coordinate class (OHARA candidate)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.74025,
      vd: 49.12,
      indexReference: "d",
      fl: -24.998149,
      glass: "Unmatched (740491 coordinate)",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.592824,
      vd: 68.63,
      indexReference: "d",
      fl: -35.351974,
      glass: "593686 — FCD505 coordinate class (HOYA candidate)",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.882997,
      vd: 40.76,
      indexReference: "d",
      fl: 25.310814,
      glass: "883408 — S-LAH58 coordinate class (OHARA candidate)",
    },
    {
      id: 5,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.581029,
      vd: 59.23,
      indexReference: "d",
      fl: 38.198302,
      glass: "Unmatched (581592 coordinate)",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.62,
      indexReference: "d",
      fl: -20.981622,
      glass: "816466 — S-LAH59 coordinate class (OHARA candidate)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.733997,
      vd: 51.47,
      indexReference: "d",
      fl: 16.668673,
      glass: "734515 — S-LAL59 coordinate class (OHARA candidate)",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      indexReference: "d",
      fl: -17.397589,
      glass: "773496 — S-LAH66 coordinate class (OHARA candidate)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.54,
      indexReference: "d",
      fl: 32.287132,
      glass: "497816 — S-FPL51 coordinate class (OHARA candidate)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L41",
      diagramLabel: "L41",
      label: "Element L41",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497103,
      vd: 81.56,
      indexReference: "d",
      fl: 18.965494,
      glass: "497816 — M-FCD1 coordinate class (HOYA candidate)",
    },
    {
      id: 11,
      name: "L42",
      diagramLabel: "L42",
      label: "Element L42",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      fl: -13.947335,
      glass: "804466 coordinate class (S-LAH65V / H-ZLaF50D candidates)",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L43",
      diagramLabel: "L43",
      label: "Element L43",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.54,
      indexReference: "d",
      fl: 19.440764,
      glass: "497816 — S-FPL51 coordinate class (OHARA candidate)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L44",
      diagramLabel: "L44",
      label: "Element L44",
      type: "Biconcave Negative",
      nd: 1.696797,
      vd: 55.53,
      indexReference: "d",
      fl: -44.739409,
      glass: "697555 — S-LAL14 coordinate class (OHARA candidate)",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L51",
      diagramLabel: "L51",
      label: "Element L51",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.18,
      indexReference: "d",
      fl: 62.677776,
      glass: "694532 — L-LAL13 coordinate class (OHARA candidate)",
    },
  ],

  surfaces: [
    { label: "1", R: 48.9076, d: 1.7, nd: 1.754999, elemId: 1, sd: 20.5 },
    { label: "2", R: 17.1234, d: 4, nd: 1, elemId: 0, sd: 13.7 },
    { label: "3A", R: 35.6783, d: 1.5, nd: 1.74025, elemId: 2, sd: 13.7 },
    { label: "4A", R: 11.9671, d: 8.68, nd: 1, elemId: 0, sd: 11.2 },
    { label: "5", R: -39.7818, d: 1.3, nd: 1.592824, elemId: 3, sd: 12.8 },
    { label: "6", R: 44.8286, d: 0.1, nd: 1, elemId: 0, sd: 12.8 },
    { label: "7", R: 32.2764, d: 4.67, nd: 1.882997, elemId: 4, sd: 12.8 },
    { label: "8", R: -67.7357, d: 25.91, nd: 1, elemId: 0, sd: 12.8 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1, elemId: 0, sd: 4.0483914768 },
    { label: "10A", R: 22.3243, d: 3, nd: 1.581029, elemId: 5, sd: 6.9 },
    { label: "11A", R: -3623.6878, d: 1.3, nd: 1, elemId: 0, sd: 7.1 },
    { label: "12", R: 577.6778, d: 0.71, nd: 1.816, elemId: 6, sd: 7.2 },
    { label: "13", R: 16.619, d: 3.8, nd: 1.733997, elemId: 7, sd: 7.3 },
    { label: "14", R: -41.8885, d: 3.75, nd: 1, elemId: 0, sd: 7.4 },
    { label: "15", R: -27.941, d: 0.71, nd: 1.772499, elemId: 8, sd: 7.3 },
    { label: "16", R: 26.182, d: 3.06, nd: 1.496999, elemId: 9, sd: 7.6 },
    { label: "17", R: -39.844, d: 1.97, nd: 1, elemId: 0, sd: 7.8 },
    { label: "18A", R: 18.4297, d: 5, nd: 1.497103, elemId: 10, sd: 9.3 },
    { label: "19A", R: -17.5629, d: 1.3, nd: 1, elemId: 0, sd: 9.3 },
    { label: "20", R: 220.7677, d: 0.91, nd: 1.804, elemId: 11, sd: 8.9 },
    { label: "21", R: 10.652, d: 6.3, nd: 1.496999, elemId: 12, sd: 8.6 },
    { label: "22", R: -83.55, d: 1, nd: 1.696797, elemId: 13, sd: 8.9 },
    { label: "23", R: 49.9738, d: 2, nd: 1, elemId: 0, sd: 9.3 },
    { label: "24A", R: 416.7292, d: 4, nd: 1.6935, elemId: 14, sd: 13.9 },
    { label: "25A", R: -48.3381, d: 14.5180581737, nd: 1, elemId: 0, sd: 14.1 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 2.584318e-4,
      A6: -3.5980953e-6,
      A8: 2.2978051e-8,
      A10: -4.0438312e-11,
      A12: -9.9545849e-14,
      A14: 0,
      A5: -7.8805637e-6,
      A7: 1.6095961e-7,
      A9: -1.5416422e-9,
      A11: 5.0566122e-12,
    },
    "4A": {
      K: -4.298432,
      A4: 5.5484444e-4,
      A6: -4.0404631e-6,
      A8: 4.3385992e-8,
      A10: -2.8487869e-10,
      A12: 5.65287e-13,
      A14: 0,
      A3: -4.4558881e-6,
      A5: -1.2840395e-5,
      A7: -2.0257653e-7,
      A9: 2.035652e-9,
      A11: -3.3536803e-12,
    },
    "10A": {
      K: 0,
      A4: 1.9450862e-6,
      A6: 9.2762597e-6,
      A8: -1.3268194e-7,
      A10: -6.2858817e-10,
      A12: 1.4450909e-11,
      A14: 0,
      A5: -2.6510883e-5,
      A7: -1.0108176e-6,
      A9: 3.3304332e-8,
      A11: -2.6696016e-10,
    },
    "11A": {
      K: 0,
      A4: 4.3055171e-5,
      A6: 1.5741695e-5,
      A8: -3.3239681e-7,
      A10: -5.4620266e-10,
      A12: 4.1858983e-11,
      A14: 0,
      A5: -4.7563942e-5,
      A7: -1.3970041e-6,
      A9: 6.9972366e-8,
      A11: -7.1336476e-10,
    },
    "18A": {
      K: 0,
      A4: 1.3578295e-5,
      A6: 5.1811411e-7,
      A8: -3.7667873e-8,
      A10: 5.4785448e-10,
      A12: -2.38651e-12,
      A14: 0,
      A5: -9.1406993e-6,
      A7: 3.2116393e-7,
      A9: -3.113606e-9,
      A11: 8.4337876e-12,
    },
    "19A": {
      K: 0,
      A4: 8.328714e-5,
      A6: -3.5236718e-6,
      A8: -1.2202069e-9,
      A10: 6.926661e-10,
      A12: -4.4223065e-12,
      A14: 0,
      A5: 9.4589632e-6,
      A7: 5.8093125e-7,
      A9: -9.8162042e-9,
      A11: 4.324088e-11,
    },
    "24A": {
      K: 0,
      A4: -1.4524716e-4,
      A6: -3.4384459e-6,
      A8: 1.820492e-8,
      A10: -4.3555141e-11,
      A12: 5.6568011e-14,
      A14: 0,
      A5: 4.0453268e-5,
      A7: -1.8524677e-8,
      A9: -3.5828397e-10,
      A11: 4.8895266e-13,
    },
    "25A": {
      K: 0,
      A4: -1.0149458e-4,
      A6: 1.5504919e-6,
      A8: 2.4336798e-8,
      A10: -1.3035736e-10,
      A12: 1.4069497e-13,
      A14: 0,
      A5: 1.7019957e-5,
      A7: -4.6722636e-7,
      A9: 1.3179759e-9,
      A11: -1.321871e-13,
    },
  },

  var: {
    "8": [
      [25.91, 25.91],
      [12.14, 12.14],
      [1.97, 1.97],
    ],
    "14": [
      [3.75, 3.75],
      [4.44, 4.44],
      [5.5, 5.5],
    ],
    "17": [
      [1.97, 1.97],
      [2.14, 2.14],
      [1.9, 1.9],
    ],
    "23": [
      [2, 2],
      [9.28, 9.28],
      [21.46, 21.46],
    ],
  },
  varLabels: [
    ["8", "DD8"],
    ["14", "DD14"],
    ["17", "DD17"],
    ["23", "DD23"],
  ],

  zoomPositions: [10.33, 15.2, 23.36],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "14" },
    { text: "G3 (−)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18A", toSurface: "23" },
    { text: "G5 (+)", fromSurface: "24A", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "23" },
  ],

  closeFocusM: 0.24,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes infinity-only zoom states. Patent ¶0066 permits L41-only focusing, but no finite-focus L41 travel is given; 0.24 m is production MFD metadata only.",

  nominalFno: 4.12,
  fstopSeries: [4.12, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
