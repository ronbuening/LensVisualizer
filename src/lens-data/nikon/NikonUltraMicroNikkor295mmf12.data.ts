import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON Ultra-Micro-NIKKOR 29.5mm f/1.2                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: GB 1,050,055, Example 1 (Nippon Kogaku K.K.).        ║
 * ║  Fixed-conjugate, all-spherical, high-NA reduction objective.       ║
 * ║  9 elements / 6 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: fixed 1/25× reduction conjugate; no internal focus group.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f = 100. All radii,        ║
 * ║    thicknesses, air spaces, BFD, and inferred semi-diameters are    ║
 * ║    scaled ×0.295 to the 29.5 mm production designation. The         ║
 * ║    independent paraxial EFL after scaling is 29.110 mm because the  ║
 * ║    patent's f = 100 value is nominal rather than the exact Gaussian ║
 * ║    focal length of Example 1.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON WAVELENGTH:                                               ║
 * ║    GB 1,050,055 tabulates refractive indices at the mercury e-line  ║
 * ║    (546.07 nm), not the d-line. The LensVisualizer schema field is  ║
 * ║    named `nd`; these stored values intentionally preserve the       ║
 * ║    patent's e-line design indices.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP AND SEMI-DIAMETERS:                         ║
 * ║    The patent does not give a stop location or clear apertures.    ║
 * ║    The STO surface is inserted in the large d4 air gap at 75% of   ║
 * ║    the r4→r5 distance, consistent with the figure's front/rear     ║
 * ║    separation. The stop radius is derived from the design          ║
 * ║    f-number, F/1.2. Semi-diameters are finite-conjugate            ║
 * ║    ray-envelope estimates for the published 3.8° full field, with  ║
 * ║    conservative adjustments to keep the rendered spherical rims    ║
 * ║    and L9 rear surface within validation limits.                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ultra-micro-nikkor-295mm-f12",
  maker: "Nikon",
  name: "NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2",
  subtitle: "GB 1,050,055 Example 1 — Nippon Kogaku K.K.",

  catalog: {
    specs: [
      "9 elements / 6 groups",
      "f = 29.5 mm nominal; e-line EFL ≈ 29.11 mm",
      "F/1.2",
      "1/25× reduction objective",
      "all-spherical",
    ],
    elementCount: 9,
    groupCount: 6,
    focalLengthMm: { marketing: 29.5, design: 29.11 },
    fNumber: { marketing: 1.2, design: 1.2 },
  },

  source: { patentNumber: "GB 1,050,055", patentYear: 1966, authors: [], assignees: ["Nippon Kogaku K.K."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74687,
      vd: 27.7,
      indexReference: "e",
      focalLengthMm: -275.43,
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified; patent e-line index stored)",
      role: "Weak negative front meniscus; front corrector for oblique aberrations.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60752,
      vd: 38.1,
      indexReference: "e",
      focalLengthMm: 181.7,
      glass: "Unmatched (F5-class patent e-line value; no verified d-line catalog identity)",
      role: "Weak positive front-group corrector paired with L1 across the front assembly.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4485,
      vd: 67.0,
      indexReference: "e",
      focalLengthMm: 55.92,
      glass: "Unmatched low-index crown 449/670 (patent e-line index stored)",
      role: "Front positive member of the nearly afocal cemented triplet.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.69402,
      vd: 31.2,
      indexReference: "e",
      focalLengthMm: -40.64,
      glass: "Unmatched SF8-class dense flint (patent e-line index stored)",
      role: "Central negative flint member of the cemented triplet.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69451,
      vd: 54.8,
      indexReference: "e",
      focalLengthMm: 200.72,
      glass: "Unmatched (LAK9-class patent e-line value; no verified d-line catalog identity)",
      role: "Rear positive lanthanum-crown member of the cemented triplet.",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.62598,
      vd: 57.9,
      indexReference: "e",
      focalLengthMm: 77.91,
      glass: "SK15 / S-BSM15 class barium crown (patent e-line index stored)",
      role: "Positive relay element between the triplet and rear achromat.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.59865,
      vd: 39.3,
      indexReference: "e",
      focalLengthMm: -101.81,
      glass: "Unmatched (F8-class light flint; patent e-line index stored)",
      role: "Negative flint member of the rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.43498,
      vd: 94.9,
      indexReference: "e",
      focalLengthMm: 42.04,
      glass: "Calcium fluoride / CaF2 (patent e-line index stored)",
      apd: "inferred",
      apdNote: "CaF₂ low dispersion; no patent-listed partial-dispersion constants.",
      role: "Low-dispersion positive member of the rear achromat.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51871,
      vd: 64.1,
      indexReference: "e",
      focalLengthMm: 217.42,
      glass: "BK7 / S-BSL7 class borosilicate crown (patent e-line index stored)",
      role: "Thick final meniscus; field and distortion corrector at the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: -44.261, d: 4.998, sd: 13.35, medium: 1 },
    { label: "2", R: -59.118, d: 5.638, sd: 13.65 },
    { label: "3", R: 217.926, d: 14.875, sd: 15.12, medium: 2 },
    { label: "4", R: -217.926, d: 107.963, sd: 15.11 },
    { label: "STO", R: "flat", d: 35.988 },
    { label: "5", R: 85.711, d: 6.498, sd: 10.72, medium: 3 },
    { label: "6", R: -34.618, d: 1.499, sd: 10.5, medium: 4 },
    { label: "7", R: 154.948, d: 2.7, sd: 10.48, medium: 5 },
    { label: "8", R: -1379.032, d: 0.899, sd: 10.42 },
    { label: "9", R: 48.772, d: 5.038, sd: 10.22, medium: 6 },
    { label: "10", R: "flat", d: 0.72, sd: 9.88 },
    { label: "11", R: 28.24, d: 5.098, sd: 9.68, medium: 7 },
    { label: "12", R: 17.994, d: 6.498, sd: 9.18, medium: 8 },
    { label: "13", R: 999.661, d: 0.48, sd: 8.52 },
    { label: "14", R: 12.199, d: 15.435, sd: 8.18, medium: 9 },
    { label: "15", R: 7.767, sd: 6.62 },
  ],

  focus: {
    closeFocusM: 0.81,
    description:
      "Fixed-conjugate 1/25× reduction objective. The BF slider records the infinity-equivalent BFD and the patent β = −0.04 image distance; no internal focus group is present.",
  },

  gaps: { "15": { label: "BF", values: [[2.431, 3.578]] } },

  aperture: { nominalFNumber: 1.2, fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8] },

  projection: { kind: "rectilinear", fullFieldDeg: 3.8, maxTraceFieldDeg: 1.9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "13" },
    { text: "G6", fromSurface: "14", toSurface: "15" },
  ],
  doublets: [
    { text: "T1", fromSurface: "5", toSurface: "8" },
    { text: "D1", fromSurface: "11", toSurface: "13" },
  ],

  layout: { scFill: 0.92, yScFill: 0.42, maxAspectRatio: 3.0 },
} satisfies LensDataV2Input;

export default LENS_DATA;
