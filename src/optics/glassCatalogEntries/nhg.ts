/**
 * Vendor-published NHG optical glass dispersion entries.
 */

import type { GlassEntry } from "../glassCatalogTypes.js";

export const NHG_GLASS_ENTRIES: readonly GlassEntry[] = [
  {
    name: "H-ZLaF68L",
    vendor: "NHG",
    polynomial: [3.43867274, -0.0143248055, 0.0349115425, 0.0014530167, -0.0000762581625, 0.0000074766879],
    nd: 1.883,
    vd: 39.22,
    PgF: 0.5698,
    code6: "883392",
    source: "NHG/Hubei New Huaguang H-ZLaF68L data sheet (d-code 883392, formula constants A0-A5).",
  },
  {
    name: "H-LaK77",
    vendor: "NHG",
    polynomial: [3.08315587, -0.0149460142, 0.0243300964, 0.000365640749, 0.0000142131183, -0.000000082316085],
    nd: 1.77536,
    vd: 50.32,
    PgF: 0.5509,
    code6: "775503",
    source:
      "NHG optical glass catalog 2024-10, printed p. 108 (PDF p. 113), H-LaK77, A0-A5; https://hbnhg.com/uploadfiles/2024/10/NHG产品数据手册%20202410.pdf (accessed 2026-09-12).",
  },
];
