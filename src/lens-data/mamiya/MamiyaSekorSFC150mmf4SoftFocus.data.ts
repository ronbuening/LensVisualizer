import type { LensDataInput } from "../../types/optics.js";

/**
 * Data source: JPS52-141223A, Example 1 (Yusuke Nanjo / Mamiya Koki Co., Ltd.).
 * Five all-spherical elements in three air-separated groups; the stop lies inside patent gap d5.
 *
 * Scaling: The patent is normalized to f = 1.0. Every radius, thickness, stop position,
 * semi-diameter, and image spacing is scaled uniformly by s = 150.0. No aspherical coefficients
 * are present.
 *
 * Focus status — CONSTRAINED_RECONSTRUCTION: The RB67 body focuses by moving the complete lens
 * on its bellows. Internal optical spacings remain fixed; only the final image spacing varies.
 * The close state solves the exact paraxial imaging condition for the published 0.856 m MFD.
 *
 * Stop: The patent figure places the stop in the r5-r6 air gap but gives no numerical split.
 * The model uses the disclosed midpoint inference and conserves the published total d5 spacing.
 * Stop SD is solved from the modeled EFL and the published f/4 aperture ratio.
 *
 * Semi-diameters: The patent publishes none. SDs are constrained by the f/4 pupil, the Figure 3
 * section, positive edge thickness, actual spherical rim slope, cross-gap clearance, and exact
 * spherical meridional traces for the default and published-field ray samples. The full-field,
 * full-pupil bundle is intentionally vignetted by the steep r7 region and finite front doublet.
 *
 * Glass: The patent gives d-line nd/νd only and names no vendor. Six-digit coordinate classes are
 * retained without asserting a melt. nC, nF, ng, and dPgF are omitted because the source does not
 * publish them and vendor-specific line data are not defensible.
 *
 * The three removable softness-control discs are non-refracting pupil masks mounted ahead of the
 * cell. They are not prescription surfaces and are excluded from this sequential model.
 */

const LENS_DATA = {
  key: "mamiya-sekor-sfc-150f4-soft-focus",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR SFC 150mm f/4 SOFT FOCUS",
  subtitle: "JPS52-141223A Example 1 — production-correlated RB67 prescription",
  specs: [
    "5 ELEMENTS / 3 GROUPS",
    "f = 150.026 mm (MODELED)",
    "F/4",
    "2ω = 33°",
    "ALL-SPHERICAL",
    "EXTERNAL BELLOWS FOCUS",
  ],

  focalLengthMarketing: 150,
  focalLengthDesign: 150.02642952658826,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["mamiya-rb67"],
  imageFormat: "6x7",
  patentNumber: "JPS52-141223A",
  patentAuthors: ["Yusuke Nanjo"],
  patentAssignees: ["Mamiya Koki Co., Ltd."],
  patentYear: 1977,
  elementCount: 5,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.3,
      fl: 39.44652153862821,
      glass: "694533 class (vendor unspecified)",
      apd: false,
      role: "Front positive component of the cemented collector doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      fl: -68.91733526017431,
      glass: "603607 class (vendor unspecified)",
      apd: false,
      role: "Negative achromatizing component of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -45.3524096595212,
      glass: "673321 class (vendor unspecified)",
      apd: false,
      role: "Central negative singlet that separates the positive front and rear groups.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.5,
      fl: 22.470292522071837,
      glass: "734515 class (vendor unspecified)",
      apd: false,
      role: "Strong positive component of the rear doublet adjacent to the aperture stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.2,
      fl: -31.64462731164338,
      glass: "720502 class (vendor unspecified)",
      apd: false,
      role:
        "Rear negative meniscus; its strongly curved cemented front interface generates " +
        "the intended zonal spherical aberration.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 51.72, d: 13.815, nd: 1.6935, elemId: 1, sd: 24.5 },
    { label: "2", R: -51.72, d: 4.935, nd: 1.60311, elemId: 2, sd: 24.5 },
    { label: "3", R: 219.285, d: 6.465, nd: 1, elemId: 0, sd: 22.5 },
    { label: "4", R: -82.2, d: 2.76, nd: 1.6727, elemId: 3, sd: 18 },
    { label: "5", R: 49.17, d: 5.6625, nd: 1, elemId: 0, sd: 16.5 },
    // Stop position inferred as the midpoint of patent gap d5 in Fig. 3.
    { label: "STO", R: 1e15, d: 5.6625, nd: 1, elemId: 0, sd: 14.520521959323112 },
    { label: "6", R: 186.915, d: 14.265, nd: 1.734, elemId: 4, sd: 16.5 },
    { label: "7", R: -17.505, d: 5.325, nd: 1.72, elemId: 5, sd: 15.4 },
    { label: "8", R: -85.17, d: 120.47128200216788, nd: 1, elemId: 0, sd: 18.5 },
  ],

  asph: {},

  var: {
    "8": [120.47128200216788, 164.75508166035587],
  },

  varLabels: [["8", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.856,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: external unit focus on the RB67 bellows. All internal gaps " +
    "remain fixed; BF changes from 120.471282 mm at infinity to 164.755082 mm at the published " +
    "0.856 m object-to-film distance, giving 0.295173× paraxial magnification.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
