import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** PRIVATE canonical Fig1-constrained representative draft. Qualification pending
 * post-integration corpus/build checks; NOT a factory prescription.
 * Parent originalJP3610160B2 printedp14 Fig1 at4x cropRect105,65,245,225 reports
 * vertexpixels126,173,189,206,248,286,460,484, axisy287, track358px=21.0641mm.
 * Measured outerhalfheights/track .327,.289,.310,.411 =>6.9,6.1,6.5,8.7mm, coarse .1-.3mm.
 * L4 opticalcurveends front7.1,rear7.7-7.9, outershoulder8.7 is NOT clearaperture.
 * Native opaque rimExtensionSd8.7 represents flatlands; actualbevel not reconstructed.
 * L1front6.9,rear5.9 keepsbaseline rearclearhypothesis, envelope6.9. L2 6.1both,
 * L3 6.5both are drawing-envelope-as-curve-end hypotheses (no separate endpoints).
 * L4 rear7.8 midpoint testedwith7.7/7.9 sensitivity. No radii enlarged to rescue failed rays.
 * SourceR/d/n/asphere/irisstation/imageplane unchanged. No validation overrides or refocus.
 * Source irisdiameter unpublished; engine f2.89 paraxialstop estimate unchanged, NOT drawing5.3fit.
 * d is a labeledmodelconvention, NOT explicitlyverifiedglass-table reference.
 */
const data = {
  schema: 2,
  visible: false,
  layout: {
    scFill: 0.6,
    yScFill: 0.45,
  },
  focus: {
    closeFocusM: 0.35,
    description:
      "Infinity-only static prescription. No variable gaps and no finite-conjugate reconstruction; closeFocusM is a required schema/UI placeholder, not a validated endpoint.",
  },
  key: "olympus-mju-ii-35mm-f28-patent",
  maker: "Olympus",
  name: "OLYMPUS μ-II 35mm f/2.8",
  subtitle:
    "JP 3610160 B2 Example 1 — representative patent model; factory identity unproven",
  catalog: {
    imageFormat: "135-full-frame",
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35,
      design: 33.91,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.89,
    },
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT REPRESENTATIVE",
      "INFINITY ONLY",
      "1 ASPHERICAL SURFACE",
    ],
  },
  source: {
    patentNumber: "JP 3610160 B2",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2005,
    authors: ["Toshio Takahashi", "Seiji Shimizu", "Hideyasu Takato"],
    assignees: ["Olympus Corporation"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7432,
      vd: 49.31,
      glass: "Unmatched (source n=1.7432, Abbe=49.31; supplier unproven)",
      indexReference: "d",
      indexReferenceNote:
        "d-line model convention supported by parent-side pixel verification of d/g/F/C aberration labels. Source table uses plain n/Abbe without explicit reference-line statement; glass-table d reference and exact glass identity are not asserted.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.46,
      glass: "Unmatched (source n=1.72825, Abbe=28.46; supplier unproven)",
      indexReference: "d",
      indexReferenceNote:
        "d-line model convention supported by parent-side pixel verification of d/g/F/C aberration labels. Source table uses plain n/Abbe without explicit reference-line statement; glass-table d reference and exact glass identity are not asserted.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.19,
      glass: "Unmatched (source n=1.7859, Abbe=44.19; supplier unproven)",
      indexReference: "d",
      indexReferenceNote:
        "d-line model convention supported by parent-side pixel verification of d/g/F/C aberration labels. Source table uses plain n/Abbe without explicit reference-line statement; glass-table d reference and exact glass identity are not asserted.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.52542,
      vd: 55.78,
      glass: "Unmatched (source n=1.52542, Abbe=55.78; supplier unproven)",
      indexReference: "d",
      indexReferenceNote:
        "d-line model convention supported by parent-side pixel verification of d/g/F/C aberration labels. Source table uses plain n/Abbe without explicit reference-line statement; glass-table d reference and exact glass identity are not asserted.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 12.0391,
      d: 2.7545,
      sd: 6.9,
      medium: 1,
    },
    {
      label: "2",
      R: 50.0294,
      d: 0.92,
      sd: 5.9,
    },
    {
      label: "3",
      R: -36.9805,
      d: 1,
      sd: 6.1,
      medium: 2,
    },
    {
      label: "4",
      R: 17.5343,
      d: 1.6,
      sd: 6.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.89,
    },
    {
      label: "5",
      R: 40.7109,
      d: 2.25,
      sd: 6.5,
      medium: 3,
    },
    {
      label: "6",
      R: -26.0206,
      d: 10.2496,
      sd: 6.5,
    },
    {
      label: "7",
      R: -8.3616,
      d: 1.4,
      sd: 7.1,
      medium: 4,
      rimExtensionSd: 8.7,
    },
    {
      label: "8A",
      R: -11.8346,
      d: 14.6687,
      sd: 7.8,
      asphere: {
        K: 0,
        A4: 0.000031902,
        A6: -7.6178e-7,
        A8: 1.0551e-8,
        A10: -7.6647e-11,
      },
      rimExtensionSd: 8.7,
    },
  ],
  aperture: {
    nominalFNumber: 2.89,
    fStops: [2.89, 4, 5.6, 8, 11],
    maxFNumber: 11,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 64,
    maxTraceFieldDeg: 32,
  },
} satisfies LensDataV2Input;
export default data;
