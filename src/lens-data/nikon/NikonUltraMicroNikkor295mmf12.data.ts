import type { LensDataInput } from "../../types/optics.js";

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
 * ║    The patent does not give a stop location or clear apertures.     ║
 * ║    The STO surface is inserted in the large d4 air gap at 75% of    ║
 * ║    the r4→r5 distance, consistent with the figure's front/rear      ║
 * ║    separation. Its semi-diameter is set by a paraxial entrance      ║
 * ║    pupil calculation for F/1.2. Semi-diameters are finite-conjugate ║
 * ║    ray-envelope estimates for the published 3.8° full field, with   ║
 * ║    conservative adjustments to keep the rendered spherical rims and ║
 * ║    L9 rear surface within validation limits.                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ultra-micro-nikkor-295mm-f12",
  maker: "Nikon",
  name: "NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2",
  subtitle: "GB 1,050,055 Example 1 — Nippon Kogaku K.K.",
  specs: [
    "9 elements / 6 groups",
    "f = 29.5 mm nominal; e-line EFL ≈ 29.11 mm",
    "F/1.2",
    "1/25× reduction objective",
    "all-spherical",
  ],

  focalLengthMarketing: 29.5,
  focalLengthDesign: 29.11,
  apertureMarketing: 1.2,
  apertureDesign: 1.2,
  patentYear: 1966,
  elementCount: 9,
  groupCount: 6,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 3.8,
    maxTraceFieldDeg: 1.9,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74687,
      vd: 27.7,
      fl: -275.43,
      glass: "SF13 class dense flint (patent e-line index stored)",
      role: "Weak negative front meniscus; front corrector for oblique aberrations.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60752,
      vd: 38.1,
      fl: 181.7,
      glass: "F5 class flint (patent e-line index stored)",
      role: "Weak positive front-group corrector paired with L1 across the front assembly.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4485,
      vd: 67.0,
      fl: 55.92,
      glass: "Unmatched low-index crown 449/670 (patent e-line index stored)",
      cemented: "T1",
      role: "Front positive member of the nearly afocal cemented triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.69402,
      vd: 31.2,
      fl: -40.64,
      glass: "SF8 class dense flint (patent e-line index stored)",
      cemented: "T1",
      role: "Central negative flint member of the cemented triplet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69451,
      vd: 54.8,
      fl: 200.72,
      glass: "LAK9 / S-LAL9 class lanthanum crown (patent e-line index stored)",
      cemented: "T1",
      role: "Rear positive lanthanum-crown member of the cemented triplet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.62598,
      vd: 57.9,
      fl: 77.91,
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
      fl: -101.81,
      glass: "F8 class light flint (patent e-line index stored)",
      cemented: "D1",
      role: "Negative flint member of the rear cemented doublet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.43498,
      vd: 94.9,
      fl: 42.04,
      glass: "Calcium fluoride / CaF2 (patent e-line index stored)",
      cemented: "D1",
      apd: "inferred",
      apdNote: "CaF₂ low dispersion; no patent-listed partial-dispersion constants.",
      role: "Low-dispersion positive member of the rear achromat.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51871,
      vd: 64.1,
      fl: 217.42,
      glass: "BK7 / S-BSL7 class borosilicate crown (patent e-line index stored)",
      role: "Thick final meniscus; field and distortion corrector at the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: -44.261, d: 4.998, nd: 1.74687, elemId: 1, sd: 13.35 },
    { label: "2", R: -59.118, d: 5.638, nd: 1.0, elemId: 0, sd: 13.65 },
    { label: "3", R: 217.926, d: 14.875, nd: 1.60752, elemId: 2, sd: 15.12 },
    { label: "4", R: -217.926, d: 107.963, nd: 1.0, elemId: 0, sd: 15.11 },
    { label: "STO", R: 1e15, d: 35.988, nd: 1.0, elemId: 0, sd: 9.966 },
    { label: "5", R: 85.711, d: 6.498, nd: 1.4485, elemId: 3, sd: 10.72 },
    { label: "6", R: -34.618, d: 1.499, nd: 1.69402, elemId: 4, sd: 10.5 },
    { label: "7", R: 154.948, d: 2.7, nd: 1.69451, elemId: 5, sd: 10.48 },
    { label: "8", R: -1379.032, d: 0.899, nd: 1.0, elemId: 0, sd: 10.42 },
    { label: "9", R: 48.772, d: 5.038, nd: 1.62598, elemId: 6, sd: 10.22 },
    { label: "10", R: 1e15, d: 0.72, nd: 1.0, elemId: 0, sd: 9.88 },
    { label: "11", R: 28.24, d: 5.098, nd: 1.59865, elemId: 7, sd: 9.68 },
    { label: "12", R: 17.994, d: 6.498, nd: 1.43498, elemId: 8, sd: 9.18 },
    { label: "13", R: 999.661, d: 0.48, nd: 1.0, elemId: 0, sd: 8.52 },
    { label: "14", R: 12.199, d: 15.435, nd: 1.51871, elemId: 9, sd: 8.18 },
    { label: "15", R: 7.767, d: 2.431, nd: 1.0, elemId: 0, sd: 6.62 },
  ],

  asph: {},

  var: {
    "15": [2.431, 3.578],
  },
  varLabels: [["15", "BF"]],

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

  closeFocusM: 0.81,
  focusDescription:
    "Fixed-conjugate 1/25× reduction objective. The BF slider records the infinity-equivalent BFD and the patent β = −0.04 image distance; no internal focus group is present.",

  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8],

  scFill: 0.92,
  yScFill: 0.42,
  maxAspectRatio: 3.0,
} satisfies LensDataInput;

export default LENS_DATA;
