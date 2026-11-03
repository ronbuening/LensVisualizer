import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US4610514 whole Table3/E3; probable original AF135 family, not factory-exact.
 * Native f100 uniformly scaled1.35x as an explicit hypothesis, not EFL retuning.
 * Derived image plane128.0861233236873mm is frozen; no printed BF or best-focus fitting.
 * Literal Nd/nu-d preserved; no named-glass or modern dispersion substitution.
 * Fig7 inferred stop and bevel-aware clear caps frozen before traces; clipping retained.
 * Source beta1/10 travel exists but iris motion/retail1m law is unproved. Infinity only.
 * Normal scalar sheared-pupil estimates, not independent OPL/phase or factory validation.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-135mm-f28",
  maker: "Minolta",
  name: "MINOLTA AF 135mm f/2.8",
  subtitle: "US 4,610,514 Embodiment 3 \u2014 probable family; inferred aperture",
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 135,
      design: 135,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: ["7 ELEMENTS / 5 GROUPS", "PROBABLE FAMILY; INFERRED APERTURE", "INFINITY CONFIGURATION ONLY"],
  },
  source: {
    patentNumber: "US 4,610,514",
    example: {
      label: "Embodiment 3",
      id: "3",
    },
    patentYear: 1986,
    authors: ["Akiyoshi Nakamura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6127,
      vd: 58.5,
      glass: "BACD4 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: 171.45135837669088,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6127,
      vd: 58.5,
      glass: "BACD4 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: 143.26409283303795,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.671,
      vd: 51.7,
      glass: "Unmatched (patent nd 1.6710, νd 51.7; no catalog row at these coordinates)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: 66.49023030095515,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
      cemented: "CD1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      glass: "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: -45.629283082829204,
      role: "Literal source negative element; isolated-in-air power is descriptive, not cemented-group power.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8052,
      vd: 25.4,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: 96.78067776283933,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
      cemented: "CD2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6584,
      vd: 50.9,
      glass: "S-BSM25 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: -40.0209512554199,
      role: "Literal source negative element; isolated-in-air power is descriptive, not cemented-group power.",
      cemented: "CD2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      glass: "N-BK7 (Schott catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "Primary Table3 explicitly labels Nd and nu-d. Engine d587.5618nm is its conventional reference, not an exact wavelength number printed in the table.",
      focalLengthMm: 104.35801713937215,
      role: "Literal source positive element; isolated-in-air power is descriptive, not cemented-group power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 110.25450000000001,
      d: 7.263,
      sd: 26.5,
      medium: 1,
    },
    {
      label: "2",
      R: -2168.9640000000004,
      d: 0.2025,
      sd: 26.5,
    },
    {
      label: "3",
      R: 51.907500000000006,
      d: 7.290000000000001,
      sd: 25.2,
      medium: 2,
    },
    {
      label: "4",
      R: 120.2445,
      d: 0.2025,
      sd: 25.2,
    },
    {
      label: "5",
      R: 27.4455,
      d: 6.453000000000001,
      sd: 21.1,
      medium: 3,
    },
    {
      label: "6",
      R: 64.584,
      d: 2.0250000000000004,
      sd: 21.1,
      medium: 4,
    },
    {
      label: "7",
      R: 22.167000000000005,
      d: 17.64126,
      sd: 17.3,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "8",
      R: 13345.141500000002,
      d: 1.7280000000000002,
      sd: 13.7,
      medium: 5,
    },
    {
      label: "9",
      R: -78.38100000000001,
      d: 1.3905,
      sd: 13.7,
      medium: 6,
    },
    {
      label: "10",
      R: 39.9735,
      sd: 13.7,
    },
    {
      label: "11",
      R: 63.5985,
      d: 6.048000000000001,
      sd: 18.4,
      medium: 7,
    },
    {
      label: "12",
      R: -343.3455,
      d: 42.80662332368729,
      sd: 18.4,
    },
  ],
  focus: {
    closeFocusM: 1.5248,
    published: [1],
    description:
      "Internal focusing: the cemented doublet of Unit II moves 7.33 mm toward the image while Units I and III stay fixed. The patent does not say whether the stop moves; it is modelled fixed with Unit I. The near end is the patent's printed β = 1/10 state (d7 = 19.79, d10 = 19.23 at f = 100, scaled ×1.35), at 1.525 m object to image. The retail lens focuses to 1.0 m (0.16×); the patent prints no state that close.",
  },
  gaps: {
    STO: { label: "D7b", values: [[1.74474, 9.07524]] },
    "10": { label: "D10", values: [[33.291, 25.9605]] },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18,
    maxTraceFieldDeg: 9,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    { text: "I", fromSurface: "1", toSurface: "7" },
    { text: "II", fromSurface: "8", toSurface: "10" },
    { text: "III", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "5",
      toSurface: "7",
    },
    {
      text: "CD2",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
