import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2020-177057 A Example 1 (Nikon / Yamashita, Take) ║
 * ║  Five-group zoom: G1(+) G2(−) G3(+) G4(+) G5(−).                  ║
 * ║  25 elements / 19 groups (sub-groups), 0 aspherical surfaces.      ║
 * ║  Focus: G4 moves object-side for close focus (IF).                 ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length ~341 mm).                  ║
 * ║  Zoom variable gaps: D1 (G1–G2), D2 (G2–G3) — zoom only.         ║
 * ║  Zoom+focus variable gaps: D3 (G3–G4), D4 (G4–G5).               ║
 * ║  Reversing groups: G4 (D3 and D4 non-monotonic).                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from paraxial marginal ray  ║
 * ║    trace at f/2.91 across all three zoom positions, taking the     ║
 * ║    maximum height at each surface + ~8% mechanical clearance.      ║
 * ║    Front elements capped at 54 mm (112 mm filter thread radius).   ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent gives the focusing architecture (G4 moves object-side)   ║
 * ║    but no close-focus table. D3/D4 close values below are derived  ║
 * ║    by back-solving G4 travel needed to focus at the production      ║
 * ║    2.0 m MFD while keeping total track constant.                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-afs-120-300f28e",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR",
  subtitle: "JP 2020-177057 A EXAMPLE 1 — NIKON / YAMASHITA, TAKE",
  specs: [
    "25 ELEMENTS / 19 GROUPS",
    "f = 123.6–291.0 mm (patent)",
    "F/2.91 (constant)",
    "2ω = 19.57°–8.29°",
    "ALL SPHERICAL",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [120, 300] as [number, number],
  focalLengthDesign: [123.6, 291.0] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  patentYear: 2020,
  elementCount: 25,
  groupCount: 19,

  /* ── Elements ── */
  elements: [
    // G1 — Front objective (positive, fixed)
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90265,
      vd: 35.77,
      fl: -322.4,
      glass: "OHARA S-LAH93",
      apd: false,
      role: "Front negative meniscus; high-index corrector paired with ED element L12.",
      cemented: "J1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 254.5,
      glass: "S-FPL51 type (ED)",
      apd: "inferred" as const,
      apdNote: "νd = 82.57, phosphate-crown ED glass with moderate anomalous partial dispersion.",
      role: "ED element; primary chromatic corrector in G1 front doublet.",
      cemented: "J1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.433843,
      vd: 95.27,
      fl: 312.1,
      glass: "CaF₂ (Fluorite)",
      apd: "patent" as const,
      apdNote: "νd = 95.27; calcium fluoride — ultra-low dispersion, FL designation.",
      role: "Fluorite singlet; main positive power of G1 with negligible chromatic contribution.",
    },
    // G2 — Variator (negative, moves for zoom)
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.720467,
      vd: 34.71,
      fl: 183.9,
      glass: "OHARA S-LAM52 (≈Schott N-KZFS8)",
      apd: "inferred" as const,
      apdNote: "θgF = 0.583; KZFS-family anomalous partial dispersion. Patent condition (5) constrains this glass.",
      role: "Chromatic pre-corrector at front of variator G2; positive element in negative group aids secondary spectrum control.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.53,
      fl: 192.7,
      glass: "HOYA E-ADF10",
      apd: false,
      role: "Positive element of G2 cemented doublet; corrects monochromatic aberrations.",
      cemented: "J2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.52,
      fl: -111.8,
      glass: "OHARA S-TIM35",
      apd: false,
      role: "Negative element of G2 doublet; moderate dispersion for chromatic balance.",
      cemented: "J2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -69.0,
      glass: "OHARA S-LAH52",
      apd: false,
      role: "Main negative power element of G2; cemented with anomalous-dispersion L25.",
      cemented: "J3",
    },
    {
      id: 8,
      name: "L25",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.75575,
      vd: 24.71,
      fl: 213.2,
      glass: "OHARA S-NBH52V",
      apd: "patent" as const,
      apdNote:
        "θgF = 0.629; niobium-phosphate with strong anomalous dispersion. Patent conditions (6)–(8) constrain this glass for secondary spectrum correction.",
      role: "Second positive APD lens in G2; paired with L24 for secondary spectrum control across zoom range.",
      cemented: "J3",
    },
    {
      id: 9,
      name: "L26",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.870705,
      vd: 40.73,
      fl: -111.4,
      glass: "HOYA M-TAFD305 type (1871/407)",
      apd: false,
      role: "Rear element of G2; controls beam divergence, corrects field curvature.",
    },
    // G3 — Relay (positive, fixed)
    {
      id: 10,
      name: "L31",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.34,
      fl: 164.8,
      glass: "OHARA S-LAM55",
      apd: false,
      role: "First converging element of fixed relay group G3.",
    },
    {
      id: 11,
      name: "L32",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.433843,
      vd: 95.27,
      fl: 155.4,
      glass: "CaF₂ (Fluorite)",
      apd: "patent" as const,
      apdNote: "νd = 95.27; second fluorite element in the design.",
      role: "Fluorite relay element; strong positive power with ultra-low dispersion in fixed group.",
    },
    {
      id: 12,
      name: "L33",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.65413,
      vd: 39.72,
      fl: -76.0,
      glass: "Schott N-KZFS5 / OHARA S-LAM61 (SR candidate)",
      apd: "inferred" as const,
      apdNote:
        "KZFS-family glass with anomalous blue-violet dispersion. Leading candidate for Nikon SR element designation.",
      role: "Secondary spectrum corrector in fixed relay G3; paired with fluorite L32 and high-index L34 in triplet arrangement.",
    },
    {
      id: 13,
      name: "L34",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 104.5,
      glass: "OHARA S-NPH4",
      apd: false,
      role: "High-index positive element completing G3 relay triplet.",
    },
    // G4 — Focus group (positive, moves for zoom and focus)
    {
      id: 14,
      name: "L41",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 147.2,
      glass: "OHARA S-LAH52",
      apd: false,
      role: "Front element of focusing group G4; flat object-side surface simplifies barrel mechanics.",
    },
    {
      id: 15,
      name: "L42",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 81.4,
      glass: "OHARA S-FPM2",
      apd: false,
      role: "Low-dispersion positive crown in G4 achromatic doublet.",
      cemented: "J4",
    },
    {
      id: 16,
      name: "L43",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.82,
      fl: -117.3,
      glass: "OHARA S-TIH53W",
      apd: false,
      role: "High-dispersion negative flint in G4 doublet; Δνd ≈ 43 for effective achromatisation.",
      cemented: "J4",
    },
    // G5 — Rear group (negative, fixed, contains aperture stop)
    {
      id: 17,
      name: "L51",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.12,
      fl: -55.8,
      glass: "OHARA S-NPH2",
      apd: false,
      role: "Ultra-high-index negative element before aperture stop; controls pupil position.",
    },
    {
      id: 18,
      name: "L52",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.61,
      fl: 94.4,
      glass: "OHARA S-BAH28",
      apd: false,
      role: "Positive element immediately after aperture stop.",
    },
    {
      id: 19,
      name: "L53",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.870705,
      vd: 40.73,
      fl: -144.4,
      glass: "HOYA M-TAFD305 type (1871/407)",
      apd: false,
      role: "Weak negative corrector near stop; controls field curvature and astigmatism.",
    },
    {
      id: 20,
      name: "L54",
      label: "Element 20",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.41,
      fl: 104.5,
      glass: "OHARA S-LAH63Q type",
      apd: false,
      role: "Positive element of probable VR doublet L54+L55.",
      cemented: "J5",
    },
    {
      id: 21,
      name: "L55",
      label: "Element 21",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.14,
      fl: -69.6,
      glass: "OHARA S-BSL7",
      apd: false,
      role: "Negative element of probable VR doublet; Δνd ≈ 39 for chromatic correction during stabilisation.",
      cemented: "J5",
    },
    {
      id: 22,
      name: "L56",
      label: "Element 22",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.12,
      fl: 76.4,
      glass: "OHARA S-NPH2",
      apd: false,
      role: "Ultra-high-index positive element; strong power in compact package.",
    },
    {
      id: 23,
      name: "L57",
      label: "Element 23",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -92.0,
      glass: "OHARA S-LAH52",
      apd: false,
      role: "Negative meniscus in rear cemented doublet L57+L58.",
      cemented: "J6",
    },
    {
      id: 24,
      name: "L58",
      label: "Element 24",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 49.5,
      glass: "OHARA S-FSL5 / Schott N-FK5 family",
      apd: false,
      role: "Low-dispersion positive element completing rear doublet; provides final chromatic fine-tuning.",
      cemented: "J6",
    },
    {
      id: 25,
      name: "L59",
      label: "Element 25",
      type: "Biconcave Negative",
      nd: 1.90043,
      vd: 37.38,
      fl: -59.6,
      glass: "OHARA S-LAH75",
      apd: false,
      role: "Final field-flattening element; corrects Petzval curvature and exit pupil position.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 — Front objective (positive, fixed)
    { label: "1", R: 321.6694, d: 5.2, nd: 1.90265, elemId: 1, sd: 54.0 }, // L11 front
    { label: "2", R: 151.607, d: 13.4, nd: 1.49782, elemId: 2, sd: 54.0 }, // L11–L12 junction
    { label: "3", R: -748.4933, d: 0.1, nd: 1.0, elemId: 0, sd: 54.0 }, // L12 rear → air
    { label: "4", R: 135.4106, d: 13.2, nd: 1.433843, elemId: 3, sd: 53.5 }, // L13 front
    { label: "5", R: 1e15, d: 5.114, nd: 1.0, elemId: 0, sd: 51.5 }, // L13 rear → air (D1)
    // G2 — Variator (negative, moves for zoom)
    { label: "6", R: 124.3594, d: 7.6, nd: 1.720467, elemId: 4, sd: 37.0 }, // L21 front
    { label: "7", R: 1981.8668, d: 12.972, nd: 1.0, elemId: 0, sd: 35.0 }, // L21 rear → air
    { label: "8", R: 275.6157, d: 4.7, nd: 1.71736, elemId: 5, sd: 30.0 }, // L22 front
    { label: "9", R: -275.46, d: 2.85, nd: 1.6968, elemId: 6, sd: 29.0 }, // L22–L23 junction
    { label: "10", R: 109.0902, d: 3.124, nd: 1.0, elemId: 0, sd: 23.9 }, // L23 rear → air
    { label: "11", R: -1986.3568, d: 2.65, nd: 1.804, elemId: 7, sd: 25.0 }, // L24 front
    { label: "12", R: 57.14, d: 3.7, nd: 1.75575, elemId: 8, sd: 25.0 }, // L24–L25 junction
    { label: "13", R: 86.0604, d: 6.757, nd: 1.0, elemId: 0, sd: 22.5 }, // L25 rear → air
    { label: "14", R: -84.2865, d: 2.5, nd: 1.870705, elemId: 9, sd: 23.5 }, // L26 front
    { label: "15", R: -651.8818, d: 62.916, nd: 1.0, elemId: 0, sd: 23.5 }, // L26 rear → air (D2)
    // G3 — Relay (positive, fixed)
    { label: "16", R: 605.0183, d: 4.7, nd: 1.755, elemId: 10, sd: 23.5 }, // L31 front
    { label: "17", R: -156.1367, d: 0.1, nd: 1.0, elemId: 0, sd: 23.5 }, // L31 rear → air
    { label: "18", R: 88.3742, d: 6.8, nd: 1.433843, elemId: 11, sd: 23.5 }, // L32 front
    { label: "19", R: -277.5645, d: 1.626, nd: 1.0, elemId: 0, sd: 19.0 }, // L32 rear → air
    { label: "20", R: -115.6316, d: 4.7, nd: 1.65413, elemId: 12, sd: 16.0 }, // L33 front
    { label: "21", R: 88.6408, d: 1.061, nd: 1.0, elemId: 0, sd: 13.0 }, // L33 rear → air
    { label: "22", R: 123.7096, d: 5.3, nd: 1.91082, elemId: 13, sd: 13.5 }, // L34 front
    { label: "23", R: -404.2232, d: 21.244, nd: 1.0, elemId: 0, sd: 13.5 }, // L34 rear → air (D3)
    // G4 — Focus group (positive, moves for zoom and focus)
    { label: "24", R: 1e15, d: 4.0, nd: 1.804, elemId: 14, sd: 24.0 }, // L41 front (flat)
    { label: "25", R: -118.3357, d: 0.1, nd: 1.0, elemId: 0, sd: 24.0 }, // L41 rear → air
    { label: "26", R: 63.0226, d: 6.8, nd: 1.59349, elemId: 15, sd: 24.0 }, // L42 front
    { label: "27", R: -199.138, d: 1.8, nd: 1.84666, elemId: 16, sd: 22.0 }, // L42–L43 junction
    { label: "28", R: 199.011, d: 5.968, nd: 1.0, elemId: 0, sd: 21.5 }, // L43 rear → air (D4)
    // G5 — Rear group (negative, fixed, contains aperture stop)
    { label: "29", R: -145.6141, d: 1.9, nd: 2.001, elemId: 17, sd: 18.5 }, // L51 front
    { label: "30", R: 91.0903, d: 5.002, nd: 1.0, elemId: 0, sd: 18.0 }, // L51 rear → air
    { label: "STO", R: 1e15, d: 8.0, nd: 1.0, elemId: 0, sd: 16.7 }, // aperture stop
    { label: "32", R: 375.1468, d: 5.0, nd: 1.72916, elemId: 18, sd: 18.0 }, // L52 front
    { label: "33", R: -83.7956, d: 3.919, nd: 1.0, elemId: 0, sd: 18.0 }, // L52 rear → air
    { label: "34", R: 368.0922, d: 2.0, nd: 1.870705, elemId: 19, sd: 17.0 }, // L53 front
    { label: "35", R: 93.4714, d: 2.746, nd: 1.0, elemId: 0, sd: 16.5 }, // L53 rear → air
    { label: "36", R: -148.9288, d: 3.6, nd: 1.80518, elemId: 20, sd: 16.5 }, // L54 front
    { label: "37", R: -54.337, d: 1.9, nd: 1.5168, elemId: 21, sd: 16.5 }, // L54–L55 junction
    { label: "38", R: 107.7701, d: 5.617, nd: 1.0, elemId: 0, sd: 16.5 }, // L55 rear → air
    { label: "39", R: 1e15, d: 8.829, nd: 1.0, elemId: 0, sd: 16.0 }, // air gap
    { label: "40", R: 79.609, d: 4.4, nd: 2.001, elemId: 22, sd: 16.0 }, // L56 front
    { label: "41", R: -1873.4336, d: 0.782, nd: 1.0, elemId: 0, sd: 15.5 }, // L56 rear → air
    { label: "42", R: 64.0354, d: 3.0, nd: 1.804, elemId: 23, sd: 15.5 }, // L57 front
    { label: "43", R: 33.609, d: 10.0, nd: 1.48749, elemId: 24, sd: 14.5 }, // L57–L58 junction
    { label: "44", R: -77.3539, d: 6.728, nd: 1.0, elemId: 0, sd: 13.0 }, // L58 rear → air
    { label: "45", R: -70.8535, d: 2.0, nd: 1.90043, elemId: 25, sd: 10.5 }, // L59 front
    { label: "46", R: 224.495, d: 54.819, nd: 1.0, elemId: 0, sd: 10.0 }, // L59 rear → BF
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (zoom) ── */
  zoomPositions: [123.6, 200.0, 291.0],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    // D1 (G1–G2): zoom only, no close-focus data
    "5": [
      [5.114, 5.114],
      [39.909, 39.909],
      [66.471, 66.471],
    ],
    // D2 (G2–G3): zoom only, no close-focus data
    "15": [
      [62.916, 62.916],
      [28.122, 28.122],
      [1.56, 1.56],
    ],
    // D3 (G3–G4): zoom + focus (non-monotonic; close-focus values derived)
    "23": [
      [21.244, 18.622],
      [17.6, 10.969],
      [18.669, 4.191],
    ],
    // D4 (G4–G5): zoom + focus (non-monotonic; close-focus values derived)
    "28": [
      [5.968, 8.59],
      [9.611, 16.242],
      [8.542, 23.02],
    ],
  },

  varLabels: [
    ["5", "D1"],
    ["15", "D2"],
    ["23", "D3"],
    ["28", "D4"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+) Fixed", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) Zoom", fromSurface: "6", toSurface: "15" },
    { text: "G3 (+) Fixed", fromSurface: "16", toSurface: "23" },
    { text: "G4 (+) Zoom/Focus", fromSurface: "24", toSurface: "28" },
    { text: "G5 (−) Fixed", fromSurface: "29", toSurface: "46" },
  ],

  doublets: [
    { text: "J1", fromSurface: "1", toSurface: "3" },
    { text: "J2", fromSurface: "8", toSurface: "10" },
    { text: "J3", fromSurface: "11", toSurface: "13" },
    { text: "J4", fromSurface: "26", toSurface: "28" },
    { text: "J5", fromSurface: "36", toSurface: "38" },
    { text: "J6", fromSurface: "42", toSurface: "44" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 2.0,
  focusDescription:
    "G4 internal focus — G4 moves object-side for close focus. Constant overall length. G4 close-focus travel is estimated from ray tracing and production MFD, not tabulated in the patent.",

  /* ── Aperture configuration ── */
  nominalFno: 2.91,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
