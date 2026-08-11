import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,589,798, Example II (Toshinobu Ogura / Minolta).║
 * ║  Patent prescription normalized to f = 1 and scaled uniformly ×16.║
 * ║                                                                    ║
 * ║  SOURCE CONTRADICTIONS: the Embodiment II body table prints a     ║
 * ║  150° field and d20 = 0.280, while Claim 2 gives 180° and          ║
 * ║  d20 = 0.285; Fig. 5 reaches 90° half-field. This model uses       ║
 * ║  180° and Claim 2 d20 = 0.285. Those rows sum to 4.0335 although  ║
 * ║  the patent prints Σd = 4.0336; no value is forced to close it.    ║
 * ║                                                                    ║
 * ║  Source construction: 11 elements / 8 groups including G6 filter. ║
 * ║  Active LensVisualizer model: 10 elements / 7 groups; G6 omitted. ║
 * ║  The omitted plane-parallel G6 filter (t = 0.0933, n = 1.5994) is ║
 * ║  replaced by its paraxial air-equivalent thickness t/n. The G5→G7║
 * ║  effective air gap is therefore 7.302950006252345 mm at ×16.      ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. Minolta publishes      ║
 * ║  minimum focus 0.3 m, but the selected patent publishes no focus  ║
 * ║  movement table; no variable internal gaps are invented.          ║
 * ║                                                                    ║
 * ║  STOP MODELING INFERENCE: the patent only says that the stop is   ║
 * ║  usually between G5 and G7. STO is placed at the air-equivalent   ║
 * ║  station corresponding to the rear face of removable filter G6   ║
 * ║  (2.533350006252345 mm after r10; 4.7696 mm before r13). Its      ║
 * ║  semi-diameter is solved from the verified EFL and f/2.8 entrance ║
 * ║  pupil constraint, not read from the patent.                       ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS are modeling inferences. They were derived from   ║
 * ║  exact spherical marginal/chief-ray bundles, the patent Fig. 2    ║
 * ║  silhouette, Minolta's 36×24 mm coverage (180° diagonal, 137°     ║
 * ║  horizontal, 86° vertical), and the 73 mm exterior diameter.      ║
 * ║  The authored apertures pass the default 54° bundle and the full  ║
 * ║  68.5° horizontal half-field at the authored ray fractions;       ║
 * ║  additional vignetting toward the 90° diagonal edge is expected.  ║
 * ║                                                                    ║
 * ║  PROJECTION MODELING INFERENCE: neither patent nor Minolta names  ║
 * ║  a projection law. "fisheye-equisolid" is used as the viewer     ║
 * ║  reference because the independently traced chief-ray image       ║
 * ║  heights closely follow an equisolid 16 mm mapping through the    ║
 * ║  vertical/horizontal field; this is not asserted as a source fact.║
 * ║                                                                    ║
 * ║  The patent publishes only N and V. No per-element nC, nF, ng, or ║
 * ║  dPgF values are available, so those optional spectral fields are ║
 * ║  intentionally not fabricated. Glass labels are class/code-level.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-mc-fish-eye-rokkor-ok-16mm-f28",
  maker: "Minolta",
  name: "MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8",
  subtitle: "US 3,589,798 — Example II; production correlation to the MC Fish-Eye Rokkor-OK",
  specs: [
    "MINOLTA: 11 ELEMENTS / 8 GROUPS INCLUDING BUILT-IN FILTER",
    "ACTIVE MODEL: 10 ELEMENTS / 7 GROUPS",
    "16mm f/2.8",
    "180° DIAGONAL FISHEYE",
    "MINIMUM FOCUS 0.3m",
  ],

  focalLengthMarketing: 16,
  focalLengthDesign: 15.99998354597765,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,589,798",
  patentAuthors: ["Toshinobu Ogura"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1971,
  elementCount: 10,
  groupCount: 7,

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 16,
    fullFieldDeg: 180,
    imageCircleMm: 43.3,
    maxTraceFieldDeg: 90,
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element G1",
      type: "Negative Meniscus, convex to object",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: -36.5781828572147,
      glass: "620603 — SK16/BSM16/BACD16 class",
      apd: false,
      role: "Front divergent meniscus for extreme-field ray bending and long back focus.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element G2",
      type: "Negative Meniscus, convex to object",
      nd: 1.6176,
      vd: 52.7,
      indexReference: "d",
      fl: -48.4640315065228,
      glass: "618527 — legacy glass class (catalog unresolved)",
      apd: false,
      role: "Second divergent front meniscus; part of the patent's front negative section.",
    },
    {
      id: 3,
      name: "G3",
      label: "Element G3",
      type: "Biconcave Negative",
      nd: 1.6205,
      vd: 60.3,
      indexReference: "d",
      fl: -42.26691702392411,
      glass: "620603 — SK16/BSM16/BACD16 class (melt/rounding residual)",
      apd: false,
      cemented: "D1",
      role: "Negative member of the G3/G4 cemented pair.",
    },
    {
      id: 4,
      name: "G4",
      label: "Element G4",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 34.9,
      indexReference: "d",
      fl: 40.079092771749565,
      glass: "H-LaF4 (CDGM catalog equivalent; patent 750349; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the G3/G4 cemented pair ahead of the stop region.",
    },
    {
      id: 5,
      name: "G5",
      label: "Element G5",
      type: "Plano-Convex Positive",
      nd: 1.733,
      vd: 28.2,
      indexReference: "d",
      fl: 47.46957708049113,
      glass: "733282 — dense-flint class (catalog unresolved)",
      apd: false,
      role: "Positive element immediately ahead of the stop/filter region.",
    },
    {
      id: 6,
      name: "G7",
      label: "Element G7",
      type: "Positive Meniscus, convex to image",
      nd: 1.6214,
      vd: 61.2,
      indexReference: "d",
      fl: 21.74339423513618,
      glass: "621612 — crown class (catalog unresolved)",
      apd: false,
      cemented: "D2",
      role: "Positive member of the G7/G8 rear-side cemented pair.",
    },
    {
      id: 7,
      name: "G8",
      label: "Element G8",
      type: "Negative Meniscus, convex to image",
      nd: 1.733,
      vd: 28.2,
      indexReference: "d",
      fl: -26.544201505929248,
      glass: "733282 — dense-flint class (catalog unresolved)",
      apd: false,
      cemented: "D2",
      role: "Negative member of the G7/G8 cemented pair.",
    },
    {
      id: 8,
      name: "G9",
      label: "Element G9",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 37.5,
      indexReference: "d",
      fl: -28.977836535083295,
      glass: "740375 — high-index flint/lanthanum class (catalog unresolved)",
      apd: false,
      cemented: "D3",
      role: "Negative member of the G9/G10 cemented pair.",
    },
    {
      id: 9,
      name: "G10",
      label: "Element G10",
      type: "Biconvex Positive",
      nd: 1.5688,
      vd: 56,
      indexReference: "d",
      fl: 26.408851081456387,
      glass: "569560 — BAK4/BAC4/BaK7 class",
      apd: false,
      cemented: "D3",
      role: "Positive member of the G9/G10 cemented pair.",
    },
    {
      id: 10,
      name: "G11",
      label: "Element G11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 54.13109207780881,
      glass: "517642 — BK7/BSC7/K9L class",
      apd: false,
      role: "Final positive element ahead of the long SLR back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 121.3312, d: 2.08, nd: 1.6204, elemId: 1, sd: 27 },
    { label: "2", R: 18.992, d: 7.8544, nd: 1, elemId: 0, sd: 16.8 },
    { label: "3", R: 39.6592, d: 1.92, nd: 1.6176, elemId: 2, sd: 15.5 },
    { label: "4", R: 16.7424, d: 7.6544, nd: 1, elemId: 0, sd: 12 },
    { label: "5", R: -43.368, d: 1.6, nd: 1.6205, elemId: 3, sd: 12 },
    { label: "6", R: 67.2912, d: 7.5216, nd: 1.7495, elemId: 4, sd: 11.5 },
    { label: "8", R: -51.664, d: 0.144, nd: 1, elemId: 0, sd: 10.7 },
    { label: "9", R: 34.7952, d: 7.592, nd: 1.733, elemId: 5, sd: 9.5 },
    { label: "10", R: 1e15, d: 2.533350006252345, nd: 1, elemId: 0, sd: 7.1 },
    { label: "STO", R: 1e15, d: 4.7696, nd: 1, elemId: 0, sd: 5.8174759107122735 },
    { label: "13", R: -27.32, d: 5.4096, nd: 1.6214, elemId: 6, sd: 7.3 },
    { label: "14", R: -9.7264, d: 2.3696, nd: 1.733, elemId: 7, sd: 8.3 },
    { label: "16", R: -21.4528, d: 0.144, nd: 1, elemId: 0, sd: 10.4 },
    { label: "17", R: -129.2096, d: 1.36, nd: 1.74, elemId: 8, sd: 11.5 },
    { label: "18", R: 25.8256, d: 6.32, nd: 1.5688, elemId: 9, sd: 12.6 },
    { label: "19", R: -32.72, d: 0.144, nd: 1, elemId: 0, sd: 12.8 },
    { label: "20", R: 53.8352, d: 4.56, nd: 1.5168, elemId: 10, sd: 14.8 },
    { label: "21", R: -56.5568, d: 36.380358782191585, nd: 1, elemId: 0, sd: 15 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "10" },
    { text: "REAR", fromSurface: "13", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "16" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — Minolta specifies 0.3 m minimum focus, but US 3,589,798 Example II publishes no focus-spacing or movement table; the model remains at the published infinity prescription.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
