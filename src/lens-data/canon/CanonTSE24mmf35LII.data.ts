import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON TS-E 24mm f/3.5 L II                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: US 2010/0208366 A1, Numerical Example 1.           ║
 * ║ Correlation: Canon TS-E 24mm f/3.5L II.                                 ║
 * ║ Patent model: 16 elements / 10 air-separated groups, one asphere.       ║
 * ║ Canon production specification: 16 elements / 11 groups; the direct     ║
 * ║ group-count contradiction is preserved and the prescription is not      ║
 * ║ altered to force the marketing count.                                   ║
 * ║                                                                          ║
 * ║ Scaling: none (s = 1). Patent EFL 24.26 mm; independent paraxial EFL   ║
 * ║ from the rounded table is 24.247181396 mm.                               ║
 * ║                                                                          ║
 * ║ Infinity rear-gap normalization: d27 = 54.96 mm, anchored to the        ║
 * ║ patent's explicit BF value. The rounded d1..d26 sum is 93.60 mm, so     ║
 * ║ this gives 148.56 mm total track versus the patent's separately rounded ║
 * ║ 148.52 mm total length. No source value is silently corrected.          ║
 * ║                                                                          ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Patent ¶0047 states that the  ║
 * ║ aperture stop and complete rear unit L2 move together toward the object ║
 * ║ for closer focus. The close endpoint is code-solved against Canon's     ║
 * ║ 0.21 m MFD using the BF normalization above: Δ = 8.049325054 mm,        ║
 * ║ d12 = 2.940674946 mm, d27 = 63.009325054 mm. The patent publishes no   ║
 * ║ numerical close-focus spacing row; interpolation between endpoints is a ║
 * ║ viewer model, not a published mechanical schedule.                      ║
 * ║                                                                          ║
 * ║ Semi-diameters: patent `ea` is treated as a full effective-aperture      ║
 * ║ diameter, so lens-surface sd = ea/2. The stop radius is derived from the ║
 * ║ design f-number (F/3.56). The Numerical Example 1 patent surface table   ║
 * ║ prints ea13 (Stop) = 20.09 mm (10.045 mm half-diameter).                 ║
 * ║                                                                          ║
 * ║ Glass: the patent identifies no vendors. Vendor-neutral six-digit       ║
 * ║ nd/νd coordinate codes are retained. G3/L3 carries patent Table 1's     ║
 * ║ dPgF = +0.032; nC/nF/ng are not authored because Example 1 does not     ║
 * ║ publish them.                                                            ║
 * ║                                                                          ║
 * ║ Perspective control: Canon publishes ±12 mm shift and ±8.5° tilt.       ║
 * ║ The production tilt hinge/pivot location is not published in the        ║
 * ║ inspected sources, so the required pivot is a rear-vertex fallback      ║
 * ║ (−54.96 mm from IMG) used only as a deterministic visualization/tracing ║
 * ║ reference, not as a measured mechanical-axis claim.                     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Primary patent: https://patents.google.com/patent/US20100208366A1/en
 * Canon product/support specification:
 * https://www.usa.canon.com/shop/p/ts-e-24mm-f-3-5l-ii
 * Canon movement limits:
 * https://www.canon.co.uk/store/canon-ts-e-24mm-f-3-5l-ii-lens/3552B005/
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ts-e-24mm-f35l-ii",
  maker: "Canon",
  name: "CANON TS-E 24mm f/3.5 L II",
  subtitle: "US 2010/0208366 A1 — Numerical Example 1; production correlation to TS-E 24mm f/3.5L II",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 10 GROUPS (PATENT EXAMPLE)",
      "24mm MARKETING / 24.247mm TRACED EFL",
      "f/3.5 MARKETING / F/3.56 DESIGN",
      "67.2mm IMAGE CIRCLE",
      "±12mm SHIFT / ±8.5° TILT",
      "1 ASPHERICAL SURFACE",
    ],
    elementCount: 16,
    groupCount: 10,
    focalLengthMm: { marketing: 24, design: 24.247181396464303 },
    fNumber: { marketing: 3.5, design: 3.56 },
  },

  source: {
    patentNumber: "US 2010/0208366 A1",
    patentYear: 2010,
    authors: ["Suguru Inoue"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -33.96573312089779,
      glass: "583594 — vendor-unresolved coordinate class",
      role: "Front negative meniscus; rear surface is the patent asphere.",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -54.53507811174421,
      glass: "883408 — vendor-unresolved coordinate class",
      role: "Second negative front-subunit lens.",
      diagramLabel: "G2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: -41.900094297683154,
      glass: "497815 — K-PFK80 compatible low-dispersion spectral proxy; patent vendor unspecified",
      apd: "patent",
      apdNote: "Patent Table 1 condition (5) deviation for G3: +0.032; Example 1 does not publish nC/nF/ng.",
      role: "Third negative front-subunit lens; patent G3 anomalous-partial-dispersion condition.",
      diagramLabel: "G3",
      dPgF: 0.032,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.61601,
      vd: 58.7,
      focalLengthMm: 25.47422200639248,
      glass: "616587 — K-PSK200 compatible spectral proxy; patent vendor unspecified",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.88397,
      vd: 40.8,
      focalLengthMm: -40.1163594057153,
      glass: "884408 — S-LAH58 compatible spectral proxy; patent vendor unspecified",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.796,
      vd: 38.1,
      focalLengthMm: 19.323522453869103,
      glass: "796381 — S-LAM73 compatible spectral proxy; patent vendor unspecified",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.77236,
      vd: 36.1,
      focalLengthMm: -32.9581729591154,
      glass: "Unmatched 772361 — patent coordinate; no compatible published catalog curve found",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.78571,
      vd: 48.6,
      focalLengthMm: -69.30881553295988,
      glass: "786486 — N-LAF21 compatible spectral proxy; patent vendor unspecified",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.67769,
      vd: 31.4,
      focalLengthMm: 27.070107842370923,
      glass: "Unmatched 678314 — patent coordinate; no compatible published catalog curve found",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -20.705975896223507,
      glass: "883408 — vendor-unresolved coordinate class",
      cemented: "C4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.554,
      vd: 52.2,
      focalLengthMm: 15.767916793031304,
      glass: "Unmatched 554522 — patent coordinate; no compatible published catalog curve found",
      cemented: "C4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.84175,
      vd: 37.2,
      focalLengthMm: -15.039490056549083,
      glass: "Unmatched 842372 — patent coordinate; no compatible published catalog curve found",
      cemented: "C4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 27.428491741317433,
      glass: "497815 — K-PFK80 compatible low-dispersion spectral proxy; patent vendor unspecified",
      apd: "inferred",
      apdNote:
        "APD inferred from the coordinate-compatible K-PFK80 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -21.251101404288622,
      glass: "883408 — vendor-unresolved coordinate class",
      cemented: "C5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 26.611665463830704,
      glass: "497815 — K-PFK80 compatible low-dispersion spectral proxy; patent vendor unspecified",
      apd: "inferred",
      apdNote:
        "APD inferred from the coordinate-compatible K-PFK80 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      cemented: "C5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: 134.47635470442964,
      glass: "699301 — vendor-unresolved coordinate class",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 52.146, d: 3.8, sd: 24.965, medium: 1 },
    {
      label: "2A",
      R: 13.969,
      d: 7.22,
      sd: 16.425,
      asphere: {
        K: -0.660488,
        A4: 1.6903e-6,
        A6: 5.21355e-11,
        A8: 1.39305e-11,
        A10: -6.83548e-14,
        A12: -1.94007e-17,
        A14: 0,
      },
    },
    { label: "3", R: 27.17, d: 1.8, sd: 15.72, medium: 2 },
    { label: "4", R: 16.83, d: 8.98, sd: 13.32 },
    { label: "5", R: -56.224, d: 1.61, sd: 12.995, medium: 3 },
    { label: "6", R: 33.389, d: 1.62, sd: 12.22 },
    { label: "7", R: 42.438, d: 7.8, sd: 12.195, medium: 4 },
    { label: "8", R: -23.155, d: 1.4, sd: 11.85, medium: 5 },
    { label: "9", R: -68.614, d: 5.35, sd: 11.805 },
    { label: "10", R: 163.816, d: 8.61, sd: 11.825, medium: 6 },
    { label: "11", R: -16.58, d: 1.48, sd: 11.72, medium: 7 },
    { label: "12", R: -49.402, sd: 11.5 },
    // US 2010/0208366 A1, Numerical Example 1 surface table, surface 13: printed effective
    // diameter 20.09 mm at the stop.
    { label: "STO", R: "flat", d: 0.47 },
    { label: "14", R: 22.758, d: 1.2, sd: 10.045, medium: 8 },
    { label: "15", R: 15.678, d: 5.07, sd: 9.595, medium: 9 },
    { label: "16", R: 93.75, d: 0.84, sd: 9.2 },
    { label: "17", R: 66.66, d: 1.1, sd: 8.97, medium: 10 },
    { label: "18", R: 14.237, d: 7.73, sd: 8.37, medium: 11 },
    { label: "19", R: -18.23, d: 1.0, sd: 8.115, medium: 12 },
    { label: "20", R: 42.468, d: 0.49, sd: 8.155 },
    { label: "21", R: 26.259, d: 4.67, sd: 8.36, medium: 13 },
    { label: "22", R: -26.675, d: 0.15, sd: 8.375 },
    { label: "23", R: 1824.817, d: 1.2, sd: 8.645, medium: 14 },
    { label: "24", R: 18.568, d: 7.08, sd: 9.25, medium: 15 },
    { label: "25", R: -40.152, d: 0.15, sd: 10.595 },
    { label: "26", R: -110.317, d: 1.79, sd: 11.11, medium: 16 },
    { label: "27", R: -51.09, sd: 11.45 },
  ],

  focus: {
    closeFocusM: 0.21,
    description:
      "Modeled rear focus: the stop and rear unit L2 move together toward the object while L1 stays fixed. The near endpoint is inferred from Canon’s 0.21 m minimum focus; the patent gives the direction but no close-focus prescription.",
  },

  /* (moved from var) ── Focus model ── */
  gaps: {
    "12": { label: "D12", values: [[10.99, 2.940674946456319]] },
    "27": { label: "BF", values: [[54.96, 63.009325053543684]] },
  },

  aperture: { nominalFNumber: 3.56, fStops: [3.56, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 8 },

  // Canon publishes a 67.2 mm image circle; Example 1 gives image height 33.63 mm
  // and half-angle 54.19°. This override represents the patent design field, not
  // Canon's centered full-frame 84° diagonal marketing angle.
  projection: { kind: "rectilinear", fullFieldDeg: 108.38, maxTraceFieldDeg: 54.19 },

  // Canon movement limits are source-backed. The pivot is not: current project
  // schema requires one for tilt, so the infinity rear vertex is used as the
  // deterministic fallback reference described in the file header.
  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-8.5, 8.5],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -54.96 },
  },

  groups: [
    { text: "L1a", fromSurface: "1", toSurface: "6" },
    { text: "L1b", fromSurface: "7", toSurface: "12" },
    { text: "L2", fromSurface: "14", toSurface: "27" },
  ],
  doublets: [
    { text: "C1", fromSurface: "7", toSurface: "9" },
    { text: "C2", fromSurface: "10", toSurface: "12" },
    { text: "C3", fromSurface: "14", toSurface: "16" },
    { text: "C4", fromSurface: "17", toSurface: "20" },
    { text: "C5", fromSurface: "23", toSurface: "25" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
