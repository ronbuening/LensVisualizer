import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * Stop: axial station is patent-published; physical diameter is not. The stop radius is derived from the design
 * f-number (FNo=2.9), so it is an inference.
 * Semi-diameters are Table 1 effective diameters ED/2. The larger Fig. 1 mechanical rims are not optical apertures.
 * Glass: patent nd/vd is retained at the d line. Labels are coordinate classes/candidates only; supplier/melt
 * identity is unconfirmed. Table 1 thetaGF supplies dPgF directly; no catalog-derived nC/nF/ng overrides are used.
 * Aspheres: patent KA maps as K = KA - 1. All Example-1 KA values are 1, hence K=0.
 * Scale: none (s=1). Dimensions and asphere coefficients remain at patent scale.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "fujifilm-fujinon-xf-30mm-f28-r-lm-wr-macro",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro",
  subtitle: "CN 116500768 A Example 1 - strong production correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: ["11 ELEMENTS / 9 GROUPS", "DESIGN f = 29.109 mm", "DESIGN F/2.9", "6 ASPHERICAL SURFACES", "1:1 MACRO"],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 30, design: 29.10924384 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "CN 116500768 A",
    patentYear: 2023,
    authors: ["Yuya Hirakawa"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58254,
      vd: 59.44,
      indexReference: "d",
      focalLengthMm: -20.548862,
      glass: "L-BAL42 catalog proxy; 583594 low-Tg crown class (supplier unconfirmed)",
      role: "Front negative element of fixed subgroup G1A; both surfaces are aspherical.",
      diagramLabel: "L11",
      dPgF: -0.00198192, // Table 1: θgF=0.54184; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.14,
      indexReference: "d",
      focalLengthMm: -44.699621,
      glass: "516641 crown / S-BSL7-class (supplier unconfirmed)",
      role: "Second negative element of fixed subgroup G1A.",
      diagramLabel: "L12",
      dPgF: -0.00060652, // Table 1: θgF=0.53531; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconvex Positive",
      nd: 1.80611,
      vd: 33.29,
      indexReference: "d",
      focalLengthMm: 18.807929,
      glass: "J-LASFH6 catalog proxy; 806333 high-index flint class (supplier unconfirmed)",
      role: "Positive rear element of fixed subgroup G1A.",
      diagramLabel: "L13",
      dPgF: 0.00348378, // Table 1: θgF=0.59129; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 30.540834,
      glass: "497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Table 1 publishes θgF=0.53748; positive anomalous dispersion in this ED element. Supplier identity is unconfirmed.",
      role: "Front positive element of fixed subgroup G1B; one of two 497816 ED-coordinate elements.",
      diagramLabel: "L14",
      dPgF: 0.03083028, // Table 1: θgF=0.53748; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      indexReference: "d",
      focalLengthMm: -10.585567,
      glass: "770297 / NBFD29-class flint (supplier unconfirmed)",
      role: "Negative member of the cemented G1B doublet.",
      diagramLabel: "L15",
      cemented: "D1",
      dPgF: 0.00136268, // Table 1: θgF=0.59514; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 6,
      name: "L16",
      label: "L16",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 22.784496,
      glass: "497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Table 1 publishes θgF=0.53748; positive anomalous dispersion in this ED element. Supplier identity is unconfirmed.",
      role: "Positive member of the cemented G1B doublet; second 497816 ED-coordinate element.",
      diagramLabel: "L16",
      cemented: "D1",
      dPgF: 0.03083028, // Table 1: θgF=0.53748; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 7,
      name: "L17",
      label: "L17",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      focalLengthMm: 17.166701,
      glass: "694532 lanthanum crown / M-LAC130-class (supplier unconfirmed)",
      role: "Rear positive element of fixed subgroup G1B; both surfaces are aspherical.",
      diagramLabel: "L17",
      dPgF: -0.00770760, // Table 1: θgF=0.54661; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 8,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.98613,
      vd: 16.48,
      indexReference: "d",
      focalLengthMm: 56.77069,
      glass: "986165 high-index flint / FDS16-W-class (supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Table 1 publishes θgF=0.66558; positive partial-dispersion deviation in a high-dispersion flint, not an ED glass.",
      role: "Front positive element of the translating G2 focus group.",
      diagramLabel: "L21",
      dPgF: 0.04949936, // Table 1: θgF=0.66558; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 9,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 32.17,
      indexReference: "d",
      focalLengthMm: 73.89863,
      glass: "673322 dense flint / H-ZF2-class (supplier unconfirmed)",
      role: "Positive member of the cemented G2 doublet.",
      diagramLabel: "L22",
      cemented: "D2",
      dPgF: 0.00855994, // Table 1: θgF=0.59825; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 10,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 39.22,
      indexReference: "d",
      focalLengthMm: -12.612466,
      glass: "883392 lanthanum flint / H-ZLaF68N-class (supplier unconfirmed)",
      role: "Negative member of the cemented G2 doublet.",
      diagramLabel: "L23",
      cemented: "D2",
      dPgF: -0.00495196, // Table 1: θgF=0.57288; ΔPgF=θgF−(0.6438−0.001682νd).
    },
    {
      id: 11,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      indexReference: "d",
      focalLengthMm: 60.767271,
      glass: "L-BSL7 catalog proxy (low-Tg crown; supplier unconfirmed)",
      role: "Fixed positive G3 field-side element; both surfaces are aspherical.",
      diagramLabel: "L31",
      dPgF: -0.00260108, // Table 1: θgF=0.53345; ΔPgF=θgF−(0.6438−0.001682νd).
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    {
      label: "1A",
      R: 259.44525,
      d: 1,
      sd: 7.3,
      medium: 1,
      asphere: {
        K: 0,
        A4: 1.4396948e-5,
        A6: -7.5963315e-7,
        A8: -2.2725354e-9,
        A10: 7.2019214e-10,
        A12: -2.1291689e-11,
        A14: 2.8269476e-13,
        A16: -1.4725889e-15,
      },
    },
    {
      label: "2A",
      R: 11.42635,
      d: 2.89,
      sd: 6.5,
      asphere: {
        K: 0,
        A4: -4.0187236e-5,
        A6: -3.8178518e-7,
        A8: -5.4098636e-8,
        A10: 2.3495932e-9,
        A12: -4.916319e-11,
        A14: 4.9032401e-13,
        A16: -1.7126359e-15,
      },
    },
    { label: "3", R: 95.17947, d: 1.13, sd: 6.45, medium: 2 },
    { label: "4", R: 18.50036, d: 1, sd: 6.35 },
    { label: "5", R: 18.74098, d: 3.75, sd: 6.795, medium: 3 },
    { label: "6", R: -72.28533, d: 2, sd: 6.815 },
    { label: "STO", R: "flat", d: 6.69 },
    { label: "8", R: 79.8183, d: 3.71, sd: 6.965, medium: 4 },
    { label: "9", R: -18.45388, d: 1.87, sd: 6.955 },
    { label: "10", R: -11.37137, d: 1, sd: 6.725, medium: 5 },
    { label: "11", R: 29.9463, d: 4.71, sd: 7.555, medium: 6 },
    { label: "12", R: -17.25886, d: 0.53, sd: 8.065 },
    {
      label: "13A",
      R: 40.08092,
      d: 5.01,
      sd: 8.7,
      medium: 7,
      asphere: {
        K: 0,
        A4: -1.7843847e-5,
        A6: -6.5995223e-8,
        A8: 1.8437096e-9,
        A10: -2.5347955e-11,
        A12: 1.5476592e-13,
        A14: 1.1527442e-16,
        A16: -4.4874977e-18,
      },
    },
    {
      label: "14A",
      R: -16.06849,
      sd: 9.005,
      asphere: {
        K: 0,
        A4: 3.8791719e-5,
        A6: -1.4891402e-7,
        A8: 3.5802063e-9,
        A10: -4.1769287e-11,
        A12: 2.0464846e-13,
        A14: 6.0430443e-16,
        A16: -7.4079572e-18,
      },
    },
    { label: "15", R: 1355.62916, d: 2, sd: 8.38, medium: 8 },
    { label: "16", R: -58.35203, d: 0.5, sd: 8.29 },
    { label: "17", R: -80.63177, d: 1.71, sd: 8.095, medium: 9 },
    { label: "18", R: -31.0144, d: 0.85, sd: 7.96, medium: 10 },
    { label: "19", R: 17.59974, sd: 7.68 },
    {
      label: "20A",
      R: -362.90949,
      d: 4.47,
      sd: 11.29,
      medium: 11,
      asphere: {
        K: 0,
        A4: -2.2626567e-6,
        A6: 1.4860493e-7,
        A8: -5.4028261e-10,
        A10: 1.4554305e-12,
        A12: 9.7555868e-15,
        A14: -1.4774613e-17,
        A16: -9.6280788e-19,
        A18: 1.1041635e-20,
        A20: -2.0340105e-22,
        A5: -7.0952262e-7,
        A7: -4.3810692e-9,
        A9: 6.3776223e-12,
        A11: 3.5058198e-13,
        A13: -1.7508595e-15,
        A15: -1.5738626e-17,
        A17: 4.3535877e-20,
        A19: 2.3670175e-21,
      },
    },
    {
      label: "21A",
      R: -29.00029,
      d: 17.731,
      sd: 11.745,
      asphere: {
        K: 0,
        A4: -1.4960212e-5,
        A6: -4.8304387e-7,
        A8: 1.4080434e-9,
        A10: 1.3654881e-12,
        A12: -3.7873139e-14,
        A14: 5.2818284e-17,
        A16: 1.3005284e-18,
        A18: -1.5766933e-21,
        A20: -4.2744026e-23,
        A5: 5.0389048e-6,
        A7: -8.0620131e-10,
        A9: 7.9810471e-11,
        A11: -5.2410713e-13,
        A13: -2.0502988e-15,
        A15: 1.5352864e-17,
        A17: 5.0895333e-20,
        A19: -2.8173143e-23,
      },
    }, // patent D21: gap to PP
  ],

  /* ── Focus and aperture configuration ── */
  focus: {
    closeFocusM: 0.1,
    description: "PUBLISHED endpoints: G2 (L21-L23) moves 8.453 mm imageward; no internal focus reconstruction.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus endpoints ── */
  gaps: { "14A": { label: "DD14", values: [[2.301, 10.754]] }, "19": { label: "DD19", values: [[13.21, 4.757]] } },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

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

  /* ── Layout tuning ── */
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
