import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PENTAX-DA 21mm F3.2 AL Limited               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,411,746 B2, Embodiment 1 (Hoya).                ║
 * ║  Compact APS-C retrofocus wide-angle with two-group floating focus.║
 * ║  8 glass elements / 5 air-spaced groups, plus a thin hybrid resin   ║
 * ║  aspheric layer on the object-side face of the final glass element. ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    The production lens is marketed as F3.2. The patent example is  ║
 * ║    F=1:3.3; the stop semi-diameter below is set from the verified   ║
 * ║    patent entrance pupil for the Embodiment 1 prescription.         ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS MODEL:                                              ║
 * ║    The patent publishes group travels at beta=-1/10 and beta=-1/4.  ║
 * ║    The close-focus state below is linearly interpolated to the      ║
 * ║    production maximum magnification of 0.17x: X1=3.492 mm and      ║
 * ║    X2=3.784 mm, preserving the patent's X1/X2≈0.92 floating ratio. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear apertures. Semi-diameters are     ║
 * ║    estimated from paraxial marginal/chief ray envelopes, then       ║
 * ║    constrained by sd/|R| < 0.90, element front/rear ratio <= 1.25,  ║
 * ║    positive edge thickness, and cross-gap sag clearance.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-da-21mm-f32-limited",
  maker: "Pentax",
  name: "PENTAX DA 21mm f/3.2 AL Limited",
  subtitle: "US 7,411,746 B2 Embodiment 1 — Hoya / Kato & Saori",
  specs: [
    "8 elements / 5 groups",
    "f = 21.60 mm design; 21 mm nominal",
    "F3.2 marketed; F3.3 patent design",
    "68° diagonal production field",
    "1 hybrid aspherical surface",
    "Two-group floating focus",
  ],

  focalLengthMarketing: 21,
  focalLengthDesign: 21.5963,
  apertureMarketing: 3.2,
  apertureDesign: 3.3,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentYear: 2008,
  elementCount: 8,
  groupCount: 5,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 68,
    maxTraceFieldDeg: 34,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 64.2,
      glass: "S-LAL14 (OHARA equivalent)",
      apd: false,
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "Front positive meniscus in the negative first sub-lens group; distortion-balancing leading element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -17.4,
      glass: "S-LAH65V (OHARA equivalent)",
      apd: false,
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
      role: "Strong negative meniscus completing the negative first sub-lens group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -13.9,
      glass: "S-LAH66 (OHARA equivalent)",
      apd: false,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Negative member of the weakly positive cemented doublet immediately ahead of the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus / Near Plano-Convex",
      nd: 1.69895,
      vd: 30.1,
      fl: 11.7,
      glass: "S-TIM35 (OHARA equivalent)",
      apd: false,
      nC: 1.69222,
      nF: 1.71542,
      ng: 1.72941,
      role: "Thick positive rear member of the front doublet; primary distortion-control element near the stop.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 18.9,
      glass: "S-LAL18 (OHARA equivalent)",
      apd: false,
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
      role: "Front positive member of the rear cemented triplet.",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Concave Negative",
      nd: 1.74077,
      vd: 27.8,
      fl: -11.6,
      glass: "S-TIH13 (OHARA equivalent)",
      apd: false,
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
      role: "Buried high-dispersion negative member of the rear triplet; spherical-aberration balancing element.",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.2,
      fl: 30.7,
      glass: "S-BSM15 (OHARA equivalent)",
      apd: false,
      nC: 1.61974,
      nF: 1.63045,
      ng: 1.6363,
      role: "Rear positive member of the rear triplet, cemented to L6.",
      cemented: "T1",
    },
    {
      id: 8,
      name: "L8r",
      label: "Hybrid resin layer",
      type: "Aspheric Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      fl: -1945.6,
      glass: "Compound UV-curing resin (patent; no catalog glass match)",
      apd: false,
      role: "Thin near-afocal compound-resin layer carrying the single aspherical surface.",
      cemented: "H1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 24.0,
      glass: "S-LAH66 (OHARA equivalent)",
      apd: false,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Final positive meniscus substrate; combined with the resin layer it has f≈+24.3 mm.",
      cemented: "H1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 32.486, d: 3.62, nd: 1.6968, elemId: 1, sd: 10.8 },
    { label: "2", R: 113.238, d: 0.1, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "3", R: 20.902, d: 1.1, nd: 1.804, elemId: 2, sd: 8.2 },
    { label: "4", R: 8.178, d: 6.75, nd: 1.0, elemId: 0, sd: 7.25 },
    { label: "5", R: 36.561, d: 1.24, nd: 1.7725, elemId: 3, sd: 7.0 },
    { label: "6", R: 8.178, d: 5.67, nd: 1.69895, elemId: 4, sd: 7.0 },
    { label: "7", R: 6403.341, d: 2.0, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 4.311 },
    { label: "8", R: -20.013, d: 2.59, nd: 1.72916, elemId: 5, sd: 6.0 },
    { label: "9", R: -8.6, d: 1.0, nd: 1.74077, elemId: 6, sd: 6.3 },
    { label: "10", R: 1e15, d: 2.37, nd: 1.62299, elemId: 7, sd: 6.6 },
    { label: "11", R: -19.142, d: 0.1, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "12A", R: -65.119, d: 0.1, nd: 1.52972, elemId: 8, sd: 8.3 },
    { label: "13", R: -69.548, d: 2.68, nd: 1.7725, elemId: 9, sd: 8.3 },
    { label: "14", R: -14.886, d: 36.7, nd: 1.0, elemId: 0, sd: 8.8 },
  ],

  asph: {
    "12A": {
      K: 0,
      A4: -0.41055e-4,
      A6: -0.12824e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    STO: [2.0, 1.7086],
    "14": [36.7, 40.4835],
  },
  varLabels: [
    ["STO", "G20"],
    ["14", "BF"],
  ],

  groups: [
    { text: "G10 front", fromSurface: "1", toSurface: "7" },
    { text: "G11", fromSurface: "1", toSurface: "4" },
    { text: "G12", fromSurface: "5", toSurface: "7" },
    { text: "G20 rear", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "T1", fromSurface: "8", toSurface: "11" },
    { text: "H1", fromSurface: "12A", toSurface: "14" },
  ],

  focusDescription: "Two-group floating focus: front group and rear group move objectward by unequal amounts.",
  closeFocusM: 0.2,
  nominalFno: 3.2,
  fstopSeries: [3.2, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.58,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
