import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CANON RF 10-20mm f/4 L IS STM
 *
 * Data source: US 2024/0045184 A1, Numerical Example 1 (Canon Inc.; inventor Makoto Nakahara).
 * Negative-lead four-unit ultra-wide zoom: L1 (−) / aperture stop / L2 (+, focus) / L3 (+, contains IS element) /
 * L4 (+, fixed). 16 elements / 12 groups, 5 aspherical surfaces on 3 elements (E1 both sides, E11 rear, E15 both sides).
 * Correlated with the production RF10-20mm F4 L IS STM (16/12, 1 Super UD + 3 UD, 3 GMo aspheres); no Canon source
 * names the patent or example, so the correlation is not manufacturer-confirmed.
 *
 * Zoom (three published stations, infinity focus): W 10.33 / M 15.00 / T 19.39 mm.
 *   Zoom-only gaps: 9 (L1–stop), 27A (L3–L4). Zoom + focus gaps: STO (d10), 12 (d12).
 *   L1 reverses (front vertex from image −128.82 → −122.35 → −123.26 mm); bracketed by the middle station.
 *   The stop travels with L3; L4 and the image plane are fixed; BF = d29 = 12.13 mm at every state.
 *
 * Focus: CONSTRAINED_RECONSTRUCTION. The patent publishes infinity states only. Mechanism per [0030]/[0044]: the single
 *   positive lens GP (E6, unit L2) moves toward the image. Close-focus d10/d12 are solved in code (paraxial, d-line)
 *   for an object 250 mm from the fixed authored image plane (Canon MFD 0.25 m at all focal lengths), image on that
 *   plane: L2 travel 2.2469 / 2.2852 / 2.4319 mm (W/M/T), d10 + d12 conserved. Paraxial magnification −0.0693 /
 *   −0.0970 / −0.1266 correlates with Canon's 0.06× (10 mm) and 0.12× (20 mm). These are not published states.
 *
 * NOTE ON SOURCE DISCREPANCY: the printed L3 surfaces give fL3 = 49.32 mm against the printed 49.46 mm, and the
 *   paraxial infinity focus falls 0.076 / 0.109 / 0.150 mm (W/M/T) ahead of the printed BF = 12.13 mm. Rows were
 *   re-read at high resolution; no unique correction exists. The printed prescription and printed image plane are
 *   retained unchanged; the residual infinity-state paraxial defocus is intentional and disclosed.
 * NOTE ON SCALING: none (s = 1). Conic: patent uses the standard (1+k) form, so K = k. A14 on surfaces 1–2 as printed.
 * NOTE ON APERTURE: stop diameter unpublished. nominalFno uses the patent's 4.08 / 4.08 / 4.12 with
 *   zoomApertureModel "from-nominal-fno" (inferred iris radii ≈ 4.722 / 5.460 / 6.154 mm). This is a calibration to
 *   the published f-numbers, not independent evidence of the physical diaphragm diameter.
 * NOTE ON SEMI-DIAMETERS: unpublished; modeled from exact meridional real-ray traces (on-axis full aperture, full-field
 *   chief ray, full-field bundle to ±50% pupil, 60%-field full bundle) at 9 zoom × 3 focus samples with 8% clearance,
 *   then reduced where edge thickness (≥ 0.5 mm target), rim slope (≤ 64.2°), or cross-gap intrusion (≤ 0.9 × gap)
 *   would fail. Surfaces 15/16 are limited by the 0.80 mm E8–E9 air gap (rim-face clearance ≈ 0.08 mm, ≈ 10% of the gap).
 *
 * Fig. 1 (PDF p. 2, 600 dpi) supports smaller, continuous C2 and C4 rims. C4 surfaces 21–23 share
 * a 9.9 mm rim (figure ≈ 9.3 mm), retaining ray clearance without the former 11.5 mm front step. The C2
 * front rim: surface 13 is 8.4 mm, matching the cemented junction
 * instead of 9.8 mm. The rear rim stays 6.9 mm for cross-gap clearance. These remain modeled apertures.
 * Catalog glass names identify coordinate-compatible, supplier-neutral spectral proxies; production suppliers are
 * not identified by the patent.
 *
 * Optical design only: glass surfaces, stop, variable gaps. No rear plates are listed by the source.
 * See LENS_DATA_SPEC.md § Scope: What to Include.
 */

