import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  TELECONVERTER DATA — FUJIFILM FUJINON TELECONVERTER XF1.4X TC F2 WR ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 11,079,573 B2, EXAMPLE 1, rear converter lens RCL — ║
 * ║    rows 35–45 of Table 3, the surface numbers the text assigns to    ║
 * ║    the converter (Fujifilm Corporation / Tetsuya Ori; filed 26 June  ║
 * ║    2019, priority JP 2018-133425 of 13 July 2018, granted 3 August   ║
 * ║    2021). Cross-sections: FIG. 1 (converter alone) and FIG. 3        ║
 * ║    (Example 1 mounted on the master lens).                           ║
 * ║  Adapted from the reviewed master-plus-converter package for this    ║
 * ║  example: only the converter rows are kept here, and the host lens   ║
 * ║  supplies the stop and the f-number.                                 ║
 * ║                                                                      ║
 * ║  Production correlation: 7 elements in 4 air-separated groups, a     ║
 * ║    doublet, a triplet and two singlets with the sixth lens           ║
 * ║    aspherical, as in Fujifilm's published section and specification  ║
 * ║    of the XF1.4X TC F2 WR. The paraxial magnification is 1.3996      ║
 * ║    against the marketed 1.4×, and the priority date precedes the     ║
 * ║    product's release. The correlation is not manufacturer-confirmed. ║
 * ║                                                                      ║
 * ║  Design: three lens groups, positive–negative–positive, in four      ║
 * ║  air-separated components. Converter focal length −56.47 mm.         ║
 * ║    RG1 (RL1a+RL1b, cemented doublet)       — positive, f = +62.40    ║
 * ║    RG2 (RL2a+RL2b+RL2c, cemented triplet)  — negative, f = −18.04    ║
 * ║    RG3 (RL3a, RL3b, air-spaced singlets)   — positive, f = +61.69    ║
 * ║  RL3a carries both aspherical surfaces. Glass: the patent prints     ║
 * ║  nd/νd only. Each pair equals a catalog entry to the printed         ║
 * ║  precision (CDGM H-ZLaF68N, H-ZF1 and H-ZF4A; Ohara L-BSL7 and       ║
 * ║  S-NPH3), so the elements carry those labels and trace on catalog    ║
 * ║  dispersion data; the supplier is not confirmed.                     ║
 * ║                                                                      ║
 * ║  MASTER LENS: the patent's master lens ML (Tables 1–2), a 194.02 mm  ║
 * ║    f/2.06 prime of nineteen lenses L1a–L1s. The catalog host is      ║
 * ║    `fujifilm-xf-200-f2`, transcribed from a different publication,   ║
 * ║    US 2019/0265504 A1. Its Example 1 has the same lens elements but  ║
 * ║    a back focus of 31.1415 mm in air, so the composed junction gap   ║
 * ║    is 4.2784 mm against the patent's 4.2900.                         ║
 * ║  GEOMETRY: master back focus in air 29.2741 + 2.85 / 1.5168 =        ║
 * ║    31.1531 mm (Table 2 prints 31.15), minus the Table 3              ║
 * ║    master-to-converter gap d34 = 4.2900, gives masterImageDistanceMm ║
 * ║    = 26.8631. The last gap (12.5726) is the physical distance to     ║
 * ║    optical member PP (2.85 mm, nd 1.5168, touching the image plane   ║
 * ║    Sim); with PP the combined back focus in air is 14.4516 mm        ║
 * ║    (Table 4 prints 14.45). Mounting the converter moves the image    ║
 * ║    plane back 27.41 + 14.4516 − 26.8631 = 14.9985 mm.                ║
 * ║                                                                      ║
 * ║  Patent combined system (Table 4): f = 271.54 mm, Bf = 14.45 mm,     ║
 * ║    FNo. 2.88, 2ω = 6.8°.                                             ║
 * ║                                                                      ║
 * ║  NOTE ON ASPHERES: patent surfaces 42 and 43, the two faces of RL3a, ║
 * ║    are labels `8A` and `9A` here (Table 5). The patent's sag         ║
 * ║    equation carries KA where this project carries 1 + K, so the      ║
 * ║    printed KA = 1 is stored as K = 0. The odd and even terms A4–A16  ║
 * ║    are kept as printed; A3 and A17–A20 print as zero.                ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent lists no effective diameters.    ║
 * ║    The values are the package's inferred rims for the patent's       ║
 * ║    master-plus-converter system, sized from traced full-field ray    ║
 * ║    bundles and cut back on RG1, RG2 and RL3a to the radius that      ║
 * ║    leaves the positive lens about 0.05 mm of edge. The patent        ║
 * ║    figures corroborate the topology only; the rims are not           ║
 * ║    figure-audited. Faster hosts are excluded through `minHostFno`.   ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS: a virtual object at masterImageDistanceMm images     ║
 * ║    14.4517 mm behind the last vertex, 0.0002 mm from the printed     ║
 * ║    plane. The package finds the complete patent system 0.0021 mm     ║
 * ║    from paraxial focus. The printed spacings are kept.               ║
 * ║                                                                      ║
 * ║  NOTE ON SOURCE DISCREPANCIES: Table 18 prints f1/fC −1.101, f2/fC   ║
 * ║    0.320, f3/fC −1.101, ν1−ν2 5.400, f31/f3 0.614 and f32/f3 −1.477  ║
 * ║    for Example 1, while the printed rows give −1.105, 0.319, −1.092, ║
 * ║    5.38, 0.617 and −1.500. Every condition still holds and the rows  ║
 * ║    are kept as printed.                                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const TELECONVERTER_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf14x-tc-f2-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON TELECONVERTER XF1.4X TC F2 WR",
  subtitle: "US 11,079,573 B2 Example 1 — rear converter; production correlation not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 4 GROUPS", "1.4× REAR CONVERTER", "2 ASPHERICAL SURFACES"],

  /* ── Fit ── */
  magnification: 1.4,
  lensMounts: ["fujifilm-x"],
  minHostFno: 2, // semi-diameters are sized for the f/2.06 master beam
  // Supplied with the XF 200mm f/2 only. The other X-mount lenses that take converters are listed by Fujifilm for
  // the XF1.4X TC WR and XF2X TC WR instead; each one that declares converter support is excluded here.
  incompatibleLensKeys: [
    "fuji-xf-50140mm-f28",
    "fujifilm-xf80-f28-macro",
    "fujifilm-fujinon-xf-70-300mm-f4-56-r-lm-ois-wr",
    "fujifilm-fujinon-xf-100-400mm-f45-56-r-lm-ois-wr",
  ],

  /* ── Patent metadata ── */
  patentNumber: "US 11,079,573 B2",
  patentAuthors: ["Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2021,
  elementCount: 7,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    // RG1 — positive cemented doublet, f = 62.40 mm
    // prettier-ignore
    { id: 1, name: "RL1a", label: "Element 1", type: "Negative Meniscus", nd: 1.883, vd: 39.22, fl: -36.7187, glass: "H-ZLaF68N (CDGM coordinate match; supplier unconfirmed)", role: "Negative meniscus of the RG1 doublet, concave to the image; cemented to RL1b to limit the longitudinal chromatic change the converter adds", cemented: "D1" },
    // prettier-ignore
    { id: 2, name: "RL1b", label: "Element 2", type: "Biconvex Positive", nd: 1.64769, vd: 33.84, fl: 23.8349, glass: "H-ZF1 (CDGM coordinate match; supplier unconfirmed)", role: "Biconvex positive of the RG1 doublet; gives RG1 its positive power, moving the converter's object-side principal point toward the image", cemented: "D1" },
    // RG2 — negative cemented triplet, f = -18.04 mm
    // prettier-ignore
    { id: 3, name: "RL2a", label: "Element 3", type: "Biconcave Negative", nd: 1.883, vd: 39.22, fl: -16.4295, glass: "H-ZLaF68N (CDGM coordinate match; supplier unconfirmed)", role: "Biconcave front negative of the RG2 triplet; with RL2c it supplies the power of the converter's only negative group", cemented: "T1" },
    // prettier-ignore
    { id: 4, name: "RL2b", label: "Element 4", type: "Biconvex Positive", nd: 1.72825, vd: 28.32, fl: 21.0542, glass: "H-ZF4A (CDGM coordinate match; supplier unconfirmed)", role: "Biconvex positive core of the RG2 triplet; its cemented pairing with RL2a and RL2c limits the longitudinal chromatic change the negative group adds", cemented: "T1" },
    // prettier-ignore
    { id: 5, name: "RL2c", label: "Element 5", type: "Biconcave Negative", nd: 1.883, vd: 39.22, fl: -23.7211, glass: "H-ZLaF68N (CDGM coordinate match; supplier unconfirmed)", role: "Biconcave rear negative of the RG2 triplet; cementing the group suppresses ghosts between its surfaces and the effect of relative position error", cemented: "T1" },
    // RG3 — positive, two air-spaced singlets, f = 61.69 mm
    // prettier-ignore
    { id: 6, name: "RL3a", label: "Element 6", type: "Biconvex Positive (Aspherical)", nd: 1.51633, vd: 64.06, fl: 38.089, glass: "L-BSL7 (OHARA coordinate match; supplier unconfirmed)", role: "Positive first lens of RG3 with both surfaces aspheric; the patent credits the aspheres with correcting spherical aberration, field curvature and distortion together" },
    // prettier-ignore
    { id: 7, name: "RL3b", label: "Element 7", type: "Negative Meniscus", nd: 1.95906, vd: 17.47, fl: -92.5552, glass: "S-NPH3 (OHARA coordinate match; supplier unconfirmed)", role: "Negative meniscus closing RG3; its negative power moves the converter's object-side principal point toward the image, shortening the combined back focus" },
  ],

  /* ── Surface prescription ──
   *  Patent Table 3 rows 35–45, radii and spacings exactly as printed. No stop: the host lens's stop is the
   *  system stop. The last gap is the physical distance to optical member PP. Semi-diameters are inferred. */
  surfaces: [
    { label: "1", R: 80.6062, d: 0.93, nd: 1.883, elemId: 1, sd: 12.89 }, // RL1a front
    { label: "2", R: 22.997, d: 6.03, nd: 1.64769, elemId: 2, sd: 12.89 }, // RL1a/RL1b junction
    { label: "3", R: -42.1232, d: 3.27, nd: 1.0, elemId: 0, sd: 12.89 }, // RL1b rear → air
    { label: "4", R: -29.231, d: 0.93, nd: 1.883, elemId: 3, sd: 13.33 }, // RL2a front
    { label: "5", R: 29.231, d: 6.49, nd: 1.72825, elemId: 4, sd: 13.33 }, // RL2a/RL2b junction
    { label: "6", R: -29.231, d: 0.93, nd: 1.883, elemId: 5, sd: 13.33 }, // RL2b/RL2c junction
    { label: "7", R: 75.0001, d: 0.1, nd: 1.0, elemId: 0, sd: 13.33 }, // RL2c rear → air
    { label: "8A", R: 43.0957, d: 6.63, nd: 1.51633, elemId: 6, sd: 14.6 }, // RL3a front
    { label: "9A", R: -34.2796, d: 1.1, nd: 1.0, elemId: 0, sd: 14.6 }, // RL3a rear → air
    { label: "10", R: -48.659, d: 1, nd: 1.95906, elemId: 7, sd: 15.49 }, // RL3b front
    { label: "11", R: -108.777, d: 12.5726, nd: 1.0, elemId: 0, sd: 15.49 }, // RL3b rear → optical member PP
  ],

  /* ── Optical member PP (patent Table 3 surfaces 46–47) ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      gapAfterMm: 0,
      source: "US 11,079,573 B2, Example 1, the two plane surfaces after the converter",
    },
  ],

  /* ── Aspherical coefficients ── patent KA = 1 → K = 0; odd and even terms as printed */
  asph: {
    "8A": { K: 0, A4: -0.0000040069027, A5: -0.0000040116511, A6: 0.0000019322476, A7: -3.0556474e-7, A8: 1.5084145e-8, A9: 5.3417505e-10, A10: -2.9150133e-11, A11: -3.4316109e-12, A12: 2.7309242e-14, A13: 1.0843229e-14, A14: 3.4115327e-16, A15: -4.2858995e-17, A16: 7.6873928e-19 },
    "9A": { K: 0, A4: -0.000029797401, A5: 0.0000050678274, A6: -0.0000014104856, A7: 2.5633878e-7, A8: -2.0298979e-8, A9: -2.9461048e-10, A10: 9.2188992e-11, A11: 3.0094687e-12, A12: -3.1391599e-13, A13: -2.6925527e-14, A14: 3.5621021e-16, A15: 1.7401064e-16, A16: -6.1116557e-18 },
  },

  groups: [
    { text: "RG1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "RG2 (−)", fromSurface: "4", toSurface: "7" },
    { text: "RG3 (+)", fromSurface: "8A", toSurface: "11" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "4", toSurface: "7" },
  ],

  /* ── Geometry ── master back focus in air 29.2741 + 2.85 / 1.5168 = 31.1531 mm (Table 2 prints 31.15), minus the patent gap d34 = 4.2900 */
  masterImageDistanceMm: 26.8631,
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
