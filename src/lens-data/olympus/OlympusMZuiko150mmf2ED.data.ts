import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — OLYMPUS ZUIKO DIGITAL ED 150mm f/2.0             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,408,719 B2, Example 1 (Olympus / Hosoya).       ║
 * ║  Four-group internal-focus telephoto for the Four Thirds format.   ║
 * ║  11 elements / 9 air-spaced groups, all spherical surfaces.        ║
 * ║                                                                    ║
 * ║  NOTE ON NAMING:                                                   ║
 * ║    The production lens is the Four Thirds ZUIKO DIGITAL ED         ║
 * ║    150mm f/2.0, not a Micro Four Thirds M.ZUIKO lens. The file     ║
 * ║    stem follows the requested output name.                          ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS ENDPOINT:                                           ║
 * ║    The patent's nearest-distance table is β=-0.15 at 1.2 m.        ║
 * ║    OM Digital/Olympus production catalog specifications list       ║
 * ║    closest focus as 1.4 m and maximum magnification as 0.13×.      ║
 * ║    This data file therefore uses the patent infinity prescription  ║
 * ║    and solves the same two-group floating-focus path at 1.4 m.     ║
 * ║    Interpolation factor along the patent close-focus travel:       ║
 * ║    t = 0.846934515052.                                             ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER / SENSOR GLASS:                                    ║
 * ║    The patent's three rear plane-parallel plates are camera-body   ║
 * ║    dust-reduction / IR-cut / OLPF / cover-glass plates, not lens   ║
 * ║    elements. They are excluded from the surfaces array and folded  ║
 * ║    into the final air-equivalent BFD after surface 21.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters     ║
 * ║    are inferred from paraxial marginal/chief-ray traces, then      ║
 * ║    constrained by the production 82 mm filter thread, signed       ║
 * ║    cross-gap sag clearance, and front/rear element SD ratios.      ║
 * ║    Full-field wide-open front-group rays are necessarily clipped   ║
 * ║    by the physical filter/barrel envelope, as expected for this    ║
 * ║    fast telephoto.                                                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-digital-ed-150mm-f2",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO DIGITAL ED 150mm f/2.0",
  subtitle: "US 7,408,719 B2 Example 1 — Olympus / T. Hosoya",

  catalog: {
    lensMounts: ["four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "11 elements / 9 groups",
      "f = 149.50 mm patent EFL",
      "F/2.0",
      "Four Thirds format",
      "2ω = 8.2° production field",
      "All-spherical design",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 150, design: 149.501 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 7,408,719 B2",
    patentYear: 2008,
    authors: ["Takeshi Hosoya"],
    assignees: ["Olympus Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G1 L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 403.2,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Durable exposed front positive crown; below the patent condition-(5) ED threshold.",
      dPgF: 0.00459,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L12",
      label: "G1 L12",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 199.1,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog-derived dPgF = +0.03194; ED fluorophosphate crown.",
      role: "Front-group ED positive; one of the two νd ≥ 80 positive elements required by the patent.",
      dPgF: 0.03194,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 3,
      name: "L13",
      label: "G1 L13",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: -112.0,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "Dense-flint negative achromatizing partner for the front positive ED crowns.",
      dPgF: 0.01523,
      nC: 1.77596,
      nF: 1.80652,
      ng: 1.82534,
    },
    {
      id: 4,
      name: "L14",
      label: "G1 L14",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.93,
      focalLengthMm: 167.6,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog-derived dPgF = +0.05050; Super-ED fluorophosphate crown.",
      role: "Front-group Super-ED positive; principal secondary-spectrum correction element.",
      dPgF: 0.0505,
      nC: 1.43733,
      nF: 1.44195,
      ng: 1.44442,
    },
    {
      id: 5,
      name: "L21",
      label: "G2 L21",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: 70.9,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "Positive member of the near-afocal internal focusing doublet.",
      cemented: "D1",
      dPgF: 0.01523,
      nC: 1.77596,
      nF: 1.80652,
      ng: 1.82534,
    },
    {
      id: 6,
      name: "L22",
      label: "G2 L22",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.78,
      focalLengthMm: -67.6,
      glass: "S-LAM2 (OHARA)",
      apd: false,
      role: "Negative member of the near-afocal internal focusing doublet.",
      cemented: "D1",
      dPgF: -0.00256,
      nC: 1.73905,
      nF: 1.75566,
      ng: 1.76506,
    },
    {
      id: 7,
      name: "L31",
      label: "G3 L31",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 57.05,
      focalLengthMm: 63.2,
      glass: "S-BSM10 (OHARA)",
      apd: false,
      role: "Positive front member of the moving G3 cemented doublet.",
      cemented: "D2",
      dPgF: -0.00205,
      nC: 1.61949,
      nF: 1.63041,
      ng: 1.63637,
    },
    {
      id: 8,
      name: "L32",
      label: "G3 L32",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.52,
      focalLengthMm: -45.6,
      glass: "S-TIH1 (OHARA)",
      apd: false,
      role: "Negative rear member of the moving G3 cemented doublet; constrained by condition (4).",
      cemented: "D2",
      dPgF: 0.01079,
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
    },
    {
      id: 9,
      name: "L33",
      label: "G3 L33",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: 109.2,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "High-index positive meniscus immediately ahead of the aperture stop.",
      dPgF: 0.01551,
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 10,
      name: "L41",
      label: "G4 L41",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.03,
      focalLengthMm: -60.8,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Diverging rear telephoto-tail element; image-side radius participates in condition (3).",
      dPgF: 0.00366,
      nC: 1.59875,
      nF: 1.61462,
      ng: 1.62388,
    },
    {
      id: 11,
      name: "L42",
      label: "G4 L42",
      type: "Biconvex Positive",
      nd: 1.788,
      vd: 47.37,
      focalLengthMm: 99.0,
      glass: "S-LAH64 (OHARA)",
      apd: false,
      role: "High-index lanthanum positive closing the fixed negative rear group.",
      dPgF: -0.0079,
      nC: 1.783,
      nF: 1.79963,
      ng: 1.80888,
    },
  ],

  surfaces: [
    { label: "1", R: 279.889, d: 9.12, sd: 41.0, medium: 1 },
    { label: "2", R: -653.223, d: 0.2, sd: 41.0 },
    { label: "3", R: 86.709, d: 10.53, sd: 41.0, medium: 2 },
    { label: "4", R: 672.762, d: 3.06, sd: 36.0 },
    { label: "5", R: -372.773, d: 4.46, sd: 35.5, medium: 3 },
    { label: "6", R: 115.609, d: 7.86, sd: 36.0 },
    { label: "7", R: 103.086, d: 11.7, sd: 36.5, medium: 4 },
    { label: "8", R: -247.813, sd: 35.5 },
    { label: "9", R: 89.628, d: 12.3, sd: 35.0, medium: 5 },
    { label: "10", R: -137.907, d: 3.85, sd: 33.0, medium: 6 },
    { label: "11", R: 80.187, sd: 31.0 },
    { label: "12", R: 36.976, d: 9.0, sd: 24.0, medium: 7 },
    { label: "13", R: 548.969, d: 5.19, sd: 21.5, medium: 8 },
    { label: "14", R: 30.722, d: 3.1, sd: 17.6 },
    { label: "15", R: 55.913, d: 4.4, sd: 17.6, medium: 9 },
    { label: "16", R: 148.254, d: 3.6, sd: 16.5 },
    { label: "STO", R: "flat" },
    { label: "18", R: -672.762, d: 2.6, sd: 14.5, medium: 10 },
    { label: "19", R: 38.839, d: 7.3, sd: 14.5 },
    { label: "20", R: 104.607, d: 4.2, sd: 15.0, medium: 11 },
    { label: "21", R: -301.318, d: 44.577741, sd: 15.0 },
  ],

  focus: {
    closeFocusM: 1.4,
    description:
      "Internal focus with two floating groups: G2 moves image-ward and G3 plus the aperture stop moves object-ward. Close-focus endpoint is solved at the production 1.4 m specification along the patent Example 1 focus path.",
  },

  gaps: {
    "8": { label: "D8 G1-G2", values: [[1.0, 3.312639]] },
    "11": { label: "D11 G2-G3", values: [[29.7593, 11.78447]] },
    STO: { label: "D17 STO-G4", values: [[2.5, 18.162191]] },
  },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "16" },
    { text: "STO", fromSurface: "STO", toSurface: "STO" },
    { text: "G4", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  layout: { scFill: 0.52, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
