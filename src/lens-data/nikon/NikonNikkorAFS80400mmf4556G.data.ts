import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0049962 A1 Example 1 (ZL1), Tomoki Ito,     ║
 * ║  Nikon Corporation (published 2020-02-13; priority 2013-01-28).    ║
 * ║  Five-group (+/−/+/−/+) telephoto zoom, all-spherical.            ║
 * ║  20 elements / 12 groups, 0 aspherical surfaces.                   ║
 * ║  1 Super ED + 4 ED glass elements, Nano Crystal Coat.              ║
 * ║  Focus: inner focus via G3 axial translation.                      ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D1(5), D4(21) — zoom only.                   ║
 * ║  Focus variable gaps: D2(13), D3(18) — zoom + focus.              ║
 * ║  BF variable gap: 33 — zoom only.                                  ║
 * ║  Fixed groups during zoom: G2 and G4.                              ║
 * ║  Moving groups during zoom: G1, G3, G5 (+ aperture stop).         ║
 * ║  All variable gaps are monotonic across zoom range.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace (60% field,   ║
 * ║    8% clearance) across all three zoom positions, then refined     ║
 * ║    against the manufacturer section drawing for mechanical form.   ║
 * ║    Front group capped at 37 mm (77 mm filter thread constraint).   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-afs-80-400-f45-56g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 80-400mm f/4.5-5.6 G ED VR",
  subtitle: "US 2020/0049962 A1 Example 1 — Nikon / Tomoki Ito",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 12 GROUPS",
      "f = 80–400 mm (design 81.6–392.0 mm)",
      "F/4.5–5.6",
      "2ω = 30°10′–6°10′",
      "ALL SPHERICAL · 4 ED + 1 SUPER ED",
    ],
    elementCount: 20,
    groupCount: 12,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: [80, 400], design: [81.6, 392.0] },
    fNumber: { marketing: 4.5, design: 4.56 },
  },

  source: {
    patentNumber: "US 2020/0049962 A1",
    patentYear: 2020,
    authors: ["Tomoki Ito"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    // G1 — Front positive group (f = +161.71 mm)
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus",
      nd: 1.90265,
      vd: 35.7,
      focalLengthMm: -210.5,
      glass: "J-LASFH9 (Hikari, 903357 high-index lanthanum flint)",
      apd: false,
      role: "High-index flint of front achromatic doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 165.1,
      glass: "J-FKH1 (Hikari, 498826 ED fluorophosphate)",
      apd: "inferred",
      apdNote: "HIKARI J-FKH1 ED fluorophosphate; inferred as one of Nikon's four ED elements.",
      role: "ED crown of front doublet; primary axial color corrector",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.0,
      focalLengthMm: 202.2,
      glass: "FCD100 (HOYA) — Super ED",
      apd: "inferred",
      apdNote: "Super ED (νd=95.0); secondary spectrum corrector",
      role: "Super ED singlet; attacks residual chromatic at 400 mm",
    },
    // G2 — Negative variator (f = −32.53 mm), fixed during zoom
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.9,
      focalLengthMm: 74.0,
      glass: "J-LAF016 (Hikari; exact Nikon patent coordinate match)",
      apd: false,
      role: "Positive flint of G2 achromatic doublet",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: -80.4,
      glass: "J-FKH1 (Hikari, 498826 ED fluorophosphate)",
      apd: "inferred",
      apdNote: "HIKARI J-FKH1 ED fluorophosphate; inferred as one of Nikon's four ED elements.",
      role: "ED crown; lateral chromatic correction",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -33.7,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      role: "VR sub-group front; strong negative power",
      cemented: "VR",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 55.5,
      glass: "SF6 (Schott)",
      apd: false,
      role: "VR sub-group rear; partial compensation of L23",
      cemented: "VR",
    },
    {
      id: 8,
      name: "L25",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -49.6,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Rear diverging singlet; coma control at wide angle",
    },
    // G3 — Positive focusing group (f = +50.82 mm)
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 78.7,
      glass: "J-PSKH1 (Hikari, 593679 ED phosphate crown)",
      apd: "inferred",
      apdNote: "HIKARI J-PSKH1 lists ΔPgF = +0.0135; inferred as one of Nikon's four ED elements.",
      role: "Front positive singlet of focus group",
      dPgF: 0.0135,
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Neg. Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -85.0,
      glass: "S-LAH95 (OHARA)",
      apd: false,
      role: "High-dispersion flint of focus doublet",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 52.5,
      glass: "J-PSKH1 (Hikari, 593679 ED phosphate crown)",
      apd: "inferred",
      apdNote: "HIKARI J-PSKH1 lists ΔPgF = +0.0135; inferred as one of Nikon's four ED elements.",
      role: "ED positive element of focus doublet",
      cemented: "D3",
      dPgF: 0.0135,
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
    },
    // G4 — Negative compensator (f = −70.03 mm), fixed during zoom
    {
      id: 12,
      name: "L41",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.6,
      focalLengthMm: -31.9,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Strong negative; Petzval flattener",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L42",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.90265,
      vd: 35.7,
      focalLengthMm: 57.9,
      glass: "J-LASFH9 (Hikari, 903357 high-index lanthanum flint)",
      apd: false,
      role: "Partial compensator; chromatic tuning",
      cemented: "D4",
    },
    // G5 — Positive relay group (f = +59.67 mm)
    {
      id: 14,
      name: "L51",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: 83.9,
      glass: "S-LAM2 (OHARA)",
      apd: false,
      role: "Front positive singlet; collects beam after aperture stop",
    },
    {
      id: 15,
      name: "L52",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.3,
      focalLengthMm: 54.6,
      glass: "S-FSL5 (OHARA) / N-FK5 (Schott)",
      apd: false,
      role: "Front element of cemented triplet",
      cemented: "T1",
    },
    {
      id: 16,
      name: "L53",
      label: "Element 16",
      type: "Plano-Concave Negative",
      nd: 1.95,
      vd: 29.4,
      focalLengthMm: -27.8,
      glass: "J-LASFH15 (Hikari, 950294) / TAFD45 class",
      apd: false,
      role: "Ultra-high-index center negative; Petzval flattener",
      cemented: "T1",
    },
    {
      id: 17,
      name: "L54",
      label: "Element 17",
      type: "Plano-Convex Positive",
      nd: 1.51742,
      vd: 52.2,
      focalLengthMm: 51.1,
      glass: "S-NSL36 (OHARA) / K10 (Schott)",
      apd: false,
      role: "Rear element of triplet; field corrector",
      cemented: "T1",
    },
    {
      id: 18,
      name: "L55",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.7,
      focalLengthMm: 27.7,
      glass: "S-TIM22 (OHARA) / S-TIF6 class (patent vd=33.7)",
      apd: false,
      role: "Strong positive near image; field flattening",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L56",
      label: "Element 19",
      type: "Plano-Concave Negative",
      nd: 1.603,
      vd: 65.4,
      focalLengthMm: -32.7,
      glass: "S-PHM53 (OHARA) / phosphate crown class",
      apd: false,
      role: "Field flattener; low-dispersion crown partner assists lateral color",
      cemented: "D5",
    },
    {
      id: 20,
      name: "L57",
      label: "Element 20",
      type: "Neg. Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -82.2,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Final element; exit pupil / telecentricity control",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients — all spherical design ── */
  surfaces: [
    // G1 — L11+L12 cemented doublet
    { label: "1", R: 182.816, d: 2.5, sd: 37.0, medium: 1 }, // L11 front
    { label: "2", R: 92.566, d: 10.0, sd: 36.5, medium: 2 }, // L11→L12 junction
    { label: "3", R: -707.416, d: 0.1, sd: 36.0 }, // L12 rear → air
    // G1 — L13 singlet
    { label: "4", R: 83.365, d: 9.2, sd: 36.0, medium: 3 }, // L13 front
    { label: "5", R: 1420.361, sd: 35.5 }, // L13 rear → D1 (variable, zoom only)
    // G2 — L21+L22 cemented doublet
    { label: "6", R: 117.082, d: 6.4, sd: 27.0, medium: 4 }, // L21 front
    { label: "7", R: -117.044, d: 2.2, sd: 26.0, medium: 5 }, // L21→L22 junction
    { label: "8", R: 61.183, d: 5.81, sd: 22.4 }, // L22 rear → air
    // G2 — L23+L24 cemented doublet (VR sub-group)
    { label: "9", R: -265.081, d: 2.0, sd: 22.4, medium: 6 }, // L23 front
    { label: "10", R: 30.785, d: 4.6, sd: 18.9, medium: 7 }, // L23→L24 junction
    { label: "11", R: 92.264, d: 6.2, sd: 18.9 }, // L24 rear → air
    // G2 — L25 singlet
    { label: "12", R: -56.342, d: 2.0, sd: 19.4, medium: 8 }, // L25 front
    { label: "13", R: 158.965, sd: 19.4 }, // L25 rear → D2 (variable, zoom+focus)
    // G3 — L31 singlet (focus group)
    { label: "14", R: 112.252, d: 4.6, sd: 20.3, medium: 9 }, // L31 front
    { label: "15", R: -78.685, d: 0.1, sd: 20.3 }, // L31 rear → air
    // G3 — L32+L33 cemented doublet
    { label: "16", R: 67.612, d: 1.8, sd: 20.3, medium: 10 }, // L32 front
    { label: "17", R: 35.499, d: 6.4, sd: 19.0, medium: 11 }, // L32→L33 junction
    { label: "18", R: -238.177, sd: 19.0 }, // L33 rear → D3 (variable, zoom+focus)
    // G4 — L41+L42 cemented doublet (fixed during zoom)
    { label: "19", R: -58.467, d: 1.6, sd: 18.6, medium: 12 }, // L41 front
    { label: "20", R: 38.999, d: 3.6, sd: 18.6, medium: 13 }, // L41→L42 junction
    { label: "21", R: 146.9, sd: 18.6 }, // L42 rear → D4 (variable, zoom only)
    // Aperture stop — moves with G5
    { label: "STO", R: "flat", d: 2.0 },
    // G5 — L51 singlet
    { label: "23", R: 124.142, d: 3.4, sd: 20.3, medium: 14 }, // L51 front
    { label: "24", R: -124.142, d: 0.1, sd: 20.3 }, // L51 rear → air
    // G5 — L52+L53+L54 cemented triplet
    { label: "25", R: 26.615, d: 6.8, sd: 17.6, medium: 15 }, // L52 front
    { label: "26", R: "flat", d: 2.0, sd: 17.6, medium: 16 }, // L52→L53 junction
    { label: "27", R: 26.437, d: 4.8, sd: 15.0, medium: 17 }, // L53→L54 junction
    { label: "28", R: "flat", d: 17.6, sd: 15.0 }, // L54 rear → air
    // G5 — L55+L56 cemented doublet
    { label: "29", R: 176.178, d: 6.0, sd: 13.5, medium: 18 }, // L55 front
    { label: "30", R: -19.703, d: 1.6, sd: 13.5, medium: 19 }, // L55→L56 junction
    { label: "31", R: "flat", d: 11.27, sd: 15.0 }, // L56 rear → air
    // G5 — L57 singlet
    { label: "32", R: -22.131, d: 1.6, sd: 15.0, medium: 20 }, // L57 front
    { label: "33", R: -33.748, sd: 15.0 }, // L57 rear → BF (variable, zoom only)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 81.6, nominalFNumber: 4.56, label: "Wide" },
      { focalLengthMm: 200.0, nominalFNumber: 5.38 },
      { focalLengthMm: 392.0, nominalFNumber: 5.85, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.75,
    description: "Inner focus: G3 translates toward image. D2 increases, D3 decreases. SWM AF drive.",
  },

  /* (moved from var) ── Variable air spacings ──
   *  Zoom lens format: each value is [[d_inf, d_close], ...] per zoom position.
   *  Focus: G3 moves toward image → D2 increases, D3 decreases.
   *  D1, D4, BF: zoom-only (identical inf/close values).
   *  MFD = 1.75 m (AF). Close-focus gaps solved by paraxial ray trace.
   */
  gaps: {
    "5": {
      label: "D1",
      values: [
        [8.225, 8.225],
        [45.191, 45.191],
        [64.292, 64.292],
      ],
    }, // D1: G1→G2, zoom only
    "13": {
      label: "D2",
      values: [
        [27.059, 29.722],
        [15.341, 21.696],
        [3.056, 16.069],
      ],
    }, // D2: G2→G3, zoom + focus
    "18": {
      label: "D3",
      values: [
        [5.388, 2.725],
        [17.106, 10.751],
        [29.391, 16.378],
      ],
    }, // D3: G3→G4, zoom + focus
    "21": {
      label: "D4",
      values: [
        [26.684, 26.684],
        [11.153, 11.153],
        [2.382, 2.382],
      ],
    }, // D4: G4→STO/G5, zoom only
    "33": {
      label: "BF",
      values: [
        [52.8, 52.8],
        [68.3, 68.3],
        [77.1, 77.1],
      ],
    }, // BF: last surface→image, zoom only
  },

  aperture: { fStops: [4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32], blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "18" },
    { text: "G4 (−)", fromSurface: "19", toSurface: "21" },
    { text: "G5 (+)", fromSurface: "23", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "VR", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "T1", fromSurface: "25", toSurface: "28" },
    { text: "D5", fromSurface: "29", toSurface: "31" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.4, yScFill: 0.28 },
} satisfies LensDataV2Input;

export default LENS_DATA;
