// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — MINOLTA MD ZOOM 24-35mm f/3.5                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S56-158314 A (特開昭56-158314) Example 1            ║
 * ║    (Minolta Camera Co., Ltd.; inventor 中村昭義).                     ║
 * ║  Two-group negative-lead (−, +) wide-angle zoom; group I L1–L4,      ║
 * ║    group II L5–L10.                                                  ║
 * ║  10 elements / 10 groups, 0 aspherical surfaces (all spherical).     ║
 * ║  Focus: front group I extends as a unit; group II and the image      ║
 * ║    plane stay fixed (CONSTRAINED_RECONSTRUCTION, see below).         ║
 * ║                                                                      ║
 * ║  Zoom: group I reverses (track 93.40 mm wide, minimum 91.78 mm at   ║
 * ║    f ≈ 31.25 = |F_I|, 92.00 mm tele); group II moves monotonically   ║
 * ║    8.62 mm toward the object, wide → tele.                           ║
 * ║  Zoom variable gaps: 8 (zoom + focus), 20 = BF (zoom only).          ║
 * ║  Zoom stations: 24.61 / 29.00 / 34.14 mm are the patent's published  ║
 * ║    d8 states (printed tele → wide as f = 35, 28, 24; reordered).     ║
 * ║    26.70 and 31.50 mm are DERIVED stations: d8 solved for that EFL   ║
 * ║    on the two-group law, added so piecewise-linear interpolation of  ║
 * ║    d8/BF stays within depth of focus (max 0.048 mm vs 0.19 mm with   ║
 * ║    the published stations alone). Not patent data.                   ║
 * ║  The patent's f = 35/28/24 are nominal labels; computed EFLs are     ║
 * ║    34.14/29.00/24.61 mm (same offset in Examples 2 and 3).           ║
 * ║                                                                      ║
 * ║  NOTE ON BF: the patent prints no back focus. BF = computed d-line   ║
 * ║    paraxial infinity focus per station, rounded to 0.001 mm.         ║
 * ║  NOTE ON FOCUS: no close-focus data are published. Close-focus d8    ║
 * ║    values solve the paraxial conjugate for a 0.3 m object-to-film    ║
 * ║    distance (third-party marketed MFD) with group I extension only   ║
 * ║    (≈4.08–4.11 mm). The mechanism follows the patent's background    ║
 * ║    text on front-group focusing; it is a reconstruction.             ║
 * ║  NOTE ON STOP POSITION: not published (absent from table and Fig.1). ║
 * ║    Inferred in d12 (L6–L7), mid-gap: best fit of ray-derived         ║
 * ║    element heights to Fig. 1 proportions, and d12 is Example 1's one ║
 * ║    enlarged air space in the L5–L8 region.                           ║
 * ║  NOTE ON APERTURE: constant f/3.5 via zoomApertureModel              ║
 * ║    "from-nominal-fno". Paraxial iris radius 6.36 → 7.45 mm wide →    ║
 * ║    tele; the engine's real-ray solve draws 6.52 → 7.80 mm.           ║
 * ║    Calibrated to the patent FNO; not a published stop diameter.      ║
 * ║    STO sd below is the paraxial tele-station radius.                 ║
 * ║  NOTE ON SEMI-DIAMETERS: modeled, none published. 1.08 × max of the  ║
 * ║    f/3.5 axial marginal and the ±0.5-pupil full-field (Y′ 21.6)      ║
 * ║    real-ray bundle over the five infinity stations, rounded up to    ║
 * ║    0.1 mm. Checked against Fig. 1 (≈ 11.65 px/mm at 347 dpi, from    ║
 * ║    the group I and II vertex spans): every drawn rim is within 10 %  ║
 * ║    of these values (group I ≈ 5 % smaller in the figure, group II    ║
 * ║    equal), so no value was refitted to the drawing.                  ║
 * ║  NOTE ON SCALING: none (s = 1).                                      ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  No plates are listed by the source. See LENS_DATA_SPEC.md § Scope.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-md-zoom-24-35-f35",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 24-35mm f/3.5",
  subtitle: "JP S56-158314 A EXAMPLE 1 — MINOLTA CAMERA / AKIYOSHI NAKAMURA",
  specs: ["10 ELEMENTS / 10 GROUPS", "f ≈ 24.6–34.1 mm", "F/3.5", "2ω ≈ 84.2°–65.3°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [24, 35],
  focalLengthDesign: [24.61, 34.14],
  apertureMarketing: 3.5,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S56-158314 A",
  patentAuthors: ["Akiyoshi Nakamura"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1981,
  elementCount: 10,
  groupCount: 10,

  /* ── Elements ── d-line Nd/νd from the patent; fl = standalone thick-lens focal length in air. */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.11,
      fl: 176.6,
      glass: "S-BAL35 (OHARA)",
      role: "Weak positive meniscus at the front of negative group I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 40.97,
      fl: -30.5,
      glass: "S-LAH53 (OHARA) class — Close (patent 805410, Δnd +0.0011)",
      role: "Negative meniscus convex to the object; first strong divergent element of group I",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.805,
      vd: 40.97,
      fl: -28.4,
      glass: "S-LAH53 (OHARA) class — Close (patent 805410, Δnd +0.0011)",
      role: "Biconcave negative; strongest negative element of group I (condition 2)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 38.3,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint positive meniscus compensating the aberrations of L3 (condition 3)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.39,
      fl: 178.7,
      glass: "LAC13 (HOYA)",
      role: "Weak positive meniscus concave to the object at the front of group II (conditions 4 and 5)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.15,
      fl: 37.3,
      glass: "BAF10 (HOYA)",
      role: "Biconvex positive of group II, ahead of the inferred stop",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.61272,
      vd: 58.52,
      fl: 45.5,
      glass: "BACD4 (HOYA) — Close (613585)",
      role: "Positive meniscus convex to the object, behind the inferred stop",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.43,
      fl: -16.4,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint biconcave negative following three positive elements",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.96,
      fl: 61.1,
      glass: "E-C3 (HOYA)",
      role: "Positive meniscus concave to the object",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.52584,
      vd: 52.06,
      fl: 45.5,
      glass: "Unmatched (526521 crown/light-flint boundary; nearest HOYA CF2 at Δnd +0.0005, Δνd −1.0)",
      role: "Biconvex positive rear element",
    },
  ],

  /* ── Surface prescription ── R, d, Nd from Example 1; d8 and BF at the first (wide, infinity) state. */
  surfaces: [
    { label: "1", R: 85.79, d: 3.1, nd: 1.58913, elemId: 1, sd: 21.4 },
    { label: "2", R: 481.99, d: 0.15, nd: 1.0, elemId: 0, sd: 20.7 },
    { label: "3", R: 49.3, d: 2.0, nd: 1.805, elemId: 2, sd: 17.3 },
    { label: "4", R: 16.1, d: 8.0, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "5", R: -175.1, d: 1.5, nd: 1.805, elemId: 3, sd: 12.3 },
    { label: "6", R: 26.37, d: 3.0, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "7", R: 28.33, d: 3.2, nd: 1.80518, elemId: 4, sd: 11.2 },
    { label: "8", R: 326.83, d: 13.02, nd: 1.0, elemId: 0, sd: 10.9 }, // d8 variable (zoom + focus)
    { label: "9", R: -76.18, d: 2.0, nd: 1.6935, elemId: 5, sd: 8.0 },
    { label: "10", R: -47.69, d: 0.15, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "11", R: 25.42, d: 5.0, nd: 1.67003, elemId: 6, sd: 8.5 },
    { label: "12", R: -1389.18, d: 1.075, nd: 1.0, elemId: 0, sd: 8.2 }, // patent d12 = 2.15, split at the inferred stop
    { label: "STO", R: 1e15, d: 1.075, nd: 1.0, elemId: 0, sd: 7.45 }, // STO inferred mid-d12 (not published)
    { label: "13", R: 18.06, d: 2.69, nd: 1.61272, elemId: 7, sd: 7.8 },
    { label: "14", R: 48.44, d: 1.5, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "15", R: -50.28, d: 2.95, nd: 1.80518, elemId: 8, sd: 7.2 },
    { label: "16", R: 18.42, d: 1.87, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "17", R: -82.19, d: 2.0, nd: 1.51823, elemId: 9, sd: 6.8 },
    { label: "18", R: -23.06, d: 0.15, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "19", R: 539.97, d: 2.2, nd: 1.52584, elemId: 10, sd: 7.8 },
    { label: "20", R: -25.02, d: 36.77, nd: 1.0, elemId: 0, sd: 8.1 }, // BF (computed, zoom only)
  ],

  asph: {},

  /* ── Variable spacings ── one [infinity, close 0.3 m] pair per zoom station (wide → tele).
   *    Stations 2 and 4 are derived (see header); close-focus values are a reconstruction. */
  var: {
    "8": [
      [13.02, 17.13],
      [10.214, 14.309],
      [7.59, 11.676],
      [5.17, 9.252],
      [3.0, 7.086],
    ],
    "20": [
      [36.77, 36.77],
      [38.657, 38.657],
      [40.737, 40.737],
      [43.001, 43.001],
      [45.39, 45.39],
    ],
  },

  varLabels: [
    ["8", "D8"],
    ["20", "BF"],
  ],

  /* ── Zoom ── computed EFLs (mm); 26.7 and 31.5 are derived stations. */
  zoomPositions: [24.61, 26.7, 29, 31.5, 34.14],
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",

  groups: [
    { text: "I (−)", fromSurface: "1", toSurface: "8" },
    { text: "II (+)", fromSurface: "9", toSurface: "20" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  // Source rows only; the other zoom stations are solved or sampled control points.
  publishedStations: { zoom: [0, 2, 4] },
  focusDescription:
    "Front group I (L1–L4) extends as a unit by about 4.1 mm while group II and the image plane stay fixed. Close-focus spacings are a paraxial reconstruction for 0.3 m from the film plane, not patent data.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
