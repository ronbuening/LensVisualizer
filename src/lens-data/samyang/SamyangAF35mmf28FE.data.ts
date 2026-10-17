import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SAMYANG AF 35mm f/2.8 FE                                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: KR 10-2127451 B1, Example 4 (Samyang Optics Co., Ltd.; Moon-Kyung Kim).      ║
 * ║ Production correlation is an author inference. Samyang publishes 35mm f/2.8,        ║
 * ║ Sony E/full-frame, 7 elements in 6 groups, 2 aspherical elements, 0.35 m MFD,       ║
 * ║ and 0.12× maximum magnification; Example 4 is 35.18 mm / F2.90 with the same        ║
 * ║ element/group count, two aspherical physical elements, internal two-element focus,   ║
 * ║ and 0.123 close-state magnification.                                                 ║
 * ║                                                                                      ║
 * ║ 7 elements / 6 air-separated groups; 3 aspherical surfaces on L2 and L7.             ║
 * ║ Focus status: PUBLISHED. G24 (L3+L4) translates; G14 and G34 are fixed.                 ║
 * ║ D1/D2 preserve all three Table 12 states and D1+D2 is constant to printed precision. ║
 * ║                                                                                      ║
 * FILTER / REAR PLANE: Table 10's physical rear path is preserved: d14=16.862,
 * Filter t=2.500, nd=1.51680, vd=64.20, d16=0.500 mm, modeled in rearPlates.
 * Table 12's “in Air”=19.70032771 and OAL=46.500 contradict this path and
 * the computed image plane. See the companion audit; do not tune the gaps.
 *
 * INDEX / GLASS NOTE: Table 10 labels its index column nd, but the seven printed values are
 * e-line indices paired with d-line Abbe numbers: five equal a HOYA catalog ne to five decimals
 * with that glass's exact vd (E-FD10 1.73432, E-F2 1.62408, E-FDS1 1.93323, TAFD5F 1.83945,
 * E-FD2 1.65222). The printed values are stored unchanged and all seven elements are
 * e-referenced (indexReference "e"). The five carry their catalog names and trace on catalog
 * curves anchored to the printed index; the two moulded aspheres L2 and L7 sit 0.0002 and 0.0003
 * off the nearest rows and stay Unmatched on the Abbe estimate. The vd slot keeps the printed
 * d-line Abbe number (catalog ve is 0.1 to 0.3 lower). The filter row prints the d-line 1.51680
 * and stays d-referenced. The patent publishes no nC, nF, ng, or dPgF.
 * ║                                                                                      ║
 * ║ ASPHERES: Equation 5 already uses the standard conic constant K. No K conversion     ║
 * ║ and no dimensional scaling are applied.                                              ║
 * ║                                                                                      ║
 * ║ SEMI-DIAMETERS: None are published. The stop radius is derived from the design       ║
 * ║ f-number F/2.899 and the preserved infinity prescription. Lens-surface SDs are       ║
 * ║ modeled from exact sequential rays across all three published focus states: full     ║
 * ║ on-axis marginal rays plus the default 0.60-field off-axis bundle at stop fractions  ║
 * ║ ±0.75, ±0.375, 0. Rounded mechanical clearance was then added and the current        ║
 * ║ edge-thickness, actual rim-slope, conic, shared-band cross-gap, and containment      ║
 * ║ rules are all satisfied. These semi-diameters remain modeling values rather than     ║
 * ║ patent dimensions.                                                                   ║
 * ║                                                                                      ║
 * ║ NO SCALING: s=1. The marketed 35 mm / f/2.8 values remain separate from the modeled ║
 * ║ patent design values.                                                                ║
 * ║                                                                                      ║
 * ║ Manufacturer sources:                                                                ║
 * ║ https://www.lksamyang.com/en/product/product-view.php?seq=151                         ║
 * ║ https://www.lksamyang.com/en/about/notice-view.php?seq=399                            ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: all powered radii, gaps, raw index/Abbe pairs and three
 * K/A4–A10 sets match Tables 10–12. Restoring the printed physical filter path
 * changes offset −0.190103 to +0.500018 mm because the previously used “in Air”
 * row is not the air equivalent of that path. EFL 35.182840 vs 35.179406;
 * air BFL 19.510225 vs physical path reduced to 19.010207 mm. Source conflict
 * retained explicitly; no invented gap reconciles the competing printed values.
 */

