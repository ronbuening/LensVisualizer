import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Original review 2026-10-30: US 2017/0003486 A1 Example 5 / paragraph 0084, PDF p. 22 (printed 8),
 * continuation p. 23; corresponding wide-infinity Fig. 9, PDF p. 10 / sheet 9. Original native raster
 * is 2560×3300 at 300 ppi, about 6.65 px/mm. Historical 600 dpi renders were magnifications.
 * Rim uncertainty is ±0.6 mm, ±0.7 at near-contact tips; leaders, brackets, arrows and FS/IP lines are excluded.
 *
 * All 17 media, 30 refracting/stop rows and the source S31 flare cutter were inspected. Twenty-four cap
 * changes follow optical blanks; S11/S12 shoulders 12.7/12.1 preserve clear sd 11.465. Bonded junctions
 * follow source compound blanks without opaque interface lands. S21/S22 caps 12.84/12.87 and the default
 * 0.90 guard remain: full-height trials at pairs 11–12 and 21–22 fail the unchanged allowance.
 *
 * Source FS is restored because its omission is demonstrably active even in baseline finite off-axis rays.
 * Source S30 d0.20 + S31/FS d37.80 replaces the previous combined 38.00 mm gap; total path and all powered
 * R/d, zoom/focus cams, source f-numbers and iris rule stay unchanged. FS sd16.1 is the printed 32.20 mm
 * effective-diameter proxy, not a separately published physical aperture dimension.
 *
 * Paragraph 0078 explicitly defines d-reference material pairs. Seventeen compatible catalog curves remain
 * qualified proxies, not historical chemistry/supplier/melt identification. The 2026-09-06 removal of copied
 * line indices/partials is reused; none is reintroduced. E3 source APD/production-position identification stays inferred.
 * No filter, rear plate, hybrid/resin or separate cement medium is supplied by this numerical example.
 *
 * Surface/image-circle checks pass; all 65 sampled infinity zooms pass project aperture/field checks.
 * All 1365 zoom/focus-control renders have 17 finite connected contours and zero hidden trimming.
 * Linear interpolation is illustrative: worst sampled infinity defocus +5.009117 mm; 55/455 sampled controls
 * have virtual Gaussian objects. Actual real-conjugate and independent positive-object pupil censuses clear
 * all axial bundles/chiefs, with bounded off-axis first-cap misses and active FS clipping disclosed in the audit.
 * The unchanged finite L5 cam is a constrained 1.2 m reconstruction, not source-published finite spacing.
 * Only centered IS is checked. Source fidelity, sampled runtime clearance and production correlation are separate.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-70-300mm-f4-56-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 70-300mm f/4-5.6 IS II USM",
  subtitle: "US 2017/0003486 A1 — Example 5; production correlation to Canon EF 70-300mm f/4-5.6 IS II USM",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "70-300mm f/4-5.6 (marketed)",
      "72-290mm f/4.16-5.83 (patent design)",
      "1.2 m MFD / 0.25x max. magnification (production)",
      "NANO USM / OPTICAL IS (production)",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: [70, 300], design: [72, 290] },
  },

  source: {
    patentNumber: "US 2017/0003486 A1",
    example: { label: "Example 5", id: "5" },
    patentYear: 2017,
    authors: ["Suguru Inoue"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 222.950214,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -173.218205,
      glass: "S-LAH60 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 141.266842,
      glass: "S-FPL51 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "UD-class assignment inferred from the patent 1.49700/81.5 coordinate and Canon production UD count; neither the production element number nor supplier is confirmed.",
      cemented: "J1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.8,
      focalLengthMm: 86.320568,
      glass: "S-TIL6 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J2",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: -96.486081,
      glass: "S-NSL3 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J2",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -29.332172,
      glass: "S-LAH66 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J3",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 47.817707,
      glass: "S-NBH56 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J3",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -69.039298,
      glass: "S-LAH66 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.66672,
      vd: 48.3,
      focalLengthMm: 64.838308,
      glass: "S-BAH11 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 58.22117,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J4",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -63.135105,
      glass: "S-LAH99 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J4",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -80.281727,
      glass: "S-LAH99 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 86.429845,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: 55.890711,
      glass: "S-LAL12 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.8,
      focalLengthMm: 107.590019,
      glass: "S-NPH1 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J5",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: -43.30251,
      glass: "S-NSL36 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
      cemented: "J5",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -223.758132,
      glass: "S-FSL5 (coordinate-compatible OHARA spectral proxy; historical material, supplier and melt unspecified)",
    },
  ],

  surfaces: [
    { label: "1", R: 108.686, d: 5.15, sd: 26, medium: 1 },
    { label: "2", R: "flat", d: 0.15, sd: 26 },
    { label: "3", R: 117.701, d: 2.1, sd: 26, medium: 2 },
    { label: "4", R: 64.332, d: 7, sd: 26, medium: 3 },
    { label: "5", R: 740.701, sd: 26 },
    { label: "6", R: -866.644, d: 4.65, sd: 16.7, medium: 4 },
    { label: "7", R: -43.671, d: 1.65, sd: 16.7, medium: 5 },
    { label: "8", R: -349.361, d: 4.88, sd: 16.7 },
    { label: "9", R: -163.831, d: 1.1, sd: 12.7, medium: 6 },
    { label: "10", R: 26.373, d: 3.2, sd: 12.7, medium: 7 },
    { label: "11", R: 70.182, d: 2.33, sd: 11.465, rimExtensionSd: 12.7 },
    { label: "12", R: -59.794, d: 1.05, sd: 11.465, rimExtensionSd: 12.1, medium: 8 },
    { label: "13", R: 497.341, sd: 12.1 },
    // US 2017/0003486 A1, Example 5 surface table, surface 14: printed effective diameter 24.44 mm at the stop.
    { label: "STO", R: "flat", d: 0.98 },
    { label: "15", R: 85.803, d: 3.25, sd: 13, medium: 9 },
    { label: "16", R: -85.803, d: 0.15, sd: 13 },
    { label: "17", R: 55.992, d: 4.65, sd: 13, medium: 10 },
    { label: "18", R: -55.992, d: 1.25, sd: 13, medium: 11 },
    { label: "19", R: -496.53, sd: 13 },
    { label: "20", R: 111.592, d: 1.3, sd: 13.3, medium: 12 },
    { label: "21", R: 46.446, d: 1.28, sd: 12.84 },
    { label: "22", R: 122.313, d: 3.9, sd: 12.87, medium: 13 },
    { label: "23", R: -63.603, d: 0.15, sd: 13.3 },
    { label: "24", R: 40.018, d: 4.1, sd: 14, medium: 14 },
    { label: "25", R: -682.473, sd: 14 },
    { label: "26", R: -129.824, d: 2.5, sd: 13.6, medium: 15 },
    { label: "27", R: -52.519, d: 1.15, sd: 13.6, medium: 16 },
    { label: "28", R: 39.368, sd: 13.6 },
    { label: "29", R: -54.446, d: 1.55, sd: 16.2, medium: 17 },
    { label: "30", R: -109.719, d: 0.2, sd: 16.2 },
    { label: "FS", R: "flat", d: 37.8, sd: 16.1 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72, nominalFNumber: 4.16, label: "Wide" },
      { focalLengthMm: 144, nominalFNumber: 5.06 },
      { focalLengthMm: 290, nominalFNumber: 5.83, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent publishes infinity-focus zoom states only. Close focus at 1.2 m is a code-solved L5-only imageward translation constrained to conserve D25 + D28 at each zoom position; L5 travel is +2.287968 / +4.496202 / +12.930456 mm at 72 / 144 / 290 mm.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.99, 1.99],
        [41.81, 41.81],
        [71.99, 71.99],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [29.22, 29.22],
        [17.55, 17.55],
        [2.44, 2.44],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [37.95, 37.95],
        [25.64, 25.64],
        [22.47, 22.47],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [11.85, 14.13796800614547],
        [5.73, 10.226201631078213],
        [2.42, 15.350455605329335],
      ],
    },
    "28": {
      label: "D28",
      values: [
        [9.52, 7.232031993854528],
        [39.63, 35.13379836892179],
        [61.21, 48.279544394670665],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 45], maxFNumber: 45, blades: 9 },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2a (+)", fromSurface: "6", toSurface: "8" },
    { text: "L2b (-)", fromSurface: "9", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "19" },
    { text: "L4 (+)", fromSurface: "20", toSurface: "25" },
    { text: "L5 (- / FOCUS)", fromSurface: "26", toSurface: "28" },
    { text: "L6 (-)", fromSurface: "29", toSurface: "30" },
  ],
  doublets: [],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
