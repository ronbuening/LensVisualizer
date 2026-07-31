import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2026-121744 A, Example 3 (Cosina Co., Ltd.).            ║
 * ║ Production correlation: Cosina COLOR-SKOPAR 35mm F3.5 Aspherical       ║
 * ║ (VM mount).                                                           ║
 * ║ Patent scale retained: 6 elements / 4 air-spaced groups / 2 aspheres.   ║
 * ║ Focus: unit focus. The patent publishes all-lens translation.           ║
 * ║                                                                            ║
 * ║ FOCUS RECONSTRUCTION:                                                     ║
 * ║   Base state is the patent infinity prescription (D11 = 15.11 mm).       ║
 * ║   The close endpoint uses Cosina's 0.7 m image-plane-referenced MFD and   ║
 * ║   is a CONSTRAINED_RECONSTRUCTION under the published unit-focus         ║
 * ║   mechanism: D11 = 17.166711491888 mm. The patent's separate published   ║
 * ║   D0 = 450.00 mm / D11 = 18.20 mm row is retained in the audit, not used ║
 * ║   as the production UI endpoint.                                         ║
 * ║                                                                            ║
 * ║ SOURCE CONTRADICTION:                                                     ║
 * ║   Table 9 prints TLo = 21.83 mm and BF = 18.20 mm by mixing the infinity ║
 * ║   total length with the close-focus BF. The active surface-1-to-11 track ║
 * ║   transcribed here is 24.92 mm. No prescription value is altered to make ║
 * ║   the printed BF/TLo condition pass.                                     ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS:                                                           ║
 * ║   The patent Sag2b value defines an 8.229002 mm effective evaluation     ║
 * ║   radius on 10A, not the physical glass edge. Figure 5 and Cosina's      ║
 * ║   production cross-section supply the relative silhouette and rim       ║
 * ║   continuity; both L12 faces therefore use a 10.15 mm physical SD.       ║
 * ║   Other SDs are rounded from exact d-line accepted-ray envelopes at      ║
 * ║   infinity and the reconstructed 0.7 m state.                            ║
 * ║                                                                            ║
 * ║ GLASS DATA:                                                               ║
 * ║   nd, νd, and dPgF are patent values. Named glasses are compatible     ║
 * ║   catalog matches, not production-supplier claims. L10f remains unmatched.║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources:
 * https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-35mm-f3-5-aspherical/
 * https://www.cosina.co.jp/wp/wp-content/uploads/2025/03/VM-35_35-ENG-V1_0.pdf
 */

const LENS_DATA = {
  key: "voigtlander-color-skopar-vm-35mm-f35-aspherical",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical",
  subtitle: "JP 2026-121744 A Example 3 — production correlation; patent scale retained",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "35mm f/3.5 (35.741mm f/3.58 design)",
    "2ω = 61.5° (61.6° marketed)",
    "2 ASPHERICAL SURFACES",
    "UNIT FOCUS",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.741015038857,
  apertureMarketing: 3.5,
  apertureDesign: 3.58,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2026-121744 A",
  patentAuthors: ["Nozomu Mishima"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2026,
  elementCount: 6,
  groupCount: 4,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 61.5,
    maxTraceFieldDeg: 30.75,
  },

  elements: [
    {
      id: 1,
      name: "L9f",
      label: "L9f — Front positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      dPgF: -0.003,
      fl: 13.799161,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      cemented: "L9",
      role: "Dense positive front member of cemented G1; supplies most of the front-group power.",
    },
    {
      id: 2,
      name: "L9r",
      label: "L9r — Front negative",
      type: "Biconcave Negative",
      nd: 1.80809,
      vd: 22.76,
      dPgF: 0.021,
      fl: -17.571227,
      glass: "FD225 (HOYA catalog equivalent; production supplier unspecified)",
      cemented: "L9",
      role: "Negative cemented partner that moderates the front doublet's chromatic and spherical power.",
    },
    {
      id: 3,
      name: "L10f",
      label: "L10f — Rear negative",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.27,
      dPgF: -0.005,
      fl: -17.457979,
      glass: "Unmatched (613443 negative anomalous-dispersion class; closest S-NBM51)",
      cemented: "L10",
      role: "Negative member of G2a; the patent constrains its low index and negative dPgF.",
    },
    {
      id: 4,
      name: "L10r",
      label: "L10r — Rear positive",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      dPgF: -0.009,
      fl: 24.261811,
      glass: "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      cemented: "L10",
      role: "Dense positive cemented partner; the complete L10 cemented subgroup remains net negative.",
    },
    {
      id: 5,
      name: "L11",
      label: "L11 — Low-dispersion positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      dPgF: 0.037,
      fl: 31.911859,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive element and the strongest positive member of G2b.",
    },
    {
      id: 6,
      name: "L12",
      label: "L12 — Rear aspherical negative",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      dPgF: 0,
      fl: -66.426138,
      glass:
        "S-BSL7 / K-BK7 catalog-equivalent borosilicate crown class (production supplier unspecified)",
      role: "Double-sided aspherical negative meniscus near the image plane for coma, astigmatism, and field control.",
    },
  ],

  surfaces: [
    { label: "1", R: 13.403, d: 3.11, nd: 1.91082, elemId: 1, sd: 7.9 },
    { label: "2", R: -179.549, d: 0.9, nd: 1.80809, elemId: 2, sd: 7.9 },
    { label: "3", R: 15.453, d: 3.1, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "STO", R: 1e15, d: 2.64, nd: 1.0, elemId: 0, sd: 3.961125955704 },
    { label: "5", R: -14.459, d: 0.9, nd: 1.6134, elemId: 3, sd: 6.2 },
    { label: "6", R: 42.264, d: 2.45, nd: 1.883, elemId: 4, sd: 6.2 },
    { label: "7", R: -42.264, d: 0.25, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "8", R: 31.099, d: 3.67, nd: 1.497, elemId: 5, sd: 8.3 },
    { label: "9", R: -31.099, d: 5.8, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "10A", R: -25.356, d: 2.1, nd: 1.51633, elemId: 6, sd: 10.15 },
    { label: "11A", R: -100.0, d: 15.11, nd: 1.0, elemId: 0, sd: 10.15 },
  ],

  asph: {
    "10A": {
      K: 0,
      A4: -5.5781e-4,
      A6: 2.2937e-6,
      A8: -6.1771e-8,
      A10: 1.0322e-9,
      A12: -4.0737e-12,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -4.1509e-4,
      A6: 2.7671e-6,
      A8: -2.4381e-8,
      A10: 2.5192e-10,
      A12: -8.7175e-13,
      A14: 0,
    },
  },

  var: {
    "11A": [15.11, 17.166711491888],
  },
  varLabels: [["11A", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2a", fromSurface: "5", toSurface: "7" },
    { text: "G2b", fromSurface: "8", toSurface: "11A" },
  ],
  doublets: [
    { text: "L9", fromSurface: "1", toSurface: "3" },
    { text: "L10", fromSurface: "5", toSurface: "7" },
  ],

  closeFocusM: 0.7,
  focusDescription:
    "Unit focus. The 0.7 m endpoint is a mechanism-constrained reconstruction from Cosina's image-plane-referenced minimum focus; D11 changes from 15.11 mm to 17.166711 mm while every internal spacing remains fixed.",

  nominalFno: 3.58,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 10,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
