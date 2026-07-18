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
  {
    name: "BAF9",
    vendor: "Sumita",
    polynomial: [2.644065, -0.009300613, 0.01930457, 0.0004150757, 0.000001691837, 0.000001378427],
    nd: 1.64328,
    vd: 47.8,
    code6: "643478",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for BAF9.",
  },
  {
    name: "BAF11",
    vendor: "Sumita",
    polynomial: [2.720201, -0.01014037, 0.01953294, 0.0006215688, -0.00003170161, 0.00000331545],
    nd: 1.66672,
    vd: 48.4,
    code6: "667484",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for BAF11.",
  },
  {
    name: "BK1",
    vendor: "Sumita",
    polynomial: [2.250869, -0.00907651, 0.01084563, 0.0001411894, 0.00000133186, 0.00000005968851],
    nd: 1.51009,
    vd: 63.4,
    code6: "510634",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for BK1.",
  },
  {
    name: "F1",
    vendor: "Sumita",
    polynomial: [2.571276, -0.00856333, 0.0237824, 0.000700397, 0.000007986817, 0.000002984709],
    nd: 1.62588,
    vd: 35.6,
    code6: "626356",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for F1.",
  },
  {
    name: "FK5",
    vendor: "Sumita",
    polynomial: [2.188968, -0.009646703, 0.00885039, 0.0001871679, -0.00001078591, 0.0000006156421],
    nd: 1.48749,
    vd: 70.4,
    code6: "487704",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for FK5.",
  },
  {
    name: "K5",
    vendor: "Sumita",
    polynomial: [2.284308, -0.008200999, 0.01233497, 0.00003991528, 0.00002007395, -0.000000739979],
    nd: 1.52249,
    vd: 59.6,
    code6: "522596",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for K5.",
  },
  {
    name: "LAFN2",
    vendor: "Sumita",
    polynomial: [2.820958, -0.01238721, 0.01929917, 0.001043676, -0.0000779211, 0.000005136541],
    nd: 1.697,
    vd: 48.5,
    code6: "697485",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for LAFN2.",
  },
  {
    name: "LF2",
    vendor: "Sumita",
    polynomial: [2.467862, -0.008430025, 0.01941439, 0.0004849387, 0.000009386772, 0.000001447407],
    nd: 1.58921,
    vd: 41.0,
    code6: "589410",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for LF2.",
  },
  {
    name: "SK5",
    vendor: "Sumita",
    polynomial: [2.487388, -0.01016267, 0.01379582, 0.0001800715, -0.000002130549, 0.0000005629257],
    nd: 1.58913,
    vd: 61.2,
    code6: "589612",
    source:
      "SUMITA Zemax all-glass catalog 2025-11-07 including discontinued glasses; vendor formula-3 polynomial for SK5.",
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
