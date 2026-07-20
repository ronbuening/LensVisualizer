import type { LensDataInput } from "../../types/optics.js";

/**
 * Nikon AI Zoom-Nikkor 50-135mm f/3.5S
 *
 * Data source: US 4,497,547, Example 1 (Kiyoshi Hayashi / Nippon Kogaku K.K.).
 * Patent prescription: 16 elements / 13 groups; all-spherical; four-group positive/negative/negative/positive zoom.
 * Zoom variable gaps: D1 (surface 5), D2 (surface 11), D3a (surface 14, split before the stop).
 *
 * The patent gives the total G3-G4 variable gap D3 but draws the aperture stop between G3 and G4 without a tabulated
 * axial split. This data file places the stop 1.000 mm in front of 4r1; surface 14 therefore stores D3 - 1.000 mm.
 * With that inferred stop position, a 12.5 mm stop semi-diameter reproduces approximately f/3.5 at all three patent
 * zoom positions by independent paraxial entrance-pupil trace.
 *
 * Semi-diameters are inferred visualization clear apertures. The patent does not publish aperture radii. The values here
 * were constrained by paraxial marginal/chief ray envelopes, the 62 mm front filter thread, the smaller G2 variator
 * envelope shown in FIG. 1, element edge thickness, cross-gap sag clearance, and renderer-safe spherical rim limits.
 * They should not be read as Nikon production mechanical dimensions.
 *
 * The patent states that G1 moves for focusing, but it does not publish close-focus spacings. Focus is therefore recorded
 * as metadata only; the optical variable gaps model the patent's infinity-focus zoom states.
 */

