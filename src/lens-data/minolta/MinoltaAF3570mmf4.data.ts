import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "minolta-af-35-70-f4",
  maker: "Minolta",
  name: "MINOLTA AF ZOOM 35-70mm f/4",
  subtitle: "US 4,560,253 Embodiment 2 — Minolta / Ogino",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "6 components / 6 air-spaced groups",
      "7 modeled optical media including hybrid resin layer",
      "36.0-68.2 mm patent design range",
      "FNO 4.1 patent design aperture",
      "1 hybrid aspherical surface",
    ],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: [35, 70], design: [35.999, 68.187] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 4,560,253",
    patentYear: 1985,
    authors: ["Shuji Ogino"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Component I-1",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.93,
      focalLengthMm: -36.47,
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
      focalLengthMm: 71.06,
      glass: "E-FD1L / N-SF1 / S-TIH1 class (717/295; patent νd = 29.42)",
      apd: false,
      role: "High-dispersion positive meniscus substrate for the rear hybrid asphere.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2r",
      label: "Component I-2 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.52,
      vd: 51.06,
      focalLengthMm: -718.76,
      glass: "UV-curing acrylic resin (patent thin transparent layer)",
      apd: false,
      role: "Thin low-dispersion resin layer carrying the sole aspherical air-facing surface.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Component II-1",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 57.07,
      focalLengthMm: 46.02,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
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
      focalLengthMm: 46.76,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
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
      focalLengthMm: -21.02,
      glass: "750251 - dense/fluor flint (catalog unresolved)",
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
      focalLengthMm: 47.89,
      glass: "E-FD5 / N-SF5 / S-TIM25 class (673/322)",
      apd: false,
      role: "Rear positive field-flattening and exit-pupil-shaping component.",
    },
  ],

  surfaces: [
    { label: "1", R: 197.705, d: 2, sd: 21, medium: 1 },
    { label: "2", R: 23.754, d: 5.7, sd: 20.5 },
    { label: "3", R: 32.8, d: 4.3, sd: 14, medium: 2 },
    { label: "4", R: 86.956, d: 0.15, sd: 14, medium: 3 },
    { label: "4A", R: 70.502, sd: 14, asphere: { K: 0, A4: -3.2454086e-6, A6: -1.6458645e-9, A8: -1.2334671e-11 } },
    { label: "5", R: 35.91, d: 3, sd: 10.8, medium: 4 },
    { label: "6", R: -210.68, d: 0.15, sd: 10.3 },
    { label: "7", R: 23.426, d: 2.8, sd: 9.8, medium: 5 },
    { label: "8", R: 88.401, d: 2.096, sd: 8.8 },
    { label: "STO", R: "flat", d: 2.095 },
    { label: "9", R: -109.921, d: 4.067, sd: 8.6, medium: 6 },
    { label: "10", R: 18.693, d: 4.6, sd: 8.8 },
    { label: "11", R: 892.777, d: 2.8, sd: 10.5, medium: 7 },
    { label: "12", R: -33.382, sd: 11 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 36, label: "Wide" }, { focalLengthMm: 50 }, { focalLengthMm: 68.2, label: "Tele" }],
    step: 0.004,
  },

  focus: {
    closeFocusM: 1,
    description:
      "Front-group focus. The patent states that Group I alone shifts during focusing; close-focus spacings are paraxial estimates because the patent publishes no close-focus table.",
  },

  gaps: {
    "4A": {
      label: "D4",
      values: [
        [41.1, 46.9647876298],
        [17.2, 22.9659926164],
        [0.8, 6.52803161881],
      ],
    },
    "12": {
      label: "BF",
      values: [
        [41.7093032197, 41.7093032197],
        [49.4290164921, 49.4290164921],
        [59.4625637623, 59.4625637623],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16] },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "4A" },
    { text: "II", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [{ text: "H1", fromSurface: "3", toSurface: "4A" }],

  layout: { scFill: 0.64, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
