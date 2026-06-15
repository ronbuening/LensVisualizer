import type { LensDataInput } from "../../types/optics.js";

/**
 * Fujifilm Fujinon XF56mmF1.2 R WR
 *
 * Data source: JP 2023-029039 A, Example 2 (FUJIFILM Corporation).
 * Prescription transcribes the patent's Table 4 infinity state. Focus variables
 * transcribe Table 5's published 0.5 m close-state spacings. Independent
 * finite-conjugate tracing places that tabulated state at about 0.50 m in
 * front of the first surface, or about 0.59 m object-to-sensor; the product
 * metadata below retains FUJIFILM's official 0.50 m minimum focus distance
 * measured from the focal plane.
 *
 * 13 glass elements / 8 air-separated groups, with four aspherical surfaces on
 * two molded aspherical elements. The sensor cover glass / filter plate PP
 * listed as patent surfaces 23-24 is excluded; its optical path is folded into
 * the final air-equivalent back focal distance on surface 22A.
 *
 * Focus: G2, including the aperture stop, moves as a rigid unit objectward.
 * G1 and G3 remain fixed to the image plane.
 *
 * Semi-diameters are inferred because the patent does not publish clear-aperture
 * radii. They were set from paraxial marginal/chief ray envelopes, then reduced
 * where required by edge-thickness and cross-gap sag constraints. The front
 * element is capped by the production 67 mm filter thread envelope. The diagram
 * uses a reduced off-axis field fraction because the full-field, full-aperture
 * paraxial envelope would require unrealistically large clear apertures for this
 * fast APS-C portrait lens and would ignore ordinary wide-open vignetting.
 */

