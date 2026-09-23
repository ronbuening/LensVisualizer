import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF60mmF2.4 R Macro                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0247506 A1, Example 1 (Tetsuya Ori,         ║
 * ║  FUJIFILM Corporation). Priority: JP 2011-248180 (Nov. 14, 2011). ║
 * ║  Medium telephoto macro for APS-C (X-mount), 91 mm equiv.         ║
 * ║  10 elements / 8 groups, 2 aspherical surfaces, 1 ED element     ║
 * ║  (ED per Fujifilm's spec; the patent does not call it ED).       ║
 * ║  Focus: unit focus — entire G1 (L11–L17 + stop) translates        ║
 * ║    forward; G2 (L21–L23) fixed. Variable gap D13 only; all three  ║
 * ║    Table 2 states (∞, −0.2×, −0.5×) are stored as keyframes.      ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    nominalFno = patent FNO 2.48 (marketed f/2.4). Patent working  ║
 * ║    FNO is 3.10 at −0.2× and 4.03 at −0.5× (Figs. 8–9); the app    ║
 * ║    derives that from the geometry, so no extra field is needed.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent publishes none. 2026-09-23 audit: exact-trace clear     ║
 * ║    apertures at Y = 14.2 mm (ω = 12.70°, matching the patent's    ║
 * ║    2ω = 25.4°) checked at all three focus states, and rims        ║
 * ║    measured from Fig. 1A (11.9 px/mm). S5 raised to 11.0 (f/2.48  ║
 * ║    axial ray needs 10.71); G2 raised to 9.9 / 11.5 / 12.0 (the    ║
 * ║    −0.5× full-field chief ray reaches 9.97 at S17 and 10.79 at    ║
 * ║    S19; Fig. 1A draws 9.9 / 11.6 / 12.2). STO 7.8 = engine iris   ║
 * ║    at f/2.48. Other rims are within ~15 % of the figure and kept. ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    Exact Example 1 Table 3 odd/even A3–A10 coefficients are       ║
 * ║    stored directly. Patent formula (A) uses                        ║
 * ║    √(1 − K·C²·Y²), so Kstd = Kpat − 1.                             ║
 * ║                                                                    ║
 * ║  NOTE ON L15 ABBE NUMBER:                                          ║
 * ║    Patent Table 1 lists νd = 48.8 for surface 9 (L15). Table 17   ║
 * ║    gives νd6 − νd5 = 29.1 for Example 1, implying νd5 = 52.4      ║
 * ║    (the 48.8 row computes to 32.7; Examples 2–6 all reconcile).   ║
 * ║    1.51742 / 52.4 is exactly Ohara S-NSL36. The stored Table 1    ║
 * ║    value remains 48.8, and the glass label is intentionally left  ║
 * ║    unmatched so no mismatched catalog row resolves.               ║
 * ║                                                                    ║
 * ║  COVER GLASS:                                                      ║
 * ║    Patent surfaces S20/S21 (parallel plate, d = 2.85 mm,         ║
 * ║    nd = 1.51680/N-BK7) excluded; air-equivalent path folded into ║
 * ║    BFD of last surface (d = 20.34 mm).                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf60-f24-r-macro",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 60mm f/2.4 R Macro",
  subtitle: "US 2014/0247506 A1 EXAMPLE 1 — FUJIFILM / ORI",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "f = 61.06 mm (design)",
    "F/2.48 (design) · F/2.4 (marketed)",
    "2ω = 25.4° (design) · 26.6° (marketed)",
    "2 ASPHERICAL SURFACES · 1 ED ELEMENT",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 61.06,
  apertureMarketing: 2.4,
  apertureDesign: 2.48,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2014/0247506 A1",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2014,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 106.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front positive collector — low-index fluorosilicate crown with high νd minimizes chromatic contribution while providing gentle convergence.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: 103.3,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Second positive collector — barium crown meniscus shares refractive load with L11, keeping surface curvatures moderate.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 35.4,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Crown element of achromatic doublet D1 — lanthanum crown provides strong positive power from moderate curvatures.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6668,
      vd: 31.1,
      fl: -25.0,
      glass: "667311 - dense flint (patent nd=1.66680, vd=31.1; no exact public catalog match)",
      apd: false,
      cemented: "D1",
      role: "Flint element of D1 — corrects longitudinal chromatic aberration with Δνd = 23.6. Net doublet power is negative (fl ≈ −174 mm).",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 48.8,
      fl: -31.5,
      glass: "Unmatched (patent nd=1.51742, listed vd=48.8; Table 17 implies vd~52.4; no resolver-safe catalog match)",
      apd: false,
      cemented: "D2",
      role: "Flint element of achromatic doublet D2 — paired with ED glass L16 for chromatic correction behind the stop.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 50.1,
      glass: "S-FPL51 (OHARA) — catalog equivalent, ED glass",
      apd: "inferred",
      apdNote:
        "Inferred from the exact S-FPL51 nd/νd match and Fujifilm's one-ED-element production spec; the patent itself does not call L16 ED or anomalous.",
      cemented: "D2",
      role: "ED crown element of D2 — sole extra-low dispersion glass in the design, correcting both longitudinal and lateral chromatic aberration.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.80348,
      vd: 40.4,
      fl: 62.7,
      glass: "803404 - PGM lanthanum heavy flint (patent nd=1.80348, vd=40.4; no exact public catalog match)",
      apd: false,
      role: "Glass-molded aspherical element — both surfaces aspherical. Primary corrector for sagittal field curvature. Last element of moving group G1.",
    },
    {
      id: 8,
      name: "L21",
      label: "Element 8",
      type: "Plano-Concave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -30.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "First element of fixed G2 — diverges converging beam to increase BFD and reduce sensor cone angle.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.9,
      fl: 86.1,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Re-converges beam after L21; moderate-index crown with minimal chromatic contribution.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 57.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Final element — strongly asymmetric biconvex acts as primary field-flattener in G2. Rear surface (R = −57 mm) dominates Petzval correction.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: moving focus group (L11–L17 + stop) ──
    { label: "1", R: 51.9744, d: 3.17, nd: 1.48749, elemId: 1, sd: 15.5 }, // L11 front
    { label: "2", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 15.0 }, // L11 rear (flat) → air
    { label: "3", R: 28.9998, d: 3.8, nd: 1.58913, elemId: 2, sd: 14.8 }, // L12 front
    { label: "4", R: 52.7228, d: 0.1, nd: 1.0, elemId: 0, sd: 13.5 }, // L12 rear → air
    { label: "5", R: 18.5122, d: 5.5, nd: 1.72916, elemId: 3, sd: 11.0 }, // L13 front (cemented D1)
    { label: "6", R: 57.135, d: 1.16, nd: 1.6668, elemId: 4, sd: 10.5 }, // L13→L14 junction
    { label: "7", R: 12.7943, d: 4.2, nd: 1.0, elemId: 0, sd: 10.0 }, // L14 rear → air
    { label: "STO", R: 1e15, d: 2.6, nd: 1.0, elemId: 0, sd: 7.8 }, // Aperture stop
    { label: "9", R: -317.3207, d: 1.01, nd: 1.51742, elemId: 5, sd: 8.0 }, // L15 front (cemented D2)
    { label: "10", R: 17.18, d: 2.8, nd: 1.497, elemId: 6, sd: 8.0 }, // L15→L16 junction
    { label: "11", R: 52.4398, d: 2.54, nd: 1.0, elemId: 0, sd: 8.2 }, // L16 rear → air
    { label: "12A", R: 34.5881, d: 2.6, nd: 1.80348, elemId: 7, sd: 8.5 }, // L17 front (asph)
    { label: "13A", R: 106.5522, d: 1.8, nd: 1.0, elemId: 0, sd: 8.2 }, // L17 rear (asph) → air [D13 variable]
    // ── G2: fixed rear corrector group (L21–L23) ──
    { label: "14", R: 1e15, d: 1.8, nd: 1.72916, elemId: 8, sd: 9.9 }, // L21 front (flat)
    { label: "15", R: 22.466, d: 3.55, nd: 1.0, elemId: 0, sd: 9.9 }, // L21 rear → air
    { label: "16", R: 28.6691, d: 2.82, nd: 1.51823, elemId: 9, sd: 11.5 }, // L22 front
    { label: "17", R: 77.4943, d: 1.81, nd: 1.0, elemId: 0, sd: 11.5 }, // L22 rear → air
    { label: "18", R: 236.5466, d: 3.0, nd: 1.804, elemId: 10, sd: 12.0 }, // L23 front
    { label: "19", R: -56.9828, d: 20.34, nd: 1.0, elemId: 0, sd: 12.0 }, // L23 rear → image (BFD, cover glass air-equiv folded)
  ],

  /* ── Exact Example 1, Table 3 aspherical coefficients ── */
  asph: {
    "12A": {
      K: -3.154014e1,
      A3: -1.88631e-4,
      A4: 2.861281e-4,
      A5: -7.19871e-5,
      A6: 1.134194e-5,
      A7: -2.726246e-7,
      A8: -1.992572e-7,
      A9: 2.806654e-8,
      A10: -1.18193e-9,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 5.910862e1,
      A3: -1.680437e-4,
      A4: 1.554805e-4,
      A5: -5.548409e-5,
      A6: 1.067906e-5,
      A7: -1.051099e-6,
      A8: 4.143267e-8,
      A9: 3.478004e-10,
      A10: -4.029777e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire G1 translates forward. Only gap D13 changes.
   *  Patent Table 2: D13 = 1.80 (∞) / 10.57 (−0.2×) / 23.73 (−0.5×) mm.
   *  Paraxial check: stored gaps focus at m = −0.200 and −0.500; object-to-
   *  image distances 436.6 mm and 266.5 mm (air-equivalent). Keyframe
   *  coordinate = closeFocusM ÷ object-to-image distance.
   */
  focusPositions: [0, 0.6115561181433857, 1],
  var: {
    "13A": [1.8, 10.57, 23.73],
  },
  varLabels: [["13A", "D13"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (moving)", fromSurface: "1", toSurface: "13A" },
    { text: "G2 (fixed)", fromSurface: "14", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  // Production MFD 0.267 m; patent −0.5× conjugate = 266.5 mm object-to-image (air-equivalent), 267.5 mm physical.
  closeFocusM: 0.267,
  focusDescription: "Unit focus — entire G1 (L11–L17 + aperture stop) translates forward as a rigid unit; G2 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.48,
  fstopSeries: [2.48, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,
  apertureBladeRoundedness: 0.85,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
