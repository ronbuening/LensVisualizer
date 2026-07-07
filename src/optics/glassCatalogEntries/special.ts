/**
 * Vendor-published special-material optical glass dispersion entries.
 */

import type { GlassEntry } from "../glassCatalogTypes.js";

export const SPECIAL_GLASS_ENTRIES: readonly GlassEntry[] = [
  /* ────── Special: fluorite (CaF2) ──────
   * The fundamental ultra-low-dispersion crystal. Used in Canon "Fluorite",
   * many Nikkor and Fujinon long teles, and as the reference end-point on
   * the Abbe diagram (νd ≈ 95).
   */
  {
    name: "CaF2",
    vendor: "Special",
    B: [0.5675888, 0.4710914, 3.8484723],
    C: [0.0025264, 0.0100783, 1200.5557],
    nd: 1.43385,
    vd: 95.1,
    PgF: 0.5348,
    source: "Daimon & Masumura, Appl. Opt. 41 (2002), CaF2 room-temperature fit.",
  },
  /* ────── Special: fused silica (SiO2) ──────
   * UV-transmitting silica glass used in quartz/fluorite objectives.
   */
  {
    name: "SiO2",
    vendor: "Special",
    B: [0.6961663, 0.4079426, 0.8974794],
    C: [0.00467914826, 0.0135120631, 97.9340025],
    nd: 1.45846,
    vd: 67.82,
    PgF: 0.5276,
    source: "I. H. Malitson, JOSA 55(10), 1965, fused-silica Sellmeier fit at 20 C.",
  },
];
