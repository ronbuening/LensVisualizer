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
 * The engine sizes the stop from the paraxial f/1.2 beam; the real marginal ray is slightly higher at the stop, so
 * the outermost few per cent of the f/1.2 pupil is cut by the stop itself, not by a lens rim.
 *
 * No production lens is identified with this example.
 */
const LENS_DATA = {
  schema: 2,
  key: "zeiss-ikon-bertele-us2141733-fig2-patent-reference",
  maker: "Carl Zeiss Jena",
  name: "BERTELE f/1.2 PATENT REFERENCE",
  subtitle: "1938 FIGURE 2; PATENT ONLY",
  visible: false,
  catalog: {
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "ESTIMATED STOP AND RIMS",
      "LITERAL ZERO AXIAL REAR AIR GAP",
      "INFINITY ONLY",
    ],
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
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive meniscus",
      nd: 1.6664,
      vd: 48.6,
      indexReference: "d",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive meniscus",
      nd: 1.6203,
      vd: 60.2,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex",
      nd: 1.4645,
      vd: 65.7,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Plano-convex",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Plano-convex",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "d",
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
      sd: 42,
      medium: 2,
    },
    {
      label: "4",
      R: 137.78,
      d: 16.11,
      sd: 42,
      medium: 3,
    },
    {
      label: "5",
      R: -271.11,
      d: 12.78,
      sd: 42,
      medium: 4,
    },
    {
      label: "6",
      R: 32.44,
      d: 12,
      sd: 28,
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
      sd: 25,
      medium: 5,
    },
    {
      label: "8",
      R: "flat",
      d: 0,
      sd: 25,
    },
    {
      label: "9",
      R: 286.33,
      d: 5.56,
      sd: 25,
      medium: 6,
    },
    {
      label: "10",
      R: "flat",
      d: 30.0533,
      sd: 25,
    },
  ],
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only patent Fig2; literal nd/V and zero rear axial AIR gap retained; computed paraxial BFD. Estimated iris 12mm after R6; estimated rims; no exact production identity.",
  },
  groups: [],
  doublets: [{ text: "T1", fromSurface: "3", toSurface: "6" }],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
