import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 24mm f/1.4 L II USM — US 2010/0033848 A1, Numerical Example 3.
 * The native table heading on PDF page 13 is Numerical Example 3; id 3 and prescription are unchanged.
 * Source surfaces 1–17 are on PDF page 13 (printed 7), continued surfaces 18–24, aspheres and Table 1
 * partial-dispersion data on page 14 (printed 8). Figures 5/6 is PDF page 4, sheet 3 of 5.
 * Paragraph 0116 explicitly defines the d-line reference. Table 1 publishes rounded theta_gF for
 * GP/GN/GNF; their three source-derived dPgF values are retained. Per-medium C/F/g indices are not printed.
 * Nine compatible catalog curves remain qualified spectral proxies; four media stay unmatched.
 * Historical supplier, melt, chemistry and manufacturing route are not identified by a catalog match.
 *
 * Published refracting clear caps are retained, including the prior source-rounding/geometry constraints
 * on S3/S7/S12 (21.6/19.16/11.44 mm rather than 21.745/19.345/11.52 mm).
 * Native Figure 5 resolves rear shoulders on S2/S4A/S9/S12. Added rimExtensionSd values
 * 27.27/21.6/17.965/13.055 mm preserve clear caps 21.895/19.645/17.62/11.44 mm.
 * The latter two use existing bonded-cap anchors conservatively, avoiding opaque interface lands or
 * unsupported full-blank blocks. A proposed S18 shoulder is rejected: its 4.249 mm axial depth reaches
 * past the fixed stop plane at the inferred near-focus gap 2.423 mm. No inferred cut is authored.
 *
 * Source R/d, both aspheres, clear caps and all aperture/focus controls remain unchanged.
 * The current derived iris radius is 11.846408 mm under the marked/paraxial f/1.45 convention;
 * real infinity working f-number is about 1.47723. The generic source stop diameter 24.16 mm is
 * source envelope evidence, not proof of a physical iris schedule or replacement stop authority.
 * Close focus remains the existing paraxial rigid-L2 reconstruction from the product 0.25 m MFD.
 * It retains wide-open working-ray vignetting at 13/21 sampled focus positions (0.40-1.00).
 * The first rear cap projects in front of the fixed stop plane above radius 9.1747 mm at the close
 * state; the source publishes no finite-focus table that would establish a corrected motion law.
 * Source fidelity, sampled centered runtime behavior and production correlation are separate.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-24mm-f14-l-ii-usm",
  maker: "Canon",
  name: "CANON EF 24mm f/1.4 L II USM",
  subtitle: "US 2010/0033848 A1 Numerical Example 3 — Takahiro Hatada",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 10 GROUPS",
      "f = 24.539 mm (DESIGN)",
      "f/1.4 MARKETED; f/1.45 PATENT",
      "84° PUBLISHED DIAGONAL FIELD",
      "2 ASPHERICAL SURFACES",
      "REAR FOCUS",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: 24, design: 24.53861 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "US 2010/0033848 A1",
    example: { label: "Numerical Example 3", id: "3" },
    patentYear: 2010,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -58.097,
      glass: "S-LAH55V (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "Large front negative meniscus for retrofocus angular redistribution.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus (rear asphere)",
      nd: 1.58373,
      vd: 59.0,
      focalLengthMm: -70.49,
      glass: "Unmatched (source 1.58373/59.0; chemistry and supplier unresolved)",
      role: "Second front negative meniscus; rear asphere controls wide-angle off-axis aberrations.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 60.091,
      glass: "S-LAH58 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "High-index positive component in the front unit.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4 (GNF)",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: -56.733,
      glass: "Unmatched (source 1.49700/81.5 anomalous glass; chemistry and supplier unresolved)",
      apd: "patent",
      apdNote: "Patent Table 1: θgF = 0.54; ΔPgF = +0.0332830.",
      role: "Negative anomalous-dispersion component used for lateral-color control.",
      cemented: "D1",
      dPgF: 0.033283,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 46.509,
      glass: "S-LAH55V (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "High-index positive cemented partner to E4.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 25.775,
      glass: "S-LAH60 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "Strong positive component in a nearly power-cancelled cemented pair.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: -22.732,
      glass: "S-TIM5 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "Negative cemented partner to E6; the pair is nearly afocal.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8 (GN)",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -58.423,
      glass: "BPH5 (qualified historical catalog spectral proxy; source supplier and melt unspecified)",
      apd: "patent",
      apdNote: "Patent Table 1: rounded θgF = 0.57 and derived ΔPgF = −0.0070246. BPH5 is a compatible catalog proxy, not proof of historical supplier or melt.",
      role: "Negative anomalous-dispersion element near the stop.",
      dPgF: -0.0070246,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9 (GP)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 38.995,
      glass: "Unmatched (source 1.49700/81.5 anomalous glass; chemistry and supplier unresolved)",
      apd: "patent",
      apdNote: "Patent Table 1: θgF = 0.54; ΔPgF = +0.0332830.",
      role: "Positive anomalous-dispersion element immediately ahead of the stop.",
      dPgF: 0.033283,
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus (concave to object)",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 138.452,
      glass: "S-FSL5 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "Low-dispersion positive front component of the moving rear unit.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus (convex to image)",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -29.408,
      glass: "S-TIH53 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "High-dispersion negative partner forming the negative front subgroup of L2.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 36.74,
      glass: "S-PHM52 (OHARA; qualified spectral proxy; historical supplier/melt unspecified)",
      role: "Strong positive relay component in the moving rear unit.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus (front asphere, convex to image)",
      nd: 1.851,
      vd: 40.4,
      focalLengthMm: 54.099,
      glass: "Unmatched (source 1.85100/40.4; chemistry and supplier unresolved)",
      role: "Rear positive meniscus with a source asphere; production glass-molded position is correlation only.",
    },
  ],

  surfaces: [
    { label: "1", R: 64.588, d: 2.9, sd: 27.27, medium: 1 },
    { label: "2", R: 27.134, d: 8.59, sd: 21.895, rimExtensionSd: 27.27 },
    { label: "3", R: 78.633, d: 3.35, sd: 21.6, medium: 2 },
    {
      label: "4A",
      R: 26.588,
      d: 6.91,
      sd: 19.645,
      rimExtensionSd: 21.6,
      asphere: { K: 0, A4: -5.6034e-6, A6: -8.8149e-9, A8: 3.9223e-12, A10: -2.2756e-14 },
    },
    { label: "5", R: 104.899, d: 5.15, sd: 19.56, medium: 3 },
    { label: "6", R: -104.899, d: 0.89, sd: 19.385 },
    { label: "7", R: -72.964, d: 2.1, sd: 19.16, medium: 4 },
    { label: "8", R: 46.394, d: 5.95, sd: 17.965, medium: 5 },
    { label: "9", R: -224.128, d: 3.78, sd: 17.62, rimExtensionSd: 17.965 },
    { label: "10", R: 37.165, d: 6.85, sd: 13.985, medium: 6 },
    { label: "11", R: -46.716, d: 1.5, sd: 13.055, medium: 7 },
    { label: "12", R: 19.654, d: 5.07, sd: 11.44, rimExtensionSd: 13.055 },
    { label: "13", R: -76.688, d: 1.3, sd: 11.555, medium: 8 },
    { label: "14", R: 76.688, d: 0.2, sd: 11.88 },
    { label: "15", R: 26.781, d: 6.55, sd: 12.58, medium: 9 },
    { label: "16", R: -64.437, d: 3.4, sd: 12.575 },
    // US 2010/0033848 A1 Numerical Example 3 surface table prints a 24.16 mm effective diameter at the stop.
    { label: "STO", R: "flat" },
    { label: "18", R: -18.579, d: 3.55, sd: 11.825, medium: 10 },
    { label: "19", R: -15.481, d: 1.6, sd: 12.18, medium: 11 },
    { label: "20", R: -42.869, d: 0.2, sd: 14.05 },
    { label: "21", R: 103.587, d: 8.2, sd: 15.45, medium: 12 },
    { label: "22", R: -28.2, d: 0.2, sd: 15.8 },
    {
      label: "23A",
      R: -116.641,
      d: 6.0,
      sd: 16.415,
      medium: 13,
      asphere: { K: 0, A4: -1.1961e-5, A6: -2.8659e-9, A8: -7.0647e-12, A10: -1.3455e-14 },
    },
    { label: "24", R: -33.79, sd: 17.46 },
  ],

  focus: {
    closeFocusM: 0.25,
    description:
      "Rear focus: L1 fixed; complete L2 moves objectward. Close spacings are a paraxial inference from the published 0.25 m MFD.",
  },

  gaps: { STO: { label: "L2 GAP", values: [[6.64, 2.423365]] }, "24": { label: "BF", values: [[38.48, 42.696635]] } },

  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "L1 (FIXED)", fromSurface: "1", toSurface: "16" },
    { text: "L2 (FOCUS)", fromSurface: "18", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  layout: { scFill: 0.58, yScFill: 0.76 },
} satisfies LensDataV2Input;

export default LENS_DATA;
