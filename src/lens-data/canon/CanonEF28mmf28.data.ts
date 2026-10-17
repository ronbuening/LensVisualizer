import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 28mm f/2.8                                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP S62-078520 A, Numerical Example 1 (Canon Inc.).                 ║
 * ║ Inventor: Takashi Matsushita.                                              ║
 * ║ Production correlation: Canon EF 28mm f/2.8, marketed April 1987.          ║
 * ║ Five elements / five groups; patent surface R2 is aspherical.              ║
 * ║ Canon identifies a molded-glass aspherical first element in production.    ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes no focus    ║
 * ║ spacing states; the production 0.3 m MFD is metadata only.                 ║
 * ║                                                                            ║
 * ║ SCALE: The patent is normalized to F = 1. Every radius, spacing,           ║
 * ║ semi-diameter, and image distance is scaled by s = 28. Polynomial          ║
 * ║ coefficients use A_p,scaled = A_p,patent / 28^(p-1); K is unchanged.       ║
 * ║ The rounded prescription computes EFL = 28.2193758885 mm; it is not        ║
 * ║ rescaled a second time to force 28.000 mm.                                 ║
 * ║                                                                            ║
 * ║ ASPHERE: Patent R2 is a plane plus A·H² + B·H⁴ + C·H⁶ + D·H⁸ + E·H¹⁰.     ║
 * ║ The schema has no A2 term, so A·H² is represented exactly by a K = -1     ║
 * ║ paraboloid with R = 1/(2A); A4-A10 store the scaled B-E terms.             ║
 * ║                                                                            ║
 * ║ SOURCE-PRECISION NOTE: Patent D9 is printed 0.00. That raw zero center     ║
 * ║ gap is retained; the facing R9/R10 surfaces diverge away from the axis,    ║
 * ║ so no positive surrogate is required. The very thin printed D7 = 0.01     ║
 * ║ gap is retained as 0.28 mm and uses gapSagFrac = 1.0: at the selected      ║
 * ║ shared clear band, the surfaces remain separated but use nearly the full   ║
 * ║ source-rounded center gap.                                                 ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: No clear apertures are published. Values are inferred      ║
 * ║ from the f/2.8 stop/pupil solution, exact and paraxial ray containment,    ║
 * ║ the 37° patent half-field, the Figure 1 element-height ratios, and         ║
 * ║ geometry gates. The displayed 60%-field ray fan clears every selected     ║
 * ║ rim. All rims pass edge-thickness and actual-slope checks.                 ║
 * ║                                                                            ║
 * ║ GLASS: The patent publishes nd/νd only. OHARA names and nC/nF/ng/dPgF      ║
 * ║ below are current catalog equivalents: nd matches the patent; νd agrees    ║
 * ║ within printed source precision. They are not procurement claims.          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28mm-f2-8",
  maker: "Canon",
  name: "CANON EF 28mm f/2.8",
  subtitle: "JP S62-078520 A, Numerical Example 1 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "5 ELEMENTS / 5 GROUPS",
      "f = 28.219 mm (MODELED)",
      "F/2.8",
      "2ω = 74°",
      "1 ASPHERICAL SURFACE",
      "MFD 0.3 m / 0.13×",
    ],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: { marketing: 28, design: 28.219375888477686 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP S62-078520 A",
    patentYear: 1987,
    authors: ["Takashi Matsushita"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -40.133858724,
      glass: "S-BSM14 (OHARA catalog equivalent; patent class 603607)",
      role: "Front negative meniscus; its rear asphere supplies the principal wide-angle correction.",
      dPgF: -0.0019,
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 33.841845873,
      glass: "S-LAH51 (OHARA catalog equivalent; patent class 786442)",
      role: "Front positive element that restores power after L1 and precedes the aperture stop.",
      dPgF: -0.0069,
      nC: 1.78058,
      nF: 1.79836,
      ng: 1.80838,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -17.659709222,
      glass: "S-TIH53WN (OHARA catalog equivalent; patent class 847239)",
      role: "Dense-flint negative element immediately behind the stop; balances the positive rear pair.",
      dPgF: 0.0179,
      nC: 1.83653,
      nF: 1.87201,
      ng: 1.89403,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.79952,
      vd: 42.2,
      focalLengthMm: 25.168233868,
      glass: "S-LAH52 (OHARA catalog equivalent; patent class 800422)",
      role: "Strong rear positive element with a nearly flat front surface and strongly powered rear surface.",
      dPgF: -0.006,
      nC: 1.79388,
      nF: 1.81281,
      ng: 1.82355,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 42.862940291,
      glass: "S-LAH51 (OHARA catalog equivalent; patent class 786442)",
      role: "Final positive element that completes the rear relay and establishes the long back focus.",
      dPgF: -0.0069,
      nC: 1.78058,
      nF: 1.79836,
      ng: 1.80838,
    },
  ],

  surfaces: [
    { label: "1", R: 48.776, d: 1.96, sd: 17, medium: 1 },
    {
      label: "2A",
      R: 15.932627745533175,
      d: 18.48,
      sd: 16.3,
      asphere: {
        K: -1,
        A4: 2.6020408163265307e-5,
        A6: 2.959843740703278e-8,
        A8: 6.458938837665429e-11,
        A10: 2.121292568484027e-13,
        A12: 0,
        A14: 0,
      },
    },
    { label: "3", R: 32.396, d: 5.88, sd: 9.8, medium: 2 },
    { label: "4", R: -136.696, d: 8.96, sd: 9.8 },
    { label: "STO", R: "flat", d: 3.64 },
    { label: "6", R: -19.32, d: 2.52, sd: 6.2, medium: 3 },
    { label: "7", R: 70.084, d: 0.28, sd: 6 },
    { label: "8", R: 4029.76, d: 3.36, sd: 6.5, medium: 4 },
    { label: "9", R: -20.216, d: 0, sd: 7.3 },
    { label: "10", R: 218.792, d: 2.8, sd: 8, medium: 5 },
    { label: "11", R: -39.592, d: 37.14633554107551, sd: 8 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes only one infinity prescription and no moving-group or spacing states; the production 0.3 m MFD is retained as metadata without invented internal motion.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 5 },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.34 },

  checks: { gapSagFrac: 1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
