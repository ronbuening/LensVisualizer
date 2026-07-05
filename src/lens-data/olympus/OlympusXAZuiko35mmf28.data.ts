import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS XA F.ZUIKO 35mm f/2.8               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,235,521 Embodiment 1 (Olympus / Imai).         ║
 * ║  Compact telephoto-type wide-angle for 35 mm rangefinder camera.   ║
 * ║  6 elements / 5 groups, all spherical.                             ║
 * ║  Focus: unit focus (production); patent is infinity-only.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.35             ║
 * ║    to f ≈ 35 mm production focal length.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish clear-aperture data.  SDs estimated     ║
 * ║    from combined marginal + chief ray trace at 60% field with      ║
 * ║    ~5–8% mechanical clearance, capped by edge thickness, sd/|R|,   ║
 * ║    and cross-gap sag intrusion constraints.  Front-group SDs       ║
 * ║    reflect natural vignetting expected in a compact camera body.   ║
 * ║    The 2026 Fig. 2 audit raised the rear L4/L5 SDs so the final    ║
 * ║    meniscus height tracks the patent drawing instead of the older  ║
 * ║    ray-envelope-only rear pinch.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent d6 = 16.56 air gap split 8.28 / 8.28 (midpoint);        ║
 * ║    inferred from Fig. 2 iris placement.                            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-xa-zuiko-35-f28",
  maker: "Olympus",
  name: "OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA)",
  subtitle: "US 4,235,521 EXAMPLE 1 — OLYMPUS / IMAI",
  specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 35.0 mm", "F/2.8", "2ω ≈ 63°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 2.8,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentYear: 1980,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.43,
      fl: 22.3,
      glass: "S-LAH64 / N-LAF21 / TAF4 class (788/474)",
      apd: false,
      role: "High-index front collector; meniscus bending reduces Petzval burden",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.71,
      fl: -20.2,
      glass: "FD110 (HOYA) / S-TIH11 class (785/257)",
      apd: false,
      role: "Strong dispersive member; primary first-order chromatic correction",
    },
    {
      id: 3,
      name: "L3a",
      label: "Element 3a",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.62,
      fl: -32.5,
      glass: "S-LAH63 / NBFD3 class (804/396)",
      apd: false,
      cemented: "C1",
      role: "Front cemented member; chromatic and spherical-aberration correction at cemented interface",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 3b",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 46.03,
      fl: 11.8,
      glass: "S-LAM61 class (720/460)",
      apd: false,
      cemented: "C1",
      role: "Main positive-power contributor in front group; thick element controls astigmatic difference",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.57,
      fl: -20.6,
      glass: "S-LAH65 / TAF3 class (804/466)",
      apd: false,
      role: "Rear dispersive telephoto element; displaces rear principal plane forward for compactness",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.27,
      fl: 70.3,
      glass: "S-LAM7 / S-NBH51 class (750/353)",
      apd: false,
      role: "Weak positive rear meniscus; reduces positive distortion from strong rear negative group",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 4,235,521 Embodiment 1, scaled ×0.35.
   *  STO position inferred from Fig. 2 — midpoint of patent d6 gap.
   */
  surfaces: [
    { label: "1", R: 9.892, d: 2.572, nd: 1.788, elemId: 1, sd: 7.5 }, // L1 front
    { label: "2", R: 20.006, d: 1.081, nd: 1.0, elemId: 0, sd: 6.0 }, // L1 rear → air
    { label: "3", R: -97.1, d: 1.029, nd: 1.78472, elemId: 2, sd: 5.5 }, // L2 front
    { label: "4", R: 18.98, d: 1.564, nd: 1.0, elemId: 0, sd: 5.5 }, // L2 rear → air
    { label: "5", R: 15.903, d: 1.187, nd: 1.8044, elemId: 3, sd: 5.5 }, // L3a front (cemented)
    { label: "6", R: 9.558, d: 3.78, nd: 1.72, elemId: 4, sd: 5.5 }, // L3a/L3b cemented interface
    { label: "7", R: -65.094, d: 2.898, nd: 1.0, elemId: 0, sd: 5.0 }, // L3b rear → air (to STO)
    { label: "STO", R: 1e15, d: 2.898, nd: 1.0, elemId: 0, sd: 3.5 }, // Aperture stop (inferred from Fig. 2)
    { label: "8", R: -6.472, d: 1.029, nd: 1.804, elemId: 5, sd: 5.1 }, // L4 front
    { label: "9", R: -11.387, d: 1.043, nd: 1.0, elemId: 0, sd: 5.4 }, // L4 rear → air
    { label: "10", R: -65.972, d: 1.75, nd: 1.7495, elemId: 6, sd: 7.0 }, // L5 front
    { label: "11", R: -29.635, d: 13.602, nd: 1.0, elemId: 0, sd: 7.4 }, // L5 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ──
   *  Patent publishes infinity-focus only; no finite-distance data.
   *  closeFocusM set to 0.85 m from Olympus XA camera instructions.
   *  var is empty because the patent provides no moving-group model.
   */
  var: {},
  varLabels: [],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "7" },
    { text: "REAR", fromSurface: "8", toSurface: "11" },
  ],

  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription: "Coupled rangefinder focus, 0.85 m to infinity. Patent is infinity-only.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
