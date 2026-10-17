import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SCHNEIDER-KREUZNACH RETINA-XENON C 50mm f/2                        ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: CH 352844, Zahlenbeispiel A (Example 1), Günter Klemt /                 ║
 * ║ Jos. Schneider & Co. Optische Werke. The production correlation to the           ║
 * ║ Retina-Xenon C 50mm f/2 is convergent but not manufacturer-confirmed as this      ║
 * ║ patent example.                                                                    ║
 * ║                                                                                    ║
 * ║ Prescription scaling: the patent is normalized to f′ = 100 mm. Every dimensional ║
 * ║ prescription value, including the published s′ image distance, is scaled ×0.5.   ║
 * ║ Indices and Abbe values are unchanged. The selected example is all-spherical.      ║
 * ║                                                                                    ║
 * ║ Stop model: the patent publishes d5 = 21.21 mm only as a "Blendenraum" and does  ║
 * ║ not dimension a unique iris plane or diameter. The scaled 10.605 mm diaphragm     ║
 * ║ space is split at its deterministic midpoint (5.3025 + 5.3025 mm). Fig. 1 does    ║
 * ║ not show a physical stop plane. The stop radius is derived from the design        ║
 * ║ f-number f/2. This does not independently recover a production diaphragm diameter.║
 * ║                                                                                    ║
 * ║ Semi-diameters: estimated, not published. Fig. 1 supplies optical rim proportions, ║
 * ║ checked against exact spherical ray envelopes. Front and rear cemented rims use    ║
 * ║ 12.0 and 10.7 mm, with reduced stop-facing apertures below the drawn bevels. See   ║
 * ║ the audit log.                                                                     ║
 * ║                                                                                    ║
 * ║ Focus: NO_INTERNAL_RECONSTRUCTION. The manufacturer 0.762 m close-focus value is   ║
 * ║ retained as product metadata, but no finite-focus internal spacing law is invented.║
 * ║                                                                                    ║
 * ║ Glass: source-native d-line nd/νd only. Class/six-digit labels are supplier-       ║
 * ║ neutral; candidate catalog line indices or partial-dispersion data are not copied. ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "schneider-retina-xenon-c-50f2",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH RETINA-XENON C 50mm f/2 (Kodak Retina IIIc)",
  subtitle: "CH 352844 · Zahlenbeispiel A — 0.5× model; production correlation inferential",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f = 50.003 mm", "f/2", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 50, design: 50.00311336153039 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "CH 352844",
    patentYear: 1961,
    authors: ["Günter Klemt"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 61.406279864072495,
      glass: "670472 — BAF10-class (supplier unresolved)",
      apd: false,
      role: "Front positive element of patent member I.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      focalLengthMm: 36.387990452405795,
      glass: "LAC13 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Positive front element of the L2+L3 cemented pair in patent member I.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.66446,
      vd: 35.9,
      indexReference: "d",
      focalLengthMm: -23.252702913644228,
      glass: "664359 — BASF2-class (supplier unresolved)",
      apd: false,
      role: "Negative rear element of the L2+L3 cemented pair in patent member I.",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.6,
      indexReference: "d",
      focalLengthMm: -17.500450837063557,
      glass: "640346 — SF7-class (supplier unresolved)",
      apd: false,
      role: "Negative front element of the L4+L5 cemented pair in patent member II.",
      diagramLabel: "L4",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.8,
      indexReference: "d",
      focalLengthMm: 22.51773980389661,
      glass: "658508 — SSK5-class (supplier unresolved)",
      apd: false,
      role: "Positive rear element of the L4+L5 cemented pair in patent member II.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Near-Plano-Convex Positive",
      nd: 1.74472,
      vd: 44.7,
      indexReference: "d",
      focalLengthMm: 50.26074041328995,
      glass: "N-LAF2 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Rear positive element of patent member II.",
      diagramLabel: "L6",
    },
  ],

  surfaces: [
    { label: "1", R: 27.415, d: 3.355, sd: 14.1, medium: 1 },
    { label: "2", R: 78.125, d: 0.635, sd: 13.65 },
    { label: "3", R: 19.835, d: 4.465, sd: 12, medium: 2 },
    { label: "4", R: 84.16, d: 1.76, sd: 12, medium: 3 },
    { label: "5", R: 12.945, d: 5.3025, sd: 9.8 },
    // STO position is a Stage-2 model inference: midpoint of the scaled patent d5 diaphragm space.
    { label: "STO", R: "flat", d: 5.3025 },
    { label: "6", R: -15.1, d: 1.585, sd: 9.2, medium: 4 },
    { label: "7", R: 45.09, d: 5.94, sd: 10.7, medium: 5 },
    { label: "8", R: -20.935, d: 0.105, sd: 10.7 },
    { label: "9", R: 1179.685, d: 2.625, sd: 11.9, medium: 6 },
    // Final d uses the scaled published s′ = 72.4 × 0.5 = 36.2 mm, not the computed 36.218075 mm paraxial BFD.
    { label: "10", R: -38.62, d: 36.2, sd: 12.1 },
  ],

  focus: {
    closeFocusM: 0.762,
    description:
      "Infinity/source prescription only; the marketed 0.762 m close-focus distance is retained without an internal focus reconstruction.",
  },

  // Calibrated model value. The patent supplies f/2 but not a unique physical diaphragm diameter.
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I (EXCHANGEABLE)", fromSurface: "1", toSurface: "5" },
    { text: "II (FIXED)", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
