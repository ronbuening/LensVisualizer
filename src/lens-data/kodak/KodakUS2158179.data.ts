import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,158,179 A (Charles W. Frederick and George H. Aklin, Eastman Kodak Company; filed 1937, granted 1939),
 * Figure 2 example: four air-spaced singlets, f = 100 mm at f/2.0.
 * Radii with their printed signs, thicknesses, air spaces and the sodium D-line indices and Abbe numbers are all
 * printed in the patent; the drawing-sheet table and the specification table agree.
 * Glass: the dispersive elements' printed nD 1.8049 / V 25.5 matches Schott SF6 at the D line (a catalogue
 * equivalent, not a documented melt). The collective elements' nD 1.9007 / V 42.5 matches no catalogue glass.
 * Inferred values: the stop, which the patent neither prints nor draws, sits in the middle of the 21.8 mm central
 * air space. The clear semi-diameters are estimated: 23.9 mm and 23.1 mm on the first two surfaces, just enough
 * to pass the f/2 axial beam, and 23 mm elsewhere. The facing surfaces of each pair would touch at about 24.8 mm
 * (front) and 24.2 mm (rear), matching the patent's marginal contact. The image plane is the computed paraxial back
 * focus, 74.88 mm behind the last surface. Infinity focus only: the patent gives no focusing data.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f2-us2158179",
  maker: "Kodak",
  name: "KODAK 100mm f/2 (US 2,158,179 Design)",
  subtitle: "US 2,158,179 A, Figure 2 \u2014 high-index four-singlet f/2 objective",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/2.0",
      "1.90-INDEX POSITIVE ELEMENTS"
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 99.94
    },
    fNumber: {
      design: 2
    }
  },
  source: {
    patentNumber: "US 2,158,179 A",
    example: {
      label: "Figure 2",
      id: "2"
    },
    patentYear: 1939,
    authors: [
      "Charles W. Frederick",
      "George H. Aklin"
    ],
    assignees: [
      "Eastman Kodak Company"
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.9007,
      vd: 42.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.9007 / V 42.5)",
      role: "Positive front element in high-index glass"
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.8049,
      vd: 25.5,
      indexReference: "D",
      glass: "SF6 (Schott)",
      role: "Negative element of the front pair; dense flint"
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8049,
      vd: 25.5,
      indexReference: "D",
      glass: "SF6 (Schott)",
      role: "Negative element of the rear pair; dense flint"
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.9007,
      vd: 42.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.9007 / V 42.5)",
      role: "Positive rear element in high-index glass"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 96.8,
      d: 11.9,
      sd: 23.9,
      medium: 1
    },
    {
      label: "2",
      R: -174.5,
      d: 1.55,
      sd: 23.1
    },
    {
      label: "3",
      R: -94.1,
      d: 4.15,
      sd: 23,
      medium: 2
    },
    {
      label: "4",
      R: 2170,
      d: 10.9,
      sd: 23
    },
    {
      label: "STO",
      R: "flat",
      d: 10.9
    },
    {
      label: "5",
      R: 882,
      d: 4.15,
      sd: 23,
      medium: 3
    },
    {
      label: "6",
      R: 81.5,
      d: 2.45,
      sd: 23
    },
    {
      label: "7",
      R: 238,
      d: 11.9,
      sd: 23,
      medium: 4
    },
    {
      label: "8",
      R: -84.8,
      d: 74.87819645751735,
      sd: 23
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
