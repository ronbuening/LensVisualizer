import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,540,752 A, Figure 4 numerical example (William F. Bielicke, granted 1925).
 * Four air-spaced spherical singlets, object at left, at the patent's own scale
 * ("Focus 100 mm, Diameter 50 mm"); no scaling or unit conversion is applied.
 * Radii, signs, glass thicknesses, air spaces and nD are the printed values; the
 * drawing-sheet table and the typeset table in the specification agree.
 *
 * FOCAL LENGTH: the printed table gives a paraxial focal length of 100.405 mm at
 * the D line and 100.286 mm with the printed G' indices. The patent's own ratios
 * for lenses III and IV (0.87 and 1.56 times the combined focus) match the G'
 * focal lengths of those singlets (87.74 and 156.54 mm), not the D ones (89.64
 * and 159.91 mm), so the patent's 100 mm is taken to be the G' focus. Nothing
 * is fitted to make the D-line value 100 mm.
 *
 * DISPERSION: the patent prints nD and nG' only (crown 1.60958 / 1.62273, flint
 * 1.67330 / 1.70141) and no Abbe numbers, so the model is traced at the D line
 * only and shows no colour.
 *
 * INFERRED: the stop position (the patent says only "between lens II and III";
 * it is placed mid-way in the 12.0 mm air space, as Figure 4 draws it); all
 * semi-diameters (25 mm from the printed 50 mm diameter, which Figure 4 draws
 * as the common height of all four lenses; lens I is 25.11 mm on both faces so
 * the f/2 axial beam of the 100.405 mm D-line focal length is not cut and its
 * square-cut edge stays square, as drawn; checked by real-ray trace); the back focus (computed D-line paraxial image distance). The patent
 * states no field angle, back focus or close-focus data.
 *
 * PRODUCT LINK: none is named in the patent. Bielicke designed the Astro-Berlin
 * Tachar lenses, and collector references cite this patent for the four-element
 * Tachar; no production prescription is published, so this is a family link only.
 */
const LENS_DATA = {
  schema: 2,
  key: "bielicke-100mm-f2-us1540752",
  maker: null,
  name: "BIELICKE 100mm f/2 (US 1,540,752 Design)",
  subtitle: "US 1,540,752 A, Figure 4 — four air-spaced singlets",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/2",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100.41,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 1,540,752 A",
    example: {
      label: "Figure 4",
      id: "4",
    },
    patentYear: 1925,
    authors: ["William F. Bielicke"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.60958,
      indexReference: "D",
      indexReferenceNote: "Patent nD. The patent also prints nG′ = 1.62273 and no Abbe number.",
      glass: "Unmatched (nD 1.60958, nG′ 1.62273; no Abbe number printed)",
      focalLengthMm: 88.75,
      role: "Front collective crown, strong face toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6733,
      indexReference: "D",
      indexReferenceNote: "Patent nD. The patent also prints nG′ = 1.70141 and no Abbe number.",
      glass: "Unmatched (nD 1.67330, nG′ 1.70141; no Abbe number printed)",
      focalLengthMm: -48.05,
      role: "Dispersive flint ahead of the diaphragm.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.60958,
      indexReference: "D",
      indexReferenceNote: "Patent nD. The patent also prints nG′ = 1.62273 and no Abbe number.",
      glass: "Unmatched (nD 1.60958, nG′ 1.62273; no Abbe number printed)",
      focalLengthMm: 89.64,
      role: "Collective crown meniscus behind the diaphragm, weak concave face toward it.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60958,
      indexReference: "D",
      indexReferenceNote: "Patent nD. The patent also prints nG′ = 1.62273 and no Abbe number.",
      glass: "Unmatched (nD 1.60958, nG′ 1.62273; no Abbe number printed)",
      focalLengthMm: 159.91,
      role: "Rear equiconvex collective crown.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 56,
      d: 9,
      sd: 25.11,
      medium: 1,
    },
    {
      label: "2",
      R: -1500,
      d: 17,
      sd: 25.11,
    },
    {
      label: "3",
      R: -55,
      d: 2.5,
      sd: 25,
      medium: 2,
    },
    {
      label: "4",
      R: 80,
      d: 6,
      sd: 25,
    },
    {
      label: "STO",
      R: "flat",
      d: 6,
    },
    {
      label: "5",
      R: -373,
      d: 7,
      sd: 25,
      medium: 3,
    },
    {
      label: "6",
      R: -48,
      d: 1.5,
      sd: 25,
    },
    {
      label: "7",
      R: 194,
      d: 5,
      sd: 25,
      medium: 4,
    },
    {
      label: "8",
      R: -194,
      d: 79.0457,
      sd: 25,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    maxFNumber: 22,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no close-focus data. The image plane is the computed D-line paraxial back focus, not a flange distance.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
