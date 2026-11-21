import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 630,224 C, sole example, F = 100 and f/2; modeled at a 100 mm scale.
 * Radii, thicknesses, air separations, indices and Abbe numbers follow the table.
 * On the DPMA copy, the printed plus signs at R7 and R11 are struck through
 * and minus signs written in; the model follows those corrections.
 * The stop is inferred, 6.33 mm after R6 and 0.87 mm before R7. R6, R7 and the
 * rear singlet rims follow the drawing; the other clear radii are estimates.
 * The drawing's steep R6 bevel is shown as a straight join from R5; the
 * drawing scale was checked by vertex spacings and surface sags.
 * R6 retains its 15.3 mm clear radius, limiting real-ray acceptance to about f/2.07.
 * The image plane is the computed paraxial one; the illustrative ±6° field
 * is not stated in the patent.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f2-de630224",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/2 (DE 630,224 Design)",
  subtitle: "DE 630,224 C, sole example — Zeiss Ikon",
  visible: true,
  source: {
    patentNumber: "DE 630,224 C",
    example: { label: "Sole example", id: null },
    patentYear: 1936,
    authors: [],
    assignees: ["Zeiss Ikon AG"],
  },
  catalog: {
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 99.86,
    },
    fNumber: {
      design: 2,
    },
    specs: ["7 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6203,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: 114.68,
      glass: "BACD16 (spectral proxy; patent nd 1.6203 / ν 60.4; supplier and melt unspecified)",
      role: "Positive front collecting element",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: 84.13,
      glass: "BAF10 (spectral proxy; patent nd 1.6716 / ν 47.2; supplier and melt unspecified)",
      role: "Positive front member of the cemented triplet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5163,
      vd: 64,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: 165.45,
      glass: "K-BK7 (Sumita)",
      role: "Low-index positive middle member of the cemented triplet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.689,
      vd: 31,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: -33.48,
      glass: "S-TIM28 (Ohara)",
      role: "Strong negative rear member of the cemented triplet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5017,
      vd: 56.5,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: -54.45,
      glass: "S-FTL10 (spectral proxy; patent nd 1.5017 / ν 56.5; supplier and melt unspecified)",
      role: "Negative front member of the rear cemented doublet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: 49.44,
      glass: "BAF10 (spectral proxy; patent nd 1.6716 / ν 47.2; supplier and melt unspecified)",
      role: "Positive rear member of the weakly converging cemented doublet",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n_d without defining its wavelength; catalogue comparisons do not settle the line.",
      focalLengthMm: 124.15,
      glass: "BAF10 (spectral proxy; patent nd 1.6716 / ν 47.2; supplier and melt unspecified)",
      role: "Positive rear collecting singlet",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 51.8,
      d: 8,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: 179.3,
      d: 0.6,
      sd: 26,
    },
    {
      label: "3",
      R: 34,
      d: 8.9,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: 76.4,
      d: 5,
      sd: 24,
      medium: 3,
    },
    {
      label: "5",
      R: 707.3,
      d: 2.8,
      sd: 22.2,
      medium: 4,
    },
    {
      label: "6",
      R: 22.3,
      d: 6.33,
      sd: 15.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.87,
    },
    {
      label: "7",
      R: -298.6,
      d: 3.9,
      sd: 17.8,
      medium: 5,
    },
    {
      label: "8",
      R: 30.2,
      d: 10.8,
      sd: 18,
      medium: 6,
    },
    {
      label: "9",
      R: 285.9,
      d: 15.6,
      sd: 18,
    },
    {
      label: "10",
      R: 114.4,
      d: 9.7,
      sd: 25,
      medium: 7,
    },
    {
      label: "11",
      R: -297,
      d: 41.319611,
      sd: 25,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 12,
    maxTraceFieldDeg: 6,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Cemented triplet",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "Cemented doublet",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "Rear singlet",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7", toSurface: "9" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
