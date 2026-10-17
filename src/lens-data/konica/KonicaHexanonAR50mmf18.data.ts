// This import is correct for a root-level draft. generate:metadata will rewrite it after organization.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  SOURCE NUMERICS: The ten printed d rows sum to 61.050, while the patent   ║
 * ║  separately prints Σd=61.060. The row values are retained unchanged, so    ║
 * ║  the scaled S1→S11 length is 30.525 mm. The published fB=69.999 is         ║
 * ║  retained as S11→IMG = 34.9995 mm even though the scaled prescription      ║
 * ║  independently computes BFD=35.379606 mm. The computed Gaussian EFL is     ║
 * ║  50.248647 mm; marketed focal length remains 50mm.                         ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                ║
 * ║  The patent publishes one infinity state and no focus kinematics. The      ║
 * ║  production 0.55m MFD is metadata only; no variable internal gaps are      ║
 * ║  invented.                                                                 ║
 * ║                                                                            ║
 * ║  STOP MODEL: Figure 2 places the iris inside source d6 but gives no        ║
 * ║  numerical coordinate or diameter. Measurement of the rendered figure      ║
 * ║  places the stop at about 56% of the S6→S7 vertex span. The scaled 9.25mm  ║
 * ║  air gap is therefore split S6→STO=5.19 mm and STO→S7=4.06 mm. The stop    ║
 * ║  radius is derived from the design f-number, the exact-ray f/1.8 runtime   ║
 * ║  target.                                                                   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes no SD table. Values are modeling      ║
 * ║  inferences constrained by exact d-line axial marginal rays, representative ║
 * ║  0.6-field bundles, the 23° source half-field / 21.3mm scaled image-height  ║
 * ║  anchor, Figure 2 silhouette proportions, positive edge thickness, actual   ║
 * ║  rim slope, shared-band gap clearance, and zero hidden render trim. The     ║
 * ║  S4→S5 air lens requires gapSagFrac=0.96; physical rim clearance remains    ║
 * ║  positive (~0.054 mm at the shared 11.42mm band).                           ║
 * ║                                                                            ║
 * ║  GLASS: The patent gives d-line nd/νd coordinates only. Six-digit labels    ║
 * ║  are supplier-neutral coordinate codes; no production glass vendor is      ║
 * ║  asserted and no catalog nC/nF/ng/dPgF values are imported.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * 2026-09-25 source recheck: Example 1 d4 prints 2.43, not 2.45 mm;
 * corrected the half-scale gap to 1.215 mm. Source row sum is 61.050
 * versus header 61.060. Remaining EFL/Bf discrepancy is retained,
 * with runtime offset +0.380106 mm; see audit for the original scan.
 */

const LENS_DATA = {
  schema: 2,
  key: "konica-hexanon-ar-50mm-f1-8",
  maker: "Konica",
  name: "KONICA HEXANON AR 50mm f/1.8",
  subtitle: "JP 1982-108817 A Example 1 — ×0.5 production correlation",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "50mm", "f/1.8-f/22", "46°", "MFD 0.55m"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 50.248647 },
    fNumber: { marketing: 1.8, design: 1.8 },
  },

  source: {
    patentNumber: "JP 1982-108817 A",
    patentYear: 1982,
    authors: ["Ryoko Watabe", "Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.3,
      focalLengthMm: 44.739749,
      glass: "670473 — supplier-neutral code (patent nd=1.67003, vd=47.3)",
      role: "Front positive meniscus; first air-separated positive group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: 64.158953,
      glass: "702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)",
      role: "Second positive meniscus; second air-separated positive group.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -24.192419,
      glass: "728285 — supplier-neutral code (patent nd=1.72825, vd=28.5)",
      role: "Negative meniscus immediately before the aperture-stop air space.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      focalLengthMm: -17.624187,
      glass: "673321 — supplier-neutral code (patent nd=1.67270, vd=32.1)",
      role: "Negative member of the rear cemented doublet; fl is the standalone air-bounded shape value.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: 20.683805,
      glass: "720437 — supplier-neutral code (patent nd=1.72000, vd=43.7)",
      role: "Positive member of D1; fl is the standalone air-bounded shape value, not the cemented-group net power.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: 52.107826,
      glass: "702412 — supplier-neutral code (patent nd=1.70154, vd=41.2)",
      role: "Final positive element and fifth air-separated group.",
      diagramLabel: "L6",
    },
  ],

  surfaces: [
    { label: "1", R: 26.13, d: 5.26, sd: 15.5, medium: 1 },
    { label: "2", R: 187.1695, d: 0.095, sd: 15.5 },
    { label: "3", R: 19.791, d: 3.605, sd: 12.6, medium: 2 },
    { label: "4", R: 32.6695, d: 1.215, sd: 11.42 },
    { label: "5", R: 72.9375, d: 1.17, sd: 11.8, medium: 3 },
    // Source d6 = 9.25 mm after scaling. Figure-2 stop placement is inferred: 5.19 + 4.06 mm.
    { label: "6", R: 14.0945, d: 5.19, sd: 10.2 },
    { label: "STO", R: "flat", d: 4.06 },
    { label: "7", R: -17.3285, d: 0.975, sd: 10.4, medium: 4 },
    // Cemented L4→L5 junction: downstream L5 owns elemId/index.
    { label: "8", R: 38.389, d: 6.135, sd: 11.5, medium: 5 },
    { label: "9", R: -22.7035, d: 0.095, sd: 11.5 },
    { label: "10", R: 99.883, d: 2.725, sd: 11.8, medium: 6 },
    // Published fB=69.999 scaled ×0.5; retained despite the prescription's paraxial BFD discrepancy.
    { label: "11", R: -57.009, d: 34.9995, sd: 11.8 },
  ],

  focus: {
    closeFocusM: 0.55,
    description:
      "NO_INTERNAL_RECONSTRUCTION — JP 1982-108817 A Example 1 publishes one infinity state and no focus kinematics; the production 0.55 m MFD is retained as metadata without invented internal movement.",
  },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.3 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
