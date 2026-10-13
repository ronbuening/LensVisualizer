import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     TELECONVERTER DATA — REFERENCE 1.4× TEST MODEL                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  HIDDEN TEST MODEL (`visible: false`). It exists so the converter    ║
 * ║    engine, viewer, compare mode and corpus sweeps have a real        ║
 * ║    prescription to run against. It is NOT the catalog entry for the  ║
 * ║    FUJINON XF1.4X TC WR: that converter gets its own audited file    ║
 * ║    with its own key and name. This file has no index entry, search   ║
 * ║    result, prerendered page or sitemap URL, and the viewer does not  ║
 * ║    offer it; it mounts only from a hand-typed query:                 ║
 * ║    /lens/fuji-xf-50140mm-f28/?v=1&tc=reference-xf-14x-teleconverter  ║
 * ║                                                                      ║
 * ║  Data source: US 2017/0090163 A1, EXAMPLE 1, rear converter RCL —    ║
 * ║    the bold-framed rows 41–50 of Table 3 (Fujifilm Corporation /     ║
 * ║    Tetsuya Ori; priority JP 2015-186957, 24 September 2015;          ║
 * ║    published 30 March 2017). Cross-sections: FIG. 1 (converter       ║
 * ║    alone) and FIG. 2 (attached to the master lens, wide end).        ║
 * ║                                                                      ║
 * ║  Origin: 7 elements / 3 groups and a 15.07 mm image-plane shift,     ║
 * ║  the layout of the production XF1.4X TC WR (7 / 3, 15 mm long).      ║
 * ║                                                                      ║
 * ║  Design: three cemented groups, positive–negative–positive.          ║
 * ║    RG1 (RL11+RL12, doublet)          — positive                      ║
 * ║    RG2 (RL21+RL22+RL23, triplet)     — negative                      ║
 * ║    RG3 (RL31+RL32, doublet)          — positive                      ║
 * ║  All-spherical. Glass names are Ohara catalog equivalents; every     ║
 * ║  patent nd/νd pair matches its catalog entry exactly.                ║
 * ║                                                                      ║
 * ║  MASTER LENS: the patent's master lens ML (Tables 1–2), in the       ║
 * ║    catalog as `fuji-xf-50140mm-f28`.                                 ║
 * ║  GEOMETRY: master back focus in air                                  ║
 * ║    26.4281 + 2.85 / 1.5168 + 1.10 = 29.4071 mm (Table 2 prints       ║
 * ║    29.41), minus the Table 3 master-to-converter gap d40 = 2.5000,   ║
 * ║    gives masterImageDistanceMm = 26.9071. The last gap (13.1685) is  ║
 * ║    the physical distance to optical member PP; with PP the combined  ║
 * ║    back focus in air is 16.1475 mm (Table 4 prints 16.15).           ║
 * ║                                                                      ║
 * ║  Patent combined system (Table 4, W / M / T): f = 72.10 / 117.14 /   ║
 * ║    190.30 mm, FNo. 4.04 / 4.05 / 4.04, 2ω = 23.6° / 14.6° / 9.0°.    ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters.    ║
 * ║    Values are ray-trace estimates on the master lens: the paraxial   ║
 * ║    f/2.88 marginal height plus the chief-ray height for the APS-C    ║
 * ║    corner (14.175 mm), which is 10.7–11.8 mm across the converter    ║
 * ║    and the same at all three zoom stations (the master's rear group  ║
 * ║    is fixed). NOT figure-audited: FIG. 1 was not available at a      ║
 * ║    measurable resolution. Faster masters are excluded through        ║
 * ║    `minHostFno`.                                                     ║
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
  key: "reference-xf-14x-teleconverter",
  maker: "Reference",
  visible: false,
  name: "REFERENCE 1.4× Teleconverter (Test Model)",
  subtitle: "Hidden test model — US 2017/0090163 A1 Example 1 rear converter, estimated semi-diameters",
  specs: ["TEST MODEL", "7 ELEMENTS / 3 GROUPS", "1.4× REAR CONVERTER"],

  /* ── Fit ── */
  magnification: 1.4,
  lensMounts: ["fujifilm-x"],
  minHostFno: 2.8, // semi-diameters are sized for the f/2.88 master beam

  /* ── Patent metadata ── */
  patentNumber: "US 2017/0090163 A1",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2017,
  elementCount: 7,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    // RG1 — positive cemented doublet
    // prettier-ignore
    { id: 1, name: "RL11", label: "Element 1", type: "Negative Meniscus", nd: 1.88300, vd: 40.76, fl: -36.8, glass: "S-LAH58 (OHARA)", apd: false, role: "Front negative meniscus of RG1, concave to the image; high-index partner of RL12 that limits the added axial colour", cemented: "D1" },
    // prettier-ignore
    { id: 2, name: "RL12", label: "Element 2", type: "Biconvex Positive", nd: 1.67270, vd: 32.10, fl: +27.2, glass: "S-TIM25 (OHARA)", apd: false, role: "Positive element of RG1; gives the front group net positive power, pulling the front principal point toward the image", cemented: "D1" },
    // RG2 — negative cemented triplet
    // prettier-ignore
    { id: 3, name: "RL21", label: "Element 3", type: "Biconcave Negative", nd: 1.88300, vd: 40.76, fl: -18.9, glass: "S-LAH58 (OHARA)", apd: false, role: "Front negative of the RG2 triplet; carries much of the converter's diverging power", cemented: "T1" },
    // prettier-ignore
    { id: 4, name: "RL22", label: "Element 4", type: "Biconvex Positive", nd: 1.59270, vd: 35.31, fl: +21.1, glass: "S-FTM16 (OHARA)", apd: false, role: "Symmetric biconvex core of the RG2 triplet; lower-index positive between two high-index negatives for chromatic balance", cemented: "T1" },
    // prettier-ignore
    { id: 5, name: "RL23", label: "Element 5", type: "Biconcave Negative", nd: 1.88300, vd: 40.76, fl: -21.9, glass: "S-LAH58 (OHARA)", apd: false, role: "Rear negative of the RG2 triplet; completes the diverging group", cemented: "T1" },
    // RG3 — positive cemented doublet
    // prettier-ignore
    { id: 6, name: "RL31", label: "Element 6", type: "Plano-Convex Positive", nd: 1.74320, vd: 49.34, fl: +37.3, glass: "S-LAM60 (OHARA)", apd: false, role: "Convex-to-object positive of RG3; restores field flatness and spherical balance after the diverging triplet", cemented: "D2" },
    // prettier-ignore
    { id: 7, name: "RL32", label: "Element 7", type: "Plano-Concave Negative", nd: 1.92286, vd: 18.90, fl: -108.3, glass: "S-NPH2 (OHARA)", apd: false, role: "Very high-dispersion rear negative of RG3; trims lateral colour at the image-side end of the converter", cemented: "D2" },
  ],

  /* ── Surface prescription ──
   *  Patent Table 3 surfaces 41–50, radii and spacings exactly as printed. No stop: the master lens's stop is
   *  the system stop. The last gap is the physical distance to optical member PP. */
  surfaces: [
    { label: "1", R: 138.7894, d: 0.93, nd: 1.883, elemId: 1, sd: 11.6 }, // RL11 front
    { label: "2", R: 26.248, d: 4.94, nd: 1.6727, elemId: 2, sd: 11.5 }, // RL11/RL12 junction
    { label: "3", R: -55.7408, d: 3.75, nd: 1.0, elemId: 0, sd: 11.5 }, // RL12 rear → air
    { label: "4", R: -57.9214, d: 0.93, nd: 1.883, elemId: 3, sd: 11.0 }, // RL21 front
    { label: "5", R: 23.595, d: 7.37, nd: 1.5927, elemId: 4, sd: 11.0 }, // RL21/RL22 junction
    { label: "6", R: -23.595, d: 0.93, nd: 1.883, elemId: 5, sd: 11.5 }, // RL22/RL23 junction
    { label: "7", R: 109.8995, d: 0.2, nd: 1.0, elemId: 0, sd: 11.6 }, // RL23 rear → air
    { label: "8", R: 27.757, d: 5.12, nd: 1.7432, elemId: 6, sd: 11.7 }, // RL31 front
    { label: "9", R: 1e15, d: 1.66, nd: 1.92286, elemId: 7, sd: 11.8 }, // RL31/RL32 junction (flat)
    { label: "10", R: 99.9651, d: 13.1685, nd: 1.0, elemId: 0, sd: 11.9 }, // RL32 rear → optical member PP
  ],

  /* ── Optical member PP (patent Table 3 surfaces 51–52) ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.1,
      source: "US 2017/0090163 A1, Example 1 Table 3 surfaces 51–52",
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

  /* ── Geometry ── 29.4071 mm master back focus in air − 2.5000 mm patent gap d40 */
  masterImageDistanceMm: 26.9071,
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
