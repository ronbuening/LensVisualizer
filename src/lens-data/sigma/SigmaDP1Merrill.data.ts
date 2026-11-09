/**
 * Sigma DP1 Merrill probable family, JP 2013-137377 A Example 4.
 * Native 18.82 mm / F2.89, no retail scaling. Literal source radii, spacings,
 * nd/vd, S12/S17 aspheres and rear filter/image gap are unchanged.
 * NOTE ON SEMI-DIAMETERS: inferred from Fig10 (PDF25), not factory dimensions.
 * 400dpi vertex span608px =39.85mm. Square rims remain square. S4 and S15
 * have figure-supported opaque rim extensions. S4 optical cap and S7 cemented
 * square-rim neighborhood are initially limited by the default rim-slope rule;
 * rims remain inferred, although exact source-field and aperture checks pass.
 * Ordinary-prime iris radius is derived from native F2.89; no authored STO sd.
 * Infinity only; no fabricated near-focus law. E3/E7 are plausible alternatives.
 * Original full brochure/grant custody unavailable; recovered A-publication and
 * maker crop retained. No exact factory-embodiment or commercial-glass claim.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

// v2: S13/S14 square rims and S15 optical cap inferred at7.8mm to avoid physical overlap; S15 opaque blank remains11.2mm.
const LENS_DATA = {
  schema: 2,
  key: "sigma-dp1m-19f28",
  maker: "Sigma",
  name: "SIGMA 19mm f/2.8 (Sigma DP1 Merrill)",
  subtitle: "JP 2013-137377 A Example 4 — probable DP1 Merrill family",
  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      marketing: 19,
      design: 18.82,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.89,
    },
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "f = 18.82 mm",
      "F/2.89",
      "2ω = 75.18°",
      "2 ASPHERICAL SURFACES",
    ],
  },
  source: {
    patentNumber: "JP 2013-137377 A",
    example: {
      label: "Example 4",
      id: "4",
    },
    patentYear: 2013,
    authors: ["Atsushi Yamazaki"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      glass: "Unmatched (source nd/νd only)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      glass: "Unmatched (source nd/νd only)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.77377,
      vd: 47.17,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.01,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      glass: "Unmatched (source nd/νd only)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      glass: "Unmatched (source nd/νd only)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.61,
      d: 2.83,
      medium: 1,
      sd: 12.1,
    },
    {
      label: "2",
      R: 39.37,
      d: 0.3,
      sd: 12.1,
    },
    {
      label: "3",
      R: 14.81,
      d: 0.9,
      medium: 2,
      sd: 9.2,
    },
    {
      label: "4",
      R: 5.79,
      d: 6.1,
      sd: 5.2,
      rimExtensionSd: 9.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.2,
    },
    {
      label: "6",
      R: 194.0,
      d: 5.8,
      medium: 3,
      sd: 6.1,
    },
    {
      label: "7",
      R: -6.84,
      d: 0.85,
      medium: 4,
      sd: 6.1,
    },
    {
      label: "8",
      R: -245.0,
      d: 1.04,
      sd: 6.1,
    },
    {
      label: "9",
      R: 223.5,
      d: 2.4,
      medium: 5,
      sd: 8.3,
    },
    {
      label: "10",
      R: -28.93,
      d: 0.15,
      sd: 8.3,
    },
    {
      label: "11",
      R: 119.0,
      d: 3.58,
      medium: 6,
      sd: 9.1,
    },
    {
      label: "12A",
      R: -19.94,
      d: 1.0,
      asphere: {
        K: 0.0,
        A4: 6.5673e-5,
        A6: -9.6179e-8,
        A8: 3.4161e-9,
        A10: -1.4931e-11,
      },
      sd: 9.1,
    },
    {
      label: "13",
      R: 31.81,
      d: 0.9,
      medium: 7,
      sd: 7.8,
    },
    {
      label: "14",
      R: 12.5,
      d: 6.63,
      sd: 7.8,
    },
    {
      label: "15",
      R: -11.38,
      d: 0.9,
      medium: 8,
      sd: 7.8,
      rimExtensionSd: 11.2,
    },
    {
      label: "16",
      R: -23.91,
      d: 0.15,
      sd: 11.2,
    },
    {
      label: "17A",
      R: 90.38,
      d: 4.12,
      medium: 9,
      asphere: {
        K: 0.0,
        A4: 2.6054e-5,
        A6: -1.1769e-7,
        A8: 7.2849e-10,
        A10: -1.009e-12,
      },
      sd: 14.4,
    },
    {
      label: "18",
      R: -95.67,
      d: 1.0,
      sd: 14.4,
    },
  ],
  focus: {
    closeFocusM: 0.2,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Infinity-only prescription. Patent L1 (front six elements and stop) moves objectward for close focus, but no finite-focus spacing law is published. Retail 0.2 m is metadata only.",
  },
  aperture: {
    nominalFNumber: 2.89,
    fStops: [2.89, 4, 5.6, 8, 11, 16],
    blades: 9,
  },
  rearPlates: [
    {
      label: "F",
      thicknessMm: 1.2,
      nd: 1.52301,
      vd: 58.59,
      gapAfterMm: 4.9327,
      source:
        "JP 2013-137377 A Example 4, surfaces 19–20; not a claim of exact retail sensor stack.",
    },
  ],
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "12A",
    },
    {
      text: "L2",
      fromSurface: "13",
      toSurface: "18",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.38,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
