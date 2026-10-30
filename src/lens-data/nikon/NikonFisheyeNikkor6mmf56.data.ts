import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon Fisheye-Nikkor 6mm f/5.6              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,524,697 Example 1 (Isshiki / Matsuki).          ║
 * ║  Mirror-lock-up circular fisheye, patent normalized at f≈10.       ║
 * ║  9 powered elements / 6 groups + optional filter, all spherical.                       ║
 * ║  Focus: fixed-focus; no variable air spacings in the patent.       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Example 1 computes to EFL = 10.004615486. All radii,     ║
 * ║    thicknesses, BFD, and estimated semi-diameters are scaled by     ║
 * ║    ×0.599723199 to the manufacturer nominal 6.0 mm focal length.       ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER:                                                   ║
 * ║    Patent L5 is optional; this model includes its printed plane plate.   ║
 * ║    Physical d7/d8/d9 = 3.2/1.9/6.4 are scaled by the existing factor.   ║
 * ║    The inferred stop's axial station is preserved; no t/n gap folding.   ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SD values are       ║
 * ║    conservative estimates from Fig. 1 proportions, stop geometry,   ║
 * ║    spherical rim-slope limits, edge thickness, and cross-gap sag.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * 2026-10-30: Fresh original figure/media-table review; exposed lands and
 * source-filter restoration are documented in the audit sidecar.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-fisheye-nikkor-6mm-f56",
  maker: "Nikon",
  name: "NIKON FISHEYE-NIKKOR 6mm f/5.6",
  subtitle: "US 3,524,697 Fig. 1 — Isshiki / Matsuki",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["9 powered elements / 6 groups + optional filter included", "f ≈ 6.00 mm", "F/5.6", "2ω = 220°", "all-spherical"],
    elementCount: 9,
    groupCount: 6,
    focalLengthMm: { marketing: 6, design: 6.0 },
    fNumber: { marketing: 5.6, design: 5.6 },
  },

  source: {
    patentNumber: "US 3,524,697",
    example: { label: "Figure 1", id: "1" },
    patentYear: 1970,
    authors: ["Masaki Isshiki", "Keiji Matsuki"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Patent L1",
      type: "Negative Meniscus",
      nd: 1.61272,
      vd: 58.6,
      focalLengthMm: -46.53,
      glass: "BACD4 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "First strongly curved negative meniscus for extreme-field angular compression.",
    },
    {
      id: 2,
      name: "L2",
      label: "Patent L2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -16.78,
      glass: "N-SK16 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Second negative meniscus; the stronger front-group angular compressor.",
    },
    {
      id: 3,
      name: "L3",
      label: "Patent L3",
      type: "Biconcave Negative",
      nd: 1.48848,
      vd: 70.3,
      focalLengthMm: -16.62,
      glass: "N-FK5 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Low-dispersion negative member of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Patent L4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.0,
      focalLengthMm: 17.33,
      glass: "FD110 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Dense-flint positive member of the front doublet; lateral-color correction.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L5 Filter",
      label: "Patent L5 optional filter",
      type: "Plane-Parallel Plate",
      nd: 1.51743,
      vd: 58.5,
      indexReference: "d",
      glass: "J-K3 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Source-included optional internal filter; this model includes the printed plate and physical gaps.",
    },
    {
      id: 5,
      name: "L6",
      label: "Patent L6",
      type: "Biconcave Negative",
      nd: 1.78477,
      vd: 26.0,
      focalLengthMm: -11.26,
      glass: "S-TIH11 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Dense-flint negative member of the rear chromatic-correction doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L7",
      label: "Patent L7",
      type: "Biconvex Positive",
      nd: 1.74372,
      vd: 45.0,
      focalLengthMm: 10.15,
      glass: "N-LAF2 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "High-index positive member behind the stop; longitudinal chromatic correction with L6.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L8",
      label: "Patent L8",
      type: "Positive Meniscus",
      nd: 1.76764,
      vd: 46.5,
      focalLengthMm: 24.83,
      glass: "J-LASFH2 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Air-spaced positive meniscus; field-shaping and rear-group power balance.",
    },
    {
      id: 8,
      name: "L9",
      label: "Patent L9",
      type: "Negative Meniscus",
      nd: 1.78485,
      vd: 26.0,
      focalLengthMm: -26.65,
      glass: "S-TIH11 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Dense-flint negative member of the final cemented doublet; astigmatism and lateral-color balance.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L10",
      label: "Patent L10",
      type: "Biconvex Positive",
      nd: 1.6223,
      vd: 53.1,
      focalLengthMm: 17.5,
      glass: "S-BSM22 (catalog-compatible spectral proxy; production supplier unresolved)",
      apd: false,
      role: "Thick final positive element; image-side convergence and final field/chromatic balancing.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 53.20864, d: 2.69875, sd: 34.5, medium: 1 }, // patent r1; L1 front
    { label: "2", R: 18.2052, d: 14.69322, sd: 16.35, rimExtensionSd: 34.5 }, // patent r2; L1 rear
    { label: "3", R: 53.75139, d: 2.33892, sd: 16.1, medium: 2 }, // patent r3; L2 front
    { label: "4", R: 8.57664, d: 9.29571, sd: 7.65, rimExtensionSd: 16.1 }, // patent r4; L2 rear
    { label: "5", R: -39.75085, d: 0.77964, sd: 6.7, medium: 3 }, // patent r5; L3 front
    { label: "6", R: 10.27146, d: 3.47839, sd: 6.7, medium: 4 }, // patent r6; L3/L4 cemented surface
    { label: "7", R: 35.73511, d: 1.9191142368, sd: 6.7 }, // patent r7; source d7 = 3.2 × scale
    { label: "FILTER1", R: "flat", d: 1.1394740781, sd: 4.5, medium: 10 }, // patent r8; source d8 = 1.9 × scale
    { label: "FILTER2", R: "flat", d: 0.2111716851, sd: 4.5 }, // patent r9; split source d9 to preserve inferred stop station
    { label: "STO", R: "flat", d: 3.6270567885 }, // original stop coordinate; remaining source 6.4 × scale air
    { label: "8", R: -1931.61786, d: 3.35845, sd: 6.7, medium: 5 }, // patent r10; L6 front
    { label: "9", R: 8.8855, d: 6.77687, sd: 6.7, medium: 6 }, // patent r11; L6/L7 cemented surface
    { label: "10", R: -33.8034, d: 0.11994, sd: 6.7 }, // patent r12; L7 rear
    { label: "11", R: -183.5039, d: 2.87867, sd: 7.8, medium: 7 }, // patent r13; L8 front
    { label: "12", R: -17.38478, d: 10.31524, sd: 7.8 }, // patent r14; L8 rear
    { label: "13", R: 38.63237, d: 1.55928, sd: 10.1, medium: 8 }, // patent r15; L9 front
    { label: "14", R: 13.32825, d: 10.43518, sd: 10.1, medium: 9 }, // patent r16; L9/L10 cemented surface
    { label: "15", R: -41.68556, d: 10.71129, sd: 10.1 }, // patent r17; L10 rear to image plane
  ],

  focus: {
    closeFocusM: 0.3,
    description: "Fixed-focus mirror-lock-up fisheye; the patent publishes no variable air spacings.",
  },

  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: {
    kind: "fisheye-equidistant",
    focalLengthMm: 6.0,
    fullFieldDeg: 220,
    imageCircleMm: 21.6,
    maxTraceFieldDeg: 110,
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  layout: { scFill: 0.72, yScFill: 0.68 },
} satisfies LensDataV2Input;

export default LENS_DATA;
