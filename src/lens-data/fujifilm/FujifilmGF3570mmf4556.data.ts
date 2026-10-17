import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Fujifilm GF35-70mmF4.5-5.6 WR                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2022/0236544 A1, Example 1 (FUJIFILM / Nagami).   ║
 * ║  Negative-lead four-group zoom for the 44x33 mm GFX format.        ║
 * ║  11 elements / 9 groups, 2 patent aspherical surfaces.             ║
 * ║  Focus: inner focus by G3 / GMr (L31-L32), moving imageward.       ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: DD[7], DD[15], DD[19].                        ║
 * ║  Focus variable gaps: DD[15] and DD[19] conserve G2-G4 spacing.    ║
 * ║  Close state in this file is paraxially extrapolated to the        ║
 * ║  official 0.35 m minimum focus distance from the image plane;      ║
 * ║  the patent-published beta=-0.1 focus spacings are documented in   ║
 * ║  the companion analysis.                                           ║
 * ║                                                                    ║
 * ║  Sensor cover glass from patent surfaces 22-23 is excluded per     ║
 * ║  project convention. Its optical path is folded into surface 21    ║
 * ║  as an air-equivalent BFD of 22.090 mm.                            ║
 * ║                                                                    ║
 * ║  Surfaces 11A and 12A carry the patent's exact coefficients,       ║
 * ║  including the odd-order terms A5, A7, and A9 (KA = 1 → K = 0).    ║
 * ║  Earlier revisions used even-order least-squares refits while      ║
 * ║  the renderer lacked odd-order support.                            ║
 * ║                                                                    ║
 * ║  Semi-diameters are estimated render clear apertures. Surface 9    ║
 * ║  and surface 19 are anchored to the patent ED values of 16.58 mm   ║
 * ║  and 25.84 mm diameter, respectively; the remaining SDs were       ║
 * ║  constrained by paraxial ray envelopes, edge thickness, and        ║
 * ║  cross-gap sag clearance. Surface 3 is capped by the thin S2-S3    ║
 * ║  air gap rather than by its paraxial envelope estimate.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-gf-35-70mm-f45-56-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 35-70mm f/4.5-5.6 WR",
  subtitle: "US 2022/0236544 A1 Example 1 — FUJIFILM / Ryosuke Nagami",

  catalog: {
    lensMounts: ["fujifilm-g"],
    imageFormat: "44x33",
    specs: [
      "11 elements / 9 groups",
      "f=35-70mm; design EFL 36.05-67.89mm",
      "F4.5-5.6 variable maximum aperture",
      "1 aspherical element / 2 aspherical surfaces",
      "2 ED elements",
      "Inner focus: G3 / GMr",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: [35, 70], design: [36.046, 67.893] },
  },

  source: {
    patentNumber: "US 2022/0236544 A1",
    patentYear: 2022,
    authors: ["Ryosuke Nagami"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -66.13,
      glass: "FD60 / FD60-W (Hoya, 805-255 dense flint)",
      role: "Front negative meniscus; high-index dense flint used to share wide-angle negative power with manageable curvature.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: -69.12,
      glass: "M-BACD12 / MC-BACD12 class (Hoya, 583-595)",
      role: "Second negative meniscus in G1; distributes front-group negative power while limiting astigmatism and distortion.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Plano-Concave Negative",
      nd: 1.48749,
      vd: 70.39,
      focalLengthMm: -47.05,
      glass: "FC5 / N-FK5 class (487-704 fluorocrown)",
      role: "Low-index high-Abbe negative component of the G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.91083,
      vd: 35.26,
      focalLengthMm: 31.57,
      glass: "TAFD35L / TAFD35 (Hoya, 911-353 high-index tantalum flint)",
      role: "High-index positive component of the G1 cemented doublet; the doublet nets approximately +100.84 mm in air.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 26.7,
      glass: "FCD1 (Hoya, 497-816 ED; S-FPL51 class)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.53887.",
      role: "Strong positive ED element immediately behind the stop; principal longitudinal-chromatic corrector in GMf.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: -51.9,
      glass: "M-BACD12 / MC-BACD12 class (Hoya, 583-595 moldable crown)",
      role: "Biaspheric negative meniscus in GMf; balances high-order spherical and field aberrations from L21 and the rear doublet.",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.51741,
      vd: 52.16,
      focalLengthMm: -26.01,
      glass: "E-CF6 (Hoya, 517-522 crown-flint)",
      role: "Negative component of the rear GMf achromatizing doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 17.93,
      glass: "FCD1 (Hoya, 497-816 ED; S-FPL51 class)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.53887.",
      role: "Symmetric ED positive component; the L23-L24 cemented doublet nets approximately +44.88 mm in air.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.56,
      focalLengthMm: -90.49,
      glass: "LAC12 (Hoya, 678-555 lanthanum crown)",
      role: "Object-side negative meniscus of the G3 focus group.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: -64.54,
      glass: "E-FD2 (Hoya, 648-338 flint)",
      role: "Image-side negative meniscus of the G3 focus group; its convex rear surface controls chief-ray incidence into G4.",
    },
    {
      id: 11,
      name: "L41",
      label: "L41",
      type: "Plano-Convex Positive",
      nd: 1.58144,
      vd: 40.75,
      focalLengthMm: 117.28,
      glass: "Light flint 581-408 class (CDGM H-QF50A / Ohara S-TIL25 / Hoya E-FL5 equivalent)",
      role: "Stationary final positive element; chief-ray and field-angle corrector before the sensor stack.",
    },
  ],

  surfaces: [
    { label: "1", R: 69.10435, d: 1.15, sd: 24.0, medium: 1 },
    { label: "2", R: 29.85137, d: 2.352, sd: 23.0 },
    { label: "3", R: 52.09331, d: 1.0, sd: 15.8, medium: 2 },
    { label: "4", R: 22.56329, d: 7.149, sd: 15.5 },
    { label: "5", R: "flat", d: 0.96, sd: 15.0, medium: 3 },
    { label: "6", R: 22.9374, d: 5.04, sd: 15.0, medium: 4 },
    { label: "7", R: 101.46452, sd: 14.8 },
    { label: "STO", R: "flat", d: 0.8 },
    { label: "9", R: 18.96999, d: 7.0, sd: 8.4, medium: 5 },
    { label: "10", R: -38.73407, d: 3.487, sd: 9.4 },
    {
      label: "11A",
      R: -14.21597,
      d: 1.89,
      sd: 9.6,
      medium: 6,
      // Exact patent coefficients for surface 11 (KA = 1 → K = 0; A3 = 0 omitted).
      asphere: {
        K: 0,
        A4: 1.9333299e-4,
        A6: -1.3836702e-7,
        A8: -1.78773e-8,
        A10: -2.495967e-11,
        A5: -3.2634652e-6,
        A7: 3.141274e-8,
        A9: 1.6054978e-9,
      },
    },
    {
      label: "12A",
      R: -28.12065,
      d: 1.5,
      sd: 9.8,
      // Exact patent coefficients for surface 12 (KA = 1 → K = 0; A3 = 0 omitted).
      asphere: {
        K: 0,
        A4: 2.093986e-4,
        A6: -1.1927223e-7,
        A8: -1.177491e-8,
        A10: 1.0444752e-11,
        A5: -2.7452878e-6,
        A7: 2.9002318e-8,
        A9: 6.5535125e-10,
      },
    },
    { label: "13", R: -70.09062, d: 0.86, sd: 9.6, medium: 7 },
    { label: "14", R: 16.7278, d: 6.17, sd: 9.4, medium: 8 },
    { label: "15", R: -16.7278, sd: 9.6 },
    { label: "16", R: 36.63948, d: 0.85, sd: 12.8, medium: 9 },
    { label: "17", R: 22.7234, d: 12.5, sd: 13.0 },
    { label: "18", R: -20.61508, d: 0.85, sd: 13.0, medium: 10 },
    { label: "19", R: -41.33431, sd: 13.0 },
    { label: "20", R: "flat", d: 6.04, sd: 23.5, medium: 11 },
    { label: "21", R: -68.1929, d: 22.09, sd: 24.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 36.046, nominalFNumber: 4.5, label: "Wide" },
      { focalLengthMm: 49.434, nominalFNumber: 4.8, label: "Middle" },
      { focalLengthMm: 67.893, nominalFNumber: 5.6, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.35,
    description:
      "Inner focus: the entire third group G3 / rear middle subgroup GMr (L31-L32) moves toward the image plane for close focus; G1, G2, and G4 remain fixed during focusing.",
  },

  gaps: {
    "7": {
      label: "DD[7] G1-G2",
      values: [
        [28.056, 28.056],
        [13.223, 13.223],
        [3.086, 3.086],
      ],
    },
    "15": {
      label: "DD[15] G2-G3",
      values: [
        [1.546, 3.5150162616636655],
        [2.342, 5.228710796070439],
        [2.836, 6.9284138636523505],
      ],
    },
    "19": {
      label: "DD[19] G3-G4",
      values: [
        [7.642, 5.672983738336335],
        [16.725, 13.838289203929563],
        [30.61, 26.51758613634765],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2 / GMf", fromSurface: "STO", toSurface: "15" },
    { text: "G3 / GMr / FOCUS", fromSurface: "16", toSurface: "19" },
    { text: "G4 / GE", fromSurface: "20", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  layout: { scFill: 0.58, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
