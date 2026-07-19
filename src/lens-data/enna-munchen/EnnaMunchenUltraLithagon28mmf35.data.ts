import type { LensDataInput } from "../../types/optics.js";

/**
 * Enna München Ultra-Lithagon 28mm f/3.5
 *
 * Data source: US 2,959,100, Example 1 / Table I, Hans Lautenbacher,
 * Enna Werk Optische Anstalt Dr. Appelt K.G.
 *
 * Patent prescription is normalized to f = 100.0. Radii, axial spacings, and
 * inferred semi-diameters are uniformly scaled by 0.28 to model the 28 mm
 * production-class embodiment. The patent lists no clear apertures, so surface
 * semi-diameters are conservative estimates from the meridional ray envelope,
 * capped by spherical rim, cross-gap sag, and edge-thickness constraints. They
 * are not manufacturer-published clear-aperture values.
 *
 * The aperture stop is not tabulated separately in the patent. Its axial station
 * is inferred from the drawing as the midpoint of the l4 air gap between L4 and
 * L5; the 16.0 normalized gap is therefore split 8.0 / 8.0 before scaling.
 *
 * Note on source legibility: OCR commonly misreads the plus sign on R8 in this
 * scan. The rendered Table I and claim table both support R8 = +105.562.
 *
 * Focus is modeled as unit focus. The patent gives infinity data only; the close
 * state uses a 0.30 m object-to-image distance and increases BF from 35.227689 mm
 * to 38.836352 mm.
 */
const LENS_DATA = {
  key: "enna-munchen-ultra-lithagon-28mm-f35",
  maker: "Enna München",
  name: "ENNA MÜNCHEN ULTRA-LITHAGON 28mm f/3.5",
  subtitle: "US 2,959,100 Example 1 — Enna Werk / Hans Lautenbacher",
  specs: ["6 elements / 6 groups", "f ≈ 28.00 mm", "f/3.5", "2ω = 75°", "All-spherical retrofocus"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.00055,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["exakta", "m42"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,959,100",
  patentAuthors: ["Hans Lautenbacher"],
  patentAssignees: ["ENNA WERK OPTIK APELT"],
  patentYear: 1960,
  elementCount: 6,
  groupCount: 6,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75,
    maxTraceFieldDeg: 37.5,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 56.9,
      fl: -42.01,
      glass: "S-BSM10 equivalent (OHARA; legacy SK10-class, patent nd/vd)",
      apd: false,
      role: "Diverging front meniscus of part F; establishes the retrofocus back-focus extension.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62536,
      vd: 35.6,
      fl: 280.44,
      glass: "Unmatched legacy flint (625/356; exact catalog type unresolved)",
      apd: false,
      role: "Weak collective median element of part S; patent uses it to stretch the astigmatic field curves.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.61272,
      vd: 58.6,
      fl: 30.525,
      glass: "N-SK4 (SCHOTT)",
      apd: false,
      role: "Primary positive element at the front of the rear main part H.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62536,
      vd: 35.6,
      fl: 56.636,
      glass: "Unmatched legacy flint (625/356; exact catalog type unresolved)",
      apd: false,
      role: "Positive flint meniscus following L3 across a very narrow air gap.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -14.426,
      glass: "SF4 (SCHOTT)",
      apd: false,
      role: "Strong negative dense-flint element in part H; main achromatizing counterweight to the positive rear elements.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.6172,
      vd: 54.0,
      fl: 23.746,
      glass: "J-SSK1 equivalent (HIKARI; legacy SSK1-class, patent nd/vd)",
      apd: false,
      role: "Rear positive element providing final convergence to the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.04, d: 1.176, nd: 1.6228, elemId: 1, sd: 15.3 },
    { label: "2", R: 17.48152, d: 16.24, nd: 1.0, elemId: 0, sd: 15.3 },
    { label: "3", R: -98.0, d: 2.8, nd: 1.62536, elemId: 2, sd: 11.2 },
    { label: "4", R: -63.56, d: 10.78, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "5", R: 34.16, d: 2.38, nd: 1.61272, elemId: 3, sd: 8.6 },
    { label: "6", R: -40.24048, d: 0.14, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "7", R: 16.464, d: 1.68, nd: 1.62536, elemId: 4, sd: 8.4 },
    { label: "8", R: 29.55736, d: 2.24, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "STO", R: 1e15, d: 2.24, nd: 1.0, elemId: 0, sd: 5.4715 },
    { label: "9", R: -28.0, d: 1.848, nd: 1.7552, elemId: 5, sd: 6.4 },
    { label: "10", R: 18.34, d: 2.24, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "11", R: 1e15, d: 2.8, nd: 1.6172, elemId: 6, sd: 7.8 },
    { label: "12", R: -14.65632, d: 35.227689, nd: 1.0, elemId: 0, sd: 8.0 },
  ],

  asph: {},
  var: {
    "12": [35.227689, 38.836352],
  },
  varLabels: [["12", "BF"]],
  groups: [
    { text: "F", fromSurface: "1", toSurface: "2" },
    { text: "S", fromSurface: "3", toSurface: "4" },
    { text: "H", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "Unit focus; close state modeled by increasing BF from 35.227689 mm to 38.836352 mm for a 0.30 m object-to-image distance.",
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.56,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
