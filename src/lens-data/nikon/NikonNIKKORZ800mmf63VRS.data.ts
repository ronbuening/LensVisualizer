import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — NIKON NIKKOR Z 800mm f/6.3 VR S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2023-23323 A, Example 6 (OL6).                       ║
 * ║  22 physical lens elements / 14 air-separated assemblies.        ║
 * ║  Model entries: 24 elements because the two bonded PF media are   ║
 * ║  represented separately from the L13 substrate. elementCount      ║
 * ║  remains the published/marketed physical count of 22.             ║
 * ║                                                                    ║
 * ║  Focus status: PUBLISHED. G2 (L21) moves 23.75122 mm imageward    ║
 * ║  from infinity to the published near state. The two variable      ║
 * ║  gaps remain complementary: d1 + d2 = 68.50000 mm. Intermediate   ║
 * ║  slider positions are viewer interpolation, not a published       ║
 * ║  motor law.                                                        ║
 * ║                                                                    ║
 * ║  Source surface 14 is an explicitly virtual same-index air plane   ║
 * ║  and is omitted. Its 17.5002 mm spacing is folded into source     ║
 * ║  surface 13, preserving axial position and first-order behavior.   ║
 * ║                                                                    ║
 * ║  No uniform scaling is applied. Marketed 800 mm / f/6.3 values are ║
 * ║  kept separate from patent design 779.99933 mm / f/6.41999.        ║
 * ║  nominalFNumber uses the patent/model design value 6.41999.        ║
 * ║                                                                    ║
 * ║  The physical stop diameter is not published. The stop radius is   ║
 * ║  derived from the design f-number; agreement with FNO is therefore ║
 * ║  calibration, not independent evidence of the diaphragm diameter.  ║
 * ║                                                                    ║
 * ║  No source semi-diameter table exists. SDs are estimated from      ║
 * ║  Figure 11 rims (≈0.348 mm/px at 300 dpi, scale from the L11→L13  ║
 * ║  vertex spacing) and checked against the axial marginal and chief ║
 * ║  rays traced with the PF surface's power, plus edge thickness,    ║
 * ║  rim slope, and cross-gap intrusion. L16 is held at 33.8 mm for a  ║
 * ║  0.57 mm edge.                                                     ║
 * ║                                                                    ║
 * ║  Glass names below are coordinate-compatible catalog matches, not ║
 * ║  proof of Nikon's supplier or production melt. The PF media are    ║
 * ║  explicit Unmatched dispositions; L34 (patent 627592) traces on    ║
 * ║  the nearest ED-class curve, J-PSKH8. ED rows (L16, L34, L37) and  ║
 * ║  the SR row (L18) follow Nikon's lens-construction diagram.        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-z-800mm-f63-vr-s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 800mm f/6.3 VR S",
  subtitle: "JP 2023-23323 A, Example 6 — inferred production correlation",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "22 ELEMENTS / 14 GROUPS",
      "PATENT f = 779.99933 mm",
      "PATENT F/6.41999",
      "PF PHASE SURFACE",
      "PUBLISHED INNER FOCUS",
    ],
    elementCount: 22,
    groupCount: 14,
    acceptsTeleconverters: true, // Nikon lists Z TELECONVERTER TC-1.4x compatibility
    focalLengthMm: { marketing: 800, design: 779.99933 },
    fNumber: { marketing: 6.3, design: 6.41999 },
  },

  source: {
    patentNumber: "JP 2023-23323 A",
    patentYear: 2023,
    authors: ["Masaki Ito", "Satoshi Miwa", "Fumiaki Ohtake"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      focalLengthMm: 767.107183,
      glass: "J-FK5 (HIKARI)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      focalLengthMm: 390.984877,
      glass: "J-FK5 (HIKARI)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 substrate",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.13,
      indexReference: "d",
      focalLengthMm: 806.239485,
      glass: "J-BK7A (HIKARI)",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "Epf-A",
      label: "PF optical medium A",
      type: "Bonded PF Optical Medium",
      nd: 1.5295,
      vd: 36.27,
      indexReference: "d",
      glass: "Unmatched (PF optical material; nd=1.529500, vd=36.27)",
      diagramLabel: "Epf-A",
    },
    {
      id: 5,
      name: "Epf-B",
      label: "PF optical medium B",
      type: "Bonded PF Optical Medium",
      nd: 1.5498,
      vd: 50.91,
      indexReference: "d",
      glass: "Unmatched (PF optical material; nd=1.549800, vd=50.91)",
      diagramLabel: "Epf-B",
    },
    {
      id: 6,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      focalLengthMm: 186.179853,
      glass: "J-FK5 (HIKARI)",
      diagramLabel: "L14",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.27,
      indexReference: "d",
      focalLengthMm: -70.442037,
      glass: "J-LASFH13 (HIKARI)",
      diagramLabel: "L15",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L16",
      label: "L16",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      indexReference: "d",
      focalLengthMm: 136.910298,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 6 of 22 marked ED); the patent publishes nd/νd only.",
      diagramLabel: "L16",
    },
    {
      id: 9,
      name: "L17",
      label: "L17",
      type: "Biconcave Negative",
      nd: 1.66755,
      vd: 41.87,
      indexReference: "d",
      focalLengthMm: -83.964199,
      glass: "J-BASF6 (HIKARI)",
      diagramLabel: "L17",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L18",
      label: "L18",
      type: "Biconvex Positive",
      nd: 1.66382,
      vd: 27.35,
      indexReference: "d",
      focalLengthMm: 84.499773,
      glass: "J-SFH4 (HIKARI)",
      apd: "patent",
      apdNote:
        "SR element: Nikon's construction diagram marks element 8 as the SR lens, and the patent singles L18 out as the smallest-νd positive lens of G1 with conditions on its θgF (conditions (2) and (14)); stored line indices give θgF = 0.6319.",
      diagramLabel: "L18",
      cemented: "D2",
      dPgF: 0.0334,
      nC: 1.656918,
      nF: 1.681192,
      ng: 1.696531,
    },
    {
      id: 11,
      name: "L21",
      label: "L21 focus element",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      focalLengthMm: -236.790289,
      glass: "J-FK5 (HIKARI)",
      diagramLabel: "L21",
    },
    {
      id: 12,
      name: "L31",
      label: "L31",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.12,
      indexReference: "d",
      focalLengthMm: -39.381492,
      glass: "J-LASFH16 (HIKARI)",
      diagramLabel: "L31",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.730371,
      vd: 32.23,
      indexReference: "d",
      focalLengthMm: 41.364323,
      glass: "NBFD32 (HOYA)",
      diagramLabel: "L32",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: -50.976209,
      glass: "J-LASF016 (HIKARI)",
      diagramLabel: "L33",
    },
    {
      id: 15,
      name: "L34",
      label: "L34",
      type: "Biconcave Negative",
      nd: 1.627496,
      vd: 59.24,
      indexReference: "d",
      focalLengthMm: -46.638703,
      glass: "J-PSKH8 (HIKARI) nearest ED-class curve — patent 627592, Δnd +0.00096",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 13 of 22 marked ED); the patent publishes nd/νd only.",
      diagramLabel: "L34",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L35",
      label: "L35",
      type: "Positive Meniscus",
      nd: 1.79504,
      vd: 28.69,
      indexReference: "d",
      focalLengthMm: 52.039526,
      glass: "J-LAFH3 (HIKARI)",
      diagramLabel: "L35",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      indexReference: "d",
      focalLengthMm: 29.440057,
      glass: "J-KZFH1 (HIKARI)",
      diagramLabel: "L36",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L37",
      label: "L37",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      indexReference: "d",
      focalLengthMm: -57.955204,
      glass: "J-PSKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 16 of 22 marked ED); the patent publishes nd/νd only.",
      diagramLabel: "L37",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L38",
      label: "L38",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.33,
      indexReference: "d",
      focalLengthMm: -25.280816,
      glass: "J-LASFH21 (HIKARI)",
      diagramLabel: "L38",
      cemented: "D6",
    },
    {
      id: 20,
      name: "L39",
      label: "L39",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 36.94,
      indexReference: "d",
      focalLengthMm: 34.837125,
      glass: "J-F3 (HIKARI)",
      diagramLabel: "L39",
      cemented: "D6",
    },
    {
      id: 21,
      name: "L310",
      label: "L310",
      type: "Biconvex Positive",
      nd: 1.730371,
      vd: 32.23,
      indexReference: "d",
      focalLengthMm: 31.920817,
      glass: "NBFD32 (HOYA)",
      diagramLabel: "L310",
      cemented: "D7",
    },
    {
      id: 22,
      name: "L311",
      label: "L311",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: -22.250821,
      glass: "J-LASF016 (HIKARI)",
      diagramLabel: "L311",
      cemented: "D7",
    },
    {
      id: 23,
      name: "L312",
      label: "L312",
      type: "Biconvex Positive",
      nd: 1.85,
      vd: 27.03,
      indexReference: "d",
      focalLengthMm: 23.709997,
      glass: "J-LASFH23 (HIKARI)",
      diagramLabel: "L312",
      cemented: "D8",
    },
    {
      id: 24,
      name: "L313",
      label: "L313",
      type: "Biconcave Negative",
      nd: 1.945944,
      vd: 17.98,
      indexReference: "d",
      focalLengthMm: -30.9177,
      glass: "FDS18 (HOYA)",
      diagramLabel: "L313",
      cemented: "D8",
    },
  ],

  surfaces: [
    { label: "1", R: 488.6452, d: 7.9, sd: 63, medium: 1 },
    { label: "2", R: -1584.8559, d: 0.2, sd: 63 },
    { label: "3", R: 136.473, d: 13.4, sd: 61.6, medium: 2 },
    { label: "4", R: 465.0973, d: 89.1101, sd: 61.6 },
    { label: "5", R: 114.2433, d: 7, sd: 38.3, medium: 3 },
    { label: "6", R: 154.1141, d: 0.1, sd: 38.3, medium: 4 },
    {
      label: "7",
      R: 154.1141,
      d: 0.25,
      sd: 38.3,
      medium: 5,
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [
          { radialPower: 2, coefficient: -4.02091e-5 },
          { radialPower: 4, coefficient: -2.29061e-10 },
        ],
      },
    },
    { label: "8", R: 154.1141, d: 5, sd: 38.3 },
    { label: "9", R: 94.801, d: 8.9096, sd: 34.8, medium: 6 },
    { label: "10", R: -2064.0654, d: 2.3, sd: 34.8, medium: 7 },
    { label: "11", R: 65.716, d: 2.5, sd: 34.8 },
    { label: "12", R: 66.174, d: 9.5854, sd: 33.8, medium: 8 },
    { label: "13", R: 2165.2785, d: 17.5002, sd: 33.8 },
    { label: "15", R: -277.4112, d: 2, sd: 27.1, medium: 9 },
    { label: "16", R: 70.4454, d: 7.5446, sd: 27.1, medium: 10 },
    { label: "17", R: -263.5468, sd: 27.1 },
    { label: "18", R: 523.4497, d: 1.2, sd: 22.6, medium: 11 },
    { label: "19", R: 94.5055, sd: 22.6 },
    // Physical stop diameter is not published; radius derived from the design f-number, patent FNO=6.41999.
    { label: "STO", R: "flat", d: 6.7123 },
    { label: "21", R: -393.7363, d: 1.2, sd: 11.5, medium: 12 },
    { label: "22", R: 43.8736, d: 2.987, sd: 11.5, medium: 13 },
    { label: "23", R: -94.2293, d: 3.3713, sd: 11.5 },
    { label: "24", R: -288.4503, d: 1.2, sd: 11.5, medium: 14 },
    { label: "25", R: 45.6878, d: 3.0157, sd: 11.5 },
    { label: "26", R: -164.6808, d: 1.2, sd: 12.5, medium: 15 },
    { label: "27", R: 35.6904, d: 3.4759, sd: 12.5, medium: 16 },
    { label: "28", R: 248.6215, d: 3.4478, sd: 12.5 },
    { label: "29", R: 33.075, d: 7.7564, sd: 13.9, medium: 17 },
    { label: "30", R: -36.1356, d: 1.8, sd: 13.9, medium: 18 },
    { label: "31", R: 720.1003, d: 3, sd: 13.9 },
    { label: "32", R: -89.4524, d: 1.8, sd: 14.3, medium: 19 },
    { label: "33", R: 33.3333, d: 6.2498, sd: 14.3, medium: 20 },
    { label: "34", R: -55.1763, d: 4.5, sd: 14.3 },
    { label: "35", R: 59.9212, d: 6.8358, sd: 16.4, medium: 21 },
    { label: "36", R: -36.3245, d: 1.8, sd: 16.4, medium: 22 },
    { label: "37", R: 33.3333, d: 3, sd: 16.4 },
    { label: "38", R: 39.9579, d: 10.7333, sd: 17.1, medium: 23 },
    { label: "39", R: -35.6438, d: 1.8, sd: 17.1, medium: 24 },
    { label: "40", R: 166.95, d: 74.56937, sd: 17.1 },
  ],

  focus: {
    closeFocusM: 5,
    description:
      "PUBLISHED two-state internal focus: G2 (L21) translates 23.75122 mm imageward from infinity to 5.0 m; d1+d2 remains 68.50000 mm. Intermediate slider positions are linear viewer interpolation, not a published motor law.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "17": { label: "d1", values: [[6, 29.75122]] }, "19": { label: "d2", values: [[62.5, 38.74878]] } },

  aperture: { nominalFNumber: 6.41999, fStops: [6.41999, 8, 11, 16] },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "17" },
    { text: "G2 (-) FOCUS", fromSurface: "18", toSurface: "19" },
    { text: "G3 (-)", fromSurface: "21", toSurface: "40" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
    { text: "D5", fromSurface: "29", toSurface: "31" },
    { text: "D6", fromSurface: "32", toSurface: "34" },
    { text: "D7", fromSurface: "35", toSurface: "37" },
    { text: "D8", fromSurface: "38", toSurface: "40" },
  ],

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
