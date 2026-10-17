import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR-SW 75mm f/4.5                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPS5357028A, Example 1, Ikuo Mori / Nippon Kogaku K.K.      ║
 * ║  Seven elements / four air-spaced components; all spherical.               ║
 * ║                                                                              ║
 * ║  SCALE: The patent Example 1 prescription is normalized to f = 100 mm.     ║
 * ║  Every prescription length is uniformly scaled by s = 0.75 to correlate    ║
 * ║  the design with the 75 mm production lens. Indices and Abbe values are    ║
 * ║  unchanged. No aspheric coefficients are present.                           ║
 * ║                                                                              ║
 * ║  IMAGE PLANE: The final d is the Gaussian BFD recomputed from the rounded  ║
 * ║  scaled prescription (52.248538043 mm). The linearly scaled printed Bf is  ║
 * ║  52.254750 mm; the source/model residual is retained in the audit.          ║
 * ║                                                                              ║
 * ║  STOP MODEL: The patent explicitly places diaphragm 10 in source gap d6    ║
 * ║  between L2 and L3 but gives neither a numeric split nor physical          ║
 * ║  diameter. The scaled 2.73 mm gap is split at its neutral midpoint         ║
 * ║  (1.365 + 1.365 mm), consistent with the schematic placement in Figs. 1–2. ║
 * ║  The stop radius is derived from the design f-number, published f/4.5; it  ║
 * ║  is not a source measurement of the iris.                                  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: The patent supplies none. The authored SDs are modeled    ║
 * ║  clear apertures derived from exact meridional ray envelopes at infinity,  ║
 * ║  subsequently refined from patent optical rims, then    ║
 * ║  checked against the patent optical section and current geometry limits.    ║
 * ║  They are not production mechanical dimensions.                             ║
 * ║                                                                              ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: No internal focus state is     ║
 * ║  published. `var` and `varLabels` are empty. `closeFocusM = 1.0` is only   ║
 * ║  the current finite schema/UI placeholder; view-camera bellows focusing is ║
 * ║  outside this optical model and 1.0 m is not a Nikon MFD.                  ║
 * ║                                                                              ║
 * ║  GLASS: The patent publishes native d-line nd/νd coordinates but no glass ║
 * ║  supplier. Supplier-neutral six-digit coordinate classes are retained; no  ║
 * ║  catalog nC/nF/ng/dPgF values are promoted into the prescription. Runtime ║
 * ║  code resolution may use a compatible catalog curve only as a spectral     ║
 * ║  proxy; it does not establish the historical Nikon melt or supplier.       ║
 * ║                                                                              ║
 * ║  PRODUCT CORRELATION: The 75 mm production match is strong but is not      ║
 * ║  represented as a manufacturer-confirmed patent attribution.                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/** Semi-diameters were refined against JP_S5357028_A.pdf, p. 4, Fig. 1 at 600 dpi on 2026-09-13 UTC.
 * At the 0.75 prescription scale, the figure gives 42.75 micrometers/pixel. The central triplet now follows the
 * narrow optical interfaces instead of its stepped mechanical rims. The outer elements are unchanged; the stop
 * radius is derived from the design f-number. */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-nikkor-sw-75mm-f45",
  maker: "Nikon",
  name: "NIKON NIKKOR-SW 75mm f/4.5",
  subtitle: "JPS5357028A Example 1 — 0.75× scaled production-correlated model",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: ["7 ELEMENTS / 4 GROUPS", "MODELED EFL 74.998 mm", "F/4.5", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 75, design: 74.99811589233173 },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "JP S53-57028 A",
    patentYear: 1978,
    authors: ["Ikuo Mori"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5725,
      vd: 57.5,
      indexReference: "d",
      focalLengthMm: -46.513294059403925,
      glass: "573575 — barium crown coordinate class (vendor unresolved)",
      role: "Front negative meniscus forming the first air-spaced component.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2A",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.80218,
      vd: 44.4,
      indexReference: "d",
      focalLengthMm: 19.163020085821618,
      glass:
        "NBFD14 (HOYA) class (802444 lanthanum dense flint; Δnd −0.0005, Δνd −0.08; discontinued-glass equivalent, vendor unresolved)",
      role: "Positive first element of the cemented L2 triplet.",
      diagramLabel: "L2A",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L2B",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.67163,
      vd: 38.8,
      indexReference: "d",
      focalLengthMm: -20.677485599641894,
      glass: "672388 — dense-flint/lanthanum coordinate class (vendor unresolved)",
      role: "Negative middle element of the cemented L2 triplet.",
      diagramLabel: "L2B",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L2C",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 66.40461764762432,
      glass: "520701 — low-index high-Abbe crown coordinate class (vendor unresolved)",
      role: "Positive rear element of the cemented L2 triplet.",
      diagramLabel: "L2C",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L3A",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.60717,
      vd: 40.2,
      indexReference: "d",
      focalLengthMm: 21.343554310126002,
      glass: "607402 — barium flint (BAFD3 coordinate-compatible dispersion proxy; supplier unresolved)",
      role: "Positive first element of the cemented L3 doublet.",
      diagramLabel: "L3A",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L3B",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      focalLengthMm: -35.76072370453451,
      glass: "717295 — dense flint coordinate class (vendor unresolved)",
      role: "Negative second element of the cemented L3 doublet.",
      diagramLabel: "L3B",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L4",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7335,
      vd: 51,
      indexReference: "d",
      focalLengthMm: -62.66627241898773,
      glass: "734510 — lanthanum crown (TAC4 coordinate-compatible dispersion proxy; supplier unresolved)",
      role: "Rear negative meniscus forming the fourth air-spaced component.",
      diagramLabel: "L4",
    },
  ],

  /* ── Surface prescription ──
   * Source d6 = 3.64 mm becomes 2.73 mm after scaling and is preserved as
   * 1.365 mm before STO + 1.365 mm after STO.
   */
  surfaces: [
    { label: "1", R: 79.79625, d: 1.32, sd: 26.0, medium: 1 },
    { label: "2", R: 19.84575, d: 13.395, sd: 17.6 },
    { label: "3", R: 26.95725, d: 20.4225, sd: 16, medium: 2 },
    { label: "4", R: -23.7075, d: 0.66, sd: 10.2, medium: 3 },
    { label: "5", R: 33.903, d: 2.4825, sd: 10.2, medium: 4 },
    { label: "6", R: 1819.18425, d: 1.365, sd: 10.2 },
    { label: "STO", R: "flat", d: 1.365 },
    { label: "7", R: -191.0145, d: 7.0275, sd: 9, medium: 5 },
    { label: "8", R: -12.3045, d: 12.9825, sd: 9, medium: 6 },
    { label: "9", R: -34.068, d: 8.2725, sd: 14.5 },
    { label: "10", R: -19.04325, d: 1.2375, sd: 15.0, medium: 7 },
    { label: "11", R: -33.40725, d: 52.248538042606974, sd: 20.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Infinity prescription only. View-camera bellows focusing is outside this model; no minimum focus distance is specified.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "6" },
    { text: "G3 (+)", fromSurface: "7", toSurface: "9" },
    { text: "G4 (-)", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "D1", fromSurface: "7", toSurface: "9" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
