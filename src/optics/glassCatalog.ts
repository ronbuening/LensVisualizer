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
 * Coverage status: this is a STARTER catalog (~Phase 2 of the chromatic
 * improvement plan). The follow-up doc agent_docs/glass-catalog-buildout.md
 * lists the prioritized list of glasses still needed and how to source them.
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
 * STARTER CATALOG
 *
 * Coefficients are taken from authoritative public vendor catalogs. Each
 * entry's `source` field cites the document or database used. To verify a
 * new entry, compute n at LINE_NM.d and compare to the listed nd; agreement
 * to ~1e-5 is the expected accuracy of a transcribed Sellmeier fit.
 *
 * The catalog is intentionally small in this first pass. The follow-up doc
 * agent_docs/glass-catalog-buildout.md lists prioritized additions.
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
    source:
      "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data. Voigtländer APO-Lanthar 50/2 element 8.",
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
    source:
      "Ohara AGF (ohara_2017-11-30.agf), vendor-published Zemax catalog data. Voigtländer APO-Lanthar 50/2 element 2.",
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
