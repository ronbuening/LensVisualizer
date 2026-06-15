import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — Minolta AF APO Tele 200mm f/2.8
 *
 * Data source: US 4,786,152, Embodiment 3 (Arimoto / Minolta).
 * Three-unit telephoto: positive front unit, negative internal-focus unit, positive rear relay.
 * 8 elements / 7 air-spaced groups; all spherical.
 *
 * Focus: Unit II (L5-L7) moves imageward. Front Unit I, rear Unit III, and image plane remain fixed.
 *
 * Scaling note: Patent Table 3 is nominally normalized to f = 100, but an independent
 * paraxial trace gives EFL = 107.407402. R, d, and sd values are uniformly scaled by
 * ×1.862069062 so the data-file EFL is 200 mm, matching the production lens marking
 * rather than the internally inconsistent patent normalization.
 *
 * Semi-diameter note: The patent omits clear apertures. Semi-diameters here are conservative
 * estimates from the f/2.8 marginal ray envelope, stop imaging, element edge thickness,
 * and cross-gap sag limits.
 */

const LENS_DATA = {
  key: "minolta-af-200mm-f28",
  maker: "Minolta",
  name: "MINOLTA AF APO Tele 200mm f/2.8",
  subtitle: "US 4,786,152 Embodiment 3 — Minolta / Arimoto",
  specs: [
    "200mm f/2.8",
    "8 elements / 7 groups",
    "2ω = 12° in patent; 12°30′ manufacturer angle of view",
    "Two patent-listed anomalous-dispersion crowns",
    "Internal focusing, Unit II",
  ],

  focalLengthMarketing: 200,
  focalLengthDesign: 200,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 1988,
  elementCount: 8,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.55,
      fl: 179.37,
      glass: "Unmatched AD fluorophosphate crown (493/836; θgF = 0.539 patent-listed)",
      apd: "patent",
      apdNote: "θgF = 0.539; public catalog glass unresolved against current HOYA/OHARA data",
      role: "Front positive collector and primary anomalous-dispersion chromatic corrector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.4931,
      vd: 83.55,
      fl: 154.97,
      glass: "Unmatched AD fluorophosphate crown (493/836; θgF = 0.539 patent-listed)",
      apd: "patent",
      apdNote: "θgF = 0.539; public catalog glass unresolved against current HOYA/OHARA data",
      role: "Second anomalous-dispersion positive element; shares the front-group chromatic correction load.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 52.14,
      fl: 116.11,
      glass: "Unmatched high-index lanthanum crown (720/521)",
      role: "High-index positive meniscus completing component I-1; its rear radius and following air gap govern coma control.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.721,
      vd: 33.4,
      fl: -57.71,
      glass: "Unmatched dense lanthanum flint (721/334)",
      role: "Negative component I-2; balances front-group power and contributes telephoto contraction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.51,
      fl: 90.57,
      glass: "E-FD4 (HOYA) / S-TIH4 (OHARA)",
      role: "Positive dense-flint front component of the Unit II cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.31,
      fl: -46.13,
      glass: "LAC10 (HOYA) / S-LAL10 (OHARA)",
      role: "Negative lower-dispersion partner in the Unit II cemented doublet; dominant negative power in the pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.89,
      fl: -156.68,
      glass: "E-FL5 (HOYA)",
      role: "Trailing negative meniscus in Unit II, adding negative power to the internal-focus group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 97.45,
      glass: "FC5 (HOYA) / S-FSL5 (OHARA)",
      role: "Rear positive relay and field-flattening singlet with low dispersion.",
    },
  ],

  surfaces: [
    { label: "1", R: 90.4109, d: 8.78152, nd: 1.4931, elemId: 1, sd: 36.21724 },
    { label: "2", R: -3943.72262, d: 0.27745, nd: 1.0, elemId: 0, sd: 35.75173 },
    { label: "3", R: 57.72042, d: 9.59897, nd: 1.4931, elemId: 2, sd: 35.56552 },
    { label: "4", R: 222.98277, d: 0.31655, nd: 1.0, elemId: 0, sd: 32.02759 },
    { label: "5", R: 47.61124, d: 7.3049, nd: 1.72, elemId: 3, sd: 31.84138 },
    { label: "6", R: 103.49566, d: 1.82297, nd: 1.0, elemId: 0, sd: 28.30345 },
    { label: "7", R: 160.13794, d: 5.1449, nd: 1.721, elemId: 4, sd: 27.18621 },
    { label: "8", R: 32.58062, d: 25.42655, nd: 1.0, elemId: 0, sd: 24.76552 },
    { label: "STO", R: 1e15, d: 0.93103, nd: 1.0, elemId: 0, sd: 16.01449 },
    { label: "9", R: 419.51113, d: 3.83959, nd: 1.7552, elemId: 5, sd: 16.94483 },
    { label: "10", R: -81.40407, d: 2.87876, nd: 1.72, elemId: 6, sd: 16.57241 },
    { label: "11", R: 56.93462, d: 6.6029, nd: 1.0, elemId: 0, sd: 16.01379 },
    { label: "12", R: 109.55297, d: 2.87876, nd: 1.58144, elemId: 7, sd: 15.08276 },
    { label: "13", R: 49.25917, d: 33.81331, nd: 1.0, elemId: 0, sd: 15.08276 },
    { label: "14", R: 66.35856, d: 5.27897, nd: 1.48749, elemId: 8, sd: 18.62069 },
    { label: "15", R: -162.87146, d: 56.91756, nd: 1.0, elemId: 0, sd: 18.62069 },
  ],

  asph: {},

  var: {
    STO: [0.93103, 13.66231],
    "13": [33.81331, 21.08203],
  },
  varLabels: [
    ["STO", "D8b"],
    ["13", "D13"],
  ],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "8" },
    { text: "II", fromSurface: "9", toSurface: "13" },
    { text: "III", fromSurface: "14", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  focusDescription: "Internal focusing: Unit II (L5-L7) moves imageward; front Unit I and rear Unit III remain fixed.",
  closeFocusM: 1.5,
  nominalFno: 2.8,
  maxFstop: 32,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  scFill: 0.62,
  yScFill: 0.42,
  maxAspectRatio: 2.0,
} satisfies LensDataInput;

export default LENS_DATA;
