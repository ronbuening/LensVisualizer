import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PENTAX-DA 70mm F2.4 Limited                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,542,219 B2, Embodiment 1, Table 1 (Hoya / Saori).    ║
 * ║  Compact modified-Gauss intermediate telephoto for APS-C digital SLR.    ║
 * ║  6 elements / 5 groups, all spherical; L4-L5 is a cemented doublet.      ║
 * ║  Focus: production lens is modeled as unit focus; only BF changes.       ║
 * ║                                                                            ║
 * ║  NOTE ON SCALING:                                                         ║
 * ║    Patent native EFL is 67.7300 mm by paraxial trace (Table 1 states      ║
 * ║    f = 67.74 mm). R, d, and inferred clear apertures are scaled by        ║
 * ║    1.0335152966 so the data file renders at the manufacturer 70 mm focal   ║
 * ║    length. Conditional ratios are unchanged by this scale factor.         ║
 * ║                                                                            ║
 * ║  NOTE ON APERTURE:                                                        ║
 * ║    The patent example is FNO = 1:2.5. The stop position is patent-copied, ║
 * ║    and the stop radius is derived from nominalFNumber, the production     ║
 * ║    f/2.4 at the scaled 70 mm focal length.                                ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║    The patent omits clear apertures. SDs are estimated from paraxial      ║
 * ║    marginal/chief-ray envelopes, then constrained for renderer safety:    ║
 * ║    sd/|R| < 0.90, element front/rear ratios near unity, positive edge     ║
 * ║    thickness, and signed cross-gap clearance.                             ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-da-70mm-f24-limited",
  maker: "Pentax",
  name: "PENTAX DA 70mm f/2.4 Limited",
  subtitle: "US 7,542,219 B2 Embodiment 1 — Hoya / Saori",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "6 elements / 5 groups",
      "70 mm (scaled from patent f=67.74)",
      "f/2.4 nominal; patent FNO 1:2.5",
      "23° production field / 25.2° patent field",
      "All-spherical modified Gauss",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 70, design: 70 },
    fNumber: { marketing: 2.4, design: 2.5 },
  },

  source: {
    patentNumber: "US 7,542,219 B2",
    patentYear: 2009,
    authors: ["Masakazu Saori"],
    assignees: ["Hoya Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.69799,
      vd: 55.5,
      focalLengthMm: 57.8,
      glass: "S-LAL14 / LAC14 class lanthanum crown (698555 patent melt)",
      role: "Front positive meniscus; first member of the strong L1-L2 collector pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.68159,
      vd: 57.5,
      focalLengthMm: 60.3,
      glass: "Unmatched lanthanum crown (682575; no exact current public catalog match)",
      role: "Second positive meniscus; shares the front-group converging power governed by condition (1).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.79425,
      vd: 25.5,
      focalLengthMm: -26.2,
      glass: "Unmatched dense flint (794255; SF/S-TIH class)",
      role: "Diverging front-group meniscus; balances the L1-L2 positive pair and supplies negative Petzval power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.67648,
      vd: 44,
      focalLengthMm: -53.3,
      glass: "Unmatched barium flint (676440; BaF/BaSF class)",
      role: "Negative front member of the rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.54354,
      vd: 60.1,
      focalLengthMm: 175.7,
      glass: "Unmatched (544601 light barium crown; not SUMITA BAK2)",
      role: "Weak positive crown member cemented to L4; the L4-L5 pair is net negative in situ.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 35,
      focalLengthMm: 44.7,
      glass: "S-LAM66 (OHARA) / N-LASF45 (Schott), 801350",
      role: "Strong final positive element; its power and high-index glass are governed by conditions (3)-(5).",
    },
  ],

  surfaces: [
    { label: "1", R: 30.4577, d: 4.53713, sd: 17.36, medium: 1 },
    { label: "2", R: 116.50611, d: 0.1757, sd: 16.54 },
    { label: "3", R: 19.82489, d: 4.21674, sd: 15.5, medium: 2 },
    { label: "4", R: 34.98966, d: 3.92736, sd: 14.99 },
    { label: "5", R: 41.69717, d: 1.18854, sd: 11.68, medium: 3 },
    { label: "6", R: 13.70235, d: 6.78089, sd: 10.85 },
    { label: "STO", R: "flat", d: 2.87214 },
    { label: "7", R: -25.96294, d: 1.03352, sd: 9.51, medium: 4 },
    { label: "8", R: -94.22662, d: 1.65362, sd: 9.82, medium: 5 },
    { label: "9", R: -47.71843, d: 2.37709, sd: 10.34 },
    { label: "FAD", R: "flat", d: 0.51676, sd: 11.16 },
    { label: "10", R: 116.32938, d: 2.48044, sd: 11.37, medium: 6 },
    { label: "11", R: -51.16107, sd: 11.89 },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Unit focus; the complete optical cell translates forward, modeled by increasing back focus from infinity to 0.7 m.",
  },

  gaps: { "11": { label: "BF", values: [[39.06501, 47.89441]] } },

  aperture: {
    nominalFNumber: 2.4,
    fStops: [2.4, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
    bladeRoundedness: 0.8,
  },

  groups: [
    { text: "G1 positive front", fromSurface: "1", toSurface: "6" },
    { text: "G2 positive rear", fromSurface: "7", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { scFill: 0.62, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
