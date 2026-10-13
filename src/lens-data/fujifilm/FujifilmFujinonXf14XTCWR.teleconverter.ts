import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  TELECONVERTER DATA — FUJIFILM FUJINON TELECONVERTER XF1.4X TC WR    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0090163 A1, EXAMPLE 1, rear converter RCL —    ║
 * ║    rows 41–50 of Table 3 (Fujifilm Corporation / Tetsuya Ori; filed  ║
 * ║    26 August 2016, priority JP 2015-186957 of 24 September 2015,     ║
 * ║    published 30 March 2017). Cross-sections: FIG. 1 (converter       ║
 * ║    alone) and FIG. 2 (attached to the master lens, wide end).        ║
 * ║  Adapted from the reviewed master-plus-converter package for this    ║
 * ║  example: only the converter rows are kept here, and the host lens   ║
 * ║  supplies the stop, zoom tables and f-numbers.                       ║
 * ║                                                                      ║
 * ║  Production correlation: 7 elements / 3 groups and a 15.07 mm        ║
 * ║    image-plane shift, the layout of the production XF1.4X TC WR (7 / ║
 * ║    3, 15 mm long). The correlation is not manufacturer-confirmed.    ║
 * ║                                                                      ║
 * ║  Design: three cemented groups, positive–negative–positive.          ║
 * ║    RG1 (RL11+RL12, doublet)          — positive                      ║
 * ║    RG2 (RL21+RL22+RL23, triplet)     — negative                      ║
 * ║    RG3 (RL31+RL32, doublet)          — positive                      ║
 * ║  All-spherical. Glass: the patent prints nd/νd only. Every pair      ║
 * ║  equals an Ohara catalog entry to the printed precision (S-LAH58,    ║
 * ║  S-TIM25, S-FTM16, S-LAM60, S-NPH2), so the elements carry those     ║
 * ║  labels and trace on catalog dispersion data; the supplier is not    ║
 * ║  confirmed.                                                          ║
 * ║                                                                      ║
 * ║  MASTER LENS: the patent's master lens ML (Tables 1–2), in the       ║
 * ║    catalog as `fuji-xf-50140mm-f28`.                                 ║
 * ║  GEOMETRY: master back focus in air 26.4281 + 2.85 / 1.5168 + 1.10 = ║
 * ║    29.4071 mm (Table 2 prints 29.41), minus the Table 3              ║
 * ║    master-to-converter gap d40 = 2.5000, gives masterImageDistanceMm ║
 * ║    = 26.9071. The last gap (13.1685) is the physical distance to     ║
 * ║    optical member PP; with PP the combined back focus in air is      ║
 * ║    16.1475 mm (Table 4 prints 16.15).                                ║
 * ║                                                                      ║
 * ║  Patent combined system (Table 4, W / M / T): f = 72.10 / 117.14 /   ║
 * ║    190.30 mm, FNo. 4.04 / 4.05 / 4.04, 2ω = 23.6° / 14.6° / 9.0°.    ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters.    ║
 * ║    The rims are measured from FIG. 1, which is drawn to scale (every ║
 * ║    surface curve of the prescription registers on the drawing), and  ║
 * ║    set 3% inside the drawn glass edge: RL11 12.0, RL12 11.4, RL21    ║
 * ║    12.2, RL22 12.3, RL23 12.7, RL31 and RL32 13.6 mm. RL22's two     ║
 * ║    surfaces cross at 12.66 mm, where the figure draws its tip.       ║
 * ║    Fujifilm's published lens-construction diagram shows the same     ║
 * ║    proportions. The source package's rims (7.8–11.4 mm) only just    ║
 * ║    passed the corner chief ray of the master system and darkened the ║
 * ║    corners; they are replaced.                                       ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS: a virtual object at masterImageDistanceMm images     ║
 * ║    16.116 mm behind the last vertex, 0.03 mm short of the printed    ║
 * ║    16.1475 mm, and the master's own paraxial focus is 0.03–0.05 mm   ║
 * ║    short of its image plane. The printed spacings are kept; the      ║
 * ║    combined system therefore sits about 0.1 mm from paraxial focus.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const TELECONVERTER_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf14x-tc-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON TELECONVERTER XF1.4X TC WR",
  subtitle: "US 2017/0090163 A1 Example 1 — rear converter; production correlation not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 3 GROUPS", "1.4× REAR CONVERTER", "ALL SPHERICAL"],

  /* ── Fit ── */
  magnification: 1.4,
  lensMounts: ["fujifilm-x"],
  minHostFno: 2.8, // the patent master is f/2.88; Fujifilm lists the f/2 XF 200mm as not compatible

  /* ── Patent metadata ── */
  patentNumber: "US 2017/0090163 A1",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2017,
  elementCount: 7,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    // RG1 — positive, f = 95.57 mm
    // prettier-ignore
    { id: 1, name: "RL11", label: "Element 1", type: "Negative Meniscus", nd: 1.883, vd: 40.76, fl: -36.8015, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Front negative meniscus of RG1, concave to the image; high-index partner of RL12 that limits the added axial colour", cemented: "D1" },
    // prettier-ignore
    { id: 2, name: "RL12", label: "Element 2", type: "Biconvex Positive", nd: 1.6727, vd: 32.1, fl: 27.1861, glass: "S-TIM25 (OHARA coordinate match; supplier unconfirmed)", role: "Positive element of RG1; gives the front group net positive power, pulling the front principal point toward the image", cemented: "D1" },
    // RG2 — negative, f = -19.65 mm
    // prettier-ignore
    { id: 3, name: "RL21", label: "Element 3", type: "Biconcave Negative", nd: 1.883, vd: 40.76, fl: -18.8858, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Front negative of the RG2 triplet; carries much of the converter's diverging power", cemented: "T1" },
    // prettier-ignore
    { id: 4, name: "RL22", label: "Element 4", type: "Biconvex Positive", nd: 1.5927, vd: 35.31, fl: 21.1329, glass: "S-FTM16 (OHARA coordinate match; supplier unconfirmed)", role: "Symmetric biconvex core of the RG2 triplet; lower-index positive between two high-index negatives for chromatic balance", cemented: "T1" },
    // prettier-ignore
    { id: 5, name: "RL23", label: "Element 5", type: "Biconcave Negative", nd: 1.883, vd: 40.76, fl: -21.9268, glass: "S-LAH58 (OHARA coordinate match; supplier unconfirmed)", role: "Rear negative of the RG2 triplet; completes the diverging group", cemented: "T1" },
    // RG3 — positive, f = 54.10 mm
    // prettier-ignore
    { id: 6, name: "RL31", label: "Element 6", type: "Plano-Convex", nd: 1.7432, vd: 49.34, fl: 37.348, glass: "S-LAM60 (OHARA coordinate match; supplier unconfirmed)", role: "Convex-to-object positive of RG3; restores field flatness and spherical balance after the diverging triplet", cemented: "D2" },
    // prettier-ignore
    { id: 7, name: "RL32", label: "Element 7", type: "Plano-Concave", nd: 1.92286, vd: 18.9, fl: -108.321, glass: "S-NPH2 (OHARA coordinate match; supplier unconfirmed)", role: "Very high-dispersion rear negative of RG3; trims lateral colour at the image-side end of the converter", cemented: "D2" },
  ],

  /* ── Surface prescription ──
   *  Patent Table 3 rows 41–50, radii and spacings exactly as printed. No stop: the host lens's stop is the
   *  system stop. The last gap is the physical distance to optical member PP. Semi-diameters are from FIG. 1. */
  surfaces: [
    { label: "1", R: 138.7894, d: 0.93, nd: 1.883, elemId: 1, sd: 12.0 }, // RL11 front
    { label: "2", R: 26.248, d: 4.94, nd: 1.6727, elemId: 2, sd: 11.4 }, // RL11/RL12 junction
    { label: "3", R: -55.7408, d: 3.75, nd: 1.0, elemId: 0, sd: 11.4 }, // RL12 rear → air
    { label: "4", R: -57.9214, d: 0.93, nd: 1.883, elemId: 3, sd: 12.2 }, // RL21 front
    { label: "5", R: 23.595, d: 7.37, nd: 1.5927, elemId: 4, sd: 12.2 }, // RL21/RL22 junction
    { label: "6", R: -23.595, d: 0.93, nd: 1.883, elemId: 5, sd: 12.3 }, // RL22/RL23 junction
    { label: "7", R: 109.8995, d: 0.2, nd: 1.0, elemId: 0, sd: 12.7 }, // RL23 rear → air
    { label: "8", R: 27.757, d: 5.12, nd: 1.7432, elemId: 6, sd: 13.6 }, // RL31 front
    { label: "9", R: 1e15, d: 1.66, nd: 1.92286, elemId: 7, sd: 13.6 }, // RL31/RL32 junction
    { label: "10", R: 99.9651, d: 13.1685, nd: 1.0, elemId: 0, sd: 13.6 }, // RL32 rear → optical member PP
  ],

  /* ── Optical member PP (the patent's two plane surfaces after the converter) ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      gapAfterMm: 1.1,
      source: "US 2017/0090163 A1, Example 1, the two plane surfaces after the converter",
    },
  ],

  asph: {},

  groups: [
    { text: "RG1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "RG2 (−)", fromSurface: "4", toSurface: "7" },
    { text: "RG3 (+)", fromSurface: "8", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "4", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Geometry ── master back focus in air 26.4281 + 2.85 / 1.5168 + 1.10 = 29.4071 mm (Table 2 prints 29.41), minus the patent gap d40 = 2.5000 */
  masterImageDistanceMm: 26.9071,
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
