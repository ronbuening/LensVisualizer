import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LEICA MACRO-ELMAR-M 90mm f/4 — DE 2 246 966 A1, Example 1 (claim 3).
 *
 * Source prescription: DE2246966 Example 1, four air-spaced singlets, all spherical,
 * native e-line n_e / nu_e coordinates. The production correlation is inferred from
 * the 90 mm f/4, 27 degree field, and 4-element / 4-group correspondence; no Leica
 * primary source in the Stage 1 dossier explicitly assigns this patent to the product.
 *
 * Scaling: the patent normalizes f = 1.0. All dimensional prescription values are
 * scaled uniformly by 90.0. The rounded source table therefore models EFL
 * 89.957712317 mm rather than being renormalized to exactly 90 mm.
 *
 * Stop: Fig. 1 places the diaphragm inside d6 but does not dimension its station.
 * The rendered figure was measured at approximately 32.6% of d6 after surface 6,
 * giving 7.459 mm before STO and 15.428 mm after STO (sum = 22.887 mm). The stop
 * radius is derived from the design f-number, the source f/4 target; it is not a
 * published physical diaphragm diameter.
 *
 * Semi-diameters: the patent publishes none. Surface SDs below are modeled from
 * exact spherical e-line ray envelopes for the full pupil at 8.1 degrees (0.6 x the
 * published 13.5 degree half-field), plus chief and central-half-pupil rays at the
 * full +/-13.5 degree field, then checked for edge thickness, rim slope, spherical
 * domain, cross-gap intrusion, and the stated off-axis sample coverage.
 *
 * Glass: names are SCHOTT coordinate-compatible catalog models, not evidence of the
 * historical supplier/melt. Dispersion is resolved from the shared catalog at runtime; no catalog-derived
 * line-index overrides are authored. The patent itself publishes only n_e and nu_e.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies one static optical
 * state and no finite-conjugate movement law; the production 0.8 m MFD is retained
 * only as product metadata and does not create internal focus motion here.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-macro-elmar-m-90mm-f4",
  maker: "Leica",
  name: "LEICA MACRO-ELMAR-M 90mm f/4",
  subtitle: "DE 2 246 966 A1 Example 1 — inferred production correlation",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "f = 89.958 mm (modeled)", "f/4 (stop-calibrated)", "2ω = 27°", "ALL-SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 90, design: 89.957712316549 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "DE 2 246 966 A1",
    patentYear: 1974,
    authors: ["Georg Knetsch", "Walter Watz"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.64304,
      vd: 59.85,
      indexReference: "e",
      focalLengthMm: 46.793896231130866,
      glass: "N-LAK21 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.64304,
      vd: 59.85,
      indexReference: "e",
      focalLengthMm: 55.18405004565967,
      glass: "N-LAK21 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.75458,
      vd: 34.72,
      indexReference: "e",
      focalLengthMm: -22.54086907294271,
      glass: "LAFN7 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      focalLengthMm: 154.32363383636715,
      glass: "SF56A (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
  ],

  surfaces: [
    { label: "1", R: 23.1795, d: 4.032, sd: 14.1, medium: 1 },
    { label: "2", R: 94.0545, d: 0.072, sd: 14.1 },
    { label: "3", R: 20.8503, d: 3.699, sd: 12.7, medium: 2 },
    { label: "4", R: 47.0448, d: 1.863, sd: 12.7 },
    { label: "5", R: 91.8495, d: 1.485, sd: 11, medium: 3 },
    // STO station inferred from DE2246966 Fig. 1; 7.459 + 15.428 = published d6 = 22.887 mm.
    { label: "6", R: 14.2515, d: 7.459, sd: 11 },
    { label: "STO", R: "flat", d: 15.428 },
    { label: "7", R: 59.3019, d: 2.952, sd: 10, medium: 4 },
    { label: "8", R: 112.6845, d: 45.918, sd: 10 },
  ],

  focus: {
    closeFocusM: 0.8,
    description:
      "Not modeled — the patent supplies a static prescription, with no finite-focus spacings. Production minimum focus is 0.8 m.",
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
