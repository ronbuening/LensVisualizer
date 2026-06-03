import type { LensDataInput } from "../../types/optics.js";

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
 * ║  The patent lists odd-order aspherical terms A5, A7, and A9 on     ║
 * ║  surfaces 11 and 12. The renderer supports even-order terms only,  ║
 * ║  so surfaces 11A and 12A use least-squares even-order refits over  ║
 * ║  the adopted render semi-diameters. Maximum sag residuals are      ║
 * ║  below 0.024 µm.                                                   ║
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
  key: "fujifilm-gf-35-70mm-f45-56-wr",
  maker: "Fujifilm",
  name: "FUJIFILM Fujinon GF 35-70mmF4.5-5.6 WR",
  subtitle: "US 2022/0236544 A1 Example 1 — FUJIFILM / Ryosuke Nagami",
  specs: [
    "11 elements / 9 groups",
    "f=35-70mm; design EFL 36.05-67.89mm",
    "F4.5-5.6 variable maximum aperture",
    "1 aspherical element / 2 aspherical surfaces",
    "2 ED elements",
    "Inner focus: G3 / GMr",
  ],

  focalLengthMarketing: [35, 70],
  focalLengthDesign: [36.046, 67.893],
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentYear: 2022,
  elementCount: 11,
  groupCount: 9,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: -66.13,
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
      fl: -69.12,
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
      fl: -47.05,
      glass: "FC5 / N-FK5 class (487-704 fluorocrown)",
      cemented: "D1",
      role: "Low-index high-Abbe negative component of the G1 cemented doublet.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.91083,
      vd: 35.26,
      fl: 31.57,
      glass: "TAFD35L / TAFD35 (Hoya, 911-353 high-index tantalum flint)",
      cemented: "D1",
      role: "High-index positive component of the G1 cemented doublet; the doublet nets approximately +100.84 mm in air.",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 26.7,
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
      fl: -51.9,
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
      fl: -26.01,
      glass: "E-CF6 (Hoya, 517-522 crown-flint)",
      cemented: "D2",
      role: "Negative component of the rear GMf achromatizing doublet.",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 17.93,
      glass: "FCD1 (Hoya, 497-816 ED; S-FPL51 class)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.53887.",
      cemented: "D2",
      role: "Symmetric ED positive component; the L23-L24 cemented doublet nets approximately +44.88 mm in air.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.56,
      fl: -90.49,
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
      fl: -64.54,
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
      fl: 117.28,
      glass: "Light flint 581-408 class (CDGM H-QF50A / Ohara S-TIL25 / Hoya E-FL5 equivalent)",
      role: "Stationary final positive element; chief-ray and field-angle corrector before the sensor stack.",
    },
  ],

  surfaces: [
    { label: "1", R: 69.10435, d: 1.15, nd: 1.80518, elemId: 1, sd: 24.0 },
    { label: "2", R: 29.85137, d: 2.352, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "3", R: 52.09331, d: 1.0, nd: 1.58313, elemId: 2, sd: 15.8 },
    { label: "4", R: 22.56329, d: 7.149, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "5", R: 1e15, d: 0.96, nd: 1.48749, elemId: 3, sd: 15.0 },
    { label: "6", R: 22.9374, d: 5.04, nd: 1.91083, elemId: 4, sd: 15.0 },
    { label: "7", R: 101.46452, d: 28.056, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "STO", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "9", R: 18.96999, d: 7.0, nd: 1.497, elemId: 5, sd: 8.4 },
    { label: "10", R: -38.73407, d: 3.487, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "11A", R: -14.21597, d: 1.89, nd: 1.58313, elemId: 6, sd: 9.6 },
    { label: "12A", R: -28.12065, d: 1.5, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: -70.09062, d: 0.86, nd: 1.51741, elemId: 7, sd: 9.6 },
    { label: "14", R: 16.7278, d: 6.17, nd: 1.497, elemId: 8, sd: 9.4 },
    { label: "15", R: -16.7278, d: 1.546, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "16", R: 36.63948, d: 0.85, nd: 1.6779, elemId: 9, sd: 12.8 },
    { label: "17", R: 22.7234, d: 12.5, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "18", R: -20.61508, d: 0.85, nd: 1.64769, elemId: 10, sd: 13.0 },
    { label: "19", R: -41.33431, d: 7.642, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "20", R: 1e15, d: 6.04, nd: 1.58144, elemId: 11, sd: 23.5 },
    { label: "21", R: -68.1929, d: 22.09, nd: 1.0, elemId: 0, sd: 24.0 },
  ],

  asph: {
    // Even-order refit of patent surface 11, which includes unsupported odd terms A5/A7/A9.
    "11A": {
      K: 0,
      A4: 1.883647449847e-4,
      A6: -7.298764381051e-7,
      A8: 1.910801140995e-9,
      A10: -3.582779572258e-11,
      A12: 5.462021204825e-13,
      A14: -1.822285194368e-15,
    },
    // Even-order refit of patent surface 12, which includes unsupported odd terms A5/A7/A9.
    "12A": {
      K: 0,
      A4: 2.050131455998e-4,
      A6: -5.781837037374e-7,
      A8: 1.89363445273e-9,
      A10: -4.901470145865e-11,
      A12: 5.647907702201e-13,
      A14: -1.635676991838e-15,
    },
  },

  var: {
    "7": [
      [28.056, 28.056],
      [13.223, 13.223],
      [3.086, 3.086],
    ],
    "15": [
      [1.546, 3.5150162616636655],
      [2.342, 5.228710796070439],
      [2.836, 6.9284138636523505],
    ],
    "19": [
      [7.642, 5.672983738336335],
      [16.725, 13.838289203929563],
      [30.61, 26.51758613634765],
    ],
  },

  varLabels: [
    ["7", "DD[7] G1-G2"],
    ["15", "DD[15] G2-G3"],
    ["19", "DD[19] G3-G4"],
  ],

  zoomPositions: [36.046, 49.434, 67.893],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Middle", "Tele"],

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

  closeFocusM: 0.35,
  focusDescription:
    "Inner focus: the entire third group G3 / rear middle subgroup GMr (L31-L32) moves toward the image plane for close focus; G1, G2, and G4 remain fixed during focusing.",

  nominalFno: [4.5, 4.8, 5.6],
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.58,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
