import type { LensDataInput } from "../../types/optics.js";

/**
 * OLYMPUS ZUIKO AUTO-W 18mm f/3.5
 *
 * Data source: US 4,029,397, Embodiment 1 / Claim 6 (Nobuo Yamashita, Olympus Optical Co., Ltd.).
 * Production identification: Olympus published 11 elements / 9 groups, floating-element focusing,
 * a 100° field, and 0.25 m minimum focus; those specifications align with Embodiment 1, not the
 * patent's 12-element / 10-group Embodiment 2.
 *
 * Patent transcription note: the Detailed Description table prints r13 = +77.10, while Claim 6
 * prints r13 = -77.10. The Claim 6 sign is used. With r13 negative, component 6 is the claimed
 * cemented positive doublet and the complete prescription has EFL = +100.181 on the patent scale.
 * With r13 positive, component 6 becomes negative and the complete system has EFL = -182.983,
 * contradicting both Claim 6 and the patent's stated positive f = 100 design.
 *
 * Patent prescription scale: f = 100; all radii, thicknesses, air gaps, BFD, and estimated
 * semi-diameters are scaled by 0.18 for the production 18 mm focal length.
 * Computed paraxial EFL at infinity: 18.032579 mm. Computed BFD: 36.500171 mm.
 *
 * Focus model: components 3-9 (L3-L11) move objectward while L1-L2 remain fixed. The patent's
 * worked close state scales to d4 = 4.392 mm. The data endpoint extends the same rigid-group motion
 * to d4 = 3.953324 mm and BF = 38.864847 mm so the object-to-image-plane distance is 0.25 m,
 * matching Olympus's production minimum-focus specification.
 *
 * Aperture stop: the patent neither tabulates nor labels a stop. A modeled stop is placed at the
 * midpoint of d10, near the transition from L5 to the first cemented doublet in Fig. 2. Its
 * semi-diameter is set by paraxial entrance-pupil tracing for f/3.5; pupil geometry is therefore
 * less certain than the patent-tabulated radii and thicknesses.
 *
 * Semi-diameters: not supplied by the patent. They are estimates from exact spherical marginal and
 * chief-ray traces, then constrained to element SD ratio <= 1.25, common-aperture edge thickness
 * >= 0.5 mm, rim slope <= 2.065, and signed cross-gap sag intrusion <= 90% at every modeled focus
 * state.
 */