const LENS_DATA = {
  schema: 2,
  key: "samyang-af-35mm-f2p8-fe",
  maker: "Samyang",
  name: "SAMYANG AF 35mm f/2.8 FE",
  subtitle: "KR 10-2127451 B1 Example 4 — production correlation inferred",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "f ≈ 35.183 mm (MODELED)",
      "F/2.899 (DESIGN)",
      "2ω ≈ 64.73° (PATENT INFINITY FIELD)",
      "3 ASPHERICAL SURFACES",
      "PUBLISHED INNER FOCUS",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 35.182840213 },
    fNumber: { marketing: 2.8, design: 2.899 },
  },

  source: {
    patentNumber: "KR 10-2127451 B1",
    patentYear: 2020,
    authors: ["Moon-Kyung Kim"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.73432,
      vd: 28.32,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -40.10146,
      glass: "E-FD10 (HOYA; catalog ne 1.73432, vd 28.32 as printed; supplier unconfirmed)",
      role: "Fixed G14 front negative meniscus.",
      diagramLabel: "L14",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.77641,
      vd: 49.7,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 16.606041,
      glass:
        "Unmatched (printed coordinates; nearest e-line row is the 773496 class at 1.77621; no vendor row at either line)",
      role: "Fixed G14 positive element; object-side surface 3A is aspherical.",
      diagramLabel: "L24",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62408,
      vd: 36.3,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -22.623692,
      glass: "E-F2 (HOYA; catalog ne 1.62408, vd 36.30 as printed; supplier unconfirmed)",
      role: "First element of the translating two-element inner-focus group G24.",
      diagramLabel: "L34",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.93323,
      vd: 20.88,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 71.203757,
      glass: "E-FDS1 (HOYA; catalog ne 1.93323, vd 20.88 as printed; supplier unconfirmed)",
      role: "Second element of the translating two-element inner-focus group G24.",
      diagramLabel: "L44",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83945,
      vd: 42.72,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 9.779848,
      glass: "TAFD5F (HOYA; catalog ne 1.83945, vd 42.72 as printed; supplier unconfirmed)",
      role: "Positive component of the fixed G34 cemented doublet.",
      diagramLabel: "L54",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.65222,
      vd: 33.84,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -12.712037,
      glass: "E-FD2 (HOYA; catalog ne 1.65222, vd 33.84 as printed; supplier unconfirmed)",
      role: "Negative component of the fixed G34 cemented doublet.",
      diagramLabel: "L64",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69385,
      vd: 31.19,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column nd, but five of its seven indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -86.873115,
      glass:
        "Unmatched (printed coordinates; nearest e-line row is the 689312 class at 1.69415; no vendor row at either line)",
      role: "Fixed rear negative meniscus / field-flattener element; both surfaces are aspherical.",
      diagramLabel: "L74",
    },
  ],

  surfaces: [
    { label: "1", R: -15.492, d: 0.9, sd: 6.5, medium: 1 },
    { label: "2", R: -33.494, d: 0.1, sd: 6.7 },
    {
      label: "3A",
      R: 27.956,
      d: 3.424,
      sd: 6.8,
      medium: 2,
      asphere: { K: -1.74199, A4: -3.454513e-5, A6: -7.997276e-9, A8: -1.30306e-9, A10: 1.178286e-11, A12: 0, A14: 0 },
    },
    { label: "4", R: -22.648, d: 0.5, sd: 6.8 },
    { label: "STO", R: "flat" },
    { label: "6", R: 533.448, d: 0.7, sd: 6.2, medium: 3 },
    { label: "7", R: 13.748, d: 1.179, sd: 6.0 },
    { label: "8", R: 19.94, d: 1.196, sd: 6.2, medium: 4 },
    { label: "9", R: 27.664, sd: 6.3 },
    { label: "10", R: 36.828, d: 6.728, sd: 7.4, medium: 5 },
    { label: "11", R: -9.684, d: 1.0, sd: 7.5, medium: 6 },
    { label: "12", R: 59.99, d: 4.246, sd: 7.4 },
    {
      label: "13A",
      R: -8.419,
      d: 1.5,
      sd: 7.7,
      medium: 7,
      asphere: { K: -0.5397246, A4: 1.74928e-4, A6: 1.372817e-6, A8: -2.796398e-8, A10: 3.650418e-11, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -10.5,
      d: 16.862,
      sd: 8.4,
      asphere: { K: -2.462853, A4: -3.441633e-5, A6: 2.149737e-6, A8: -2.785146e-8, A10: 1.053277e-10, A12: 0, A14: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.35,
    keyframes: [0, 0.237653048385, 1],
    description:
      "PUBLISHED inner focus: L34 + L44 (G24) translates toward image space while G14/G34 remain fixed. Table 12 D1/D2 states are preserved at infinity, MAG=-1/40, and the raw close row headed TL=0.3m. The close heading is internally inconsistent with D0+OAL≈0.3485m and Samyang's 0.35m sensor-to-object MFD; no spacing is reconstructed.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    STO: { label: "D1", values: [[2.0, 2.523725915, 4.638416687]] },
    "9": { label: "D2", values: [[3.66560705, 3.141881136, 1.027190363]] },
  },

  aperture: { nominalFNumber: 2.899, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  rearPlates: [
    {
      label: "Filter",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA coordinate equivalent; filter material unconfirmed)",
      gapAfterMm: 0.5,
      source: "KR 10-2127451 B1 Example 4 Table 10 surfaces 15–16",
    },
  ],

  groups: [
    { text: "G14", fromSurface: "1", toSurface: "4" },
    { text: "G24 (FOCUS)", fromSurface: "6", toSurface: "9" },
    { text: "G34", fromSurface: "10", toSurface: "14A" },
  ],
  doublets: [{ text: "J1", fromSurface: "10", toSurface: "12" }],

  layout: { yScFill: 0.43 },
} satisfies LensDataV2Input;

export default LENS_DATA;
