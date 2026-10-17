import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CN118584637A Example 1; native millimetres/d-line indices, no scaling.
 * Product association is construction-based, not a manufacturer-confirmed exact prescription.
 * PUBLISHED infinity/0.5x/1.0x are source labels; finite paraxial magnification differs.
 * All native spacings retained; derived endpoint conjugate is separate from marketed MFD.
 * Physical rims are inferred, not source measurements. The stop radius is derived from the design f-number, f/2.87.
 * Semi-diameters are estimated from Figure 1 (0.121 mm/px at 300 dpi) and floor-checked by real-ray trace at
 * all three keyframes. Figure 1 draws L1 and L10 square-cut, so both faces of each carry the drawn outer
 * height (35 / 16 mm); L10's flat mounting annulus begins at about 12.2 mm, so its modeled rim is thicker than
 * drawn. L12's concave front stops at 18.9 mm, where the figure's flat annulus begins, which keeps its rim near the
 * drawn thickness and renders the step as a chamfer. L13 is 24 mm (drawn about 1.2 mm taller than L12).
 * Surface 3 stays at 30.197 mm although the figure draws L2 square-cut at about 34.5 mm: prescription faces 2 and 3
 * meet at 32.2 mm and the default cross-gap policy admits 30.5 mm.
 * 67 mm is published coverage; exact edge transmission is not certified.
 * No aspheres or cover plate. The patent gives no noncoaxial prescription or hinge; perspectiveControl
 * uses Laowa's published shift/tilt ranges with a rear-vertex fallback pivot.
 * Planes use 1e15. R22 retains literal 0.0000 in source evidence; Figure1 and first order justify the explicit plane convention.
 * Only three authored keyframes are source states; interpolation/distance labels are estimates.
 */

