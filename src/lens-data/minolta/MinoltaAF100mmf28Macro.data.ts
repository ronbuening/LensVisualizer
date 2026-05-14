import type { LensDataInput } from "../../types/optics.js";

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
 * ║    midpoint. STO semi-diameter is set to reproduce F.No. = 2.83    ║
 * ║    from the entrance pupil at infinity focus.                      ║
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
  key: "minolta-af-100mm-f28-macro",
  maker: "Minolta",
  name: "Minolta AF 100mm f/2.8 Macro",
  subtitle: "US 4,764,000 Example 8 — Minolta / Tokumaru",
  specs: [
    "8 elements / 8 groups",
    "f = 100.0 mm design",
    "F/2.83 design; marketed f/2.8",
    "1:1 macro, 0.35 m MFD",
    "All-spherical floating-focus macro",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.9997,
  apertureMarketing: 2.8,
  apertureDesign: 2.83,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 1988,
  elementCount: 8,
  groupCount: 8,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.96,
      fl: 274.5,
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
      fl: 74.8,
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
      fl: 55.8,
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
      fl: -34.2,
      glass: "Unmatched dense flint (740/317 class; patent nd/vd only)",
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
      fl: -98.1,
      glass: "Unmatched high-index crown (697/565 class; patent nd/vd only)",
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
      fl: 981.9,
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
      fl: -244.9,
      glass: "Unmatched dense lanthanum flint (807/316 class; patent nd/vd only)",
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
      fl: 85.5,
      glass: "S-BAL35-class barium crown (OHARA 589612; inferred)",
      apd: false,
      role: "Final positive relay element of Group III.",
    },
  ],

  surfaces: [
    { label: "1", R: -526.906, d: 3.2, nd: 1.51823, elemId: 1, sd: 27.0 },
    { label: "2", R: -112.249, d: 0.15, nd: 1.0, elemId: 0, sd: 27.0 },
    { label: "3", R: 38.629, d: 5.0, nd: 1.691, elemId: 2, sd: 20.4 },
    { label: "4", R: 144.829, d: 0.15, nd: 1.0, elemId: 0, sd: 20.4 },
    { label: "5", R: 26.209, d: 5.5, nd: 1.691, elemId: 3, sd: 16.8 },
    { label: "6", R: 74.864, d: 0.33, nd: 1.0, elemId: 0, sd: 14.65 },
    { label: "7", R: 93.593, d: 2.5, nd: 1.74, elemId: 4, sd: 14.65 },
    { label: "8", R: 19.714, d: 5.0, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "9", R: 212.931, d: 2.5, nd: 1.6968, elemId: 5, sd: 12.9 },
    { label: "10", R: 51.495, d: 4.35, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "STO", R: 1e15, d: 4.35, nd: 1.0, elemId: 0, sd: 10.8131 },
    { label: "11", R: -25.443, d: 3.38, nd: 1.834, elemId: 6, sd: 12.0 },
    { label: "12", R: -26.167, d: 24.0, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "13", R: -27.741, d: 2.8, nd: 1.80741, elemId: 7, sd: 13.6 },
    { label: "14", R: -33.723, d: 0.15, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "15", R: 133.487, d: 4.0, nd: 1.58913, elemId: 8, sd: 15.3 },
    { label: "16", R: -80.018, d: 43.1530002237, nd: 1.0, elemId: 0, sd: 15.3 },
  ],

  asph: {},

  var: {
    "8": [5.0, 27.5],
    "12": [24.0, 1.5],
    "16": [43.1530002237, 113.4895036789],
  },
  varLabels: [
    ["8", "D8"],
    ["12", "D12"],
    ["16", "BF"],
  ],

  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "8" },
    { text: "II (- floating)", fromSurface: "9", toSurface: "12" },
    { text: "III (+)", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [],

  focusDescription:
    "Three-group floating focus: Groups I and III move together toward the object, while the negative Group II moves in the same direction by a smaller amount; D8 increases, D12 decreases, and BF lengthens to the β = -1.0 close-focus state.",
  closeFocusM: 0.35,
  nominalFno: 2.8,
  maxFstop: 32,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  offAxisFieldFrac: 0.3,
  scFill: 0.62,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
