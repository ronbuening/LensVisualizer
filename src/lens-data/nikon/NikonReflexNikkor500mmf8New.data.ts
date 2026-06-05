import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon Reflex-Nikkor 500mm f/8 (New)                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,666,259 A, Example 1 / Table 1.                ║
 * ║  Six-element, six-group Mangin catadioptric telephoto.            ║
 * ║  All surfaces are spherical.                                      ║
 * ║                                                                    ║
 * ║  Patent coordinates are the optical passage order, so the Mangin   ║
 * ║  mirrors appear with repeated surfaces and negative folded gaps.   ║
 * ║  This file stores the physical front-to-rear surface order and     ║
 * ║  declares the actual ray-hit sequence with opticalPath.surfaceOrder.║
 * ║                                                                    ║
 * ║  Re-read note: the rasterized patent table gives surface 8→9 as   ║
 * ║  41.50 mm. Text extraction often drops the leading digit and reads ║
 * ║  this as 4.50 mm; 41.50 mm is required to reproduce the patent     ║
 * ║  f = 499.482 mm and total length = 142.716 mm.                    ║
 * ║                                                                    ║
 * ║  Focus: L1 and M2 move integrally 8.05 mm toward the object at     ║
 * ║  close focus. In physical coordinates this is represented as the   ║
 * ║  M2-to-fixed-rear-block spacing changing from 41.50 to 49.55 mm;   ║
 * ║  the viewer anchors the image plane so the rear block stays fixed   ║
 * ║  and L1/M2 travel object-side, matching the patent mechanism.       ║
 * ║                                                                    ║
 * ║  Semi-diameters are estimated from the patent F/6.7 marginal ray   ║
 * ║  plus 2.5° half-field chief ray envelope, then rounded upward with ║
 * ║  conservative mechanical clearance. The central obstruction is      ║
 * ║  sized from the patent geometric F/6.7 aperture and the production ║
 * ║  f/8 effective designation.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-reflex-nikkor-500mm-f8-new",
  maker: "Nikon",
  name: "Nikon Reflex-Nikkor 500mm f/8 (New)",
  subtitle: "US 4,666,259 A — Example 1 / Yutaka Iizuka, Nippon Kogaku",
  specs: [
    "6 elements / 6 groups",
    "f = 499.482 mm",
    "F/6.7 geometric; f/8 effective",
    "2ω = 5°",
    "all-spherical Mangin catadioptric",
  ],

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 5,
    maxTraceFieldDeg: 2.5,
  },

  focalLengthMarketing: 500,
  focalLengthDesign: 499.482,
  apertureMarketing: 8,
  apertureDesign: 6.7,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1987,
  elementCount: 6,
  groupCount: 6,

  nominalFno: 8,
  closeFocusM: 1.5,
  fstopSeries: [8],
  maxFstop: 8,
  focusDescription:
    "Front-unit focus: L1 and M2 move together 8.05 mm toward the object; the rear mirror/corrector block and image plane remain fixed.",

  svgW: 1180,
  svgH: 500,
  scFill: 0.64,
  yScFill: 0.78,
  maxAspectRatio: 2.0,
  rayLeadFrac: 0.22,
  lensShiftFrac: 0.05,
  offAxisFieldFrac: 0.8,

  opticalPath: {
    surfaceOrder: ["STO", "OBS", "1", "2", "3/5", "4", "3/5", "6/8", "7", "6/8", "9", "10", "11", "12", "13", "14"],
    maxInteractions: 18,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive collector",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.12,
      fl: 569.716,
      glass: "BSC7 / N-BK7 class crown (patent 517/641)",
      apd: false,
      role: "Weak biconvex moving front collector; forms the focus unit with M2.",
    },
    {
      id: 2,
      name: "M1",
      label: "Mangin primary mirror",
      type: "Positive Mangin Mirror",
      nd: 1.5168,
      vd: 64.12,
      fl: 128.044,
      glass: "BSC7 / N-BK7 class crown (patent 517/641)",
      apd: false,
      fromSurface: "3/5",
      toSurface: "4",
      role: "Annular second-surface Mangin primary with a central aperture for the rear corrector group.",
    },
    {
      id: 3,
      name: "M2",
      label: "Mangin secondary mirror",
      type: "Negative Mangin Mirror",
      nd: 1.5168,
      vd: 64.12,
      fl: -86.912,
      glass: "BSC7 / N-BK7 class crown (patent 517/641)",
      apd: false,
      fromSurface: "7",
      toSurface: "6/8",
      role: "Diverging second-surface secondary mirror; moves integrally with L1 for focus.",
    },
    {
      id: 4,
      name: "L21",
      label: "First rear corrector element",
      type: "Near-Plano-Concave Negative",
      nd: 1.5168,
      vd: 64.12,
      fl: -49.156,
      glass: "BSC7 / N-BK7 class crown (patent 517/641)",
      apd: false,
      role: "Strong negative first element of the rear corrector group, located inside the primary mirror aperture.",
    },
    {
      id: 5,
      name: "L22",
      label: "Second rear corrector element",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 58.96,
      fl: -222.698,
      glass: "E-C3 (HOYA) / S-NSL3 class crown (518/590)",
      apd: false,
      role: "Weak negative meniscus for off-axis correction in the rear group.",
    },
    {
      id: 6,
      name: "L23",
      label: "Third rear corrector element",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.96,
      fl: 125.619,
      glass: "Unmatched (lanthanum dense flint, patent 796/410; nearest current class S-LAH52 / K-LaSFn3)",
      apd: false,
      role: "High-index positive field-corrector meniscus; the rear group remains net negative.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 0.25, nd: 1.0, elemId: 0, sd: 37.275 },
    { label: "OBS", R: 1e15, d: 0.25, nd: 1.0, elemId: 0, sd: 20.35, interaction: { type: "block" } },
    { label: "1", R: 587.0, d: 10.0, nd: 1.5168, elemId: 1, sd: 40.0 },
    { label: "2", R: -587.3, d: 2.5, nd: 1.0, elemId: 0, sd: 40.0 },
    {
      label: "7",
      R: -99.328,
      d: 5.0,
      nd: 1.5168,
      elemId: 3,
      sd: 20.5,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "6/8", R: -58.093, d: 41.5, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "9", R: 10206.648, d: 3.0, nd: 1.5168, elemId: 4, sd: 13.8 },
    { label: "10", R: 25.338, d: 4.0, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "3/5", R: -116.666, d: 3.5, nd: 1.5168, elemId: 2, sd: 39.5, innerSd: 18.0 },
    { label: "11", R: -29.45, d: 4.5, nd: 1.51823, elemId: 5, sd: 16.0 },
    { label: "12", R: -41.602, d: 0.5, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "13", R: 41.434, d: 5.0, nd: 1.79631, elemId: 6, sd: 16.0 },
    { label: "14", R: 66.948, d: 0.2, nd: 1.0, elemId: 0, sd: 16.0 },
    {
      label: "4",
      R: -192.743,
      d: 63.016,
      nd: 1.0,
      elemId: 0,
      sd: 39.5,
      innerSd: 18.0,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    },
  ],

  asph: {},

  var: {
    "6/8": [41.5, 49.55],
  },
  varLabels: [["6/8", "FOC"]],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "M2", fromSurface: "7", toSurface: "6/8" },
    { text: "L2", fromSurface: "9", toSurface: "14" },
    { text: "M1", fromSurface: "3/5", toSurface: "4" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
