import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sei Matsui's US 4,139,265, Example 1. Nikon's dealer drawing gives a focal
 * length of 51.6 mm for the original 1978 AI 50mm f/1.8. Multiplying every
 * printed length by 0.516 takes the 100 mm prescription to this scale.
 * The table gives spherical radii, axial spacings and d-line glass data.
 * Figure 1 places the iris about 57% of the way from r6 to r7. Its clear
 * radius follows from f/1.8. The glass rims follow the figure, with r4 and
 * r5 limited by their air gap and r6 rounded up to clear the axial beam.
 * The film lies at the paraxial back focus. The patent gives only infinity.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-nikkor-50mm-f18",
  name: "NIKON AI NIKKOR 50mm f/1.8",
  maker: "Nikon",
  visible: true,
  subtitle: "US 4,139,265, Example 1 — Nippon Kogaku / Matsui (1978 long-barrel AI)",
  source: {
    patentNumber: "US 4,139,265",
    example: { label: "Example 1", id: "1" },
    patentYear: 1979,
    authors: ["Sei Matsui"],
    assignees: ["Nippon Kogaku K.K."],
  },
  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 51.6 },
    fNumber: { marketing: 1.8, design: 1.8 },
    closeFocusM: { marketing: 0.45 },
    specs: ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 51.60 mm"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: 64.11,
      glass: "Unmatched (nd 1.79631 / νd 40.8)",
      role: "Front positive meniscus that converges the incoming light.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.78797,
      vd: 47.5,
      indexReference: "d",
      focalLengthMm: 66.71,
      glass: "TAF4 (HOYA catalog equivalent)",
      role: "Positive member of the air-spaced pair ahead of the diaphragm.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -32.52,
      glass: "FD3 (HOYA catalog equivalent)",
      role: "Negative meniscus with its concave rear face toward the diaphragm.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -26.88,
      glass: "FD3 (HOYA catalog equivalent)",
      role: "Negative member of the cemented doublet, with its concave face toward the diaphragm.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.74443,
      vd: 49.4,
      indexReference: "d",
      focalLengthMm: 33.95,
      glass: "Unmatched (nd 1.74443 / νd 49.4)",
      role: "Less dispersive positive member of the rear doublet, cemented to L4.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.79631,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: 50.47,
      glass: "Unmatched (nd 1.79631 / νd 40.8)",
      role: "Rear positive singlet with its stronger surface facing the film.",
    },
  ],
  surfaces: [
    { label: "1", R: 40.999812, d: 4.60014, sd: 18, medium: 1 },
    { label: "2", R: 197.899932, d: 0.100104, sd: 18 },
    { label: "3", R: 21.400068, d: 4.700244, sd: 14, medium: 2 },
    { label: "4", R: 32.599848, d: 1.000008, sd: 12.2 },
    { label: "5", R: 50.999892, d: 1.100112, sd: 12.2, medium: 3 },
    { label: "6", R: 16.19982, d: 7.467119, sd: 10.5 },
    { label: "STO", R: "flat", d: 5.633089 },
    { label: "7", R: -16.500132, d: 1.299804, sd: 10.4, medium: 4 },
    { label: "8", R: -99.999768, d: 5.39994, sd: 12.4, medium: 5 },
    { label: "9", R: -20.64, d: 0.100104, sd: 12.4 },
    { label: "10", R: 204.29988, d: 3.449976, sd: 13.5, medium: 6 },
    { label: "11", R: -49.6521, d: 37.60473052084318, sd: 13.5 },
  ],
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only. The patent gives one set of spacings. The production lens focuses manually by helicoid to 0.45 m.",
  },
  groups: [
    { text: "L2–L3", fromSurface: "3", toSurface: "6" },
    { text: "L4–L5", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
