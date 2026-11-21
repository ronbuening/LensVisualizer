import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,432,387 A, Example III / Figure 4: four air-spaced spherical elements
 * for cinematography, with printed f = 100 mm and f/1.9. The radii, thicknesses,
 * separations and sodium D-line index / Abbe pairs follow both printed tables.
 * The stop position is inferred: 10 mm after R6 and 3.2 mm before R7; its radius
 * is derived from f/1.9. All clear semi-diameters are estimated. The image plane
 * is the calculated paraxial BFD, 64.0038 mm, rather than the printed BF 63.9 mm,
 * which appears to describe best focus. The model computes EFL 100.0296 mm.
 * The 24-degree full field uses the lower end of the patent's stated range;
 * its real chief ray defines the 42.19 mm image circle. No focus motion is given.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f19-us2432387",
  maker: "Kodak",
  name: "KODAK 100mm f/1.9 (US 2,432,387 Design)",
  subtitle: "US 2,432,387 A, Example III — possibly related to the four-element 25 mm f/1.9 Cine Ektar",
  visible: true,
  source: {
    patentNumber: "US 2,432,387 A",
    patentYear: 1947,
    example: {
      label: "Example III",
      id: "3",
    },
    authors: ["Philip E. Creighton"],
    assignees: ["Eastman Kodak Company"],
    errata: [
      {
        status: "unresolved",
        note: "Printed BF is 63.9 mm; the printed prescription gives paraxial BFD 64.0038 mm. The printed BF appears to describe best focus; the model retains the paraxial plane.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.03,
    },
    fNumber: {
      design: 1.9,
    },
    elementCount: 4,
    groupCount: 4,
    imageCircleMm: 42.19,
    specs: ["4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/1.9"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      focalLengthMm: 115.01,
      glass: "Unmatched (nD 1.588 / ν 53.4)",
      role: "Front positive element that begins convergence of the incoming beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 259.28,
      glass: "Unmatched (nD 1.611 / ν 57.2)",
      role: "Weak positive meniscus between the front collector and negative element.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      focalLengthMm: -41.56,
      glass: "Unmatched (nD 1.720 / ν 29.3)",
      role: "Dispersive negative element that balances the surrounding positive elements.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      focalLengthMm: 55.36,
      glass: "H-LaK12 (CDGM)",
      role: "Strong rear positive element that brings the beam to the image.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 61.0,
      d: 12.3,
      sd: 31,
      medium: 1,
    },
    {
      label: "2",
      R: 576.0,
      d: 0.7,
      sd: 31,
    },
    {
      label: "3",
      R: 48.2,
      d: 10.6,
      sd: 29,
      medium: 2,
    },
    {
      label: "4",
      R: 63.5,
      d: 9.3,
      sd: 26,
    },
    {
      label: "5",
      R: -193.0,
      d: 3.7,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: 35.7,
      d: 10,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.2,
    },
    {
      label: "7",
      R: 84.5,
      d: 23.2,
      sd: 27,
      medium: 4,
    },
    {
      label: "8",
      R: -63.0,
      d: 64.003779,
      sd: 27,
    },
  ],
  aperture: {
    nominalFNumber: 1.9,
    fStops: [1.9, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 · L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 · L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
