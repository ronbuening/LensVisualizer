/*
 * CN 209606699 U Example 1, §§0074–0098. Product correlation is inferred, not manufacturer-confirmed.
 * Approximate geometry: the source gives L13 rear R=-70.25 mm and cemented L14 front R=-70.15 mm.
 * The model uses -70.25 mm as one shared interface; this is an approximation, not a unique correction.
 * Using -70.15 mm instead changes EFL by 0.0005 mm and BFD by 0.005 mm.
 * Rounded patent Nd/Vd are unchanged. No supplier or borrowed spectral values are assigned.
 * No scaling or conic conversion. Source equation uses (1+K); A4 through A12 copied, A14 unused.
 * Stop location is published; the stop radius is set from F1.8. Surface SDs are estimated from the to-scale
 * FIGs. 1, 2 and 4 and checked against exact rays, edge thickness, rim slope, conic domain and gaps
 * between adjacent surfaces. L31's faces are drawn stepped at about 11 mm inside the triplet's 13.1 mm
 * land; 12.8 mm is kept for both. L33 sits 0.2-0.4 mm above the land so the F1.8 24.7-degree bundle clears.
 * Wide open, an outer meridional ray at 28.2 degrees clips at surface 13 with either interface radius.
 * Image plane is at the computed paraxial infinity BFD; the patent prints no back focus.
 * Focus: G1/G2 fixed and G3 moving is published, but no travel or near-focus spacings are, so only
 * the infinity state is modeled. Marketed 0.25 m minimum focus is catalog data only.
 * The source lists no cover plates; none are modeled.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  schema: 2,
  key: "viltrox-mf-20mm-f18-fe",
  maker: "Viltrox",
  name: "VILTROX MF 20mm f/1.8",
  subtitle: "CN 209606699 U, Example 1 — inferred production correlation",

  catalog: {
    lensMounts: ["sony-fe", "nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "COMPUTED f = 20.31 mm",
      "DESIGN F/1.8",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 20, design: 20.313457184366676 },
    fNumber: { marketing: 1.8 },
  },

  source: {
    patentNumber: "CN 209606699 U",
    patentYear: 2019,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.75,
      vd: 52.3,
      indexReference: "d",
      focalLengthMm: -87.69738651994497,
      glass: "Unmatched (high-index crown; rounded patent coordinates)",
      role: "Front negative element in G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -61.895523016073355,
      glass: "Unmatched (dense flint; rounded patent coordinates)",
      role: "Second negative element in G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 31.4,
      indexReference: "d",
      focalLengthMm: 37.8875124186452,
      glass: "Unmatched (high-index flint; rounded patent coordinates)",
      role: "Positive member of the G1 cemented doublet; its rear radius is the shared approximate interface.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: -30.661602209944753,
      glass: "Unmatched (low-dispersion crown; rounded patent coordinates)",
      apd: "inferred",
      apdNote:
        "Viltrox lists four ED elements, matching the four positions with patent nd/νd 1.50/81.6; the patent names no special glass and the partial dispersion is unpublished.",
      role: "Low-dispersion negative member of the G1 cemented doublet; its front radius is the shared approximate interface.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.9,
      vd: 31.4,
      indexReference: "d",
      focalLengthMm: 65.08483044568274,
      glass: "Unmatched (high-index flint; rounded patent coordinates)",
      role: "First positive element in G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.5,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 120.90674789128398,
      glass: "Unmatched (low-dispersion crown; rounded patent coordinates)",
      apd: "inferred",
      apdNote:
        "Viltrox lists four ED elements, matching the four positions with patent nd/νd 1.50/81.6; the patent names no special glass and the partial dispersion is unpublished.",
      role: "Low-dispersion positive meniscus closing G2, just ahead of the stop.",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 24.77057304390312,
      glass: "Unmatched (low-dispersion crown; rounded patent coordinates)",
      apd: "inferred",
      apdNote:
        "Viltrox lists four ED elements, matching the four positions with patent nd/νd 1.50/81.6; the patent names no special glass and the partial dispersion is unpublished.",
      role: "Low-dispersion leading positive member of the G3 cemented triplet.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.65,
      vd: 33.8,
      indexReference: "d",
      focalLengthMm: -14.359354378423127,
      glass: "Unmatched (dense flint; rounded patent coordinates)",
      role: "Negative middle member of the G3 cemented triplet.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.5,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 31.83572635135135,
      glass: "Unmatched (low-dispersion crown; rounded patent coordinates)",
      apd: "inferred",
      apdNote:
        "Viltrox lists four ED elements, matching the four positions with patent nd/νd 1.50/81.6; the patent names no special glass and the partial dispersion is unpublished.",
      role: "Low-dispersion trailing positive member of the G3 cemented triplet.",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 31.4,
      indexReference: "d",
      focalLengthMm: 23.89415373722111,
      glass: "Unmatched (high-index flint; rounded patent coordinates)",
      role: "Air-separated positive element in G3.",
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 29.5,
      indexReference: "d",
      focalLengthMm: -42.163867238636136,
      glass: "Unmatched (dense flint; rounded patent coordinates)",
      role: "Air-separated negative element in G3.",
    },
    {
      id: 12,
      name: "L36",
      label: "Element 12",
      type: "Biconcave Negative (Asph)",
      nd: 1.52,
      vd: 63.5,
      indexReference: "d",
      focalLengthMm: -137.1849130313459,
      glass: "Unmatched (crown; rounded patent coordinates)",
      role: "Rear negative element of G3, aspherical on both faces.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.4, d: 2.5, sd: 28, medium: 1 },
    { label: "2", R: 24.75, d: 7.5, sd: 22 },
    { label: "3", R: 45.65, d: 2.0, sd: 20.5, medium: 2 },
    { label: "4", R: 23.95, d: 6.27, sd: 19.5 },
    { label: "5", R: 63.0, d: 7.3, sd: 18.1, medium: 3 },
    { label: "6", R: -70.25, d: 1.5, sd: 18.1, medium: 4 },
    { label: "7", R: 19.75, d: 13.74, sd: 15 },
    { label: "8", R: 43.13, d: 3.93, sd: 14, medium: 5 },
    { label: "9", R: 156.5, d: 3.16, sd: 13.5 },
    { label: "10", R: -41.75, d: 5.35, sd: 13.5, medium: 6 },
    { label: "11", R: -25.75, d: 3.54, sd: 14.2 },
    { label: "STO", R: "flat", d: 6.590000000000001 },
    { label: "13", R: 31.8, d: 7.93, sd: 12.8, medium: 7 },
    { label: "14", R: -18.6, d: 1.5, sd: 12.8, medium: 8 },
    { label: "15", R: 19.33, d: 7.83, sd: 13.3, medium: 9 },
    { label: "16", R: -78.0, d: 0.1, sd: 13.5 },
    { label: "17", R: 37.25, d: 7.15, sd: 15, medium: 10 },
    { label: "18", R: -46.25, d: 1.21, sd: 15 },
    { label: "19", R: -118.75, d: 1.5, sd: 13.5, medium: 11 },
    { label: "20", R: 41.0, d: 4.87, sd: 13.2 },
    {
      label: "21A",
      R: -115.0,
      d: 2.0,
      sd: 14,
      medium: 12,
      asphere: { K: -20.195, A4: -4.508e-5, A6: 6.657e-8, A8: -4.035e-10, A10: 2.981e-13, A12: 1.456e-15 },
    },
    {
      label: "22A",
      R: 189.0,
      d: 17.787944640236603,
      sd: 16,
      asphere: { K: 59.615, A4: 1.128e-5, A6: 1.027e-7, A8: -1.833e-10, A10: -3.193e-13, A12: 8.724e-16 },
    },
  ],

  focus: {
    closeFocusM: 0.25,
    description:
      "Infinity focus only. The patent states that G1 and G2 stay fixed while the rear group G3 moves to focus, but it prints no travel or near-focus spacings, so no near state is modeled. The marketed 0.25 m minimum focus distance is catalog data only.",
  },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 14 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "8", toSurface: "11" },
    { text: "G3", fromSurface: "13", toSurface: "22A" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "13", toSurface: "16" },
  ],

  layout: { scFill: 0.55, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
