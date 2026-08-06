import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — P. ANGÉNIEUX DEM 180mm f/2.3 APO                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 4,726,669, Example 1 (Pierre Angénieux).                         ║
 * ║  The patent prescription is normalized to F = 100 and is uniformly scaled    ║
 * ║  ×1.8 to the marketed 180 mm class. The rounded prescription computes        ║
 * ║  EFL = 179.927 mm; it is not rescaled again to force exactly 180 mm.         ║
 * ║                                                                              ║
 * ║  8 elements / 6 air-separated groups / 14 refracting surfaces.               ║
 * ║  All refracting surfaces are spherical or plano.                             ║
 * ║                                                                              ║
 * ║  FOCUS STATUS: PUBLISHED.                                                    ║
 * ║  The patent publishes D2, D6, and D11 at infinity and at β = −0.12.          ║
 * ║  D2 contracts by 2.574 mm; D11 contracts by 17.406 mm.                       ║
 * ║  Rounded D2+D6 totals differ by 0.018 mm, leaving Component III with a       ║
 * ║  small coordinate residual; Component IV shifts 17.424 mm relative to R1.    ║
 * ║  The close-state BF value is the fixed-image-plane completion required to    ║
 * ║  keep the image plane at z = 191.160 mm; it is not an invented group motion. ║
 * ║                                                                              ║
 * ║  SOURCE CORRECTION: Example 1 prints V1 = 6.12. It is authored as νd = 61.2  ║
 * ║  because Example 2 prints 61.2 for the same 1.589 glass and all catalog      ║
 * ║  coordinate matches fall near 61.2. The raw value remains documented in the  ║
 * ║  audit.                                                                      ║
 * ║                                                                              ║
 * ║  STOP MODEL: Claim 7 and Fig. 1 place the diaphragm in D8 but do not give    ║
 * ║  its axial split. D8 is split at its midpoint (5.499 + STO + 5.499 mm).      ║
 * ║  The physical stop semi-diameter 18.208695 mm is the paraxial value needed   ║
 * ║  for the published f/2.3 at that inferred position.                          ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: The patent publishes none. The authored values were solved  ║
 * ║  from the on-axis marginal ray and the 0.6-field chief-ray bundle, then      ║
 * ║  reduced where necessary to preserve positive edge thickness and actual      ║
 * ║  cross-gap clearance. Full-field peripheral rays are intentionally vignetted ║
 * ║  at the front and rear groups rather than allowed to create invalid rims.    ║
 * ║                                                                              ║
 * ║  GLASS LABELS: The patent gives nd/νd but no vendor. Generic coordinate      ║
 * ║  classes are used. L2 carries line indices evaluated from OHARA S-FPL51      ║
 * ║  Sellmeier data because its 497816 coordinate is a close catalog match; this ║
 * ║  does not identify the Angénieux production melt.                            ║
 * ║                                                                              ║
 * ║  No sensor cover, filter, inactive dummy plane, flare cutter, or mechanical  ║
 * ║  part is included.                                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "angenieux-dem-180mm-f23-apo",
  maker: "P. Angénieux",
  name: "P. ANGÉNIEUX DEM 180mm f/2.3 APO",
  subtitle: "US 4,726,669, Example 1 — uniformly scaled ×1.8; strong production correlation",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "f = 179.927 mm (DESIGN)",
    "f/2.3",
    "2ω = 13.6°",
    "PUBLISHED COMPOUND FOCUS",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 180,
  focalLengthDesign: 179.9270350897788,
  apertureMarketing: 2.3,
  apertureDesign: 2.3,
  imageFormat: "135-full-frame",
  patentNumber: "US 4,726,669",
  patentAuthors: ["Pierre Angénieux"],
  patentAssignees: [],
  patentYear: 1988,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.589,
      vd: 61.2,
      fl: 139.8057822716505,
      glass: "589612 barium-crown coordinate class (vendor unspecified)",
      apd: false,
      role: "Positive front collector forming Component I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 125.6928014713203,
      glass: "S-FPL51-class 497816 low-dispersion ED crown (vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent condition (6) requires ED/APD glass; nC/nF/ng are evaluated from current OHARA S-FPL51 Sellmeier data and dPgF uses the patent normal-line formula. This is a class match, not a melt identification.",
      dPgF: 0.030940945693203825,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      role: "Low-dispersion positive element in the moving Component II.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.785,
      vd: 25.9,
      fl: -166.9849681528663,
      glass: "785259 dense-flint coordinate class (vendor unspecified)",
      apd: false,
      role: "Negative partner in Component II, separated from L2 by a 0.108 mm air gap.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.772,
      vd: 49.7,
      fl: -53.2662218216995,
      glass: "772497 high-index crown coordinate class (vendor unspecified)",
      apd: false,
      role: "Front, strongly negative part of nominally fixed Component III.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.806,
      vd: 40.9,
      fl: 48.28355174404824,
      glass: "806409 lanthanum dense-crown coordinate class (vendor unspecified)",
      apd: false,
      role: "Positive member of the near-afocal L5/L6 cemented correction doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.772,
      vd: 49.7,
      fl: -51.89848444163154,
      glass: "772497 high-index crown coordinate class (vendor unspecified)",
      apd: false,
      role: "Negative member of the near-afocal L5/L6 cemented correction doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.728,
      vd: 28.4,
      fl: -156.6975460444766,
      glass: "728284 dense-flint coordinate class (vendor unspecified)",
      apd: false,
      role: "Negative front member of the moving Component IV cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.772,
      vd: 49.7,
      fl: 61.75525221683669,
      glass: "772497 high-index crown coordinate class (vendor unspecified)",
      apd: false,
      role: "Positive rear member of the moving Component IV cemented doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription: patent lengths ×1.8 ── */
  surfaces: [
    { label: "1", R: 85.6872, d: 11.988, nd: 1.589, elemId: 1, sd: 42.0 },
    { label: "2", R: -2002.0536, d: 3.006, nd: 1.0, elemId: 0, sd: 42.0 },
    { label: "3", R: 61.839, d: 13.986, nd: 1.497, elemId: 2, sd: 38.5 },
    { label: "4", R: 5668.4898, d: 0.108, nd: 1.0, elemId: 0, sd: 32.0 },
    { label: "5", R: 1e15, d: 3.996, nd: 1.785, elemId: 3, sd: 32.0 },
    { label: "6", R: 131.0832, d: 26.982, nd: 1.0, elemId: 0, sd: 32.0 },
    { label: "7", R: 1784.2662, d: 2.502, nd: 1.772, elemId: 4, sd: 20.5 },
    { label: "8", R: 40.1706, d: 5.499, nd: 1.0, elemId: 0, sd: 20.0 },
    // Claim 7 and Fig. 1 locate the stop in D8; the midpoint split is a disclosed model inference.
    { label: "STO", R: 1e15, d: 5.499, nd: 1.0, elemId: 0, sd: 18.20869463084469 },
    { label: "9", R: -57.2148, d: 7.992, nd: 1.806, elemId: 5, sd: 20.0 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction.
    { label: "10", R: -24.606, d: 2.502, nd: 1.772, elemId: 6, sd: 20.0 },
    { label: "11", R: -66.5946, d: 17.982, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "12", R: 94.4082, d: 2.502, nd: 1.728, elemId: 7, sd: 22.4 },
    // Cemented L7→L8 interface: downstream element L8 owns the junction.
    { label: "13", R: 51.0804, d: 5.994, nd: 1.772, elemId: 8, sd: 22.4 },
    { label: "14", R: -678.5694, d: 80.622, nd: 1.0, elemId: 0, sd: 22.4 },
  ],

  asph: {},

  /* Published infinity and β = −0.12 states; BF close value preserves the fixed image plane. */
  var: {
    "2": [3.006, 0.432],
    "6": [26.982, 29.538],
    "11": [17.982, 0.576],
    "14": [80.622, 98.046],
  },
  varLabels: [
    ["2", "D2"],
    ["6", "D6"],
    ["11", "D11"],
    ["14", "BF"],
  ],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "11" },
    { text: "IV", fromSurface: "12", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 1.7886507000747824,
  focusDescription:
    "PUBLISHED compound internal focus using the patent's D2, D6, and D11 endpoints at infinity and β = −0.12. D2 contracts by 2.574 mm and D11 by 17.406 mm; the rounded D2+D6 totals leave a 0.018 mm coordinate residual, so Component IV shifts 17.424 mm relative to R1. The authored BF endpoint is the fixed-image-plane completion; the corresponding model object-to-image distance is 1.78865 m and the traced magnification is −0.120513.",

  nominalFno: 2.3,
  fstopSeries: [2.3, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
