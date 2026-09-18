import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5             ║
 * ║  (Sony Cyber-shot RX100 VI / RX100 VII)                              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP WO2019/188070 A1 (Japanese republication of         ║
 * ║    WO 2019/188070 A1), Numerical Example 3, Tables 7-9 (Sony Corp.). ║
 * ║  Positive-lead six-group zoom: GR1(+) GR2(-) GR3(+) GR4(+) GR5(-)    ║
 * ║    GR6(+); all six groups move during zooming.                       ║
 * ║  15 elements / 12 groups, 14 aspherical surfaces on 8 elements.      ║
 * ║  Production correlation (RX100 VI/VII) is a research inference, not  ║
 * ║    a manufacturer-confirmed attribution. Sony states 13 aspherical   ║
 * ║    surfaces; Example 3 has 14, while sibling Example 2 has 13 and a  ║
 * ║    closer zoom ratio / FNo (7.73x, 2.93-4.66). Field angle and the   ║
 * ║    L32 shape in Sony's published construction drawing favour         ║
 * ║    Example 3, the job-specified embodiment, transcribed unchanged.   ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: D5, D12, D19, D22, D26, D28 (zoom only).        ║
 * ║  Published states: wide / middle / tele, infinity focus only.        ║
 * ║  Reversing: GR2 (imageward W->M, objectward M->T); D19 non-monotonic.║
 * ║  Focus: not modeled. The example publishes no close-focus spacings   ║
 * ║    and no focus group; focus pairs repeat the infinity value.        ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: patent normalized to f(wide)=1.00. Uniform scale   ║
 * ║    s = 9.0 (anchored to Sony's 9.0 mm marketed wide focal length)    ║
 * ║    applied to R, d and sd; A_p -> A_p / 9^(p-1); K unchanged. The    ║
 * ║    source zoom ratio is 7.40x, so computed tele EFL is ~66.3 mm,     ║
 * ║    not the marketed 72 mm.                                           ║
 * ║  NOTE ON REAR PLATES: patent S29-S32 (two plane plates, nd 1.5168 /  ║
 * ║    1.5567) omitted; D28 carries their air-equivalent path            ║
 * ║    (0.301786 source mm, 2.716072 mm scaled) to the patent image      ║
 * ║    plane.                                                            ║
 * ║  NOTE ON APERTURE: patent gives FNo 2.97 / 4.16 / 4.72 but no stop   ║
 * ║    diameter. Stop radius calibrated paraxially from those values     ║
 * ║    (4.04 / 3.92 / 4.16 mm); zoomApertureModel "from-nominal-fno"     ║
 * ║    reproduces the published schedule (inferred, not published).      ║
 * ║  NOTE ON SEMI-DIAMETERS: not published. Modeled from real-ray        ║
 * ║    envelopes (full-aperture axial marginal; 0.6-field bundle at      ║
 * ║    pupil +/-1.0; full-field chief) over the three zoom states with   ║
 * ║    8% clearance, reduced where needed to keep GR1 edge thickness     ║
 * ║    near 0.30 mm (L13: 0.338 mm at the common clear radius, 0.296 mm  ║
 * ║    at its larger front SD); 0.05 mm steps.                           ║
 * ║  NOTE ON ASPHERES: patent Eq. (para. 0066) prints a y^2 c^2          ║
 * ║    numerator; the standard c*y^2 form is used (dimensionally         ║
 * ║    consistent and required to reproduce the published EFLs).         ║
 * ║  NOTE ON GLASS: patent gives nd/vd only. Each coordinate reproduces  ║
 * ║    a catalog glass to printed precision; HOYA is the only catalog    ║
 * ║    matching all eight (incl. mold glasses M-PCD4, M-FCD1). Labels    ║
 * ║    name that glass plus six-digit class; supplier not confirmed; no  ║
 * ║    spectral line data added.                                         ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  No sensor glass, filters, mechanics, or parent/donor designs.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "zeiss-vario-sonnar-t-9-72-f28-45-sony-rx100m6-m7",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 (Sony Cyber-shot RX100 VI / RX100 VII)",
  subtitle: "JP WO2019/188070 A1 EXAMPLE 3 — SONY CORPORATION (CORRELATED WITH RX100 VI / VII)",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "f ≈ 9.0–66.3 mm (DESIGN)",
    "F/2.97–4.72 (DESIGN)",
    "2ω ≈ 84.4°–12.4°",
    "14 ASPHERICAL SURFACES",
  ],
  focalLengthMarketing: [9, 72],
  focalLengthDesign: [9.01, 66.27],
  apertureMarketing: 2.8,
  apertureDesign: 2.97,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentNumber: "JP WO2019/188070 A1",
  patentAuthors: ["Koji Toyoda", "Maya Kiyotoshi", "Keita Kaifu", "Kentaro Tawada"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2019,
  elementCount: 15,
  groupCount: 12,
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.946,
      vd: 18.0,
      fl: -114.81,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      cemented: "C1",
      role: "GR1 cemented doublet, object-side element; meniscus convex to object",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 63.9,
      fl: 70.42,
      glass: "PCD40 (HOYA) — 620639 class, dense phosphate crown; catalog coordinate match, supplier unconfirmed",
      cemented: "C1",
      role: "GR1 cemented doublet, image-side biconvex element",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7292,
      vd: 54.7,
      fl: 56.41,
      glass:
        "TAC8 (HOYA) / S-LAL18 (OHARA) — 729547 class, lanthanum crown; catalog coordinate match, supplier unconfirmed",
      role: "GR1 rear positive meniscus, convex to object",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      fl: -11.32,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR2 front negative meniscus, concave to image; both faces aspheric",
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 5",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.8514,
      vd: 40.1,
      fl: -16.55,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      cemented: "C2",
      role: "GR2 cemented doublet, biconcave element; object-side face aspheric",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.946,
      vd: 18.0,
      fl: 12.32,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      cemented: "C2",
      role: "GR2 cemented doublet, biconvex element",
    },
    {
      id: 7,
      name: "L24",
      diagramLabel: "L24",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      fl: -16.47,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR2 rear negative meniscus, concave to object; both faces aspheric",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6188,
      vd: 63.9,
      fl: 14.49,
      glass:
        "M-PCD4 (HOYA) — 619639 class, phosphate crown molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR3 first positive element immediately behind the stop; both faces aspheric",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.6,
      fl: 55.11,
      glass:
        "M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass; nd 1.4971 excludes 1.4970 FCD1/S-FPL51; supplier unconfirmed",
      role: "GR3 second positive element; both faces aspheric",
    },
    {
      id: 10,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -22.56,
      glass:
        "TAFD55 (HOYA) / S-LAH99 (OHARA) — 001291 class, lanthanum dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR3 rear negative meniscus, concave to image",
    },
    {
      id: 11,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.4971,
      vd: 81.6,
      fl: 16.5,
      glass:
        "M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass; nd 1.4971 excludes 1.4970 FCD1/S-FPL51; supplier unconfirmed",
      cemented: "C3",
      role: "GR4 cemented doublet, biconvex element; object-side face aspheric",
    },
    {
      id: 12,
      name: "L42",
      diagramLabel: "L42",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.946,
      vd: 18.0,
      fl: -82.04,
      glass:
        "FDS18 (HOYA) — 946180 class, ultra-high-index dense flint; catalog coordinate match, supplier unconfirmed",
      cemented: "C3",
      role: "GR4 cemented doublet, meniscus concave to object",
    },
    {
      id: 13,
      name: "L51",
      diagramLabel: "L51",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.8467,
      vd: 23.8,
      fl: 51.63,
      glass:
        "FDS90 (HOYA) / N-SF57 (SCHOTT) — 847238 class, dense flint; catalog coordinate match, supplier unconfirmed",
      role: "GR5 positive meniscus, convex to image",
    },
    {
      id: 14,
      name: "L52",
      diagramLabel: "L52",
      label: "Element 14",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      fl: -25.34,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR5 biconcave negative element; both faces aspheric",
    },
    {
      id: 15,
      name: "L61",
      diagramLabel: "L61",
      label: "Element 15",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.8514,
      vd: 40.1,
      fl: 174.25,
      glass:
        "M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass; catalog coordinate match, supplier unconfirmed",
      role: "GR6 single positive meniscus, convex to object; both faces aspheric",
    },
  ],
  surfaces: [
    { label: "1", R: 106.083, d: 0.909, nd: 1.946, elemId: 1, sd: 13.3 },
    { label: "2", R: 53.442, d: 2.367, nd: 1.62, elemId: 2, sd: 13.3 },
    { label: "3", R: -234.558, d: 0.099, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "4", R: 31.518, d: 2.241, nd: 1.7292, elemId: 3, sd: 12.35 },
    { label: "5", R: 130.743, d: 0.387, nd: 1.0, elemId: 0, sd: 12.25 },
    { label: "6A", R: 124.83, d: 0.54, nd: 1.8514, elemId: 4, sd: 6.7 },
    { label: "7A", R: 8.928, d: 3.015, nd: 1.0, elemId: 0, sd: 5.3 },
    { label: "8A", R: -31.896, d: 0.576, nd: 1.8514, elemId: 5, sd: 4.8 },
    { label: "9", R: 25.452, d: 1.935, nd: 1.946, elemId: 6, sd: 4.8 },
    { label: "10", R: -20.691, d: 0.549, nd: 1.0, elemId: 0, sd: 4.8 },
    { label: "11A", R: -13.158, d: 0.405, nd: 1.8514, elemId: 7, sd: 4.4 },
    { label: "12A", R: -216.036, d: 13.275, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "STO", R: 1e15, d: 0.459, nd: 1.0, elemId: 0, sd: 4.04 },
    { label: "14A", R: 11.007, d: 2.466, nd: 1.6188, elemId: 8, sd: 5.1 },
    { label: "15A", R: -44.244, d: 0.99, nd: 1.0, elemId: 0, sd: 5.15 },
    { label: "16A", R: 192.87, d: 1.458, nd: 1.4971, elemId: 9, sd: 5.15 },
    { label: "17A", R: -31.851, d: 0.099, nd: 1.0, elemId: 0, sd: 5.15 },
    { label: "18", R: 22.455, d: 0.432, nd: 2.001, elemId: 10, sd: 5.1 },
    { label: "19", R: 11.151, d: 5.13, nd: 1.0, elemId: 0, sd: 4.95 },
    { label: "20A", R: 19.206, d: 2.493, nd: 1.4971, elemId: 11, sd: 5.5 },
    { label: "21", R: -13.698, d: 0.576, nd: 1.946, elemId: 12, sd: 5.5 },
    { label: "22", R: -16.974, d: 4.896, nd: 1.0, elemId: 0, sd: 5.5 },
    { label: "23", R: -87.669, d: 0.99, nd: 1.8467, elemId: 13, sd: 4.9 },
    { label: "24", R: -29.322, d: 0.099, nd: 1.0, elemId: 0, sd: 4.85 },
    { label: "25A", R: -38.997, d: 0.441, nd: 1.8514, elemId: 14, sd: 4.85 },
    { label: "26A", R: 48.528, d: 4.365, nd: 1.0, elemId: 0, sd: 4.8 },
    { label: "27A", R: 17.739, d: 1.08, nd: 1.8514, elemId: 15, sd: 5.5 },
    { label: "28A", R: 19.584, d: 7.702072, nd: 1.0, elemId: 0, sd: 5.55 },
  ],
  asph: {
    "6A": {
      K: 0,
      A4: 0.00017875171,
      A6: 7.4651561e-6,
      A8: -4.8572341e-7,
      A10: 9.5759004e-9,
      A12: -7.8872416e-11,
      A14: 2.2286778e-13,
    },
    "7A": {
      K: 0,
      A4: 0.00019949246,
      A6: 1.6787414e-5,
      A8: -1.3314951e-7,
      A10: -1.305171e-9,
      A12: -1.4789494e-10,
      A14: 2.5094165e-12,
    },
    "8A": {
      K: 0,
      A4: -0.00029102881,
      A6: 1.1476909e-5,
      A8: 1.9781855e-7,
      A10: -3.1387085e-8,
      A12: 7.8964829e-10,
      A14: -9.7813975e-12,
    },
    "11A": {
      K: 0,
      A4: 0.00014650206,
      A6: -3.9523108e-5,
      A8: 2.6849432e-6,
      A10: -7.8818753e-8,
      A12: 9.2351885e-10,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: -0.00015610425,
      A6: -2.9626243e-5,
      A8: 2.5237462e-6,
      A10: -9.7780063e-8,
      A12: 1.8030621e-9,
      A14: -1.3090778e-11,
    },
    "14A": {
      K: 0,
      A4: -0.0001115048,
      A6: 1.2921641e-6,
      A8: -5.5346376e-7,
      A10: 5.2803093e-8,
      A12: -2.3303866e-9,
      A14: 3.4231154e-11,
    },
    "15A": {
      K: 0,
      A4: 0.0001115048,
      A6: 2.0908059e-7,
      A8: -6.375956e-7,
      A10: 7.4035837e-8,
      A12: -3.4839486e-9,
      A14: 5.3039778e-11,
    },
    "16A": {
      K: 0,
      A4: -7.370096e-5,
      A6: -1.6081051e-6,
      A8: 2.5055567e-7,
      A10: -1.0803507e-9,
      A12: 1.182911e-10,
      A14: -7.7486387e-12,
    },
    "17A": {
      K: 0,
      A4: -0.00012265569,
      A6: 6.6849566e-7,
      A8: 4.4907253e-7,
      A10: -4.2749417e-8,
      A12: 2.4218749e-9,
      A14: -4.783494e-11,
    },
    "20A": {
      K: 0,
      A4: -8.276406e-5,
      A6: 8.3996342e-7,
      A8: -1.5942608e-8,
      A10: -5.9243124e-9,
      A12: 4.3335057e-10,
      A14: -8.6983348e-12,
    },
    "25A": {
      K: 0,
      A4: -2.1816187e-5,
      A6: 1.0163254e-6,
      A8: 1.0095194e-8,
      A10: -4.2016363e-9,
      A12: 1.0919644e-10,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: -4.4602195e-5,
      A6: 2.5688835e-6,
      A8: -7.9396291e-8,
      A10: -1.2129457e-9,
      A12: 6.6616616e-11,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: -0.0003617284,
      A6: 4.2928754e-6,
      A8: 2.7781907e-9,
      A10: -3.1278676e-9,
      A12: 5.5109675e-11,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: -0.00033451303,
      A6: 4.2171756e-6,
      A8: 2.7186043e-8,
      A10: -3.9169327e-9,
      A12: 6.4376411e-11,
      A14: 0,
    },
  },
  var: {
    "5": [
      [0.387, 0.387],
      [10.062, 10.062],
      [21.987, 21.987],
    ],
    "12A": [
      [13.275, 13.275],
      [6.003, 6.003],
      [1.737, 1.737],
    ],
    "19": [
      [5.13, 5.13],
      [1.206, 1.206],
      [1.278, 1.278],
    ],
    "22": [
      [4.896, 4.896],
      [5.805, 5.805],
      [6.237, 6.237],
    ],
    "26A": [
      [4.365, 4.365],
      [5.274, 5.274],
      [7.983, 7.983],
    ],
    "28A": [
      [7.702072, 7.702072],
      [16.243072, 16.243072],
      [20.680072, 20.680072],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["12A", "D12"],
    ["19", "D19"],
    ["22", "D22"],
    ["26A", "D26"],
    ["28A", "BF"],
  ],
  zoomPositions: [9.01, 23.6, 66.27],
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",
  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "GR2 (−)", fromSurface: "6A", toSurface: "12A" },
    { text: "GR3 (+)", fromSurface: "14A", toSurface: "19" },
    { text: "GR4 (+)", fromSurface: "20A", toSurface: "22" },
    { text: "GR5 (−)", fromSurface: "23", toSurface: "26A" },
    { text: "GR6 (+)", fromSurface: "27A", toSurface: "28A" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "8A", toSurface: "10" },
    { text: "C3", fromSurface: "20A", toSurface: "22" },
  ],
  closeFocusM: 0.08,
  focusDescription:
    "Not modeled. Patent Example 3 publishes infinity-focus zoom states only and identifies no focus group; focus positions repeat the infinity spacings. Sony lists minimum focus of approx. 0.08 m (wide) and 1.0 m (tele).",
  nominalFno: [2.97, 4.16, 4.72],
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 8, 11, 16],
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
