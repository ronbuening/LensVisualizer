import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S62-078520 A, Numerical Example 1: PDF pp. 3–4 (printed 113–114), Figure 1 on p. 5.
 * Original-PDF shape/glass review: 2026-10-30. The normalized prescription is scaled uniformly by 28;
 * source R/d, the exact R2 polynomial conversion, derived iris and static-focus controls are preserved.
 * R2A clear sd 14.5 mm and outer shoulder 17 mm follow the resolved Figure 1 rim conservatively.
 * Other inferred caps remain within schematic reading uncertainty; these are not factory diameters.
 * The printed D7 = 0.01 and D9 = 0.00 remain 0.28 and 0 mm. Existing gapSagFrac = 1 is unchanged.
 * S7 still limits the stated wide-open beam: the required 6.5 mm raise overlaps the next element.
 * No finite-focus trajectory, plate, bonded land or inferred rim cut is introduced.
 * The source defines Ni/νi without a spectral reference. All five numeric pairs are retained with an
 * approximate d-line convention, no active catalog curves, and no supplier, melt or chemistry identification.
 * Twenty unsupported catalog-derived C/F/g/partial-dispersion overrides are removed.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28mm-f2-8",
  maker: "Canon",
  name: "CANON EF 28mm f/2.8",
  subtitle: "JP S62-078520 A, Numerical Example 1 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "5 ELEMENTS / 5 GROUPS",
      "f = 28.219 mm (MODELED)",
      "F/2.8",
      "2ω = 74°",
      "1 ASPHERICAL SURFACE",
      "MFD 0.3 m / 0.13×",
    ],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: { marketing: 28, design: 28.219375888477686 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP S62-078520 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 1987,
    authors: ["Takashi Matsushita"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -40.133858724,
      glass: "Unmatched (source 1.60311/60.7; spectral reference and historical medium unidentified)",
      indexReferenceNote: "The original defines Ni and νi without identifying their spectral reference. These literal pairs use approximate d-line tracing; no catalog curve, historical supplier, melt or chemistry is established.",
      role: "Front negative meniscus; its rear asphere supplies the principal wide-angle correction.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 33.841845873,
      glass: "Unmatched (source 1.78590/44.2; spectral reference and historical medium unidentified)",
      indexReferenceNote: "The original defines Ni and νi without identifying their spectral reference. These literal pairs use approximate d-line tracing; no catalog curve, historical supplier, melt or chemistry is established.",
      role: "Front positive element that restores power after L1 and precedes the aperture stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -17.659709222,
      glass: "Unmatched (source 1.84666/23.9; spectral reference and historical medium unidentified)",
      indexReferenceNote: "The original defines Ni and νi without identifying their spectral reference. These literal pairs use approximate d-line tracing; no catalog curve, historical supplier, melt or chemistry is established.",
      role: "High-index, high-dispersion negative element behind the stop; balances the positive rear pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.79952,
      vd: 42.2,
      focalLengthMm: 25.168233868,
      glass: "Unmatched (source 1.79952/42.2; spectral reference and historical medium unidentified)",
      indexReferenceNote: "The original defines Ni and νi without identifying their spectral reference. These literal pairs use approximate d-line tracing; no catalog curve, historical supplier, melt or chemistry is established.",
      role: "Strong rear positive element with a nearly flat front surface and strongly powered rear surface.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 42.862940291,
      glass: "Unmatched (source 1.78590/44.2; spectral reference and historical medium unidentified)",
      indexReferenceNote: "The original defines Ni and νi without identifying their spectral reference. These literal pairs use approximate d-line tracing; no catalog curve, historical supplier, melt or chemistry is established.",
      role: "Final positive element that completes the rear relay and establishes the long back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 48.776, d: 1.96, sd: 17, medium: 1 },
    {
      label: "2A",
      R: 15.932627745533175,
      d: 18.48,
      sd: 14.5,
      rimExtensionSd: 17,
      asphere: {
        K: -1,
        A4: 2.6020408163265307e-5,
        A6: 2.959843740703278e-8,
        A8: 6.458938837665429e-11,
        A10: 2.121292568484027e-13,
        A12: 0,
        A14: 0,
      },
    },
    { label: "3", R: 32.396, d: 5.88, sd: 9.8, medium: 2 },
    { label: "4", R: -136.696, d: 8.96, sd: 9.8 },
    { label: "STO", R: "flat", d: 3.64 },
    { label: "6", R: -19.32, d: 2.52, sd: 6.2, medium: 3 },
    { label: "7", R: 70.084, d: 0.28, sd: 6 },
    { label: "8", R: 4029.76, d: 3.36, sd: 6.5, medium: 4 },
    { label: "9", R: -20.216, d: 0, sd: 7.3 },
    { label: "10", R: 218.792, d: 2.8, sd: 8, medium: 5 },
    { label: "11", R: -39.592, d: 37.14633554107551, sd: 8 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes only one infinity prescription and no moving-group or spacing states; the production 0.3 m MFD is retained as metadata without invented internal motion.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 5 },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.34 },

  checks: { gapSagFrac: 1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
