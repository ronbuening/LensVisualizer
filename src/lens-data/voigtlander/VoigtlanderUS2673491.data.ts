import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,673,491 A, sole numerical example illustrated in Figure 2. The normalized
 * table is multiplied by 150 to give millimetres, following the patent's own
 * statement that Figure 2 shows a 150 mm objective at natural size.
 * Radii, spacings, helium-d indices, Abbe numbers and the stop position are printed.
 * Clear semi-diameters follow Figure 2 proportions, subject to f/2 ray clearance
 * and off-axis illumination; they are estimates, not printed dimensions.
 * The stop radius is inferred from f/2.
 * The image plane is the computed paraxial back focus, 107.156 mm, compared
 * with the printed 107.154 mm. The stated illumination field is 60 degrees full.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-150mm-f2-us2673491",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER 150mm f/2 (US 2,673,491 Design)",
  subtitle: "US 2,673,491 A, sole example — Voigtländer / Tronnier",
  visible: true,
  source: {
    patentNumber: "US 2,673,491 A",
    patentYear: 1954,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer AG"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 150,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 6,
    groupCount: 4,
    imageCircleMm: 167.34,
    specs: ["6 ELEMENTS / 4 GROUPS", "DESIGN f = 150 mm", "DESIGN F/2", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67125,
      vd: 47.1,
      indexReference: "d",
      focalLengthMm: 196.52,
      glass: "Unmatched (nd 1.67125 / ν 47.1)",
      role: "Positive front singlet that collects the incoming light.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.67125,
      vd: 47.1,
      indexReference: "d",
      focalLengthMm: 151.99,
      glass: "Unmatched (nd 1.67125 / ν 47.1)",
      role: "Positive front member of the first cemented pair.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69842,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -83.72,
      glass: "Unmatched (nd 1.69842 / ν 30.1)",
      role: "Negative rear member of the first cemented pair; balances the dispersion of Element 2.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      focalLengthMm: -52.81,
      glass: "Unmatched (nd 1.60266 / ν 38.4)",
      role: "Diverging member beside the stop; begins the rear refractive-index progression.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.65953,
      vd: 57,
      indexReference: "d",
      focalLengthMm: 64.35,
      glass: "Unmatched (nd 1.65953 / ν 57)",
      role: "Positive rear member of the second cemented pair.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7174,
      vd: 48.1,
      indexReference: "d",
      focalLengthMm: 152.73,
      glass: "Unmatched (nd 1.7174 / ν 48.1)",
      role: "Positive rear singlet that completes the rear refractive-index progression.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 88.425,
      d: 11.274,
      sd: 43,
      medium: 1,
    },
    {
      label: "2",
      R: 254.4855,
      d: 0.354,
      sd: 41,
    },
    {
      label: "3",
      R: 57.831,
      d: 12.0795,
      sd: 37,
      medium: 2,
    },
    {
      label: "4",
      R: 122.3055,
      d: 9.825,
      sd: 35,
      medium: 3,
    },
    {
      label: "5",
      R: 38.253,
      d: 16.3965,
      sd: 26.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 14.2215,
    },
    {
      label: "6",
      R: -43.488,
      d: 3.543,
      sd: 26,
      medium: 4,
    },
    {
      label: "7",
      R: 122.3055,
      d: 18.201,
      sd: 32.5,
      medium: 5,
    },
    {
      label: "8",
      R: -61.1565,
      d: 0.564,
      sd: 32.5,
    },
    {
      label: "9",
      R: 1311.273,
      d: 9.6645,
      sd: 34.5,
      medium: 6,
    },
    {
      label: "10",
      R: -119.1885,
      d: 107.155573,
      sd: 34.5,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 60,
    maxTraceFieldDeg: 30,
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
      text: "G2 · L2 + L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4 + L5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 · L6",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
