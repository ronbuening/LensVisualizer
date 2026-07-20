import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON UV-NIKKOR AUTO 55mm f/4                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S42-9417 / JPB 1967009417, sole numerical example. ║
 * ║  Wakimoto Zenji / Nippon Kogaku Kogyo K.K. ultraviolet triplet.      ║
 * ║  3 elements / 3 groups, all spherical.                              ║
 * ║  Focus: unit focus; only the final back-focus gap varies.            ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING:                                                    ║
 * ║    Patent prescription is normalized at f = 100 and λ = 365 nm.      ║
 * ║    All radii, axial spacings, BFD, and inferred SD values are scaled  ║
 * ║    by ×0.55 for the 55 mm UV-Nikkor presentation. Computed EFL after ║
 * ║    scaling is 55.028 mm from the rounded patent table.               ║
 * ║                                                                      ║
 * ║  NOTE ON REFRACTIVE INDEX FIELDS:                                    ║
 * ║    The patent tabulates refractive indices at 365 nm, not at the      ║
 * ║    conventional d line. The single-index LensVisualizer schema uses   ║
 * ║    the `nd` field for tracing, so surfaces and elements intentionally ║
 * ║    store n(365 nm) to reproduce the patent EFL. Glass labels are      ║
 * ║    therefore marked Unmatched/class rather than catalog-resolved.     ║
 * ║                                                                      ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                    ║
 * ║    The patent does not tabulate a stop surface or clear apertures.    ║
 * ║    The stop is inferred from Fig. 1 in the L2-L3 air gap, here placed ║
 * ║    25% through d4 after r4. Its SD is solved for f/4 at 365 nm.        ║
 * ║    Semi-diameters are paraxial estimates constrained by edge          ║
 * ║    thickness, cross-gap sag clearance, and the published schematic.   ║
 * ║    The full 21.5° half-field is allowed to vignette at full aperture; ║
 * ║    inflating the front/rear positives to pass the full-field f/4      ║
 * ║    bundle would make the thin elements physically impossible.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-uv-nikkor-55mm-f4",
  maker: "Nikon",
  name: "NIKON UV-NIKKOR AUTO 55mm f/4",
  subtitle: "JP S42-9417 — Wakimoto / Nippon Kogaku",
  specs: ["3 elements / 3 groups", "f ≈ 55.03 mm", "F/4", "2ω ≈ 43°", "UV 300-400 nm design"],

  focalLengthMarketing: 55,
  focalLengthDesign: 55.028,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S42-9417",
  patentAuthors: ["Zenji Wakimoto"],
  patentAssignees: ["Nippon Kogaku Kogyo K.K."],
  patentYear: 1967,
  elementCount: 3,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.537,
      vd: 64,
      fl: 33.011,
      glass: "Unmatched UV crown (BK7/S-BSL7 class; stored index is n365=1.537, not catalog nd)",
      apd: false,
      role: "Front positive crown of the Cooke-triplet UV achromat; most positive power is on the first surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.56818,
      vd: 47,
      fl: -18.904,
      glass: "Unmatched UV light flint (J-LLF2/S-TIL2 class; stored index is n365=1.56818, not catalog nd)",
      apd: false,
      role: "Thin central negative element providing the dispersion differential and negative Petzval contribution.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.537,
      vd: 64,
      fl: 29.125,
      glass: "Unmatched UV crown (BK7/S-BSL7 class; stored index is n365=1.537, not catalog nd)",
      apd: false,
      role: "Rear positive crown; outward-facing rear curvature supplies most of the element power and sets the long BFD.",
    },
  ],

  surfaces: [
    { label: "1", R: 19.558, d: 2.7995, nd: 1.537, elemId: 1, sd: 8.85 },
    { label: "2", R: -179.872, d: 5.093, nd: 1.0, elemId: 0, sd: 8.65 },
    { label: "3", R: -22.66, d: 0.814, nd: 1.56818, elemId: 2, sd: 6.65 },
    { label: "4", R: 20.6855, d: 1.1715, nd: 1.0, elemId: 0, sd: 6.55 },
    { label: "STO", R: 1e15, d: 3.5145, nd: 1.0, elemId: 0, sd: 5.527958 },
    { label: "5", R: 92.2845, d: 2.7005, nd: 1.537, elemId: 3, sd: 8.25 },
    { label: "6", R: -18.6395, d: 47.046521, nd: 1.0, elemId: 0, sd: 8.45 },
  ],

  asph: {},
  var: {
    "6": [47.046521, 53.287412],
  },
  varLabels: [["6", "BF"]],
  focusDescription:
    "Unit focusing inferred from the fixed three-singlet optical block; BF increases from 47.047 mm at infinity to 53.287 mm at 0.6 m.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
  ],
  doublets: [],

  closeFocusM: 0.6,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  offAxisFieldFrac: 0.45,
  scFill: 0.54,
  yScFill: 0.46,
  maxFstop: 32,
} satisfies LensDataInput;

export default LENS_DATA;
