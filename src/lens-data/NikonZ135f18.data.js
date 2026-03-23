/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKKOR Z 135mm f/1.8 S Plena                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2024/147268 A1 Example 1 (Nikon / Muratani).    ║
 * ║  Telephoto prime for Nikon Z mount; f ≈ 132.3 mm, F/1.85.        ║
 * ║  16 elements / 14 groups, 1 aspherical surface.                   ║
 * ║  Focus: floating inner focus — G2 (L7) and G4 (L13) move in      ║
 * ║    opposite directions along axis.  Dual STM drive.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from combined marginal + chief ray trace at       ║
 * ║    f/1.85, full field (Y = 21.70 mm), with 8% mechanical          ║
 * ║    clearance.  Capped to sd/|R| ≤ 0.85 where needed.  Cemented   ║
 * ║    junction SDs matched.  Not patent-listed.                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-135f18-plena",
  name: "NIKON NIKKOR Z 135mm f/1.8 S Plena",
  subtitle: "WO 2024/147268 A1 Example 1 — NIKON / MURATANI",
  specs: ["16 ELEMENTS / 14 GROUPS", "f ≈ 132.3 mm", "F/1.85", "2ω ≈ 18.6°", "1 ASPHERICAL SURFACE"],

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.66382,
      vd: 27.35,
      fl: 189.8,
      glass: "SR glass (Nikon proprietary)",
      apd: "patent",
      apdNote: "ΔPgF = +0.035 (patent cond. 14); θgF = 0.632",
      role: "Front SR element — pre-corrects secondary spectrum at maximum beam diameter. Anomalous dispersion 3× larger than standard S-TIH6 at same nd/νd.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 225.2,
      glass: "ED fluorophosphate (near S-FPL51)",
      apd: "inferred",
      apdNote: "High-νd fluorophosphate; strong positive ΔPgF typical of ED glass",
      role: "Distributed positive power; first of three identical ED meniscuses that progressively converge the marginal ray.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 298.6,
      glass: "ED fluorophosphate (near S-FPL51)",
      apd: "inferred",
      apdNote: "Same glass as L2",
      role: "Distributed positive power — second ED meniscus. Weakest of the three (fl = +298.6 mm).",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 103.1,
      glass: "ED fluorophosphate (near S-FPL51)",
      apd: "inferred",
      apdNote: "Same glass as L2, L3",
      role: "Strongest ED element (fl = +103.1 mm). Cemented to L5 forming a net-negative doublet (fl ≈ −138 mm) for achromatic + Petzval correction.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      fl: -55.0,
      glass: "Anomalous high-index flint (Nf, non-catalog)",
      apd: "patent",
      apdNote: "ΔPgF = +0.010 (patent cond. 17)",
      role: "Negative partner in L4+L5 cemented doublet — dominant negative power gives doublet net fl ≈ −138 mm.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.5168,
      vd: 64.14,
      fl: 234.1,
      glass: "N-BK7 / S-BSL7 (PGM asphere)",
      apd: false,
      role: "Sole aspherical element — immediately post-stop. Front asphere corrects high-order spherical aberration and coma. ~175 µm departure at rim.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.52,
      fl: -68.8,
      glass: "Barium crown (near S-BAH27)",
      apd: false,
      role: "Focus group 1 (Gfo / G2). Moves toward image during close focus. Single-element construction minimises weight for fast AF.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.74,
      fl: 172.4,
      glass: "S-NPH1-type phosphate flint (anomalous dispersion)",
      apd: "inferred",
      apdNote:
        "ΔPgF ≈ +0.029 (est. from OHARA S-NPH1 catalog, ΔPgF = +0.0261 on OHARA normal line). Not ED — anomalous dispersion from the high-dispersion side of the Abbe diagram.",
      role: "Anomalous-dispersion high-index flint. Strong positive ΔPgF at very low νd balances chromatic contributions of front-group ED elements from the opposite side of the Abbe diagram. Concave to object — unusual orientation.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      fl: -62.7,
      glass: "Anomalous high-index flint (same as L5)",
      apd: "patent",
      apdNote: "ΔPgF = +0.010 (same glass as L5, patent cond. 17)",
      role: "Negative partner in L9+L10 cemented doublet (net fl ≈ −80 mm). Provides Petzval correction + local chromatic balancing in G3.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 276.3,
      glass: "ED fluorophosphate crown (near S-FPM2)",
      apd: "inferred",
      apdNote:
        "4th ED element per Nikon product spec. νd = 67.9 consistent with fluorophosphate family; nd/νd near OHARA S-FPM2 (1.59522/67.74).",
      role: "4th ED element — positive partner in L9+L10 cemented doublet. Fluorophosphate crown provides anomalous partial dispersion to complement L9's anomalous flint for local secondary spectrum correction within G3.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.61,
      fl: 48.9,
      glass: "Lanthanum dense flint",
      apd: false,
      role: "Strongest element in entire system (Pr / Pfoi). fl = +48.9 mm — the workhorse power element of the rear group. fPr/|fr| = 0.221.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.73,
      fl: -173.1,
      glass: "Dense lanthanum flint",
      apd: false,
      role: "Field-flattening corrector following L11. L11+L12 pair corrects Petzval sum and field curvature.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.85883,
      vd: 30.0,
      fl: 127.6,
      glass: "Dense lanthanum short flint (non-catalog)",
      apd: false,
      role: "Focus group 2 (G4). Moves toward object during close focus — counter-directional to G2. Positive power compensates G2's divergence.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.17,
      fl: -71.1,
      glass: "Lanthanum flint (near S-LAM55)",
      apd: false,
      role: "Primary negative power of G5. Creates divergent exit cone for oversized image circle — the core of the Plena's low-vignetting design.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: 88.8,
      glass: "Dense short flint (≈ S-TIH53)",
      apd: false,
      role: "Chromatic corrector within G5 — balances L14 and L16 dispersion contributions.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.59,
      fl: -89.0,
      glass: "Lanthanum flint (non-catalog)",
      apd: false,
      role: "Final optical element (Li1). Nearly-flat rear surface (R ≈ −2373 mm). Divergent exit maintains the oversized image circle.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front group — L1 through L6 ── */
    { label: "1", R: 73.0739, d: 8.258, nd: 1.66382, elemId: 1, sd: 42.0 }, // L1 front (SR)
    { label: "2", R: 173.9425, d: 1.0, nd: 1.0, elemId: 0, sd: 41.5 }, // L1 rear → air
    { label: "3", R: 75.0, d: 8.0959, nd: 1.49782, elemId: 2, sd: 41.5 }, // L2 front (ED)
    { label: "4", R: 226.5221, d: 1.0, nd: 1.0, elemId: 0, sd: 42.0 }, // L2 rear → air
    { label: "5", R: 94.0, d: 6.1837, nd: 1.49782, elemId: 3, sd: 42.0 }, // L3 front (ED)
    { label: "6", R: 255.73, d: 1.0, nd: 1.0, elemId: 0, sd: 43.5 }, // L3 rear → air
    { label: "7", R: 55.0, d: 10.248, nd: 1.49782, elemId: 4, sd: 44.0 }, // L4 front (ED, cemented D1)
    { label: "8", R: -766.4853, d: 2.1, nd: 1.85451, elemId: 5, sd: 44.0 }, // L4→L5 junction — elemId: 5
    { label: "9", R: 50.025, d: 8.2444, nd: 1.0, elemId: 0, sd: 42.0 }, // L5 rear → air

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 2.1, nd: 1.0, elemId: 0, sd: 36.0 }, // Patent surface 10

    /* ── L6 (aspherical) ── */
    { label: "11A", R: 105.9598, d: 4.7, nd: 1.5168, elemId: 6, sd: 36.0 }, // L6 front — aspherical
    { label: "12", R: 853.548, d: 1.749, nd: 1.0, elemId: 0, sd: 36.5 }, // L6 rear → air (D12, variable)

    /* ── G2: Focus group 1 — L7 ── */
    { label: "13", R: 221.6993, d: 2.1, nd: 1.6968, elemId: 7, sd: 33.0 }, // L7 front
    { label: "14", R: 39.4223, d: 22.105, nd: 1.0, elemId: 0, sd: 33.0 }, // L7 rear → air (D14, variable)

    /* ── G3: Fixed rear corrector — L8 through L12 ── */
    { label: "15", R: -164.438, d: 4.0545, nd: 1.80809, elemId: 8, sd: 28.0 }, // L8 front
    { label: "16", R: -75.4132, d: 0.1, nd: 1.0, elemId: 0, sd: 27.5 }, // L8 rear → air
    { label: "17", R: -160.7346, d: 2.1, nd: 1.85451, elemId: 9, sd: 26.5 }, // L9 front (cemented D2)
    { label: "18", R: 80.412, d: 3.2958, nd: 1.59319, elemId: 10, sd: 26.5 }, // L9→L10 junction — elemId: 10
    { label: "19", R: 157.8647, d: 0.7213, nd: 1.0, elemId: 0, sd: 26.0 }, // L10 rear → air
    { label: "20", R: 64.0655, d: 9.2661, nd: 1.8044, elemId: 11, sd: 25.5 }, // L11 front (Pr)
    { label: "21", R: -101.7863, d: 0.1, nd: 1.0, elemId: 0, sd: 24.5 }, // L11 rear → air
    { label: "22", R: 195.9905, d: 2.2, nd: 1.83481, elemId: 12, sd: 24.0 }, // L12 front
    { label: "23", R: 83.1844, d: 9.528, nd: 1.0, elemId: 0, sd: 23.5 }, // L12 rear → air (D23, variable)

    /* ── G4: Focus group 2 — L13 ── */
    { label: "24", R: 85.105, d: 4.4549, nd: 1.85883, elemId: 13, sd: 23.5 }, // L13 front
    { label: "25", R: 380.6074, d: 3.5, nd: 1.0, elemId: 0, sd: 23.5 }, // L13 rear → air (D25, variable)

    /* ── G5: Rear diverging group — L14 through L16 ── */
    { label: "26", R: -542.5119, d: 2.1, nd: 1.7859, elemId: 14, sd: 24.0 }, // L14 front
    { label: "27", R: 62.2755, d: 1.0, nd: 1.0, elemId: 0, sd: 24.0 }, // L14 rear → air
    { label: "28", R: 51.4253, d: 5.3074, nd: 1.84666, elemId: 15, sd: 24.0 }, // L15 front
    { label: "29", R: 162.7875, d: 4.3017, nd: 1.0, elemId: 0, sd: 24.5 }, // L15 rear → air
    { label: "30", R: -70.4474, d: 2.1, nd: 1.816, elemId: 16, sd: 25.0 }, // L16 front
    { label: "31", R: -2372.9554, d: 14.4393, nd: 1.0, elemId: 0, sd: 25.0 }, // L16 rear → image (BFD incl. filter)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "11A": {
      K: 1.0,
      A4: -1.741e-6,
      A6: -1.13e-10,
      A8: -2.868e-14,
      A10: 9.211e-17,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner focus) ── */
  var: {
    12: [1.749, 15.346], // D12: G1–G2 gap (L6 rear → L7 front)
    14: [22.105, 8.507], // D14: G2–G3 gap (L7 rear → L8 front)
    23: [9.528, 3.345], // D23: G3–G4 gap (L12 rear → L13 front)
    25: [3.5, 9.684], // D25: G4–G5 gap (L13 rear → L14 front)
  },

  varLabels: [
    ["12", "D12"],
    ["14", "D14"],
    ["23", "D23"],
    ["25", "D25"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (GF+S+L6)", fromSurface: "1", toSurface: "12" },
    { text: "G2 (Gfo)", fromSurface: "13", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "23" },
    { text: "G4", fromSurface: "24", toSurface: "25" },
    { text: "G5 (Gi)", fromSurface: "26", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.82,
  focusDescription:
    "Floating inner focus: G2 (L7, negative) moves toward image, G4 (L13, positive) moves toward object. Counter-directional movement maintains aberration balance. Dual STM stepping motors. Total variable gap sum constant at 36.882 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 1.85,
  fstopSeries: [1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
};

export default LENS_DATA;
