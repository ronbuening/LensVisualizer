import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Kodak Enlarging Ektar 100mm f/4.5
 *
 * Source prescription: US 2,279,384, Fred E. Altman / Eastman Kodak, Example 6.
 * Patent normalization: f = 100 mm; no production scaling applied.
 *
 * The patent does not tabulate clear apertures or an aperture-stop station. The stop is placed at
 * mid-S1 after surface 3. This placement preserves the patent's f/4.5 and 26° half-field with
 * manufacturable inferred semi-diameters. Semi-diameters were estimated by paraxial marginal +
 * chief-ray tracing at f/4.5 and the published 26° half-field, then adjusted to satisfy edge-thickness,
 * element-ratio, sd/|R|, and cross-gap sag-intrusion checks.
 *
 * Focus is unit focus. The close-focus value is a representative 3× enlarger conjugate, not a
 * manufacturer-published minimum-focus specification.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-enlarging-ektar-100mm-f45",
  maker: "Kodak",
  name: "KODAK ENLARGING EKTAR 100mm f/4.5",
  subtitle: "US 2,279,384 Example 6 — Eastman Kodak / Altman",

  catalog: {
    lensMounts: ["enlarging-lens"],
    specs: ["5 ELEMENTS / 3 GROUPS", "f ≈ 100.36 mm", "F/4.5", "52° FULL FIELD", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 100.355 },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "US 2,279,384",
    patentYear: 1942,
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.611,
      vd: 57.2,
      focalLengthMm: 26.68,
      glass: "Unmatched (vintage barium crown class, 611/572)",
      role: "Strong front positive crown element of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (weak rear)",
      nd: 1.573,
      vd: 57.5,
      focalLengthMm: -53.19,
      glass: "BAK1 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Low-power negative partner in the front doublet; its matched dispersion leaves R2 chiefly for rim-ray correction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.605,
      vd: 38.2,
      focalLengthMm: -32.59,
      glass: "Unmatched (vintage dense flint class, 605/382)",
      role: "Central negative triplet component and main diverging element.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.575,
      vd: 41.4,
      focalLengthMm: -78.53,
      glass:
        "J-LF7 (Hikari) / LF7 class (575414 light flint; Δnd +0.00001, Δνd +0.11; equivalent; the original Kodak melt is not known)",
      role: "Negative rear-doublet element selected in Example 6 to leave deliberate finite-conjugate color balance.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 45.8,
      focalLengthMm: 34.83,
      glass: "Unmatched (vintage high-index lanthanum flint class, 744/458)",
      role: "High-index rear positive element used to reduce astigmatism while retaining the rear group's positive power.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 28.3, d: 8.06, sd: 14.0, medium: 1 },
    { label: "2", R: -34.3, d: 2.26, sd: 13.3, medium: 2 },
    { label: "3", R: 280.1, d: 0.98, sd: 11.4 },
    { label: "STO", R: "flat", d: 0.98 },
    { label: "4", R: -72.7, d: 2.5, sd: 11.4, medium: 3 },
    { label: "5", R: 27.4, d: 5.84, sd: 12.0 },
    { label: "6", R: 400.9, d: 2.27, sd: 15.4, medium: 4 },
    { label: "7", R: 40.5, d: 5.19, sd: 15.4, medium: 5 },
    { label: "8", R: -68.0, sd: 15.8 },
  ],

  focus: {
    closeFocusM: 0.539,
    description:
      "Unit focus by enlarger bellows or lens-stage movement; the close-focus state is a representative 3× enlarger conjugate.",
  },

  gaps: { "8": { label: "BF", values: [[82.126405226, 383.191839094]] } },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { scFill: 0.5, yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
