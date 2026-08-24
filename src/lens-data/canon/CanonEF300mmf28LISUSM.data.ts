import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 300mm f/2.8 L IS USM                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 6,115,188 A, Numerical Example 1 (Nishio, Ogawa, Misaka; Canon).║
 * ║ Product correlation: Canon EF 300mm f/2.8L IS USM, marketed July 1999.     ║
 * ║ Active model: 15 refractive elements / 11 air-separated groups; spherical.║
 * ║ Canon's 17/13 production count includes a front protection glass and the   ║
 * ║ standard rear filter. The protection glass is not numerically specified in  ║
 * ║ Example 1, and the rear filter R28-R29 is omitted from the active model.     ║
 * ║ Its paraxial effect is folded into the R27-to-image air-equivalent spacing. ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes only the     ║
 * ║ direction of L2 focus travel. The close endpoint solves a rigid imageward   ║
 * ║ translation of L2 to Canon's marketed 2.5 m MFD, measured from image plane  ║
 * ║ to object. D10 + D13 remains 67.11 mm. This gives 14.743206096 mm L2 travel ║
 * ║ and |m| = 0.135695; Canon's 0.13× figure is a rounded product specification.║
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
  key: "canon-ef-300mm-f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 300mm f/2.8 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 1; production correlation",
  specs: [
    "15 ACTIVE ELEMENTS / 11 GROUPS",
    "MODELED EFL ≈ 293.600 mm",
    "MODELED F/2.9",
    "PATENT 2ω = 8.4°",
    "INNER FOCUS / IS",
  ],

  focalLengthMarketing: 300,
  focalLengthDesign: 293.599593947,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,115,188 A",
  patentAuthors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2000,
  elementCount: 15,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      fl: 193.47696,
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
      fl: 218.62316,
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
      fl: -114.74478,
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
      fl: 158.49796,
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
      fl: -466.48479,
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
      fl: 125.83165,
      glass: "805254 — dense-flint class (vendor unresolved)",
      cemented: "L2",
      role: "Positive component of the cemented negative L2 focusing doublet.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      fl: -59.90749,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      cemented: "L2",
      role: "Negative component that makes the cemented L2 group net negative for inner focusing.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      fl: -76.187,
      glass: "847239 — high-index flint class (vendor unresolved)",
      cemented: "L31",
      role: "Negative component of the net-positive L31 cemented subunit.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.719995,
      vd: 50.2,
      fl: 43.10923,
      glass: "720502 — lanthanum crown class (vendor unresolved)",
      cemented: "L31",
      role: "Strong positive component of L31, immediately behind the aperture stop.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      fl: 66.28386,
      glass: "847239 — high-index flint class (vendor unresolved)",
      cemented: "L32a",
      role: "Positive component of the cemented pair within the transversely movable L32 IS subunit.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.603112,
      vd: 60.6,
      fl: -43.96039,
      glass: "603606 — crown class (vendor unresolved)",
      cemented: "L32a",
      role: "Negative component of the L32 cemented pair and front boundary of the patent's biconvex air lens.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      fl: -45.60909,
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
      fl: 37.81764,
      glass: "720502 — lanthanum crown class (vendor unresolved)",
      cemented: "L33a",
      role: "Strong positive component at the front of the positive L33 rear subunit.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -64.09925,
      glass: "834372 — high-index lanthanum flint class (vendor unresolved)",
      cemented: "L33a",
      role: "Negative cemented partner within L33.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.696797,
      vd: 55.5,
      fl: 117.32398,
      glass: "697555 — lanthanum crown class (vendor unresolved)",
      role: "Final positive element of L33; its plane rear surface precedes the normalized image-space gap.",
    },
  ],

  surfaces: [
    { label: "1", R: 130.154, d: 16.56, nd: 1.496999, elemId: 1, sd: 55.0 },
    { label: "2", R: -352.589, d: 14.11, nd: 1.0, elemId: 0, sd: 53.0 },
    { label: "3", R: 96.004, d: 11.02, nd: 1.496999, elemId: 2, sd: 49.0 },
    { label: "4", R: 793.095, d: 4.07, nd: 1.0, elemId: 0, sd: 45.0 },
    { label: "5", R: -311.697, d: 4.0, nd: 1.785896, elemId: 3, sd: 41.7 },
    { label: "6", R: 127.604, d: 0.15, nd: 1.0, elemId: 0, sd: 42.0 },
    { label: "7", R: 79.467, d: 13.88, nd: 1.43387, elemId: 4, sd: 42.0 },
    { label: "8", R: -483.755, d: 0.17, nd: 1.0, elemId: 0, sd: 39.0 },
    { label: "9", R: 51.083, d: 5.9, nd: 1.48749, elemId: 5, sd: 39.0 },
    { label: "10", R: 40.134, d: 26.71, nd: 1.0, elemId: 0, sd: 35.5 },
    { label: "11", R: 1686.885, d: 4.61, nd: 1.805181, elemId: 6, sd: 27.0 },
    { label: "12", R: -107.66, d: 2.2, nd: 1.834807, elemId: 7, sd: 26.5 },
    { label: "13", R: 94.265, d: 40.4, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "STO", R: 1e15, d: 8.51, nd: 1.0, elemId: 0, sd: 17.662796669 },
    { label: "15", R: 79.49, d: 1.8, nd: 1.846658, elemId: 8, sd: 20.0 },
    { label: "16", R: 35.239, d: 7.2, nd: 1.719995, elemId: 9, sd: 20.0 },
    { label: "17", R: -238.114, d: 0.95, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "18", R: 129.72, d: 4.25, nd: 1.846658, elemId: 10, sd: 19.5 },
    { label: "19", R: -97.425, d: 1.65, nd: 1.603112, elemId: 11, sd: 18.5 },
    { label: "20", R: 36.658, d: 5.52, nd: 1.0, elemId: 0, sd: 15.85 },
    { label: "21", R: -76.051, d: 1.6, nd: 1.772499, elemId: 12, sd: 15.85 },
    { label: "22", R: 66.247, d: 2.82, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "23", R: 78.646, d: 9.3, nd: 1.719995, elemId: 13, sd: 20.5 },
    { label: "24", R: -39.586, d: 1.8, nd: 1.834, elemId: 14, sd: 20.5 },
    { label: "25", R: -155.699, d: 4.0, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "26", R: 81.751, d: 5.5, nd: 1.696797, elemId: 15, sd: 22.0 },
    { label: "27", R: 1e15, d: 68.641078902, nd: 1.0, elemId: 0, sd: 22.0 },
  ],

  asph: {},

  var: {
    "10": [26.71, 41.453206096],
    "13": [40.4, 25.656793904],
  },
  varLabels: [
    ["10", "D10"],
    ["13", "D13"],
  ],

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

  closeFocusM: 2.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent L2 moves imageward; close endpoint solves a rigid 14.743206096 mm L2 translation to Canon's marketed 2.5 m MFD, conserving D10 + D13 = 67.11 mm. No published close-focus spacing table exists for Example 1.",

  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,

  gapSagFrac: 0.96,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
