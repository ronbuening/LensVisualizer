import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Minolta AF 100mm f/2.8 Macro                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,764,000 Example 8 / claim 9 (Tokumaru, Minolta).║
 * ║  100 mm f/2.83 telephoto macro prescription for a 35 mm SLR.       ║
 * ║  8 elements / 8 air-spaced groups; all-spherical surfaces.         ║
 * ║  Focus: three relatively shiftable lens groups. D8 increases,      ║
 * ║  D12 decreases, and BF lengthens as focus moves from infinity to   ║
 * ║  β = -1.0.                                                         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scale factor applied. The patent prescription is normalized  ║
 * ║    to f = 100 and independently traces to EFL = 99.9997 mm.        ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                           ║
 * ║    The patent drawing places the diaphragm in Group II. Its exact  ║
 * ║    axial coordinate is not tabulated, so d10 is split at its        ║
 * ║    midpoint. The stop radius is derived from the design f-number,  ║
 * ║    F.No. = 2.83 at infinity focus.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent gives no clear apertures. Semi-diameters are         ║
 * ║    paraxial estimates constrained by the 55 mm production filter   ║
 * ║    thread, element edge thickness, and cross-gap sag clearance.    ║
 * ║    They are visualization clear apertures, not measured Minolta    ║
 * ║    mechanical diameters.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-100mm-f28-macro",
  maker: "Minolta",
  name: "MINOLTA AF 100mm f/2.8 Macro",
  subtitle: "US 4,764,000 Example 8 — Minolta / Tokumaru",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "8 elements / 8 groups",
      "f = 100.0 mm design",
      "F/2.83 design; marketed f/2.8",
      "1:1 macro, 0.35 m MFD",
      "All-spherical floating-focus macro",
    ],
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: { marketing: 100, design: 99.9997 },
    fNumber: { marketing: 2.8, design: 2.83 },
  },

  source: {
    patentNumber: "US 4,764,000",
    patentYear: 1988,
    authors: ["Hisashi Tokumaru"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.96,
      focalLengthMm: 274.5,
      glass: "S-NSL3-class crown (OHARA 518590; inferred)",
      apd: false,
      role: "Weak positive front meniscus that moderates marginal ray height before the stronger front positive elements.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.691,
      vd: 54.75,
      focalLengthMm: 74.8,
      glass: "S-LAL9-class lanthanum crown (OHARA 691548; inferred)",
      apd: false,
      role: "High-index crown positive-power element in the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.691,
      vd: 54.75,
      focalLengthMm: 55.8,
      glass: "S-LAL9-class lanthanum crown (OHARA 691548; inferred)",
      apd: false,
      role: "Strongest positive-power element of Group I; sets much of the front-group convergence.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 31.72,
      focalLengthMm: -34.2,
      glass: "BPH50 (OHARA)",
      apd: false,
      role: "Strong negative front-group terminator and main dense-flint achromatizing element behind L1-L3.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 56.47,
      focalLengthMm: -98.1,
      glass: "H-LAK12 (CDGM equivalent; patent 697565)",
      apd: false,
      role: "Negative member of the floating Group II compensator.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.05,
      focalLengthMm: 981.9,
      glass: "S-LAH60-class dense lanthanum flint (OHARA 834372; inferred)",
      apd: false,
      role: "Very weak positive high-index meniscus near the stop; trims aberration balance without adding much group power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.80741,
      vd: 31.59,
      focalLengthMm: -244.9,
      glass: "807316 - dense lanthanum flint (patent nd=1.80741, vd=31.59; unresolved)",
      apd: false,
      role: "Negative corrector in the rear positive group; helps field, astigmatism, and lateral-color control.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.11,
      focalLengthMm: 85.5,
      glass: "S-BAL35-class barium crown (OHARA 589612; inferred)",
      apd: false,
      role: "Final positive relay element of Group III.",
    },
  ],

  surfaces: [
    { label: "1", R: -526.906, d: 3.2, sd: 27.0, medium: 1 },
    { label: "2", R: -112.249, d: 0.15, sd: 27.0 },
    { label: "3", R: 38.629, d: 5.0, sd: 20.4, medium: 2 },
    { label: "4", R: 144.829, d: 0.15, sd: 20.4 },
    { label: "5", R: 26.209, d: 5.5, sd: 16.8, medium: 3 },
    { label: "6", R: 74.864, d: 0.33, sd: 14.65 },
    { label: "7", R: 93.593, d: 2.5, sd: 14.65, medium: 4 },
    { label: "8", R: 19.714, sd: 12.9 },
    { label: "9", R: 212.931, d: 2.5, sd: 12.9, medium: 5 },
    { label: "10", R: 51.495, d: 4.35, sd: 12.5 },
    { label: "STO", R: "flat", d: 4.35 },
    { label: "11", R: -25.443, d: 3.38, sd: 12.0, medium: 6 },
    { label: "12", R: -26.167, sd: 12.5 },
    { label: "13", R: -27.741, d: 2.8, sd: 13.6, medium: 7 },
    { label: "14", R: -33.723, d: 0.15, sd: 13.6 },
    { label: "15", R: 133.487, d: 4.0, sd: 15.3, medium: 8 },
    { label: "16", R: -80.018, sd: 15.3 },
  ],

  focus: {
    closeFocusM: 0.35,
    keyframes: [0, 0.853009797094441, 1],
    description:
      "Three-group floating focus: Groups I and III move together toward the object, while the negative Group II moves in the same direction by a smaller amount; D8 increases, D12 decreases, and BF lengthens to the β = -1.0 close-focus state.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "8": { label: "D8", values: [[5.0, 18.36, 27.5]] },
    "12": { label: "D12", values: [[24.0, 10.64, 1.5]] },
    "16": { label: "BF", values: [[43.1530002237, 76.5518, 113.4895036789]] },
  },

  aperture: { nominalFNumber: 2.83, fStops: [2.83, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "8" },
    { text: "II (- floating)", fromSurface: "9", toSurface: "12" },
    { text: "III (+)", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.42 },

  rays: { offAxisFieldFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
