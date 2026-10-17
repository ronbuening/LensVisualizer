import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ZEISS Batis 2.8/18 candidate modeled from JP 2016-188967 A, Example 1.
 *
 * Source/model treatment:
 * - The selected patent example is retained at native scale (design EFL 18.54 mm; no uniform scaling).
 * - Surface 22A d is a corrected source erratum. Example 1 prints d22 = 25.606 mm; this file carries 22.106 mm.
 *   The printed number is the back focus from surface 22 to the image, entered in the d22 slot, so the printed
 *   table counts the cover glass and its air space twice: 25.606 - 2.500 - 1.000 = 22.106. With 22.106 the total
 *   length is 92.001 mm and the image plane sits 0.023 mm behind paraxial focus, as in Example 2 (92.000 mm,
 *   +0.020 mm) and Example 3 (92.000 mm, +0.021 mm). With the printed value the plane is 3.523 mm behind focus,
 *   where Fig. 2 plots spherical aberration within 0.06 mm. The patent's BF 29.106 and L 95.501 are sums of the
 *   printed column and carry the same double count. The printed cover glass CG (surfaces 23–24: 2.500 mm,
 *   nd 1.5168, νd 64.20) and the printed 1.000 mm air space to the image plane are modeled in `rearPlates`
 *   (traced, not drawn).
 * - Surface 14A A10 is a corrected source erratum. Example 1 prints +2.3692e-11 (¶0096); this file carries
 *   -2.3692e-11. Example 4 reprints the surface as its surface 13 (same radius, glass and A4–A8) with the negative
 *   sign (¶0153), and the corresponding surface of Examples 2 and 3 is negative too (¶0115, ¶0134). With the
 *   printed sign the F/2.88 axial marginal ray focuses 15.07 mm behind the paraxial image and converges at F/4.03,
 *   where Fig. 2 plots spherical aberration within 0.06 mm; the negative sign gives -0.024 mm and F/2.878.
 * - Focus status is PUBLISHED. G12/L121 moves imageward; D14 increases 1.472 -> 2.318 mm and D16 decreases
 *   6.519 -> 5.674 mm. G11 and G13 remain fixed. No production-MFD-driven internal reconstruction is used.
 * - The physical stop diameter is not published. The stop radius is derived from the design f-number, the
 *   patent's infinity FNO=2.88; this is not independent evidence of an unpublished diaphragm size.
 * - The patent publishes no semi-diameters. Modeled SDs used exact d-line ray envelopes through the earlier
 *   calibrated F/2.88 stop with 10% clearance over the axial and +/-0.60 published-half-field construction region, plus a
 *   conservative full-field rim-ray coverage check. The front two elements were refined against Fig. 1 at 600 dpi: S1/S2 = 19.8/14.0 mm and
 *   S3/S4 = 14.4/10.3 mm. S2 is capped below the measured rim to respect the surface-slope limit.
 *   The second Fig. 1 review sets G12 to 8.3 mm and the three rear elements to 10.2/10.8/10.8 mm,
 *   excluding leaders and mechanical steps. Other ray-envelope SDs are retained.
 * - Glass labels are coordinate/class descriptions only; the patent does not establish suppliers or melts.
 *   No per-glass nC/nF/ng/dPgF values are authored because exact identities are not independently established.
 * - The production correlation to the ZEISS Batis 2.8/18 is strong but not manufacturer-confirmed patent attribution.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "zeiss-batis-18f28",
  maker: "Carl Zeiss Oberkochen",
  name: "ZEISS BATIS 18mm f/2.8",
  subtitle: "JP 2016-188967 A Example 1 — strong Batis 2.8/18 correlation; attribution not manufacturer-confirmed",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 10 GROUPS",
      "18.54 mm DESIGN / 18 mm MARKETED",
      "F/2.88 DESIGN / f/2.8 MARKETED",
      "100.58° PATENT FULL FIELD",
      "8 ASPHERICAL SURFACES",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: 18, design: 18.541544365154 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2016-188967 A",
    patentYear: 2016,
    authors: ["Keisuke Omori"],
    assignees: ["Tamron Co., Ltd."],
    errata: [
      {
        status: "corrected",
        surface: "14A",
        field: "A10",
        printed: 2.3692e-11,
        applied: -2.3692e-11,
        evidence: ["sibling-example", "aberration-figure"],
        note: "Example 4 reprints the surface with −2.3692e-11; the printed sign puts the F/2.88 marginal focus 15.07 mm behind the paraxial image where Fig. 2 plots spherical aberration within 0.06 mm.",
      },
      {
        status: "corrected",
        surface: "22A",
        field: "d",
        printed: 25.606,
        applied: 22.106,
        evidence: ["sibling-example", "aberration-figure"],
        note: "The printed d22 is the surface-22-to-image back focus, so the table counts the 2.500 mm cover glass and 1.000 mm air space twice; 22.106 gives the 92.00 mm total length and +0.02 mm image-plane offset of Examples 2 and 3, and the printed value puts the plane 3.52 mm behind focus against Fig. 2.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L111",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5935,
      vd: 67,
      indexReference: "d",
      focalLengthMm: -60.891629,
      glass: "J-PSKH4 catalog proxy; 593670 class (supplier unconfirmed)",
      apd: false,
      role: "Front negative meniscus supporting wide-angle coverage.",
      diagramLabel: "L111",
    },
    {
      id: 2,
      name: "L112",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: -49.195131,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      diagramLabel: "L112",
    },
    {
      id: 3,
      name: "L113",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.592,
      vd: 67.02,
      indexReference: "d",
      focalLengthMm: -29.263186,
      glass: "M-PCD51 catalog proxy; 592670 molded PCD51/Q-PSKH4S class (supplier unconfirmed)",
      apd: false,
      diagramLabel: "L113",
    },
    {
      id: 4,
      name: "L114",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      focalLengthMm: 43.391621,
      glass: "881401 TAFD33 class (supplier unconfirmed)",
      apd: false,
      diagramLabel: "L114",
    },
    {
      id: 5,
      name: "L115",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.881,
      vd: 40.14,
      indexReference: "d",
      focalLengthMm: -35.916349,
      glass: "881401 TAFD33 class (supplier unconfirmed)",
      apd: false,
      diagramLabel: "L115",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L116",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: 20.910194,
      glass: "H-QK3L catalog proxy; 487704 low-index crown class (supplier unconfirmed)",
      apd: false,
      diagramLabel: "L116",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L117",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      indexReference: "d",
      focalLengthMm: 23.842775,
      glass: "H-FK61 catalog proxy; 497816 molded low-dispersion class (supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      diagramLabel: "L117",
    },
    {
      id: 8,
      name: "L121",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.729,
      vd: 54.04,
      indexReference: "d",
      focalLengthMm: -45.915551,
      glass: "M-TAC80 catalog proxy; 729540 high-index low-dispersion molded class (supplier unconfirmed)",
      apd: false,
      role: "Single-element negative inner-focus group G12.",
      diagramLabel: "L121",
    },
    {
      id: 9,
      name: "L131",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 80.283147,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      diagramLabel: "L131",
    },
    {
      id: 10,
      name: "L132",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 49.630236,
      glass: "H-FK61 catalog proxy; 497816 low-dispersion crown class (supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "The compatible 497816 fluor-crown catalog class has positive anomalous partial dispersion (H-FK61 proxy ΔPgF ≈ +0.0315). The patent supplies only nd/νd; supplier, melt and measured partial dispersion are unconfirmed.",
      diagramLabel: "L132",
    },
    {
      id: 11,
      name: "L133",
      label: "Element 11",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.882,
      vd: 37.22,
      indexReference: "d",
      focalLengthMm: -28.425101,
      glass: "M-TAFD307 catalog proxy; 882372 molded TAFD307 class (supplier unconfirmed)",
      apd: false,
      diagramLabel: "L133",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 28.832, d: 2, sd: 19.8, medium: 1 },
    { label: "2", R: 15.623, d: 6.886, sd: 14.0 },
    { label: "3", R: 29.397, d: 1.5, sd: 14.4, medium: 2 },
    { label: "4", R: 13.122, d: 5.883, sd: 10.3 },
    {
      label: "5A",
      R: 52.568,
      d: 1.3,
      sd: 9.5,
      medium: 3,
      asphere: { K: 0, A4: -2.6625e-5, A6: 3.0031e-7, A8: -1.7989e-9, A10: 5.7847e-12 },
    },
    {
      label: "6A",
      R: 12.91,
      d: 3.068,
      sd: 9.1,
      asphere: { K: 0, A4: -6.8334e-5, A6: 8.4364e-9, A8: -1.2228e-9, A10: -9.8374e-12 },
    },
    { label: "7", R: 30.333, d: 2.265, sd: 9.5, medium: 4 },
    { label: "8", R: 141.737, d: 12.099, sd: 9.4 },
    { label: "9", R: 24.676, d: 1, sd: 9.3, medium: 5 },
    { label: "10", R: 13.601, d: 5.292, sd: 8.8, medium: 6 },
    { label: "11", R: -35.502, d: 1.3, sd: 8.8 },
    { label: "STO", R: "flat", d: 2.425 },
    {
      label: "13A",
      R: 30.85,
      d: 4.386,
      sd: 9.3,
      medium: 7,
      asphere: { K: 0, A4: -2.2269e-5, A6: 1.1253e-9, A8: -1.0562e-9, A10: -3.1969e-12 },
    },
    {
      label: "14A",
      R: -18.338,
      sd: 9.4,
      asphere: {
        K: 0,
        A4: 5.1791e-5,
        A6: -5.2286e-7,
        A8: 4.0083e-9,
        A10: -2.3692e-11, // Example 1 prints +2.3692e-11; see header and sourceErrata
      },
    },
    {
      label: "15A",
      R: 45.781,
      d: 0.8,
      sd: 8.3,
      medium: 8,
      asphere: { K: 0, A4: 2.0348e-5, A6: -1.1141e-6, A8: 1.4175e-8, A10: -5.7786e-11 },
    },
    { label: "16A", R: 19.193, sd: 8.3, asphere: { K: 0, A4: 2.158e-5, A6: -8.9505e-7, A8: 1.278e-8, A10: -5.7413e-11 } },
    { label: "17", R: -68.737, d: 2.535, sd: 10.2, medium: 9 },
    { label: "18", R: -25.555, d: 0.1, sd: 10.2 },
    { label: "19", R: -329.577, d: 4.036, sd: 10.8, medium: 10 },
    { label: "20", R: -23.042, d: 0.329, sd: 10.8 },
    {
      label: "21A",
      R: -400,
      d: 1.2,
      sd: 10.8,
      medium: 11,
      asphere: { K: 0, A4: -2.4151e-5, A6: -1.3394e-7, A8: 2.2182e-9, A10: -7.5852e-12 },
    },
    // Last surface: gap to the cover glass CG. The patent prints 25.606, which is the distance to the image; see header.
    {
      label: "22A",
      R: 26.785,
      d: 22.106,
      sd: 10.8,
      asphere: { K: 0, A4: -3.5206e-6, A6: -1.2925e-7, A8: 2.2655e-9, A10: -8.5817e-12 },
    },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "PUBLISHED inner focus: G12/L121 translates 0.846 mm imageward from infinity to the patent 158.000 mm close state while G11/G13 remain fixed. The patent does not state the 158 mm datum; the supported front-vertex interpretation normalizes to the manufacturer's 0.25 m sensor-plane MFD. No internal focus reconstruction is used.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus spacings ── */
  gaps: { "14A": { label: "D(14)", values: [[1.472, 2.318]] }, "16A": { label: "D(16)", values: [[6.519, 5.674]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: { kind: "rectilinear", fullFieldDeg: 100.58, maxTraceFieldDeg: 50.29 },

  /* ── Cover glass CG (patent surfaces 23–24): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source:
        "JP 2016-188967 A, Example 1 surfaces 23–24 (¶0095); preceding d22 = 22.106 corrects the printed 25.606, which includes this plate and its air space",
    },
  ],

  groups: [
    { text: "G11", fromSurface: "1", toSurface: "14A" },
    { text: "G12 FOCUS", fromSurface: "15A", toSurface: "16A" },
    { text: "G13F", fromSurface: "17", toSurface: "20" },
    { text: "G13R", fromSurface: "21A", toSurface: "22A" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
