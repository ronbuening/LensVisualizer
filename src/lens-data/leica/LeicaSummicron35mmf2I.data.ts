import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — LEICA SUMMICRON 35mm f/2 I
 *
 * Source: US 3,006,249, Example II, Walter Mandler / Ernst Leitz Canada Limited.
 * Production match: strong convergent correlation to the first 8-element 35 mm Summicron, but no located
 * manufacturer source explicitly assigns Example II to the production lens.
 *
 * SCALE: The patent prescription is normalized to f = 100 mm. Every dimensional prescription value is uniformly
 * scaled by 0.35. There are no aspheres, so no coefficient scaling is needed. The resulting paraxial design EFL is
 * 35.225961 mm.
 *
 * STOP: Figure 2 places diaphragm 10 approximately at the midpoint of a3 = 10.9 mm. Because the patent does not
 * dimension the split, the modeled scaled gap 3.815 mm is split equally as 1.9075 mm + 1.9075 mm. The physical stop
 * diameter is unpublished. STO sd = 6.058798 mm is paraxially calibrated to the patent F:2 target; this is not
 * independent evidence of diaphragm diameter. The rounded stored stop gives modeled f/2.000000026, used for
 * apertureDesign and nominalFno.
 *
 * SEMI-DIAMETERS: The patent publishes none. These are modeled from exact meridional ray envelopes for the infinity
 * state (full on-axis aperture plus the default fan at ±0.6 of the full-frame diagonal half-field), then constrained
 * by edge thickness, spherical rim slope, and cross-gap intrusion. They are construction values, not source clear
 * apertures.
 *
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. Internal Example-II spacings remain fixed. For the selected Leica M2/M1
 * production variant, the final image-space gap alone varies from the infinity BFD to a paraxially solved 0.7112 m
 * (2 ft 4 in) unit-focus equivalent. Intermediate focusT states linearly interpolate this rear-gap representation;
 * they are viewer states, not a published focus-distance law. No internal floating motion is asserted.
 *
 * INDEX REFERENCE: The patent explicitly defines N_D at the sodium D line (~589.3 nm). The current schema accepts only
 * "d" or "e". indexReference: "d" below is therefore a schema-compatibility marker only; the stored numeric indices
 * remain the patent sodium-D values and must not be read as proof of a modern helium-d catalog melt.
 */

const LENS_DATA = {
  key: "leica-summicron-35mm-f2-i",
  maker: "Leica",
  name: "LEICA SUMMICRON 35mm f/2 I",
  subtitle: "US 3,006,249 Example II — scaled ×0.35; production correlation not manufacturer-confirmed",
  specs: ["8 ELEMENTS / 6 GROUPS", "35.225961 mm DESIGN EFL", "f/2.0", "62° PATENT FIELD"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.225961,
  apertureMarketing: 2,
  apertureDesign: 2.000000026,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,006,249",
  patentAuthors: ["Walter Mandler"],
  patentAssignees: ["Ernst Leitz Canada Limited"],
  patentYear: 1961,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 123.692106,
      glass: "744449 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Outer positive meniscus of the front half.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element II",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 19.070418,
      glass: "744449 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Front member of the first cemented composite negative pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element III",
      type: "Negative Meniscus",
      nd: 1.6477,
      vd: 33.88,
      indexReference: "d",
      fl: -15.137974,
      glass: "648338 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Rear member of the first cemented composite negative pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IV",
      label: "Element IV",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 121.820695,
      glass: "720503 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Positive meniscus adjacent to the diaphragm in the front half.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "V",
      label: "Element V",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 48.191255,
      glass: "720503 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Positive meniscus adjacent to the diaphragm in the rear half.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "VI",
      label: "Element VI",
      type: "Negative Meniscus",
      nd: 1.6989,
      vd: 30.05,
      indexReference: "d",
      fl: -16.867163,
      glass: "699301 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Front member of the second cemented composite negative pair.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "VII",
      label: "Element VII",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.44,
      indexReference: "d",
      fl: 21.042373,
      glass: "N-LAF21 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Rear member of the second cemented composite negative pair; patent composition is published.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "VIII",
      label: "Element VIII",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 76.200464,
      glass: "744449 class (source sodium-D; vendor unresolved)",
      apd: false,
      role: "Outer positive meniscus of the rear half.",
    },
  ],

  surfaces: [
    { label: "1", R: 29.015, d: 2.625, nd: 1.744, elemId: 1, sd: 12 },
    { label: "2", R: 40.74, d: 0.231, nd: 1, elemId: 0, sd: 11.2 },
    { label: "3", R: 12.635, d: 3.955, nd: 1.744, elemId: 2, sd: 9.5 },
    { label: "4", R: 99.995, d: 1.12, nd: 1.6477, elemId: 3, sd: 9.4 },
    { label: "5", R: 8.89, d: 2.065, nd: 1, elemId: 0, sd: 7 },
    { label: "6", R: 17.01, d: 1.68, nd: 1.72, elemId: 4, sd: 6.8 },
    { label: "7", R: 20.23, d: 1.9075, nd: 1, elemId: 0, sd: 6.5 },
    { label: "STO", R: 1e15, d: 1.9075, nd: 1, elemId: 0, sd: 6.058798 },
    { label: "8", R: -44.905, d: 1.68, nd: 1.72, elemId: 5, sd: 6.2 },
    { label: "9", R: -19.88, d: 1.26, nd: 1, elemId: 0, sd: 6.1 },
    { label: "10", R: -10.01, d: 1.12, nd: 1.6989, elemId: 6, sd: 6.1 },
    { label: "11", R: -69.405, d: 3.955, nd: 1.788, elemId: 7, sd: 7.8 },
    { label: "12", R: -13.72, d: 0.231, nd: 1, elemId: 0, sd: 8.6 },
    { label: "13", R: -36.155, d: 5.005, nd: 1.744, elemId: 8, sd: 9 },
    { label: "14", R: -23.38, d: 22.658268, nd: 1, elemId: 0, sd: 10 },
  ],

  asph: {},

  var: {
    "14": [22.658268, 24.591778],
  },
  varLabels: [["14", "BF"]],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "7" },
    { text: "REAR", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 0.7112,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: fixed internals; rear image gap only; 0.7112 m endpoint; viewer focusT interpolation.",

  nominalFno: 2.000000026,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
