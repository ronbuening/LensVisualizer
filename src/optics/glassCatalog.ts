/**
 * Optical glass catalog — Sellmeier dispersion coefficients keyed by glass name.
 *
 * Each entry holds the 6 Sellmeier coefficients (B1..B3, C1..C3) plus reference
 * d-line index and Abbe number. The chromatic ray-trace consults this catalog
 * to replace the Abbe-only n(λ) approximation with vendor-published spectral
 * data when an element's `glass` string resolves to a known entry.
 *
 * Sellmeier dispersion formula (vendor standard form):
 *   n²(λ) = 1 + B1·λ²/(λ²−C1) + B2·λ²/(λ²−C2) + B3·λ²/(λ²−C3)
 *   where λ is in micrometres and C1..C3 are in micrometres².
 *
 * Coverage status: Phase 5 (92 entries). See agent_docs/glass-catalog-buildout.md
 * for the addition history and sourcing playbook.
 *
 * All coefficients are vendor-published physical measurements. Each entry
 * cites its source. Verify by computing n at 587.5618 nm (d-line) and checking
 * agreement with the listed `nd` to within ~1e-5.
 */

/** A single entry in the glass catalog. */
export interface GlassEntry {
  /** Vendor-canonical glass name, e.g. "N-BK7", "S-FPL51". */
  readonly name: string;
  /** Vendor (Schott, Ohara, Hoya, Sumita, CDGM, special). */
  readonly vendor: "Schott" | "Ohara" | "Hoya" | "Sumita" | "CDGM" | "Special";
  /** Sellmeier B1, B2, B3 coefficients. */
  readonly B: readonly [number, number, number];
  /** Sellmeier C1, C2, C3 coefficients (μm²). */
  readonly C: readonly [number, number, number];
  /** Reference d-line index (587.5618 nm). For sanity-check / display. */
  readonly nd: number;
  /** Reference Abbe number νd. For sanity-check / display. */
  readonly vd: number;
  /** Reference partial dispersion P_g,F (optional, when vendor publishes it). */
  readonly PgF?: number;
  /** Optional six-digit Schott-style code "nnn vvv" without space, e.g. "517642" for N-BK7. */
  readonly code6?: string;
  /** Source citation for the Sellmeier coefficients. */
  readonly source: string;
}

/** Standard spectral lines (nm) used by the chromatic engine. */
export const LINE_NM = {
  /** Hydrogen C line. */
  C: 656.2725,
  /** Helium d line — reference for nd, vd. */
  d: 587.5618,
  /** Hydrogen F line. */
  F: 486.1327,
  /** Mercury g line — secondary-spectrum probe. */
  g: 435.8343,
} as const;

/**
 * Evaluate the Sellmeier formula at wavelength λ (nm) for a catalog entry.
 * Returns the refractive index n(λ).
 */
export function evaluateSellmeier(entry: GlassEntry, lambdaNm: number): number {
  const lUm = lambdaNm / 1000;
  const l2 = lUm * lUm;
  const [B1, B2, B3] = entry.B;
  const [C1, C2, C3] = entry.C;
  const n2 = 1 + (B1 * l2) / (l2 - C1) + (B2 * l2) / (l2 - C2) + (B3 * l2) / (l2 - C3);
  return Math.sqrt(n2);
}

/* ──────────────────────────────────────────────────────────────────────────
 * GLASS CATALOG — 92 vendor-verified entries (Phase 5, May 2026)
 *
 * Coefficients are taken from authoritative public vendor catalogs. Each
 * entry's `source` field cites the document or database used. To verify a
 * new entry, compute n at LINE_NM.d and compare to the listed nd; agreement
 * to ~1e-5 is the expected accuracy of a transcribed Sellmeier fit.
 *
 * For the prioritized addition list and sourcing playbook, see
 * agent_docs/glass-catalog-buildout.md.
 * ────────────────────────────────────────────────────────────────────────── */

