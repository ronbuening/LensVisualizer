import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF23mmF2 R WR                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0351051 A1, Example 1 (Fujifilm / Kawamura). ║
 * ║  Compact APS-C wide-angle prime: 10 elements / 6 air-spaced groups.║
 * ║  Patent prescription has four aspherical surfaces on two elements. ║
 * ║  Focus: inner focus by imageward movement of single negative G2.    ║
 * ║                                                                    ║
 * ║  NOTE ON PRODUCTION CLOSE FOCUS:                                    ║
 * ║    The patent tabulates infinity and β = -0.041.  The base data    ║
 * ║    keep the patent infinity state, while the close-focus endpoint   ║
 * ║    solves the same prescription to the manufacturer MFD of 0.22 m. ║
 * ║    This gives G2 travel = 2.274087 mm, DD[12] = 4.586087 mm,       ║
 * ║    DD[14] = 3.489913 mm, and paraxial magnification ≈ -0.132.      ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERES:                                                  ║
 * ║    The patent uses Fujifilm's KA + A3...A20 sag convention with    ║
 * ║    odd and even polynomial terms. The renderer supports only the    ║
 * ║    standard even-order K + A4...A20 form. The asphere coefficients ║
 * ║    below are least-squares even-order refits over the adopted clear║
 * ║    semi-diameters, with sub-0.1 µm maximum sag residuals.          ║
 * ║    Patent KA = 1 is equivalent to standard K = 0 here.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear semi-diameters.  Values below ║
 * ║    are ray-trace estimates constrained by f/2.06 marginal rays,    ║
 * ║    APS-C field coverage, element SD ratios ≤ 1.25, sd/|R| < 0.90, ║
 * ║    positive edge thickness, and cross-gap sag intrusion ≤ 90%.     ║
 * ║                                                                    ║
 * ║  IMPORTANT: Sensor cover glass / optical member PP is not included ║
 * ║    as a surface. Its optical path is folded into the final BFD.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-xf-23mm-f2-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 23mm f/2 R WR",
  subtitle: "US 2017/0351051 A1 Example 1 — Fujifilm / Kawamura",
  specs: [
    "10 elements / 6 groups",
    "f = 22.377 mm design; 23 mm marketed",
    "F2.06 design; F2 marketed",
    "2ω = 64.8° design",
    "4 aspherical surfaces on 2 elements",
    "Single-element inner focus",
  ],

  focalLengthMarketing: 23,
  focalLengthDesign: 22.377,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["fujifilm-x" as const],
  imageFormat: "aps-c" as const,
  patentYear: 2017,
  elementCount: 10,
  groupCount: 6,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.14,
      fl: -34.0,
      glass: "S-BSL7 (OHARA)",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
      role: "Front field-widening negative meniscus in G1Fa.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — positive member of G1Fb doublet",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 13.4,
      glass: "S-LAH58 (OHARA)",
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
      role: "High-index positive power element in the front cemented doublet.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 — negative member of G1Fb doublet",
      type: "Plano-Concave Negative",
      nd: 1.68893,
      vd: 31.07,
      fl: -25.1,
      glass: "S-TIM28 (OHARA)",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      role: "High-dispersion negative partner for the front achromatic doublet.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 — biconcave double-asphere",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.84887,
      vd: 40.12,
      fl: -33.2,
      glass: "849401 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)",
      dPgF: -0.00435,
      apdNote: "Patent θgF = 0.57197; ΔPgF ≈ -0.00435; no exact public catalog match found.",
      role: "Biconcave aspherical corrector at the front of G1R.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — positive member of G1R triplet",
      type: "Plano-Convex Positive",
      nd: 1.816,
      vd: 46.62,
      fl: 13.4,
      glass: "S-LAH59 (OHARA)",
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
      role: "High-index lanthanum flint positive element in the G1R cemented triplet.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L16",
      label: "L16 — negative member of G1R triplet",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      fl: -15.5,
      glass: "S-TIM28 (OHARA)",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      role: "High-dispersion central negative member of the G1R triplet.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L17",
      label: "L17 — rear positive member of G1R triplet",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 17.0,
      glass: "S-LAH58 (OHARA)",
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
      role: "Rear positive converging element of the G1R triplet.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L21",
      label: "L21 — moving focus asphere",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.80312,
      vd: 40.54,
      fl: -39.8,
      glass: "803405 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)",
      dPgF: -0.0101,
      apdNote: "Patent θgF = 0.56551; ΔPgF ≈ -0.01010; no exact public catalog match found.",
      role: "Single-element negative G2 focus group moving imageward for closer focus.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 — negative member of G3 doublet",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.29,
      fl: -36.9,
      glass: "S-TIH23 (OHARA)",
      nC: 1.77613,
      nF: 1.80597,
      ng: 1.82428,
      role: "Very high-dispersion negative element in the weak rear doublet.",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — positive member of G3 doublet",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.58,
      fl: 31.6,
      glass: "S-LAH65V (OHARA)",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
      role: "High-index lanthanum flint positive element giving G3 weak net positive power.",
      cemented: "C3",
    },
  ],

  surfaces: [
    { label: "1", R: 52.50599, d: 1.09, nd: 1.51633, elemId: 1, sd: 10.9 },
    { label: "2", R: 13.05602, d: 10.74, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "3", R: 32.33553, d: 5.21, nd: 1.883, elemId: 2, sd: 9.7 },
    { label: "4", R: -17.32, d: 0.89, nd: 1.68893, elemId: 3, sd: 8.8 },
    { label: "5", R: 1e15, d: 3.73, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "STO", R: 1e15, d: 3.77, nd: 1.0, elemId: 0, sd: 6.54 },
    { label: "7A", R: -36.88742, d: 1.3, nd: 1.84887, elemId: 4, sd: 7.2 },
    { label: "8A", R: 120.80883, d: 0.42, nd: 1.0, elemId: 0, sd: 7.13 },
    { label: "9", R: 1e15, d: 4.56, nd: 1.816, elemId: 5, sd: 7.3 },
    { label: "10", R: -10.975, d: 0.91, nd: 1.68893, elemId: 6, sd: 8.1 },
    { label: "11", R: 446.78, d: 3.79, nd: 1.883, elemId: 7, sd: 8.3 },
    { label: "12", R: -15.5086, d: 2.312, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "13A", R: -32.42595, d: 1.75, nd: 1.80312, elemId: 8, sd: 8.0 },
    { label: "14A", R: 2385.05256, d: 5.764, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "15", R: -205.25324, d: 1.1, nd: 1.7847, elemId: 9, sd: 7.5 },
    { label: "16", R: 33.79, d: 3.98, nd: 1.804, elemId: 10, sd: 7.5 },
    { label: "17", R: -96.69231, d: 13.740955696202532, nd: 1.0, elemId: 0, sd: 7.4 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 5.974913758007e-6,
      A6: -1.191907229937e-5,
      A8: 1.52767737163e-6,
      A10: -1.193242378769e-7,
      A12: 5.604456105594e-9,
      A14: -1.625504989118e-10,
      A16: 2.846928400322e-12,
      A18: -2.758426480049e-14,
      A20: 1.133672091591e-16,
    },
    "8A": {
      K: 0,
      A4: 1.566099793822e-4,
      A6: -1.96269191629e-5,
      A8: 2.532016882072e-6,
      A10: -1.900913593866e-7,
      A12: 8.723770897111e-9,
      A14: -2.492437629636e-10,
      A16: 4.32440495633e-12,
      A18: -4.170452050513e-14,
      A20: 1.714747635749e-16,
    },
    "13A": {
      K: 0,
      A4: 1.861478196783e-4,
      A6: -9.820479179876e-6,
      A8: 8.809737269274e-7,
      A10: -4.741455353922e-8,
      A12: 1.593472796381e-9,
      A14: -3.361523850264e-11,
      A16: 4.323034165918e-13,
      A18: -3.095888247727e-15,
      A20: 9.460461915938e-18,
    },
    "14A": {
      K: 0,
      A4: 1.591527663976e-4,
      A6: -2.573399564219e-6,
      A8: 2.003098860672e-7,
      A10: -1.05858152807e-8,
      A12: 3.646122765709e-10,
      A14: -7.919071725624e-12,
      A16: 1.040134083941e-13,
      A18: -7.514722862129e-16,
      A20: 2.285804066235e-18,
    },
  },

  var: {
    "12": [2.312, 4.586087444736031],
    "14A": [5.764, 3.489912555263969],
  },
  varLabels: [
    ["12", "DD[12]"],
    ["14A", "DD[14]"],
  ],

  groups: [
    { text: "G1F", fromSurface: "1", toSurface: "5" },
    { text: "G1R", fromSurface: "7A", toSurface: "12" },
    { text: "G2", fromSurface: "13A", toSurface: "14A" },
    { text: "G3", fromSurface: "15", toSurface: "17" },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "9", toSurface: "12" },
    { text: "C3", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.22,
  focusDescription:
    "Inner focus by G2 only. The single negative L21 element moves imageward; G1 and G3 remain fixed. Close endpoint solves the patent prescription to the production 0.22 m MFD.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  scFill: 0.55,
  offAxisFieldFrac: 0.45,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
