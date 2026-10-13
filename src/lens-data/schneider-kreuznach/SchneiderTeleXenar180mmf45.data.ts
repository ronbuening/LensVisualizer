import type { LensDataInput } from "../../types/optics.js";

/**
 * SCHNEIDER TELE-XENAR 180mm f/4.5
 *
 * Source: DE 471565 C, f/4.5 numerical example corresponding to Abb. 1.
 * The source table is normalized to f = 1; all prescription lengths are uniformly scaled by s = 180.
 * The resulting modeled EFL is 179.948704 mm; it is not silently renormalized to exactly 180 mm.
 *
 * Production correlation: inferred, not manufacturer-confirmed to this patent number. Historical Schneider literature
 * documents an 18 cm f/4.5 Tele-Xenar with the same five-element, partially cemented telephoto architecture.
 *
 * Stop: the patent constrains the diaphragm to the large Delta1 air space but gives no station or diameter. The model
 * places STO at the midpoint of that 46.8 mm scaled gap and calibrates its 13.7456 mm physical semi-diameter to the
 * published f/4.5 target. The resulting f-number is therefore a calibration result, not independent stop evidence.
 *
 * Semi-diameters: unpublished. They are modeled from exact meridional ray envelopes for the calibrated stop, including
 * the full on-axis pupil and the default off-axis diagram bundle at 0.6 of the 6x9-format paraxial half-field, then
 * checked for positive element edge thickness, spherical rim slope, and cross-gap clearance. The front cemented pair
 * is intentionally tighter than a generic 8-12% mechanical margin because larger shared radii drive L1 edge thickness
 * below approximately 1 mm.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. No variable gap is authored. closeFocusM = 1000000 is a schema/UI sentinel for a
 * static infinity prescription and is not a claimed production minimum-focus distance.
 *
 * Spectral reference: the patent says only "yellow ray". The stored nd/vd slots preserve those source coordinates;
 * indexReference is omitted rather than falsely asserting a modern d- or e-line identity. Glass strings are explicitly
 * Unmatched annotations with class-coordinate hints only, preventing unsupported modern Sellmeier resolution while the
 * source line remains unresolved; no nC/nF/ng/dPgF values are authored.
 */
// Rear rims refined from Abb. 1 proportions; clearances limit literal schematic copying.
// Patent optical-rim and compatible glass review: see the sibling .audit.md (2026-10-02 UTC).
const LENS_DATA = {
  key: "schneider-tele-xenar-180f45",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH TELE-XENAR 180mm f/4.5",
  subtitle: "DE 471565 C — f/4.5 numerical example / Abb. 1; 180 mm production correlation inferred",
  specs: ["5 ELEMENTS / 3 GROUPS", "f = 179.95 mm MODELED", "f/4.5", "ALL-SPHERICAL"],

  focalLengthMarketing: 180,
  focalLengthDesign: 179.948704,
  apertureMarketing: 4.5,
  apertureDesign: 4.499993,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "6x9",
  patentNumber: "DE 471565 C",
  patentAuthors: ["Albrecht Wilhelm Tronnier"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1929,
  elementCount: 5,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5163,
      vd: 63.7,
      indexReferenceNote: "Patent yellow-ray coordinates; spectral line unspecified. Chromatic indices use an approximate d-line model.",
      fl: 54.074775,
      glass: "Unmatched (BK7/BSL7-class coordinate; historical yellow-ray source; supplier unconfirmed)",
      role: "Positive crown component of the front cemented collector.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6202,
      vd: 36,
      indexReferenceNote: "Patent yellow-ray coordinates; spectral line unspecified. Chromatic indices use an approximate d-line model.",
      fl: -89.915302,
      glass: "Unmatched (F2/PBM2-class coordinate; historical yellow-ray source; supplier unconfirmed)",
      role: "Negative flint component of the net-positive front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5163,
      vd: 63.7,
      indexReferenceNote: "Patent yellow-ray coordinates; spectral line unspecified. Chromatic indices use an approximate d-line model.",
      fl: -69.501522,
      glass: "Unmatched (BK7/BSL7-class coordinate; historical yellow-ray source; supplier unconfirmed)",
      role: "Negative crown component of the rear cemented negative member.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6489,
      vd: 33.9,
      indexReferenceNote: "Patent yellow-ray coordinates; spectral line unspecified. Chromatic indices use an approximate d-line model.",
      fl: 160.359845,
      glass: "Unmatched (SF2/H-ZF1A-class coordinate; historical yellow-ray source; supplier unconfirmed)",
      role: "Positive flint component whose cemented combination with L3 remains net negative.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.525,
      vd: 62.3,
      indexReferenceNote: "Patent yellow-ray coordinates; spectral line unspecified. Chromatic indices use an approximate d-line model.",
      fl: 429.067096,
      glass: "Unmatched (source yellow-ray n=1.5250, v=62.3)",
      role: "Positive singlet separated from the rear cemented member by the narrow negative air lens.",
    },
  ],

  surfaces: [
    { label: "1", R: 37.44, d: 9.9, nd: 1.5163, elemId: 1, sd: 21.5 },
    { label: "2", R: -99.9, d: 2.88, nd: 1.6202, elemId: 2, sd: 21 },
    { label: "3", R: 127.62, d: 23.4, nd: 1, elemId: 0, sd: 20.6 },
    { label: "STO", R: 1e15, d: 23.4, nd: 1, elemId: 0, sd: 13.7456 },
    { label: "4", R: -23.58, d: 1.62, nd: 1.5163, elemId: 3, sd: 17.0 },
    { label: "5", R: -70.38, d: 2.88, nd: 1.6489, elemId: 4, sd: 17.5 },
    { label: "6", R: -42.66, d: 0.18, nd: 1, elemId: 0, sd: 17.7 },
    { label: "7", R: -107.1, d: 2.88, nd: 1.525, elemId: 5, sd: 18.0 },
    { label: "8", R: -73.26, d: 88.322687, nd: 1, elemId: 0, sd: 18.4 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR CEMENTED", fromSurface: "4", toSurface: "6" },
    { text: "REAR SINGLET", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  closeFocusM: 1000000,
  focusDescription: "This static infinity-focus prescription has no published finite-focus spacings or minimum focus distance.",

  nominalFno: 4.499993,
  fstopSeries: [4.5, 5.6, 8, 11, 16],

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
