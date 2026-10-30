import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2011/0286116 A1, Embodiment 1: 14 glass elements / 10 groups, all spherical.
 * Fresh source review 2026-10-30: Figure 1A/B (PDF 2), media and d-line definition
 * in paragraphs 0045-46 (PDF 12). Native R/d and three focus states retained.
 * Product correlation stays qualified: G005 marks physical L2/L4 as LD, whereas
 * this example's high-Abbe positives are L3/L5. No factory formula identity.
 * Source object:image 5:1 is 0.2x, followed by 1:1; no 5x macro claim.
 * Original figure rims replace the old maker/ray-only sizing basis. Existing front
 * caps already exceed the schematic body. Rear caps grow to 15 mm (S16/17) and
 * 14.5 mm (S18-25). S7's inferred concave end cut is 1.85 mm deep, outer 17.2 mm;
 * its measured cap is moved outward for full beams. Unknown clear apertures remain
 * visualization estimates, not manufacturing data.
 * All 14 nd/vd pairs remain source d-line values (vd printed to one decimal).
 * Remove 56 catalog-only C/F/g/dPgF copies; no such source anchors or individual
 * APD designation exists. Qualified FCD1 proxies at L3/L5 and TAF1 at L10 improve
 * current coordinate agreement. Other compatible curves remain. Supplier/melt
 * unproved. Stop, focus, image plane and tolerances unchanged; no new plates.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-sp-af-60mm-f2-di-ii-macro",
  maker: "Tamron",
  name: "TAMRON SP AF 60mm f/2 Di II LD [IF] MACRO 1:1 (G005)",
  subtitle: "US 2011/0286116 A1 EMBODIMENT 1 — PATENT PROXY",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "aps-c",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "60mm f/2 (MARKETED)",
      "f = 61.500mm, FNO. = 2.06 (PATENT)",
      "2ω = 26.6°",
      "1:1 INNER FOCUS",
      "ALL SPHERICAL",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: 60, design: 61.4996 },
    fNumber: { marketing: 2, design: 2.06 },
  },

  source: {
    patentNumber: "US 2011/0286116 A1",
    example: { label: "Embodiment 1", id: "1" },
    patentYear: 2011,
    authors: ["Kaori Shimizu", "Hisayuki Yamanaka"],
    assignees: ["Tamron Co., Ltd."],
  },

  /* ── Elements ──
   * Focal lengths are standalone, in-air thick-element values. For cemented
   * assemblies, these values are not the same as each component's in-situ
   * contribution; the net assembly powers are documented in the analysis.
   * No per-element spectral indices are published; qualified current coefficient curves supply dispersion.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: 150.168,
      glass: "NBFD15 (HOYA)",
      role: "Weak front positive collector; high index limits curvature for its power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: 103.947,
      glass: "S-LAH53 (OHARA)",
      role: "Second positive collector in the fixed first group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 58.696,
      glass: "FCD1 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified FCD1 coefficient proxy; patent lists only nd/νd and no individual anomalous-material designation. Production LD slots differ from the patent; no supplier or melt identity inferred.",
      role: "Low-dispersion positive member of the first-group cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -41.996,
      glass: "S-TIH4 (OHARA)",
      role: "High-dispersion negative partner in the first-group cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 64.788,
      glass: "FCD1 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified FCD1 coefficient proxy; patent lists only nd/νd and no individual anomalous-material designation. Production LD slots differ from the patent; no supplier or melt identity inferred.",
      role: "Second low-dispersion positive element in the fixed first group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -25.569,
      glass: "S-LAH65V (OHARA)",
      role: "Primary negative singlet of the imageward-moving second group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -36.4,
      glass: "BSC7 (HOYA)",
      role: "Negative crown member of the second-group cemented pair.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 38.733,
      glass: "S-TIH53 (OHARA)",
      role: "Positive high-dispersion member that nearly neutralizes D2's net power.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 59.524,
      glass: "S-LAL14 (OHARA)",
      role: "Leading positive singlet of the objectward-moving third group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 34.086,
      glass: "TAF1 (HOYA catalog-equivalent; production supplier unspecified)",
      role: "Strong positive member of the third-group cemented doublet.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -27.009,
      glass: "S-TIH10 (OHARA)",
      role: "Negative high-dispersion partner in the third-group cemented doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 43.597,
      glass: "S-LAL14 (OHARA)",
      role: "Trailing positive singlet of the third group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -46.016,
      glass: "S-TIL2 (OHARA)",
      role: "Negative member of the fixed trailing cemented group.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 99.465,
      glass: "S-TIH53 (OHARA)",
      role: "Positive high-dispersion member of the fixed negative trailing group.",
      cemented: "D4",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 607.1412, d: 2.8588, sd: 22.5, medium: 1 },
    { label: "2", R: -150.8774, d: 0.2, sd: 22.5 },
    { label: "3", R: 106.5613, d: 3.2664, sd: 20.8, medium: 2 },
    { label: "4", R: -386.7796, d: 0.2, sd: 20.8 },
    { label: "5", R: 52.1704, d: 5.9043, sd: 17.2, medium: 3 },
    { label: "6", R: -63.6877, d: 1.2, sd: 17.2, medium: 4 },
    { label: "7", R: 63.6877, d: 0.2, sd: 17.2, rimCutDepthMm: 1.85 },
    { label: "8", R: 33.344, d: 4.0301, sd: 14.5, medium: 5 },
    { label: "9", R: -900.5149, sd: 14.5 },
    { label: "10", R: -141.8233, d: 1.2, sd: 12.0, medium: 6 },
    { label: "11", R: 24.1327, d: 3.7206, sd: 10.3 },
    { label: "12", R: -53.8762, d: 1, sd: 10.3, medium: 7 },
    { label: "13", R: 29.0865, d: 3.3409, sd: 12.0, medium: 8 },
    { label: "14", R: 243.7428, sd: 12.0 },
    { label: "STO", R: "flat" },
    { label: "16", R: 229.923, d: 3.862, sd: 15, medium: 9 },
    { label: "17", R: -50.2559, d: 0.2, sd: 15 },
    { label: "18", R: 62.0642, d: 5.3744, sd: 14.5, medium: 10 },
    { label: "19", R: -44.0094, d: 1.2, sd: 14.5, medium: 11 },
    { label: "20", R: 35.9734, d: 1.69, sd: 14.5 },
    { label: "21", R: 45.2188, d: 4.7774, sd: 14.5, medium: 12 },
    { label: "22", R: -88.548, sd: 14.5 },
    { label: "23", R: -58.5066, d: 1, sd: 14.5, medium: 13 },
    { label: "24", R: 43.5528, d: 2.321, sd: 14.5, medium: 14 },
    { label: "25", R: 88, d: 41.7724, sd: 14.5 },
  ],

  focus: {
    closeFocusM: 0.23,
    /* Patent keyframes: infinity, object:image 5:1 (0.2x), and 1:1. */
    keyframes: [0, 0.5039200468308941, 1],
    description:
      "Inner focus: G1 and G4 remain fixed; G2 travels 15.8404 mm imageward and G3 travels 11.7179 mm objectward from infinity to 1:1; the stop remains fixed.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "9": { label: "D(9)", values: [[1.5848, 4.6948, 17.4252]] },
    "14": { label: "D(14)", values: [[17.2873, 14.1774, 1.447]] },
    STO: { label: "D(15)", values: [[13.2179, 10.5905, 1.5]] },
    "22": { label: "D(22)", values: [[1.8205, 4.4479, 13.5384]] },
  },

  aperture: { nominalFNumber: 2.06, fStops: [2.06, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G1 (+) FIXED", fromSurface: "1", toSurface: "9" },
    { text: "G2 (-) FOCUS", fromSurface: "10", toSurface: "14" },
    { text: "G3 (+) FOCUS", fromSurface: "16", toSurface: "22" },
    { text: "G4 (-) FIXED", fromSurface: "23", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  layout: { scFill: 0.62, yScFill: 0.5 },

  /* Tight patent clearances require a conservative representative off-axis fan. */
  rays: { offAxisFieldFrac: 0.35, offAxisFractions: [-0.65, -0.325, 0, 0.325, 0.65] },
} satisfies LensDataV2Input;

export default LENS_DATA;
