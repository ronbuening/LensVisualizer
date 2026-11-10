import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE L 12741 (Ernst Leitz GmbH; inventor Max Berek), the Leitz application "Photographisches Objektiv",
 * an addition to application L 753. It was announced and laid open for opposition on 6 August 1953
 * (DEPATISnet DE000L0012741MAZ); no later grant was found. Its claim prints one table, normalized to
 * f = 1 at 1:1.5. Every R, d and A is transcribed unchanged and scaled ×85; the scale follows the
 * marketed 85 mm and is not fitted (traced EFL 84.998 mm).
 * The table lists two air spaces between r5 and r6 (A2 = 0.125, A3 = 0.109) with no surface between
 * them; the stop sits at their junction, where the drawing of parent application L 753 shows the
 * diaphragm (between A2 and A3).
 * Indices and Abbe numbers are printed as n/Nü without a spectral line and are traced as d-line values;
 * all glass labels stay Unmatched (see the analysis). No catalog glass is substituted.
 * The source prints no field angle, back focus or clear diameters. Back focus is the derived paraxial
 * value; the model is the infinity state only.
 * Semi-diameters are inferred; L 12741 has no drawing. Proportions follow the Summarex section in the
 * 1953 Leitz brochure, cross-checked against the to-scale drawing of parent L 753 (a different example).
 * L2 carries one height on both faces (24.4 mm), as both drawings show a flat-topped front doublet.
 * Surfaces 7 and 8 are sized to pass the f/1.5 axial beam (16.874 and
 * 18.410 mm needed); the steep cemented surface 7 then reaches a 66.7° rim angle (checks.maxRimAngleDeg
 * 67), and the 0.6715 mm air space between surfaces 8 and 9 narrows to 0.024 mm at the rim
 * (checks.gapSagFrac 0.965). No geometry check is disabled.
 * The Summarex attribution is inferred: no document names the lens; the evidence is in the analysis.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-summarex-85mm-f15",
  maker: "Leica",
  name: "LEITZ SUMMAREX 85mm f/1.5",
  subtitle:
    "DE L 12741 (Leitz application, laid open 1953), sole example — inferred Summarex correlation; not manufacturer-confirmed",
  visible: true,
  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "DESIGN f = 85 mm", "DESIGN F/1.5", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 85,
      design: 85,
    },
    fNumber: {
      marketing: 1.5,
      design: 1.5,
    },
    closeFocusM: {
      marketing: 1.524,
    },
  },
  source: {
    patentNumber: "DE L 12741",
    example: { label: "Sole example", id: null },
    patentYear: 1953,
    authors: ["Max Berek"],
    assignees: ["Ernst Leitz GmbH"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Positive front meniscus, nearly flat on its rear face.",
      nd: 1.5523,
      vd: 63.3,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.5523, ν 63.3; Hoya PCD3 coordinates if read at d)",
      focalLengthMm: 102.27639634940671,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Positive front member of the front cemented meniscus.",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.6202, ν 60.4; no exact catalog row)",
      focalLengthMm: 92.60860467222062,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Negative flint rear member of the front cemented meniscus; its strong rear surface faces the stop.",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.6727, ν 32.2; SF5 coordinates if read at d)",
      focalLengthMm: -56.027022346930934,
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Positive front member of the rear cemented meniscus, concave to the stop; its denser glass makes the cemented surface converging.",
      nd: 1.5891,
      vd: 61.4,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.5891, ν 61.4; SK5 coordinates if read at d)",
      focalLengthMm: 86.9057753037547,
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      role: "Negative light-flint rear member of the rear cemented meniscus; its nearly flat rear face sits 0.67 mm ahead of L6.",
      nd: 1.5317,
      vd: 48.9,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.5317, ν 48.9; LLF6 coordinates if read at d)",
      focalLengthMm: -32.24275025028088,
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-convex Positive",
      role: "Flat-fronted positive element, the first of the two rear collectors.",
      nd: 1.5523,
      vd: 63.3,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.5523, ν 63.3; Hoya PCD3 coordinates if read at d)",
      focalLengthMm: 67.19355422777475,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      role: "Biconvex rear collector.",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote: "The source prints n/Nü without a spectral line; traced as d-line values.",
      glass: "Unmatched (printed n 1.6202, ν 60.4; no exact catalog row)",
      focalLengthMm: 81.54774270905529,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 48.560500000000005,
      d: 9.282,
      sd: 30,
      medium: 1,
    },
    {
      label: "2",
      R: 322.5155,
      d: 0.2465,
      sd: 30,
    },
    {
      label: "3",
      R: 30.073,
      d: 9.282,
      sd: 24.4,
      medium: 2,
    },
    {
      label: "4",
      R: 55.666500000000006,
      d: 3.4,
      sd: 24.4,
      medium: 3,
    },
    {
      label: "5",
      R: 21.9215,
      d: 10.625,
      sd: 18.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.265,
    },
    {
      label: "6",
      R: -25.33,
      d: 5.8735,
      sd: 18,
      medium: 4,
    },
    {
      label: "7",
      R: -18.4025,
      d: 2.4735,
      sd: 16.9,
      medium: 5,
    },
    {
      label: "8",
      R: 262.2675,
      d: 0.6715000000000001,
      sd: 18.42,
    },
    {
      label: "9",
      R: "flat",
      d: 6.494,
      sd: 20,
      medium: 6,
    },
    {
      label: "10",
      R: -37.111,
      d: 0.2465,
      sd: 20,
    },
    {
      label: "11",
      R: 94.639,
      d: 6.494,
      sd: 21,
      medium: 7,
    },
    {
      label: "12",
      R: -105.774,
      d: 46.545971908656185,
      sd: 21,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity prescription only. The application publishes no focusing data, so no focus movement is modelled; the production lens focuses to 5 ft (1.5 m).",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.35,
  },
  checks: {
    gapSagFrac: 0.965,
    maxRimAngleDeg: 67,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
