import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,601,593 A, Example VI and Figure 6, a six-element f/4 objective.
 * The normalized dimensions are multiplied by 100 mm per source unit.
 * Radii, thicknesses, sodium-D indices and Abbe numbers follow the printed table.
 * The text places the stop approximately midway between R5 and R6; its exact
 * midpoint and opening and the paraxial image plane are inferred. Printed
 * effective diameters set the rims except at R4/R7, inferred at 11.8/12.4 mm
 * and consistent with Figure 6 within its drawing accuracy. R3's 10.1 mm radius
 * includes 0.1 mm clearance beyond the printed value for the axial f/4 beam.
 * These diameters give about 41.4% relative illumination at 36.0°.
 * The rear doublet computes as weakly positive despite the patent's divergent
 * description, and the text's x = 0.106 differs from 0.107 from the indices.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f4-us2601593",
  maker: "Cooke",
  name: "COOKE 100mm f/4 (US 2,601,593 Design)",
  subtitle: "US 2,601,593 A, Example VI — Taylor Hobson / Cook",
  visible: false,
  source: {
    patentNumber: "US 2,601,593 A",
    patentYear: 1952,
    example: {
      label: "Example VI",
      id: "6",
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    errata: [
      {
        status: "unresolved",
        note: "The patent describes both outer doublets as divergent; the printed Example VI rear doublet has an in-air focal length of +718.47 mm at this model's scale.",
      },
      {
        status: "unresolved",
        note: "The text gives x = 0.106 for Example VI, while the printed refractive indices give 0.107. The printed indices are retained.",
      },
    ],
  },
  catalog: {
    imageCircleMm: 145.36,
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 99.99,
    },
    fNumber: {
      design: 4,
    },
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "2 FLUORITE ELEMENTS",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      focalLengthMm: 58.91,
      role: "Positive outer element of the front cemented doublet",
      cemented: "C1",
      nd: 1.717,
      vd: 47.9,
      indexReference: "D",
      glass: "S-LAM3 (spectral proxy; patent nD 1.717 / ν 47.9; supplier and melt unspecified)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      focalLengthMm: -44.92,
      role: "Negative inner element of the front cemented doublet",
      cemented: "C1",
      nd: 1.61,
      vd: 37.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.610 / ν 37.5)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      focalLengthMm: 123.17,
      role: "Low-dispersion positive meniscus ahead of the diaphragm",
      nd: 1.4339,
      vd: 95.4,
      indexReference: "D",
      glass: "CaF2 (fluorite crystal)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      focalLengthMm: 139.31,
      role: "Low-dispersion positive meniscus behind the diaphragm",
      nd: 1.4339,
      vd: 95.4,
      indexReference: "D",
      glass: "CaF2 (fluorite crystal)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      focalLengthMm: -49.9,
      role: "Negative inner element of the rear cemented doublet",
      cemented: "C2",
      nd: 1.61,
      vd: 37.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.610 / ν 37.5)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      focalLengthMm: 55.12,
      role: "Positive outer element of the rear cemented doublet",
      cemented: "C2",
      nd: 1.717,
      vd: 47.9,
      indexReference: "D",
      glass: "S-LAM3 (spectral proxy; patent nD 1.717 / ν 47.9; supplier and melt unspecified)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 24.62,
      d: 7.2,
      sd: 17,
      medium: 1,
    },
    {
      label: "2",
      R: 51.81,
      d: 3.6,
      sd: 17,
      medium: 2,
    },
    {
      label: "3",
      R: 17.45,
      d: 2.6,
      sd: 10.1,
    },
    {
      label: "4",
      R: 28.09,
      d: 3.5,
      sd: 11.8,
      medium: 3,
    },
    {
      label: "5",
      R: 56.98,
      d: 2,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 2,
    },
    {
      label: "6",
      R: -98.72,
      d: 4.6,
      sd: 10,
      medium: 4,
    },
    {
      label: "7",
      R: -38.02,
      d: 2.6,
      sd: 12.4,
    },
    {
      label: "8",
      R: -20.77,
      d: 3,
      sd: 10,
      medium: 5,
    },
    {
      label: "9",
      R: -68.97,
      d: 7.2,
      sd: 15,
      medium: 6,
    },
    {
      label: "10",
      R: -26.22,
      d: 80.713625,
      sd: 15,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 72,
    maxTraceFieldDeg: 36,
  },
  groups: [
    {
      text: "Front divergent cemented pair",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "CaF2 positive meniscus",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "CaF2 positive meniscus",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
