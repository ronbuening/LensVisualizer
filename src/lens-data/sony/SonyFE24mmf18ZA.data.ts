import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Sony Carl Zeiss Sonnar T* E 24mm F1.8 ZA             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0033768 A1, Example 2 (Tables 4–6).         ║
 * ║  Applicant: Sony Corporation (Sunaga, Otake, Hosoi).               ║
 * ║  Modified Sonnar-type prime for APS-C E-mount.                     ║
 * ║  8 elements / 7 groups, 3 aspherical surfaces on 2 elements.       ║
 * ║  Focus: inner focus — single negative meniscus (G7 / GR2).        ║
 * ║                                                                    ║
 * ║  NOTE ON MOUNT DESIGNATION:                                        ║
 * ║    This is an E-mount APS-C lens (SEL24F18Z), not an FE            ║
 * ║    (full-frame) lens.  Filename uses "FE" per author convention.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs.  Estimated via combined marginal +    ║
 * ║    chief ray trace at f/1.85, 60% field (ω = 30.86°).             ║
 * ║    Front element constrained by 49 mm filter thread.               ║
 * ║    Cemented doublet surfaces (S8, S9) matched to common aperture.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sonnar-e-24f18-za",
  maker: "Sony",
  name: "SONY SONNAR T* E 24mm F1.8 ZA",
  subtitle: "US 2013/0033768 A1 Example 2 — Sony / Sunaga, Otake, Hosoi",
  specs: ["8 ELEMENTS / 7 GROUPS", "f ≈ 23.3 mm", "F/1.8", "2ω ≈ 61.7°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 24,
  focalLengthDesign: 23.28,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  patentYear: 2013,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.487,
      vd: 70.44,
      fl: -38.5,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front negative meniscus of GR1a wide-converter subgroup; low-dispersion fluorophosphate crown minimises chromatic load from the steeply curved rear surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "G2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.589,
      vd: 61.25,
      fl: -60.5,
      glass: "S-BAL2 (OHARA)",
      apd: false,
      role: "Second diverging element of GR1a; rear aspherical surface (S4) corrects distortion and coma from the steep G1 curvature.",
    },
    {
      id: 3,
      name: "L3",
      label: "G3",
      type: "Positive Meniscus",
      nd: 1.835,
      vd: 42.72,
      fl: 22.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strongest positive element; high-index lanthanum crown collimates the beam before the stop. Likely precision glass-molded (PGM).",
    },
    {
      id: 4,
      name: "L4",
      label: "G4",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 27.53,
      fl: -12.2,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative component of the achromatic cemented doublet (GR1b); high-dispersion titanium flint paired with ED-class G5 for primary chromatic correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "G5",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 20.3,
      glass: "PCD4 (Hoya) / S-PHM53 (OHARA)",
      apd: "inferred",
      apdNote:
        "ED-class phosphate crown with anomalous partial dispersion (νd = 63.4); designated as the ED element in Sony specifications.",
      cemented: "D1",
      role: "Positive component of the achromatic doublet; phosphate crown (ED) provides secondary-spectrum reduction when paired with the dense flint G4.",
    },
    {
      id: 6,
      name: "L6",
      label: "G6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.801,
      vd: 45.45,
      fl: 18.6,
      glass: "Unmatched (lanthanum dense crown, 801/454; likely restricted-catalog PGM formulation)",
      apd: false,
      role: "Final element of GR1; double-aspherical biconvex carries second-strongest positive power. Front asphere corrects SA, rear asphere corrects off-axis field aberrations.",
    },
    {
      id: 7,
      name: "L7",
      label: "G7",
      type: "Negative Meniscus",
      nd: 1.697,
      vd: 55.46,
      fl: -35.0,
      glass: "TAC4 (Hoya) / N-SK2 (Schott)",
      apd: false,
      role: "Sole element of GR2 (inner-focus group); lightweight single meniscus enables high-speed AF. Steep image-side curvature flips off-axis beam to shorten total length.",
    },
    {
      id: 8,
      name: "L8",
      label: "G8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 49.7,
      glass: "PCD4 (Hoya) / S-PHM53 (OHARA)",
      apd: "inferred",
      apdNote: "Same ED-class glass as G5; provides chromatic symmetry across the focus group.",
      role: "Sole element of GR3 (fixed rear relay); weak positive power converges beam toward sensor with near-telecentric exit geometry.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    // ── GR1a: before stop (G1, G2, G3) ──
    { label: "1", R: 52.254, d: 1.0, nd: 1.487, elemId: 1, sd: 12.0 },
    { label: "2", R: 13.715, d: 5.495, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "3", R: 25.387, d: 1.0, nd: 1.589, elemId: 2, sd: 11.4 },
    { label: "4A", R: 14.61, d: 3.0, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "5", R: 18.86, d: 4.197, nd: 1.835, elemId: 3, sd: 11.6 },
    { label: "6", R: 1119.73, d: 9.292, nd: 1.0, elemId: 0, sd: 10.7 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 4.238, nd: 1.0, elemId: 0, sd: 7.3 },

    // ── GR1b: after stop (G4+G5 cemented doublet, G6 double-asph) ──
    { label: "8", R: -11.656, d: 1.0, nd: 1.755, elemId: 4, sd: 8.5 },
    { label: "9", R: 45.55, d: 4.655, nd: 1.618, elemId: 5, sd: 8.5 },
    { label: "10", R: -16.688, d: 0.4, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "11A", R: 31.808, d: 5.0, nd: 1.801, elemId: 6, sd: 10.8 },
    { label: "12A", R: -26.041, d: 1.005, nd: 1.0, elemId: 0, sd: 11.0 },

    // ── GR2: focus group (G7) ──
    { label: "13", R: 138.976, d: 1.0, nd: 1.697, elemId: 7, sd: 10.8 },
    { label: "14", R: 20.701, d: 7.603, nd: 1.0, elemId: 0, sd: 10.6 },

    // ── GR3: rear relay (G8) ──
    { label: "15", R: 344.293, d: 3.74, nd: 1.618, elemId: 8, sd: 11.3 },
    { label: "16", R: -33.618, d: 22.374, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "4A": {
      K: 0,
      A4: -3.65895e-5,
      A6: -2.02766e-7,
      A8: 1.66758e-10,
      A10: -6.21785e-12,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -1.28119e-5,
      A6: 2.85341e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 2.49503e-5,
      A6: -3.18958e-8,
      A8: 2.80615e-10,
      A10: -6.64956e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ── */
  var: {
    "12A": [1.005, 5.133],
    "14": [7.603, 3.474],
  },
  varLabels: [
    ["12A", "D12"],
    ["14", "BF"],
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "GR1 (FIXED)", fromSurface: "1", toSurface: "12A" },
    { text: "GR2 (FOCUS)", fromSurface: "13", toSurface: "14" },
    { text: "GR3 (FIXED)", fromSurface: "15", toSurface: "16" },
  ],

  doublets: [{ text: "D1", fromSurface: "8", toSurface: "10" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.16,
  focusDescription: "Inner focus: single negative meniscus G7 (GR2) translates axially. Linear AF motor.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  apertureBlades: 7,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
