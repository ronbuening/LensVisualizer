import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 300mm f/2.8 L IS USM                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 6,115,188 A, Numerical Example 1 (Nishio, Ogawa, Misaka; Canon).║
 * ║ Product correlation: Canon EF 300mm f/2.8L IS USM, marketed July 1999.     ║
 * ║ Active model: 15 refractive elements / 11 air-separated groups; spherical.   ║
 * ║ Canon's 17/13 production count includes a front protection glass and the     ║
 * ║ standard rear filter. The protection glass is not numerically specified in   ║
 * ║ Example 1. The rear filter R28-R29 (2.00 mm, nd 1.516330, νd 64.1) is drawn  ║
 * ║ as a plane-parallel plate element, not counted in elementCount; its          ║
 * ║ semi-diameter is a ray-trace estimate (the patent lists none). R27 keeps the ║
 * ║ printed D27 = 8.00 mm. The patent prints D29 = 0.00 rather than a back       ║
 * ║ focus, so the 59.3221048 mm filter-to-image air is derived from the file's   ║
 * ║ paraxial image plane: 8.00 + 2.00/1.51633 + 59.3221048 = 68.641078902 mm     ║
 * ║ air-equivalent R27-to-image spacing.                                         ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes only the     ║
 * ║ direction of L2 focus travel. The close endpoint solves a rigid imageward   ║
 * ║ translation of L2 to Canon's marketed 2.5 m MFD, measured from image plane  ║
 * ║ to object. D10 + D13 remains 67.11 mm. This gives 14.743206096 mm L2 travel  ║
 * ║ and |m| = 0.135695; Canon's 0.13× figure is a rounded product specification. ║
 * ║ The solve used the air-equivalent track; with the physical filter the same   ║
 * ║ object sits 2.500681 m from the image plane (closeFocusM keeps Canon's 2.5). ║
 * ║                                                                              ║
 * ║ Semi-diameters are modeling values, not patent table values. They were      ║
 * ║ derived from the f/2.9 stop-constrained marginal ray, the reconstructed     ║
 * ║ close-focus marginal ray, the Fig. 1 optical section, and the production    ║
 * ║ barrel envelope. The thin R4-R5 and R20-R21 gaps require gapSagFrac = 0.96; ║
 * ║ both remain physically separated at the modeled rims in every focus state. ║
 * ║                                                                              ║
 * ║ The patent supplies nd and νd only. nC, nF, ng, and dPgF are intentionally  ║
 * ║ omitted: vendor identity is non-unique, so representative catalog line data ║
 * ║ would introduce false precision. Glass labels therefore remain classes or   ║
 * ║ six-digit coordinate codes except for the manufacturer-backed fluorite      ║
 * ║ correlation, represented spectrally by the catalog CaF2 curve without       ║
 * ║ asserting a production melt identity.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-300mm-f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 300mm f/2.8 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 1; production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ACTIVE ELEMENTS / 11 GROUPS",
      "MODELED EFL ≈ 293.600 mm",
      "MODELED F/2.9",
      "PATENT 2ω = 8.4°",
      "INNER FOCUS / IS",
    ],
    elementCount: 15,
    groupCount: 11,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 300, design: 293.599593947 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 193.47696,
      glass: "497815 — UD-class low-dispersion crown (vendor unresolved)",
      role: "Positive front collector in L1; correlated with one of the production lens's two UD elements.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 218.62316,
      glass: "497815 — UD-class low-dispersion crown (vendor unresolved)",
      role: "Second positive low-dispersion element in L1; correlated with the other production UD element.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.785896,
      vd: 44.2,
      focalLengthMm: -114.74478,
      glass: "786442 — high-index lanthanum glass class (vendor unresolved)",
      role: "Negative correction element in the positive L1 front unit.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 158.49796,
      glass: "Fluorite (CaF2 coefficient proxy; Canon product correlation)",
      role: "Positive L1 element; the production lens's fluorite element provides the manufacturer-backed material correlation.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -466.48479,
      glass: "487702 — high-Abbe crown class (vendor unresolved)",
      role: "Weak negative rear element of L1 preceding the inner-focus unit.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      focalLengthMm: 125.83165,
      glass: "805254 — dense-flint class (vendor unresolved)",
      role: "Positive component of the cemented negative L2 focusing doublet.",
      cemented: "L2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -59.90749,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      role: "Negative component that makes the cemented L2 group net negative for inner focusing.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: -76.187,
      glass: "847239 — high-index flint class (vendor unresolved)",
      role: "Negative component of the net-positive L31 cemented subunit.",
      cemented: "L31",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.719995,
      vd: 50.2,
      focalLengthMm: 43.10923,
      glass: "720502 — lanthanum crown class (vendor unresolved)",
      role: "Strong positive component of L31, immediately behind the aperture stop.",
      cemented: "L31",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: 66.28386,
      glass: "847239 — high-index flint class (vendor unresolved)",
      role: "Positive component of the cemented pair within the transversely movable L32 IS subunit.",
      cemented: "L32a",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.603112,
      vd: 60.6,
      focalLengthMm: -43.96039,
      glass: "603606 — crown class (vendor unresolved)",
      role: "Negative component of the L32 cemented pair and front boundary of the patent's biconvex air lens.",
      cemented: "L32a",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: -45.60909,
      glass: "772496 — high-index lanthanum glass class (vendor unresolved)",
      role: "Second negative element of L32 and rear boundary of the biconvex air lens.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.719995,
      vd: 50.2,
      focalLengthMm: 37.81764,
      glass: "720502 — lanthanum crown class (vendor unresolved)",
      role: "Strong positive component at the front of the positive L33 rear subunit.",
      cemented: "L33a",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -64.09925,
      glass: "834372 — high-index lanthanum flint class (vendor unresolved)",
      role: "Negative cemented partner within L33.",
      cemented: "L33a",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 117.32398,
      glass: "697555 — lanthanum crown class (vendor unresolved)",
      role: "Final positive element of L33; its plane rear surface precedes the 8.00 mm air gap to the rear filter FL.",
    },
    {
      id: 16,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (OHARA)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 1 R28–R29), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  surfaces: [
    { label: "1", R: 130.154, d: 16.56, sd: 55.0, medium: 1 },
    { label: "2", R: -352.589, d: 14.11, sd: 53.0 },
    { label: "3", R: 96.004, d: 11.02, sd: 49.0, medium: 2 },
    { label: "4", R: 793.095, d: 4.07, sd: 45.0 },
    { label: "5", R: -311.697, d: 4.0, sd: 41.7, medium: 3 },
    { label: "6", R: 127.604, d: 0.15, sd: 42.0 },
    { label: "7", R: 79.467, d: 13.88, sd: 42.0, medium: 4 },
    { label: "8", R: -483.755, d: 0.17, sd: 39.0 },
    { label: "9", R: 51.083, d: 5.9, sd: 39.0, medium: 5 },
    { label: "10", R: 40.134, sd: 35.5 },
    { label: "11", R: 1686.885, d: 4.61, sd: 27.0, medium: 6 },
    { label: "12", R: -107.66, d: 2.2, sd: 26.5, medium: 7 },
    { label: "13", R: 94.265, sd: 26.0 },
    { label: "STO", R: "flat", d: 8.51 },
    { label: "15", R: 79.49, d: 1.8, sd: 20.0, medium: 8 },
    { label: "16", R: 35.239, d: 7.2, sd: 20.0, medium: 9 },
    { label: "17", R: -238.114, d: 0.95, sd: 19.5 },
    { label: "18", R: 129.72, d: 4.25, sd: 19.5, medium: 10 },
    { label: "19", R: -97.425, d: 1.65, sd: 18.5, medium: 11 },
    { label: "20", R: 36.658, d: 5.52, sd: 15.85 },
    { label: "21", R: -76.051, d: 1.6, sd: 15.85, medium: 12 },
    { label: "22", R: 66.247, d: 2.82, sd: 18.0 },
    { label: "23", R: 78.646, d: 9.3, sd: 20.5, medium: 13 },
    { label: "24", R: -39.586, d: 1.8, sd: 20.5, medium: 14 },
    { label: "25", R: -155.699, d: 4.0, sd: 20.5 },
    { label: "26", R: 81.751, d: 5.5, sd: 22.0, medium: 15 },
    { label: "27", R: "flat", d: 8.0, sd: 22.0 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 1 R28–R29), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: D29 = 0.00 printed; gap after derived from the paraxial image plane
    { label: "28", R: "flat", d: 2.0, sd: 22, medium: 16 },
    { label: "29", R: "flat", d: 59.3221048, sd: 22 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 2.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent L2 moves imageward; close endpoint solves a rigid 14.743206096 mm L2 translation to Canon's marketed 2.5 m MFD, conserving D10 + D13 = 67.11 mm. No published close-focus spacing table exists for Example 1.",
  },

  gaps: {
    "10": { label: "D10", values: [[26.71, 41.453206096]] },
    "13": { label: "D13", values: [[40.4, 25.656793904]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "10" },
    { text: "L2 FOCUS", fromSurface: "11", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "27" },
  ],
  doublets: [
    { text: "L2", fromSurface: "11", toSurface: "13" },
    { text: "L31", fromSurface: "15", toSurface: "17" },
    { text: "L32 IS", fromSurface: "18", toSurface: "22" },
    { text: "L33", fromSurface: "23", toSurface: "27" },
  ],

  layout: { yScFill: 0.35 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
