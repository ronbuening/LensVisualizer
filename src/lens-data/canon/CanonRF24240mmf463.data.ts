import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 24-240mm F4-6.3 IS USM             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0142167 A1, Example 1 (Canon / Kikuchi).    ║
 * ║  Positive-lead 6-unit zoom: + − + + − − (LR = L4+L5+L6).         ║
 * ║  21 elements / 15 groups, 2 aspherical surfaces (1 element).      ║
 * ║  Focus: Rear inner focus via L5 (unit 5, L18+L19 cemented         ║
 * ║         doublet) moving image-ward. Patent does not provide       ║
 * ║         close-focus spacings; var entries are zoom-only.           ║
 * ║                                                                    ║
 * ║  Zoom variable gaps (all 6 change during zoom):                   ║
 * ║    D5 (L1→L2), D13 (L2→L3), D24 (L3→L4),                        ║
 * ║    D31 (L4→L5), D34 (L5→L6), D37 (BFD).                         ║
 * ║  Reversing group: D34 is non-monotonic                            ║
 * ║    (15.54 → 14.63 → 17.77 mm, wide→mid→tele).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent lists "effective diameter" for every surface. Base SDs  ║
 * ║    use effective_diameter / 2, with small rendering adjustments    ║
 * ║    to better match Canon's published construction diagram.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf24-240-f4-63",
  maker: "Canon",
  name: "CANON RF 24-240mm F4-6.3 IS USM",
  subtitle: "US 2020/0142167 A1 EXAMPLE 1 — CANON / KIKUCHI",
  specs: [
    "21 ELEMENTS / 15 GROUPS",
    "f ≈ 24.7–232.8 mm",
    "F/4.12–6.41",
    "2ω ≈ 75.1–10.6°",
    "2 ASPHERICAL SURFACES (1 ELEMENT)",
    "2 UD (ULTRA-LOW DISPERSION) ELEMENTS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [24, 240],
  focalLengthDesign: [24.72, 232.8],
  apertureMarketing: 4,
  apertureDesign: 4.12,
  patentYear: 2020,
  elementCount: 21,
  groupCount: 15,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -160.9,
      glass: "S-LAH79 type (903/313)",
      apd: false,
      role: "Front collector — high-index negative meniscus for SA / field curvature control",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 126.6,
      glass: "S-FPL51 type (497/815)",
      apd: "inferred",
      apdNote: "UD (Ultra-low Dispersion) — fluorophosphate crown, νd = 81.5",
      role: "Achromatic partner to L1 — UD element for primary chromatic correction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: 123.7,
      glass: "S-PHM52 type (618/634)",
      apd: false,
      role: "Front group positive power contributor; meniscus form for SA correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8515,
      vd: 40.8,
      fl: -26.5,
      glass: "S-LAH66 type (852/408)",
      apd: false,
      role: "Variator — primary negative power element with strong rear curvature",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.8515,
      vd: 40.8,
      fl: -29.5,
      glass: "S-LAH66 type (852/408)",
      apd: false,
      role: "Variator — second negative element for beam divergence",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 25.1,
      glass: "E-FD15 type (923/209)",
      apd: false,
      role: "Variator chromatic corrector — high-dispersion positive for LCA control",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -40.3,
      glass: "S-LAL54 type (773/496)",
      apd: false,
      role: "Variator trailing negative — shapes exit beam and corrects higher-order aberrations",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      fl: 34.5,
      glass: "S-TIH6 type (762/265)",
      apd: false,
      role: "Subunit X front — converges beam entering the IS unit",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.58144,
      vd: 40.8,
      fl: 34.1,
      glass: "S-BAM4 type (581/408)",
      apd: false,
      role: "Subunit X achromat positive — cemented to L10",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Negative",
      nd: 2.001,
      vd: 29.1,
      fl: -20.5,
      glass: "S-NPH2 type (001/291)",
      apd: false,
      role: "Subunit X achromat negative — ultra-high index for compact power",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -40.9,
      glass: "S-NPH1 type (001/255)",
      apd: false,
      role: "IS doublet negative — shifts ⊥ to axis for image stabilization",
      cemented: "D5",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      fl: 20.6,
      glass: "S-LAM3 type (720/437)",
      apd: false,
      role: "IS doublet positive — provides net positive power to IS subunit Y",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -31.0,
      glass: "S-NPH2 type (001/291)",
      apd: false,
      role: "Subunit Z — amplifies IS angular correction, reduces required shift distance",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: 105.0,
      glass: "S-BAL42 type (531/559)",
      apd: false,
      role: "Aspherical relay element — corrects SA, coma, and field curvature across zoom",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -99.6,
      glass: "S-TIH53W type (855/248)",
      apd: false,
      role: "Relay achromat negative — cemented to L16",
      cemented: "D6",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 39.3,
      glass: "S-BSM81 type (593/686)",
      apd: false,
      role: "Relay achromat positive — primary chromatic correction for unit 4",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 47.0,
      glass: "S-FPL51 type (497/815)",
      apd: "inferred",
      apdNote: "UD (Ultra-low Dispersion) — fluorophosphate crown, νd = 81.5",
      role: "Second UD element — chromatic correction where off-axis rays diverge",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 166.3,
      glass: "S-TIH10 type (805/254)",
      apd: false,
      role: "Focus doublet front — cemented to L19, moves image-ward for close focus",
      cemented: "D7",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      fl: -40.0,
      glass: "S-BSM14 type (639/554)",
      apd: false,
      role: "Focus doublet rear — provides negative power for rear focus mechanism",
      cemented: "D7",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -32.0,
      glass: "S-LAH60 type (835/427)",
      apd: false,
      role: "Field corrector negative — field flattening and telecentricity",
      cemented: "D8",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 43.2,
      glass: "S-TIH14 type (847/238)",
      apd: false,
      role: "Field corrector positive — residual chromatic and field curvature correction",
      cemented: "D8",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Unit 1: Front Positive Collector (f = +103.63 mm) ──
    { label: "1", R: 131.399, d: 1.85, nd: 1.90366, elemId: 1, sd: 28.415 }, // L1 front
    { label: "2", R: 68.561, d: 8.49, nd: 1.497, elemId: 2, sd: 27.72 }, // L1→L2 junction
    { label: "3", R: -730.653, d: 0.15, nd: 1.0, elemId: 0, sd: 27.56 }, // L2 rear → air
    { label: "4", R: 68.792, d: 6.48, nd: 1.618, elemId: 3, sd: 26.76 }, // L3 front
    { label: "5", R: 664.437, d: 1.34, nd: 1.0, elemId: 0, sd: 26.38 }, // L3 rear → air (zoom var)

    // ── Unit 2: Variator (f = −16.74 mm) ──
    { label: "6", R: 243.528, d: 1.28, nd: 1.8515, elemId: 4, sd: 13.8 }, // L4 front
    { label: "7", R: 20.583, d: 4.73, nd: 1.0, elemId: 0, sd: 12.2 }, // L4 rear → air
    { label: "8", R: -56.381, d: 1.09, nd: 1.8515, elemId: 5, sd: 10.9 }, // L5 front
    { label: "9", R: 45.818, d: 0.46, nd: 1.0, elemId: 0, sd: 10.7 }, // L5 rear → air
    { label: "10", R: 35.871, d: 4.51, nd: 1.92286, elemId: 6, sd: 10.9 }, // L6 front
    { label: "11", R: -61.247, d: 0.84, nd: 1.0, elemId: 0, sd: 10.2 }, // L6 rear → air
    { label: "12", R: -32.368, d: 1.03, nd: 1.7725, elemId: 7, sd: 9.9 }, // L7 front
    { label: "13", R: 821.472, d: 22.25, nd: 1.0, elemId: 0, sd: 10.0 }, // L7 rear → air (zoom var)

    // ── Unit 3: Correction Group with IS — XYZ (f = +60.67 mm) ──
    { label: "STO", R: 1e15, d: 0.35, nd: 1.0, elemId: 0, sd: 8.16 }, // Aperture stop
    // Subunit X (positive, f = +55.81 mm)
    { label: "15", R: 27.034, d: 3.05, nd: 1.76182, elemId: 8, sd: 9.4 }, // L8 front
    { label: "16", R: -852.68, d: 0.15, nd: 1.0, elemId: 0, sd: 9.3 }, // L8 rear → air
    { label: "17", R: 19.84, d: 3.53, nd: 1.58144, elemId: 9, sd: 9.15 }, // L9 front
    { label: "18", R: 1e15, d: 0.82, nd: 2.001, elemId: 10, sd: 8.9 }, // L9→L10 junction (flat)
    { label: "19", R: 20.522, d: 2.7, nd: 1.0, elemId: 0, sd: 8.65 }, // L10 rear → air
    // Subunit Y (positive, IS shift element, f = +41.45 mm)
    { label: "20", R: 35.803, d: 0.8, nd: 2.00069, elemId: 11, sd: 8.55 }, // L11 front
    { label: "21", R: 18.888, d: 3.99, nd: 1.72, elemId: 12, sd: 8.5 }, // L11→L12 junction
    { label: "22", R: -63.451, d: 2.27, nd: 1.0, elemId: 0, sd: 8.45 }, // L12 rear → air
    // Subunit Z (negative, f = −30.98 mm)
    { label: "23", R: -26.036, d: 0.8, nd: 2.001, elemId: 13, sd: 8.65 }, // L13 front
    { label: "24", R: -164.761, d: 8.46, nd: 1.0, elemId: 0, sd: 8.8 }, // L13 rear → air (zoom var)

    // ── Unit 4: Relay / Compensator (f = +22.87 mm) ──
    { label: "25A", R: 45.628, d: 2.42, nd: 1.5311, elemId: 14, sd: 10.79 }, // L14 front (asph)
    { label: "26A", R: 246.555, d: 0.9, nd: 1.0, elemId: 0, sd: 11.285 }, // L14 rear (asph) → air
    { label: "27", R: -170.519, d: 1.25, nd: 1.85478, elemId: 15, sd: 11.375 }, // L15 front
    { label: "28", R: 170.589, d: 5.53, nd: 1.59282, elemId: 16, sd: 11.91 }, // L15→L16 junction
    { label: "29", R: -26.647, d: 0.15, nd: 1.0, elemId: 0, sd: 12.54 }, // L16 rear → air
    { label: "30", R: 45.538, d: 6.19, nd: 1.497, elemId: 17, sd: 13.64 }, // L17 front
    { label: "31", R: -45.788, d: 3.73, nd: 1.0, elemId: 0, sd: 13.69 }, // L17 rear → air (zoom var)

    // ── Unit 5: Focus Group (f = −53.51 mm) ──
    { label: "32", R: 93.245, d: 1.81, nd: 1.80518, elemId: 18, sd: 12.785 }, // L18 front
    { label: "33", R: 304.63, d: 1.1, nd: 1.63854, elemId: 19, sd: 12.635 }, // L18→L19 junction
    { label: "34", R: 23.508, d: 15.54, nd: 1.0, elemId: 0, sd: 12.06 }, // L19 rear → air (zoom var)

    // ── Unit 6: Rear Field Corrector (f = −138.27 mm) ──
    { label: "35", R: -53.59, d: 1.28, nd: 1.83481, elemId: 20, sd: 13.595 }, // L20 front
    { label: "36", R: 53.854, d: 4.88, nd: 1.84666, elemId: 21, sd: 14.63 }, // L20→L21 junction
    { label: "37", R: -109.597, d: 15.78, nd: 1.0, elemId: 0, sd: 15.0 }, // L21 rear → BFD (zoom var)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "25A": {
      K: 0,
      A4: -3.69428e-6,
      A6: -1.81514e-7,
      A8: 1.12707e-9,
      A10: -1.37724e-11,
      A12: 4.19334e-14,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 2.68822e-5,
      A6: -1.85641e-7,
      A8: 9.59349e-10,
      A10: -1.18429e-11,
      A12: 3.67346e-14,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom only — no close-focus data in patent) ──
   *  All 6 inter-unit gaps change during zooming. Patent does not provide
   *  close-focus spacings, so all entries use identical inf/close pairs.
   *  Focus is via L5 (unit 5): d31 expands, d34 contracts when focusing close.
   */
  zoomPositions: [24.72, 85.0, 232.8],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [1.34, 1.34],
      [32.74, 32.74],
      [59.28, 59.28],
    ],
    "13": [
      [22.25, 22.25],
      [8.64, 8.64],
      [2.35, 2.35],
    ],
    "24": [
      [8.46, 8.46],
      [3.21, 3.21],
      [1.0, 1.0],
    ],
    "31": [
      [3.73, 3.73],
      [4.64, 4.64],
      [1.5, 1.5],
    ],
    "34": [
      [15.54, 15.54],
      [14.63, 14.63],
      [17.77, 17.77],
    ],
    "37": [
      [15.78, 15.78],
      [45.06, 45.06],
      [57.2, 57.2],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["24", "D24"],
    ["31", "D31"],
    ["34", "D34"],
    ["37", "BF"],
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "L3 / XYZ (+)", fromSurface: "STO", toSurface: "24" },
    { text: "L4 (+)", fromSurface: "25A", toSurface: "31" },
    { text: "L5 (−) FOCUS", fromSurface: "32", toSurface: "34" },
    { text: "L6 (−)", fromSurface: "35", toSurface: "37" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
    { text: "D5 (IS)", fromSurface: "20", toSurface: "22" },
    { text: "D6", fromSurface: "27", toSurface: "29" },
    { text: "D7 (Focus)", fromSurface: "32", toSurface: "34" },
    { text: "D8", fromSurface: "35", toSurface: "37" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Rear inner focus via unit 5 (L18+L19 cemented doublet). L5 moves toward image for close focus. Canon Nano USM actuator.",

  /* ── Aperture configuration ── */
  nominalFno: [4.12, 5.66, 6.41],
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 7.1, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
