import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER HELIAR 100mm f/4.5 — SECOND ASYMMETRIC FORM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: DE 143889 C, the patent's single worked numerical example (job-card Example 1).              ║
 * ║ Five elements in three air-spaced groups; all eight refracting surfaces are spherical.               ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the infinity prescription.       ║
 * ║                                                                                                      ║
 * ║ Modeling decisions:                                                                                  ║
 * ║ - Native 100 mm patent scale; no dimensional or asphere scaling was applied.                         ║
 * ║ - The patent's 23 mm "opening" is treated as the entrance-pupil diameter. nominalFno therefore       ║
 * ║   uses the modeled f/4.3416595905 value; f/4.5 remains the product/designation aperture.             ║
 * ║ - The stop is published only as lying in d5. Its position is inferred from the patent drawing and    ║
 * ║   split 1.70 mm after r5 / 4.07 mm before r6. The physical stop SD is solved so that the entrance    ║
 * ║   pupil diameter is exactly 23 mm in the paraxial model.                                             ║
 * ║ - Surface semi-diameters are inferred from the full on-axis pupil, the 92 mm image-circle field,     ║
 * ║   exact meridional ray probes, the patent section, and current geometry limits. A 600 dpi figure     ║
 * ║   audit set the three groups to a near-equal-height silhouette; the rear group stops at its positive ║
 * ║   element's edge-thickness limit. The full on-axis pupil, default off-axis ray bundle, and full-field ║
 * ║   chief rays are contained by the declared clear apertures.                                         ║
 * ║ - The schema's nd slot directly retains the patent's sodium-D values. The printed historical G′-line ║
 * ║   values are preserved in comments but are not authored as the schema's modern mercury-g `ng`.       ║
 * ║   The source supplies no vd, nC, nF, modern ng, dPgF, or defensible catalog glass identity.          ║
 * ║ - closeFocusM = 1.0 is a schema-required UI placeholder only; it is not a patent or product MFD and  ║
 * ║   does not create a close-focus state. var and varLabels remain empty.                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-heliar-100mm-f4-5-second-asymmetric",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER HELIAR 100mm f/4.5 (Second Asymmetric Form)",
  subtitle: "DE 143889 C — worked numerical example (job-card Example 1), second asymmetric form",
  specs: [
    "5 ELEMENTS / 3 GROUPS",
    "f = 99.858 mm DESIGN",
    "f/4.342 MODELED / f/4.5 DESIGNATION",
    "92 mm IMAGE DIAMETER",
    "49.47° FULL FIELD",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.8581705817869,
  apertureMarketing: 4.5,
  apertureDesign: 4.3416595905124735,
  lensMounts: ["large-format-lens-board"],
  patentNumber: "DE 143889 C",
  patentAuthors: ["Carl August Hans Harting"],
  patentAssignees: ["Voigtländer & Sohn AG"],
  patentYear: 1903,
  elementCount: 5,
  groupCount: 3,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 49.46663736183893,
    maxTraceFieldDeg: 24.73331868091946,
  },

  elements: [
    {
      id: 1,
      name: "a1",
      label: "Element a1",
      type: "Negative Meniscus",
      nd: 1.5499,
      fl: -63.6879434823,
      glass: "Unmatched (DE143889C a1; historical nD/nG′ pair only)",
      role: "Front negative component of the first cemented doublet.",
      cemented: "D1",
      // Patent nG′ = 1.56547; G′ is not the schema's modern mercury-g line, so it is not stored as ng.
    },
    {
      id: 2,
      name: "b1",
      label: "Element b1",
      type: "Positive Meniscus",
      nd: 1.61294,
      fl: 34.8738681521,
      glass: "Unmatched (DE143889C b1; historical nD/nG′ pair only)",
      role: "Positive crown component completing the weaker front cemented group.",
      cemented: "D1",
      // Patent nG′ = 1.62686; G′ is not the schema's modern mercury-g line, so it is not stored as ng.
    },
    {
      id: 3,
      name: "c",
      label: "Element c",
      type: "Biconcave Negative",
      nd: 1.53644,
      fl: -31.9005309903,
      glass: "Unmatched (DE143889C c; historical nD/nG′ pair only)",
      role: "Thin central negative singlet separating the unequal positive cemented groups.",
      // Patent nG′ = 1.54988; G′ is not the schema's modern mercury-g line, so it is not stored as ng.
    },
    {
      id: 4,
      name: "b2",
      label: "Element b2",
      type: "Biconvex Positive",
      nd: 1.61294,
      fl: 24.9538206137,
      glass: "Unmatched (DE143889C b2; historical nD/nG′ pair only)",
      role: "Strong positive crown component of the rear cemented group.",
      cemented: "D2",
      // Patent nG′ = 1.62640; G′ is not the schema's modern mercury-g line, so it is not stored as ng.
    },
    {
      id: 5,
      name: "a2",
      label: "Element a2",
      type: "Negative Meniscus",
      nd: 1.57073,
      fl: -66.3554519001,
      glass: "Unmatched (DE143889C a2; historical nD/nG′ pair only)",
      role: "Rear negative flint component completing the stronger rear cemented group.",
      cemented: "D2",
      // Patent nG′ = 1.58866; G′ is not the schema's modern mercury-g line, so it is not stored as ng.
    },
  ],

  surfaces: [
    { label: "1", R: 40.38, d: 1.61, nd: 1.5499, elemId: 1, sd: 12.7 },
    { label: "2", R: 18.49, d: 4.82, nd: 1.61294, elemId: 2, sd: 12.7 },
    { label: "3", R: 123.4, d: 11.22, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "4", R: -38.46, d: 0.64, nd: 1.53644, elemId: 3, sd: 12.5 },
    { label: "5", R: 31.01, d: 1.7, nd: 1.0, elemId: 0, sd: 12.5 },
    // STO location inferred from the patent drawing; d5 remains exactly 1.70 + 4.07 = 5.77 mm.
    { label: "STO", R: 1e15, d: 4.07, nd: 1.0, elemId: 0, sd: 9.40182409422752 },
    { label: "6", R: 67.63, d: 4.82, nd: 1.61294, elemId: 4, sd: 11.5 },
    { label: "7", R: -19.23, d: 0.64, nd: 1.57073, elemId: 5, sd: 11.5 },
    // Patent omits image distance; d is the independently solved infinity-focus paraxial BFD from r8.
    { label: "8", R: -39.54, d: 88.2482462502744, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 — FRONT DOUBLET", fromSurface: "1", toSurface: "3" },
    { text: "G2 — CENTRAL SINGLET", fromSurface: "4", toSurface: "5" },
    { text: "G3 — REAR DOUBLET", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1 (a1 + b1)", fromSurface: "1", toSurface: "3" },
    { text: "D2 (b2 + a2)", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: DE 143889 C publishes only the infinity prescription and no MFD or movement law. " +
    "closeFocusM=1.0 is a schema-required UI placeholder, not a claimed source value; " +
    "no variable optical gap is modeled.",

  nominalFno: 4.3416595905124735,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.54,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
