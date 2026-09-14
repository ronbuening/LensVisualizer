// This import is correct for a root-level draft. generate:metadata will rewrite it after organization.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║             LENS DATA — KONICA HEXANON AR 50mm f/1.8                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 1982-108817 A, Example 1 (Konishiroku).                 ║
 * ║  Five-group, six-element Gauss-type standard lens; all spherical.         ║
 * ║                                                                            ║
 * ║  SCALE: The patent normalizes Example 1 to f=100. All dimensional          ║
 * ║  prescription values are scaled ×0.5 for the 50mm production correlation.  ║
 * ║  Indices and Abbe numbers are unchanged. There are no aspheres.            ║
 * ║                                                                            ║
 * ║  SOURCE NUMERICS: The ten printed d rows sum to 61.070, while the patent   ║
 * ║  separately prints Σd=61.060. The row values are retained unchanged, so    ║
 * ║  the scaled S1→S11 length is 30.535 mm. The published fB=69.999 is         ║
 * ║  retained as S11→IMG = 34.9995 mm even though the scaled prescription      ║
 * ║  independently computes BFD=35.343792 mm. The computed Gaussian EFL is     ║
 * ║  50.246308 mm; marketed focal length remains 50mm.                         ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                ║
 * ║  The patent publishes one infinity state and no focus kinematics. The      ║
 * ║  production 0.55m MFD is metadata only; no variable internal gaps are      ║
 * ║  invented.                                                                 ║
 * ║                                                                            ║
 * ║  STOP MODEL: Figure 2 places the iris inside source d6 but gives no         ║
 * ║  numerical coordinate or diameter. Measurement of the rendered figure      ║
 * ║  places the stop at about 56% of the S6→S7 vertex span. The scaled 9.25mm   ║
 * ║  air gap is therefore split S6→STO=5.19 mm and STO→S7=4.06 mm.             ║
 * ║  STO.sd is the independently recomputed exact-ray f/1.8 anchor for the      ║
 * ║  current buildLens() convention; buildLens() derives the physical stop      ║
 * ║  opening from nominalFno at runtime.                                        ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes no SD table. Values are modeling      ║
 * ║  inferences constrained by exact d-line axial marginal rays, representative ║
 * ║  0.6-field bundles, the 23° source half-field / 21.3mm scaled image-height  ║
 * ║  anchor, Figure 2 silhouette proportions, positive edge thickness, actual   ║
 * ║  rim slope, shared-band gap clearance, and zero hidden render trim. The     ║
 * ║  S4→S5 air lens requires gapSagFrac=0.95; physical rim clearance remains    ║
 * ║  positive (~0.064 mm at the shared 11.42mm band).                           ║
 * ║                                                                            ║
 * ║  GLASS: The patent gives d-line nd/νd coordinates only. Six-digit labels    ║
 * ║  are supplier-neutral coordinate codes; no production glass vendor is      ║
 * ║  asserted and no catalog nC/nF/ng/dPgF values are imported.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "konica-hexanon-ar-50mm-f1-8",
  maker: "Konica",
  name: "KONICA HEXANON AR 50mm f/1.8",
  subtitle: "JP 1982-108817 A Example 1 — ×0.5 production correlation",
  specs: ["6 ELEMENTS / 5 GROUPS", "50mm", "f/1.8-f/22", "46°", "MFD 0.55m"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.246308,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1982-108817 A",
  patentAuthors: ["Ryoko Watabe", "Toshiko Shimokura"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1982,
  elementCount: 6,
  groupCount: 5,

  elements: [
    {
      id: 1,
      diagramLabel: "L1",
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.3,
      fl: 44.739749,
      glass: "670473 — supplier-neutral code (patent nd=1.67003, vd=47.3)",
      role: "Front positive meniscus; first air-separated positive group.",
    },
    {
      id: 2,
      diagramLabel: "L2",
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.2,
      fl: 64.158953,
      glass: "702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)",
      role: "Second positive meniscus; second air-separated positive group.",
    },
    {
      id: 3,
      diagramLabel: "L3",
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: -24.192419,
      glass: "728285 — supplier-neutral code (patent nd=1.72825, vd=28.5)",
      role: "Negative meniscus immediately before the aperture-stop air space.",
    },
    {
      id: 4,
      diagramLabel: "L4",
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -17.624187,
      glass: "673321 — supplier-neutral code (patent nd=1.67270, vd=32.1)",
      cemented: "D1",
      role: "Negative member of the rear cemented doublet; fl is the standalone air-bounded shape value.",
    },
    {
      id: 5,
      diagramLabel: "L5",
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      fl: 20.683805,
      glass: "720437 — supplier-neutral code (patent nd=1.72000, vd=43.7)",
      cemented: "D1",
      role: "Positive member of D1; fl is the standalone air-bounded shape value, not the cemented-group net power.",
    },
    {
      id: 6,
      diagramLabel: "L6",
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.2,
      fl: 52.107826,
      glass: "702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)",
      role: "Final positive element and fifth air-separated group.",
    },
  ],

  surfaces: [
    { label: "1", R: 26.13, d: 5.26, nd: 1.67003, elemId: 1, sd: 15.5 },
    { label: "2", R: 187.1695, d: 0.095, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "3", R: 19.791, d: 3.605, nd: 1.70154, elemId: 2, sd: 12.6 },
    { label: "4", R: 32.6695, d: 1.225, nd: 1.0, elemId: 0, sd: 11.42 },
    { label: "5", R: 72.9375, d: 1.17, nd: 1.72825, elemId: 3, sd: 11.8 },
    // Source d6 = 9.25 mm after scaling. Figure-2 stop placement is inferred: 5.19 + 4.06 mm.
    { label: "6", R: 14.0945, d: 5.19, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "STO", R: 1e15, d: 4.06, nd: 1.0, elemId: 0, sd: 9.525424 },
    { label: "7", R: -17.3285, d: 0.975, nd: 1.6727, elemId: 4, sd: 10.4 },
    // Cemented L4→L5 junction: downstream L5 owns elemId/index.
    { label: "8", R: 38.389, d: 6.135, nd: 1.72, elemId: 5, sd: 11.5 },
    { label: "9", R: -22.7035, d: 0.095, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "10", R: 99.883, d: 2.725, nd: 1.70154, elemId: 6, sd: 11.8 },
    // Published fB=69.999 scaled ×0.5; retained despite the prescription's paraxial BFD discrepancy.
    { label: "11", R: -57.009, d: 34.9995, nd: 1.0, elemId: 0, sd: 11.8 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.55,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — JP 1982-108817 A Example 1 publishes one infinity state and no focus kinematics; the production 0.55 m MFD is retained as metadata without invented internal movement.",

  nominalFno: 1.8,
  fstopSeries: [1.8, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  gapSagFrac: 0.95,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
