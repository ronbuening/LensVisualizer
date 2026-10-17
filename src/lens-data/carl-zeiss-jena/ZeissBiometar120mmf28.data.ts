import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CARL ZEISS JENA BIOMETAR 120mm f/2.8
 *
 * Data source: US 2,968,221, Example II (Harry Zöllner / VEB Carl Zeiss Jena).
 * Five elements in four groups; elements II and III are cemented. All surfaces are spherical or plane.
 * Production correlation: the patent example is correlated, but not manufacturer-confirmed, to the 60×60
 * BIOMETAR 2,8/120 mm documented by VEB Carl Zeiss JENA in brochure 54-093-1.
 *
 * Scaling: the patent prescription is normalized to f = 100. Every dimensional prescription value is scaled ×1.2
 * for the 120 mm production target. Refractive indices and Abbe numbers are unchanged. There are no aspheres.
 *
 * Source discrepancy: the patent prints fII = +46.33 while r3 = +30.3, r4 = plane, and ndII = 1.6584 imply
 * fII = +46.020656... in the normalized prescription. The surface prescription is retained unchanged; the element
 * focal lengths below are recomputed from the implemented prescription rather than forcing the conflicting table value.
 *
 * Stop model: the diaphragm is published only as lying in l2 between r5 and r6. Its axial position is inferred from
 * Fig. 1 at 46% of that air gap from r5. The physical diaphragm diameter is unpublished; the stop radius is derived
 * from the design f-number (f/2.8).
 *
 * Semi-diameters: no source SDs are published. Surface SDs are modeled from an exact meridional spherical-ray sample
 * spanning ±13.8° (0.6 × the patent's 23° half-field) and the full modeled stop pupil, then expanded by 8%
 * and rounded upward to 0.01 mm. They are modeling clear apertures, not measured production dimensions.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. The optical prescription is the static infinity state only. The production 1.3 m
 * minimum focus distance is retained as product metadata; no unsupported internal spacing law is invented.
 */

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-biometar-120f28",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA BIOMETAR 120mm f/2.8",
  subtitle: "US 2,968,221 Example II — ×1.2 model; correlated to the 60×60 Biometar 2.8/120",

  catalog: {
    lensMounts: ["pentacon-six"],
    imageFormat: "6x6",
    specs: ["5 ELEMENTS / 4 GROUPS", "f = 119.232 mm (design)", "F/2.8 (modeled calibration)", "PATENT 2ω = 46°"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 120, design: 119.231996 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 2,968,221",
    patentYear: 1961,
    authors: ["Harry Zöllner"],
    assignees: ["VEB Carl Zeiss Jena"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element I",
      type: "Positive Meniscus, convex to object",
      nd: 1.6676,
      vd: 41.9,
      indexReference: "d",
      focalLengthMm: 160.870524,
      glass: "668419 — coordinate class (supplier unresolved)",
      apd: false,
      role: "Front convergent meniscus before the diaphragm.",
      diagramLabel: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element II",
      type: "Plano-Convex Positive",
      nd: 1.6584,
      vd: 50.8,
      indexReference: "d",
      focalLengthMm: 55.224787,
      glass: "658508 — coordinate class (supplier unresolved)",
      apd: false,
      role: "Positive front member of the cemented dispersive meniscus II+III.",
      diagramLabel: "II",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element III",
      type: "Plano-Concave Negative",
      nd: 1.6483,
      vd: 33.8,
      indexReference: "d",
      focalLengthMm: -35.539102,
      glass: "648338 — coordinate class (supplier unresolved)",
      apd: false,
      role: "Negative rear member of the cemented dispersive meniscus II+III.",
      diagramLabel: "III",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element IV",
      type: "Negative Meniscus, concave to object",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -149.398146,
      glass: "728283 — coordinate class (supplier unresolved)",
      apd: false,
      role: "Rear-side dispersive meniscus immediately behind the diaphragm.",
      diagramLabel: "IV",
    },
    {
      id: 5,
      name: "L5",
      label: "Element V",
      type: "Positive Meniscus, convex to image",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 69.764299,
      glass: "620603 — coordinate class (supplier unresolved)",
      apd: false,
      role: "Rear convergent meniscus completing the modified-Gauss system.",
      diagramLabel: "V",
    },
  ],

  surfaces: [
    { label: "1", R: 54.96, d: 8.64, sd: 31.59, medium: 1 },
    { label: "2", R: 105.48, d: 0.204, sd: 29.94 },
    { label: "3", R: 36.36, d: 12.6, sd: 26.75, medium: 2 },
    { label: "4", R: "flat", d: 3.0, sd: 24.79, medium: 3 },
    { label: "5", R: 23.04, d: 11.5368, sd: 17.87 },
    { label: "STO", R: "flat", d: 13.5432 },
    { label: "6", R: -21.96, d: 3.12, sd: 17.98, medium: 4 },
    { label: "7", R: -29.16, d: 0.096, sd: 20.54 },
    { label: "8", R: -140.4, d: 9.72, sd: 23.48, medium: 5 },
    { label: "9", R: -33.96, d: 83.855413, sd: 24.53 },
  ],

  focus: {
    closeFocusM: 1.3,
    description: "Not modeled: infinity prescription only; 1.3 m MFD is metadata, with no internal motion modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
