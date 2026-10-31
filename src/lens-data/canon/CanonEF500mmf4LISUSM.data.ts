import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Source: US 6,115,188 A, Numerical Example 24, PDF p. 79 cols. 33–34; Fig. 87, PDF p. 58.
 * Original source shape/glass review: 2026-10-30. Native raster 2320×3408 at 300 ppi; section scale
 * about 5.89 px/mm, practical ±0.8 mm rim uncertainty. Enlargements do not add native resolution.
 * Source HG (R1/R2, 5.00 mm, N1=1.516330/nu1=64.1, D2=1.50 mm) is restored as the integral member
 * included in the selected numerical configuration and figure. The general c-7 alternative-member clause
 * does not describe an optional/removable accessory. All 17 media / 13 groups now include HG and required FL.
 * Existing powered R/d, L2 focus keyframes, stop/aperture rule and pre-existing gapSagFrac 0.96 are unchanged.
 * Source plates are physical: FL t=2.20 mm, D29=30.00 mm and trailing D31+D32=70.28 mm; inactive FC is omitted.
 *
 * The source defines Ni/nu-i without a material spectral reference (PDF p. 78 col. 32). All 17 literal
 * pairs remain unresolved, with no active catalog curve, APD claim or per-lens spectral override.
 * Approximate d-reference tracing and retained product UD/fluorite associations do not identify source
 * wavelength, historical chemistry, supplier or melt. The original N/nu values are never replaced by catalog data.
 *
 * Source f=490.56 mm differs from literal EFL=491.356789 mm; the printed 102.48 mm physical R29-to-image
 * path is 0.670443 mm short of derived infinity focus. Table 3 condition (21) also differs slightly.
 * These contradictions remain source.errata unresolved; no radius/gap is fitted to hide them.
 *
 * Figure-based caps and five outer shoulders preserve clear apertures and connected bonded geometry.
 * No inferred cut, interface land, resin wing or unsupported compound block is introduced. Source infinity
 * aperture/field checks pass; 201 focus states render finite connected contours with zero hidden trimming.
 * The near-infinity cam interval includes a virtual conjugate because of the retained source image-plane
 * discrepancy. A separate 101-control positive-object clearance probe is not a focus-certification claim.
 * With HG/FL physical, the unchanged cam's close conjugate is 4.5 m; closeFocusM now reports that coordinate
 * consequence, replacing the old plate-omission normalization. No source finite-distance table is invented.
 * Only centered IS is represented; moved-state and attached-converter clearance remain unverified.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-500mm-f4l-is-usm",
  maker: "Canon",
  name: "CANON EF 500mm f/4 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 24; correlated to the Canon EF 500mm f/4L IS USM",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 elements / 13 groups including source HG and required FL",
      "Source f = 490.56 mm; model EFL ≈ 491.36 mm (unresolved)",
      "f/4.1 source design; f/4 marketed",
      "2ω = 5.0°",
      "Inner focus; centered state of transverse IS group",
    ],
    elementCount: 17,
    groupCount: 13,
    acceptsTeleconverters: true, // Canon lists this host with Extender EF2x I/II/III.
    focalLengthMm: { marketing: 500, design: 490.56 },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    example: { label: "Numerical Example 24", id: "24" },
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 24 (PDF p. 79, cols. 33–34) states f=490.56 mm, while its literal prescription gives EFL=491.356789 mm. The printed physical R29-to-image path is 30.00+2.20+31.34+38.94=102.48 mm, versus independently derived paraxial focus 103.150443 mm. Table 3 condition (21), PDF p. 79 col. 34, prints f1c/f=0.7065, versus 0.706739 from the literal group and stated f. The certificate (PDF pp. 82–83) does not amend Example 24. No single supported cause is isolated; source R/d and image gaps are retained, without fitting a radius or gap to the summary.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Protection glass HG",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Integral front member explicitly tabulated as R1-R2 in Numerical Example 24 and drawn as HG in Fig. 87. The general c-7 alternative-member clause does not call this selected numerical plate a removable or optional accessory.",
    },
    {
      id: 2,
      name: "L1a",
      label: "L1a front positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 344.3304,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front positive collector; production correlation assigns one of Canon's two UD elements to this coordinate.",
    },
    {
      id: 3,
      name: "L1b-1",
      label: "L1b positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 230.7498,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive member of the negative-power L1b middle subunit.",
    },
    {
      id: 4,
      name: "L1b-2",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -174.666,
      glass:
        "TAFD5G (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative member that makes L1b net negative and reduces front-unit aberration burden.",
    },
    {
      id: 5,
      name: "L1c-1",
      label: "L1c high-Abbe positive",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 217.8146,
      glass:
        "CaF2 (fluorite spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong low-dispersion positive member; with a qualified association to the production fluorite count; source wavelength and historical chemistry remain unresolved.",
    },
    {
      id: 6,
      name: "L1c-2",
      label: "L1c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -488.4803,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Weak negative partner completing the net-positive L1c rear subunit.",
    },
    {
      id: 7,
      name: "L2-1",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      focalLengthMm: 209.1537,
      glass:
        "S-TIH6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive front member of the cemented internal-focus doublet.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L2-2",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -100.9907,
      glass:
        "TAFD5G (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative rear member; the cemented L2 unit has net negative power and moves axially for focus.",
      cemented: "L2",
    },
    {
      id: 9,
      name: "L3a-1",
      label: "L3a negative meniscus",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: -72.461,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative front member of the net-positive L3a cemented doublet.",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3a-2",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: 49.0812,
      glass:
        "TAFD5G (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive rear member of L3a, converging the beam ahead of the stabilization subunit.",
      cemented: "L3a",
    },
    {
      id: 11,
      name: "L3b-1",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: 77.3004,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive member of the transverse image-stabilization subunit.",
      cemented: "L3b",
    },
    {
      id: 12,
      name: "L3b-2",
      label: "L3b negative doublet member",
      type: "Biconcave Negative",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: -48.073,
      glass:
        "S-LAL12 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative cemented partner; together with L3b-3 it makes the stabilization subunit net negative.",
      cemented: "L3b",
    },
    {
      id: 13,
      name: "L3b-3",
      label: "L3b negative singlet",
      type: "Biconcave Negative",
      nd: 1.733997,
      vd: 51.5,
      focalLengthMm: -65.4005,
      glass:
        "S-LAL59 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative singlet completing the transversely movable L3b stabilization subunit.",
    },
    {
      id: 14,
      name: "L3c-1",
      label: "L3c positive singlet",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 151.3467,
      glass:
        "S-LAL14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive singlet beginning the rear L3c subunit.",
    },
    {
      id: 15,
      name: "L3c-2",
      label: "L3c positive doublet member",
      type: "Biconvex Positive",
      nd: 1.517417,
      vd: 52.4,
      focalLengthMm: 61.7463,
      glass:
        "S-NSL36 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong positive member of the rear cemented doublet.",
      cemented: "L3c",
    },
    {
      id: 16,
      name: "L3c-3",
      label: "L3c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: -118.8387,
      glass:
        "S-LAM52 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative cemented partner that tempers the strong positive power of L3c.",
      cemented: "L3c",
    },
    {
      id: 17,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 24, R30–R31), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter follows original Fig. 87; the numerical table lists none. Included in elementCount, which follows the maker's published count.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: "flat", d: 5, sd: 60, medium: 1 },
    { label: "2", R: "flat", d: 1.5, sd: 60 },
    { label: "3", R: 239.798, d: 14.3, sd: 61, medium: 2 },
    { label: "4", R: -585.8, d: 48.85, sd: 61 },
    { label: "5", R: 117.916, d: 14.4, sd: 49.8, medium: 3 },
    { label: "6", R: -4012.478, d: 1.78, sd: 49.8 },
    { label: "7", R: -597.656, d: 5.0, sd: 48.8, medium: 4 },
    { label: "8", R: 193.601, d: 19.16, sd: 46.2, rimExtensionSd: 48.8 },
    { label: "9", R: 98.885, d: 13.8, sd: 43.6, medium: 5 },
    { label: "10", R: -2042.619, d: 1.5, sd: 43.6 },
    { label: "11", R: 69.144, d: 8.0, sd: 38.5, medium: 6 },
    { label: "12", R: 52.129, sd: 34.9, rimExtensionSd: 38.5 },
    { label: "13", R: 734.785, d: 4.0, sd: 30.3, medium: 7 },
    { label: "14", R: -217.95, d: 3.0, sd: 30.3, medium: 8 },
    { label: "15", R: 138.354, sd: 28.9, rimExtensionSd: 30.3 },
    { label: "STO", R: "flat", d: 17.65 },
    { label: "17", R: 164.033, d: 1.7, sd: 15.8, medium: 9 },
    { label: "18", R: 44.438, d: 5.4, sd: 15.8, medium: 10 },
    { label: "19", R: -496.476, d: 1.5, sd: 15.8 },
    { label: "20", R: 95.332, d: 3.3, sd: 15.2, medium: 11 },
    { label: "21", R: -205.46, d: 1.6, sd: 15.2, medium: 12 },
    { label: "22", R: 38.854, d: 4.45, sd: 14, rimExtensionSd: 15.2 },
    { label: "23", R: -96.365, d: 1.7, sd: 14, rimExtensionSd: 15, medium: 13 },
    { label: "24", R: 96.367, d: 3.23, sd: 15 },
    { label: "25", R: 143.981, d: 4.0, sd: 16.5, medium: 14 },
    { label: "26", R: -389.655, d: 0.3, sd: 16.5 },
    { label: "27", R: 62.574, d: 7.6, sd: 17.5, medium: 15 },
    { label: "28", R: -62.574, d: 1.8, sd: 17.5, medium: 16 },
    { label: "29", R: -235.693, d: 30.0, sd: 17.5 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 24, R30–R31), drawn as a plane-parallel plate.
    // Its sd follows original Fig. 87; the numerical table lists none.
    // Gap to the image: D31 + D32 to the image, inactive FC plane R32 omitted
    { label: "30", R: "flat", d: 2.2, sd: 25, medium: 17 },
    { label: "31", R: "flat", d: 70.28, sd: 25 }, // drop-in filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 4.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the source-defined cemented L2 moves imageward; unchanged D12/D15 keyframes retain the original 16.833981615 mm travel and 114.07 mm gap sum. With the selected source HG and FL traced physically, the derived close conjugate is 4.5 m, the original external product constraint. The patent publishes no finite-object spacing table. Source infinity focal/image-plane inconsistency remains unresolved; centered IS only.",
  },

  /* (moved from var) ── Focus variables ── */
  gaps: {
    "12": { label: "L2 FRONT GAP", values: [[20.52, 37.35398161538062]] },
    "15": { label: "L2 REAR GAP", values: [[93.55, 76.71601838461939]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  /* ── Diagram annotations ── */
  groups: [
    { text: "L1", fromSurface: "3", toSurface: "12" },
    { text: "L2 FOCUS", fromSurface: "13", toSurface: "15" },
    { text: "L3", fromSurface: "17", toSurface: "29" },
  ],
  doublets: [
    { text: "L1a", fromSurface: "3", toSurface: "4" },
    { text: "L1b", fromSurface: "5", toSurface: "8" },
    { text: "L1c", fromSurface: "9", toSurface: "12" },
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b IS", fromSurface: "20", toSurface: "24" },
    { text: "L3c", fromSurface: "25", toSurface: "29" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.68, yScFill: 0.46 },

  /* ── Ray / geometry authoring overrides ── */
  rays: { offAxisFractions: [-0.6, -0.3, 0, 0.3, 0.6] },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
