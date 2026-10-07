// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA MD ZOOM 28-85mm f/3.5-4.5                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP H01-193709 A (特開平1-193709), Example 1             ║
 * ║ (Minolta Camera Co., Ltd.; inventors Hisashi Tokumaru, Shuji Ogino). ║
 * ║ Divisional of JP application S56-192492 (filed 1981-11-30); the same ║
 * ║ prescription is Embodiment 1 of family member US 4,591,235 A.        ║
 * ║ Four-group negative-lead zoom (− + − +): L1 negative, L2 positive,   ║
 * ║ L3 negative and stationary relative to the image during zooming,     ║
 * ║ L4 positive; L2 and L4 move together (patent text, Examples 1–5).    ║
 * ║ 13 elements / 10 groups, 0 aspherical surfaces (all-spherical).      ║
 * ║ Focus: CONSTRAINED RECONSTRUCTION — unit focusing of L1 (only D8     ║
 * ║   changes), solved per zoom station for a 0.8 m object-to-image      ║
 * ║   distance; the patent publishes infinity states only.               ║
 * ║                                                                      ║
 * ║ Zoom stations: f = 28.8 / 50.0 / 82.5 mm (printed; W / M / T).       ║
 * ║ Zoom variable gaps: D8 (zoom + focus), D14a (zoom; D14 minus the     ║
 * ║   fixed 2.23 mm STO-to-r15 spacing), D17 (zoom), BF (zoom only).     ║
 * ║ No gap reverses across the three published stations. The zoom law    ║
 * ║   implied by the patent kinematics (L2 = L4 motion, L3 image-fixed)  ║
 * ║   reverses L1 by ≈0.19 mm near f ≈ 74.7 mm, between M and T; the     ║
 * ║   stations do not bracket it, and interpolated states between        ║
 * ║   stations do not lie on it (paraxial defocus up to ≈3.6 mm).        ║
 * ║                                                                      ║
 * ║ NOTE ON SCALING: none (s = 1); Y′ = 21.63 mm is the 24×36 half-      ║
 * ║   diagonal printed with the aberration plots.                        ║
 * ║ NOTE ON BF: the patent prints no d23. BF is the computed paraxial    ║
 * ║   back focal distance from r23 at each station.                      ║
 * ║ NOTE ON STOP POSITION: inferred from Fig. 2 (S mark 2.19–2.29 mm     ║
 * ║   ahead of r15; 2.23 mm used), image-fixed with L3 (patent text;     ║
 * ║   US 4,591,235 claim 13). Stop SD 7.697 mm is calibrated from the    ║
 * ║   printed F-numbers: one fixed iris reproduces F3.6 / 4.0 / 4.63     ║
 * ║   within their print rounding. Calibration, not a published size.    ║
 * ║ NOTE ON SEMI-DIAMETERS: modeled, not published. 1.08 × exact-ray     ║
 * ║   envelope (axial full aperture; 0.6 × half-field angle ±1.0 pupil;  ║
 * ║   full field ±0.25 pupil) over published and interpolated infinity   ║
 * ║   states, rounded up to 0.1 mm, then reduced where E6 edge thickness ║
 * ║   (≥ 0.5 mm) or the r2/r3 air-gap clearance binds. Cemented SDs are  ║
 * ║   unified per group. Then fitted to Fig. 2 (drawn to scale, 0.131    ║
 * ║   mm/px over r1–r23) where the drawing differed by more than ~10 %:  ║
 * ║   E8 (r13/r14) 13.6 → 12.4, level with the triplet as drawn (figure  ║
 * ║   11.5–11.9); E13 r22 12.4 → 14.0 and r23 13.5 → 14.4 (figure rim    ║
 * ║   14.0–14.8); r21 12.9 → 12.6 so the 2.0 mm r21/r22 air gap clears.  ║
 * ║   All other values are within ~10 % of the figure and were kept.     ║
 * ║ NOTE ON MARKETING VALUES: 28–85 mm f/3.5–4.5, 0.8 m MFD and f/22     ║
 * ║   minimum aperture are third-party; no Minolta document located.     ║
 * ║   Macro mode (1:4 at 28 mm) is not modeled.                          ║
 * ║                                                                      ║
 * ║ Optical design only: glass surfaces, stop, variable gaps. The        ║
 * ║ source lists no rear cover/filter plates.                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-md-zoom-28-85-f35-45",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 28-85mm f/3.5-4.5",
  subtitle: "JP H01-193709 A EXAMPLE 1 — MINOLTA CAMERA CO., LTD.",
  specs: ["13 ELEMENTS / 10 GROUPS", "f ≈ 28.8–82.5 mm", "F/3.6–4.63", "2ω ≈ 73.8°–29.4°", "ALL-SPHERICAL"],

  focalLengthMarketing: [28, 85], // third-party product sources; no Minolta document located
  focalLengthDesign: [28.8, 82.5], // patent printed f at W / T (computed 28.800 / 82.505)
  apertureMarketing: 3.5, // third-party product sources
  apertureDesign: 3.6, // patent printed F-number at W
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H01-193709 A",
  patentAuthors: ["Hisashi Tokumaru", "Shuji Ogino"], // Latin forms from family front page US 4,591,235 A
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1989,
  elementCount: 13,
  groupCount: 10,

  // fl: standalone thick-lens focal length in air (mm). Glass: class/equivalent labels from an unseeded
  // six-catalog search on the patent nd/νd; the patent publishes no spectral data beyond νd.
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.8,
      fl: -54.64,
      glass: "TAF1 (Hoya) / N-LAF34 class (772498 lanthanum flint; equivalent, Δνd −0.18)",
      apd: false,
      role: "Object-side negative meniscus of L1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.80741,
      vd: 31.6,
      fl: 72.5,
      glass:
        "Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8, not in the catalog; nearest current NBFD15 / H-ZLaF56B differ by Δνd ≈ +1.7)",
      apd: false,
      role: "Positive element of L1 behind the front meniscus",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.8,
      fl: -38.02,
      glass: "TAF1 (Hoya) / N-LAF34 class (772498 lanthanum flint; equivalent, Δνd −0.18)",
      apd: false,
      role: "Inner negative element of L1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 125.01,
      glass: "S-TIH53WN (OHARA) / FDS90 class (847239 dense flint; exact coordinate match)",
      apd: false,
      role: "Rear positive meniscus of L1, convex to the object",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.1,
      fl: -43.58,
      glass: "S-LAH60 (OHARA) (834371 lanthanum flint; close)",
      apd: false,
      role: "Front negative meniscus of the L2 cemented triplet",
      cemented: "T1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 56.5,
      fl: 18.24,
      glass: "H-LaK12 (CDGM) (697565 lanthanum crown; nd-exact, Δνd −0.33; equivalent)",
      apd: false,
      role: "Biconvex core of the L2 cemented triplet",
      cemented: "T1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.75,
      vd: 25.1,
      fl: -72.1,
      glass: "FF8 (Hoya) (750251 dense flint; close within the two-decimal nd)",
      apd: false,
      role: "Rear negative meniscus of the L2 cemented triplet",
      cemented: "T1",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.5,
      fl: 76.44,
      glass: "PCD4 (Hoya) / N-PSK53A class (618635 phosphate crown; close)",
      apd: false,
      role: "Rear positive singlet of L2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 42.96,
      glass: "S-TIH6 (OHARA) / SF6 class (805254 dense flint; exact)",
      apd: false,
      role: "Front positive meniscus of the L3 cemented doublet",
      cemented: "D1",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7425,
      vd: 52.5,
      fl: -20.63,
      glass: "743525 lanthanum crown (nearest S-LAL61 OHARA / TAC2 Hoya at Δnd −0.0015; not the same glass)",
      apd: false,
      role: "Negative element of the L3 cemented doublet",
      cemented: "D1",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.6405,
      vd: 60.1,
      fl: 39.3,
      glass: "N-LAK21 (Schott) (641601 lanthanum crown; exact)",
      apd: false,
      role: "Front positive element of L4",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 57.1,
      fl: 65.75,
      glass: "670571 lanthanum crown (J-LAK02 Hikari class; nd printed to two decimals)",
      apd: false,
      role: "Second positive element of L4",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.7569,
      vd: 31.8,
      fl: -37.91,
      glass: "NBFD9 (Hoya) class (757318 lanthanum flint; exact coordinate match, discontinued glass; equivalent)",
      apd: false,
      role: "Rear negative meniscus of L4, concave to the object",
    },
  ],

  surfaces: [
    { label: "1", R: 333.333, d: 1.7, nd: 1.7725, elemId: 1, sd: 25 },
    { label: "2", R: 37.379, d: 6, nd: 1.0, elemId: 0, sd: 19.9 },
    { label: "3", R: 374.702, d: 5, nd: 1.80741, elemId: 2, sd: 21.8 },
    { label: "4", R: -68.96, d: 0.12, nd: 1.0, elemId: 0, sd: 21.6 },
    { label: "5", R: -175.441, d: 1.6, nd: 1.7725, elemId: 3, sd: 20 },
    { label: "6", R: 35.419, d: 1.8, nd: 1.0, elemId: 0, sd: 17.9 },
    { label: "7", R: 30.978, d: 2.7, nd: 1.84666, elemId: 4, sd: 17.6 },
    { label: "8", R: 42.047, d: 41.48, nd: 1.0, elemId: 0, sd: 17.2 }, // D8 variable (zoom + focus)
    { label: "9", R: 36.673, d: 1.1, nd: 1.834, elemId: 5, sd: 12.4 }, // L2 triplet front
    { label: "10", R: 18.006, d: 7.8, nd: 1.6968, elemId: 6, sd: 12.4 }, // cemented junction E5/E6
    { label: "11", R: -35.528, d: 1.1, nd: 1.75, elemId: 7, sd: 12.4 }, // cemented junction E6/E7
    { label: "12", R: -104.959, d: 0.12, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "13", R: 31.099, d: 2.6, nd: 1.618, elemId: 8, sd: 12.4 },
    { label: "14", R: 88.117, d: 1.97, nd: 1.0, elemId: 0, sd: 12.4 }, // D14a = patent D14 − 2.23 (variable, zoom)
    { label: "STO", R: 1e15, d: 2.23, nd: 1.0, elemId: 0, sd: 7.697 }, // stop inferred from Fig. 2; fixed with L3
    { label: "15", R: -102.718, d: 2.2, nd: 1.80518, elemId: 9, sd: 8.5 }, // L3 doublet front
    { label: "16", R: -26.126, d: 1, nd: 1.7425, elemId: 10, sd: 8.5 }, // cemented junction E9/E10
    { label: "17", R: 37.626, d: 18.85, nd: 1.0, elemId: 0, sd: 8.5 }, // D17 variable (zoom)
    { label: "18", R: 116.519, d: 5, nd: 1.6405, elemId: 11, sd: 12.4 },
    { label: "19", R: -31.574, d: 0.12, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "20", R: 134.73, d: 3.2, nd: 1.67, elemId: 12, sd: 12.9 },
    { label: "21", R: -64.837, d: 2, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "22", R: -27.714, d: 1.4, nd: 1.7569, elemId: 13, sd: 14 },
    { label: "23", R: -831.721, d: 38.7672, nd: 1.0, elemId: 0, sd: 14.4 }, // BF = computed paraxial BFD (no d23 printed)
  ],

  asph: {},

  zoomPositions: [28.8, 50, 82.5],
  zoomLabels: ["Wide", "Tele"],

  // One [infinity, close] pair per zoom station. D8 close values: L1 extension solved for a 0.8 m object-to-image
  // distance (2.503 / 2.433 / 2.422 mm). BF: computed paraxial BFD, unchanged by L1 focusing. Computed values to 0.0001 mm.
  var: {
    "8": [
      [41.48, 43.9835],
      [14.19, 16.6233],
      [0.8, 3.2217],
    ],
    "14": [
      [1.97, 1.97],
      [9.34, 9.34],
      [19.32, 19.32],
    ],
    "17": [
      [18.85, 18.85],
      [11.49, 11.49],
      [1.5, 1.5],
    ],
    "23": [
      [38.7672, 38.7672],
      [46.1323, 46.1323],
      [56.1263, 56.1263],
    ],
  },

  varLabels: [
    ["8", "D8"],
    ["14", "D14a"],
    ["17", "D17"],
    ["23", "BF"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "14" },
    { text: "L3", fromSurface: "15", toSurface: "17" },
    { text: "L4", fromSurface: "18", toSurface: "23" },
  ],

  doublets: [
    { text: "T1", fromSurface: "9", toSurface: "12" },
    { text: "D1", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.8, // third-party MFD, object-to-image; reconstruction target, not a patent state
  focusDescription:
    "Reconstructed unit focusing of the front group L1; the patent publishes infinity states only. At each zoom station the L1 extension that brings a 0.8 m object-to-image subject onto the fixed image plane was solved (2.50 / 2.43 / 2.42 mm at 28.8 / 50 / 82.5 mm); only D8 changes. The 0.8 m minimum focus is from third-party sources, and the 1:4 macro mode is not modeled.",

  // Modeled f-numbers of one fixed iris (STO sd 7.697 mm); printed F3.6 / 4.0 / 4.63.
  nominalFno: [3.637, 3.967, 4.63],
  zoomApertureModel: "fixed-iris",
  fstopSeries: [4, 4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22, // third-party minimum aperture

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
