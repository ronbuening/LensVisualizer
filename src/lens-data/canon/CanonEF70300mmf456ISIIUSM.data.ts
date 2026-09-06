import type { LensDataInput } from "../../types/optics.js";

/**
 * Canon EF 70-300mm f/4-5.6 IS II USM
 * US 2017/0003486 A1, Example 5 (Suguru Inoue / Canon Inc.).
 *
 * Prescription authority: patent Example 5 at the published 72 / 144 / 290 mm infinity-focus states.
 * Production identity/marketing fields are kept separate from the unscaled patent design (s = 1.0).
 *
 * Stage-1 focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes no close-focus spacing table.
 * Close focus is modeled at Canon's 1.2 m production MFD by translating only L5 imageward, as required by the
 * patent mechanism, while conserving D25 + D28 at each zoom position. The code-solved L5 travels are
 * +2.2879680061 / +4.4962016311 / +12.9304556053 mm at 72 / 144 / 290 mm respectively.
 *
 * Zoom-only variable gaps: D5, D13, D19. Zoom + focus gaps: D25, D28. No axial group reversal occurs across
 * the three published zoom states.
 *
 * Source surface 31 is the optically neutral flare-cut stop plane inferred from Fig. 9. It is omitted from this
 * ordinary sequential model. Its incoming 0.20 mm air space is folded into the published 37.80 mm BF, so the
 * last refracting surface (30) has d = 38.00 mm to the image plane.
 *
 * Semi-diameters are one-half of the patent's published "Effective diameter" values. At STO this value is kept
 * as the source-backed geometric aperture proxy; it is not treated as the exact wide-open iris diameter because
 * the patent f-numbers imply a slightly smaller stop. nominalFno therefore controls wide-open stop/pupil geometry.
 * Surface 10 is the one SD refinement: the patent effective-diameter proxy (11.575 mm semi-diameter) would make
 * the 0.6-field wide-open bundle clip at the E6/E7 cemented interface. Its render/trace SD is therefore 12.15 mm,
 * derived from the verified off-axis ray envelope so clipping moves to an external element/air boundary.
 *
 * The patent publishes nd and vd only. Glass labels select representative OHARA spectral proxies at
 * the patent's published precision; they do not establish Canon's actual melt vendor, and rounded coordinates do
 * not always distinguish same-family catalog variants. No measured line indices or dPgF are authored;
 * wavelength-dependent analysis uses the qualified catalog curves.
 *
 * Manufacturer identity sources:
 *   https://global.canon/en/c-museum/product/ef459.html
 *   https://www.usa.canon.com/shop/p/ef-70-300mm-f-4-5-6-is-ii-usm
 */
