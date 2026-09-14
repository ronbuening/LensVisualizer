import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 70-200mm f/4L USM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: JP2000284174A, Numerical Example 1 (Canon Inc.).     ║
 * ║ Production correlation: Canon EF70-200mm F4L USM, marketed Sep. 1999.     ║
 * ║ Patent model: 16 elements / 13 air-separated groups, all spherical.        ║
 * ║ No uniform scale is applied; patent dimensions are retained.               ║
 * ║                                                                            ║
 * ║ Zoom: published infinity gaps D8, D15, D18 at 71.92 / 118.29 / 194.57 mm. ║
 * ║ L2 moves imageward monotonically. L3 reverses slightly between the middle  ║
 * ║ and tele states; D18 therefore runs 19.00 -> 3.78 -> 4.11 mm.             ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that L1b       ║
 * ║ (R3-R8) translates rigidly toward the object, but publishes no close-focus ║
 * ║ spacing table. Close-focus D2/D8 pairs below were code-solved at Canon's   ║
 * ║ published 1.2 m MFD, measured from the image plane, with D2 + D8 conserved ║
 * ║ at each zoom state. No other focus movement is introduced.                 ║
 * ║                                                                            ║
 * ║ Image plane: Example 1 publishes no BFD. Independent d-line traces give    ║
 * ║ 53.134605 / 53.131905 / 53.126058 mm from R30; the fixed model uses their ║
 * ║ mean, 53.13085583884338 mm. The 0.008547 mm spread is source-rounding      ║
 * ║ residual, not a modeled image-plane movement.                              ║
 * ║                                                                            ║
 * ║ Stop: the patent gives the stop location and f/4.1 but no diameter. The    ║
 * ║ physical stop semi-diameter 14.25845124506584 mm is the common paraxial    ║
 * ║ value fitted to the three published zoom states.                           ║
 * ║                                                                            ║
 * ║ Semi-diameters: not published. They were inferred from d-line marginal-ray ║
 * ║ envelopes, the Canon/patent optical sections, and the current geometry     ║
 * ║ constraints. Front-group values were reduced where the generic marginal-  ║
 * ║ ray rule over-sizes the nearly touching R4/R5 pair. Sampled off-axis rays  ║
 * ║ may vignette only at air-separated element edges/gaps, never at cemented   ║
 * ║ interfaces. Edge thickness, actual spherical rim slope, cross-gap sag, and ║
 * ║ all six authored zoom/focus endpoint states are checked by the independent ║
 * ║ verification artifact.                                                     ║
 * ║                                                                            ║
 * ║ Spectral model: the patent publishes nd/vd only. Compatible catalog curves   ║
 * ║ provide dispersion; no surrogate line indices are marked as measured data.  ║
 * ║ S-TIH53WN is a current proxy introduced in 2025, not a historical identity.  ║
 * ║ Fluorite/UD APD tags are inferred from production correlation, not published ║
 * ║ partial-dispersion measurements of these patent elements.                   ║
 * ║                                                                            ║
 * ║ Product source: https://global.canon/en/c-museum/product/ef356.html        ║
 * ║ Patent text: https://patents.google.com/patent/JP2000284174A/ja            ║
 * ║ OHARA: https://www.ohara-inc.co.jp/en/product/01000/                       ║
 * ║ HIKARI: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/    ║
 * ║ SCHOTT: https://www.schott.com/en-us/products/optical-glass-p1000267       ║
 * ║ Canon Optron CaF2: https://optron.canon/ja/img/fluorite/pamphlet_caf2_en.pdf ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-70-200mm-f4-l-usm",
  maker: "Canon",
  name: "CANON EF 70-200mm f/4L USM",
  subtitle: "JP2000284174A Example 1 — constrained L1b close-focus reconstruction",
  specs: [
    "16 ELEMENTS / 13 GROUPS",
    "70-200mm f/4 (MARKETED)",
    "71.92-194.57mm f/4.1 (PATENT)",
    "1 FLUORITE + 2 UD (PRODUCTION)",
    "INNER FOCUS",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [71.901018294698, 194.54048138330802],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2000-284174 A",
  patentAuthors: ["Akihiro Nishio"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2000,
  elementCount: 16,
  groupCount: 13,

  /* ── Physical elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 504.97860448150544,
      glass: "S-FSL5 (OHARA) class",
      role: "L1a fixed front positive singlet.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.721507,
      vd: 29.2,
      indexReference: "d",
      fl: -232.7745541646512,
      glass: "S-TIH18 (OHARA) class",
      role: "First element of the translating L1b focus subgroup.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      fl: 185.1837114353476,
      glass: "Synthetic fluorite (CaF2) coordinate-compatible spectral surrogate; material inferred",
      role: "Fluorite-correlated positive element in L1b.",
      apd: "inferred",
      apdNote: "Fluorite element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      fl: 151.5526516535952,
      glass: "S-FPL51 (OHARA) / FCD1-class UD glass",
      role: "Low-dispersion positive element completing L1b.",
      apd: "inferred",
      apdNote: "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      fl: -40.04080045244512,
      glass: "804466 LASF class (HIKARI J-LASF015 spectral surrogate)",
      role: "Front negative element of variator L2.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: -48.772065290787715,
      glass: "S-BSL7 (OHARA) / N-BK7 class",
      cemented: "D1",
      role: "Negative member of the L2 cemented pair.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      fl: 44.06754209338408,
      glass: "S-TIH53WN (OHARA) class; current spectral surrogate",
      cemented: "D1",
      role: "Positive high-index member of the L2 cemented pair.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35,
      indexReference: "d",
      fl: -123.02931910317324,
      glass: "LAFN7 (SCHOTT) coordinate-compatible spectral surrogate; supplier unspecified",
      role: "Rear negative singlet of variator L2.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      fl: 42.10619768711282,
      glass: "S-BSM15 (OHARA) class",
      cemented: "D2",
      role: "Positive member of compensator L3.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.762001,
      vd: 40.1,
      indexReference: "d",
      fl: -69.68168623172724,
      glass: "762401 lanthanum-flint class (OHARA S-LAM55 spectral surrogate)",
      cemented: "D2",
      role: "Negative member of compensator L3.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      fl: 62.58129794709216,
      glass: "603607 barium-crown class (OHARA S-BSM14 spectral surrogate)",
      role: "Front positive singlet of fixed relay L4.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      fl: 62.25992084324545,
      glass: "S-FPL51 (OHARA) / FCD1-class UD glass",
      cemented: "D3",
      role: "Low-dispersion positive member of the relay cemented pair.",
      apd: "inferred",
      apdNote: "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.804398,
      vd: 39.6,
      indexReference: "d",
      fl: -40.06897146924538,
      glass: "J-LASF013 (HIKARI) coordinate-compatible spectral surrogate; supplier unspecified",
      cemented: "D3",
      role: "Negative high-index member of the relay cemented pair.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      fl: 117.6441505848965,
      glass: "603607 barium-crown class (OHARA S-BSM14 spectral surrogate)",
      role: "Positive relay singlet.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.696797,
      vd: 55.5,
      indexReference: "d",
      fl: -75.16362790775038,
      glass: "697555 lanthanum-crown class (OHARA S-LAL14 spectral surrogate)",
      role: "Rear negative relay singlet.",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.592701,
      vd: 35.3,
      indexReference: "d",
      fl: 208.66537800636974,
      glass: "593353 flint class (OHARA S-FTM16 spectral surrogate)",
      role: "Final positive relay singlet.",
    },
  ],

  // Optical rims refined against the exact local patent at 600 dpi; see the companion analysis.
  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 175.317, d: 3.7, nd: 1.48749, elemId: 1, sd: 26 },
    { label: "2", R: 604.892, d: 14.82, nd: 1, elemId: 0, sd: 25.6 },
    { label: "3", R: 89.957, d: 2.1, nd: 1.721507, elemId: 2, sd: 25.8 },
    { label: "4", R: 58.007, d: 0.1, nd: 1, elemId: 0, sd: 21 },
    { label: "5", R: 59.256, d: 5.3, nd: 1.43387, elemId: 3, sd: 21 },
    { label: "6", R: 219.639, d: 0.15, nd: 1, elemId: 0, sd: 25.8 },
    { label: "7", R: 81.599, d: 4.9, nd: 1.496999, elemId: 4, sd: 24.2 },
    { label: "8", R: -959.561, d: 1.9, nd: 1, elemId: 0, sd: 24.2 },
    { label: "9", R: -191.294, d: 1.4, nd: 1.804, elemId: 5, sd: 14 },
    { label: "10", R: 38.833, d: 4.44, nd: 1, elemId: 0, sd: 13.8 },
    { label: "11", R: -70.462, d: 1.4, nd: 1.51633, elemId: 6, sd: 13.2 },
    { label: "12", R: 39.453, d: 3.6, nd: 1.846658, elemId: 7, sd: 13.2 },
    { label: "13", R: -658.192, d: 1, nd: 1, elemId: 0, sd: 12.8 },
    { label: "14", R: -81.31, d: 1.4, nd: 1.7495, elemId: 8, sd: 12.8 },
    { label: "15", R: -692.9, d: 25.57, nd: 1, elemId: 0, sd: 14 },
    { label: "16", R: 196.499, d: 5.6, nd: 1.622992, elemId: 9, sd: 15 },
    { label: "17", R: -29.942, d: 1.5, nd: 1.762001, elemId: 10, sd: 15 },
    { label: "18", R: -70.147, d: 19, nd: 1, elemId: 0, sd: 15 },
    { label: "STO", R: 1e15, d: 1.2, nd: 1, elemId: 0, sd: 14.25845124506584 },
    { label: "20", R: 39.066, d: 4.6, nd: 1.603112, elemId: 11, sd: 15 },
    { label: "21", R: -1065.561, d: 0.2, nd: 1, elemId: 0, sd: 15 },
    { label: "22", R: 37.556, d: 4.8, nd: 1.496999, elemId: 12, sd: 14.8 },
    { label: "23", R: -168.276, d: 2.03, nd: 1.804398, elemId: 13, sd: 14 },
    { label: "24", R: 40.082, d: 30.56, nd: 1, elemId: 0, sd: 13.5 },
    { label: "25", R: 215.146, d: 3.5, nd: 1.603112, elemId: 14, sd: 15.3 },
    { label: "26", R: -105.218, d: 10.18, nd: 1, elemId: 0, sd: 15.3 },
    { label: "27", R: -27.22, d: 1.6, nd: 1.696797, elemId: 15, sd: 15.8 },
    { label: "28", R: -58.044, d: 0.15, nd: 1, elemId: 0, sd: 15.8 },
    { label: "29", R: 187.477, d: 3, nd: 1.592701, elemId: 16, sd: 16.4 },
    { label: "30", R: -361.255, d: 53.13085583884338, nd: 1, elemId: 0, sd: 16.4 },
  ],

  asph: {},

  /* ── Zoom and constrained focus motion ── */
  zoomPositions: [71.92, 118.29, 194.57],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "2": [
      [14.82, 1.2774233042763932],
      [14.82, 1.2852889334020894],
      [14.82, 1.2877302598412754],
    ],
    "8": [
      [1.9, 15.442576695723607],
      [25.6, 39.134711066597916],
      [41.25, 54.782269740158725],
    ],
    "15": [
      [25.57, 25.57],
      [17.09, 17.09],
      [1.11, 1.11],
    ],
    "18": [
      [19, 19],
      [3.78, 3.78],
      [4.11, 4.11],
    ],
  },
  varLabels: [
    ["2", "D2 / L1b FRONT"],
    ["8", "D8 / L1b REAR"],
    ["15", "D15"],
    ["18", "D18"],
  ],
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-published inner focus translates L1b (R3-R8) rigidly objectward. Close-focus D2/D8 endpoints are code-solved at Canon's 1.2 m MFD with the fixed common image plane; D2 decreases by the same amount D8 increases. D15 and D18 are zoom-only.",

  groups: [
    { text: "L1a FIXED", fromSurface: "1", toSurface: "2" },
    { text: "L1b FOCUS", fromSurface: "3", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "15" },
    { text: "L3", fromSurface: "16", toSurface: "18" },
    { text: "L4", fromSurface: "20", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
  ],

  closeFocusM: 1.2,
  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
