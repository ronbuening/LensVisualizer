import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — SONY E PZ 16-50mm f/3.5-5.6 OSS                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2015/0316753 A9, Example 1 (Masaharu Hosoi / Sony).      ║
 * ║ Four moving power groups (N-P-N-P), 9 elements / 8 air-separated groups, ║
 * ║ with 6 aspherical surfaces on 4 physical elements.                        ║
 * ║                                                                            ║
 * ║ Production correlation is strong but inferred: the patent does not name   ║
 * ║ SELP1650. Marketing metadata comes from Sony; prescription values come     ║
 * ║ from the patent and independent calculation. No dimensional scaling is     ║
 * ║ applied (s = 1.0).                                                         ║
 * ║                                                                            ║
 * ║ Zoom positions are the patent infinity-focus states at 16.48, 28.20, and  ║
 * ║ 48.50 mm. Zoom-only variable gaps are D4, D14, D16, and D18. GR1 reverses ║
 * ║ direction between the intermediate and tele states. The stop moves with    ║
 * ║ GR2.                                                                       ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent identifies GR3 as the ║
 * ║ axial focus group but publishes no Example 1 close-focus spacing table.    ║
 * ║ All var pairs therefore retain the published infinity state at both ends;  ║
 * ║ Sony's 0.25-0.30 m MFD remains product metadata only.                      ║
 * ║                                                                            ║
 * ║ The unshown, unparameterized cover glass stated between GR4 and IMG is      ║
 * ║ excluded. D18 retains the patent's source vertex-to-IMG separation and is    ║
 * ║ modeled as air; no air-equivalent plate correction can be computed because  ║
 * ║ the patent publishes neither cover-glass thickness nor refractive index.     ║
 * ║                                                                            ║
 * ║ Semi-diameters are inferred, not patent-listed. Non-stop SDs begin with    ║
 * ║ the maximum paraxial marginal-plus-chief-ray envelope over all three zoom  ║
 * ║ states, using the project-default 0.60 field fraction and conservative     ║
 * ║ clearance. Figure 1 then refines the L1 envelope to 12.2/11.8 mm; surface  ║
 * ║ 2A stops short of the drawn rim at the largest validator-safe slope. The   ║
 * ║ stop radius is derived from the design f-number at each zoom station.      ║
 * ║ The original calibration used patent f/Fno and entrance pupil              ║
 * ║ magnification. The final set passes                                        ║
 * ║ image-circle, edge-thickness, rim-slope, conic-domain,                     ║
 * ║ cross-gap-intrusion, and off-axis-containment checks.                      ║
 * ║                                                                            ║
 * ║ Glass names are catalog-coordinate identifications, not supplier claims.    ║
 * ║ nC/nF/ng/dPgF values are catalog-derived from HOYA's 2026-06-01 optical     ║
 * ║ glass data where the coordinate match is spectrally unambiguous. L9's       ║
 * ║ 806-407 coordinate resolves to the coefficient-backed NBFD13 family; the    ║
 * ║ NBFD13/M-NBFD130 suffix remains a physical-form distinction, not a supplier ║
 * ║ claim.                                                                       ║
 * ║                                                                            ║
 * ║ NOTE ON PARTIAL DISPERSION:                                                ║
 * ║   The patent prints only N and ν (¶0151, Table 1): no PgF, no ΔPgF and no  ║
 * ║   normal-line formula of its own. `dPgF` is the PgF of each element's      ║
 * ║   authored nC/nF/ng minus the engine's normal line (0.6438 − 0.001682·νd), ║
 * ║   not a deviation from the 0.64833 − 0.00180·νd line. L1 and L5 keep       ║
 * ║   four-decimal values that agree with their line indices within 0.0003.    ║
 * ║   The trace uses the authored line indices, so `dPgF` only annotates them. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-epz1650mmf3556oss",
  maker: "Sony",
  name: "SONY E PZ 16-50mm f/3.5-5.6 OSS",
  subtitle: "US 2015/0316753 A9 — Example 1; production correlation inferred",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "16-50mm f/3.5-5.6 (MARKETED)",
      "16.48-48.50mm f/3.61-5.77 (PATENT)",
      "4 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
      "OPTICAL STEADYSHOT",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: [16, 50], design: [16.480902, 48.506052] },
  },

  source: {
    patentNumber: "US 2015/0316753 A9",
    patentYear: 2015,
    authors: ["Masaharu Hosoi"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -14.7281,
      glass: "TAFD30 (HOYA; patent νd=40.80, pre-2019 catalog rounding)",
      role: "GR1 first negative meniscus; rear surface is aspherical.",
      diagramLabel: "L1",
      dPgF: -0.0093,
      nC: 1.87657,
      nF: 1.89821,
      ng: 1.91045,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.32,
      indexReference: "d",
      focalLengthMm: 47.5267,
      glass: "E-FDS2 (HOYA)",
      role: "GR1 second positive meniscus.",
      diagramLabel: "L2",
      dPgF: 0.033851,
      nC: 1.98812,
      nF: 2.04003,
      ng: 2.07352,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      focalLengthMm: 19.9718,
      glass: "M-LAC130 (HOYA)",
      role: "Object-side positive element of GR2 front subgroup G2f; both surfaces are aspherical.",
      diagramLabel: "L3",
      dPgF: -0.007538,
      nC: 1.68954,
      nF: 1.70258,
      ng: 1.70971,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 16.9652,
      glass: "FCD1 (HOYA)",
      role: "Positive component of the cemented L4/L5 pair in GR2 front subgroup G2f.",
      diagramLabel: "L4",
      cemented: "D1",
      dPgF: 0.032056,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.34,
      indexReference: "d",
      focalLengthMm: -8.2421,
      glass: "NBFD10 (HOYA)",
      role: "Negative component of the cemented L4/L5 pair in GR2 front subgroup G2f.",
      diagramLabel: "L5",
      cemented: "D1",
      dPgF: -0.0021,
      nC: 1.82742,
      nF: 1.84975,
      ng: 1.86268,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: 22.3245,
      glass: "FC5 (HOYA)",
      role: "Image-side positive element of GR2 front subgroup G2f.",
      diagramLabel: "L6",
      dPgF: 0.005027,
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: 46.8674,
      glass: "FC5 (HOYA)",
      role: "GR2 rear subgroup G2r; the patent moves this element laterally for shake correction.",
      diagramLabel: "L7",
      dPgF: 0.005027,
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49594,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6968,
      vd: 55.46,
      indexReference: "d",
      focalLengthMm: -19.3463,
      glass: "697-555 — HOYA LAC14/M-LAC14 coordinate family",
      role: "GR3 negative focus-group element; the rear surface is aspherical, but close-focus travel is unpublished.",
      diagramLabel: "L8",
      dPgF: -0.007523,
      nC: 1.69297,
      nF: 1.70553,
      ng: 1.71235,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: 45.7715,
      glass: "806407 — NBFD13 / M-NBFD130 coordinate family (supplier unresolved)",
      role: "GR4 positive biconvex element; both surfaces are aspherical.",
      diagramLabel: "L9",
      dPgF: -0.008339,
      nC: 1.80022,
      nF: 1.82001,
      ng: 1.83123,
    },
  ],

  surfaces: [
    { label: "1", R: 172.566, d: 1.08, sd: 12.2, medium: 1 },
    {
      label: "2A",
      R: 12.058,
      d: 4,
      sd: 11.8,
      asphere: { K: -0.083257779, A4: -1.2058e-5, A6: -3.9503e-7, A8: 3.1552e-9, A10: -2.6164e-11, A12: 0, A14: 0 },
    },
    { label: "3", R: 19.766, d: 2.018, sd: 9.9, medium: 2 },
    { label: "4", R: 32.048, sd: 9.5 },
    {
      label: "5A",
      R: 13.01,
      d: 2.283,
      sd: 6.5,
      medium: 3,
      asphere: { K: 0, A4: -6.3285e-6, A6: -5.1744e-7, A8: 1.0598e-8, A10: -2.0601e-10, A12: 0, A14: 0 },
    },
    {
      label: "6A",
      R: 199,
      d: 1.5,
      sd: 6.2,
      asphere: { K: 0, A4: 2.3738e-6, A6: -2.1246e-7, A8: 6.8489e-10, A10: -7.7144e-11, A12: 0, A14: 0 },
    },
    { label: "STO", R: "flat", d: 0.5 },
    { label: "8", R: 11.062, d: 3.353, sd: 5.8, medium: 4 },
    { label: "9", R: -31.892, d: 0.7, sd: 5.3, medium: 5 },
    { label: "10", R: 8.85, d: 1.526, sd: 5.3 },
    { label: "11", R: 15.567, d: 2.5, sd: 5.8, medium: 6 },
    { label: "12", R: -34.265, d: 0.5, sd: 6.1 },
    { label: "13", R: 24.398, d: 1.601, sd: 6.1, medium: 7 },
    { label: "14", R: -351.765, sd: 6.1 },
    { label: "15", R: -24.72, d: 0.79, sd: 5.9, medium: 8 },
    {
      label: "16A",
      R: 30.038,
      sd: 6,
      asphere: { K: -0.8909625, A4: 6.1843e-5, A6: -2.7882e-7, A8: -1.0586e-9, A10: 1.0602e-11, A12: 0, A14: 0 },
    },
    {
      label: "17A",
      R: 93.933,
      d: 2.19,
      sd: 7.2,
      medium: 9,
      asphere: { K: 0, A4: -8.8132e-5, A6: 7.6707e-7, A8: -8.7771e-9, A10: 7.0405e-11, A12: 0, A14: 0 },
    },
    { label: "18A", R: -60.132, sd: 7.5, asphere: { K: 0, A4: -9e-5, A6: 6.3117e-7, A8: -8.4535e-9, A10: 6.5005e-11, A12: 0, A14: 0 } },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 16.48, nominalFNumber: 3.61, label: "Wide" },
      { focalLengthMm: 28.2, nominalFNumber: 4.77 },
      { focalLengthMm: 48.5, nominalFNumber: 5.77, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.25,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent identifies GR3 as the axial focus group, but Example 1 publishes only infinity-focus zoom spacings. The authored model therefore preserves infinity focus at both focus endpoints; Sony's marketed MFD is 0.25-0.30 m.",
  },

  gaps: {
    "4": {
      label: "D4",
      values: [
        [23.043, 23.043],
        [10.23, 10.23],
        [0.8, 0.8],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [3.325, 3.325],
        [4.565, 4.565],
        [9.669, 9.669],
      ],
    },
    "16A": {
      label: "D16",
      values: [
        [3.775, 3.775],
        [5.594, 5.594],
        [6.41, 6.41],
      ],
    },
    "18A": {
      label: "D18",
      values: [
        [13.817, 13.817],
        [20.784, 20.784],
        [26.837, 26.837],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32, 36], maxFNumber: 36, blades: 7 },

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "4" },
    { text: "GR2", fromSurface: "5A", toSurface: "14" },
    { text: "GR3", fromSurface: "15", toSurface: "16A" },
    { text: "GR4", fromSurface: "17A", toSurface: "18A" },
  ],
  doublets: [{ text: "L4/L5", fromSurface: "8", toSurface: "10" }],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
