import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA - FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro
 *
 * Data source: CN 116500768 A, Example 1 (FUJIFILM Corporation / Yuya Hirakawa).
 * Production correlation is strong but is not manufacturer-confirmed patent attribution.
 * Patent design: 11 elements / 9 groups, six aspherical surfaces, G1(+)-G2(- focus)-G3(+).
 * Focus status: PUBLISHED. Only G2 (L21-L23) moves imageward. DD14 changes 2.301 -> 10.754 mm,
 * while DD19 changes 13.210 -> 4.757 mm, for 8.453 mm rigid-group travel.
 * Rear plate: Table 1 surfaces 22-23 (optical member PP, filter/cover glass; t=2.850, nd 1.51680, vd 64.20,
 * thetaGF 0.53430) are modeled physically in `rearPlates` (traced, not drawn). Surface 21A stores the patent's
 * 17.731 mm gap to PP; 1.094 mm of air follows PP to the image plane.
 * Stop: axial station is patent-published; physical diameter is not. STO sd=6.550410636 mm is calibrated
 * paraxially from the normalized infinity model to design FNo=2.9, so it is an inference.
 * Semi-diameters are Table 1 effective diameters ED/2. The larger Fig. 1 mechanical rims are not optical apertures.
 * Glass: patent nd/vd is retained at the d line. Labels are coordinate classes/candidates only; supplier/melt
 * identity is unconfirmed. Table 1 thetaGF supplies dPgF directly; no catalog-derived nC/nF/ng overrides are used.
 * Aspheres: patent KA maps as K = KA - 1. All Example-1 KA values are 1, hence K=0.
 * Scale: none (s=1). Dimensions and asphere coefficients remain at patent scale.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-xf-30mm-f28-r-lm-wr-macro",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro",
  subtitle: "CN 116500768 A Example 1 - strong production correlation; not manufacturer-confirmed",
  specs: ["11 ELEMENTS / 9 GROUPS", "DESIGN f = 29.109 mm", "DESIGN F/2.9", "6 ASPHERICAL SURFACES", "1:1 MACRO"],

  focalLengthMarketing: 30,
  focalLengthDesign: 29.10924384,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "CN 116500768 A",
  patentAuthors: ["Yuya Hirakawa"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2023,
  elementCount: 11,
  groupCount: 9,
  sourceStates: [
    {
      id: "infinity",
      label: "Infinity",
      focusT: 0,
      zoomT: 0,
      source: "CN 116500768 A, Example 1 Tables 1–2, infinity column; paragraph 0317.",
      conjugate: { kind: "infinity" },
    },
    {
      id: "life-size",
      label: "Life-size · 1×",
      focusT: 1,
      zoomT: 0,
      source: "CN 116500768 A, Example 1 Tables 1–2, closest column; paragraph 0317 publishes 18.2 mm from the first surface; Table 25 gives |β|=1.",
      conjugate: {
        kind: "finite",
        objectDistanceMm: 18.2,
        distanceReference: "first-surface",
        distanceProvenance: "published",
        magnification: 1,
      },
    },
  ],

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58254,
      vd: 59.44,
      dPgF: -0.00198192, // Table 1: θgF=0.54184; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: -20.548862,
      glass: "L-BAL42 catalog proxy; 583594 low-Tg crown class (supplier unconfirmed)",
      role: "Front negative element of fixed subgroup G1A; both surfaces are aspherical.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.14,
      dPgF: -0.00060652, // Table 1: θgF=0.53531; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: -44.699621,
      glass: "516641 crown / S-BSL7-class (supplier unconfirmed)",
      role: "Second negative element of fixed subgroup G1A.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Biconvex Positive",
      nd: 1.80611,
      vd: 33.29,
      dPgF: 0.00348378, // Table 1: θgF=0.59129; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: 18.807929,
      glass: "J-LASFH6 catalog proxy; 806333 high-index flint class (supplier unconfirmed)",
      role: "Positive rear element of fixed subgroup G1A.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      dPgF: 0.03083028, // Table 1: θgF=0.53748; ΔPgF=θgF−(0.6438−0.001682νd).
      apd: "patent",
      apdNote: "Table 1 publishes θgF=0.53748; positive anomalous dispersion in this ED element. Supplier identity is unconfirmed.",
      indexReference: "d",
      fl: 30.540834,
      glass: "497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)",
      role: "Front positive element of fixed subgroup G1B; one of two 497816 ED-coordinate elements.",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      dPgF: 0.00136268, // Table 1: θgF=0.59514; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: -10.585567,
      glass: "770297 / NBFD29-class flint (supplier unconfirmed)",
      role: "Negative member of the cemented G1B doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "L16",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      dPgF: 0.03083028, // Table 1: θgF=0.53748; ΔPgF=θgF−(0.6438−0.001682νd).
      apd: "patent",
      apdNote: "Table 1 publishes θgF=0.53748; positive anomalous dispersion in this ED element. Supplier identity is unconfirmed.",
      indexReference: "d",
      fl: 22.784496,
      glass: "497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)",
      role: "Positive member of the cemented G1B doublet; second 497816 ED-coordinate element.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L17",
      diagramLabel: "L17",
      label: "L17",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      dPgF: -0.00770760, // Table 1: θgF=0.54661; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: 17.166701,
      glass: "694532 lanthanum crown / M-LAC130-class (supplier unconfirmed)",
      role: "Rear positive element of fixed subgroup G1B; both surfaces are aspherical.",
    },
    {
      id: 8,
      name: "L21",
      diagramLabel: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.98613,
      vd: 16.48,
      dPgF: 0.04949936, // Table 1: θgF=0.66558; ΔPgF=θgF−(0.6438−0.001682νd).
      apd: "patent",
      apdNote: "Table 1 publishes θgF=0.66558; positive partial-dispersion deviation in a high-dispersion flint, not an ED glass.",
      indexReference: "d",
      fl: 56.77069,
      glass: "986165 high-index flint / FDS16-W-class (supplier unconfirmed)",
      role: "Front positive element of the translating G2 focus group.",
    },
    {
      id: 9,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 32.17,
      dPgF: 0.00855994, // Table 1: θgF=0.59825; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: 73.89863,
      glass: "673322 dense flint / H-ZF2-class (supplier unconfirmed)",
      role: "Positive member of the cemented G2 doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 39.22,
      dPgF: -0.00495196, // Table 1: θgF=0.57288; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: -12.612466,
      glass: "883392 lanthanum flint / H-ZLaF68N-class (supplier unconfirmed)",
      role: "Negative member of the cemented G2 doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      dPgF: -0.00260108, // Table 1: θgF=0.53345; ΔPgF=θgF−(0.6438−0.001682νd).
      indexReference: "d",
      fl: 60.767271,
      glass: "L-BSL7 catalog proxy (low-Tg crown; supplier unconfirmed)",
      role: "Fixed positive G3 field-side element; both surfaces are aspherical.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1A", R: 259.44525, d: 1, nd: 1.58254, elemId: 1, sd: 7.3 },
    { label: "2A", R: 11.42635, d: 2.89, nd: 1, elemId: 0, sd: 6.5 },
    { label: "3", R: 95.17947, d: 1.13, nd: 1.51633, elemId: 2, sd: 6.45 },
    { label: "4", R: 18.50036, d: 1, nd: 1, elemId: 0, sd: 6.35 },
    { label: "5", R: 18.74098, d: 3.75, nd: 1.80611, elemId: 3, sd: 6.795 },
    { label: "6", R: -72.28533, d: 2, nd: 1, elemId: 0, sd: 6.815 },
    { label: "STO", R: 1e15, d: 6.69, nd: 1, elemId: 0, sd: 6.550410636 },
    { label: "8", R: 79.8183, d: 3.71, nd: 1.497, elemId: 4, sd: 6.965 },
    { label: "9", R: -18.45388, d: 1.87, nd: 1, elemId: 0, sd: 6.955 },
    { label: "10", R: -11.37137, d: 1, nd: 1.77047, elemId: 5, sd: 6.725 },
    { label: "11", R: 29.9463, d: 4.71, nd: 1.497, elemId: 6, sd: 7.555 },
    { label: "12", R: -17.25886, d: 0.53, nd: 1, elemId: 0, sd: 8.065 },
    { label: "13A", R: 40.08092, d: 5.01, nd: 1.6935, elemId: 7, sd: 8.7 },
    { label: "14A", R: -16.06849, d: 2.301, nd: 1, elemId: 0, sd: 9.005 },
    { label: "15", R: 1355.62916, d: 2, nd: 1.98613, elemId: 8, sd: 8.38 },
    { label: "16", R: -58.35203, d: 0.5, nd: 1, elemId: 0, sd: 8.29 },
    { label: "17", R: -80.63177, d: 1.71, nd: 1.6727, elemId: 9, sd: 8.095 },
    { label: "18", R: -31.0144, d: 0.85, nd: 1.883, elemId: 10, sd: 7.96 },
    { label: "19", R: 17.59974, d: 13.21, nd: 1, elemId: 0, sd: 7.68 },
    { label: "20A", R: -362.90949, d: 4.47, nd: 1.51633, elemId: 11, sd: 11.29 },
    { label: "21A", R: -29.00029, d: 17.731, nd: 1, elemId: 0, sd: 11.745 }, // patent D21: gap to PP
  ],

  /* ── Optical member PP (patent surfaces 22–23, filter/cover glass): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      dPgF: -0.0015156, // Table 1: θgF=0.53430; ΔPgF=θgF−(0.6438−0.001682νd).
      gapAfterMm: 1.094,
      source: "CN 116500768 A, Example 1 Table 1 surfaces 22–23",
    },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: 1.4396948e-5,
      A6: -7.5963315e-7,
      A8: -2.2725354e-9,
      A10: 7.2019214e-10,
      A12: -2.1291689e-11,
      A14: 2.8269476e-13,
      A16: -1.4725889e-15,
    },
    "2A": {
      K: 0,
      A4: -4.0187236e-5,
      A6: -3.8178518e-7,
      A8: -5.4098636e-8,
      A10: 2.3495932e-9,
      A12: -4.916319e-11,
      A14: 4.9032401e-13,
      A16: -1.7126359e-15,
    },
    "13A": {
      K: 0,
      A4: -1.7843847e-5,
      A6: -6.5995223e-8,
      A8: 1.8437096e-9,
      A10: -2.5347955e-11,
      A12: 1.5476592e-13,
      A14: 1.1527442e-16,
      A16: -4.4874977e-18,
    },
    "14A": {
      K: 0,
      A4: 3.8791719e-5,
      A6: -1.4891402e-7,
      A8: 3.5802063e-9,
      A10: -4.1769287e-11,
      A12: 2.0464846e-13,
      A14: 6.0430443e-16,
      A16: -7.4079572e-18,
    },
    "20A": {
      K: 0,
      A4: -2.2626567e-6,
      A5: -7.0952262e-7,
      A6: 1.4860493e-7,
      A7: -4.3810692e-9,
      A8: -5.4028261e-10,
      A9: 6.3776223e-12,
      A10: 1.4554305e-12,
      A11: 3.5058198e-13,
      A12: 9.7555868e-15,
      A13: -1.7508595e-15,
      A14: -1.4774613e-17,
      A15: -1.5738626e-17,
      A16: -9.6280788e-19,
      A17: 4.3535877e-20,
      A18: 1.1041635e-20,
      A19: 2.3670175e-21,
      A20: -2.0340105e-22,
    },
    "21A": {
      K: 0,
      A4: -1.4960212e-5,
      A5: 5.0389048e-6,
      A6: -4.8304387e-7,
      A7: -8.0620131e-10,
      A8: 1.4080434e-9,
      A9: 7.9810471e-11,
      A10: 1.3654881e-12,
      A11: -5.2410713e-13,
      A12: -3.7873139e-14,
      A13: -2.0502988e-15,
      A14: 5.2818284e-17,
      A15: 1.5352864e-17,
      A16: 1.3005284e-18,
      A17: 5.0895333e-20,
      A18: -1.5766933e-21,
      A19: -2.8173143e-23,
      A20: -4.2744026e-23,
    },
  },

  /* ── Published focus endpoints ── */
  var: {
    "14A": [2.301, 10.754],
    "19": [13.21, 4.757],
  },
  varLabels: [
    ["14A", "DD14"],
    ["19", "DD19"],
  ],

  /* ── Group and cemented-component annotations ── */
  groups: [
    { text: "G1A", fromSurface: "1A", toSurface: "6" },
    { text: "G1B", fromSurface: "8", toSurface: "14A" },
    { text: "G2 FOCUS", fromSurface: "15", toSurface: "19" },
    { text: "G3", fromSurface: "20A", toSurface: "21A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus and aperture configuration ── */
  closeFocusM: 0.1,
  focusDescription: "PUBLISHED endpoints: G2 (L21-L23) moves 8.453 mm imageward; no internal focus reconstruction.",
  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
