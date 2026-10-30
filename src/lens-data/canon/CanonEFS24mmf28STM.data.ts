import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2015-111192 A, Numerical Example 1, ¶0062–67 pp. 10–11; Figure 1 p. 15.
 * Source R/d, six d-line index/Abbe pairs, S12 asphere and printed image gap are retained.
 * Source surface 5 is the dimensioned flare stop: radius 4.065 mm, 4 mm after S4 and
 * 3.26 mm before the main stop. Its restored air plane has no optical power.
 * Clear SDs are literal effective diameters / 2. The resolved S4 concave-end outer shoulder
 * uses rimExtensionSd, preserving its clear cap; no bonded-interface land is invented.
 * The main iris follows the existing canonical f/2.88 rule; the source's 4.39 mm radius
 * is documented separately rather than bypassing the ordinary-prime stop contract.
 * Unit-focus image gap 42.32 mm is an inherited inferred finite state, not published.
 * Catalog curves are qualified spectral proxies, not historical supplier/melt/chemistry.
 * L5 retains genuine θgF 0.544, condition (5) and rounded source-derived ΔPgF 0.0141.
 * The source generally permits camera-side plates but dimensions none in this example.
 * Unresolved source totals: literal R/d gives D29.14/track64.82 versus source summaries
 * D29.15/track64.83; no spacing is changed to force those totals.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-efs-24-f28-stm",
  maker: "Canon",
  name: "CANON EF-S 24mm f/2.8 STM",
  subtitle: "JP 2015-111192 A EXAMPLE 1 — CANON / GYODA",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 24.5 mm", "F/2.8", "2ω ≈ 58.3°", "1 ASPHERICAL SURFACE"],
    elementCount: 6,
    groupCount: 5,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 24, design: 24.5 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2015-111192 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2015,
    authors: ["Yuichi Gyoda"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Example 1 literal source R/d on pp. 10–11 sums to D=29.14 mm and front-to-image track64.82 mm with printed BF35.68. Table1 p.14 prints D29.15 and the p.11 summary prints track64.83. Last-digit rounding is a hypothesis, not proof of a replacement; all printed prescription spacings are retained.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.91082,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 35.3,
      focalLengthMm: 40.28,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front positive collector; source high-index d-line pair, chemistry unidentified",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 70.2,
      focalLengthMm: -22.32,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Diverging element; creates retrofocus back focal distance and front-group achromatization",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 55.5,
      focalLengthMm: 19.87,
      glass: "N-LAK14 (SCHOTT catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented pair; source nd/vd coordinates, chemical family unidentified",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8061,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 33.3,
      focalLengthMm: -13.72,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative meniscus concave to object, cemented behind L3; source nd/vd coordinates",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59522,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 67.7,
      focalLengthMm: 24.62,
      glass: "S-FPM2 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote:
        "Source Table 1 p. 14 prints θgF=0.544; condition (5) and Table 2 p. 15 give positive anomaly. Relative to its printed normal line at νd=67.7, ΔPgF=0.0140714, retained rounded to 0.0141. No individual C/F/g indices or chemistry are identified.",
      role: "Positive RG3 relay with source-published anomalous partial dispersion; chemistry unidentified",
      dPgF: 0.0141,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      indexReference: "d",
      indexReferenceNote:
        "JP 2015-111192 A, ¶0030 p. 6 defines d=587.6 nm; ¶0062 p. 10 defines all numerical ndi/νdi at d.",
      vd: 59.4,
      focalLengthMm: 42.54,
      glass: "S-BAL42 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Aspherical field flattener; corrects field curvature and residual spherical aberration at large ray heights",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent ¶0067: standard sag equation with K = conic constant.
   *  K = 0 corresponds to a spherical base (standard convention).
   *  Coefficients through A12; A14 not provided by patent (set to 0).
   */
  surfaces: [
    // ── Front group FB (negative) ──
    { label: "1", R: 23.706, d: 2.83, sd: 8.065, medium: 1 }, // L1 front
    { label: "2", R: 63.184, d: 0.25, sd: 7.21 }, // L1 rear → air
    { label: "3", R: 22.266, d: 0.9, sd: 6.445, medium: 2 }, // L2 front
    { label: "4", R: 7.213, d: 4.0, sd: 5.055, rimExtensionSd: 6.9 }, // L2 rear; source d4=4.00 to flare stop

    { label: "5P", R: "flat", d: 3.26, sd: 4.065 }, // source S5 flare-cut stop

    // ── Aperture stop ──
    // JP 2015-111192 A, Example 1 surface table, surface 6: printed effective diameter 8.78 mm at the stop.
    { label: "STO", R: "flat", d: 3.24 },

    // ── Rear group RB (positive) ──
    // Cemented doublet D1 (L3 + L4)
    { label: "7", R: -16.321, d: 4.82, sd: 4.65, medium: 3 }, // L3 front
    { label: "8", R: -8.4, d: 0.8, sd: 5.685, medium: 4 }, // L3→L4 junction
    { label: "9", R: -36.438, d: 0.2, sd: 6.835 }, // L4 rear → air

    // L5 (biconvex positive)
    { label: "10", R: 227.537, d: 4.39, sd: 7.615, medium: 5 }, // L5 front
    { label: "11", R: -15.547, d: 0.9, sd: 8.36 }, // L5 rear → air

    // L6 (aspherical positive meniscus)
    {
      label: "12A",
      R: -34.842,
      d: 3.55,
      sd: 8.88,
      medium: 6,
      asphere: { K: 0, A4: -5.24174e-5, A6: 5.25723e-8, A8: -3.53661e-9, A10: 3.36031e-11, A12: -1.48386e-13 },
    }, // L6 front (source S12 asphere)
    { label: "13", R: -15.035, sd: 9.47 }, // L6 rear → air (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.16,
    description:
      "Inferred unit focus: only the image gap changes from printed 35.68 mm to inherited 42.32 mm. The original publishes infinity only; this endpoint does not establish the production STM mechanism or exact 0.16 m conjugate.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates as rigid assembly.
   *  Only the BFD (last surface d) changes.
   *  Close-focus BFD computed via paraxial ABCD trace at Canon MFD = 0.16 m.
   *  Computed magnification at MFD: 0.27× (matches Canon specification).
   */
  gaps: { "13": { label: "BF", values: [[35.68, 42.32]] } },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 2.88,
    fStops: [2.88, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22],
  },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FB", fromSurface: "1", toSurface: "4" },
    { text: "RB", fromSurface: "7", toSurface: "13" },
  ],
  doublets: [{ text: "D₁", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.6, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
