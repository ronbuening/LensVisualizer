import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║    TELECONVERTER DATA — FUJIFILM FUJINON TELECONVERTER XF2X TC WR    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2017-173692 A, Example 1, rear converter RCL — the  ║
 * ║    bold-framed rows 41–54 of Table 3 (Fujifilm Corporation / Tetsuya ║
 * ║    Ori, Michio Cho; application JP 2016-061659 filed 25 March 2016,  ║
 * ║    published 28 September 2017). Cross-sections: FIG. 1 (converter   ║
 * ║    alone) and FIG. 5 (attached to the master lens).                  ║
 * ║  Adapted from the reviewed master-plus-converter package for this    ║
 * ║  example: only the converter rows are kept here, and the host lens   ║
 * ║  supplies the stop, zoom tables and f-numbers.                       ║
 * ║                                                                      ║
 * ║  Production correlation: 9 elements / 5 groups at 2.0×, cemented     ║
 * ║    doublet – doublet – doublet – singlet – doublet, the layout of    ║
 * ║    the production XF2X TC WR (9 / 5) and of Fujifilm's published     ║
 * ║    optical section. The correlation is not manufacturer-confirmed.   ║
 * ║                                                                      ║
 * ║  Design: four groups, positive–negative–negative–positive, in five   ║
 * ║    air-separated components; focal length cf = −41.726 mm (Table 4). ║
 * ║    RG1 (RL11+RL12, doublet)                — positive                ║
 * ║    RG2 (RL21+RL22, doublet)                — negative                ║
 * ║    RG3 (RL31+RL32 doublet, RL33 singlet)   — negative                ║
 * ║    RG4 (RL41+RL42, doublet)                — positive                ║
 * ║  All-spherical. Glass: the patent prints nd/νd only. Seven pairs     ║
 * ║  equal Ohara catalog entries to the printed precision (S-LAH58,      ║
 * ║  S-TIM2, S-TIH13, S-TIL27, S-NBH52) and two equal Hoya entries       ║
 * ║  (TAFD37, TAFD40), so the elements carry those labels and trace on   ║
 * ║  catalog dispersion data; the supplier is not confirmed.             ║
 * ║                                                                      ║
 * ║  MASTER LENS: the patent's master lens ML (Tables 1–2, and rows 1–40 ║
 * ║    of Table 3), in the catalog as `fuji-xf-50140mm-f28`. That file   ║
 * ║    is authored from US 2017/0090163 A1, whose master rows and zoom   ║
 * ║    gaps are the same as rows 1–40 here.                              ║
 * ║  GEOMETRY: Table 2 prints the master back focus in air as 29.41 mm.  ║
 * ║    The rear rows of Table 1 (26.389 + 2.850 / 1.51633 + 3.617) sum   ║
 * ║    to 31.8855 mm instead; 29.41 is used, and the master rows trace   ║
 * ║    to a paraxial back focus of 29.36–29.37 mm. Minus the Table 3     ║
 * ║    master-to-converter gap d40 = 2.500, that gives                   ║
 * ║    masterImageDistanceMm = 26.91. The last gap (23.596) is the       ║
 * ║    physical distance to optical member PP (rows 55–56: 2.850 mm,     ║
 * ║    nd 1.51680, then 0.001 mm); with PP the combined back focus in    ║
 * ║    air is 25.476 mm (Table 4 prints 25.47).                          ║
 * ║                                                                      ║
 * ║  Patent combined system (Table 4, W / M / T):                        ║
 * ║    f = 102.997 / 167.327 / 271.837 mm, FNo. 5.76 / 5.80 / 5.76,      ║
 * ║    2ω = 16.8° / 10.2° / 6.4°.                                        ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters.    ║
 * ║    The rims are measured from FIG. 1, which is drawn to scale (every ║
 * ║    surface curve of the prescription registers on the drawing), and  ║
 * ║    set 3% inside the drawn glass edge: RL11 10.4, RL12 9.4, RL21 8.9 ║
 * ║    at its bevelled front and 9.2 at the junction, RL22 9.2, RL31 9.2 ║
 * ║    at its bevelled front and 10.4 at the junction, RL32 10.4, RL33   ║
 * ║    9.7 front and 11.4 rear, RL41 12.2, RL42 13.1 mm. Fujifilm's      ║
 * ║    published lens-construction diagram shows the same proportions.   ║
 * ║    The source package's rims (5.8–9.9 mm) only just passed the       ║
 * ║    corner chief ray of the master system and darkened the corners;   ║
 * ║    they are replaced.                                                ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS: a virtual object at masterImageDistanceMm images     ║
 * ║    25.635 mm behind the last vertex, 0.159 mm beyond the printed     ║
 * ║    25.476 mm. That offset is the master's own paraxial focus         ║
 * ║    residual, 0.04–0.05 mm short of its image plane, magnified about  ║
 * ║    four times by the converter. The printed spacings are kept; the   ║
 * ║    patent's combined system sits within 0.05 mm of paraxial focus.   ║
 * ║                                                                      ║
 * ║  NOTE ON THE SOURCE: Table 1 lists the plate behind the master alone ║
 * ║    as nd 1.51633, νd 64.14; Table 3 gives PP as nd 1.51680,          ║
 * ║    νd 64.20, used here. With the 2.500 mm gap the printed            ║
 * ║    prescription traces to f = 102.924 / 167.215 / 271.909 mm,        ║
 * ║    0.07–0.11 mm from Table 4. FIG. 1 letters the fourth group        ║
 * ║    "RG41"; the description, the reference-sign list and FIG. 5       ║
 * ║    give RG4.                                                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const TELECONVERTER_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf2x-tc-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON TELECONVERTER XF2X TC WR",
  subtitle: "JP 2017-173692 A Example 1 — rear converter; production correlation not manufacturer-confirmed",
  specs: ["9 ELEMENTS / 5 GROUPS", "2× REAR CONVERTER", "ALL SPHERICAL"],

  /* ── Fit ── */
  magnification: 2,
  lensMounts: ["fujifilm-x"],
  minHostFno: 2.8, // the patent master is f/2.88; Fujifilm lists the f/2 XF 200mm as not compatible

  /* ── Patent metadata ── */
  patentNumber: "JP 2017-173692 A",
  patentAuthors: ["Tetsuya Ori","Michio Cho"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2017,
  elementCount: 9,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    // RG1 — positive, f = 65.26 mm
    // prettier-ignore
    { id: 1, name: "RL11", label: "Element 1", type: "Negative Meniscus", nd: 1.883, vd: 40.76, fl: -28.1801, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Front negative meniscus of RG1, concave to the image; cemented to RL12, which limits the change in axial colour and aids field-curvature correction", cemented: "D1" },
    // prettier-ignore
    { id: 2, name: "RL12", label: "Element 2", type: "Biconvex Positive", nd: 1.62004, vd: 36.26, fl: 20.4106, glass: "S-TIM2 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG1, convex to the object; stronger than RL11, so the cemented front group is net positive", cemented: "D1" },
    // RG2 — negative, f = -36.46 mm
    // prettier-ignore
    { id: 3, name: "RL21", label: "Element 3", type: "Biconcave Negative", nd: 1.883, vd: 40.76, fl: -13.2961, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Biconcave front element of RG2 and the converter's strongest; supplies RG2's share of the negative power, split with RG3 to limit axial-colour change", cemented: "D2" },
    // prettier-ignore
    { id: 4, name: "RL22", label: "Element 4", type: "Biconvex Positive", nd: 1.74077, vd: 27.79, fl: 21.6401, glass: "S-TIH13 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG2, convex to the object; cemented to RL21 to limit the change in axial colour when the converter is attached", cemented: "D2" },
    // RG3 — negative, f = -25.02 mm
    // prettier-ignore
    { id: 5, name: "RL31", label: "Element 5", type: "Biconcave Negative", nd: 1.883, vd: 40.76, fl: -22.1944, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Biconcave front element of RG3; its concave front surface, with RL33's, limits the change in field curvature", cemented: "D3" },
    // prettier-ignore
    { id: 6, name: "RL32", label: "Element 6", type: "Biconvex Positive", nd: 1.57501, vd: 41.5, fl: 26.9022, glass: "S-TIL27 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG3, convex to the image; nearly cancels RL31, leaving the cemented pair only weakly negative", cemented: "D3" },
    // prettier-ignore
    { id: 7, name: "RL33", label: "Element 7", type: "Negative Meniscus", nd: 1.90043, vd: 37.37, fl: -30.715, glass: "TAFD37 (HOYA coordinate match; supplier unconfirmed)", role: "Air-spaced negative meniscus of RG3, concave to the object; carries most of RG3's negative power, its shape keeping chief-ray incidence and astigmatism low" },
    // RG4 — positive, f = 44.10 mm
    // prettier-ignore
    { id: 8, name: "RL41", label: "Element 8", type: "Biconvex Positive", nd: 1.673, vd: 38.15, fl: 21.5572, glass: "S-NBH52 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG4; its convex front surface limits the change in spherical aberration when the converter is attached", cemented: "D4" },
    // prettier-ignore
    { id: 9, name: "RL42", label: "Element 9", type: "Negative Meniscus", nd: 2.00069, vd: 25.46, fl: -38.713, glass: "TAFD40 (HOYA coordinate match; supplier unconfirmed)", role: "Rear negative meniscus of RG4, concave to the object and cemented to RL41; lowers off-axis chief-ray incidence angles, limiting astigmatism", cemented: "D4" },
  ],

  /* ── Surface prescription ──
   *  Patent Table 3 rows 41–54, radii and spacings exactly as printed. No stop: the host lens's stop is the
   *  system stop. The last gap is the physical distance to optical member PP. Semi-diameters are from FIG. 1. */
  surfaces: [
    { label: "1", R: 82.3854, d: 0.9, nd: 1.883, elemId: 1, sd: 10.4 }, // RL11 front
    { label: "2", R: 19.013, d: 5.16, nd: 1.62004, elemId: 2, sd: 9.4 }, // RL11/RL12 junction
    { label: "3", R: -33.9161, d: 2.5, nd: 1.0, elemId: 0, sd: 9.4 }, // RL12 rear → air
    { label: "4", R: -34.6013, d: 0.91, nd: 1.883, elemId: 3, sd: 8.9 }, // RL21 front
    { label: "5", R: 17.989, d: 4.15, nd: 1.74077, elemId: 4, sd: 9.2 }, // RL21/RL22 junction
    { label: "6", R: -132.7745, d: 2.2, nd: 1.0, elemId: 0, sd: 9.2 }, // RL22 rear → air
    { label: "7", R: -31.1833, d: 0.93, nd: 1.883, elemId: 5, sd: 9.2 }, // RL31 front
    { label: "8", R: 53.486, d: 5.29, nd: 1.57501, elemId: 6, sd: 10.4 }, // RL31/RL32 junction
    { label: "9", R: -20.9775, d: 0.1, nd: 1.0, elemId: 0, sd: 10.4 }, // RL32 rear → air
    { label: "10", R: -24.999, d: 0.91, nd: 1.90043, elemId: 7, sd: 9.7 }, // RL33 front
    { label: "11", R: -264.634, d: 0.2, nd: 1.0, elemId: 0, sd: 11.4 }, // RL33 rear → air
    { label: "12", R: 31.0672, d: 7.34, nd: 1.673, elemId: 8, sd: 12.2 }, // RL41 front
    { label: "13", R: -24.632, d: 1, nd: 2.00069, elemId: 9, sd: 12.2 }, // RL41/RL42 junction
    { label: "14", R: -69.0128, d: 23.596, nd: 1.0, elemId: 0, sd: 13.1 }, // RL42 rear → optical member PP
  ],

  /* ── Optical member PP (the patent's two plane surfaces after the converter) ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      gapAfterMm: 0.001,
      source: "JP 2017-173692 A, Example 1, the two plane surfaces after the converter",
    },
  ],

  asph: {},

  groups: [
    { text: "RG1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "RG2 (−)", fromSurface: "4", toSurface: "6" },
    { text: "RG3 (−)", fromSurface: "7", toSurface: "11" },
    { text: "RG4 (+)", fromSurface: "12", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
    { text: "D3", fromSurface: "7", toSurface: "9" },
    { text: "D4", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Geometry ── master back focus in air 29.41 mm, the Bf printed in Table 2, minus the patent gap d40 = 2.500 */
  masterImageDistanceMm: 26.91,
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
