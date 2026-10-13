import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — MINOLTA MD ZOOM 75-150mm f/4                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S56-150717 A, Example 1 (Minolta / Tokumaru,       ║
 * ║  Yasukuni).                                                         ║
 * ║  Positive F / negative V / positive C / master M zoom architecture. ║
 * ║  12 elements / 8 air-spaced groups, all spherical.                  ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The patent identifies F as the  ║
 * ║    focusing group but publishes infinity-focus zoom states only.    ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: d5, d10, d13. The C group reverses between the ║
 * ║    middle and tele stations; the master group is effectively fixed. ║
 * ║  Design stations are 77 / 101 / 146 mm; Fig. 6 labels the middle    ║
 * ║    aberration plot 100.0 mm, retained as a source discrepancy.      ║
 * ║                                                                      ║
 * ║  NOTE ON IMAGE PLANE: the patent omits the post-rg image distance.  ║
 * ║    rg→IMG = 42.100622 mm is the Stage 1 paraxial mean BFD.           ║
 * ║  NOTE ON STOP: the source does not dimension the iris. One STO is   ║
 * ║    modeled 0.100 mm ahead of ra (master-group front). Fig. 1 does   ║
 * ║    not explicitly mark/dimension an iris; this is a modeling choice. ║
 * ║    It also gives nearly constant F/4.1 pupil behavior across zoom.   ║
 * ║    STO sd = 11.611329 mm is calibrated from the published F/4.1 at  ║
 * ║    the 77 mm state; matching F/4.1 is therefore not independent      ║
 * ║    evidence for the unpublished physical diaphragm diameter.        ║
 * ║  NOTE ON SEMI-DIAMETERS: no SDs are published. Front (F) and         ║
 * ║    variator (V) values are modeled from exact spherical ray          ║
 * ║    envelopes at the source zoom states. C- and M-group values        ║
 * ║    (r11–rg) are estimated from the Fig. 1 silhouette (drawn at the   ║
 * ║    tele spacing, ≈0.124 mm/px from r1–rg): C and M910 12.4 mm,       ║
 * ║    L11 12.8 mm, L12 13.2 mm; they also clear the F/4.1 axial beam.   ║
 * ║    They are not production clear-aperture measurements.              ║
 * ║                                                                      ║
 * ║  No uniform scaling is applied. No finite-focus internal motion is   ║
 * ║  invented from the production 1.2 m minimum-focus specification.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-md-zoom-75-150-f4",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 75-150mm f/4",
  subtitle: "JP S56-150717 A Example 1 — strong production correlation; patent does not name the commercial lens",
  specs: ["12 ELEMENTS / 8 GROUPS", "f = 77–146 mm (design)", "F/4.1 (design)", "Y′ = 21.6 mm"],

  focalLengthMarketing: [75, 150],
  focalLengthDesign: [77.001714, 145.994509],
  apertureMarketing: 4.0,
  apertureDesign: 4.1,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S56-150717 A",
  patentAuthors: ["Hisashi Tokumaru", "Mitsuo Yasukuni"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1981,
  elementCount: 12,
  groupCount: 8,

  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.1, fl: 140.625398, glass: "517641 crown / BK7-family class", role: "Front positive focusing-group singlet" },
    { id: 2, name: "L2", label: "Element 2", type: "Biconvex Positive", nd: 1.5168, vd: 64.1, fl: 136.045424, glass: "517641 crown / BK7-family class", cemented: "F23", role: "Positive member of the front-group cemented pair" },
    { id: 3, name: "L3", label: "Element 3", type: "Biconcave Negative", nd: 1.80518, vd: 25.5, fl: -165.926869, glass: "805255 dense flint / SF6-family class", cemented: "F23", role: "Negative member of the front-group cemented pair" },
    { id: 4, name: "L4", label: "Element 4", type: "Biconvex Positive", nd: 1.80518, vd: 25.5, fl: 54.903367, glass: "805255 dense flint / SF6-family class", cemented: "V45", role: "Positive member of the negative variator doublet" },
    { id: 5, name: "L5", label: "Element 5", type: "Biconcave Negative", nd: 1.62135, vd: 61.3, fl: -42.487425, glass: "Unmatched (621613 dense crown; no public catalog glass at this coordinate, nearest SK16 class at Δnd −0.0009, Δνd −1.0)", cemented: "V45", role: "Negative member of the variator doublet" },
    { id: 6, name: "L6", label: "Element 6", type: "Biconcave Negative", nd: 1.7495, vd: 50.1, fl: -50.795612, glass: "Unmatched (750501 lanthanum crown/flint boundary; no public catalog glass at this coordinate)", role: "Rear negative singlet of the variator" },
    { id: 7, name: "L7", label: "Element 7", type: "Biconvex Positive", nd: 1.58913, vd: 61.1, fl: 44.78319, glass: "589611 crown class (L-BAL35 / N-SK5 / K-SKLD5 coordinate family)", cemented: "C78", role: "Positive member of the compensator doublet" },
    { id: 8, name: "L8", label: "Element 8", type: "Negative Meniscus", nd: 1.74, vd: 28.3, fl: -81.008268, glass: "740283 dense flint / S-TIH3 / H-ZF5 class", cemented: "C78", role: "Negative member of the positive compensator doublet" },
    { id: 9, name: "L9", label: "Element 9", type: "Biconvex Positive", nd: 1.65844, vd: 50.9, fl: 34.710141, glass: "658509 dense crown / N-SSK5 class", cemented: "M910", role: "Strong positive front member of the master-group cemented pair" },
    { id: 10, name: "L10", label: "Element 10", type: "Biconcave Negative", nd: 1.80741, vd: 31.6, fl: -49.500521, glass: "Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8, no public dispersion coefficients)", cemented: "M910", role: "Negative member of the master-group cemented pair" },
    { id: 11, name: "L11", label: "Element 11", type: "Biconvex Positive", nd: 1.6727, vd: 32.2, fl: 80.76101, glass: "673322 dense flint / SF5 class", role: "Positive master-group singlet" },
    { id: 12, name: "L12", label: "Element 12", type: "Negative Meniscus", nd: 1.671, vd: 51.8, fl: -58.472193, glass: "671518 crown class (H-LaK67 coordinate equivalent, Δnd −0.0010)", role: "Rear negative meniscus of the master group" },
  ],

  surfaces: [
    { label: "r1", R: 104.167, d: 5.0, nd: 1.5168, elemId: 1, sd: 23.0 },
    { label: "r2", R: -236.46, d: 0.15, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "r3", R: 77.526, d: 4.5, nd: 1.5168, elemId: 2, sd: 21.5 },
    { label: "r4", R: -740.25, d: 1.5, nd: 1.80518, elemId: 3, sd: 21.0 },
    { label: "r5", R: 163.171, d: 2.5, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "r6", R: 659.8, d: 3.3, nd: 1.80518, elemId: 4, sd: 13.5 },
    { label: "r7", R: -47.276, d: 1.2, nd: 1.62135, elemId: 5, sd: 13.2 },
    { label: "r8", R: 60.365, d: 2.8, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "r9", R: -50.922, d: 1.2, nd: 1.7495, elemId: 6, sd: 11.7 },
    { label: "r10", R: 152.384, d: 25.26, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "r11", R: 125.393, d: 4.6, nd: 1.58913, elemId: 7, sd: 12.4 },
    { label: "r12", R: -32.959, d: 1.2, nd: 1.74, elemId: 8, sd: 12.4 },
    { label: "r13", R: -74.345, d: 8.33, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "STO", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 11.611329 },
    { label: "ra", R: 31.818, d: 6.0, nd: 1.65844, elemId: 9, sd: 12.4 },
    { label: "rb", R: -75.054, d: 1.5, nd: 1.80741, elemId: 10, sd: 12.4 },
    { label: "rc", R: 86.257, d: 22.0, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "rd", R: 92.756, d: 3.2, nd: 1.6727, elemId: 11, sd: 12.8 },
    { label: "re", R: -129.315, d: 12.0, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "rf", R: -22.367, d: 1.5, nd: 1.671, elemId: 12, sd: 13.2 },
    { label: "rg", R: -53.427, d: 42.100622, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  asph: {},

  zoomPositions: [77, 101, 146],
  zoomStep: 0.004,
  zoomLabels: ["77 mm", "146 mm"],
  var: {
    r5: [[2.5, 2.5], [16.49, 16.49], [30.49, 30.49]],
    r10: [[25.26, 25.26], [16.95, 16.95], [1.2, 1.2]],
    r13: [[8.33, 8.33], [2.64, 2.64], [4.4, 4.4]],
  },
  varLabels: [
    ["r5", "d5"],
    ["r10", "d10"],
    ["r13", "d13 − 0.10"],
  ],

  groups: [
    { text: "F", fromSurface: "r1", toSurface: "r5" },
    { text: "V", fromSurface: "r6", toSurface: "r10" },
    { text: "C", fromSurface: "r11", toSurface: "r13" },
    { text: "M", fromSurface: "ra", toSurface: "rg" },
  ],
  doublets: [
    { text: "F23", fromSurface: "r3", toSurface: "r5" },
    { text: "V45", fromSurface: "r6", toSurface: "r8" },
    { text: "C78", fromSurface: "r11", toSurface: "r13" },
    { text: "M910", fromSurface: "ra", toSurface: "rc" },
  ],

  closeFocusM: 1.2,
  focusDescription: "NO_INTERNAL_RECONSTRUCTION: the patent identifies F as the focusing group but publishes only infinity-focus zoom spacings. The production 1.2 m MFD is retained as product metadata; no finite-focus internal movement is invented.",

  nominalFno: 4.1,
  zoomApertureModel: "fixed-iris",
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
