import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    F=1:3.3; the stop radius is derived from the design f-number for ║
 * ║    the Embodiment 1 prescription.                                   ║
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
  schema: 2,
  key: "pentax-da-21mm-f32-limited",
  maker: "Pentax",
  name: "PENTAX DA 21mm f/3.2 AL Limited",
  subtitle: "US 7,411,746 B2 Embodiment 1 — Hoya / Kato & Saori",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "8 elements / 5 groups",
      "f = 21.60 mm design; 21 mm nominal",
      "F3.2 marketed; F3.3 patent design",
      "68° diagonal production field",
      "1 hybrid aspherical surface",
      "Two-group floating focus",
    ],
    elementCount: 8,
    groupCount: 5,
    focalLengthMm: { marketing: 21, design: 21.5963 },
    fNumber: { marketing: 3.2, design: 3.3 },
  },

  source: {
    patentNumber: "US 7,411,746 B2",
    patentYear: 2008,
    authors: ["Koji Kato", "Masakazu Saori"],
    assignees: ["Hoya Corporation"],
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
      focalLengthMm: 64.2,
      glass: "S-LAL14 (OHARA equivalent)",
      apd: false,
      role: "Front positive meniscus in the negative first sub-lens group; distortion-balancing leading element.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -17.4,
      glass: "S-LAH65V (OHARA equivalent)",
      apd: false,
      role: "Strong negative meniscus completing the negative first sub-lens group.",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -13.9,
      glass: "S-LAH66 (OHARA equivalent)",
      apd: false,
      role: "Negative member of the weakly positive cemented doublet immediately ahead of the stop.",
      cemented: "D1",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus / Near Plano-Convex",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: 11.7,
      glass: "S-TIM35 (OHARA equivalent)",
      apd: false,
      role: "Thick positive rear member of the front doublet; primary distortion-control element near the stop.",
      cemented: "D1",
      nC: 1.69222,
      nF: 1.71542,
      ng: 1.72941,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 18.9,
      glass: "S-LAL18 (OHARA equivalent)",
      apd: false,
      role: "Front positive member of the rear cemented triplet.",
      cemented: "T1",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Concave Negative",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -11.6,
      glass: "S-TIH13 (OHARA equivalent)",
      apd: false,
      role: "Buried high-dispersion negative member of the rear triplet; spherical-aberration balancing element.",
      cemented: "T1",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: 30.7,
      glass: "S-BSM15 (OHARA equivalent)",
      apd: false,
      role: "Rear positive member of the rear triplet, cemented to L6.",
      cemented: "T1",
      nC: 1.61974,
      nF: 1.63045,
      ng: 1.6363,
    },
    {
      id: 8,
      name: "L8r",
      label: "Hybrid resin layer",
      type: "Aspheric Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      focalLengthMm: -1945.6,
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
      focalLengthMm: 24.0,
      glass: "S-LAH66 (OHARA equivalent)",
      apd: false,
      role: "Final positive meniscus substrate; combined with the resin layer it has f≈+24.3 mm.",
      cemented: "H1",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 32.486, d: 3.62, sd: 10.8, medium: 1 },
    { label: "2", R: 113.238, d: 0.1, sd: 10.4 },
    { label: "3", R: 20.902, d: 1.1, sd: 8.2, medium: 2 },
    { label: "4", R: 8.178, d: 6.75, sd: 7.25 },
    { label: "5", R: 36.561, d: 1.24, sd: 7.0, medium: 3 },
    { label: "6", R: 8.178, d: 5.67, sd: 7.0, medium: 4 },
    { label: "7", R: 6403.341, d: 2.0, sd: 6.2 },
    { label: "STO", R: "flat" },
    { label: "8", R: -20.013, d: 2.59, sd: 6.0, medium: 5 },
    { label: "9", R: -8.6, d: 1.0, sd: 6.3, medium: 6 },
    { label: "10", R: "flat", d: 2.37, sd: 6.6, medium: 7 },
    { label: "11", R: -19.142, d: 0.1, sd: 7.7 },
    {
      label: "12A",
      R: -65.119,
      d: 0.1,
      sd: 8.3,
      medium: 8,
      asphere: { K: 0, A4: -0.41055e-4, A6: -0.12824e-7, A8: 0, A10: 0 },
    },
    { label: "13", R: -69.548, d: 2.68, sd: 8.3, medium: 9 },
    { label: "14", R: -14.886, sd: 8.8 },
  ],

  focus: {
    closeFocusM: 0.2,
    description: "Two-group floating focus: front group and rear group move objectward by unequal amounts.",
  },

  gaps: { STO: { label: "G20", values: [[2.0, 1.7086]] }, "14": { label: "BF", values: [[36.7, 40.4835]] } },

  aperture: { nominalFNumber: 3.3, fStops: [3.3, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: { kind: "rectilinear", fullFieldDeg: 68, maxTraceFieldDeg: 34 },

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

  layout: { scFill: 0.58, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
