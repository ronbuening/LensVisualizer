import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — KONICA FL-HEXANON AR 300mm f/6.3                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 1974-023892, Example 1 (Masamichi Kitagawa / Konishiroku).  ║
 * ║ Nine elements in five air-separated groups; all surfaces are spherical.    ║
 * ║                                                                            ║
 * ║ SCALING: The patent is normalized to f = 1.0. Every patent R and d is      ║
 * ║ scaled literally by s = 300.000. The rounded source prescription traces    ║
 * ║ to EFL = 299.704746 mm rather than being renormalized to 300 mm.            ║
 * ║ The patent-published fB = 0.1736 is retained as the final d = 52.080 mm;   ║
 * ║ independent paraxial best focus is 51.982347 mm behind surface 14.          ║
 * ║                                                                            ║
 * ║ STOP: The patent places the Seidel stop at the tangent plane of surface 1. ║
 * ║ STO is therefore coincident with surface 1 (d = 0). The physical diameter  ║
 * ║ is not published; the stop radius derives from the design f-number, f/6.3. ║
 * ║                                                                            ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent publishes infinity only.     ║
 * ║ The manufacturer's 4.5 m minimum focus is metadata only; var remains empty.║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: Not published. SDs are inferred from the wide-open ray     ║
 * ║ envelope, the patent Fig. 1 silhouette, and geometry validation. The full  ║
 * ║ 4.125° half-field intentionally allows outermost pupil rays to vignette at ║
 * ║ surface 5, the air-exposed entrance of the cemented triplet; the standard  ║
 * ║ 0.6-field rendered bundles clear all internal cemented interfaces.          ║
 * ║                                                                            ║
 * ║ The production protective optical flat is excluded from this patent model. ║
 * ║ Glass labels preserve the patent coordinates and supplier uncertainty;      ║
 * ║ compatible catalog curves are coefficient proxies, not production IDs.      ║
 * ║ No nC, nF, ng, or dPgF values are published, so none are invented here.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-fl-hexanon-ar-300mm-f63",
  maker: "Konica",
  name: "KONICA FL-HEXANON AR 300mm f/6.3",
  subtitle: "JP 1974-023892 Example 1 — literal ×300 scale; Konica 300mm f/6.3 fluorite correlation",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 5 GROUPS",
      "300mm f/6.3 (MARKETED)",
      "EFL 299.705 mm (TRACED)",
      "8.25° FULL FIELD (PATENT)",
      "ALL SPHERICAL",
    ],
    elementCount: 9,
    groupCount: 5,
    focalLengthMm: { marketing: 300, design: 299.704746 },
    fNumber: { marketing: 6.3, design: 6.3 },
  },

  source: {
    patentNumber: "JP 1974-023892 B1",
    patentYear: 1974,
    authors: ["Masamichi Kitagawa"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 — FLUORITE",
      type: "Positive Meniscus",
      nd: 1.43389,
      vd: 94.7,
      focalLengthMm: 197.238653,
      glass: "Fluorite (CaF₂ crystal; supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Fluorite assignment follows the CaF₂ coordinate and Konica's two-fluorite production literature; the patent publishes nd/νd only.",
      role: "First positive front-group element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 — FLUORITE",
      type: "Positive Meniscus",
      nd: 1.43389,
      vd: 94.7,
      focalLengthMm: 126.333573,
      glass: "Fluorite (CaF₂ crystal; supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Fluorite assignment follows the CaF₂ coordinate and Konica's two-fluorite production literature; the patent publishes nd/νd only.",
      role: "Second positive front-group element; paired with L1 across a 0.3 mm air gap.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.6,
      focalLengthMm: -38.587412,
      glass: "804396 class; S-LAH63Q catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative front member of the central cemented triplet.",
      cemented: "J1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.51118,
      vd: 50.9,
      focalLengthMm: 30.047986,
      glass: "511509 class; KF8 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Strong positive center member of the central cemented triplet.",
      cemented: "J1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49831,
      vd: 65,
      focalLengthMm: -51.299284,
      glass: "498650 class; BSL3 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative rear member of the central cemented triplet.",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7865,
      vd: 50.1,
      focalLengthMm: -29.418622,
      glass: "787501 class; YGH52 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative front member of the first rear cemented doublet.",
      cemented: "J2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      focalLengthMm: 88.27418,
      glass: "593354 class; FF5 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Positive rear member of the first rear cemented doublet.",
      cemented: "J2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      focalLengthMm: 30.332565,
      glass: "593354 class; FF5 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Positive front member of the final cemented doublet.",
      cemented: "J3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.81554,
      vd: 44.5,
      focalLengthMm: -36.004587,
      glass: "816445 class; TAFD10 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative rear member of the final cemented doublet.",
      cemented: "J3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // Source-defined Seidel stop plane; stop size is not patent-published; radius derived from the design f-number.
    { label: "STO", R: "flat", d: 0 },
    { label: "1", R: 79.74, d: 6, sd: 24.5, medium: 1 },
    { label: "2", R: 1141.935, d: 0.3, sd: 24.5 },
    { label: "3", R: 41.205, d: 7.5, sd: 24, medium: 2 },
    { label: "4", R: 156.816, d: 14.4, sd: 24 },
    { label: "5", R: 1320, d: 2.01, sd: 18.2, medium: 3 },
    { label: "6", R: 30.306, d: 13.65, sd: 18.2, medium: 4 },
    { label: "7", R: -26.4, d: 2.01, sd: 18.2, medium: 5 },
    { label: "8", R: 826.65, d: 65.7, sd: 18.2 },
    { label: "9", R: -40.95, d: 1.5, sd: 13.2, medium: 6 },
    { label: "10", R: 54.051, d: 2.4, sd: 13.2, medium: 7 },
    { label: "11", R: -1606.815, d: 0.3, sd: 13.2 },
    { label: "12", R: 49.5, d: 6.51, sd: 13.2, medium: 8 },
    { label: "13", R: -26.85, d: 1.5, sd: 13.2, medium: 9 },
    { label: "14", R: -321.579, d: 52.08, sd: 13.2 },
  ],

  focus: {
    closeFocusM: 4.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes the infinity prescription only; the 4.5 m manufacturer " +
      "MFD is metadata and no focus motion is modeled.",
  },

  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "4" },
    { text: "G3 (−)", fromSurface: "5", toSurface: "8" },
    { text: "G4 (−)", fromSurface: "9", toSurface: "11" },
    { text: "G5 (+)", fromSurface: "12", toSurface: "14" },
  ],
  doublets: [
    { text: "J1", fromSurface: "5", toSurface: "8" },
    { text: "J2", fromSurface: "9", toSurface: "11" },
    { text: "J3", fromSurface: "12", toSurface: "14" },
  ],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