const RAW_CATALOG: readonly GlassEntry[] = [
  /* ────── Universal crowns (BK7-class) ──────
   * N-BK7 is the universal reference crown; S-BSL7 is Ohara's near-equivalent.
   * Both are present in nearly every lens design somewhere in the rear group.
   */
  {
    name: "N-BK7",
    vendor: "Schott",
    B: [1.03961212, 0.231792344, 1.01046945],
    C: [0.00600069867, 0.0200179144, 103.560653],
    nd: 1.5168,
    vd: 64.17,
    PgF: 0.5349,
    code6: "517642",
    source: "Schott TIE-29 / N-BK7 datasheet (Schott AG, public).",
  },
  {
    name: "S-BSL7",
    vendor: "Ohara",
    B: [1.03773418, 0.231473863, 1.01072958],
    C: [0.00611873959, 0.0202423191, 103.677302],
    nd: 1.51633,
    vd: 64.14,
    PgF: 0.5349,
    code6: "517641",
    source: "Ohara optical glass catalog (S-BSL7 datasheet).",
  },

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

  /* ────── Ohara — primary catalog vendor for this codebase ──────
   * S-FPL51 alone accounts for 74 declarations across the lens library; the
   * remaining Ohara entries together cover several hundred more. Coefficients
   * transcribed verbatim from the vendor-published Sellmeier-1 form (AGF
   * dispersion form 2). Round-trip at d-line is well inside 1e-4.
   */
  {
    name: "S-FPL51",
    vendor: "Ohara",
    B: [1.17010505, 0.0475710783, 0.763832445],
    C: [0.00616203924, 0.0263372876, 141.882642],
    nd: 1.496999,
    vd: 81.5459,
    PgF: 0.5346,
    code6: "497816",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-FPL53",
    vendor: "Ohara",
    B: [0.983532327, 0.069568814, 1.11409238],
    C: [0.00492234955, 0.0193581091, 264.275294],
    nd: 1.43875,
    vd: 94.946,
    PgF: 0.5302,
    code6: "439950",
    source:
      "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data. Super-ED defining glass for many APO triplets.",
  },
  {
    name: "S-FSL5",
    vendor: "Ohara",
    B: [1.17447043, 0.0140056154, 1.19272435],
    C: [0.00841855181, -0.0581790767, 129.599726],
    nd: 1.48749,
    vd: 70.2363,
    PgF: 0.5279,
    code6: "487702",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-LAL18",
    vendor: "Ohara",
    B: [1.50276318, 0.430224497, 1.3472606],
    C: [0.0145462356, -0.00332784153, 93.3508342],
    nd: 1.729157,
    vd: 54.68,
    PgF: 0.5432,
    code6: "729547",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-LAH58",
    vendor: "Ohara",
    B: [1.78764964, 0.6526356, 1.79914564],
    C: [0.00847378536, 0.0313126408, 132.788001],
    nd: 1.882997,
    vd: 40.7651,
    PgF: 0.5664,
    code6: "883408",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-LAH55V",
    vendor: "Ohara",
    B: [1.97025325, 0.30489414, 1.39214665],
    C: [0.00991088134, 0.0383202295, 97.7785249],
    nd: 1.834807,
    vd: 42.7253,
    PgF: 0.5644,
    source:
      "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data. Vacuum-melt variant; distinct from non-V.",
  },
  {
    name: "S-LAH65V",
    vendor: "Ohara",
    B: [1.81419034, 0.361376301, 1.32729484],
    C: [0.00874935029, 0.0318352836, 91.3406898],
    nd: 1.803999,
    vd: 46.5834,
    PgF: 0.5566,
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-LAH79",
    vendor: "Ohara",
    B: [2.32557148, 0.507967133, 2.43087198],
    C: [0.0132895208, 0.0528335449, 161.122408],
    nd: 2.0033,
    vd: 28.2733,
    PgF: 0.5985,
    code6: "003283",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-NBH5",
    vendor: "Ohara",
    B: [1.47544521, 0.193060095, 1.5093901],
    C: [0.0095583674, 0.0460430483, 126.422746],
    nd: 1.654115,
    vd: 39.6828,
    PgF: 0.5735,
    code6: "654397",
    source:
      "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data. KZFS-class with negative ΔPgF; APO-relevant.",
  },
  {
    name: "S-NPH2",
    vendor: "Ohara",
    B: [2.0386951, 0.437269641, 2.96711461],
    C: [0.0170796224, 0.0749254813, 174.155354],
    nd: 1.92286,
    vd: 18.8969,
    PgF: 0.6506,
    code6: "923189",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-TIH6",
    vendor: "Ohara",
    B: [1.77227611, 0.34569125, 2.40788501],
    C: [0.0131182633, 0.0614479619, 200.753254],
    nd: 1.805181,
    vd: 25.4254,
    PgF: 0.6168,
    code6: "805254",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "S-TIH53",
    vendor: "Ohara",
    B: [1.87904886, 0.369719775, 2.33730863],
    C: [0.014412177, 0.063881799, 182.66818],
    nd: 1.84666,
    vd: 23.7779,
    PgF: 0.6213,
    code6: "847238",
    source: "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data.",
  },

  /* ────── Ohara expansion (Phase 1 buildout, Apr 2026) ──────
   * Eight high-frequency Ohara glasses each with ≥10 lens-element occurrences
   * across the library. Sourced from the same OHARA Zemax catalog
   * (ohara_2017-11-30.agf) as the entries above; coefficients pulled via
   * refractiveindex.info's mirror of that AGF (form 2 = Sellmeier-1).
   * PgF computed from Schott's normal-line baseline plus ΔPgF.
   */
  {
    name: "S-PHM52",
    vendor: "Ohara",
    B: [1.0996655, 0.478125422, 1.13214074],
    C: [0.0132718559, -0.000601649685, 130.595472],
    nd: 1.618,
    vd: 63.3335,
    PgF: 0.5424,
    code6: "618634",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Phosphate crown with notable +ΔPgF; APO-relevant.",
  },
  {
    name: "S-FPM2",
    vendor: "Ohara",
    B: [0.761242785, 0.747033375, 0.938928947],
    C: [0.00321174095, 0.0140234423, 139.52353],
    nd: 1.59522,
    vd: 67.7357,
    PgF: 0.5422,
    code6: "595677",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Fluorophosphate ED with significant +ΔPgF.",
  },
  {
    name: "S-LAL14",
    vendor: "Ohara",
    B: [1.2372097, 0.589722623, 1.3192188],
    C: [0.015355132, -0.00030789625, 93.7202947],
    nd: 1.696797,
    vd: 55.5322,
    PgF: 0.5422,
    code6: "697555",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Lanthanum crown.",
  },
  {
    name: "S-LAH66",
    vendor: "Ohara",
    B: [1.39280586, 0.679577094, 1.38702069],
    C: [0.00608475118, 0.0233925351, 95.8354094],
    nd: 1.772499,
    vd: 49.5984,
    PgF: 0.5512,
    code6: "773496",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum.",
  },
  {
    name: "S-BAL42",
    vendor: "Ohara",
    B: [1.39570615, 0.071850507, 1.27129267],
    C: [0.0112218843, -0.0252117422, 134.49786],
    nd: 1.583126,
    vd: 59.3747,
    PgF: 0.5419,
    code6: "583594",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Barium crown.",
  },
  {
    name: "S-LAH63",
    vendor: "Ohara",
    B: [1.89458276, 0.268702978, 1.45705526],
    C: [0.0102277048, 0.0442801243, 104.874927],
    nd: 1.804398,
    vd: 39.5862,
    PgF: 0.5727,
    code6: "804396",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum.",
  },
  {
    name: "S-LAM66",
    vendor: "Ohara",
    B: [1.92094221, 0.219901208, 1.72705231],
    C: [0.0115075241, 0.0547993543, 120.133674],
    nd: 1.800999,
    vd: 34.9674,
    PgF: 0.5865,
    code6: "801350",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Lanthanum medium-dispersion.",
  },
  {
    name: "S-LAH55",
    vendor: "Ohara",
    B: [1.95615766, 0.319216215, 1.39173189],
    C: [0.00979338965, 0.0376836296, 94.8775271],
    nd: 1.834807,
    vd: 42.7137,
    PgF: 0.5638,
    code6: "835427",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Standard melt; distinct from S-LAH55V (vacuum-melt variant) — different Sellmeier coefficients despite shared nominal nd.",
  },

  /* ────── Ohara expansion (Phase 2 buildout, Apr 2026) ──────
   * Six more OHARA glasses targeted at the largest "no candidate" clusters
   * surfaced by the verified mismatch sweep (see agent_docs/glass-relabel-followup.md).
   * Each fills a real gap: S-LAH95 covers the ~10 surfaces of "S-LAH79 type (903/313)"
   * mislabels; S-LAH59 covers the (816/466) cluster; S-PHM53 / S-LAH53 / S-LAH92 /
   * S-LAH88 fill smaller but distinct clusters. Same AGF source as the entries above.
   */
  {
    name: "S-LAH95",
    vendor: "Ohara",
    B: [2.15636617, 0.329558178, 1.72178935],
    C: [0.012288051, 0.0555507835, 124.43934],
    nd: 1.903659,
    vd: 31.3431,
    PgF: 0.5966,
    code6: "904313",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum (904/313); resolves the largest cluster of mislabeled S-LAH79 surfaces in the lens library.",
  },
  {
    name: "S-LAH59",
    vendor: "Ohara",
    B: [1.51372967, 0.702462343, 1.33600982],
    C: [0.00705246901, 0.0249488689, 100.085908],
    nd: 1.816,
    vd: 46.6206,
    PgF: 0.5654,
    code6: "816466",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Lanthanum dense crown.",
  },
  {
    name: "S-LAH53",
    vendor: "Ohara",
    B: [1.91811619, 0.253724399, 1.39473885],
    C: [0.0102147684, 0.0433176011, 101.938021],
    nd: 1.806098,
    vd: 40.926,
    PgF: 0.575,
    code6: "806409",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum.",
  },
  {
    name: "S-LAH92",
    vendor: "Ohara",
    B: [2.10440311, 0.358346161, 1.63010064],
    C: [0.0108531811, 0.044340592, 123.2498],
    nd: 1.891899,
    vd: 37.134,
    PgF: 0.578,
    code6: "892371",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum (892/371).",
  },
  {
    name: "S-LAH88",
    vendor: "Ohara",
    B: [2.1284434, 0.405082139, 1.67918461],
    C: [0.0117309815, 0.0508706599, 107.091456],
    nd: 1.916499,
    vd: 31.6041,
    PgF: 0.5915,
    code6: "916316",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Ultra-high-index lanthanum (916/316).",
  },
  {
    name: "S-PHM53",
    vendor: "Ohara",
    B: [1.09775423, 0.434816432, 1.13894976],
    C: [0.01233694, -0.000372522903, 124.276984],
    nd: 1.603001,
    vd: 65.4436,
    PgF: 0.5337,
    code6: "603655",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Phosphate crown (603/655).",
  },

  /* ────── Ohara expansion (Phase 3 buildout, Apr 2026) ──────
   * Fifteen additional Ohara glasses covering the next tier of frequency:
   * dense TIM/TIH flints (S-TIH14, S-TIM35, S-TIM25, S-TIM22, S-TIM2),
   * ED and fluorophosphate crowns (S-FPL52, S-FPM3),
   * barium and borosilicate crowns (S-BAL35, S-NSL3),
   * high-index lanthanum variants (S-LAH51, S-LAH52, S-LAH65, S-LAM54),
   * and ultra-high-index flints (S-NPH1, S-NPH53).
   * All sourced from ohara_2017-11-30.agf via refractiveindex.info (form 2).
   */
  {
    name: "S-TIH14",
    vendor: "Ohara",
    B: [1.68915108, 0.290462024, 2.37971516],
    C: [0.0128202514, 0.0618090841, 201.094352],
    nd: 1.761821,
    vd: 26.517885,
    PgF: 0.6142,
    code6: "762265",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (762/265).",
  },
  {
    name: "S-TIM35",
    vendor: "Ohara",
    B: [1.55849775, 0.230767007, 1.84436099],
    C: [0.0115367235, 0.0586095947, 162.981888],
    nd: 1.698947,
    vd: 30.127865,
    PgF: 0.6034,
    code6: "699301",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (699/301).",
  },
  {
    name: "S-FPL52",
    vendor: "Ohara",
    B: [1.06785857, 0.0335857718, 1.10219763],
    C: [0.00699227302, -0.0207608925, 226.496541],
    nd: 1.455999,
    vd: 90.288026,
    PgF: 0.5305,
    code6: "456903",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. ED fluorophosphate crown (456/903); sister to S-FPL51. C2 is negative — this is valid for fluorophosphate glasses with anomalous UV resonances.",
  },
  {
    name: "S-TIM25",
    vendor: "Ohara",
    B: [1.50659233, 0.204786135, 1.92036668],
    C: [0.0109501562, 0.0574980285, 178.128535],
    nd: 1.6727,
    vd: 32.099206,
    PgF: 0.5991,
    code6: "673321",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (673/321).",
  },
  {
    name: "S-FPM3",
    vendor: "Ohara",
    B: [0.809407286, 0.527007033, 0.909127704],
    C: [0.00376072389, 0.0135654895, 142.503612],
    nd: 1.53775,
    vd: 74.703119,
    PgF: 0.5368,
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Fluorophosphate crown with +ΔPgF.",
  },
  {
    name: "S-BAL35",
    vendor: "Ohara",
    B: [0.941357273, 0.546174895, 1.16168917],
    C: [0.0140333996, 0.000906635683, 114.163758],
    nd: 1.58913,
    vd: 61.135024,
    PgF: 0.5392,
    code6: "589612",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Barium crown (589/612).",
  },
  {
    name: "S-TIM22",
    vendor: "Ohara",
    B: [1.44222294, 0.194432265, 1.74092482],
    C: [0.0104249404, 0.0550235257, 169.710769],
    nd: 1.647689,
    vd: 33.792803,
    PgF: 0.594,
    code6: "648338",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (648/338).",
  },
  {
    name: "S-NPH1",
    vendor: "Ohara",
    B: [1.75156623, 0.364006304, 2.47874141],
    C: [0.0135004681, 0.0668245147, 170.756006],
    nd: 1.808095,
    vd: 22.760817,
    PgF: 0.6316,
    code6: "808228",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Ultra-high-index niobophosphate flint (808/228).",
  },
  {
    name: "S-TIM2",
    vendor: "Ohara",
    B: [1.42193846, 0.133827968, 1.45060574],
    C: [0.0107291511, 0.0572587546, 145.381805],
    nd: 1.620041,
    vd: 36.263378,
    PgF: 0.5879,
    code6: "620363",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (620/363).",
  },
  {
    name: "S-LAH65",
    vendor: "Ohara",
    B: [1.68191258, 0.493779818, 1.45682822],
    C: [0.0077668425, 0.0288916181, 99.2574356],
    nd: 1.804,
    vd: 46.570373,
    PgF: 0.5565,
    code6: "804466",
    source:
      "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum (804/466); standard melt — distinct from S-LAH65V (vacuum-melt variant).",
  },
  {
    name: "S-LAH52",
    vendor: "Ohara",
    B: [1.85390925, 0.297925555, 1.39382086],
    C: [0.00955320687, 0.039381685, 102.706848],
    nd: 1.799516,
    vd: 42.225007,
    PgF: 0.5668,
    code6: "800422",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum (800/422).",
  },
  {
    name: "S-NSL3",
    vendor: "Ohara",
    B: [0.882514764, 0.389271907, 1.10693448],
    C: [0.00464504582, 0.0200551397, 136.234339],
    nd: 1.518229,
    vd: 58.902057,
    PgF: 0.5442,
    code6: "518590",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Borosilicate crown (518/590).",
  },
  {
    name: "S-LAM54",
    vendor: "Ohara",
    B: [1.84213306, 0.175468631, 1.25750878],
    C: [0.0094399322, 0.0395281122, 86.5463013],
    nd: 1.756998,
    vd: 47.82317,
    PgF: 0.5558,
    code6: "757478",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Lanthanum medium-dispersion (757/478).",
  },
  {
    name: "S-NPH53",
    vendor: "Ohara",
    B: [1.85484904, 0.396194484, 2.43512461],
    C: [0.0134621486, 0.0631945361, 170.864886],
    nd: 1.84666,
    vd: 23.88395,
    PgF: 0.6226,
    code6: "847239",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Niobophosphate flint (847/239).",
  },
  {
    name: "S-LAH51",
    vendor: "Ohara",
    B: [1.82586991, 0.283023349, 1.35964319],
    C: [0.00935297152, 0.0373803057, 100.655798],
    nd: 1.785896,
    vd: 44.202637,
    PgF: 0.5626,
    code6: "786442",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. High-index lanthanum (786/442).",
  },

  /* ────── Ohara expansion (Phase 4 buildout, Apr 2026) ──────
   * S-TIM28: dense TIM flint used in Canon RF, Nikon L35AF/PCE19, Fuji XF zooms.
   * S-BSM14: borosilicate medium crown used in Canon EF/RF and other normal lenses.
   * Coefficients from OHARA Zemax catalog (ohara_2017-11-30.agf) via refractiveindex.info.
   */
  {
    name: "S-TIM28",
    vendor: "Ohara",
    B: [1.5427081, 0.217113891, 1.81904459],
    C: [0.0113925005, 0.0579224572, 167.697189],
    nd: 1.688931,
    vd: 31.07545,
    PgF: 0.6008,
    code6: "689311",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Dense flint (689/311).",
  },
  {
    name: "S-BSM14",
    vendor: "Ohara",
    B: [1.2828627, 0.247647429, 1.10383999],
    C: [0.0122902399, -0.00613142361, 106.883378],
    nd: 1.603112,
    vd: 60.64108,
    PgF: 0.5399,
    code6: "603607",
    source: "Ohara AGF (ohara_2017-11-30.agf) via refractiveindex.info. Borosilicate medium crown (603/607).",
  },

  /* ────── Schott — high-dispersion flints and lanthanum crowns ──────
   * SF6/SF4/SF1 are the legacy lead flints used widely in vintage designs.
   * N-LAK8 is a high-frequency lanthanum crown. N-KZFS5 carries notable
   * negative ΔPgF and is APO-relevant. Coefficients transcribed verbatim
   * from the vendor-published Sellmeier-1 form (AGF dispersion form 2).
   */
  {
    name: "SF6",
    vendor: "Schott",
    B: [1.72448482, 0.390104889, 1.04572858],
    C: [0.0134871947, 0.0569318095, 118.557185],
    nd: 1.80518,
    vd: 25.43,
    PgF: 0.6102,
    code6: "805254",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "SF4",
    vendor: "Schott",
    B: [1.61957826, 0.339493189, 1.02566931],
    C: [0.0125502104, 0.0544559822, 117.652222],
    nd: 1.7552,
    vd: 27.58,
    PgF: 0.6036,
    code6: "755276",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "SF1",
    vendor: "Schott",
    B: [1.55912923, 0.284246288, 0.968842926],
    C: [0.0121481001, 0.0534549042, 112.174809],
    nd: 1.71736,
    vd: 29.51,
    PgF: 0.5984,
    code6: "717295",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "N-LAK8",
    vendor: "Schott",
    B: [1.33183167, 0.546623206, 1.19084015],
    C: [0.00620023871, 0.0216465439, 82.5827736],
    nd: 1.713,
    vd: 53.83,
    PgF: 0.545,
    code6: "713538",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "N-KZFS5",
    vendor: "Schott",
    B: [1.47460789, 0.193584488, 1.26589974],
    C: [0.00986143816, 0.0445477583, 106.436258],
    nd: 1.65412,
    vd: 39.7,
    PgF: 0.571,
    code6: "654397",
    source:
      "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. KZFS family — negative ΔPgF, APO-relevant.",
  },

  /* ────── Schott expansion (Phase 4 buildout, Apr 2026) ──────
   * SF2: legacy dense flint (648/339), fills the gap between SF1 and N-BK7 in
   *   pre-1990 Schott-dominant double-Gauss and Sonnar designs.
   * N-SK16: dense lanthanum crown (620/603) ubiquitous in Zeiss, classic Nikon,
   *   Leica Elmarit, and other pre-1990 normal/standard designs (also sold as
   *   Hoya BACD5 — same glass, different vendor name).
   * N-KZFS4: KZFS family with negative ΔPgF; APO paired glass for ED crowns.
   * N-FK51A: fluorcrown with strong positive ΔPgF (+0.034); APO-relevant in
   *   Zeiss and Nikon telephoto designs.
   * N-SK11: barium crown used in Carl Zeiss zoom rear groups.
   * F2: canonical Schott flint (620/364); dense lead flint in vintage designs.
   * N-LAK22: lanthanum crown (651/559); common in compact zoom rear elements.
   * All coefficients from SCHOTT Zemax catalog (schott_2017-01-20b.agf) via
   * refractiveindex.info.
   */
  {
    name: "SF2",
    vendor: "Schott",
    B: [1.40301821, 0.231767504, 0.939056586],
    C: [0.0105795466, 0.0493226978, 112.405955],
    nd: 1.64769,
    vd: 33.85,
    PgF: 0.5886,
    code6: "648339",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "N-SK16",
    vendor: "Schott",
    B: [1.34317774, 0.241144399, 0.994317969],
    C: [0.00704687339, 0.0229005, 92.7508526],
    nd: 1.62041,
    vd: 60.32,
    PgF: 0.5412,
    code6: "620603",
    source:
      "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. Dense lanthanum crown; Hoya BACD5-equivalent.",
  },
  {
    name: "N-KZFS4",
    vendor: "Schott",
    B: [1.35055424, 0.197575506, 1.09962992],
    C: [0.0087628207, 0.0371767201, 90.3866994],
    nd: 1.61336,
    vd: 44.49,
    PgF: 0.559,
    code6: "613445",
    source:
      "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. KZFS family — negative ΔPgF, APO-relevant.",
  },
  {
    name: "N-FK51A",
    vendor: "Schott",
    B: [0.971247817, 0.216901417, 0.904651666],
    C: [0.00472301995, 0.0153575612, 168.68133],
    nd: 1.48656,
    vd: 84.47,
    PgF: 0.5359,
    code6: "487845",
    source:
      "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. Fluorcrown with strong +ΔPgF (+0.034); APO-relevant.",
  },
  {
    name: "N-SK11",
    vendor: "Schott",
    B: [1.17963631, 0.229817295, 0.935789652],
    C: [0.00680282081, 0.0219737205, 101.513232],
    nd: 1.56384,
    vd: 60.8,
    PgF: 0.5412,
    code6: "564608",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. Barium crown.",
  },
  {
    name: "F2",
    vendor: "Schott",
    B: [1.34533359, 0.209073176, 0.937357162],
    C: [0.00997743871, 0.0470450767, 111.886764],
    nd: 1.62004,
    vd: 36.37,
    PgF: 0.5829,
    code6: "620364",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. Legacy lead flint.",
  },
  {
    name: "N-LAK22",
    vendor: "Schott",
    B: [1.14229781, 0.535138441, 1.04088385],
    C: [0.00585778594, 0.0198546147, 100.834017],
    nd: 1.65113,
    vd: 55.89,
    PgF: 0.5467,
    code6: "651559",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data. Lanthanum crown.",
  },

  /* ────── Hoya — ED crowns and dense lanthanum flints ──────
   * Hoya AGF entries use the polynomial Schott formula (form 1), not
   * Sellmeier-1. The B/C below are a least-squares Sellmeier-1 fit to
   * the polynomial sampled densely (80 points across 365–1014 nm). Max
   * absolute index error across the spectrum is below 1.4e-5.
   */
  {
    name: "FCD1",
    vendor: "Hoya",
    B: [0.708299951, 0.5095943307, 0.5656963028],
    C: [0.002809999603, 0.01255522353, 101.5038807],
    nd: 1.497,
    vd: 81.61,
    PgF: 0.544,
    code6: "497816",
    source:
      "Hoya AGF (hoya_2017-04-01.agf) form-1 polynomial; Sellmeier-1 fit, max abs index error 1.4e-5 across 365–1014 nm. ED, S-FPL51-equivalent.",
  },
  {
    name: "FCD505",
    vendor: "Hoya",
    B: [1.034776218, 0.4665786919, 0.6985808477],
    C: [0.004826471098, 0.01646358686, 105.4578263],
    nd: 1.59282,
    vd: 68.63,
    PgF: 0.5478,
    code6: "593686",
    source:
      "Hoya AGF (hoya_2017-04-01.agf) form-1 polynomial; Sellmeier-1 fit, max abs index error 4.3e-6 across 365–1014 nm.",
  },
  {
    name: "TAFD30",
    vendor: "Hoya",
    B: [1.660453863, 0.7793549404, 1.03002609],
    C: [0.007957073706, 0.02889879311, 79.74654506],
    nd: 1.883,
    vd: 40.8,
    PgF: 0.5658,
    code6: "883408",
    source:
      "Hoya AGF (hoya_2017-04-01.agf) form-1 polynomial; Sellmeier-1 fit, max abs index error 7.1e-6 across 365–1014 nm.",
  },
  {
    name: "TAFD37A",
    vendor: "Hoya",
    B: [2.188879041, 0.3049704899, 1.232253827],
    C: [0.01151042519, 0.04599567769, 93.14898114],
    nd: 1.90043,
    vd: 37.37,
    PgF: 0.5767,
    code6: "900374",
    source:
      "Hoya Zemax catalog (hoya_2017-04-01, formula 3) via refractiveindex.info; Sellmeier-1 fit, max abs index error 5.1e-6 across 365–1014 nm. Ultra-high-index lanthanum; used in Voigtländer Nokton X 50mm f/1.2.",
  },
  {
    name: "TAFD37",
    vendor: "Hoya",
    B: [2.259360214, 0.2343652859, 1.481042614],
    C: [0.01221915793, 0.04989586099, 111.9367914],
    nd: 1.90043,
    vd: 37.37,
    PgF: 0.5772,
    source:
      "Hoya Zemax catalog (hoya_2017-04-01, formula 3) via refractiveindex.info; Sellmeier-1 fit, max abs index error 3.7e-6 across 365–1014 nm. Distinct Sellmeier from TAFD37A.",
  },
  {
    name: "TAFD33",
    vendor: "Hoya",
    B: [2.212737897, 0.2183360248, 1.27909893],
    C: [0.01179423107, 0.04560326145, 100.6882193],
    nd: 1.881,
    vd: 40.14,
    PgF: 0.5704,
    code6: "881401",
    source:
      "Hoya Zemax catalog (hoya_2017-04-01, formula 3) via refractiveindex.info; Sellmeier-1 fit, max abs index error 1.0e-6 across 365–1014 nm. Dense lanthanum flint used in Ricoh GR III 28mm.",
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

  /* ────── Ohara Phase 5 additions (May 2026) ──────
   * Sourced from OHARA Zemax catalog (ohara_2017-11-30.agf) via
   * refractiveindex.info. All entries use formula 2 (standard Sellmeier-1,
   * K=0). Covers dense flints, NBH niobophosphate family, LAH/LAM/LAL/BAL/BSM
   * lanthanum and barium families, and NPH ultra-high-index flints not in the
   * earlier phases.
   */

  /* Dense flints — TIH / TIM additions */
  {
    name: "S-TIH18",
    vendor: "Ohara",
    B: [1.59921608, 0.259532164, 2.12454543],
    C: [0.0116469304, 0.0584824883, 186.927779],
    nd: 1.721507,
    vd: 29.23,
    code6: "722292",
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-TIH4",
    vendor: "Ohara",
    B: [1.66755531, 0.294411865, 2.49422119],
    C: [0.0122052137, 0.0597775329, 214.869618],
    nd: 1.755199,
    vd: 27.51,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-TIM5",
    vendor: "Ohara",
    B: [1.38531342, 0.122372945, 1.40508326],
    C: [0.0104074567, 0.0557440088, 144.878733],
    nd: 1.60342,
    vd: 38.03,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-TIM27",
    vendor: "Ohara",
    B: [1.4168047, 0.196785057, 1.68001322],
    C: [0.0100732158, 0.0537616908, 164.672436],
    nd: 1.639799,
    vd: 34.47,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-NBH8",
    vendor: "Ohara",
    B: [1.61344136, 0.257295888, 1.98364455],
    C: [0.0106386752, 0.0487071624, 159.784404],
    nd: 1.720467,
    vd: 34.71,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* NBH niobophosphate family — anomalous partial dispersion dense flints */
  {
    name: "S-NBH51",
    vendor: "Ohara",
    B: [1.71203689, 0.255989588, 1.81456998],
    C: [0.0107724134, 0.0488593504, 136.359013],
    nd: 1.749504,
    vd: 35.33,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-NBH52",
    vendor: "Ohara",
    B: [1.50305799, 0.221715926, 1.84496391],
    C: [0.00999021738, 0.0450327698, 163.722302],
    nd: 1.672999,
    vd: 38.15,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-NBH55",
    vendor: "Ohara",
    B: [1.83145156, 0.287818024, 2.152083],
    C: [0.0122443139, 0.057387731, 186.099124],
    nd: 1.799999,
    vd: 29.84,
    code6: "800298",
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-NBH56",
    vendor: "Ohara",
    B: [1.85191438, 0.431102852, 3.45278284],
    C: [0.013273262, 0.0585944644, 239.357089],
    nd: 1.854779,
    vd: 24.8,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* LAH lanthanum dense flint additions */
  {
    name: "S-LAH55VS",
    vendor: "Ohara",
    B: [1.92591095, 0.34895346, 1.42230744],
    C: [0.0096115249, 0.036513298, 103.36409],
    nd: 1.834809,
    vd: 42.74,
    source:
      "Ohara Zemax catalog 2017-11-30 via refractiveindex.info. Vacuum-melt stabilized variant of S-LAH55V; distinct Sellmeier.",
  },
  {
    name: "S-LAH60",
    vendor: "Ohara",
    B: [1.95243469, 0.30710021, 1.56578094],
    C: [0.0106442437, 0.0456735302, 110.28141],
    nd: 1.834,
    vd: 37.16,
    code6: "834372",
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAH60V",
    vendor: "Ohara",
    B: [2.05081962, 0.208475257, 1.31486394],
    C: [0.0116035991, 0.0526489359, 99.38065],
    nd: 1.833999,
    vd: 37.21,
    source:
      "Ohara Zemax catalog 2017-11-30 via refractiveindex.info. Vacuum-melt variant; distinct Sellmeier from S-LAH60.",
  },
  {
    name: "S-LAH64",
    vendor: "Ohara",
    B: [1.83021453, 0.29156359, 1.28544024],
    C: [0.0090482329, 0.0330756689, 89.3675501],
    nd: 1.788001,
    vd: 47.37,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAH89",
    vendor: "Ohara",
    B: [1.95118827, 0.377607223, 1.47757262],
    C: [0.00976560799, 0.0382232043, 112.23672],
    nd: 1.8515,
    vd: 40.78,
    code6: "852408",
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAH97",
    vendor: "Ohara",
    B: [1.0273018, 0.989293564, 1.25781057],
    C: [0.0183406129, 0.00371264195, 87.85105],
    nd: 1.755,
    vd: 52.32,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* LAM / LAL lanthanum crown additions */
  {
    name: "S-LAM2",
    vendor: "Ohara",
    B: [1.7713, 0.19581423, 1.19487834],
    C: [0.00976652444, 0.0412718628, 110.458122],
    nd: 1.743997,
    vd: 44.79,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAM51",
    vendor: "Ohara",
    B: [1.638472, 0.188330533, 1.47502357],
    C: [0.00904853452, 0.0372740173, 137.77005],
    nd: 1.699998,
    vd: 48.08,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAL8",
    vendor: "Ohara",
    B: [1.30663291, 0.571377253, 1.24303605],
    C: [0.00611862448, 0.021272147, 90.6285686],
    nd: 1.712995,
    vd: 53.87,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-LAL9",
    vendor: "Ohara",
    B: [1.16195687, 0.644860099, 1.25062221],
    C: [0.0159659509, 0.000505502467, 93.8284169],
    nd: 1.691002,
    vd: 54.82,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* BAM / BAL barium additions */
  {
    name: "S-BAM4",
    vendor: "Ohara",
    B: [1.41059317, 0.111201306, 1.34148939],
    C: [0.00963312192, 0.049877821, 152.237696],
    nd: 1.60562,
    vd: 43.71,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-BAL14",
    vendor: "Ohara",
    B: [1.27553696, 0.146083393, 1.16754699],
    C: [0.00749692359, 0.031042153, 128.947092],
    nd: 1.568832,
    vd: 56.36,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* BSM barium crown additions */
  {
    name: "S-BSM18",
    vendor: "Ohara",
    B: [0.927886025, 0.708858526, 1.18610897],
    C: [0.00417549199, 0.0184691838, 122.210416],
    nd: 1.638539,
    vd: 55.38,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },
  {
    name: "S-BSM81",
    vendor: "Ohara",
    B: [0.996356844, 0.651392837, 1.22432622],
    C: [0.0144821587, 0.00154826389, 89.9818604],
    nd: 1.639999,
    vd: 60.08,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* NSL light crown addition */
  {
    name: "S-NSL5",
    vendor: "Ohara",
    B: [1.04574577, 0.239613026, 1.1590685],
    C: [0.0058523228, 0.0236858752, 131.329061],
    nd: 1.522494,
    vd: 59.84,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* NPH ultra-high-index dense flint addition */
  {
    name: "S-NPH4",
    vendor: "Ohara",
    B: [1.93563931, 0.449596478, 2.71828573],
    C: [0.0152585289, 0.0696815778, 170.327149],
    nd: 1.89286,
    vd: 20.36,
    source: "Ohara Zemax catalog 2017-11-30 via refractiveindex.info.",
  },

  /* ────── Schott Phase 5 additions (May 2026) ──────
   * N-SK10 and N-SK14 are barium / lanthanum crowns found in legacy Schott-
   * dominant designs; SK10 and SK14 are the deprecated pre-2000 names.
   * Coefficients from Schott Zemax catalog (schott_2017-01-20b.agf) via
   * refractiveindex.info.
   */
  {
    name: "N-SK10",
    vendor: "Schott",
    B: [1.34972093, 0.238587973, 0.9667336],
    C: [0.00736272269, 0.0253765327, 103.502909],
    nd: 1.62278,
    vd: 56.98,
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
  {
    name: "N-SK14",
    vendor: "Schott",
    B: [0.936155374, 0.594052018, 1.04374583],
    C: [0.00461716525, 0.016885927, 103.736265],
    nd: 1.60311,
    vd: 60.6,
    code6: "603606",
    source: "Schott AGF (schott_2017-01-20b.agf), vendor-published Zemax catalog data.",
  },
];

/**
 * Validate that every catalog entry's Sellmeier coefficients reproduce the
 * stated nd at 587.5618 nm to within `tolerance`. Throws on the first failure
 * with a diagnostic message naming the offending entry.
 *
 * Run from a unit test (and optionally at module-load in development) so a bad
 * transcription is caught immediately rather than silently distorting traces.
 */
export function assertCatalogConsistent(tolerance = 1e-4): void {
  for (const entry of RAW_CATALOG) {
    const computed = evaluateSellmeier(entry, LINE_NM.d);
    const diff = computed - entry.nd;
    if (Math.abs(diff) > tolerance) {
      throw new Error(
        `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) — Sellmeier-computed nd=${computed.toFixed(6)} ` +
          `disagrees with listed nd=${entry.nd} by ${diff.toExponential(2)} (tolerance ${tolerance}). ` +
          `Either the coefficients or the listed nd is wrong; re-check the source: ${entry.source}`,
      );
    }
  }
}

/**
 * Catalog map keyed by canonical name (case-insensitive lookup).
 * Aliases may share an entry (e.g. "BK7" → N-BK7).
 */
const CATALOG: ReadonlyMap<string, GlassEntry> = new Map(RAW_CATALOG.map((entry) => [entry.name.toUpperCase(), entry]));

/** Aliases that route to a canonical entry. Common informal names. */
const ALIASES: ReadonlyMap<string, string> = new Map([
  ["BK7", "N-BK7"],
  ["BSC7", "S-BSL7"],
  ["FLUORITE", "CaF2"],
  ["CAF2", "CaF2"],
  // SF57 and N-SF57 are Schott names for the same high-dispersion glass family;
  // S-TIH53 is the Ohara equivalent sharing the same 6-digit code (847/238 ≈ 847/239).
  ["SF57", "S-TIH53"],
  ["N-SF57", "S-TIH53"],
  // SK16 is the legacy Schott name for N-SK16 (same glass, modernized designation).
  ["SK16", "N-SK16"],
  // BACD5 is the Hoya trade name for N-SK16-equivalent glass (same nd/vd).
  ["BACD5", "N-SK16"],
  // L-TIM28 is the Ohara large-format designation for S-TIM28 (identical Sellmeier).
  ["L-TIM28", "S-TIM28"],
  // SK10 and SK14 are legacy Schott names superseded by N-SK10 and N-SK14.
  ["SK10", "N-SK10"],
  ["SK14", "N-SK14"],
]);

/** Map of 6-digit Schott codes to canonical names. */
const CODE6_INDEX: ReadonlyMap<string, string> = new Map(
  RAW_CATALOG.filter((e) => e.code6).map((e) => [e.code6!, e.name]),
);

/**
 * Resolve a real-world `glass` string from a lens-data file to a catalog entry.
 *
 * Lens-data glass strings are messy. Examples we handle:
 *   "N-BK7"
 *   "S-LAH79 (OHARA) probable"
 *   "BK7 (Schott) / S-BSL7 (OHARA)"
 *   "851408 — S-LAH65V (OHARA)"
 *   "517642 — N-BK7 (Schott)"
 *   "S-FPL51 / N-PK52A (universal)"
 *   "Unmatched (likely Sumita proprietary)"
 *
 * Strategy: tokenize the string, try each token as a canonical name or alias,
 * then try as a Schott 6-digit code. First hit wins. Returns null when nothing
 * resolves (the caller falls back to the next dispersion-model layer).
 */
export function resolveGlass(glassString: string | undefined): GlassEntry | null {
  if (!glassString) return null;
  // Reject explicit "no match" markers up front.
  if (/\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString)) return null;

  // Pull out candidate tokens. We accept hyphenated catalog names like "S-FPL51"
  // and bare names like "BK7", plus 6-digit Schott codes.
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*|\d{6}/g) ?? [];
  for (const tokRaw of tokens) {
    const tok = tokRaw.toUpperCase();
    // Direct canonical match.
    const direct = CATALOG.get(tok);
    if (direct) return direct;
    // Alias to canonical.
    const aliased = ALIASES.get(tok);
    if (aliased) {
      const e = CATALOG.get(aliased.toUpperCase());
      if (e) return e;
    }
    // 6-digit Schott code.
    if (/^\d{6}$/.test(tok)) {
      const canonical = CODE6_INDEX.get(tok);
      if (canonical) {
        const e = CATALOG.get(canonical.toUpperCase());
        if (e) return e;
      }
    }
  }
  return null;
}

/** Total entries in the catalog (for diagnostics / status badges). */
export function catalogSize(): number {
  return RAW_CATALOG.length;
}

/** Iterate all catalog entries (for tooling: validation, frequency reports). */
export function allEntries(): readonly GlassEntry[] {
  return RAW_CATALOG;
}
