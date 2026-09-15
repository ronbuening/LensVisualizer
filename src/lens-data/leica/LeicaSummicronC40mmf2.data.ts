import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA SUMMICRON-C 40mm f/2                            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: DE 2 222 892 A1, Example 3 = A1 claim 4.                  ║
 * ║ Six-element / four-group all-spherical Gauss-type design.          ║
 * ║                                                                    ║
 * ║ SCALE: the patent prescription is normalized to f = 1.0. Every     ║
 * ║ dimensional prescription value is scaled uniformly by s = 40.0.    ║
 * ║ The resulting modeled EFL is 39.99869945 mm; marketed focal length ║
 * ║ remains 40 mm. There are no aspheres to rescale.                   ║
 * ║                                                                    ║
 * ║ STOP: the patent figure places the diaphragm inside d5 but gives   ║
 * ║ no numerical split. The model uses a disclosed midpoint split of   ║
 * ║ the scaled d5 = 9.6192 mm: 4.8096 mm + STO + 4.8096 mm. The stop  ║
 * ║ semi-diameter is calibrated from the patent/manufacturer f/2 value ║
 * ║ using the modeled paraxial entrance pupil. Agreement with f/2 is   ║
 * ║ therefore a calibration result, not independent evidence of the    ║
 * ║ production diaphragm diameter.                                    ║
 * ║                                                                    ║
 * ║ SEMI-DIAMETERS: no clear apertures are published. Surface SDs are  ║
 * ║ modeled from exact spherical-ray envelopes over ±17.04° field      ║
 * ║ (0.60 × the published ±28.4° half-field) and the full calibrated   ║
 * ║ stop, then given at least 8% radial clearance and rounded upward to ║
 * ║ 0.01 mm. Geometry is checked for edge thickness, actual   ║
 * ║ rim slope, shared-band air-gap intrusion, and exact-ray containment.║
 * ║ Production LensVisualizer render-trim diagnostics passed;        ║
 * ║ see the accompanying repository audit log.                        ║
 * ║                                                                    ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The production brochure states  ║
 * ║ helical focus to 0.8 m, but the patent publishes only one optical  ║
 * ║ prescription state. No finite-focus var is invented.               ║
 * ║                                                                    ║
 * ║ MOUNT: image format is explicitly 24 × 36 mm. lensMounts is        ║
 * ║ intentionally omitted: the Leitz brochure calls the CL bayonet     ║
 * ║ LEICA M type but separately warns that this SUMMICRON-C cannot be  ║
 * ║ used on a LEICA M, so the available taxonomy cannot encode that    ║
 * ║ compatibility nuance without overstatement.                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-summicron-c-40mm-f2",
  maker: "Leica",
  name: "LEICA SUMMICRON-C 40mm f/2",
  subtitle: "DE 2 222 892 A1 · Example 3 (A1 claim 4) · strong production correlation, not manufacturer-confirmed",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 39.9987 mm (DESIGN)", "f/2", "2ω = 56.8°", "ALL-SPHERICAL"],

  focalLengthMarketing: 40,
  focalLengthDesign: 39.99869945077084,
  apertureMarketing: 2,
  apertureDesign: 2,
  imageFormat: "135-full-frame",
  patentNumber: "DE 2 222 892 A1",
  patentAuthors: ["Georg Knetsch", "Hermann Desch", "Heinz Marquardt", "Walter Watz"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1973,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.81527,
      vd: 45.06,
      indexReference: "e",
      fl: 50.62571904461374,
      glass: "Unmatched (native e-line ne=1.81527, nu_e=45.06; supplier unresolved)",
      apd: false,
      role: "Front positive singlet ahead of the stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.81527,
      vd: 45.06,
      indexReference: "e",
      fl: 28.44327451962119,
      glass: "Unmatched (native e-line ne=1.81527, nu_e=45.06; supplier unresolved)",
      apd: false,
      role: "Positive member of the front cemented meniscus.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      fl: -18.466885950888315,
      glass: "SF56A (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative member of the front cemented meniscus, concave toward the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.64062,
      vd: 35.09,
      indexReference: "e",
      fl: -40.6672048998297,
      glass: "S-TIM6 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Stop-side negative member of the rear cemented meniscus.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69232,
      vd: 49.18,
      indexReference: "e",
      fl: 75.40341577817456,
      glass: "Unmatched (native e-line ne=1.69232, nu_e=49.18; supplier unresolved)",
      apd: false,
      role: "Image-side positive member of the rear cemented meniscus.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.64304,
      vd: 59.85,
      indexReference: "e",
      fl: 35.69369088842701,
      glass: "N-LAK21 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Rear positive singlet nearest the image plane.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 23.9976, d: 2.8, nd: 1.81527, elemId: 1, sd: 14.2 },
    { label: "2", R: 54.3276, d: 0.03, nd: 1, elemId: 0, sd: 13.98 },
    { label: "3", R: 12.9932, d: 3.6996, nd: 1.81527, elemId: 2, sd: 11.31 },
    { label: "4", R: 25.7724, d: 1.31, nd: 1.7918, elemId: 3, sd: 10.87 },
    { label: "5", R: 9.1196, d: 4.8096, nd: 1, elemId: 0, sd: 7.91 },
    { label: "STO", R: 1e15, d: 4.8096, nd: 1, elemId: 0, sd: 6.550350995261337 },
    { label: "6", R: -12.7992, d: 1.41, nd: 1.64062, elemId: 4, sd: 8.05 },
    { label: "7", R: -26.2424, d: 1.9, nd: 1.69232, elemId: 5, sd: 9.32 },
    { label: "8", R: -17.9808, d: 0.03, nd: 1, elemId: 0, sd: 9.8 },
    { label: "9", R: -7914.48, d: 3.7996, nd: 1.64304, elemId: 6, sd: 10.96 },
    { label: "10", R: -22.8904, d: 23.639670756819626, nd: 1, elemId: 0, sd: 11.3 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.8,
  focusDescription:
    "Not modeled — production helical focus reaches 0.8 m, but the patent supplies only the nominal prescription; no finite-focus internal spacing is modeled.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
