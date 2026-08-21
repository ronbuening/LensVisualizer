import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 600mm f/4 L IS USM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 6,115,188 A, Numerical Example 22 (Nishio/Ogawa/Misaka; Canon). ║
 * ║ Production correlation: Canon EF600mm f/4L IS USM, marketed Sep. 1999.     ║
 * ║                                                                            ║
 * ║ The patent source path contains 17 media elements / 13 groups when the     ║
 * ║ front protection glass (HG) and rear filter (FL) are counted. Per current  ║
 * ║ LensVisualizer rules, HG, FL, and the inactive flare-cutter plane (FC) are ║
 * ║ omitted here, leaving 15 active elements / 11 air-separated groups. The    ║
 * ║ omitted 2.00 mm rear filter is preserved by replacing the R29→IP path with ║
 * ║ an air-equivalent final spacing of 117.098974102 mm. No scaling is applied.║
 * ║                                                                            ║
 * ║ Design quantities: patent f = 585.20 mm, Fno = 4.12, 2ω = 4.2°. The       ║
 * ║ actual active arrays compute EFL ≈ 585.327789 mm. nominalFno therefore     ║
 * ║ uses the modeled/design value 4.12; 600 mm and f/4 remain marketing fields.║
 * ║                                                                            ║
 * ║ FOCUS STATUS: CONSTRAINED_RECONSTRUCTION. The patent specifies that the    ║
 * ║ cemented negative L2 focus unit moves rigidly toward the image side as     ║
 * ║ object distance decreases, but Example 22 gives no finite-distance row.    ║
 * ║ Canon's published 5.5 m MFD supplies the scalar constraint. The solved     ║
 * ║ travel is +18.829163964 mm: D12 increases 45.86→64.689163964 mm while      ║
 * ║ D15 decreases 98.91→80.080836036 mm, conserving D12+D15.                  ║
 * ║                                                                            ║
 * ║ The L3b subunit is the transverse image-stabilization unit. Its decentering║
 * ║ is a mechanical/2D motion, not an axial focus variable, so no axial IS     ║
 * ║ state is authored.                                                        ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: the patent does not tabulate clear apertures. SDs below    ║
 * ║ were derived from exact spherical-ray envelopes at infinity and the close ║
 * ║ reconstruction, then constrained by Fig. 85 proportions and current edge, ║
 * ║ rim-slope, shared-gap, and off-axis checks. The tight R6→R7 2.59 mm air   ║
 * ║ gap requires gapSagFrac = 0.96 at sd = 57.2 mm; the surfaces do not cross  ║
 * ║ (≈0.110 mm positive rim clearance). Default off-axis extreme bundles may  ║
 * ║ vignette at the front element, not within a cemented interface.            ║
 * ║                                                                            ║
 * ║ GLASS: Example 22 publishes N/ν coordinates but no per-element nC, nF, ng,║
 * ║ or dPgF. The d-line interpretation is catalog-supported; no missing line   ║
 * ║ indices or anomalous-dispersion values are invented. Generic class/code    ║
 * ║ labels are retained where the vendor is unresolved.                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-600mm-f4l-is-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 22; production-correlated",
  specs: [
    "15 modeled elements / 11 groups",
    "Patent f = 585.20 mm; computed EFL ≈ 585.328 mm",
    "Design F/4.12; marketed f/4",
    "2ω = 4.2°",
    "Inner focus + transverse IS",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 585.327789123,
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,115,188 A",
  patentAuthors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2000,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a-1",
      label: "L1a front positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      fl: 365.989798,
      glass: "497815/497816 low-dispersion crown class (vendor unresolved; Canon-correlated UD)",
      role: "Single positive front subunit L1a; front collector and low-dispersion correction.",
    },
    {
      id: 2,
      name: "L1b-1",
      label: "L1b positive",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      fl: 324.493634,
      glass: "497815/497816 low-dispersion crown class (vendor unresolved; Canon-correlated UD)",
      role: "Positive member of the net-negative middle subunit L1b.",
    },
    {
      id: 3,
      name: "L1b-2",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      indexReference: "d",
      fl: -230.532155,
      glass: "835427 high-index lanthanum class (vendor unresolved)",
      role: "Negative member that makes L1b net negative and balances the front positive power.",
    },
    {
      id: 4,
      name: "L1c-1",
      label: "L1c fluorite positive",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      fl: 270.260667,
      glass: "Fluorite (CaF2), manufacturer-correlated",
      role: "Positive fluorite-coordinate member in the positive rear subunit L1c.",
    },
    {
      id: 5,
      name: "L1c-2",
      label: "L1c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: -623.617174,
      glass: "516641 crown class (S-BSL7/K-BK7 coordinate equivalents; vendor unresolved)",
      role: "Negative meniscus completing the net-positive L1c subunit.",
    },
    {
      id: 6,
      name: "L2-1",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      indexReference: "d",
      fl: 215.019726,
      glass: "805254 dense-flint class (N-SF6/S-TIH6 family; vendor unresolved)",
      role: "Positive front member of the cemented L2 inner-focus doublet.",
      cemented: "L2",
    },
    {
      id: 7,
      name: "L2-2",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      indexReference: "d",
      fl: -102.598687,
      glass: "835427 high-index lanthanum class (vendor unresolved)",
      role: "Negative rear member; the cemented L2 unit is net negative and translates for focus.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L3a-1",
      label: "L3a negative",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      fl: -151.002645,
      glass: "847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9)",
      role: "Negative front member of the cemented, net-positive L3a subunit.",
      cemented: "L3a",
    },
    {
      id: 9,
      name: "L3a-2",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      fl: 91.77353,
      glass: "603606/603607 SK14/BSM14 crown class (vendor unresolved)",
      role: "Positive rear member that makes L3a net positive ahead of the IS subunit.",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3b-1",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      fl: 93.422746,
      glass: "847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9)",
      role: "Positive front member of the cemented pair inside the transverse IS subunit L3b.",
      cemented: "L3b-D1",
    },
    {
      id: 11,
      name: "L3b-2",
      label: "L3b cemented negative",
      type: "Biconcave Negative",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      fl: -68.565838,
      glass: "603606/603607 SK14/BSM14 crown class (vendor unresolved)",
      role: "Negative rear member of the L3b cemented pair.",
      cemented: "L3b-D1",
    },
    {
      id: 12,
      name: "L3b-3",
      label: "L3b negative singlet",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      fl: -76.551196,
      glass: "804466 lanthanum class (vendor unresolved)",
      role: "Negative singlet completing the strongly net-negative transverse IS subunit L3b.",
    },
    {
      id: 13,
      name: "L3c-1",
      label: "L3c positive singlet",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      fl: 148.247444,
      glass: "720437 lanthanum-flint class (vendor unresolved)",
      role: "Positive singlet at the front of the net-positive L3c subunit.",
    },
    {
      id: 14,
      name: "L3c-2",
      label: "L3c cemented positive",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 35,
      indexReference: "d",
      fl: 75.722402,
      glass: "750350 lanthanum-flint class (vendor unresolved)",
      role: "Positive front member of the rear L3c cemented doublet.",
      cemented: "L3c-D1",
    },
    {
      id: 15,
      name: "L3c-3",
      label: "L3c cemented negative",
      type: "Biconcave Negative",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      fl: -121.262876,
      glass: "847238/847239 dense-flint class (vendor unresolved; source vd rounded 23.9)",
      role: "Negative rear member; the complete L3c subunit remains strongly net positive.",
      cemented: "L3c-D1",
    },
  ],

  /* ── Surface prescription: patent R3–R29, with R16 relabeled STO ── */
  surfaces: [
    { label: "3", R: 231.902, d: 17.1, nd: 1.496999, elemId: 1, sd: 77.0 },
    { label: "4", R: -822.901, d: 43.59, nd: 1.0, elemId: 0, sd: 77.0 },
    { label: "5", R: 150.427, d: 13.97, nd: 1.496999, elemId: 2, sd: 63.8 },
    { label: "6", R: 2167.786, d: 2.59, nd: 1.0, elemId: 0, sd: 57.2 },
    { label: "7", R: -949.347, d: 5.9, nd: 1.834807, elemId: 3, sd: 57.2 },
    { label: "8", R: 242.065, d: 40.72, nd: 1.0, elemId: 0, sd: 60.5 },
    { label: "9", R: 114.154, d: 13.86, nd: 1.43387, elemId: 4, sd: 53.0 },
    { label: "10", R: 4153.906, d: 0.5, nd: 1.0, elemId: 0, sd: 53.0 },
    { label: "11", R: 83.069, d: 5.0, nd: 1.51633, elemId: 5, sd: 47.5 },
    { label: "12", R: 64.68, d: 45.86, nd: 1.0, elemId: 0, sd: 45.0 },
    { label: "13", R: 543.282, d: 4.65, nd: 1.805181, elemId: 6, sd: 33.0 },
    { label: "14", R: -253.137, d: 3.3, nd: 1.834807, elemId: 7, sd: 33.0 },
    { label: "15", R: 130.218, d: 98.91, nd: 1.0, elemId: 0, sd: 33.0 },
    { label: "STO", R: 1e15, d: 7.02, nd: 1.0, elemId: 0, sd: 20.046530551 },
    { label: "17", R: 138.0, d: 2.0, nd: 1.846658, elemId: 8, sd: 20.0 },
    { label: "18", R: 65.924, d: 4.66, nd: 1.603112, elemId: 9, sd: 20.0 },
    { label: "19", R: -335.894, d: 12.07, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "20", R: 102.528, d: 2.75, nd: 1.846658, elemId: 10, sd: 16.5 },
    { label: "21", R: -341.854, d: 1.65, nd: 1.603112, elemId: 11, sd: 16.5 },
    { label: "22", R: 47.129, d: 3.77, nd: 1.0, elemId: 0, sd: 15.3 },
    { label: "23", R: -149.43, d: 1.6, nd: 1.804, elemId: 12, sd: 15.3 },
    { label: "24", R: 105.15, d: 3.52, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "25", R: 121.151, d: 2.8, nd: 1.72, elemId: 13, sd: 15.5 },
    { label: "26", R: -888.536, d: 6.96, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "27", R: 79.378, d: 4.27, nd: 1.7495, elemId: 14, sd: 15.5 },
    { label: "28", R: -194.536, d: 1.9, nd: 1.846658, elemId: 15, sd: 15.5 },
    { label: "29", R: 218.38, d: 117.098974102, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {},

  var: {
    "12": [45.86, 64.689163964],
    "15": [98.91, 80.080836036],
  },
  varLabels: [
    ["12", "L2 front gap"],
    ["15", "L2 rear gap"],
  ],

  groups: [
    { text: "L1a (+)", fromSurface: "3", toSurface: "4" },
    { text: "L1b (−)", fromSurface: "5", toSurface: "8" },
    { text: "L1c (+)", fromSurface: "9", toSurface: "12" },
    { text: "L2 FOCUS (−)", fromSurface: "13", toSurface: "15" },
    { text: "L3a (+)", fromSurface: "17", toSurface: "19" },
    { text: "L3b IS (−)", fromSurface: "20", toSurface: "24" },
    { text: "L3c (+)", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b-D1", fromSurface: "20", toSurface: "22" },
    { text: "L3c-D1", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 5.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent L2 cemented doublet translates 18.829163964 mm imageward; D12 increases and D15 decreases by the same amount from infinity to Canon's published 5.5 m MFD. L3b is the transverse IS subunit and has no authored axial state.",

  nominalFno: 4.12,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,

  /* The source geometry has a near-contact R6→R7 air gap at the required f/4 aperture. */
  gapSagFrac: 0.96,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
