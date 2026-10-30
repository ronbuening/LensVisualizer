import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Original source: US 2019/0041605 A1, Example 4 / Numerical Data 4, PDF p. 14 (printed p. 7).
 * Matching Fig. 4A is PDF p. 5, sheet 4. Original shape/glass review: 2026-10-30.
 * Native 2560×3300 bitmap at 300 ppi; optical section about 3.125 px/mm, practical ±0.8 mm rim uncertainty.
 * The 600 dpi historical renders and current 2×/4× reading crops are enlargements, not native extra resolution.
 * All 31 source R/d rows, stop, aperture and reconstructed L2 focus keyframes remain unchanged.
 * The source includes 16 powered lenses plus required G filter: 17 elements / 13 groups, now counted in catalog metadata.
 * G is a drawn 2.20 mm plate, 5.25 mm after R29 with 73.90 mm following air. No source filter is omitted.
 *
 * Source material reference is explicit: paragraph 0032 defines Nd/NF/NC/Ng and nu-d/theta-gF; paragraph 0027
 * prints d=587.56, g=435.835, C=656.27 and F=486.13 nm. Every literal nd/nu-d/theta-gF row is retained,
 * including G. All 17 genuine source-derived dPgF fields remain; no absolute nC/nF/ng is invented.
 * Conversion uses the repository normal line 0.6438−0.001682*nu-d, not a patent-specific deviation.
 * Compatible curves are qualified spectral proxies, not identification of historical supplier, melt or chemistry.
 * Product fluorite/Super UD associations and APD tags remain explicitly inferred; the source names no such material.
 *
 * Nineteen cap corrections and two resolved outer shoulders follow original optical rims, excluding labels,
 * leaders, arrows, rays and brackets. S22/S23 keep clear sd 14.6/14.5 with outer 16.1/15.5; no bonded land is added.
 * Default gap guard 0.90 is unchanged. Full blank-height air-lens caps fail it, and full 33 mm E6/E7 blanks cross.
 * No source R/d, cut, stop, cam or tolerance is tuned to fit the figure or a source-summary value.
 *
 * Source.errata retains unresolved conditions (5)/(12) and nearly afocal L3-power contradictions, with exact source refs.
 * A matching unprinted d24 trial is only a rejected sensitivity hypothesis; printed 3.79 mm remains.
 * Source infinity surface/aperture/field checks pass. All 101 sampled axial focus pupils and chiefs clear;
 * 401 off-axis noBracket entries analytically meet the first sphere outside its clear cap. No inside-cap miss is unexplained.
 * Every one of 201 focus states has 17 finite connected contours and zero hidden renderer trimming.
 * Focus remains CONSTRAINED_RECONSTRUCTION; actual close conjugate 4200.271808 mm is not a published finite state.
 * Only centered IS is authored; moved-state and attached-converter clearance remain unverified.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-600f4l-is-iii-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS III USM",
  subtitle: "US 2019/0041605 A1 Example 4 — production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 elements / 13 groups including required G filter",
      "600mm f/4 MARKETED",
      "f ≈ 587.93 mm / F4.12 DESIGN",
      "2ω ≈ 4.22°",
      "2 FLUORITE + 1 SUPER UD",
      "ALL-SPHERICAL",
      "INNER FOCUS / IS",
    ],
    elementCount: 17,
    groupCount: 13,
    focalLengthMm: { marketing: 600, design: 587.932441008 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2019/0041605 A1",
    example: { label: "Example 4", id: "4" },
    patentYear: 2019,
    authors: ["Shinichiro Saito", "Makoto Nakahara"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Table 1 (PDF p. 15, printed p. 8) condition (5) gives 0.772 for fG1P/f1; literal Numerical Data 4 (PDF p. 14) gives fG1P=453.812077 mm and f1=237.937023 mm, hence 1.907278. The printed definition in paragraphs 0048/0051 and claim 3 (PDF pp. 11 and 16) uses the unit f1 denominator; dividing by system f≈588 instead reproduces 0.772, but no definition or source prescription is changed. Table 1 also gives fG1N=-187.104 mm and condition (12)=2.425, while source surfaces 5–6 give -109.711528 mm and |fG1P/fG1N|=4.136412. The table value resembles negative E2 power; the unique cause is not established. Source R/d is retained.",
      },
      {
        status: "unresolved",
        note: "Numerical Data 4 unit-data row (PDF p. 14) prints L3 focal length -47873.47 mm; literal surfaces 17–29 give -50069.950197 mm. An unprinted d24≈3.785210 mm inside the interval that rounds to 3.79 matches the stated group power, but that sensitivity trial does not prove the historical value or isolate a source error. The printed 3.79 mm and every source radius/spacing remain unchanged.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: 453.812077,
      glass: "PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E1",
      dPgF: 0.004994,
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 187.103675,
      glass: "Fluorite (CaF2 spectral proxy; historical material and supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified product fluorite association; historical chemistry unresolved; published source θgF = 0.5373 gives ΔPgF = +0.05345820.",
      diagramLabel: "E2",
      dPgF: 0.0534582,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -109.711528,
      glass: "NBFD15-W (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E3",
      dPgF: 0.00026014,
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 281.94187,
      glass: "Fluorite (CaF2 spectral proxy; historical material and supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified product fluorite association; historical chemistry unresolved; published source θgF = 0.5373 gives ΔPgF = +0.05345820.",
      diagramLabel: "E4",
      dPgF: 0.0534582,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.88,
      focalLengthMm: 166.944809,
      glass: "S-NPH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E5",
      dPgF: 0.01816616,
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -89.468882,
      glass: "N-LASF44 (SCHOTT) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E6",
      cemented: "E6-E7",
      dPgF: -0.008387,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 109.196204,
      glass:
        "437951 ultra-low-dispersion class; FCD100 (HOYA) spectral proxy; historical chemistry, supplier and melt unspecified",
      apd: "inferred",
      apdNote:
        "Qualified product Super UD association; historical chemistry unresolved; published source θgF = 0.5326 gives ΔPgF = +0.04875820.",
      diagramLabel: "E7",
      cemented: "E6-E7",
      dPgF: 0.0487582,
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8 / L2 focus unit",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: -120.515837,
      glass: "PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E8",
      dPgF: 0.004994,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: -81.408919,
      glass: "S-NPH4 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E9",
      cemented: "E9-E10",
      dPgF: 0.02974552,
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: 63.382733,
      glass: "S-NBH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E10",
      cemented: "E9-E10",
      dPgF: 0.00036132,
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 57.478514,
      glass: "FD60-W (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E11",
      cemented: "E11-E12",
      dPgF: 0.01462372,
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: -51.60495,
      glass: "PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E12",
      cemented: "E11-E12",
      dPgF: 0.004994,
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: -56.987445,
      glass: "S-LAH59 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E13",
      dPgF: -0.00858516,
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 82.602886,
      glass: "S-NBH56 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E14",
      dPgF: 0.0101136,
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: 55.385866,
      glass: "H-ZBaF4 spectral proxy (compatible coordinates; historical material and supplier unspecified)",
      diagramLabel: "E15",
      cemented: "E15-E16",
      dPgF: -0.00145352,
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: -59.583092,
      glass: "S-NPH4 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      diagramLabel: "E16",
      cemented: "E15-E16",
      dPgF: 0.02974552,
    },
    {
      id: 17,
      name: "G",
      label: "Drop-in filter G",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Plane-parallel filter plate of the patent prescription (US 2019/0041605 A1, Numerical Data 4 surfaces 30–31; patent θgF 0.5353), in the rear drop-in filter holder. The patent states the last two surfaces of each example are a glass block such as a filter; Canon counts it in the production lens.",
      diagramLabel: "G",
      dPgF: -0.00062,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 285.176, d: 12.69, sd: 74, medium: 1 },
    { label: "2", R: -4767.657, d: 161.04, sd: 74 },
    { label: "3", R: 122.017, d: 15.58, sd: 45.5, medium: 2 },
    { label: "4", R: -233.175, d: 0.0, sd: 44.8 },
    { label: "5", R: -238.384, d: 1.6, sd: 44.8, medium: 3 },
    { label: "6", R: 141.021, d: 0.15, sd: 44.5 },
    { label: "7", R: 93.182, d: 10.34, sd: 43, medium: 4 },
    { label: "8", R: 377.979, d: 45.03, sd: 43 },
    { label: "9", R: 80.811, d: 5.76, sd: 33.2, medium: 5 },
    { label: "10", R: 182.524, d: 0.15, sd: 33.2 },
    { label: "11", R: 120.397, d: 2.0, sd: 32.5, medium: 6 },
    { label: "12", R: 44.703, d: 13.45, sd: 32.5, medium: 7 },
    { label: "13", R: 642.625, d: 15.35, sd: 32.4 },
    { label: "STO", R: "flat" },
    { label: "15", R: 491.75, d: 1.6, sd: 22.5, medium: 8 },
    { label: "16", R: 62.367, sd: 22.5 },
    { label: "17", R: 325.083, d: 1.5, sd: 17.5, medium: 9 },
    { label: "18", R: 59.275, d: 4.64, sd: 17.5, medium: 10 },
    { label: "19", R: -214.466, d: 1.0, sd: 17.5 },
    { label: "20", R: 74.22, d: 4.0, sd: 16.1, medium: 11 },
    { label: "21", R: -119.987, d: 1.3, sd: 16.1, medium: 12 },
    { label: "22", R: 41.29, d: 4.13, sd: 14.6, rimExtensionSd: 16.1 },
    { label: "23", R: -102.097, d: 1.3, sd: 14.5, rimExtensionSd: 15.5, medium: 13 },
    { label: "24", R: 85.886, d: 3.79, sd: 15.5 },
    { label: "25", R: 68.86, d: 5.13, sd: 15.2, medium: 14 },
    { label: "26", R: 2687.062, d: 30.08, sd: 15.2 },
    { label: "27", R: 99.601, d: 9.53, sd: 18, medium: 15 },
    { label: "28", R: -56.296, d: 1.5, sd: 18, medium: 16 },
    { label: "29", R: 979.304, d: 5.25, sd: 18 },
    // Drop-in filter G (US 2019/0041605 A1, Numerical Data 4 surfaces 30–31), drawn as a plane-parallel plate.
    // Its inferred 22 mm sd follows native Fig. 4A; the numerical table lists none.
    { label: "30", R: "flat", d: 2.2, sd: 22, medium: 17 },
    { label: "31", R: "flat", d: 73.9, sd: 22 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 4.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: E8/L2 (surfaces 15–16) translates 18.906939851 mm imageward from infinity to the modeled 4.2 m MFD. The STO→15 gap changes 3.49→22.396939851 mm and d16 changes 38.06→19.153060149 mm, preserving their 41.55 mm sum and the fixed image plane. The patent publishes no finite-focus spacing row; the reconstruction is solved from Canon's MFD and independently cross-checks at |m|=0.149215 versus the marketed 0.15×.",
  },

  /* (moved from var) ── Variable air spacings: infinity → reconstructed 4.2 m MFD ── */
  gaps: {
    STO: { label: "D14", values: [[3.49, 22.396939851]] },
    "16": { label: "D16", values: [[38.06, 19.153060149]] },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "13" },
    { text: "L2 FOCUS (−)", fromSurface: "15", toSurface: "16" },
    { text: "L3A (+)", fromSurface: "17", toSurface: "19" },
    { text: "L3B IS (−)", fromSurface: "20", toSurface: "22" },
    { text: "L3C", fromSurface: "23", toSurface: "29" },
  ],
  doublets: [
    { text: "E6-E7", fromSurface: "11", toSurface: "13" },
    { text: "E9-E10", fromSurface: "17", toSurface: "19" },
    { text: "E11-E12", fromSurface: "20", toSurface: "22" },
    { text: "E15-E16", fromSurface: "27", toSurface: "29" },
  ],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
