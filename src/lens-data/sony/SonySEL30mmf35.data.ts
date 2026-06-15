import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA - Sony E 30mm F3.5 Macro (SEL30M35)                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2012-159613 A, Example 1, Sony / Tamron.          ║
 * ║  Production correspondence: Sony E 30mm F3.5 Macro, APS-C E mount. ║
 * ║  Marketing construction: 7 elements / 6 groups.                    ║
 * ║  Modeled optical media: 9 entries, because the two hybrid aspheres  ║
 * ║  are represented as glass bodies plus thin resin caps.              ║
 * ║  Aspheres: surfaces 3A, 10A, 11A, and 14A.                          ║
 * ║  Focus: internal focus by axial movement of G12/L121 only; G11 and ║
 * ║  G13 remain fixed.                                                  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No scale factor is applied. The patent prescription computes     ║
 * ║    EFL = 29.108 mm, matching the patent's f = 29.1 mm and the       ║
 * ║    marketed 30 mm focal length after ordinary rounding.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not list clear apertures. Semi-diameters below   ║
 * ║    were inferred from paraxial marginal/chief-ray traces, Sony's     ║
 * ║    APS-C field, the Fig. 1 cross-section, and renderer constraints. ║
 * ║    The front hybrid asphere is deliberately limited to sd = 6.0 mm  ║
 * ║    because the surface 3A -> 4 air gap is the binding sag-clearance ║
 * ║    constraint. The rear element is opened to sd = 13.0 mm so full   ║
 * ║    diagonal-field bundles are not artificially clipped in the rear  ║
 * ║    relay region. Edge-thickness and cross-gap checks were run       ║
 * ║    independently before delivery.                                   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ glass/resin optical media and refracting surfaces              ║
 * ║    ✓ aperture stop and focus-variable air gaps                      ║
 * ║    ✗ sensor cover glass, filters, and mechanical components omitted ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-sel30mmf35",
  maker: "Sony",
  name: "SONY E 30mm f/3.5 Macro",
  subtitle: "JP 2012-159613 A Example 1 - Sony / Tamron",
  specs: [
    "30 mm f/3.5 APS-C E-mount",
    "JP 2012-159613 A Example 1",
    "7 elements / 6 groups; 9 modeled optical media",
    "4 aspherical surfaces; 1 ED element",
    "Internal focus; 1:1 macro",
  ],

  focalLengthMarketing: 30,
  focalLengthDesign: 29.108,
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentYear: 2012,
  elementCount: 7,
  groupCount: 6,
  apertureBlades: 7,

  focusDescription:
    "Internal focus by axial movement of the single negative G12/L121 hybrid focus element; G11 and G13 remain fixed. Patent Example 1 varies D11 from 1.51 to 7.57 mm and D14 from 12.43 to 6.36 mm.",

  nominalFno: 3.5,
  closeFocusM: 0.095,
  maxFstop: 22,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  scFill: 0.58,
  yScFill: 0.72,

  elements: [
    {
      id: 1,
      name: "L111",
      label: "L111 glass body",
      type: "Negative Meniscus (hybrid host)",
      nd: 1.618,
      vd: 63.4,
      fl: -14.62,
      glass: "S-PHM52 (OHARA)",
      nC: 1.61504,
      nF: 1.62479,
      ng: 1.6301,
      cemented: "H1",
      role: "Front negative meniscus body for wide-angle entry and distortion control; the image-side resin cap carries the strong aspheric profile.",
    },
    {
      id: 2,
      name: "L111r",
      label: "L111 resin asphere",
      type: "Hybrid Aspheric Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      glass: "UV-curable optical resin (patent-listed nd/vd)",
      cemented: "H1",
      role: "Thin resin cap carrying the surface 3A composite asphere.",
    },
    {
      id: 3,
      name: "L112",
      label: "L112 positive lens",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 20.5,
      glass: "S-TIM22 (OHARA, non-recommended dense flint)",
      nC: 1.6421,
      nF: 1.66126,
      ng: 1.67265,
      role: "Dense-flint positive collector behind L111; recovers part of the front meniscus divergence and participates in chromatic balancing.",
    },
    {
      id: 4,
      name: "L113",
      label: "L113 negative doublet element",
      type: "Nearly Plano-Concave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -21.72,
      glass: "S-TIH4 (OHARA)",
      nC: 1.7473,
      nF: 1.77475,
      ng: 1.7915,
      cemented: "D1",
      role: "High-index dense flint negative half of the cemented achromat in G11R.",
    },
    {
      id: 5,
      name: "L114",
      label: "L114 ED doublet element",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.6,
      fl: 25.69,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      cemented: "D1",
      role: "Advertised ED element; high-Abbe positive partner to L113 for primary axial chromatic correction.",
    },
    {
      id: 6,
      name: "L115",
      label: "L115 double-aspheric positive lens",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.59201,
      vd: 67,
      fl: 14.94,
      glass: "M-PCD51 (Hoya, precision-molding phosphate crown)",
      role: "Principal positive-power element in G11R; both faces are aspherical and suitable for precision glass molding.",
    },
    {
      id: 7,
      name: "L121",
      label: "L121 focus-group glass body",
      type: "Biconcave Negative (hybrid host)",
      nd: 1.48749,
      vd: 70.4,
      fl: -18.39,
      glass: "S-FSL5 (OHARA) / N-FK5 class",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      cemented: "H2",
      role: "Single moving negative focus element; low-dispersion crown body helps keep chromatic behavior stable through focus.",
    },
    {
      id: 8,
      name: "L121r",
      label: "L121 resin asphere",
      type: "Hybrid Aspheric Resin Layer",
      nd: 1.5361,
      vd: 41.2,
      glass: "UV-curable optical resin (patent-listed nd/vd)",
      cemented: "H2",
      role: "Thin resin cap carrying the surface 14A focus-group asphere.",
    },
    {
      id: 9,
      name: "L131",
      label: "L131 rear positive lens",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.8,
      fl: 49.3,
      glass: "S-TIL6 (OHARA) / N-LLF6 class",
      nC: 1.52846,
      nF: 1.53934,
      ng: 1.54547,
      role: "Fixed rear positive relay element; converges the focus-modulated cone to the fixed image plane and helps balance lateral color.",
    },
  ],

  surfaces: [
    { label: "1", R: 49.294, d: 0.7, nd: 1.618, elemId: 1, sd: 6.0 },
    { label: "2", R: 8.281, d: 0.2, nd: 1.5361, elemId: 2, sd: 6.0 },
    { label: "3A", R: 7.498, d: 3.0, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "4", R: 16.94, d: 2.68, nd: 1.64769, elemId: 3, sd: 6.5 },
    { label: "5", R: -57.578, d: 4.9, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "STO", R: 1e15, d: 5.8, nd: 1.0, elemId: 0, sd: 5.16785 },
    { label: "7", R: -700.0, d: 0.7, nd: 1.7552, elemId: 4, sd: 6.9 },
    { label: "8", R: 16.807, d: 2.9, nd: 1.497, elemId: 5, sd: 7.1 },
    { label: "9", R: -50.056, d: 0.5, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "10A", R: 21.061, d: 3.87, nd: 1.59201, elemId: 6, sd: 7.7 },
    { label: "11A", R: -14.209, d: 1.51, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "12", R: -46.085, d: 0.7, nd: 1.48749, elemId: 7, sd: 7.5 },
    { label: "13", R: 13.045, d: 0.2, nd: 1.5361, elemId: 8, sd: 7.5 },
    { label: "14A", R: 11.339, d: 12.43, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "15", R: 37.899, d: 3.92, nd: 1.53172, elemId: 9, sd: 13.0 },
    { label: "16", R: -81.945, d: 27.3, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -1.8909e-4,
      A6: -2.41e-6,
      A8: -4.47e-8,
      A10: -4.27e-10,
      A12: 0,
      A14: 0,
    },
    "10A": {
      K: 0,
      A4: -5.7937e-5,
      A6: 1.0969e-6,
      A8: -2.7388e-8,
      A10: 3.8051e-10,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 5.1068e-5,
      A6: 1.2754e-6,
      A8: -3.1751e-8,
      A10: 4.214e-10,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -6.9421e-5,
      A6: -3.4378e-7,
      A8: -6.9182e-9,
      A10: 6.8268e-11,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "11A": [1.51, 7.57],
    "14A": [12.43, 6.36],
  },
  varLabels: [
    ["11A", "D11"],
    ["14A", "D14"],
  ],

  groups: [
    { text: "G11F", fromSurface: "1", toSurface: "5" },
    { text: "G11R", fromSurface: "7", toSurface: "11A" },
    { text: "G12 IF", fromSurface: "12", toSurface: "14A" },
    { text: "G13", fromSurface: "15", toSurface: "16" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "H2", fromSurface: "12", toSurface: "14A" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
