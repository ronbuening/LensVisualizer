import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON TS-E 135mm f/4 L MACRO                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-132674 A, Numerical Data 1.               ║
 * ║  Canon / Mizuma Akira; all-spherical 11-element tilt-shift macro.  ║
 * ║  11 elements / 7 air-spaced groups; no aspherical surfaces.        ║
 * ║  Focus: double floating focus. L2/FN moves imageward; L3/FP moves  ║
 * ║  objectward. L1, the aperture stop, and L4/RF remain fixed.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No production scaling is applied. Patent Example 1 is f=133.00  ║
 * ║    mm and corresponds directly to the marketed 135 mm lens.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    JP 2018-132674 A does not publish clear-aperture semi-diameters.║
 * ║    SDs below are conservative reconstruction values derived from   ║
 * ║    paraxial marginal/chief-ray traces, the official 82 mm filter   ║
 * ║    size, the f/4.05 entrance-pupil solution, and renderer geometry ║
 * ║    constraints. All clear caps remain unchanged. The native S7 rear ║
 * ║    outer shoulder extends to 19.8 mm beyond clear 15.95 mm; no cut.    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from first element to image plane║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ No sensor glass, filters, coatings, diaphragm mechanics, or  ║
 * ║      tilt-shift hardware is modeled as an optical element.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-tse-135mm-f4l",
  maker: "Canon",
  name: "CANON TS-E 135mm f/4 L MACRO",
  subtitle: "JP 2018-132674 A Numerical Data 1 — Canon / Mizuma Akira",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "11 elements / 7 groups",
      "f = 133.00 mm patent design (135 mm marketed)",
      "F/4.05 design (f/4 marketed)",
      "Patent image circle: 67.3 mm diameter",
      "All-spherical; 2 UD/ED elements",
      "Double floating focus; ±10° tilt, ±12 mm shift",
    ],
    elementCount: 11,
    groupCount: 7,
    focalLengthMm: { marketing: 135, design: 133.0 },
    fNumber: { marketing: 4, design: 4.05 },
  },

  source: {
    patentNumber: "JP 2018-132674 A",
    example: { label: "Numerical Data 1", id: "1" },
    patentYear: 2018,
    authors: ["Akira Mizuma"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Data 1, PDF/printed 10–11: literal first-to-image tracks 183.77 mm at infinity and 183.75 mm near versus stated 183.76 mm. The four moving gaps sum 50.48/50.46 mm although source prose keeps L1/SP/RF fixed. Printed rounding is an unproved explanation; all source R/d and focus-gap endpoints remain unchanged.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.65844,
      indexReference: "d",
      vd: 50.9,
      focalLengthMm: 100.26,
      glass:
        "N-SSK5 (Schott; S-BSM25 class equivalent) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "Front collector element of positive group L1.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconvex Positive (UD)",
      nd: 1.497,
      indexReference: "d",
      // Genuine selected-source partial, converted using retained surface vd.
      dPgF: 0.031283,
      vd: 81.5,
      focalLengthMm: 71.39,
      glass: "S-FPL51 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      apd: "patent",
      apdNote:
        "Selected Numerical Data 1 Table 1, PDF/printed 14: L1p theta_gF=0.538, higher-precision nu_d=81.54; source surface nu_d retained. dPgF=0.031283 derives from published theta and engine/source linear normal 0.6438−0.001682nu_d at the retained surface coordinate. No catalog line indices or historical supplier/melt inference.",
      role: "Low-dispersion positive member of the L1 rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.91082,
      indexReference: "d",
      vd: 35.3,
      focalLengthMm: -59.62,
      glass:
        "TAFD35L (HOYA equivalent; supplier uncertain) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "High-index negative partner in the L1 achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      indexReference: "d",
      vd: 42.7,
      focalLengthMm: -54.84,
      glass: "S-LAH55V (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "Standalone negative meniscus at the front of the moving FN focus group.",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.65412,
      indexReference: "d",
      vd: 39.7,
      focalLengthMm: -42.29,
      glass: "S-NBH5 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "Negative short-flint member of the moving FN cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.001,
      indexReference: "d",
      // Genuine selected-source partial, converted using retained surface vd.
      dPgF: 0.0041462,
      vd: 29.1,
      focalLengthMm: 35.95,
      glass: "S-LAH99 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      apd: "patent",
      apdNote:
        "Selected Numerical Data 1 Table 1, PDF/printed 14: FNp theta_gF=0.599, higher-precision nu_d=29.13; source surface nu_d retained. dPgF=0.0041462 derives from published theta and engine/source linear normal 0.6438−0.001682nu_d at the retained surface coordinate. No catalog line indices or historical supplier/melt inference.",
      role: "Ultra-high-index positive member of the moving FN doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6968,
      indexReference: "d",
      vd: 55.5,
      focalLengthMm: 61.85,
      glass: "S-LAL14 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "Standalone positive element at the front of the moving FP focus group.",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconvex Positive (UD)",
      nd: 1.497,
      indexReference: "d",
      // Genuine selected-source partial, converted using retained surface vd.
      dPgF: 0.031283,
      vd: 81.5,
      focalLengthMm: 53.77,
      glass: "S-FPL51 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      apd: "patent",
      apdNote:
        "Selected Numerical Data 1 Table 1, PDF/printed 14: FPp theta_gF=0.538, higher-precision nu_d=81.54; source surface nu_d retained. dPgF=0.031283 derives from published theta and engine/source linear normal 0.6438−0.001682nu_d at the retained surface coordinate. No catalog line indices or historical supplier/melt inference.",
      role: "Low-dispersion positive member of the moving FP cemented doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.85478,
      indexReference: "d",
      // Genuine selected-source partial, converted using retained surface vd.
      dPgF: 0.0099136,
      vd: 24.8,
      focalLengthMm: -91.06,
      glass: "S-NBH56 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      apd: "patent",
      apdNote:
        "Selected Numerical Data 1 Table 1, PDF/printed 14: FPn theta_gF=0.612, higher-precision nu_d=24.8; source surface nu_d retained. dPgF=0.0099136 derives from published theta and engine/source linear normal 0.6438−0.001682nu_d at the retained surface coordinate. No catalog line indices or historical supplier/melt inference.",
      role: "High-dispersion negative member of the moving FP cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.95375,
      indexReference: "d",
      vd: 32.3,
      focalLengthMm: 72.22,
      glass: "S-LAH98 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "High-index positive member of the stationary rear field-corrector doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6516,
      indexReference: "d",
      vd: 58.5,
      focalLengthMm: -32.52,
      glass: "S-LAL7 (OHARA) — compatible catalog spectral proxy; historical supplier/composition/melt unresolved",
      role: "Lower-dispersion negative member completing the stationary rear field-corrector doublet.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 82.416, d: 8.48, sd: 31.5, medium: 1 },
    { label: "2", R: -318.233, d: 0.2, sd: 31.5 },
    { label: "3", R: 51.284, d: 10.91, sd: 26, medium: 2 },
    { label: "4", R: -107.029, d: 2.4, sd: 26, medium: 3 },
    { label: "5", R: 111.402, sd: 26 },
    { label: "6", R: 129.518, d: 1.8, sd: 19.8, medium: 4 },
    { label: "7", R: 33.612, d: 5.21, sd: 15.95, rimExtensionSd: 19.8 },
    { label: "8", R: -202.934, d: 1.6, sd: 15.95, medium: 5 },
    { label: "9", R: 32.129, d: 5.35, sd: 17.6, medium: 6 },
    { label: "10", R: 274.715, sd: 17.6 },
    { label: "STO", R: "flat" },
    { label: "12", R: 115.67, d: 4.69, sd: 18.5, medium: 7 },
    { label: "13", R: -67.54, d: 0.2, sd: 18.5 },
    { label: "14", R: 66.218, d: 6.45, sd: 17.3, medium: 8 },
    { label: "15", R: -43.353, d: 1.6, sd: 17.3, medium: 9 },
    { label: "16", R: -99.522, sd: 17.3 },
    { label: "17", R: -65.005, d: 4.12, sd: 20.8, medium: 10 },
    { label: "18", R: -34.479, d: 1.95, sd: 20.8, medium: 11 },
    { label: "19", R: 56.191, d: 78.33, sd: 21 },
  ],

  focus: {
    closeFocusM: 0.486,
    description:
      "Published gap endpoints: L2/FN moves imageward and L3/FP objectward; source prose keeps L1/STO/RF fixed, with a retained 0.02 mm table-track discrepancy. Distance 0.486 m is product metadata and intermediate gaps are interpolated. Source paragraph 0048 prefers a focus-varying iris and near Figure 2(B) states Fno 5.60, but supplies no physical diameter schedule; current fixed derived iris is retained as a model limitation.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "5": { label: "D5 L1-L2", values: [[4.04, 19.81]] },
    "10": { label: "D10 L2-STO", values: [[22.15, 6.37]] },
    STO: { label: "D11 STO-L3", values: [[19.94, 11.39]] },
    "16": { label: "D16 L3-L4", values: [[4.35, 12.89]] },
  },

  aperture: {
    nominalFNumber: 4.05,
    fStops: [4.05, 5.6, 8, 11, 16, 22, 32, 45],
    maxFNumber: 45,
    blades: 9,
    bladeRoundedness: 1,
  },

  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-10, 10],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
    // Reference-state rear vertex fallback; not a measured mechanical tilt hinge.
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -78.33 },
  },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 / FN (-)", fromSurface: "6", toSurface: "10" },
    { text: "L3 / FP (+)", fromSurface: "12", toSurface: "16" },
    { text: "L4 / RF (-)", fromSurface: "17", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
  ],

  layout: { scFill: 0.62, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
