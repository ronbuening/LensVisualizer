import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — RODENSTOCK GERONAR 210mm f/6.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 28 18 394 B1, sole numerical example.             ║
 * ║  Three-element / three-group large-format Cooke-type triplet.      ║
 * ║  All surfaces are spherical.                                       ║
 * ║  Focus: whole-lens unit focus by camera bellows/rail.              ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f' = 100 at the e-line.    ║
 * ║    All radii, center thicknesses, air spaces, inferred SDs, and    ║
 * ║    BFD are scaled ×2.1 to the 210 mm production focal length.      ║
 * ║    The stored glass indices are d-line Schott catalog values, so   ║
 * ║    the computed d-line EFL is 210.10 mm rather than exactly        ║
 * ║    210.00 mm.                                                      ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent table gives l2 as 7.74 + 2.29 = 10.03 but does not   ║
 * ║    label the two terms by axial order. The figure places the stop  ║
 * ║    closer to L2, so this data file uses r4→STO = 2.29 and         ║
 * ║    STO→r5 = 7.74 before scaling.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SDs were inferred  ║
 * ║    from the f/6.8 entrance-pupil geometry and the 5×7 field, then  ║
 * ║    constrained by edge thickness, rim slope, and cross-gap sag.    ║
 * ║    Full-field full-aperture rays are intentionally not forced      ║
 * ║    through L1 because the patent only claims vignetting-free       ║
 * ║    coverage at reduced aperture.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS RANGE:                                              ║
 * ║    The production lens has no lens-limited MFD; close focus is     ║
 * ║    camera-bellows dependent. The focus slider uses an illustrative ║
 * ║    unit-focus close end at 2.0 m from the image plane.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "rodenstock-geronar-210mm-f68",
  maker: "Rodenstock",
  name: "RODENSTOCK GERONAR 210mm f/6.8",
  subtitle: "DE 28 18 394 B1 — sole numerical example",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "5x7",
    specs: ["3 elements / 3 groups", "f' = 210.10 mm (d-line)", "f/6.8", "2ω ≥ 56° patent field", "all-spherical"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 210, design: 210.1035 },
    fNumber: { marketing: 6.8, design: 6.8 },
  },

  source: {
    patentNumber: "DE 28 18 394 B1",
    patentYear: 1979,
    authors: ["Josef Weiß", "Franz Schlegel"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.32,
      focalLengthMm: 52.07,
      glass: "N-SK16 / SK16 (Schott)",
      apd: false,
      role: "Strong front positive crown; the rear radius is nearly plano relative to the front curvature.",
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.75,
      focalLengthMm: -46.28,
      glass: "LLF1 (Schott)",
      apd: false,
      role: "Thin extra-light flint negative corrector tightly spaced behind L1.",
      dPgF: -0.0009,
      nC: 1.54457,
      nF: 1.55655,
      ng: 1.56333,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.17,
      focalLengthMm: 200.12,
      glass: "N-BK7 / BK7 (Schott)",
      apd: false,
      role: "Weak rear positive crown completing the triplet and setting the back focal position.",
      dPgF: -0.0009,
      nC: 1.51432,
      nF: 1.52238,
      ng: 1.52668,
    },
  ],

  surfaces: [
    { label: "1", R: 33.285, d: 5.25, sd: 16.9, medium: 1 },
    { label: "2", R: -1030.281, d: 3.402, sd: 16.9 },
    { label: "3", R: -151.41, d: 0.798, sd: 15.5, medium: 2 },
    { label: "4", R: 30.534, d: 4.809, sd: 15.5 },
    { label: "STO", R: "flat", d: 16.254 },
    { label: "5", R: 377.58, d: 8.106, sd: 28.0, medium: 3 },
    { label: "6", R: -141.393, sd: 28.0 },
  ],

  focus: {
    closeFocusM: 2.0,
    description:
      "Whole-lens unit focus by view-camera rail/bellows; close-focus slider endpoint is illustrative, not lens-limited.",
  },

  gaps: { "6": { label: "BF", values: [[177.896912, 206.359055]] } },

  aperture: { nominalFNumber: 6.8, fStops: [6.8, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
  ],
  doublets: [],

  layout: { scFill: 0.55, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
