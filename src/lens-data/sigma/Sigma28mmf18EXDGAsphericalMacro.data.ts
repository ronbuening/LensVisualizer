import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP 2001-330771 A, Numerical Example 1, correlated with the original Sigma 28mm F1.8 EX DG ASPHERICAL MACRO
 * (not the later DG DN or Art lenses). The correlation rests on construction; Sigma has not confirmed it.
 * Infinity focus only. The patent prints no back focus or total length, so the 38.52 mm image distance after
 * surface 22 is the paraxial back focus of the printed table (38.516 mm).
 * The printed table traces to f = 27.106 mm against the stated 27.10 mm; no scaling or correction is applied.
 * The patent tabulates one near state: d11 = 3.08 mm at OBJ = 55, an object 55 mm in front of surface 1 (about
 * 1:2.6), with both groups advancing and the stop moving with G2. It is not modeled because the patent prints no
 * image distance for it. Sigma's 0.20 m minimum focus distance is product data, not modeled focus travel.
 * 10 glass elements + 2 resin layers (0.15 mm and 0.20 mm) entered as separate elements = 12 element entries
 * in 9 air-separated groups.
 * Surface 5A is the air-side front of the resin layer on L3; surface 15A is the air-side rear of the resin layer
 * on L6. The patent's conic A = 1 corresponds to K = 0.
 * Prescription and aspheric coefficients are on PDF pages 4-5 of the publication. Indices are d-line
 * (paragraph 0016). The stop radius follows from the patent's F/1.86.
 * 2026-10-30 original-source reinspection: Fig. 1, PDF7 (native 200dpi / 600dpi crop), all faces.
 * S4 keeps clear sd17.8 and gains a vertical land to outer23. S7 keeps outer17 with inferred cut depth5.68,
 * cap15.40857: the source q~0.875 is moved outward for full-beam reach15.35813 +0.05mm margin.
 * The S18 land to outer14 is rejected: 1.924mm intrusion exceeds 1.764mm allowed in the 1.96mm gap.
 * Existing S18 clear sd11.17 is retained; the figure's shorter r18 profile is not substituted for the table.
 * All ten glass + two resin source d-line pairs are retained (PDF4, paragraph0016). No source partials or
 * C/F/g indices are printed; 32 catalog-only spectral copies were removed in favor of current resolver curves.
 * Eight glass curves remain qualified proxies. L9/L10 now use loose nonidentical LBC3N curves: source vd63.1
 * versus catalog63.72 (coefficient63.710956), beyond printed precision. Both hybrid resins stay unresolved;
 * no resin formulation, supplier, historical melt or anomalous-dispersion measurement is established.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-28mm-f18-ex-dg-aspherical-macro",
  maker: "Sigma",
  name: "SIGMA 28mm f/1.8 EX DG ASPHERICAL MACRO",
  subtitle: "JP 2001-330771 A, Example 1 — construction-based production correlation",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "DESIGN f = 27.10 mm",
      "DESIGN F/1.86",
      "2 HYBRID ASPHERICAL SURFACES / 2 ELEMENTS",
      "INFINITY FOCUS ONLY",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 28, design: 27.106315410850105 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "JP 2001-330771 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2001,
    authors: ["Shizuka Takemoto", "Norikazu Yokoi"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7433,
      vd: 49.5,
      indexReference: "d",
      focalLengthMm: 222.75190169639248,
      glass: "N-LAF35 (SCHOTT, qualified spectral proxy; supplier unconfirmed)",
      role: "Weak positive front meniscus; forms sub-group G1a of the first group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.0,
      indexReference: "d",
      focalLengthMm: -47.34917061424514,
      glass: "BASF7 (SUMITA, qualified spectral proxy; supplier unconfirmed)",
      role: "Negative meniscus; first element of the diverging sub-group G1b.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "R1",
      label: "Element 3 resin layer",
      type: "Hybrid resin negative meniscus",
      nd: 1.5184,
      vd: 52.1,
      indexReference: "d",
      focalLengthMm: -415.1175982817689,
      glass: "Unmatched (hybrid optical resin; spectrum unpublished)",
      role: "Thin resin layer bonded to the front of L3; its air-side surface 5A is aspherical.",
      diagramLabel: "R1",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.1,
      indexReference: "d",
      focalLengthMm: -58.88701013630482,
      glass: "S-LAH51 (OHARA, qualified spectral proxy; supplier unconfirmed)",
      role: "Negative meniscus glass body of the front hybrid asphere; completes G1b.",
      diagramLabel: "L3",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: 93.48207119808234,
      glass: "NBFD15 (HOYA, qualified spectral proxy; supplier unconfirmed)",
      role: "Thick positive element with a nearly flat front; first element of the converging sub-group G1c.",
      diagramLabel: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: 91.0389884273056,
      glass: "NBFD15 (HOYA, qualified spectral proxy; supplier unconfirmed)",
      role: "Positive meniscus; completes G1c ahead of the variable gap d11 and the stop.",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 54.1,
      indexReference: "d",
      focalLengthMm: 37.95481014294249,
      glass: "LAC8 (HOYA, qualified spectral proxy; supplier unconfirmed)",
      role: "Biconvex positive element behind the stop; glass body of the rear hybrid asphere, sub-group G2a.",
      diagramLabel: "L6",
      cemented: "H2",
    },
    {
      id: 8,
      name: "R2",
      label: "Element 6 resin layer",
      type: "Hybrid resin positive meniscus",
      nd: 1.5184,
      vd: 52.1,
      indexReference: "d",
      focalLengthMm: 440.89873089965374,
      glass: "Unmatched (hybrid optical resin; spectrum unpublished)",
      role: "Thin resin layer bonded to the rear of L6; its air-side surface 15A is aspherical.",
      diagramLabel: "R2",
      cemented: "H2",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: 71.13170774165881,
      glass: "K-LaK14 (SUMITA, qualified spectral proxy; supplier unconfirmed)",
      role: "Positive meniscus crown; front element of the cemented negative doublet G2b.",
      diagramLabel: "L7",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -20.51963542172289,
      glass: "S-TIH4 (OHARA, qualified spectral proxy; supplier unconfirmed)",
      role: "Biconcave flint; rear element of the cemented negative doublet G2b.",
      diagramLabel: "L8",
      cemented: "D1",
    },
    {
      id: 11,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.60625,
      vd: 63.1,
      indexReference: "d",
      focalLengthMm: 94.08664237971607,
      glass: "LBC3N (HOYA; loose spectral proxy, source vd 63.1 versus catalog 63.72; supplier unconfirmed)",
      role: "Positive meniscus; first element of the converging rear sub-group G2c.",
      diagramLabel: "L9",
    },
    {
      id: 12,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60625,
      vd: 63.1,
      indexReference: "d",
      focalLengthMm: 55.828713187193614,
      glass: "LBC3N (HOYA; loose spectral proxy, source vd 63.1 versus catalog 63.72; supplier unconfirmed)",
      role: "Biconvex positive rear element; completes G2c.",
      diagramLabel: "L10",
    },
  ],

  surfaces: [
    { label: "1", R: 68.15, d: 4.2, sd: 27, medium: 1 },
    { label: "2", R: 112.78, d: 0.22, sd: 26 },
    { label: "3", R: 50.55, d: 1.5, sd: 23, medium: 2 },
    { label: "4", R: 19.8, d: 8.17, sd: 17.8, rimExtensionSd: 23 },
    {
      label: "5A",
      R: 65.37,
      d: 0.15,
      sd: 17,
      medium: 3,
      asphere: { K: 0, A4: 3.9371e-6, A6: 1.0779e-8, A8: -9.795e-12, A10: 5.267e-14 },
    },
    { label: "6", R: 50.1, d: 1.5, sd: 17, medium: 4 },
    { label: "7", R: 23.74, d: 12.66, sd: 17, rimCutDepthMm: 5.68 },
    { label: "8", R: 1000.0, d: 9.82, sd: 15, medium: 5 },
    { label: "9", R: -81.14, d: 0.15, sd: 15 },
    { label: "10", R: 41.88, d: 7.55, sd: 15, medium: 6 },
    { label: "11", R: 89.7, d: 6.81, sd: 15 },
    { label: "STO", R: "flat", d: 4.31 },
    { label: "13", R: 100.0, d: 6.62, sd: 15, medium: 7 },
    { label: "14", R: -36.08, d: 0.2, sd: 15, medium: 8 },
    {
      label: "15A",
      R: -31.22,
      d: 2.69,
      sd: 15,
      asphere: { K: 0, A4: 1.3651e-5, A6: -3.838e-9, A8: 6.09e-12, A10: -5.885e-15 },
    },
    { label: "16", R: -44.05, d: 5.6, sd: 14, medium: 9 },
    { label: "17", R: -24.54, d: 1.18, sd: 14, medium: 10 },
    { label: "18", R: 42.92, d: 1.96, sd: 11.17 },
    { label: "19", R: -220.5, d: 5.58, sd: 14, medium: 11 },
    { label: "20", R: -45.75, d: 0.15, sd: 14 },
    { label: "21", R: 302.0, d: 4.79, sd: 15, medium: 12 },
    { label: "22", R: -37.89, d: 38.52, sd: 15 },
  ],

  focus: {
    closeFocusM: 0.2,
    step: 1,
    description:
      "Infinity focus only; every air gap stays fixed. The patent describes floating focus in which both groups advance and the gap d11 ahead of the stop closes, and it tabulates one near state: d11 = 3.08 mm (6.81 mm at infinity) at an object 55 mm in front of the first surface, about 1:2.6, with the stop moving with the rear group. That state is not modeled because the patent prints no image distance for it. The 38.52 mm image distance at infinity is the paraxial back focus of the printed table; the patent prints no back focus. Sigma's 0.20 m minimum focus distance is product data, not modeled focus travel.",
  },

  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2", fromSurface: "13", toSurface: "22" },
  ],
  doublets: [
    { text: "H1", fromSurface: "5A", toSurface: "7" },
    { text: "H2", fromSurface: "13", toSurface: "15A" },
    { text: "D1", fromSurface: "16", toSurface: "18" },
  ],

  layout: { yScFill: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
