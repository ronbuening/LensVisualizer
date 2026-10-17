import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FUJINON XF23mmF1.4 R LM WR
 *
 * Data source: US 2022/0276464 A1, Example 7 (FUJIFILM Corporation).
 * Original patent prescription: f = 23.623313748 mm, Bf = 14.562656 mm air-equivalent, FNo = 1.44.
 * Scale: all radii, thicknesses, semi-diameters, and aspherical polynomial coefficients were uniformly scaled by 0.973614465993
 * to match the manufacturer-published 23 mm focal length. Refractive indices and Abbe numbers are unchanged.
 *
 * Parallel-plate optical member PP (patent Table 25 surfaces 27-28: 2.8500 mm, nd 1.51680, νd 64.20) and its
 * 0.2112 mm gap to the image are modeled in `rearPlates` (traced, not drawn), scaled by the same factor as the lens.
 * Surface 26A keeps the patent's 12.4725 mm gap to PP (12.143406 mm scaled).
 *
 * Semi-diameters are estimated from an independent paraxial marginal/chief-ray envelope at f/1.4 and the patent
 * 33.8° half-field, then adjusted for smooth element apertures and checked against edge-thickness and air-gap
 * sag-intrusion constraints. The front diameter is also consistent with the 58 mm filter-thread class.
 *
 * Surfaces 21A, 22A, 25A, and 26A store the exact Example 7 odd/even asphere polynomials through A14.
 * Because the prescription is scaled by s = 0.973614465993, each patent coefficient is transformed with
 * A_n(scaled) = A_n(patent) / s^(n-1). The patent's KA = 1 converts to the standard conic constant K = 0.
 *
 * Partial dispersion: the patent tabulates only Nd and νd and states no partial-dispersion formula or normal line of
 * its own. `dPgF` on the three FCD505 elements is therefore catalog-derived: PgF of the repo's HOYA FCD505 catalog
 * curve (0.544337) minus the engine's normal line (0.6438 − 0.001682·νd) = +0.015956. HOYA's catalog ΔPg,F (+0.0194)
 * is taken against HOYA's own normal line (through C7 and F2, about 0.6484 − 0.0018·νd) and is not stored.
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-xf-23mm-f14-r-lm-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 23mm f/1.4 R LM WR",
  subtitle: "US 2022/0276464 A1 Example 7 — scaled to 23 mm",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "15 elements / 10 groups",
      "Patent f = 23.62 mm scaled to 23.00 mm",
      "F1.4 nominal / patent FNo 1.44",
      "2 aspherical elements / 3 ED elements",
      "Inner focus: G2 moves objectward",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: 23, design: 23 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "US 2022/0276464 A1",
    patentYear: 2022,
    authors: ["Taiga Noda", "Ryoko Tomioka"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Biconcave Negative",
      nd: 1.53996,
      vd: 59.73,
      focalLengthMm: -70.881,
      glass: "BAK2 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Front weak negative collector; opens the wide-angle ray bundle.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 98.211,
      glass: "S-LAH58-class lanthanum dense flint",
      apd: false,
      role: "High-index positive member of the front cemented doublet.",
      cemented: "D12-13",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: -23.448,
      glass: "S-NPH1 (OHARA) / 808-228 short flint",
      apd: "inferred",
      role: "High-dispersion negative member of the front cemented doublet.",
      cemented: "D12-13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 31.446,
      glass: "S-LAH58-class lanthanum dense flint",
      apd: false,
      role: "Front positive member of the cemented triplet.",
      cemented: "T14-16",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: -24.957,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "Central negative flint member of the cemented triplet.",
      cemented: "T14-16",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 29.697,
      glass: "S-LAH58-class lanthanum dense flint",
      apd: false,
      role: "Rear positive member of the cemented triplet.",
      cemented: "T14-16",
    },
    {
      id: 7,
      name: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.95906,
      vd: 17.47,
      focalLengthMm: 52.828,
      glass: "S-NPH3 (OHARA) / 959-175 short flint",
      apd: "inferred",
      role: "High-index, high-dispersion rear G1 positive.",
    },
    {
      id: 8,
      name: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 25.84,
      glass: "FCD505 (HOYA) ED fluorophosphate crown",
      apd: "inferred",
      apdNote:
        "Catalog-derived (patent lists only nd and νd): the repo's HOYA FCD505 catalog curve gives PgF = 0.5443, runtime dPgF +0.01596; HOYA's catalog ΔPgF +0.0194 is on HOYA's own line.",
      role: "ED positive at G2 entrance.",
      cemented: "D21-22",
      dPgF: 0.015956,
    },
    {
      id: 9,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.85,
      focalLengthMm: -27.304,
      glass: "S-TIL6-class light flint",
      apd: false,
      role: "Negative partner of the first G2 achromat.",
      cemented: "D21-22",
    },
    {
      id: 10,
      name: "L23",
      label: "Element L23",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.51,
      focalLengthMm: -17.251,
      glass: "S-TIH1-class dense flint",
      apd: false,
      role: "Ln lens: strongest negative lens in G2.",
      cemented: "D23-24",
    },
    {
      id: 11,
      name: "L24",
      label: "Element L24",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.53,
      focalLengthMm: 44.339,
      glass: "S-LAL14 (OHARA) lanthanum crown",
      apd: false,
      role: "Positive partner of the second G2 cemented doublet.",
      cemented: "D23-24",
    },
    {
      id: 12,
      name: "L25",
      label: "Element L25",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 22.676,
      glass: "FCD505 (HOYA) ED fluorophosphate crown",
      apd: "inferred",
      apdNote:
        "Catalog-derived (patent lists only nd and νd): the repo's HOYA FCD505 catalog curve gives PgF = 0.5443, runtime dPgF +0.01596; HOYA's catalog ΔPgF +0.0194 is on HOYA's own line.",
      role: "Lp lens: strongest positive lens in G2.",
      dPgF: 0.015956,
    },
    {
      id: 13,
      name: "L26",
      label: "Element L26",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 90.027,
      glass: "NBFD13 / M-NBFD130 (HOYA, 806407 code)",
      apd: false,
      role: "Aspherical positive exit member of the moving focus group.",
    },
    {
      id: 14,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 56.305,
      glass: "FCD505 (HOYA) ED fluorophosphate crown",
      apd: "inferred",
      apdNote:
        "Catalog-derived (patent lists only nd and νd): the repo's HOYA FCD505 catalog curve gives PgF = 0.5443, runtime dPgF +0.01596; HOYA's catalog ΔPgF +0.0194 is on HOYA's own line.",
      role: "Stationary rear-group ED positive.",
      dPgF: 0.015956,
    },
    {
      id: 15,
      name: "L32",
      label: "Element L32",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.68863,
      vd: 31.2,
      focalLengthMm: -39.726,
      glass: "M-FD80-class / 689-312 moldable dense flint (HOYA; patent melt offset)",
      apd: false,
      role: "Aspherical rear negative field-flattening element.",
    },
  ],

  surfaces: [
    { label: "1", R: -864.06103, d: 1.022295, sd: 17.71978, medium: 1 },
    { label: "2", R: 40.063651, d: 5.90984, sd: 14.31213 },
    { label: "3", R: -40.063651, d: 2.823482, sd: 14.31213, medium: 2 },
    { label: "4", R: -28.309204, d: 1.178074, sd: 14.11741, medium: 3 },
    { label: "5", R: 58.366727, d: 2.365883, sd: 13.6306 },
    { label: "6", R: 373.36226, d: 5.072531, sd: 13.6306, medium: 4 },
    { label: "7", R: -29.806428, d: 1.207282, sd: 13.6306, medium: 5 },
    { label: "8", R: 29.806428, d: 5.140684, sd: 13.6306, medium: 6 },
    { label: "9", R: -200.459722, d: 1.86934, sd: 13.6306 },
    { label: "10", R: 55.820336, d: 2.998733, sd: 14.60422, medium: 7 },
    { label: "11", R: -534.216805, d: 4.410474, sd: 14.60422 },
    { label: "STO", R: "flat" },
    { label: "13", R: 19.807407, d: 5.549602, sd: 11.68337, medium: 8 },
    { label: "14", R: -60.540418, d: 0.983351, sd: 10.80712, medium: 9 },
    { label: "15", R: 19.205811, d: 4.80138, sd: 8.66517 },
    { label: "16", R: -18.017028, d: 0.876253, sd: 8.66517, medium: 10 },
    { label: "17", R: 40.325164, d: 2.706648, sd: 10.80712, medium: 11 },
    { label: "18", R: -128.482157, d: 0.194723, sd: 11.8781 },
    { label: "19", R: 25.623391, d: 6.4648, sd: 11.8781, medium: 12 },
    { label: "20", R: -25.623391, d: 1.178074, sd: 11.8781 },
    {
      label: "21A",
      R: -46.552013,
      d: 2.67744,
      sd: 11.8781,
      medium: 13,
      asphere: {
        K: 0,
        A4: -2.805217683e-5,
        A6: 4.534993715e-6,
        A8: -4.381931323e-8,
        A10: -1.13044516e-10,
        A12: 3.352098366e-12,
        A14: -1.218420438e-14,
        A5: -1.444804954e-5,
        A7: -3.909887031e-7,
        A9: 1.03426255e-8,
        A11: -8.07775542e-11,
        A13: 2.12716325e-13,
      },
    },
    {
      label: "22A",
      R: -29.087901,
      sd: 11.8781,
      asphere: {
        K: 0,
        A4: 4.20154988e-5,
        A6: 7.209763619e-6,
        A8: -8.804103687e-8,
        A10: 7.430814942e-11,
        A12: 3.885401531e-12,
        A14: -1.60541337e-14,
        A5: -2.794696596e-5,
        A7: -4.486158984e-7,
        A9: 1.453661387e-8,
        A11: -1.180941808e-10,
        A13: 3.148588608e-13,
      },
    },
    { label: "23", R: 40.831249, d: 3.378442, sd: 13.1438, medium: 14 },
    { label: "24", R: -177.253231, d: 0.166001, sd: 11.97546 },
    {
      label: "25A",
      R: -94.043271,
      d: 1.557783,
      sd: 11.97546,
      medium: 15,
      asphere: {
        K: 0,
        A4: 7.840922554e-6,
        A6: -2.495554197e-7,
        A8: 4.767962641e-8,
        A10: -5.693774071e-10,
        A12: 1.899443907e-12,
        A14: 2.301794651e-17,
        A5: 5.591049839e-6,
        A7: -3.211607898e-7,
        A9: 1.328583384e-9,
        A11: 1.579131652e-11,
        A13: -9.23316047e-14,
      },
    },
    {
      label: "26A",
      R: 38.839234,
      d: 12.143406,
      sd: 11.97546,
      asphere: {
        K: 0,
        A4: -2.968432416e-5,
        A6: -1.164984047e-5,
        A8: -6.629475514e-9,
        A10: 1.303481796e-9,
        A12: -4.508891924e-12,
        A14: -9.758991831e-15,
        A5: 4.089526821e-5,
        A7: 1.324433476e-6,
        A9: -1.34354684e-8,
        A11: -2.45308965e-11,
        A13: 3.789969607e-13,
      },
    },
  ],

  focus: {
    closeFocusM: 0.19,
    description:
      "Inner focus: G2 (surfaces 13-22A) translates objectward as a unit; G1, the stop, and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    STO: { label: "St→G2", values: [[6.912663, 2.298022]] },
    "22A": { label: "G2→G3", values: [[1.703825, 6.318466]] },
  },

  aperture: { nominalFNumber: 1.44, fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  /* ── Optical member PP (patent Table 25 surfaces 27–28, scaled by s): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.774801,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.205627,
      source: "US 2022/0276464 A1, Example 7 Table 25 surfaces 27–28 (2.8500 / 0.2112 mm, scaled by 0.973614465993)",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 IF", fromSurface: "13", toSurface: "22A" },
    { text: "G3", fromSurface: "23", toSurface: "26A" },
  ],
  doublets: [
    { text: "D12-13", fromSurface: "3", toSurface: "5" },
    { text: "T14-16", fromSurface: "6", toSurface: "9" },
    { text: "D21-22", fromSurface: "13", toSurface: "15" },
    { text: "D23-24", fromSurface: "16", toSurface: "18" },
  ],

  layout: { scFill: 0.56, yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
