import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF-S 55-250mm f/4-5.6 IS                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2008/0112063 A1, Numerical Embodiment 2 (T. Hatada).      ║
 * ║ Production correlation: original Canon EF-S55-250mm f/4-5.6 IS.             ║
 * ║ 12 elements / 10 air-separated groups; all spherical; 3 zoom units (+/-/+). ║
 * ║ No uniform scale is applied: printed EFL is 56.9-241.3 mm versus the      ║
 * ║ marketed 55-250 mm range.                                                    ║
 * ║                                                                              ║
 * ║ ZOOM / FOCUS MODEL                                                           ║
 * ║   D5  (surface 5): zoom + focus. The three patent infinity nodes are         ║
 * ║       retained; close-focus values are a CONSTRAINED_RECONSTRUCTION.         ║
 * ║   D10 (surface 10): zoom only. The middle node preserves the published       ║
 * ║       reversal of L2; no source value is altered to remove it.               ║
 * ║   BF  (surface 23): computed paraxial BFD because Example 2 prints d23 as    ║
 * ║       Variable but omits its spacing row.                                     ║
 * ║   Focus reconstruction: patent ¶0081 constrains focus to axial L1 motion;    ║
 * ║       Canon's 1.1 m MFD is measured from the image/focal plane. L2, L3, and   ║
 * ║       the image plane are fixed while L1 is code-solved at each zoom node.   ║
 * ║                                                                              ║
 * ║ APERTURE MODEL                                                               ║
 * ║   Patent endpoint Fno values are 4.16 and 5.88. The required middle node     ║
 * ║   uses Fno=5.129132321041215, a disclosed linear interpolation in the        ║
 * ║   patent focal-length coordinate. The stop radius is derived from the        ║
 * ║   design f-number at each zoom station; per-zoom nominalFno controls the     ║
 * ║   viewer aperture.                                                           ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS                                                               ║
 * ║   Example 2 publishes no clear-aperture table. SDs are modeling inferences   ║
 * ║   derived from marginal/chief-ray envelopes, the 13.66 mm image height,      ║
 * ║   endpoint pupil geometry, Fig. 5 proportions, and geometric validation.     ║
 * ║   Native Figure5 (300ppi, ~16.3px/mm, +/-0.8mm) updates fifteen caps; no  ║
 * ║   separate outer shoulder is resolved; adjacent gap-limited caps stay.   ║
 * ║   They pass positive edge thickness, actual spherical rim-slope, all-state   ║
 * ║   shared-gap intrusion and source-state checks. Interpolated/close states ║
 * ║   retain disclosed defocus, vignetting and unavailable launch limits.     ║
 * ║   Earlier default off-axis containment checks remain historical.              ║
 * ║                                                                              ║
 * ║ GLASS / SPECTRAL DATA                                                        ║
 * ║   Original paragraph0114 explicitly defines d-line nd/vd. Forty-eight       ║
 * ║   catalog-derived per-lens nC/nF/ng/dPgF overrides are removed (2026-10-30). ║
 * ║   Twelve compatible catalog curves are qualified spectral proxies; G5 uses ║
 * ║   SFLDN3 without its former fitted line-index overrides. Historical         ║
 * ║   supplier, melt, chemistry and manufacturing identity remain unresolved. ║
 * ║                                                                              ║
 * ║ SOURCE INCLUSIONS / EXCLUSIONS                                               ║
 * ║   Active prescription only. No sensor cover glass, filter, inactive dummy,   ║
 * ║   flare-cutter, folded path, or mechanical plane is added.                    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-s-55-250-f4-56-is",
  maker: "Canon",
  name: "CANON EF-S 55-250mm f/4-5.6 IS",
  subtitle: "US 2008/0112063 A1, Example 2 — production correlation; unscaled patent prescription",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "12 ELEMENTS / 10 GROUPS",
      "PATENT EFL 56.9-241.3 mm",
      "F/4.16-5.88 PATENT ENDPOINTS",
      "3-UNIT +/−/+ ZOOM; L2 IS UNIT",
      "1 UD-CLASS ELEMENT",
    ],
    elementCount: 12,
    groupCount: 10,
    focalLengthMm: { marketing: [55, 250], design: [56.9, 241.3] },
  },

  source: {
    patentNumber: "US 2008/0112063 A1",
    example: { label: "Numerical Embodiment 2", id: "2" },
    patentYear: 2008,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Original paragraph 0092, PDF page 33 / printed 3, defines maximum moving distance for reciprocation as maximum absolute excursion. Numerical Embodiment 2 Table 1, PDF page 36 / printed 6, gives m2/m1=-.002, agreeing with signed endpoint displacement -.002194 rather than the sampled maximum-excursion magnitude .120510. The latter remains within broad .150 but exceeds preferred .100. Preserve all three published zoom gaps, their L2 reversal and every focus/stop control; this is a source definition/summary conflict, not an isolated numeric error. Original analysis conclusion retained, structured qualification added 2026-10-30.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L1 Element 1",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.14,
      indexReference: "d",
      focalLengthMm: 142.8438280075935,
      glass: "S-BSL7 (OHARA-equivalent; exact patent coordinate match)",
      role: "Positive front collector in the first zoom/focus unit.",
    },
    {
      id: 2,
      name: "L12",
      label: "L1 Element 2",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      focalLengthMm: -118.02127955686271,
      glass: "S-LAM66 (OHARA-equivalent; exact patent coordinate match)",
      role: "Negative member of the L1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L1 Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 95.7633626092133,
      glass: "S-FPL51 (OHARA-equivalent; exact patent coordinate match)",
      role: "Low-dispersion positive member; strongest coordinate-based candidate for Canon's one marketed UD element.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L2 Element 1",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.87,
      indexReference: "d",
      focalLengthMm: -24.643170680345932,
      glass: "S-LAL8 (OHARA-equivalent; exact patent coordinate match)",
      role: "Negative member of the cemented image-stabilizing L2 unit.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "L2 Element 2",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.93,
      indexReference: "d",
      focalLengthMm: 37.79081808402992,
      glass: "SFLDN3 (SUMITA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Positive cemented partner in L2; the compatible catalog curve estimates dispersion without identifying the source medium.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L2 Element 3",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.57,
      indexReference: "d",
      focalLengthMm: -46.76625339617364,
      glass: "H-ZLaF50E (CDGM-equivalent; exact patent coordinate match)",
      role: "Rear negative element of the transversely shifted L2 image-stabilizing unit.",
    },
    {
      id: 7,
      name: "L31",
      label: "L3 Element 1",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.38,
      indexReference: "d",
      focalLengthMm: 53.23888131956188,
      glass: "S-BSM18 (OHARA-equivalent; exact patent coordinate match)",
      role: "Positive front element of the third zoom unit.",
    },
    {
      id: 8,
      name: "L32",
      label: "L3 Element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.64,
      indexReference: "d",
      focalLengthMm: 65.0554012993556,
      glass: "S-BSM14 (OHARA-equivalent; exact patent coordinate match)",
      role: "Positive element immediately objectward of the aperture stop.",
    },
    {
      id: 9,
      name: "L33",
      label: "L3 Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: 71.27694561293687,
      glass: "S-FSL5 (OHARA-equivalent; exact patent coordinate match)",
      role: "Low-index positive element immediately imageward of the stop.",
    },
    {
      id: 10,
      name: "L34",
      label: "L3 Element 4",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -41.307185179830554,
      glass: "S-TIH53 (OHARA-equivalent; exact patent coordinate match)",
      role: "High-index negative element in the rear half of L3.",
    },
    {
      id: 11,
      name: "L35",
      label: "L3 Element 5",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.16,
      indexReference: "d",
      focalLengthMm: -45.406313287229686,
      glass: "S-LAH60 (OHARA-equivalent; exact patent coordinate match)",
      role: "Negative meniscus in the rear relay section of L3.",
    },
    {
      id: 12,
      name: "L36",
      label: "L3 Element 6",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.07,
      indexReference: "d",
      focalLengthMm: 54.60024437604166,
      glass: "S-TIM28 (OHARA-equivalent; exact patent coordinate match)",
      role: "Final positive element of L3 before the image space.",
    },
  ],

  // 2026-10-30 native Figure5: figure-based caps; no resolved separate air shoulder; source R/d unchanged.
  surfaces: [
    { label: "1", R: 80.99515, d: 4.75045, sd: 22.5, medium: 1 },
    { label: "2", R: -808.56, d: 0.15, sd: 22.5 },
    { label: "3", R: 77.54341, d: 2.6, sd: 21, medium: 2 },
    { label: "4", R: 41.96489, d: 5.6768, sd: 21, medium: 3 },
    { label: "5", R: 338.8565, sd: 21 },
    { label: "6", R: -209.128, d: 1.4, sd: 10.5, medium: 4 },
    { label: "7", R: 19.23569, d: 3.20257, sd: 10.5, medium: 5 },
    { label: "8", R: 44.55107, d: 2.32179, sd: 10.5 },
    { label: "9", R: -43.5451, d: 1.1, sd: 9.52, medium: 6 },
    { label: "10", R: 278.5068, sd: 9.7 },
    { label: "11", R: 52.26289, d: 2.99623, sd: 11.5, medium: 7 },
    { label: "12", R: -95.0852, d: 0.15, sd: 11.5 },
    { label: "13", R: 47.03856, d: 2.89978, sd: 11.5, medium: 8 },
    { label: "14", R: -231.037, d: 1.56909, sd: 11.5 },
    { label: "STO", R: "flat", d: 0.49801 },
    { label: "16", R: 30.2435, d: 2.78922, sd: 10.0, medium: 9 },
    { label: "17", R: 226.3014, d: 0.60067, sd: 10 },
    { label: "18", R: -125.291, d: 3.02154, sd: 9.0, medium: 10 },
    { label: "19", R: 49.05197, d: 11.42731, sd: 9.2 },
    { label: "20", R: 65.37414, d: 2.01377, sd: 7.2, medium: 11 },
    { label: "21", R: 23.64292, d: 8.70092, sd: 7.1 },
    { label: "22", R: 47.7313, d: 2.36466, sd: 9, medium: 12 },
    { label: "23", R: -173.907, sd: 9 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 56.9, nominalFNumber: 4.16, label: "Wide" },
      { focalLengthMm: 160.8, nominalFNumber: 5.129132321041215 },
      { focalLengthMm: 241.3, nominalFNumber: 5.88, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 1.1,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent ¶0081 focuses by axial L1 motion only. At Canon's 1.1 m focal-plane-to-subject MFD, code solves L1 objectward by 15.5631 / 16.1731 / 16.3937 mm at wide / middle / tele while L2, L3, and the image plane remain fixed; tele paraxial magnification is 0.31037×.",
  },

  gaps: {
    "5": {
      label: "D5 / FOCUS",
      values: [
        [7.19326, 22.756327200948355],
        [42.37555, 58.54863513740272],
        [47.94835, 64.3420247909661],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [31.47406, 31.47406],
        [11.1426, 11.1426],
        [1.265538, 1.265538],
      ],
    },
    "23": {
      label: "BF",
      values: [
        [52.45312963327591, 52.45312963327591],
        [67.88393664908017, 67.88393664908017],
        [82.57241153237486, 82.57241153237486],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 7 },

  groups: [
    { text: "L1 (+ / FOCUS)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (- / IS)", fromSurface: "6", toSurface: "10" },
    { text: "L3 (+)", fromSurface: "11", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
