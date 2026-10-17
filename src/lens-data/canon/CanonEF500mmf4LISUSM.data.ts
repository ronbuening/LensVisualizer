import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — CANON EF 500mm f/4 L IS USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 6,115,188 A, Numerical Example 24.                    ║
 * ║  Production correlation: Canon EF 500mm f/4L IS USM (July 1999). ║
 * ║  Physical/source count: 17 elements / 13 air-separated groups.    ║
 * ║  Active model: 15 powered elements / 11 air-separated groups.     ║
 * ║  elementCount/groupCount retain the physical 17/13 count.         ║
 * ║  HG is omitted; FL is a drawn plate element; FC is inactive.       ║
 * ║                                                                    ║
 * ║  No scaling is applied. Patent f = 490.56 mm and Fno = 4.1; the   ║
 * ║  rounded prescription recomputes to EFL ≈ 491.356789 mm.           ║
 * ║  nominalFno intentionally uses the modeled/source 4.1 value, not  ║
 * ║  the marketed f/4 designation.                                    ║
 * ║                                                                    ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. L2 translates          ║
 * ║  16.833981615 mm imageward from infinity to the close endpoint.   ║
 * ║  D12 increases and D15 decreases by the same amount, preserving   ║
 * ║  D12 + D15 = 114.07 mm. The single external constraint is         ║
 * ║  Canon's marketed 4.5 m MFD. After omission of HG and FL, the     ║
 * ║  equivalent active-model MFD is 4.497548307 m. L3b stabilization  ║
 * ║  motion is transverse only and is not represented as axial focus. ║
 * ║                                                                    ║
 * ║  Rear filter FL is a drawn plate element: D29=30.00, t=2.20,      ║
 * ║  nd=1.516330, vd=64.1; trailing air D31+D32=70.28 mm. Its         ║
 * ║  semi-diameter is a ray-trace estimate (the patent lists none).   ║
 * ║  Example 24 reproduces EFL 491.356789, not printed 490.56 mm.     ║
 * ║  Its physical image distance 102.48 mm is 0.670443 mm ahead of   ║
 * ║  paraxial focus. Published values retained; see the audit log.    ║
 * ║                                                                    ║
 * ║  Semi-diameters are inferred because Example 24 publishes none.   ║
 * ║  They were solved from exact d-line spherical ray traces at        ║
 * ║  infinity and reconstructed close focus, with the full on-axis    ║
 * ║  f/4.1 marginal ray plus a ±0.60-pupil off-axis fan at 60% of     ║
 * ║  the patent 2.5° half-field. Fig. 87 and the 146 mm production    ║
 * ║  barrel diameter were used only as silhouette/mechanical checks.  ║
 * ║  The tight R6-R7 1.78 mm airspace requires gapSagFrac = 0.96;     ║
 * ║  the shared 48.8 mm band retains positive physical clearance.     ║
 * ║                                                                    ║
 * ║  Example 24 publishes no nC, nF, ng, dPgF, asphere, or diffractive║
 * ║  data. None are invented here. The patent labels N and ν without  ║
 * ║  naming a reference line; d-line interpretation is inferred from  ║
 * ║  authoritative coordinate matches and the d/C/F/g aberration plot.║
 * ╚══════════════════════════════════════════════════════════════════════╝
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
      "15 POWERED ELEMENTS / 11 GROUPS + FILTER",
      "PATENT f = 490.56 mm; ARRAY EFL ≈ 491.36 mm",
      "F/4.1 DESIGN / f/4 MARKETED",
      "2ω = 5.0°",
      "INNER FOCUS + TRANSVERSE IS GROUP",
    ],
    elementCount: 17,
    groupCount: 13,
    acceptsTeleconverters: true, // Canon lists this host with Extender EF2x I/II/III.
    focalLengthMm: { marketing: 500, design: 490.56 },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "L1a front positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 344.3304,
      glass: "497816 — low-dispersion / UD coordinate class",
      role: "Front positive collector; production correlation assigns one of Canon's two UD elements to this coordinate.",
    },
    {
      id: 2,
      name: "L1b-1",
      label: "L1b positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 230.7498,
      glass: "497816 — low-dispersion / UD coordinate class",
      role: "Positive member of the negative-power L1b middle subunit.",
    },
    {
      id: 3,
      name: "L1b-2",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -174.666,
      glass: "835427 — lanthanum dense-crown coordinate class",
      role: "Negative member that makes L1b net negative and reduces front-unit aberration burden.",
    },
    {
      id: 4,
      name: "L1c-1",
      label: "L1c fluorite positive",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 217.8146,
      glass: "Fluorite (CaF2; manufacturer-correlated crystal)",
      role: "Strong low-dispersion positive member; uniquely correlated with Canon's published fluorite element.",
    },
    {
      id: 5,
      name: "L1c-2",
      label: "L1c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -488.4803,
      glass: "516641 — S-BSL7 / K-BK7 coordinate class",
      role: "Weak negative partner completing the net-positive L1c rear subunit.",
    },
    {
      id: 6,
      name: "L2-1",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      focalLengthMm: 209.1537,
      glass: "805254 — dense-flint coordinate class",
      role: "Positive front member of the cemented internal-focus doublet.",
      cemented: "L2",
    },
    {
      id: 7,
      name: "L2-2",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -100.9907,
      glass: "835427 — lanthanum dense-crown coordinate class",
      role: "Negative rear member; the cemented L2 unit has net negative power and moves axially for focus.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L3a-1",
      label: "L3a negative meniscus",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: -72.461,
      glass: "847239 — dense-flint coordinate class",
      role: "Negative front member of the net-positive L3a cemented doublet.",
      cemented: "L3a",
    },
    {
      id: 9,
      name: "L3a-2",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: 49.0812,
      glass: "835427 — lanthanum dense-crown coordinate class",
      role: "Positive rear member of L3a, converging the beam ahead of the stabilization subunit.",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3b-1",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: 77.3004,
      glass: "847239 — dense-flint coordinate class",
      role: "Positive member of the transverse image-stabilization subunit.",
      cemented: "L3b",
    },
    {
      id: 11,
      name: "L3b-2",
      label: "L3b negative doublet member",
      type: "Biconcave Negative",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: -48.073,
      glass: "678553 — lanthanum crown coordinate class",
      role: "Negative cemented partner; together with L3b-3 it makes the stabilization subunit net negative.",
      cemented: "L3b",
    },
    {
      id: 12,
      name: "L3b-3",
      label: "L3b negative singlet",
      type: "Biconcave Negative",
      nd: 1.733997,
      vd: 51.5,
      focalLengthMm: -65.4005,
      glass: "734515 — lanthanum crown coordinate class",
      role: "Negative singlet completing the transversely movable L3b stabilization subunit.",
    },
    {
      id: 13,
      name: "L3c-1",
      label: "L3c positive singlet",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 151.3467,
      glass: "697555 — lanthanum crown coordinate class",
      role: "Positive singlet beginning the rear L3c subunit.",
    },
    {
      id: 14,
      name: "L3c-2",
      label: "L3c positive doublet member",
      type: "Biconvex Positive",
      nd: 1.517417,
      vd: 52.4,
      focalLengthMm: 61.7463,
      glass: "517524 — crown coordinate class",
      role: "Strong positive member of the rear cemented doublet.",
      cemented: "L3c",
    },
    {
      id: 15,
      name: "L3c-3",
      label: "L3c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: -118.8387,
      glass: "720437 — legacy S-LAM52 / H-LaF62 coordinate class",
      role: "Negative cemented partner that tempers the strong positive power of L3c.",
      cemented: "L3c",
    },
    {
      id: 16,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (OHARA coordinate match; supplier unconfirmed)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 24, R30–R31), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Included in elementCount, which follows the maker's published count.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "3", R: 239.798, d: 14.3, sd: 61.0, medium: 1 },
    { label: "4", R: -585.8, d: 48.85, sd: 60.8 },
    { label: "5", R: 117.916, d: 14.4, sd: 50.2, medium: 2 },
    { label: "6", R: -4012.478, d: 1.78, sd: 48.8 },
    { label: "7", R: -597.656, d: 5.0, sd: 48.8, medium: 3 },
    { label: "8", R: 193.601, d: 19.16, sd: 47.0 },
    { label: "9", R: 98.885, d: 13.8, sd: 44.4, medium: 4 },
    { label: "10", R: -2042.619, d: 1.5, sd: 43.6 },
    { label: "11", R: 69.144, d: 8.0, sd: 39.0, medium: 5 },
    { label: "12", R: 52.129, sd: 34.9 },
    { label: "13", R: 734.785, d: 4.0, sd: 30.4, medium: 6 },
    { label: "14", R: -217.95, d: 3.0, sd: 30.2, medium: 7 },
    { label: "15", R: 138.354, sd: 28.9 },
    { label: "STO", R: "flat", d: 17.65 },
    { label: "17", R: 164.033, d: 1.7, sd: 16.1, medium: 8 },
    { label: "18", R: 44.438, d: 5.4, sd: 15.7, medium: 9 },
    { label: "19", R: -496.476, d: 1.5, sd: 15.4 },
    { label: "20", R: 95.332, d: 3.3, sd: 14.8, medium: 10 },
    { label: "21", R: -205.46, d: 1.6, sd: 14.5, medium: 11 },
    { label: "22", R: 38.854, d: 4.45, sd: 13.6 },
    { label: "23", R: -96.365, d: 1.7, sd: 13.4, medium: 12 },
    { label: "24", R: 96.367, d: 3.23, sd: 13.4 },
    { label: "25", R: 143.981, d: 4.0, sd: 13.5, medium: 13 },
    { label: "26", R: -389.655, d: 0.3, sd: 13.6 },
    { label: "27", R: 62.574, d: 7.6, sd: 13.6, medium: 14 },
    { label: "28", R: -62.574, d: 1.8, sd: 13.2, medium: 15 },
    { label: "29", R: -235.693, d: 30.0, sd: 13.0 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 24, R30–R31), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: D31 + D32 to the image, inactive FC plane R32 omitted
    { label: "30", R: "flat", d: 2.2, sd: 17.5, medium: 16 },
    { label: "31", R: "flat", d: 70.28, sd: 17.5 }, // drop-in filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 4.497548306766997,
    description:
      "CONSTRAINED_RECONSTRUCTION: the cemented L2 focus doublet translates 16.833981615 mm imageward from infinity " +
      "to the normalized 4.497548307 m close state; D12 increases and D15 decreases equally, preserving 114.07 mm. " +
      "The reconstruction is solved from Canon's marketed 4.5 m MFD. L3b image-stabilization motion is transverse only.",
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
