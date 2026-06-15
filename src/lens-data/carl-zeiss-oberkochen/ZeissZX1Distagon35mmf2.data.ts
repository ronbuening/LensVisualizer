import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║        ZEISS ZX1 Distagon T* 35mm f/2                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0180842 A1, Example 1 (Pretorius / Carl Zeiss AG).   ║
 * ║  Compact full-frame fixed-lens-camera Distagon with dual floating inner    ║
 * ║  focus, a fixed front compound lens, and a fixed rear bi-aspheric element. ║
 * ║  8 elements / 5 air-spaced groups, 4 aspherical surfaces.                  ║
 * ║                                                                            ║
 * ║  NOTE ON FILTER STACK:                                                     ║
 * ║    Patent surfaces AF17-AF20 are two flat sensor/filter plates that the     ║
 * ║    patent explicitly excludes from the camera lens. They are therefore not ║
 * ║    represented as lens elements here. The final surface-to-image distance   ║
 * ║    folds their optical path into an air-equivalent BFD:                    ║
 * ║      0.5 + 1.2/1.51680 + 0.5 + 0.8/1.51680 + 2.0 = 4.3185654 mm.          ║
 * ║                                                                            ║
 * ║  NOTE ON GLASS DATA:                                                       ║
 * ║    The patent table names OHARA glass types but omits nd/vd columns.       ║
 * ║    Values below use OHARA catalog data matched to the patent trade names.  ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║    Semi-diameters are patent-listed values from Table 1.                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "zeiss-zx1-distagon-35mm-f2",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS DISTAGON T* 35mm f/2 (Zeiss ZX1)",
  subtitle: "US 2018/0180842 A1 Example 1 — Pretorius / Carl Zeiss AG",
  specs: ["8 elements / 5 groups", "f = 35.000 mm", "F/2.0", "2ω ≈ 63.5°", "4 aspherical surfaces"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.00036,
  apertureMarketing: 2,
  apertureDesign: 1.97642,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentYear: 2018,
  elementCount: 8,
  groupCount: 5,

  nominalFno: 2,
  closeFocusM: 0.3,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  yScFill: 0.78,
  focusDescription:
    "Dual floating inner focus: subgroups 21 and 22 move independently behind the fixed stop while the first compound lens and rear bi-asphere remain fixed.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.42,
      fl: -15.46,
      glass: "S-TIH6 (OHARA)",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
      cemented: "D1",
      role: "Front negative element of subgroup 11; entrance-pupil placement and front chromatic correction.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 46.02,
      fl: 19.95,
      glass: "S-LAM61 (OHARA)",
      nC: 1.71533,
      nF: 1.73097,
      ng: 1.73979,
      cemented: "D1",
      role: "Positive partner in the weakly negative front doublet; corrects L1 chromatic power while preserving the near-front entrance pupil.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      fl: 24.08,
      glass: "S-NPH1 (OHARA)",
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
      role: "High-index positive singlet of subgroup 12; supplies most of the first compound lens convergence.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.52,
      fl: -13.8,
      glass: "S-TIH1 (OHARA)",
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
      cemented: "D2",
      role: "Negative front element of movable subgroup 21; forms the principal diverging focus doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.74,
      fl: 25.24,
      glass: "S-FPM2 (OHARA)",
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
      cemented: "D2",
      role: "Low-dispersion positive partner to L4 in the negative movable focus doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.62,
      fl: 52.83,
      glass: "S-LAH59 (OHARA)",
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
      role: "Object-side positive element of movable subgroup 22; adds convergence before the rear molded asphere pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Bi-Aspheric Positive",
      nd: 1.59522,
      vd: 67.74,
      fl: 41.93,
      glass: "S-FPM2 (OHARA)",
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
      role: "Bi-aspheric positive image-side element of movable subgroup 22; contributes exit-pupil control and field correction.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Bi-Aspheric Negative Meniscus",
      nd: 1.73077,
      vd: 40.51,
      fl: -23.28,
      glass: "L-LAM69 (OHARA)",
      nC: 1.72542,
      nF: 1.74346,
      ng: 1.75379,
      role: "Fixed rear bi-aspheric negative corrector; sets the exit-pupil position before the sensor filter stack.",
    },
  ],

  surfaces: [
    { label: "1", R: -23.3193, d: 1.6, nd: 1.80518, elemId: 1, sd: 8.55 },
    { label: "2", R: 27.53319, d: 5.5, nd: 1.72, elemId: 2, sd: 9.38782 },
    { label: "3", R: -27.53319, d: 0.2, nd: 1.0, elemId: 0, sd: 9.80123 },
    { label: "4", R: 24.9203, d: 4.4, nd: 1.80809, elemId: 3, sd: 10.12667 },
    { label: "5", R: -81.82505, d: 1.3, nd: 1.0, elemId: 0, sd: 9.87401 },
    { label: "STO", R: 1e15, d: 4.8048, nd: 1.0, elemId: 0, sd: 9.1 },
    { label: "6", R: -32.17761, d: 1.1, nd: 1.71736, elemId: 4, sd: 7.65 },
    { label: "7", R: 14.49702, d: 4.1, nd: 1.59522, elemId: 5, sd: 7.88802 },
    { label: "8", R: 370.02251, d: 4.26298, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "9", R: 44.10411, d: 3.0, nd: 1.816, elemId: 6, sd: 11.73325 },
    { label: "10", R: -1857.77292, d: 8.71275, nd: 1.0, elemId: 0, sd: 11.94034 },
    { label: "11A", R: 1e15, d: 5.4, nd: 1.59522, elemId: 7, sd: 13.80054 },
    { label: "12A", R: -24.95694, d: 5.11947, nd: 1.0, elemId: 0, sd: 14.53752 },
    { label: "13A", R: -17.01007, d: 2.5, nd: 1.73077, elemId: 8, sd: 14.96886 },
    { label: "14A", R: 1e15, d: 4.3185654, nd: 1.0, elemId: 0, sd: 18.4762 },
  ],

  asph: {
    "11A": {
      K: 0,
      A4: -4.8992092861e-5,
      A6: 6.1949699715e-10,
      A8: -1.2500220906e-9,
      A10: 5.6567321954e-12,
      A12: 0,
      A14: 0,
      A16: 0,
      A18: 0,
      A20: 0,
    },
    "12A": {
      K: 0,
      A4: -1.066253035e-5,
      A6: -9.6382651819e-9,
      A8: -6.8821065476e-10,
      A10: 3.3476497962e-12,
      A12: 0,
      A14: 0,
      A16: 0,
      A18: 0,
      A20: 0,
    },
    "13A": {
      K: 0,
      A4: 1.0710823842e-5,
      A6: 3.2153423282e-8,
      A8: 3.3940082833e-10,
      A10: -7.052430311e-13,
      A12: 0,
      A14: 0,
      A16: 0,
      A18: 0,
      A20: 0,
    },
    "14A": {
      K: 0,
      A4: -3.5706165113e-5,
      A6: -9.4676861855e-9,
      A8: 1.2368357029e-10,
      A10: -2.3643105236e-13,
      A12: 0,
      A14: 0,
      A16: 0,
      A18: 0,
      A20: 0,
    },
  },

  var: {
    STO: [4.8048, 4.12952],
    "8": [4.26298, 0.8],
    "12A": [5.11947, 9.25773],
  },
  varLabels: [
    ["STO", "AF7"],
    ["8", "AF10"],
    ["12A", "AF14"],
  ],

  groups: [
    { text: "G1 / 11", fromSurface: "1", toSurface: "3" },
    { text: "G2 / 12", fromSurface: "4", toSurface: "5" },
    { text: "G3 / 21", fromSurface: "6", toSurface: "8" },
    { text: "G4 / 22", fromSurface: "9", toSurface: "12A" },
    { text: "G5 / 30", fromSurface: "13A", toSurface: "14A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
