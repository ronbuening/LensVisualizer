import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MEYER OPTIK GÖRLITZ KINO-PLASMAT 100mm f/2           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: DE 401630, Example III, Dr. Paul Rudolph.                  ║
 * ║ Six elements / four air-separated groups; all surfaces spherical. ║
 * ║                                                                    ║
 * ║ INDEX REFERENCE                                                    ║
 * ║ The patent publishes nD and nG′, not LensVisualizer d-line data.  ║
 * ║ Each authored nd was converted to 587.562 nm with a two-point     ║
 * ║ Cauchy n=A+B/λ² fit to the source D=589.294 nm and G′=434.047 nm ║
 * ║ coordinates, then rounded to five decimals. No νd, nC, nF, ng,   ║
 * ║ or dPgF is inferred.                                               ║
 * ║                                                                    ║
 * ║ STOP AND IMAGE PLANE                                               ║
 * ║ The source gives f/2 but no diaphragm diameter. STO.sd is a       ║
 * ║ modeled calibration to f/2 from the authored d-line prescription; ║
 * ║ it is not a patent-published physical stop radius. The final d    ║
 * ║ is the paraxial BFD computed from that same authored branch; the  ║
 * ║ patent does not publish an image-plane spacing.                    ║
 * ║                                                                    ║
 * ║ SEMI-DIAMETERS                                                     ║
 * ║ The patent gives full physical lens diameters, not clear optical  ║
 * ║ semi-diameters. Authored refracting SDs are modeled 0.25 mm       ║
 * ║ radially inside those physical rims. Exact meridional checks were ║
 * ║ run through a modeled ±6° half-field; this is not source coverage.║
 * ║                                                                    ║
 * ║ FOCUS                                                              ║
 * ║ NO_INTERNAL_RECONSTRUCTION. Example III gives no finite-focus     ║
 * ║ state, motion law, or production minimum-focus distance.          ║
 * ║ closeFocusM is a schema placeholder only; var remains empty.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "meyer-optik-gorlitz-kino-plasmat-100-f2",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ KINO-PLASMAT 100mm f/2",
  subtitle: "DE 401630 Example III — Paul Rudolph; exact production-prescription attribution remains unconfirmed",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 100.16 mm (modeled d-line)", "F/2 (stop calibrated)", "ALL-SPHERICAL"],

  focalLengthDesign: 100.158021,
  patentNumber: "DE 401630",
  patentAuthors: ["Paul Rudolph"],
  patentAssignees: [],
  patentYear: 1924,
  elementCount: 6,
  groupCount: 4,

  /*
   * Exact production mount and image format remain unverified for the correlated
   * 100 mm f/2 variant, so lensMounts and imageFormat are intentionally omitted.
   */

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6219,
      indexReference: "d",
      fl: 55.972881,
      glass: "Unmatched (SK/BSM/BACD-family dense-crown coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Front positive collector; front component of the cemented outer doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.54641,
      indexReference: "d",
      fl: -158.708722,
      glass: "Unmatched (light-flint-class coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Negative cemented partner in the front outer doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62616,
      indexReference: "d",
      fl: -132.837818,
      glass: "Unmatched (F1-family coordinate; modern 626357 class match, source D/G′ converted to d, supplier unconfirmed)",
      role: "Front inner negative member adjacent to the stop region.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62616,
      indexReference: "d",
      fl: -117.169553,
      glass: "Unmatched (F1-family coordinate; modern 626357 class match, source D/G′ converted to d, supplier unconfirmed)",
      role: "Rear inner negative member adjacent to the stop region.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.54641,
      indexReference: "d",
      fl: -140.080896,
      glass: "Unmatched (light-flint-class coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Negative cemented partner in the rear outer doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6219,
      indexReference: "d",
      fl: 49.456002,
      glass: "Unmatched (SK/BSM/BACD-family dense-crown coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Rear positive collector; rear component of the cemented outer doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 59.04, d: 15.28, nd: 1.6219, elemId: 1, sd: 26.25 },
    { label: "2", R: -76.4, d: 4.38, nd: 1.54641, elemId: 2, sd: 26.25 },
    { label: "3", R: -655, d: 8.72, nd: 1, elemId: 0, sd: 26.25 },
    { label: "4", R: -54.59, d: 4.38, nd: 1.62616, elemId: 3, sd: 23.75 },
    { label: "5", R: -163.74, d: 1.1, nd: 1, elemId: 0, sd: 23.75 },
    { label: "STO", R: 1e15, d: 0.97, nd: 1, elemId: 0, sd: 18.689528 },
    { label: "6", R: 144.5, d: 3.86, nd: 1.62616, elemId: 4, sd: 22.75 },
    { label: "7", R: 48.16, d: 7.7, nd: 1, elemId: 0, sd: 22.75 },
    { label: "8", R: 577.9, d: 3.86, nd: 1.54641, elemId: 5, sd: 24.75 },
    { label: "9", R: 67.43, d: 13.5, nd: 1.6219, elemId: 6, sd: 24.75 },
    { label: "10", R: -52.21, d: 70.196016, nd: 1, elemId: 0, sd: 24.75 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  // Required UI endpoint only; no measured MFD or finite-focus state is claimed.
  closeFocusM: 1,
  focusDescription:
    "DE 401630 Example III publishes no finite-focus state, focusing motion or verified minimum focus distance; focus is not modeled.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /*
   * The exact surviving 10 cm f/2 sample recorded by Leitz Auction has an aperture
   * scale spanning f/2-f/11. Intermediate entries below are conventional UI stops,
   * not a transcription of every engraving on that sample.
   */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
