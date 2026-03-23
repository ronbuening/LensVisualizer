/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKKOR Z MC 105mm f/2.8 VR S                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2022/097401 A1, Example 1 (Nikon / Kuribayashi). ║
 * ║  4-group dual inner-focus macro design, 1:1 magnification.        ║
 * ║  16 elements / 11 groups, 1 aspherical surface.                   ║
 * ║  Focus: G2 moves image-ward, G3 moves object-ward (floating).    ║
 * ║  Variable gaps: D7, D12, D13 (STO), D18.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs.  Estimated via paraxial marginal +   ║
 * ║    chief ray trace at 60% field (offAxisFieldFrac), ×1.08         ║
 * ║    mechanical clearance.  Cemented pairs matched to max SD.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-mc-105f28",
  name: "NIKON NIKKOR Z MC 105mm f/2.8 VR S",
  subtitle: "WO 2022/097401 A1 EXAMPLE 1 — NIKON / KURIBAYASHI",
  specs: ["16 ELEMENTS / 11 GROUPS", "f ≈ 102.9 mm", "F/2.89", "2ω ≈ 24.1°", "1 ASPHERICAL SURFACE"],

  /* ── Elements ── */
  elements: [
    // ── G1: Front positive group (f = +56.05 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      fl: 193.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front positive singlet — gentle initial convergence with nearly flat front surface",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      fl: -88.0,
      glass: "High-index APD flint (glass code 855252)",
      apd: "patent",
      apdNote: "θgF = 0.6103, ΔθgF = +0.0095 (patent conditions 4–6)",
      role: "Anomalous-dispersion corrector — secondary spectrum reduction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 68.8,
      glass: "S-FPM3 (OHARA)",
      apd: false,
      role: "Fluorophosphate crown — primary power carrier in L12–L13 doublet",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 102.3,
      glass: "S-FPM3 (OHARA)",
      apd: false,
      role: "Additional positive power to bring G1 to f = +56.05 mm",
    },

    // ── G2: Negative focusing group (f = −49.08 mm) ──
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5186,
      vd: 69.89,
      fl: -77.7,
      glass: "Phosphate crown (glass code 519699)",
      apd: false,
      role: "Low-index divergent singlet — negative power with minimal chromatic contribution",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.71,
      fl: -51.8,
      glass: "Lanthanum/titanium flint (glass code 720347)",
      apd: false,
      role: "Dominant negative power in G2 cemented doublet",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 83.4,
      glass: "E-FDS3HT (Hikari) or equiv.",
      apd: false,
      role: "Chromatic correction partner for L22 in moving group",
      cemented: "D2",
    },

    // ── G3: Positive focusing group (f = +52.89 mm) ──
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 90.7,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Leading positive element of G3 — mirrors G1's L11",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      fl: -65.8,
      glass: "High-index APD flint (glass code 855252)",
      apd: "patent",
      apdNote: "θgF = 0.6103, ΔθgF = +0.0095 (patent conditions 17–19)",
      role: "Second anomalous-dispersion corrector — mirrors L12 symmetrically about stop",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 42.7,
      glass: "S-FPM3 (OHARA)",
      apd: false,
      role: "Primary power carrier in L32–L33 doublet — mirrors L12–L13 pairing",
      cemented: "D3",
    },

    // ── G4: Rear negative group (f = −64.87 mm) ──
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.33,
      fl: -66.5,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Initial divergent element of G4 — extreme-index lanthanum crown",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.5186,
      vd: 69.89,
      fl: -64.1,
      glass: "Phosphate crown (glass code 519699)",
      apd: false,
      role: "Low-index negative element in L42–L43 doublet",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L43",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 138.6,
      glass: "E-FDS3HT (Hikari) or equiv.",
      apd: false,
      role: "Chromatic partner for L42",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L44",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: -57.0,
      glass: "Ultra-high-index specialty (glass code 001255, nd > 2.0)",
      apd: "inferred",
      apdNote: "Probable third ED element — no θgF in patent",
      role: "Strong negative power — highest-index element in system (nd ≈ 2.001)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L45",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.8044,
      vd: 39.61,
      fl: 29.5,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Strongest individual element (f ≈ +29.5 mm) — Petzval sum balancing",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L46",
      label: "Element 16",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.5168,
      vd: 64.14,
      fl: -116.2,
      glass: "N-BK7 (Schott) / S-BSL7 (OHARA)",
      apd: false,
      role: "Aspherical field-flattening corrector — sole asphere corrects field curvature and astigmatism",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: L11 (singlet) ──
    { label: "1", R: 1598.6404, d: 3.33, nd: 1.83481, elemId: 1, sd: 28.9 }, // L11 front
    { label: "2", R: -179.4707, d: 0.2, nd: 1.0, elemId: 0, sd: 28.9 }, // L11 rear → air
    // ── G1: L12 + L13 (cemented doublet D1) ──
    { label: "3", R: 80.9451, d: 1.2, nd: 1.85451, elemId: 2, sd: 28.5 }, // L12 front
    { label: "4", R: 38.973, d: 7.07, nd: 1.59319, elemId: 3, sd: 28.5 }, // L12→L13 junction
    { label: "5", R: 865.5813, d: 0.2, nd: 1.0, elemId: 0, sd: 28.5 }, // L13 rear → air
    // ── G1: L14 (singlet) ──
    { label: "6", R: 47.0836, d: 4.57, nd: 1.59319, elemId: 4, sd: 26.3 }, // L14 front
    { label: "7", R: 210.081, d: 3.662, nd: 1.0, elemId: 0, sd: 24.3 }, // L14 rear → air (D7, variable)

    // ── G2: L21 (singlet) ──
    { label: "8", R: -242.9579, d: 1.1, nd: 1.5186, elemId: 5, sd: 21.9 }, // L21 front
    { label: "9", R: 48.3271, d: 1.613, nd: 1.0, elemId: 0, sd: 21.5 }, // L21 rear → air
    // ── G2: L22 + L23 (cemented doublet D2) ──
    { label: "10", R: 122.3852, d: 1.1, nd: 1.72047, elemId: 6, sd: 20.9 }, // L22 front
    { label: "11", R: 28.609, d: 2.66, nd: 1.94595, elemId: 7, sd: 20.9 }, // L22→L23 junction
    { label: "12", R: 44.8866, d: 25.484, nd: 1.0, elemId: 0, sd: 20.9 }, // L23 rear → air (D12, variable)

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 24.986, nd: 1.0, elemId: 0, sd: 12.6 }, // D13 (variable)

    // ── G3: L31 (singlet) ──
    { label: "14", R: 85.768, d: 2.4, nd: 1.83481, elemId: 8, sd: 17.5 }, // L31 front
    { label: "15", R: -644.4854, d: 0.2, nd: 1.0, elemId: 0, sd: 17.4 }, // L31 rear → air
    // ── G3: L32 + L33 (cemented doublet D3) ──
    { label: "16", R: 79.2129, d: 1.1, nd: 1.85451, elemId: 9, sd: 17.4 }, // L32 front
    { label: "17", R: 32.895, d: 5.48, nd: 1.59319, elemId: 10, sd: 17.4 }, // L32→L33 junction
    { label: "18", R: -109.8711, d: 2.206, nd: 1.0, elemId: 0, sd: 17.4 }, // L33 rear → air (D18, variable)

    // ── G4: L41 (singlet) ──
    { label: "19", R: 163.4895, d: 1.1, nd: 1.95375, elemId: 11, sd: 16.6 }, // L41 front
    { label: "20", R: 45.674, d: 1.84, nd: 1.0, elemId: 0, sd: 16.4 }, // L41 rear → air
    // ── G4: L42 + L43 (cemented doublet D4) ──
    { label: "21", R: 85.0464, d: 1.1, nd: 1.5186, elemId: 12, sd: 16.5 }, // L42 front
    { label: "22", R: 23.897, d: 3.21, nd: 1.94595, elemId: 13, sd: 16.5 }, // L42→L43 junction
    { label: "23", R: 29.2234, d: 2.983, nd: 1.0, elemId: 0, sd: 16.5 }, // L43 rear → air
    // ── G4: L44 + L45 (cemented doublet D5) ──
    { label: "24", R: 34.9435, d: 1.5, nd: 2.00069, elemId: 14, sd: 16.5 }, // L44 front
    { label: "25", R: 21.6656, d: 8.8, nd: 1.8044, elemId: 15, sd: 16.5 }, // L44→L45 junction
    { label: "26", R: 250.8917, d: 21.97, nd: 1.0, elemId: 0, sd: 16.5 }, // L45 rear → air
    // ── G4: L46 (singlet, aspherical front) ──
    { label: "27A", R: -26.4605, d: 1.53, nd: 1.5168, elemId: 16, sd: 13.6 }, // L46 front (ASPHERICAL)
    { label: "28", R: -47.3182, d: 16.78, nd: 1.0, elemId: 0, sd: 13.8 }, // L46 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ──
   *  Patent equation form B uses κ in place of (1+K).
   *  κ = 1.000 → K = 0 (base is a sphere; all departure from polynomial terms).
   */
  asph: {
    "27A": {
      K: 0,
      A4: 9.61768e-6,
      A6: 1.56877e-8,
      A8: -4.92862e-11,
      A10: -1.29299e-13,
      A12: -7.4654e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating focus — 4 variable gaps) ──
   *  G2 moves image-ward (D7 opens, D12 closes).
   *  G3 moves object-ward (D13 closes, D18 opens).
   *  G1, STO, G4 are fixed relative to the image plane.
   *  Values: [d_infinity, d_close_focus (β = −1.0, 1:1 macro)].
   */
  var: {
    7: [3.662, 22.619],
    12: [25.484, 6.528],
    STO: [24.986, 4.245],
    18: [2.206, 22.947],
  },

  varLabels: [
    ["7", "D7"],
    ["12", "D12"],
    ["STO", "D13"],
    ["18", "D18"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+56.1)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−49.1)", fromSurface: "8", toSurface: "12" },
    { text: "G3 (+52.9)", fromSurface: "14", toSurface: "18" },
    { text: "G4 (−64.9)", fromSurface: "19", toSurface: "28" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.29,
  focusDescription:
    "Dual inner focus — G2 moves image-ward (+19.0 mm), G3 moves object-ward (+20.7 mm). G1, aperture stop, and G4 are fixed. Constant overall length.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.42,
};

export default LENS_DATA;
