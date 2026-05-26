import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Minolta AF Zoom 35-70mm f/4                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,560,253, Ogino / Minolta, Embodiment 2.        ║
 * ║  Two-group negative-positive inverted-telephoto zoom.             ║
 * ║  Six patent components / six air-spaced groups; the hybrid        ║
 * ║  resin layer on component I-2 is modeled as a separate element     ║
 * ║  so the glass/resin junction and resin asphere are explicit.      ║
 * ║  Focus: patent states first group shifts for focusing; the close  ║
 * ║  state below is a paraxial normal-range approximation to 1.0 m,   ║
 * ║  not a patent-published macro prescription.                       ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: surface 4A (inter-group spacing) and BF.     ║
 * ║  Zoom positions are sorted wide-to-tele for LensVisualizer.       ║
 * ║  Patent table order is tele-mid-wide: f = 68.2-50.0-36.0 mm.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent gives no clear-aperture or semi-diameter table.     ║
 * ║    SDs are conservative diagrammatic estimates constrained by     ║
 * ║    surface sag, thin air gaps, the hybrid-resin layer, and a       ║
 * ║    conservative front-group envelope. The stop                    ║
 * ║    position is inferred and placed at the midpoint of d8.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-35-70-f4",
  maker: "Minolta",
  name: "Minolta AF Zoom 35-70mm f/4",
  subtitle: "US 4,560,253 Embodiment 2 — Minolta / Ogino",
  specs: [
    "6 components / 6 air-spaced groups",
    "7 modeled optical media including hybrid resin layer",
    "36.0-68.2 mm patent design range",
    "FNO 4.1 patent design aperture",
    "1 hybrid aspherical surface",
  ],

  focalLengthMarketing: [35, 70],
  focalLengthDesign: [35.999, 68.187],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 1985,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Component I-1",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.93,
      fl: -36.47,
      glass: "LAF2 / N-LAF2 / S-LAM2 class (744/449)",
      apd: false,
      role: "Strong negative front meniscus that supplies the divergent front-group power for the inverted-telephoto geometry.",
    },
    {
      id: 2,
      name: "L2g",
      label: "Component I-2 glass body",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.42,
      fl: 71.06,
      glass: "E-FD1L / N-SF1 / S-TIH1 class (717/295; patent νd = 29.42)",
      apd: false,
      cemented: "H1",
      role: "High-dispersion positive meniscus substrate for the rear hybrid asphere.",
    },
    {
      id: 3,
      name: "L2r",
      label: "Component I-2 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.52,
      vd: 51.06,
      fl: -718.76,
      glass: "UV-curing acrylic resin (patent thin transparent layer)",
      apd: false,
      cemented: "H1",
      role: "Thin low-dispersion resin layer carrying the sole aspherical air-facing surface.",
    },
    {
      id: 4,
      name: "L3",
      label: "Component II-1",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 57.07,
      fl: 46.02,
      glass: "Unmatched lanthanum crown code 670/571 (historic/proprietary catalog match not verified)",
      apd: false,
      role: "First positive component of the rear group; starts the main converging section.",
    },
    {
      id: 5,
      name: "L4",
      label: "Component II-2",
      type: "Positive Meniscus",
      nd: 1.67,
      vd: 57.07,
      fl: 46.76,
      glass: "Unmatched lanthanum crown code 670/571 (historic/proprietary catalog match not verified)",
      apd: false,
      role: "Second positive component of the rear group; works with L3 as the split positive front section of Group II.",
    },
    {
      id: 6,
      name: "L5",
      label: "Component II-3",
      type: "Biconcave Negative",
      nd: 1.75,
      vd: 25.14,
      fl: -21.02,
      glass: "Unmatched dense/fluor flint code 750/251 (closest current HOYA FF8 class is 752/251)",
      apd: false,
      role: "Strong negative chromatic-correction component in the rear group.",
    },
    {
      id: 7,
      name: "L6",
      label: "Component II-4",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.22,
      fl: 47.89,
      glass: "E-FD5 / N-SF5 / S-TIM25 class (673/322)",
      apd: false,
      role: "Rear positive field-flattening and exit-pupil-shaping component.",
    },
  ],

  surfaces: [
    { label: "1", R: 197.705, d: 2, nd: 1.744, elemId: 1, sd: 21 },
    { label: "2", R: 23.754, d: 5.7, nd: 1, elemId: 0, sd: 20.5 },
    { label: "3", R: 32.8, d: 4.3, nd: 1.71736, elemId: 2, sd: 14 },
    { label: "4", R: 86.956, d: 0.15, nd: 1.52, elemId: 3, sd: 14 },
    { label: "4A", R: 70.502, d: 41.1, nd: 1, elemId: 0, sd: 14 },
    { label: "5", R: 35.91, d: 3, nd: 1.67, elemId: 4, sd: 10.8 },
    { label: "6", R: -210.68, d: 0.15, nd: 1, elemId: 0, sd: 10.3 },
    { label: "7", R: 23.426, d: 2.8, nd: 1.67, elemId: 5, sd: 9.8 },
    { label: "8", R: 88.401, d: 2.096, nd: 1, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 2.095, nd: 1, elemId: 0, sd: 7.3 },
    { label: "9", R: -109.921, d: 4.067, nd: 1.75, elemId: 6, sd: 8.6 },
    { label: "10", R: 18.693, d: 4.6, nd: 1, elemId: 0, sd: 8.8 },
    { label: "11", R: 892.777, d: 2.8, nd: 1.6727, elemId: 7, sd: 10.5 },
    { label: "12", R: -33.382, d: 41.7093032197, nd: 1, elemId: 0, sd: 11 },
  ],

  asph: {
    "4A": {
      K: 0,
      A4: -3.2454086e-6,
      A6: -1.6458645e-9,
      A8: -1.2334671e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [36, 50, 68.2],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "4A": [
      [41.1, 46.9647876298],
      [17.2, 22.9659926164],
      [0.8, 6.52803161881],
    ],
    "12": [
      [41.7093032197, 41.7093032197],
      [49.4290164921, 49.4290164921],
      [59.4625637623, 59.4625637623],
    ],
  },
  varLabels: [
    ["4A", "D4"],
    ["12", "BF"],
  ],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "4A" },
    { text: "II", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [{ text: "H1", fromSurface: "3", toSurface: "4A" }],

  focusDescription:
    "Front-group focus. The patent states that Group I alone shifts during focusing; close-focus spacings are paraxial estimates because the patent publishes no close-focus table.",
  closeFocusM: 1,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16],
  scFill: 0.64,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
