import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Fujifilm Fujinon XF 16–80mm f/4 R OIS WR      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0166735 A1 Example 11 (Kawamura & Noda,       ║
 * ║  Fujifilm Corporation; filed 20 Nov 2019; priority JP 2018-221597,  ║
 * ║  27 Nov 2018). Published 28 May 2020.                               ║
 * ║                                                                     ║
 * ║  Positive-lead five-group zoom: G1(+) G2(−) STOP G3(+) G4(−) G5(+). ║
 * ║  16 elements in 12 groups, 8 aspherical surfaces on 4 elements       ║
 * ║  (L21, L31, L34, L53 — each double-sided aspheric).                  ║
 * ║  Focus: inner focus by G4 (cemented doublet) only.                   ║
 * ║  OIS: L34 alone translates perpendicular to the optical axis.        ║
 * ║                                                                     ║
 * ║  ZOOM VARIABLE GAPS:                                                 ║
 * ║    D5  (G1↔G2): zoom only, monotonic expansion 0.80→36.16 mm.       ║
 * ║    D13 (G2↔STOP→G3): zoom only, monotonic contraction 20.01→0.95.   ║
 * ║    D21 (G3↔G4): zoom + focus, REVERSING 2.40→3.97→2.50 mm.          ║
 * ║    D24 (G4↔G5): zoom + focus, monotonic expansion 4.01→30.21 mm.    ║
 * ║                                                                     ║
 * ║  FOCUS KINEMATICS (patent does NOT publish close-focus gaps for     ║
 * ║  Example 11). DD[21] and DD[24] carry both zoom- and focus-         ║
 * ║  dependence; DD[5] and DD[13] are zoom-only. For the close-focus    ║
 * ║  endpoints of DD[21] and DD[24], the infinity values are used (no   ║
 * ║  measurable focus travel disclosed) — this is a reasonable first    ║
 * ║  approximation pending independent close-focus measurement.         ║
 * ║                                                                     ║
 * ║  MARKETING vs. PATENT:                                              ║
 * ║    Fujifilm markets this lens as 16–80 mm f/4; the patent computes  ║
 * ║    16.497–77.751 mm at f/4.12–f/4.13. In keeping with project       ║
 * ║    convention, manufacturer-published marketed values take          ║
 * ║    precedence for `focalLengthMarketing` and `apertureMarketing`.   ║
 * ║                                                                     ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Estimated from combined marginal + vignetted-chief ray trace,    ║
 * ║    constrained by the 72 mm filter thread (L11 front SD ≤ 32 mm     ║
 * ║    mechanical clearance). Front-group elements tapered per Fig. 11  ║
 * ║    of the patent. Cross-gap sag intrusion verified ≤ 100% of gap    ║
 * ║    thickness with aspheric-aware sag at all three zoom positions.   ║
 * ║    Edge thickness ≥ 0.66 mm on all 16 elements with aspheric sag.   ║
 * ║                                                                     ║
 * ║  VERIFICATION STATUS:                                               ║
 * ║    EFL match at all three zoom positions: < 0.001 mm error.         ║
 * ║    Conditional expressions (1)-(19) of Table 34: 18 of 19 match.    ║
 * ║    Exp. (11) D45t/D45w: patent states 10.876, actual = 7.534 from   ║
 * ║    Table 32 data. Patent-column value is a transcription error      ║
 * ║    (see analysis §10 for details).                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf-16-80-f4",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16–80mm f/4 R OIS WR",
  subtitle: "US 2020/0166735 A1 Example 11 — Fujifilm / Kawamura, Noda",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "f = 16.5–77.8 mm",
    "F/4",
    "2ω = 87.2°–19.8°",
    "8 ASPHERICAL SURFACES (4 ELEMENTS)",
    "OIS: L34",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [16, 80],
  focalLengthDesign: [16.497, 77.751],
  apertureMarketing: 4,
  apertureDesign: 4.13,
  patentYear: 2020,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements (front to rear) ──
   *  16 elements total. L34 (OIS element) is the ED glass.
   *  L21, L31, L34, L53 each have BOTH surfaces aspheric (8 asph surfaces total).
   */
  elements: [
    // Front group G1 (positive) — cemented doublet L11+L12 plus separated L13
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -164.2,
      glass: "Dense short flint (847238; OHARA S-NBH53 family)",
      apd: false,
      role: "G1 front: tele-end longitudinal CA absorber; cemented to L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 110.0,
      glass: "Dense lanthanum crown (729547; OHARA S-LAM66 family)",
      apd: false,
      role: "G1 partner in achromatic front doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.53,
      fl: 119.6,
      glass: "Lanthanum crown (697555; OHARA S-LAL14 family)",
      apd: false,
      role: "G1 separated positive — extra DOF for SA at tele",
    },

    // G2 (negative, four elements — variator)
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8078,
      vd: 40.89,
      fl: -17.3,
      glass: "PGM lanthanum dense flint (808409)",
      apd: false,
      role: "Primary wide-end SA & distortion corrector; double-sided asphere",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.39,
      fl: -33.0,
      glass: "Light phosphate crown (618634; OHARA S-PHM52)",
      apd: false,
      role: "Low-dispersion negative; chromatic partner to L23",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92287,
      vd: 20.88,
      fl: 26.7,
      glass: "High-index heavy flint (923209; OHARA S-NPH53)",
      apd: "patent",
      apdNote: "θgF = 0.63943 (elevated — anomalous partial dispersion)",
      role: "Secondary-spectrum corrector in G2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84667,
      vd: 23.79,
      fl: -74.8,
      glass: "Dense short flint (847238; same family as L11)",
      apd: false,
      role: "G2 field-angle correction at wide end",
    },

    // G3 — split into G3F (L31, L32, L33) and G3R (L34)
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Pos. Biconvex (2× Asph)",
      nd: 1.68893,
      vd: 31.16,
      fl: 23.3,
      glass: "PGM glass (689312; OHARA L-TIM28 family)",
      apd: false,
      role: "G3F post-stop SA corrector; double-sided asphere",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84667,
      vd: 23.79,
      fl: -16.5,
      glass: "Dense short flint (847238; same as L11/L24)",
      apd: false,
      role: "G3F cemented doublet front — longitudinal CA corrector",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: 34.6,
      glass: "Light phosphate crown (618634; same as L22)",
      apd: false,
      role: "G3F cemented doublet rear — partner crown",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Pos. Biconvex (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      fl: 19.56,
      glass: "ED glass (497816; OHARA S-FPL51)",
      apd: "patent",
      apdNote: "θgF = 0.53859 (ED glass with anomalous partial dispersion)",
      role: "OIS element (G3R) — translates perpendicular to optical axis; dedicated secondary-spectrum corrector",
    },

    // G4 — cemented doublet focusing group (inner focus)
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.85896,
      vd: 22.73,
      fl: 51.0,
      glass: "Dense flint (859227; OHARA S-NBH58 family)",
      apd: false,
      role: "G4 focus-group positive; cemented to L42",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L42",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.59,
      fl: -20.3,
      glass: "Lanthanum flint (804396)",
      apd: false,
      role: "G4 focus-group negative; internal color correction",
      cemented: "D3",
    },

    // G5 — stationary rear group (field flattener + telecentric shaping)
    {
      id: 14,
      name: "L51",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 81.0,
      glass: "Borosilicate crown (517642; Schott N-BK7 / OHARA S-BSL7)",
      apd: false,
      role: "G5 positive; cemented to L52 (near-flat front R=399 mm)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L52",
      label: "Element 15",
      type: "Plano-Concave Negative",
      nd: 1.6935,
      vd: 53.35,
      fl: -67.2,
      glass: "Lanthanum crown (694534; HOYA E-LAC14 family)",
      apd: false,
      role: "G5 negative with FLAT rear surface; cemented to L51",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L53",
      label: "Element 16",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 76.6,
      glass: "PGM lanthanum crown (583595; HOYA M-BACD12 family)",
      apd: false,
      role: "Final field flattener; largest aspheric departures in system",
    },
  ],

  /* ── Surface prescription (31 surfaces: 29 lens + 2 cover glass excluded) ──
   *  Flat surfaces use R = 1e15 per project convention.
   *  STOP is exactly one surface (S14).
   *  DD[5], DD[13], DD[21], DD[24] are zoom-variable (see `var` block below).
   *  Cover glass (Table 31 S30-S31) is excluded from the surfaces array; its
   *  optical path is folded into BFD via the variable gap at S29.
   */
  surfaces: [
    // G1: L11 + L12 cemented doublet, L13 separated
    { label: "1", R: 128.24623, d: 1.5, nd: 1.84666, elemId: 1, sd: 31.5 }, // L11 front
    { label: "2", R: 66.354, d: 5.42, nd: 1.72916, elemId: 2, sd: 27.0 }, // L11/L12 junction (cemented)
    { label: "3", R: 370.23098, d: 0.15, nd: 1.0, elemId: 0, sd: 23.5 }, // L12 rear → air
    { label: "4", R: 60.85319, d: 4.91, nd: 1.6968, elemId: 3, sd: 22.0 }, // L13 front
    { label: "5", R: 218.25042, d: 0.8, nd: 1.0, elemId: 0, sd: 20.5 }, // L13 rear → air (DD[5] variable)

    // G2: L21 asph, L22, L23, L24
    { label: "6A", R: 294.10562, d: 2.0, nd: 1.8078, elemId: 4, sd: 12.5 }, // L21 front (asph)
    { label: "7A", R: 13.29231, d: 8.38, nd: 1.0, elemId: 0, sd: 12.4 }, // L21 rear → air (asph)
    { label: "8", R: -17.12196, d: 0.7, nd: 1.618, elemId: 5, sd: 10.5 }, // L22 front
    { label: "9", R: -108.18599, d: 0.15, nd: 1.0, elemId: 0, sd: 10.8 }, // L22 rear → air
    { label: "10", R: 89.95607, d: 3.62, nd: 1.92287, elemId: 6, sd: 10.8 }, // L23 front
    { label: "11", R: -33.23372, d: 1.45, nd: 1.0, elemId: 0, sd: 10.5 }, // L23 rear → air
    { label: "12", R: -19.01017, d: 0.7, nd: 1.84667, elemId: 7, sd: 9.8 }, // L24 front
    { label: "13", R: -27.63008, d: 20.01, nd: 1.0, elemId: 0, sd: 9.8 }, // L24 rear → air (DD[13] variable)

    // Aperture stop (position per patent Table 31 Sn=14)
    { label: "STO", R: 1e15, d: 1.1, nd: 1.0, elemId: 0, sd: 4.9 }, // aperture stop (flat)

    // G3F: L31 asph, cemented doublet L32+L33
    { label: "15A", R: 16.62717, d: 4.51, nd: 1.68893, elemId: 8, sd: 5.8 }, // L31 front (asph)
    { label: "16A", R: -416.39974, d: 1.64, nd: 1.0, elemId: 0, sd: 6.1 }, // L31 rear → air (asph)
    { label: "17", R: 50.66171, d: 0.7, nd: 1.84667, elemId: 9, sd: 6.4 }, // L32 front
    { label: "18", R: 10.881, d: 3.75, nd: 1.618, elemId: 10, sd: 6.2 }, // L32/L33 junction (cemented)
    { label: "19", R: 19.23257, d: 1.6, nd: 1.0, elemId: 0, sd: 6.7 }, // L33 rear → air

    // G3R: L34 (OIS element, ED glass, double-sided asphere)
    { label: "20A", R: 16.53927, d: 5.89, nd: 1.4971, elemId: 11, sd: 6.9 }, // L34 front (asph, ED)
    { label: "21A", R: -20.80043, d: 2.4, nd: 1.0, elemId: 0, sd: 7.3 }, // L34 rear → air (asph, DD[21] variable)

    // G4: cemented doublet focusing group
    { label: "22", R: 87.208, d: 2.0, nd: 1.85896, elemId: 12, sd: 7.8 }, // L41 front
    { label: "23", R: -87.208, d: 0.61, nd: 1.8044, elemId: 13, sd: 7.8 }, // L41/L42 junction (cemented)
    { label: "24", R: 20.15648, d: 4.01, nd: 1.0, elemId: 0, sd: 8.0 }, // L42 rear → air (DD[24] variable)

    // G5: cemented doublet L51+L52 (L52 has flat rear), then L53 asph
    { label: "25", R: 398.56925, d: 3.3, nd: 1.5168, elemId: 14, sd: 9.8 }, // L51 front
    { label: "26", R: -46.616, d: 1.2, nd: 1.6935, elemId: 15, sd: 10.3 }, // L51/L52 junction (cemented)
    { label: "27", R: 1e15, d: 0.511, nd: 1.0, elemId: 0, sd: 10.5 }, // L52 rear (FLAT) → air
    { label: "28A", R: -83.44813, d: 3.69, nd: 1.58313, elemId: 16, sd: 10.8 }, // L53 front (asph)
    { label: "29A", R: -29.56019, d: 17.494, nd: 1.0, elemId: 0, sd: 11.8 }, // L53 rear → image (asph, air-equiv BFD incl. cover glass)
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: KA = 1 + K (so KA = 1.0 → K = 0, spherical base).
   *  Z(h) = (h²/R) / [1 + √(1 − KA·(h/R)²)] + Σ Aₙ·hⁿ  for n = 3..10.
   *  The patent's A3, A5, A7, A9 terms are uniformly zero across Example 11;
   *  only A4, A6, A8, A10 are nonzero. A3 is included explicitly as 0 for clarity.
   *  Our schema uses even-order coefficients only (A4..A14); the patent's odd
   *  orders (A3=A5=A7=A9=0 for Example 11) are silently dropped. The patent's
   *  A10 maps directly to our A10. A12 and A14 are not provided by the patent
   *  and are set to 0.
   */
  asph: {
    "6A": {
      K: 0,
      A4: -2.8490089e-5,
      A6: 8.6025369e-8,
      A8: 4.6954316e-11,
      A10: -2.8828379e-13,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: -7.0282771e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -2.602637e-5,
      A6: -2.0288251e-6,
      A8: 8.9124018e-9,
      A10: 3.8219433e-11,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -5.251972e-6,
      A6: -2.8991687e-6,
      A8: 1.1490979e-8,
      A10: 1.0930036e-10,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -5.1646523e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: 3.0888509e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: 2.2349857e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: 4.5879069e-5,
      A6: 2.7031166e-7,
      A8: 4.4104943e-10,
      A10: -1.1877867e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom lens format: each value is an array of [d_inf, d_close] pairs, one per
   *  zoom position. Values from Table 32 (Example 11).
   *
   *  Close-focus endpoints: the patent does NOT publish a close-focus variable-gap
   *  table for Example 11. DD[5] and DD[13] are zoom-only (no focus travel) and so
   *  carry identical infinity/close values. DD[21] and DD[24] are zoom + focus gaps;
   *  in the absence of published close-focus values, they are set equal to the
   *  infinity values. The production lens's 0.35 m MFD implies small additional
   *  G4 travel that shifts DD[21] ↑ and DD[24] ↓ by roughly 0.3–0.8 mm at tele;
   *  these could be estimated from the patent's focus-sensitivity conditional
   *  expressions (8: (1-β4t²)·β5t² = -4.069, 19: (1-β4w²)·β5w² = -1.709) but are
   *  left as infinity-equivalent pending measurement of the shipping lens.
   */
  var: {
    "5": [
      [0.8, 0.8],
      [16.301, 16.301],
      [36.16, 36.16],
    ], // DD[5]: zoom only
    "13": [
      [20.01, 20.01],
      [6.315, 6.315],
      [0.948, 0.948],
    ], // DD[13]: zoom only
    "21A": [
      [2.4, 2.4],
      [3.974, 3.974],
      [2.502, 2.502],
    ], // DD[21]: zoom + focus (reversing); close=inf pending measurement
    "24": [
      [4.01, 4.01],
      [15.227, 15.227],
      [30.211, 30.211],
    ], // DD[24]: zoom + focus; close=inf pending measurement
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["21A", "D21"],
    ["24", "BF"],
  ],

  /* ── Zoom lens configuration ── */
  zoomPositions: [16.497, 36.533, 77.751], // design EFL at each position (wide / mid / tele)
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations (visual brackets) ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "15A", toSurface: "21A" },
    { text: "G4 (−)", fromSurface: "22", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25", toSurface: "29A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3 (focus)", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35, // Fujifilm-published minimum focus distance
  focusDescription:
    "Inner focus: G4 cemented doublet moves toward the image side to focus on closer subjects. Front element does not rotate.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
