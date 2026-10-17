import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — HASSELBLAD HC 80mm f/2.8                             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2001/0050819 A1, Embodiment 3 (Table 3).         ║
 * ║  Inventor: Kazunori Ohno (Fuji Photo Optical / Fujifilm).         ║
 * ║  Modified Gaussian (double-Gauss), all-air-spaced, all-spherical. ║
 * ║  6 elements / 6 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100 mm; all R, d, sd values scaled ×0.80 to        ║
 * ║    f≈80 mm production focal length.                               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray traces at 60%     ║
 * ║    off-axis field with 8% mechanical clearance. Constrained by    ║
 * ║    edge-thickness ≥0.3 mm on L1, L2 (positive menisci) and by    ║
 * ║    cross-gap sag intrusion ≤90% at the L4–L5 air gap (D9).       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "hasselblad-hc-80-f28",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 80mm f/2.8",
  subtitle: "US 2001/0050819 A1 Embodiment 3 — Kazunori Ohno / Fujifilm",

  catalog: {
    lensMounts: ["hasselblad-h"],
    imageFormat: "645",
    specs: ["6 ELEMENTS / 6 GROUPS", "f ≈ 80.0 mm", "F/2.8", "2ω ≈ 46°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 6,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 80 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 2001/0050819 A1",
    patentYear: 2001,
    authors: ["Kazunori Ohno"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.78589,
      vd: 44.2,
      focalLengthMm: 81.5,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "Front collector — high-index positive meniscus, convex to object. Carries the bulk of the front group's positive power with moderate curvatures.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 70.6,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Achromatizing positive — low-index, high-Abbe crown. Its rear surface forms the front air lens with L3's front surface.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: -38.9,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Front diverger — moderate-index flint. Strongest negative element in the front group; its rear surface is the dominant negative Petzval contributor.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -33.3,
      glass: "S-TIH10 (OHARA)",
      apd: false,
      role: "Rear diverger — dense titanium flint with lowest Abbe number in the system. Primary dispersion source for rear-group achromatization.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78589,
      vd: 44.2,
      focalLengthMm: 50.0,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "Rear converger — same glass as L1, reinforcing quasi-symmetric architecture. Its rear surface carries the strongest positive Petzval contribution.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7433,
      vd: 49.3,
      focalLengthMm: 65.8,
      glass: "S-LAM60 (OHARA)",
      apd: false,
      role: "Field flattener — lanthanum crown with high index and large Abbe number. Nearly flat front surface; strong rear surface corrects residual field curvature.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent scale = 100 mm; all values ×0.80 for production f=80 mm.
   *  All surfaces spherical — no aspherical surfaces in this design.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 38.0394, d: 4.6647, sd: 22.3, medium: 1 },
    { label: "2", R: 88.6001, d: 0.9709, sd: 21.5 },
    { label: "3", R: 29.0164, d: 5.9862, sd: 19.0, medium: 2 },
    { label: "4", R: 131.7382, d: 0.0472, sd: 17.3 },
    { label: "5", R: 110.6121, d: 2.0466, sd: 17.3, medium: 3 },
    { label: "6", R: 19.2316, d: 11.6618, sd: 16.0 },
    { label: "STO", R: "flat", d: 9.7182 },
    { label: "7", R: -21.5195, d: 2.5947, sd: 13.5, medium: 4 },
    { label: "8", R: -202.8955, d: 0.2002, sd: 12.5 },
    { label: "9", R: -139.6596, d: 7.2886, sd: 12.5, medium: 5 },
    { label: "10", R: -31.3888, d: 0.1944, sd: 17.9 },
    { label: "11", R: -494.4805, d: 6.8027, sd: 18.0, medium: 6 },
    { label: "12", R: -44.7302, sd: 19.4 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.7,
    description: "Unit focus — entire optical assembly translates. Built-in leaf shutter moves with optics.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ── */
  gaps: { "12": { label: "BF", values: [[60.872, 72.692]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32] },

  /* ── Group annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (REAR)", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
