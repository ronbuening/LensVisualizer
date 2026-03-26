import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2022-92388A Example 1 (Nikon / Yabumoto).         ║
 * ║  7-group telephoto zoom, double-telephoto architecture.            ║
 * ║  25 elements / 20 groups, all spherical (no aspherical surfaces).  ║
 * ║  Focus: floating inner focus — G5 + G6 move independently.        ║
 * ║                                                                    ║
 * ║  Internal zoom (extending barrel, constant length during focus).   ║
 * ║    Zoom variable gaps:  D4, D9, D17 (zoom only).                  ║
 * ║    Focus variable gaps: D35, D38, D42 (zoom + focus).             ║
 * ║    No reversing groups.                                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from paraxial marginal ray trace at both zoom     ║
 * ║    positions (max of tele/wide) with ~10% mechanical clearance.    ║
 * ║    Patent does not list semi-diameters. Many air gaps in this      ║
 * ║    design are near-contact spacings where adjacent surfaces        ║
 * ║    physically nest — SDs at these junctions may cause tight        ║
 * ║    cross-gap clearances in the renderer.                           ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS IDENTIFICATION:                                     ║
 * ║    Patent provides only nd (refractive index). All Abbe numbers    ║
 * ║    (vd) are inferred from catalog matching against OHARA and       ║
 * ║    SCHOTT catalogs. Several elements have ambiguous matches        ║
 * ║    where multiple catalog glasses share the same nd — these are    ║
 * ║    noted in the element descriptions. Super ED glass (nd=1.437)    ║
 * ║    is a Nikon proprietary formulation; vd is approximate.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-100-400-f4556",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S",
  subtitle: "JP2022-92388A EXAMPLE 1 — NIKON / YABUMOTO",
  specs: [
    "25 ELEMENTS / 20 GROUPS",
    "f = 103–388 mm (DESIGN)",
    "F/4.5–5.6",
    "2ω ≈ 6.2° (TELE)",
    "ALL SPHERICAL — NO ASPHERICAL SURFACES",
    "6 ED + 2 SUPER ED ELEMENTS",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [100, 400],
  focalLengthDesign: [103.09, 388.17],
  apertureMarketing: 4.5,
  // apertureDesign omitted — patent states Fnot=5.76 (tele only); wide-end f/# not given
  patentYear: 2022,
  elementCount: 25,
  groupCount: 20,

  /* ── Elements ──
   *  25 optical elements + 1 filter plate = 26 entries.
   *  Glass IDs inferred from nd matching (patent provides nd only, not vd).
   *  Ambiguous matches marked with † — preferred candidate noted.
   */
  elements: [
    // ── G1 — Front Positive (f = +220.2 mm) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 476.9,
      glass: "S-FSL5 (OHARA) / N-FK5 (SCHOTT)",
      apd: false,
      role: "Front ED/FK positive — primary light gathering, low-SA contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.437001,
      vd: 95.0,
      fl: 407.5,
      glass: "Nikon Super ED (near S-FPL55)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate — anomalous partial dispersion for secondary spectrum correction",
      role: "Super ED positive — primary LoCA and secondary spectrum correction at max ray height",
    },

    // ── G2 — Second Positive (f = +412.7 mm) ──
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 81.1,
      fl: 115.9,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate — anomalous partial dispersion",
      cemented: "D1",
      role: "ED positive in achromatic cemented negative doublet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.6,
      fl: -65.7,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Dense lanthanum negative — chromatic correction partner for L3",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.437001,
      vd: 95.0,
      fl: 114.8,
      glass: "Nikon Super ED (near S-FPL55)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate",
      role: "Super ED positive — dominant positive power in G2, secondary spectrum correction",
    },

    // ── G3 — Zoom Variator (f = −37.7 mm) ──
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.720467,
      vd: 50.2,
      fl: 62.6,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Lanthanum crown positive in weakly-negative achromatic doublet",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 81.1,
      fl: -56.3,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate — inverted arrangement (ED in negative element)",
      cemented: "D2",
      role: "ED negative — enhanced secondary spectrum correction in variator",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.6,
      fl: -42.2,
      glass: "S-LAM3 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Lanthanum crown negative — primary diverging power in variator",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.854505,
      vd: 40.0,
      fl: 65.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Dense lanthanum flint — Petzval curvature control in variator doublet",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.3,
      fl: -62.5,
      glass: "S-LAM60 (OHARA) †",
      apd: false,
      role: "† Ambiguous: S-LAM60 (vd≈52) or S-TIM27 (vd≈28). Strongest negative element in variator",
    },

    // ── G4 — Relay + Stop + VR (f = +46.0 mm) ──
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 128.7,
      glass: "Dense crown (nd=1.593, catalog match uncertain)",
      apd: false,
      role: "Symmetric biconvex — begins convergence after G3 divergence",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Convex Positive",
      nd: 1.49782,
      vd: 81.1,
      fl: 129.7,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate",
      role: "ED plano-convex — chromatic correction in relay",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Plano-Convex Positive",
      nd: 1.49782,
      vd: 81.1,
      fl: 96.9,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate",
      role: "ED plano-convex — second relay achromat, stronger than L12",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      fl: -110.2,
      glass: "S-LAH55 (OHARA) †",
      apd: false,
      role: "† Ambiguous: S-LAH55 (vd≈41) or S-LAH64 (vd≈47). Spherical aberration correction pre-stop",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 40.7,
      fl: 144.3,
      glass: "Dense lanthanum (catalog match uncertain)",
      apd: false,
      role: "Positive meniscus convex to image — oblique SA and coma correction post-stop",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -46.6,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Ultra-high-index meniscus — strong Petzval correction and higher-order SA control",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.552981,
      vd: 63.5,
      fl: 41.9,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      cemented: "VR",
      role: "Barium crown positive — VR doublet front element (moves perpendicular to axis for IS)",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Neg. Meniscus (convex to image)",
      nd: 1.95375,
      vd: 32.3,
      fl: -90.7,
      glass: "S-LAH99 (OHARA)",
      apd: false,
      cemented: "VR",
      role: "Ultra-dense lanthanum negative — VR doublet rear element, chromatic stability during VR shift",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: 78.0,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Titanium flint positive meniscus — completes relay, delivers beam to focus groups",
    },

    // ── G5 — Focus Group A (f = −81.7 mm) ──
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconvex Positive",
      nd: 1.85026,
      vd: 32.3,
      fl: 70.9,
      glass: "S-LAH58 (OHARA) †",
      apd: false,
      cemented: "D4",
      role: "† Ambiguous: S-LAH58 (vd≈32) or S-LAH79 (vd≈44). Positive in cemented negative focus doublet",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -37.6,
      glass: "S-LAM54 (OHARA)",
      apd: false,
      cemented: "D4",
      role: "Lanthanum flint negative — dominant diverging power in primary focus group",
    },

    // ── G6 — Focus Group B (f = −153.3 mm) ──
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Biconvex Positive",
      nd: 1.654115,
      vd: 39.7,
      fl: 70.2,
      glass: "S-BSM71 (OHARA) †",
      apd: false,
      role: "† Ambiguous: S-BSM71 (vd≈40) or other. Positive element in secondary focus group",
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Biconcave Negative",
      nd: 1.90265,
      vd: 35.7,
      fl: -46.6,
      glass: "S-LAH97 (OHARA)",
      apd: false,
      role: "Dense lanthanum negative — strong divergence in secondary focus group",
    },

    // ── G7 — Field Flattener (f = +502.7 mm) ──
    {
      id: 24,
      name: "L24",
      label: "Element 24",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 81.1,
      fl: -75.4,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate — lateral color correction near image plane",
      role: "ED negative — lateral chromatic aberration correction at max chief ray height",
    },
    {
      id: 25,
      name: "L25",
      label: "Element 25",
      type: "Positive Meniscus",
      nd: 1.738,
      vd: 49.5,
      fl: 66.9,
      glass: "S-LAH63 (OHARA) †",
      apd: false,
      role: "† Ambiguous: S-LAH63 (vd≈50) or S-NBH5 (vd≈32). Field flattener, Petzval correction",
    },

    // ── Filter (not counted in 25 optical elements) ──
    {
      id: 26,
      name: "FL",
      label: "IR Filter",
      type: "Plano-Plano (Filter)",
      nd: 1.5168,
      vd: 64.2,
      fl: 1e15,
      glass: "N-BK7 (SCHOTT) / S-BSL7 (OHARA)",
      apd: false,
      role: "Sensor cover glass / IR-cut filter assembly",
    },
  ],

  /* ── Surface prescription ──
   *  48 surfaces, front to rear. All spherical — no aspherical surfaces.
   *  Patent surface numbering (m) used as labels.
   *  Default d values are at the WIDE-END INFINITY configuration
   *  (first zoom position), per template convention.
   */
  surfaces: [
    // ── G1 — Front Positive ──
    { label: "1", R: 464.984, d: 3.83, nd: 1.48749, elemId: 1, sd: 37.0 }, // L1 front
    { label: "2", R: -464.984, d: 0.15, nd: 1.0, elemId: 0, sd: 37.0 }, // L1 rear → air (near-contact with L2)
    { label: "3", R: 178.061, d: 4.56, nd: 1.437001, elemId: 2, sd: 36.5 }, // L2 front (Super ED)
    { label: "4", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 36.5 }, // L2 rear → air (D4, zoom variable)

    // ── G2 — Second Positive ──
    { label: "5", R: 63.221, d: 7.03, nd: 1.49782, elemId: 3, sd: 27.0 }, // L3 front (ED)
    { label: "6", R: -658.5, d: 1.0, nd: 1.8044, elemId: 4, sd: 26.0 }, // L3→L4 junction
    { label: "7", R: 57.457, d: 1.53, nd: 1.0, elemId: 0, sd: 25.5 }, // L4 rear → air
    { label: "8", R: 56.53, d: 7.42, nd: 1.437001, elemId: 5, sd: 25.5 }, // L5 front (Super ED)
    { label: "9", R: -447.44, d: 1.3, nd: 1.0, elemId: 0, sd: 24.5 }, // L5 rear → air (D9, zoom variable)

    // ── G3 — Zoom Variator ──
    { label: "10", R: 137.036, d: 6.11, nd: 1.720467, elemId: 6, sd: 18.5 }, // L6 front
    { label: "11", R: -67.293, d: 1.3, nd: 1.49782, elemId: 7, sd: 17.5 }, // L6→L7 junction (ED)
    { label: "12", R: 47.996, d: 5.73, nd: 1.0, elemId: 0, sd: 17.0 }, // L7 rear → air
    { label: "13", R: -84.272, d: 1.2, nd: 1.741, elemId: 8, sd: 16.0 }, // L8 front
    { label: "14", R: 49.681, d: 3.41, nd: 1.854505, elemId: 9, sd: 16.0 }, // L8→L9 junction
    { label: "15", R: 447.567, d: 3.15, nd: 1.0, elemId: 0, sd: 15.5 }, // L9 rear → air
    { label: "16", R: -60.243, d: 1.2, nd: 1.755, elemId: 10, sd: 15.5 }, // L10 front
    { label: "17", R: 218.52, d: 43.095, nd: 1.0, elemId: 0, sd: 15.5 }, // L10 rear → air (D17, zoom variable)

    // ── G4 — Relay + Stop + VR ──
    { label: "18", R: 152.668, d: 3.22, nd: 1.59319, elemId: 11, sd: 17.5 }, // L11 front (symmetric biconvex)
    { label: "19", R: -152.668, d: 0.15, nd: 1.0, elemId: 0, sd: 17.5 }, // L11 rear → air (near-contact)
    { label: "20", R: 64.555, d: 3.69, nd: 1.49782, elemId: 12, sd: 17.5 }, // L12 front (ED plano-convex)
    { label: "21", R: 1e15, d: 0.45, nd: 1.0, elemId: 0, sd: 17.5 }, // L12 rear → air
    { label: "22", R: 48.227, d: 4.34, nd: 1.49782, elemId: 13, sd: 17.0 }, // L13 front (ED plano-convex)
    { label: "23", R: 1e15, d: 2.42, nd: 1.0, elemId: 0, sd: 16.5 }, // L13 rear → air
    { label: "24", R: -93.779, d: 1.65, nd: 1.8061, elemId: 14, sd: 16.0 }, // L14 front
    { label: "25", R: 1675.249, d: 2.8, nd: 1.0, elemId: 0, sd: 15.5 }, // L14 rear → air
    { label: "STO", R: 1e15, d: 11.71, nd: 1.0, elemId: 0, sd: 15.0 }, // Aperture stop (patent surface 26)
    { label: "27", R: -125.942, d: 2.31, nd: 1.80809, elemId: 15, sd: 14.0 }, // L15 front (pos. meniscus)
    { label: "28", R: -60.541, d: 0.6, nd: 1.0, elemId: 0, sd: 14.0 }, // L15 rear → air
    { label: "29", R: 134.57, d: 1.4, nd: 2.00069, elemId: 16, sd: 13.5 }, // L16 front (ultra-high-index)
    { label: "30", R: 34.633, d: 2.73, nd: 1.0, elemId: 0, sd: 13.5 }, // L16 rear → air
    { label: "31", R: 59.403, d: 5.16, nd: 1.552981, elemId: 17, sd: 13.5 }, // L17 front (VR doublet)
    { label: "32", R: -38.045, d: 1.25, nd: 1.95375, elemId: 18, sd: 13.0 }, // L17→L18 junction (VR)
    { label: "33", R: -67.886, d: 0.66, nd: 1.0, elemId: 0, sd: 13.0 }, // L18 rear → air
    { label: "34", R: 35.224, d: 3.5, nd: 1.60342, elemId: 19, sd: 13.0 }, // L19 front
    { label: "35", R: 140.226, d: 3.2, nd: 1.0, elemId: 0, sd: 12.5 }, // L19 rear → air (D35, zoom+focus)

    // ── G5 — Focus Group A ──
    { label: "36", R: 120.647, d: 2.26, nd: 1.85026, elemId: 20, sd: 14.0 }, // L20 front
    { label: "37", R: -120.465, d: 1.0, nd: 1.72916, elemId: 21, sd: 14.0 }, // L20→L21 junction
    { label: "38", R: 35.481, d: 14.3, nd: 1.0, elemId: 0, sd: 14.0 }, // L21 rear → air (D38, zoom+focus)

    // ── G6 — Focus Group B ──
    { label: "39", R: 560.475, d: 2.63, nd: 1.654115, elemId: 22, sd: 14.0 }, // L22 front
    { label: "40", R: -50.042, d: 2.31, nd: 1.0, elemId: 0, sd: 14.0 }, // L22 rear → air
    { label: "41", R: -44.883, d: 1.0, nd: 1.90265, elemId: 23, sd: 14.0 }, // L23 front
    { label: "42", R: 660.951, d: 26.984, nd: 1.0, elemId: 0, sd: 14.0 }, // L23 rear → air (D42, zoom+focus)

    // ── G7 — Field Flattener ──
    { label: "43", R: -285.763, d: 1.0, nd: 1.49782, elemId: 24, sd: 17.0 }, // L24 front (ED)
    { label: "44", R: 43.194, d: 1.46, nd: 1.0, elemId: 0, sd: 17.0 }, // L24 rear → air
    { label: "45", R: 47.384, d: 5.67, nd: 1.738, elemId: 25, sd: 17.0 }, // L25 front
    { label: "46", R: 1194.653, d: 29.62, nd: 1.0, elemId: 0, sd: 17.0 }, // L25 rear → air (BFD to filter)

    // ── Filter ──
    { label: "47", R: 1e15, d: 1.6, nd: 1.5168, elemId: 26, sd: 22.0 }, // Filter front
    { label: "48", R: 1e15, d: 0.0, nd: 1.0, elemId: 0, sd: 22.0 }, // Filter rear → image plane
  ],

  /* ── Aspherical coefficients ──
   *  Example 1 is ALL SPHERICAL — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom format: each value is an array of [d_inf, d_close] pairs,
   *  one per zoom position: [wide, tele].
   *
   *  D4, D9, D17 are zoom-only (identical inf/close values).
   *  D35, D38, D42 vary with both zoom and focus.
   *
   *  Patent variable spacing table:
   *                     Infinity         Close focus
   *               Tele    Wide       Tele    Wide
   *  D4         51.500   1.500     51.500   1.500
   *  D9         25.600   1.300     25.600   1.300
   *  D17         2.100  43.095      2.100  43.095
   *  D35         3.467   3.200     34.084   4.590
   *  D38         8.800  14.300      9.182  22.618
   *  D42        48.913  26.984     17.915  17.275
   */
  var: {
    // Zoom-only gaps (no focus change)
    "4": [
      [1.5, 1.5],
      [51.5, 51.5],
    ],
    "9": [
      [1.3, 1.3],
      [25.6, 25.6],
    ],
    "17": [
      [43.095, 43.095],
      [2.1, 2.1],
    ],
    // Zoom + focus gaps
    "35": [
      [3.2, 4.59],
      [3.467, 34.084],
    ],
    "38": [
      [14.3, 22.618],
      [8.8, 9.182],
    ],
    "42": [
      [26.984, 17.275],
      [48.913, 17.915],
    ],
  },

  varLabels: [
    ["4", "D4 (G1→G2)"],
    ["9", "D9 (G2→G3)"],
    ["17", "D17 (G3→G4)"],
    ["35", "D35 (G4→G5)"],
    ["38", "D38 (G5→G6)"],
    ["42", "D42 (G6→G7)"],
  ],

  /* ── Zoom configuration ── */
  zoomPositions: [103.09, 388.17],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (+)", fromSurface: "5", toSurface: "9" },
    { text: "G3 (−)", fromSurface: "10", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "35" },
    { text: "G5 (−) FOCUS", fromSurface: "36", toSurface: "38" },
    { text: "G6 (−) FOCUS", fromSurface: "39", toSurface: "42" },
    { text: "G7 (+)", fromSurface: "43", toSurface: "46" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "VR", fromSurface: "31", toSurface: "33" },
    { text: "D4", fromSurface: "36", toSurface: "38" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.75,
  focusDescription:
    "Floating inner focus — G5 (cemented doublet) and G6 (2 singlets) move along independent trajectories toward image. G5 moves +30.6mm at tele; G6 moves +0.4mm. Total gap sum constant — true internal focusing.",

  /* ── Aperture configuration ── */
  nominalFno: 5.76,
  fstopSeries: [4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.65,
  yScFill: 0.18,
  gapSagFrac: 0.9,
} satisfies LensDataInput;

export default LENS_DATA;
