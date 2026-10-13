import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  TELECONVERTER DATA — FUJIFILM FUJINON TELECONVERTER GF1.4X TC WR    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2021/0003819 A1, EXAMPLE 1, rear converter RCL —    ║
 * ║    rows 28–37 of the combined master-plus-converter lens data        ║
 * ║    (Fujifilm Corporation / Tetsuya Ori; filed 14 September 2020 as   ║
 * ║    a division of application 16/112,420, priority JP 2017-177302 of  ║
 * ║    15 September 2017, published 7 January 2021). Cross-sections:     ║
 * ║    FIG. 1 (master lens alone) and FIG. 2 (converter mounted).        ║
 * ║  Table numbering: the text calls the master and combined lens data   ║
 * ║    Tables 1 and 3; the pages caption them TABLE 2 and TABLE 4, and   ║
 * ║    the specification tables carry no caption.                        ║
 * ║  Adapted from the reviewed master-plus-converter package for this    ║
 * ║  example: only the converter rows are kept here, and the host lens   ║
 * ║  supplies the stop and f-number.                                     ║
 * ║                                                                      ║
 * ║  Production correlation: 7 elements / 3 groups, all spherical, and   ║
 * ║    a computed 1.4001× magnification, the count and multiplier of     ║
 * ║    the production GF1.4X TC WR (7 / 3, 1.4×). The correlation is     ║
 * ║    not manufacturer-confirmed: Fujifilm's product sources do not     ║
 * ║    cite this patent or its numbers.                                  ║
 * ║                                                                      ║
 * ║  Design: three cemented groups, positive–negative–positive, with     ║
 * ║  net negative power (f = −121.97 mm). Designations follow FIG. 2     ║
 * ║  and paragraphs 0029–0032.                                           ║
 * ║    RG1 (RL1a+RL1b, doublet)          — positive, f = +159.85 mm      ║
 * ║    RG2 (RL2a+RL2b+RL2c, triplet)     — negative, f = −41.75 mm       ║
 * ║    RG3 (RL3a+RL3b, doublet)          — positive, f = +123.93 mm      ║
 * ║  All-spherical. Glass: the patent prints nd/νd only. Each pair       ║
 * ║  equals a catalog entry to the printed precision (Ohara S-LAL8,      ║
 * ║  S-TIM8, S-LAH97 and S-NBH5; Hoya E-F1 and E-FDS2; CDGM H-ZLaF68N),  ║
 * ║  so the elements carry those labels and trace on catalog dispersion  ║
 * ║  data; the supplier is not confirmed.                                ║
 * ║                                                                      ║
 * ║  MASTER LENS: the patent's master lens ML, a 16-element prime        ║
 * ║    (L1a–L1p; f = 242.54 mm, FNo. 4.12, 2ω = 13.4°). The catalog      ║
 * ║    host `fujifilm-gf250mm-f4-r-lm-ois-wr` is transcribed from a      ║
 * ║    different publication, US 2019/0094496 A1 Example 1. Its 27       ║
 * ║    surfaces match this patent's master rows to the printed           ║
 * ║    precision, but its back focus in air is 70.9527 mm, so the        ║
 * ║    junction gap composes to 16.4990 mm (patent 16.4997).             ║
 * ║  GEOMETRY: master back focus in air 68.8437 + 3.2 / 1.5168 =         ║
 * ║    70.9534 mm (the master specification prints 70.95), minus the     ║
 * ║    patent gap d27 = 16.4997, gives masterImageDistanceMm = 54.4537.  ║
 * ║    The last gap (38.9201) is the physical distance to optical        ║
 * ║    member PP (3.2 mm, nd 1.5168, touching the image plane Sim);      ║
 * ║    with PP the combined back focus in air is 41.0298 mm (the patent  ║
 * ║    prints 41.03). The converter is 40.20 mm long vertex to vertex    ║
 * ║    and moves the image plane 26.78 mm rearward.                      ║
 * ║                                                                      ║
 * ║  Patent combined system: f = 339.58 mm, FNo. 5.77, 2ω = 9.8°.        ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters.    ║
 * ║    The values are the package's inferred rims, one per cemented      ║
 * ║    group: 10% over the envelope of ray bundles traced through the    ║
 * ║    patent's master and converter at the f/4.12 master stop across    ║
 * ║    the published field, with RG1 and RG2 cut back (from 21.44 and    ║
 * ║    22.81 mm) to where the biconvex RL1b and RL2b keep a 0.06 mm      ║
 * ║    edge. The patent figures corroborate the topology only; the rims  ║
 * ║    are not figure-audited. Faster masters are excluded through       ║
 * ║    `minHostFno`.                                                     ║
 * ║                                                                      ║
 * ║  NOTE ON SOURCE DISCREPANCIES: Table 11 prints f1/fC = −1.303,       ║
 * ║    f3/fC = −1.019 and ν1 − ν2 = 14.7 for Example 1; the printed      ║
 * ║    rows give −1.3106, −1.0161 and 14.63 (f2/fC = 0.342 agrees). All  ║
 * ║    four conditional expressions are still satisfied, and the         ║
 * ║    printed rows are kept.                                            ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS: a virtual object at masterImageDistanceMm images     ║
 * ║    41.0289 mm behind the last vertex, 0.0009 mm short of the         ║
 * ║    authored back focus in air.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const TELECONVERTER_DATA = {
  /* ── Identity ── */
  key: "fujifilm-gf14x-tc-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON TELECONVERTER GF1.4X TC WR",
  subtitle: "US 2021/0003819 A1 Example 1 — rear converter; production correlation not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 3 GROUPS", "1.4× REAR CONVERTER", "ALL SPHERICAL"],

  /* ── Fit ── */
  magnification: 1.4,
  lensMounts: ["fujifilm-g"],
  minHostFno: 4, // semi-diameters are sized for the f/4.12 master beam

  /* ── Patent metadata ── */
  patentNumber: "US 2021/0003819 A1",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2021,
  elementCount: 7,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    // RG1 — positive cemented doublet, f = 159.85 mm
    // prettier-ignore
    { id: 1, name: "RL1a", label: "Element 1", type: "Negative Meniscus", nd: 1.71299, vd: 53.87, fl: -86.5261, glass: "S-LAL8 (OHARA coordinate match; supplier unconfirmed)", role: "Front negative meniscus of RG1, concave to the image; lower-dispersion partner of RL1b, the pairing the patent uses to limit added chromatic aberration", cemented: "D1" },
    // prettier-ignore
    { id: 2, name: "RL1b", label: "Element 2", type: "Biconvex Positive", nd: 1.59551, vd: 39.24, fl: 57.1394, glass: "S-TIM8 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG1; gives the front group net positive power, pulling the combined system's front principal point toward the image", cemented: "D1" },
    // RG2 — negative cemented triplet, f = -41.75 mm
    // prettier-ignore
    { id: 3, name: "RL2a", label: "Element 3", type: "Biconcave Negative", nd: 1.883, vd: 39.22, fl: -32.9503, glass: "H-ZLaF68N (CDGM coordinate match; supplier unconfirmed)", role: "Biconcave front negative of the RG2 triplet, the converter's only negative group; with RL2c it supplies the group's diverging power", cemented: "T1" },
    // prettier-ignore
    { id: 4, name: "RL2b", label: "Element 4", type: "Biconvex Positive", nd: 1.62588, vd: 35.74, fl: 36.1671, glass: "E-F1 (HOYA coordinate match; supplier unconfirmed)", role: "Equiconvex positive core of the RG2 triplet; the patent cements it between two negatives to limit the longitudinal chromatic aberration the converter adds", cemented: "T1" },
    // prettier-ignore
    { id: 5, name: "RL2c", label: "Element 5", type: "Biconcave Negative", nd: 1.755, vd: 52.32, fl: -45.5068, glass: "S-LAH97 (OHARA coordinate match; supplier unconfirmed)", role: "Biconcave rear negative of the RG2 triplet, cemented face concave to the object; completes the diverging group", cemented: "T1" },
    // RG3 — positive cemented doublet, f = 123.93 mm
    // prettier-ignore
    { id: 6, name: "RL3a", label: "Element 6", type: "Biconvex Positive", nd: 1.65412, vd: 39.68, fl: 65.0852, glass: "S-NBH5 (OHARA coordinate match; supplier unconfirmed)", role: "Biconvex positive of RG3; its convex object-side surface is what the patent uses to limit the spherical aberration change on mounting", cemented: "D2" },
    // prettier-ignore
    { id: 7, name: "RL3b", label: "Element 7", type: "Biconcave Negative", nd: 2.00272, vd: 19.32, fl: -129.1876, glass: "E-FDS2 (HOYA coordinate match; supplier unconfirmed)", role: "Biconcave rear negative of RG3 in the converter's highest-index, most dispersive glass; cemented behind RL3a, it leaves the rear group net positive", cemented: "D2" },
  ],

  /* ── Surface prescription ──
   *  Patent combined table rows 28–37, radii and spacings exactly as printed. No stop: the host lens's stop is the
   *  system stop. The last gap is the physical distance to optical member PP. Semi-diameters are inferred. */
  surfaces: [
    { label: "1", R: 425.3981, d: 1.7, nd: 1.71299, elemId: 1, sd: 21.16 }, // RL1a front
    { label: "2", R: 53.789, d: 6.97, nd: 1.59551, elemId: 2, sd: 21.16 }, // RL1a/RL1b junction
    { label: "3", R: -88.1371, d: 6.85, nd: 1.0, elemId: 0, sd: 21.16 }, // RL1b rear → air
    { label: "4", R: -91.629, d: 1.7, nd: 1.883, elemId: 3, sd: 21.17 }, // RL2a front
    { label: "5", R: 43.003, d: 11.2, nd: 1.62588, elemId: 4, sd: 21.17 }, // RL2a/RL2b junction
    { label: "6", R: -43.003, d: 1.7, nd: 1.755, elemId: 5, sd: 21.17 }, // RL2b/RL2c junction
    { label: "7", R: 173.8058, d: 0.2, nd: 1.0, elemId: 0, sd: 21.17 }, // RL2c rear → air
    { label: "8", R: 57.9507, d: 8.15, nd: 1.65412, elemId: 6, sd: 24.73 }, // RL3a front
    { label: "9", R: -151.52, d: 1.73, nd: 2.00272, elemId: 7, sd: 24.73 }, // RL3a/RL3b junction
    { label: "10", R: 898.0469, d: 38.9201, nd: 1.0, elemId: 0, sd: 24.73 }, // RL3b rear → optical member PP
  ],

  /* ── Optical member PP (the patent's two plane surfaces after the converter) ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 3.2,
      nd: 1.5168,
      vd: 64.2,
      gapAfterMm: 0,
      source: "US 2021/0003819 A1, Example 1, the two plane surfaces after the converter",
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

  /* ── Geometry ── master back focus in air 68.8437 + 3.2 / 1.5168 = 70.9534 mm (the master table prints 70.95), minus the patent gap d27 = 16.4997 */
  masterImageDistanceMm: 54.4537,
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
