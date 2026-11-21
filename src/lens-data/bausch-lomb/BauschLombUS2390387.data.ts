import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,390,387 A, Figure 2: a 100 mm f/5.6 telephoto objective with two cemented doublets.
 * Radius magnitudes, thicknesses, separation, D-line indices and Abbe numbers are printed;
 * radius signs follow the drawing. The stop position and clear semi-diameters are estimated.
 * Square doublet rims are checked against Figure 2 and the nominal axial beam. The rear
 * clear radius remains above the drawing estimate to limit the loss of off-axis light.
 * The iris size follows the nominal aperture. The image plane is the computed paraxial
 * back focus. The ±10° field is illustrative; the patent gives no field for this example.
 * Both Figure 2 tables agree; extracted text misreads L2's printed index of 1.6210 as 1.620.
 */
const LENS_DATA = {
  schema: 2,
  key: "bausch-lomb-100mm-f56-us2390387",
  maker: "Bausch & Lomb",
  name: "BAUSCH & LOMB 100mm f/5.6 (US 2,390,387 Design)",
  subtitle: "US 2,390,387 A, Figure 2 — Bausch & Lomb / Rayton & Hudson",
  visible: false,
  source: {
    patentNumber: "US 2,390,387 A",
    patentYear: 1945,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Wilbur B. Rayton", "Lena M. Hudson"],
    assignees: ["Bausch & Lomb Optical Company"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 5.6,
    },
    specs: ["4 ELEMENTS / 2 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/5.6", "TELEPHOTO"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.517,
      vd: 64.5,
      indexReference: "D",
      focalLengthMm: 24.47,
      glass: "Unmatched (nD 1.5170 / ν 64.5)",
      role: "Positive front member of the collecting doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      focalLengthMm: -40.62,
      glass: "S-TIM2 (spectral proxy; patent nD 1.6210 / ν 36.2; supplier and melt unspecified)",
      role: "Negative member of the positive front doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5286,
      vd: 51.6,
      indexReference: "D",
      focalLengthMm: -33.44,
      glass: "SBF2 (spectral proxy; patent nD 1.5286 / ν 51.6; supplier and melt unspecified)",
      role: "Negative front member of the diverging rear doublet",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      focalLengthMm: 79.02,
      glass: "S-TIH18 (spectral proxy; patent nD 1.7200 / ν 29.3; supplier and melt unspecified)",
      role: "Positive member of the negative rear doublet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 16.95,
      d: 4.5,
      sd: 9.9,
      medium: 1,
    },
    {
      label: "2",
      R: -45.4,
      d: 1.3,
      sd: 9.9,
      medium: 2,
    },
    {
      label: "3",
      R: 57.4,
      d: 10.9,
      sd: 9.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 10.18,
    },
    {
      label: "4",
      R: -10.75,
      d: 1.2,
      sd: 7.2,
      medium: 3,
    },
    {
      label: "5",
      R: -28.5,
      d: 1.8,
      sd: 7.2,
      medium: 4,
    },
    {
      label: "6",
      R: -19.49,
      d: 50.30406,
      sd: 7.2,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "G1 (+)",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 (−)",
      fromSurface: "4",
      toSurface: "6",
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
      fromSurface: "4",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
