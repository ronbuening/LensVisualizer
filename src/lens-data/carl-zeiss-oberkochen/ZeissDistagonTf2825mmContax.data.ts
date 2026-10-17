import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CARL ZEISS DISTAGON T* 25mm f/2.8 (C/Y)
 *
 * Source: DE 1 250 153, Example 2 / Table II / Figure 2 (Carl Zeiss; Erhard Glatzel).
 * The patent prescription is normalized to f = 1.00 and is uniformly scaled by 25.9 mm/f.
 * All radii, axial spacings, the modeled semi-diameters, and the image-plane distance are in millimeters.
 * The design remains all-spherical, so there are no asphere coefficients to scale.
 *
 * Production correlation: the 8-element / 7-group architecture and first-order geometry closely match the historical
 * Contax/Yashica Distagon T* 2.8/25 data, but no located ZEISS source explicitly attributes this patent example to the
 * C/Y production prescription. The scaled patent BFD remains about 0.73 mm longer than the ZEISS product value.
 *
 * Stop model: Figure 2 publishes only that the diaphragm lies inside d9. The split used here is constrained so the
 * paraxial entrance-pupil position is 23.0 mm behind the first vertex, matching the recorded ZEISS product datum.
 * The stop radius is derived from the design f-number, the patent's published f/2.8 opening ratio. Therefore the
 * resulting f/2.8 agreement is not independent evidence for an unpublished diaphragm diameter.
 *
 * Semi-diameters are modeled, not patent-published. They contain the full on-axis f/2.8 bundle, the project's default
 * off-axis bundle at 0.6 × 40° = 24°, and the ±40° chief rays, with modest geometric clearance, while satisfying the
 * current edge-thickness, rim-slope, and cross-gap policies in independent chat preflight.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies one static optical state. The 0.25 m close-focus value
 * is product metadata only; no internal focus motion is authored.
 */

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-distagon-t-25f28-contax",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS DISTAGON T* 25mm f/2.8 (C/Y)",
  subtitle: "DE 1 250 153 — Example 2 / Table II; C/Y correlation is strong but not manufacturer-confirmed",

  catalog: {
    lensMounts: ["contax-yashica"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 7 GROUPS", "DESIGN EFL 25.903 mm", "MODELED f/2.8", "PATENT FIELD 80°"],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 25, design: 25.903053 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "DE 1 250 153",
    patentYear: 1967,
    authors: ["Erhard Glatzel"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      focalLengthMm: -50.10802,
      glass: "620603 — SK16/BSM16-class (supplier unresolved)",
      diagramLabel: "LI",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 41.88,
      indexReference: "d",
      focalLengthMm: 82.474708,
      glass: "668419 — BASF6/ZBaF17/BAFD6/BAH26-class (supplier unresolved)",
      diagramLabel: "LII",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.24,
      indexReference: "d",
      focalLengthMm: -32.160113,
      glass: "589612/589613 — SK5/BAL35-class (supplier unresolved)",
      diagramLabel: "LIII",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.64328,
      vd: 47.76,
      indexReference: "d",
      focalLengthMm: 30.443992,
      glass: "643478 — BAF9/K-BaF9-class (supplier unresolved)",
      diagramLabel: "LIV",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.50137,
      vd: 56.46,
      indexReference: "d",
      focalLengthMm: 46.321353,
      glass: "501564 — K10-class (supplier unresolved)",
      diagramLabel: "LV",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      focalLengthMm: -18.107725,
      glass: "755275/755276 — SF4/TIH4-class (supplier unresolved)",
      diagramLabel: "LVI",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      focalLengthMm: 37.636464,
      glass: "620603 — SK16/BSM16-class (supplier unresolved)",
      diagramLabel: "LVII",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.76,
      indexReference: "d",
      focalLengthMm: 47.283206,
      glass: "564607/564608 — SK11-class (supplier unresolved)",
      diagramLabel: "LVIII",
    },
  ],

  surfaces: [
    { label: "1", R: 54.03776, d: 3.00958, sd: 17.5, medium: 1 },
    { label: "2", R: 19.31363, d: 7.77, sd: 13.9 },
    { label: "3", R: 138.70486, d: 14.34342, sd: 14.5, medium: 2 },
    { label: "4", R: -87.51351, d: 0.09842, sd: 11.2 },
    { label: "5", R: 26.69513, d: 2.45014, sd: 8.9, medium: 3 },
    { label: "6", R: 10.70447, d: 7.15358, sd: 7.7 },
    { label: "7", R: 24.1388, d: 6.98264, sd: 7.7, medium: 4 },
    { label: "8", R: -92.03565, d: 3.26858, sd: 7.9, medium: 5 },
    { label: "9", R: -18.76455, d: 1.283791, sd: 7.9 },
    { label: "STO", R: "flat", d: 3.885849 },
    { label: "10", R: -20.75367, d: 1.22507, sd: 6.8, medium: 6 },
    { label: "11", R: 41.11107, d: 1.554, sd: 6.9 },
    { label: "12", R: -39.37318, d: 3.24786, sd: 7.0, medium: 7 },
    { label: "13", R: -15.12042, d: 0.09842, sd: 7.5 },
    { label: "14", R: 149.04414, d: 3.55607, sd: 8.0, medium: 8 },
    { label: "15", R: -32.18852, d: 38.53143, sd: 8.4 },
  ],

  focus: {
    closeFocusM: 0.25,
    description: "Not modeled — static published patent state; 0.25 m is product MFD metadata only.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