const LENS_DATA = {
  /* Identity */
  key: "olympus-zuiko-auto-w-18f35",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-W 18mm f/3.5",
  subtitle: "US 4,029,397 EMBODIMENT 1 — NOBUO YAMASHITA / OLYMPUS",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "18.03 mm PARAXIAL EFL",
    "f/3.5",
    "100° DIAGONAL FIELD",
    "FLOATING REAR GROUP",
    "ALL SPHERICAL",
  ],
  focalLengthMarketing: 18,
  focalLengthDesign: 18.032579,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,029,397",
  patentAuthors: ["Nobuo Yamashita"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1977,
  elementCount: 11,
  groupCount: 9,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100,
    maxTraceFieldDeg: 50,
  },
  focusDescription:
    "Floating rear group: L3-L11 advances toward the fixed L1-L2 front group; the final BFD increases by the same amount.",

  /* Elements — standalone focal lengths are thick-lens values in air. */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.33,
      fl: 107.835,
      glass: "S-LAL12 (OHARA; coordinate match)",
      apd: false,
      role: "Weak positive front collector in the fixed negative front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.24,
      fl: -30.879,
      glass: "S-LAH51 (OHARA; coordinate match)",
      apd: false,
      role: "Strong negative meniscus completing the fixed front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.24,
      fl: -31.923,
      glass: "S-LAH51 (OHARA; coordinate match)",
      apd: false,
      role: "First element of the floating group; continues the retrofocus divergence.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.24,
      fl: -28.121,
      glass: "S-LAH51 (OHARA; coordinate match)",
      apd: false,
      role: "Third consecutive high-index negative meniscus in the front half of the design.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.83,
      fl: 46.057,
      glass: "S-TIL26 (OHARA; coordinate match)",
      apd: false,
      role: "Positive transition element preceding the modeled aperture and cemented correction groups.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.62,
      fl: -17.882,
      glass: "S-LAL14 (OHARA; coordinate match)",
      apd: false,
      cemented: "D1",
      role: "Negative crown member of the first cemented doublet; standalone in-air power shown.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.54,
      fl: 10.088,
      glass: "S-FTM16 class (OHARA; closest current coordinate match)",
      apd: false,
      cemented: "D1",
      role: "Strong positive flint member; D1 has a net in-situ EFL of +19.080 mm.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.24,
      fl: 28.233,
      glass: "S-LAH51 (OHARA; coordinate match)",
      apd: false,
      cemented: "D2",
      role: "Positive meniscus member of the second cemented doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.88,
      fl: -12.66,
      glass: "SF57 (SCHOTT; coordinate match)",
      apd: false,
      cemented: "D2",
      role: "High-dispersion negative member; D2 has a net in-situ EFL of -19.082 mm.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.38,
      fl: 29.698,
      glass: "S-PHM52 (OHARA; coordinate match)",
      apd: false,
      role: "Low-dispersion rear positive meniscus in the floating group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.38,
      fl: 39.176,
      glass: "S-PHM52 (OHARA; coordinate match)",
      apd: false,
      role: "Final low-dispersion positive meniscus and image-side field-correction element.",
    },
  ],

  /* Surface prescription — scaled ×0.18 from patent f=100 data. */
  surfaces: [
    { label: "1", R: 35.6958, d: 4.4262, nd: 1.6779, elemId: 1, sd: 20.4 },
    { label: "2", R: 66.2652, d: 0.099, nd: 1.0, elemId: 0, sd: 19.3 },
    { label: "3", R: 22.8672, d: 1.476, nd: 1.7859, elemId: 2, sd: 12.7 },
    { label: "4", R: 11.439, d: 6.318, nd: 1.0, elemId: 0, sd: 10.16 },
    { label: "5", R: 19.9224, d: 1.476, nd: 1.7859, elemId: 3, sd: 8.3 },
    { label: "6", R: 10.7424, d: 1.9566, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "7", R: 20.4102, d: 0.9828, nd: 1.7859, elemId: 4, sd: 6.3 },
    { label: "8", R: 10.386, d: 1.7496, nd: 1.0, elemId: 0, sd: 5.5 },
    { label: "9", R: 29.088, d: 3.7242, nd: 1.56732, elemId: 5, sd: 5.1 },
    { label: "10", R: -244.9602, d: 0.0738, nd: 1.0, elemId: 0, sd: 4.1 },
    { label: "STO", R: 1e15, d: 0.0738, nd: 1.0, elemId: 0, sd: 3.840522 },
    { label: "11", R: 28.1016, d: 0.9828, nd: 1.6968, elemId: 6, sd: 4.1 },
    { label: "12", R: 8.5086, d: 7.0884, nd: 1.5927, elemId: 7, sd: 4.25 },
    { label: "13", R: -13.878, d: 1.5732, nd: 1.0, elemId: 0, sd: 4.9 },
    { label: "14", R: -24.0624, d: 6.282, nd: 1.7859, elemId: 8, sd: 4.9 },
    { label: "15", R: -12.87, d: 0.9828, nd: 1.84666, elemId: 9, sd: 5.45 },
    { label: "16", R: 66.3624, d: 0.5904, nd: 1.0, elemId: 0, sd: 5.3 },
    { label: "17", R: -45.8982, d: 2.6262, nd: 1.618, elemId: 10, sd: 5.32 },
    { label: "18", R: -13.3974, d: 0.1476, nd: 1.0, elemId: 0, sd: 6.62 },
    { label: "19", R: -104.112, d: 2.8026, nd: 1.618, elemId: 11, sd: 7.6 },
    { label: "20", R: -19.845, d: 36.500171, nd: 1.0, elemId: 0, sd: 8.15 },
  ],

  asph: {},

  /* Production-calibrated close-focus endpoint; total first-surface-to-image track remains constant. */
  var: {
    "4": [6.318, 3.953324],
    "20": [36.500171, 38.864847],
  },
  varLabels: [
    ["4", "FLOAT"],
    ["20", "BF"],
  ],

  groups: [
    { text: "FIXED FRONT", fromSurface: "1", toSurface: "4" },
    { text: "FLOATING REAR", fromSurface: "5", toSurface: "20" },
  ],
  doublets: [
    { text: "D1 (+)", fromSurface: "11", toSurface: "13" },
    { text: "D2 (-)", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 0.25,
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],
  scFill: 0.62,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
