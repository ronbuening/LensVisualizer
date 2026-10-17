import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Stop: the patent shows the iris inside d8 but gives no station or         ║
 * ║  diameter. d8 is split 52% / 48% after r8. This near-midpoint placement is ║
 * ║  inferred from Fig. 1 and moved slightly rearward until the f/1.4 marginal ║
 * ║  ray and current 0.90 cross-gap clearance policy both pass. The stop       ║
 * ║  radius is derived from the design f-number, f/1.4.                        ║
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
  schema: 2,
  key: "nikon-nikkor-s-auto-58mm-f1-4",
  maker: "Nikon",
  name: "NIKON NIKKOR-S AUTO 5.8cm f/1.4",
  subtitle: "JP 1966-017177 Embodiment 1 — production-correlated patent design",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "f = 58.0059 mm", "F/1.4", "2ω = 41°", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 58, design: 58.005890865 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "JP 1966-017177 B",
    patentYear: 1966,
    authors: ["Saburo Murakami"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.575,
      vd: 41.3,
      focalLengthMm: 199.174913375,
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
      focalLengthMm: 179.3575973,
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
      focalLengthMm: 46.153063344,
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
      focalLengthMm: -28.935031863,
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
      focalLengthMm: -30.274279877,
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
      focalLengthMm: 39.560971581,
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
      focalLengthMm: 55.426012618,
      glass: "720503 — LAK10 / LAC10 / H-LaK8 class",
      apd: false,
      role: "Strong rear positive element that completes the image-side power and field correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 85.492, d: 4.524, sd: 20.5, medium: 1 },
    { label: "2", R: 330.716, d: 0.29, sd: 20.5 },
    { label: "3", R: 45.994, d: 3.422, sd: 19.9, medium: 2 },
    { label: "4", R: 77.372, d: 0.116, sd: 19.9 },
    { label: "5", R: 27.492, d: 9.976, sd: 18.4, medium: 3 },
    { label: "6", R: 135.024, d: 0.116, sd: 18.4 },
    { label: "7", R: 129.978, d: 2.088, sd: 18.4, medium: 4 },
    { label: "8", R: 16.82, d: 7.26856, sd: 12.5 },
    // STO station inferred inside patent spacing d8: 0.12532 f after r8, leaving 0.11568 f before r9.
    { label: "STO", R: "flat", d: 6.70944 },
    { label: "9", R: -21.518, d: 2.784, sd: 15.5, medium: 5 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction.
    { label: "10", R: 400.026, d: 11.6, sd: 15.5, medium: 6 },
    { label: "11", R: -31.378, d: 0.29, sd: 15.5 },
    { label: "12", R: 90.016, d: 5.22, sd: 15.2, medium: 7 },
    // Computed paraxial infinity BFL from r13; the patent prints 0.638 f.
    { label: "13", R: -69.948, sd: 15.2 },
  ],

  focus: {
    closeFocusM: 0.6,
    description:
      "Inferred unit focus to 0.6 m, modeled by increasing the final BF gap from 37.005824 to 43.853987 mm; " +
      "the production lens used a linear helicoid, while JP 1966-017177 publishes only the infinity prescription.",
  },

  gaps: { "13": { label: "BF", values: [[37.005824101, 43.853986685561]] } },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 6 },

  // Visual labels follow the patent's five functional groups; groupCount above records six physical air-spaced groups.
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "11" },
    { text: "V", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
