import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 50mm f/1.2 L USM                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: JP2007333790A, Numerical Example 1, Canon Inc.          ║
 * ║  Production correlation: Canon EF 50mm f/1.2L USM.                      ║
 * ║  Patent prescription retained at source scale (s = 1).                   ║
 * ║  8 elements / 6 groups; one aspherical surface (patent surface 14).      ║
 * ║                                                                            ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION:                                     ║
 * ║  The patent states whole-lens/unit focusing but publishes no finite-      ║
 * ║  focus spacing row. All internal gaps are fixed. D15 is 38.88 mm at      ║
 * ║  infinity and is reconstructed as 45.947215 mm at Canon's 0.45 m MFD,    ║
 * ║  treating MFD as object-to-image-plane distance. The solved paraxial      ║
 * ║  magnification is 0.147276x versus Canon's rounded 0.15x specification.   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                           ║
 * ║  The patent publishes none. The stop radius is derived from the modeled    ║
 * ║  design f-number (F/1.25). Glass SDs are inferred from exact on-axis       ║
 * ║  marginal rays, the Fig. 1 optical envelope, and current                   ║
 * ║  edge/slope/cross-gap limits. At 60% field the outermost ±0.75 pupil       ║
 * ║  samples vignette first at S1 or S14A; no sampled ray first clips at a     ║
 * ║  cemented interface.                                                       ║
 * ║                                                                            ║
 * ║  GLASS: the patent gives d-line nd/νd only and no vendor names or line    ║
 * ║  indices. Neutral six-digit source-coordinate classes are retained;       ║
 * ║  nC, nF, ng, and dPgF are therefore not invented.                         ║
 * ║                                                                            ║
 * ║  ASPHERE: patent surface 14 uses a spherical base, so project K = 0.      ║
 * ║  Patent B/C/D/E map to project A4/A6/A8/A10 without scaling.              ║
 * ║                                                                            ║
 * ║  The authored D15 = 38.88 mm image-plane spacing is preserved even       ║
 * ║  though the independently computed Gaussian BFD is 38.333791 mm.          ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Product metadata sources:
 * - Canon Camera Museum: https://global.canon/en/c-museum/product/ef392.html
 * - Canon U.S.A.: https://www.usa.canon.com/shop/p/ef-50mm-f-1-2l-usm
 *
 * Source image-plane audit: all R/d/nd/vd and S14 coefficients match
 * JP2007333790A Example 1 (PDF pp.10–11). EFL 51.695042 agrees with
 * 51.70, but printed D15=38.88 is not paraxial BFL 38.333791 mm.
 * No source plate or supported correction explains the -0.546209 mm
 * offset. Retain the published image distance; best-focus intent is unproven.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-50mm-f1p2l-usm",
  maker: "Canon",
  name: "CANON EF 50mm f/1.2 L USM",
  subtitle: "JP2007333790A Example 1 — production correlation; constrained unit-focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 6 GROUPS", "DESIGN EFL ≈ 51.695 mm", "DESIGN F/1.25", "2ω = 45.4°", "1 ASPHERICAL SURFACE"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 50, design: 51.695042 },
    fNumber: { marketing: 1.2, design: 1.25 },
  },

  source: {
    patentNumber: "JP 2007-333790 A",
    patentYear: 2007,
    authors: ["Makoto Mitsusaka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "G11 / Element 1",
      type: "Positive Meniscus",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: 93.644,
      glass: "773496 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Front positive collector in the weak-positive GF group.",
      diagramLabel: "G11",
    },
    {
      id: 2,
      name: "L2",
      label: "G12 / Element 2",
      type: "Positive Meniscus",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: 91.211,
      glass: "835427 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Second positive element of the front GF group.",
      diagramLabel: "G12",
    },
    {
      id: 3,
      name: "L3",
      label: "G13 / Element 3",
      type: "Negative Meniscus",
      nd: 1.639799,
      vd: 34.5,
      focalLengthMm: -48.976,
      glass: "S-TIM27 — catalog-equivalent curve for patent 640345 (production supplier unspecified)",
      apd: false,
      role: "Negative element completing the weak-positive front GF group.",
      diagramLabel: "G13",
    },
    {
      id: 4,
      name: "L4",
      label: "NL1 / Element 4",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -28.394,
      glass: "728285 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Negative member of the first cemented pair in the rear GR group.",
      diagramLabel: "NL1",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "PL1 / Element 5",
      type: "Biconvex Positive",
      nd: 1.882997,
      vd: 40.8,
      focalLengthMm: 29.088,
      glass: "883408 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Positive member of the first cemented pair in the rear GR group.",
      diagramLabel: "PL1",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "NL2 / Element 6",
      type: "Biconcave Negative",
      nd: 1.698947,
      vd: 30.1,
      focalLengthMm: -36.915,
      glass: "699301 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Negative member of the second cemented pair in the rear GR group.",
      diagramLabel: "NL2",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "PL2 / Element 7",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: 45.248,
      glass: "835427 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Positive member of the second cemented pair in the rear GR group.",
      diagramLabel: "PL2",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "PL3 / Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 54.54,
      glass: "804466 — source-coordinate glass class (vendor not identified)",
      apd: false,
      role: "Rear positive aspherical element following the patent's negative air lens.",
      diagramLabel: "PL3",
    },
  ],

  // Live Fig. 1 review: common G11/G12 and NL2+PL2 rims; G13 rear capped at 16.5 mm.
  /* ── Surface prescription: JP2007333790A Numerical Example 1 ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 61.844, d: 4.99, sd: 22.0, medium: 1 },
    { label: "2", R: 411.251, d: 0.24, sd: 22 },
    { label: "3", R: 28.537, d: 5.34, sd: 20.0, medium: 2 },
    { label: "4", R: 41.757, d: 1.14, sd: 20 },
    { label: "5", R: 54.433, d: 2.16, sd: 17.95, medium: 3 },
    { label: "6", R: 19.579, d: 12.95, sd: 16.5 },
    { label: "STO", R: "flat", d: 7.41 },
    { label: "8", R: -23.181, d: 1.4, sd: 16.75, medium: 4 },
    { label: "9", R: 196.367, d: 7.64, sd: 16.75, medium: 5 },
    { label: "10", R: -29.011, d: 0.45, sd: 16.75 },
    { label: "11", R: -27.438, d: 1.5, sd: 18.9, medium: 6 },
    { label: "12", R: 442.408, d: 6.48, sd: 18.9, medium: 7 },
    { label: "13", R: -41.024, d: 0.15, sd: 18.9 },
    {
      label: "14A",
      R: 146.157,
      d: 5.87,
      sd: 19.0,
      medium: 8,
      asphere: { K: 0, A4: -1.44531e-6, A6: 2.5016e-10, A8: -1.46123e-13, A10: 0, A12: 0, A14: 0 },
    },
    { label: "15", R: -61.524, sd: 18.9 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "The whole optical unit moves toward the object for closer focus. The 7.07 mm travel to 0.45 m is reconstructed; the patent specifies unit focusing but gives no close-focus spacing table.",
  },

  /* (moved from var) ── Variable air spacing: constrained unit-focus reconstruction ── */
  gaps: { "15": { label: "BF", values: [[38.88, 45.947215]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.25, fStops: [1.25, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 8 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GF", fromSurface: "1", toSurface: "6" },
    { text: "GR", fromSurface: "8", toSurface: "15" },
  ],
  doublets: [
    { text: "NL1+PL1", fromSurface: "8", toSurface: "10" },
    { text: "NL2+PL2", fromSurface: "11", toSurface: "13" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
