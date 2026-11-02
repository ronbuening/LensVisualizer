import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US3936153 first embodiment/TableI, literal dimensions uniformly scaled35.
 * Five spherical singlets. Printed BFL37.1mm and imagez79.107mm retained, no refocus.
 * Existing nominal full Figure1 SDvector and midpointstopz29.295mm are hypotheses,
 * frozen before prior traces. Rejected initialSDs and full sensitivity history preserved.
 * Table N/v wavelength is unspecified; approximate d-line convention is qualified.
 * Source full64deg differs correlated maker63deg. Clipping is retained, not factoryvignetting.
 * NO_INTERNAL_RECONSTRUCTION: closeFocusM1e15; manufacturer0.3m is metadata only.
 * Native diffraction estimate only; do not revive withdrawn fixed-row/column OPL claims.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-md-35mm-f28",
  maker: "Minolta",
  name: "MINOLTA MD 35mm f/2.8 — patent reconstruction (inferred apertures/stop; infinity only; factory identity unproven)",
  subtitle: "US 3,936,153 Table I; Figure 1 aperture hypothesis and inferred midpoint iris",
  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 3,936,153",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1976,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5714,
      vd: 53.0,
      indexReference: "d",
      indexReferenceNote:
        "Table I prints N/v without explicit wavelength subscript. d-line reference is convention/inference, not a printed wavelength claim.",
      focalLengthMm: -36.40841537550411,
      glass: "Unmatched (1.5714/53.0; literal patent coordinate; supplier unresolved)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      indexReferenceNote:
        "Table I prints N/v without explicit wavelength subscript. d-line reference is convention/inference, not a printed wavelength claim.",
      focalLengthMm: 25.91416494122884,
      glass: "Unmatched (1.6583/58.5; literal patent coordinate; supplier unresolved)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.2,
      indexReference: "d",
      indexReferenceNote:
        "Table I prints N/v without explicit wavelength subscript. d-line reference is convention/inference, not a printed wavelength claim.",
      focalLengthMm: -17.36048337037693,
      glass: "Unmatched (1.6889/31.2; literal patent coordinate; supplier unresolved)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      indexReferenceNote:
        "Table I prints N/v without explicit wavelength subscript. d-line reference is convention/inference, not a printed wavelength claim.",
      focalLengthMm: 30.73201073078851,
      glass: "Unmatched (1.72/50.3; literal patent coordinate; supplier unresolved)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      indexReferenceNote:
        "Table I prints N/v without explicit wavelength subscript. d-line reference is convention/inference, not a printed wavelength claim.",
      focalLengthMm: 45.298700202055215,
      glass: "Unmatched (1.6204/60.3; literal patent coordinate; supplier unresolved)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 82.0295,
      d: 1.5435,
      sd: 12.6,
      medium: 1,
    },
    {
      label: "2",
      R: 16.4815,
      d: 12.383,
      sd: 10.4,
    },
    {
      label: "3",
      R: 21.721,
      d: 9.8,
      sd: 9.0,
      medium: 2,
    },
    {
      label: "4",
      R: -65.2505,
      d: 5.5685,
      sd: 9.0,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.5685,
    },
    {
      label: "5",
      R: -14.042,
      d: 1.3265,
      sd: 5.9,
      medium: 3,
    },
    {
      label: "6",
      R: 83.755,
      d: 0.9905,
      sd: 6.6,
    },
    {
      label: "7",
      R: -51.0825,
      d: 2.345,
      sd: 6.9,
      medium: 4,
    },
    {
      label: "8",
      R: -15.736,
      d: 0.1015,
      sd: 6.9,
    },
    {
      label: "9",
      R: 84.0665,
      d: 2.38,
      sd: 8.6,
      medium: 5,
    },
    {
      label: "10",
      R: -41.7585,
      d: 37.1,
      sd: 8.3,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only patent reconstruction; exact factory pairing is unproven. The nominal Figure1 clear-aperture vector and midpoint stop29.295 mm are hypotheses; strong modeled clipping remains. The printed scaled37.1 mm final gap fixes image79.107 mm; no best-focus adjustment is authored. SourceN/v does not print a wavelength subscript; d-line587.5618 nm is an assumption. Manufacturer0.3 m minimum focus is descriptive only; no finite motion, iris law or conjugates are certified. Native scalar MTF is simulated, not factory/full-spectrum performance. The native format corner32.1034 degrees exceeds source32 degrees and is a model extension.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 64,
    maxTraceFieldDeg: 32,
  },
  layout: {
    yScFill: 0.36,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
