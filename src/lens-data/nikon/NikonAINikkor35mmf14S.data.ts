import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon AI Nikkor 35mm f/1.4S - US 3,576,360 Embodiment 1.
 *
 * Data source: US 3,576,360, Embodiment 1 / Fig. 1 / Claim 2 (Yoshiyuki Shimizu, Nippon Kogaku K.K.).
 * The patent prescription is normalized to f = 100.00, F/1.4, 2ω = 62°, and S' = 106.44.
 * All radii, thicknesses, and inferred semi-diameters are scaled by ×0.35 for a 35 mm catalog entry.
 *
 * The patent predates later AI-S production. Nikon's own historical note says the basic 9/7 construction
 * remained but glass materials and curvatures changed at the NEW-Nikkor transition. This data file therefore
 * models the patent design scaled to 35 mm, not a verified proprietary AI-S production prescription.
 *
 * Stop: the patent states d7 is inclusive of the stop but gives no numerical stop split. The STO surface is
 * inferred from Fig. 1 as 5.000 patent units behind R7, preserving total d7 = 22.222 patent units.
 * Semi-diameters are not patent-published; they were estimated from paraxial marginal/chief-ray envelopes,
 * the 52 mm attachment-size constraint, and renderer constraints. The tight R2-R3 and R9-R10 air gaps were
 * reduced to keep cross-gap sag intrusion below 90% of the physical gap.
 * Focus: the patent provides only infinity data. The production lens uses CRC; the focus slider here is a
 * unit-extension approximation using the manufacturer 0.3 m closest-focus distance.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-nikkor-35mm-f14-s",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 35mm f/1.4 S",
  subtitle: "US 3,576,360 Embodiment 1 — Nippon Kogaku / Shimizu",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["9 elements / 7 groups", "35.0 mm design EFL", "f/1.4", "62° field", "All spherical"],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 35, design: 35.000338 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "US 3,576,360",
    patentYear: 1971,
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Negative Meniscus",
      nd: 1.56883,
      vd: 56,
      focalLengthMm: -100.47,
      glass: "S-BAL14 class (OHARA)",
      role: "First front negative meniscus; splits the retrofocus negative power while preserving the 52 mm front envelope.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.9,
      focalLengthMm: -102.43,
      glass: "S-TIL1 (OHARA)",
      role: "Second front negative meniscus; completes the diverging front group and contributes to long SLR back focus.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.80411,
      vd: 46.4,
      focalLengthMm: 25.58,
      glass: "S-LAH65V class (OHARA)",
      role: "Strong high-index positive component of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.50137,
      vd: 56.5,
      focalLengthMm: -62.44,
      glass: "K10 (SCHOTT catalog-equivalent; production supplier unspecified)",
      role: "Low-index negative component cemented to L3; helps generate the positive distortion correction cited by the patent.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5a",
      label: "L5a",
      type: "Positive Meniscus",
      nd: 1.80411,
      vd: 46.4,
      focalLengthMm: 63.45,
      glass: "S-LAH65V class (OHARA)",
      role: "Positive meniscus half of the post-stop cemented group; paired with dense flint for chromatic correction.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L5b",
      label: "L5b",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -21.31,
      glass: "SF56A (SCHOTT)",
      role: "Dense-flint negative component of the biconcave L5 group; principal chromatic corrector behind the stop.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L6",
      label: "L6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.5,
      focalLengthMm: 53.77,
      glass: "S-LAH66 (OHARA)",
      role: "Rear positive meniscus, concave toward object; adds convergence while helping maintain back focus.",
    },
    {
      id: 8,
      name: "L7",
      label: "L7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.5,
      focalLengthMm: 72.35,
      glass: "S-LAH66 (OHARA)",
      role: "Weak-front/strong-rear positive meniscus sharing the rear positive power with L6 and L8.",
    },
    {
      id: 9,
      name: "L8",
      label: "L8",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 73.57,
      glass: "S-LAL8 (OHARA)",
      role: "Final biconvex positive element; sets the final convergence and back focal distance.",
    },
  ],

  surfaces: [
    { label: "1", R: 45.4027, d: 2.04155, sd: 22, medium: 1 },
    { label: "2", R: 24.88885, d: 4.2777, sd: 21.8 },
    { label: "3", R: 48.61115, d: 2.04155, sd: 17.3, medium: 2 },
    { label: "4", R: 25.66655, d: 8.5554, sd: 17.1 },
    { label: "5", R: 37.7223, d: 8.26385, sd: 16.7, medium: 3 },
    { label: "6", R: -40.83345, d: 15.5554, sd: 16.4, medium: 4 },
    { label: "7", R: 151.21085, d: 1.75, sd: 15.5 },
    { label: "STO", R: "flat", d: 6.0277 },
    { label: "8", R: -25.9679, d: 4.2777, sd: 15, medium: 5 },
    { label: "8P", R: -18.4723, d: 0.9723, sd: 15.4, medium: 6 },
    { label: "9", R: 180.2696, d: 1.6527, sd: 14.2 },
    { label: "10", R: -110.13345, d: 3.88885, sd: 14.2, medium: 7 },
    { label: "11", R: -30.625, d: 0.04865, sd: 15.0 },
    { label: "12", R: -972.2223, d: 3.6946, sd: 15.0, medium: 8 },
    { label: "13", R: -52.9375, d: 0.04865, sd: 15.8 },
    { label: "14", R: 102.08415, d: 3.3054, sd: 15.8, medium: 9 },
    { label: "15", R: -106.43395, sd: 16.0 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Patent infinity prescription with unit-extension focus approximation; production lens uses Nikon CRC.",
  },

  gaps: { "15": { label: "BF", values: [[37.254160829, 43.348290028]] } },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
    { text: "G6", fromSurface: "12", toSurface: "13" },
    { text: "G7", fromSurface: "14", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "9" },
  ],

  layout: { scFill: 0.6, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
