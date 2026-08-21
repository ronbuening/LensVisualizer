import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — NIKON AI NIKKOR 600mm f/5.6 IF-ED                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1981-035116 Example 1, Nippon Kogaku K.K.          ║
 * ║  Production correlation: Nikon AI Nikkor 600mm f/5.6 IF-ED.       ║
 * ║  7 elements / 6 air-separated groups; all spherical.              ║
 * ║                                                                    ║
 * ║  SCALE: the patent is normalized to f=100. All dimensional        ║
 * ║  prescription values are scaled ×6 to the 600 mm production       ║
 * ║  model. There are no aspheric coefficients to transform.          ║
 * ║                                                                    ║
 * ║  SOURCE CORRECTION: Example 1 prints n7=1.57, νd=70.1. Literal    ║
 * ║  tracing gives EFL=91.198 and G3 EFL=36.481 patent units.          ║
 * ║  Independent full-system and isolated-G3 solves both require       ║
 * ║  n7≈1.52; this model therefore uses n7=1.52. The discrepancy       ║
 * ║  remains explicitly documented here rather than silently fixed.    ║
 * ║                                                                    ║
 * ║  FOCUS: CONSTRAINED_RECONSTRUCTION. The patent publishes a        ║
 * ║  1.334-unit imageward G2 movement with equal/opposite d6 and d11    ║
 * ║  changes. At 6× scale that published state is not the production   ║
 * ║  5.5 m endpoint, so 5.5 m is solved with the same one degree of     ║
 * ║  freedom and exact adjacent-gap conservation:                      ║
 * ║  G2 travel = 10.425804222 mm.                                     ║
 * ║                                                                    ║
 * ║  STOP: the patent does not publish an aperture-stop plane. A       ║
 * ║  fixed STO is inferred at the midpoint of the long d6 air space    ║
 * ║  shown in Fig. 1. The original 97.530 mm infinity gap is split     ║
 * ║  48.765 + 48.765 mm. Its physical semi-diameter is calibrated      ║
 * ║  from the actual front-group pupil magnification to reproduce      ║
 * ║  modeled F/5.6 (STO sd = 34.849083134 mm). The stop remains fixed; ║
 * ║  the movable G2 therefore changes STO→S7 and S11→S12.             ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: the patent does not tabulate clear apertures.     ║
 * ║  SDs are derived from full-field marginal/chief-ray envelopes at  ║
 * ║  infinity and at the reconstructed 5.5 m endpoint, then rounded    ║
 * ║  upward while keeping common physical element faces equal. The     ║
 * ║  116 mm front clear diameter remains below the manufacturer's      ║
 * ║  122 mm front attachment size.                                    ║
 * ║                                                                    ║
 * ║  SPECTRAL DATA: the patent publishes nd/νd only. nC, nF, ng, and  ║
 * ║  dPgF are intentionally omitted rather than synthesized. Qualified ║
 * ║  catalog-equivalent curves are proxies, not production identities. ║
 * ║                                                                    ║
 * ║  Excluded: filters, protective plates, dummy planes, and           ║
 * ║  mechanical parts.                                                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references used only for product identity/marketing/mechanics:
 * - Nikon, NIKKOR — The Thousand and One Nights No.66:
 *   https://imaging.nikon.com/imaging/information/story/0066/
 * - Nikon Camera Chronicle, AI system / F-mount compatibility:
 *   https://imaging.nikon.com/imaging/information/chronicle/history-f3/index.html
 * - Nikon Nikkor 600mm f/5.6 IF-ED brochure scan (manufacturer-authored):
 *   https://www.pacificrimcamera.com/rl/00594/00594.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-nikkor-600mm-f56-if-ed",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 600mm f/5.6 IF-ED",
  subtitle: "JP1981-035116 Example 1 — Nippon Kogaku K.K. / Nakamura & Arashida",
  specs: ["7 ELEMENTS / 6 GROUPS", "600mm f/5.6", "4°10′", "INTERNAL FOCUS", "5.5 m MFD"],

  focalLengthMarketing: 600,
  focalLengthDesign: 599.981160791,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1981-035116",
  patentAuthors: ["Soichi Nakamura", "Kazuo Arashida"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1981,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "L1 — ED",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      fl: 253.734049056,
      glass: "J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED-position assignment inferred from Nikon's product designation and the two identical 1.50032/81.9 front elements; the patent publishes nd/νd only.",
      role: "Front positive collector; one of the two equal high-Abbe front elements.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "L2 — ED",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      fl: 253.426115406,
      glass: "J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED-position assignment inferred from Nikon's product designation and the two identical 1.50032/81.9 front elements; the patent publishes nd/νd only.",
      role: "Second front positive collector; paired with L1 in the positive first functional group.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35,
      fl: -265.549196172,
      glass: "H-LaF4 catalog equivalent (patent 750350; production supplier unspecified)",
      role: "Negative member completing the positive first functional group.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30,
      fl: 168.43272897,
      glass: "SF15 catalog equivalent (patent 699300; production supplier unspecified)",
      cemented: "D1",
      role: "Front member of the cemented pair inside the movable negative focusing group.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -119.42285007,
      glass: "H-K9L catalog equivalent (patent 517642; production supplier unspecified)",
      cemented: "D1",
      role: "Negative rear member of the cemented pair in the movable focusing group.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      fl: -120.601276704,
      glass: "K-LaK14 catalog equivalent (patent 697556; production supplier unspecified)",
      role: "Rear negative element of the movable second functional group.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 70.1,
      fl: 240.004334622,
      glass: "J-PKH1 catalog equivalent (corrected patent nd≈1.52, vd=70.1; production supplier unspecified)",
      role: "Fixed positive third functional group; model uses corrected nd=1.52 (patent prints 1.57).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 179.268, d: 14.502, nd: 1.50032, elemId: 1, sd: 58 },
    { label: "2", R: -423.24, d: 0.3, nd: 1, elemId: 0, sd: 58 },
    { label: "3", R: 171.252, d: 14.1, nd: 1.50032, elemId: 2, sd: 56 },
    { label: "4", R: -475.002, d: 3.102, nd: 1, elemId: 0, sd: 56 },
    { label: "5", R: -360, d: 4.998, nd: 1.7495, elemId: 3, sd: 50.5 },
    { label: "6", R: 447.762, d: 48.765, nd: 1, elemId: 0, sd: 50.5 },
    // STO position is a modeling inference: midpoint of the patent's d6 air gap at infinity.
    { label: "STO", R: 1e15, d: 48.765, nd: 1, elemId: 0, sd: 34.849083134 },
    { label: "7", R: -171.468, d: 6.498, nd: 1.69895, elemId: 4, sd: 26.5 },
    // Cemented L4→L5 interface: downstream element L5 owns elemId 5 and nd 1.5168.
    { label: "8", R: -70.89, d: 2.298, nd: 1.5168, elemId: 5, sd: 26.5 },
    { label: "9", R: 482.268, d: 4.002, nd: 1, elemId: 0, sd: 26.5 },
    { label: "10", R: -390, d: 3, nd: 1.6968, elemId: 6, sd: 25.5 },
    { label: "11", R: 107.454, d: 17.778, nd: 1, elemId: 0, sd: 25.5 },
    // L7 source correction: patent prints nd=1.57; verified model uses nd=1.52.
    { label: "12", R: -405, d: 4.5, nd: 1.52, elemId: 7, sd: 27 },
    { label: "13", R: -95.766, d: 240.903360997, nd: 1, elemId: 0, sd: 27 },
  ],

  asph: {},

  /* ── Focus model ── */
  var: {
    // Original patent d6 = S6→STO + STO→S7. STO is fixed; G2 moves imageward (rearward).
    STO: [48.765, 59.190804222],
    "11": [17.778, 7.352195778],
  },
  varLabels: [
    ["STO", "D6 (IF front gap)"],
    ["11", "D11 (IF rear gap)"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 FOCUS (−)", fromSurface: "7", toSurface: "11" },
    { text: "G3 (+)", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "L4+L5", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 5.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: functional G2 (L4–L6) translates imageward (rearward) 10.425804222 mm from infinity to the 5.5 m product endpoint. The patent's adjacent d6/d11 total is conserved exactly. Because the inferred aperture stop is fixed at the midpoint of d6, focus variation is stored on STO→S7 and S11→S12.",

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
