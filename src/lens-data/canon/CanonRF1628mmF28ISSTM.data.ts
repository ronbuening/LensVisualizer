import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 16-28mm f/2.8 IS STM                           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2024-101615 A, Numerical Example 1 (数値例1),       ║
 * ║  Canon Inc.; inventor printed only as 齋藤 慎一郎 (romanized here as ║
 * ║  Shinichiro Saito). Native patent scale (s = 1); d-line nd/νd.       ║
 * ║  Negative-lead five-group zoom: L1(−) L2(+) L3(−) L4(+, stop) L5(+). ║
 * ║  16 elements / 13 groups; 3 aspherical surfaces (2A, 27A, 28A) on    ║
 * ║  2 elements (E1, E15).                                               ║
 * ║                                                                      ║
 * ║  PRODUCT CORRELATION: family-level only. Example 1 is the job's      ║
 * ║    selected embodiment, not a manufacturer-confirmed prescription.   ║
 * ║    Its 16/13 count matches Canon (Example 3 also gives 16/13), but   ║
 * ║    Canon describes one GMo and one replica asphere (replica          ║
 * ║    front-most); Example 1 has a direct asphere on a moldable-        ║
 * ║    coordinate front element and no resin layer. Five elements have   ║
 * ║    νd ≥ 75 against Canon's 4 UD.                                     ║
 * ║                                                                      ║
 * ║  ZOOM: stations are the three printed infinity states (15.488 /      ║
 * ║    24.114 / 27.160 mm). Zoom-only gaps: D8 and D28 (after 28A).      ║
 * ║    Zoom + focus gaps: D10, D12. L1 reverses (imageward W→M, then     ║
 * ║    objectward);                                                      ║
 * ║    L2 and L4 move as a linked pair (L2 rear vertex, surface 10, to   ║
 * ║    stop 12.835 mm, constant within rounding); L5 and the BF          ║
 * ║    (13.270 mm) are fixed. No cover glass or filter is tabulated;     ║
 * ║    the last d is air to the image.                                   ║
 * ║                                                                      ║
 * ║  FOCUS (CONSTRAINED_RECONSTRUCTION): the patent publishes infinity   ║
 * ║    only. L3 (E6) translates objectward (Fig. 1, ¶0025, ¶0078) with   ║
 * ║    D10 + D12 conserved; travel solved paraxially so the image stays  ║
 * ║    on the infinity image plane with the object at 0.250 / 0.213 /    ║
 * ║    0.200 m from the image plane. Travel 3.630 / 4.969 / 5.795 mm.    ║
 * ║    0.250 m (16 mm) and 0.200 m (28 mm) are Canon's published MFDs;   ║
 * ║    0.213 m at the middle station is linear interpolation in focal    ║
 * ║    length, not published. Not patent data.                           ║
 * ║                                                                      ║
 * ║  NOTE ON APERTURE: printed F2.9 at all three stations (nominalFno    ║
 * ║    2.9 is the modeled design value; Canon markets f/2.8). The iris   ║
 * ║    schedule is inferred;                                             ║
 * ║    no diaphragm diameter is published, so reproducing F2.9 is a      ║
 * ║    calibration, not independent evidence. The stop radius is derived ║
 * ║    from the design f-number at each zoom station; the largest (tele) ║
 * ║    current derived radius is 10.462193 mm at telephoto.               ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: not published. Modeled from real-ray        ║
 * ║    floors (F2.9 axial beam and the chief ray at 1.02 × the printed   ║
 * ║    half-field over nine zoom samples and the three close states),    ║
 * ║    then compared with Fig. 1 wide/middle/tele drawings. Native wide   ║
 * ║    active span is about 6.24 px/mm (±0.8 mm rim uncertainty).         ║
 * ║    The earlier 600-dpi page render was upsampling. Reduced for        ║
 * ║    cross-gap clearance: 2A 17.3 (vs E2), 5 15.9 (vs 4), 26 9.5       ║
 * ║    (vs 27A). The prior ≥4% floor applied to its stated sample only;   ║
 * ║    it is not a full-pupil or generic full-frame clearance claim.      ║
 * ║                                                                      ║
 * ║  NOTE ON IMAGE FIELD: printed image heights (17.55 / 20.10 / 20.46   ║
 * ║    mm) are below the full-frame corner because distortion is         ║
 * ║    corrected electronically (¶0039); no imageCircleMm is declared.   ║
 * ║    The viewer's analysis field therefore runs past the printed       ║
 * ║    half-field toward the format corner (about 58° / 45° / 41°);      ║
 * ║    that margin is extrapolation beyond the patent's evaluated field. ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  See LENS_DATA_SPEC.md § Scope: What to Include.                     ║
 * Scoped original follow-up 2026-10-30 adds S2A outer 23.6 while retaining its clear 17.3 cap.
 * This fixes the native free-end shoulder; it does not restore the clipped optical field.
 * Full S5/S26 outer trials physically overlap adjacent optics and fail the unchanged guards.
 * The S2A outer wall is cap-anchored; a trial 18.4 clear cap fails the cross-gap guard.
 * The earlier 10.97 value is a nominal paraxial input ray height at STO, not its radius.
 * Figure 1 is an embedded 1294×1285 raster at 394 ppi; earlier 600-dpi renders were upsampling.
 * October 1 shape history and October 8 genuine partial-dispersion review remain dated coverage.
 * All R/d, three aspheres, controls, source pairs/partials and compatible curves are preserved.
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

