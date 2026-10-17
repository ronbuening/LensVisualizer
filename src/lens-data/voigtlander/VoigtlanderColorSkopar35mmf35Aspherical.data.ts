import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║   nd and νd are patent values; dPgF is derived from the patent's ΔPgF      ║
 * ║   (note below). Named glasses are compatible catalog matches, not          ║
 * ║   production-supplier claims. L10f remains unmatched.                      ║
 * ║                                                                            ║
 * ║ NOTE ON PARTIAL DISPERSION:                                                ║
 * ║   Table 10 prints only the patent's own deviation, to three decimals:      ║
 * ║   ΔPgF = PgF − 0.64833 + 0.00180·νd. It prints no absolute PgF. `dPgF`     ║
 * ║   is the PgF recovered from that deviation minus the engine's normal       ║
 * ║   line (0.6438 − 0.001682·νd), to six decimals; the analysis quotes the    ║
 * ║   patent's ΔPgF. L10r keeps the printed −0.009: at νd 40.81 the two        ║
 * ║   lines differ by 0.000286, inside the 0.0003 keep-as-is tolerance.        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources:
 * https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-35mm-f3-5-aspherical/
 * https://www.cosina.co.jp/wp/wp-content/uploads/2025/03/VM-35_35-ENG-V1_0.pdf
 */

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-color-skopar-vm-35mm-f35-aspherical",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical",
  subtitle: "JP 2026-121744 A Example 3 — production correlation; patent scale retained",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "35mm f/3.5 (35.741mm f/3.58 design)",
      "2ω = 61.5° (61.6° marketed)",
      "2 ASPHERICAL SURFACES",
      "UNIT FOCUS",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 35, design: 35.741015038857 },
    fNumber: { marketing: 3.5, design: 3.58 },
  },

  source: {
    patentNumber: "JP 2026-121744 A",
    patentYear: 2026,
    authors: ["Nozomu Mishima"],
    assignees: ["Cosina Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L9f",
      label: "L9f — Front positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 13.799161,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense positive front member of cemented G1; supplies most of the front-group power.",
      cemented: "L9",
      dPgF: -0.00263,
    },
    {
      id: 2,
      name: "L9r",
      label: "L9r — Front negative",
      type: "Biconcave Negative",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: -17.571227,
      glass: "FD225 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative cemented partner that moderates the front doublet's chromatic and spherical power.",
      cemented: "L9",
      dPgF: 0.022844,
    },
    {
      id: 3,
      name: "L10f",
      label: "L10f — Rear negative",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.27,
      focalLengthMm: -17.457979,
      glass: "S-NBM51 catalog equivalent (patent 613443; production supplier unspecified)",
      role: "Negative member of G2a; the patent constrains its low index and negative dPgF.",
      cemented: "L10",
      dPgF: -0.005694,
    },
    {
      id: 4,
      name: "L10r",
      label: "L10r — Rear positive",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      focalLengthMm: 24.261811,
      glass: "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense positive cemented partner; the complete L10 cemented subgroup remains net negative.",
      cemented: "L10",
      dPgF: -0.009,
    },
    {
      id: 5,
      name: "L11",
      label: "L11 — Low-dispersion positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 31.911859,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive element and the strongest positive member of G2b.",
      dPgF: 0.0319,
    },
    {
      id: 6,
      name: "L12",
      label: "L12 — Rear aspherical negative",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: -66.426138,
      glass: "S-BSL7 / K-BK7 catalog-equivalent borosilicate crown class (production supplier unspecified)",
      role: "Double-sided aspherical negative meniscus near the image plane for coma, astigmatism, and field control.",
      dPgF: -0.003029,
    },
  ],

  surfaces: [
    { label: "1", R: 13.403, d: 3.11, sd: 7.9, medium: 1 },
    { label: "2", R: -179.549, d: 0.9, sd: 7.9, medium: 2 },
    { label: "3", R: 15.453, d: 3.1, sd: 7.9 },
    { label: "STO", R: "flat", d: 2.64 },
    { label: "5", R: -14.459, d: 0.9, sd: 6.2, medium: 3 },
    { label: "6", R: 42.264, d: 2.45, sd: 6.2, medium: 4 },
    { label: "7", R: -42.264, d: 0.25, sd: 6.2 },
    { label: "8", R: 31.099, d: 3.67, sd: 8.3, medium: 5 },
    { label: "9", R: -31.099, d: 5.8, sd: 8.3 },
    {
      label: "10A",
      R: -25.356,
      d: 2.1,
      sd: 10.15,
      medium: 6,
      asphere: { K: 0, A4: -5.5781e-4, A6: 2.2937e-6, A8: -6.1771e-8, A10: 1.0322e-9, A12: -4.0737e-12, A14: 0 },
    },
    {
      label: "11A",
      R: -100.0,
      sd: 10.15,
      asphere: { K: 0, A4: -4.1509e-4, A6: 2.7671e-6, A8: -2.4381e-8, A10: 2.5192e-10, A12: -8.7175e-13, A14: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Unit focus. The 0.7 m endpoint is a mechanism-constrained reconstruction from Cosina's image-plane-referenced minimum focus; D11 changes from 15.11 mm to 17.166711 mm while every internal spacing remains fixed.",
  },

  gaps: { "11A": { label: "BF", values: [[15.11, 17.166711491888]] } },

  aperture: { nominalFNumber: 3.58, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], blades: 10 },

  projection: { kind: "rectilinear", fullFieldDeg: 61.5, maxTraceFieldDeg: 30.75 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2a", fromSurface: "5", toSurface: "7" },
    { text: "G2b", fromSurface: "8", toSurface: "11A" },
  ],
  doublets: [
    { text: "L9", fromSurface: "1", toSurface: "3" },
    { text: "L10", fromSurface: "5", toSurface: "7" },
  ],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
