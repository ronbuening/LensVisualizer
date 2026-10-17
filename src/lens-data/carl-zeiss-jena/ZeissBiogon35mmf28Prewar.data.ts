import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Carl Zeiss Jena Biogon 3.5 cm f/2.8 (pre-war)        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,084,309, single worked example (Ludwig Bertele).║
 * ║  7 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit-focus rendering model; the patent gives infinity only. ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription computes to f = 100.239088608 mm. All       ║
 * ║    radii, thicknesses, air spaces, BFL, and inferred SDs are scaled ║
 * ║    by 35 / 100.239088608 = 0.349165185818 for a 35.000 mm lens.    ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    The patent does not specify stop position. STO is inferred at    ║
 * ║    the midpoint of the second air space (between R6 and R7). The    ║
 * ║    stop radius is derived from the design f-number (f/2.8).         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent lists no clear apertures. SDs are conservative        ║
 * ║    rendering estimates from paraxial marginal/chief-ray geometry,   ║
 * ║    adjusted to maintain edge thickness and cross-gap clearance.     ║
 * ║    Surface 11 was raised to 15.2 mm, the R11 height on the patent   ║
 * ║    drawing, to pass the traced chief ray to the 24x36 corner        ║
 * ║    (2026-09-24 field-coverage audit).                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-biogon-35mm-f28-prewar",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)",
  subtitle: "US 2,084,309 — Ludwig Bertele / Zeiss Ikon",

  catalog: {
    lensMounts: ["contax-rf"],
    imageFormat: "135-full-frame",
    specs: ["7 elements / 4 groups", "f = 35.0 mm", "f/2.8", "63.4° diagonal field", "all-spherical"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 35, design: 35.0 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: { patentNumber: "US 2,084,309", patentYear: 1937, authors: ["Ludwig Bertele"], assignees: ["Zeiss Ikon AG"] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6716,
      vd: 47.2,
      focalLengthMm: 40.111,
      glass: "N-BAF10 (Schott catalog-equivalent to vintage 672472 coordinate; supplier not identified)",
      apd: false,
      role: "Front positive collector; high-index meniscus reduces front-surface curvature for the required positive power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6716,
      vd: 47.2,
      focalLengthMm: 34.315,
      glass: "N-BAF10 (Schott catalog-equivalent to vintage 672472 coordinate; supplier not identified)",
      apd: false,
      role: "Positive front member of the cemented triplet; balances the negative flint member behind it.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.4645,
      vd: 65.7,
      focalLengthMm: 47.274,
      glass: "FK3 (Schott)",
      apd: "inferred",
      apdNote: "SCHOTT FK3 inquiry-glass data: ΔPg,F = -0.0003.",
      role: "Low-index, low-dispersion crown in the front triplet; primary chromatic partner for L4.",
      cemented: "T1",
      dPgF: -0.0003,
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.689,
      vd: 31.0,
      focalLengthMm: -13.146,
      glass: "SF8 / N-SF8 equivalent (Schott)",
      apd: false,
      role: "Strong negative dense flint at the rear of the front triplet; main front-group chromatic corrector.",
      cemented: "T1",
      nC: 1.68254,
      nF: 1.70455,
      ng: 1.71775,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      focalLengthMm: -34.118,
      glass: "FK3 (Schott)",
      apd: "inferred",
      apdNote: "SCHOTT FK3 inquiry-glass data: ΔPg,F = -0.0003.",
      role: "Low-index negative member at the front of the rear cemented doublet; secondary chromatic correction partner for L6.",
      cemented: "D1",
      dPgF: -0.0003,
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6716,
      vd: 47.2,
      focalLengthMm: 16.015,
      glass: "N-BAF10 (Schott catalog-equivalent to vintage 672472 coordinate; supplier not identified)",
      apd: false,
      role: "Thick dominant positive member; supplies the main image-forming power before the curved third air space.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.5333,
      vd: 48.9,
      focalLengthMm: -46.29,
      glass: "S-TIL6 catalog equivalent (patent 533489; production supplier unspecified)",
      apd: false,
      role: "Rear negative meniscus; image-side boundary of the patent's collective third air-space correction mechanism.",
    },
  ],

  surfaces: [
    { label: "1", R: 18.666371, d: 4.500739, sd: 12.0, medium: 1 },
    { label: "2", R: 54.899242, d: 0.548189, sd: 10.0 },
    { label: "3", R: 11.637676, d: 1.909934, sd: 8.8, medium: 2 },
    { label: "4", R: 21.958999, d: 1.822642, sd: 7.6, medium: 3 },
    { label: "5", R: "flat", d: 0.659922, sd: 6.4, medium: 4 },
    { label: "6", R: 9.057345, d: 1.318099, sd: 5.8 },
    { label: "STO", R: "flat", d: 1.318099 },
    { label: "7", R: 145.811382, d: 0.659922, sd: 6.3, medium: 5 },
    { label: "8", R: 14.273873, d: 13.177494, sd: 7.0, medium: 6 },
    { label: "9", R: -27.451367, d: 2.196249, sd: 8.7 },
    { label: "10", R: -16.470122, d: 8.784996, sd: 10.2, medium: 7 },
    { label: "11", R: -58.666735, sd: 15.2 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit-focus rendering model. The patent gives only an infinity prescription; close focus uses a 1.0 m visualization assumption and varies only the back focus.",
  },

  gaps: { "11": { label: "BF", values: [[6.464821, 7.800429]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "9" },
    { text: "G4", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "D1", fromSurface: "7", toSurface: "9" },
  ],

  layout: { scFill: 0.58, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
