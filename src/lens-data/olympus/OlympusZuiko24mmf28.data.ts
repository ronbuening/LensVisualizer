import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║             LENS DATA — OLYMPUS H.ZUIKO AUTO-W 24mm f/2.8             ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,884,556, Embodiment 4 / Claim 5 (Jihei Nakagawa,    ║
 * ║  Olympus Optical Co., Ltd.).                                           ║
 * ║  Compact all-spherical retrofocus design: 8 elements / 7 groups.       ║
 * ║  Focus: unit focus; only the final back-focus gap varies.              ║
 * ║                                                                          ║
 * ║  NOTE ON IDENTIFICATION:                                                ║
 * ║    Embodiment 4 is the strongest patent match to the production         ║
 * ║    Olympus H.Zuiko Auto-W 24mm f/2.8: F/2.8, 84° coverage, and 8/7    ║
 * ║    construction. The patent does not name a commercial lens, and the    ║
 * ║    reconstructed close-focus magnification does not exactly match the   ║
 * ║    Olympus product sheet. The identification therefore remains         ║
 * ║    convergent rather than explicit.                                     ║
 * ║                                                                          ║
 * ║  NOTE ON SCALING:                                                       ║
 * ║    The patent prescription is normalized to f = 1.0. All radii and      ║
 * ║    axial distances are uniformly scaled ×24 to the production focal     ║
 * ║    length. The resulting paraxial EFL is 23.9992 mm.                    ║
 * ║                                                                          ║
 * ║  NOTE ON APERTURE STOP:                                                 ║
 * ║    The patent drawing places the stop inside d8, between L4 and L5,     ║
 * ║    but does not tabulate the split. Its axial position is inferred from ║
 * ║    Fig. 3 at approximately 40% of d8 after surface 8. The 5.71 mm      ║
 * ║    stop semi-diameter reproduces F/2.8 paraxially at that location.     ║
 * ║                                                                          ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                ║
 * ║    The patent omits clear apertures. SDs are rendering reconstructions  ║
 * ║    from marginal/chief-ray envelopes, constrained by edge thickness,   ║
 * ║    sd/|R| < 0.90, element SD ratio ≤ 1.25, and signed cross-gap sag.    ║
 * ║    They are not patent or measured production dimensions. Default      ║
 * ║    oblique ray samples remain within the selected apertures.            ║
 * ║                                                                          ║
 * ║  NOTE ON CLOSE FOCUS:                                                   ║
 * ║    The patent supplies only infinity data. Solving the 0.25 m unit-focus║
 * ║    conjugate gives a 40.0292 mm close BFD. This is +3.2660 mm from the ║
 * ║    stored patent-scaled BFD, or +3.2723 mm from computed infinity focus.║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-w-24mm-f28",
  maker: "Olympus",
  name: "OLYMPUS H.ZUIKO AUTO-W 24mm f/2.8",
  subtitle: "US 3,884,556 EMBODIMENT 4 — OLYMPUS / JIHEI NAKAGAWA",
  specs: ["8 ELEMENTS / 7 GROUPS", "f = 23.999 mm", "F/2.8", "2ω = 84°", "ALL-SPHERICAL"],

  focalLengthMarketing: 24,
  focalLengthDesign: 23.9992,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,884,556",
  patentAuthors: ["Jihei Nakagawa"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1975,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.7234,
      vd: 38.0,
      fl: 47.6047,
      glass: "S-BAH28 (OHARA) equivalent",
      apd: false,
      role: "Front positive meniscus used to moderate negative distortion and establish the wide-angle chief-ray geometry.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus, convex to object",
      nd: 1.6228,
      vd: 57.1,
      fl: -21.5611,
      glass: "S-BSM10 (OHARA) equivalent",
      apd: false,
      role: "Strongest negative member of the front diverging section; reduces front-group diameter and supplies retrofocus power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus, convex to object",
      nd: 1.713,
      vd: 54.0,
      fl: -24.3538,
      glass: "S-LAL8 (OHARA) equivalent",
      apd: false,
      role: "Completes the negative front section and shares off-axis and chromatic correction with L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6141,
      vd: 55.0,
      fl: 23.7971,
      glass: "S-BSM9 (OHARA) equivalent",
      apd: false,
      role: "Thick positive relay element balancing spherical aberration and astigmatism from the negative front section.",
    },
    {
      id: 5,
      name: "L5a",
      label: "Element 5a",
      type: "Positive Meniscus, concave to object",
      nd: 1.7618,
      vd: 27.1,
      fl: 13.827,
      glass: "Unmatched (dense flint 762/271; current SF14-family catalogs are nd≈1.76182, vd≈26.5–26.6)",
      apd: false,
      role: "Front member of the cemented negative doublet; standalone in-air power is positive, but its in-situ role is set by the cemented interface.",
      cemented: "L5",
    },
    {
      id: 6,
      name: "L5b",
      label: "Element 5b",
      type: "Biconcave Negative",
      nd: 1.8052,
      vd: 25.4,
      fl: -10.3284,
      glass: "S-TIH6 (OHARA) equivalent",
      apd: false,
      role: "Rear, strongly negative member of the cemented L5 group; the complete doublet has EFL −38.316 mm.",
      cemented: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, concave to object",
      nd: 1.618,
      vd: 63.4,
      fl: 32.2041,
      glass: "S-PHM52 (OHARA) equivalent",
      apd: false,
      role: "Low-dispersion positive rear meniscus contributing spherical-aberration, coma, and longitudinal-color correction.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive, weak front surface",
      nd: 1.618,
      vd: 63.4,
      fl: 43.9128,
      glass: "S-PHM52 (OHARA) equivalent",
      apd: false,
      role: "Final positive element; its weakly convex front surface and stronger rear surface complete the rear converging section.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 23.8296, d: 4.8768, nd: 1.7234, elemId: 1, sd: 15.8 },
    { label: "2", R: 70.716, d: 0.0984, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "3", R: 41.0016, d: 1.464, nd: 1.6228, elemId: 2, sd: 10.0 },
    { label: "4", R: 9.9768, d: 3.7368, nd: 1.0, elemId: 0, sd: 8.29 },
    { label: "5", R: 32.2488, d: 1.464, nd: 1.713, elemId: 3, sd: 9.0 },
    { label: "6", R: 11.0736, d: 3.9408, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "7", R: 20.2008, d: 8.9064, nd: 1.6141, elemId: 4, sd: 9.4 },
    { label: "8", R: -43.9752, d: 0.98688, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "STO", R: 1e15, d: 1.48032, nd: 1.0, elemId: 0, sd: 5.71 },
    { label: "9", R: -108.6696, d: 6.0864, nd: 1.7618, elemId: 5, sd: 7.2 },
    { label: "10", R: -9.8352, d: 1.3176, nd: 1.8052, elemId: 6, sd: 8.6 },
    { label: "11", R: 57.072, d: 1.2, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "12", R: -55.3488, d: 2.4384, nd: 1.618, elemId: 7, sd: 8.0 },
    { label: "13", R: -14.8848, d: 0.1464, nd: 1.0, elemId: 0, sd: 8.65 },
    { label: "14", R: 953.1336, d: 2.3424, nd: 1.618, elemId: 8, sd: 9.5 },
    { label: "15", R: -27.9072, d: 36.7632, nd: 1.0, elemId: 0, sd: 9.6 },
  ],

  asph: {},

  /* ── Unit-focus spacing ── */
  var: {
    "15": [36.7632, 40.0292],
  },
  varLabels: [["15", "BF"]],

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT DIVERGING (L1–L3)", fromSurface: "1", toSurface: "6" },
    { text: "REAR CONVERGING (L4–L7)", fromSurface: "7", toSurface: "15" },
  ],
  doublets: [{ text: "L5", fromSurface: "9", toSurface: "11" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "Unit-focus reconstruction based on the Olympus straight-helicoid specification; all internal spacings remain fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
