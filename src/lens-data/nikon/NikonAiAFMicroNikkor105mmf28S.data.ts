import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF MICRO-NIKKOR 105mm f/2.8 S                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP H02-19814 A, Example 5 (Keiji Moriyama / Nikon Corporation). ║
 * ║ Production correlation: Nikon's retrospective identifies the 1990         ║
 * ║ AI AF Micro-Nikkor 105mm f/2.8S as Moriyama's nine-element, three-block   ║
 * ║ design with life-size focusing.                                            ║
 * ║ 9 elements / 8 air-separated groups; all spherical.                       ║
 * ║ Focus status: PUBLISHED. No reconstructed endpoint is used.               ║
 * ║                                                                            ║
 * ║ Published focus states (Table 5):                                          ║
 * ║   beta =  0.0: d6=22.982, d11=3.807,  d15=10.000, Bf=43.966 mm           ║
 * ║   beta = -0.5: d6=19.805, d11=31.432, d15=7.238,  Bf=43.966 mm           ║
 * ║   beta = -1.0: d6=17.682, d11=56.809, d15=10.000, Bf=43.966 mm           ║
 * ║                                                                            ║
 * ║ Runtime focus uses all three published states as exact keyframes. The       ║
 * ║ beta=-0.5 focus position follows the viewer's inverse-distance convention: ║
 * ║ 0.314 m / 0.387031 m = 0.8113045208264971. Interpolation between the       ║
 * ║ published states remains a visualization interpolation, not a claim that   ║
 * ║ the source trajectory is linear.                                           ║
 * ║                                                                            ║
 * ║ Stop: source gives 5.5 mm from surface 7 and common motion with G2. The    ║
 * ║ stop is modeled 5.5 mm object-side of surface 7, splitting published d6.   ║
 * ║ The stop radius is derived from the design f-number, published FN=2.86.    ║
 * ║                                                                            ║
 * ║ Semi-diameters: inferred, not patent values. They were derived from exact  ║
 * ║ meridional ray envelopes across all three published focus states, anchored ║
 * ║ by Figure 11 axial aperture heights H=18.3/15.5/14.4 mm, then checked for  ║
 * ║ edge thickness, actual spherical rim slope, shared-band cross-gap          ║
 * ║ intrusion, full-field chief/half-pupil containment, and render-trim proxy. ║
 * ║                                                                            ║
 * ║ Glass: the patent supplies only d-line nd/vd coordinates. No production    ║
 * ║ supplier or melt is identified; compatible catalog curves are qualified    ║
 * ║ spectral proxies. Source nC/nF/ng/dPgF values remain unavailable.          ║
 * ║                                                                            ║
 * ║ No scaling, aspheres, cover/filter plates, dummy planes, folded paths, or  ║
 * ║ synthetic cement layers are used.                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-af-micro-nikkor-105mm-f28s",
  maker: "Nikon",
  name: "NIKON AI AF MICRO-NIKKOR 105mm f/2.8 S",
  subtitle: "JP H02-19814 A Example 5 — production correlation to the 1990 AI AF Micro-Nikkor 105mm f/2.8S",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "f = 105.000 mm PATENT / 105.001 mm TRACE",
      "f/2.8 MARKETED / F/2.86 DESIGN",
      "2ω = 23.2°",
      "1:1 LIFE SIZE",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 105, design: 105.001123 },
    fNumber: { marketing: 2.8, design: 2.86 },
  },

  source: {
    patentNumber: "JP H02-19814 A",
    patentYear: 1990,
    authors: ["Keiji Moriyama"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.7,
      indexReference: "d",
      focalLengthMm: 97.1022,
      glass: "694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front positive collector in functional group G1.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 48.1,
      indexReference: "d",
      focalLengthMm: 77.812,
      glass: "717481 — LAF3 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Second positive component of G1.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -46.6984,
      glass: "673322 class (supplier-neutral)",
      apd: false,
      role: "Negative rear component of the moving G1 triplet.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.62588,
      vd: 35.7,
      indexReference: "d",
      focalLengthMm: -38.6432,
      glass: "626357 class (supplier-neutral)",
      apd: false,
      role: "Negative front element of the only cemented pair in G2.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.6935,
      vd: 53.7,
      indexReference: "d",
      focalLengthMm: 50.4167,
      glass: "694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive rear element of the L4-L5 cemented pair.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.7,
      indexReference: "d",
      focalLengthMm: 68.8771,
      glass: "694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive rear component of functional group G2.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      indexReference: "d",
      focalLengthMm: 90.99,
      glass: "805255 class (supplier-neutral)",
      apd: false,
      role: "Positive first element of the floating G3F subgroup.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80454,
      vd: 39.6,
      indexReference: "d",
      focalLengthMm: -30.4224,
      glass: "805396 — NBFD3 (NIKON) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Strong negative element completing the floating G3F subgroup.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 80.1283,
      glass: "517641 — J-BK7A (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Fixed positive rear element G3R ahead of the constant back focus.",
      diagramLabel: "L9",
    },
  ],

  surfaces: [
    { label: "1", R: 65.543, d: 4.2, sd: 21.0, medium: 1 },
    { label: "2", R: 2391.236, d: 1.2, sd: 20.9 },
    { label: "3", R: 32.311, d: 5.4, sd: 18.5, medium: 2 },
    { label: "4", R: 71.416, d: 1.8, sd: 17.5 },
    { label: "5", R: 109.137, d: 1.8, sd: 16.8, medium: 3 },
    // Published d6=22.982 mm at infinity; 5.5 mm is reserved below for STO→surface 7.
    { label: "6", R: 24.231, sd: 14.6 },
    // Patent gives the stop 5.5 mm from surface 7 and moving with G2; object-side placement is the Stage 1 inference.
    { label: "STO", R: "flat", d: 5.5 },
    { label: "7", R: -24.186, d: 1.8, sd: 13.2, medium: 4 },
    // Cemented L4→L5 junction: downstream element L5 owns the interface.
    { label: "8", R: "flat", d: 6.6, sd: 14.6, medium: 5 },
    { label: "9", R: -34.964, d: 0.2, sd: 15.4 },
    { label: "10", R: 720.029, d: 4.2, sd: 15.8, medium: 6 },
    { label: "11", R: -51.038, sd: 15.8 },
    { label: "12", R: -406.62, d: 3.6, sd: 13.3, medium: 7 },
    { label: "13", R: -62.284, d: 6.1, sd: 13.4 },
    { label: "14", R: -46.683, d: 1.5, sd: 12.8, medium: 8 },
    { label: "15", R: 52.19, sd: 13.2 },
    { label: "16", R: 56.017, d: 5.3, sd: 17.3, medium: 9 },
    { label: "17", R: -153.69, d: 43.966, sd: 17.5 },
  ],

  focus: {
    closeFocusM: 0.314,
    // Infinity, published beta=-0.5 at 0.387031 m, and life size at the 0.314 m catalog MFD.
    keyframes: [0, 0.8113045208264971, 1],
    description:
      "Published three-block floating focus to 1:1. G1 and G2 move objectward; G2 moves farther. " +
      "G3F (L7-L8) moves imageward at beta=-0.5 and returns at beta=-1.0; G3R and Bf remain fixed. " +
      "All three published configurations are exact runtime keyframes; interpolation between them is piecewise linear.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    // d6 segment after inserting STO: published d6 minus the fixed 5.5 mm STO→surface 7 spacing.
    "6": { label: "D6 (G1→STO)", values: [[17.482, 14.305, 12.182]] },
    "11": { label: "D11 (G2→G3F)", values: [[3.807, 31.432, 56.809]] },
    "15": { label: "D15 (G3F→G3R; reversing)", values: [[10.0, 7.238, 10.0]] },
  },

  aperture: { nominalFNumber: 2.86, fStops: [2.86, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 7 },

  groups: [
    { text: "G1 (+) / FOCUS → OBJ", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+) / FOCUS → OBJ", fromSurface: "7", toSurface: "11" },
    { text: "G3F (−) / REVERSING FLOAT", fromSurface: "12", toSurface: "15" },
    { text: "G3R (+) / FIXED", fromSurface: "16", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