/** 2026-10-31 source-partial followup selects TAFD35/S-LAH63/FDS90/FC5 proxies for E4/E9/E10/E16.
 * E15 retains M-BACD12 because the proposed molding-state row worsens known C-F dispersion.
 * All source pairs, rounded genuine dPgF fields, APD tags, geometry and controls remain unchanged.
 */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-16-28mm-f28-is-stm",
  maker: "Canon",
  name: "CANON RF 16-28mm f/2.8 IS STM",
  subtitle: "JP 2024-101615 A EXAMPLE 1 — CANON / SAITO (family-level correlation; not manufacturer-confirmed)",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "f = 15.49–27.16 mm",
      "F/2.9 (CONSTANT, DESIGN)",
      "2ω ≈ 109.1° (WIDE, UNCORRECTED)",
      "3 ASPHERICAL SURFACES / 2 ELEMENTS",
    ],
    elementCount: 16,
    groupCount: 13,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [16, 28], design: [15.488, 27.16] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP 2024-101615 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2024,
    authors: ["Shinichiro Saito"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.88202,
      vd: 37.22,
      indexReference: "d",
      focalLengthMm: -29.83,
      glass:
        "M-TAFD307 (HOYA) / D-ZLaF67-25 (CDGM), 882372 — compatible spectral proxies; historical supplier, melt, chemistry and molding process unspecified",
      apd: false,
      role: "Front negative meniscus of L1 with the aspherical rear surface 2A; catalog molding-family coordinates do not establish a historical molding grade, supplier or manufacturing process.",
      dPgF: -0.0042,
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      focalLengthMm: -55.05,
      glass:
        "TAF3D (HOYA) / S-LAH65VS (OHARA) / N-LASF44 (Schott) — 804465 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Second negative meniscus of L1.",
      dPgF: -0.0084,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: -66.28,
      glass:
        "FCD1 (HOYA) / N-PK52A (Schott) — 497816 fluorophosphate class; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: "inferred",
      apdNote:
        "dPgF = +0.0321 from patent θgF 0.5386 against the engine normal line; the patent does not itself label the glass anomalous",
      role: "Biconcave negative low-dispersion element of L1 (patent θgF 0.5386 lies above the engine normal line).",
      dPgF: 0.0321,
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      focalLengthMm: 36.29,
      glass:
        "TAFD35 (HOYA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: false,
      role: "High-index biconvex positive element closing L1.",
      dPgF: -0.0021,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.54,
      indexReference: "d",
      focalLengthMm: 71.68,
      glass:
        "S-LAL7Q (OHARA) / N-LAK7 (Schott) — 652585 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Single biconvex positive element forming L2; moves with L4 as a linked pair during zoom.",
      dPgF: -0.0063,
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.63,
      indexReference: "d",
      focalLengthMm: -47.17,
      glass:
        "TAF1 (HOYA) / S-LAH66 (OHARA) / N-LAF34 (Schott) — 772496 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Single negative meniscus forming L3, the focus group; moves toward the object for close focus (reconstructed travel).",
      dPgF: -0.0095,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      focalLengthMm: 40.51,
      glass: "FCD705 class (550755; compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "dPgF = +0.0237 from patent θgF 0.5405 against the engine normal line; the patent does not itself label the glass anomalous",
      role: "First positive element of L4, behind the aperture stop.",
      dPgF: 0.0237,
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 26.69,
      glass:
        "FCD1 (HOYA) / N-PK52A (Schott) — 497816 fluorophosphate class; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: "inferred",
      apdNote:
        "dPgF = +0.0321 from patent θgF 0.5386 against the engine normal line; the patent does not itself label the glass anomalous",
      role: "Biconvex positive front element of the first L4 cemented doublet.",
      cemented: "D1",
      dPgF: 0.0321,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.59,
      indexReference: "d",
      focalLengthMm: -29.64,
      glass:
        "S-LAH63 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: false,
      role: "Negative meniscus rear element of the first L4 cemented doublet.",
      cemented: "D1",
      dPgF: -0.0043,
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.79,
      indexReference: "d",
      focalLengthMm: 50.78,
      glass:
        "FDS90 (HOYA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: false,
      role: "Positive meniscus front element of the cemented image-stabilization doublet (patent ¶0088: 10th and 11th lenses).",
      cemented: "D2",
      dPgF: 0.0153,
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.60562,
      vd: 43.7,
      indexReference: "d",
      focalLengthMm: -32.17,
      glass:
        "S-BAM4 (OHARA) / N-BAF4 (Schott) — 606437 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Biconcave rear element of the image-stabilization doublet; the cemented pair has net negative power.",
      cemented: "D2",
      dPgF: 0.0018,
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 35.45,
      glass: "FCD100 class (437951; compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "dPgF = +0.0488 from patent θgF 0.5326 against the engine normal line; the patent does not itself label the glass anomalous",
      role: "Biconvex positive element in L4 (patent θgF 0.5326 lies well above the engine normal line).",
      dPgF: 0.0488,
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 31.46,
      glass: "FCD100 class (437951; compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "dPgF = +0.0488 from patent θgF 0.5326 against the engine normal line; the patent does not itself label the glass anomalous",
      role: "Biconvex positive front element of the second L4 cemented doublet.",
      cemented: "D3",
      dPgF: 0.0488,
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: -16.63,
      glass:
        "TAFD5G (HOYA) / S-LAH55V (OHARA) — 835427 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Biconcave rear element of the second L4 cemented doublet; the pair has net negative power.",
      cemented: "D3",
      dPgF: -0.0069,
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      focalLengthMm: -119.92,
      glass:
        "M-BACD12 (HOYA) / H-ZK2 (CDGM) — 583595 coordinates; compatible spectral proxy; historical supplier, melt and chemistry unspecified",
      apd: false,
      role: "Weak negative meniscus closing L4, aspherical on both surfaces.",
      dPgF: -0.002,
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: 68.99,
      glass:
        "FC5 (HOYA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: false,
      role: "Single positive meniscus forming L5, fixed relative to the image plane during zoom and focus.",
      dPgF: 0.005,
    },
  ],

  /* ── Surface prescription (wide end, infinity) ── */
  /* (moved from asph) ── Aspherical coefficients (patent 【数1】 uses the (1 + K) conic form; K copied; A14 absent in patent) ── */
  surfaces: [
    { label: "1", R: 144.3036, d: 1.6, sd: 23.6, medium: 1 },
    {
      label: "2A",
      R: 22.1371,
      d: 6.609,
      sd: 17.3,
      rimExtensionSd: 23.6,
      asphere: { K: 0, A4: -7.11444e-6, A6: 2.28099e-9, A8: -8.75851e-11, A10: 2.46405e-13, A12: -4.26701e-16, A14: 0 },
    },
    { label: "3", R: 83.0958, d: 1.2, sd: 18.4, medium: 2 },
    { label: "4", R: 28.6986, d: 9.218, sd: 18.4 },
    { label: "5", R: -44.7549, d: 1.2, sd: 15.9, medium: 3 },
    { label: "6", R: 125.9165, d: 0.6, sd: 18.1 },
    { label: "7", R: 59.3716, d: 7.271, sd: 18.9, medium: 4 },
    { label: "8", R: -70.2249, sd: 18.9 },
    { label: "9", R: 50.1715, d: 2.83, sd: 11.2, medium: 5 },
    { label: "10", R: -660.8048, sd: 11.2 },
    { label: "11", R: -34.0489, d: 1.2, sd: 11.2, medium: 6 },
    { label: "12", R: -526.4616, sd: 11.2 },
    { label: "STO", R: "flat", d: 3.0 }, // aperture stop (patent surface 13); radius derived from the design f-number at each zoom station; see header
    { label: "14", R: 74.6203, d: 5.539, sd: 12.7, medium: 7 },
    { label: "15", R: -30.9554, d: 0.3, sd: 12.7 },
    { label: "16", R: 33.7448, d: 8.252, sd: 12.3, medium: 8 },
    { label: "17", R: -20.0789, d: 1.2, sd: 12.3, medium: 9 },
    { label: "18", R: -130.5977, d: 2.863, sd: 12.3 },
    { label: "19", R: -66.6857, d: 3.246, sd: 10.9, medium: 10 },
    { label: "20", R: -26.7237, d: 1.0, sd: 10.9, medium: 11 },
    { label: "21", R: 72.908, d: 3.41, sd: 10.9 },
    { label: "22", R: 33.2273, d: 5.671, sd: 10.9, medium: 12 },
    { label: "23", R: -27.5238, d: 0.2, sd: 10.9 },
    { label: "24", R: 22.7871, d: 6.5, sd: 10.9, medium: 13 },
    { label: "25", R: -31.6567, d: 1.0, sd: 10.9, medium: 14 },
    { label: "26", R: 25.072, d: 3.826, sd: 9.5 },
    {
      label: "27A",
      R: -64.2569,
      d: 1.7,
      sd: 11.7,
      medium: 15,
      asphere: { K: 0, A4: -7.9805e-5, A6: 4.31831e-7, A8: -1.02601e-8, A10: 9.74514e-11, A12: -3.3188e-13, A14: 0 },
    },
    {
      label: "28A",
      R: -800.0,
      sd: 11.7,
      asphere: { K: 0, A4: -3.06766e-5, A6: 2.19257e-7, A8: -3.28288e-9, A10: 3.23801e-11, A12: -9.88714e-14, A14: 0 },
    },
    { label: "29", R: -1991.3434, d: 7.318, sd: 19.2, medium: 16 },
    { label: "30", R: -33.1143, d: 13.27, sd: 19.2 }, // BF 13.270 mm, air to image plane (no cover glass or filter tabulated)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom ── */
    // (moved from zoomCloseFocusM) 0.25 / 0.20 m Canon MFDs (image-plane reference); 0.213 m interpolated
    stations: [
      { focalLengthMm: 15.488, closeFocusM: 0.25, label: "Wide" },
      { focalLengthMm: 24.114, closeFocusM: 0.213 },
      { focalLengthMm: 27.16, closeFocusM: 0.2, label: "Tele" },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "Inner focus by L3 (single negative lens E6) moving toward the object with D10 + D12 conserved; all other groups and the image plane fixed. The patent publishes infinity states only; close spacings are solved paraxially for object distances of 0.250 / 0.213 / 0.200 m from the image plane (Canon MFDs at the ends, interpolated at the middle station).",
  },

  /* (moved from var) ── Variable air spacings: one [infinity, close] pair per zoom station ── */
  gaps: {
    "8": {
      label: "D8",
      values: [
        [26.926, 26.926],
        [5.641, 5.641],
        [1.872, 1.872],
      ],
    }, // zoom only
    "10": {
      label: "D10",
      values: [
        [6.971, 3.341],
        [8.548, 3.579],
        [9.157, 3.362],
      ],
    }, // zoom + reconstructed focus (L3 object-ward)
    "12": {
      label: "D12",
      values: [
        [4.664, 8.294],
        [3.088, 8.057],
        [2.479, 8.274],
      ],
    }, // zoom + reconstructed focus; D10 + D12 conserved
    "28A": {
      label: "D28",
      values: [
        [1.575, 1.575],
        [12.481, 12.481],
        [16.432, 16.432],
      ],
    }, // zoom only
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "10" },
    { text: "L3 / FOCUS", fromSurface: "11", toSurface: "12" },
    { text: "L4", fromSurface: "STO", toSurface: "28A" },
    { text: "L5", fromSurface: "29", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "16", toSurface: "18" },
    { text: "D2 (IS)", fromSurface: "19", toSurface: "21" },
    { text: "D3", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