const LENS_DATA = {
  key: "fujifilm-xf56mm-f12-r-wr",
  maker: "FUJIFILM",
  name: "FUJIFILM FUJINON XF 56mm f/1.2 R WR",
  subtitle: "JP 2023-029039 A Example 2",
  specs: [
    "13 elements / 8 groups",
    "f = 54.453 mm design; 56 mm marketed",
    "F1.2 marketed; FNo. 1.24 design",
    "2ω = 29.06° design; 28.5° marketed",
    "2 aspherical elements / 1 ED element",
  ],

  focalLengthMarketing: 56,
  focalLengthDesign: 54.4525,
  apertureMarketing: 1.2,
  apertureDesign: 1.24,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentYear: 2023,
  elementCount: 13,
  groupCount: 8,
  apertureBlades: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front crown",
      type: "Positive / near plano-convex",
      nd: 1.62041,
      vd: 60.36,
      fl: 81.6,
      glass: "620/604 dense crown; Hoya BACD16 / Ohara S-BSM16 class",
      cemented: "D1",
      role: "Weak positive crown component of the fixed front achromat.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 front flint",
      type: "Negative / near plano-concave",
      nd: 1.85451,
      vd: 25.15,
      fl: -115.0,
      glass: "NBFD25 (Hoya, 855/252)",
      cemented: "D1",
      role: "High-dispersion partner for the weak fixed front achromat.",
    },
    {
      id: 3,
      name: "L21 / Lp1",
      label: "L21 focus-front positive",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: 54.1,
      glass: "S-NPH3 (Ohara, 959/175)",
      role: "High-index positive front element of the moving focus group.",
    },
    {
      id: 4,
      name: "L22",
      label: "L22 ED crown",
      type: "Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 46.0,
      glass: "FCD705 (Hoya, 550/755 ED)",
      apd: "patent",
      dPgF: 0.023,
      apdNote: "ED element; positive anomalous partial dispersion estimated from θgF and catalog match.",
      cemented: "D2",
      role: "ED positive component of the pre-stop axial-color correction doublet.",
    },
    {
      id: 5,
      name: "L23",
      label: "L23 dense flint",
      type: "Negative",
      nd: 1.92286,
      vd: 20.88,
      fl: -21.1,
      glass: "E-FDS1 (Hoya) / N-SF66 (Schott) class, 923/209",
      cemented: "D2",
      role: "Very dense flint partner cemented to the ED element ahead of the stop.",
    },
    {
      id: 6,
      name: "L24",
      label: "L24 double-aspheric corrector",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.58254,
      vd: 59.44,
      fl: 131.6,
      glass: "582/594 moldable crown; Hoya M-BACD12 class (inferred)",
      role: "Low-power post-stop molded aspheric corrector for spherical aberration and coma.",
    },
    {
      id: 7,
      name: "L25",
      label: "L25 post-stop flint",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.72,
      fl: -18.9,
      glass: "S-TIH11 (Ohara) / FD110 (Hoya) class, 785/257",
      cemented: "D3",
      role: "Negative flint component of a weakly negative post-stop cemented doublet.",
    },
    {
      id: 8,
      name: "L26",
      label: "L26 lanthanum crown",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.56,
      fl: 23.3,
      glass: "S-LAH59 (Ohara) / TAF5 (Hoya) class, 816/466",
      cemented: "D3",
      role: "Positive high-index partner behind the stop.",
    },
    {
      id: 9,
      name: "L27 / Ln2",
      label: "L27 rear-G2 negative",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.17,
      fl: -40.3,
      glass: "S-NBM51 (Ohara) / H-TF3L (CDGM) class, 613/442",
      cemented: "D4",
      role: "Negative component of the rear focus-group cemented doublet.",
    },
    {
      id: 10,
      name: "L28 / Lp2",
      label: "L28 rear-G2 high-index positive",
      type: "Biconvex Positive",
      nd: 2.0509,
      vd: 26.94,
      fl: 23.5,
      glass: "TAFD65 (Hoya, 051/269)",
      cemented: "D4",
      role: "Highest-index positive element; image-side positive terminal element of the moving focus group.",
    },
    {
      id: 11,
      name: "L31",
      label: "L31 rear positive",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.12,
      fl: 19.3,
      glass: "TAFD55 (Hoya) / S-LAH99 (Ohara) class, 001/291",
      cemented: "D5",
      role: "High-index positive component of the fixed rear lateral-color corrector.",
    },
    {
      id: 12,
      name: "L32",
      label: "L32 rear dense flint",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      fl: -20.4,
      glass: "S-NBH58 (Ohara, 789/284)",
      cemented: "D5",
      role: "Dense flint component cemented to L31 in the fixed rear group.",
    },
    {
      id: 13,
      name: "L33",
      label: "L33 rear double-aspheric field flattener",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.19,
      fl: -173.5,
      glass: "689/312 flint; E-FD8 / J-SF8 class (inferred)",
      role: "Weak negative molded aspheric rear field-flattening element.",
    },
  ],

  surfaces: [
    { label: "1", R: 51.64985, d: 6.98, nd: 1.62041, elemId: 1, sd: 25.6 },
    { label: "2", R: -2367.27, d: 1.5, nd: 1.85451, elemId: 2, sd: 25.4 },
    { label: "3", R: 102.54672, d: 17.1, nd: 1.0, elemId: 0, sd: 25.4 },
    { label: "4", R: 36.76157, d: 5.27, nd: 1.95906, elemId: 3, sd: 21.5 },
    { label: "5", R: 117.41127, d: 0.5, nd: 1.0, elemId: 0, sd: 21.3 },
    { label: "6", R: 24.69651, d: 7.59, nd: 1.55032, elemId: 4, sd: 17.8 },
    { label: "7", R: 899.853, d: 1.33, nd: 1.92286, elemId: 5, sd: 17.6 },
    { label: "8", R: 19.00859, d: 6.81, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "STO", R: 1e15, d: 3.34, nd: 1.0, elemId: 0, sd: 11.1204 },
    { label: "10A", R: -135.45682, d: 2.1, nd: 1.58254, elemId: 6, sd: 11.6 },
    { label: "11A", R: -49.23079, d: 0.205, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "12", R: -42.09516, d: 0.81, nd: 1.78472, elemId: 7, sd: 11.7 },
    { label: "13", R: 23.0954, d: 4.99, nd: 1.816, elemId: 8, sd: 11.8 },
    { label: "14", R: -96.6818, d: 1.0, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "15", R: -42.98736, d: 0.91, nd: 1.6134, elemId: 9, sd: 11.6 },
    { label: "16", R: 58.7355, d: 4.15, nd: 2.0509, elemId: 10, sd: 12.7 },
    { label: "17", R: -41.08674, d: 1.657, nd: 1.0, elemId: 0, sd: 13.1 },
    { label: "18", R: 65.92719, d: 5.4, nd: 2.001, elemId: 11, sd: 12.5 },
    { label: "19", R: -26.1773, d: 0.94, nd: 1.7888, elemId: 12, sd: 11.3 },
    { label: "20", R: 42.2791, d: 3.759, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "21A", R: -119.50352, d: 1.51, nd: 1.68863, elemId: 13, sd: 11.0 },
    { label: "22A", R: -6171825.0395, d: 12.167012217972502, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  asph: {
    "10A": {
      K: 0,
      A4: -1.6629532e-5,
      A6: -3.8750119e-8,
      A8: 7.7228086e-10,
      A10: -2.8769387e-11,
      A12: 6.0016164e-13,
      A14: -7.2506556e-15,
      A16: 5.0113719e-17,
      A18: -1.8657069e-19,
      A20: 2.8792944e-22,
    },
    "11A": {
      K: 0,
      A4: -5.5850107e-6,
      A6: -4.4690391e-8,
      A8: 1.2037661e-9,
      A10: -3.0702606e-11,
      A12: 4.7225261e-13,
      A14: -4.2946277e-15,
      A16: 2.1354594e-17,
      A18: -5.0392357e-20,
      A20: 3.1595001e-23,
    },
    "21A": {
      K: 0,
      A4: -1.0498869e-4,
      A6: -3.2481669e-7,
      A8: 1.2586842e-8,
      A10: -1.8119295e-10,
      A12: 1.9233709e-12,
      A14: -1.7608027e-14,
      A16: 1.25127e-16,
      A18: -5.3225257e-19,
      A20: 9.4838616e-22,
    },
    "22A": {
      K: 0,
      A4: -9.723988e-5,
      A6: -2.6858552e-7,
      A8: 9.8162657e-9,
      A10: -9.87269e-11,
      A12: 4.9713577e-13,
      A14: -1.4675441e-15,
      A16: 8.1775471e-18,
      A18: -5.2231708e-20,
      A20: 1.1759575e-22,
    },
  },

  var: {
    "3": [17.1, 9.855],
    "17": [1.657, 8.902],
  },
  varLabels: [
    ["3", "DD[3] / G1-G2"],
    ["17", "DD[17] / G2-G3"],
  ],
  focusDescription: "Internal unit focus: G2 and the aperture stop translate objectward; G1 and G3 remain fixed.",

  groups: [
    { text: "G1 fixed", fromSurface: "1", toSurface: "3" },
    { text: "G2 focus unit + stop", fromSurface: "4", toSurface: "17" },
    { text: "G3 fixed", fromSurface: "18", toSurface: "22A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
    { text: "D4", fromSurface: "15", toSurface: "17" },
    { text: "D5", fromSurface: "18", toSurface: "20" },
  ],

  closeFocusM: 0.5,
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.58,
  yScFill: 0.66,
  offAxisFieldFrac: 0.25,
  maxFstop: 16,
} satisfies LensDataInput;

export default LENS_DATA;
