import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — CANON EF 500mm f/4 L IS USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 6,115,188 A, Numerical Example 24.                    ║
 * ║  Production correlation: Canon EF 500mm f/4L IS USM (July 1999). ║
 * ║  Physical/source count: 17 elements / 13 air-separated groups.    ║
 * ║  Active model: 15 powered elements / 11 air-separated groups.     ║
 * ║  elementCount/groupCount retain the physical 17/13 count; HG and  ║
 * ║  FL are omitted from the active arrays, as is inactive FC.        ║
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
 * ║  Rear reference normalization: the omitted 2.20 mm rear filter    ║
 * ║  is replaced by its air-equivalent thickness. Surface 29 therefore║
 * ║  carries d = 101.730871512 mm to the image plane.                 ║
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
  key: "canon-ef-500mm-f4l-is-usm",
  maker: "Canon",
  name: "CANON EF 500mm f/4 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 24; correlated to the Canon EF 500mm f/4L IS USM",
  specs: [
    "15 MODELED ELEMENTS / 11 GROUPS",
    "PATENT f = 490.56 mm; ARRAY EFL ≈ 491.36 mm",
    "F/4.1 DESIGN / f/4 MARKETED",
    "2ω = 5.0°",
    "INNER FOCUS + TRANSVERSE IS GROUP",
  ],

  focalLengthMarketing: 500,
  focalLengthDesign: 490.56,
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,115,188 A",
  patentAuthors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2000,
  elementCount: 17,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "L1a front positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      fl: 344.3304,
      glass: "497816 — low-dispersion / UD coordinate class",
      role:
        "Front positive collector; production correlation assigns one of Canon's two UD elements to this coordinate.",
    },
    {
      id: 2,
      name: "L1b-1",
      label: "L1b positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      fl: 230.7498,
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
      fl: -174.666,
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
      fl: 217.8146,
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
      fl: -488.4803,
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
      fl: 209.1537,
      glass: "805254 — dense-flint coordinate class",
      cemented: "L2",
      role: "Positive front member of the cemented internal-focus doublet.",
    },
    {
      id: 7,
      name: "L2-2",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      fl: -100.9907,
      glass: "835427 — lanthanum dense-crown coordinate class",
      cemented: "L2",
      role: "Negative rear member; the cemented L2 unit has net negative power and moves axially for focus.",
    },
    {
      id: 8,
      name: "L3a-1",
      label: "L3a negative meniscus",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      fl: -72.461,
      glass: "847239 — dense-flint coordinate class",
      cemented: "L3a",
      role: "Negative front member of the net-positive L3a cemented doublet.",
    },
    {
      id: 9,
      name: "L3a-2",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.7,
      fl: 49.0812,
      glass: "835427 — lanthanum dense-crown coordinate class",
      cemented: "L3a",
      role: "Positive rear member of L3a, converging the beam ahead of the stabilization subunit.",
    },
    {
      id: 10,
      name: "L3b-1",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      fl: 77.3004,
      glass: "847239 — dense-flint coordinate class",
      cemented: "L3b",
      role: "Positive member of the transverse image-stabilization subunit.",
    },
    {
      id: 11,
      name: "L3b-2",
      label: "L3b negative doublet member",
      type: "Biconcave Negative",
      nd: 1.6779,
      vd: 55.3,
      fl: -48.073,
      glass: "678553 — lanthanum crown coordinate class",
      cemented: "L3b",
      role: "Negative cemented partner; together with L3b-3 it makes the stabilization subunit net negative.",
    },
    {
      id: 12,
      name: "L3b-3",
      label: "L3b negative singlet",
      type: "Biconcave Negative",
      nd: 1.733997,
      vd: 51.5,
      fl: -65.4005,
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
      fl: 151.3467,
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
      fl: 61.7463,
      glass: "517524 — crown coordinate class",
      cemented: "L3c",
      role: "Strong positive member of the rear cemented doublet.",
    },
    {
      id: 15,
      name: "L3c-3",
      label: "L3c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.7,
      fl: -118.8387,
      glass: "720437 — legacy S-LAM52 / H-LaF62 coordinate class",
      cemented: "L3c",
      role: "Negative cemented partner that tempers the strong positive power of L3c.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "3", R: 239.798, d: 14.3, nd: 1.496999, elemId: 1, sd: 61.0 },
    { label: "4", R: -585.8, d: 48.85, nd: 1.0, elemId: 0, sd: 60.8 },
    { label: "5", R: 117.916, d: 14.4, nd: 1.496999, elemId: 2, sd: 50.2 },
    { label: "6", R: -4012.478, d: 1.78, nd: 1.0, elemId: 0, sd: 48.8 },
    { label: "7", R: -597.656, d: 5.0, nd: 1.834807, elemId: 3, sd: 48.8 },
    { label: "8", R: 193.601, d: 19.16, nd: 1.0, elemId: 0, sd: 47.0 },
    { label: "9", R: 98.885, d: 13.8, nd: 1.43387, elemId: 4, sd: 44.4 },
    { label: "10", R: -2042.619, d: 1.5, nd: 1.0, elemId: 0, sd: 43.6 },
    { label: "11", R: 69.144, d: 8.0, nd: 1.51633, elemId: 5, sd: 39.0 },
    { label: "12", R: 52.129, d: 20.52, nd: 1.0, elemId: 0, sd: 34.9 },
    { label: "13", R: 734.785, d: 4.0, nd: 1.805181, elemId: 6, sd: 30.4 },
    { label: "14", R: -217.95, d: 3.0, nd: 1.834807, elemId: 7, sd: 30.2 },
    { label: "15", R: 138.354, d: 93.55, nd: 1.0, elemId: 0, sd: 28.9 },
    { label: "STO", R: 1e15, d: 17.65, nd: 1.0, elemId: 0, sd: 17.719982840242565 },
    { label: "17", R: 164.033, d: 1.7, nd: 1.846658, elemId: 8, sd: 16.1 },
    { label: "18", R: 44.438, d: 5.4, nd: 1.834807, elemId: 9, sd: 15.7 },
    { label: "19", R: -496.476, d: 1.5, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "20", R: 95.332, d: 3.3, nd: 1.846658, elemId: 10, sd: 14.8 },
    { label: "21", R: -205.46, d: 1.6, nd: 1.6779, elemId: 11, sd: 14.5 },
    { label: "22", R: 38.854, d: 4.45, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "23", R: -96.365, d: 1.7, nd: 1.733997, elemId: 12, sd: 13.4 },
    { label: "24", R: 96.367, d: 3.23, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "25", R: 143.981, d: 4.0, nd: 1.696797, elemId: 13, sd: 13.5 },
    { label: "26", R: -389.655, d: 0.3, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "27", R: 62.574, d: 7.6, nd: 1.517417, elemId: 14, sd: 13.6 },
    { label: "28", R: -62.574, d: 1.8, nd: 1.72, elemId: 15, sd: 13.2 },
    { label: "29", R: -235.693, d: 101.73087151213785, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  asph: {},

  /* ── Focus variables ── */
  var: {
    "12": [20.52, 37.35398161538062],
    "15": [93.55, 76.71601838461939],
  },
  varLabels: [
    ["12", "L2 FRONT GAP"],
    ["15", "L2 REAR GAP"],
  ],

  /* ── Diagram annotations ── */
  groups: [
    { text: "L1a", fromSurface: "3", toSurface: "4" },
    { text: "L1b", fromSurface: "5", toSurface: "8" },
    { text: "L1c", fromSurface: "9", toSurface: "12" },
    { text: "L2 FOCUS", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b IS", fromSurface: "20", toSurface: "24" },
    { text: "L3c", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b", fromSurface: "20", toSurface: "22" },
    { text: "L3c", fromSurface: "27", toSurface: "29" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 4.497548306766997,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the cemented L2 focus doublet translates 16.833981615 mm imageward from infinity " +
    "to the normalized 4.497548307 m close state; D12 increases and D15 decreases equally, preserving 114.07 mm. " +
    "The reconstruction is solved from Canon's marketed 4.5 m MFD. L3b image-stabilization motion is transverse only.",

  /* ── Aperture configuration ── */
  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,

  /* ── Ray / geometry authoring overrides ── */
  offAxisFractions: [-0.6, -0.3, 0, 0.3, 0.6],
  gapSagFrac: 0.96,

  /* ── Layout tuning ── */
  scFill: 0.68,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
