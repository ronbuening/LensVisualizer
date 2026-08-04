import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SAMSUNG 30mm f/2                            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2010/0149663 A1, First Embodiment / Example 1.   ║
 * ║  Correlated production lens: Samsung 30mm F2 NX standard prime.   ║
 * ║  Five air-spaced elements / five groups; one aspherical surface.  ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes    ║
 * ║  only one infinity prescription; no focus movement is modeled.     ║
 * ║                                                                    ║
 * ║  SCALING: None. Patent radii, thicknesses, and asphere values are  ║
 * ║  retained without dimensional scaling.                             ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: The patent publishes no clear apertures. Values   ║
 * ║  are inferred from the f/2.07 pupil solution, the 25.33° half-     ║
 * ║  field bundles, the patent optical section, and the current edge-  ║
 * ║  thickness, rim-slope, conic-domain, shared-gap, containment, and  ║
 * ║  render-trim rules. The STO semi-diameter matches the exact Snell- ║
 * ║  traced stop for f/2.07; the first-order value is 5.290722 mm.     ║
 * ║  Full-field wide-open corner rays are intentionally vignetted.     ║
 * ║                                                                    ║
 * ║  A 2026-08-04 Figure 1 audit found every hand-read element rim     ║
 * ║  within the repository's 25% change threshold; SDs are unchanged.  ║
 * ║                                                                    ║
 * ║  SPECTRAL DATA: The patent supplies nd and νd only. nC, nF, ng,   ║
 * ║  and dPgF are intentionally omitted rather than inferred from a    ║
 * ║  speculative vendor melt or an Abbe-only dispersion model.         ║
 * ║                                                                    ║
 * ║  No sensor cover glass, filter, dummy plane, or mechanical part   ║
 * ║  is included.                                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "samsung-30mm-f2",
  maker: "Samsung",
  name: "SAMSUNG 30mm f/2",
  subtitle: "US 2010/0149663 A1 Example 1 — Samsung Digital Imaging / Min Heu",
  specs: [
    "5 ELEMENTS / 5 GROUPS",
    "DESIGN f = 30.756 mm",
    "DESIGN f/2.07",
    "2ω = 50.66°",
    "1 ASPHERICAL SURFACE",
  ],

  focalLengthMarketing: 30,
  focalLengthDesign: 30.7560033,
  apertureMarketing: 2,
  apertureDesign: 2.07,
  lensMounts: ["samsung-nx"],
  imageFormat: "aps-c",
  patentNumber: "US 2010/0149663 A1",
  patentAuthors: ["Min Heu"],
  patentAssignees: ["Samsung Digital Imaging Co., Ltd."],
  patentYear: 2010,
  elementCount: 5,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 27.37199,
      glass: "J-LAK14 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Front positive collector; concave surface faces the stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.68384,
      vd: 31.6,
      fl: -43.7789,
      glass: "Unmatched (684316 dense-flint class; vendor unresolved)",
      apd: false,
      role: "Front negative meniscus; aspherical rear surface faces the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: -12.59488,
      glass: "H-ZF13 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Strong rear-side negative meniscus immediately behind the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: 20.06079,
      glass: "N-LASF44 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "High-index positive meniscus paired across a narrow air gap with L3.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 26.80181,
      glass: "S-LAH58 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Rear positive collector and final converging element.",
    },
  ],

  surfaces: [
    { label: "1", R: 12.875, d: 3.34, nd: 1.6968, elemId: 1, sd: 9.4 },
    { label: "2", R: 35.4, d: 0.29, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "3", R: 13.83, d: 1.85, nd: 1.68384, elemId: 2, sd: 7.85 },
    { label: "4A", R: 8.946, d: 4.25, nd: 1.0, elemId: 0, sd: 7.85 },
    { label: "STO", R: 1e15, d: 5.4, nd: 1.0, elemId: 0, sd: 5.279068 },
    { label: "6", R: -8.3, d: 0.65, nd: 1.78472, elemId: 3, sd: 6.7 },
    { label: "7", R: -53.59, d: 0.22, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "8", R: -37.47, d: 3.62, nd: 1.8042, elemId: 4, sd: 9.0 },
    { label: "9", R: -11.763, d: 0.12, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "10", R: 206.3, d: 3.5, nd: 1.883, elemId: 5, sd: 10.2 },
    { label: "11", R: -26.52, d: 21.35, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {
    "4A": {
      K: 0.02,
      A4: 1.10721e-5,
      A6: 1.837e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.25,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes only the infinity prescription. " +
    "The production 0.25 m MFD is metadata only; no internal focus gaps are modeled.",

  nominalFno: 2.07,
  fstopSeries: [2.07, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
