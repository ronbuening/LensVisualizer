import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LEITZ COLORPLAN 90mm f/2.5 (original five-element Leitz projection lens), modeled from US 3,076,383 Example 1
 * (Table 1 / FIG. 1; identical data in Claim 1). Walter Mandler and Erich Wagner, assigned to Ernst Leitz GmbH.
 *
 * Source/model mapping:
 * - Gauss-derived four-group layout: L1 positive meniscus; cemented L2 plano-convex + L3 plano-concave (flat
 *   junction r4) concave toward the stop; stop; L4 negative meniscus concave toward the stop; L5 biconvex.
 *   5 elements / 4 groups, all spherical. Patent orientation (long conjugate at left) is kept; in projection the
 *   slide sits at the modeled image plane.
 * - Table 1 is normalized to f = 1.00; every length is scaled uniformly by s = 90 (no aspheres). The rounded table
 *   then gives EFL 89.801 mm (printed f = 1.00 is within the table's rounding bound, not reproduced exactly).
 * - Table 1 prints "+2,267" for r8; Claim 1 prints "+2.267". Read as 2.267 (typographic transcription).
 * - The final r9-to-image spacing is the model's computed paraxial BFD, 52.004973 mm. The directly scaled printed
 *   a9 is 52.11 mm; that 0.105 mm source-precision mismatch remains documented in the dossier.
 * - STO is not tabulated. It is placed 9.26 mm behind r5 from the diaphragm drawn in FIG. 1 (figure fraction of
 *   a5); its semi-diameter is the real f/2.5 marginal-ray height at that plane. The production lens has no iris:
 *   the stop is a fixed diaphragm, and matching f/2.5 is a calibration, not independent diameter evidence.
 * - Index reference: the patent labels the columns n_e / nu_e and Claim 1 says the data refer to the e-line. The
 *   printed pairs nevertheless reproduce d-line coordinates of period Schott types (SSK5, SF5, SF4, SK18; the
 *   sibling Table 2 likewise matches LaF2, LaF3, LaK8, SF10); read as e-line pairs, the nearest catalog glass misses
 *   by 0.0020-0.0067 in index on every row. Contemporaneous Leitz patents print SF4-type flint as 1.76167 at the
 *   e-line (US 2,975,673) and 1.75520 at the D line (US 2,995,980); Table 1's 1.755 is the d-line form. The values
 *   are stored unchanged as nd / vd (indexReference "d"): a documented proposed correction of the patent's label,
 *   not a transcription change. Glass names are coordinate-compatible catalog equivalents, not melt attributions.
 * - Semi-diameters are inferred from the optical rims in the local patent FIG. 1, scaled by the
 *   first-to-last glass vertex span. Mechanical lines and leaders are excluded. This patent model is
 *   not constrained to the reported 46 mm production barrel; its larger front rim is not production evidence.
 * - Focus status is CONSTRAINED RECONSTRUCTION: unit focus (the projector or an adapter helicoid moves the whole
 *   lens); only the image-side gap varies. closeFocusM = 1.0 m object-to-image is a modeling endpoint, not a
 *   manufacturer specification; its gap (61.792966 mm) is the computed paraxial unit-focus conjugate.
 * - No cover glass, filter, or rear plate is listed; none is modeled.
 */

const LENS_DATA = {
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "leica-colorplan-90mm-f25",
  maker: "Leica",
  name: "LEITZ COLORPLAN 90mm f/2.5 (5-element)",
  subtitle: "US 3,076,383 EXAMPLE 1 — ERNST LEITZ / MANDLER & WAGNER (original 5/4 projection lens)",

  catalog: {
    lensMounts: ["projection-lens"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 89.8 mm", "F/2.5 (FIXED)", "2ω = 27° (PATENT)", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 90, design: 89.8 },
    fNumber: { marketing: 2.5 },
  },

  source: {
    patentNumber: "US 3,076,383",
    patentYear: 1963,
    authors: ["Walter Mandler", "Erich Wagner"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.658,
      vd: 50.8,
      focalLengthMm: 126.2,
      glass:
        "N-SSK5 catalog equivalent (Schott; SSK5-type extra-dense barium crown, patent coordinate 658508; production melt unspecified)",
      apd: false,
      role: "First positive lens; front collector, convex toward the long conjugate.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex",
      nd: 1.658,
      vd: 50.8,
      focalLengthMm: 43.9,
      glass:
        "N-SSK5 catalog equivalent (Schott; SSK5-type extra-dense barium crown, patent coordinate 658508; production melt unspecified)",
      apd: false,
      role: "Positive crown half of the front cemented meniscus component.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave",
      nd: 1.673,
      vd: 32.2,
      focalLengthMm: -29.3,
      glass: "SF5 catalog equivalent (Schott; dense flint, patent coordinate 673322; production melt unspecified)",
      apd: false,
      role: "Negative flint half of the front cemented meniscus; its concave face r5 faces the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.755,
      vd: 27.5,
      focalLengthMm: -132.9,
      glass: "SF4 catalog equivalent (Schott; dense flint, patent coordinate 755275; production melt unspecified)",
      apd: false,
      role: "Single rear meniscus, concave toward the stop; weakly negative dense-flint element.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 55.5,
      focalLengthMm: 60.5,
      glass:
        "K-SK18 catalog equivalent (Sumita; SK18-type dense barium crown, patent coordinate 639555; production melt unspecified)",
      apd: false,
      role: "Second positive lens; rear collector with the stronger face toward the image.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.36, d: 8.379, sd: 25.0, medium: 1 },
    { label: "2", R: 147.87, d: 4.689, sd: 24.5 },
    { label: "3", R: 28.899, d: 10.062, sd: 17.1, medium: 2 },
    { label: "4", R: "flat", d: 4.32, sd: 17.1, medium: 3 }, // cemented flat junction r4
    { label: "5", R: 19.71, d: 9.26, sd: 14.0 },
    { label: "STO", R: "flat", d: 8.146 }, // FIG. 1 estimate; real f/2.5 height
    { label: "6", R: -24.651, d: 7.047, sd: 12.0, medium: 4 },
    { label: "7", R: -36.702, d: 0.846, sd: 13.5 },
    { label: "8", R: 204.03, d: 6.291, sd: 15.2, medium: 5 },
    { label: "9", R: -47.16, sd: 15.6 }, // computed paraxial BFD (a9 x 90 = 52.11)
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focus: the lens has no helicoid and is moved as a whole by the projector mount or an adapter. Only the image-side gap changes. The 1.0 m object-to-image endpoint is a modeling choice, not a manufacturer minimum distance.",
  },

  gaps: { "9": { label: "BF", values: [[52.004973, 61.792966]] } },

  aperture: { nominalFNumber: 2.5, fStops: [2.5], maxFNumber: 2.5 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