const LENS_DATA = {
  schema: 2,
  key: "laowa-100mm-f28-tilt-shift-1x-macro",
  maker: "Laowa",
  name: "LAOWA 100mm f/2.8 Tilt-Shift 1× Macro",
  subtitle: "CN 118584637 A, Example 1 — construction-based product association; coaxial patent states",

  catalog: {
    lensMounts: ["sony-fe", "canon-rf", "nikon-z", "l-mount", "fujifilm-g", "hasselblad-xcd"],
    imageFormat: "135-full-frame",
    imageCircleMm: 67,
    specs: [
      "13 ELEMENTS / 10 GROUPS",
      "DESIGN f = 101.99 mm",
      "DESIGN F/2.87",
      "67 mm IMAGE CIRCLE",
      "SHIFT ±12 mm / TILT ±10°",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: 100, design: 101.9933 },
    fNumber: { marketing: 2.8, design: 2.87 },
  },

  source: {
    patentNumber: "CN 118584637 A",
    patentYear: 2024,
    authors: ["Dayong Li"],
    assignees: ["Anhui Changgeng Optics Technology Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.53031,
      vd: 67.42,
      indexReference: "d",
      focalLengthMm: -395.02051423442265,
      glass: "Unmatched (native nd=1.53031, vd=67.42; supplier unconfirmed)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8751,
      vd: 45.25,
      indexReference: "d",
      focalLengthMm: 356.8158527823303,
      glass: "Unmatched (native nd=1.87510, vd=45.25; supplier unconfirmed)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.89141,
      vd: 33.77,
      indexReference: "d",
      focalLengthMm: 59.64140196534804,
      glass: "Unmatched (native nd=1.89141, vd=33.77; supplier unconfirmed)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.78737,
      vd: 23.92,
      indexReference: "d",
      focalLengthMm: -27.76533464639603,
      glass: "Unmatched (native nd=1.78737, vd=23.92; supplier unconfirmed)",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 24.547727131410593,
      glass: "E-FDS1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.91392,
      vd: 23.35,
      indexReference: "d",
      focalLengthMm: -24.172157010124067,
      glass: "Unmatched (native nd=1.91392, vd=23.35; supplier unconfirmed)",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 45.818330889507834,
      glass: "FCD1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class inferred from nd=1.49700 and νd=81.61; Laowa markets two ED elements. The patent publishes no partial-dispersion data.",
      diagramLabel: "L7",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.15,
      indexReference: "d",
      focalLengthMm: 84.36477713341789,
      glass: "TAFD33 (HOYA, coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.88564,
      vd: 21.55,
      indexReference: "d",
      focalLengthMm: -69.21717873930125,
      glass: "Unmatched (native nd=1.88564, vd=21.55; supplier unconfirmed)",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      indexReference: "d",
      focalLengthMm: -36.148975419961516,
      glass: "E-FD8 (HOYA, coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.90326,
      vd: 27.29,
      indexReference: "d",
      focalLengthMm: 31.521008241786298,
      glass: "Unmatched (native nd=1.90326, vd=27.29; supplier unconfirmed)",
      diagramLabel: "L11",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Concave",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: -65.84889336016094,
      glass: "FCD1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class inferred from nd=1.49700 and νd=81.61; Laowa markets two ED elements. The patent publishes no partial-dispersion data.",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.87156,
      vd: 41.46,
      indexReference: "d",
      focalLengthMm: 68.25456716098005,
      glass: "Unmatched (native nd=1.87156, vd=41.46; supplier unconfirmed)",
      diagramLabel: "L13",
    },
  ],

  surfaces: [
    { label: "1", R: -419.2264, d: 1.5, sd: 35, medium: 1 },
    { label: "2", R: 419.2264, d: 1.7626, sd: 35 },
    { label: "3", R: -988.9355, d: 4.5, sd: 30.197, medium: 2 },
    { label: "4", R: -237.822, sd: 35 },
    { label: "5", R: 49.5786, d: 4.7304, sd: 19, medium: 3 },
    { label: "6", R: 701.9177, d: 6.8233, sd: 19 },
    { label: "7", R: -74.359, d: 1.0, sd: 17, medium: 4 },
    { label: "8", R: 31.1489, d: 6.8677, sd: 16.645, medium: 5 },
    { label: "9", R: -74.2786, d: 0.9579, sd: 16.645 },
    { label: "10", R: -91.0272, d: 4.9298, sd: 15.5, medium: 6 },
    { label: "11", R: 29.9253, d: 5.3509, sd: 14.863, medium: 7 },
    { label: "12", R: -89.6049, d: 0.15, sd: 14.863 },
    { label: "13", R: 96.4295, d: 2.6436, sd: 14, medium: 8 },
    { label: "14", R: -320.0818, d: 0.85, sd: 14 },
    { label: "STO", R: "flat" },
    { label: "16", R: 131.5759, d: 1.0, sd: 12, medium: 9 },
    { label: "17", R: 41.669, d: 9.7523, sd: 12 },
    { label: "18", R: -38.7618, d: 1.0, sd: 16, medium: 10 },
    { label: "19", R: 70.3932, d: 9.0476, sd: 16, medium: 11 },
    { label: "20", R: -44.8924, d: 16.6161, sd: 16 },
    { label: "21", R: -32.7269, d: 1.0, sd: 18.9, medium: 12 },
    { label: "22", R: "flat", d: 0.15, sd: 23 },
    { label: "23", R: 218.2766, d: 5.9427, sd: 24, medium: 13 },
    { label: "24", R: -80.7375, sd: 24 },
  ],

  focus: {
    closeFocusM: 0.3369669890357154,
    keyframes: [0, 0.8118878142481926, 1],
    description:
      "PUBLISHED coaxial spacings at infinity, source 0.5x and source 1.0x labels. G1 fixed; G2/G3 independently move objectward. Source labels retained; Gaussian endpoint magnification -0.956664. closeFocusM is the calculated source-endpoint object-to-image distance, not marketed MFD. Intermediate focusT is the derived endpoint/intermediate object-to-image distance ratio; interpolated gaps and distance labels do not certify focus. No noncoaxial prescription or mechanical hinge is supplied.",
    published: [1, 2],
  },

  gaps: {
    "4": { label: "D12", values: [[49.302, 22.8415, 1.0]] },
    STO: { label: "D15", values: [[1.9, 15.0845, 27.2633]] },
    "24": { label: "BF", values: [[40.3171, 53.5931, 63.2558]] },
  },

  aperture: { nominalFNumber: 2.87, fStops: [2.87, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 15 },

  perspectiveControl: {
    // Official Laowa specification (full-frame mounts): shift ±12 mm, tilt ±10°.
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-10, 10],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
    // The patent and Laowa publish no hinge location. The pivot is the infinity-state rear
    // vertex (source back focus 40.3171 mm): a deterministic tracing reference, not the
    // manufactured tilt axis.
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -40.3171 },
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "5", toSurface: "14" },
    { text: "G3", fromSurface: "16", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  layout: { scFill: 0.75, yScFill: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
