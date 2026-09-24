import type { LensDataInput } from "../../types/optics.js";

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
 * ║  No uniform scaling is applied. Marketed 800 mm / f/6.3 values    ║
 * ║  are kept separate from patent design 779.99933 mm / f/6.41999.   ║
 * ║  nominalFno uses the patent/model design value 6.41999.            ║
 * ║                                                                    ║
 * ║  The physical stop diameter is not published. STO.sd is a model   ║
 * ║  calibration to the published FNO through the pre-stop paraxial   ║
 * ║  pupil matrix; agreement with FNO is therefore calibration, not    ║
 * ║  independent evidence of the diaphragm diameter.                  ║
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
  key: "nikon-nikkor-z-800mm-f63-vr-s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 800mm f/6.3 VR S",
  subtitle: "JP 2023-23323 A, Example 6 — inferred production correlation",
  specs: [
    "22 ELEMENTS / 14 GROUPS",
    "PATENT f = 779.99933 mm",
    "PATENT F/6.41999",
    "PF PHASE SURFACE",
    "PUBLISHED INNER FOCUS",
  ],

  focalLengthMarketing: 800,
  focalLengthDesign: 779.99933,
  apertureMarketing: 6.3,
  apertureDesign: 6.41999,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2023-23323 A",
  patentAuthors: ["Masaki Ito", "Satoshi Miwa", "Fumiaki Ohtake"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2023,
  elementCount: 22,
  groupCount: 14,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      fl: 767.107183,
      glass: "J-FK5 (HIKARI)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      fl: 390.984877,
      glass: "J-FK5 (HIKARI)",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13 substrate",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.13,
      indexReference: "d",
      fl: 806.239485,
      glass: "J-BK7A (HIKARI)",
    },
    {
      id: 4,
      name: "Epf-A",
      diagramLabel: "Epf-A",
      label: "PF optical medium A",
      type: "Bonded PF Optical Medium",
      nd: 1.5295,
      vd: 36.27,
      indexReference: "d",
      glass: "Unmatched (PF optical material; nd=1.529500, vd=36.27)",
    },
    {
      id: 5,
      name: "Epf-B",
      diagramLabel: "Epf-B",
      label: "PF optical medium B",
      type: "Bonded PF Optical Medium",
      nd: 1.5498,
      vd: 50.91,
      indexReference: "d",
      glass: "Unmatched (PF optical material; nd=1.549800, vd=50.91)",
    },
    {
      id: 6,
      name: "L14",
      diagramLabel: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      fl: 186.179853,
      glass: "J-FK5 (HIKARI)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L15",
      diagramLabel: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.27,
      indexReference: "d",
      fl: -70.442037,
      glass: "J-LASFH13 (HIKARI)",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L16",
      diagramLabel: "L16",
      label: "L16",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      indexReference: "d",
      fl: 136.910298,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 6 of 22 marked ED); the patent publishes nd/νd only.",
    },
    {
      id: 9,
      name: "L17",
      diagramLabel: "L17",
      label: "L17",
      type: "Biconcave Negative",
      nd: 1.66755,
      vd: 41.87,
      indexReference: "d",
      fl: -83.964199,
      glass: "J-BASF6 (HIKARI)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L18",
      diagramLabel: "L18",
      label: "L18",
      type: "Biconvex Positive",
      nd: 1.66382,
      vd: 27.35,
      indexReference: "d",
      fl: 84.499773,
      glass: "J-SFH4 (HIKARI)",
      apd: "patent",
      apdNote:
        "SR element: Nikon's construction diagram marks element 8 as the SR lens, and the patent singles L18 out as the smallest-νd positive lens of G1 with conditions on its θgF (conditions (2) and (14)); stored line indices give θgF = 0.6319.",
      nC: 1.656918,
      nF: 1.681192,
      ng: 1.696531,
      dPgF: 0.0334,
      cemented: "D2",
    },
    {
      id: 11,
      name: "L21",
      diagramLabel: "L21",
      label: "L21 focus element",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.32,
      indexReference: "d",
      fl: -236.790289,
      glass: "J-FK5 (HIKARI)",
    },
    {
      id: 12,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.12,
      indexReference: "d",
      fl: -39.381492,
      glass: "J-LASFH16 (HIKARI)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.730371,
      vd: 32.23,
      indexReference: "d",
      fl: 41.364323,
      glass: "NBFD32 (HOYA)",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      fl: -50.976209,
      glass: "J-LASF016 (HIKARI)",
    },
    {
      id: 15,
      name: "L34",
      diagramLabel: "L34",
      label: "L34",
      type: "Biconcave Negative",
      nd: 1.627496,
      vd: 59.24,
      indexReference: "d",
      fl: -46.638703,
      glass: "J-PSKH8 (HIKARI) nearest ED-class curve — patent 627592, Δnd +0.00096",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 13 of 22 marked ED); the patent publishes nd/νd only.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L35",
      diagramLabel: "L35",
      label: "L35",
      type: "Positive Meniscus",
      nd: 1.79504,
      vd: 28.69,
      indexReference: "d",
      fl: 52.039526,
      glass: "J-LAFH3 (HIKARI)",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L36",
      diagramLabel: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      indexReference: "d",
      fl: 29.440057,
      glass: "J-KZFH1 (HIKARI)",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L37",
      diagramLabel: "L37",
      label: "L37",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      indexReference: "d",
      fl: -57.955204,
      glass: "J-PSKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's published lens-construction diagram (element 16 of 22 marked ED); the patent publishes nd/νd only.",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L38",
      diagramLabel: "L38",
      label: "L38",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.33,
      indexReference: "d",
      fl: -25.280816,
      glass: "J-LASFH21 (HIKARI)",
      cemented: "D6",
    },
    {
      id: 20,
      name: "L39",
      diagramLabel: "L39",
      label: "L39",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 36.94,
      indexReference: "d",
      fl: 34.837125,
      glass: "J-F3 (HIKARI)",
      cemented: "D6",
    },
    {
      id: 21,
      name: "L310",
      diagramLabel: "L310",
      label: "L310",
      type: "Biconvex Positive",
      nd: 1.730371,
      vd: 32.23,
      indexReference: "d",
      fl: 31.920817,
      glass: "NBFD32 (HOYA)",
      cemented: "D7",
    },
    {
      id: 22,
      name: "L311",
      diagramLabel: "L311",
      label: "L311",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      fl: -22.250821,
      glass: "J-LASF016 (HIKARI)",
      cemented: "D7",
    },
    {
      id: 23,
      name: "L312",
      diagramLabel: "L312",
      label: "L312",
      type: "Biconvex Positive",
      nd: 1.85,
      vd: 27.03,
      indexReference: "d",
      fl: 23.709997,
      glass: "J-LASFH23 (HIKARI)",
      cemented: "D8",
    },
    {
      id: 24,
      name: "L313",
      diagramLabel: "L313",
      label: "L313",
      type: "Biconcave Negative",
      nd: 1.945944,
      vd: 17.98,
      indexReference: "d",
      fl: -30.9177,
      glass: "FDS18 (HOYA)",
      cemented: "D8",
    },
  ],

  surfaces: [
    { label: "1", R: 488.6452, d: 7.9, nd: 1.48749, elemId: 1, sd: 63 },
    { label: "2", R: -1584.8559, d: 0.2, nd: 1, elemId: 0, sd: 63 },
    { label: "3", R: 136.473, d: 13.4, nd: 1.48749, elemId: 2, sd: 61.6 },
    { label: "4", R: 465.0973, d: 89.1101, nd: 1, elemId: 0, sd: 61.6 },
    { label: "5", R: 114.2433, d: 7, nd: 1.5168, elemId: 3, sd: 38.3 },
    { label: "6", R: 154.1141, d: 0.1, nd: 1.5295, elemId: 4, sd: 38.3 },
    {
      label: "7",
      R: 154.1141,
      d: 0.25,
      nd: 1.5498,
      elemId: 5,
      sd: 38.3,
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
    { label: "8", R: 154.1141, d: 5, nd: 1, elemId: 0, sd: 38.3 },
    { label: "9", R: 94.801, d: 8.9096, nd: 1.48749, elemId: 6, sd: 34.8 },
    { label: "10", R: -2064.0654, d: 2.3, nd: 1.90366, elemId: 7, sd: 34.8 },
    { label: "11", R: 65.716, d: 2.5, nd: 1, elemId: 0, sd: 34.8 },
    { label: "12", R: 66.174, d: 9.5854, nd: 1.49782, elemId: 8, sd: 33.8 },
    { label: "13", R: 2165.2785, d: 17.5002, nd: 1, elemId: 0, sd: 33.8 },
    { label: "15", R: -277.4112, d: 2, nd: 1.66755, elemId: 9, sd: 27.1 },
    { label: "16", R: 70.4454, d: 7.5446, nd: 1.66382, elemId: 10, sd: 27.1 },
    { label: "17", R: -263.5468, d: 6, nd: 1, elemId: 0, sd: 27.1 },
    { label: "18", R: 523.4497, d: 1.2, nd: 1.48749, elemId: 11, sd: 22.6 },
    { label: "19", R: 94.5055, d: 62.5, nd: 1, elemId: 0, sd: 22.6 },
    // Physical stop diameter is not published; this sd is calibrated to patent FNO=6.41999.
    { label: "STO", R: 1e15, d: 6.7123, nd: 1, elemId: 0, sd: 10.5056371475 },
    { label: "21", R: -393.7363, d: 1.2, nd: 2.001, elemId: 12, sd: 11.5 },
    { label: "22", R: 43.8736, d: 2.987, nd: 1.730371, elemId: 13, sd: 11.5 },
    { label: "23", R: -94.2293, d: 3.3713, nd: 1, elemId: 0, sd: 11.5 },
    { label: "24", R: -288.4503, d: 1.2, nd: 1.7725, elemId: 14, sd: 11.5 },
    { label: "25", R: 45.6878, d: 3.0157, nd: 1, elemId: 0, sd: 11.5 },
    { label: "26", R: -164.6808, d: 1.2, nd: 1.627496, elemId: 15, sd: 12.5 },
    { label: "27", R: 35.6904, d: 3.4759, nd: 1.79504, elemId: 16, sd: 12.5 },
    { label: "28", R: 248.6215, d: 3.4478, nd: 1, elemId: 0, sd: 12.5 },
    { label: "29", R: 33.075, d: 7.7564, nd: 1.61266, elemId: 17, sd: 13.9 },
    { label: "30", R: -36.1356, d: 1.8, nd: 1.59319, elemId: 18, sd: 13.9 },
    { label: "31", R: 720.1003, d: 3, nd: 1, elemId: 0, sd: 13.9 },
    { label: "32", R: -89.4524, d: 1.8, nd: 1.95375, elemId: 19, sd: 14.3 },
    { label: "33", R: 33.3333, d: 6.2498, nd: 1.61293, elemId: 20, sd: 14.3 },
    { label: "34", R: -55.1763, d: 4.5, nd: 1, elemId: 0, sd: 14.3 },
    { label: "35", R: 59.9212, d: 6.8358, nd: 1.730371, elemId: 21, sd: 16.4 },
    { label: "36", R: -36.3245, d: 1.8, nd: 1.7725, elemId: 22, sd: 16.4 },
    { label: "37", R: 33.3333, d: 3, nd: 1, elemId: 0, sd: 16.4 },
    { label: "38", R: 39.9579, d: 10.7333, nd: 1.85, elemId: 23, sd: 17.1 },
    { label: "39", R: -35.6438, d: 1.8, nd: 1.945944, elemId: 24, sd: 17.1 },
    { label: "40", R: 166.95, d: 74.56937, nd: 1, elemId: 0, sd: 17.1 },
  ],

  asph: {},

  var: {
    "17": [6, 29.75122],
    "19": [62.5, 38.74878],
  },
  varLabels: [
    ["17", "d1"],
    ["19", "d2"],
  ],

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

  closeFocusM: 5,
  focusDescription:
    "PUBLISHED two-state internal focus: G2 (L21) translates 23.75122 mm imageward from infinity to 5.0 m; d1+d2 remains 68.50000 mm. Intermediate slider positions are linear viewer interpolation, not a published motor law.",

  nominalFno: 6.41999,
  fstopSeries: [6.41999, 8, 11, 16],

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
