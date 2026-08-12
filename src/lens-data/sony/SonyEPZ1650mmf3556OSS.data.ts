import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — SONY E PZ 16-50mm f/3.5-5.6 OSS                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2015/0316753 A9, Example 1 (Masaharu Hosoi / Sony).      ║
 * ║ Four moving power groups (N-P-N-P), 9 elements / 8 air-separated groups, ║
 * ║ with 6 aspherical surfaces on 4 physical elements.                        ║
 * ║                                                                            ║
 * ║ Production correlation is strong but inferred: the patent does not name   ║
 * ║ SELP1650. Marketing metadata comes from Sony; prescription values come     ║
 * ║ from the patent and independent calculation. No dimensional scaling is     ║
 * ║ applied (s = 1.0).                                                         ║
 * ║                                                                            ║
 * ║ Zoom positions are the patent infinity-focus states at 16.48, 28.20, and  ║
 * ║ 48.50 mm. Zoom-only variable gaps are D4, D14, D16, and D18. GR1 reverses ║
 * ║ direction between the intermediate and tele states. The stop moves with    ║
 * ║ GR2.                                                                       ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent identifies GR3 as the ║
 * ║ axial focus group but publishes no Example 1 close-focus spacing table.    ║
 * ║ All var pairs therefore retain the published infinity state at both ends;  ║
 * ║ Sony's 0.25-0.30 m MFD remains product metadata only.                      ║
 * ║                                                                            ║
 * ║ The unshown, unparameterized cover glass stated between GR4 and IMG is      ║
 * ║ excluded. D18 retains the patent's source vertex-to-IMG separation and is    ║
 * ║ modeled as air; no air-equivalent plate correction can be computed because  ║
 * ║ the patent publishes neither cover-glass thickness nor refractive index.     ║
 * ║                                                                            ║
 * ║ Semi-diameters are inferred, not patent-listed. Non-stop SDs begin with the ║
 * ║ maximum paraxial marginal-plus-chief-ray envelope over all three zoom       ║
 * ║ states, using the project-default 0.60 field fraction and conservative      ║
 * ║ clearance. Figure 1 then refines the L1 envelope to 12.2/11.8 mm; surface   ║
 * ║ 2A stops short of the drawn rim at the largest validator-safe slope. The    ║
 * ║ base STO SD is the wide-state radius derived from patent f/Fno and entrance ║
 * ║ pupil magnification. The final set passes image-circle, edge-thickness, rim- ║
 * ║ slope, conic-domain, cross-gap-intrusion, and off-axis-containment checks.   ║
 * ║                                                                            ║
 * ║ Glass names are catalog-coordinate identifications, not supplier claims.    ║
 * ║ nC/nF/ng/dPgF values are catalog-derived from HOYA's 2026-06-01 optical     ║
 * ║ glass data where the coordinate match is spectrally unambiguous. L9's       ║
 * ║ 806-407 coordinate resolves to the coefficient-backed NBFD13 family; the    ║
 * ║ NBFD13/M-NBFD130 suffix remains a physical-form distinction, not a supplier ║
 * ║ claim.                                                                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-epz1650mmf3556oss",
  maker: "Sony",
  name: "SONY E PZ 16-50mm f/3.5-5.6 OSS",
  subtitle: "US 2015/0316753 A9 — Example 1; production correlation inferred",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "16-50mm f/3.5-5.6 (MARKETED)",
    "16.48-48.50mm f/3.61-5.77 (PATENT)",
    "4 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
    "OPTICAL STEADYSHOT",
  ],

  focalLengthMarketing: [16, 50],
  focalLengthDesign: [16.480902, 48.506052],
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "US 2015/0316753 A9",
  patentAuthors: ["Masaharu Hosoi"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2015,
  elementCount: 9,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      fl: -14.7281,
      glass: "TAFD30 (HOYA; patent νd=40.80, pre-2019 catalog rounding)",
      nC: 1.87657,
      nF: 1.89821,
      ng: 1.91045,
      dPgF: -0.0093,
      role: "GR1 first negative meniscus; rear surface is aspherical.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.32,
      indexReference: "d",
      fl: 47.5267,
      glass: "E-FDS2 (HOYA)",
      nC: 1.98812,
      nF: 2.04003,
      ng: 2.07352,
      dPgF: 0.0316,
      role: "GR1 second positive meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      fl: 19.9718,
      glass: "M-LAC130 (HOYA)",
      nC: 1.68954,
      nF: 1.70258,
      ng: 1.70971,
      dPgF: -0.0059,
      role: "Object-side positive element of GR2 front subgroup G2f; both surfaces are aspherical.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      fl: 16.9652,
      glass: "FCD1 (HOYA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.0374,
      cemented: "D1",
      role: "Positive component of the cemented L4/L5 pair in GR2 front subgroup G2f.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.34,
      indexReference: "d",
      fl: -8.2421,
      glass: "NBFD10 (HOYA)",
      nC: 1.82742,
      nF: 1.84975,
      ng: 1.86268,
      dPgF: -0.0021,
      cemented: "D1",
      role: "Negative component of the cemented L4/L5 pair in GR2 front subgroup G2f.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 22.3245,
      glass: "FC5 (HOYA)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
      dPgF: 0.009,
      role: "Image-side positive element of GR2 front subgroup G2f.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 46.8674,
      glass: "FC5 (HOYA)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
      dPgF: 0.009,
      role: "GR2 rear subgroup G2r; the patent moves this element laterally for shake correction.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6968,
      vd: 55.46,
      indexReference: "d",
      fl: -19.3463,
      glass: "697-555 — HOYA LAC14/M-LAC14 coordinate family",
      nC: 1.69297,
      nF: 1.70553,
      ng: 1.71235,
      dPgF: -0.006,
      role: "GR3 negative focus-group element; the rear surface is aspherical, but close-focus travel is unpublished.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      indexReference: "d",
      fl: 45.7715,
      glass: "806407 — NBFD13 / M-NBFD130 coordinate family (supplier unresolved)",
      nC: 1.80022,
      nF: 1.82001,
      ng: 1.83123,
      dPgF: -0.0059,
      role: "GR4 positive biconvex element; both surfaces are aspherical.",
    },
  ],

  surfaces: [
    { label: "1", R: 172.566, d: 1.08, nd: 1.883, elemId: 1, sd: 12.2 },
    { label: "2A", R: 12.058, d: 4, nd: 1, elemId: 0, sd: 11.8 },
    { label: "3", R: 19.766, d: 2.018, nd: 2.00272, elemId: 2, sd: 9.9 },
    { label: "4", R: 32.048, d: 23.043, nd: 1, elemId: 0, sd: 9.5 },
    { label: "5A", R: 13.01, d: 2.283, nd: 1.6935, elemId: 3, sd: 6.5 },
    { label: "6A", R: 199, d: 1.5, nd: 1, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 0.5, nd: 1, elemId: 0, sd: 4.7043 },
    { label: "8", R: 11.062, d: 3.353, nd: 1.497, elemId: 4, sd: 5.8 },
    { label: "9", R: -31.892, d: 0.7, nd: 1.834, elemId: 5, sd: 5.3 },
    { label: "10", R: 8.85, d: 1.526, nd: 1, elemId: 0, sd: 5.3 },
    { label: "11", R: 15.567, d: 2.5, nd: 1.48749, elemId: 6, sd: 5.8 },
    { label: "12", R: -34.265, d: 0.5, nd: 1, elemId: 0, sd: 6.1 },
    { label: "13", R: 24.398, d: 1.601, nd: 1.48749, elemId: 7, sd: 6.1 },
    { label: "14", R: -351.765, d: 3.325, nd: 1, elemId: 0, sd: 6.1 },
    { label: "15", R: -24.72, d: 0.79, nd: 1.6968, elemId: 8, sd: 5.9 },
    { label: "16A", R: 30.038, d: 3.775, nd: 1, elemId: 0, sd: 6 },
    { label: "17A", R: 93.933, d: 2.19, nd: 1.8061, elemId: 9, sd: 7.2 },
    { label: "18A", R: -60.132, d: 13.817, nd: 1, elemId: 0, sd: 7.5 },
  ],

  asph: {
    "2A": {
      K: -0.083257779,
      A4: -1.2058e-5,
      A6: -3.9503e-7,
      A8: 3.1552e-9,
      A10: -2.6164e-11,
      A12: 0,
      A14: 0,
    },
    "5A": {
      K: 0,
      A4: -6.3285e-6,
      A6: -5.1744e-7,
      A8: 1.0598e-8,
      A10: -2.0601e-10,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: 2.3738e-6,
      A6: -2.1246e-7,
      A8: 6.8489e-10,
      A10: -7.7144e-11,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: -0.8909625,
      A4: 6.1843e-5,
      A6: -2.7882e-7,
      A8: -1.0586e-9,
      A10: 1.0602e-11,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -8.8132e-5,
      A6: 7.6707e-7,
      A8: -8.7771e-9,
      A10: 7.0405e-11,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -9e-5,
      A6: 6.3117e-7,
      A8: -8.4535e-9,
      A10: 6.5005e-11,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "4": [
      [23.043, 23.043],
      [10.23, 10.23],
      [0.8, 0.8],
    ],
    "14": [
      [3.325, 3.325],
      [4.565, 4.565],
      [9.669, 9.669],
    ],
    "16A": [
      [3.775, 3.775],
      [5.594, 5.594],
      [6.41, 6.41],
    ],
    "18A": [
      [13.817, 13.817],
      [20.784, 20.784],
      [26.837, 26.837],
    ],
  },

  varLabels: [
    ["4", "D4"],
    ["14", "D14"],
    ["16A", "D16"],
    ["18A", "D18"],
  ],

  zoomPositions: [16.48, 28.2, 48.5],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "4" },
    { text: "GR2", fromSurface: "5A", toSurface: "14" },
    { text: "GR3", fromSurface: "15", toSurface: "16A" },
    { text: "GR4", fromSurface: "17A", toSurface: "18A" },
  ],

  doublets: [{ text: "L4/L5", fromSurface: "8", toSurface: "10" }],

  closeFocusM: 0.25,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent identifies GR3 as the axial focus group, but Example 1 publishes only infinity-focus zoom spacings. The authored model therefore preserves infinity focus at both focus endpoints; Sony's marketed MFD is 0.25-0.30 m.",

  nominalFno: [3.61, 4.77, 5.77],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32, 36],
  maxFstop: 36,
  apertureBlades: 7,

  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
