import type { LensDataInput } from "../../types/optics.js";

/**
 * Schneider Variogon 1.8 / 8-40 — US 3,442,573 Example 1 (Karl Macher / Jos. Schneider & Co.).
 *
 * Source model: 12 refractive lenses plus the published flat reflex prism P. The prism is retained; no source plane is
 * omitted and no dimensional scaling is applied. The patent publishes three zoom spacing states: the two range
 * endpoints
 * and one intermediate state. The intermediate state computes to 20.002420 mm and is retained so the reversal of
 * component III is not erased by endpoint-only interpolation.
 *
 * Stop model: Fig. 1 places diaphragm D inside the published d16 = 3.50 mm air gap after prism P. A measurement of the
 * rendered patent figure places the stop at about 48% of that gap; the model uses 1.70 mm after r16 and 1.80 mm before
 * r17. The stop semi-diameter 5.4131 mm is calibrated from the published f/1.8 target across the three published zoom
 * states. Neither the axial split nor this physical diaphragm diameter is patent-published.
 *
 * Semi-diameters: not published. Values below are modeled from paraxial/exact-meridional ray geometry and the patent
 * section, then constrained by current edge-thickness, rim-slope, and shared-gap intrusion rules. The d10 telephoto gap
 * is the limiting shared-gap geometry; surfaces 10 and 11 use 5.10 mm semi-diameters so the 90% gap-intrusion
 * rule passes.
 * Representative 0.6-field exact-meridional samples therefore vignette one wide-end outer pupil ray at surface 10
 * rather
 * than violating the physical gap. No production render-trim result is claimed here.
 *
 * Figure 1 rim review: surfaces 6/7 enlarged to 11.2/10.2 mm and 8/9 to 8.5 mm.
 * The latter pair remains below the roughly 9.8 mm drawn rim to preserve air-gap clearance.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes zoom motion but no finite-object prescription. The
 * required closeFocusM value is production metadata from a Bauer C2 installation of the Schneider Variogon 1.8/8-40
 * (manual: focusing from 3 ft to infinity); it does not drive any reconstructed internal focus spacing.
 *
 * Glass labels use neutral six-digit/class descriptions because nd/νd coordinate matches do not establish the
 * historical
 * supplier or melt. No catalog line indices or partial-dispersion values are authored.
 */

