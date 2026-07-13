import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — OLYMPUS ZUIKO AUTO-W 28mm f/2                         ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,862,794, Embodiment 2, Table 2 / Claim 4              ║
 * ║  (Olympus Optical Co., Ltd.; Toru Fujii).                                 ║
 * ║  9 elements / 8 groups; all-spherical large-aperture retrofocus design.   ║
 * ║                                                                            ║
 * ║  PRESCRIPTION TRANSCRIPTION                                                ║
 * ║  Table 2 and Claim 4 both print d9 = 13.76. This leading digit is easy to ║
 * ║  lose in OCR and has been verified directly from the patent page images.  ║
 * ║  With d9 = 13.76, the rounded patent prescription traces to               ║
 * ║  EFL = 99.993492, consistent with the stated normalization f = 100.       ║
 * ║                                                                            ║
 * ║  SCALING                                                                   ║
 * ║  All radii and axial distances are scaled by 0.2800182233572466,          ║
 * ║  i.e. 28 / 99.99349208168377, giving an exact paraxial EFL of 28 mm.      ║
 * ║  No radius sign is altered: r12 is +223.486 in Table 2 and Claim 4.       ║
 * ║                                                                            ║
 * ║  STOP AND FOCUS IMPLEMENTATION                                             ║
 * ║  The patent does not dimension the aperture-stop coordinate or publish a  ║
 * ║  focus-motion table. STO is placed approximately 85% through d9, matching ║
 * ║  its position near L5 in FIG. 2. Its SD is solved by paraxial entrance-   ║
 * ║  pupil tracing for f/2. Olympus documents the production lens as a        ║
 * ║  floating-element design; the unknown floating trajectories are not       ║
 * ║  invented. The viewer uses a BFD-only focus surrogate to the 0.3 m MFD.   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS                                                            ║
 * ║  The patent gives no numerical clear apertures. SDs are inferred from     ║
 * ║  combined marginal/chief-ray traces and the FIG. 2 sectional drawing,     ║
 * ║  checked against rim-slope, element-ratio, positive edge-thickness, and   ║
 * ║  signed cross-gap sag-intrusion limits. The displayed off-axis fan is     ║
 * ║  off-axis fan is limited to 30% field because the f/2 design is strongly  ║
 * ║  mechanically vignetted toward the 37.5-degree image-field edge. The      ║
 * ║  rear block now follows the patent's pronounced diameter taper.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-w-28mm-f2",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-W 28mm f/2",
  subtitle: "US 3,862,794 EMBODIMENT 2 — OLYMPUS / TORU FUJII",
  specs: ["9 ELEMENTS / 8 GROUPS", "f = 28.000 mm", "F/2", "2ω = 75°", "ALL-SPHERICAL"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentYear: 1975,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ──
   * Element focal lengths are standalone in-air values at production scale.
   * L4a/L4b must not be interpreted as their in-situ powers inside the
   * cemented doublet; the r8 index step is optically significant.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.3,
      fl: 86.269,
      glass: "LACL60 class (HOYA reference 640/602; patent pair 640/603)",
      role: "Front positive collector; convex surface faces the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.50378,
      vd: 66.8,
      fl: -31.661,
      glass: "Unmatched crown (504/668; vintage or proprietary)",
      role: "Primary negative-power element in the divided front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.50378,
      vd: 66.8,
      fl: -110.123,
      glass: "Unmatched crown (504/668; vintage or proprietary)",
      role: "Weaker front negative meniscus; moderates aberrations and sets group power.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4a",
      type: "Negative Meniscus",
      nd: 1.50378,
      vd: 66.8,
      fl: -47.531,
      glass: "Unmatched crown (504/668; vintage or proprietary)",
      role: "Front member of the positive cemented L4 component.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 4b",
      type: "Plano-Convex Positive",
      nd: 1.72,
      vd: 46.0,
      fl: 26.303,
      glass: "K-LaFn11 (SUMITA; 720/460 class)",
      role: "Rear member of L4; the r8 cemented interface supplies strong positive power.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5a",
      label: "Element 5a",
      type: "Biconvex Positive",
      nd: 1.788,
      vd: 47.5,
      fl: 28.504,
      glass: "TAF4 class (HOYA reference; 788/475)",
      role: "Positive front member of the air-spaced negative L5 component.",
    },
    {
      id: 7,
      name: "L5b",
      label: "Element 5b",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      fl: -20.732,
      glass: "FD140 (HOYA; 762/266 class)",
      role: "Dense-flint negative member controlling the net L5 power and sagittal flare.",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 42.571,
      glass: "K-LaK14 (SUMITA; 697/556)",
      role: "Rear positive corrector with its convex surface toward the image.",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 53.523,
      glass: "K-LaK14 (SUMITA; 697/556)",
      role: "Final biconvex element; contributes spherical-aberration and coma balance.",
    },
  ],

  /* ── Surfaces ──
   * Label 11p corresponds to patent surface r11′.
   */
  surfaces: [
    { label: "1", R: 42.787345, d: 4.407487, nd: 1.64, elemId: 1, sd: 19.0 },
    { label: "2", R: 182.488436, d: 0.14841, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "3", R: 51.661402, d: 1.400091, nd: 1.50378, elemId: 2, sd: 13.5 },
    { label: "4", R: 12.076626, d: 3.724242, nd: 1.0, elemId: 0, sd: 10.15 },
    { label: "5", R: 22.543427, d: 2.046933, nd: 1.50378, elemId: 3, sd: 12.0 },
    { label: "6", R: 15.542131, d: 7.764905, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "7", R: 92.228202, d: 1.041668, nd: 1.50378, elemId: 4, sd: 11.0 },
    { label: "8", R: 18.937912, d: 8.848576, nd: 1.72, elemId: 5, sd: 11.0 },
    { label: "9", R: 1e15, d: 3.275093, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "STO", R: 1e15, d: 0.577958, nd: 1.0, elemId: 0, sd: 9.07617 },
    { label: "10", R: 894.489653, d: 6.095997, nd: 1.788, elemId: 6, sd: 11.0 },
    { label: "11", R: -22.970455, d: 1.282483, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "11p", R: -21.280545, d: 1.061269, nd: 1.76182, elemId: 7, sd: 10.5 },
    { label: "12", R: 62.580153, d: 1.856521, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "13", R: -65.521184, d: 2.92059, nd: 1.6968, elemId: 8, sd: 10.0 },
    { label: "14", R: -20.792753, d: 0.14841, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "15", R: 125.420442, d: 2.979394, nd: 1.6968, elemId: 9, sd: 11.5 },
    { label: "16", R: -52.559981, d: 37.682976, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  /* BFD-only surrogate; the production floating-element trajectories are unpublished. */
  var: {
    "16": [37.682976, 41.308916],
  },
  varLabels: [["16", "BF"]],
  focusDescription:
    "Production lens: floating-element manual focus. Patent data: infinity state only. Viewer: BFD-only surrogate to 0.3 m.",

  groups: [
    { text: "FRONT NEGATIVE", fromSurface: "1", toSurface: "6" },
    { text: "REAR POSITIVE", fromSurface: "7", toSurface: "16" },
  ],
  doublets: [{ text: "L4", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* Layout/ray-fan tuning for the inferred apertures. */
  scFill: 0.58,
  yScFill: 0.72,
  offAxisFieldFrac: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
