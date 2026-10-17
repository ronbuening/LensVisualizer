import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * stop semi-diameter is not published; the stop radius is derived from the design f-number, the
 * published f/8. This is not independent evidence of iris size.
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
  schema: 2,
  key: "russar-22-70f8",
  // Russar is a design family; the historical manufacturer is unconfirmed.
  maker: null,
  name: "RUSSAR-22 70mm f/8",
  subtitle: "US 2,516,724 A — Example II; strong Russar-22 correlation, not manufacturer-confirmed",

  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "f = 69.883 mm", "f/8", "2ω = 122°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 69.882791 },
    fNumber: { design: 8 },
  },

  source: {
    patentNumber: "US 2,516,724 A",
    patentYear: 1950,
    authors: ["Michael Michaelovitch Roossinov"],
    assignees: [],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6395,
      vd: 43.3,
      indexReference: "d",
      focalLengthMm: -105.983574,
      glass: "Unmatched (Lenzos L-67; code 640433)",
      role: "Front exterior negative meniscus",
      diagramLabel: "1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      indexReference: "d",
      focalLengthMm: 27.771277,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the front cemented member",
      diagramLabel: "2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      indexReference: "d",
      focalLengthMm: -37.496703,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the front cemented member",
      diagramLabel: "3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.548,
      vd: 45.9,
      indexReference: "d",
      focalLengthMm: -36.823474,
      glass: "LLF1 spectral proxy (Lenzos L-28; production melt unresolved)",
      role: "Negative component of the rear cemented member",
      diagramLabel: "4",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6126,
      vd: 58.6,
      indexReference: "d",
      focalLengthMm: 27.271994,
      glass: "BACD4 spectral proxy (Lenzos L-24 / historical SK4 class; production melt unresolved)",
      role: "Positive component of the rear cemented member",
      diagramLabel: "5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6242,
      vd: 35.9,
      indexReference: "d",
      focalLengthMm: -107.477212,
      glass: "Unmatched (Lenzos L-3; reference wavelength unstated; flint coordinate class)",
      role: "Rear exterior negative meniscus",
      diagramLabel: "6",
    },
  ],

  surfaces: [
    { label: "1", R: 35.369754, d: 2.15011, sd: 33.499298, medium: 1 },
    { label: "2", R: 22.690074, d: 35.579812, sd: 22.690073999 },
    { label: "3", R: 47.564802, d: 9.19988, sd: 15.00872, medium: 2 },
    { label: "4", R: -24.539956, d: 3.070098, sd: 15.002334, medium: 3 },
    { label: "5", R: 131.917694, d: 0.246507, sd: 10.00544 },
    { label: "STO", R: "flat", d: 0.246507 },
    { label: "6", R: -129.539746, d: 3.02006, sd: 6.828189, medium: 4 },
    { label: "7", R: 24.100028, d: 9.03986, sd: 15.003714, medium: 5 },
    { label: "8", R: -46.699932, d: 34.939986, sd: 14.986246 },
    { label: "9", R: -22.269958, d: 2.109978, sd: 22.269957, medium: 6 },
    { label: "10", R: -34.549842, d: 36.889944, sd: 33.000633 },
  ],

  focus: {
    closeFocusM: 1000000,
    description: "Fixed patent prescription at infinity; no finite-focus movement is modeled.",
  },

  aperture: { nominalFNumber: 8, fStops: [8], maxFNumber: 8 },

  projection: { kind: "rectilinear", fullFieldDeg: 122, maxTraceFieldDeg: 61 },

  groups: [
    { text: "FRONT HALF", fromSurface: "1", toSurface: "5" },
    { text: "REAR HALF", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },

  checks: { maxRimAngleDeg: 89.9999 },
} satisfies LensDataV2Input;

export default LENS_DATA;
