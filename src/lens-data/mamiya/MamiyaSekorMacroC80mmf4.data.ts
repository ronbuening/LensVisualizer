import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MAMIYA-SEKOR MACRO C 80mm f/4                                      ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S55-24081 B2, Example 1 (Masayoshi Okazaki / Mamiya Koki).      ║
 * ║  Job-card identifier JP1978-087728 corresponds to the earlier JP S53-87728       ║
 * ║  publication reference printed on the supplied examined publication.              ║
 * ║  Six elements / four groups; all ten powered surfaces are spherical.              ║
 * ║                                                                                    ║
 * ║  Focus status: PUBLISHED. The ordinary lens model uses the patent's beta=0 and    ║
 * ║  beta=-1/2 internal spacings. The rear image distance at beta=-1/2 is the         ║
 * ║  independently solved conjugate. The published beta=-1 state requires the          ║
 * ║  optional hollow Auto Macro Spacer and is not represented by this bare-lens file. ║
 * ║                                                                                    ║
 * ║  Stop model: the patent draws the iris in d5 without tabulating its station or    ║
 * ║  diameter. It is placed 25% across the infinity d5 gap from surface 5, consistent ║
 * ║  with Fig. 1, and held with fixed Group II. The stop radius is derived from the   ║
 * ║  design f-number, the published f/4 at infinity.                                  ║
 * ║                                                                                    ║
 * ║  Semi-diameters are modeling inferences from exact meridional marginal/chief-ray  ║
 * ║  traces at infinity and beta=-1/2, the 35 mm patent image height, the figure       ║
 * ║  silhouette, and current edge/slope/cross-gap limits. Full bundles are clear at   ║
 * ║  the viewer's 0.6-field diagnostic; the extreme full-field corner is intentionally ║
 * ║  allowed mild natural vignetting at the narrow d3 gap.                             ║
 * ║                                                                                    ║
 * ║  The patent supplies nd/vd coordinates only. nC, nF, ng, and dPgF are therefore  ║
 * ║  not invented. Glass strings retain six-digit coordinate codes and generic        ║
 * ║  classes; no production melt vendor is asserted.                                  ║
 * ║                                                                                    ║
 * ║  No scaling is applied (s=1). No cover glass, filter, dummy plane, flare cutter,  ║
 * ║  or mechanical part is included.                                                   ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "mamiya-sekor-macro-c-80f4",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR MACRO C 80mm f/4",
  subtitle: "JP S55-24081 B2, Example 1 — Mamiya M645 production correlation",

  catalog: {
    lensMounts: ["mamiya-645"],
    imageFormat: "645",
    specs: ["6 ELEMENTS / 4 GROUPS", "f = 80.121 mm (DESIGN)", "F/4", "2ω = 47.195°", "FLOATING FOCUS TO 1:2"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 80, design: 80.12131923899939 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "JP S55-24081 B2",
    patentYear: 1980,
    authors: ["Masayoshi Okazaki"],
    assignees: ["Mamiya Koki Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.2,
      focalLengthMm: 37.42408427900819,
      glass: "720502 — lanthanum crown (vendor unspecified)",
      apd: false,
      role: "Front positive component of the weak floating cemented compensator.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.57501,
      vd: 41.5,
      focalLengthMm: -31.318792788031324,
      glass: "575415 — light flint / TIL27-LF7 class (vendor unspecified)",
      apd: false,
      role: "Negative rear component of the nearly afocal floating front doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 142.0342889747454,
      glass: "620603 — SK16 / barium crown class (vendor unspecified)",
      apd: false,
      role: "Fixed positive central element ahead of the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -305.57181170500644,
      glass: "699301 — SF15 / TIM35 dense flint class (vendor unspecified)",
      apd: false,
      role: "Floating negative element behind the stop for close-range aberration compensation.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.2,
      focalLengthMm: 29.752713942864478,
      glass: "720502 — lanthanum crown (vendor unspecified)",
      apd: false,
      role: "Positive front component of the fixed rear cemented group.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      focalLengthMm: -51.125740384607255,
      glass: "673321 — SF5 / TIM25 dense flint class (vendor unspecified)",
      apd: false,
      role: "Negative rear component of the fixed rear achromatizing doublet.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 26, d: 6.93, sd: 12.8, medium: 1 },
    { label: "2", R: 658.4, d: 3, sd: 12.8, medium: 2 },
    { label: "3", R: 17.5, sd: 12.8 },
    { label: "4", R: 31.89, d: 6.76, sd: 10.5, medium: 3 },
    { label: "5", R: 45.92, d: 2.345, sd: 9 },
    // STO position inferred from Fig. 1: 25% across the published infinity d5=9.38 mm gap.
    { label: "STO", R: "flat" },
    { label: "6", R: -16.95, d: 4.35, sd: 10, medium: 4 },
    { label: "7", R: -20.355, sd: 12.5 },
    { label: "8", R: -100.6, d: 7.55, sd: 10.6, medium: 5 },
    { label: "9", R: -18.216, d: 2.4, sd: 11.4, medium: 6 },
    { label: "10", R: -40.781, sd: 12.8 },
  ],

  focus: {
    closeFocusM: 0.3580979406302213,
    description:
      "PUBLISHED floating-focus model using the patent beta=0 to beta=-1/2 internal gaps; the rear image distance is the independently solved finite conjugate. The bare lens reaches 1:2. The published beta=-1 state uses the optional Auto Macro Spacer and is not included.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "3": { label: "D3 (G1 FLOAT)", values: [[1.93, 3.53]] },
    STO: { label: "D5 (G3 FLOAT)", values: [[7.035, 5.435]] },
    "7": { label: "D7 (G3 TO G4)", values: [[0.5, 2.1]] },
    "10": { label: "BF", values: [[62.698154758552214, 102.88463637235272]] },
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
