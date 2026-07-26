import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI ZOOM-NIKKOR 80-200mm f/4                          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 4,452,513, Embodiment 1 (Yoshinari Hamanishi /       ║
 * ║  Nippon Kogaku K.K.). Exact active prescription: 13 elements in 9       ║
 * ║  air-separated groups, 22 spherical refracting surfaces.                ║
 * ║                                                                          ║
 * ║  Production identity: Nikon's instruction manual specifies 80-200mm     ║
 * ║  f/4, 13 elements in 9 groups, Nikon bayonet mount, 135-format coverage,║
 * ║  and a 1.2 m focal-plane minimum focus distance. The patent design is    ║
 * ║  80.0-195.2 mm f/4 and is not dimensionally rescaled.                   ║
 * ║                                                                          ║
 * ║  Zoom variable gaps: D5, D11, and D14. Only the patent-published wide   ║
 * ║  and tele endpoint spacings are stored; intermediate slider positions   ║
 * ║  are linear interpolation, not additional patent-published states.      ║
 * ║                                                                          ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. Nikon specifies parfocal     ║
 * ║  focusing to 1.2 m. G1-only travel was solved from the patent arrays    ║
 * ║  with G2-G4 and the image plane fixed: 17.047774 mm at 80 mm and        ║
 * ║  17.048840 mm at 195.2 mm. The patent's 0.998 m and 0.680 m test states ║
 * ║  are not exposed as production focus endpoints.                         ║
 * ║                                                                          ║
 * ║  Stop inference: the patent omits an iris surface. STO is inserted at   ║
 * ║  the G4 entrance, immediately before r15. A 14.065342 mm stop           ║
 * ║  semi-diameter yields f/4.000000 at 80 mm and f/4.000037 at 195.2 mm;   ║
 * ║  the inferred position also reproduces the patent h∞ chief-ray datum    ║
 * ║  to about 0.12 mm in the paraxial model.                                ║
 * ║                                                                          ║
 * ║  Semi-diameters are inferred from f/4 marginal rays at infinity and     ║
 * ║  1.2 m, the patent Fig. 3 section, and Nikon's 62 mm attachment /       ║
 * ║  73 mm barrel envelope. Full-field mechanical vignetting is retained.   ║
 * ║  A normalized FIG. 3 check reduced the oversized G1 profile: L11's       ║
 * ║  clear radius is about 23.5 mm and the smaller L12 is about 18.5 mm.     ║
 * ║  gapSagFrac=0.96 is required at the r9-r10 air lens; the selected         ║
 * ║  13.8 mm shared semi-diameter leaves about 0.182 mm physical rim gap.   ║
 * ║                                                                          ║
 * ║  Glass vendors and line indices are unpublished. Six-digit nd-vd classes ║
 * ║  are retained except for coefficient-backed equivalents; J-LAFH3        ║
 * ║  reproduces L42's d-line index and one-decimal Abbe class. nC, nF, ng,   ║
 * ║  and dPgF are therefore omitted.                                         ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-zoom-nikkor-80-200mm-f4",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 80-200mm f/4",
  subtitle: "US 4,452,513, Embodiment 1 — unscaled 80.0-195.2mm patent design",
  specs: [
    "13 ELEMENTS / 9 GROUPS",
    "80-200mm f/4 (MARKETED)",
    "80.0-195.2mm f/4 (DESIGN)",
    "1.2m CLOSE FOCUS",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80, 195.2],
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,452,513",
  patentAuthors: ["Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1984,
  elementCount: 13,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11a",
      label: "G1 front negative",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -185.794,
      glass: "805254 — dense flint class (catalog unresolved)",
      cemented: "L11",
      role: "Front member of the cemented G1 focusing component.",
    },
    {
      id: 2,
      name: "L11b",
      label: "G1 front positive",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 93.228,
      glass: "620603 — crown class (catalog unresolved)",
      cemented: "L11",
      role: "Positive partner in the cemented G1 focusing component.",
    },
    {
      id: 3,
      name: "L12",
      label: "G1 rear positive",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: 332.452,
      glass: "517641 — crown class (catalog unresolved)",
      role: "Rear singlet of the convergent G1 focusing group.",
    },
    {
      id: 4,
      name: "L2a",
      label: "G2 triplet front negative",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      fl: -58.912,
      glass: "788475 — dense lanthanum glass class (catalog unresolved)",
      cemented: "L21",
      role: "Front negative member of the G2 variator triplet.",
    },
    {
      id: 5,
      name: "L2b",
      label: "G2 triplet positive",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      fl: 31.536,
      glass: "755276 — dense flint class (catalog unresolved)",
      cemented: "L21",
      role: "Positive central member of the G2 variator triplet.",
    },
    {
      id: 6,
      name: "L2c",
      label: "G2 triplet rear negative",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      fl: -40.091,
      glass: "581408 — light flint class (catalog unresolved)",
      cemented: "L21",
      role: "Rear negative member of the G2 variator triplet.",
    },
    {
      id: 7,
      name: "L22",
      label: "G2 rear negative",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      fl: -60.143,
      glass: "589612 — crown class (catalog unresolved)",
      role: "Rear negative singlet completing the divergent G2 variator.",
    },
    {
      id: 8,
      name: "L3a",
      label: "G3 positive",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 43.007,
      glass: "620603 — crown class (catalog unresolved)",
      cemented: "L3",
      role: "Positive member of the G3 compensator doublet.",
    },
    {
      id: 9,
      name: "L3b",
      label: "G3 negative",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      fl: -78.971,
      glass: "755276 — dense flint class (catalog unresolved)",
      cemented: "L3",
      role: "Negative member of the G3 compensator doublet.",
    },
    {
      id: 10,
      name: "L41",
      label: "G4 front positive",
      type: "Positive Meniscus",
      nd: 1.67025,
      vd: 57.6,
      fl: 75.948,
      glass: "670576 — lanthanum crown class (catalog unresolved)",
      role: "Front positive singlet of the fixed relay group.",
    },
    {
      id: 11,
      name: "L42",
      label: "G4 front negative",
      type: "Biconcave Negative",
      nd: 1.79504,
      vd: 28.6,
      fl: -262.882,
      glass: "J-LAFH3 (HIKARI; 795287 match to patent 795286 class)",
      role: "Weak negative singlet in the front half of the fixed relay.",
    },
    {
      id: 12,
      name: "L43",
      label: "G4 rear negative",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.5,
      fl: -89.677,
      glass: "797455 — dense lanthanum glass class (catalog unresolved)",
      role: "Negative singlet in the rear relay pair.",
    },
    {
      id: 13,
      name: "L44",
      label: "G4 rear positive",
      type: "Biconvex Positive",
      nd: 1.58267,
      vd: 46.5,
      fl: 102.154,
      glass: "583465 — barium flint class (catalog unresolved)",
      role: "Final positive relay singlet adjacent to the image-side back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 109.097, d: 1.7, nd: 1.80518, elemId: 1, sd: 23.5 },
    { label: "2", R: 62.65, d: 8.1, nd: 1.62041, elemId: 2, sd: 23.5 },
    { label: "3", R: -716, d: 0.1, nd: 1, elemId: 0, sd: 23 },
    { label: "4", R: 134.056, d: 4, nd: 1.5168, elemId: 3, sd: 18.5 },
    { label: "5", R: 603.844, d: 3.034, nd: 1, elemId: 0, sd: 18.5 },
    { label: "6", R: -300, d: 1, nd: 1.78797, elemId: 4, sd: 15.5 },
    { label: "7", R: 55, d: 6.1, nd: 1.7552, elemId: 5, sd: 15.2 },
    { label: "8", R: -40, d: 0.9, nd: 1.58144, elemId: 6, sd: 14.6 },
    { label: "9", R: 56.331, d: 4.1, nd: 1, elemId: 0, sd: 13.8 },
    { label: "10", R: -44.35, d: 1.1, nd: 1.58913, elemId: 7, sd: 13.9 },
    { label: "11", R: 177.834, d: 30.972, nd: 1, elemId: 0, sd: 14.2 },
    { label: "12", R: 155, d: 5.5, nd: 1.62041, elemId: 8, sd: 14.5 },
    { label: "13", R: -31.792, d: 0.9, nd: 1.7552, elemId: 9, sd: 14.5 },
    { label: "14", R: -68.917, d: 16.708, nd: 1, elemId: 0, sd: 14.5 },
    // Iris position inferred at the G4 entrance; the zero spacing preserves patent d14 exactly.
    { label: "STO", R: 1e15, d: 0, nd: 1, elemId: 0, sd: 14.065342 },
    { label: "15", R: 41.667, d: 5.3, nd: 1.67025, elemId: 10, sd: 14.8 },
    { label: "16", R: 217.9, d: 2, nd: 1, elemId: 0, sd: 14.3 },
    { label: "17", R: -692.473, d: 2, nd: 1.79504, elemId: 11, sd: 14 },
    { label: "18", R: 299.735, d: 53.4, nd: 1, elemId: 0, sd: 14 },
    { label: "19", R: -23.344, d: 2.4, nd: 1.79668, elemId: 12, sd: 18 },
    { label: "20", R: -36.254, d: 0.2, nd: 1, elemId: 0, sd: 18.2 },
    { label: "21", R: 72, d: 5.3, nd: 1.58267, elemId: 13, sd: 18.8 },
    { label: "22", R: -334.14, d: 41.366, nd: 1, elemId: 0, sd: 19 },
  ],

  asph: {},

  zoomPositions: [80, 195.2],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [3.034, 20.081774],
      [43.15, 60.19884],
    ],
    "11": [
      [30.972, 30.972],
      [1.366, 1.366],
    ],
    "14": [
      [16.708, 16.708],
      [6.198, 6.198],
    ],
  },

  varLabels: [
    ["5", "D5 / G1 FOCUS"],
    ["11", "D11 / G2-G3"],
    ["14", "D14 / G3-G4"],
  ],

  groups: [
    { text: "G1 FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "G2 VARIATOR", fromSurface: "6", toSurface: "11" },
    { text: "G3 COMPENSATOR", fromSurface: "12", toSurface: "14" },
    { text: "G4 RELAY", fromSurface: "15", toSurface: "22" },
  ],

  doublets: [
    { text: "L11", fromSurface: "1", toSurface: "3" },
    { text: "L21", fromSurface: "6", toSurface: "9" },
    { text: "L3", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 1.2,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: Nikon specifies a 1.2 m focal-plane minimum distance and parfocal " +
    "one-ring operation. G1-only travel is code-solved as 17.047774 mm at 80 mm and 17.048840 mm " +
    "at 195.2 mm, with G2-G4 and the image plane fixed. Patent 0.998 m and 0.680 m test states are " +
    "not exposed.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  gapSagFrac: 0.96,
  yScFill: 0.37,
} satisfies LensDataInput;

export default LENS_DATA;
