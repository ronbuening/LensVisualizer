import type { LensDataInput } from "../../types/optics.js";

/**
 * RUSSAR-22 70mm f/8 — US 2,516,724 A, Example II.
 *
 * Six elements in four air-separated groups; all surfaces are spherical.
 * The patent inch column is the dimensional source branch, converted with 25.4 mm/in exactly.
 * Patent d4 prints 0.11890 in (3.029 mm); the implemented model preserves the raw mismatch in the
 * dossier and uses the exact inch conversion 3.02006 mm because that branch best reproduces F, p1,
 * and p. The optional inter-half filter is omitted because Example II does not specify one.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. No finite-conjugate movement is published. `var` is
 * therefore empty; `closeFocusM` is a finite schema/UI sentinel only and is not a source MFD.
 *
 * Stop position is inferred at the midpoint of the 0.493014 mm central gap from Fig. 13. The physical
 * stop semi-diameter is not published; it is calibrated from the published f/8 so that the paraxial
 * entrance-pupil diameter gives the modeled f-number. This is not independent evidence of iris size.
 *
 * Semi-diameters are modeled from the source sag/diameter evidence plus exact sampled field rays. The
 * source free-diameter/sag notes cannot be interpreted as literal spherical chord diameters at r2/r9:
 * the listed 33 mm and 32.5 mm free semi-diameters exceed |R|, while h2/r2 and h9/r9 imply the patent's
 * slightly over-hemispherical (~185°) inner meniscus surfaces. Surfaces 2 and 9 therefore store only the
 * near-equatorial active portions representable by a single-valued LensVisualizer spherical sag. Surface 6
 * uses the radial coordinate implied by h6; the contradictory printed 11 mm L4 free diameter remains in
 * evidence/audit. `maxRimAngleDeg` is raised only to admit these source-backed near-equatorial surfaces.
 *
 * The patent does not identify the spectral line of its refractive-index coordinate. `indexReference: "d"`
 * is the Stage-2 schema slot selected in the dossier, not a claim of modern d-line melt precision.
 * No nC/nF/ng/dPgF values are authored. Glass labels retain Lenzos designations and class/code evidence
 * without asserting modern supplier identity.
 *
 * Russar-22 correlation is strong from patent/history/numerical agreement but is not manufacturer-confirmed
 * as an Example-II production formula. No maker, interchangeable mount, or image-format id is asserted.
 */
const LENS_DATA = {
  key: "russar-22-70f8",
  // Russar is a design family; the historical manufacturer is unconfirmed.
  maker: null,
  name: "RUSSAR-22 70mm f/8",
  subtitle: "US 2,516,724 A — Example II; strong Russar-22 correlation, not manufacturer-confirmed",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 69.883 mm", "f/8", "2ω = 122°", "ALL-SPHERICAL"],

  focalLengthDesign: 69.882791,
  apertureDesign: 8,
  patentNumber: "US 2,516,724 A",
  patentAuthors: ["Michael Michaelovitch Roossinov"],
  patentAssignees: [],
  patentYear: 1950,
  elementCount: 6,
  groupCount: 4,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 122,
    maxTraceFieldDeg: 61,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6395,
      vd: 43.3,
      indexReference: "d",
      fl: -105.983574,
      glass: "Unmatched (Lenzos L-67; code 640433)",
      role: "Front exterior negative meniscus",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      indexReference: "d",
      fl: 27.771277,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the front cemented member",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      indexReference: "d",
      fl: -37.496703,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the front cemented member",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      indexReference: "d",
      fl: -36.823474,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the rear cemented member",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      indexReference: "d",
      fl: 27.271994,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the rear cemented member",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6242,
      vd: 35.9,
      indexReference: "d",
      fl: -107.477212,
      glass: "Unmatched (Lenzos L-3; reference wavelength unstated; flint coordinate class)",
      role: "Rear exterior negative meniscus",
    },
  ],

  surfaces: [
    { label: "1", R: 35.369754, d: 2.15011, nd: 1.6395, elemId: 1, sd: 33.499298 },
    { label: "2", R: 22.690074, d: 35.579812, nd: 1, elemId: 0, sd: 22.690073999 },
    { label: "3", R: 47.564802, d: 9.19988, nd: 1.6126, elemId: 2, sd: 15.00872 },
    { label: "4", R: -24.539956, d: 3.070098, nd: 1.548, elemId: 3, sd: 15.002334 },
    { label: "5", R: 131.917694, d: 0.246507, nd: 1, elemId: 0, sd: 10.00544 },
    { label: "STO", R: 1e15, d: 0.246507, nd: 1, elemId: 0, sd: 5.44481 },
    { label: "6", R: -129.539746, d: 3.02006, nd: 1.548, elemId: 4, sd: 6.828189 },
    { label: "7", R: 24.100028, d: 9.03986, nd: 1.6126, elemId: 5, sd: 15.003714 },
    { label: "8", R: -46.699932, d: 34.939986, nd: 1, elemId: 0, sd: 14.986246 },
    { label: "9", R: -22.269958, d: 2.109978, nd: 1.6242, elemId: 6, sd: 22.269957 },
    { label: "10", R: -34.549842, d: 36.889944, nd: 1, elemId: 0, sd: 33.000633 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT HALF", fromSurface: "1", toSurface: "5" },
    { text: "REAR HALF", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1000000,
  focusDescription: "Fixed patent prescription at infinity; no finite-focus movement is modeled.",

  nominalFno: 8,
  fstopSeries: [8],
  maxFstop: 8,

  maxRimAngleDeg: 89.9999,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
