import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINAR 210mm f/4.5                               ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S29-2685 B, sole numerical prescription (job-card       ║
 * ║  designation: Example 1), Ryoichi Doi / Fuji Photo Film Co., Ltd.       ║
 * ║  Four elements / three groups; Tessar type; one aspherical surface.      ║
 * ║                                                                            ║
 * ║  PRESCRIPTION: Patent radii, axial spacings, and unlabeled refractive     ║
 * ║  indices N are preserved without scaling. The printed f′ = 210 mm        ║
 * ║  prescription computes to paraxial EFL = 210.946571886 mm.              ║
 * ║                                                                            ║
 * ║  ASPHERE — CONSTRAINED RECONSTRUCTION: Surface 2 is published only as   ║
 * ║  x = k·y^8, k < 0, with approximately 20 Newton rings of departure at    ║
 * ║  the outer edge of the effective aperture. The patent omits numeric k.   ║
 * ║  This model reconstructs A8 from that stated edge criterion using the     ║
 * ║  traditional reflected Newton-ring surface-height convention             ║
 * ║  (one fringe = λ/2) and the Hg green reference λ = 546.07 nm. The       ║
 * ║  effective S2 edge is independently solved by exact meridional tracing   ║
 * ║  of the ray that reaches the modeled f/4.5 physical stop edge:           ║
 * ║  y = 22.649291126 mm. This gives A8 = -7.885176251e-14 mm^-7 and       ║
 * ║  -5.460700 µm departure at that edge.                                    ║
 * ║  This coefficient is a disclosed modeling reconstruction, not a value     ║
 * ║  printed by the patent. Sodium-line sensitivity is retained in the audit. ║
 * ║                                                                            ║
 * ║  STOP MODEL: The patent gives no stop station. Figure 7 shows the         ║
 * ║  conventional Tessar group layout but no iris, so the 12.3 mm S4→S5      ║
 * ║  air gap is split at its neutral midpoint: 6.15 mm before STO and         ║
 * ║  6.15 mm after. The physical stop SD = 19.708728064 mm is solved         ║
 * ║  paraxially so the modeled entrance pupil gives exactly f/4.5.            ║
 * ║  Stop-location sensitivity within exact-trace-valid interior stations     ║
 * ║  changes reconstructed |A8| by about -1.09% to +2.66% vs the midpoint.   ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: No finite-object spacing      ║
 * ║  table or internal lens motion is published. `var` is empty and          ║
 * ║  closeFocusM = 1.0 m is only the schema-required finite UI placeholder; ║
 * ║  it is not a modeled MFD. View-camera bellows/standard translation lies ║
 * ║  outside the lens model.                                                   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: None are published. S2A is the reconstructed effective  ║
 * ║  f/4.5 edge used by the patent's 20-ring criterion. The other clear      ║
 * ║  apertures are conservative inferences from the exact wide-open axial     ║
 * ║  marginal envelope and Figure 7 proportions. Edge thickness, actual rim   ║
 * ║  slope, shared-gap intrusion, and modeled off-axis containment are        ║
 * ║  checked during extraction and with the shared surface validator.              ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL LIMIT: The patent labels each index only N and gives    ║
 * ║  no Abbe number or spectral reference. `vd`, nC, nF, ng, dPgF, and       ║
 * ║  vendor glass names are therefore not invented. `indexReference` is      ║
 * ║  intentionally omitted; the required `nd` slot stores the patent N value  ║
 * ║  for monochromatic geometric/paraxial tracing only.                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinar-210mm-f45",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINAR 210mm f/4.5",
  subtitle: "JP S29-2685 B, Example 1 — constrained A8 reconstruction from the published ~20-ring edge criterion",
  specs: ["4 ELEMENTS / 3 GROUPS", "PATENT f′ = 210 mm", "COMPUTED EFL 210.947 mm", "F/4.5", "1 ASPHERICAL SURFACE"],

  focalLengthMarketing: 210,
  focalLengthDesign: 210.94657188568956,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["large-format-lens-board"],
  patentNumber: "JP S29-2685 B",
  patentAuthors: ["Ryoichi Doi"],
  patentAssignees: ["Fuji Photo Film Co., Ltd."],
  patentYear: 1954,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.6126,
      fl: 94.67841984982043,
      glass: "Unmatched (N=1.6126; Abbe number and spectral reference not published)",
      role: "Front positive collector; its plane rear face is the deliberately eighth-order aspherical surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5783,
      fl: -64.61181654876765,
      glass: "Unmatched (N=1.5783; Abbe number and spectral reference not published)",
      role: "Air-spaced negative middle element of the Tessar-type front section.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5293,
      fl: -92.27818929622974,
      glass: "Unmatched (N=1.5293; Abbe number and spectral reference not published)",
      cemented: "D1",
      role: "Negative front component of the cemented rear positive group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6227,
      fl: 54.970937052383185,
      glass: "Unmatched (N=1.6227; Abbe number and spectral reference not published)",
      cemented: "D1",
      role: "Strong positive rear component of the cemented rear group.",
    },
  ],

  /* ── Surface prescription ──
   * Patent d values are normalized to distance after the preceding surface.
   * The original S4→S5 air gap is 12.3 mm and is preserved as 6.15 + STO + 6.15 mm.
   * S7 d is the independently computed paraxial infinity-image BFD, not a patent-published spacing.
   */
  surfaces: [
    { label: "1", R: 58.0, d: 8.4, nd: 1.6126, elemId: 1, sd: 24.0 },
    { label: "2A", R: 1e15, d: 9.6, nd: 1.0, elemId: 0, sd: 22.649291126274083 },
    { label: "3", R: -129.4, d: 3.8, nd: 1.5783, elemId: 2, sd: 21.5 },
    { label: "4", R: 53.1, d: 6.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "STO", R: 1e15, d: 6.15, nd: 1.0, elemId: 0, sd: 19.708728063871487 },
    { label: "5", R: -409.9, d: 3.2, nd: 1.5293, elemId: 3, sd: 21.5 },
    { label: "6", R: 55.6, d: 11.0, nd: 1.6227, elemId: 4, sd: 21.5 },
    { label: "7", R: -82.3, d: 184.399752680287, nd: 1.0, elemId: 0, sd: 22.0 },
  ],

  /* ── Constrained surface-2 reconstruction ── */
  asph: {
    "2A": {
      K: 0,
      A4: 0,
      A6: 0,
      A8: -7.885176251421168e-14,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2A" },
    { text: "G2 (-)", fromSurface: "3", toSurface: "4" },
    { text: "G3 (+)", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Infinity prescription only. The patent publishes no internal focus motion or minimum focus distance. The disabled 1.00 m endpoint is a placeholder; external view-camera bellows travel is not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
