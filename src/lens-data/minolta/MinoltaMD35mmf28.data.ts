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
  name: "MINOLTA MD 35mm f/2.8",
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
      glass: "S-BAL3 (OHARA catalog equivalent; production supplier unspecified)",
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
      glass: "K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed)",
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
      glass: "J-SF8 (HIKARI catalog equivalent; production supplier unspecified)",
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
      glass: "K-LaK10 (SUMITA catalog equivalent; production supplier unspecified)",
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
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 82.0295,
      d: 1.5435,
      sd: 14.4,
      medium: 1,
    },
    {
      label: "2",
      R: 16.4815,
      d: 12.383,
      sd: 11.8,
    },
    {
      label: "3",
      R: 21.721,
      d: 9.8,
      sd: 10.3,
      medium: 2,
    },
    {
      label: "4",
      R: -65.2505,
      d: 5.7365,
      sd: 10.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.4005,
    },
    {
      label: "5",
      R: -14.042,
      d: 1.3265,
      sd: 6.8,
      medium: 3,
    },
    {
      label: "6",
      R: 83.755,
      d: 0.9905,
      sd: 7.5,
    },
    {
      label: "7",
      R: -51.0825,
      d: 2.345,
      sd: 8.0,
      medium: 4,
    },
    {
      label: "8",
      R: -15.736,
      d: 0.1015,
      sd: 8.0,
    },
    {
      label: "9",
      R: 84.0665,
      d: 2.38,
      sd: 10.0,
      medium: 5,
    },
    {
      label: "10",
      R: -41.7585,
      d: 37.1,
      sd: 10.0,
    },
  ],
  focus: {
    closeFocusM: 0.3,
    description:
      "The patent gives the infinity state only, so no focus movement is modeled; 0.3 m is Minolta's stated minimum focus.",
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
