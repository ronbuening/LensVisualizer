import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — RODENSTOCK GRANDAGON-N 90mm f/4.5                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 2444954 A1, Patentanspruch 2.                    ║
 * ║  Eight-element quasi-symmetric wide-angle objective with two       ║
 * ║  cemented triplets around a central aperture stop.                 ║
 * ║  8 elements / 4 groups, all spherical.                            ║
 * ║  Focus: unit displacement by camera bellows; the data model varies ║
 * ║  only the final back-focus gap as a representative bellows travel. ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS DATA:                                               ║
 * ║  The patent tabulates n_e / ν_e. The surface prescription here     ║
 * ║  stores d-line catalog or cross-reference values for the renderer. ║
 * ║  The companion analysis records the native e-line verification.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not publish clear semi-diameters. Values below    ║
 * ║  are conservative renderer-safe estimates constrained by element   ║
 * ║  edge thickness, spherical rim limits, and cross-gap sag clearance.║
 * ║  They should not be read as factory mechanical clear apertures.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "rodenstock-grandagon-n-90mm-f45",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 90mm f/4.5",
  subtitle: "DE 2444954 A1 Claim 2 — f′ = 90 mm",
  specs: ["8 ELEMENTS / 4 GROUPS", "f′ = 90 mm patent example", "F/4.5", "105° published coverage", "ALL-SPHERICAL"],

  focalLengthMarketing: 90,
  focalLengthDesign: 91.27,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  imageFormat: "5x7",
  patentYear: 1976,
  elementCount: 8,
  groupCount: 4,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 105,
    maxTraceFieldDeg: 52.5,
  },
  focusDescription:
    "Unit focus by camera bellows; no internal focus groups. The focus slider varies only the final back-focus gap.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.77,
      fl: -67.78,
      glass: "FK3 (Schott inquiry glass)",
      role: "Front diverging meniscus for wide-angle field bending and Petzval compensation.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.21,
      fl: -117.8,
      glass: "SF5 (Schott)",
      cemented: "T1",
      role: "High-index dense-flint outer element of the front cemented triplet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62229,
      vd: 53.27,
      fl: 18.86,
      glass: "SSK2 / N-SSK2 (Schott)",
      cemented: "T1",
      role: "Strong positive crown element in the front triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56091,
      vd: 46.78,
      fl: -31.96,
      glass: "LLF3 / QF2 class (inferred, d-code 561468)",
      cemented: "T1",
      role: "Inner negative element of the front triplet, adjacent to the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.38,
      fl: -32.52,
      glass: "SK12 / S-BAL42 class (Schott/Ohara equivalent)",
      cemented: "T2",
      role: "Inner negative crown element of the rear cemented triplet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60881,
      vd: 58.86,
      fl: 15.97,
      glass: "SK3 / H-ZK4 class (Schott/CDGM equivalent)",
      cemented: "T2",
      role: "Strong positive element in the rear triplet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.33,
      fl: -59.44,
      glass: "BaF11 / S-BAH11 class (Schott/Ohara equivalent)",
      cemented: "T2",
      role: "High-index outer negative element of the rear triplet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: -60.62,
      glass: "N-FK5 / FK5 (Schott)",
      role: "Rear diverging meniscus and field-flattening outer element.",
    },
  ],

  surfaces: [
    { label: "1", R: 91.73, d: 6.65, nd: 1.4645, elemId: 1, sd: 25.2 },
    { label: "2", R: 22.96, d: 11.9, nd: 1.0, elemId: 0, sd: 20.2 },

    { label: "3", R: 36.52, d: 15.25, nd: 1.6727, elemId: 2, sd: 17.5 },
    { label: "4", R: 20.83, d: 13.8, nd: 1.62229, elemId: 3, sd: 13.0 },
    { label: "5", R: -20.24, d: 1.0, nd: 1.56091, elemId: 4, sd: 13.0 },
    { label: "6", R: 164.89, d: 2.1, nd: 1.0, elemId: 0, sd: 12.2 },

    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 10.63 },

    { label: "7", R: 405.33, d: 1.0, nd: 1.58313, elemId: 5, sd: 12.2 },
    { label: "8", R: 18.17, d: 13.3, nd: 1.60881, elemId: 6, sd: 13.0 },
    { label: "9", R: -15.23, d: 11.25, nd: 1.66672, elemId: 7, sd: 13.0 },
    { label: "10", R: -31.97, d: 11.15, nd: 1.0, elemId: 0, sd: 17.5 },

    { label: "11", R: -23.37, d: 3.85, nd: 1.48749, elemId: 8, sd: 20.2 },
    { label: "12", R: -116.31, d: 63.3142, nd: 1.0, elemId: 0, sd: 25.2 },
  ],

  asph: {},
  var: {
    "12": [63.3142, 72.482],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "10" },
    { text: "G4", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "Front triplet", fromSurface: "3", toSurface: "6" },
    { text: "Rear triplet", fromSurface: "7", toSurface: "10" },
  ],

  closeFocusM: 1.0,
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 45, 64],
  maxFstop: 64,

  scFill: 0.72,
  yScFill: 0.82,
  offAxisFieldFrac: 0.35,
  rayLeadFrac: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
