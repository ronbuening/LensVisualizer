import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon Gyogyotto 20mm f/8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,949,588, Table 8 / eighth embodiment.           ║
 * ║  Three-element fisheye-type design: plano-concave L1 plus          ║
 * ║  cemented thick negative meniscus L2 and biconvex positive L3.     ║
 * ║  3 elements / 2 groups, all spherical.                             ║
 * ║  Focus: production lens modeled as fixed-focus. The patent notes   ║
 * ║  possible whole-lens extension or L1-only focusing, but publishes  ║
 * ║  no close-focus spacing table.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Table 8 is normalized to f = 100.000. All R, d, BFD,     ║
 * ║    stop placement, and semi-diameters are scaled ×0.20 to the      ║
 * ║    20 mm production focal-length class.                            ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    The patent states that no aperture stop is provided in the       ║
 * ║    embodiments, but that a stop may be placed just posterior to L3. ║
 * ║    The STO surface here is inserted 0.5 mm behind L3 and sized to   ║
 * ║    the patent design FNO ≈ 8.25. nominalFno remains the marketed   ║
 * ║    f/8 value.                                                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent Table 8 does not list clear apertures. SDs are inferred  ║
 * ║    conservatively from the patent figures and mechanical geometry; ║
 * ║    they preserve positive edge thickness and keep the front surface ║
 * ║    below the spherical rim limit.                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-gyogyotto-20mm-f8",
  maker: "Nikon",
  name: "Nikon Gyogyotto 20mm f/8",
  subtitle: "US 5,949,588 Table 8 — Ohshita / Shibayama",
  specs: [
    "3 elements / 2 groups",
    "f = 20.0 mm (scaled from patent f = 100)",
    "f/8 marketed; f/8.25 design",
    "2ω = 164.0° patent field",
    "all-spherical",
  ],

  focalLengthMarketing: 20,
  focalLengthDesign: 19.99985,
  apertureMarketing: 8,
  apertureDesign: 8.25,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1999,
  elementCount: 3,
  groupCount: 2,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Concave Negative",
      nd: 1.62041,
      vd: 60.14,
      fl: -32.77,
      glass: "N-SK16 / S-BSM16 class (620/601; patent νd=60.14)",
      apd: false,
      role: "Strong plano-concave front field lens; generates fisheye barrel distortion and compresses the incident field for the rear cemented group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Thick Negative Meniscus",
      nd: 1.80518,
      vd: 25.35,
      fl: -45.5,
      glass: "N-SF6 / S-TIH6 class (805/254)",
      apd: false,
      cemented: "D1",
      role: "High-index dense-flint meniscus. The front surface corrects lateral color from L1; the cemented rear surface corrects on-axis color and spherical aberration from L3.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.67025,
      vd: 57.53,
      fl: 13.34,
      glass:
        "Unmatched (Nikon patent glass, code 670/575; no current public OHARA/SCHOTT catalog match within tolerance)",
      apd: false,
      cemented: "D1",
      role: "Sole positive image-forming element; works with the L2/L3 cemented interface to form a compact corrected rear group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 1e15, d: 3.0057, nd: 1.62041, elemId: 1, sd: 18.0 },
    { label: "2", R: 20.33172, d: 50.1331, nd: 1.0, elemId: 0, sd: 17.6 },
    { label: "3", R: 22.03474, d: 13.99018, nd: 1.80518, elemId: 2, sd: 6.4 },
    { label: "4", R: 9.8628, d: 3.50666, nd: 1.67025, elemId: 3, sd: 6.2 },
    { label: "5", R: -82.29078, d: 0.5, nd: 1.0, elemId: 0, sd: 6.0 },
    // Patent examples omit a physical stop; position inferred from the patent text's "just posterior to L3" allowance.
    { label: "STO", R: 1e15, d: 39.07402, nd: 1.0, elemId: 0, sd: 2.36813 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ── */
  var: {},
  varLabels: [],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
  ],

  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Fixed-focus production lens. The patent notes optional whole-lens extension or L1-only focusing, but Table 8 provides no close-focus spacing data.",

  /* ── Aperture configuration ── */
  nominalFno: 8,
  fstopSeries: [8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