const LENS_DATA = {
  key: "schneider-variogon-8-40-f18",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH VARIOGON 8-40mm f/1.8",
  subtitle: "US 3,442,573 Example 1 — convergent production correlation; patent attribution not manufacturer-confirmed",
  specs: ["12 LENSES + REFLEX PRISM", "8-40mm f/1.8", "SUPER-8 FRAME 4.22 × 5.69 mm"],

  focalLengthMarketing: [8, 40],
  focalLengthDesign: [8.260539, 39.952456],
  apertureMarketing: 1.8,
  patentNumber: "US 3,442,573",
  patentAuthors: ["Karl Macher"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1969,
  elementCount: 13,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.12,
      indexReference: "d",
      fl: 58.102123,
      glass: "623581 — crown class (supplier unproven)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      fl: -96.510213,
      glass: "805255 — dense-flint class (supplier unproven)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.12,
      indexReference: "d",
      fl: 95.864772,
      glass: "623581 — crown class (supplier unproven)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.52,
      indexReference: "d",
      fl: -26.196275,
      glass: "678555 — lanthanum-crown class (supplier unproven)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      fl: 46.934173,
      glass: "805255 — dense-flint class (supplier unproven)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconcave Negative",
      nd: 1.4645,
      vd: 65.79,
      indexReference: "d",
      fl: -24.53665,
      glass: "464658 — FK3 / fluor-crown class (exact vintage supplier unproven)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: -34.094123,
      glass: "620603 — crown class (supplier unproven)",
    },
    {
      id: 8,
      name: "L8",
      label: "L8",
      type: "Biconvex Positive",
      nd: 1.6223,
      vd: 53.14,
      indexReference: "d",
      fl: 25.133676,
      glass: "S-BSM22 — coordinate-compatible spectral proxy (supplier unproven)",
    },
    {
      id: 9,
      name: "P",
      label: "Reflex prism P",
      type: "Plane-Parallel Prism",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "517642 — BK7-class crown (supplier unproven)",
    },
    {
      id: 10,
      name: "L9",
      label: "L9",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.52,
      indexReference: "d",
      fl: 34.962035,
      glass: "678555 — lanthanum-crown class (supplier unproven)",
    },
    {
      id: 11,
      name: "L10",
      label: "L10",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 24.168199,
      glass: "744449 — lanthanum-flint class (supplier unproven)",
    },
    {
      id: 12,
      name: "L11",
      label: "L11",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      fl: -7.762748,
      glass: "785261 — dense-flint class (supplier unproven)",
    },
    {
      id: 13,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      fl: 10.59022,
      glass: "713539 — lanthanum-crown class (supplier unproven)",
    },
  ],

  surfaces: [
    { label: "1", R: 60.03, d: 7.5, nd: 1.62299, elemId: 1, sd: 20.5 },
    { label: "2", R: -86.8, d: 2.0, nd: 1.80518, elemId: 2, sd: 20.5 },
    { label: "3", R: 749.5, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "4", R: 51.43, d: 4.3, nd: 1.62299, elemId: 3, sd: 18.8 },
    { label: "5", R: 358.5, d: 0.47, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "6", R: 200.4, d: 1.0, nd: 1.6779, elemId: 4, sd: 11.2 },
    { label: "7", R: 16.28, d: 4.6, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "8", R: -25.0, d: 2.1, nd: 1.80518, elemId: 5, sd: 8.5 },
    { label: "9", R: -15.61, d: 1.0, nd: 1.4645, elemId: 6, sd: 8.5 },
    { label: "10", R: 43.09, d: 27.74, nd: 1.0, elemId: 0, sd: 5.1 },
    { label: "11", R: -10.84, d: 1.0, nd: 1.62041, elemId: 7, sd: 5.1 },
    { label: "12", R: -23.02, d: 1.69, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "13", R: 64.68, d: 2.2, nd: 1.6223, elemId: 8, sd: 7.0 },
    { label: "14", R: -20.36, d: 1.0, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "15", R: 1e15, d: 9.0, nd: 1.5168, elemId: 9, sd: 6.8 },
    { label: "16", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "STO", R: 1e15, d: 1.8, nd: 1.0, elemId: 0, sd: 5.4131 },
    { label: "17", R: 21.71, d: 2.55, nd: 1.6779, elemId: 10, sd: 6.0 },
    { label: "18", R: 246.2, d: 0.05, nd: 1.0, elemId: 0, sd: 5.9 },
    { label: "19", R: 15.3, d: 1.8, nd: 1.744, elemId: 11, sd: 5.9 },
    { label: "20", R: 97.46, d: 1.4, nd: 1.0, elemId: 0, sd: 5.7 },
    { label: "21", R: -24.5, d: 4.9, nd: 1.7847, elemId: 12, sd: 5.5 },
    { label: "22", R: 8.82, d: 2.25, nd: 1.0, elemId: 0, sd: 5.1 },
    { label: "23", R: 16.77, d: 2.45, nd: 1.713, elemId: 13, sd: 5.7 },
    { label: "24", R: -12.9, d: 13.1, nd: 1.0, elemId: 0, sd: 5.7 },
  ],

  asph: {},

  var: {
    "5": [
      [0.47, 0.47],
      [18.13, 18.13],
      [27.28, 27.28],
    ],
    "10": [
      [27.74, 27.74],
      [8.34, 8.34],
      [1.78, 1.78],
    ],
    "12": [
      [1.69, 1.69],
      [3.43, 3.43],
      [0.84, 0.84],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["12", "D12"],
  ],

  zoomPositions: [8.260539, 20.00242, 39.952456],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "10" },
    { text: "III", fromSurface: "11", toSurface: "12" },
    { text: "IV", fromSurface: "13", toSurface: "14" },
    { text: "V", fromSurface: "15", toSurface: "16" },
    { text: "VI", fromSurface: "17", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 0.9144,
  focusDescription: "NO_INTERNAL_RECONSTRUCTION: published zoom only; Bauer C2 MFD metadata; no focus spacing model.",

  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
