import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 600mm f/4E FL ED VR                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0031811 A1, Example 4 (Miwa / Yamashita / Nikon).   ║
 * ║  Production correlation: Nikon AF-S NIKKOR 600mm f/4E FL ED VR (2015).   ║
 * ║  Patent train: 16 imaging elements / 12 groups + protective meniscus HG. ║
 * ║  Model train: 17 physical optical elements / 13 air-spaced groups.        ║
 * ║  Focus status: PUBLISHED. Cemented negative G2 translates imageward by   ║
 * ║  15.559 mm from infinity to the published close state.                   ║
 * ║                                                                            ║
 * ║  SOURCE-PLANE NORMALIZATION:                                               ║
 * ║    - The curved front HG protective meniscus is retained as a real weak  ║
 * ║      optical element.                                                     ║
 * ║    - Source S32-S33 rear low-pass filter FL is excluded. Its 1.50 mm     ║
 * ║      plate at nd=1.51680 is replaced by air-equivalent spacing, making   ║
 * ║      S31-to-image d = 82.25892405063291 mm.                              ║
 * ║    - No dimensional scaling is applied: s = 1.000000.                    ║
 * ║                                                                            ║
 * ║  STOP / PUPIL MODEL:                                                       ║
 * ║    - The patent publishes FNO=4.08 and the stop axial position (S15),    ║
 * ║      but not its physical diameter. STO.sd is therefore model-derived    ║
 * ║      from the actual transcribed EFL and paraxial entrance-pupil          ║
 * ║      magnification so the infinity model evaluates to F/4.08.            ║
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
  key: "nikon-af-s-nikkor-600mm-f4e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 600mm f/4E FL ED VR",
  subtitle: "US 2018/0031811 A1 — Example 4; correlated to the 2015 AF-S production lens",
  specs: [
    "16 IMAGING ELEMENTS / 12 GROUPS + PROTECTIVE MENISCUS",
    "2 FLUORITE / 4 ED (PRODUCTION SPECIFICATION)",
    "600mm f/4 (MARKETED)",
    "f = 587.816 mm / F/4.08 (MODEL)",
    "4.4 m MFD",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 587.816484,
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2018/0031811 A1",
  patentAuthors: ["Satoshi Miwa", "Masashi Yamashita"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2018,
  elementCount: 17,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Protective Meniscus HG",
      type: "Weak Positive Meniscus",
      nd: 1.5168,
      vd: 63.88,
      fl: 3323547.343944,
      glass: "517639 crown class (historical BK7-coordinate; vendor unresolved)",
      role: "Curved front protective meniscus retained from patent G1 and the production optical construction.",
    },
    {
      id: 2,
      name: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 465.77401,
      glass: "Crystalline CaF2 fluorite (nd=1.43385, vd=95.25)",
      role: "First strongly positive fluorite-coordinate element of G1.",
    },
    {
      id: 3,
      name: "L12",
      label: "Element L12",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 297.633169,
      glass: "Crystalline CaF2 fluorite (nd=1.43385, vd=95.25)",
      role: "Second strongly positive fluorite-coordinate element of G1.",
    },
    {
      id: 4,
      name: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -352.406543,
      glass: "613445 optical-glass class (J-KZFH1-coordinate equivalent; vendor unresolved)",
      role: "Negative G1 element following the two fluorite-coordinate positive elements.",
    },
    {
      id: 5,
      name: "L14",
      label: "Element L14",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -202.890017,
      glass: "773496 optical-glass class (vendor unresolved)",
      cemented: "D1",
      role: "Negative front member of the final cemented component in G1.",
    },
    {
      id: 6,
      name: "L15",
      label: "Element L15",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 116.472221,
      glass: "498826 low-dispersion crown class (J-FKH1-coordinate equivalent; vendor unresolved)",
      cemented: "D1",
      role: "Positive low-dispersion rear member of the L14/L15 cemented component.",
    },
    {
      id: 7,
      name: "L21",
      label: "Element L21",
      type: "Plano-Convex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 224.066489,
      glass: "923209 dense-flint class (vendor unresolved)",
      cemented: "D2",
      role: "Positive front member of the cemented negative G2 internal-focus group.",
    },
    {
      id: 8,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      fl: -70.518379,
      glass: "835427 lanthanum-glass class (vendor unresolved)",
      cemented: "D2",
      role: "Negative rear member of G2; the complete cemented pair translates for focus.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.90265,
      vd: 35.73,
      fl: -82.888246,
      glass: "903357 historical high-index lanthanum-glass class (J-LASFH9-coordinate; vendor unresolved)",
      cemented: "D3",
      role: "Negative front member of the first cemented component in G3, immediately behind the stop.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 60.316793,
      glass: "593679 low-dispersion crown class (vendor unresolved)",
      cemented: "D3",
      role: "Positive low-dispersion rear member of the L31/L32 cemented component.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element L33",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.72,
      fl: 117.764974,
      glass: "785257 dense-flint class (vendor unresolved)",
      cemented: "D4",
      role: "Positive front member of the L33/L34 cemented VR component in G3.",
    },
    {
      id: 12,
      name: "L34",
      label: "Element L34",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -67.952373,
      glass: "498826 low-dispersion crown class (J-FKH1-coordinate equivalent; vendor unresolved)",
      cemented: "D4",
      role: "Negative low-dispersion rear member of the L33/L34 cemented VR component.",
    },
    {
      id: 13,
      name: "L35",
      label: "Element L35",
      type: "Plano-Concave Negative",
      nd: 1.816,
      vd: 46.59,
      fl: -92.456373,
      glass: "816466 lanthanum-glass class (J-LASF09A-coordinate equivalent; vendor unresolved)",
      role: "Negative lens completing the patent's transversely movable Gvr vibration-reduction subassembly.",
    },
    {
      id: 14,
      name: "L36",
      label: "Element L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      fl: 39.506438,
      glass: "613445 optical-glass class (J-KZFH1-coordinate equivalent; vendor unresolved)",
      role: "Strong positive front element of the rear Gadj adjustment subassembly.",
    },
    {
      id: 15,
      name: "L37",
      label: "Element L37",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: -133.888174,
      glass: "923209 dense-flint class (vendor unresolved)",
      role: "Negative member paired functionally with L36 in the patent's G3adjB unit.",
    },
    {
      id: 16,
      name: "L38",
      label: "Element L38",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      fl: -41.428588,
      glass: "593679 low-dispersion crown class (vendor unresolved)",
      role: "Negative Ln element between the rear adjustment subgroups.",
    },
    {
      id: 17,
      name: "L39",
      label: "Element L39",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.14,
      fl: 58.451798,
      glass: "670471 barium-flint class (vendor unresolved)",
      role: "Final positive lens of G3 and the patent's G3adjA rear adjustment subgroup.",
    },
  ],

  /* ── Surface prescription ──
   * Labels preserve Example-4 source surface numbers except source S15, which is the required STO label.
   * Cemented junctions S10, S13, S17, and S20 carry the downstream element's elemId and index.
   * Source S32-S33 low-pass filter FL is omitted; the source-equivalent image plane is encoded in S31.d.
   */
  surfaces: [
    { label: "1", R: 1200.5127, d: 5, nd: 1.5168, elemId: 1, sd: 78 },
    { label: "2", R: 1199.6476, d: 1, nd: 1, elemId: 0, sd: 78 },
    { label: "3", R: 225, d: 16.4, nd: 1.43385, elemId: 2, sd: 78 },
    { label: "4", R: -1939.6468, d: 80, nd: 1, elemId: 0, sd: 76 },
    { label: "5", R: 161.4252, d: 16.6, nd: 1.43385, elemId: 3, sd: 63 },
    { label: "6", R: -625.3189, d: 2.15, nd: 1, elemId: 0, sd: 60 },
    { label: "7", R: -566.2858, d: 6, nd: 1.61266, elemId: 4, sd: 60 },
    { label: "8", R: 350.3515, d: 104.8, nd: 1, elemId: 0, sd: 59 },
    { label: "9", R: 70.3762, d: 3.5, nd: 1.7725, elemId: 5, sd: 37.5 },
    { label: "10", R: 47.5154, d: 10.8, nd: 1.49782, elemId: 6, sd: 35 },
    { label: "11", R: 243.3331, d: 17.545, nd: 1, elemId: 0, sd: 32.5 },
    { label: "12", R: 1e15, d: 3, nd: 1.92286, elemId: 7, sd: 25 },
    { label: "13", R: -206.782, d: 2.5, nd: 1.83481, elemId: 8, sd: 24.5 },
    { label: "14", R: 82.7523, d: 45.385, nd: 1, elemId: 0, sd: 24 },
    { label: "STO", R: 1e15, d: 13.2, nd: 1, elemId: 0, sd: 16.98399207272436 },
    { label: "16", R: 125.8462, d: 1.8, nd: 1.90265, elemId: 9, sd: 18.5 },
    { label: "17", R: 46.604, d: 6, nd: 1.59319, elemId: 10, sd: 18.5 },
    { label: "18", R: -146.6583, d: 10, nd: 1, elemId: 0, sd: 19 },
    { label: "19", R: -252.0989, d: 3.2, nd: 1.78472, elemId: 11, sd: 18.5 },
    { label: "20", R: -68.001, d: 2, nd: 1.49782, elemId: 12, sd: 18.5 },
    { label: "21", R: 67.9727, d: 1.7, nd: 1, elemId: 0, sd: 18 },
    { label: "22", R: 1e15, d: 1.8, nd: 1.816, elemId: 13, sd: 13.5 },
    { label: "23", R: 75.4444, d: 4.5, nd: 1, elemId: 0, sd: 14 },
    { label: "24", R: 46.959, d: 7.4, nd: 1.61266, elemId: 14, sd: 18 },
    { label: "25", R: -46.959, d: 1.15, nd: 1, elemId: 0, sd: 17.5 },
    { label: "26", R: -46.224, d: 1.7, nd: 1.92286, elemId: 15, sd: 18.5 },
    { label: "27", R: -75.1558, d: 7.4, nd: 1, elemId: 0, sd: 18.5 },
    { label: "28", R: -59.2874, d: 2.45, nd: 1.59319, elemId: 16, sd: 19 },
    { label: "29", R: 42.619, d: 1.95, nd: 1, elemId: 0, sd: 19 },
    { label: "30", R: 51.7215, d: 5.4, nd: 1.67003, elemId: 17, sd: 19.5 },
    { label: "31", R: -154.5582, d: 82.25892405063291, nd: 1, elemId: 0, sd: 20 },
  ],

  asph: {},

  /* ── Published internal-focus spacings ── */
  var: {
    "11": [17.545, 33.104],
    "14": [45.385, 29.826],
  },
  varLabels: [
    ["11", "G2 front gap"],
    ["14", "G2 rear gap"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "G2 FOCUS (-)", fromSurface: "12", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4 / VR", fromSurface: "19", toSurface: "21" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 4.4,
  focusDescription:
    "PUBLISHED internal focus: cemented negative G2 (L21+L22) translates imageward by 15.559 mm; " +
    "D11 increases 17.545→33.104 mm while D14 decreases 45.385→29.826 mm, conserving D11+D14=62.930 mm. " +
    "The source close state gives d0=3930.900 mm from object to S1 and β=-0.145; source-plane normalization gives " +
    "4.400 m to the focal plane. The rear image spacing is fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 4.08,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* ── Layout tuning ──
   * Geometry validity is independent of these display-only values.
   */
  scFill: 0.72,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
