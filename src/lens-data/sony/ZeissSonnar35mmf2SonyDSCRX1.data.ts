// Root-level draft import. generate:metadata rewrites this import after organizing the lens by maker.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ZEISS SONNAR T* 35mm f/2 (Sony DSC-RX1 family)
 *
 * Data source: US 2014/0071333 A1, Numerical Example 4 (Sony Corporation; Kanetaka / Uno).
 * Production mapping: strong RX1-family correlation, but Sony does not explicitly identify this patent/example
 * as the production prescription; exact RX1R III formula continuity remains inferential.
 * 8 elements / 7 air-separated physical groups / 4 functional groups, with 5 aspherical surfaces.
 * Focus: PUBLISHED double-floating focus. GR2 and GR3 move independently objectward; the stop travels with GR2;
 * GR1 and GR4 remain fixed. All three published D2/D7/D12 states are preserved.
 *
 * No uniform scale is applied. Marketing 35 mm f/2 and exact design/model quantities remain separate.
 * Rear source planes 17-21 are represented as three rearPlates, preserving the physical plate stack.
 * Source R=0 flats are normalized to R=1e15. Source surfaces 5, 6, 10, 13, and 14 receive A suffixes.
 *
 * STOP NOTE: the patent publishes F-number but no physical iris diameter. STO sd=7.6620220724 mm is an inferred
 * physical stop radius calibrated paraxially to the published infinity F/2.05. With that fixed radius, the
 * published intermediate and shortest states independently predict F/2.1039 and F/2.1844 versus F/2.10/F/2.18.
 * Agreement at infinity is calibration, not independent evidence of a published stop diameter.
 *
 * SEMI-DIAMETER NOTE: lens SDs are modeled, not patent-published. They come from exact meridional spherical/
 * aspherical ray bundles spanning the published field and physical stop at all three published focus states,
 * plus representative focusT=0.25 and 0.75 states. A nominal 10% mechanical ray-envelope allowance was used where
 * geometry allowed; G3 is geometry-limited to 11.6 mm while retaining positive edge thickness. FIG. 13 was used as
 * a qualitative section-shape cross-check, not as a dimensional source. Production render-trim validation remains
 * an integration check because the LensVisualizer repository/runtime is not mounted here.
 *
 * FOCUS-POSITION NOTE: focusPositions[1]=0.4657219849 is a model coordinate, not a patent-published actuator
 * position. It is derived from closeFocusM=0.30 m and the verified 0.64416113 m paraxial object-to-image conjugate
 * of the published intermediate spacing state. The source spacings themselves are unmodified.
 */

