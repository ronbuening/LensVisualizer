import type { LensDataInput } from "../../types/optics.js";

/**
 * Lens data — Albert Schacht Travenar 135mm f/3.5.
 *
 * Source prescription: DE 843 305, Example 2 (Ludwig Bertele), published at f = 100 mm.
 * Every patent radius and axial spacing is uniformly scaled by 1.35 for the 135 mm production correlation.
 * The resulting Gaussian EFL is 135.348216996 mm; the marketed focal length remains 135 mm.
 *
 * The patent publishes f/3.5 but no physical diaphragm location or diameter. The model inserts exactly one STO at
 * the midpoint of the long L3-L4 air space, a neutral deterministic placement rather than a claimed source dimension.
 * Its semi-diameter is calibrated paraxially so the modeled entrance pupil gives f/3.5. Agreement with f/3.5 therefore
 * verifies the calibration, not an unpublished physical diaphragm diameter or location.
 *
 * The patent publishes no clear apertures. Surface semi-diameters are modeled from exact meridional spherical-ray
 * containment at the project's default 0.6 × 135-format diagonal half-field, then enlarged by 5% plus 0.2 mm and checked
 * for positive element edge thickness, actual spherical rim slope, shared-gap sag intrusion, and exact-ray containment.
 * The rear element uses 15.5 mm rims inferred from DE 843 305 p. 4, Fig. 2; see the audit sidecar.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent gives no finite-focus prescription or internal spacing law.
 * closeFocusM = 1.5 is retained only as secondary product metadata from the Stage 1 evidence; var remains empty and no
 * finite-focus optical motion is invented.
 *
 * Product attribution to the Schacht Travenar 135mm f/3.5 is strong circumstantial research correlation, not a
 * manufacturer-confirmed patent-to-product identification. Glass labels are coordinate classes unless explicitly
 * marked Unmatched; no candidate catalog nC/nF/ng/dPgF values are promoted into the prescription.
 */

const LENS_DATA = {
  key: "schacht-travenar-135mm-f35",
  maker: "Schacht",
  name: "SCHACHT TRAVENAR 135mm f/3.5",
  subtitle: "DE 843 305 Example 2 — 1.35× production-scale correlation; attribution circumstantial",
  specs: ["4 ELEMENTS / 4 GROUPS", "ALL-SPHERICAL", "135 FORMAT"],

  focalLengthMarketing: 135,
  focalLengthDesign: 135.348216996,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["exakta"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 843 305",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: ["Ludwig Bertele"],
  patentYear: 1952,
  elementCount: 4,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5516,
      vd: 62.6,
      indexReference: "d",
      fl: 122.340434939,
      glass: "N-PSK3 — coordinate-compatible spectral proxy (supplier unconfirmed)",
      role: "Front collecting element; positive standalone paraxial power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: 110.603025042,
      glass: "620603 — dense crown class (supplier unresolved)",
      role: "Second collecting element, strongly bent toward the object side.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7215,
      vd: 29.3,
      indexReference: "d",
      fl: -47.424135496,
      glass: "S-TIH18 — coordinate-compatible spectral proxy (supplier unconfirmed)",
      role: "Diverging element that supplies the principal negative power in the telephoto form.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.747,
      vd: 34.9,
      indexReference: "d",
      fl: 149.741798078,
      glass: "LAFN7 — coordinate-compatible spectral proxy (supplier unconfirmed)",
      role: "Rear collecting element following the long internal air space.",
    },
  ],

  surfaces: [
    { label: "1", R: 60.9525, d: 5.0085, nd: 1.5516, elemId: 1, sd: 21.36 },
    { label: "2", R: 611.4555, d: 0.297, nd: 1.0, elemId: 0, sd: 20.99 },
    { label: "3", R: 33.048, d: 8.964, nd: 1.6204, elemId: 2, sd: 19.42 },
    { label: "4", R: 57.132, d: 6.264, nd: 1.0, elemId: 0, sd: 16.95 },
    { label: "5", R: 104.706, d: 5.0085, nd: 1.7215, elemId: 3, sd: 14.43 },
    { label: "6", R: 25.272, d: 15.5385, nd: 1.0, elemId: 0, sd: 12.08 },
    { label: "STO", R: 1e15, d: 15.5385, nd: 1.0, elemId: 0, sd: 11.389937443 },
    { label: "7", R: 68.6745, d: 3.0105, nd: 1.747, elemId: 4, sd: 15.5 },
    { label: "8", R: 174.555, d: 69.454041222, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 1.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: patent Example 2 publishes no finite-focus optical state; 1.5 m is secondary product metadata only.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
