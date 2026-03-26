import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKKOR-N Auto 24mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,622,227 Example I (Nippon Kogaku / Shimizu).    ║
 * ║  Retrofocus wide-angle with Close-Range Correction (CRC).          ║
 * ║  9 elements / 7 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: CRC floating-element — d₁₁ narrows, BFD increases.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=1.0; all R, d, sd values scaled ×24.0 to            ║
 * ║    f≈24mm production focal length.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from:                       ║
 * ║    (1) 52mm production filter thread → front SD ~23.5mm            ║
 * ║    (2) Paraxial marginal ray trace scaled to f/2.8                 ║
 * ║    (3) Smooth taper toward stop, growth toward image               ║
 * ║    (4) All three auto-validated constraints satisfied              ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAPS:                                            ║
 * ║    Close-focus values are ESTIMATES. The patent provides only      ║
 * ║    infinity-focus data. CRC gap decrease and BFD increase are      ║
 * ║    estimated to produce a net extension of f²/(s−f) ≈ 2.09mm      ║
 * ║    at s = 0.3m, consistent with production close-focus distance.   ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent states stop is "behind lenses L₄ and L₅." FIG. 1 shows  ║
 * ║    the iris in the d₉ air gap (between L5 rear and L6 front).     ║
 * ║    Stop placed at the midpoint of d₉, splitting it 50/50.         ║
 * ║                                                                    ║
 * ║  SIGN CORRECTIONS (3 surfaces):                                    ║
 * ║    r₅:  patent ambiguous → +1.2500 (L3 meniscus convex→obj)       ║
 * ║    r₆:  patent ambiguous → +0.4583 (L3 meniscus convex→obj)       ║
 * ║    r₁₃: patent ambiguous → +1.1729 (L7 negative, L8 positive)     ║
 * ║    All verified against patent conditions (1)–(4).                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-24f28",
  maker: "Nikon",
  name: "NIKON NIKKOR-N Auto 24mm f/2.8",
  subtitle: "US 3,622,227 Example I — Nippon Kogaku / Yoshiyuki Shimizu",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 24.0 mm", "F/2.8", "2ω ≈ 84°", "ALL SPHERICAL"],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  patentYear: 1971,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ──
   *  9 elements, front to rear. Five glass types.
   *  L4+L5 cemented (doublet D1), L7+L8 cemented (doublet D2).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -54.0,
      glass: "SK16 (Schott) / S-BSM16 (Ohara)",
      apd: false,
      role: "Front negative meniscus (convex→obj). Establishes retrofocus divergence; patent cites L1's negative crown power as primary chromatic correction contributor.",
    },

    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 72.5,
      glass: "SK16 (Schott) / S-BSM16 (Ohara)",
      apd: false,
      role: "Symmetric biconvex (r₃ = −r₄). Weak positive power partially offsets front group's negative power; symmetric shape minimizes coma contribution.",
    },

    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -28.0,
      glass: "SK16 (Schott) / S-BSM16 (Ohara)",
      apd: false,
      role: "Strongly negative meniscus (convex→obj). Tightest radius in front group (r₆). Condition (2) governs r₆ for internal coma correction of oblique rays.",
    },

    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      fl: 17.3,
      glass: "F2 (Schott) / S-TIM2 (Ohara)",
      cemented: "D1",
      apd: false,
      role: "Strongest positive element. Flint glass in positive role (reversed from standard achromat). Cemented with L5; nd near-match with SK16 (Δnd=0.00037) neutralizes Petzval at junction.",
    },

    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 59.0,
      fl: -76.7,
      glass: "BSC3 (Hoya) / historical crown equivalent",
      cemented: "D1",
      apd: false,
      role: "Completes first cemented doublet. Large Δn at junction (0.102) provides dispersive correction. Low-index crown in negative role.",
    },

    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -29.9,
      glass: "SF56A (Schott) / S-TIH6 (Ohara)",
      apd: false,
      role: "Central corrector of reversed Tessar. Condition (1) centers it between positive subgroups; Condition (3) governs bending (|r₁₀|>|r₁₁|) for internal coma. Near stop → minimal astigmatism contribution.",
    },

    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -29.1,
      glass: "SF56A (Schott) / S-TIH6 (Ohara)",
      cemented: "D2",
      apd: false,
      role: "Negative half of second cemented doublet. Condition (4) governs junction r₁₃: (n₈−n₇)/r₁₃ < 0 for Petzval and coma correction.",
    },

    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 18.8,
      glass: "SK16 (Schott) / S-BSM16 (Ohara)",
      cemented: "D2",
      apd: false,
      role: "Positive half of second cemented doublet. Large Δn at junction (0.164). D2 overall is meniscus concave toward object.",
    },

    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 50.4,
      glass: "LAF2 (Schott) / S-LAM2 (Ohara)",
      apd: false,
      role: "Final element. Asymmetric biconvex — weak front, strong rear. Lanthanum flint provides high power with moderate dispersion. Field-flattening and final convergence to f=24mm.",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled ×24.0 from patent (f=1.0 → f≈24mm).
   *  Stop inserted in d₉ gap at midpoint (inferred from FIG. 1).
   *  Three sign corrections applied: r₅, r₆, r₁₃ (see header).
   */
  surfaces: [
    // ── Front group (negative): L1, L2, L3 ──
    { label: "1", R: 60.0, d: 2.7, nd: 1.62041, elemId: 1, sd: 23.5 }, // L1 front
    { label: "2", R: 21.499, d: 6.3, nd: 1.0, elemId: 0, sd: 19.0 }, // L1 rear → air
    { label: "3", R: 90.0, d: 5.501, nd: 1.62041, elemId: 2, sd: 16.0 }, // L2 front
    { label: "4", R: -90.0, d: 0.101, nd: 1.0, elemId: 0, sd: 14.5 }, // L2 rear → air
    { label: "5", R: 30.0, d: 2.7, nd: 1.62041, elemId: 3, sd: 12.0 }, // L3 front  [sign corrected: +]
    { label: "6", R: 10.999, d: 9.799, nd: 1.0, elemId: 0, sd: 9.8 }, // L3 rear → air  [sign corrected: +]

    // ── Rear group (positive): D1(L4+L5), L6, D2(L7+L8), L9 ──
    { label: "7", R: 25.25, d: 4.001, nd: 1.62004, elemId: 4, sd: 8.5 }, // L4 front (D1)
    { label: "8", R: -18.581, d: 3.0, nd: 1.51823, elemId: 5, sd: 8.0 }, // L4→L5 junction (D1)
    { label: "9", R: -34.901, d: 1.25, nd: 1.0, elemId: 0, sd: 7.5 }, // L5 rear → air

    // ── Aperture stop — STO position inferred from FIG. 1, midpoint of d₉ ──
    { label: "STO", R: 1e15, d: 1.25, nd: 1.0, elemId: 0, sd: 6.3 },

    { label: "10", R: -85.001, d: 5.299, nd: 1.7847, elemId: 6, sd: 7.5 }, // L6 front
    { label: "11", R: 32.4, d: 2.35, nd: 1.0, elemId: 0, sd: 8.0 }, // L6 rear → air  [CRC variable gap]
    { label: "12", R: -120.0, d: 1.001, nd: 1.7847, elemId: 7, sd: 8.5 }, // L7 front (D2)
    { label: "13", R: 28.15, d: 5.4, nd: 1.62041, elemId: 8, sd: 8.5 }, // L7→L8 junction (D2)  [sign corrected: +]
    { label: "14", R: -19.999, d: 0.101, nd: 1.0, elemId: 0, sd: 9.0 }, // L8 rear → air
    { label: "15", R: 192.0, d: 3.499, nd: 1.744, elemId: 9, sd: 10.0 }, // L9 front
    { label: "16", R: -46.615, d: 37.433, nd: 1.0, elemId: 0, sd: 12.0 }, // L9 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {}, // All-spherical design

  /* ── Variable air spacings (CRC focus) ──
   *  CRC system: d₁₁ (L6–L7 gap) narrows at close focus,
   *  BFD (d₁₆) increases correspondingly.
   *  Close-focus values are ESTIMATES — patent provides infinity only.
   *  Net extension matches f²/(s−f) = 2.09mm at s=0.3m.
   */
  var: {
    11: [2.35, 1.65], // CRC gap: narrows at close focus (estimated)
    16: [37.433, 40.223], // BFD: increases at close focus (estimated)
  },

  varLabels: [
    ["11", "CRC"],
    ["16", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (neg.)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (pos.)", fromSurface: "7", toSurface: "16" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" }, // L4+L5 cemented
    { text: "D2", fromSurface: "12", toSurface: "14" }, // L7+L8 cemented
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "CRC (Close-Range Correction): L6–L7 gap narrows during close focusing, compensating retrofocus astigmatism. First production CRC lens (1967).",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ──
   *  Retrofocus lenses have large front elements and long BFD.
   *  scFill and yScFill tuned for this aspect ratio.
   */
  scFill: 0.55,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
