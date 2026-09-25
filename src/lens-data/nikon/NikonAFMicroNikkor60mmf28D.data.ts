import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — NIKON AF MICRO-NIKKOR 60mm f/2.8 D             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,751,485, First Embodiment / Table 1.           ║
 * ║  Centered 8-element / 7-group formula correlated with the         ║
 * ║  production AF Micro-Nikkor 60mm f/2.8D.                          ║
 * ║  Focus status: PUBLISHED. G1 and G2 move objectward; G3 is fixed. ║
 * ║                                                                    ║
 * ║  STOP MODEL: The patent locates S only within source gap d6.      ║
 * ║  Fig. 1 places it approximately at mid-gap; the model uses a      ║
 * ║  0.500 split at every published keyframe. The physical stop SD    ║
 * ║  is calibrated to the published design FNo = 2.82 through the     ║
 * ║  paraxial entrance pupil. It is not a source-published diaphragm  ║
 * ║  diameter or an independently measured production value.          ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: inferred, not published. Figure 1 optical rims    ║
 * ║  support a common 11 mm aperture on surfaces 7–11; other rims     ║
 * ║  retain the ray-envelope estimates and the surface-5 gap limit.  ║
 * ║  Repository surface and image-circle audits pass.                ║
 * ║                                                                    ║
 * ║  GLASS LABELS: Coordinate-compatible classes/equivalents only;    ║
 * ║  the patent does not identify suppliers. Candidate catalog line   ║
 * ║  indices are therefore not copied into the implemented elements.  ║
 * ║                                                                    ║
 * ║  The production 60mm f/2.8D is non-VR. The patent's transverse    ║
 * ║  G3 vibration-reduction experiment is retained in the audit only; ║
 * ║  this file implements the ordinary centered axial prescription.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-micro-nikkor-60mm-f28d",
  maker: "Nikon",
  name: "NIKON AF MICRO-NIKKOR 60mm f/2.8 D",
  subtitle: "US 5,751,485 — First Embodiment / Table 1; centered-formula correlation",
  specs: ["8 ELEMENTS / 7 GROUPS", "DESIGN f = 59.9998 mm", "F/2.82", "2ω = 39.4°", "1:1 CLOSE FOCUS"],

  focalLengthMarketing: 60,
  focalLengthDesign: 59.99984305235978,
  apertureMarketing: 2.8,
  apertureDesign: 2.82,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,751,485",
  patentAuthors: ["Kenzaburo Suzuki"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1998,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.79,
      indexReference: "d",
      fl: 69.00553691844469,
      glass: "J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Front positive element of patent group G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 48.06,
      indexReference: "d",
      fl: 45.92094166678259,
      glass: "LAF3-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Positive meniscus in patent group G1, convex surface toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.7,
      indexReference: "d",
      fl: -29.86232447851412,
      glass: "S-TIM1-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative meniscus completing patent group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      fl: -27.99219320389357,
      glass: "E-FD15-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      cemented: "D1",
      role: "Negative member of the cemented L4+L5 pair in patent group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      fl: 33.27855840622334,
      glass: "S-LAL8-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the cemented L4+L5 pair in patent group G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.79,
      indexReference: "d",
      fl: 66.73422297820952,
      glass: "J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Rear positive singlet of patent group G2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.64831,
      vd: 33.75,
      indexReference: "d",
      fl: 52.65275641687556,
      glass: "S-TIM22-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Positive front singlet of the fixed rear patent group G3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.79631,
      vd: 40.9,
      indexReference: "d",
      fl: -38.67389572392332,
      glass: "NBFD2-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative rear singlet completing the fixed rear patent group G3.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 70.8774, d: 2.8, nd: 1.76684, elemId: 1, sd: 13.8 },
    { label: "2", R: -205.2345, d: 0.1, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "3", R: 17.8517, d: 3.5, nd: 1.717, elemId: 2, sd: 11.7 },
    { label: "4", R: 35.801, d: 1.0, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "5", R: 93.5847, d: 1.2, nd: 1.62588, elemId: 3, sd: 10.0 },
    { label: "6", R: 15.502, d: 3.024815, nd: 1.0, elemId: 0, sd: 9.6 },
    // Synthetic stop: Fig. 1 supports a near-mid-gap station; d6 is split 50/50 at each authored focus state.
    { label: "STO", R: 1e15, d: 3.024815, nd: 1.0, elemId: 0, sd: 8.24532064931507 },
    { label: "7", R: -23.4716, d: 1.2, nd: 1.69895, elemId: 4, sd: 11 },
    { label: "8", R: 120.028, d: 9.0, nd: 1.713, elemId: 5, sd: 11 },
    { label: "9", R: -28.6509, d: 0.2, nd: 1.0, elemId: 0, sd: 11 },
    { label: "10", R: 312.7704, d: 2.8, nd: 1.76684, elemId: 6, sd: 11 },
    { label: "11", R: -60.9477, d: 1.23344, nd: 1.0, elemId: 0, sd: 11 },
    { label: "12", R: 280.3072, d: 4.2, nd: 1.64831, elemId: 7, sd: 12.7 },
    { label: "13", R: -38.6396, d: 1.5, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "14", R: -36.7728, d: 1.5, nd: 1.79631, elemId: 8, sd: 12.2 },
    { label: "15", R: 192.9172, d: 39.38439, nd: 1.0, elemId: 0, sd: 12.2 },
  ],

  asph: {},

  sourceStates: [
    {
      id: "infinity",
      label: "Infinity",
      focusT: 0,
      zoomT: 0,
      source: "US 5,751,485, First Embodiment, Table 1 (PDF p. 26): f=59.9998 mm, d6=6.04963 mm, d11=1.23344 mm, Bf=39.38439 mm; Fig. 1 shows the infinity configuration.",
      conjugate: { kind: "infinity" },
    },
    {
      id: "half-life-size",
      label: "Half life-size",
      focusT: 0.857059122392607,
      zoomT: 0,
      source: "US 5,751,485, First Embodiment, Table 1 (PDF p. 26): beta=-0.50000, d6=10.97933 mm, d11=21.77380 mm, Bf=39.38439 mm. Object distance is calculated from these fixed published spacings.",
      conjugate: {
        kind: "finite",
        objectDistanceMm: 154.3874423720583,
        distanceReference: "first-surface",
        distanceProvenance: "calculated",
        magnification: -0.5,
        derivation: "Fixed Table 1 geometry at the authored image plane: ABCD A=-0.4999992544473916, B=77.19360608206878 mm, so s=-B/A=154.3874423720583 mm before surface 1 (255.5249623720583 mm object-to-image). Independent exact rays at heights 0.01/0.005/0.0025 mm recover the distance within 0.0000035 mm and beta within 0.00000075 of the published -0.5. See the lens audit sidecar; no geometry or image-plane refocus was fitted.",
      },
    },
    {
      id: "life-size",
      label: "Life-size",
      focusT: 1,
      zoomT: 0,
      source: "US 5,751,485, First Embodiment, Table 1 (PDF p. 26): beta=-1.00000, d6=15.91790 mm, d11=44.13920 mm, Bf=39.38439 mm. Object distance is calculated from these fixed published spacings.",
      conjugate: {
        kind: "finite",
        objectDistanceMm: 90.4381696574152,
        distanceReference: "first-surface",
        distanceProvenance: "calculated",
        magnification: -1,
        derivation: "Fixed Table 1 geometry at the authored image plane: ABCD A=-1.0000009164240917, B=90.43825253713268 mm, so s=-B/A=90.4381696574152 mm before surface 1 (218.87965965741523 mm object-to-image). Independent exact rays at heights 0.01/0.005/0.0025 mm recover the distance within 0.0000023 mm and beta within 0.00000092 of the published -1. See the lens audit sidecar; no geometry or image-plane refocus was fitted.",
      },
    },
  ],

  /* ── Published focus keyframes ── */
  focusPositions: [0, 0.857059122392607, 1],
  var: {
    "6": [3.024815, 5.489665, 7.95895],
    STO: [3.024815, 5.489665, 7.95895],
    "11": [1.23344, 21.7738, 44.1392],
  },
  varLabels: [
    ["6", "D6a"],
    ["STO", "D6b"],
    ["11", "D11"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "11" },
    { text: "G3 (−)", fromSurface: "12", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.219,
  focusDescription: "Published focus states: G1 and G2 move toward the object; G3 remains fixed.",

  nominalFno: 2.82,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  // Keep the 52.77 mm objectward extension visible at 1:1 with a fixed image plane.
  scFill: 0.43,
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