const LENS_DATA = {
  key: "zeiss-sonnar-35f2-sony-rx1",
  maker: "Sony",
  name: "SONY ZEISS SONNAR T* 35mm f/2 (Sony DSC-RX1 family)",
  subtitle: "US 2014/0071333 A1, Numerical Example 4 — RX1-family correlation (inferred)",
  specs: [
    "8 ELEMENTS / 7 GROUPS",
    "4 FUNCTIONAL GROUPS",
    "f ≈ 34.03 mm",
    "F/2.05 DESIGN",
    "2ω = 64.96°",
    "5 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.0261939353,
  apertureMarketing: 2,
  apertureDesign: 2.05,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2014/0071333 A1",
  patentAuthors: ["Fumikazu Kanetaka", "Hisashi Uno"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2014,
  elementCount: 8,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "G1",
      diagramLabel: "G1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: -292.0649978284,
      glass: "517-642 / BSC7 class (supplier unconfirmed)",
      apd: false,
      role: "Fixed front negative meniscus of GR1.",
    },
    {
      id: 2,
      name: "G2",
      diagramLabel: "G2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.8052,
      vd: 25.46,
      indexReference: "d",
      fl: -69.7054182935,
      glass: "805-255 / FD60 class (supplier unconfirmed)",
      apd: false,
      role: "Negative element of moving positive functional group GR2.",
    },
    {
      id: 3,
      name: "G3",
      diagramLabel: "G3",
      label: "Element 3",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.882,
      vd: 37.22,
      indexReference: "d",
      fl: 23.0930818466,
      glass: "882-372 / M-TAFD307 class (supplier unconfirmed)",
      apd: false,
      role: "Strong aspherical positive element completing moving group GR2.",
    },
    {
      id: 4,
      name: "G4",
      diagramLabel: "G4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      fl: -12.8066352754,
      glass: "923-209 / E-FDS1 class (supplier unconfirmed)",
      apd: false,
      role: "Negative member of the cemented G4-G5 pair in moving group GR3.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "G5",
      diagramLabel: "G5",
      label: "Element 5",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.882,
      vd: 37.22,
      indexReference: "d",
      fl: 23.062663096,
      glass: "882-372 / M-TAFD307 class (supplier unconfirmed)",
      apd: false,
      role: "Positive aspherical member cemented to G4 in moving group GR3.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "G6",
      diagramLabel: "G6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      fl: 23.5586271679,
      glass: "001-291 / TAFD55-W / S-LAH99 class (supplier unconfirmed)",
      apd: false,
      role: "High-index positive rear element of moving functional group GR3.",
    },
    {
      id: 7,
      name: "G7",
      diagramLabel: "G7",
      label: "Element 7",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.5831,
      vd: 59.46,
      indexReference: "d",
      fl: -29.4166666431,
      glass: "583-595 / M-BACD12 class (supplier unconfirmed)",
      apd: false,
      role: "Fixed aspherical negative element of the rearmost negative functional group GR4.",
    },
    {
      id: 8,
      name: "G8",
      diagramLabel: "G8",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.9037,
      vd: 31.31,
      indexReference: "d",
      fl: 103.1780458117,
      glass: "904-313 lanthanum-flint class (TAFD25L / S-LAH95 near match; supplier unconfirmed)",
      apd: false,
      role: "Fixed weak positive element completing GR4 immediately ahead of the rear plate stack.",
    },
  ],

  surfaces: [
    { label: "1", R: 159.6, d: 1.5, nd: 1.5168, elemId: 1, sd: 17.5 },
    { label: "2", R: 77.326, d: 7.33, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "3", R: -69.425, d: 1.0, nd: 1.8052, elemId: 2, sd: 13.6 },
    { label: "4", R: 294.9, d: 0.3, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "5A", R: 21.781, d: 3.58, nd: 1.882, elemId: 3, sd: 11.6 },
    { label: "6A", R: -289.804, d: 2.5, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "STO", R: 1e15, d: 7.86, nd: 1.0, elemId: 0, sd: 7.6620220724 },
    { label: "8", R: -18.224, d: 1.0, nd: 1.9229, elemId: 4, sd: 12.8 },
    { label: "9", R: 34.516, d: 4.05, nd: 1.882, elemId: 5, sd: 12.8 },
    { label: "10A", R: -46.808, d: 0.3, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "11", R: 192.783, d: 5.65, nd: 2.001, elemId: 6, sd: 15.2 },
    { label: "12", R: -26.475, d: 14.6, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "13A", R: -17.604, d: 1.5, nd: 1.5831, elemId: 7, sd: 18.3 },
    { label: "14A", R: 690.328, d: 0.3, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "15", R: 93.242, d: 3.48, nd: 1.9037, elemId: 8, sd: 21.5 },
    { label: "16", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 21.5 },
  ],

  rearPlates: [
    {
      label: "FL1",
      glass: "Unmatched (source plate; 1.549 / 64.2; supplier unconfirmed)",
      thicknessMm: 1.43,
      nd: 1.549,
      vd: 64.2,
      gapAfterMm: 0.0,
      source: "US 2014/0071333 A1, Example 4, Table 13 source surfaces 17-18",
    },
    {
      label: "FL2",
      glass: "BK7G18 class (Schott spectral proxy; supplier unconfirmed)",
      thicknessMm: 0.59,
      nd: 1.519,
      vd: 64.2,
      gapAfterMm: 0.42,
      source: "US 2014/0071333 A1, Example 4, Table 13 source surfaces 18-20",
    },
    {
      label: "FL3",
      glass: "N-BK7 class (Schott spectral proxy; supplier unconfirmed)",
      thicknessMm: 0.7,
      nd: 1.5168,
      vd: 64.2,
      gapAfterMm: 0.92,
      source: "US 2014/0071333 A1, Example 4, Table 13 source surfaces 20-21 to image plane",
    },
  ],

  asph: {
    "5A": {
      K: 0.31491,
      A4: -2.2869e-6,
      A6: -2.3122e-9,
      A8: 5.0257e-10,
      A10: -4.1528e-12,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: 1.1201e-5,
      A6: -1.2788e-8,
      A8: 4.7065e-10,
      A10: -4.6757e-12,
      A12: 0,
      A14: 0,
    },
    "10A": {
      K: -0.25312,
      A4: -5.1489e-6,
      A6: 1.8946e-7,
      A8: -5.4584e-10,
      A10: 1.6124e-12,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -1.1868,
      A4: 2.5789e-5,
      A6: -2.4014e-7,
      A8: 7.2212e-10,
      A10: -6.0888e-13,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 2.051e-5,
      A6: -1.2562e-7,
      A8: 2.2322e-10,
      A10: -1.1277e-13,
      A12: 0,
      A14: 0,
    },
  },

  focusPositions: [0, 0.4657219849, 1],
  var: {
    "2": [7.33, 6.04, 4.08],
    STO: [7.86, 7.56, 7.11],
    "12": [14.6, 16.19, 18.6],
  },
  varLabels: [
    ["2", "D2"],
    ["STO", "D7"],
    ["12", "D12"],
  ],

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "2" },
    { text: "GR2", fromSurface: "3", toSurface: "6A" },
    { text: "GR3", fromSurface: "8", toSurface: "12" },
    { text: "GR4", fromSurface: "13A", toSurface: "16" },
  ],
  doublets: [{ text: "D1", fromSurface: "8", toSurface: "10A" }],

  closeFocusM: 0.3,
  // Every focus keyframe is a source row.
  publishedStations: { focus: [1, 2] },
  focusDescription:
    "Published double-floating focus: GR2 (with STO) and GR3 move independently objectward while GR1 and GR4 remain fixed; infinity, intermediate, and shortest source states are preserved.",

  nominalFno: 2.05,
  fstopSeries: [2.05, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
