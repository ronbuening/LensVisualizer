/**
 * Vendor-published Sumita optical glass dispersion entries.
 */

import type { GlassEntry } from "../glassCatalogTypes.js";

export const SUMITA_GLASS_ENTRIES: readonly GlassEntry[] = [
  {
    name: "K-LaK14",
    vendor: "Sumita",
    polynomial: [2.8277206, -0.013838479, 0.0179847, 0.00057777884, -0.000037712827, 0.0000022935918],
    nd: 1.6968,
    vd: 55.6,
    code6: "697556",
    source: "Sumita Zemax catalog 2026-06-04; vendor formula-3 polynomial for K-LaK14.",
  },
  {
    name: "K-LaFn11",
    vendor: "Sumita",
    polynomial: [2.8917009, -0.011920903, 0.022558933, 0.00079204231, -0.000040820426, 0.0000041373045],
    nd: 1.72013,
    vd: 46.0,
    code6: "720460",
    source: "Sumita Zemax catalog 2026-06-04; vendor formula-3 polynomial for K-LaFn11.",
  },
  {
    name: "BAF13",
    vendor: "Sumita",
    polynomial: [2.719865, -0.008385828, 0.02303157, -0.00001724107, 0.00007939306, -0.000002414054],
    nd: 1.66892,
    vd: 45.0,
    code6: "669450",
    source: "Sumita Zemax catalog 2026-06-04; vendor formula-3 polynomial for BAF13.",
  },
  /* ────── Sumita — APO-relevant K-prefix crowns ──────
   * K-GFK68 appears in the Voigtländer APO-Lanthar 50/2 prescription. Sumita
   * AGF entries use the polynomial Schott formula (form 1); B/C below are a
   * least-squares Sellmeier-1 fit, max abs index error 6.7e-6 across 365–1014 nm.
   */
  {
    name: "K-GFK68",
    vendor: "Sumita",
    B: [1.029009037, 0.4702661225, 0.6990302054],
    C: [0.005049695326, 0.01621519052, 121.8498943],
    nd: 1.5924,
    vd: 68.3,
    PgF: 0.5468,
    code6: "592683",
    source:
      "Sumita AGF (sumita_2017-02-02.agf) form-1 polynomial; Sellmeier-1 fit, max abs index error 6.7e-6 across 365–1014 nm. APO-relevant.",
  },
  {
    name: "K-SK7",
    vendor: "Sumita",
    polynomial: [2.5429277, -0.01031719, 0.014356944, 0.00031433872, -0.000010824341, 0.00000068100892],
    nd: 1.60729,
    vd: 59.5,
    PgF: 0.5431,
    code6: "607595",
    source: "Sumita Zemax catalog 2017-02-02 via refractiveindex.info; K-SK7 page (formula 3 polynomial).",
  },
  {
    name: "K-SK18",
    vendor: "Sumita",
    polynomial: [2.6383229, -0.010806956, 0.016153414, 0.00046673954, -0.000025414619, 0.0000019703165],
    nd: 1.63854,
    vd: 55.5,
    PgF: 0.5497,
    code6: "639555",
    source: "Sumita Zemax catalog 2017-02-02 via refractiveindex.info; K-SK18 page (formula 3 polynomial).",
  },
  /* Sumita priority addition */
  {
    name: "K-VC89",
    vendor: "Sumita",
    polynomial: [3.1860388, -0.013756822, 0.029614017, 0.0012383727, -0.000080134175, 0.0000072330635],
    nd: 1.81,
    vd: 41,
    PgF: 0.5664,
    code6: "810410",
    source: "Sumita Zemax catalog 2017-02-02 via refractiveindex.info; K-VC89 page (formula 3 polynomial).",
  },
  {
    name: "K-SKLD200",
    vendor: "Sumita",
    polynomial: [2.4786815, -0.010928711, 0.014104052, 0.00015365594, 0.00001194296, -0.00000053372519],
    nd: 1.5866,
    vd: 59.0,
    PgF: 0.541,
    code6: "587590",
    source: "Sumita Optical Glass K-SKLD200 datasheet, catalog Ver. 14.01.00; formula-3 coefficients A0-A5.",
  },
];