const LENS_DATA = {
  key: "canon-ef-70-300mm-f4-56-is-ii-usm",
  name: "CANON EF 70-300mm f/4-5.6 IS II USM",
  maker: "Canon",
  subtitle: "US 2017/0003486 A1 — Example 5; production correlation to Canon EF 70-300mm f/4-5.6 IS II USM",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "70-300mm f/4-5.6 (marketed)",
    "72-290mm f/4.16-5.83 (patent design)",
    "1.2 m MFD / 0.25x max. magnification (production)",
    "NANO USM / OPTICAL IS (production)",
  ],
  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72, 290],
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2017/0003486 A1",
  patentAuthors: ["Suguru Inoue"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2017,
  elementCount: 17,
  groupCount: 12,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 222.950214,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -173.218205,
      glass: "S-LAH60 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 141.266842,
      glass: "S-FPL51 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      apd: "inferred",
      apdNote: "UD-class assignment inferred from the patent 1.49700/81.5 coordinate and Canon production UD count; neither the production element number nor supplier is confirmed.",
      cemented: "J1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.8,
      fl: 86.320568,
      glass: "S-TIL6 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J2",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 58.9,
      fl: -96.486081,
      glass: "S-NSL3 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J2",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -29.332172,
      glass: "S-LAH66 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J3",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 47.817707,
      glass: "S-NBH56 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J3",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -69.039298,
      glass: "S-LAH66 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.66672,
      vd: 48.3,
      fl: 64.838308,
      glass: "S-BAH11 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 58.22117,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J4",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -63.135105,
      glass: "S-LAH99 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J4",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -80.281727,
      glass: "S-LAH99 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 86.429845,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      fl: 55.890711,
      glass: "S-LAL12 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.8,
      fl: 107.590019,
      glass: "S-NPH1 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J5",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.4,
      fl: -43.30251,
      glass: "S-NSL36 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
      cemented: "J5",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -223.758132,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; production supplier unspecified)",
    },
  ],

  surfaces: [
    { label: "1", R: 108.686, d: 5.15, nd: 1.48749, elemId: 1, sd: 26 },
    { label: "2", R: 1e15, d: 0.15, nd: 1, elemId: 0, sd: 25.74 },
    { label: "3", R: 117.701, d: 2.1, nd: 1.834, elemId: 2, sd: 25.185 },
    { label: "4", R: 64.332, d: 7, nd: 1.497, elemId: 3, sd: 24.33 },
    { label: "5", R: 740.701, d: 1.99, nd: 1, elemId: 0, sd: 23.91 },
    { label: "6", R: -866.644, d: 4.65, nd: 1.53172, elemId: 4, sd: 16.48 },
    { label: "7", R: -43.671, d: 1.65, nd: 1.51823, elemId: 5, sd: 15.985 },
    { label: "8", R: -349.361, d: 4.88, nd: 1, elemId: 0, sd: 14.74 },
    { label: "9", R: -163.831, d: 1.1, nd: 1.7725, elemId: 6, sd: 12.425 },
    { label: "10", R: 26.373, d: 3.2, nd: 1.85478, elemId: 7, sd: 12.15 },
    { label: "11", R: 70.182, d: 2.33, nd: 1, elemId: 0, sd: 11.465 },
    { label: "12", R: -59.794, d: 1.05, nd: 1.7725, elemId: 8, sd: 11.465 },
    { label: "13", R: 497.341, d: 29.22, nd: 1, elemId: 0, sd: 11.66 },
    { label: "STO", R: 1e15, d: 0.98, nd: 1, elemId: 0, sd: 12.22 },
    { label: "15", R: 85.803, d: 3.25, nd: 1.66672, elemId: 9, sd: 12.515 },
    { label: "16", R: -85.803, d: 0.15, nd: 1, elemId: 0, sd: 12.56 },
    { label: "17", R: 55.992, d: 4.65, nd: 1.48749, elemId: 10, sd: 12.45 },
    { label: "18", R: -55.992, d: 1.25, nd: 2.001, elemId: 11, sd: 12.255 },
    { label: "19", R: -496.53, d: 37.95, nd: 1, elemId: 0, sd: 12.3 },
    { label: "20", R: 111.592, d: 1.3, nd: 2.001, elemId: 12, sd: 12.945 },
    { label: "21", R: 46.446, d: 1.28, nd: 1, elemId: 0, sd: 12.84 },
    { label: "22", R: 122.313, d: 3.9, nd: 1.48749, elemId: 13, sd: 12.87 },
    { label: "23", R: -63.603, d: 0.15, nd: 1, elemId: 0, sd: 13.06 },
    { label: "24", R: 40.018, d: 4.1, nd: 1.6779, elemId: 14, sd: 13.8 },
    { label: "25", R: -682.473, d: 11.85, nd: 1, elemId: 0, sd: 13.755 },
    { label: "26", R: -129.824, d: 2.5, nd: 1.80809, elemId: 15, sd: 13.085 },
    { label: "27", R: -52.519, d: 1.15, nd: 1.51742, elemId: 16, sd: 13.105 },
    { label: "28", R: 39.368, d: 9.52, nd: 1, elemId: 0, sd: 12.93 },
    { label: "29", R: -54.446, d: 1.55, nd: 1.48749, elemId: 17, sd: 15.51 },
    { label: "30", R: -109.719, d: 38, nd: 1, elemId: 0, sd: 15.9 },
  ],

  asph: {},

  zoomPositions: [72, 144, 290],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [1.99, 1.99],
      [41.81, 41.81],
      [71.99, 71.99],
    ],
    "13": [
      [29.22, 29.22],
      [17.55, 17.55],
      [2.44, 2.44],
    ],
    "19": [
      [37.95, 37.95],
      [25.64, 25.64],
      [22.47, 22.47],
    ],
    "25": [
      [11.85, 14.13796800614547],
      [5.73, 10.226201631078213],
      [2.42, 15.350455605329335],
    ],
    "28": [
      [9.52, 7.232031993854528],
      [39.63, 35.13379836892179],
      [61.21, 48.279544394670665],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["19", "D19"],
    ["25", "D25"],
    ["28", "D28"],
  ],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2a (+)", fromSurface: "6", toSurface: "8" },
    { text: "L2b (-)", fromSurface: "9", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "19" },
    { text: "L4 (+)", fromSurface: "20", toSurface: "25" },
    { text: "L5 (- / FOCUS)", fromSurface: "26", toSurface: "28" },
    { text: "L6 (-)", fromSurface: "29", toSurface: "30" },
  ],
  doublets: [],

  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes infinity-focus zoom states only. Close focus at 1.2 m is a code-solved L5-only imageward translation constrained to conserve D25 + D28 at each zoom position; L5 travel is +2.287968 / +4.496202 / +12.930456 mm at 72 / 144 / 290 mm.",
  closeFocusM: 1.2,
  nominalFno: [4.16, 5.06, 5.83],
  fstopSeries: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
