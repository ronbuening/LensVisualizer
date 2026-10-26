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
    PgF: 0.5709,
    code6: "883392",
    source: "NHG/Hubei New Huaguang H-ZLaF68L data sheet (d-code 883392, formula constants A0-A5).",
  },
  {
    name: "H-LaK77",
    vendor: "NHG",
    polynomial: [3.08315587, -0.0149460142, 0.0243300964, 0.000365640749, 0.0000142131183, -0.000000082316085],
    nd: 1.77536,
    vd: 50.32,
    PgF: 0.5504,
    code6: "775503",
    source:
      "NHG optical glass catalog 2024-10, printed p. 108 (PDF p. 113), H-LaK77, A0-A5; https://hbnhg.com/uploadfiles/2024/10/NHG产品数据手册%20202410.pdf (accessed 2026-09-12).",
  },
  {
    name: "H-ZLaF82",
    vendor: "NHG",
    polynomial: [3.8328227, -0.0156183327, 0.0535172772, 0.00275764007, -0.00012813013, 0.0000218199756],
    nd: 2.001,
    vd: 29.14,
    PgF: 0.5997,
    source:
      "NHG H-ZLaF82 data sheet (d-code 001291, formula constants A0-A5); https://www.hbnhg.com/uploadfiles/file/productpdf/H-ZLaF82.pdf (accessed 2026-10-25).",
  },
  {
    name: "H-FK90",
    vendor: "NHG",
    polynomial: [2.10866977, -0.00481589397, 0.00702478609, -0.0000248667024, 0.0000178185408, -0.00000109874507],
    nd: 1.4586,
    vd: 90.19,
    PgF: 0.5388,
    source:
      "NHG H-FK90 data sheet (d-code 459902, formula constants A0-A5); https://www.hbnhg.com/uploadfiles/file/productpdf/H-FK90.pdf (accessed 2026-10-25).",
  },
];
