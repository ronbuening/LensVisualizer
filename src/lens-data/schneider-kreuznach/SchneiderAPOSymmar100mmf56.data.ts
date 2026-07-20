import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH APO-SYMMAR 5.6/100                    ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,028,720 Example 2 / Claim 5 (Wartmann & Schauss).   ║
 * ║  Quasi-symmetric Plasmat anastigmat for large-format photography.      ║
 * ║  6 elements / 4 groups, all spherical.                                 ║
 * ║  Focus: Unit focus (view camera bellows/rail).                         ║
 * ║                                                                        ║
 * ║  NOTE ON PRESCRIPTION:                                                 ║
 * ║    Patent prescription is at e-line (546.1 nm); values below are       ║
 * ║    converted to d-line (587.6 nm) via glass catalog cross-reference.   ║
 * ║    Patent scale: f' = 101.2 mm (no rescaling applied).                 ║
 * ║    Computed d-line EFL ≈ 103.0 mm; BFD ≈ 86.0 mm.                     ║
 * ║    Patent-to-computed discrepancy ~1.8%, within stated ±5% tolerance.  ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Patent does not list SDs. Estimated via marginal + chief ray trace  ║
 * ║    at ~60% field with ~8% mechanical clearance. The 1.20 mm air gaps   ║
 * ║    d3 and d7 (between doublets and meniscuses) impose severe cross-gap ║
 * ║    sag constraints, capping inner-element SDs at ≈8.5 mm. At f/5.6    ║
 * ║    the marginal ray reaches ≈9.8 mm at these surfaces, indicating     ║
 * ║    mechanical vignetting at the doublet–meniscus junctions — typical   ║
 * ║    for production Plasmat designs where the shutter bore clips the     ║
 * ║    beam at full aperture. gapSagFrac overridden to 0.95.              ║
 * ║                                                                        ║
 * ║  IMPORTANT: This file describes ONLY the optical design:               ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)       ║
 * ║    ✓ Aperture stop and variable focus gap                             ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-apo-symmar-100-f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH APO-SYMMAR 100mm f/5.6",
  subtitle: "US 6,028,720 Example 2 / Claim 5 — Wartmann & Schauss",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 103.0 mm (d-line)", "F/5.6", "2ω ≈ 72° (production, at f/22)", "ALL SPHERICAL"],

  focalLengthMarketing: 100,
  focalLengthDesign: 103.0,
  apertureMarketing: 5.6,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5" as const,
  patentNumber: "US 6,028,720",
  patentAuthors: ["Rolf Wartmann", "Udo Schauss"],
  patentAssignees: ["Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG"],
  patentYear: 2000,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 65.44,
      fl: 32.9,
      glass: "S-PHM53 (OHARA)",
      apd: "patent",
      apdNote:
        "Patent-backed APD positive doublet glass; S-PHM53 is a phosphate crown with positive anomalous partial dispersion.",
      cemented: "D1",
      role: "Outer positive element of front cemented doublet; provides strong convergence and anomalous-dispersion correction (S-PHM53), replacing the antimony-containing short flints used in earlier Symmar designs.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54739,
      vd: 53.63,
      fl: -26.8,
      glass: "N-BALF5 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Inner negative element of front cemented doublet; provides Abbe-number contrast for primary achromatic correction with near-normal partial dispersion. Lead-free barium light flint.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.52055,
      vd: 69.9,
      fl: 130.4,
      glass:
        "Unmatched (phosphate crown class, ne=1.5223, ve=69.5; no public catalog match — possible special melt or discontinued glass)",
      apd: "patent",
      apdNote:
        "Patent requires the stop-flanking positive meniscus glass to have anomalous partial dispersion; no PgF table is published.",
      role: "Front positive meniscus flanking the stop; carries primary converging power on the object side. Concave surface faces the stop — a hallmark of Plasmat geometry enabling simultaneous coma and astigmatism correction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.52855,
      vd: 76.98,
      fl: 142.0,
      glass: "529770 — N-PK51 (Schott phosphate crown; no local Sellmeier)",
      apd: "patent",
      apdNote:
        "Patent requires anomalous partial dispersion for the stop-flanking positive meniscus; N-PK51 is the principal low-dispersion corrector.",
      role: "Rear positive meniscus flanking the stop; carries primary converging power on the image side. Stronger anomalous dispersion than L3 introduces deliberate asymmetry for field-wide chromatic balance.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.54739,
      vd: 53.63,
      fl: -31.0,
      glass: "N-BALF5 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Inner negative element of rear cemented doublet; mirror-symmetric counterpart to L2. Same glass (N-BALF5), providing achromatic correction on the image side.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 65.44,
      fl: 34.8,
      glass: "S-PHM53 (OHARA)",
      apd: "patent",
      apdNote:
        "Patent-backed APD positive doublet glass; same S-PHM53 phosphate crown as L1 maintains quasi-symmetric correction.",
      cemented: "D2",
      role: "Outer positive element of rear cemented doublet; mirror-symmetric counterpart to L1. Completes the quasi-symmetric anomalous-dispersion strategy.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent radii and thicknesses from US 6,028,720 Example 2 (column 5).
   *  Refractive indices converted from patent e-line values to d-line via
   *  glass catalog cross-reference (OHARA, Schott).
   *
   *  Stop placement: centered in the d5 gap (11.38 mm total), split 5.69/5.69.
   *  This is consistent with the patent drawing (Fig. 1) showing the diaphragm
   *  centered between the two meniscuses L3 and L4.
   */
  surfaces: [
    { label: "1", R: 19.98, d: 6.09, nd: 1.60311, elemId: 1, sd: 13.5 }, // L1 front
    { label: "2", R: -2744.0, d: 1.8, nd: 1.54739, elemId: 2, sd: 12.5 }, // L1–L2 cemented junction
    { label: "3", R: 14.74, d: 1.2, nd: 1.0, elemId: 0, sd: 10.5 }, // L2 rear → air
    { label: "4", R: 23.35, d: 1.8, nd: 1.52055, elemId: 3, sd: 8.5 }, // L3 front
    { label: "5", R: 34.66, d: 5.69, nd: 1.0, elemId: 0, sd: 8.5 }, // L3 rear → air (d5 front half)
    { label: "STO", R: 1e15, d: 5.69, nd: 1.0, elemId: 0, sd: 9.2 }, // Aperture stop (d5 rear half)
    { label: "6", R: -46.19, d: 1.8, nd: 1.52855, elemId: 4, sd: 8.5 }, // L4 front
    { label: "7", R: -28.98, d: 1.2, nd: 1.0, elemId: 0, sd: 8.5 }, // L4 rear → air
    { label: "8", R: -16.28, d: 2.07, nd: 1.54739, elemId: 5, sd: 8.5 }, // L5 front
    { label: "9", R: -428.18, d: 5.2, nd: 1.60311, elemId: 6, sd: 11.0 }, // L5–L6 cemented junction
    { label: "10", R: -20.1, d: 85.97, nd: 1.0, elemId: 0, sd: 13.0 }, // L6 rear → image (BFD)
  ],

  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Large-format view camera: entire lens moves via bellows/rail.
   *  Only the back focal distance changes.
   *  Close focus at 0.5 m: BFD ≈ 112.71 mm (extension ≈ 26.74 mm).
   */
  var: {
    "10": [85.97, 112.71],
  },

  varLabels: [["10", "BF"]],

  groups: [
    { text: "G1 — Front doublet", fromSurface: "1", toSurface: "3" },
    { text: "G2 — Front meniscus", fromSurface: "4", toSurface: "5" },
    { text: "G3 — Rear meniscus", fromSurface: "6", toSurface: "7" },
    { text: "G4 — Rear doublet", fromSurface: "8", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Unit focus — entire lens moves via view camera bellows/rail. No internal focusing groups.",

  /* ── Aperture configuration ── */
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,

  /* ── Layout tuning ── */
  gapSagFrac: 0.95,
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
