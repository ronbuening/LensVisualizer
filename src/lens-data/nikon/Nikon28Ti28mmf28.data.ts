import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON 28Ti NIKKOR 28mm f/2.8                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,528,428, Embodiment 3 / Table 3 (Ohtake,      ║
 * ║  Mori [Mouri] / Nikon). f = 28.9, FNO = 2.87, 2ω = 74.0°.         ║
 * ║  Compact wide-angle Biogon-derivative for 35mm format.             ║
 * ║  7 elements / 5 components / 2 groups, all spherical.              ║
 * ║  Prescription stored at native patent scale (no scaling).         ║
 * ║  Focus: unit focus (whole lens moves), the patent's "whole axial  ║
 * ║  movement" system for Embodiments 1–8; BF is the only variable.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent lists no SDs. Values are estimates from the f/2.87      ║
 * ║    axial beam and the ω = 37° chief ray, checked against Fig. 3   ║
 * ║    (0.02714 mm/px from the 23.80 mm vertex span). Fig. 3 rims:    ║
 * ║    L1 front 9.1–9.4 / rear curve end 7.8 (flat annulus to 9.6),   ║
 * ║    L2a 7.0, L2b rim 5.8 (curve end 4.9), L3a 6.0, L3b 6.9,        ║
 * ║    L4 6.8 / 7.5, L5 7.2–7.7 / 9.1. Surfaces 1, 6, 7, 8 follow the ║
 * ║    figure; surface 8 is capped at 6.2 because the tabulated S8/S9 ║
 * ║    radii close the 1.31 mm gap at h ≈ 6.3 mm. The rest are within ║
 * ║    ~15 % of the drawing and retained. Flat mounting annuli are     ║
 * ║    excluded.                                                       ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Table 3 has no stop row; the text puts S between L2 and L3 in  ║
 * ║    the 4.00 mm air gap. The Fig. 3 stop symbol measures 1.8 mm    ║
 * ║    behind surface 5 (2.2 mm ahead of surface 6); the floating-     ║
 * ║    focus sibling Embodiment 11 tabulates 1.650 / 2.350 in the     ║
 * ║    same 4.000 mm gap. Split 1.80 / 2.20 (figure-derived).         ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    nominalFno is the patent FNO 2.87 (marketed f/2.8); the engine ║
 * ║    derives the iris (≈4.36 mm radius). Production minimum f/22.   ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    No close-focus state is published for Embodiment 3. The close  ║
 * ║    BF 23.44 mm is calculated (paraxial, whole-lens extension) for ║
 * ║    the production 0.40 m film-plane MFD: object 352.8 mm ahead of ║
 * ║    surface 1, extension 2.48 mm, magnification −0.086.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-28ti-28f28",
  maker: "Nikon",
  name: "NIKON NIKKOR 28mm f/2.8 (Nikon 28Ti)",
  subtitle: "US 5,528,428 Ex. 3 — Ohtake & Mouri / Nikon",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 28.9 mm", "F/2.87", "2ω ≈ 74.0°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28.9,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,528,428",
  patentAuthors: ["Motoyuki Ohtake", "Motohisa Mouri"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1996,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 49.1,
      fl: -69.9,
      glass: "J-LLF6 (HIKARI catalog equivalent; LLF6-class light flint 532491, vendor unspecified)",
      apd: false,
      role: "Front negative meniscus — field flattening and FOV expansion",
    },
    {
      id: 2,
      name: "L2a",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.84042,
      vd: 43.3,
      fl: 15.2,
      glass: "840433 - lanthanum flint (catalog unresolved; patent nd=1.84042, vd=43.3)",
      apd: false,
      role: "Front doublet positive crown — primary convergence",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L2b",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.8,
      fl: -19.6,
      glass: "E-FD2 (HOYA catalog equivalent; SF2-class dense flint, patent 648338, vendor unspecified)",
      apd: false,
      role: "Front doublet negative flint — chromatic correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L3a",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.8,
      fl: 16.0,
      glass: "J-LASF09A (HIKARI catalog equivalent; LAH59-class lanthanum crown 816468, vendor unspecified)",
      apd: false,
      role: "Rear doublet positive crown — convergence and chromatic correction",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L3b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6175,
      vd: 30.8,
      fl: -20.9,
      glass: "617308 - high-dispersion flint (catalog unresolved; patent nd=1.61750, vd=30.8)",
      apd: false,
      role: "Rear doublet negative flint — chromatic correction",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.79668,
      vd: 45.4,
      fl: 22.8,
      glass: "J-LASF017 (Hikari catalog-equivalent to patent 797454; supplier not identified)",
      apd: false,
      role: "Strong positive meniscus — spherical aberration correction, key patent innovation",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.59507,
      vd: 35.5,
      fl: -47.3,
      glass: "S-FTM16 (OHARA catalog equivalent; patent 595355, Δnd −0.0024, vendor unspecified)",
      apd: false,
      role: "Rear negative meniscus — field flattening, symmetry with L1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front group ──
    { label: "1", R: 12.422, d: 1.5, nd: 1.53172, elemId: 1, sd: 9.1 }, // L1 front (Fig. 3)
    { label: "2", R: 8.919, d: 3.37, nd: 1.0, elemId: 0, sd: 7.5 }, // L1 rear → air
    { label: "3", R: 12.829, d: 3.87, nd: 1.84042, elemId: 2, sd: 6.5 }, // L2a front
    { label: "4", R: -1726.972, d: 1.0, nd: 1.64831, elemId: 3, sd: 6.2 }, // L2a→L2b cement
    { label: "5", R: 12.785, d: 1.8, nd: 1.0, elemId: 0, sd: 5.8 }, // L2b rear → air

    // ── Stop (Fig. 3: 1.8 mm behind surface 5 in the 4.00 mm gap) ──
    { label: "STO", R: 1e15, d: 2.2, nd: 1.0, elemId: 0, sd: 4.3 },

    // ── G2: Rear group ──
    { label: "6", R: 51.931, d: 2.5, nd: 1.816, elemId: 4, sd: 6.0 }, // L3a front (Fig. 3)
    { label: "7", R: -17.04, d: 1.0, nd: 1.6175, elemId: 5, sd: 6.0 }, // L3a→L3b cement
    { label: "8", R: 54.857, d: 1.31, nd: 1.0, elemId: 0, sd: 6.2 }, // L3b rear → air (gap-capped)
    { label: "9", R: -21.73, d: 2.95, nd: 1.79668, elemId: 6, sd: 6.0 }, // L4 front
    { label: "10", R: -10.479, d: 0.8, nd: 1.0, elemId: 0, sd: 6.9 }, // L4 rear → air
    { label: "11", R: -8.874, d: 1.5, nd: 1.59507, elemId: 7, sd: 7.5 }, // L5 front
    { label: "12", R: -13.78, d: 20.96, nd: 1.0, elemId: 0, sd: 8.5 }, // L5 rear → BFD
  ],

  /* ── Aspherical coefficients — all spherical design ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BF only; close value calculated for a 0.40 m film-plane MFD) ── */
  var: {
    "12": [20.96, 23.44],
  },
  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (front)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (rear)", fromSurface: "6", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription:
    "Unit focus — the whole lens moves axially (patent whole-axial-movement system); close extension calculated for a 0.40 m film-plane MFD.",

  /* ── Aperture configuration ── */
  nominalFno: 2.87,
  fstopSeries: [2.87, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
