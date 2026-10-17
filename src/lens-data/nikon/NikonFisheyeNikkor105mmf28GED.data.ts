import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════╗
 * ║ NIKON AF DX FISHEYE-NIKKOR 10.5mm f/2.8 G ED                         ║
 * ╠════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 7,161,746 B2, Example 9, Table 9 and FIG. 17.        ║
 * ║ Corrected transcription of the all-spherical patent prescription.    ║
 * ║ 10 elements / 7 groups; production lens lists one aspherical element,║
 * ║ but Example 9 discloses no aspherical coefficients.                  ║
 * ║ Focus: CRC / floating-group focus is described by the patent and     ║
 * ║ Nikon, but finite-conjugate spacings are not published for Example 9.║
 * ║                                                                        ║
 * ║ NOTE ON CORRECTED SPACING:                                           ║
 * ║   Table 9 prints the stop-to-G2 spacing as d13 = 8.776 mm. That      ║
 * ║   value gives EFL ≈ 9.90 mm and Σd/f ≈ 6.151, contradicting the      ║
 * ║   patent's f = 10.56 and conditional value Σd/f = 5.930. The value   ║
 * ║   used here is d13 = 6.4398 mm, derived from Σd = 5.930 × 10.56.     ║
 * ║   With this correction the paraxial trace gives EFL = 10.5647 mm,    ║
 * ║   BFD = 41.1142 mm, and TL = 103.735 mm.                             ║
 * ║                                                                        ║
 * ║ NOTE ON SEMI-DIAMETERS:                                              ║
 * ║   US 7,161,746 B2 does not publish clear semi-diameters for Example 9.║
 * ║   The values below are estimated from FIG. 17 and constrained by     ║
 * ║   signed sag clearance. They satisfy sd/|R| < 0.90, front/rear       ║
 * ║   element SD ratio ≤ 1.25, positive rim edge thickness for every     ║
 * ║   element, and cross-gap sag intrusion ≤ 90% of the intervening gap. ║
 * ║                                                                        ║
 * ║ IMPORTANT: This file describes only the optical prescription:         ║
 * ║   ✓ glass elements, surfaces, aperture stop, and image-plane gap      ║
 * ║   ✗ no sensor cover glass, filters, barrel, AF drive, or mount parts ║
 * ╚════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-fisheye-nikkor-105mm-f28g-ed",
  maker: "Nikon",
  name: "NIKON AF DX FISHEYE-NIKKOR 10.5mm f/2.8 G ED",
  subtitle: "US 7,161,746 B2 Example 9 — Nikon / Keiko Mizuguchi",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "10 elements / 7 groups",
      "Patent f = 10.565 mm; marketed 10.5 mm",
      "Patent FNO = 2.88; marketed f/2.8",
      "180° diagonal fisheye on DX",
      "Patent prescription all spherical",
    ],
    elementCount: 10,
    groupCount: 7,
    focalLengthMm: { marketing: 10.5, design: 10.5647 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 7,161,746 B2",
    patentYear: 2007,
    authors: ["Keiko Mizuguchi"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: -33.26,
      glass: "S-BSM16 (OHARA)",
      role: "Large front negative meniscus that begins the 180° fisheye ray bending.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.63,
      focalLengthMm: -37.52,
      glass: "S-LAH59 (OHARA)",
      role: "High-index second negative meniscus that shares front-group divergence with L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.69,
      focalLengthMm: 50.85,
      glass: "S-LAM52 (OHARA, NR)",
      role: "Positive meniscus that moderates front-group divergence before the cemented correction groups.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      focalLengthMm: -10.11,
      glass: "S-LAH66 (OHARA)",
      role: "Negative member of the first cemented front-group achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.46,
      focalLengthMm: 13.49,
      glass: "S-TIH10 (OHARA)",
      role: "High-dispersion positive member of the first cemented front-group doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5a",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.42,
      focalLengthMm: 22.43,
      glass: "S-NSL36 (OHARA)",
      role: "Low-index positive member of the weak cemented group before the stop.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L5b",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -21.14,
      glass: "S-LAH55V (OHARA)",
      role: "High-index negative member of the weak cemented group before the stop.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L6a",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -34.7,
      glass: "S-TIH53 (OHARA)",
      role: "Very dense flint negative member of the rear ED correction doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L6b",
      label: "Element 9",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 25.87,
      glass: "N-PK52A / FCD1 class ED (497/816; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Exact 497/816 ED-class match; vendor not named by the patent. OHARA S-FPL51 is a near-equivalent, not an exact νd match.",
      role: "Low-dispersion positive member of the rear cemented doublet and the design's ED-class element.",
      cemented: "D3",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.5045,
    },
    {
      id: 10,
      name: "L7",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.54,
      focalLengthMm: 34.82,
      glass: "S-LAL7Q (OHARA)",
      role: "Final positive biconvex relay element that helps form the long-back-focus image.",
    },
  ],

  surfaces: [
    { label: "1", R: 85, d: 2.04, sd: 18, medium: 1 },
    { label: "2", R: 16.45, d: 8.32, sd: 14.6 },
    { label: "3", R: 61.18, d: 1.7, sd: 14, medium: 2 },
    { label: "4", R: 20.15, d: 10.316, sd: 12 },
    { label: "5", R: -204, d: 3.43, sd: 10, medium: 3 },
    { label: "6", R: -31.26, d: 0.25, sd: 8.8 },
    { label: "7", R: -27, d: 2.78, sd: 8.45, medium: 4 },
    { label: "8", R: 11.48, d: 4.93, sd: 8.45, medium: 5 },
    { label: "9", R: -55.84, d: 5.865, sd: 8.45 },
    { label: "10", R: 59.67, d: 2.57, sd: 6.4, medium: 6 },
    { label: "11", R: -14.2, d: 1.41, sd: 6.4, medium: 7 },
    { label: "12", R: -76, d: 3.66, sd: 6.4 },
    { label: "STO", R: "flat", d: 6.4398 },
    { label: "14", R: -1732, d: 1.49, sd: 8.6, medium: 8 },
    { label: "15", R: 29.9, d: 4.02, sd: 8.6, medium: 9 },
    { label: "16", R: -21.55, d: 0.19, sd: 8.6 },
    { label: "17", R: 44.74, d: 3.21, sd: 10.3, medium: 10 },
    { label: "18", R: -44.74, d: 41.114155, sd: 10.3 },
  ],

  focus: {
    closeFocusM: 0.14,
    description:
      "CRC / floating-group focus is described by the patent and Nikon, but Example 9 publishes only the infinity prescription.",
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 10.5,
    fullFieldDeg: 180,
    imageCircleMm: 28.35,
    maxTraceFieldDeg: 90,
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "12" },
    { text: "G2", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  layout: { scFill: 0.58, yScFill: 0.74 },

  rays: { rayLeadFrac: 0.5, offAxisFieldFrac: 0.85 },
} satisfies LensDataV2Input;

export default LENS_DATA;
