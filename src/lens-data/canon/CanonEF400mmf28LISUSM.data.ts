import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 400mm f/2.8 L IS USM                                                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 6,115,188 A, Numerical Example 25 (Nishio / Ogawa / Misaka; Canon Kabushiki Kaisha).             ║
 * ║ Production correlation: Canon EF 400mm f/2.8L IS USM, marketed September 1999.                              ║
 * ║                                                                                                              ║
 * ║ Modeled prescription: 16 optical elements / 12 air-separated groups, all spherical.                         ║
 * ║ Canon markets 17 elements / 13 groups because its published count includes both the front protection glass ║
 * ║ and the rear filter. The protection glass HG is retained here; the rear filter FL is omitted under current  ║
 * ║ project rules, as is the inactive flare-cutter plane FC.                                                     ║
 * ║                                                                                                              ║
 * ║ No dimensional scaling is applied. The patent publishes f = 392.15 mm, Fno = 2.9, and 2ω = 6.3°.            ║
 * ║ Marketing metadata remains separate: 400 mm f/2.8, 3.0 m minimum focus, 0.15× maximum magnification.        ║
 * ║ nominalFno therefore uses the modeled/patent value 2.9 rather than the marketed f/2.8.                      ║
 * ║                                                                                                              ║
 * ║ Rear normalization: patent R29→IP contains a 2.20 mm plane-parallel filter and an inactive FC plane.        ║
 * ║ Removing those planes gives a literal air-equivalent R29→IP distance of 70.680871512 mm. The rounded source  ║
 * ║ prescription focuses +0.016884094 mm farther back, so the active model uses 70.697755606 mm to terminate at ║
 * ║ the independently computed paraxial infinity focus.                                                         ║
 * ║                                                                                                              ║
 * ║ Focus status — CONSTRAINED_RECONSTRUCTION. The patent fixes L2 as one cemented group translating toward the ║
 * ║ image side but publishes no close-focus spacing table. Close focus is solved from Canon's 3.0 m focal-plane ║
 * ║ MFD with the mechanism constraint D12 += δ, D15 -= δ, D12 + D15 = 123.19 mm. The solution is                ║
 * ║ δ = 18.794827332 mm, giving D12 = 43.154827332 mm and D15 = 80.035172668 mm.                                ║
 * ║                                                                                                              ║
 * ║ Spectral discipline: Example 25 publishes nd/νd coordinates only. It does not publish per-element nC, nF,  ║
 * ║ ng, or dPgF, so those fields are intentionally omitted rather than inferred from equivalent catalog glass.  ║
 * ║ Glass strings therefore use source-coordinate classes/Unmatched labels unless the production correlation is ║
 * ║ sufficient to identify the unique fluorite-coordinate element as synthetic CaF₂.                            ║
 * ║                                                                                                              ║
 * ║ Semi-diameters are inferred, not patent-tabulated. They are constrained jointly by the Fig. 88 optical       ║
 * ║ section, the 163 mm production barrel diameter, the F/2.9-implied stop/pupil geometry, on-axis and configured ║
 * ║ off-axis ray fans at infinity and 3.0 m, and the current edge-thickness/rim-slope/shared-gap geometry rules. ║
 * ║ R7 is limited by the 2.68 mm D6 shared-gap clearance; R23/R24 are reduced at the intended L3b air-lens gap.  ║
 * ║ No layout control is used to hide an invalid surface.                                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-400mm-f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 25; production correlation to EF 400mm f/2.8 L IS USM",
  specs: [
    "400mm f/2.8 (marketed)",
    "Patent f = 392.15 mm, F/2.9",
    "17 elements / 13 groups marketed; 16 / 12 modeled after rear-filter omission",
    "3.0 m minimum focus",
    "1 fluorite + 2 UD elements (manufacturer correlation)",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 392.15,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,115,188 A",
  patentAuthors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2000,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Protection glass",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 coefficient proxy (patent 516641; production supplier unspecified)",
      role: "Front protection glass retained from the patent and Canon's production element count.",
    },
    {
      id: 2,
      name: "L1a",
      label: "L1a positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      fl: 303.186311,
      glass: "S-FPL51 coefficient proxy (patent 497815; production supplier unspecified; UD-class correlation)",
      role: "Single positive front subunit; one of the two production-correlated UD-class elements.",
    },
    {
      id: 3,
      name: "L1b-P",
      label: "L1b positive",
      type: "Plano-Convex Positive",
      nd: 1.496999,
      vd: 81.5,
      fl: 227.594019,
      glass: "S-FPL51 coefficient proxy (patent 497815; production supplier unspecified; UD-class correlation)",
      role: "Positive member of the negative-power L1b middle subunit; second production-correlated UD-class element.",
    },
    {
      id: 4,
      name: "L1b-N",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      fl: -165.488385,
      glass: "TAFD5G coefficient proxy (patent 835427; production supplier unspecified)",
      role: "Negative member completing the net-negative L1b middle subunit.",
    },
    {
      id: 5,
      name: "L1c-P",
      label: "L1c positive",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 212.185301,
      glass: "Synthetic fluorite (CaF₂; manufacturer-correlated)",
      role: "Unique fluorite-coordinate positive element in the rear L1c subunit.",
    },
    {
      id: 6,
      name: "L1c-N",
      label: "L1c negative",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: -462.297887,
      glass: "S-BSL7 coefficient proxy (patent 516641; production supplier unspecified)",
      role: "Negative meniscus completing the net-positive L1c rear subunit.",
    },
    {
      id: 7,
      name: "L2-P",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      fl: 194.582241,
      glass: "S-TIH6 coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Positive component of the cemented inner-focus group L2.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L2-N",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -80.042831,
      glass: "H-ZLaF50D coefficient proxy (patent 804466; production supplier unspecified)",
      role: "Negative component of the net-negative cemented inner-focus group L2.",
      cemented: "L2",
    },
    {
      id: 9,
      name: "L3a-N",
      label: "L3a negative",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      fl: -93.365654,
      glass: "PBH53 coefficient proxy (patent 847239; production supplier unspecified)",
      role: "Negative first component of the cemented, net-positive L3a subunit.",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3a-P",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      fl: 52.93004,
      glass: "E-LASF016 coefficient proxy (patent 772496; production supplier unspecified)",
      role: "Positive second component of L3a, converging the beam before the stabilization subunit.",
      cemented: "L3a",
    },
    {
      id: 11,
      name: "L3b-P",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      fl: 72.40268,
      glass: "PBH53 coefficient proxy (patent 847239; production supplier unspecified)",
      role: "Positive first component of the transversely movable L3b image-stabilization subunit.",
      cemented: "L3b-1",
    },
    {
      id: 12,
      name: "L3b-N1",
      label: "L3b negative 1",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      fl: -53.607318,
      glass: "S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)",
      role: "Negative cemented partner in the first L3b pair.",
      cemented: "L3b-1",
    },
    {
      id: 13,
      name: "L3b-N2",
      label: "L3b negative 2",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -53.979361,
      glass: "H-ZLaF50D coefficient proxy (patent 804466; production supplier unspecified)",
      role: "Separate negative element after the strongly curved L3b air lens; completes the net-negative IS subunit.",
    },
    {
      id: 14,
      name: "L3c-P1",
      label: "L3c positive 1",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      fl: 117.502293,
      glass: "S-BSM15 coefficient proxy (patent 623582; production supplier unspecified)",
      role: "First positive element of the rear L3c subunit.",
    },
    {
      id: 15,
      name: "L3c-P2",
      label: "L3c positive 2",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      fl: 53.972822,
      glass: "S-LAL12 coefficient proxy (patent 678553; production supplier unspecified)",
      role: "Positive component of the final cemented pair in L3c.",
      cemented: "L3c-2",
    },
    {
      id: 16,
      name: "L3c-N",
      label: "L3c negative",
      type: "Biconcave Negative",
      nd: 1.882997,
      vd: 40.8,
      fl: -80.89395,
      glass: "S-LAH58 coefficient proxy (patent 883408; production supplier unspecified)",
      role: "Negative partner of the final cemented pair; the pair remains net positive within L3c.",
      cemented: "L3c-2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 1e15, d: 6.0, nd: 1.51633, elemId: 1, sd: 72.0 },
    { label: "2", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 72.0 },
    { label: "3", R: 231.603, d: 19.3, nd: 1.496999, elemId: 2, sd: 72.0 },
    { label: "4", R: -419.344, d: 22.34, nd: 1.0, elemId: 0, sd: 72.0 },
    { label: "5", R: 113.114, d: 19.2, nd: 1.496999, elemId: 3, sd: 61.8 },
    { label: "6", R: 1e15, d: 2.68, nd: 1.0, elemId: 0, sd: 61.8 },
    { label: "7", R: -597.7, d: 6.25, nd: 1.834807, elemId: 4, sd: 53.3 },
    { label: "8", R: 180.537, d: 10.24, nd: 1.0, elemId: 0, sd: 53.3 },
    { label: "9", R: 94.288, d: 17.8, nd: 1.43387, elemId: 5, sd: 52.5 },
    { label: "10", R: -3674.804, d: 1.4, nd: 1.0, elemId: 0, sd: 52.5 },
    { label: "11", R: 64.7, d: 7.3, nd: 1.51633, elemId: 6, sd: 45.0 },
    { label: "12", R: 48.947, d: 24.36, nd: 1.0, elemId: 0, sd: 43.8 },
    { label: "13", R: 5483.964, d: 4.7, nd: 1.805181, elemId: 7, sd: 34.0 },
    { label: "14", R: -161.22, d: 3.2, nd: 1.804, elemId: 8, sd: 34.0 },
    { label: "15", R: 108.057, d: 98.83, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "STO", R: 1e15, d: 9.94, nd: 1.0, elemId: 0, sd: 19.938798067 },
    { label: "17", R: 125.228, d: 1.8, nd: 1.846658, elemId: 9, sd: 21.0 },
    { label: "18", R: 48.14, d: 6.5, nd: 1.772499, elemId: 10, sd: 21.0 },
    { label: "19", R: -255.466, d: 4.62, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "20", R: 76.097, d: 4.1, nd: 1.846658, elemId: 11, sd: 20.0 },
    { label: "21", R: -307.47, d: 1.7, nd: 1.622992, elemId: 12, sd: 20.0 },
    { label: "22", R: 37.546, d: 5.65, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "23", R: -133.531, d: 1.8, nd: 1.804, elemId: 13, sd: 16.8 },
    { label: "24", R: 64.683, d: 2.85, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "25", R: 86.153, d: 5.0, nd: 1.622992, elemId: 14, sd: 21.0 },
    { label: "26", R: -476.151, d: 0.2, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "27", R: 55.777, d: 9.7, nd: 1.6779, elemId: 15, sd: 21.0 },
    { label: "28", R: -98.88, d: 1.8, nd: 1.882997, elemId: 16, sd: 21.0 },
    { label: "29", R: 259.489, d: 70.697755606, nd: 1.0, elemId: 0, sd: 21.0 },
  ],

  asph: {},

  var: {
    "12": [24.36, 43.154827332],
    "15": [98.83, 80.035172668],
  },
  varLabels: [
    ["12", "D12 / pre-L2"],
    ["15", "D15 / post-L2"],
  ],

  groups: [
    { text: "L1", fromSurface: "3", toSurface: "12" },
    { text: "L2 / FOCUS", fromSurface: "13", toSurface: "15" },
    { text: "L3", fromSurface: "17", toSurface: "29" },
  ],

  doublets: [
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b-1", fromSurface: "20", toSurface: "22" },
    { text: "L3c-2", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 3.0,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-defined cemented L2 translates imageward. Canon's 3.0 m focal-plane MFD solves D12 = 24.36 + δ and D15 = 98.83 − δ with δ = 18.794827332 mm; D12 + D15 stays 123.19 mm. Rear FL/FC are omitted and R29→IMG is normalized to 70.697755606 mm at infinity.",

  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 8,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
