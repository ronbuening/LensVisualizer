import type { LensDataInput } from "../../types/optics.js";

/**
 * Lens data - FUJIFILM FUJINON GF 20-35mm f/4 R WR
 *
 * Data source: US 2022/0236544 A1, Example 10 (FUJIFILM / Ryosuke Nagami),
 * Tables 28-30 and Fig. 25-26.
 *
 * Optical form: negative-lead five zoom-group design, G1(-) / G2(+) / G3(+) / G4(-) / G5(+).
 * 14 elements / 10 air-separated groups / 8 patent aspherical surfaces on 4 elements.
 * Focus: inner focus by the entire second lens group G2 (L21-L22).
 *
 * Zoom variable gaps: DD[7], DD[11], DD[18], DD[23].
 * Focus variable gaps: DD[7] and DD[11] only; Table 29 publishes beta=-0.1 values at wide and tele.
 * The middle close-focus DD[7]/DD[11] values below are linearly interpolated between the wide and tele
 * focus travels only for the LensVisualizer focus slider. Infinity positions are patent-transcribed.
 *
 * Cover-glass handling: the patent lists a rear 3.20 mm, nd=1.51680 parallel plate plus 2.05 mm air.
 * The project data format excludes sensor/cover glass, so surface 25 folds this into an air-equivalent BFD:
 * 17.0778 + 3.20/1.51680 + 2.05 = 21.237504641 mm.
 *
 * Aspheres: the Fujifilm patent uses KA in sqrt(1 - KA*C^2*h^2), so KA=1 maps to project K=0.
 * The patent also includes odd polynomial powers A5, A7, and A9. The renderer accepts even-order
 * coefficients only, so surfaces 3A, 4A, 10A, 11A, 17A, 18A, 22A, and 23A store a least-squares
 * even-order refit over the semi-diameter used for rendering. The companion analysis records residuals.
 *
 * Semi-diameters: only ED values for surfaces 8 and 23 are patent-listed (diameters 18.11 and 27.73 mm).
 * Other SDs are conservative renderer estimates checked for edge thickness and cross-gap sag clearance.
 */

