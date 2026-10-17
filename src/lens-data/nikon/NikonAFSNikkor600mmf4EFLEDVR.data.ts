import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 600mm f/4 E FL ED VR                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0031811 A1, Example 4 (Miwa / Yamashita / Nikon).   ║
 * ║  Production correlation: Nikon AF-S NIKKOR 600mm f/4E FL ED VR (2015).   ║
 * ║  Patent train: 16 imaging elements / 12 groups + protective meniscus HG. ║
 * ║  Model train: 17 powered elements / 13 air-spaced groups + filter plate.  ║
 * ║  Focus status: PUBLISHED. Cemented negative G2 translates imageward by   ║
 * ║  15.559 mm from infinity to the published close state.                   ║
 * ║                                                                            ║
 * ║  SOURCE-PLANE NORMALIZATION:                                               ║
 * ║    - The curved front HG protective meniscus is retained as a real weak  ║
 * ║      optical element.                                                     ║
 * ║    - Source S32-S33 rear low-pass filter FL (1.50 mm, nd 1.51680,        ║
 * ║      νd 63.88) is drawn as a plane-parallel plate element and traced by  ║
 * ║      every analysis, with its 75.12 mm gap to the image; S31.d keeps the ║
 * ║      patent's 6.15 mm gap to FL. Its semi-diameter is a ray-trace        ║
 * ║      estimate (the source lists none) and it is not counted in           ║
 * ║      `elementCount`.                                                     ║
 * ║    - No dimensional scaling is applied: s = 1.000000.                    ║
 * ║                                                                            ║
 * ║  STOP / PUPIL MODEL:                                                       ║
 * ║    - The patent publishes FNO=4.08 and the stop axial position (S15), but  ║
 * ║      not its physical diameter. The stop radius is derived from the design ║
 * ║      f-number, F/4.08.                                                     ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                           ║
 * ║    - Table 4 does not publish clear semi-diameters. Values below are     ║
 * ║      Stage-2 modeling apertures derived from marginal/chief-ray envelopes,║
 * ║      Nikon's 166 mm maximum barrel diameter and 40.5 mm rear filter      ║
 * ║      scale, Fig. 11 proportions, and current geometry validation.         ║
 * ║    - They are not represented as patent or manufacturing measurements.   ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL DATA:                                                    ║
 * ║    - The patent publishes d-line nd/νd but no glass vendors or per-      ║
 * ║      element nC, nF, ng, or dPgF. Glass strings are therefore material   ║
 * ║      classes / six-digit coordinate classes, not vendor assertions.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-s-nikkor-600mm-f4e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 600mm f/4 E FL ED VR",
  subtitle: "US 2018/0031811 A1 — Example 4; correlated to the 2015 AF-S production lens",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "16 IMAGING ELEMENTS / 12 GROUPS + PROTECTIVE MENISCUS",
      "2 FLUORITE / 4 ED (PRODUCTION SPECIFICATION)",
      "600mm f/4 (MARKETED)",
      "f = 587.816 mm / F/4.08 (MODEL)",
      "4.4 m MFD",
    ],
    elementCount: 17,
    groupCount: 13,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 600, design: 587.816484 },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "US 2018/0031811 A1",
    patentYear: 2018,
    authors: ["Satoshi Miwa", "Masashi Yamashita"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Protective Meniscus HG",
      type: "Weak Positive Meniscus",
      nd: 1.5168,
      vd: 63.88,
      focalLengthMm: 3323547.343944,
      glass: "J-BK7 catalog equivalent (patent 517639; production supplier unspecified)",
      role: "Curved front protective meniscus retained from patent G1 and the production optical construction.",
      diagramLabel: "HG",
    },
    {
      id: 2,
      name: "L11",
      label: "L11 — FLUORITE",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 465.77401,
      glass: "Crystalline CaF2 fluorite (nd=1.43385, vd=95.25)",
      apd: "inferred",
      apdNote:
        "Fluorite assignment from the CaF2 coordinate and Nikon's two-fluorite production specification; the patent publishes nd/νd only.",
      role: "First strongly positive fluorite-coordinate element of G1.",
      diagramLabel: "L11",
    },
    {
      id: 3,
      name: "L12",
      label: "L12 — FLUORITE",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 297.633169,
      glass: "Crystalline CaF2 fluorite (nd=1.43385, vd=95.25)",
      apd: "inferred",
      apdNote:
        "Fluorite assignment from the CaF2 coordinate and Nikon's two-fluorite production specification; the patent publishes nd/νd only.",
      role: "Second strongly positive fluorite-coordinate element of G1.",
      diagramLabel: "L12",
    },
    {
      id: 4,
      name: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: -352.406543,
      glass: "J-KZFH1 catalog equivalent (patent 613445; production supplier unspecified)",
      role: "Negative G1 element following the two fluorite-coordinate positive elements.",
      diagramLabel: "L13",
    },
    {
      id: 5,
      name: "L14",
      label: "Element L14",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -202.890017,
      glass: "J-LASF016 catalog equivalent (patent 773496; production supplier unspecified)",
      role: "Negative front member of the final cemented component in G1.",
      diagramLabel: "L14",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L15",
      label: "L15 — ED",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 116.472221,
      glass: "J-FKH1 catalog equivalent (patent 498826; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's four-element production specification and the four non-fluorite low-dispersion positions; the patent publishes nd/νd only.",
      role: "Positive low-dispersion rear member of the L14/L15 cemented component.",
      diagramLabel: "L15",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L21",
      label: "Element L21",
      type: "Plano-Convex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 224.066489,
      glass: "N-SF66 catalog equivalent (patent 923209; production supplier unspecified)",
      role: "Positive front member of the cemented negative G2 internal-focus group.",
      diagramLabel: "L21",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -70.518379,
      glass: "S-LAH55 catalog equivalent (patent 835427; production supplier unspecified)",
      role: "Negative rear member of G2; the complete cemented pair translates for focus.",
      diagramLabel: "L22",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.90265,
      vd: 35.73,
      focalLengthMm: -82.888246,
      glass: "J-LASFH9 catalog equivalent (patent 903357; production supplier unspecified)",
      role: "Negative front member of the first cemented component in G3, immediately behind the stop.",
      diagramLabel: "L31",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — ED",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 60.316793,
      glass: "J-PSKH1 catalog equivalent (patent 593679; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's four-element production specification and the four non-fluorite low-dispersion positions; the patent publishes nd/νd only.",
      role: "Positive low-dispersion rear member of the L31/L32 cemented component.",
      diagramLabel: "L32",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L33",
      label: "Element L33",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.72,
      focalLengthMm: 117.764974,
      glass: "H-ZF13 catalog equivalent (patent 785257; production supplier unspecified)",
      role: "Positive front member of the L33/L34 cemented VR component in G3.",
      diagramLabel: "L33",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L34",
      label: "L34 — ED",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: -67.952373,
      glass: "J-FKH1 catalog equivalent (patent 498826; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's four-element production specification and the four non-fluorite low-dispersion positions; the patent publishes nd/νd only.",
      role: "Negative low-dispersion rear member of the L33/L34 cemented VR component.",
      diagramLabel: "L34",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L35",
      label: "Element L35",
      type: "Plano-Concave Negative",
      nd: 1.816,
      vd: 46.59,
      focalLengthMm: -92.456373,
      glass: "J-LASF09A catalog equivalent (patent 816466; production supplier unspecified)",
      role: "Negative lens completing the patent's transversely movable Gvr vibration-reduction subassembly.",
      diagramLabel: "L35",
    },
    {
      id: 14,
      name: "L36",
      label: "Element L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: 39.506438,
      glass: "J-KZFH1 catalog equivalent (patent 613445; production supplier unspecified)",
      role: "Strong positive front element of the rear Gadj adjustment subassembly.",
      diagramLabel: "L36",
    },
    {
      id: 15,
      name: "L37",
      label: "Element L37",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -133.888174,
      glass: "N-SF66 catalog equivalent (patent 923209; production supplier unspecified)",
      role: "Negative member paired functionally with L36 in the patent's G3adjB unit.",
      diagramLabel: "L37",
    },
    {
      id: 16,
      name: "L38",
      label: "L38 — ED",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: -41.428588,
      glass: "J-PSKH1 catalog equivalent (patent 593679; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED assignment from Nikon's four-element production specification and the four non-fluorite low-dispersion positions; the patent publishes nd/νd only.",
      role: "Negative Ln element between the rear adjustment subgroups.",
      diagramLabel: "L38",
    },
    {
      id: 17,
      name: "L39",
      label: "Element L39",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.14,
      focalLengthMm: 58.451798,
      glass: "J-BAF10 catalog equivalent (patent 670471; production supplier unspecified)",
      role: "Final positive lens of G3 and the patent's G3adjA rear adjustment subgroup.",
      diagramLabel: "L39",
    },
    {
      id: 18,
      name: "FL",
      label: "Rear filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      role: "Plane-parallel filter plate FL of the patent prescription (US 2018/0031811 A1, Example 4 Table 4 surfaces 32–33), which the patent calls a low-pass filter. It sits 75.12 mm ahead of the image, at the lens's slip-in filter position, so it is drawn and traced as part of the lens. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  /* ── Surface prescription ──
   * Labels preserve Example-4 source surface numbers except source S15, which is the required STO label.
   * Cemented junctions S10, S13, S17, and S20 carry the downstream element's elemId and index.
   * Source S32-S33 low-pass filter FL is drawn as a plane-parallel plate element; S31.d is the patent's
   * 6.15 mm gap to FL.
   */
  surfaces: [
    { label: "1", R: 1200.5127, d: 5, sd: 78, medium: 1 },
    { label: "2", R: 1199.6476, d: 1, sd: 78 },
    { label: "3", R: 225, d: 16.4, sd: 78, medium: 2 },
    { label: "4", R: -1939.6468, d: 80, sd: 76 },
    { label: "5", R: 161.4252, d: 16.6, sd: 63, medium: 3 },
    { label: "6", R: -625.3189, d: 2.15, sd: 60 },
    { label: "7", R: -566.2858, d: 6, sd: 60, medium: 4 },
    { label: "8", R: 350.3515, d: 104.8, sd: 59 },
    { label: "9", R: 70.3762, d: 3.5, sd: 37.5, medium: 5 },
    { label: "10", R: 47.5154, d: 10.8, sd: 35, medium: 6 },
    { label: "11", R: 243.3331, sd: 32.5 },
    { label: "12", R: "flat", d: 3, sd: 25, medium: 7 },
    { label: "13", R: -206.782, d: 2.5, sd: 24.5, medium: 8 },
    { label: "14", R: 82.7523, sd: 24 },
    { label: "STO", R: "flat", d: 13.2 },
    { label: "16", R: 125.8462, d: 1.8, sd: 18.5, medium: 9 },
    { label: "17", R: 46.604, d: 6, sd: 18.5, medium: 10 },
    { label: "18", R: -146.6583, d: 10, sd: 19 },
    { label: "19", R: -252.0989, d: 3.2, sd: 18.5, medium: 11 },
    { label: "20", R: -68.001, d: 2, sd: 18.5, medium: 12 },
    { label: "21", R: 67.9727, d: 1.7, sd: 18 },
    { label: "22", R: "flat", d: 1.8, sd: 13.5, medium: 13 },
    { label: "23", R: 75.4444, d: 4.5, sd: 14 },
    { label: "24", R: 46.959, d: 7.4, sd: 18, medium: 14 },
    { label: "25", R: -46.959, d: 1.15, sd: 17.5 },
    { label: "26", R: -46.224, d: 1.7, sd: 18.5, medium: 15 },
    { label: "27", R: -75.1558, d: 7.4, sd: 18.5 },
    { label: "28", R: -59.2874, d: 2.45, sd: 19, medium: 16 },
    { label: "29", R: 42.619, d: 1.95, sd: 19 },
    { label: "30", R: 51.7215, d: 5.4, sd: 19.5, medium: 17 },
    { label: "31", R: -154.5582, d: 6.15, sd: 20 },
    // Rear filter FL (US 2018/0031811 A1, Example 4 Table 4 surfaces 32–33), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    { label: "32", R: "flat", d: 1.5, sd: 18, medium: 18 },
    { label: "33", R: "flat", d: 75.12, sd: 18 }, // rear filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 4.4,
    description:
      "PUBLISHED internal focus: cemented negative G2 (L21+L22) translates imageward by 15.559 mm; " +
      "D11 increases 17.545→33.104 mm while D14 decreases 45.385→29.826 mm, conserving D11+D14=62.930 mm. " +
      "The source close state gives d0=3930.900 mm from object to S1 and β=-0.145; source-plane normalization gives " +
      "4.400 m to the focal plane. The rear image spacing is fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published internal-focus spacings ── */
  gaps: {
    "11": { label: "G2 front gap", values: [[17.545, 33.104]] },
    "14": { label: "G2 rear gap", values: [[45.385, 29.826]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.08, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "G2 FOCUS (-)", fromSurface: "12", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "31" },
  ],
  doublets: [
    { text: "L14+L15", fromSurface: "9", toSurface: "11" },
    { text: "L21+L22", fromSurface: "12", toSurface: "14" },
    { text: "L31+L32", fromSurface: "16", toSurface: "18" },
    { text: "L33+L34", fromSurface: "19", toSurface: "21" },
    { text: "Gvr", fromSurface: "19", toSurface: "23" },
    { text: "Gadj", fromSurface: "24", toSurface: "31" },
  ],

  /* ── Layout tuning ──
   * Geometry validity is independent of these display-only values.
   */
  layout: { scFill: 0.72, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
