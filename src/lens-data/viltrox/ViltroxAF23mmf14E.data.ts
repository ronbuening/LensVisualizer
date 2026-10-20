import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DIAGNOSTIC ONLY — user-authorized literal-source exception, 2026-10-02.
 * CN211826700U Example 1, correlated (not confirmed) with Viltrox AF 23mm F1.4 E.
 * No source radius, axial spacing, nd or vd is corrected. All spherical, scale 1.
 * Static source-labeled infinity/base state. Both raw Table 2 states remain in evidence;
 * their 0.21 mm gap-sum conflict is not turned into an operational focus law.
 * The source-labeled infinity prescription has residual image-plane defocus.
 * No focus travel: var is empty; closeFocusM=1e15 is a UI sentinel, not real MFD.
 * SDs are inferred from Figure 1 proportions and constrained ray/geometry checks.
 * Physical iris is unpublished and calibrated by the real runtime to nominal f/1.4.
 * Source GL is retained in rearPlates with physical gaps, not replaced by t/n.
 * Glass labels are intentionally Unmatched; no catalog substitution or extra spectra.
 * Hidden from normal catalog visibility. No verified-production or READY_FOR_BATCH claim.
 */

const LENS_DATA = {
  schema: 2,
  key: "viltrox-af-e-23mm-f14-diagnostic",
  maker: "Viltrox",
  name: "VILTROX AF E 23mm f/1.4 DIAGNOSTIC",
  subtitle:
    "DIAGNOSTIC ONLY — CN 211826700 U Example 1; literal inconsistent source, unverified production correlation",
  visible: false,

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "DIAGNOSTIC ONLY — NOT A VERIFIED PRODUCTION MODEL",
      "11 ELEMENTS / 10 AIR-SEPARATED GROUPS",
      "Static literal-source base; FOCUS NOT MODELED",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: 23, design: 23.37787341029486 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "CN 211826700 U",
    patentYear: 2020,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — literal-source diagnostic",
      type: "Negative Meniscus",
      nd: 1.88,
      vd: 40.79,
      indexReference: "d",
      focalLengthMm: -32.51744301194437,
      glass: "Unmatched (nd 1.88, νd 40.79; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — literal-source diagnostic",
      type: "Biconvex Positive",
      nd: 1.85,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 38.24230107695344,
      glass: "Unmatched (nd 1.85, νd 42.72; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 — literal-source diagnostic",
      type: "Positive Meniscus",
      nd: 1.85,
      vd: 36.59,
      indexReference: "d",
      focalLengthMm: 65.28293389191657,
      glass: "Unmatched (nd 1.85, νd 36.59; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 — literal-source diagnostic",
      type: "Positive Meniscus",
      nd: 1.51,
      vd: 81.59,
      indexReference: "d",
      focalLengthMm: 157.75827511396315,
      glass: "Unmatched (nd 1.51, νd 81.59; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — literal-source diagnostic",
      type: "Negative Meniscus",
      nd: 1.48,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: -70.02853752813387,
      glass: "Unmatched (nd 1.48, νd 70.44; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 6,
      name: "L21",
      label: "L21 — literal-source diagnostic",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -10.745320362414462,
      glass: "Unmatched (nd 1.85, νd 23.78; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
      cemented: "L21/L22 at source surface 13",
    },
    {
      id: 7,
      name: "L22",
      label: "L22 — literal-source diagnostic",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 16.414252477306437,
      glass: "Unmatched (nd 1.73, νd 54.67; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
      cemented: "L21/L22 at source surface 13",
    },
    {
      id: 8,
      name: "L23",
      label: "L23 — literal-source diagnostic",
      type: "Biconvex Positive",
      nd: 1.93,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 28.992155902364747,
      glass: "Unmatched (nd 1.93, νd 20.88; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 — literal-source diagnostic",
      type: "Negative Meniscus",
      nd: 1.75,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -41.31224966322406,
      glass: "Unmatched (nd 1.75, νd 28.30; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 10,
      name: "L41",
      label: "L41 — literal-source diagnostic",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 20.992152082684616,
      glass: "Unmatched (nd 1.73, νd 54.67; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42 — literal-source diagnostic",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -39.75513771243058,
      glass: "Unmatched (nd 1.85, νd 23.78; coarse patent coordinates)",
      apd: false,
      role: "Literal selected-example element; standalone power is diagnostic, no specific aberration correction verified.",
    },
  ],

  surfaces: [
    { label: "1", R: 105.5, d: 1, sd: 15.7, medium: 1 },
    { label: "2", R: 22.41, d: 15.36, sd: 15.7 },
    { label: "3", R: 68.64, d: 4.06, sd: 14.4, medium: 2 },
    { label: "4", R: -60.07, d: 0.1, sd: 14.4 },
    { label: "5", R: 23.25, d: 2.98, sd: 13.95, medium: 3 },
    { label: "6", R: 37.66, d: 3.54, sd: 13.5 },
    { label: "7", R: -126.69, d: 2.31, sd: 13.2, medium: 4 },
    { label: "8", R: -49.51, d: 0.11, sd: 13 },
    { label: "9", R: 21.54, d: 1, sd: 11.2, medium: 5 },
    { label: "10", R: 12.93, d: 5.74, sd: 10.1 },
    { label: "STO", R: "flat", d: 4.99 },
    { label: "12", R: -13.17, d: 1, sd: 8.9, medium: 6 },
    { label: "13", R: 30.84, d: 6.55, sd: 11.5, medium: 7 },
    { label: "14", R: -17.84, d: 0.1, sd: 11.5 },
    { label: "15", R: 51.8, d: 3.58, sd: 11.3, medium: 8 },
    { label: "16", R: -54.36, d: 1, sd: 11.3 },
    { label: "17", R: 65.81, d: 0.7, sd: 10, medium: 9 },
    { label: "18", R: 20.97, d: 4.43, sd: 10 },
    { label: "19", R: 30.99, d: 8.03, sd: 12.8, medium: 10 },
    { label: "20", R: -27, d: 0.91, sd: 12.8 },
    { label: "21", R: -25.97, d: 1, sd: 12.8, medium: 11 },
    { label: "22", R: -114.18, d: 14.29, sd: 12.8 },
  ],

  focus: {
    closeFocusM: 1000000000000000,
    description:
      "DIAGNOSTIC ONLY: static source-labeled infinity/base prescription, which retains source image-plane defocus. Operational focus is not modeled. closeFocusM=1e15 is an infinity-only UI sentinel, not the production minimum focus distance. Both contradictory Table 2 endpoints, including the source 0.3 m label, are preserved separately in evidence and analysis; no focus law, close-focus performance or finite conjugate is certified.",
  },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1,
      source: "CN211826700U Example 1 Table 1 rows 23–24, PDF page 8; physical values unchanged.",
    },
  ],

  groups: [
    { text: "G1 (source)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (source)", fromSurface: "12", toSurface: "16" },
    { text: "G3 (source)", fromSurface: "17", toSurface: "18" },
    { text: "G4 (source)", fromSurface: "19", toSurface: "22" },
  ],
  doublets: [{ text: "L21/L22", fromSurface: "12", toSurface: "14" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
