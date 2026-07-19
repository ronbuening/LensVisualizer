import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — OLYMPUS G.ZUIKO AUTO-W 28mm f/3.5              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 2205380 A1, Example 3 / Table V (N. Yamashita).   ║
 * ║  Seven-element, seven-group, all-spherical retrofocus prime.       ║
 * ║  Focus: production straight-helicoid unit focus, modeled through   ║
 * ║  the final image-space gap because the patent gives no focus       ║
 * ║  spacing table.                                                     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    The patent prescription is normalized to f = 100 mm. All        ║
 * ║    radii and axial distances are uniformly scaled ×0.28, giving    ║
 * ║    a computed production-scale EFL of 28.0072 mm.                  ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                             ║
 * ║    The patent places the stop somewhere in air gap t5 but gives    ║
 * ║    no axial coordinate. The stop is modeled at the midpoint of     ║
 * ║    scaled t5. Its SD is paraxially set for f/3.5.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs were estimated from a     ║
 * ║    combined paraxial marginal/chief-ray trace at f/3.5 and 38°     ║
 * ║    half-field, then constrained by the 49 mm filter envelope,      ║
 * ║    rim-slope limits, element SD ratios, positive edge thickness,   ║
 * ║    and <=90% signed cross-gap sag intrusion. The surface-height    ║
 * ║    relative heights were refined against patent Fig. 6. The L2     ║
 * ║    flare and rear-block taper retain the wide-open peripheral      ║
 * ║    vignetting shown in patent Fig. 9.                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-28mm-f35",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-W 28mm f/3.5",
  subtitle: "DE 2205380 A1 — Example 3 / Nobuo Yamashita",
  specs: ["7 ELEMENTS / 7 GROUPS", "f = 28.007 mm", "F/3.5", "2ω = 75°", "ALL-SPHERICAL"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.0072,
  apertureMarketing: 3.5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 2205380 A1",
  patentAuthors: ["Nobuo Yamashita"],
  patentAssignees: ["Olympus Optical Co., Ltd."],
  patentYear: 1973,
  elementCount: 7,
  groupCount: 7,

  /* ── Elements ──
   * Focal lengths are standalone thick-element values in air at the
   * production scale. Glass names are nearest current catalog equivalents,
   * not claims about Olympus's historical supplier or exact melt.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.66672,
      vd: 48.32,
      fl: 272.651,
      glass: "S-BAH11 (OHARA current equivalent)",
      apd: false,
      role: "Weak positive front collector ahead of the primary negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.27,
      fl: -32.524,
      glass: "S-BSM16 (OHARA current equivalent)",
      apd: false,
      role: "Primary negative element of the retrofocus front group; convex face toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.66892,
      vd: 44.98,
      fl: 54.188,
      glass: "BAF13 (SUMITA current equivalent)",
      apd: false,
      role: "Thick positive element whose rear surface forms the first boundary of the negative air lens.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.33,
      fl: 158.409,
      glass: "S-LAL12 (OHARA current equivalent)",
      apd: false,
      role: "Thick weak-positive meniscus; concave face toward the object and second boundary of the air lens.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.98,
      fl: 41.212,
      glass: "J-LAK8 (HIKARI current equivalent)",
      apd: false,
      role: "Positive rear-group collector immediately ahead of the aperture-stop gap.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.79,
      fl: -21.296,
      glass: "S-TIH13 (OHARA current equivalent)",
      apd: false,
      role: "High-dispersion negative corrector between the two rear positive elements.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex Positive",
      nd: 1.713,
      vd: 53.98,
      fl: 24.544,
      glass: "J-LAK8 (HIKARI current equivalent)",
      apd: false,
      role: "Final positive element with a plane object-side face and convex image-side face.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 479.3796, d: 2.8112, nd: 1.66672, elemId: 1, sd: 17.3 },
    { label: "2", R: -292.1324, d: 0.1988, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3", R: 20.8236, d: 1.6492, nd: 1.62041, elemId: 2, sd: 12.0 },
    { label: "4", R: 9.9372, d: 7.6104, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "5", R: 456.8508, d: 6.3308, nd: 1.66892, elemId: 3, sd: 8.0 },
    { label: "6", R: -39.1524, d: 0.7, nd: 1.0, elemId: 0, sd: 6.75 },
    { label: "7", R: -19.5328, d: 8.7612, nd: 1.6779, elemId: 4, sd: 7.0 },
    { label: "8", R: -19.5216, d: 0.1988, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "9", R: 19.8464, d: 1.8312, nd: 1.713, elemId: 5, sd: 6.5 },
    { label: "10", R: 58.7944, d: 1.4504, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 1.4504, nd: 1.0, elemId: 0, sd: 5.545789 },
    { label: "11", R: -56.3332, d: 1.9404, nd: 1.74077, elemId: 6, sd: 6.0 },
    { label: "12", R: 22.232, d: 0.8512, nd: 1.0, elemId: 0, sd: 5.6 },
    { label: "13", R: 1e15, d: 2.2512, nd: 1.713, elemId: 7, sd: 6.8 },
    { label: "14", R: -17.5, d: 37.50245, nd: 1.0, elemId: 0, sd: 7.2 },
  ],

  asph: {},

  /* Unit-focus approximation from the production 0.30 m minimum focus distance. */
  var: {
    "14": [37.50245, 41.077179],
  },
  varLabels: [["14", "BF"]],

  groups: [
    { text: "FRONT NEGATIVE", fromSurface: "1", toSurface: "4" },
    { text: "INTERMEDIATE POSITIVE", fromSurface: "5", toSurface: "8" },
    { text: "REAR POSITIVE", fromSurface: "9", toSurface: "14" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "Straight-helicoid unit focus; modeled BF increases from 37.502 mm at infinity to 41.077 mm at 0.30 m.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 5.6, 8, 11, 16],

  scFill: 0.5,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
