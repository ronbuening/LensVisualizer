import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 3,037,426, Example 3 / Table 3 / Figure 3.             ║
 * ║ Seven air-spaced elements in three dioptric systems; one paraboloid.║
 * ║ Focus: fixed; NO_INTERNAL_RECONSTRUCTION.                           ║
 * ║                                                                    ║
 * ║ SOURCE CORRECTION MD04: Table 3 literally prints the L17 rear      ║
 * ║ parabola "parameter = 15". The raw value remains preserved in the ║
 * ║ dossier. This construction uses R = +7.5 mm, K = -1 as the         ║
 * ║ supported row-specific source correction established in Stage 1.   ║
 * ║ No uniform prescription scaling is applied.                         ║
 * ║                                                                    ║
 * ║ STOP: D3 position is source-published: 1.8 mm ahead of L19. The    ║
 * ║ 31.33 mm L18-to-L19 gap is split 29.53 + STO + 1.80 mm. The stop   ║
 * ║ radius is derived from the design f-number (f/1.9) using the       ║
 * ║ corrected modeled EFL; it is not published.                        ║
 * ║                                                                    ║
 * ║ SEMI-DIAMETERS: none are published. Values below are modeled from  ║
 * ║ exact meridional ray envelopes through the published 98.5°         ║
 * ║ half-field, then checked against edge thickness, actual rim slope, ║
 * ║ conic domain, shared-gap intrusion, and sampled off-axis           ║
 * ║ containment. The narrow L21 rim intentionally clips a small        ║
 * ║ peripheral subset of sampled rays to retain positive edge          ║
 * ║ thickness; this is modeled vignetting, not a source dimension.     ║
 * ║                                                                    ║
 * ║ PROJECTION: the patent gives 197° full field and off-axis image    ║
 * ║ growth but no projection equation. Existing schema choices do not  ║
 * ║ include stereographic/unknown fisheye, so projection metadata is   ║
 * ║ intentionally omitted rather than mislabeled equidistant/equisolid.║
 * ║                                                                    ║
 * ║ MOUNT/FORMAT: archival product literature documents C-mount and    ║
 * ║ ALPA variants and an 8.7 mm circular image, but the supplied       ║
 * ║ taxonomy has no canonical ids for them; those fields are omitted.  ║
 * ║                                                                    ║
 * ║ closeFocusM = 1,000,000 m is a schema-required, non-operative      ║
 * ║ fixed-focus placeholder. No variable spacing or finite MFD is      ║
 * ║ asserted by this model.                                             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Table 3 / PDF p. 5 retains the documented MD04
 * parabola correction; all other radii, gaps and glass coordinates match.
 * Computed EFL 1.955900 vs printed 1.98 and BFL 9.330584 vs 9.28 show
 * a residual source inconsistency. The source does not specify designer best
 * focus; preserve the image distance and do not further tune the paraboloid.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "kinoptik-super-tegea-19mm-f19-fisheye",
  maker: "Kinoptik",
  name: "KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE",
  subtitle: "US 3,037,426 — Example 3; strong production correlation, not manufacturer-confirmed example attribution",

  catalog: {
    lensMounts: ["c-mount", "alpa"],
    imageCircleMm: 8.7,
    specs: [
      "7 ELEMENTS / 7 GROUPS",
      "3 DIOPTRIC SYSTEMS",
      "1.9mm",
      "f/1.9",
      "197° FIELD",
      "8.7 mm CIRCULAR IMAGE (MARKETED)",
      "1 ASPHERICAL SURFACE",
    ],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 1.9, design: 1.9558999761 },
    fNumber: { marketing: 1.9, design: 1.9 },
  },

  source: {
    patentNumber: "US 3,037,426",
    patentYear: 1962,
    authors: ["Edgard Hugues"],
    assignees: ["Les Appareils de Precision Kinoptik"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L16",
      label: "Element L16",
      type: "Negative Meniscus",
      nd: 1.69112,
      vd: 54.0,
      indexReference: "d",
      focalLengthMm: -98.2942535,
      glass: "N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Front negative meniscus of system I.",
      diagramLabel: "L16",
    },
    {
      id: 2,
      name: "L17",
      label: "Element L17",
      type: "Plano-Parabolic Negative (1× Asph)",
      nd: 1.8,
      vd: 45,
      indexReference: "d",
      focalLengthMm: -9.375,
      glass: "M-TAF31-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Plano-parabolic negative element of system I; rear surface uses the disclosed MD04 source correction.",
      diagramLabel: "L17",
    },
    {
      id: 3,
      name: "L18",
      label: "Element L18",
      type: "Biconvex Positive",
      nd: 1.68102,
      vd: 32.0,
      indexReference: "d",
      focalLengthMm: 44.3004271,
      glass: "Unmatched (681320-class; supplier unspecified)",
      apd: false,
      role: "Positive second system.",
      diagramLabel: "L18",
    },
    {
      id: 4,
      name: "L19",
      label: "Element L19",
      type: "Biconvex Positive",
      nd: 1.69112,
      vd: 54.0,
      indexReference: "d",
      focalLengthMm: 11.038837,
      glass: "N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Strong positive leading element of system III.",
      diagramLabel: "L19",
    },
    {
      id: 5,
      name: "L20",
      label: "Element L20",
      type: "Biconcave Negative",
      nd: 1.73259,
      vd: 28.4,
      indexReference: "d",
      focalLengthMm: -5.45943135,
      glass: "Unmatched (733284-class; supplier unspecified)",
      apd: false,
      role: "Negative element within system III.",
      diagramLabel: "L20",
    },
    {
      id: 6,
      name: "L21",
      label: "Element L21",
      type: "Positive Meniscus",
      nd: 1.62023,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 10.407866,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Positive meniscus in the rear system.",
      diagramLabel: "L21",
    },
    {
      id: 7,
      name: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.62023,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 18.6099588,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Final positive element of system III.",
      diagramLabel: "L22",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 87.105, d: 5.12, sd: 45.0, medium: 1 },
    { label: "2", R: 37.25, d: 15.37, sd: 30.0 },
    { label: "3", R: "flat", d: 2.56, sd: 25.0, medium: 2 },
    { label: "4A", R: 7.5, d: 37.75, sd: 14.8, asphere: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    { label: "5", R: 93.826, d: 10.25, sd: 16.0, medium: 3 },
    { label: "6", R: -42.5, d: 29.53, sd: 15.8 },
    { label: "STO", R: "flat", d: 1.8 },
    { label: "7", R: 7.936, d: 1.79, sd: 3.75, medium: 4 },
    { label: "8", R: -179.13, d: 1.82, sd: 3.65 },
    { label: "9", R: -6.852, d: 0.61, sd: 3.45, medium: 5 },
    { label: "10", R: 9.969, d: 1.38, sd: 3.72 },
    { label: "11", R: -44.039, d: 1.43, sd: 3.85, medium: 6 },
    { label: "12", R: -5.7, d: 0.02, sd: 3.85 },
    { label: "13", R: 22.888, d: 1.02, sd: 4.55, medium: 7 },
    { label: "14", R: -22.888, d: 9.28, sd: 4.55 },
  ],

  focus: { closeFocusM: 1000000, description: "Fixed focus; no moving groups are modeled." },

  aperture: { nominalFNumber: 1.9, fStops: [1.9, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "4A" },
    { text: "II", fromSurface: "5", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  layout: { yScFill: 0.7 },
} satisfies LensDataV2Input;

export default LENS_DATA;
