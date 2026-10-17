import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 *
 *  LENS DATA — RUSSAR-21 60mm f/18
 *
 *  Source: US 2,516,724 A, Example I (M. M. Roossinov).
 *  Six elements / four air-separated groups; all spherical.
 *  Focus: fixed published prescription; no internal reconstruction.
 *
 *  Normalization: bracketed-millimeter source branch, including the
 *  documented l2 correction to 0.441 mm. No uniform scaling.
 *  The 4.5 mm published diaphragm is placed at the midpoint of l2.
 *
 *  Semi-diameters are modeled active apertures, not blank diameters.
 *  Source sagittas/diameters guide the central rims; ray envelopes
 *  bound the remaining active apertures.
 *  Source full radii are 32.5 mm at the outer faces and 10 mm at
 *  the central cemented interfaces. L4 documents its unequal-aperture ratio.
 *  Surfaces 2 and 9 are source major spherical segments; LensVisualizer
 *  stores the forward-ray pre-equator branch to sd = 19.598 mm and
 *  does not render the optically unused post-equator lip.
 *  maxRimAngleDeg is raised only for those source-backed near-
 *  hemispherical surfaces.
 *
 *  The patent does not publish a production MFD. closeFocusM is a
 *  non-operative schema placeholder because var is empty; it is not
 *  a claimed physical focusing distance.
 *
 *  Historical Lenzos indices are retained as published. The patent
 *  does not identify the exact D/d reference. Historical class cross-references
 *  support explicitly qualified modern spectral proxies, not melt identities.
 *
 */

const LENS_DATA = {
  schema: 2,
  key: "russar-21-60f18",
  // Russar is a design family; the historical manufacturer is unconfirmed.
  maker: null,
  name: "RUSSAR-21 60mm f/18",
  subtitle: "US 2,516,724 A — Example I; strong Russar-21 correlation, not manufacturer-confirmed production drawing",

  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "f = 59.426 mm", "F/17.929", "133° PUBLISHED FIELD", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 59.42580334941011 },
    fNumber: { design: 17.928942968865105 },
  },

  source: {
    patentNumber: "US 2,516,724 A",
    patentYear: 1950,
    authors: ["Michael Michaelovitch Roossinov"],
    assignees: [],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6395,
      vd: 43.3,
      focalLengthMm: -72.57414789414611,
      glass: "Unmatched (Lenzos L-67; nd=1.6395, vd=43.3; reference wavelength unstated)",
      role: "Front exterior negative meniscus; source geometry is near-hemispherical on its inner surface.",
      diagramLabel: "1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      focalLengthMm: 24.638633126651534,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the front cemented medial member.",
      diagramLabel: "2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      focalLengthMm: -34.80083968325312,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the front cemented medial member.",
      diagramLabel: "3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      focalLengthMm: -34.80083968325312,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the rear cemented medial member.",
      diagramLabel: "4",
      // Patent Example I: 10 mm cemented radius / 2.2671 mm stop-facing radius.
      maxSdRatio: 4.5,
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      focalLengthMm: 24.638633126651534,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the rear cemented medial member.",
      diagramLabel: "5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6259,
      vd: 39.1,
      focalLengthMm: -73.13588762106855,
      glass: "H-BaF8 spectral proxy (Lenzos L-15 / historical BaSF1 class; production melt unresolved)",
      role: "Rear exterior negative meniscus; source geometry is near-hemispherical on its inner surface.",
      diagramLabel: "6",
    },
  ],

  surfaces: [
    { label: "1", R: 35.218, d: 1.91, sd: 32.5, medium: 1 },
    { label: "2", R: 19.6, d: 31.44, sd: 19.598 },
    { label: "3", R: 42.2, d: 8.17, sd: 10, medium: 2 },
    { label: "4", R: -21.77, d: 2.72, sd: 10, medium: 3 },
    { label: "5", R: 160.62, d: 0.2205, sd: 5 },
    // US 2,516,724 A Example I diaphragm text and data list print a 4.5 mm central diaphragm aperture.
    { label: "STO", R: "flat", d: 0.2205 },
    { label: "6", R: -160.62, d: 2.72, sd: 2.2671, medium: 4 },
    { label: "7", R: 21.77, d: 8.17, sd: 10, medium: 5 },
    { label: "8", R: -42.2, d: 31.44, sd: 10 },
    { label: "9", R: -19.6, d: 1.91, sd: 19.598, medium: 6 },
    { label: "10", R: -35.562, d: 31.91133191002311, sd: 32.5 },
  ],

  focus: {
    closeFocusM: 1000000,
    description: "Fixed patent prescription at infinity; no finite-focus movement is modeled.",
  },

  aperture: { nominalFNumber: 17.928942968865105, fStops: [18, 22, 32], maxFNumber: 32 },

  projection: { kind: "rectilinear", fullFieldDeg: 133, maxTraceFieldDeg: 66.5 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.55 },

  checks: { maxRimAngleDeg: 89.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
