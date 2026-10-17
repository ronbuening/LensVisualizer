import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0142168 A1 Example 1, Table 1 (Harada/Nikon).  ║
 * ║  Example 1 is the closest production match: 20 elements / 16         ║
 * ║  groups with four aspherical elements (L11, hybrid L12, ASP/ED L41,  ║
 * ║  L46). Example 2 shares the layout but adds a fifth asphere in G32.  ║
 * ║  Negative-lead zoom: G1(−)·G2(+)·G3(−)·G4(+), stored at patent       ║
 * ║  scale (f = 24.80 / 50.01 / 67.85 mm, FNo 2.92 at every station).    ║
 * ║                                                                      ║
 * ║  ZOOM (¶[0153], Fig. 1): G1 moves imageward then objectward; G2 and  ║
 * ║  G4 move objectward; G3 moves imageward then objectward. FC1, the    ║
 * ║  stop S and FC2 are fixed relative to the image. Zoom gaps: D7,      ║
 * ║  D18, D20, D30, D39 (+D40). D26 (G31–G32) stays 1.250 mm.            ║
 * ║                                                                      ║
 * ║  FOCUS (¶[0154]): G21 (L21–L25) moves 6.735 mm toward the image at   ║
 * ║  every station (Table 1 Focusing Data). Close gaps are D7 + 6.735    ║
 * ║  and D16 − 6.735; they focus at the published imaging distances      ║
 * ║  0.4183 / 0.3810 / 0.3966 m (zoomCloseFocusM).                       ║
 * ║                                                                      ║
 * ║  SURFACE LABELS follow the patent numbering. Patent surface 19 (FC1, ║
 * ║  flat, d = 1.200) is omitted and its spacing folded into gap "18"    ║
 * ║  (D18 + 1.200). Patent 20 is STO. Patent 40 (FC2) is omitted and     ║
 * ║  gap "39A" = D39 + D40, which equals the patent's BF.                ║
 * ║                                                                      ║
 * ║  ASPHERES: Eq. (a) uses κ with κ = 1 for a sphere, so K = κ − 1.     ║
 * ║  2A: κ = 0 → K = −1; 3A, 31A, 39A: κ = 1 → K = 0.                    ║
 * ║  L12 is a composite asphere: resin layer L12r (id 2) cemented to     ║
 * ║  glass body L12g (id 3); counted as one element.                     ║
 * ║                                                                      ║
 * ║  APERTURE: the patent publishes FNo 2.92 at W/M/T but no iris        ║
 * ║  diameters. The stop radius is derived from the design f-number at   ║
 * ║  each zoom station: 9.47 / 11.21 / 12.36 mm.                         ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: no clear apertures are published. Values    ║
 * ║  are checked against an exact real-ray trace (Y = 21.6 mm, FNo 2.92, ║
 * ║  all stations) and Fig. 1 (W row, 300 dpi, 0.1466 mm/px). Surface 1  ║
 * ║  (32.0), L21 (17.8), 14/15 (17.9) and G3 (11.5–13.4) follow the      ║
 * ║  figure or the ray floor; G1 rear, L22–L26 and G4 are within ~15 %   ║
 * ║  of the figure and retained as earlier estimates.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-afs-24-70-f28e-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24-70mm f/2.8 E ED VR",
  subtitle: "US 2020/0142168 A1 Example 1 — Nikon / Harada",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["20 ELEMENTS / 16 GROUPS", "f = 24–70 mm", "F/2.8", "2ω = 85.0–34.4°", "4 ASPHERICAL SURFACES"],
    elementCount: 20,
    groupCount: 16,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: [24, 70], design: [24.8, 67.85] },
    fNumber: { marketing: 2.8, design: 2.92 },
  },

  source: {
    patentNumber: "US 2020/0142168 A1",
    patentYear: 2020,
    authors: ["Hiroki Harada"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    // ── G1 (negative) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.74389,
      vd: 49.5,
      focalLengthMm: -53.4,
      glass: "M-NBF1 (Hoya catalog equivalent; patent code 744495, supplier unspecified)",
      apd: false,
      role: "Front element; aspherical rear corrects wide-angle distortion and SA",
    },
    {
      id: 2,
      name: "L12r",
      label: "Element 2r",
      type: "Asph. Resin Layer",
      nd: 1.56093,
      vd: 36.6,
      focalLengthMm: 2115.9,
      glass: "UV-curing resin",
      apd: false,
      role: "Composite aspherical resin layer on L12g; corrects field curvature and astigmatism",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12g",
      label: "Element 2g",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -55.2,
      glass: "J-LASF015 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Glass body of composite aspherical; strong negative power for G1 divergence",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 80.2,
      glass: "TAFD55 (HOYA catalog equivalent, 001291 HRI; S-LAH99 same code; patent gives nd/νd only)",
      apd: false,
      role: "HRI element (nd > 2.0); field flattener with reduced Petzval contribution",
    },
    // ── G21 (focusing sub-group, positive) ──
    {
      id: 5,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: 194.6,
      glass: "J-PSKH4 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Weak positive; gentle convergence at G2 entry",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: 121.5,
      glass: "J-PSKH4 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Continues convergence with Petzval-friendly meniscus shape",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: 89.4,
      glass: "J-PSKH4 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Crown element of achromatic doublet; corrects axial chromatic aberration",
      cemented: "Ja",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -37.5,
      glass: "J-LASFH13 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Flint element of achromatic doublet; net doublet power is negative (−67.6 mm)",
      cemented: "Ja",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 71.2,
      glass: "J-LASF016 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Strongest positive element in G21; bulk converging power",
    },
    // ── G22 (relay element, positive) ──
    {
      id: 10,
      name: "L26",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: 64.0,
      glass: "J-LASF09A (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Relay element between focusing group and stop; fixed during focus",
    },
    // ── G31 (intermediate group, negative) ──
    {
      id: 11,
      name: "L31",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -33.4,
      glass: "J-LASF015 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Strong negative; re-collimates converging beam for VR group feed",
    },
    {
      id: 12,
      name: "L32",
      label: "Element 11",
      type: "Neg. Meniscus (concave obj.)",
      nd: 1.603,
      vd: 65.4,
      focalLengthMm: -129.7,
      glass: "J-PSK03 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: "inferred",
      apdNote:
        "ED candidate by glass family only (J-PSK03 phosphate crown); the patent gives nd/νd only and does not identify ED elements.",
      role: "Weak negative; fine-tunes divergence; low-dispersion lateral-color control",
    },
    {
      id: 13,
      name: "L33",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 51.5,
      glass: "J-SF03 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Positive flint; forms air-spaced achromat with L31/L32 for lateral color correction",
    },
    // ── G32 (VR sub-group, negative) ──
    {
      id: 14,
      name: "L34",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: -72.6,
      glass: "J-PSKH4 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "VR primary element; low-dispersion glass minimizes chromatic penalty of decentration",
    },
    {
      id: 15,
      name: "L35",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 180.9,
      glass: "J-SF6 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "VR corrector; weak positive flint compensates L34 chromatic contribution",
    },
    // ── G4 (rear positive group) ──
    {
      id: 16,
      name: "L41",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph, ED)",
      nd: 1.55332,
      vd: 71.7,
      focalLengthMm: 106.8,
      glass: "M-FCD500 (HOYA catalog equivalent, 553717 mold-press ED; patent gives nd/νd only)",
      apd: "inferred",
      apdNote: "M-FCD500-class mold-press ED glass matching Nikon's ASP/ED element; the patent gives nd/νd only.",
      role: "Combined aspherical + ED correction; spherical base (κ = 1) with positive A4 controls zonal SA",
    },
    {
      id: 17,
      name: "L42",
      label: "Element 16",
      type: "Neg. Meniscus (concave img.)",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -101.1,
      glass: "S-LAH55 (OHARA catalog equivalent, 835427; patent gives nd/νd only)",
      apd: false,
      role: "Dense crown element of achromatic doublet; fine-tunes axial color",
      cemented: "Jb",
    },
    {
      id: 18,
      name: "L43",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 56.3,
      glass: "J-PSKH1 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: "inferred",
      apdNote: "ED candidate by glass family (J-PSKH1 phosphate crown); the patent gives nd/νd only.",
      role: "Crown in doublet (net +128.1 mm); possible second ED element",
      cemented: "Jb",
    },
    {
      id: 19,
      name: "L44",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 44.8,
      glass: "J-FKH1 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: "inferred",
      apdNote: "J-FKH1 fluorophosphate ED glass (S-FPL51 class); the patent gives nd/νd only.",
      role: "ED element; primary secondary-spectrum correction in rear triplet",
      cemented: "Tc",
    },
    {
      id: 20,
      name: "L45",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -37.1,
      glass: "J-SF6 (HIKARI catalog equivalent; patent gives nd/νd only)",
      apd: false,
      role: "Dense flint in triplet; complementary dispersion for rear-group chromatic correction",
      cemented: "Tc",
    },
    {
      id: 21,
      name: "L46",
      label: "Element 20",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.3,
      focalLengthMm: 180.6,
      glass: "LAC13 (HOYA catalog equivalent, 694533; patent gives nd/νd only)",
      apd: false,
      role: "Third glass in triplet; aspherical rear (surface 39A) corrects residual field curvature",
      cemented: "Tc",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── G1 (negative): L11, L12r+L12g (composite asph), L13 (HRI) ──
    { label: "1", R: 121.85638, d: 2.9, sd: 32.0, medium: 1 },
    {
      label: "2A",
      R: 29.6367,
      d: 15.36,
      sd: 23.8,
      // Patent Eq. (a) uses κ with κ = 1 for a sphere; stored K = κ − 1.
      asphere: { K: -1, A4: 2.2151e-6, A6: 2.5769e-9, A8: -6.015e-12, A10: 1.092e-14, A12: -7.29e-18 },
    },
    {
      label: "3A",
      R: -197.50816,
      d: 0.2,
      sd: 22.8,
      medium: 2,
      asphere: {
        K: 0,
        A4: -3.8343e-7,
        A6: 7.9334e-10,
        A8: -3.5363e-12,
        A10: 5.0812e-15,
        A12: -3.4337e-18,
      },
    }, // L12r resin front (asph)
    { label: "4", R: -169.39125, d: 2.1, sd: 23.4, medium: 3 }, // L12r→L12g junction
    { label: "5", R: 60.51496, d: 0.15, sd: 23.8 },
    { label: "6", R: 52.85097, d: 5.6, sd: 22.0, medium: 4 }, // L13 HRI
    { label: "7", R: 146.47986, sd: 22.4 }, // D7 variable (zoom+focus)

    // ── G21 (focusing, positive): L21, L22, L23+L24 (cemented), L25 ──
    { label: "8", R: 148.41161, d: 3.0, sd: 17.8, medium: 5 },
    { label: "9", R: -517.10678, d: 0.1, sd: 17.8 },
    { label: "10", R: 49.87002, d: 3.5, sd: 18.7, medium: 6 },
    { label: "11", R: 157.3519, d: 4.762, sd: 18.7 },
    { label: "12", R: 87.49334, d: 4.8, sd: 19.0, medium: 7 }, // L23 front
    { label: "13", R: -132.224, d: 1.5, sd: 19.0, medium: 8 }, // L23→L24 junction
    { label: "14", R: 45.76622, d: 1.64, sd: 17.9 },
    { label: "15", R: 78.93526, d: 4.45, sd: 17.9, medium: 9 },
    { label: "16", R: -176.75459, sd: 19.0 }, // D16 variable (focus)

    // ── G22 (relay, positive): L26 ──
    { label: "17", R: 57.14809, d: 5.3, sd: 19.7, medium: 10 },
    { label: "18", R: -583.40702, sd: 19.7 }, // patent D18 + FC1 spacing 1.200 (patent surface 19 omitted)

    // ── Aperture stop ──
    { label: "STO", R: "flat" }, // patent 20; D20 variable (non-monotonic); radius derived from the design f-number at each zoom station

    // ── G31 (intermediate, negative): L31, L32, L33 ──
    { label: "21", R: -141.85186, d: 1.2, sd: 12.2, medium: 11 },
    { label: "22", R: 33.20059, d: 4.36, sd: 11.5 },
    { label: "23", R: -33.72704, d: 1.2, sd: 11.5, medium: 12 },
    { label: "24", R: -60.0953, d: 0.1, sd: 12.3 },
    { label: "25", R: 65.48868, d: 3.15, sd: 12.9, medium: 13 },
    { label: "26", R: -127.25009, d: 1.25, sd: 12.9 }, // D26 fixed

    // ── G32 (VR, negative): L34, L35 ──
    { label: "27", R: -119.24441, d: 1.1, sd: 13.2, medium: 14 },
    { label: "28", R: 67.70394, d: 1.15, sd: 13.2 },
    { label: "29", R: 62.368, d: 2.1, sd: 13.4, medium: 15 },
    { label: "30", R: 107.42, sd: 13.4 }, // D30 variable

    // ── G4 (rear positive): L41 (ASP/ED), L42+L43 (cemented), L44+L45+L46 (cemented triplet) ──
    {
      label: "31A",
      R: 119.87584,
      d: 4.7,
      sd: 18.4,
      medium: 16,
      asphere: {
        K: 0,
        A4: 4.8089e-6,
        A6: 5.0698e-10,
        A8: -2.7314e-12,
        A10: -7.7815e-16,
      },
    }, // L41 asph front
    { label: "32", R: -115.00129, d: 0.1, sd: 19.0 },
    { label: "33", R: 71.95116, d: 1.4, sd: 19.0, medium: 17 }, // L42 front
    { label: "34", R: 38.488, d: 6.8, sd: 19.0, medium: 18 }, // L42→L43 junction
    { label: "35", R: -237.01429, d: 0.28, sd: 19.0 },
    { label: "36", R: 43.00799, d: 9.5, sd: 19.0, medium: 19 }, // L44 front
    { label: "37", R: -42.999, d: 1.4, sd: 17.8, medium: 20 }, // L44→L45 junction
    { label: "38", R: 98.941, d: 4.6, sd: 17.7, medium: 21 }, // L45→L46 junction
    {
      label: "39A",
      R: 462.40647,
      sd: 17.4,
      asphere: {
        K: 0,
        A4: 7.5654e-6,
        A6: -9.886e-10,
        A8: 5.6174e-12,
        A10: -8.0775e-15,
      },
    }, // L46 asph rear; gap = D39 + D40 (FC2 omitted)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    // (moved from zoomCloseFocusM) Patent Table 1 [Focusing Data] imaging distances (object-to-image) at W / M / T.
    stations: [
      { focalLengthMm: 24.8, closeFocusM: 0.4183, label: "Wide" },
      { focalLengthMm: 50.01, closeFocusM: 0.381 },
      { focalLengthMm: 67.85, closeFocusM: 0.3966, label: "Tele" },
    ],
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.38,
    description:
      "Inner focus: G21 (L21–L25) moves 6.735 mm toward the image at every zoom station (patent ¶[0154], Table 1); G1, G22, G3 and G4 stay fixed. Published imaging distances 0.418 / 0.381 / 0.397 m at W / M / T.",
  },

  /* (moved from var) ── Variable air spacings (zoom + focus) ── */
  gaps: {
    // G1 → G21: zoom + focus (G21 moves 6.735 mm toward the image; close value = D7 + 6.735)
    "7": {
      label: "D7",
      values: [
        [48.945, 55.68],
        [10.93, 17.665],
        [1.902, 8.637],
      ],
    },
    // G21 → G22: focus only (close value = D16 − 6.735)
    "16": {
      label: "D16",
      values: [
        [7.735, 1.0],
        [7.735, 1.0],
        [7.735, 1.0],
      ],
    },
    // G22 → STO: zoom only (= patent D18 + FC1 1.200 mm)
    "18": {
      label: "D18 + FC1",
      values: [
        [3.002, 3.002],
        [19.131, 19.131],
        [30.639, 30.639],
      ],
    },
    // STO → G31: zoom only (non-monotonic: 2.088 → 4.668 → 3.620)
    STO: {
      label: "D20",
      values: [
        [2.088, 2.088],
        [4.668, 4.668],
        [3.62, 3.62],
      ],
    },
    // G32 → G4: zoom only
    "30": {
      label: "D30",
      values: [
        [17.692, 17.692],
        [7.68, 7.68],
        [1.492, 1.492],
      ],
    },
    // G4 → image: zoom only (= patent D39 + D40 = patent BF)
    "39A": {
      label: "D39 + D40 (BF)",
      values: [
        [41.035, 41.035],
        [48.522, 48.522],
        [55.686, 55.686],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.92, fStops: [2.92, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "7" },
    // G2 is split into the patent's G21 (focusing) and G22 so the movement overlay shows the 6.735 mm focus travel.
    { text: "G21 (+)", fromSurface: "8", toSurface: "16" },
    { text: "G22 (+)", fromSurface: "17", toSurface: "18" },
    { text: "G3 (−)", fromSurface: "21", toSurface: "30" },
    { text: "G4 (+)", fromSurface: "31A", toSurface: "39A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "Ja", fromSurface: "12", toSurface: "14" },
    { text: "Jb", fromSurface: "33", toSurface: "35" },
    { text: "Tc", fromSurface: "36", toSurface: "39A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.48, yScFill: 0.28 },

  // L24 rear (14) and L25 front (15) must pass the f/2.92 telephoto axial beam (17.87 mm), where their 1.64 mm
  // air gap closes to about 0.05 mm; 0.98 keeps that near-contact pair legal.
  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
