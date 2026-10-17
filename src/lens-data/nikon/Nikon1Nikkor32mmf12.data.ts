import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Nikon 1 NIKKOR 32mm f/1.2
// Source: WO 2014/061226 A1, Example 1 (Table 1 / paragraph 0079).
// Rear plates: the patent's filter group FL (surfaces 18-23, three plane plates nd 1.5168 / vd 63.88,
// t = 0.50 / 1.59 / 0.70 with 1.11 / 0.30 / 0.70 mm air after each) is modeled in `rearPlates` (traced, not drawn).
// d17 keeps the legacy file's paraxial image plane: the old air-equivalent BF 14.15109 mm (paraxial focus traced
// from surface 17) minus sum(t/n) = 1.83940 and the 2.11 mm of plate air gives 10.20169 mm, 0.0017 mm over the
// printed d17 = 10.20 (rounding). Focus keyframes keep the patent's +0.23 mm and +1.77 mm d17 changes.
// Semi-diameters are inferred clear-aperture values, chosen to preserve an f/1.24 on-axis beam while
// satisfying conservative render checks for edge thickness, front/rear element ratio, and cross-gap sag.

const LENS_DATA = {
  schema: 2,
  key: "nikon-1-nikkor-32mm-f12",
  maker: "Nikon",
  name: "NIKON 1 NIKKOR 32mm f/1.2",
  subtitle: "WO 2014/061226 A1 Example 1 - Nikon / Ishida & Tanaka",

  catalog: {
    lensMounts: ["nikon-1"],
    imageFormat: "1-inch-type",
    specs: [
      "9 elements / 7 groups",
      "f = 32.402 mm design",
      "F/1.24 design; f/1.2 marketed",
      "CX / 1-inch type format",
      "All-spherical modified double-Gauss",
      "Floating focus / CRC",
    ],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 32, design: 32.4016 },
    fNumber: { marketing: 1.2, design: 1.24 },
  },

  source: {
    patentNumber: "WO 2014/061226 A1",
    patentYear: 2014,
    authors: ["Kumiko Ishida", "Issei Tanaka"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.52,
      focalLengthMm: 49.83,
      glass: "S-LAL14 (OHARA)",
      role: "Front collector element in G1; begins low-dispersion convergence ahead of the stop.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.44,
      focalLengthMm: 87.12,
      glass: "S-PHM53 (OHARA)",
      role: "Weak low-dispersion positive element; paired with L11 for patent condition (2).",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 high-index positive meniscus",
      type: "Positive Meniscus",
      nd: 1.795,
      vd: 45.31,
      focalLengthMm: 75.31,
      glass: "J-LASF017 (Hikari, 795453)",
      role: "High-index positive pre-stop element; adds power with moderate curvature.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 pre-stop negative meniscus",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.57,
      focalLengthMm: -19.0,
      glass: "S-TIH1 class (OHARA)",
      role: "Strong negative pre-stop element; primary spherical and chromatic balancing lens in the front half.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 CL1 negative element",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.19,
      focalLengthMm: -15.89,
      glass: "S-TIM25 class (OHARA)",
      role: "Negative half of the nearly afocal post-stop cemented corrector.",
      cemented: "CL1",
    },
    {
      id: 6,
      name: "L16",
      label: "L16 CL1 positive element",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.66,
      focalLengthMm: 18.39,
      glass: "S-LAH58 class (OHARA)",
      role: "High-index positive half of CL1; balances L15 with little net group power.",
      cemented: "CL1",
    },
    {
      id: 7,
      name: "L17",
      label: "L17 rear G1 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 55.98,
      glass: "S-LAH66 class (OHARA)",
      role: "Rear element of G1; positive meniscus with concave object-side surface before the floating gap.",
    },
    {
      id: 8,
      name: "L21",
      label: "L21 G2 positive element",
      type: "Biconvex Positive",
      nd: 1.8348,
      vd: 42.73,
      focalLengthMm: 21.13,
      glass: "S-LAH55V class (OHARA)",
      role: "Positive relay element of G2; forms a powered cemented pair with L22.",
      cemented: "CL2",
    },
    {
      id: 9,
      name: "L22",
      label: "L22 rear biconcave negative element",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.57,
      focalLengthMm: -35.09,
      glass: "S-TIH4 class (OHARA)",
      role: "Rear biconcave negative element; Petzval and chromatic balancing member at the image-side end of the system.",
      cemented: "CL2",
    },
  ],

  surfaces: [
    { label: "1", R: 33.0214, d: 4.4, sd: 15.5, medium: 1 },
    { label: "2", R: 637.5014, d: 0.1, sd: 15.2 },
    { label: "3", R: 18.2318, d: 4.0, sd: 14.4, medium: 2 },
    { label: "4", R: 25.6174, d: 0.1, sd: 14.0 },
    { label: "5", R: 20.9, d: 3.1, sd: 12.6, medium: 3 },
    { label: "6", R: 30.0, d: 0.9, sd: 10.1 },
    { label: "7", R: 55.2655, d: 1.2, sd: 9.5, medium: 4 },
    { label: "8", R: 10.8367, d: 5.2, sd: 9.0 },
    { label: "STO", R: "flat", d: 4.7 },
    { label: "10", R: -12.293, d: 1.2, sd: 8.6, medium: 5 },
    { label: "11", R: 85.0, d: 4.0, sd: 9.0, medium: 6 },
    { label: "12", R: -19.6365, d: 0.3, sd: 10.0 },
    { label: "13", R: -49.0, d: 2.1, sd: 10.4, medium: 7 },
    { label: "14", R: -23.4, sd: 10.8 },
    { label: "15", R: 30.8466, d: 4.1, sd: 10.8, medium: 8 },
    { label: "16", R: -38.7, d: 1.2, sd: 10.6, medium: 9 },
    { label: "17", R: 85.2086, sd: 10.6 }, // d17 var — gap to the filter group FL
  ],

  focus: {
    closeFocusM: 0.45,
    keyframes: [0, 0.13423022016389788, 1],
    description:
      "Dual-group floating focus (CRC): all three patent states are exact keyframes; G1 and G2 translate objectward with approximately 2:1 travel. The three-plate filter/sensor stack behind G2 is traced but not drawn.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "14": { label: "D14", values: [[0.9, 1.13, 2.67]] },
    "17": { label: "D17", values: [[10.20169, 10.43169, 11.97169]] },
  },

  aperture: {
    nominalFNumber: 1.24,
    fStops: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 7,
    bladeRoundedness: 0.7,
  },

  /* ── Filter group FL (patent surfaces 18–23): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 0.5,
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      gapAfterMm: 1.11,
      source: "WO 2014/061226 A1, Example 1 Table 1 surfaces 18–19",
    },
    {
      thicknessMm: 1.59,
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      gapAfterMm: 0.3,
      source: "WO 2014/061226 A1, Example 1 Table 1 surfaces 20–21",
    },
    {
      thicknessMm: 0.7,
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      gapAfterMm: 0.7,
      source: "WO 2014/061226 A1, Example 1 Table 1 surfaces 22–23",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "14" },
    { text: "G2", fromSurface: "15", toSurface: "17" },
  ],
  doublets: [
    { text: "CL1", fromSurface: "10", toSurface: "12" },
    { text: "CL2", fromSurface: "15", toSurface: "17" },
  ],

  layout: { scFill: 0.53, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
