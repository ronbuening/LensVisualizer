import type { LensDataInput } from "../../types/optics.js";

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
 * giving 7.459 mm before STO and 15.428 mm after STO (sum = 22.887 mm). STO.sd is
 * calibrated from the implemented paraxial entrance pupil to reproduce the source
 * f/4 target; it is not a published physical diaphragm diameter.
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
  key: "leica-macro-elmar-m-90mm-f4",
  maker: "Leica",
  name: "LEICA MACRO-ELMAR-M 90mm f/4",
  subtitle: "DE 2 246 966 A1 Example 1 — inferred production correlation",
  specs: ["4 ELEMENTS / 4 GROUPS", "f = 89.958 mm (modeled)", "f/4 (stop-calibrated)", "2ω = 27°", "ALL-SPHERICAL"],

  focalLengthMarketing: 90,
  focalLengthDesign: 89.957712316549,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 2 246 966 A1",
  patentAuthors: ["Georg Knetsch", "Walter Watz"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1974,
  elementCount: 4,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.64304,
      vd: 59.85,
      indexReference: "e",
      fl: 46.793896231130866,
      glass: "N-LAK21 (SCHOTT coordinate match; supplier unconfirmed)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.64304,
      vd: 59.85,
      indexReference: "e",
      fl: 55.18405004565967,
      glass: "N-LAK21 (SCHOTT coordinate match; supplier unconfirmed)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.75458,
      vd: 34.72,
      indexReference: "e",
      fl: -22.54086907294271,
      glass: "LAFN7 (SCHOTT coordinate match; supplier unconfirmed)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      fl: 154.32363383636715,
      glass: "SF56A (SCHOTT coordinate match; supplier unconfirmed)",
    },
  ],

  surfaces: [
    { label: "1", R: 23.1795, d: 4.032, nd: 1.64304, elemId: 1, sd: 14.1 },
    { label: "2", R: 94.0545, d: 0.072, nd: 1, elemId: 0, sd: 14.1 },
    { label: "3", R: 20.8503, d: 3.699, nd: 1.64304, elemId: 2, sd: 12.7 },
    { label: "4", R: 47.0448, d: 1.863, nd: 1, elemId: 0, sd: 12.7 },
    { label: "5", R: 91.8495, d: 1.485, nd: 1.75458, elemId: 3, sd: 11 },
    // STO station inferred from DE2246966 Fig. 1; 7.459 + 15.428 = published d6 = 22.887 mm.
    { label: "6", R: 14.2515, d: 7.459, nd: 1, elemId: 0, sd: 11 },
    { label: "STO", R: 1e15, d: 15.428, nd: 1, elemId: 0, sd: 7.316636566 },
    { label: "7", R: 59.3019, d: 2.952, nd: 1.7918, elemId: 4, sd: 10 },
    { label: "8", R: 112.6845, d: 45.918, nd: 1, elemId: 0, sd: 10 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  closeFocusM: 0.8,
  focusDescription:
    "Static published prescription only; production MFD is 0.8 m, but DE2246966 provides no finite-conjugate internal spacing law (NO_INTERNAL_RECONSTRUCTION).",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
