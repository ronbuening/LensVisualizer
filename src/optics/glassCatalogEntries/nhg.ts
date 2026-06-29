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
];
