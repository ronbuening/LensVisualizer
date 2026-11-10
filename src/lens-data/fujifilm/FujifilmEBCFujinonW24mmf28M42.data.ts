import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,958,865 A, sole numerical example, Table I / Figure 1 (1976).
 * Nine spherical elements / eight groups; L6-L7 share cemented surface 12.
 * All source radii and axial intervals are multiplied by exactly 24, following
 * the patent's practical 24 mm application. No prescription retuning is applied.
 * The printed BFL 1.560 becomes 37.44 mm: the retained image plane is z=75.84 mm.
 * Literal source indices give EFL=23.9998523881 mm, BFL=37.4335134734 mm;
 * this 0.00649 mm focus residual is retained, not corrected in the last gap.
 *
 * SOURCE: verified literal Table I CSV, 564 bytes, SHA256
 * 0fc8c49882a08415260da59966ea29ef1710513efe2dea0f1584ea27aab7ddd3.
 * Table I and Figure 1 were checked directly in the supplied patent page images.
 * The complete PDF file has not been locally materialized or hash-verified.
 *
 * SPECTRAL REFERENCE: the patent explicitly names the sodium d-line but gives
 * no wavelength or doublet component. Every literal N/Abbe pair uses native "D".
 * The engine's 589.2938 nm doublet-center convention is an explicit modeling
 * assumption, not a wavelength printed in the patent or a helium-d conversion.
 * No measured C/F/g indices, partial dispersions, catalog fits or melt identities
 * are supplied. Unmatched labels keep all dispersion on the qualified Abbe tier.
 *
 * STOP: Figure 1 places it in source d10, after L5, closer to L5 than L6.
 * The inferred split is 0.80 + 1.84 mm (about 30% into the gap), retaining its
 * full source length. Neither the exact plane nor iris diameter is published.
 * Its radius is derived from source F/2.8 by the shared paraxial pupil rule.
 * RIMS: all clear semi-diameters are inferred, not table data. L1's 15 mm radius
 * follows the source's approximate 30 mm effective front diameter. Remaining
 * rims are inferred geometry estimates, checked against Figure 1, aperture, field,
 * edge-thickness, gap and render checks. L2 uses inferred 9.5/7.8 mm front/rear
 * radii, consistent with its stepped outline in Figure 1; face 4's stronger
 * curvature constrains its clear rim. Mechanical corner flanges are not clear glass.
 * The 44 mm filter diameter is not an iris.
 * No hidden trims, rim cuts, camera plates or inferred finite-focus law are added.
 *
 * IDENTITY: probable original M42 EBC Fujinon W24/2.8 design-family correspondence,
 * not an established factory prescription. US 4,158,482's later X-Fujinon is a
 * separate design. Mount/format and retail name identify the representative target.
 */
