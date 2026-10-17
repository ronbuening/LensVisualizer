import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Active LensVisualizer model: 10 elements / 7 groups. The patent   ║
 * ║  calls G6 an interchangeable filter that can be removed or placed  ║
 * ║  behind the last element, so it is not modeled. The plane-parallel ║
 * ║  G6 (t = 0.0933, n = 1.5994) is replaced by its paraxial air-      ║
 * ║  equivalent thickness t/n, which keeps the published first-order   ║
 * ║  values; the G5 to G7 air gap is therefore 7.302950006252345 mm at ║
 * ║  ×16.                                                              ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. Minolta publishes      ║
 * ║  minimum focus 0.3 m, but the selected patent publishes no focus  ║
 * ║  movement table; no variable internal gaps are invented.          ║
 * ║                                                                    ║
 * ║  STOP MODELING INFERENCE: the patent only says that the stop is   ║
 * ║  usually between G5 and G7. STO is placed at the air-equivalent   ║
 * ║  station corresponding to the rear face of removable filter G6   ║
 * ║  (2.533350006252345 mm after r10; 4.7696 mm before r13). Its      ║
 * ║  radius is derived from the design f-number, not read from the    ║
 * ║  patent.                                                          ║
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
 * ║  intentionally not fabricated. Catalog equivalents remain explicit║
 * ║  approximations, and incompatible rows are marked unmatched.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-mc-fish-eye-rokkor-ok-16mm-f28",
  maker: "Minolta",
  name: "MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8",
  subtitle: "US 3,589,798 — Example II; production correlation to the MC Fish-Eye Rokkor-OK",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: [
      "MINOLTA: 11 ELEMENTS / 8 GROUPS INCLUDING BUILT-IN FILTER",
      "ACTIVE MODEL: 10 ELEMENTS / 7 GROUPS",
      "16mm f/2.8",
      "180° DIAGONAL FISHEYE",
      "MINIMUM FOCUS 0.3m",
    ],
    elementCount: 10,
    groupCount: 7,
    focalLengthMm: { marketing: 16, design: 15.99998354597765 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,589,798",
    patentYear: 1971,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
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
      focalLengthMm: -36.5781828572147,
      glass: "620603 — SK16/BSM16/BACD16 class",
      apd: false,
      role: "Front divergent meniscus for extreme-field ray bending and long back focus.",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element G2",
      type: "Negative Meniscus, convex to object",
      nd: 1.6176,
      vd: 52.7,
      indexReference: "d",
      focalLengthMm: -48.4640315065228,
      glass: "K-SSK1 (SUMITA catalog equivalent; patent 618527; production supplier unspecified)",
      apd: false,
      role: "Second divergent front meniscus; part of the patent's front negative section.",
      diagramLabel: "G2",
    },
    {
      id: 3,
      name: "G3",
      label: "Element G3",
      type: "Biconcave Negative",
      nd: 1.6205,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -42.26691702392411,
      glass: "620603 — SK16/BSM16/BACD16 class (melt/rounding residual)",
      apd: false,
      role: "Negative member of the G3/G4 cemented pair.",
      diagramLabel: "G3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "G4",
      label: "Element G4",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 34.9,
      indexReference: "d",
      focalLengthMm: 40.079092771749565,
      glass: "H-LaF4 (CDGM catalog equivalent; patent 750349; production supplier unspecified)",
      apd: false,
      role: "Positive member of the G3/G4 cemented pair ahead of the stop region.",
      diagramLabel: "G4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "G5",
      label: "Element G5",
      type: "Plano-Convex Positive",
      nd: 1.733,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: 47.46957708049113,
      glass: "Unmatched (733282 dense flint; no compatible public coefficient row)",
      apd: false,
      role: "Positive element immediately ahead of the stop/filter region.",
      diagramLabel: "G5",
    },
    {
      id: 6,
      name: "G7",
      label: "Element G7",
      type: "Positive Meniscus, convex to image",
      nd: 1.6214,
      vd: 61.2,
      indexReference: "d",
      focalLengthMm: 21.74339423513618,
      glass: "N-SK16 / S-BSM16 / J-SK16 catalog-equivalent crown class (patent 621612; supplier unspecified)",
      apd: false,
      role: "Positive member of the G7/G8 rear-side cemented pair.",
      diagramLabel: "G7",
      cemented: "D2",
    },
    {
      id: 7,
      name: "G8",
      label: "Element G8",
      type: "Negative Meniscus, convex to image",
      nd: 1.733,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -26.544201505929248,
      glass: "Unmatched (733282 dense flint; no compatible public coefficient row)",
      apd: false,
      role: "Negative member of the G7/G8 cemented pair.",
      diagramLabel: "G8",
      cemented: "D2",
    },
    {
      id: 8,
      name: "G9",
      label: "Element G9",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 37.5,
      indexReference: "d",
      focalLengthMm: -28.977836535083295,
      glass: "Unmatched (740375 high-index flint; no compatible public coefficient row)",
      apd: false,
      role: "Negative member of the G9/G10 cemented pair.",
      diagramLabel: "G9",
      cemented: "D3",
    },
    {
      id: 9,
      name: "G10",
      label: "Element G10",
      type: "Biconvex Positive",
      nd: 1.5688,
      vd: 56,
      indexReference: "d",
      focalLengthMm: 26.408851081456387,
      glass: "569560 — BAK4/BAC4/BaK7 class",
      apd: false,
      role: "Positive member of the G9/G10 cemented pair.",
      diagramLabel: "G10",
      cemented: "D3",
    },
    {
      id: 10,
      name: "G11",
      label: "Element G11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 54.13109207780881,
      glass: "517642 — BK7/BSC7/K9L class",
      apd: false,
      role: "Final positive element ahead of the long SLR back focus.",
      diagramLabel: "G11",
    },
  ],

  surfaces: [
    { label: "1", R: 121.3312, d: 2.08, sd: 27, medium: 1 },
    { label: "2", R: 18.992, d: 7.8544, sd: 16.8 },
    { label: "3", R: 39.6592, d: 1.92, sd: 15.5, medium: 2 },
    { label: "4", R: 16.7424, d: 7.6544, sd: 12 },
    { label: "5", R: -43.368, d: 1.6, sd: 12, medium: 3 },
    { label: "6", R: 67.2912, d: 7.5216, sd: 11.5, medium: 4 },
    { label: "8", R: -51.664, d: 0.144, sd: 10.7 },
    { label: "9", R: 34.7952, d: 7.592, sd: 9.5, medium: 5 },
    { label: "10", R: "flat", d: 2.533350006252345, sd: 7.1 },
    { label: "STO", R: "flat", d: 4.7696 },
    { label: "13", R: -27.32, d: 5.4096, sd: 7.3, medium: 6 },
    { label: "14", R: -9.7264, d: 2.3696, sd: 8.3, medium: 7 },
    { label: "16", R: -21.4528, d: 0.144, sd: 10.4 },
    { label: "17", R: -129.2096, d: 1.36, sd: 11.5, medium: 8 },
    { label: "18", R: 25.8256, d: 6.32, sd: 12.6, medium: 9 },
    { label: "19", R: -32.72, d: 0.144, sd: 12.8 },
    { label: "20", R: 53.8352, d: 4.56, sd: 14.8, medium: 10 },
    { label: "21", R: -56.5568, d: 36.380358782191585, sd: 15 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION — Minolta specifies 0.3 m minimum focus, but US 3,589,798 Example II publishes no focus-spacing or movement table; the model remains at the published infinity prescription.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 16,
    fullFieldDeg: 180,
    imageCircleMm: 43.3,
    maxTraceFieldDeg: 90,
  },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "10" },
    { text: "REAR", fromSurface: "13", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "16" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  layout: { yScFill: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
