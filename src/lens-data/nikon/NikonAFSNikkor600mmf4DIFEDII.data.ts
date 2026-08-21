import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S NIKKOR 600mm f/4D IF-ED II                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,745,306 A, Example 3 (Susumu Sato / Nikon Corporation).       ║
 * ║ Correlation: Nikon AF-S Nikkor 600mm f/4D IF-ED II; 10 elements / 7 groups ║
 * ║ after omission of the patent's protective/filter plates and inactive S2.   ║
 * ║ All powered surfaces are spherical.                                         ║
 * ║                                                                              ║
 * ║ FOCUS STATUS: PUBLISHED. G2 translates imageward by 10.8634 mm from the     ║
 * ║ infinity state to the patent's R = 6000 mm object-to-image close state.      ║
 * ║ Variable gaps are source d11 = 33.4177 → 44.2811 mm and                     ║
 * ║ d16 = 16.5738 → 5.7105 mm. No production-MFD extrapolation is modeled.      ║
 * ║                                                                              ║
 * ║ NO SCALING. The design remains the patent's approximately 588 mm, f/4.08    ║
 * ║ prescription; 600 mm f/4 is marketing metadata only.                         ║
 * ║                                                                              ║
 * ║ NORMALIZATION: source surfaces 1–2 (front protective plate), source surface ║
 * ║ 21 (inactive field-stop bookkeeping plane), and source surfaces 22–23       ║
 * ║ (rear filter) are omitted. The rear filter's d-line optical effect is       ║
 * ║ preserved by STO-to-image air-equivalent spacing                            ║
 * ║ 36.5 + 2.0 + 2.0/1.5168 + 115.6862 = 155.5047654 mm.                       ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: the patent does not tabulate per-surface clear apertures.    ║
 * ║ Surface 3 is anchored to the printed condition (12), Φ/f1 = 0.593, with      ║
 * ║ independently traced f1 giving Φ ≈ 144.08 mm (sd ≈ 72.04 mm). Remaining      ║
 * ║ SDs are constrained by f/4.08 marginal-ray heights, Fig. 7 proportions,     ║
 * ║ the printed G2 effective-diameter scale, and current edge/slope/cross-gap    ║
 * ║ geometry checks. The printed G2 diameter 38.8 mm is not treated as a hard   ║
 * ║ clear-aperture cap because that would clip the f/4.08 paraxial marginal ray.║
 * ║                                                                              ║
 * ║ GLASS: the patent publishes nd/νd only. Vendor provenance is unresolved, so ║
 * ║ qualified catalog-equivalent curves are spectral proxies, not production    ║
 * ║ identities. nC/nF/ng/dPgF remain intentionally unauthored.                  ║
 * ║                                                                              ║
 * ║ Manufacturer identity/specification sources:                                 ║
 * ║ https://cdn-10.nikon-cdn.com/pdf/manuals/lenses/AF/AFS_600_4_04.pdf          ║
 * ║ https://imaging.nikon.com/imaging/information/products_history/2000/         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-s-nikkor-600mm-f4d-if-ed-ii",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 600mm f/4D IF-ED II",
  subtitle: "US 5,745,306 A — Example 3 — Nikon internal-focus telephoto correlation",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "600 mm f/4 (marketed)",
    "EFL ≈ 587.793 mm (design)",
    "F/4.08 DESIGN",
    "3 ED ELEMENTS",
    "135 FORMAT",
  ],
  focalLengthMarketing: 600,
  focalLengthDesign: 587.7929294517706,
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,745,306 A",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1998,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 369.599452,
      glass: "498825 — J-FKH1-compatible low-dispersion proxy (patent supplier unresolved)",
      role: "First positive collector in G11; one of the three production-correlated ED/high-Abbe elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 305.823995,
      glass: "498825 — J-FKH1-compatible low-dispersion proxy (patent supplier unresolved)",
      role: "Second positive collector in G11; one of the three production-correlated ED/high-Abbe elements.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.804109,
      vd: 46.54,
      fl: -261.91592,
      glass: "804465 — high-index lanthanum class (vendor unresolved)",
      role: "Negative G11 corrector immediately behind the two positive front elements.",
    },
    {
      id: 4,
      name: "L14a",
      label: "L14a",
      type: "Negative Meniscus (convex to object)",
      nd: 1.804109,
      vd: 46.54,
      fl: -258.787937,
      glass: "804465 — high-index lanthanum class (vendor unresolved)",
      cemented: "L14",
      role: "Negative front component of the positive cemented G12 doublet.",
    },
    {
      id: 5,
      name: "L14b",
      label: "L14b",
      type: "Positive Meniscus (convex to object)",
      nd: 1.49782,
      vd: 82.52,
      fl: 137.825098,
      glass: "498825 — J-FKH1-compatible low-dispersion proxy (patent supplier unresolved)",
      cemented: "L14",
      role: "Positive rear component of G12; the third production-correlated ED/high-Abbe element.",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus (convex to object)",
      nd: 1.787971,
      vd: 47.47,
      fl: -145.383568,
      glass: "788475 — lanthanum class (vendor unresolved)",
      role: "First negative element of the translating internal-focus group G2.",
    },
    {
      id: 7,
      name: "L22a",
      label: "L22a",
      type: "Positive Meniscus (concave to object)",
      nd: 1.805182,
      vd: 25.41,
      fl: 101.458936,
      glass: "805254 — SF6/TIH6-class dense flint (vendor unresolved)",
      cemented: "L22",
      role: "Positive front component of the cemented negative G2 doublet.",
    },
    {
      id: 8,
      name: "L22b",
      label: "L22b",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.03,
      fl: -57.087016,
      glass: "640600 — S-BSM81-compatible barium-crown proxy (patent supplier unresolved)",
      cemented: "L22",
      role: "Negative rear component of the cemented negative G2 doublet.",
    },
    {
      id: 9,
      name: "L3a",
      label: "L3a",
      type: "Biconvex Positive",
      nd: 1.518601,
      vd: 69.98,
      fl: 93.589918,
      glass: "519700 — J-PKH1-compatible phosphate-crown proxy (patent supplier unresolved)",
      cemented: "L3",
      role: "Positive front component of the cemented positive rear group G3.",
    },
    {
      id: 10,
      name: "L3b",
      label: "L3b",
      type: "Negative Meniscus (concave to object)",
      nd: 1.80384,
      vd: 33.89,
      fl: -221.760734,
      glass: "804339 — legacy high-index flint class (vendor unresolved)",
      cemented: "L3",
      role: "Negative rear component of the cemented positive rear group G3.",
    },
  ],

  /* ── Active prescription: patent source surfaces 3–20 ── */
  surfaces: [
    { label: "3", R: 247.184, d: 18.3, nd: 1.49782, elemId: 1, sd: 72.05 },
    { label: "4", R: -702.03, d: 0.2, nd: 1.0, elemId: 0, sd: 72.05 },
    { label: "5", R: 217.555, d: 19.8, nd: 1.49782, elemId: 2, sd: 72.05 },
    { label: "6", R: -491.808, d: 2.5, nd: 1.0, elemId: 0, sd: 72.05 },
    { label: "7", R: -463.433, d: 6.5, nd: 1.804109, elemId: 3, sd: 68.5 },
    { label: "8", R: 388.465, d: 154.5, nd: 1.0, elemId: 0, sd: 68.5 },
    { label: "9", R: 104.65, d: 5.5, nd: 1.804109, elemId: 4, sd: 40.0 },
    { label: "10", R: 68.001, d: 14.9, nd: 1.49782, elemId: 5, sd: 40.0 },
    { label: "11", R: 7079.0, d: 33.4177, nd: 1.0, elemId: 0, sd: 40.0 },
    { label: "12", R: 524.96, d: 2.8, nd: 1.787971, elemId: 6, sd: 21.5 },
    { label: "13", R: 93.816, d: 3.4, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "14", R: -284.159, d: 5.7, nd: 1.805182, elemId: 7, sd: 20.55 },
    { label: "15", R: -64.019, d: 2.8, nd: 1.64, elemId: 8, sd: 20.55 },
    { label: "16", R: 86.558, d: 16.5738, nd: 1.0, elemId: 0, sd: 20.55 },
    { label: "17", R: 112.205, d: 7.0, nd: 1.518601, elemId: 9, sd: 20.5 },
    { label: "18", R: -83.713, d: 3.5, nd: 1.80384, elemId: 10, sd: 20.5 },
    { label: "19", R: -160.774, d: 2.7, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "STO", R: 1e15, d: 155.5047654008439, nd: 1.0, elemId: 0, sd: 19.057002615443462 },
  ],

  asph: {},

  var: {
    "11": [33.4177, 44.2811],
    "16": [16.5738, 5.7105],
  },
  varLabels: [
    ["11", "D11"],
    ["16", "D16"],
  ],

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2 (FOCUS)", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "19" },
  ],
  doublets: [
    { text: "L14", fromSurface: "9", toSurface: "11" },
    { text: "L22", fromSurface: "14", toSurface: "16" },
    { text: "L3", fromSurface: "17", toSurface: "19" },
  ],

  closeFocusM: 6.0,
  focusDescription:
    "PUBLISHED inner focus: G2 translates imageward by 10.8634 mm from infinity to the patent R=6000 mm object-to-image state; d11 33.4177→44.2811 mm and d16 16.5738→5.7105 mm. This endpoint is not Nikon's marketed 5.4/5.6 m MFD.",

  nominalFno: 4.08,
  fstopSeries: [4.08, 5.6, 8, 11, 16],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
