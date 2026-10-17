import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AI AF VR ZOOM-NIKKOR 80-400mm f/4.5-5.6 D ED - US 6,141,156 A, Working Example 4.
 *
 * Strong production correlation, not an explicit product identification in the patent. The active model preserves
 * Working Example 4 at native scale: 17 physical elements in 11 air-separated optical units, organized as six
 * functional zoom groups with power sequence + - + - + -. G2B (L22) is the laterally shifted VR subgroup.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. Example 4 publishes infinity-focus zoom spacings only. Nikon specifies
 * 2.3 m minimum focus and identifies G1 as the focusing group. Close-focus d5 values are code-solved with G2-G6 and
 * the image plane fixed; G1 moves objectward by 9.414818, 9.607815, and 9.700881 mm at the three zoom stations.
 *
 * Patent zoom gaps d5, d13, d20, d25, and Bf are transcribed directly. Patent d18 is split around the required STO:
 * the stop is inferred from Fig. 7 at 2.5 mm objectwise of S19 and is fixed relative to G4; surface 18 stores
 * d18 - 2.5 mm and STO stores the remaining 2.5 mm. G5 reverses direction between the middle and tele stations.
 *
 * The patent publishes f/4.600, f/5.29, and f/5.701 but no stop diameter. The stop radius is derived from the design
 * f-number at each zoom station for the Fig. 7 stop model; nominalFNumber carries the three published wide-open
 * aperture states. Semi-diameters are inferred from the Figure 7 silhouette, paraxial marginal/chief-ray envelopes,
 * 135-format field, and edge/rim/cross-gap constraints. No layout control is used to conceal invalid geometry.
 *
 * The patent is all-spherical and publishes only d-line nd/vd values. No nC, nF, ng, or dPgF values are assigned.
 * Compatible coefficient-backed catalog equivalents model dispersion without asserting historical melt suppliers.
 * The source inconsistency nd=1.805182 / vd=25.41 versus vd=25.35 is intentionally preserved element by element.
 *
 * Manufacturer sources used only for production identity/metadata:
 * https://imaging.nikon.com/imaging/information/story/0035/
 * https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_vr_zoom-nikkor_80-400mm_f45-56d_ed/
 * https://www.nikonusa.com/p/af-vr-zoom-nikkor-80-400mm-f45-56d-ed/1996/overview
 * https://nij.nikon.com/support/manual/nikkor/AFVRED80-400_Jp%2880%2909.pdf
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-af-vr-zoom-nikkor-80-400mm-f45-56d-ed",
  maker: "Nikon",
  name: "NIKON AI AF VR ZOOM-NIKKOR 80-400mm f/4.5-5.6 D ED",
  subtitle: "US 6,141,156 A Working Example 4 - constrained 2.3 m G1 focus reconstruction",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 11 GROUPS",
      "80-400mm MARKETED (81.976-390.000mm EXAMPLE 4)",
      "f/4.5-5.6 MARKETED (f/4.600-5.701 EXAMPLE 4)",
      "6 FUNCTIONAL ZOOM GROUPS / G2B VR",
      "CONSTRAINED 2.3 m G1 FOCUS",
    ],
    elementCount: 17,
    groupCount: 11,
    focalLengthMm: { marketing: [80, 400], design: [81.976, 390] },
    fNumber: { marketing: 4.5, design: 4.6 },
  },

  source: {
    patentNumber: "US 6,141,156 A",
    patentYear: 2000,
    authors: ["Masayuki Aoki"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11a",
      label: "L11a",
      type: "Negative Meniscus",
      nd: 1.805182,
      vd: 25.41,
      indexReference: "d",
      focalLengthMm: -278.611491,
      glass: "805254 - dense-flint class (vendor unresolved; vd=25.41)",
      role: "Objectwise member of cemented front doublet L11.",
      diagramLabel: "L11a",
      cemented: "L11",
    },
    {
      id: 2,
      name: "L11b",
      label: "L11b",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      focalLengthMm: 148.075239,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated G1 ED element; the patent publishes nd/vd only.",
      role: "Imagewise positive member of cemented front doublet L11.",
      diagramLabel: "L11b",
      cemented: "L11",
    },
    {
      id: 3,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      focalLengthMm: 224.570387,
      glass: "487704 - low-dispersion crown class (vendor unresolved)",
      apd: "inferred",
      apdNote: "Second production-correlated G1 ED element; the patent publishes nd/vd only.",
      role: "Rear positive element of focusing group G1.",
      diagramLabel: "L12",
    },
    {
      id: 4,
      name: "L21a",
      label: "L21a",
      type: "Positive Meniscus",
      nd: 1.805182,
      vd: 25.41,
      indexReference: "d",
      focalLengthMm: 77.560005,
      glass: "805254 - dense-flint class (vendor unresolved; vd=25.41)",
      role: "Objectwise positive member of negative subgroup G2A.",
      diagramLabel: "L21a",
      cemented: "L21",
    },
    {
      id: 5,
      name: "L21b",
      label: "L21b",
      type: "Biconcave Negative",
      nd: 1.79631,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -55.111186,
      glass: "NBFD2 catalog equivalent (patent 796409; production supplier unspecified)",
      role: "Imagewise negative member of cemented subgroup G2A.",
      diagramLabel: "L21b",
      cemented: "L21",
    },
    {
      id: 6,
      name: "L22a",
      label: "L22a",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.03,
      indexReference: "d",
      focalLengthMm: -37.679975,
      glass: "S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)",
      role: "Objectwise negative member of the laterally shifted VR subgroup G2B.",
      diagramLabel: "L22a",
      cemented: "L22",
    },
    {
      id: 7,
      name: "L22b",
      label: "L22b",
      type: "Positive Meniscus",
      nd: 1.80384,
      vd: 33.89,
      indexReference: "d",
      focalLengthMm: 69.165175,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Imagewise positive member of the laterally shifted VR subgroup G2B.",
      diagramLabel: "L22b",
      cemented: "L22",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.796681,
      vd: 45.37,
      indexReference: "d",
      focalLengthMm: -141.155081,
      glass: "J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)",
      role: "Negative subgroup G2C.",
      diagramLabel: "L23",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      focalLengthMm: 101.538072,
      glass: "487704 - low-dispersion crown class (vendor unresolved)",
      role: "Front positive element of moving group G3.",
      diagramLabel: "L31",
    },
    {
      id: 10,
      name: "L32a",
      label: "L32a",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      focalLengthMm: 74.249883,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated G3 ED element; the patent publishes nd/vd only.",
      role: "Positive member of cemented doublet L32 in G3.",
      diagramLabel: "L32a",
      cemented: "L32",
    },
    {
      id: 11,
      name: "L32b",
      label: "L32b",
      type: "Negative Meniscus",
      nd: 1.772789,
      vd: 49.45,
      indexReference: "d",
      focalLengthMm: -139.409686,
      glass: "773495 - lanthanum-flint class (vendor unresolved)",
      role: "Negative member of cemented doublet L32 in G3.",
      diagramLabel: "L32b",
      cemented: "L32",
    },
    {
      id: 12,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      focalLengthMm: -229.99962,
      glass: "487704 - low-dispersion crown class (vendor unresolved)",
      role: "Single negative element of group G4.",
      diagramLabel: "L41",
    },
    {
      id: 13,
      name: "L51a",
      label: "L51a",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      focalLengthMm: 52.698608,
      glass: "487704 - low-dispersion crown class (vendor unresolved)",
      role: "Positive objectwise member of cemented doublet L51 in G5.",
      diagramLabel: "L51a",
      cemented: "L51",
    },
    {
      id: 14,
      name: "L51b",
      label: "L51b",
      type: "Negative Meniscus",
      nd: 1.805182,
      vd: 25.35,
      indexReference: "d",
      focalLengthMm: -92.413689,
      glass: "805254 - dense-flint class (vendor unresolved; vd=25.35)",
      role: "Negative imagewise member of cemented doublet L51 in G5.",
      diagramLabel: "L51b",
      cemented: "L51",
    },
    {
      id: 15,
      name: "L52",
      label: "L52",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      focalLengthMm: 115.143208,
      glass: "487704 - low-dispersion crown class (vendor unresolved)",
      role: "Rear positive element of reversing zoom group G5.",
      diagramLabel: "L52",
    },
    {
      id: 16,
      name: "L61a",
      label: "L61a",
      type: "Biconcave Negative",
      nd: 1.796681,
      vd: 45.37,
      indexReference: "d",
      focalLengthMm: -22.946592,
      glass: "J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)",
      role: "Objectwise negative member of cemented rear group G6.",
      diagramLabel: "L61a",
      cemented: "L61",
    },
    {
      id: 17,
      name: "L61b",
      label: "L61b",
      type: "Positive Meniscus",
      nd: 1.805182,
      vd: 25.35,
      indexReference: "d",
      focalLengthMm: 41.380533,
      glass: "805254 - dense-flint class (vendor unresolved; vd=25.35)",
      role: "Imagewise positive member of cemented rear group G6.",
      diagramLabel: "L61b",
      cemented: "L61",
    },
  ],

  surfaces: [
    { label: "1", R: 126.4683, d: 3.7, sd: 38.5, medium: 1 },
    { label: "2", R: 79.8195, d: 11, sd: 38.2, medium: 2 },
    { label: "3", R: -919.6837, d: 0.2, sd: 37.8 },
    { label: "4", R: 126.4244, d: 7.1, sd: 37.8, medium: 3 },
    { label: "5", R: -801.5821, sd: 37 },
    { label: "6", R: -654.6276, d: 3.8, sd: 18.5, medium: 4 },
    { label: "7", R: -57.1588, d: 1.8, sd: 18.2, medium: 5 },
    { label: "8", R: 191.624, d: 3.9836, sd: 18 },
    { label: "9", R: -89.7904, d: 1.7, sd: 17.2, medium: 6 },
    { label: "10", R: 33.2136, d: 3.5, sd: 17, medium: 7 },
    { label: "11", R: 78.622, d: 5.2156, sd: 16.8 },
    { label: "12", R: -118.7153, d: 2, sd: 16.8, medium: 8 },
    { label: "13", R: 2148.6437, sd: 17 },
    { label: "14", R: 68.2852, d: 4.2, sd: 17.2, medium: 9 },
    { label: "15", R: -176.2925, d: 0.2, sd: 17.2 },
    { label: "16", R: 61.4056, d: 5.2, sd: 17.2, medium: 10 },
    { label: "17", R: -90.2467, d: 2, sd: 16.8, medium: 11 },
    { label: "18", R: -561.3466, sd: 16.6 },
    { label: "STO", R: "flat", d: 2.5 },
    { label: "19", R: -62.6838, d: 2.5, sd: 13, medium: 12 },
    { label: "20", R: -144.0193, sd: 13 },
    { label: "21", R: 147.6454, d: 5.1, sd: 14.5, medium: 13 },
    { label: "22", R: -30.7496, d: 1.5, sd: 14.5, medium: 14 },
    { label: "23", R: -53.5466, d: 0.2, sd: 14.5 },
    { label: "24", R: 49.6104, d: 2.9, sd: 14.5, medium: 15 },
    { label: "25", R: 418.8685, sd: 14.2 },
    { label: "26", R: -66.6285, d: 1.4, sd: 11, medium: 16 },
    { label: "27", R: 25.4283, d: 4, sd: 11, medium: 17 },
    { label: "28", R: 99.8403, sd: 11 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 81.976, nominalFNumber: 4.6, label: "Wide" },
      { focalLengthMm: 200, nominalFNumber: 5.29 },
      { focalLengthMm: 390, nominalFNumber: 5.701, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 2.3,
    description:
      "CONSTRAINED_RECONSTRUCTION: G1 alone translates objectward to Nikon's 2.3 m minimum focus; " +
      "code-solved shifts are 9.414818, 9.607815, and 9.700881 mm at 81.976, 200, and 390 mm; " +
      "G2-G6 and IMG remain fixed.",
  },

  gaps: {
    "5": {
      label: "D5 / G1 FOCUS",
      values: [
        [3.28216, 12.696978331884],
        [42.32542, 51.93323452224835],
        [60.55287, 70.25375138049],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [29.41049, 29.41049],
        [16.32822, 16.32822],
        [3.11555, 3.11555],
      ],
    },
    "18": {
      label: "D18 TO STO",
      values: [
        [2.49631, 2.49631],
        [15.57858, 15.57858],
        [28.79125, 28.79125],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [36.32903, 36.32903],
        [25.55992, 25.55992],
        [29.88582, 29.88582],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [27.49313, 27.49313],
        [18.06029, 18.06029],
        [3.54032, 3.54032],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [40.9778, 40.9778],
        [61.17974, 61.17974],
        [71.37383, 71.37383],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "13" },
    { text: "G3", fromSurface: "14", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "20" },
    { text: "G5", fromSurface: "21", toSurface: "25" },
    { text: "G6", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "L11", fromSurface: "1", toSurface: "3" },
    { text: "L21", fromSurface: "6", toSurface: "8" },
    { text: "L22", fromSurface: "9", toSurface: "11" },
    { text: "L32", fromSurface: "16", toSurface: "18" },
    { text: "L51", fromSurface: "21", toSurface: "23" },
    { text: "L61", fromSurface: "26", toSurface: "28" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
