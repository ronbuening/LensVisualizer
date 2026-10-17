import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — SIGMA 45mm F2.8 DG DN | Contemporary             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2019-211703 A, Numerical Example 1, Sigma.        ║
 * ║  Compact full-frame mirrorless normal prime; positive G1, fixed    ║
 * ║  stop, positive moving G2, negative fixed G3.                      ║
 * ║  8 elements / 7 air-spaced groups, 4 aspherical surfaces on        ║
 * ║  2 aspherical glass elements.                                      ║
 * ║  Focus: internal focus by G2 only; d5 closes and d10 opens.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling applied. Patent design focal length is 43.93 mm;     ║
 * ║    marketed focal length is 45 mm.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent column 有効径 lists full effective diameters.        ║
 * ║    Lens-surface values below are stored as renderer                ║
 * ║    semi-diameters, i.e. patent effective diameter / 2. The stop    ║
 * ║    radius is derived from the design f-number.                     ║
 * ║                                                                    ║
 * ║  NOTE ON PARTIAL DISPERSION:                                       ║
 * ║    The patent lists PgF per glass. `dPgF` is PgF minus the         ║
 * ║    engine's normal line (0.6438 − 0.001682·νd), not the patent's   ║
 * ║    ΔPgF = PgF − 0.64833 + 0.00180·νd, which the analysis quotes.   ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER / SENSOR GLASS:                                    ║
 * ║    Patent surfaces 17-18 are a plane-parallel filter plate F       ║
 * ║    (d = 2.5000 mm, nd 1.51633, νd 64.14, PgF 0.5353) followed by   ║
 * ║    BF = 2.0000 mm. It is modeled in `rearPlates` (traced, not      ║
 * ║    drawn); surface 16 keeps the patent d16 = 16.3216 mm to the     ║
 * ║    plate (paraxial air-equivalent: 19.9703 mm).                    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ Does not include barrel, mount, actuator, hood, or aperture  ║
 * ║      blade mechanics (filter plate F: `rearPlates`)               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-45mm-f28-dg-dn-contemporary",
  maker: "Sigma",
  name: "SIGMA 45mm f/2.8 DG DN | Contemporary",
  subtitle: "JP 2019-211703 A — Numerical Example 1",

  catalog: {
    lensMounts: ["l-mount", "sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "8 elements / 7 groups",
      "f = 43.93 mm design / 45 mm marketed",
      "F2.90 design / F2.8 marketed",
      "2ω = 51.10°",
      "4 aspherical surfaces on 2 elements",
      "Internal G2 focus, 3.480 mm travel",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 45, design: 43.93 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP 2019-211703 A",
    patentYear: 2019,
    authors: ["Yukihiro Yamamoto"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.7725,
      vd: 49.5,
      focalLengthMm: 35.62,
      glass: "M-TAF105 (HOYA)",
      apd: false,
      role: "Aspherical high-index front collector; starts convergence and corrects spherical aberration/coma.",
      dPgF: -0.008641,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: -50.02,
      glass: "E-CF6 (HOYA)",
      apd: false,
      role: "Negative meniscus behind L1; relaxes marginal-ray angle before the stop and G2.",
      dPgF: 0.002816,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -14.26,
      glass: "E-FD15 (HOYA)",
      apd: false,
      role: "High-dispersion negative member of the G2 cemented doublet.",
      cemented: "D1",
      dPgF: 0.009544,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      focalLengthMm: 16.6,
      glass: "TAFD32 (HOYA)",
      apd: false,
      role: "High-index positive member of the G2 cemented doublet; achromatizes L3 and reduces decenter sensitivity.",
      cemented: "D1",
      dPgF: -0.007092,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58913,
      vd: 61.25,
      focalLengthMm: 25.55,
      glass: "M-BACD5N (HOYA)",
      apd: false,
      role: "Main positive power of the moving G2 focus group; aspheres stabilize spherical aberration and astigmatism through focus.",
      dPgF: -0.003478,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.26,
      focalLengthMm: -39.19,
      glass: "S-NBH52V (OHARA)",
      apd: false,
      role: "Strong negative front member of G3; expands the image circle and contributes negative Petzval power.",
      dPgF: -0.003747,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.05,
      focalLengthMm: -79.59,
      glass: "FF8 (HOYA)",
      apd: false,
      role: "Rear negative meniscus for astigmatism and field-balance correction near the image side.",
      dPgF: 0.017434,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.98612,
      vd: 16.48,
      focalLengthMm: 83.6,
      glass: "FDS16-W (HOYA)",
      apd: "patent",
      apdNote:
        "Patent PgF = 0.6656; ΔPgF = +0.0469 by the patent's line (PgF − 0.64833 + 0.00180·νd), runtime dPgF +0.04952.",
      role: "High-index, high-dispersion anomalous-dispersion positive rear element for lateral chromatic correction.",
      dPgF: 0.049519,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 23.3681,
      d: 3.7585,
      sd: 10.005,
      medium: 1,
      asphere: {
        K: 0.7548,
        A4: -1.0943e-5,
        A6: -9.0526e-8,
        A8: 3.3856e-9,
        A10: -6.8374e-11,
        A12: 7.5676e-13,
        A14: -4.8496e-15,
        A16: 1.5425e-17,
        A18: -1.8709e-20,
        A20: 0,
      },
    },
    {
      label: "2A",
      R: 144.1153,
      d: 0.308,
      sd: 9.15,
      asphere: {
        K: 0,
        A4: -2.3116e-6,
        A6: 1.4773e-7,
        A8: -4.0502e-9,
        A10: 7.7863e-11,
        A12: -9.6225e-13,
        A14: 6.369e-15,
        A16: -2.0898e-17,
        A18: 2.692e-20,
        A20: 0,
      },
    },
    { label: "3", R: 45.1236, d: 0.8, sd: 8.37, medium: 2 },
    { label: "4", R: 16.3472, d: 4.6499, sd: 7.29 },
    // Patent JP 2019-211703 A, Numerical Example 1 prescription table (pp. 20–21), prints a 12.90 mm effective diameter at the stop.
    { label: "STO", R: "flat" },
    { label: "6", R: -12.213, d: 0.8, sd: 6.425, medium: 3 },
    { label: "7", R: 55.6607, d: 4.2213, sd: 7.27, medium: 4 },
    { label: "8", R: -18.8353, d: 0.15, sd: 7.8 },
    {
      label: "9A",
      R: 37.4761,
      d: 4.7493,
      sd: 8.95,
      medium: 5,
      asphere: {
        K: -2.3178,
        A4: -2.4796e-6,
        A6: -9.6746e-9,
        A8: -5.6804e-10,
        A10: 3.744e-11,
        A12: -7.5858e-13,
        A14: 7.5576e-15,
        A16: -3.5787e-17,
        A18: 6.4474e-20,
        A20: 0,
      },
    },
    {
      label: "10A",
      R: -23.9712,
      sd: 9.25,
      asphere: {
        K: -2.65,
        A4: -4.7357e-6,
        A6: 1.597e-8,
        A8: 3.7484e-10,
        A10: -1.2512e-11,
        A12: 2.6612e-13,
        A14: -3.0274e-15,
        A16: 1.8357e-17,
        A18: -4.2619e-20,
        A20: 0,
      },
    },
    { label: "11", R: 109.6497, d: 0.9857, sd: 9.485, medium: 6 },
    { label: "12", R: 21.1832, d: 8.7012, sd: 9.6 },
    { label: "13", R: -19.7354, d: 0.8, sd: 10.935, medium: 7 },
    { label: "14", R: -29.9543, d: 0.15, sd: 11.83 },
    { label: "15", R: 95.8651, d: 2.5968, sd: 14.1, medium: 8 },
    { label: "16", R: -580.7065, d: 16.3216, sd: 14.36 },
  ],

  focus: {
    closeFocusM: 0.24,
    description:
      "Internal focusing by translating G2 (L3-L5) 3.480 mm toward the object; G1, stop, and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    STO: { label: "G1/stop → G2", values: [[8.3114, 4.8314]] },
    "10A": { label: "G2 → G3", values: [[1.7666, 5.2466]] },
  },

  aperture: {
    nominalFNumber: 2.9,
    fStops: [2.9, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
    bladeRoundedness: 1,
  },

  /* ── Filter F (patent surfaces 17–18): traced, not drawn ── */
  rearPlates: [
    {
      label: "F",
      thicknessMm: 2.5,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7 (OHARA)",
      dPgF: -0.00062,
      gapAfterMm: 2.0,
      source: "JP 2019-211703 A, Numerical Example 1 surfaces 17–18 (patent PgF 0.5353, BF 2.0000)",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "4" },
    { text: "G2 focus", fromSurface: "6", toSurface: "10A" },
    { text: "G3", fromSurface: "11", toSurface: "16" },
  ],
  doublets: [{ text: "D1", fromSurface: "6", toSurface: "8" }],

  layout: { scFill: 0.56, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
