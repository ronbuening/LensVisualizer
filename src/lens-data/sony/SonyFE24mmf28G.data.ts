import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY FE 24mm f/2.8 G                                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2022-030896 A, Example 1 (Tamron / Sony).          ║
 * ║  Compact full-frame wide-angle prime with positive-positive-negative║
 * ║  group power distribution and inner focus by G2 translation.        ║
 * ║                                                                    ║
 * ║  Patent prescription: 8 lens elements / 7 air-separated groups.     ║
 * ║  Data representation: resin layers in the two hybrid aspheres are   ║
 * ║  explicit optical elements, so the `elements` array has 10 entries  ║
 * ║  while `elementCount` remains the patent/production count of 8.     ║
 * ║                                                                    ║
 * ║  Focus: G2 translates 1.542 mm toward the object from infinity to   ║
 * ║  0.18 m. Patent Table 3 labels the changing gaps as D(5)/D(7), but ║
 * ║  the surface table identifies them as D(11)/D(16).                 ║
 * ║                                                                    ║
 * ║  Note on cover glass: patent surfaces 19-20 are the sensor cover    ║
 * ║  glass and are excluded from the lens data. The final air gap folds ║
 * ║  the cover path into the air-equivalent BF:                         ║
 * ║  18.907 + 2.500 / 1.51680 + 1.000 = 21.555 mm.                    ║
 * ║                                                                    ║
 * ║  Note on semi-diameters: clear apertures are patent-listed H values.║
 * ║  The STO semi-diameter is paraxially adjusted to 5.6105 mm to       ║
 * ║  reproduce the patent Fno = 2.884; the patent H = 5.769 is treated  ║
 * ║  as the local clear/effective radius rather than the aperture stop  ║
 * ║  diameter used for entrance-pupil sizing.                           ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design. Sensor     ║
 * ║  cover glass, filters, motors, aperture blades, barrel, and mount   ║
 * ║  mechanics are not modeled as optical surfaces.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-fe-24-f28-g",
  maker: "Sony",
  name: "SONY FE 24mm f/2.8 G",
  subtitle: "JP 2022-030896 A Example 1 — Tamron / Sony",
  specs: [
    "8 ELEMENTS / 7 GROUPS",
    "Patent f = 24.710 mm",
    "F/2.8 marketed; F/2.884 design",
    "2ω = 84.98° patent",
    "4 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.709,
  apertureMarketing: 2.8,
  apertureDesign: 2.884,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2022,
  elementCount: 8,
  groupCount: 7,

  nominalFno: 2.8,
  closeFocusM: 0.18,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,
  yScFill: 0.72,
  focusDescription:
    "Inner focus: G2 translates 1.542 mm toward the object from infinity to 0.18 m; G1 and G3 remain fixed.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      fl: -36.45,
      glass: "FC5 (HOYA, 487/704 code)",
      role: "Front negative meniscus of G1a; low-dispersion negative power for wide-angle beam spreading.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 glass body",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      fl: -33.11,
      glass: "FC5 (HOYA, 487/704 code)",
      cemented: "H1",
      role: "Glass body of the first hybrid composite; provides the dominant negative power in G1a.",
    },
    {
      id: 3,
      name: "L2r",
      label: "Element 2 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.21,
      fl: 134.44,
      glass: "Proprietary optical resin (patent nd=1.53610, vd=41.21)",
      cemented: "H1",
      role: "Thin rear aspherical resin layer bonded to L2.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 21.68,
      glass: "S-LAH55VS (OHARA) class",
      role: "Strong positive collecting element at the front of G1b.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.71,
      fl: -21.65,
      glass: "S-NBH8 (OHARA) / KZFS-family short-flint class",
      cemented: "D1",
      role: "High-dispersion negative partner in the G1b cemented chromatic-correction doublet.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 15.19,
      glass: "FCD1 (HOYA) / S-FPL51 (OHARA) class",
      apd: "patent",
      apdNote: "Patent ΔPgF = +0.0374; positive Lp used in conditional expression (4).",
      dPgF: 0.0374,
      cemented: "D1",
      role: "Fluorophosphate ED positive element in the primary G1b achromatizing doublet.",
    },
    {
      id: 7,
      name: "L6r",
      label: "Element 6 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.21,
      fl: -5448.67,
      glass: "Proprietary optical resin (patent nd=1.53610, vd=41.21)",
      cemented: "H2",
      role: "Thin front aspherical resin layer bonded to L6; nearly zero standalone power.",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 6 glass body",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.82,
      fl: -69.15,
      glass: "S-TIL1 (OHARA) / LLF1 class",
      cemented: "H2",
      role: "Weak negative meniscus body in the moving G2 focus group.",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      fl: 25.4,
      glass: "FCD1B (HOYA) / S-FPL51 (OHARA) class",
      apd: "patent",
      apdNote: "Patent ΔPgF = +0.0369.",
      dPgF: 0.0369,
      role: "Positive ED meniscus and principal powered element of the moving G2 focus group.",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -25.62,
      glass: "S-TIL2 (OHARA) / FEL2 class",
      role: "Single negative rear group element; field-flattening and compacting rear negative group.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.692, d: 0.9, nd: 1.48749, elemId: 1, sd: 8.93 },
    { label: "2", R: 10.708, d: 6.301, nd: 1.0, elemId: 0, sd: 7.32 },
    { label: "3", R: -29.255, d: 0.7, nd: 1.48749, elemId: 2, sd: 5.64 },
    { label: "4", R: 36.278, d: 0.2, nd: 1.5361, elemId: 3, sd: 5.42 },
    { label: "5A", R: 72.902, d: 2.215, nd: 1.0, elemId: 0, sd: 5.41 },
    { label: "STO", R: 1e15, d: 2.477, nd: 1.0, elemId: 0, sd: 5.6105 },
    { label: "7", R: 46.922, d: 2.834, nd: 1.83481, elemId: 4, sd: 6.76 },
    { label: "8", R: -28.663, d: 0.5, nd: 1.0, elemId: 0, sd: 6.91 },
    { label: "9", R: 559.336, d: 0.8, nd: 1.72047, elemId: 5, sd: 6.89 },
    { label: "10", R: 15.165, d: 5.872, nd: 1.497, elemId: 6, sd: 6.85 },
    { label: "11", R: -13.1, d: 4.52, nd: 1.0, elemId: 0, sd: 6.99 },
    { label: "12A", R: -11.559, d: 0.2, nd: 1.5361, elemId: 7, sd: 6.51 },
    { label: "13", R: -11.675, d: 0.7, nd: 1.54814, elemId: 8, sd: 6.53 },
    { label: "14", R: -17.23, d: 2.222, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "15A", R: -399.343, d: 4.468, nd: 1.4971, elemId: 9, sd: 7.94 },
    { label: "16A", R: -12.285, d: 2.535, nd: 1.0, elemId: 0, sd: 8.47 },
    { label: "17", R: -20.578, d: 1.0, nd: 1.54072, elemId: 10, sd: 8.8 },
    { label: "18", R: 43.11, d: 21.555, nd: 1.0, elemId: 0, sd: 9.64 },
  ],

  asph: {
    "5A": {
      K: 0,
      A4: 1.6217e-4,
      A6: 5.4176e-7,
      A8: 1.8017e-8,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 7.7335e-5,
      A6: -8.1694e-7,
      A8: 3.8172e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -1.201e-4,
      A6: 6.1727e-7,
      A8: -2.739e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 3.8253e-5,
      A6: -3.5929e-9,
      A8: 1.6953e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "11": [4.52, 2.978],
    "16A": [2.535, 4.077],
  },

  varLabels: [
    ["11", "D(11)"],
    ["16A", "D(16)"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 / IF", fromSurface: "12A", toSurface: "16A" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
  ],

  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "H2", fromSurface: "12A", toSurface: "14" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
