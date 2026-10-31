import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28–200mm f/3.5–5.6 USM — JP 2001-350095 A, Numerical Example 1.
 * Exact native prescription: PDF p. 6; corresponding Fig. 1(A/B/C): PDF p. 10. Source R/d, two aspheres,
 * infinity zoom gaps and existing reconstructed G2-only focus trajectories remain unchanged.
 * Existing restored R12/R18/R23/R26A signs are formalized in source.errata: the four-sign block alone among all
 * 16 combinations reproduces the source focal summaries/Table 1, and independently satisfies Claim 5 (PDF p. 2).
 *
 * Original ¶0050 (PDF p. 5) defines ni/νi without identifying a reference line. All 17 literal source pairs remain;
 * approximate d-line tracing is explicit, all media stay Unmatched and catalog resolution is disabled. Removed
 * catalog-derived per-lens nC/nF/ng/dPgF overrides are not published spectral measurements. Historical chemistry,
 * supplier and melt remain unresolved, including the 0.05 mm bonded layer; no manufacturing process is proved.
 *
 * Native Fig. 1 is a 200 ppi raster at about 2.75 px/mm; inferred endpoint uncertainty is about ±1 mm. The hybrid
 * front/bonded caps follow the same 13.4 mm source component rim, and S8 adds a flat rear shoulder to 13.4 while
 * retaining clear sd 10.7. Layer thickness stays positive to that cap; no disconnected resin wing or opaque land
 * is added at the bonded interface. S13 and S29 retain smaller gap-constrained clear caps. No inferred cut.
 *
 * There are 16 glass substrates / 12 air-spaced components plus one separately modeled thin layer. Source filters
 * and rear plates are absent. The retail association is a qualified correlation, not a factory prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-28-200mm-f35-56-usm",
  maker: "Canon",
  name: "CANON EF 28-200mm f/3.5-5.6 USM",
  subtitle: "JP 2001-350095 A, Numerical Example 1 — constrained G2 close-focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 GLASS SUBSTRATES / 12 GROUPS",
      "DESIGN 28.92-193.14 mm",
      "MODELED f/3.63-5.88",
      "2 ASPHERICAL SURFACES",
      "G2 INNER FOCUS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [28, 200], design: [28.92, 193.14] },
    fNumber: { marketing: 3.5, design: 3.63 },
  },

  source: {
    patentNumber: "JP 2001-350095 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2001,
    authors: ["Makoto Mitsusaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "corrected",
        surface: "12",
        field: "R",
        printed: 45.611,
        applied: -45.611,
        evidence: ["source-summary", "claims"],
        note: "Existing sign correction retained. Numerical Example 1 (PDF p. 6) drops this minus sign in the four-row R12/R18/R23/R26 block. The complete restored block uniquely reproduces the source 28.92/80/193.14 mm summaries and five Table 1 ratios (PDF p. 9) among all 16 sign combinations; literal printed rows give EFL -2.985733/-5.309944/-10.170225 mm. Independently, Claim 5 (PDF p. 2) rejects the printed block and accepts the restored group ratios 0.470214/-0.074926/0.127378/-0.213602/0.253030. Source-summary isolates the full block; claims corroborate it as a unit.",
      },
      {
        status: "corrected",
        surface: "18",
        field: "R",
        printed: 29.422,
        applied: -29.422,
        evidence: ["source-summary", "claims"],
        note: "Existing sign correction retained. Numerical Example 1 (PDF p. 6) drops this minus sign in the four-row R12/R18/R23/R26 block. The complete restored block uniquely reproduces the source 28.92/80/193.14 mm summaries and five Table 1 ratios (PDF p. 9) among all 16 sign combinations; literal printed rows give EFL -2.985733/-5.309944/-10.170225 mm. Independently, Claim 5 (PDF p. 2) rejects the printed block and accepts the restored group ratios 0.470214/-0.074926/0.127378/-0.213602/0.253030. Source-summary isolates the full block; claims corroborate it as a unit.",
      },
      {
        status: "corrected",
        surface: "23",
        field: "R",
        printed: 15.708,
        applied: -15.708,
        evidence: ["source-summary", "claims"],
        note: "Existing sign correction retained. Numerical Example 1 (PDF p. 6) drops this minus sign in the four-row R12/R18/R23/R26 block. The complete restored block uniquely reproduces the source 28.92/80/193.14 mm summaries and five Table 1 ratios (PDF p. 9) among all 16 sign combinations; literal printed rows give EFL -2.985733/-5.309944/-10.170225 mm. Independently, Claim 5 (PDF p. 2) rejects the printed block and accepts the restored group ratios 0.470214/-0.074926/0.127378/-0.213602/0.253030. Source-summary isolates the full block; claims corroborate it as a unit.",
      },
      {
        status: "corrected",
        surface: "26A",
        field: "R",
        printed: 20.778,
        applied: -20.778,
        evidence: ["source-summary", "claims"],
        note: "Existing sign correction retained. Numerical Example 1 (PDF p. 6) drops this minus sign in the four-row R12/R18/R23/R26 block. The complete restored block uniquely reproduces the source 28.92/80/193.14 mm summaries and five Table 1 ratios (PDF p. 9) among all 16 sign combinations; literal printed rows give EFL -2.985733/-5.309944/-10.170225 mm. Independently, Claim 5 (PDF p. 2) rejects the printed block and accepts the restored group ratios 0.470214/-0.074926/0.127378/-0.213602/0.253030. Source-summary isolates the full block; claims corroborate it as a unit.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -146.891018,
      glass:
        "S-TIH53WN (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 99.820738,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 123.299441,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 4,
      name: "L4r",
      label: "Hybrid replica layer",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51421,
      vd: 51.4,
      focalLengthMm: -847.565314,
      glass: "Unmatched (bonded thin layer; source n=1.51421, ν=51.4; no catalog row within tolerance)",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4 substrate",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -22.775172,
      glass:
        "S-LAH60 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -26.393152,
      glass:
        "S-LAH55V (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 19.601756,
      glass:
        "S-TIH53WN (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -21.342363,
      glass:
        "S-LAH65V (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 71.91798,
      glass:
        "S-TIH53WN (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: 30.181663,
      glass:
        "S-NSL3 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.517417,
      vd: 52.4,
      focalLengthMm: 24.801607,
      glass:
        "S-NSL36 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -28.742226,
      glass:
        "S-TIH53WN (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: 35.971241,
      glass:
        "S-TIH10 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C4",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.882997,
      vd: 40.8,
      focalLengthMm: -19.819009,
      glass:
        "S-LAH58 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "C4",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.583126,
      vd: 59.4,
      focalLengthMm: 28.643528,
      glass:
        "S-BAL42 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: 100.846418,
      glass:
        "S-NSL3 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.806098,
      vd: 40.9,
      focalLengthMm: -30.242699,
      glass:
        "S-LAH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 101.683, d: 1.5, sd: 30.5, medium: 1 },
    { label: "2", R: 55.565, d: 8.32, sd: 30.5, medium: 2 },
    { label: "3", R: 491.783, d: 0.15, sd: 30.5 },
    { label: "4", R: 54.265, d: 6.12, sd: 27.8, medium: 3 },
    { label: "5", R: 176.85, sd: 27.8 },
    {
      label: "6A",
      R: 64.293,
      d: 0.05,
      sd: 13.4,
      medium: 4,
      asphere: { K: 0, A4: 4.38644e-6, A6: 2.81127e-8, A8: -2.86365e-10, A10: 1.27865e-12, A12: 0 },
    },
    { label: "7", R: 56.013, d: 1.15, sd: 13.4, medium: 5 },
    { label: "8", R: 14.052, d: 5.43, sd: 10.7, rimExtensionSd: 13.4 },
    { label: "9", R: -54.275, d: 1.0, sd: 9.7, medium: 6 },
    { label: "10", R: 37.401, d: 0.12, sd: 9.8 },
    { label: "11", R: 25.079, d: 3.85, sd: 9.8, medium: 7 },
    // The original prints a positive R here; restored-sign block evidence is recorded in source.errata.
    { label: "12", R: -45.611, d: 1.06, sd: 9.6 },
    { label: "13", R: -21.102, d: 0.9, sd: 8.2, medium: 8 },
    { label: "14", R: 93.584, d: 1.79, sd: 9.2, medium: 9 },
    { label: "15", R: -172.765, sd: 9.2 },
    { label: "STO", R: "flat", d: 0.71 },
    { label: "17", R: 31.704, d: 4.36, sd: 9.8, medium: 10 },
    // The original prints a positive R here; restored-sign block evidence is recorded in source.errata.
    { label: "18", R: -29.422, d: 0.15, sd: 9.9 },
    { label: "19", R: 33.868, d: 4.93, sd: 9.9, medium: 11 },
    { label: "20", R: -19.636, d: 0.9, sd: 9.8, medium: 12 },
    { label: "21", R: -103.829, sd: 9.8 },
    { label: "22", R: -36.508, d: 2.59, sd: 9.0, medium: 13 },
    // The original prints a positive R here; restored-sign block evidence is recorded in source.errata.
    { label: "23", R: -15.708, d: 0.9, sd: 9.0, medium: 14 },
    { label: "24", R: -157.51, sd: 9.0 },
    { label: "25", R: 76.073, d: 6.02, sd: 11.4, medium: 15 },
    // The original prints a positive R26; restored-sign block evidence is recorded in source.errata.
    {
      label: "26A",
      R: -20.778,
      d: 4.7,
      sd: 11.4,
      asphere: { K: 0, A4: 1.07579e-5, A6: 1.68849e-8, A8: 7.49501e-12, A10: -1.82624e-13, A12: 0 },
    },
    { label: "27", R: 666.832, d: 2.23, sd: 11.5, medium: 16 },
    { label: "28", R: -56.641, d: 2.3, sd: 11.5 },
    { label: "29", R: -18.982, d: 1.2, sd: 10.0, medium: 17 },
    { label: "30", R: -88.169, sd: 11.3 },
  ],

  zoom: {
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 28.92, nominalFNumber: 3.63, label: "Wide" },
      { focalLengthMm: 80.0, nominalFNumber: 5.06 },
      { focalLengthMm: 193.14, nominalFNumber: 5.88, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "CONSTRAINED_RECONSTRUCTION: G2 moves alone toward the object; D5 + D15 is conserved at each zoom station; close states are code-solved for a fixed image plane and a 0.45 m object-to-image distance. The patent publishes infinity states only.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [2.34, 1.124285],
        [28.59, 25.528897],
        [47.13, 38.814304],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [18.54, 19.755715],
        [9.12, 12.181103],
        [1.75, 10.065696],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [1.62, 1.62],
        [7.04, 7.04],
        [9.36, 9.36],
      ],
    },
    "24": {
      label: "D24",
      values: [
        [8.34, 8.34],
        [2.92, 2.92],
        [0.6, 0.6],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [38.245833, 38.245833],
        [52.547644, 52.547644],
        [60.202808, 60.202808],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 36], maxFNumber: 36, blades: 6 },

  /* ── Group and cemented-assembly annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-) / FOCUS", fromSurface: "6A", toSurface: "15" },
    { text: "G3 (+)", fromSurface: "17", toSurface: "21" },
    { text: "G4 (-)", fromSurface: "22", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25", toSurface: "30" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "C2", fromSurface: "13", toSurface: "15" },
    { text: "C3", fromSurface: "19", toSurface: "21" },
    { text: "C4", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.54, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