const LENS_DATA = {
  key: "fujifilm-gf-20-35mm-f4-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 20-35mm f/4 R WR",
  subtitle: "US 2022/0236544 A1 Example 10 - FUJIFILM / Nagami",
  specs: [
    "14 elements / 10 groups",
    "f = 20.60-33.99 mm design; 20-35 mm marketed",
    "F/4 nominal; patent FNo. 4.08-4.11",
    "2ω = 110.0°-74.6°",
    "8 aspherical surfaces; 4 ED-class elements",
  ],

  focalLengthMarketing: [20, 35],
  focalLengthDesign: [20.6008, 33.9845],
  apertureMarketing: 4,
  apertureDesign: 4.11,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentYear: 2022,
  elementCount: 14,
  groupCount: 10,
  apertureBlades: 9,
  apertureBladeRoundedness: 0.85,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: -45.76,
      glass: "S-NPH3 (OHARA; 959/175 optical match)",
      role: "High-index, high-dispersion front negative meniscus for the negative lead group.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: -48.71,
      glass: "MP/MC-BACD12 (HOYA precision-molding class; 583/595)",
      role: "Front-group molded asphere pair for distortion, astigmatism, and off-axis bundle control.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus ED",
      nd: 1.497,
      vd: 81.6,
      fl: -35.76,
      glass: "N-PK52A / FCD1 / S-FPL51 class (497/816 ED)",
      role: "Low-dispersion member of the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus Dense Flint",
      nd: 1.84667,
      vd: 23.79,
      fl: 37.46,
      glass: "S-TIH53-class dense flint (847/238; vendor uncertain)",
      role: "High-dispersion positive partner for the G1 ED cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Plano-Convex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 49.15,
      glass: "TAFD35 (HOYA; 911/353)",
      role: "First element of the two-element inner-focus group G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Weak Neg. Meniscus (2x Asph)",
      nd: 1.68863,
      vd: 31.2,
      fl: -355.86,
      glass: "Unmatched (light dense flint, 689/312; no exact public catalog match confirmed)",
      role: "Weak-power moving aspheric corrector in the focus group.",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 27.87,
      glass: "N-FK5 / S-FSL5 class (487/704)",
      role: "Low-dispersion positive front member of the G3 cemented triplet, immediately after the stop.",
      cemented: "T1",
    },
    {
      id: 8,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.757,
      vd: 47.71,
      fl: -14.57,
      glass: "H-LaF6L / lanthanum flint class (757/477)",
      role: "Central high-index negative member of the G3 triplet.",
      cemented: "T1",
    },
    {
      id: 9,
      name: "L33",
      label: "L33",
      type: "Plano-Convex ED",
      nd: 1.497,
      vd: 81.61,
      fl: 39.08,
      glass: "N-PK52A / FCD1 / S-FPL51 class (497/816 ED)",
      role: "Rear low-dispersion positive member of the G3 triplet.",
      cemented: "T1",
    },
    {
      id: 10,
      name: "L34",
      label: "L34",
      type: "Biconvex Positive ED (2x Asph)",
      nd: 1.49648,
      vd: 81.3,
      fl: 30.16,
      glass: "Unmatched (ED fluorophosphate, 496/813; near FCD1/S-FPL51 family)",
      role: "Aspherical ED positive element for spherical aberration, field, and secondary-spectrum correction.",
    },
    {
      id: 11,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus Dense Flint",
      nd: 1.90366,
      vd: 31.31,
      fl: -31.45,
      glass: "N-LASF46B / TAFD25 / S-LAH95 class (904/313)",
      role: "Negative high-index member of the rear negative cemented doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L42",
      label: "L42",
      type: "Positive Meniscus ED",
      nd: 1.497,
      vd: 81.61,
      fl: 51.98,
      glass: "N-PK52A / FCD1 / S-FPL51 class (497/816 ED)",
      role: "ED positive partner in the negative G4 doublet.",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: -79.43,
      glass: "MP/MC-LAC130 (HOYA precision-molding class; 694/532)",
      role: "Rear G4 aspheric field and chief-ray corrector.",
    },
    {
      id: 14,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus Dense Lanthanum Flint",
      nd: 1.8707,
      vd: 40.73,
      fl: 62.3,
      glass: "TAFD32 / H-ZLaF64 class (871/407)",
      role: "Stationary final positive group for rear relay power and exit-pupil control.",
    },
  ],

  surfaces: [
    { label: "1", R: 42.2962, d: 1.4, nd: 1.95906, elemId: 1, sd: 17.0 },
    { label: "2", R: 21.1899, d: 6.3511, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3A", R: 61.1798, d: 2.29, nd: 1.58313, elemId: 2, sd: 15.0 },
    { label: "4A", R: 19.1309, d: 9.1788, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "5", R: -56.2094, d: 1.21, nd: 1.497, elemId: 3, sd: 14.5 },
    { label: "6", R: 26.1773, d: 4.79, nd: 1.84667, elemId: 4, sd: 14.0 },
    { label: "7", R: 137.3349, d: 17.46, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "8", R: 44.7695, d: 2.45, nd: 1.91082, elemId: 5, sd: 9.055 },
    { label: "9", R: 1e15, d: 7.0374, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "10A", R: -36.7101, d: 2.75, nd: 1.68863, elemId: 6, sd: 8.4 },
    { label: "11A", R: -44.4975, d: 7.56, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "STO", R: 1e15, d: 1.2008, nd: 1.0, elemId: 0, sd: 8.65 },
    { label: "13", R: 25.975, d: 6.98, nd: 1.48749, elemId: 7, sd: 8.8 },
    { label: "14", R: -25.975, d: 0.8, nd: 1.757, elemId: 8, sd: 8.8 },
    { label: "15", R: 19.424, d: 3.85, nd: 1.497, elemId: 9, sd: 8.8 },
    { label: "16", R: 1e15, d: 1.4526, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "17A", R: 39.3908, d: 6.8, nd: 1.49648, elemId: 10, sd: 10.5 },
    { label: "18A", R: -22.7697, d: 7.45, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "19", R: 41.5939, d: 1.15, nd: 1.90366, elemId: 11, sd: 11.0 },
    { label: "20", R: 16.6618, d: 4.85, nd: 1.497, elemId: 12, sd: 11.0 },
    { label: "21", R: 42.3986, d: 4.7645, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "22A", R: -45.8664, d: 1.5, nd: 1.6935, elemId: 13, sd: 13.4 },
    { label: "23A", R: -277.6916, d: 5.08, nd: 1.0, elemId: 0, sd: 13.865 },
    { label: "24", R: -254.4443, d: 6.55, nd: 1.8707, elemId: 14, sd: 15.5 },
    { label: "25", R: -45.2499, d: 21.2375046414, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 4.99587450071126e-8,
      A6: 1.17835251288903e-6,
      A8: -2.12338633192685e-8,
      A10: 1.63061973945264e-10,
      A12: -5.83573441138111e-13,
      A14: 7.97088397502541e-16,
    },
    "4A": {
      K: 0,
      A4: 4.76471094461098e-8,
      A6: 9.78851217901896e-7,
      A8: -2.13184992357477e-8,
      A10: 1.87704919458082e-10,
      A12: -7.68712194375423e-13,
      A14: 1.20084387683657e-15,
    },
    "10A": {
      K: 0,
      A4: 5.83890226195759e-5,
      A6: 2.46343739557612e-8,
      A8: 1.2692616354893e-9,
      A10: -2.52295894671313e-11,
      A12: 2.39526802105998e-13,
      A14: -9.30603625591813e-16,
    },
    "11A": {
      K: 0,
      A4: 6.01202441591208e-5,
      A6: 3.34746476223582e-8,
      A8: 2.16306871553409e-9,
      A10: -4.10527508614014e-11,
      A12: 4.11584311173424e-13,
      A14: -1.64227617417803e-15,
    },
    "17A": {
      K: 0,
      A4: -8.18107331868305e-6,
      A6: 3.17457638483202e-8,
      A8: -9.40014859021258e-10,
      A10: 1.27542031930008e-11,
      A12: -8.37755354309648e-14,
      A14: 2.14052835585383e-16,
    },
    "18A": {
      K: 0,
      A4: 5.71445083224008e-6,
      A6: 1.02797735668938e-8,
      A8: -4.88375318541086e-10,
      A10: 6.14429866030663e-12,
      A12: -3.96870012752173e-14,
      A14: 9.80846032470123e-17,
    },
    "22A": {
      K: 0,
      A4: -9.12655007497729e-8,
      A6: -1.71768237832024e-6,
      A8: 3.23305193567791e-8,
      A10: -2.9203062092369e-10,
      A12: 1.26227997708073e-12,
      A14: -2.12937909430221e-15,
    },
    "23A": {
      K: 0,
      A4: -3.92234107005452e-8,
      A6: -7.90388576988237e-7,
      A8: 1.36711478942482e-8,
      A10: -1.11090338405678e-10,
      A12: 4.37634384826986e-13,
      A14: -6.72108054159098e-16,
    },
  },

  var: {
    "7": [
      [17.46, 19.5],
      [7.85, 9.518222554144884],
      [2.54, 3.91],
    ],
    "11A": [
      [7.56, 5.52],
      [6.45, 4.781777445855116],
      [5.17, 3.8],
    ],
    "18A": [
      [7.45, 7.45],
      [11.97, 11.97],
      [16.41, 16.41],
    ],
    "23A": [
      [5.08, 5.08],
      [11.28, 11.28],
      [13.43, 13.43],
    ],
  },

  varLabels: [
    ["7", "DD[7] G1-G2 / focus"],
    ["11A", "DD[11] G2-G3 / focus"],
    ["18A", "DD[18] G3-G4"],
    ["23A", "DD[23] G4-G5"],
  ],

  zoomPositions: [20.6, 28.03, 33.99],
  zoomStep: 0.004,
  zoomLabels: ["20.6 mm", "34.0 mm"],

  groups: [
    { text: "G1 -", fromSurface: "1", toSurface: "7" },
    { text: "G2 + FOCUS", fromSurface: "8", toSurface: "11A" },
    { text: "G3 +", fromSurface: "STO", toSurface: "18A" },
    { text: "G4 -", fromSurface: "19", toSurface: "23A" },
    { text: "G5 +", fromSurface: "24", toSurface: "25" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "T1", fromSurface: "13", toSurface: "16" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.35,
  focusDescription:
    "Inner focus by entire G2 (L21-L22). Patent Table 29 gives beta=-0.1 focus spacings at wide and tele; middle close-focus spacing is interpolated for the viewer.",
  nominalFno: 4,
  maxFstop: 22,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  scFill: 0.72,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
