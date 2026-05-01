import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 135mm f/1.8 L IS USM                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2023/0213745 A1 Example 4 (Nakada / Canon).      ║
 * ║  Three-unit telephoto: +L1 / −L2 (focus) / +L3 (with IS).        ║
 * ║  17 elements / 12 groups, all spherical, 5 cemented doublets.     ║
 * ║  Focus: inner focus via single negative element L2 (Nano USM).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent data is at f ≈ 130.95 mm (production marketed as        ║
 * ║    135 mm).  No scaling applied — all R, d, sd values are as      ║
 * ║    published in the patent.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs are presentation clear-aperture estimates tuned against     ║
 * ║    Canon's published construction diagram: large front positive    ║
 * ║    unit, compact post-stop focus element, and a rear group that     ║
 * ║    opens back up toward the mount while staying within renderer     ║
 * ║    edge-thickness and cross-gap limits.                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-135f18",
  maker: "Canon",
  name: "CANON RF 135mm f/1.8 L IS USM",
  subtitle: "US 2023/0213745 A1 EXAMPLE 4 — CANON / NAKADA",
  specs: ["17 ELEMENTS / 12 GROUPS", "f ≈ 130.9 mm", "F/1.86", "2ω ≈ 18.8°", "ALL SPHERICAL — 5 CEMENTED DOUBLETS"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 135,
  focalLengthDesign: 130.95,
  apertureMarketing: 1.8,
  apertureDesign: 1.86,
  patentYear: 2023,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 144.6,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "High-index front meniscus; bends steep f/1.8 marginal rays through small angles to limit surface-induced spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 170.2,
      glass: "Canon UD fluorophosphate (≈ S-FPL51)",
      apd: "inferred",
      apdNote: "UD fluorophosphate — anomalous partial dispersion below the normal line on the PgF–νd diagram.",
      role: "First UD element. Standalone low-dispersion positive; adds converging power with minimal chromatic contribution.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 121.9,
      glass: "Canon UD fluorophosphate (≈ S-FPL51)",
      apd: "inferred",
      apdNote: "UD fluorophosphate.",
      cemented: "D1",
      role: "Second UD element; crown partner in D1. Corrects LoCA while contributing positive power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.7,
      fl: -45.7,
      glass: "770297 — S-TIH18 family (OHARA)",
      apd: "inferred",
      apdNote: "S-TIH18-class titanium flint — anomalous partial dispersion above the normal line, complementary to UD partner.",
      cemented: "D1",
      role: "Flint in D1 (net negative doublet). Dominant negative power helps flatten Petzval surface; intentionally under-corrected LoCA residual for system-level balancing.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 67.8,
      glass: "Canon UD fluorophosphate (≈ S-FPL51)",
      apd: "inferred",
      apdNote: "UD fluorophosphate.",
      cemented: "D2",
      role: "Third UD element; crown in D2 (net positive). Primary achromatic power source in L1 — near-perfectly achromatic doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -194.8,
      glass: "770297 — S-TIH18 family (OHARA)",
      apd: "inferred",
      apdNote: "S-TIH18-class titanium flint — anomalous dispersion complementary to UD.",
      cemented: "D2",
      role: "Flint in D2. Corrects LoCA almost perfectly (achromatic residual ≈ 0). Biconvex/biconcave form addresses spherical aberration and coma.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Concave Negative",
      nd: 1.618,
      vd: 63.4,
      fl: -62.5,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Single-element inner focus unit (L2). Flat front surface ensures marginal ray incidence angle is focus-independent, minimizing focus-induced aberration variation. Driven by Nano USM.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: -74.8,
      glass: "N-SF66 / E-FDS1 (Schott/Ohara, 923/209)",
      apd: false,
      cemented: "D3",
      role: "Flint in D3 (L3a subunit). Very high-index (nd ≈ 1.923) negative element; concentrates power at the cemented junction while acting as dispersive counterpart.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.5,
      fl: 45.0,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Lanthanum crown in D3. Provides dominant convergent power for the rear group; high-index architecture keeps surface curvatures manageable.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 105.4,
      glass: "N-SF66 / E-FDS1 (Schott/Ohara, 923/209)",
      apd: false,
      role: "Weak positive meniscus in IS subunit L3b. High nd minimizes Petzval sum variation during IS decentration. Meniscus form limits decentered coma.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      fl: -37.0,
      glass: "911/353 — S-LAH58 family (OHARA)",
      apd: false,
      role: "Dominant negative element in IS subunit L3b. Strong divergence yields L3b net focal length ≈ −57.9 mm. N3b_ave = 1.917 satisfies patent inequality (1).",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      fl: 38.5,
      glass: "S-BSM14 / N-SK14 (OHARA / Schott)",
      apd: false,
      cemented: "D4",
      role: "Borosilicate crown in D4 (L3c subunit). Conventional glass for rear-group chromatic correction where secondary spectrum burden is lower.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -56.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D4",
      role: "Flint in D4. Same glass as L1; corrects rear-group chromatic aberration.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      fl: 42.3,
      glass: "S-NPH7 (OHARA)",
      apd: false,
      role: "Ultra-high-index (nd ≈ 2.0) positive element — strongest Petzval corrector. High nd yields Petzval contribution of φ/2.0, roughly half that of a conventional crown. Primary mechanism for field curvature control.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.9,
      fl: -31.2,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      cemented: "D5",
      role: "Inverted doublet D5: higher-νd 'crown' carries negative power. Provides divergence to counterbalance L14 and D4 convergence while maintaining chromatic correction.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 45.5,
      glass: "SF6 equivalent (Schott)",
      apd: false,
      cemented: "D5",
      role: "Inverted doublet D5: lower-νd 'flint' carries positive power. Net D5 is negative, contributing to Petzval reduction.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -115.1,
      glass: "S-BAL35 / N-SK5 (OHARA / Schott)",
      apd: false,
      role: "Rear field flattener. Weakly negative meniscus corrects residual field curvature and astigmatism; influences exit pupil telecentricity for uniform sensor illumination.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── L1 — Front positive group (Unit L1) ──
    { label: "1", R: 82.715, d: 6.98, nd: 1.84666, elemId: 1, sd: 38.2 }, // L1 front
    { label: "2", R: 245.193, d: 0.35, nd: 1.0, elemId: 0, sd: 38.2 }, // L1 rear → air
    { label: "3", R: 62.217, d: 9.16, nd: 1.497, elemId: 2, sd: 35.6 }, // L2 front
    { label: "4", R: 223.597, d: 0.55, nd: 1.0, elemId: 0, sd: 35.1 }, // L2 rear → air
    { label: "5", R: 56.551, d: 10.42, nd: 1.497, elemId: 3, sd: 28.8 }, // L3 front (D1)
    { label: "6", R: 799.841, d: 3.59, nd: 1.77047, elemId: 4, sd: 28.8 }, // L3→L4 junction (D1)
    { label: "7", R: 33.661, d: 1.89, nd: 1.0, elemId: 0, sd: 28.0 }, // L4 rear → air
    { label: "8", R: 40.413, d: 10.28, nd: 1.497, elemId: 5, sd: 21.9 }, // L5 front (D2)
    { label: "9", R: -185.049, d: 1.9, nd: 1.77047, elemId: 6, sd: 21.9 }, // L5→L6 junction (D2)
    { label: "10", R: 798.092, d: 3.38, nd: 1.0, elemId: 0, sd: 21.9 }, // L6 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 2.45, nd: 1.0, elemId: 0, sd: 18.6 }, // d11 variable

    // ── L7 — Focus unit (Unit L2) ──
    { label: "12", R: 1e15, d: 1.35, nd: 1.618, elemId: 7, sd: 18.0 }, // L7 front (flat)
    { label: "13", R: 38.615, d: 24.03, nd: 1.0, elemId: 0, sd: 17.8 }, // L7 rear → air (d13 variable)

    // ── L3a subunit: D3 ──
    { label: "14", R: 157.599, d: 1.25, nd: 1.92286, elemId: 8, sd: 16.2 }, // L8 front (D3)
    { label: "15", R: 47.803, d: 4.6, nd: 1.804, elemId: 9, sd: 16.2 }, // L8→L9 junction (D3)
    { label: "16", R: -142.411, d: 1.8, nd: 1.0, elemId: 0, sd: 16.2 }, // L9 rear → air

    // ── L3b subunit: IS unit (L10 + L11) ──
    { label: "17", R: -295.214, d: 2.08, nd: 1.92286, elemId: 10, sd: 18.0 }, // L10 front
    { label: "18", R: -73.431, d: 0.97, nd: 1.0, elemId: 0, sd: 18.0 }, // L10 rear → air
    { label: "19", R: -88.195, d: 1.0, nd: 1.91082, elemId: 11, sd: 18.4 }, // L11 front
    { label: "20", R: 54.928, d: 3.89, nd: 1.0, elemId: 0, sd: 18.4 }, // L11 rear → air

    // ── L3c subunit: rear corrector ──
    { label: "21", R: 40.006, d: 9.01, nd: 1.60311, elemId: 12, sd: 18.0 }, // L12 front (D4)
    { label: "22", R: -50.592, d: 1.5, nd: 1.84666, elemId: 13, sd: 18.0 }, // L12→L13 junction (D4)
    { label: "23", R: 797.299, d: 4.02, nd: 1.0, elemId: 0, sd: 18.0 }, // L13 rear → air
    { label: "24", R: 197.831, d: 6.5, nd: 2.00069, elemId: 14, sd: 20.0 }, // L14 front
    { label: "25", R: -52.908, d: 1.5, nd: 1.0, elemId: 0, sd: 19.4 }, // L14 rear → air
    { label: "26", R: -59.824, d: 1.6, nd: 1.65844, elemId: 15, sd: 18.2 }, // L15 front (D5)
    { label: "27", R: 31.679, d: 7.95, nd: 1.80518, elemId: 16, sd: 18.2 }, // L15→L16 junction (D5)
    { label: "28", R: 207.181, d: 8.55, nd: 1.0, elemId: 0, sd: 18.8 }, // L16 rear → air
    { label: "29", R: -28.564, d: 1.6, nd: 1.58913, elemId: 17, sd: 18.5 }, // L17 front
    { label: "30", R: -50.386, d: 12.63, nd: 1.0, elemId: 0, sd: 18.5 }, // L17 rear → image plane (BFD; cover glass modeled separately in camera body)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ── */
  var: {
    STO: [2.45, 20.66], // d11: stop → L7 (opens during close focus)
    "13": [24.03, 5.82], // d13: L7 → L3 (closes during close focus)
  },

  varLabels: [
    ["STO", "D11"],
    ["13", "D13"],
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "L2 (−)", fromSurface: "12", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "30" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Inner focus: single plano-concave element L7 (unit L2) translates 18.2 mm toward the image via Nano USM. L1 and L3 remain stationary.",

  /* ── Aperture configuration ── */
  nominalFno: 1.86,
  fstopSeries: [1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