const LENS_DATA = {
  schema: 2,
  key: "fujifilm-ebc-fujinon-w-24mm-f28-m42",
  maker: "Fujifilm",
  name: "FUJIFILM EBC FUJINON W 24mm f/2.8 (M42 patent representative)",
  subtitle: "US 3,958,865 A — sole Table I design; probable original M42 design-family correspondence",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "24 mm REPRESENTATIVE SCALE; F/2.8",
      "84° SOURCE FULL FIELD",
      "NATIVE SODIUM D; 589.2938 nm ASSUMED CENTER",
      "SOURCE BFL 37.44 mm; ×24 NORMALIZATION",
      "INFERRED STOP / CLEAR APERTURES",
      "FIXED COLLIMATED-OBJECT PRESCRIPTION",
      "PATENT REPRESENTATIVE; FACTORY IDENTITY UNCONFIRMED",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 24, design: 24 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,958,865 A",
    example: { label: "Sole example", id: null },
    patentYear: 1976,
    authors: ["Yutaka Sakai"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.60717,
      vd: 40.2,
      indexReference: "D",
      focalLengthMm: 107.2092789,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Positive meniscus ahead of the two negative front elements.",
    },
    {
      id: 2,
      name: "L2",
      label: "First negative meniscus",
      type: "Negative Meniscus",
      nd: 1.69350,
      vd: 53.4,
      indexReference: "D",
      focalLengthMm: -43.2314011,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Negative member of the front retrofocus assembly; convex toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Second negative meniscus",
      type: "Negative Meniscus",
      nd: 1.69350,
      vd: 53.4,
      indexReference: "D",
      focalLengthMm: -27.3717509,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Second negative meniscus, using the same source coordinates as L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear-convex positive meniscus",
      type: "Positive Meniscus (convex to rear)",
      nd: 1.64769,
      vd: 33.9,
      indexReference: "D",
      focalLengthMm: 174.9579459,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Positive meniscus beginning the converging rear assembly.",
    },
    {
      id: 5,
      name: "L5",
      label: "Positive lens before the stop",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "D",
      focalLengthMm: 31.6569055,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Biconvex positive element immediately ahead of the inferred air stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Negative member of the cemented doublet",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "D",
      focalLengthMm: -15.5986241,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Negative member of the L6-L7 doublet, joined to L7 at surface 12.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Positive member of the cemented doublet",
      type: "Positive Meniscus",
      nd: 1.77252,
      vd: 49.6,
      indexReference: "D",
      focalLengthMm: 33.7862795,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Positive member with lower source dispersion, sharing the physical surface 12 with L6.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Rear-convex positive meniscus",
      type: "Positive Meniscus (convex to rear)",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "D",
      focalLengthMm: 37.2240990,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Positive rear meniscus ahead of the final positive element.",
    },
    {
      id: 9,
      name: "L9",
      label: "Final positive lens",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.0,
      indexReference: "D",
      focalLengthMm: 34.3856384,
      glass: "Unmatched (patent sodium-D / Abbe; supplier unknown)",
      role: "Final positive element ahead of the retained long back-focus space.",
    },
  ],

  surfaces: [
    { label: "1", R: 36.72456, d: 2.88, sd: 15, medium: 1 },
    { label: "2", R: 81.76800, d: 0.24, sd: 15 },
    { label: "3", R: 13.33344, d: 1.20, sd: 9.5, medium: 2 },
    { label: "4", R: 8.88888, d: 4.32, sd: 7.8 },
    { label: "5", R: 32.43744, d: 0.96, sd: 7.5, medium: 3 },
    { label: "6", R: 11.82960, d: 3.84, sd: 7.5 },
    { label: "7", R: -79.99992, d: 4.80, sd: 7, medium: 4 },
    { label: "8", R: -48.00000, d: 0.24, sd: 7 },
    { label: "9", R: 28.61040, d: 5.76, sd: 7, medium: 5 },
    { label: "10", R: -108.64008, d: 0.80, sd: 7 },
    // Figure 1 iris inferred at about 30% of source d10; total gap remains 2.64 mm.
    { label: "STO", R: "flat", d: 1.84 },
    { label: "11", R: -47.05608, d: 1.20, sd: 6.5, medium: 6 },
    { label: "12", R: 16.07352, d: 2.88, sd: 6.5, medium: 7 },
    { label: "13", R: 38.57232, d: 1.44, sd: 6.5 },
    { label: "14", R: -46.08552, d: 2.40, sd: 6.5, medium: 8 },
    { label: "15", R: -15.69144, d: 0.24, sd: 6.5 },
    { label: "16", R: 199.61568, d: 3.36, sd: 8.5, medium: 9 },
    { label: "17", R: -19.37592, d: 37.44, sd: 8.5 },
  ],

  focus: {
    closeFocusM: 1, // Inactive schema placeholder; no variable gap or finite-focus state is authored.
    description: "Fixed collimated-object prescription; no source-defined finite endpoint or focus motion is modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },
  projection: { kind: "rectilinear", fullFieldDeg: 84 },

  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
