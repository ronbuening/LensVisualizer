import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║             LENS DATA — CANON EF 200mm f/1.8 L USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H01-102413 A, Numerical Example 1 (Canon).           ║
 * ║  Three principal groups with positive-negative-positive power.         ║
 * ║  Patent core: 10 powered elements / 8 air-spaced groups, all spherical.║
 * ║  Focus: cemented negative G2 moves 14.49 mm imageward to 2.5 m.        ║
 * ║                                                                          ║
 * ║  PRODUCTION-COUNT NOTE:                                                  ║
 * ║    Canon specifies 12 elements / 10 groups. Its official block diagram  ║
 * ║    adds a plane-parallel front plate and a plane-parallel rear filter    ║
 * ║    group to the patent's 10-element powered core. They are not modeled:  ║
 * ║    the selected patent gives no dimensions/materials for either plate.   ║
 * ║    elementCount/groupCount therefore describe only the sourced core,     ║
 * ║    the transcribed patent prescription.                                  ║
 * ║                                                                          ║
 * ║  NOTE ON APERTURE STOP:                                                  ║
 * ║    The patent does not tabulate a stop surface. A working stop position ║
 * ║    is estimated in D13 from Canon's production block diagram, 8.00 mm   ║
 * ║    before R14. D13 remains 32.20 mm at infinity and 17.71 mm at 2.5 m.  ║
 * ║    The stop radius is derived from the patent design f-number (f/1.86).  ║
 * ║                                                                          ║
 * ║  Original-PDF review 2026-10-30: Example 1, PDF page 5; Fig. 1,      ║
 * ║  PDF page 7. S10 keeps its 31.3 mm clear cap and gains the resolved   ║
 * ║  outer shoulder to 36.5 mm. All source R/d and focus rows retained.   ║
 * ║  Source theta_3a/theta_3b are kept as published partial ratios; their    ║
 * ║  wavelength convention is unspecified.                                   ║
 * ║                                                                          ║
 * ║  NOTE ON SPECTRAL LINE:                                                  ║
 * ║    The patent names no spectral line. 10 of 10 printed pairs match       ║
 * ║    catalog d-line coordinates and none match the e-line, so the table    ║
 * ║    is read as d-line. 10 media use catalog curves as spectral proxies;   ║
 * ║    supplier, melt and chemistry stay unspecified.                        ║
 * ║                                                                          ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                 ║
 * ║    The patent publishes no clear apertures. SDs use combined marginal-  ║
 * ║    and chief-ray traces, the patent/production outlines, and conservative║
 * ║    mechanical limits. They pass sd/|R| < 0.90, element SD ratio <= 1.25,║
 * ║    edge thickness >= 0.5 mm, and signed gap intrusion <= 90%. The       ║
 * ║    inferred apertures contain the infinity on-axis f/1.86 bundle but     ║
 * ║    intentionally retain modeled field and close-focus vignetting.        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-200mm-f1-8-l-usm",
  maker: "Canon",
  name: "CANON EF 200mm f/1.8 L USM",
  subtitle: "JP H01-102413 A, Numerical Example 1 — Canon / Ogawa and Takahashi",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 POWERED ELEMENTS / 8 GROUPS (PATENT CORE)",
      "MODELED EFL ≈ 200.017 mm",
      "f/1.86 PATENT DESIGN",
      "2ω = 12.3°",
      "3 UD-CLASS ELEMENTS",
      "ALL SPHERICAL",
    ],
    elementCount: 10,
    groupCount: 8,
    focalLengthMm: { marketing: 200, design: 200.0 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "JP H01-102413 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 1989,
    authors: ["Hideki Ogawa", "Sadatoshi Takahashi"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 194.863158,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote: "Production UD-position correlation only; no selected APD measurement.",
      role: "First low-dispersion positive collector in G1; one of the three production UD-correlated positions.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 272.181368,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote: "Production UD-position correlation only; no selected APD measurement.",
      role: "Second low-dispersion positive collector in G1; distributes positive power across the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -145.573569,
      glass:
        "BPH5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "First negative flint in G1; supplies opposite power and dispersion to the preceding low-dispersion positives.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 154.436378,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote: "Production UD-position correlation only; no selected APD measurement.",
      role: "Third low-dispersion positive in G1; corresponds to the third UD-highlighted production position.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -281.405845,
      glass:
        "S-LAL14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Weak negative rear member of G1, immediately ahead of the first focus-variable gap.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 139.100259,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Standalone-positive high-index component of the cemented, net-negative moving focus group.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 43.8,
      focalLengthMm: -60.288767,
      glass:
        "BPM4 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative component that makes cemented doublet D1 net negative; D1 is the sole moving focus group.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus, concave to object",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -58.224609,
      glass:
        "BPH5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strongly object-concave negative at the front of G3; forms the chromatically constrained rear doublet.",
      apdNote:
        "Patent Example 1 correspondence table: theta_3a = 1.271845; partial-dispersion wavelength convention unspecified.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus, convex to image",
      nd: 1.6516,
      vd: 58.6,
      focalLengthMm: 71.057526,
      glass:
        "S-LAL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      apdNote:
        "Patent Example 1 correspondence table: theta_3b = 1.238095; partial-dispersion wavelength convention unspecified.",
      role: "Positive partner in D2; its published theta_3b participates in the patent's secondary-spectrum condition.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 112.566809,
      glass:
        "S-PHM52 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Final positive singlet; with weakly negative D2, makes G3 net positive.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 123.12, d: 19.0, sd: 57.0, medium: 1 },
    { label: "2", R: -430.59, d: 0.72, sd: 54.0 },
    { label: "3", R: 89.981, d: 13.2, sd: 53.8, medium: 2 },
    { label: "4", R: 255.652, d: 6.0, sd: 49.0 },
    { label: "5", R: -704.106, d: 4.7, sd: 44.8, medium: 3 },
    { label: "6", R: 110.405, d: 18.0, sd: 44.2 },
    { label: "7", R: 67.274, d: 15.55, sd: 42.0, medium: 4 },
    { label: "8", R: 502.839, d: 0.5, sd: 37.0 },
    { label: "9", R: 44.766, d: 4.5, sd: 36.5, medium: 5 },
    { label: "10", R: 34.941, sd: 31.3, rimExtensionSd: 36.5 },
    { label: "11", R: -1069.676, d: 6.0, sd: 27.0, medium: 6 },
    { label: "12", R: -106.363, d: 2.5, sd: 26.0, medium: 7 },
    { label: "13", R: 57.199, sd: 25.0 },
    { label: "STO", R: "flat", d: 8.0 },
    { label: "14", R: -35.135, d: 4.4, sd: 20.0, medium: 8 },
    { label: "15", R: -475.931, d: 8.49, sd: 21.0, medium: 9 },
    { label: "16", R: -42.493, d: 0.15, sd: 23.0 },
    { label: "17", R: 96.893, d: 5.5, sd: 23.5, medium: 10 },
    { label: "18", R: -241.315, d: 72.089219, sd: 23.0 },
  ],

  focus: {
    closeFocusM: 2.5,
    description: "Rear focus: cemented negative G2 moves 14.49 mm imageward from infinity to 2.5 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) D13 is split by the estimated stop: R13→STO varies; STO→R14 remains 8.00 mm. */
  gaps: { "10": { label: "D10", values: [[21.0, 35.49]] }, "13": { label: "D13 (to STO)", values: [[24.2, 9.71]] } },

  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 8 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (−, FOCUS)", fromSurface: "11", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.68, yScFill: 0.62, maxAspectRatio: 2.2 },
} satisfies LensDataV2Input;

export default LENS_DATA;
