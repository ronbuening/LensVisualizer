import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL             ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2002-090622 A, Example 2 (Table 2) (Cosina Co. Ltd). ║
 * ║  Medium telephoto apochromatic macro, positive–negative–positive.      ║
 * ║  10 elements / 9 groups, 0 aspherical surfaces.                       ║
 * ║  Focus: floating two-group inner focus (Groups 1+2 extend;            ║
 * ║         Group 3 fixed). Infinity to 1:1 macro, MFD 0.38 m.            ║
 * ║                                                                        ║
 * ║  NOTE ON SCALING:                                                      ║
 * ║    Patent at f ≈ 100 mm (design scale); all R, d, sd values scaled    ║
 * ║    ×1.25 to f ≈ 125 mm production focal length.                       ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    No SDs published in patent. Estimated from combined marginal        ║
 * ║    (f/2.53) + chief ray (60% field) trace with 8% mechanical          ║
 * ║    clearance; front group capped at 58 mm filter thread (~26 mm SD).  ║
 * ║                                                                        ║
 * ║  NOTE ON EMBODIMENT:                                                   ║
 * ║    Example 2 selected: 10 elements in 9 groups with 2× S-FPL51 ED    ║
 * ║    elements, matching production marketing ("2 ED elements").          ║
 * ║    Production spec lists "11 elements / 9 groups" — the discrepancy   ║
 * ║    (favoring Example 1's 11-element layout) is documented in the      ║
 * ║    companion analysis.                                                 ║
 * ║                                                                        ║
 * ║  NOTE ON STOP POSITION:                                                ║
 * ║    Patent does not specify the diaphragm location. STO placed in      ║
 * ║    the large air gap between L43 and L44 (between the positive ED     ║
 * ║    front group and the negative flint corrector), inferred from       ║
 * ║    Fig. 5 element spacing and typical Ernostar/Sonnar macro topology. ║
 * ║                                                                        ║
 * ║  IMPORTANT: This file describes ONLY the optical design:               ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)       ║
 * ║    ✓ Aperture stop and variable focus gaps                            ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-macro-apo-lanthar-125-f25",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL",
  subtitle: "JP 2002-090622 A Example 2 — Cosina / Aida Yoshihisa",
  specs: ["10 ELEMENTS / 9 GROUPS", "f = 125.0 mm", "F/2.5", "2ω ≈ 19.6°", "ALL-SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 125,
  focalLengthDesign: 125.0,
  apertureMarketing: 2.5,
  apertureDesign: 2.53,
  lensMounts: ["nikon-f","canon-fd","m42","pentax-k","minolta-sr","olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2002-090622 A",
  patentAuthors: ["Yoshihisa Yomogida"],
  patentAssignees: ["Cosina Co Ltd"],
  patentYear: 2002,
  elementCount: 10,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L41",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: 390.3,
      glass: "FK5 (Schott) / K-FK5 (Sumita)",
      apd: false,
      role: "Weakly positive front collector; begins converging the incoming beam with minimal spherical aberration contribution.",
    },
    {
      id: 2,
      name: "L42",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 161.8,
      glass: "S-FPL51 (OHARA) / K-FPL51 (Sumita)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.032 (OHARA catalog value for S-FPL51)",
      dPgF: 0.032,
      role: "First ED element; provides anomalous partial dispersion for secondary-spectrum correction.",
    },
    {
      id: 3,
      name: "L43",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 150.6,
      glass: "S-FPL51 (OHARA) / K-FPL51 (Sumita)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.032 (OHARA catalog value for S-FPL51)",
      dPgF: 0.032,
      role: "Second ED element; splits primary chromatic correction with L42 across separated surfaces for better higher-order control.",
    },
    {
      id: 4,
      name: "L44",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      fl: -55.7,
      glass: "E-FD5 (HOYA, patent nd/vd match) / SF5-class dense flint",
      apd: false,
      role: "Primary flint corrector; strongest negative element in Group 1, achromatizes the ED front trio.",
    },
    {
      id: 5,
      name: "L45",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.67003,
      vd: 47.2,
      fl: -66.8,
      glass: "N-BAF10 (Schott) / K-BAF10 (Sumita)",
      apd: false,
      cemented: "D1",
      role: "Front element of cemented doublet; corrects coma and oblique spherical aberration.",
    },
    {
      id: 6,
      name: "L46",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.3,
      fl: 81.7,
      glass: "S-LAH60 (OHARA) / K-LASH60 (Sumita)",
      apd: false,
      cemented: "D1",
      role: "Rear element of cemented doublet; highest-index element (nd = 1.834) controls curvatures for higher-order monochromatic correction.",
    },
    {
      id: 7,
      name: "L47",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.3,
      fl: 57.6,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Closing element of Group 1; strongest positive element, sets the exit cone angle and controls coma at Group 1 exit.",
    },
    {
      id: 8,
      name: "L51",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -138.7,
      glass: "S-BSL7 (OHARA) / K-BK7 (Sumita)",
      apd: false,
      role: "Sole element of Group 2; floating-focus field compensator, chromatically neutral (BK7 class) to preserve apochromatic correction across focus range.",
    },
    {
      id: 9,
      name: "L61",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -55.2,
      glass: "S-BSL7 (OHARA) / K-BK7 (Sumita)",
      apd: false,
      role: "Front element of fixed Group 3; provides overcorrected Petzval contribution to flatten the field.",
    },
    {
      id: 10,
      name: "L62",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 53.3,
      glass: "S-LAL8 (OHARA) / K-LaL8 (Sumita)",
      apd: false,
      role: "Final element; lanthanum crown relay that sets the back focal distance geometry and maintains secondary-spectrum correction at the image end.",
    },
  ],

  /* ── Surface prescription ──
   *  Production scale (×1.25 from patent design scale).
   *  Patent: JP 2002-090622 A, Table 2 (Example 2, 第2実施形態).
   *  STO placed in the L43–L44 air gap (between surfaces 6 and 7 of the patent).
   *  Cover glass excluded; BFD is air-equivalent to image plane.
   */
  surfaces: [
    // Group 1 — front positive group (7 elements)
    { label: "1", R: 139.114, d: 3.5125, nd: 1.48749, elemId: 1, sd: 26.0 }, // L41 front
    { label: "2", R: 513.216, d: 0.2, nd: 1.0, elemId: 0, sd: 25.5 }, // L41 rear → air
    { label: "3", R: 60.545, d: 6.15, nd: 1.497, elemId: 2, sd: 25.0 }, // L42 front
    { label: "4", R: 236.643, d: 0.2, nd: 1.0, elemId: 0, sd: 24.5 }, // L42 rear → air
    { label: "5", R: 53.679, d: 6.35, nd: 1.497, elemId: 3, sd: 24.0 }, // L43 front
    { label: "6", R: 182.234, d: 10.8, nd: 1.0, elemId: 0, sd: 22.0 }, // L43 rear → air (trimmed for STO)
    { label: "STO", R: 1e15, d: 0.625, nd: 1.0, elemId: 0, sd: 17.75 }, // Aperture stop (inferred from Fig. 5)
    { label: "7", R: -2216.079, d: 5.75, nd: 1.6727, elemId: 4, sd: 17.5 }, // L44 front
    { label: "8", R: 38.164, d: 3.725, nd: 1.0, elemId: 0, sd: 16.5 }, // L44 rear → air
    { label: "9", R: 49.248, d: 2.2125, nd: 1.67003, elemId: 5, sd: 16.0 }, // L45 front (cemented D1)
    { label: "10", R: 23.034, d: 5.525, nd: 1.834, elemId: 6, sd: 15.5 }, // L45→L46 junction — elemId: 6
    { label: "11", R: 31.005, d: 4.625, nd: 1.0, elemId: 0, sd: 15.0 }, // L46 rear → air
    { label: "12", R: 42.593, d: 5.125, nd: 1.58913, elemId: 7, sd: 14.5 }, // L47 front
    { label: "13", R: -160.005, d: 4.95, nd: 1.0, elemId: 0, sd: 14.0 }, // L47 rear → air (var D13)

    // Group 2 — floating focus compensator (1 element)
    { label: "14", R: 63.505, d: 3.475, nd: 1.5168, elemId: 8, sd: 12.5 }, // L51 front
    { label: "15", R: 33.044, d: 6.0375, nd: 1.0, elemId: 0, sd: 12.0 }, // L51 rear → air (var D15)

    // Group 3 — fixed rear relay (2 elements)
    { label: "16", R: -64.485, d: 1.4875, nd: 1.5168, elemId: 9, sd: 11.5 }, // L61 front
    { label: "17", R: 51.48, d: 7.4375, nd: 1.0, elemId: 0, sd: 11.5 }, // L61 rear → air
    { label: "18", R: 68.141, d: 5.625, nd: 1.713, elemId: 10, sd: 13.0 }, // L62 front
    { label: "19", R: -83.065, d: 46.662, nd: 1.0, elemId: 0, sd: 13.5 }, // L62 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (floating two-group inner focus) ──
   *  Groups 1 and 2 extend forward; Group 3 is fixed.
   *  D13: Group 1 rear → Group 2 front (dominant extension, +61.0 mm travel at ×1.25)
   *  D15: Group 2 rear → Group 3 front (differential compensator, +6.7 mm travel)
   *  Close focus values at 1:1 magnification (MFD = 0.38 m).
   */
  var: {
    "13": [4.95, 65.975],
    "15": [6.0375, 12.775],
  },
  varLabels: [
    ["13", "D13"],
    ["15", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GROUP 1 (40)", fromSurface: "1", toSurface: "13" },
    { text: "GROUP 2 (50)", fromSurface: "14", toSurface: "15" },
    { text: "GROUP 3 (60)", fromSurface: "16", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.38,
  focusDescription:
    "Floating two-group inner focus. Groups 1 and 2 extend forward on a helicoid; Group 3 fixed. Manual focus, no AF motor. 9 rounded aperture blades.",

  /* ── Aperture configuration ── */
  nominalFno: 2.5,
  fstopSeries: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
