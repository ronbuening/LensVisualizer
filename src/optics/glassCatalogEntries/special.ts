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
];
