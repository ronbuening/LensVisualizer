import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH CINE-XENON 25mm f/1.4           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 3,005,379, Table A (first numerical example).         ║
 * ║  Production correlation: inferred, not manufacturer-confirmed.     ║
 * ║  7 elements / 4 air-spaced members; all spherical.                ║
 * ║                                                                    ║
 * ║  SCALE: the patent normalizes f = 100. All dimensional prescription║
 * ║  values are scaled ×0.25 for the 25 mm production correlation.    ║
 * ║                                                                    ║
 * ║  STOP: Figure 1 locates D only qualitatively inside d6. The model  ║
 * ║  places STO at 60% of d6 from r6 (3.4815 mm after surface 6), a    ║
 * ║  geometry-constrained estimate consistent with the rendered        ║
 * ║  figure. The stop radius is derived from the design f-number       ║
 * ║  f/1.4. That agreement is calibration, not independent evidence of ║
 * ║  the manufactured diaphragm diameter.                              ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: modeled from exact spherical ray envelopes. The  ║
 * ║  construction clears the full on-axis f/1.4 marginal bundle and   ║
 * ║  representative ±11.5° off-axis bundles sampled through ±0.75 of  ║
 * ║  the stop. Most surfaces retain roughly 8% radial clearance; surface 6 is ║
 * ║  limited to 5.50 mm by the r6–r7 shared-gap geometry and retains   ║
 * ║  ≈1.3% clearance over the tested on-axis marginal ray.             ║
 * ║                                                                    ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. Table A provides one optical   ║
 * ║  state and no movement law. closeFocusM = 0.5 is ARRIFLEX catalog ║
 * ║  metadata for a documented production variant and does not drive  ║
 * ║  any internal spacing change in this model.                        ║
 * ║                                                                    ║
 * ║  IMAGE PLANE: surface 11 keeps the published b′ = 57.99 scaled    ║
 * ║  value (14.4975 mm). The rounded prescription computes a paraxial ║
 * ║  BFD of ≈14.5166 mm; the source mismatch is retained, not hidden. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "schneider-cine-xenon-25f14",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CINE-XENON 25mm f/1.4",
  subtitle: "US 3,005,379 Table A — 25 mm f/1.4 production correlation (inferred)",

  catalog: {
    lensMounts: ["c-mount"],
    imageFormat: "16mm-cinema",
    specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 25.015 mm", "F/1.4", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 25, design: 25.01451824 },
    fNumber: { marketing: 1.4, design: 1.400000081 },
  },

  source: {
    patentNumber: "US 3,005,379",
    patentYear: 1961,
    authors: ["Günter Klemt"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 23.808148,
      glass: "LAC12 — 678555 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive first element of cemented member I.",
      diagramLabel: "L1",
      cemented: "J1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.2,
      indexReference: "d",
      focalLengthMm: -65.129966,
      glass: "E-FD8 — 689312 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Negative second element of cemented member I.",
      diagramLabel: "L2",
      cemented: "J1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 32.669806,
      glass: "H-ZBaF52 — 670472 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive first element of cemented member II.",
      diagramLabel: "L3",
      cemented: "J2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6166,
      vd: 36.6,
      indexReference: "d",
      focalLengthMm: -18.566004,
      glass: "F4 — 617366 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Negative second element of cemented member II, immediately before the diaphragm space.",
      diagramLabel: "L4",
      cemented: "J2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -10.022118,
      glass: "H-ZF2 — 673322 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Negative first element of cemented member III, immediately after the diaphragm space.",
      diagramLabel: "L5",
      cemented: "J3",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 57.3,
      indexReference: "d",
      focalLengthMm: 13.998349,
      glass: "K-LaK11 — 658573 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive second element of cemented member III.",
      diagramLabel: "L6",
      cemented: "J3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: 20.770738,
      glass: "H-LaF3B — 744449 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Single positive rear member IV.",
      diagramLabel: "L7",
    },
  ],

  surfaces: [
    { label: "1", R: 18.4975, d: 4.56, sd: 10.2, medium: 1 },
    { label: "2", R: -114, d: 0.7525, sd: 9.6, medium: 2 },
    { label: "3", R: 74.1875, d: 0.08, sd: 9.1 },
    { label: "4", R: 9.595, d: 2.735, sd: 8.1, medium: 3 },
    { label: "5", R: 15.13, d: 1.1225, sd: 7.5, medium: 4 },
    { label: "6", R: 6.3325, d: 3.4815, sd: 5.5 },
    { label: "STO", R: "flat", d: 2.321 },
    { label: "7", R: -8.6725, d: 0.9025, sd: 5.7, medium: 5 },
    { label: "8", R: 31.5525, d: 3.8575, sd: 6.4, medium: 6 },
    { label: "9", R: -12.385, d: 0.08, sd: 6.7 },
    { label: "10", R: 53.605, d: 2.375, sd: 6.85, medium: 7 },
    { label: "11", R: -21.3025, d: 14.4975, sd: 6.95 },
  ],

  focus: {
    closeFocusM: 0.5,
    description:
      "The patent supplies only one focus state. The reported 0.5 m close-focus distance applies to an ARRIFLEX production variant; focus travel is not modeled.",
  },

  aperture: { nominalFNumber: 1.400000081, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "J1", fromSurface: "1", toSurface: "3" },
    { text: "J2", fromSurface: "4", toSurface: "6" },
    { text: "J3", fromSurface: "7", toSurface: "9" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
