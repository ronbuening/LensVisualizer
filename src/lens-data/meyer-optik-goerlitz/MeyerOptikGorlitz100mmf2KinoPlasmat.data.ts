import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ The source gives f/2 but no diaphragm diameter. The stop radius   ║
 * ║ is derived from the design f-number, f/2 from the authored d-line ║
 * ║ prescription; it is not a patent-published physical stop radius.  ║
 * ║ The final d is the paraxial BFD computed from that same authored  ║
 * ║ branch; the patent does not publish an image-plane spacing.       ║
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
  schema: 2,
  key: "meyer-optik-gorlitz-kino-plasmat-100-f2",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ KINO-PLASMAT 100mm f/2",
  subtitle: "DE 401630 Example III — Paul Rudolph; exact production-prescription attribution remains unconfirmed",

  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 100.16 mm (modeled d-line)", "F/2 (stop calibrated)", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 100.158021 },
  },

  source: { patentNumber: "DE 401630", patentYear: 1924, authors: ["Paul Rudolph"], assignees: [] },

  /*
   * Exact production mount and image format remain unverified for the correlated
   * 100 mm f/2 variant, so lensMounts and imageFormat are intentionally omitted.
   */
  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6219,
      indexReference: "d",
      focalLengthMm: 55.972881,
      glass: "Unmatched (SK/BSM/BACD-family dense-crown coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Front positive collector; front component of the cemented outer doublet.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.54641,
      indexReference: "d",
      focalLengthMm: -158.708722,
      glass: "Unmatched (light-flint-class coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Negative cemented partner in the front outer doublet.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62616,
      indexReference: "d",
      focalLengthMm: -132.837818,
      glass:
        "Unmatched (F1-family coordinate; modern 626357 class match, source D/G′ converted to d, supplier unconfirmed)",
      role: "Front inner negative member adjacent to the stop region.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62616,
      indexReference: "d",
      focalLengthMm: -117.169553,
      glass:
        "Unmatched (F1-family coordinate; modern 626357 class match, source D/G′ converted to d, supplier unconfirmed)",
      role: "Rear inner negative member adjacent to the stop region.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.54641,
      indexReference: "d",
      focalLengthMm: -140.080896,
      glass: "Unmatched (light-flint-class coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Negative cemented partner in the rear outer doublet.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6219,
      indexReference: "d",
      focalLengthMm: 49.456002,
      glass: "Unmatched (SK/BSM/BACD-family dense-crown coordinate; source D/G′ converted to d, supplier unconfirmed)",
      role: "Rear positive collector; rear component of the cemented outer doublet.",
      diagramLabel: "L6",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 59.04, d: 15.28, sd: 26.25, medium: 1 },
    { label: "2", R: -76.4, d: 4.38, sd: 26.25, medium: 2 },
    { label: "3", R: -655, d: 8.72, sd: 26.25 },
    { label: "4", R: -54.59, d: 4.38, sd: 23.75, medium: 3 },
    { label: "5", R: -163.74, d: 1.1, sd: 23.75 },
    { label: "STO", R: "flat", d: 0.97 },
    { label: "6", R: 144.5, d: 3.86, sd: 22.75, medium: 4 },
    { label: "7", R: 48.16, d: 7.7, sd: 22.75 },
    { label: "8", R: 577.9, d: 3.86, sd: 24.75, medium: 5 },
    { label: "9", R: 67.43, d: 13.5, sd: 24.75, medium: 6 },
    { label: "10", R: -52.21, d: 70.196016, sd: 24.75 },
  ],

  // Required UI endpoint only; no measured MFD or finite-focus state is claimed.
  focus: {
    closeFocusM: 1,
    description:
      "DE 401630 Example III publishes no finite-focus state, focusing motion or verified minimum focus distance; focus is not modeled.",
  },

  /*
   * The exact surviving 10 cm f/2 sample recorded by Leitz Auction has an aperture
   * scale spanning f/2-f/11. Intermediate entries below are conventional UI stops,
   * not a transcription of every engraving on that sample.
   */
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11] },

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

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
