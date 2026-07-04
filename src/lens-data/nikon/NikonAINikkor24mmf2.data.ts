import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AI NIKKOR 24mm f/2                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,163,603, Embodiment III / Claim 4                ║
 * ║  (T. Tsunashima, Nippon Kogaku K.K.).                              ║
 * ║  11 elements / 10 groups, all spherical, one cemented doublet.      ║
 * ║  Focus: production CRC is not tabulated in the patent; infinity     ║
 * ║  prescription only.                                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized at f = 100 mm. All radii,      ║
 * ║    thicknesses, air gaps, BFD, and inferred semi-diameters are      ║
 * ║    scaled ×0.24 for a 24 mm production rendering. The computed      ║
 * ║    scaled EFL is 24.0305 mm.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON THE STOP:                                                  ║
 * ║    The patent does not tabulate the aperture-stop station. The stop ║
 * ║    is inferred from Fig. 1 within d10 between L5 and L6. The d10     ║
 * ║    gap is split near L6 for physically valid clearance in the        ║
 * ║    renderer while preserving the patent total d10 = 8.98.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent omits clear apertures. SDs are inferred from paraxial ║
 * ║    marginal/chief-ray estimates and then constrained by renderer     ║
 * ║    geometry: rim slope, edge thickness, surface SD ratios, cross-gap ║
 * ║    sag clearance, and the 52 mm production filter thread.            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design. It does    ║
 * ║  not include filters, sensor cover glass, or mechanical parts.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-nikkor-24mm-f2",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 24mm f/2",
  subtitle: "US 4,163,603 Embodiment III — Nippon Kogaku / Tsunashima",
  specs: ["11 elements / 10 groups", "f ≈ 24.0 mm", "F/2", "2ω = 84°", "CRC production focus"],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.030545,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1979,
  elementCount: 11,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.8,
      fl: 169.624,
      glass: "N-SSK5 (SCHOTT; S-BSM25/BACED5 class)",
      role: "Weak positive front meniscus; moderates the retrofocus front group and contributes to distortion/field balance.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: -30.343,
      glass: "S-LAL8 (OHARA)",
      role: "First strong negative meniscus of the retrofocus front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: -45.057,
      glass: "S-LAL14 (OHARA)",
      role: "Second negative meniscus; part of the front divergence and spherical/coma balance.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.8,
      fl: 82.665,
      glass: "N-SSK5 (SCHOTT; S-BSM25/BACED5 class)",
      role: "Positive balancing element between the front negative menisci.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: -82.295,
      glass: "S-LAL14 (OHARA)",
      role: "Last negative meniscus before the stop; strong lever for spherical aberration and meridional coma symmetry.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 35,
      fl: 35.915,
      glass: "750350 lanthanum flint class (S-LAM7 close, OHARA)",
      role: "First major rear-group positive element and strongest positive component in the system.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.56384,
      vd: 60.8,
      fl: 41.382,
      glass: "N-SK11 (SCHOTT) / BACD11 (HOYA)",
      role: "High-Abbe positive element with a nearly flat object-side surface.",
    },
    {
      id: 8,
      name: "L8a",
      label: "Element 8a",
      type: "Positive Meniscus",
      nd: 1.74443,
      vd: 49.4,
      fl: 215.283,
      glass: "743494 lanthanum flint class (S-LAM60 close, OHARA)",
      cemented: "D1",
      role: "Weak positive, higher-Abbe member of the rear negative cemented doublet.",
    },
    {
      id: 9,
      name: "L8b",
      label: "Element 8b",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -20.849,
      glass: "S-TIH6 (OHARA; SF6 class)",
      cemented: "D1",
      role: "Dense-flint negative member of the rear cemented doublet; principal chromatic-correction element.",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.74443,
      vd: 49.4,
      fl: 33.987,
      glass: "743494 lanthanum flint class (S-LAM60 close, OHARA)",
      role: "Positive meniscus in the rear group; contributes to convergence and field balance.",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 50.947,
      glass: "S-LAL14 (OHARA)",
      role: "Final positive element; completes the rear convergence toward the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 91.10208, d: 4.1136, nd: 1.65844, elemId: 1, sd: 18.6 },
    { label: "2", R: 485.42496, d: 0.1968, nd: 1, elemId: 0, sd: 17.6 },
    { label: "3", R: 48.80712, d: 4.3104, nd: 1.713, elemId: 2, sd: 13.6 },
    { label: "4", R: 14.43912, d: 3.2808, nd: 1, elemId: 0, sd: 11.0 },
    { label: "5", R: 29.53464, d: 1.2744, nd: 1.6968, elemId: 3, sd: 10.9 },
    { label: "6", R: 14.94864, d: 3.624, nd: 1, elemId: 0, sd: 10.3 },
    { label: "7", R: 59.4612, d: 6.4656, nd: 1.65844, elemId: 4, sd: 12.2 },
    { label: "8", R: -615.4776, d: 0.0984, nd: 1, elemId: 0, sd: 12.6 },
    { label: "9", R: 37.84152, d: 1.0776, nd: 1.6968, elemId: 5, sd: 12.3 },
    { label: "10", R: 22.53072, d: 2.016, nd: 1, elemId: 0, sd: 12 },
    { label: "STO", R: 1e15, d: 0.1392, nd: 1, elemId: 0, sd: 8.69 },
    { label: "11", R: 30.14784, d: 7.5432, nd: 1.7495, elemId: 6, sd: 12.3 },
    { label: "12", R: -224.32656, d: 2.5968, nd: 1, elemId: 0, sd: 12 },
    { label: "13", R: -443.19672, d: 3.9192, nd: 1.56384, elemId: 7, sd: 12 },
    { label: "14", R: -22.23672, d: 4.6032, nd: 1, elemId: 0, sd: 11.8 },
    { label: "15", R: -27.7224, d: 2.352, nd: 1.74443, elemId: 8, sd: 11.8 },
    { label: "16", R: -24.48984, d: 0.7848, nd: 1.80518, elemId: 9, sd: 11.7 },
    { label: "17", R: 54.13824, d: 1.3704, nd: 1, elemId: 0, sd: 9.9 },
    { label: "18", R: -167.24952, d: 3.3312, nd: 1.74443, elemId: 10, sd: 10.2 },
    { label: "19", R: -22.16328, d: 0.0984, nd: 1, elemId: 0, sd: 11.1 },
    { label: "20", R: 146.9388, d: 3.624, nd: 1.6968, elemId: 11, sd: 12.1 },
    { label: "21", R: -46.33464, d: 37.551526, nd: 1, elemId: 0, sd: 11.8 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "Front retrofocus group", fromSurface: "1", toSurface: "10" },
    { text: "Rear converging group", fromSurface: "11", toSurface: "21" },
  ],
  doublets: [{ text: "D1 / L8", fromSurface: "15", toSurface: "17" }],

  focusDescription:
    "Production lens uses Nikon CRC close-range correction; a pure unit-extension proxy would add about 2.79 mm at 1:8.6, but US 4,163,603 publishes only the infinity prescription, so this file leaves focus gaps fixed.",
  closeFocusM: 0.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,
  scFill: 0.64,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