const LENS_DATA = {
  key: "nikon-ai-zoom-nikkor-50-135mm-f35s",
  maker: "Nikon",
  name: "Nikon AI Zoom-Nikkor 50-135mm f/3.5S",
  subtitle: "US 4,497,547 Example 1 — Kiyoshi Hayashi / Nippon Kogaku",
  specs: [
    "16 elements / 13 groups",
    "51.35-131.5 mm design EFL",
    "f/3.5 constant aperture",
    "47.26°-18.06° patent field",
    "All-spherical Yamaji-type zoom",
  ],

  focalLengthMarketing: [50, 135],
  focalLengthDesign: [51.3508, 131.4989],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,497,547",
  patentAuthors: ["Kiyoshi Hayashi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1985,
  elementCount: 16,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "1L1",
      label: "G1 L1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -126.65,
      glass: "S-TIH6 (OHARA; 805254)",
      cemented: "D1",
      role: "Dense-flint negative lead element of the front achromat.",
    },
    {
      id: 2,
      name: "1L2",
      label: "G1 L2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.6,
      fl: 91.93,
      glass: "S-LAL12 class (OHARA; 678553, patent vd rounded to 55.6)",
      cemented: "D1",
      role: "Lanthanum-crown partner of the front achromat.",
    },
    {
      id: 3,
      name: "1L3",
      label: "G1 L3",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.4,
      fl: 127.22,
      glass: "S-BAH11 (OHARA; 667483)",
      role: "Primary positive power element of the front focus group.",
    },
    {
      id: 4,
      name: "2L1",
      label: "G2 L1",
      type: "Plano-Concave Negative",
      nd: 1.6968,
      vd: 55.6,
      fl: -31.69,
      glass: "S-LAL14 class (OHARA; 697555, patent vd rounded to 55.6)",
      role: "High-index leading negative variator element.",
    },
    {
      id: 5,
      name: "2L2",
      label: "G2 L2",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      fl: -73.77,
      glass: "S-LAH64 class (OHARA; 788474)",
      role: "Supplemental divergent power in the variator.",
    },
    {
      id: 6,
      name: "2L3",
      label: "G2 L3",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 56.03,
      glass: "S-TIH6 (OHARA; 805254)",
      role: "Dense-flint positive meniscus balancing variator power and color.",
    },
    {
      id: 7,
      name: "3L1",
      label: "G3 L1",
      type: "Biconcave Negative",
      nd: 1.67025,
      vd: 57.6,
      fl: -46.84,
      glass: "Unmatched (670576 lanthanum-crown code; no confirmed current catalog)",
      cemented: "D2",
      role: "Negative member of the compensator doublet.",
    },
    {
      id: 8,
      name: "3L2",
      label: "G3 L2",
      type: "Biconvex Positive",
      nd: 1.67163,
      vd: 38.9,
      fl: 82.22,
      glass: "Unmatched / S-NBH-class (672389 short-flint code)",
      cemented: "D2",
      role: "Positive chromatic partner in the compensator doublet.",
    },
    {
      id: 9,
      name: "4L1",
      label: "G4 L1",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 54,
      fl: 65.38,
      glass: "S-LAL8 class (OHARA; 713539, patent vd rounded to 54.0)",
      role: "Leading positive element of the first master sub-unit.",
    },
    {
      id: 10,
      name: "4L2",
      label: "G4 L2",
      type: "Positive Meniscus",
      nd: 1.56384,
      vd: 60.8,
      fl: 52.75,
      glass: "N-SK11 / BACD11 class (564608 dense-crown code)",
      cemented: "D3",
      role: "Low-index positive member of the G41 cemented doublet.",
    },
    {
      id: 11,
      name: "4L3",
      label: "G4 L3",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 41,
      fl: -67.32,
      glass: "Unmatched / S-LAH52-class (796410 lanthanum-flint code)",
      cemented: "D3",
      role: "High-index negative member creating the strong cemented-index step in G41.",
    },
    {
      id: 12,
      name: "4L4",
      label: "G4 L4",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59,
      fl: 47.13,
      glass: "S-NSL3 (OHARA; 518590)",
      role: "Positive member of the opposed G41 positive-negative pair.",
    },
    {
      id: 13,
      name: "4L5",
      label: "G4 L5",
      type: "Biconcave Negative",
      nd: 1.79504,
      vd: 28.6,
      fl: -41.2,
      glass: "J-LAFH3 (HIKARI; 795286)",
      role: "Strong negative member of the G41 positive-negative pair.",
    },
    {
      id: 14,
      name: "4L6",
      label: "G4 L6",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      fl: 101.23,
      glass: "S-BSL7 / N-BK7 class (517641 borosilicate-crown code)",
      role: "Single positive element forming the second master sub-unit G42.",
    },
    {
      id: 15,
      name: "4L7",
      label: "G4 L7",
      type: "Negative Meniscus",
      nd: 1.67003,
      vd: 47.1,
      fl: -69.89,
      glass: "N-BAF10 class (670471 barium-flint code)",
      role: "Negative leading element of the weakly divergent rear master sub-unit.",
    },
    {
      id: 16,
      name: "4L8",
      label: "G4 L8",
      type: "Plano-Convex Positive",
      nd: 1.70154,
      vd: 41,
      fl: 96.24,
      glass: "S-BAH27 class (OHARA; 702412, patent vd rounded to 41.0)",
      role: "Nearly plano-convex positive rear element balancing G43 lateral color.",
    },
  ],

  surfaces: [
    { label: "1", R: 95.858, d: 1.7, nd: 1.80518, elemId: 1, sd: 31.0 },
    { label: "2", R: 49.02, d: 8.0, nd: 1.6779, elemId: 2, sd: 30.5 },
    { label: "3", R: 214.552, d: 0.1, nd: 1.0, elemId: 0, sd: 29.0 },
    { label: "4", R: 75.769, d: 5.0, nd: 1.66672, elemId: 3, sd: 27.0 },
    { label: "5", R: 691.304, d: 2.956, nd: 1.0, elemId: 0, sd: 27.0 },

    { label: "6", R: -708.168, d: 1.25, nd: 1.6968, elemId: 4, sd: 12.8 },
    { label: "7", R: 22.809, d: 5.0, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "8", R: -175.109, d: 1.15, nd: 1.78797, elemId: 5, sd: 12.5 },
    { label: "9", R: 87.266, d: 0.5, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "10", R: 35.758, d: 3.1, nd: 1.80518, elemId: 6, sd: 13.0 },
    { label: "11", R: 165.776, d: 27.727, nd: 1.0, elemId: 0, sd: 13.0 },

    { label: "12", R: -51.423, d: 1.15, nd: 1.67025, elemId: 7, sd: 13.5 },
    { label: "13", R: 81.327, d: 2.95, nd: 1.67163, elemId: 8, sd: 13.5 },
    { label: "14", R: -169.527, d: 8.846, nd: 1.0, elemId: 0, sd: 13.5 },

    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 12.5 },

    { label: "15", R: 174.041, d: 3.25, nd: 1.713, elemId: 9, sd: 14.0 },
    { label: "16", R: -63.18, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "17", R: 50.356, d: 5.0, nd: 1.56384, elemId: 10, sd: 14.5 },
    { label: "18", R: -70.071, d: 1.1, nd: 1.79631, elemId: 11, sd: 14.5 },
    { label: "19", R: 229.755, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "20", R: 25.187, d: 5.6, nd: 1.51823, elemId: 12, sd: 14.5 },
    { label: "21", R: -745.542, d: 1.0, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "22", R: -262.417, d: 2.0, nd: 1.79504, elemId: 13, sd: 14.0 },
    { label: "23", R: 37.552, d: 10.15, nd: 1.0, elemId: 0, sd: 13.8 },

    { label: "24", R: 111.689, d: 3.0, nd: 1.5168, elemId: 14, sd: 14.5 },
    { label: "25", R: -97.52, d: 20.85, nd: 1.0, elemId: 0, sd: 14.6 },

    { label: "26", R: -18.386, d: 2.0, nd: 1.67003, elemId: 15, sd: 14.2 },
    { label: "27", R: -31.592, d: 0.1, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "28", R: 941.473, d: 4.55, nd: 1.70154, elemId: 16, sd: 15.0 },
    { label: "29", R: -72.586, d: 39.997, nd: 1.0, elemId: 0, sd: 15.8 },
  ],

  asph: {},

  zoomPositions: [51.35, 90, 131.5],
  zoomLabels: ["51 mm", "135 mm"],
  zoomStep: 0.004,
  var: {
    "5": [
      [2.956, 2.956],
      [24.277, 24.277],
      [35.427, 35.427],
    ],
    "11": [
      [27.727, 27.727],
      [6.833, 6.833],
      [2.852, 2.852],
    ],
    "14": [
      [8.846, 8.846],
      [8.418, 8.418],
      [1.251, 1.251],
    ],
  },
  varLabels: [
    ["5", "D1 (G1-G2)"],
    ["11", "D2 (G2-G3)"],
    ["14", "D3a (G3-STO)"],
  ],

  groups: [
    { text: "G1 Focus", fromSurface: "1", toSurface: "5" },
    { text: "G2 Variator", fromSurface: "6", toSurface: "11" },
    { text: "G3 Compensator", fromSurface: "12", toSurface: "14" },
    { text: "STO", fromSurface: "STO", toSurface: "STO" },
    { text: "G41 Master", fromSurface: "15", toSurface: "23" },
    { text: "G42", fromSurface: "24", toSurface: "25" },
    { text: "G43", fromSurface: "26", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  focusDescription:
    "Front-group unit focus in production and patent text; patent close-focus spacings are not published, so this file models only the infinity-focus zoom states.",
  closeFocusM: 0.6,
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 7,
  apertureBladeRoundedness: 0.1,
  maxFstop: 32,
  offAxisFieldFrac: 0.5,
  scFill: 0.7,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
