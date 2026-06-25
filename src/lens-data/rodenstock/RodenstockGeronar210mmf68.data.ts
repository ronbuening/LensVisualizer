import type { LensDataInput } from "../../types/optics.js";

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
  key: "rodenstock-geronar-210mm-f68",
  maker: "Rodenstock",
  name: "RODENSTOCK GERONAR 210mm f/6.8",
  subtitle: "DE 28 18 394 B1 — sole numerical example",
  specs: ["3 elements / 3 groups", "f' = 210.10 mm (d-line)", "f/6.8", "2ω ≥ 56° patent field", "all-spherical"],

  focalLengthMarketing: 210,
  focalLengthDesign: 210.1035,
  apertureMarketing: 6.8,
  apertureDesign: 6.8,
  imageFormat: "5x7",
  patentYear: 1979,
  elementCount: 3,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.32,
      fl: 52.07,
      glass: "N-SK16 / SK16 (Schott)",
      apd: false,
      dPgF: -0.0011,
      nC: 1.61727,
      nF: 1.62756,
      ng: 1.63312,
      role: "Strong front positive crown; the rear radius is nearly plano relative to the front curvature.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.75,
      fl: -46.28,
      glass: "LLF1 (Schott)",
      apd: false,
      dPgF: -0.0009,
      nC: 1.54457,
      nF: 1.55655,
      ng: 1.56333,
      role: "Thin extra-light flint negative corrector tightly spaced behind L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.17,
      fl: 200.12,
      glass: "N-BK7 / BK7 (Schott)",
      apd: false,
      dPgF: -0.0009,
      nC: 1.51432,
      nF: 1.52238,
      ng: 1.52668,
      role: "Weak rear positive crown completing the triplet and setting the back focal position.",
    },
  ],

  surfaces: [
    { label: "1", R: 33.285, d: 5.25, nd: 1.62041, elemId: 1, sd: 16.9 },
    { label: "2", R: -1030.281, d: 3.402, nd: 1.0, elemId: 0, sd: 16.9 },
    { label: "3", R: -151.41, d: 0.798, nd: 1.54814, elemId: 2, sd: 15.5 },
    { label: "4", R: 30.534, d: 4.809, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "STO", R: 1e15, d: 16.254, nd: 1.0, elemId: 0, sd: 13.342 },
    { label: "5", R: 377.58, d: 8.106, nd: 1.5168, elemId: 3, sd: 28.0 },
    { label: "6", R: -141.393, d: 177.896912, nd: 1.0, elemId: 0, sd: 28.0 },
  ],

  asph: {},

  var: {
    "6": [177.896912, 206.359055],
  },

  varLabels: [["6", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
  ],

  doublets: [],

  closeFocusM: 2.0,
  focusDescription: "Whole-lens unit focus by view-camera rail/bellows; close-focus slider endpoint is illustrative, not lens-limited.",

  nominalFno: 6.8,
  fstopSeries: [6.8, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,

  scFill: 0.55,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
