import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — SAMYANG AF 35-150mm f/2-2.8 FE / L                     ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2025/0231383 A1, embodiment 100-3, Tables 7-9.        ║
 * ║  Positive-lead 35-150 mm full-frame zoom; 21 physical lens elements     ║
 * ║  in 18 air-separated groups. The data array contains 22 optical-media   ║
 * ║  entries because the hybrid aspherical resin layer on L4 is modeled     ║
 * ║  explicitly as a 0.1 mm cemented layer.                                 ║
 * ║                                                                          ║
 * ║  Patent EFLs: 35.989 / 73.438 / 146.969 mm.                            ║
 * ║  Patent Fno: 2.07 / 2.63 / 2.90; nominal UI values use marketed F2-2.8. ║
 * ║  Special surfaces: 6A, 30A, 31A, 40A, 41A.                              ║
 * ║                                                                          ║
 * ║  Zoom variable gaps: D5, D12, D18, D41.                                 ║
 * ║  Focus variable gaps: D31 and D33 around the single-element Gm3 focus   ║
 * ║  group. D31 increases and D33 decreases by the same amount at each zoom ║
 * ║  position, so the focus group translates as a rigid body.               ║
 * ║                                                                          ║
 * ║  Sensor cover-glass note: patent surfaces 42-44 describe a 2.5 mm       ║
 * ║  plate (nd 1.5168, νd 64.1973) and 0.5031 - 0.0031 = 0.5 mm of air to   ║
 * ║  IMG. The plate is modeled in `rearPlates` (traced, not drawn); 41A     ║
 * ║  stores the patent's physical D41 gap to the plate.                     ║
 * ║  Patent OAL 157.349 / 160.886 / 175.144 mm runs surface 1 to 41A only   ║
 * ║  (excludes D41 and the plate stack despite its definition). Physical    ║
 * ║  track to IMG: 172.951 / 191.650 / 213.518 mm (derived).                ║
 * ║                                                                          ║
 * ║  Semi-diameter note: the patent does not publish clear apertures.       ║
 * ║  Semi-diameters here are conservative renderer estimates constrained by ║
 * ║  the 82 mm filter-thread class, element edge-thickness checks,           ║
 * ║  sd/|R| < 0.90, conic-height limits, cross-gap sag clearance, and a      ║
 * ║  final visual taper pass through the variator, relay, and rear groups.   ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "samyang-af-35-150mm-f2-28",
  maker: "Samyang",
  name: "SAMYANG AF 35-150mm f/2-2.8 FE / L",
  subtitle: "US 2025/0231383 A1 — Embodiment 100-3",

  catalog: {
    lensMounts: ["sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "21 physical elements / 18 groups",
      "Patent EFL 35.989-146.969 mm",
      "Marketed f/2-2.8; patent F2.07-F2.90",
      "2 ASP + 1 H-ASP + 3 HR + 6 ED class",
      "Internal focus: single negative Gm3 element",
    ],
    elementCount: 21,
    groupCount: 18,
    focalLengthMm: { marketing: [35, 150], design: [35.989, 146.969] },
    fNumber: { marketing: 2, design: 2.07 },
  },

  source: {
    patentNumber: "US 2025/0231383 A1",
    patentYear: 2025,
    authors: ["Ju Yeon Jo"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1 front negative flint",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -247.4,
      glass: "Hoya NBFD15 / 806-333 dense flint class",
      role: "Front element of the large positive first group; negative flint half of the front cemented doublet.",
      cemented: "G11",
    },
    {
      id: 2,
      name: "L2",
      label: "L2 ED positive crown",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 153.8,
      glass: "S-FPL51 (OHARA) / FCD1 (Hoya) ED fluorophosphate class",
      role: "Positive ED half of the front cemented doublet.",
      cemented: "G11",
    },
    {
      id: 3,
      name: "L3",
      label: "L3 ED positive meniscus",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 174.8,
      glass: "S-FPL51 (OHARA) / FCD1 (Hoya) ED fluorophosphate class",
      role: "Second positive ED element in the front collector group.",
    },
    {
      id: 4,
      name: "L4r",
      label: "L4 hybrid resin asphere",
      type: "Neg. Meniscus (1× Asph, resin layer)",
      nd: 1.517,
      vd: 52.0,
      focalLengthMm: -771.8,
      glass: "UV-curable hybrid aspherical resin (patent nd=1.517, νd=52.0)",
      role: "Thin replicated aspherical layer on the object-side face of L4g.",
      cemented: "HB1",
    },
    {
      id: 5,
      name: "L4g",
      label: "L4 high-index glass body",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -46.8,
      glass: "S-LAH66 (OHARA) / TAF1 (Hoya) lanthanum-flint class",
      role: "High-index glass substrate of the hybrid variator-group element.",
      cemented: "HB1",
    },
    {
      id: 6,
      name: "L5",
      label: "L5 ED biconcave variator",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -56.4,
      glass: "S-FPL51 (OHARA) / FCD1 (Hoya) ED fluorophosphate class",
      role: "Main negative-power element of the second, magnification-changing group.",
    },
    {
      id: 7,
      name: "L6",
      label: "L6 positive dense flint",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: 110.0,
      glass: "Hoya NBFD15 / 806-333 dense flint class",
      role: "Positive compensating element closing the negative variator group.",
    },
    {
      id: 8,
      name: "L7",
      label: "L7 positive dense flint relay",
      type: "Biconvex Positive",
      nd: 1.7174,
      vd: 29.5,
      focalLengthMm: 89.6,
      glass: "S-TIH1 (OHARA) / N-SF1 (Schott) dense flint class",
      role: "First element of the weak positive relay group G33.",
    },
    {
      id: 9,
      name: "L8",
      label: "L8 negative phosphate crown",
      type: "Negative Meniscus",
      nd: 1.5935,
      vd: 67.33,
      focalLengthMm: -58.5,
      glass: "M-PCD51 (Hoya) / H-ZPK3 (CDGM) phosphate-crown class",
      role: "Low-dispersion negative element in the relay triplet.",
    },
    {
      id: 10,
      name: "L9",
      label: "L9 positive dense flint relay",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: 177.0,
      glass: "Hoya NBFD15 / 806-333 dense flint class",
      role: "Final element of the relay group ahead of the aperture stop.",
    },
    {
      id: 11,
      name: "L10",
      label: "L10 HR positive meniscus",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      focalLengthMm: 138.3,
      glass: "Hoya E-FDS1 / 923-209 ultra-high-index dense flint class",
      role: "High-index positive element immediately behind the stop.",
    },
    {
      id: 12,
      name: "L11",
      label: "L11 light crown biconvex",
      type: "Biconvex Positive",
      nd: 1.5182,
      vd: 58.96,
      focalLengthMm: 64.9,
      glass: "S-NSL3 (OHARA) / E-C3 (Hoya) light-crown class",
      role: "Positive crown element in the forward rear-group correction block.",
    },
    {
      id: 13,
      name: "L12",
      label: "L12 ED positive meniscus",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6072,
      focalLengthMm: 206.9,
      glass: "S-FPL51 (OHARA) / FCD1 (Hoya) ED fluorophosphate class",
      role: "Weak ED positive element before the cemented triplet.",
    },
    {
      id: 14,
      name: "L13",
      label: "L13 ED triplet front",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6072,
      focalLengthMm: 43.9,
      glass: "S-FPL51 (OHARA) / FCD1 (Hoya) ED fluorophosphate class",
      role: "Positive ED front element of the fourth-group cemented triplet.",
      cemented: "GfTriplet",
    },
    {
      id: 15,
      name: "L14",
      label: "L14 HR triplet flint",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.1342,
      focalLengthMm: -13.1,
      glass: "S-LAH99 (OHARA) / TAFD55 (Hoya) ultra-high-index lanthanum flint class",
      role: "Strong buried negative flint of the cemented triplet; principal chromatic-correction element.",
      cemented: "GfTriplet",
    },
    {
      id: 16,
      name: "L15",
      label: "L15 phosphate crown triplet rear",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.3949,
      focalLengthMm: 40.8,
      glass: "N-PSK53A (Schott) / PCD4 (Hoya) / S-PHM52 (OHARA) phosphate-crown class",
      role: "Positive rear element of the cemented triplet.",
      cemented: "GfTriplet",
    },
    {
      id: 17,
      name: "L16",
      label: "L16 dual-aspherical positive",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8076,
      vd: 40.8841,
      focalLengthMm: 27.6,
      glass: "NBFD13 / M-NBFD130 (Hoya) / D-ZLaF81 class high-index lanthanum flint",
      role: "Strong positive molded asphere closing Gf3 before the focus group.",
    },
    {
      id: 18,
      name: "L17",
      label: "L17 negative focus element",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.445,
      focalLengthMm: -50.2,
      glass: "S-FTM16 (OHARA) light-flint class",
      role: "Single-element negative internal-focus group Gm3.",
    },
    {
      id: 19,
      name: "L18",
      label: "L18 positive dense flint rear",
      type: "Biconvex Positive",
      nd: 1.8697,
      vd: 20.0188,
      focalLengthMm: 39.7,
      glass: "FDS20-W (Hoya) / 870-200 dense flint class",
      role: "Positive opening element of the image-side rear group.",
    },
    {
      id: 20,
      name: "L19",
      label: "L19 HR negative rear",
      type: "Biconcave Negative",
      nd: 1.9229,
      vd: 20.88,
      focalLengthMm: -49.1,
      glass: "Hoya E-FDS1 / 923-209 ultra-high-index dense flint class",
      role: "Negative high-index element in the final rear correction group.",
    },
    {
      id: 21,
      name: "L20",
      label: "L20 positive dense phosphate flint",
      type: "Biconvex Positive",
      nd: 1.8081,
      vd: 22.7639,
      focalLengthMm: 103.6,
      glass: "S-NPH1 (OHARA) / FD225 (Hoya) dense phosphate-flint class",
      role: "Weak symmetric positive element before the final field-flattening asphere.",
    },
    {
      id: 22,
      name: "L21",
      label: "L21 final dual-aspherical meniscus",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.5848,
      vd: 58.7091,
      focalLengthMm: -65.3,
      glass: "K-SKLD200 / K-SKLD120(M) neighborhood, proprietary crown class",
      role: "Final image-side meniscus and field-flattening molded aspherical element.",
    },
  ],

  /* ── Surfaces ── */
  /* (moved from asph) ── Aspherical surfaces ── */
  surfaces: [
    { label: "1", R: 107.905, d: 2.3, sd: 35.8, medium: 1 },
    { label: "2", R: 69.35, d: 8.98, sd: 35.1, medium: 2 },
    { label: "3", R: 714.644, d: 0.3, sd: 34.5 },
    { label: "4", R: 72.055, d: 7.45, sd: 33.9, medium: 3 },
    { label: "5", R: 408.225, sd: 33.3 },
    {
      label: "6A",
      R: 107.572,
      d: 0.1,
      sd: 15.8,
      medium: 4,
      asphere: {
        K: -2.3031e-2,
        A4: 2.5797372e-6,
        A6: 8.2727806e-10,
        A8: -2.6988358e-12,
        A10: 4.837967e-15,
        A12: 1.4902431e-18,
      },
    },
    { label: "7", R: 84.704, d: 1.0, sd: 15.8, medium: 5 },
    { label: "8", R: 25.193, d: 9.356, sd: 15.6 },
    { label: "9", R: -62.158, d: 1.0, sd: 15.6, medium: 6 },
    { label: "10", R: 51.255, d: 0.1, sd: 15.7 },
    { label: "11", R: 44.212, d: 3.43, sd: 16.2, medium: 7 },
    { label: "12", R: 85.114, sd: 16.3 },
    { label: "13", R: 81.228, d: 3.72, sd: 17.6, medium: 8 },
    { label: "14", R: -302.602, d: 4.13, sd: 15.0 },
    { label: "15", R: -29.21, d: 1.0, sd: 14.7, medium: 9 },
    { label: "16", R: -185.808, d: 0.1, sd: 15.1 },
    { label: "17", R: 369.447, d: 2.93, sd: 16.7, medium: 10 },
    { label: "18", R: -231.547, sd: 16.8 },
    { label: "STO", R: "flat", d: 1.7 },
    { label: "20", R: 42.136, d: 3.51, sd: 17.7, medium: 11 },
    { label: "21", R: 60.378, d: 0.1, sd: 17.7 },
    { label: "22", R: 45.266, d: 7.69, sd: 18.1, medium: 12 },
    { label: "23", R: -123.16, d: 0.165, sd: 18.0 },
    { label: "24", R: 40.676, d: 3.65, sd: 17.9, medium: 13 },
    { label: "25", R: 65.291, d: 0.5, sd: 17.3 },
    { label: "26", R: 39.135, d: 8.4, sd: 16.8, medium: 14 },
    { label: "27", R: -45.761, d: 1.0, sd: 16.1, medium: 15 },
    { label: "28", R: 18.654, d: 6.69, sd: 15.1, medium: 16 },
    { label: "29", R: 61.825, d: 1.018, sd: 15.3 },
    {
      label: "30A",
      R: 31.862,
      d: 6.43,
      sd: 15.7,
      medium: 17,
      asphere: {
        K: 1.20539e-1,
        A4: -7.293435e-6,
        A6: 1.0526274e-8,
        A8: -1.4140902e-10,
        A10: 6.7963991e-13,
        A12: -1.5196041e-15,
      },
    },
    {
      label: "31A",
      R: -67.669,
      sd: 15.8,
      asphere: {
        K: 3.517807,
        A4: 4.9067293e-6,
        A6: 1.979882e-9,
        A8: -1.5441265e-10,
        A10: 7.2185395e-13,
        A12: -1.617473e-15,
      },
    },
    { label: "32", R: 500, d: 1.0, sd: 14.5, medium: 18 },
    { label: "33", R: 28.058, sd: 14.1 },
    { label: "34", R: 132.345, d: 6.02, sd: 14.4, medium: 19 },
    { label: "35", R: -45.69, d: 0.103, sd: 14.2 },
    { label: "36", R: -265.028, d: 3.89, sd: 14.3, medium: 20 },
    { label: "37", R: 55.063, d: 1.481, sd: 14.1 },
    { label: "38", R: 166.714, d: 3.25, sd: 14.0, medium: 21 },
    { label: "39", R: -166.714, d: 5.364, sd: 13.8 },
    {
      label: "40A",
      R: -25.946,
      d: 1.9,
      sd: 12.7,
      medium: 22,
      asphere: {
        K: -2.95946e-1,
        A4: -3.4369019e-5,
        A6: 1.158198e-7,
        A8: -3.0168726e-10,
        A10: -2.3770311e-13,
        A12: 1.3924378e-15,
      },
    },
    // Last surface: patent D41, physical gap to the cover plate
    {
      label: "41A",
      R: -83.237,
      sd: 12.7,
      asphere: {
        K: 6.734338,
        A4: -3.4735416e-5,
        A6: 1.3166564e-7,
        A8: -4.3815092e-10,
        A10: 6.8481297e-13,
        A12: -2.9974461e-16,
      },
    },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 35.989, nominalFNumber: 2, label: "35mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 73.438, nominalFNumber: 2.5, published: true, publishedFocus: [1] },
      { focalLengthMm: 146.969, nominalFNumber: 2.8, label: "150mm", published: true, publishedFocus: [1] },
    ],
    step: 0.002,
  },

  /* ── UI / controls ── */
  focus: {
    closeFocusM: 0.33,
    description: "Internal focusing by single negative group Gm3 (L17); D31 increases and D33 decreases.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.2, 1.2],
        [23.041, 23.041],
        [49.374, 49.374],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [9.037, 9.037],
        [4.826, 4.826],
        [1.849, 1.849],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [23.915, 23.915],
        [10.809, 10.809],
        [1.7, 1.7],
      ],
    },
    "31A": {
      label: "D31",
      values: [
        [3.373, 6.792],
        [2.868, 7.233],
        [1.195, 8.764],
      ],
    },
    "33": {
      label: "D33",
      values: [
        [10.067, 6.648],
        [9.585, 5.22],
        [11.269, 3.7],
      ],
    },
    "41A": {
      label: "D41",
      values: [
        [12.602, 12.602],
        [27.764, 27.764],
        [35.374, 35.374],
      ],
    },
  },

  aperture: { fStops: [2, 2.2, 2.5, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Sensor cover plate (patent Table 7 surfaces 42–44): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.1973,
      glass: "N-BK7",
      gapAfterMm: 0.5,
      source: "US 2025/0231383 A1, embodiment 100-3 Table 7 surfaces 42–44 (0.5031 − 0.0031 mm to IMG)",
    },
  ],

  /* ── Diagram annotations ── */
  groups: [
    { text: "G13", fromSurface: "1", toSurface: "5" },
    { text: "G23", fromSurface: "6A", toSurface: "12" },
    { text: "G33", fromSurface: "13", toSurface: "18" },
    { text: "Gf3", fromSurface: "20", toSurface: "31A" },
    { text: "Gm3", fromSurface: "32", toSurface: "33" },
    { text: "Gr3", fromSurface: "34", toSurface: "41A" },
  ],
  doublets: [
    { text: "G11", fromSurface: "1", toSurface: "3" },
    { text: "HB", fromSurface: "6A", toSurface: "8" },
    { text: "Triplet", fromSurface: "26", toSurface: "29" },
  ],

  layout: { scFill: 0.74, yScFill: 0.58, maxAspectRatio: 1.75, lensShiftFrac: 0.05 },

  rays: { rayLeadFrac: 0.25, offAxisFieldFrac: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
