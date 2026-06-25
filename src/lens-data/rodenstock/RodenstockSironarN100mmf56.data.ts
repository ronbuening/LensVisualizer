import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  RODENSTOCK SIRONAR-N 100mm f/5.6                                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 27 29 831 B1, sole numerical example in Claim 1.   ║
 * ║  Six-element / four-group all-spherical plasmat.                    ║
 * ║  Patent normalization: f′ = 100; aperture ratio 1:5.8.              ║
 * ║  Focus: unit extension by view-camera bellows.                      ║
 * ║                                                                      ║
 * ║  NOTE ON SPECTRAL LINE:                                             ║
 * ║    The patent tabulates n_e and ν_e at the spectral e-line, not      ║
 * ║    d-line nd/vd values. The `nd` and `vd` fields below intentionally ║
 * ║    preserve those patent e-line values so the paraxial trace         ║
 * ║    reproduces the published f′ = 100 prescription. Catalog glass     ║
 * ║    names are annotations, not replacement d-line substitutions.      ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    DE 27 29 831 B1 does not publish clear semi-diameters. The SDs    ║
 * ║    below are conservative renderer estimates derived from paraxial   ║
 * ║    marginal/chief-ray checks and then limited by edge thickness,     ║
 * ║    element SD ratio, rim slope, and the very tight r3-r4/r7-r8       ║
 * ║    cross-gap sag clearances. They are not factory clear-aperture     ║
 * ║    claims.                                                          ║
 * ║                                                                      ║
 * ║  NOTE ON STOPS:                                                     ║
 * ║    The patent places the working aperture after l2 and a fixed       ║
 * ║    stray-light baffle after l3. The baffle is mechanical and is not  ║
 * ║    included as an optical surface; l3 + l4 is folded into the        ║
 * ║    post-stop air thickness.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "rodenstock-sironar-n-100mm-f56",
  maker: "Rodenstock",
  name: "RODENSTOCK SIRONAR-N 100mm f/5.6",
  subtitle: "DE 27 29 831 B1 — Schlegel / Weiss",
  specs: [
    "6 elements / 4 groups",
    "f′ = 99.998 mm, e-line",
    "1:5.8 patent aperture; f/5.6 marketed",
    "2ω ≈ 73° patent field",
    "all-spherical plasmat",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.998109,
  apertureMarketing: 5.6,
  apertureDesign: 5.8,
  imageFormat: "6x9",
  patentYear: 1978,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.6055,
      vd: 60.35,
      fl: 31.05,
      glass: "N-SK14 (SCHOTT; patent e-line values stored)",
      role: "Front positive member of the first cemented doublet; low-dispersion high-index crown power carrier.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.5542,
      vd: 49.31,
      fl: -25.53,
      glass: "Unmatched (vintage light-flint / BaLF-class; patent e-line values stored)",
      role: "Higher-dispersion negative partner in the first cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5187,
      vd: 63.96,
      fl: 128.29,
      glass: "N-BK7 (SCHOTT; patent e-line values stored)",
      role: "Front stop-adjacent positive meniscus and primary power carrier.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5187,
      vd: 63.96,
      fl: 136.97,
      glass: "N-BK7 (SCHOTT; patent e-line values stored)",
      role: "Rear stop-adjacent positive meniscus, paired with L3 across the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.5542,
      vd: 49.31,
      fl: -28.13,
      glass: "Unmatched (vintage light-flint / BaLF-class; patent e-line values stored)",
      role: "Higher-dispersion negative member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.6055,
      vd: 60.35,
      fl: 31.84,
      glass: "N-SK14 (SCHOTT; patent e-line values stored)",
      role: "Rear positive member of the second cemented doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 18.8, d: 6.08, nd: 1.6055, elemId: 1, sd: 12.15 },
    { label: "2", R: 1e15, d: 1.23, nd: 1.5542, elemId: 2, sd: 9.72 },
    { label: "3", R: 14.15, d: 1.09, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "4", R: 22.75, d: 1.5, nd: 1.5187, elemId: 3, sd: 7.5 },
    { label: "5", R: 33.79, d: 5.79, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "STO", R: 1e15, d: 6.15, nd: 1.0, elemId: 0, sd: 6.933 },
    { label: "6", R: -44.42, d: 1.42, nd: 1.5187, elemId: 4, sd: 6.9 },
    { label: "7", R: -27.63, d: 1.09, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "8", R: -15.59, d: 1.98, nd: 1.5542, elemId: 5, sd: 7.7 },
    { label: "9", R: 1e15, d: 4.85, nd: 1.6055, elemId: 6, sd: 9.72 },
    { label: "10", R: -19.28, d: 83.112921, nd: 1.0, elemId: 0, sd: 12.15 },
  ],

  asph: {},

  /* Unit-focus representative state: close point is an implementation value, not a manufacturer-published MFD. */
  var: {
    "10": [83.112921, 94.021521],
  },
  varLabels: [["10", "BF"]],
  focusDescription:
    "Unit focus by view-camera bellows; representative 1.0 m object-distance extension is provided for the UI slider.",

  groups: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "L3", fromSurface: "4", toSurface: "5" },
    { text: "L4", fromSurface: "6", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 1.0,
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45, 64],
  maxFstop: 64,
  scFill: 0.62,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
