import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Fred E. Altman's US 2,343,629 A, Example 2, Figures 3–4, in millimetres.
 * Four air-spaced spherical elements retain the drawing table's radii, thicknesses,
 * sodium-D indices and Abbe numbers. The printed 100 mm focal length and 80.4 mm
 * back focus compute to 100.26 mm and 80.61 mm; the paraxial image plane is retained.
 * Examples 1 and 3 also show small departures from their stated first-order values.
 * The stop is inferred within the 10.15 mm rear air gap, split as 6.0 + 4.15 mm;
 * its radius is derived from f/3.5. Clear semi-diameters are estimated from Figure 3,
 * with larger front rims preserving wide-open illumination and the middle facing
 * rims limited by their air clearance. Surface 6 follows the inner end of the drawn bevel.
 * The stated field extends upwards of 27° from the axis. The image-circle diameter
 * is twice the real chief-ray height at 27° on the paraxial image plane.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f35-us2343629",
  maker: "Kodak",
  name: "KODAK 100mm f/3.5 (US 2,343,629 Design)",
  subtitle: "US 2,343,629 A, Example 2 — Eastman Kodak / Altman",
  visible: true,
  source: {
    patentNumber: "US 2,343,629 A",
    patentYear: 1944,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.26,
    },
    fNumber: {
      design: 3.5,
    },
    elementCount: 4,
    groupCount: 4,
    imageCircleMm: 101.14,
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/3.5",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      role: "Positive front collector with a planar rear surface",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 82.32,
      glass: "Unmatched (nD 1.611 / ν 57.2)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Weak positive meniscus between the front collector and negative element",
      nd: 1.605,
      vd: 38,
      indexReference: "D",
      focalLengthMm: 438.48,
      glass: "F15 (spectral proxy; patent nD 1.605 / ν 38.0; supplier and melt unspecified)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      role: "Negative dispersive element ahead of the aperture stop",
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      focalLengthMm: -39.08,
      glass: "PBM22 (spectral proxy; patent nD 1.649 / ν 33.8; supplier and melt unspecified)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      role: "Positive rear element that brings the beam to the image plane",
      nd: 1.62,
      vd: 60.2,
      indexReference: "D",
      focalLengthMm: 57.2,
      glass: "J-SK16 (spectral proxy; patent nD 1.620 / ν 60.2; supplier and melt unspecified)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 50.3,
      d: 5.5,
      sd: 19.3,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 0.5,
      sd: 19.3,
    },
    {
      label: "3",
      R: 50,
      d: 9.5,
      sd: 16.1,
      medium: 2,
    },
    {
      label: "4",
      R: 57.2,
      d: 2.8,
      sd: 12.25,
    },
    {
      label: "5",
      R: -65.74,
      d: 3,
      sd: 12.25,
      medium: 3,
    },
    {
      label: "6",
      R: 42.04,
      d: 6,
      sd: 12.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.15,
    },
    {
      label: "7",
      R: 176.6,
      d: 5.6,
      sd: 16,
      medium: 4,
    },
    {
      label: "8",
      R: -43.84,
      d: 80.607861,
      sd: 16,
    },
  ],
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 54,
    maxTraceFieldDeg: 27,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Group 1 · Element 1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Group 2 · Element 2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Group 3 · Element 3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "Group 4 · Element 4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