const LENS_DATA = {
  key: "canon-rf-10-20-f4-l-is-stm",
  maker: "Canon",
  name: "CANON RF 10-20mm f/4 L IS STM",
  subtitle: "US 2024/0045184 A1 EXAMPLE 1 — CANON / MAKOTO NAKAHARA",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "f ≈ 10.33–19.39 mm",
    "F/4.08–4.12",
    "2ω ≈ 122.7°–96.3° (PARAXIAL)",
    "5 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [10, 20],
  focalLengthDesign: [10.33, 19.39],
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2024/0045184 A1",
  patentAuthors: ["Makoto Nakahara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2024,
  elementCount: 16,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -62.51,
      glass: "S-BAL42 / L-BAL42 (OHARA) class — 583594 barium crown",
      apd: false,
      role: "Front negative meniscus, convex to object; large-diameter double-sided glass-moulded asphere.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: -30.18,
      glass: "TAFD35 (HOYA) / H-ZLaF4LA class — 911352 dense lanthanum flint",
      apd: false,
      role: "Second front negative meniscus; strongest negative element of L1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.59282,
      vd: 68.6,
      fl: -87.21,
      glass: "FCD515 / FCD505 (HOYA) class — 593686 fluorophosphate crown",
      apd: false,
      role: "Third front negative meniscus; low-dispersion negative power in L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.43875,
      vd: 94.7,
      fl: -34.74,
      glass: "S-FPL55 (OHARA) class — 439947 fluorophosphate (Super UD class)",
      apd: "inferred",
      apdNote:
        "Canon lists 1 Super UD + 3 UD elements; assignment to this νd coordinate is inferred (no PgF published)",
      cemented: "C1",
      role: "Biconcave negative, front of cemented C1; νd 94.7 Super-UD-class material.",
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "G1P",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 27.83,
      glass: "TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum flint",
      apd: false,
      cemented: "C1",
      role: "Biconvex positive, rear of C1; G1P, the only positive lens in L1.",
    },
    {
      id: 6,
      name: "E6",
      diagramLabel: "GP",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      fl: 73.58,
      glass: "S-NBH8 (OHARA) / N-KZFS8 (Schott) class — 720347 short flint",
      apd: false,
      role: "Single biconvex positive focus lens GP (unit L2); moves toward the image for close focus.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -25.1,
      glass: "S-NPH1 (OHARA) / FD225 (HOYA) class — 808228 dense flint",
      apd: false,
      cemented: "C2",
      role: "Thin high-dispersion negative meniscus, front of C2 (L3).",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.673,
      vd: 38.3,
      fl: 16.55,
      glass: "S-NBH52V (OHARA) class — 673383",
      apd: false,
      cemented: "C2",
      role: "Positive meniscus, rear of C2.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      fl: -11.92,
      glass: "TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum flint",
      apd: false,
      cemented: "C3",
      role: "Biconcave negative, front of C3; strongest negative element of L3.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 21.04,
      glass: "E-FDS1 (HOYA) / N-SF66 (Schott) class — 923209 dense flint",
      apd: false,
      cemented: "C3",
      role: "High-dispersion positive meniscus, rear of C3.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.497,
      vd: 81.5,
      fl: 25.04,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815 fluorophosphate (UD class)",
      apd: "inferred",
      apdNote:
        "Canon lists 1 Super UD + 3 UD elements; assignment to this νd coordinate is inferred (no PgF published)",
      role: "Biconvex positive UD-class glass-moulded asphere (rear surface).",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      fl: -27.4,
      glass: "TAFD65 (HOYA) / H-ZLaF96 (CDGM) class — 051269 lanthanum dense flint",
      apd: false,
      cemented: "C4",
      role: "Very high-index negative meniscus, front of C4.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 18.7,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815 fluorophosphate (UD class)",
      apd: "inferred",
      apdNote:
        "Canon lists 1 Super UD + 3 UD elements; assignment to this νd coordinate is inferred (no PgF published)",
      cemented: "C4",
      role: "Biconvex positive UD-class element, rear of C4.",
    },
    {
      id: 14,
      name: "E14",
      diagramLabel: "GIS",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -80.07,
      glass: "TAFD30 (HOYA) / S-LAH58 (OHARA) class — 883408 lanthanum flint",
      apd: false,
      role: "Negative meniscus convex to object; image-stabilising element GIS (LIS), shifted perpendicular to the axis.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      fl: -62.05,
      glass: "L-LAH85V (OHARA low-Tg) class — 854404 lanthanum flint",
      apd: false,
      role: "Negative meniscus concave to object; double-sided glass-moulded asphere at the rear of L3.",
    },
    {
      id: 16,
      name: "E16",
      diagramLabel: "LN",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 71.72,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) class — 497815 fluorophosphate (UD class)",
      apd: "inferred",
      apdNote:
        "Canon lists 1 Super UD + 3 UD elements; assignment to this νd coordinate is inferred (no PgF published)",
      role: "Weak positive meniscus convex to image; unit L4 (LN), fixed during zoom and focus.",
    },
  ],

  surfaces: [
    { label: "1A", R: 37.0, d: 3.0, nd: 1.58313, elemId: 1, sd: 33.5 }, // E1 front — large double-sided GMo asphere (L1)
    { label: "2A", R: 17.814, d: 12.2, nd: 1.0, elemId: 0, sd: 25.6 }, // E1 rear (asph) → air
    { label: "3", R: 52.582, d: 1.23, nd: 1.91082, elemId: 2, sd: 22.7 }, // E2 front
    { label: "4", R: 17.849, d: 5.54, nd: 1.0, elemId: 0, sd: 16.05 }, // E2 rear
    { label: "5", R: 30.037, d: 1.15, nd: 1.59282, elemId: 3, sd: 15.7 }, // E3 front
    { label: "6", R: 18.728, d: 9.86, nd: 1.0, elemId: 0, sd: 14.25 }, // E3 rear
    { label: "7", R: -28.561, d: 1.1, nd: 1.43875, elemId: 4, sd: 13.3 }, // E4 front (C1: Super UD-class)
    { label: "8", R: 33.065, d: 4.99, nd: 1.883, elemId: 5, sd: 13.9 }, // E4→E5 cemented junction
    { label: "9", R: -88.917, d: 24.06, nd: 1.0, elemId: 0, sd: 13.7 }, // E5 rear → air; d9 zoom gap (L1–stop)
    { label: "STO", R: 1e15, d: 3.18, nd: 1.0, elemId: 0, sd: 4.7222 }, // Aperture stop (patent surface 10); d10 zoom+focus gap
    { label: "11", R: 76.538, d: 1.86, nd: 1.72047, elemId: 6, sd: 8.4 }, // E6 front — focus lens GP (L2)
    { label: "12", R: -170.686, d: 4.97, nd: 1.0, elemId: 0, sd: 8.6 }, // E6 rear; d12 zoom+focus gap
    { label: "13", R: 21.236, d: 0.69, nd: 1.8081, elemId: 7, sd: 8.4 }, // E7 front (C2; Fig. 1 rim, matched to the junction)
    { label: "14", R: 10.223, d: 4.67, nd: 1.673, elemId: 8, sd: 8.4 }, // E7→E8 junction
    { label: "15", R: 101.506, d: 0.8, nd: 1.0, elemId: 0, sd: 6.9 }, // E8 rear
    { label: "16", R: -48.763, d: 0.55, nd: 1.883, elemId: 9, sd: 6.85 }, // E9 front (C3)
    { label: "17", R: 13.497, d: 2.73, nd: 1.92286, elemId: 10, sd: 8.7 }, // E9→E10 junction
    { label: "18", R: 39.963, d: 0.35, nd: 1.0, elemId: 0, sd: 8.75 }, // E10 rear
    { label: "19", R: 19.54, d: 5.55, nd: 1.497, elemId: 11, sd: 10.9 }, // E11 front (UD-class GMo asphere)
    { label: "20A", R: -31.043, d: 0.15, nd: 1.0, elemId: 0, sd: 10.85 }, // E11 rear (asph)
    { label: "21", R: 18.566, d: 0.64, nd: 2.0509, elemId: 12, sd: 9.9 }, // E12 front (C4)
    { label: "22", R: 11.089, d: 7.99, nd: 1.497, elemId: 13, sd: 9.9 }, // E12→E13 junction
    { label: "23", R: -43.632, d: 0.35, nd: 1.0, elemId: 0, sd: 9.9 }, // E13 rear
    { label: "24", R: 22.204, d: 0.9, nd: 1.883, elemId: 14, sd: 10.6 }, // E14 front — IS element GIS
    { label: "25", R: 16.576, d: 5.56, nd: 1.0, elemId: 0, sd: 10.15 }, // E14 rear
    { label: "26A", R: -26.667, d: 1.9, nd: 1.854, elemId: 15, sd: 10.6 }, // E15 front (GMo asph)
    { label: "27A", R: -55.445, d: 3.36, nd: 1.0, elemId: 0, sd: 11.5 }, // E15 rear (asph); d27 zoom gap (L3–L4)
    { label: "28", R: -497.495, d: 7.36, nd: 1.497, elemId: 16, sd: 20.2 }, // E16 front (L4, fixed)
    { label: "29", R: -33.423, d: 12.13, nd: 1.0, elemId: 0, sd: 20.8 }, // E16 rear; BF 12.13 (printed, fixed)
  ],

  asph: {
    "1A": {
      K: 0,
      A4: 2.59429e-6,
      A6: -2.61399e-8,
      A8: 5.21697e-11,
      A10: -5.59197e-14,
      A12: 3.27515e-17,
      A14: -8.57311e-21,
    },
    "2A": {
      K: -8.76022e-1,
      A4: 9.21103e-6,
      A6: -3.58438e-8,
      A8: -4.52147e-11,
      A10: 2.92832e-13,
      A12: -4.25258e-16,
      A14: 2.03592e-19,
    },
    "20A": { K: 0, A4: 2.45229e-5, A6: -3.72036e-8, A8: -1.088e-9, A10: 1.0397e-11, A12: -1.91023e-14, A14: 0 },
    "26A": { K: 0, A4: 1.66615e-4, A6: -1.90317e-6, A8: 1.2323e-8, A10: -9.41453e-11, A12: 4.39584e-13, A14: 0 },
    "27A": { K: 0, A4: 1.69532e-4, A6: -1.38711e-6, A8: 4.53596e-9, A10: -6.87436e-12, A12: 2.41668e-14, A14: 0 },
  },

  var: {
    "9": [
      [24.06, 24.06],
      [9.31, 9.31],
      [2.42, 2.42],
    ],
    STO: [
      [3.18, 5.4269],
      [3.92, 6.2052],
      [3.78, 6.2119],
    ],
    "12": [
      [4.97, 2.7231],
      [4.23, 1.9448],
      [4.37, 1.9381],
    ],
    "27A": [
      [3.36, 3.36],
      [11.64, 11.64],
      [19.44, 19.44],
    ],
  },

  varLabels: [
    ["9", "D9"],
    ["STO", "D10"],
    ["12", "D12"],
    ["27A", "D27"],
  ],

  zoomPositions: [10.33, 15, 19.39],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",

  groups: [
    { text: "L1", fromSurface: "1A", toSurface: "9" },
    { text: "L2 (FOCUS)", fromSurface: "11", toSurface: "12" },
    { text: "L3", fromSurface: "13", toSurface: "27A" },
    { text: "L4", fromSurface: "28", toSurface: "29" },
  ],

  doublets: [
    { text: "C1", fromSurface: "7", toSurface: "9" },
    { text: "C2", fromSurface: "13", toSurface: "15" },
    { text: "C3", fromSurface: "16", toSurface: "18" },
    { text: "C4", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 0.25,
  focusDescription:
    "Rear focus by the single positive lens E6 (unit L2) behind the stop, moving toward the image for close focus; L1, stop, L3 and L4 stay fixed during focusing. The patent publishes infinity states only: close-focus spacings are a constrained reconstruction solved paraxially for an object 0.25 m from the image plane at each zoom station (L2 travel ≈ 2.25–2.43 mm). Image stabilisation shifts E14 (not modeled).",

  nominalFno: [4.08, 4.08, 4.12],
  fstopSeries: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
