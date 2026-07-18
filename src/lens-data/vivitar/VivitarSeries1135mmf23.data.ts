import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 135mm f/2.3 AUTO TELEPHOTO        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: GB 1,408,910, Table II / Figure 3                 ║
 * ║  (Ponder & Best, Inc.; Ellis I. Betensky).                         ║
 * ║  Production cross-checks: Vivitar owner's manual (4/73) and       ║
 * ║  Ponder & Best Series 1 specification sheet (September 1974).      ║
 * ║                                                                    ║
 * ║  Six air-spaced spherical elements in six groups.                  ║
 * ║  Focus: L1-L5 translate objectward; L6 remains fixed to the film. ║
 * ║                                                                    ║
 * ║  UNSCALED PRESCRIPTION: every R and d below retains the Table II  ║
 * ║  value. The patent computes to f = 135.2107 mm, a +0.156%         ║
 * ║  difference from the marketed 135 mm designation.                  ║
 * ║                                                                    ║
 * ║  STOP MODEL: the patent locates the stop in the 19.22 mm R6-R7   ║
 * ║  airspace but does not give its exact station. It is placed at     ║
 * ║  the midpoint (9.61 + 9.61 mm), consistent with Figure 3. The     ║
 * ║  stop SD is solved paraxially for f/2.3 at infinity.               ║
 * ║                                                                    ║
 * ║  CLOSE-FOCUS MODEL: the patent publishes d10 = 0.87-10.40 mm.    ║
 * ║  Vivitar specifies 3 ft (.9 m) from the film plane. The metric     ║
 * ║  endpoint is modeled by extending the same unscaled prescription   ║
 * ║  to d10 = 21.081081 mm. This is an explicit extrapolation beyond  ║
 * ║  the patent's worked focus range, not a second prescription.       ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: the patent omits clear apertures. SDs are inferred║
 * ║  from the f/2.3 marginal ray, diagonal chief-ray geometry, element ║
 * ║  edge thickness, rim slope, and signed cross-gap sag constraints.  ║
 * ║  The model permits normal wide-open off-axis mechanical vignetting.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vivitar-series-1-135mm-f2-3",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 135mm f/2.3 AUTO TELEPHOTO",
  subtitle: "GB 1,408,910 TABLE II / FIGURE 3 — ELLIS I. BETENSKY",
  specs: ["6 ELEMENTS / 6 GROUPS", "f = 135.21 mm", "f/2.3", "2ω = 18.18°", "FIXED REAR COMPENSATOR"],

  focalLengthMarketing: 135,
  focalLengthDesign: 135.2107,
  apertureMarketing: 2.3,
  apertureDesign: 2.3,
  imageFormat: "135-full-frame",
  patentYear: 1975,
  elementCount: 6,
  groupCount: 6,

  focusDescription:
    "Front objective L1-L5 translates objectward while the weak negative L6 compensator remains fixed relative to the film plane.",

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive (near plano-convex)",
      nd: 1.6228,
      vd: 56.9,
      fl: 72.4718,
      glass: "S-BSM10 class (OHARA; patent 623/569)",
      role: "Strong front positive collector; R2 is nearly plane.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 189.917,
      glass: "N-BK7 (SCHOTT; BK7-class equivalent)",
      role: "Weak positive crown following L1; the L1-L2 pair has f = 52.1545 mm in air.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -34.8479,
      glass: "SF6 class (SCHOTT legacy; patent 805/255)",
      role: "Strong dense-flint negative member ahead of the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 47.5813,
      glass: "N-SF2 (SCHOTT; SF2-class equivalent)",
      role: "Strong post-stop positive member of the movable objective.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus (concave to object)",
      nd: 1.6223,
      vd: 53.1,
      fl: -100.1655,
      glass: "N-SSK2 class (SCHOTT; patent 622/531)",
      role: "Rear negative member of the translating five-element objective.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus (fixed compensator)",
      nd: 1.54814,
      vd: 45.8,
      fl: -296.4362,
      glass: "LLF1 (SCHOTT)",
      role: "Stationary weak negative compensator with its concave side facing the image.",
    },
  ],

  /* ── Surfaces: exact unscaled Table II prescription ── */
  surfaces: [
    { label: "1", R: 45.6583, d: 12.15, nd: 1.6228, elemId: 1, sd: 29.6 },
    { label: "2", R: -3538.8, d: 0.34, nd: 1.0, elemId: 0, sd: 29.0 },
    { label: "3", R: 45.5236, d: 11.13, nd: 1.5168, elemId: 2, sd: 26.5 },
    { label: "4", R: 77.8311, d: 4.64, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "5", R: -145.2645, d: 3.51, nd: 1.80518, elemId: 3, sd: 20.3 },
    { label: "6", R: 35.1509, d: 9.61, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "STO", R: 1e15, d: 9.61, nd: 1.0, elemId: 0, sd: 17.016713 },
    { label: "7", R: 95.1885, d: 6.93, nd: 1.64769, elemId: 4, sd: 18.8 },
    { label: "8", R: -44.2681, d: 4.58, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "9", R: -37.3576, d: 2.0, nd: 1.6223, elemId: 5, sd: 16.5 },
    { label: "10", R: -95.1509, d: 0.87, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "11", R: 62.1185, d: 2.0, nd: 1.54814, elemId: 6, sd: 15.5 },
    { label: "12", R: 44.4264, d: 59.67, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  /* ── All-spherical design ── */
  asph: {},

  /* ── Focus ── */
  var: {
    "10": [0.87, 21.081081],
  },
  varLabels: [["10", "FOCUS"]],

  /* ── Diagram annotations ── */
  groups: [
    { text: "MOVABLE OBJECTIVE", fromSurface: "1", toSurface: "10" },
    { text: "FIXED COMPENSATOR", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [],

  /* ── Product / UI data ── */
  closeFocusM: 0.9,
  nominalFno: 2.3,
  fstopSeries: [2.3, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  focusStep: 0.002,

  /* ── Layout ── */
  scFill: 0.58,
  yScFill: 0.64,
} satisfies LensDataInput;

export default LENS_DATA;
