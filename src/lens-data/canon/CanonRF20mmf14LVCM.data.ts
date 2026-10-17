import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 20mm f/1.4 L VCM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2025/0389929 A1, Numerical Example 2.             ║
 * ║  20.598 mm f/1.46 negative-front wide-angle prime for Canon RF.    ║
 * ║  Patent prescription: 16 optical members / 11 air-separated groups.║
 * ║  Canon marketing count: 15 elements / 11 groups; the 0.70 mm BR    ║
 * ║  organic layer is modeled here as its own optical member.           ║
 * ║  Focus: inner focus by L2; d18/d25 vary complementarily.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    US 2025/0389929 A1 does not publish clear semi-diameters. The   ║
 * ║    values below are renderer-conservative estimates, independently ║
 * ║    checked against sd/|R|, aspherical slope, element SD ratio,      ║
 * ║    edge thickness, and signed cross-gap sag-intrusion limits. They ║
 * ║    are not patent-published or production clear apertures.          ║
 * ║    Surfaces 1-3 were raised to pass the traced chief ray to the    ║
 * ║    full-frame corner, as FIG. 3 draws the front elements; the      ║
 * ║    patent's Y = 18.90 mm design image height is reached at 46.4°   ║
 * ║    (2026-09-24 field-coverage audit).                              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design: glass      ║
 * ║  elements, refracting surfaces, aperture stop, and focus gaps. It   ║
 * ║  omits sensor cover glass, filters, motors, barrel parts, and mount ║
 * ║  mechanics.                                                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-rf-20mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 20mm f/1.4 L VCM",
  subtitle: "US 2025/0389929 A1 Example 2 — Canon / Saito",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "Official: 15 elements / 11 groups; BR layer modeled separately",
      "Patent Example 2: 16 optical members / 11 groups",
      "f = 20.598 mm design, 20 mm marketed",
      "F/1.46 design, f/1.4 marketed",
      "3 aspherical surfaces on 2 GMo elements",
      "Inner focus L2; official MFD 0.20 m",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: 20, design: 20.598 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2025/0389929 A1",
    patentYear: 2025,
    authors: ["Takahiro Saito"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: -53.14,
      glass: "S-BSM14 (OHARA)",
      role: "Outermost negative meniscus in the three-negative-front wide-angle section.",
    },
    {
      id: 2,
      name: "G2",
      label: "G2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -83.73,
      glass: "J-SK12 (Hikari)",
      role: "Glass-molded aspherical negative meniscus for wide-field distortion and astigmatism correction.",
    },
    {
      id: 3,
      name: "G3",
      label: "G3 Super UD",
      type: "Negative Meniscus",
      nd: 1.43875,
      vd: 94.7,
      focalLengthMm: -70.04,
      glass: "S-FPL55 (OHARA)",
      role: "Super-UD-class fluorophosphate negative meniscus in the front negative section.",
    },
    {
      id: 4,
      name: "G4",
      label: "G4",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: 24.46,
      glass: "N-LAK33B (Schott catalog-equivalent to patent 755523; supplier not identified)",
      role: "High-index lanthanum crown positive component of the first cemented achromat.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "G5",
      label: "G5",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -42.84,
      glass: "S-NBH56 (OHARA)",
      apd: "patent",
      apdNote: "Patent Table 2: θgF = 0.6122, ΔθgF = 0.0000, Ndn = -0.07182.",
      role: "Dense niobium-flint achromatizing partner satisfying the patent's negative-lens chromatic conditions.",
      cemented: "D1",
      dPgF: 0,
    },
    {
      id: 6,
      name: "G6",
      label: "G6",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 40.12,
      glass: "TAFD37A (Hoya)",
      role: "Strong high-index biconvex positive element in L1.",
    },
    {
      id: 7,
      name: "G7",
      label: "G7",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -129.29,
      glass: "S-TIL2 (OHARA)",
      role: "Weak negative meniscus immediately before the aperture stop.",
    },
    {
      id: 8,
      name: "G8",
      label: "G8",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 51.55,
      glass: "TAFD40-W (Hoya)",
      role: "Ultra-high-index positive component of the BR-containing cemented triplet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "G9",
      label: "G9 BR",
      type: "Positive Meniscus",
      nd: 1.5706,
      vd: 20.1,
      focalLengthMm: 304.54,
      glass: "Unmatched (Canon BR organic; nd=1.57060, νd=20.1)",
      apd: "patent",
      apdNote: "Patent Table 2: θgF = 0.7782, ΔθgF = +0.14427; Canon BR organic material.",
      role: "Thin anomalous-partial-dispersion BR layer for short-wavelength secondary-spectrum correction.",
      cemented: "D2",
      dPgF: 0.14427,
    },
    {
      id: 10,
      name: "G10",
      label: "G10",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.6,
      focalLengthMm: -53.51,
      glass: "Unmatched (patent dense flint; CDGM H-ZBaF4 rejected by partial dispersion)",
      apd: "patent",
      apdNote: "Patent Table 2: θgF = 0.5824, ΔθgF ≈ -0.0025, Ndn = -0.10331.",
      role: "Negative achromatizing component of the BR-containing triplet.",
      cemented: "D2",
      dPgF: -0.00255,
    },
    {
      id: 11,
      name: "G11",
      label: "G11 UD",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.7,
      focalLengthMm: 61.63,
      glass: "J-FK01A (Hikari)",
      role: "Low-dispersion positive component at the front of the moving focus group.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "G12",
      label: "G12",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -25.49,
      glass: "NBFD29 (Hoya)",
      apd: "patent",
      apdNote: "Patent Table 2: θgF = 0.5951, ΔθgF ≈ -0.0047, Ndn = -0.08434.",
      role: "High-dispersion negative partner in the moving focus-group doublet.",
      cemented: "D3",
      dPgF: -0.00468,
    },
    {
      id: 13,
      name: "G13",
      label: "G13 UD",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.7,
      focalLengthMm: 38.67,
      glass: "J-FK01A (Hikari)",
      role: "Second UD positive element in L2.",
    },
    {
      id: 14,
      name: "G14",
      label: "G14 GMo Asph",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: 42.45,
      glass: "S-LAH65VS (OHARA)",
      role: "High-index dense lanthanum flint, glass-molded double asphere at the rear of L2.",
    },
    {
      id: 15,
      name: "G15",
      label: "G15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 46.39,
      glass: "FCD515 (Hoya)",
      role: "Fluorophosphate positive component of the rear negative field-flattening doublet.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "G16",
      label: "G16",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.6,
      focalLengthMm: -29.75,
      glass: "Unmatched (patent dense flint; CDGM H-ZBaF4 rejected by partial dispersion)",
      role: "Dominant negative component of L3.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 52.423, d: 1.4, sd: 20.5, medium: 1 },
    { label: "2", R: 19.691, d: 5.03, sd: 16.5 },
    { label: "3", R: 29.399, d: 2, sd: 15.3, medium: 2 },
    {
      label: "4A",
      R: 17.89,
      d: 16.43,
      sd: 13.8,
      asphere: {
        K: -4.88704,
        A4: 9.85206e-5,
        A6: -4.60796e-7,
        A8: 2.61477e-9,
        A10: -1.06987e-11,
        A12: 2.6268e-14,
        A14: -2.76184e-17,
      },
    },
    { label: "5", R: -23.409, d: 1.2, sd: 14.6, medium: 3 },
    { label: "6", R: -99.819, d: 0.5, sd: 14.3 },
    { label: "7", R: 167.077, d: 8.86, sd: 15.2, medium: 4 },
    { label: "8", R: -20.287, d: 1.05, sd: 14.6, medium: 5 },
    { label: "9", R: -46.575, d: 0.25, sd: 15.2 },
    { label: "10", R: 70.946, d: 5.42, sd: 15, medium: 6 },
    { label: "11", R: -70.946, d: 0.96, sd: 15 },
    { label: "12", R: 184.489, d: 1.1, sd: 14.1, medium: 7 },
    { label: "13", R: 50.592, d: 4.99, sd: 14.1 },
    { label: "STO", R: "flat", d: 2.18 },
    { label: "15", R: 124.113, d: 3.8, sd: 13.2, medium: 8 },
    { label: "16", R: -86.925, d: 0.7, sd: 12.8, medium: 9 },
    { label: "17", R: -58.11, d: 1.1, sd: 12.8, medium: 10 },
    { label: "18", R: 92.703, sd: 13.2 },
    { label: "19", R: -31.832, d: 5.02, sd: 15, medium: 11 },
    { label: "20", R: -16.428, d: 1, sd: 14, medium: 12 },
    { label: "21", R: -103.188, d: 0.2, sd: 14.2 },
    { label: "22", R: 40.261, d: 8.11, sd: 15, medium: 13 },
    { label: "23", R: -34.315, d: 2.75, sd: 15 },
    {
      label: "24A",
      R: 87.489,
      d: 5.76,
      sd: 18,
      medium: 14,
      asphere: { K: 0, A4: -8.28107e-6, A6: 7.81678e-9, A8: -5.60781e-11, A10: 2.06771e-13, A12: -4.03084e-16 },
    },
    {
      label: "25A",
      R: -54.32,
      sd: 18,
      asphere: { K: 0, A4: 6.09726e-6, A6: 5.11495e-9, A8: -1.22444e-11, A10: 1.38078e-13, A12: -2.89951e-16 },
    },
    { label: "26", R: 326.711, d: 6.95, sd: 18.4, medium: 15 },
    { label: "27", R: -29.793, d: 1.05, sd: 16.8, medium: 16 },
    { label: "28", R: 59.878, d: 18.44, sd: 18.4 },
  ],

  focus: {
    closeFocusM: 0.2,
    description: "Inner focus by positive L2; patent tabulates 1.61 mm objectward travel from infinity to β=-0.1.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "18": { label: "D18 / L1-L2", values: [[9.05, 7.44]] },
    "25A": { label: "D25 / L2-L3", values: [[2.2, 3.81]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 11 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "18" },
    { text: "L2 focus", fromSurface: "19", toSurface: "25A" },
    { text: "L3", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2 BR", fromSurface: "15", toSurface: "18" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.68, yScFill: 0.58 },

  rays: { offAxisFieldFrac: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
