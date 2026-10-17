import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  The stop radius is derived from the design f-number, the published f/2.3,   ║
 * ║  at that inferred position.                                                  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: The patent publishes none. The authored values were solved  ║
 * ║  from the on-axis marginal ray and the 0.6-field chief-ray bundle, then      ║
 * ║  reduced where necessary to preserve positive edge thickness and actual      ║
 * ║  cross-gap clearance. Full-field peripheral rays are intentionally vignetted ║
 * ║  at the front and rear groups rather than allowed to create invalid rims.    ║
 * ║                                                                              ║
 * ║  GLASS LABELS: The patent gives nd/νd but no vendor. Compatible published  ║
 * ║  catalog curves are used as optical equivalents while the stored patent       ║
 * ║  coordinates remain authoritative. No label identifies the production melt.  ║
 * ║                                                                              ║
 * ║  No sensor cover, filter, inactive dummy plane, flare cutter, or mechanical  ║
 * ║  part is included.                                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Example 1 (PDF p. 7, column 3) matches every stored
 * radius/gap/index at scale ×1.8, with the documented V1=61.2 emendation.
 * Native EFL 99.959464 and BFL 44.708683 differ from F=100 and BF=44.79.
 * Scaled offset −0.146370 mm is retained as source inconsistency; no plate
 * or additional focus adjustment is supported by the published prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "angenieux-dem-180mm-f23-apo",
  maker: "P. Angénieux",
  name: "P. ANGÉNIEUX DEM 180mm f/2.3 APO",
  subtitle: "US 4,726,669, Example 1 — uniformly scaled ×1.8; strong production correlation",

  catalog: {
    lensMounts: ["canon-fd", "contax-yashica", "leica-r", "nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "f = 179.927 mm (DESIGN)",
      "f/2.3",
      "2ω = 13.6°",
      "PUBLISHED COMPOUND FOCUS",
      "ALL-SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 180, design: 179.9270350897788 },
    fNumber: { marketing: 2.3, design: 2.3 },
  },

  source: { patentNumber: "US 4,726,669", patentYear: 1988, authors: ["Pierre Angénieux"], assignees: [] },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.589,
      vd: 61.2,
      focalLengthMm: 139.8057822716505,
      glass: "SK5 (Sumita catalog equivalent to patent 589612; production supplier unspecified)",
      apd: false,
      role: "Positive front collector forming Component I.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 125.6928014713203,
      glass: "S-FPL51 (OHARA catalog equivalent to patent 497816; production supplier unspecified)",
      apd: "patent",
      apdNote:
        "Patent condition (6) requires ED/APD glass; nC/nF/ng are evaluated from current OHARA S-FPL51 Sellmeier data and dPgF uses the patent normal-line formula. This is a class match, not a melt identification.",
      role: "Low-dispersion positive element in the moving Component II.",
      diagramLabel: "L2",
      dPgF: 0.030940945693203825,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.785,
      vd: 25.9,
      focalLengthMm: -166.9849681528663,
      glass: "K-SFLD11 (Sumita catalog equivalent to patent 785259; production supplier unspecified)",
      apd: false,
      role: "Negative partner in Component II, separated from L2 by a 0.108 mm air gap.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.772,
      vd: 49.7,
      focalLengthMm: -53.2662218216995,
      glass: "S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified)",
      apd: false,
      role: "Front, strongly negative part of nominally fixed Component III.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.806,
      vd: 40.9,
      focalLengthMm: 48.28355174404824,
      glass: "S-LAH53 (OHARA catalog equivalent to patent 806409; production supplier unspecified)",
      apd: false,
      role: "Positive member of the near-afocal L5/L6 cemented correction doublet.",
      diagramLabel: "L5",
      cemented: "L5/L6",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.772,
      vd: 49.7,
      focalLengthMm: -51.89848444163154,
      glass: "S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified)",
      apd: false,
      role: "Negative member of the near-afocal L5/L6 cemented correction doublet.",
      diagramLabel: "L6",
      cemented: "L5/L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.728,
      vd: 28.4,
      focalLengthMm: -156.6975460444766,
      glass: "S-TIH10 (OHARA catalog equivalent to patent 728284; production supplier unspecified)",
      apd: false,
      role: "Negative front member of the moving Component IV cemented doublet.",
      diagramLabel: "L7",
      cemented: "L7/L8",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.772,
      vd: 49.7,
      focalLengthMm: 61.75525221683669,
      glass: "S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified)",
      apd: false,
      role: "Positive rear member of the moving Component IV cemented doublet.",
      diagramLabel: "L8",
      cemented: "L7/L8",
    },
  ],

  /* ── Surface prescription: patent lengths ×1.8 ── */
  surfaces: [
    { label: "1", R: 85.6872, d: 11.988, sd: 42.0, medium: 1 },
    { label: "2", R: -2002.0536, sd: 42.0 },
    { label: "3", R: 61.839, d: 13.986, sd: 38.5, medium: 2 },
    { label: "4", R: 5668.4898, d: 0.108, sd: 32.0 },
    { label: "5", R: "flat", d: 3.996, sd: 32.0, medium: 3 },
    { label: "6", R: 131.0832, sd: 32.0 },
    { label: "7", R: 1784.2662, d: 2.502, sd: 20.5, medium: 4 },
    { label: "8", R: 40.1706, d: 5.499, sd: 20.0 },
    // Claim 7 and Fig. 1 locate the stop in D8; the midpoint split is a disclosed model inference.
    { label: "STO", R: "flat", d: 5.499 },
    { label: "9", R: -57.2148, d: 7.992, sd: 20.0, medium: 5 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction.
    { label: "10", R: -24.606, d: 2.502, sd: 20.0, medium: 6 },
    { label: "11", R: -66.5946, sd: 20.5 },
    { label: "12", R: 94.4082, d: 2.502, sd: 22.4, medium: 7 },
    // Cemented L7→L8 interface: downstream element L8 owns the junction.
    { label: "13", R: 51.0804, d: 5.994, sd: 22.4, medium: 8 },
    { label: "14", R: -678.5694, sd: 22.4 },
  ],

  focus: {
    closeFocusM: 1.7886507000747824,
    description:
      "PUBLISHED compound internal focus using the patent's D2, D6, and D11 endpoints at infinity and β = −0.12. D2 contracts by 2.574 mm and D11 by 17.406 mm; the rounded D2+D6 totals leave a 0.018 mm coordinate residual, so Component IV shifts 17.424 mm relative to R1. The authored BF endpoint is the fixed-image-plane completion; the corresponding model object-to-image distance is 1.78865 m and the traced magnification is −0.120513.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) Published infinity and β = −0.12 states; BF close value preserves the fixed image plane. */
  gaps: {
    "2": { label: "D2", values: [[3.006, 0.432]] },
    "6": { label: "D6", values: [[26.982, 29.538]] },
    "11": { label: "D11", values: [[17.982, 0.576]] },
    "14": { label: "BF", values: [[80.622, 98.046]] },
  },

  aperture: { nominalFNumber: 2.3, fStops: [2.3, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "11" },
    { text: "IV", fromSurface: "12", toSurface: "14" },
  ],
  doublets: [],

  layout: { scFill: 0.55, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
