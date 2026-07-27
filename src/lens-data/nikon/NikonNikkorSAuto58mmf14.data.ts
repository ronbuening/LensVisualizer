import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR-S AUTO 5.8cm f/1.4                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 1966-017177, Embodiment 1 (Saburo Murakami / Nippon Kogaku).   ║
 * ║  Patent design strongly correlated with the production Nikkor-S Auto       ║
 * ║  5.8cm f/1.4; it is not represented as an unqualified factory prescription.║
 * ║  Seven elements / six physical air-spaced groups; all surfaces spherical.  ║
 * ║                                                                            ║
 * ║  Scaling: the patent prescription is normalized to f = 1. Every radius,    ║
 * ║  thickness, air gap, BFD, and inferred semi-diameter is scaled uniformly   ║
 * ║  by 58. No asphere-coefficient transform is required.                      ║
 * ║                                                                            ║
 * ║  Focus status: INFERRED UNIT FOCUS. The patent publishes infinity only;    ║
 * ║  the production linear helicoid supports rigid-unit extension to 0.6 m.    ║
 * ║  The modeled BF changes from 37.005824 to 43.853987 mm.                    ║
 * ║                                                                            ║
 * ║  Stop: the patent shows the iris inside d8 but gives no station or diameter.║
 * ║  d8 is split 52% / 48% after r8. This near-midpoint placement is inferred  ║
 * ║  from Fig. 1 and moved slightly rearward until the f/1.4 marginal ray and   ║
 * ║  current 0.90 cross-gap clearance policy both pass. The stop semi-diameter  ║
 * ║  is paraxially solved for the modeled EFL and f/1.4.                        ║
 * ║                                                                            ║
 * ║  Semi-diameters were measured from Figure 1, rounded to 0.1 mm, and checked ║
 * ║  against exact tracing and the production-format diagonal. They are not    ║
 * ║  published patent values.                                                   ║
 * ║                                                                            ║
 * ║  Glass strings are six-digit/catalog classes only. The patent provides     ║
 * ║  nd and νd but no supplier, line indices, Sellmeier coefficients, or dPgF. ║
 * ║  No vendor-specific melt or anomalous-dispersion behavior is claimed.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-nikkor-s-auto-58mm-f1-4",
  maker: "Nikon",
  name: "NIKON NIKKOR-S AUTO 5.8cm f/1.4",
  subtitle: "JP 1966-017177 Embodiment 1 — production-correlated patent design",
  specs: ["7 ELEMENTS / 6 GROUPS", "f = 58.0059 mm", "F/1.4", "2ω = 41°", "ALL-SPHERICAL"],

  focalLengthMarketing: 58,
  focalLengthDesign: 58.005890865,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1966-017177",
  patentAuthors: ["Saburo Murakami"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1966,
  elementCount: 7,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.575,
      vd: 41.3,
      fl: 199.174913375,
      glass: "575415 — LF7 / S-TIL27 / H-QF3 class",
      apd: false,
      role: "Added front positive collector used to preserve the long SLR back focus while sharing positive power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.6073,
      vd: 59.5,
      fl: 179.3575973,
      glass: "607595 — SK7 / BACD7 class",
      apd: false,
      role: "Low-dispersion front positive meniscus preceding the central Gauss-derived pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      fl: 46.153063344,
      glass: "720503 — LAK10 / LAC10 / H-LaK8 class",
      apd: false,
      role: "Strong positive member of the minute-air-spaced central pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      fl: -28.935031863,
      glass: "673322 — SF5 / FD5 / H-ZF2 class",
      apd: false,
      role: "High-dispersion negative meniscus; together with L3 it forms a net-negative separated pair.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      fl: -30.274279877,
      glass: "673322 — SF5 / FD5 / H-ZF2 class",
      apd: false,
      role: "Negative member of the rear cemented pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 39.560971581,
      glass: "744449 — LAF2 / H-LaF3B class",
      apd: false,
      role: "Dense positive member of the weak-net-negative rear cemented pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      fl: 55.426012618,
      glass: "720503 — LAK10 / LAC10 / H-LaK8 class",
      apd: false,
      role: "Strong rear positive element that completes the image-side power and field correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 85.492, d: 4.524, nd: 1.575, elemId: 1, sd: 20.5 },
    { label: "2", R: 330.716, d: 0.29, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "3", R: 45.994, d: 3.422, nd: 1.6073, elemId: 2, sd: 19.9 },
    { label: "4", R: 77.372, d: 0.116, nd: 1.0, elemId: 0, sd: 19.9 },
    { label: "5", R: 27.492, d: 9.976, nd: 1.72, elemId: 3, sd: 18.4 },
    { label: "6", R: 135.024, d: 0.116, nd: 1.0, elemId: 0, sd: 18.4 },
    { label: "7", R: 129.978, d: 2.088, nd: 1.6727, elemId: 4, sd: 18.4 },
    { label: "8", R: 16.82, d: 7.26856, nd: 1.0, elemId: 0, sd: 12.5 },
    // STO station inferred inside patent spacing d8: 0.12532 f after r8, leaving 0.11568 f before r9.
    { label: "STO", R: 1e15, d: 6.70944, nd: 1.0, elemId: 0, sd: 13.129979372 },
    { label: "9", R: -21.518, d: 2.784, nd: 1.6727, elemId: 5, sd: 15.5 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction.
    { label: "10", R: 400.026, d: 11.6, nd: 1.744, elemId: 6, sd: 15.5 },
    { label: "11", R: -31.378, d: 0.29, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "12", R: 90.016, d: 5.22, nd: 1.72, elemId: 7, sd: 15.2 },
    // Computed paraxial infinity BFL from r13; the patent prints 0.638 f.
    { label: "13", R: -69.948, d: 37.005824101, nd: 1.0, elemId: 0, sd: 15.2 },
  ],

  asph: {},
  var: { "13": [37.005824101, 43.853986685561] },
  varLabels: [["13", "BF"]],

  // Visual labels follow the patent's five functional groups; groupCount above records six physical air-spaced groups.
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "11" },
    { text: "V", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.6,
  focusDescription:
    "Inferred unit focus to 0.6 m, modeled by increasing the final BF gap from 37.005824 to 43.853987 mm; " +
    "the production lens used a linear helicoid, while JP 1966-017177 publishes only the infinity prescription.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 6,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
