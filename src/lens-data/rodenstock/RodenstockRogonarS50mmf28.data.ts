import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — RODENSTOCK ROGONAR-S 50mm f/2.8                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1,089,991, single numerical example                ║
 * ║  (Karlheinz Pennig / Optische Werke G. Rodenstock).                 ║
 * ║  Four-element, three-group enlarging objective with a stop between  ║
 * ║  the second singlet and the rear cemented doublet.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription computes to EFL = 101.028802 in arbitrary    ║
 * ║    length units. All radii, thicknesses, spacings, and estimated    ║
 * ║    semi-diameters are scaled ×0.494908371383 so the rendered design ║
 * ║    computes to exactly 50.000 mm.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent table gives b1 + b2 = 5.95 with adjacent +1.48. This  ║
 * ║    file reads the latter as b1 - b2, giving b1 = 3.715 and          ║
 * ║    b2 = 2.235 patent units before scaling. The stop radius is       ║
 * ║    derived from the design f-number f/2.8.                          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent omits clear apertures. Semi-diameters are conservative║
 * ║    estimates from the f/2.8 marginal ray and a 23.6° chief ray,     ║
 * ║    then constrained by edge thickness and signed cross-gap sag.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "rodenstock-rogonar-s-50f28",
  maker: "Rodenstock",
  name: "RODENSTOCK ROGONAR-S 50mm f/2.8",
  subtitle: "DE 1,089,991 — Pennig / Rodenstock",

  catalog: {
    lensMounts: ["enlarging-lens"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 3 GROUPS", "f = 50.0 mm", "f/2.8", "2ω ≈ 47.2°", "0 ASPHERICAL SURFACES"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { marketing: 50, design: 50 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "DE 1,089,991",
    patentYear: 1960,
    authors: ["Karlheinz Pennig"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Near-Plano-Convex Positive",
      nd: 1.678,
      vd: 55.5,
      focalLengthMm: 29.267,
      glass: "LaK12 class (678/555; LAC12 / H-LaK5A / K-LaK12 equivalents)",
      apd: false,
      role: "High-index front positive singlet; main object-side converging element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.625,
      vd: 35.6,
      focalLengthMm: -18.166,
      glass: "F7 class (625/356; Schott F7 / CDGM F6 equivalents)",
      apd: false,
      role: "Air-spaced negative singlet ahead of the stop; balances the front positive element and contributes field correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Near-Plano-Concave Negative",
      nd: 1.589,
      vd: 41.0,
      focalLengthMm: -32.455,
      glass: "Schott FL2 class (589/410; historical)",
      apd: false,
      role: "Negative front component of the rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      focalLengthMm: 15.937,
      glass: "LAF3 class (717/479; S-LAM3 / H-LaF2 / K-LaF3 equivalents)",
      apd: false,
      role: "High-index rear positive element; provides the dominant positive power inside the rear doublet.",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 20.01904, d: 6.82974, sd: 13.2, medium: 1 },
    { label: "2", R: -1944.9899, d: 2.73189, sd: 13.2 },
    { label: "3", R: -33.80224, d: 1.15809, sd: 11.5, medium: 2 },
    { label: "4", R: 17.32179, d: 1.83858, sd: 9.4 },
    { label: "STO", R: "flat", d: 1.10612 },
    { label: "5", R: 1755.9349, d: 1.15809, sd: 9.8, medium: 3 },
    { label: "6", R: 18.9055, d: 4.62739, sd: 9.6, medium: 4 },
    { label: "7", R: -25.9332, d: 39.28839, sd: 10.2 },
  ],

  // Enlarger use: approximate object-side conjugate at 10×, not a camera minimum-focus distance.
  focus: {
    closeFocusM: 0.055,
    description: "Unit focusing as an enlarger objective; the patent publishes no internal variable air gaps.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { scFill: 0.54, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
