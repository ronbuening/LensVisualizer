import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * WO 2023/190222 A1, Example 1, Table 1 (PDF pp. 35–36), Figure 1 (p. 63).
 * Eight physical elements in six air-separated components; four optical sections.
 * L8 resin and glass are separate modeled media belonging to one composite element.
 * Source conic coefficient is 1+standard K; all published polynomial terms retained.
 * Optical rims inferred from the original 600 dpi figure, constrained by clearance.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-z-26f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 26mm f/2.8",
  subtitle: "WO 2023/190222 A1 Example 1 — NIKON / MAKIDA",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 6 GROUPS", "f = 26.78 mm", "F/2.90", "2ω ≈ 80.6°", "4 ASPHERICAL SURFACES"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 26, design: 26.78 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "WO 2023/190222 A1",
    patentYear: 2023,
    authors: ["Ayumu Makida", "Taeko Toshi"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ──
   *  L8 is physically one composite element (resin + glass) per patent §0199.
   *  Modeled as L8a (resin) + L8b (glass body) for the renderer.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: 123.5,
      glass: "S-BAL35 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Positive front singlet with one aspherical surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -14.7,
      glass: "S-FTM16 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Negative member of cemented pair D1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.7,
      focalLengthMm: 10.6,
      glass: "S-LAH58 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Positive member of cemented pair D1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: 9.7,
      glass: "J-LASF09A (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Positive member of cemented pair D2.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.4,
      focalLengthMm: -11.7,
      glass: "N-F2 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Negative member of cemented pair D2.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: 333.9,
      glass: "M-BACD12 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Weak positive meniscus with two aspherical surfaces.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: -20.2,
      glass: "SF4 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Negative meniscus in source section G3.",
    },
    {
      id: 8,
      name: "L8a",
      label: "Element 8a (resin)",
      type: "Asph. Resin Layer (1× Asph)",
      nd: 1.56093,
      vd: 36.6,
      focalLengthMm: -353.8,
      glass: "Resin layer (patent composite asphere; chemistry and supplier unspecified)",
      apd: false,
      role: "Source resin layer on the object side of the composite L8 glass body.",
      cemented: "L8",
    },
    {
      id: 9,
      name: "L8b",
      label: "Element 8b (glass)",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.7,
      focalLengthMm: 29.3,
      glass: "S-LAH58 (inferred catalog counterpart; production material unspecified)",
      apd: false,
      role: "Positive glass body of composite element L8.",
      cemented: "L8",
    },
  ],

  /* ── Surface prescription ──
   *  16 optical surfaces from patent Table 1.
   *  Aperture stop (surface 3) is explicitly listed in the patent prescription (開口絞り).
   *  L8 composite: surface 14 = resin front (asph), 15 = resin/glass junction, 16 = glass rear.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent Table 1 asph data. Sag equation per §0206:
   *    S(y) = (y²/r) / {1 + (1 − K×y²/r²)^(1/2)} + A4·y⁴ + A6·y⁶ + ...
   *  Note: patent lists up to A18 for surface 10.
   *  A2 = 0 for all surfaces (per §0205). Standard conic K = source K − 1.
   */
  surfaces: [
    {
      label: "1A",
      R: 11.70227,
      d: 1.27,
      sd: 5.5,
      medium: 1,
      asphere: {
        K: 0,
        A4: -6.3e-5,
        A6: -1.02e-6,
        A8: -1.93e-8,
      },
    }, // L1 front (asph; source K=1 → standard K=0)
    { label: "2", R: 13.3834, d: 1.62, sd: 5.5 }, // L1 rear → air
    { label: "STO", R: "flat", d: 1.59 }, // Aperture stop (patent surface 3)
    { label: "4", R: -37.934, d: 0.7, sd: 5, medium: 2 }, // L2 front (D1 neg.)
    { label: "5", R: 11.35394, d: 2.8, sd: 5, medium: 3 }, // L2→L3 junction (D1 pos.)
    { label: "6", R: -46.90284, d: 0.31, sd: 5 }, // L3 rear → air
    { label: "7", R: 58.38846, d: 3.87, sd: 5.5, medium: 4 }, // L4 front (D2 pos.)
    { label: "8", R: -8.93495, d: 0.7, sd: 5.5, medium: 5 }, // L4→L5 junction (D2 neg.)
    { label: "9", R: 39.69665, d: 2.92, sd: 6.2 }, // L5 rear → air
    {
      label: "10A",
      R: -9.52831,
      d: 1.1,
      sd: 7.3,
      medium: 6,
      asphere: {
        K: -0.7036,
        A4: -1.07e-4,
        A6: 1.09e-5,
        A8: -1.04e-7,
        A10: -6.74e-9,
        A12: 1.76e-10,
        A14: 8.59e-14,
        A16: -9.66e-14,
        A18: 1.31e-15,
      },
    }, // L6 front (asph; source K=0.2964 → standard K=−0.7036)
    {
      label: "11A",
      R: -9.47003,
      d: 2.17,
      sd: 7.3,
      asphere: {
        K: 0,
        A4: 1.94e-4,
        A6: 9.62e-6,
        A8: 1.86e-8,
        A10: -3.79e-9,
        A12: 3.78e-11,
      },
    }, // L6 rear → air (asph, K=1.0)
    { label: "12", R: -9.36192, d: 1.0, sd: 7.2, medium: 7 }, // L7 front
    { label: "13", R: -25.39515, d: 0.71, sd: 9.7 }, // L7 rear → air
    {
      label: "14A",
      R: -45.8666,
      d: 0.1,
      sd: 12.2,
      medium: 8,
      asphere: {
        K: 0,
        A4: 4.28e-5,
        A6: -3.34e-7,
        A8: 1.25e-9,
        A10: -3.2e-12,
        A12: 3.14e-15,
      },
    }, // L8 resin front (asph, K=1.0)
    { label: "15", R: -59.69914, d: 6.53, sd: 12.2, medium: 9 }, // L8 resin→glass junction
    { label: "16", R: -18.98009, sd: 14 }, // L8 glass rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.19999123089734902,
    description:
      "Source unit focus: all optics and the stop move objectward 5.113 mm. The near object-to-image distance is inferred as 0.200 m from the source BFD; intermediate distances are estimates.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire optical system translates along the optical axis.
   *  Only the back focal distance (surface 16) changes.
   *  Patent §0201: "光学系全体を光軸に沿って移動させることにより合焦を行う"
   *  Bf: infinity = 10.760 mm, close focus = 15.873 mm (patent Table 1).
   */
  gaps: { "16": { label: "BF", values: [[10.76, 15.873]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "2" },
    { text: "G2", fromSurface: "4", toSurface: "11A" },
    { text: "G3", fromSurface: "12", toSurface: "13" },
    { text: "G4", fromSurface: "14A", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "4", toSurface: "6" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
    { text: "L8", fromSurface: "14A", toSurface: "16" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
