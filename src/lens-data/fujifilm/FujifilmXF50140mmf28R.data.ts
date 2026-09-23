import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM FUJINON XF 50–140mm F2.8 R LM OIS WR  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0090163 A1, MASTER LENS ML, Tables 1–2         ║
 * ║    (Fujifilm Corporation / Tetsuya Ori; priority JP 2015-186957,     ║
 * ║    24 September 2015; published 30 March 2017). The master lens is  ║
 * ║    identical in Examples 1–4 (¶0038); only the rear converter RCL   ║
 * ║    differs between examples. Cross-section: FIG. 2 (sheet 2/11,     ║
 * ║    drawn at the wide end with the Example 1 converter attached).    ║
 * ║                                                                     ║
 * ║  Identification: The patent is directed at a rear teleconverter     ║
 * ║  (the XF 1.4X TC WR). The master lens (surfaces 1-40) matches the   ║
 * ║  XF 50-140mm F2.8: 23 elements / 16 groups, 5 ED + 1 Super ED,      ║
 * ║  f = 51.52-135.96 mm, FNo. 2.88/2.89/2.88, 2ω = 30.6°-11.6°.        ║
 * ║                                                                     ║
 * ║  Design: Four-group PNPP inner zoom. Per ¶0038, G1 and G4 (with the ║
 * ║  stop) are fixed; G2 and G3 each move toward the image side from    ║
 * ║  wide to tele, by different amounts and monotonically (derived from ║
 * ║  Table 2: G2 +18.15 then +11.62 mm, G3 +13.80 then +4.36 mm for     ║
 * ║  W→M→T). DD7+DD15+DD20 = 43.68/43.68/43.67 mm, so the 185.9 mm     ║
 * ║  physical track (vertex 1 to image, cover plate included) is fixed. ║
 * ║    G1 (L11-L14, 4 elements, +89 mm) — fixed                         ║
 * ║    G2 (L21-L25, 5 elements, −19 mm) — moves +29.77 mm W→T           ║
 * ║    G3 (L31-L33, 3 elements, +48 mm) — moves +18.16 mm W→T           ║
 * ║    Aperture stop St (fixed, ahead of G4)                            ║
 * ║    G4 (L41-L411, 11 elements, +64 mm) — fixed                       ║
 * ║  Total: 23 elements, 16 air-separated groups, 0 aspherical surfaces.║
 * ║                                                                     ║
 * ║  Special glasses: 5× 497/815 ED (L12, L14, L23, L41, L44) and       ║
 * ║  1× 439/949 Super ED (L13) — the counts Fujifilm markets. Glass     ║
 * ║  names are catalog equivalents (Ohara where exact); the patent      ║
 * ║  lists only nd/νd.                                                  ║
 * ║                                                                     ║
 * ║  ZOOM: 3 stations (W/M/T) from Table 2: 51.52 / 83.69 / 135.96 mm.  ║
 * ║  Variable gaps DD[7] (G1-G2), DD[15] (G2-G3), DD[20] (G3-stop).     ║
 * ║                                                                     ║
 * ║  FOCUSING: NOT MODELED. The patent publishes infinity data only and ║
 * ║  does not identify the focus group, so inf and close values of      ║
 * ║  every variable gap are identical and the focus slider moves no     ║
 * ║  group. Production: inner focus by Fujifilm's Triple Linear Motor,  ║
 * ║  MFD 1.0 m (manufacturer data, not patent data).                    ║
 * ║                                                                     ║
 * ║  OIS: not described in the patent; no shift group is modeled.       ║
 * ║                                                                     ║
 * ║  APERTURE: nominalFno 2.88 (patent FNo.; 2.89 at M is rounding).    ║
 * ║  The stop and everything behind it are fixed, so one physical iris  ║
 * ║  gives a constant f-number at every zoom station (engine radius     ║
 * ║  ≈12.25 mm; paraxial 12.14 mm). No zoom iris schedule is needed.    ║
 * ║  Marketing f/2.8 kept in apertureMarketing; min. aperture f/22.     ║
 * ║                                                                     ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    The patent lists no effective diameters. Values are ray-trace    ║
 * ║    estimates cross-checked (2026-09-23) against FIG. 2 measured on  ║
 * ║    the native 300 dpi raster (11.58 px/mm from the vertex-1 to      ║
 * ║    vertex-15 span; every vertex crossing lands within ~2 px of the  ║
 * ║    wide-end prescription). Figure rims (mm): L11 30.0, L12 27.5,    ║
 * ║    L13 27.4, L14 26.6, L21 17.2, L23/L24 14.4, L31/L32 12.9,        ║
 * ║    L33 14.7, L41 14.3, L42/L43 ≈12.0, L45-L47 box 10.9, L48 13.3,   ║
 * ║    L49 13.0, L410 14.8, L411 14.7. Stored values lie within about   ║
 * ║    15 % (L31 rear 18 %) and are kept, except: 25 (L42 rear) 10.4    ║
 * ║    (the f/2.88 axial ray needs 10.29 mm) and 33 (L47 rear)          ║
 * ║    13.1→10.9 (figure). Flat-annulus boxes drawn around concave      ║
 * ║    surfaces (L22 rear, L25 front) are mounting flats, not optical   ║
 * ║    rims; those surfaces are limited by the neighbouring air gaps.   ║
 * ║    The front group admits the full axial f/2.88 beam; the full-     ║
 * ║    field bundle is vignetted by G1 as in any fast tele zoom.        ║
 * ║    gapSagFrac 0.97: L42 rear (R 84.56) and L43 front (R −50.72)     ║
 * ║    sit 1.8 mm apart and leave only ~0.07 mm of air at the 10.4 mm   ║
 * ║    rim the axial beam requires.                                     ║
 * ║                                                                     ║
 * ║  COVER GLASS (patent surfaces 41-42, nd=1.51680, t=2.85 mm +        ║
 * ║  1.10 mm air): excluded per project convention. Its air-equivalent  ║
 * ║  path is folded into the last gap: d(40) = 26.4281 + 2.85/1.5168 +  ║
 * ║  1.10 = 29.4071 mm (patent Bf = 29.41, air-equivalent). The         ║
 * ║  paraxial BFD is 29.36-29.37 mm; the patent image plane sits        ║
 * ║  0.03-0.05 mm behind it (retained as published).                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fuji-xf-50140mm-f28",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 50-140mm f/2.8 R LM OIS WR",
  subtitle: "US 2017/0090163 A1 — Master Lens ML, Tables 1–2 (T. Ori / Fujifilm)",
  specs: [
    "23 ELEMENTS / 16 GROUPS",
    "f = 50–140 mm (design 51.52–135.96 mm)",
    "F/2.8 CONSTANT (DESIGN F/2.88)",
    "2ω = 30.6°–11.6° (APS-C)",
    "5 ED + 1 SUPER ED",
    "0 ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [50, 140],
  focalLengthDesign: [51.52, 135.96],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2017/0090163 A1",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2017,
  elementCount: 23,
  groupCount: 16,

  /* ── Elements ── */
  elements: [
    // G1 — Front group (fixed, f = +89 mm)
    // prettier-ignore
    { id:  1, name: "L11",  label: "Element 1",  type: "Negative Meniscus", nd: 1.80100, vd: 34.97, fl: -136.5, glass: "S-LAM66 / N-LASF45 (801 350)", apd: false, role: "Front negative meniscus; high-index flint partner of ED positive L12 in the G1 cemented doublet", cemented: "D1" },
    // prettier-ignore
    { id:  2, name: "L12",  label: "Element 2",  type: "Biconvex Positive (ED)", nd: 1.49700, vd: 81.54, fl: +136.7, glass: "S-FPL51 (OHARA) (497 815, ED)", apd: "inferred", apdNote: "S-FPL51 ED glass has small positive P_gF anomaly — standard apochromatic front-doublet partner", role: "Positive ED element of G1 cemented doublet; primary axial-chromatic control at max marginal height", cemented: "D1" },
    // prettier-ignore
    { id:  3, name: "L13",  label: "Element 3",  type: "Plano-Convex Positive (Super ED)", nd: 1.43875, vd: 94.94, fl: +161.4, glass: "S-FPL53 (439 949, Super ED / fluorite-class)", apd: "inferred", apdNote: "S-FPL53 has near-zero partial-dispersion anomaly — Fujifilm's marketed \"Super ED\" element", role: "Second positive ED in G1; controls secondary spectrum — the defining glass of the apochromatic correction" },
    // prettier-ignore
    { id:  4, name: "L14",  label: "Element 4",  type: "Positive Meniscus (ED)", nd: 1.49700, vd: 81.54, fl: +195.5, glass: "S-FPL51 (497 815, ED)", apd: "inferred", apdNote: "Third ED in G1 — shallow-curvature stress-relief ED",  role: "Final positive meniscus of G1; shallow curvatures minimise spherical contribution while adding ED power" },
    // G2 — Variator (moves toward the image W→T, f = −19 mm)
    // prettier-ignore
    { id:  5, name: "L21",  label: "Element 5",  type: "Biconvex Positive", nd: 1.72047, vd: 34.71, fl: +43.2, glass: "S-NBH8 (OHARA) (720 347)", apd: false, role: "Front of the first G2 cemented doublet; dense crown-flint", cemented: "D2" },
    // prettier-ignore
    { id:  6, name: "L22",  label: "Element 6",  type: "Biconcave Negative", nd: 1.62230, vd: 53.17, fl:  -25.2, glass: "S-BSM22 (OHARA)", apd: false, role: "Rear of the first G2 cemented doublet; provides negative power and local chromatic balance within the variator", cemented: "D2" },
    // prettier-ignore
    { id:  7, name: "L23",  label: "Element 7",  type: "Biconcave Negative (ED)", nd: 1.49700, vd: 81.54, fl:  -38.4, glass: "S-FPL51 (497 815, ED)", apd: "inferred", apdNote: "Buried ED inside variator — stabilises chromatic correction across zoom", role: "Front of the second G2 cemented doublet (with L24); negative ED controlling axial-colour variation with focal length", cemented: "D3" },
    // prettier-ignore
    { id:  8, name: "L24",  label: "Element 8",  type: "Positive Meniscus (heavy flint)", nd: 1.84661, vd: 23.88, fl:  +39.3, glass: "S-TIH53 / N-SF57 (847 238/239)", apd: false, role: "Rear of the L23+L24 cemented doublet; very high-index positive flint paired with ED L23", cemented: "D3" },
    // prettier-ignore
    { id:  9, name: "L25",  label: "Element 9",  type: "Biconcave Negative (high-index)", nd: 1.91082, vd: 35.25, fl:  -31.0, glass: "HOYA TAFD35 class (911 352)", apd: false, role: "Air-spaced rear element of G2; very high-index flint minimises Petzval contribution per unit of negative power" },
    // G3 — Compensator (moves toward the image W→T, f = +48 mm)
    // prettier-ignore
    { id: 10, name: "L31",  label: "Element 10", type: "Positive Meniscus", nd: 1.80100, vd: 34.97, fl:  +61.2, glass: "S-LAM66 / N-LASF45 (801 350)", apd: false, role: "Leading element of G3; near-plano front minimises surface-aberration contribution" },
    // prettier-ignore
    { id: 11, name: "L32",  label: "Element 11", type: "Biconvex Positive (anomalous-P_gF crown)", nd: 1.61800, vd: 63.33, fl:  +44.6, glass: "S-PHM52 (OHARA) (618 634)", apd: "inferred", apdNote: "S-PHM52 has notable positive ΔP_gF — gives G3 doublet a secondary-spectrum advantage", role: "Primary positive-power contributor in G3 cemented doublet", cemented: "D4" },
    // prettier-ignore
    { id: 12, name: "L33",  label: "Element 12", type: "Plano-Concave Negative (SF6 flint)", nd: 1.80518, vd: 25.42, fl:  -53.7, glass: "S-TIH6 / SF6 (805 254)", apd: false, role: "Rear of G3 cemented doublet; plano rear surface before stop", cemented: "D4" },
    // G4 — Master / relay group (fixed, f = +64 mm)
    // prettier-ignore
    { id: 13, name: "L41",  label: "Element 13", type: "Biconvex Positive (ED)", nd: 1.49700, vd: 81.54, fl:  +39.1, glass: "S-FPL51 (497 815, ED)", apd: "inferred", apdNote: "First ED after stop — classic master-lens chromatic correction position", role: "Gathers stopped-down beam; begins re-focus onto sensor" },
    // prettier-ignore
    { id: 14, name: "L42",  label: "Element 14", type: "Positive Meniscus (short-flint, anomalous P_gF)", nd: 1.65412, vd: 39.68, fl:  +87.6, glass: "S-NBH5 (OHARA) (654 397)", apd: "inferred", apdNote: "KZFS-family glass with LARGE NEGATIVE P_gF anomaly — conjugate to ED partial-dispersion", role: "Partial-dispersion balance element between ED L41 and ED/flint L43+L44 doublet" },
    // prettier-ignore
    { id: 15, name: "L43",  label: "Element 15", type: "Biconcave Negative (very dense flint)", nd: 1.90366, vd: 31.31, fl:  -17.9, glass: "S-LAH95 / N-LASF46A (904 313)", apd: false, role: "Front of the L43+L44 cemented doublet; negative dense flint", cemented: "D5" },
    // prettier-ignore
    { id: 16, name: "L44",  label: "Element 16", type: "Biconvex Positive (ED)", nd: 1.49700, vd: 81.54, fl:  +35.6, glass: "S-FPL51 (497 815, ED)", apd: "inferred", apdNote: "Buried-ED in the strongest chromatic doublet of G4 (Δνd = +50.2)", role: "Rear of the L43+L44 cemented doublet; primary chromatic correction deep in G4", cemented: "D5" },
    // prettier-ignore
    { id: 17, name: "L45",  label: "Element 17", type: "Biconvex Positive (SF6)", nd: 1.80518, vd: 25.42, fl:  +27.7, glass: "S-TIH6 / SF6 (805 254)", apd: false, role: "Front of an INVERTED chromatic doublet (high-dispersion glass on positive side) — lateral-chromatic correction", cemented: "D6" },
    // prettier-ignore
    { id: 18, name: "L46",  label: "Element 18", type: "Biconcave Negative (barium crown)", nd: 1.58913, vd: 61.13, fl:  -24.8, glass: "S-BAL35 / N-SK5 (589 611)", apd: false, role: "Rear of the inverted L45+L46 doublet; conventional barium crown", cemented: "D6" },
    // prettier-ignore
    { id: 19, name: "L47",  label: "Element 19", type: "Biconcave Negative", nd: 1.80100, vd: 34.97, fl:  -30.3, glass: "S-LAM66 / N-LASF45 (801 350)", apd: false, role: "Isolated negative, near-symmetric biconcave element in mid-G4" },
    // prettier-ignore
    { id: 20, name: "L48",  label: "Element 20", type: "Biconvex Positive (heavy flint, anomalous P_gF)", nd: 1.80000, vd: 29.84, fl:  +28.3, glass: "S-NBH55 (800 298)", apd: "inferred", apdNote: "NBH-family short flint — anomalous partial dispersion contributes to secondary-spectrum compensation", role: "Strong biconvex positive in image-side G4; bulk re-focus power" },
    // prettier-ignore
    { id: 21, name: "L49",  label: "Element 21", type: "Biconvex Positive (fluor-crown)", nd: 1.48749, vd: 70.24, fl:  +36.1, glass: "S-FSL5 (OHARA) (487 702)", apd: "inferred", apdNote: "Fluor-crown (N-FK5 family) — anomalous positive P_gF", role: "Front of the L49+L410 cemented doublet; anomalous-dispersion positive partner", cemented: "D7" },
    // prettier-ignore
    { id: 22, name: "L410", label: "Element 22", type: "Negative Meniscus (SF6)", nd: 1.80518, vd: 25.42, fl:  -45.5, glass: "S-TIH6 / SF6 (805 254)", apd: false, role: "Rear of the L49+L410 cemented doublet; combined with fluor-crown L49 yields superachromatic pair (Δνd = +44.8)", cemented: "D7" },
    // prettier-ignore
    { id: 23, name: "L411", label: "Element 23", type: "Negative Meniscus (high-index)", nd: 1.91082, vd: 35.25, fl:  -96.1, glass: "HOYA TAFD35 class (911 352)", apd: false, role: "Rear field-flattening element; trims residual Petzval field curvature at the image plane" },
  ],

  /* ── Surface prescription ──
   *  Front to rear. Radii, thicknesses and refractive indices copied
   *  exactly from patent TABLE 1. Variable thicknesses DD[7], DD[15],
   *  DD[20] shown below are values at the WIDE end; the same entries
   *  appear in the `var` block with [d_inf, d_close] per zoom position.
   *  The last surface's d = 29.4071 folds the cover glass path into BFD.
   */
  surfaces: [
    // G1 — Front group (4 elements, 3 air-separated groups: D1 doublet + L13 + L14)
    { label: "1", R: 314.4308, d: 2.29, nd: 1.801, elemId: 1, sd: 26.45 }, // L11 front
    { label: "2", R: 80.863, d: 7.4, nd: 1.497, elemId: 2, sd: 26.35 }, // L11/L12 cemented junction (D1)
    { label: "3", R: -411.8253, d: 0.2, nd: 1.0, elemId: 0, sd: 26.5 }, // L12 rear → air
    { label: "4", R: 70.8095, d: 7.1, nd: 1.43875, elemId: 3, sd: 26.5 }, // L13 front (Super ED)
    { label: "5", R: 1e15, d: 0.2, nd: 1.0, elemId: 0, sd: 25.7 }, // L13 rear (plano) → air
    { label: "6", R: 69.9388, d: 5.24, nd: 1.497, elemId: 4, sd: 25.65 }, // L14 front
    { label: "7", R: 243.2625, d: 1.39, nd: 1.0, elemId: 0, sd: 24.45 }, // L14 rear → air (DD[7] at W)

    // G2 — Variator (5 elements, 3 air-separated groups: D2 doublet + D3 doublet + L25)
    { label: "8", R: 97.335, d: 6.28, nd: 1.72047, elemId: 5, sd: 16.0 }, // L21 front
    { label: "9", R: -44.443, d: 1.54, nd: 1.6223, elemId: 6, sd: 15.8 }, // L21/L22 junction (D2)
    { label: "10", R: 24.5106, d: 5.6, nd: 1.0, elemId: 0, sd: 15.8 }, // L22 rear → air
    { label: "11", R: -67.3261, d: 1.41, nd: 1.497, elemId: 7, sd: 13.0 }, // L23 front
    { label: "12", R: 26.821, d: 4.0, nd: 1.84661, elemId: 8, sd: 13.05 }, // L23/L24 junction (D3)
    { label: "13", R: 128.9145, d: 3.13, nd: 1.0, elemId: 0, sd: 13.05 }, // L24 rear → air
    { label: "14", R: -31.5621, d: 1.2, nd: 1.91082, elemId: 9, sd: 11.7 }, // L25 front
    { label: "15", R: 268.8915, d: 14.3, nd: 1.0, elemId: 0, sd: 13.0 }, // L25 rear → air (DD[15] at W)

    // G3 — Compensator (3 elements, 2 air-separated groups: L31 + D4 doublet)
    { label: "16", R: -454.7411, d: 2.85, nd: 1.801, elemId: 10, sd: 14.9 }, // L31 front
    { label: "17", R: -44.3534, d: 0.1, nd: 1.0, elemId: 0, sd: 15.25 }, // L31 rear → air
    { label: "18", R: 73.4584, d: 4.26, nd: 1.618, elemId: 11, sd: 14.9 }, // L32 front
    { label: "19", R: -43.207, d: 1.17, nd: 1.80518, elemId: 12, sd: 14.1 }, // L32/L33 junction (D4)
    { label: "20", R: 1e15, d: 27.99, nd: 1.0, elemId: 0, sd: 14.5 }, // L33 rear (plano) → air (DD[20] at W)

    // Aperture stop (patent-specified position between surfaces 20 and 22)
    { label: "STO", R: 1e15, d: 1.3, nd: 1.0, elemId: 0, sd: 12.25 }, // f/2.88 iris; engine derives the radius from nominalFno

    // G4 — Master / relay group (11 elements, 8 air-separated groups: L41 + L42 + D5 + D6 + L47 + L48 + D7 + L411)
    { label: "22", R: 27.8674, d: 7.05, nd: 1.497, elemId: 13, sd: 13.05 }, // L41 front
    { label: "23", R: -58.7589, d: 0.15, nd: 1.0, elemId: 0, sd: 13.05 }, // L41 rear → air
    { label: "24", R: 34.5685, d: 2.57, nd: 1.65412, elemId: 14, sd: 13.0 }, // L42 front
    { label: "25", R: 84.5573, d: 1.8, nd: 1.0, elemId: 0, sd: 10.4 }, // L42 rear → air
    { label: "26", R: -50.7158, d: 1.1, nd: 1.90366, elemId: 15, sd: 12.5 }, // L43 front
    { label: "27", R: 23.983, d: 5.21, nd: 1.497, elemId: 16, sd: 12.5 }, // L43/L44 junction (D5)
    { label: "28", R: -62.4364, d: 2.8, nd: 1.0, elemId: 0, sd: 12.5 }, // L44 rear → air
    { label: "29", R: 452.2104, d: 3.76, nd: 1.80518, elemId: 17, sd: 12.25 }, // L45 front
    { label: "30", R: -23.371, d: 0.96, nd: 1.58913, elemId: 18, sd: 10.1 }, // L45/L46 junction (D6)
    { label: "31", R: 39.4316, d: 2.48, nd: 1.0, elemId: 0, sd: 9.4 }, // L46 rear → air
    { label: "32", R: -40.896, d: 1.0, nd: 1.801, elemId: 19, sd: 10.35 }, // L47 front
    { label: "33", R: 60.144, d: 3.97, nd: 1.0, elemId: 0, sd: 10.9 }, // L47 rear → air
    { label: "34", R: 53.07, d: 5.36, nd: 1.8, elemId: 20, sd: 14.4 }, // L48 front
    { label: "35", R: -37.6531, d: 4.95, nd: 1.0, elemId: 0, sd: 15.3 }, // L48 rear → air
    { label: "36", R: 49.5305, d: 6.46, nd: 1.48749, elemId: 21, sd: 14.7 }, // L49 front
    { label: "37", R: -26.093, d: 1.31, nd: 1.80518, elemId: 22, sd: 13.85 }, // L49/L410 junction (D7)
    { label: "38", R: -92.8937, d: 4.4, nd: 1.0, elemId: 0, sd: 15.0 }, // L410 rear → air
    { label: "39", R: -27.4751, d: 1.26, nd: 1.91082, elemId: 23, sd: 14.4 }, // L411 front
    { label: "40", R: -40.9228, d: 29.4071, nd: 1.0, elemId: 0, sd: 14.6 }, // L411 rear → image (cover glass air-equiv folded into BFD)
  ],

  /* ── Aspherical coefficients ──
   *  None. The XF 50-140mm uses no aspherical surfaces; all correction is
   *  achieved via extensive ED / Super-ED / anomalous-dispersion glass use.
   */
  asph: {},

  /* ── Variable air spacings ──
   *  Zoom format (zoomPositions present).
   *  DD[7], DD[15], DD[20] — each is an array of [d_inf, d_close] pairs,
   *  one pair per zoom position.
   *  The patent provides only zoom-variable spacings (not focus-variable),
   *  so d_inf == d_close at each position and focus is not modeled; the
   *  production inner-focus group is not identified in the patent.
   */
  var: {
    "7": [
      [1.39, 1.39],
      [19.54, 19.54],
      [31.16, 31.16],
    ], // G1 ↔ G2
    "15": [
      [14.3, 14.3],
      [9.95, 9.95],
      [2.69, 2.69],
    ], // G2 ↔ G3
    "20": [
      [27.99, 27.99],
      [14.19, 14.19],
      [9.82, 9.82],
    ], // G3 ↔ stop
  },
  varLabels: [
    ["7", "DD7"],
    ["15", "DD15"],
    ["20", "DD20"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [51.52, 83.69, 135.96], // Design EFLs at W / M / T (patent values)
  zoomLabels: ["50 mm", "140 mm"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+89)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−19)", fromSurface: "8", toSurface: "15" },
    { text: "G3 (+48)", fromSurface: "16", toSurface: "20" },
    { text: "G4 (+64)", fromSurface: "22", toSurface: "40" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
    { text: "D6", fromSurface: "29", toSurface: "31" },
    { text: "D7", fromSurface: "36", toSurface: "38" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0, // Manufacturer spec — 1.0 m at every focal length (focus travel not modeled)
  focusDescription:
    "Inner focus driven by Fujifilm's Triple Linear Motor (manufacturer data). The patent publishes infinity data only and does not identify the focus group, so focus travel is not modeled: the focus slider does not move any group.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88, // Patent FNo. 2.88 / 2.89 / 2.88 (W/M/T); one fixed iris holds it at every station
  fstopSeries: [2.88, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22, // Production minimum aperture f/22
  apertureBlades: 7,
  apertureBladeRoundedness: 0.6, // 7 rounded blades per Fujifilm spec

  /* ── Layout tuning ── */
  scFill: 0.82, // Long total track (185.9 mm) — lens fills horizontal axis generously
  yScFill: 0.55, // Max SD = 26.5 mm (L13 front) — vertical extent is moderate
  gapSagFrac: 0.97, // L42 rear / L43 front air gap (1.8 mm) must pass the 10.29 mm f/2.88 axial ray
} satisfies LensDataInput;

export default LENS_DATA;
