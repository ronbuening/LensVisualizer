/**
 * LZOS (Lytkarino Optical Glass Factory) optical glass dispersion entries.
 *
 * LZOS publishes its clear optical glasses (GOST 3514 grades) as tabulated refractive indices rather than formula
 * constants. Each row below is a least-squares fit of the six-term polynomial (formula 3) to the catalogue's own
 * index table over 365–1014 nm (23 wavelengths, including the C, d, F and g lines), as mirrored in the
 * refractiveindex.info database (`specs/lzos/optical/<grade>.yml`, commit 37773dce81, 2025-01-11). The listed nd and νd
 * are the catalogue table's d-line index and the Abbe number computed from its C, d and F indices. Codes are left out
 * so six-digit annotations keep resolving to the Western rows they name.
 */

import type { GlassEntry } from "../glassCatalogTypes.js";

export const LZOS_GLASS_ENTRIES: readonly GlassEntry[] = [
  {
    name: "TK14",
    vendor: "LZOS",
    polynomial: [2.561579648, -0.01056632204, 0.0146485894, 0.0001925184203, 0.000003513433121, 0.00000009184233262],
    nd: 1.613091,
    vd: 60.58,
    source:
      "LZOS clear optical glass catalogue, TK14 index table via refractiveindex.info (specs/lzos/optical/TK14.yml); formula-3 least-squares fit over 365–1014 nm, max abs index error 4.9e-6.",
  },
  {
    name: "TK21",
    vendor: "LZOS",
    polynomial: [2.690130296, -0.008456005314, 0.0190703294, 0.0003242791276, 0.000006472715311, 0.0000003846714989],
    nd: 1.656914,
    vd: 51.12,
    source:
      "LZOS clear optical glass catalogue, TK21 index table via refractiveindex.info (specs/lzos/optical/TK21.yml); formula-3 least-squares fit over 365–1014 nm, max abs index error 9.4e-6.",
  },
  {
    name: "STK3",
    vendor: "LZOS",
    polynomial: [2.706517366, -0.01111748162, 0.01656603789, 0.0004684858578, -0.00003387285246, 0.00000236862158],
    nd: 1.659502,
    vd: 57.35,
    source:
      "LZOS clear optical glass catalogue, STK3 (СТК3) index table via refractiveindex.info (specs/lzos/optical/CTK3.yml); formula-3 least-squares fit over 365–1014 nm, max abs index error 5.8e-6.",
  },
  {
    name: "TF5",
    vendor: "LZOS",
    polynomial: [2.959751698, -0.009119101566, 0.0382087966, 0.00156471631, -0.00001278540046, 0.00001071093486],
    nd: 1.755234,
    vd: 27.53,
    source:
      "LZOS clear optical glass catalogue, TF5 (ТФ5) index table via refractiveindex.info (specs/lzos/optical/TF5.yml); formula-3 least-squares fit over 365–1014 nm, max abs index error 5.9e-6. Added for the KMZ New Petzval 85mm f/2.2 (RU 2 549 915 C1 names TF5 for L2).",
  },
];
