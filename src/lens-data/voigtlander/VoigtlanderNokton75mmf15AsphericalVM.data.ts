import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER NOKTON VINTAGE LINE 75mm f/1.5 ASPHERICAL VM     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2020-122918 A, Example 3 (Cosina Co., Ltd.).                    ║
 * ║  Unscaled patent prescription: f = 74.5 mm, FNO = 1.54, W = 16.0°.         ║
 * ║  Seven elements in six air-separated groups; surfaces 13A and 14A aspheric. ║
 * ║                                                                              ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION.                                   ║
 * ║  The patent publishes only infinity focus. The 0.7 m state preserves every  ║
 * ║  internal spacing and models rigid translation of the complete optical unit  ║
 * ║  on the manufacturer's helicoid. Only the rear image gap varies:             ║
 * ║  36.190000 mm at infinity to 46.29933327830486 mm at 0.7 m.                 ║
 * ║  The solved unit extension is 10.10933327830486 mm and |m| = 0.135686917.   ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent gives no clear apertures. Values were inferred   ║
 * ║  from the reverse-solved f/1.54 stop, paraxial marginal/chief-ray envelopes, ║
 * ║  the patent section, the production barrel/filter envelope, and the current  ║
 * ║  edge-thickness, actual-rim-slope, shared-gap, off-axis, and trim policies.  ║
 * ║  The stop semi-diameter 13.28514015663278 mm is derived, not patent-listed.  ║
 * ║                                                                              ║
 * ║  GLASS DATA: the patent publishes nd and νd but no vendor names or per-glass ║
 * ║  nC/nF/ng. Glass names are therefore retained as six-digit material classes. ║
 * ║  Its |ΔθgF| = 0.0375 for L2/L3 is unsigned and is retained only as an APD    ║
 * ║  note; it is not converted to signed dPgF. L4 is marked APD in the maker's    ║
 * ║  production diagram but is unquantified in Example 3. Optional rear plates   ║
 * ║  mentioned in ¶0046 are excluded.                                             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-nokton-vintage-line-vm-75mm-f1-5-aspherical",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON Vintage Line 75mm f/1.5 Aspherical VM",
  subtitle: "JP 2020-122918 A — Example 3; production correlation",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "f = 74.503 mm (DESIGN)",
    "F/1.54 (DESIGN)",
    "2ω = 32.0°",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 75,
  focalLengthDesign: 74.50250731409284,
  apertureMarketing: 1.5,
  apertureDesign: 1.54,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2020-122918 A",
  patentAuthors: ["島田 博和", "菅野 靖之"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2020,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 155.972,
      glass: "729547 — lanthanum crown (vendor unresolved)",
      apd: false,
      role: "Front positive collector; begins the three-meniscus positive sequence.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 164.925,
      glass: "497816 — ED crown (vendor unresolved)",
      apd: "patent",
      apdNote: "Patent Example 3 publishes unsigned |ΔθgF| = 0.0375; no signed dPgF or line indices are available.",
      role: "Low-index, high-Abbe front-group positive element used in the patent's chromatic conditions.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 103.428,
      glass: "497816 — ED crown (vendor unresolved)",
      apd: "patent",
      apdNote: "Patent Example 3 publishes unsigned |ΔθgF| = 0.0375; no signed dPgF or line indices are available.",
      role: "Strongest positive meniscus in the front group; paired with L2 for low-dispersion positive power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      fl: -38.892,
      glass: "699301 — dense flint (vendor unresolved)",
      apd: "inferred",
      apdNote:
        "The manufacturer diagram marks this production position as APD; Example 3 gives no numerical partial-dispersion value.",
      role:
        "Strong negative front-group element immediately before the stop; moderates front-group power and aberrations.",
    },
    {
      id: 5,
      name: "L5f",
      label: "Element 5 — front component of L5",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -25.373,
      glass: "603380 — flint (vendor unresolved)",
      apd: false,
      cemented: "L5",
      role: "Negative member of the rear cemented doublet.",
    },
    {
      id: 6,
      name: "L5r",
      label: "Element 6 — rear component of L5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      fl: 23.106,
      glass: "883408 — high-index lanthanum glass (vendor unresolved)",
      apd: false,
      cemented: "L5",
      role: "High-index positive member of the rear cemented doublet; satisfies the patent's nd > 1.85 condition.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51633,
      vd: 64.14,
      fl: 131.437,
      glass: "516641 — borosilicate crown (vendor unresolved)",
      apd: false,
      role: "Double-sided aspherical rear positive element used for residual off-axis correction.",
    },
  ],

  /* ── Surface prescription: JP 2020-122918 A, Example 3 ── */
  surfaces: [
    { label: "1", R: 72.787, d: 4.68, nd: 1.72916, elemId: 1, sd: 25.5 },
    { label: "2", R: 196.707, d: 0.3, nd: 1.0, elemId: 0, sd: 24.8 },
    { label: "3", R: 41.103, d: 6.79, nd: 1.497, elemId: 2, sd: 24.2 },
    { label: "4", R: 77.924, d: 0.3, nd: 1.0, elemId: 0, sd: 22.2 },
    { label: "5", R: 28.177, d: 8.82, nd: 1.497, elemId: 3, sd: 22.0 },
    { label: "6", R: 55.879, d: 1.87, nd: 1.0, elemId: 0, sd: 18.2 },
    { label: "7", R: 64.799, d: 4.5, nd: 1.69895, elemId: 4, sd: 17.4 },
    { label: "8", R: 18.603, d: 8.24, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "STO", R: 1e15, d: 5.3, nd: 1.0, elemId: 0, sd: 13.28514015663278 },
    { label: "10", R: -31.569, d: 1.97, nd: 1.60342, elemId: 5, sd: 13.2 },
    { label: "11", R: 30.427, d: 8.01, nd: 1.883, elemId: 6, sd: 13.5 },
    { label: "12", R: -54.286, d: 0.48, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "13A", R: 356.22, d: 3.42, nd: 1.51633, elemId: 7, sd: 13.8 },
    { label: "14A", R: -83.563, d: 36.19, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  /* Patent equation uses the standard conic constant K; K = 0 is a spherical base conic. */
  asph: {
    "13A": {
      K: 0,
      A4: 1.22362e-6,
      A6: -4.66525e-8,
      A8: 3.7835e-10,
      A10: -7.05913e-13,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 5.36088e-6,
      A6: -4.41481e-8,
      A8: 4.15234e-10,
      A10: -8.17896e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* Rigid-unit close-focus reconstruction; all internal gaps remain fixed. */
  var: {
    "14A": [36.19, 46.29933327830486],
  },
  varLabels: [["14A", "BF"]],

  groups: [
    { text: "FRONT (101)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (102)", fromSurface: "10", toSurface: "14A" },
  ],
  doublets: [{ text: "L5", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.7,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: rigid translation of the complete optical unit on the published helicoid; the patent " +
    "gives only infinity data. The modeled rear image gap increases from 36.19 mm to 46.29933327830486 mm at the " +
    "manufacturer's 0.7 m minimum focus, with all internal spacings unchanged.",

  nominalFno: 1.54,
  fstopSeries: [1.54, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 12,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
