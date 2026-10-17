import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — HD PENTAX-D FA★ 50mm F1.4 SDM AW                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0250367 A1, Example 1 (Minoru Murayama).    ║
 * ║  Fast full-frame K-mount standard lens; modified-Gauss rear group ║
 * ║  with a preceding aberration-correction/front-converter group.     ║
 * ║  15 elements / 9 air-separated groups, 2 aspherical surfaces.      ║
 * ║  Focus: G1 fixed; G2 translates toward the object as a rigid unit. ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent FIG. 31 surfaces 26-27 (plate CG, 2.000 mm, nd 1.51633,  ║
 * ║    νd 64.1) and BF = 1.00 mm to the image are modeled in           ║
 * ║    `rearPlates` (traced, not drawn). Surface 25A keeps the         ║
 * ║    patent's physical D25: 37.310 mm at infinity and 46.706 mm at   ║
 * ║    the short-distance focus state.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear apertures. Semi-diameters below  ║
 * ║    were estimated from paraxial marginal/chief-ray envelopes at    ║
 * ║    the rendered off-axis field, then reduced where required by     ║
 * ║    edge-thickness, element-ratio, and cross-gap sag constraints.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design. It        ║
 * ║  excludes mechanical components (cover glass: `rearPlates`).       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-dfa-50mm-f14-sdm-aw",
  maker: "Pentax",
  name: "PENTAX HD D FA* 50mm f/1.4 SDM AW",
  subtitle: "US 2019/0250367 A1 Example 1 — Murayama",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "15 elements / 9 groups",
      "f = 49.57 mm design",
      "F1.45 design / F1.4 nominal",
      "2ω = 47°",
      "2 aspherical surfaces",
    ],
    elementCount: 15,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 49.567 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "US 2019/0250367 A1",
    patentYear: 2019,
    authors: ["Minoru Murayama"],
    assignees: ["Ricoh Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G1a front positive",
      type: "Weak Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: 308.0,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Weak front positive of the negative G1a cemented component; supports lateral color correction.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "G1a rear negative",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      focalLengthMm: -60.7,
      glass: "S-NBM51 / N-KZFS4 class (613443)",
      apd: false,
      role: "Strong negative member of G1a; its image-side concave surface is the R1aN surface in the patent conditions.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "G1b high-index positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 43.0,
      glass: "TAFD35 (HOYA, 911353; patent rounds νd to 35.2)",
      apd: false,
      role: "High-index positive lens in the first G1b cemented doublet; satisfies the n12P condition.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L14",
      label: "G1b cemented negative",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      focalLengthMm: -62.0,
      glass: "S-NBM51 / N-KZFS4 class (613443)",
      apd: false,
      role: "Achromatizing negative partner for L13; the cemented pair remains net positive.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L21",
      label: "G1b negative component front",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: -45.3,
      glass: "Niobium dense flint class (OHARA S-NBH8 class)",
      apd: false,
      role: "Negative member of the second G1b cemented component; spreads front-group negative power.",
      cemented: "D3",
    },
    {
      id: 6,
      name: "L22",
      label: "G1b anomalous crown",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 105.2,
      glass: "S-PHM52 (OHARA, 618634)",
      apd: "inferred",
      apdNote: "Mild positive ΔPgF inferred from the catalog S-PHM52 match; front-group secondary-spectrum trim.",
      role: "Positive low-dispersion partner in the net-negative G1b cemented component.",
      cemented: "D3",
      dPgF: 0.0052,
    },
    {
      id: 7,
      name: "L23",
      label: "G1b rear positive",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 55.8,
      glass: "S-LAH55 / TAFD5F class (835427)",
      apd: false,
      role: "Rear positive singlet of G1b; re-converges the bundle before G2.",
    },
    {
      id: 8,
      name: "L31",
      label: "G2a leading positive",
      type: "Positive Meniscus",
      nd: 1.8515,
      vd: 40.8,
      focalLengthMm: 112.5,
      glass: "OHARA S-LAH89 class",
      apd: false,
      role: "Leading positive lens of G2a; contributes to the ν2aP average in the patent conditions.",
    },
    {
      id: 9,
      name: "L32",
      label: "G2a ED positive",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 53.8,
      glass: "OHARA S-FPM2 / ED fluorophosphate class",
      apd: "patent",
      apdNote: "Uses the same nd/νd class as the patent's θgF22 = 0.5442 ED positive; ΔPgF ≈ +0.0144.",
      role: "ED positive in the G2a cemented lens; primary secondary-spectrum corrector before the stop.",
      cemented: "D4",
      dPgF: 0.0144,
    },
    {
      id: 10,
      name: "L33",
      label: "G2a flint negative",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: -43.3,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Negative cemented partner to L32; image-facing concave surface is noted in the patent description of G2a.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L41",
      label: "G2b object-side negative",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: -34.9,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Negative member of the object-side cemented lens behind the stop.",
      cemented: "D5",
    },
    {
      id: 12,
      name: "L42",
      label: "G2b ED positive",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 40.8,
      glass: "OHARA S-FPM2 / ED fluorophosphate class",
      apd: "patent",
      apdNote: "Patent condition lens: νd22 = 67.74, θgF22 = 0.5442; ΔPgF ≈ +0.0144.",
      role: "ED positive in G2b; explicit secondary-spectrum correction element in the patent conditions.",
      cemented: "D5",
      dPgF: 0.0144,
    },
    {
      id: 13,
      name: "L43",
      label: "G2b high-index meniscus",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 111.7,
      glass: "S-LAH58 / TAFD30 class (883408)",
      apd: false,
      role: "Positive meniscus with convex image-side surface; satisfies the n2P condition.",
      cemented: "D6",
    },
    {
      id: 14,
      name: "L44",
      label: "G2b image-side negative",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: -40.4,
      glass: "OHARA S-TIL26 class",
      apd: false,
      role: "Negative partner in the image-side cemented lens; helps balance the symmetric stop-flanking correction.",
      cemented: "D6",
    },
    {
      id: 15,
      name: "L51",
      label: "Rear double-sided asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7725,
      vd: 49.5,
      focalLengthMm: 36.9,
      glass: "773495 - moldable lanthanum crown class (patent nd=1.77250, νd=49.5)",
      apd: false,
      role: "Strong final positive collector; both surfaces are aspherical for spherical, coma, and astigmatism correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 292.188, d: 4.368, sd: 33.0, medium: 1 },
    { label: "2", R: -508.04, d: 2.4, sd: 32.0, medium: 2 },
    { label: "3", R: 40.248, d: 6.809, sd: 26.0 },
    { label: "4", R: 99.387, d: 11.193, sd: 27.4, medium: 3 },
    { label: "5", R: -61.124, d: 1.95, sd: 27.2, medium: 4 },
    { label: "6", R: 102.032, d: 8.974, sd: 22.4 },
    { label: "7", R: -50.023, d: 1.75, sd: 22.4, medium: 5 },
    { label: "8", R: 95.253, d: 6.188, sd: 26.5, medium: 6 },
    { label: "9", R: -199.658, d: 0.1, sd: 26.3 },
    { label: "10", R: 99.222, d: 8.352, sd: 26.3, medium: 7 },
    { label: "11", R: -84.561, sd: 26.1 },
    { label: "12", R: 54.801, d: 4.434, sd: 25.8, medium: 8 },
    { label: "13", R: 123.303, d: 0.183, sd: 25.4 },
    { label: "14", R: 53.021, d: 8.578, sd: 22.0, medium: 9 },
    { label: "15", R: -75.909, d: 1.55, sd: 21.6, medium: 10 },
    { label: "16", R: 40.154, d: 6.141, sd: 19.5 },
    { label: "STO", R: "flat", d: 3.791 },
    { label: "18", R: -45.293, d: 1.27, sd: 16.5, medium: 11 },
    { label: "19", R: 39.736, d: 7.837, sd: 16.8, medium: 12 },
    { label: "20", R: -57.921, d: 0.978, sd: 15.0 },
    { label: "21", R: -41.379, d: 3.134, sd: 18.0, medium: 13 },
    { label: "22", R: -30.183, d: 1.25, sd: 17.5, medium: 14 },
    { label: "23", R: 96.931, d: 0.632, sd: 17.8 },
    {
      label: "24A",
      R: 67.722,
      d: 6.658,
      sd: 18.4,
      medium: 15,
      asphere: { K: 0, A4: -0.3057e-5, A6: -0.256e-8, A8: 0.1404e-10, A10: -0.3622e-13, A12: 0 },
    },
    // Last surface: patent D25, physical gap to the cover plate CG
    {
      label: "25A",
      R: -47.005,
      sd: 18.7,
      asphere: { K: 0, A4: 0.2344e-5, A6: -0.4523e-8, A8: 0.1659e-10, A10: -0.3687e-13, A12: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.4,
    description:
      "Rear-group unit focusing. The first group is stationary; the complete second group translates toward the object. Patent Example 1 changes D11 from 10.407 mm to 1.012 mm and D25 (last lens surface to the cover plate) from 37.310 mm to 46.706 mm.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "11": { label: "D11", values: [[10.407, 1.012]] }, "25A": { label: "D25", values: [[37.31, 46.706]] } },

  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Cover plate CG (patent FIG. 31 surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.0,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 1.0,
      source: "US 2019/0250367 A1, Example 1 FIG. 31 surfaces 26–27 (BF 1.00)",
    },
  ],

  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "3" },
    { text: "G1b", fromSurface: "4", toSurface: "11" },
    { text: "G2a", fromSurface: "12", toSurface: "16" },
    { text: "G2b", fromSurface: "18", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
    { text: "D3", fromSurface: "7", toSurface: "9" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
    { text: "D5", fromSurface: "18", toSurface: "20" },
    { text: "D6", fromSurface: "21", toSurface: "23" },
  ],

  layout: { scFill: 0.53, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
