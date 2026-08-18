import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2011/0170195 A1, Example 1 (Muratani / Tanaka / Nikon).    ║
 * ║ Patent model: 9 refractive elements / 8 air-separated glass assemblies,    ║
 * ║ three power/kinematic groups, and one aspherical surface.                  ║
 * ║ Production correlation is strong but not exact: Nikon specifies 9 elements ║
 * ║ in 7 groups, while Example 1 has only one cemented pair and therefore 8.   ║
 * ║ No scale is applied; the patent is already a 40.00 mm design.              ║
 * ║                                                                            ║
 * ║ FOCUS-STATE STATUS: PUBLISHED                                               ║
 * ║   Example 1 publishes INF, β=-0.5 MID, and β=-1.0 CLD states. The runtime ║
 * ║   `var` uses the source-exact INF/CLD endpoints: d1a 2.96840→5.33230 mm   ║
 * ║   and d2 1.21000→25.70880 mm; d1b remains 4.00000 mm. Because the      ║
 * ║   runtime uses one linear focus parameter for both gaps, the published MID ║
 * ║   pair is verified separately rather than represented exactly by `var`.     ║
 * ║   The patent CLD object-to-physical-focal-plane distance is 0.15264661 m;  ║
 * ║   closeFocusM retains Nikon's 0.163 m marketed MFD as product metadata.    ║
 * ║                                                                            ║
 * ║ REAR NORMALIZATION                                                         ║
 * ║   Patent surfaces 19–20 are a 2.000 mm, nd=1.51680 low-pass plate plus   ║
 * ║   the final Bf interval. The plate is excluded. The final active S18→IMG   ║
 * ║   air spacing is 39.07132 mm, derived from the published INF ACTL.         ║
 * ║   This is +0.000699 mm from the independently computed S18 BFL. The raw    ║
 * ║   source Bf/ACBf reference-plane inconsistency is preserved in the audit.  ║
 * ║                                                                            ║
 * ║ STOP MODEL                                                                 ║
 * ║   The stop axial station is patent-published; its diameter is not. STO.sd  ║
 * ║   = 7.430942 mm is the physical stop radius solved from the actual front   ║
 * ║   prescription for the Table-1 design FNO=2.68. This is inferred geometry, ║
 * ║   not a source dimension.                                                   ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS                                                             ║
 * ║   The patent publishes no clear apertures. SDs are inferred from exact     ║
 * ║   meridional tracing of the full on-axis f/2.68 pupil plus the default     ║
 * ║   0.6× off-axis field bundles at INF/MID/CLD, then given approximately    ║
 * ║   mechanical margin where geometry permits. Figure-1 proportions refine    ║
 * ║   the G1 and rear-group envelopes. Edge thickness, actual rim slope,        ║
 * ║   conic domain, shared-band intrusion, off-axis containment, and a         ║
 * ║   geometry-forced hidden-trim proxy are checked by the Stage-2 script.     ║
 * ║                                                                            ║
 * ║ GLASS DATA                                                                 ║
 * ║   nd/νd are the patent's d-line coordinates. Catalog correlations provide ║
 * ║   modeled dispersion without claiming that Nikon used the named vendor.    ║
 * ║   Explicit nC, nF, ng, and dPgF fields remain unauthored.                  ║
 * ║                                                                            ║
 * ║ Manufacturer identity/specification sources:                               ║
 * ║ https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/      ║
 * ║   micro/af-s_dx_micro40mmf_28g/index.html                                  ║
 * ║ https://www.nikonusa.com/press-room/get-closer-to-clarity-the-new          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-dx-micro-nikkor-40mm-f28g",
  maker: "Nikon",
  name: "NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G",
  subtitle: "US 2011/0170195 A1 — Example 1; strong production correlate with documented group-count mismatch",
  specs: [
    "PATENT: 9 ELEMENTS / 8 GROUPS",
    "PRODUCTION: 9 ELEMENTS / 7 GROUPS",
    "40 mm MARKETED / 40.001 mm MODELED",
    "f/2.8 MARKETED / f/2.68 MODELED",
    "38°50′ MARKETED / 39.0° PATENT FIELD",
    "1 ASPHERICAL SURFACE / 1:1 PUBLISHED CLOSE STATE",
  ],

  focalLengthMarketing: 40,
  focalLengthDesign: 40.00107432241447,
  apertureMarketing: 2.8,
  apertureDesign: 2.68,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2011/0170195 A1",
  patentAuthors: ["Mami Muratani", "Issei Tanaka"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2011,
  elementCount: 9,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus (concave to image)",
      nd: 1.48749,
      vd: 70.4,
      fl: -35.974194643072416,
      glass: "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative first member of G1F; the patent places this meniscus closest to the object.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconvex Positive",
      nd: 1.80604,
      vd: 40.77,
      fl: 42.950519372541955,
      glass: "NBFD13 (HOYA catalog correlation; patent vendor unspecified)",
      role: "Positive second member of the negative-power G1F front subgroup.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.61272,
      vd: 58.73,
      fl: 23.87347932366506,
      glass: "BACD4 (HOYA catalog correlation; patent vendor unspecified)",
      role: "Strong positive first member of the positive-power G1R rear subgroup.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37,
      fl: -24.057353624629997,
      glass: "F3 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative second member of G1R, immediately preceding the aperture stop.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37,
      fl: -21.024612610044304,
      glass: "F3 (SUMITA catalog equivalent; production supplier unspecified)",
      cemented: "D1",
      role: "Negative front member of the cemented L21/L22 pair in positive-power G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      fl: 27.92786543505808,
      glass: "N-SK16 (SCHOTT catalog equivalent; production supplier unspecified)",
      cemented: "D1",
      role: "Positive rear member of the cemented L21/L22 pair; the junction carries this element's id and index.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive (rear asphere)",
      nd: 1.61881,
      vd: 63.73,
      fl: 31.5364910719777,
      glass: "M-PCD4 (HOYA catalog correlation; patent vendor unspecified)",
      role: "Positive rear member of G2; its image-side surface is the sole patent asphere.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus (concave to image)",
      nd: 1.48749,
      vd: 70.4,
      fl: -58.212830982188954,
      glass: "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative first member of the fixed rear group G3.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element L32",
      type: "Positive Meniscus (concave to object)",
      nd: 1.744,
      vd: 44.79,
      fl: 93.16380423458116,
      glass: "J-LAF2 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Positive final member of the net-negative fixed rear group G3.",
    },
  ],

  surfaces: [
    { label: "1", R: 177.4342, d: 2, nd: 1.48749, elemId: 1, sd: 11.3 },
    { label: "2", R: 15.9007, d: 3.53, nd: 1, elemId: 0, sd: 10.5 },
    { label: "3", R: 63.8566, d: 5, nd: 1.80604, elemId: 2, sd: 10.6 },
    { label: "4", R: -72.9715, d: 6.961, nd: 1, elemId: 0, sd: 10.6 },
    { label: "5", R: 31.3195, d: 5, nd: 1.61272, elemId: 3, sd: 10.5 },
    { label: "6", R: -25.782, d: 0.678, nd: 1, elemId: 0, sd: 10.2 },
    { label: "7", R: -40.2105, d: 2, nd: 1.61293, elemId: 4, sd: 10.0 },
    { label: "8", R: 23.7239, d: 2.9684, nd: 1, elemId: 0, sd: 9.4 },
    { label: "STO", R: 1e15, d: 4, nd: 1, elemId: 0, sd: 7.430942 },
    { label: "10", R: -13.8798, d: 1.2, nd: 1.61293, elemId: 5, sd: 8.3 },
    { label: "11", R: 186.0079, d: 3.71, nd: 1.62041, elemId: 6, sd: 9.4 },
    { label: "12", R: -18.9606, d: 0.1, nd: 1, elemId: 0, sd: 9.8 },
    { label: "13", R: 80.2528, d: 3.445, nd: 1.61881, elemId: 7, sd: 9.0 },
    { label: "14A", R: -25.3622, d: 1.21, nd: 1, elemId: 0, sd: 9.0 },
    { label: "15", R: -311.9251, d: 1.2, nd: 1.48749, elemId: 8, sd: 8.2 },
    { label: "16", R: 31.2577, d: 1.55, nd: 1, elemId: 0, sd: 8.0 },
    { label: "17", R: -1620.783, d: 2.55, nd: 1.744, elemId: 9, sd: 8.0 },
    { label: "18", R: -66.5158, d: 39.07132, nd: 1, elemId: 0, sd: 8.0 },
  ],

  asph: {
    "14A": {
      K: -0.679,
      A4: 4.54813e-6,
      A6: 5.40478e-9,
      A8: -5.1709e-12,
      A10: 5.14254e-15,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "8": [2.9684, 5.3323],
    "14A": [1.21, 25.7088],
  },
  varLabels: [
    ["8", "d1a (G1→STO)"],
    ["14A", "d2 (G2→G3)"],
  ],

  groups: [
    { text: "G1 (+) FOCUS", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+) FOCUS", fromSurface: "10", toSurface: "14A" },
    { text: "G3 (−) FIXED", fromSurface: "15", toSurface: "18" },
  ],
  doublets: [{ text: "L21–L22", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.163,
  focusDescription:
    "PUBLISHED: Example 1 supplies INF, β=-0.5 MID, and β=-1.0 CLD states. G1 and G2 move objectward while d1a changes; the stop co-moves with G2, d1b stays 4.00000 mm, and G3 remains fixed to the physical image plane. Runtime focus uses one linear parameter between the published INF/CLD endpoints, so the published MID d1a/d2 pair is verified separately and is not represented exactly by the runtime interpolation. The modeled CLD conjugate is 0.15264661 m object-to-physical-focal-plane, while closeFocusM retains Nikon's separate 0.163 m marketed minimum-focus specification.",

  nominalFno: 2.68,
  fstopSeries: [2.68, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
