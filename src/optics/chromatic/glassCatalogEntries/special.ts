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
    PgF: 0.5387,
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
  {
    name: "E48R",
    vendor: "Special",
    polynomial: [2.30319693, -0.00117825616, 0.0140597151, 2.97687093e-5, 3.28913151e-5, -1.61443145e-6],
    nd: 1.53117,
    vd: 56,
    PgF: 0.5635,
    source:
      "ZEON manufacturer ZEON.AGF, archived copy reproduced by permission of RadiantZemax: https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/zeon.agf (accessed 2026-10-31; blob06e747f86a14e80b424d396475b2e9488bd88cfc). Native formula1 n² polynomial, lambda in micrometres, 25 C, source range0.400–1.600 um. Coefficients verbatim; not a direct vendor download. Published nominal1.531170/56.0. d-code531560 omitted to preserve existing code bindings. A compatible spectral proxy does not identify a historical lens polymer, supplier or formulation.",
  },
  {
    name: "K26R-25",
    vendor: "Special",
    polynomial: [2.316908633, -0.001887777329, 0.01229689236, 0.0006227023347, -3.753050791e-5, 1.004421225e-6],
    nd: 1.535011,
    vd: 55.634094,
    PgF: 0.5627,
    source:
      "Hyperion Optics public ZEON_UV.AGF, K26R_25 row, 25 C, 0.404656–1.083030 µm; https://www.hypoptics.com/uploads/file/ZEON_UV.AGF (accessed 2026-10-31). Independent optical-manufacturer publication; direct ZEON fetch and original manufacturer origin not established.",
  },
  {
    name: "POLYCARB",
    vendor: "Special",
    polynomial: [2.42838566, -3.86116645e-5, 0.0287574474, -0.000197897366, 0.000148358968, 1.38651935e-6],
    nd: 1.58547,
    vd: 29.909185,
    PgF: 0.6172,
    source:
      "RadiantZemax MISC.AGF, archival copy reproduced by permission, native POLYCARB row (GC: Handbook of Optics Vol. II); 20 C, 0.365–1.014 µm. https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf (accessed 2026-10-31). Published commercial material dataset, not a direct manufacturer fetch or identification of Canon source chemistry. Official Ansys Glass Catalog Sources independently attributes MISC POLYCARB to Handbook of Optics Vol. II: https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Glass_Catalog_Sources.html .",
  },
];
