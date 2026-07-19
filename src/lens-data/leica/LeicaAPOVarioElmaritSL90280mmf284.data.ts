import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — LEICA APO-VARIO-ELMARIT-SL 90–280 mm f/2.8–4       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2016-139125 A, Example 1 (Panasonic IP Mgmt).    ║
 * ║  Inventor: Imaoka Takuya. Priority: 2015-01-21. Pub: 2016-08-04. ║
 * ║  Seven-group internally-compensating telephoto zoom.               ║
 * ║  23 elements / 7 zoom groups (17 air-separated sub-groups).       ║
 * ║  All spherical. No aspherical surfaces.                            ║
 * ║  Focus: dual inner focus (G5 neg, G6 pos) — "Dual Syncro Drive." ║
 * ║  OIS: sub-group G4C (L14+L15+L16) decentered ⊥ axis.            ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length ≈ 256 mm).                ║
 * ║  Zoom variable gaps: d6, d16, d18 (zoom only).                   ║
 * ║  Focus variable gaps: d33, d36, d38 (zoom + focus).               ║
 * ║  G5 (d33/d36) traces image-side convex trajectory during zoom.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Values estimated from      ║
 * ║    combined marginal + chief ray trace at all three zoom           ║
 * ║    positions, then constrained by edge thickness and cross-gap     ║
 * ║    sag in the large front groups. Front G1 and G2 clear apertures  ║
 * ║    therefore include vignetting reductions to satisfy the          ║
 * ║    all-spherical geometry. Cemented junction SDs matched.          ║
 * ║    Approximate — expect ±1–2 mm from production.                  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-apo-vario-elmarit-sl-90-280-f28-4",
  maker: "Leica",
  name: "LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4",
  subtitle: "JP 2016-139125 A EXAMPLE 1 — PANASONIC / IMAOKA",
  specs: [
    "23 ELEMENTS / 7 GROUPS (17 SUB-GROUPS)",
    "f = 92.3–272.9 mm",
    "F/2.91–4.11",
    "2ω = 26.4–8.8°",
    "ALL SPHERICAL — NO ASPHERICAL SURFACES",
    "7 APD ELEMENTS (3× S-FPL55, S-FPL51, 2× J-PSKH4/593670, S-FSL5)",
    "OIS (G4C, 3 elements)",
    "DUAL INNER FOCUS (G5 neg + G6 pos)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [90, 280],
  focalLengthDesign: [92.29, 272.9],
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2016-139125 A",
  patentAuthors: ["Takuya Imaoka"],
  patentAssignees: ["Panasonic Intellectual Property Management Co Ltd"],
  patentYear: 2016,
  elementCount: 23,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    // ─── G1: Front collector (fixed, positive, f = +172.5 mm) ───
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -195.1,
      glass: "S-LAH95 (OHARA)",
      apd: false,
      role: "Front field corrector; negative power at high ray height counteracts SA/coma from L2/L3.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 176.5,
      glass: "S-FPL55 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.046 (super-ED fluorophosphate); secondary-spectrum corrector in G1.",
      dPgF: 0.046,
      role: "First S-FPL55 element; primary positive power in G1 with minimal chromatic dispersion.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 191.9,
      glass: "S-FPL55 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.046; second S-FPL55 in G1, splitting positive power to reduce zonal SA.",
      dPgF: 0.046,
      role: "Second S-FPL55 element; air-spaced from L2 to control zonal spherical aberration.",
    },
    // ─── G2: Variator (moves image-side, negative, f = –59.9 mm) ───
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 177.2,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "High-dispersion positive element in negative group; chromatic corrector within G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: -119.3,
      glass: "J-PSKH4 (Hikari)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.015 (estimated); ED-region phosphate crown, zoom-dependent secondary-spectrum control.",
      dPgF: 0.015,
      cemented: "D1",
      role: "APD phosphate crown in G2 variator; maintains chromatic balance across zoom stroke.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.0,
      fl: 199.6,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Titanium flint achromatising partner to L5 in the G2 cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: -186.5,
      glass: "J-PSKH4 (Hikari)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.015 (estimated); second APD phosphate crown in G2.",
      dPgF: 0.015,
      role: "APD spacing element in G2; controls Petzval contribution with weak negative power.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -50.0,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Strong negative element carrying bulk of G2's variator power.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: 167.3,
      glass: "S-TIH23 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Titanium heavy flint achromatising partner to L8 in the rear G2 doublet.",
    },
    // ─── G3: Compensator (moves object-side, positive, f = +62.0 mm) ───
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 61.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Single-element compensator; high index permits moderate curvatures for strong power.",
    },
    // ─── G4: Central fixed group (positive, f = +148.6 mm) ───
    // G4A
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 174.3,
      glass: "S-FPL55 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.046; positioned ahead of stop for lateral chromatic aberration control.",
      dPgF: 0.046,
      role: "Third S-FPL55 element; controls lateral colour at the aperture stop.",
    },
    // G4B (L12 + L13 cemented)
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 63.7,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.028 (ED fluorophosphate); secondary-spectrum corrector in G4B doublet.",
      dPgF: 0.028,
      cemented: "D3",
      role: "ED crown in stop-region achromatic doublet; exploits extreme Δν contrast with L13.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.1,
      fl: -32.5,
      glass: "S-LAH99 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Ultra-high-index flint (nd = 2.001); Δn = 0.504 at junction generates strong corrective power.",
    },
    // G4C — OIS group (L14+L15 cemented, L16 singlet)
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: -272.4,
      glass: "NBFD15 (HOYA)",
      apd: false,
      cemented: "D4",
      role: "OIS sub-group negative element; cemented with APD L15 to minimise decentering chromatic aberrations.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      fl: 76.3,
      glass: "S-FSL5 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.002 (mild); APD fluor-silicate crown in OIS group, seventh APD element.",
      dPgF: 0.002,
      cemented: "D4",
      role: "APD crown in OIS doublet; minimises chromatic component of decentering aberrations.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 83.8,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      role: "Positive singlet completing OIS sub-group G4C; adds convergence for the relay.",
    },
    // G4D (L17 + L18 cemented)
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.51823,
      vd: 59.0,
      fl: -42.1,
      glass: "S-NSL36 (OHARA)",
      apd: false,
      cemented: "D5",
      role: "Coma-correcting element in G4D; similar νd to L18 → junction is monochromatic corrector.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 42.1,
      glass: "S-BSM28 (OHARA)",
      apd: false,
      cemented: "D5",
      role: "Barium crown in G4D; similar νd to L17 means doublet is primarily a monochromatic corrector.",
    },
    // ─── G5: First focus group (negative, f = –65.9 mm) ───
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 71.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D6",
      role: "Positive flint in G5 focus doublet; νp1 = 25.5 < 30 satisfies condition (4).",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      fl: -34.5,
      glass: "E-FL5 (HOYA)",
      apd: false,
      cemented: "D6",
      role: "Medium flint carrying bulk of G5 negative power; moderate dispersion balances L19 during focus shifts.",
    },
    // ─── G6: Second focus group (positive, f = +61.8 mm) ───
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 61.2,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Single-element positive focus group; νp2 = 23.8 < 30 satisfies condition (3). Fast AF via low mass.",
    },
    // ─── G7: Rear field-flattening group (fixed, negative, f = –90.2 mm) ───
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 38.0,
      fl: -38.6,
      glass: "S-BAH28 (OHARA)",
      apd: false,
      role: "Strong negative element for Petzval correction and field flattening.",
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Plano-Convex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 73.0,
      glass: "S-BSM28 (OHARA)",
      apd: false,
      role: "Field lens controlling exit-pupil position for L-mount sensor telecentricity.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── G1: Front collector group (fixed) ───
    { label: "1", R: 178.6679, d: 2.4, nd: 1.90366, elemId: 1, sd: 44.0 }, // L1 front
    { label: "2", R: 88.7307, d: 1.0247, nd: 1.0, elemId: 0, sd: 43.5 }, // L1 rear → air
    { label: "3", R: 88.7307, d: 9.6783, nd: 1.437, elemId: 2, sd: 37.2 }, // L2 front (edge-thickness limited)
    { label: "4", R: -590.4004, d: 0.2, nd: 1.0, elemId: 0, sd: 37.2 }, // L2 rear → air (edge-thickness limited)
    { label: "5", R: 88.4008, d: 8.2889, nd: 1.437, elemId: 3, sd: 35.7 }, // L3 front (edge-thickness limited)
    { label: "6", R: -1630.1959, d: 1.1675, nd: 1.0, elemId: 0, sd: 35.7 }, // L3 rear → air [var d6] (edge-thickness limited)
    // ─── G2: Variator (moves image-side) ───
    { label: "7", R: 293.1087, d: 4.0502, nd: 1.84666, elemId: 4, sd: 30.5 }, // L4 front
    { label: "8", R: -307.2496, d: 2.2116, nd: 1.0, elemId: 0, sd: 29.5 }, // L4 rear → air
    { label: "9", R: 246.3056, d: 1.8, nd: 1.59349, elemId: 5, sd: 28.5 }, // L5 front (cem D1)
    { label: "10", R: 55.0284, d: 3.0361, nd: 1.69895, elemId: 6, sd: 28.5 }, // L5→L6 junction (cem D1)
    { label: "11", R: 90.9059, d: 2.8838, nd: 1.0, elemId: 0, sd: 21.5 }, // L6 rear → air (S11→S12 cross-gap limited)
    { label: "12", R: 2761.1514, d: 1.6, nd: 1.59349, elemId: 7, sd: 21.5 }, // L7 front (S11→S12 cross-gap limited)
    { label: "13", R: 106.4404, d: 5.7845, nd: 1.0, elemId: 0, sd: 20.5 }, // L7 rear → air (S13→S14 cross-gap limited)
    { label: "14", R: -70.1362, d: 1.5, nd: 1.72916, elemId: 8, sd: 20.5 }, // L8 front (cem D2; S13→S14 cross-gap limited)
    { label: "15", R: 76.0061, d: 2.2385, nd: 1.78472, elemId: 9, sd: 22.5 }, // L8→L9 junction (cem D2)
    { label: "16", R: 158.6379, d: 61.1833, nd: 1.0, elemId: 0, sd: 22.0 }, // L9 rear → air [var d16]
    // ─── G3: Compensator (moves object-side) ───
    { label: "17", R: 70.8988, d: 6.4593, nd: 1.83481, elemId: 10, sd: 21.5 }, // L10 front
    { label: "18", R: -183.8522, d: 1.0, nd: 1.0, elemId: 0, sd: 20.5 }, // L10 rear → air [var d18]
    // ─── G4: Central fixed group ───
    // G4A: L11
    { label: "19", R: 44.7119, d: 4.3261, nd: 1.437, elemId: 11, sd: 19.5 }, // L11 front
    { label: "20", R: 108.2417, d: 5.4981, nd: 1.0, elemId: 0, sd: 18.5 }, // L11 rear → air
    // Aperture stop
    { label: "STO", R: 1e15, d: 2.5, nd: 1.0, elemId: 0, sd: 14.5 }, // aperture stop
    // G4B: L12+L13 cemented doublet
    { label: "22", R: 346.1034, d: 3.746, nd: 1.497, elemId: 12, sd: 14.5 }, // L12 front (cem D3)
    { label: "23", R: -68.3248, d: 1.3, nd: 2.001, elemId: 13, sd: 14.0 }, // L12→L13 junction (cem D3)
    { label: "24", R: 40.8325, d: 2.5862, nd: 1.0, elemId: 0, sd: 14.0 }, // L13 rear → air
    // G4C: OIS group — L14+L15 cemented, L16 singlet
    { label: "25", R: 69.5973, d: 1.3, nd: 1.8061, elemId: 14, sd: 14.5 }, // L14 front (cem D4)
    { label: "26", R: 42.1581, d: 6.5907, nd: 1.48749, elemId: 15, sd: 14.5 }, // L14→L15 junction (cem D4)
    { label: "27", R: -83.4053, d: 0.2, nd: 1.0, elemId: 0, sd: 15.5 }, // L15 rear → air
    { label: "28", R: 77.8769, d: 3.5765, nd: 1.713, elemId: 16, sd: 15.5 }, // L16 front
    { label: "29", R: -257.0857, d: 1.3569, nd: 1.0, elemId: 0, sd: 15.5 }, // L16 rear → air
    // Variable aperture stop (VA) — changes diameter during zoom
    { label: "30", R: 1e15, d: 5.0472, nd: 1.0, elemId: 0, sd: 16.0 }, // VA
    // G4D: L17+L18 cemented doublet
    { label: "31", R: -49.6473, d: 1.3, nd: 1.51823, elemId: 17, sd: 16.0 }, // L17 front (cem D5)
    { label: "32", R: 36.36, d: 7.9223, nd: 1.62041, elemId: 18, sd: 16.0 }, // L17→L18 junction (cem D5)
    { label: "33", R: -48.7369, d: 2.5391, nd: 1.0, elemId: 0, sd: 17.0 }, // L18 rear → air [var d33]
    // ─── G5: First focus group (negative, cemented doublet) ───
    { label: "34", R: -149.8327, d: 2.7305, nd: 1.80518, elemId: 19, sd: 16.5 }, // L19 front (cem D6)
    { label: "35", R: -41.7039, d: 0.8, nd: 1.58144, elemId: 20, sd: 16.5 }, // L19→L20 junction (cem D6)
    { label: "36", R: 38.5636, d: 23.6362, nd: 1.0, elemId: 0, sd: 16.0 }, // L20 rear → air [var d36]
    // ─── G6: Second focus group (positive singlet) ───
    { label: "37", R: 143.6137, d: 4.6416, nd: 1.84666, elemId: 21, sd: 19.5 }, // L21 front
    { label: "38", R: -81.0021, d: 14.0722, nd: 1.0, elemId: 0, sd: 19.5 }, // L21 rear → air [var d38]
    // ─── G7: Rear field-flattening group (fixed) ───
    { label: "39", R: -65.4499, d: 1.5, nd: 1.72342, elemId: 22, sd: 17.5 }, // L22 front
    { label: "40", R: 48.7669, d: 3.0912, nd: 1.0, elemId: 0, sd: 17.5 }, // L22 rear → air
    { label: "41", R: 45.2665, d: 8.2138, nd: 1.62041, elemId: 23, sd: 19.5 }, // L23 front
    { label: "42", R: 1e15, d: 31.0184, nd: 1.0, elemId: 0, sd: 21.6 }, // L23 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {}, // All-spherical design

  /* ── Variable air spacings (zoom + focus) ──
   *  Zoom positions: [92.2864, 158.6671, 272.9028] mm (wide, mid, tele).
   *  Each entry is an array of [d_inf, d_close] pairs, one per zoom position.
   *
   *  Zoom-only gaps (d6, d16, d18): identical inf/close values at each position.
   *  Focus variable gaps (d33, d36, d38): different inf/close values.
   *  Gap conservation: d6+d16+d18 = 63.351 mm (constant — internal zoom).
   *  Focus gap sum: d33+d36+d38 = 40.248 mm (constant at all zoom/focus states).
   *
   *  Close focus: 1200 mm object distance (patent Example 1).
   *  Production MFD varies by focal length: 0.6 m (wide) to 1.4 m (tele).
   */
  var: {
    // Zoom-only gaps (no focus change)
    "6": [
      [1.1675, 1.1675],
      [29.0997, 29.0997],
      [53.3278, 53.3278],
    ],
    "16": [
      [61.1833, 61.1833],
      [29.6605, 29.6605],
      [1.0, 1.0],
    ],
    "18": [
      [1.0, 1.0],
      [4.5905, 4.5905],
      [9.023, 9.023],
    ],
    // Zoom + focus gaps
    "33": [
      [2.5391, 4.3347],
      [6.8311, 12.597],
      [2.5, 19.5673],
    ],
    "36": [
      [23.6362, 20.6573],
      [24.1859, 15.6675],
      [34.895, 12.2099],
    ],
    "38": [
      [14.0722, 15.2555],
      [9.2305, 11.983],
      [2.8526, 8.4703],
    ],
  },

  varLabels: [
    ["6", "D6 (G1–G2)"],
    ["16", "D16 (G2–G3)"],
    ["18", "D18 (G3–G4)"],
    ["33", "D33 (G4–G5)"],
    ["36", "D36 (G5–G6)"],
    ["38", "BF (G6–G7)"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [92.2864, 158.6671, 272.9028],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (–)", fromSurface: "7", toSurface: "16" },
    { text: "G3 (+)", fromSurface: "17", toSurface: "18" },
    { text: "G4 (+)", fromSurface: "19", toSurface: "33" },
    { text: "G5 (–)", fromSurface: "34", toSurface: "36" },
    { text: "G6 (+)", fromSurface: "37", toSurface: "38" },
    { text: "G7 (–)", fromSurface: "39", toSurface: "42" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" }, // L5+L6
    { text: "D2", fromSurface: "14", toSurface: "16" }, // L8+L9
    { text: "D3", fromSurface: "22", toSurface: "24" }, // L12+L13
    { text: "D4", fromSurface: "25", toSurface: "27" }, // L14+L15
    { text: "D5", fromSurface: "31", toSurface: "33" }, // L17+L18
    { text: "D6", fromSurface: "34", toSurface: "36" }, // L19+L20
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.2, // Patent Example 1 close-focus object distance (1200 mm)
  focusDescription:
    "Dual inner focus (Leica 'Dual Syncro Drive'): G5 (neg cemented doublet L19–L20) moves image-side; " +
    "G6 (pos singlet L21) moves object-side. Opposing motion cancels field curvature during focus.",

  /* ── Aperture configuration ── */
  nominalFno: [2.90761, 3.28448, 4.10547], // variable-aperture zoom: one value per zoom position
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.22,
} satisfies LensDataInput;

export default LENS_DATA;
