/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS JENA SONNAR 50mm f/2             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US Patent 1,998,704 Example I (Bertele / Zeiss Ikon) ║
 * ║  Classic Sonnar: 6 elements / 3 groups, all-spherical.             ║
 * ║  Front positive singlet, cemented triplet meniscus, cemented       ║
 * ║  doublet.  Filed 1932, granted 1935.  Prescription at f=100mm      ║
 * ║  (normalized); production lens scaled to ~50mm for 35mm format.    ║
 * ║  Focus: unit focus (entire lens translates, BFD changes).          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Values estimated via      ║
 * ║    paraxial marginal ray trace at f/2 (y₀ = 25mm) with ~10%       ║
 * ║    mechanical clearance, refined for edge-thickness and SD-ratio   ║
 * ║    validation.  Stop SD = 14.8mm (physical), yielding f/2 at the  ║
 * ║    entrance pupil via the front group magnification.               ║
 * ║                                                                    ║
 * ║  OCR CORRECTION: nd of L4 confirmed as 1.6890 (not 1.6390).       ║
 * ║    Verified by EFL convergence: 1.6890 → EFL=100.03mm (correct).  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {

  /* ── Identity ── */
  key:      "bertele-sonnar-50f2",
  name:     "CARL ZEISS JENA SONNAR 50mm f/2",
  subtitle: "US 1,998,704 EXAMPLE I — BERTELE / ZEISS IKON (1932)",
  specs: [
    "6 ELEMENTS / 3 GROUPS",
    "f = 100 mm (normalized)",
    "F/2.0",
    "2ω ≈ 46.8°",
    "ALL SPHERICAL",
  ],

  /* ── Elements ──
   *  Six elements in three groups: 1-3-2 (singlet, cemented triplet, cemented doublet).
   *  The cemented triplet (L2+L3+L4) is the signature Sonnar group.
   *  L3 is the low-index FK spacer that replaces the Ernostar air gap.
   */
  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Positive Meniscus",    nd: 1.6185, vd: 60.5, fl:  146.0, glass: "SK16 (Schott dense crown)",       apd: false, role: "Front collecting meniscus — primary positive power for the front group. Low-dispersion SK16 minimizes chromatic contribution." },
    { id: 2, name: "L2", label: "Element 2", type: "Positive Meniscus",    nd: 1.6711, vd: 47.3, fl:   76.3, glass: "BaLF5 (Schott barium light flint)", apd: false, role: "Triplet entry — strongest positive element (f=+76mm). Generates higher-order SA to balance zonal correction at f/2.", cemented: "T1" },
    { id: 3, name: "L3", label: "Element 3", type: "Biconvex Positive",    nd: 1.4645, vd: 65.7, fl:  174.1, glass: "FK3 (Schott fluorite crown)",       apd: false, role: "Low-index spacer — the key Sonnar innovation. nd=1.465 approaches cement index, creating quasi-air-space correction without reflective surfaces.", cemented: "T1" },
    { id: 4, name: "L4", label: "Element 4", type: "Biconcave Negative",   nd: 1.6890, vd: 31.2, fl:  -31.6, glass: "SF-type (Schott dense flint)",      apd: false, role: "Strongest diverging element (f=−32mm). High-dispersion flint provides chromatic correction, Petzval flattening, and coma control via the strongly curved r6 surface.", cemented: "T1" },
    { id: 5, name: "L5", label: "Element 5", type: "Negative Meniscus",    nd: 1.5647, vd: 55.8, fl:  -64.5, glass: "BaK4 (Schott barium crown)",        apd: false, role: "Rear doublet dispersing element — lower index than L6 (Δnd=0.106) per patent claim. Forms the 'collecting cemented face' with its hollow side toward the image.", cemented: "D1" },
    { id: 6, name: "L6", label: "Element 6", type: "Biconvex Positive",    nd: 1.6711, vd: 47.3, fl:   39.1, glass: "BaLF5 (Schott barium light flint)", apd: false, role: "Rear doublet collecting element — same glass as L2 for manufacturing economy. Second strongest positive element, provides principal rear-group power.", cemented: "D1" },
  ],

  /* ── Surface prescription ──
   *  Nine optical surfaces plus the aperture stop (in the 15mm air gap after r6).
   *  Stop placed ~5mm behind the triplet rear surface, per the patent drawing (Fig. 1).
   *
   *  Cemented triplet (L2+L3+L4): surfaces 3–4–5–6
   *    Surface "3" = L2 front (elemId: 2)
   *    Surface "4" = L2→L3 junction (elemId: 3, nd = L3 glass)
   *    Surface "5" = L3→L4 junction (elemId: 4, nd = L4 glass)
   *    Surface "6" = L4 rear → air (elemId: 0)
   *
   *  Cemented doublet (L5+L6): surfaces 7–8–9
   *    Surface "7" = L5 front (elemId: 5)
   *    Surface "8" = L5→L6 junction (elemId: 6, nd = L6 glass)
   *    Surface "9" = L6 rear → air (elemId: 0), d = BFD
   */
  surfaces: [
    /* ── Group 1: Front singlet (L1) ── */
    { label: "1",   R:   57.00,  d:  8.00, nd: 1.6185, elemId: 1, sd: 27.0 },  // L1 front
    { label: "2",   R:  146.30,  d:  0.40, nd: 1.0,    elemId: 0, sd: 26.0 },  // L1 rear → air

    /* ── Group 2: Cemented triplet (L2 + L3 + L4) ── */
    { label: "3",   R:   36.20,  d: 10.00, nd: 1.6711, elemId: 2, sd: 24.0 },  // L2 front
    { label: "4",   R:  110.00,  d:  6.00, nd: 1.4645, elemId: 3, sd: 21.0 },  // L2→L3 junction
    { label: "5",   R: -300.00,  d:  6.80, nd: 1.6890, elemId: 4, sd: 19.0 },  // L3→L4 junction
    { label: "6",   R:   23.70,  d:  5.00, nd: 1.0,    elemId: 0, sd: 16.5 },  // L4 rear → air

    /* ── Aperture stop (in 15mm air gap; 5mm after triplet, 10mm before doublet) ── */
    { label: "STO", R:     1e15, d: 10.00, nd: 1.0,    elemId: 0, sd: 14.8 },  // physical stop SD

    /* ── Group 3: Cemented doublet (L5 + L6) ── */
    { label: "7",   R:  200.00,  d:  2.00, nd: 1.5647, elemId: 5, sd: 14.5 },  // L5 front
    { label: "8",   R:   30.70,  d: 12.00, nd: 1.6711, elemId: 6, sd: 14.2 },  // L5→L6 junction
    { label: "9",   R: -152.64,  d: 48.37, nd: 1.0,    elemId: 0, sd: 13.0 },  // L6 rear → image (d = BFD)
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design — no aspheres in 1932.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire lens translates as a rigid assembly.
   *  Only the back focal distance (last surface to image) changes.
   *  At close focus (0.9m for production 50mm lens → 1.8m at 100mm scale):
   *    extension = f²/(d_close - f) = 100²/(900 - 100) = 12.51mm
   *    BFD_close = 48.37 + 12.51 = 60.88mm
   */
  var: {
    "9":  [48.37, 60.88],
  },

  varLabels: [
    ["9", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 — SINGLET",            fromSurface: "1",  toSurface: "2" },
    { text: "G2 — CEMENTED TRIPLET",   fromSurface: "3",  toSurface: "6" },
    { text: "G3 — CEMENTED DOUBLET",   fromSurface: "7",  toSurface: "9" },
  ],

  doublets: [
    { text: "T1 (L2+L3+L4)", fromSurface: "3", toSurface: "6" },
    { text: "D1 (L5+L6)",    fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM:       0.90,
  focusDescription:  "Unit focus — entire optical assembly translates via Contax body helicoid. No internal moving groups.",

  /* ── Aperture configuration ── */
  nominalFno:   2.0,
  maxFstop:     22,
  fstopSeries:  [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill:       0.55,
  yScFill:      0.42,
};

export default LENS_DATA;
