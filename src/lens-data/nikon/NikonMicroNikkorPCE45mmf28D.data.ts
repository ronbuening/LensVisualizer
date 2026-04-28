import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON PC-E MICRO-NIKKOR 45mm f/2.8D ED               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,656,591 B2 Example 1 (Nikon / H. Yamamoto).    ║
 * ║  Retrofocus wide-field lens for tilt-shift (PC-E) applications.    ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces (all spherical).     ║
 * ║  Focus: CRC floating (3-group), G1+G3 move as unit, G2 lags.      ║
 * ║                                                                    ║
 * ║  NOTE ON FOCAL LENGTH:                                             ║
 * ║    Patent design EFL = 41.2 mm; Nikon markets 45 mm.  No scaling  ║
 * ║    applied — prescription values used as-is from the patent.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from the        ║
 * ║    f/2.8 ray envelope, then visually tuned against Nikon's         ║
 * ║    construction diagram: dominant front pair, stepped-down middle  ║
 * ║    ED/doublet cluster, and compact rear group.  Values remain      ║
 * ║    within edge-thickness (L33 binding), cross-gap sag (≤ 90%),    ║
 * ║    and rim-slope constraints.                                      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    ✗ DO NOT include: parent/donor designs (use final design only) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-pce-micro-nikkor-45f28d",
  maker: "Nikon",
  name: "NIKON PC-E MICRO-NIKKOR 45mm f/2.8D ED",
  subtitle: "US 7,656,591 B2 EXAMPLE 1 — NIKON / H. YAMAMOTO",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "f ≈ 41.2 mm (design) · 45 mm (marketed)",
    "F/2.8",
    "2ω ≈ 72° (design image circle) · 51° (FX format)",
    "ALL SPHERICAL",
    "1 ED ELEMENT",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 45,
  focalLengthDesign: 41.2,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  patentYear: 2010,
  elementCount: 9,
  groupCount: 8,
  perspectiveControl: {
    /* Nikon Imaging lists shift +/-11.5 mm and tilt +/-8.5 deg:
     * https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/pc_pce/pce_45mmf_28ed/index.html */
    shiftRangeMm: [-11.5, 11.5],
    tiltRangeDeg: [-8.5, 8.5],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -117.6,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front negative meniscus of G1 (neg). Convex toward object. High-index lanthanum flint sets up retrofocus divergence and controls distortion across the wide field.",
      cemented: undefined,
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.75692,
      vd: 31.59,
      fl: 136.2,
      glass: "Proprietary high-dispersion lanthanum flint (757/316)",
      apd: false,
      role: "Rear positive element of G1 (neg). Partially compensates L11's negative power; high-dispersion glass provides chromatic near-doublet correction within G1.",
      cemented: undefined,
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.49782,
      vd: 82.56,
      fl: -45.3,
      glass: "Nikon ED glass (near S-FPL51 / FCD1)",
      apd: "inferred",
      apdNote:
        "ED (extra-low dispersion) glass; anomalous partial dispersion inferred from FPL51-family optical properties",
      role: "ED element and principal diverging element of the retrofocus system. Strongest negative power (|f| ≈ 45 mm ≈ system EFL). Very high νd (82.56) minimizes chromatic dispersion; anomalous PD corrects secondary spectrum.",
      cemented: undefined,
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.788,
      vd: 47.38,
      fl: 47.4,
      glass: "N-LAF21 type (Schott)",
      apd: false,
      role: "Positive element of the cemented doublet in G2 (neg). Partially counteracts L21's divergence and provides opposite chromatic sign for achromatic correction within G2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.72,
      fl: -104.9,
      glass: "Proprietary flint (567/427)",
      apd: false,
      role: "Negative element of the cemented doublet in G2 (neg). L22+L23 form a net positive doublet (f ≈ +81 mm) that corrects L21's chromatic contribution while maintaining G2's net negative character.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.38,
      fl: 42.1,
      glass: "S-PHM52Q (OHARA)",
      apd: false,
      role: "Primary converging element of G3 (pos), placed immediately before the aperture stop. Strongest positive power in the system (f ≈ 42 mm). Phosphate crown glass minimizes chromatic contribution. Patent identifies L31 as the preferred VR element.",
      cemented: undefined,
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.52,
      fl: -27.3,
      glass: "SF1 (Schott) / FD60 (HOYA)",
      apd: false,
      role: "Strongest negative element in G3 (pos). Dense flint (νd = 29.52) provides dominant negative chromatic power for axial and lateral color correction. Thickest element (9.2 mm); thick-lens effect exploited for higher-order aberration balancing. Largest single negative Petzval contribution.",
      cemented: undefined,
    },
    {
      id: 8,
      name: "L33",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.45,
      fl: 71.1,
      glass: "S-FSL5 (OHARA) / N-FK5 (Schott)",
      apd: false,
      role: "Field-flattening positive meniscus (convex toward image) in G3 (pos). High νd (70.45) corrects lateral chromatic aberration per patent conditional expression (6): 60 < ν32 < 83.",
      cemented: undefined,
    },
    {
      id: 9,
      name: "L34",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.58,
      fl: 61.2,
      glass: "S-LAH65V (OHARA) / TAF3 (HOYA)",
      apd: false,
      role: "Final optical element. High-index (1.804) allows strong positive power from gentle curvatures, minimizing higher-order aberrations. Rear-biased shape controls exit pupil location and telecentricity.",
      cemented: undefined,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (negative): L11 + L12 ──
    { label: "1", R: 49.752, d: 3.0, nd: 1.83481, elemId: 1, sd: 22.5 }, // L11 front
    { label: "2", R: 32.115, d: 5.7, nd: 1.0, elemId: 0, sd: 20.8 }, // L11 rear → air
    { label: "3", R: 130.0, d: 4.1, nd: 1.75692, elemId: 2, sd: 17.0 }, // L12 front
    { label: "4", R: -492.062, d: 1.0, nd: 1.0, elemId: 0, sd: 15.6 }, // L12 rear → air (d4 variable, G1–G2 gap)

    // ── G2 (negative): L21 (ED) + cemented L22+L23 ──
    { label: "5", R: 138.964, d: 2.4, nd: 1.49782, elemId: 3, sd: 14.2 }, // L21 front (ED)
    { label: "6", R: 19.308, d: 16.0, nd: 1.0, elemId: 0, sd: 13.4 }, // L21 rear → air
    { label: "7", R: 42.141, d: 4.6, nd: 1.788, elemId: 4, sd: 12.3 }, // L22 front
    { label: "8", R: -310.529, d: 2.4, nd: 1.56732, elemId: 5, sd: 11.8 }, // L22→L23 junction
    { label: "9", R: 73.8, d: 6.5, nd: 1.0, elemId: 0, sd: 11.8 }, // L23 rear → air (d9 variable, G2–G3 gap)

    // ── G3 (positive): L31, stop, L32, L33, L34 ──
    { label: "10", R: 80.318, d: 6.0, nd: 1.618, elemId: 6, sd: 12.8 }, // L31 front
    { label: "11", R: -37.349, d: 1.0, nd: 1.0, elemId: 0, sd: 12.2 }, // L31 rear → air
    { label: "STO", R: 1e15, d: 4.5, nd: 1.0, elemId: 0, sd: 10.3 }, // Aperture stop (9 blades, rounded)
    { label: "13", R: -28.492, d: 9.2, nd: 1.71736, elemId: 7, sd: 11.8 }, // L32 front
    { label: "14", R: 70.877, d: 1.9, nd: 1.0, elemId: 0, sd: 12.2 }, // L32 rear → air
    { label: "15", R: -95.52, d: 3.2, nd: 1.48749, elemId: 8, sd: 11.7 }, // L33 front
    { label: "16", R: -25.721, d: 0.1, nd: 1.0, elemId: 0, sd: 12.2 }, // L33 rear → air
    { label: "17", R: 270.998, d: 3.4, nd: 1.804, elemId: 9, sd: 12.4 }, // L34 front
    { label: "18", R: -59.752, d: 56.5, nd: 1.0, elemId: 0, sd: 12.8 }, // L34 rear → image (BFD)
  ],

  /* ── Aspherical coefficients (all-spherical design) ── */
  asph: {},

  /* ── Variable air spacings (CRC floating focus) ──
   *  Three variable gaps: G1–G2 (d4), G2–G3 (d9), and BFD (d18).
   *  G1 and G3 move as a mechanically linked unit (same cam/helicoid).
   *  G2 lags behind, causing d4 to widen and d9 to narrow.
   *  ΔD1 ≈ −ΔD2 ≈ 4.28 mm (patent conditional expression (3)).
   *  BFD increases at close focus due to the finite conjugate shift.
   *  Patent: d0 = 72.3 mm (object to S1), β = −0.50 at close focus.
   */
  var: {
    "4": [1.0, 5.28], // G1–G2 gap: widens upon close focus
    "9": [6.5, 2.21], // G2–G3 gap: narrows upon close focus
    "18": [56.5, 78.14], // BFD: increases due to conjugate shift
  },

  varLabels: [
    ["4", "D4"],
    ["9", "D9"],
    ["18", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (−)", fromSurface: "5", toSurface: "9" },
    { text: "G3 (+)", fromSurface: "10", toSurface: "18" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.253, // Nikon spec: 0.83 ft ≈ 0.253 m (MFD from focal plane)
  focusDescription:
    "CRC floating focus: G1+G3 move as a linked unit; G2 moves at a different rate. ΔD1 = −ΔD2 ≈ 4.28 mm. Maximum reproduction ratio 1:2 (β = −0.50).",

  /* ── Aperture configuration ── */
  nominalFno: 2.8, // Nikon marketed f/2.8 (patent design FNO = 2.89)
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
