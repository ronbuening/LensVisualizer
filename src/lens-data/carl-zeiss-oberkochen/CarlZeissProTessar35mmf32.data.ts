import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS PRO-TESSAR 35mm f/3.2             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1,089,183 Table 1 (Carl Zeiss / Dr. Günther       ║
 * ║    Lange).                                                          ║
 * ║  Interchangeable wide-angle front cell + fixed Tessar rear section  ║
 * ║    for Contaflex leaf-shutter SLR system.                           ║
 * ║  8 elements / 6 groups, all spherical.                              ║
 * ║  Focus: unit focusing (entire lens assembly moves via camera body   ║
 * ║    helical; only BFD changes).                                      ║
 * ║                                                                     ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent data normalized to f = 1.  Paraxial EFL = 1.0000.         ║
 * ║    All R, d, sd values scaled ×35.0 to 35 mm production EFL.        ║
 * ║                                                                     ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Estimated via marginal + chief ray trace at 60–100% field        ║
 * ║    (ω = 32° half-field) with 8% mechanical clearance.  Surface 3    ║
 * ║    (L_II rear) constrained by sd/|R| < 0.90 limit.  Rear cemented  ║
 * ║    doublet (L_VIII + L_IX) constrained by L_IX edge thickness.      ║
 * ║                                                                     ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    STO placed at approximate midpoint of the d₉ air gap between     ║
 * ║    L_V and L_VII, based on patent Fig. 1 "Bl" placement.  The      ║
 * ║    Synchro-Compur shutter and aperture diaphragm were housed in     ║
 * ║    the camera body at this location.                                ║
 * ║                                                                     ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and variable focus gap                          ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-pro-tessar-35f32",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS PRO-TESSAR 35mm f/3.2",
  subtitle: "DE 1,089,183 TABLE 1 — CARL ZEISS / DR. GÜNTHER LANGE",
  specs: ["8 ELEMENTS / 6 GROUPS", "f = 35.0 mm", "F/3.2", "2ω ≈ 64°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  apertureMarketing: 3.2,
  patentYear: 1960,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 (L_I)",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 28.2,
      fl: -41.7,
      glass: "SF3 (Schott)",
      apd: false,
      role: "Dense flint front element of cemented diverging doublet; chromatic balancing against L_II",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (L_II)",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.9,
      fl: -41.7,
      glass: "LaF2 (Schott)",
      apd: false,
      role: "Lanthanum flint rear element of cemented diverging doublet; strong negative power at r₃ drives quasi-retrofocus behavior",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (L_III)",
      type: "Positive Meniscus",
      nd: 1.50378,
      vd: 66.7,
      fl: 59.9,
      glass: "PK1 (Schott)",
      apd: false,
      role: "Phosphate crown positive meniscus; moderate convergence with minimal chromatic contribution",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (L_IV)",
      type: "Biconvex Positive",
      nd: 1.50378,
      vd: 66.7,
      fl: 23.1,
      glass: "PK1 (Schott)",
      apd: false,
      role: "Dominant positive power element of front cell; low-dispersion phosphate crown for chromatic control",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 (L_V)",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.9,
      fl: -68.5,
      glass: "LaF2 (Schott)",
      apd: false,
      role: "Lanthanum flint negative meniscus; chromatically corrects the L_III–L_IV positive cluster and contributes negative Petzval",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 (L_VII)",
      type: "Biconcave Negative",
      nd: 1.62536,
      vd: 35.6,
      fl: -18.4,
      glass: "F7 (Schott)",
      apd: false,
      role: "Body-mounted Tessar middle lens; strongest negative element, dominant Petzval field-flattener",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 (L_VIII)",
      type: "Negative Meniscus",
      nd: 1.54869,
      vd: 45.4,
      fl: 30.1,
      glass: "LLF7 (Schott)",
      apd: false,
      role: "Front element of body-mounted rear cemented doublet; light flint provides chromatic leverage at junction",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (L_IX)",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      fl: 30.1,
      glass: "LaK10 (Schott)",
      apd: false,
      role: "Rear element of body-mounted cemented doublet; lanthanum crown provides final convergence and chromatic correction",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // Front cell (L_I through L_V) — interchangeable Pro-Tessar unit
    { label: "1", R: 35.3728, d: 4.774, nd: 1.74, elemId: 1, sd: 18.0 }, // L_I front
    { label: "2", R: 111.8555, d: 1.241, nd: 1.744, elemId: 2, sd: 15.5 }, // L_I/L_II cemented junction
    { label: "3", R: 15.3523, d: 18.968, nd: 1.0, elemId: 0, sd: 13.5 }, // L_II rear → air
    { label: "4", R: -358.855, d: 9.548, nd: 1.50378, elemId: 3, sd: 13.5 }, // L_III front
    { label: "5", R: -28.0971, d: 2.387, nd: 1.0, elemId: 0, sd: 13.0 }, // L_III rear → air
    { label: "6", R: 19.4665, d: 9.214, nd: 1.50378, elemId: 4, sd: 12.0 }, // L_IV front
    { label: "7", R: -24.3313, d: 0.649, nd: 1.0, elemId: 0, sd: 8.5 }, // L_IV rear → air
    { label: "8", R: -23.641, d: 0.955, nd: 1.744, elemId: 5, sd: 8.0 }, // L_V front
    { label: "9", R: -44.8528, d: 0.955, nd: 1.0, elemId: 0, sd: 7.5 }, // L_V rear → air (to stop)
    // Aperture stop — STO position inferred from Fig. 1 "Bl" placement, ~50% of d₉ gap
    { label: "STO", R: 1e15, d: 0.955, nd: 1.0, elemId: 0, sd: 6.5 },
    // Body-mounted rear section (L_VII through L_IX) — fixed in Contaflex camera body
    { label: "10", R: -40.264, d: 1.289, nd: 1.62536, elemId: 6, sd: 7.0 }, // L_VII front
    { label: "11", R: 16.2613, d: 3.896, nd: 1.0, elemId: 0, sd: 7.5 }, // L_VII rear → air
    { label: "12", R: -458.315, d: 1.146, nd: 1.54869, elemId: 7, sd: 9.5 }, // L_VIII front
    { label: "13", R: 20.1798, d: 4.297, nd: 1.72, elemId: 8, sd: 9.5 }, // L_VIII/L_IX cemented junction
    { label: "14", R: -27.2998, d: 40.6, nd: 1.0, elemId: 0, sd: 9.5 }, // L_IX rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes) ── */
  var: {
    "14": [40.6, 42.02], // [BFD_infinity, BFD_close] — close focus estimated at ~0.9 m
  },

  varLabels: [["14", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT CELL", fromSurface: "1", toSurface: "9" },
    { text: "BODY REAR", fromSurface: "10", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription:
    "Unit focusing — entire lens assembly moves via camera body helical mechanism; only back focal distance changes.",

  /* ── Aperture configuration ── */
  nominalFno: 3.2,
  fstopSeries: [3.2, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
