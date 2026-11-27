import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,141,733 A (Ludwig Bertele, Zeiss Ikon AG, granted 27 December 1938), second numerical example (Fig. 2).
 *
 * The patent gives the data for a focal length of 100 mm, a relative aperture of 1:1.2 and a picture angle of
 * +/-10 degrees. Radii, thicknesses, air spaces, nd and Abbe numbers are copied from the lower table on page 1 of the
 * specification at the patent's own scale (no scaling). The two rear lenses are separate, with a printed axial air
 * space of 0.00: they touch on the axis and are not cemented.
 *
 * Inferred, not printed: the stop position (12 mm behind R6, inside the printed 23.61 mm air space; the patent
 * draws no diaphragm), every semi-diameter, and the back focus (computed paraxial value, 30.0533 mm).
 *
 * Semi-diameters are measured from Fig. 2, which is drawn to scale (about 10.8 px/mm at 400 dpi, checked on the
 * vertex spacings and on the sags of R1 and R6): the cemented triplet is square-cut at 37.3 mm, R6 ends at 21.8 mm
 * where the drawn chamfer starts, and both rear lenses are square-cut at 26.7 mm. The figure carries the triplet's flat
 * top almost to R6's vertex plane before the chamfer, so R6 has a drawn land (rimExtensionSd) out to 37.3 mm; it traces
 * nothing. The front lens keeps 44 mm, within 4 % of the drawn 42.4-42.6 mm. Every rim clears the axial f/1.2 beam
 * (37.3 mm against 36.8 mm needed at R3). Element names and diagram labels are the patent's: L1-L4, then L6 and L7
 * for the rear pair (the patent keeps L5 for the single rear lens of Fig. 1); the groups are its three units.
 * The image circle is twice the image height of the patent's +/-10 degree picture angle at f = 100 mm.
 * The stop is sized from the paraxial f/1.2 beam; the real marginal ray is slightly higher at the stop, so the
 * outermost few per cent of the f/1.2 pupil is cut by the stop itself, not by a lens rim.
 *
 * The design is a relative of the Sonnar family with the rear collective split into two lenses. No production lens
 * is documented for it.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f12-us2141733",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/1.2 (US 2,141,733 Design)",
  subtitle: "US 2,141,733 A, Figure 2 — Bertele f/1.2 design",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "DESIGN F/1.2", "ALL SPHERICAL", "±10° FIELD"],
    imageCircleMm: 35.3,
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100.01,
    },
    fNumber: {
      design: 1.2,
    },
  },
  source: {
    patentNumber: "US 2,141,733 A",
    example: {
      label: "Figure 2",
      id: "2",
    },
    patentYear: 1938,
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6664,
      vd: 48.6,
      indexReference: "d",
      focalLengthMm: 170.44,
      glass: "Unmatched (nd 1.6664 / V 48.6)",
      role: "Collective front lens, convex to the object.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6203,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 131.66,
      glass: "Unmatched (nd 1.6203 / V 60.2)",
      role: "Positive front member of the thick cemented meniscus.",
      cemented: "C1",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4645,
      vd: 65.7,
      indexReference: "d",
      focalLengthMm: 199.16,
      glass: "FK3 (Schott)",
      role: "Low-index positive middle member of the cemented meniscus.",
      cemented: "C1",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -37.68,
      glass: "SF4 (Schott)",
      role: "Dense-flint negative rear member of the cemented meniscus; its deep concave surface faces the stop.",
      cemented: "C1",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L6",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: 74.37,
      glass: "BASF7 (Sumita)",
      role: "Main positive lens of the split rear collective.",
      diagramLabel: "L6",
    },
    {
      id: 6,
      name: "L7",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: 408.17,
      glass: "BASF7 (Sumita)",
      role: "Weak positive rear lens of the split rear collective.",
      diagramLabel: "L7",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 92.28,
      d: 14.44,
      sd: 44,
      medium: 1,
    },
    {
      label: "2",
      R: 461.21,
      d: 0.56,
      sd: 44,
    },
    {
      label: "3",
      R: 53.61,
      d: 16.39,
      sd: 37.3,
      medium: 2,
    },
    {
      label: "4",
      R: 137.78,
      d: 16.11,
      sd: 37.3,
      medium: 3,
    },
    {
      label: "5",
      R: -271.11,
      d: 12.78,
      sd: 37.3,
      medium: 4,
    },
    {
      label: "6",
      R: 32.44,
      d: 12,
      sd: 21.8,
      rimExtensionSd: 37.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 11.61,
    },
    {
      label: "7",
      R: 52.17,
      d: 10,
      sd: 26.7,
      medium: 5,
    },
    {
      label: "8",
      R: "flat",
      d: 0,
      sd: 26.7,
    },
    {
      label: "9",
      R: 286.33,
      d: 5.56,
      sd: 26.7,
      medium: 6,
    },
    {
      label: "10",
      R: "flat",
      d: 30.0533,
      sd: 26.7,
    },
  ],
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "2" },
    { text: "MENISCUS", fromSurface: "3", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "10" },
  ],
  doublets: [{ text: "C1", fromSurface: "3", toSurface: "6" }],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
