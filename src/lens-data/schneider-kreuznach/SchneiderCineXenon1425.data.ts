import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH CINE-XENON 25mm f/1.4           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 3,005,379, Table A (first numerical example).         ║
 * ║  Production correlation: inferred, not manufacturer-confirmed.     ║
 * ║  7 elements / 4 air-spaced members; all spherical.                ║
 * ║                                                                    ║
 * ║  SCALE: the patent normalizes f = 100. All dimensional prescription║
 * ║  values are scaled ×0.25 for the 25 mm production correlation.    ║
 * ║                                                                    ║
 * ║  STOP: Figure 1 locates D only qualitatively inside d6. The model  ║
 * ║  places STO at 60% of d6 from r6 (3.4815 mm after surface 6), a    ║
 * ║  geometry-constrained estimate consistent with the rendered figure. STO sd = 5.345223 mm  ║
 * ║  is calibrated so the parsed paraxial model reproduces f/1.4.     ║
 * ║  That agreement is calibration, not independent evidence of the   ║
 * ║  manufactured diaphragm diameter.                                 ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: modeled from exact spherical ray envelopes. The  ║
 * ║  construction clears the full on-axis f/1.4 marginal bundle and   ║
 * ║  representative ±11.5° off-axis bundles sampled through ±0.75 of  ║
 * ║  the stop. Most surfaces retain roughly 8% radial clearance; surface 6 is ║
 * ║  limited to 5.50 mm by the r6–r7 shared-gap geometry and retains   ║
 * ║  ≈1.3% clearance over the tested on-axis marginal ray.             ║
 * ║                                                                    ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. Table A provides one optical   ║
 * ║  state and no movement law. closeFocusM = 0.5 is ARRIFLEX catalog ║
 * ║  metadata for a documented production variant and does not drive  ║
 * ║  any internal spacing change in this model.                        ║
 * ║                                                                    ║
 * ║  IMAGE PLANE: surface 11 keeps the published b′ = 57.99 scaled    ║
 * ║  value (14.4975 mm). The rounded prescription computes a paraxial ║
 * ║  BFD of ≈14.5166 mm; the source mismatch is retained, not hidden. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "schneider-cine-xenon-25f14",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CINE-XENON 25mm f/1.4",
  subtitle: "US 3,005,379 Table A — 25 mm f/1.4 production correlation (inferred)",
  specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 25.015 mm", "F/1.4", "ALL SPHERICAL"],

  focalLengthMarketing: 25,
  focalLengthDesign: 25.01451824,
  apertureMarketing: 1.4,
  apertureDesign: 1.400000081,
  patentNumber: "US 3,005,379",
  patentAuthors: ["Günter Klemt"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1961,
  elementCount: 7,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      fl: 23.808148,
      glass: "678555 — supplier unresolved",
      apd: false,
      role: "Positive first element of cemented member I.",
      cemented: "J1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.2,
      indexReference: "d",
      fl: -65.129966,
      glass: "689312 — supplier unresolved",
      apd: false,
      role: "Negative second element of cemented member I.",
      cemented: "J1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      fl: 32.669806,
      glass: "670472 — supplier unresolved",
      apd: false,
      role: "Positive first element of cemented member II.",
      cemented: "J2",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6166,
      vd: 36.6,
      indexReference: "d",
      fl: -18.566004,
      glass: "617366 — supplier unresolved",
      apd: false,
      role: "Negative second element of cemented member II, immediately before the diaphragm space.",
      cemented: "J2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: -10.022118,
      glass: "673322 — supplier unresolved",
      apd: false,
      role: "Negative first element of cemented member III, immediately after the diaphragm space.",
      cemented: "J3",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 57.3,
      indexReference: "d",
      fl: 13.998349,
      glass: "658573 — supplier unresolved",
      apd: false,
      role: "Positive second element of cemented member III.",
      cemented: "J3",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 20.770738,
      glass: "744449 — supplier unresolved",
      apd: false,
      role: "Single positive rear member IV.",
    },
  ],

  surfaces: [
    { label: "1", R: 18.4975, d: 4.56, nd: 1.6779, elemId: 1, sd: 10.2 },
    { label: "2", R: -114, d: 0.7525, nd: 1.6889, elemId: 2, sd: 9.6 },
    { label: "3", R: 74.1875, d: 0.08, nd: 1, elemId: 0, sd: 9.1 },
    { label: "4", R: 9.595, d: 2.735, nd: 1.67, elemId: 3, sd: 8.1 },
    { label: "5", R: 15.13, d: 1.1225, nd: 1.6166, elemId: 4, sd: 7.5 },
    { label: "6", R: 6.3325, d: 3.4815, nd: 1, elemId: 0, sd: 5.5 },
    { label: "STO", R: 1e15, d: 2.321, nd: 1, elemId: 0, sd: 5.345223 },
    { label: "7", R: -8.6725, d: 0.9025, nd: 1.6727, elemId: 5, sd: 5.7 },
    { label: "8", R: 31.5525, d: 3.8575, nd: 1.6583, elemId: 6, sd: 6.4 },
    { label: "9", R: -12.385, d: 0.08, nd: 1, elemId: 0, sd: 6.7 },
    { label: "10", R: 53.605, d: 2.375, nd: 1.744, elemId: 7, sd: 6.85 },
    { label: "11", R: -21.3025, d: 14.4975, nd: 1, elemId: 0, sd: 6.95 },
  ],

  asph: {},

  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "J1", fromSurface: "1", toSurface: "3" },
    { text: "J2", fromSurface: "4", toSurface: "6" },
    { text: "J3", fromSurface: "7", toSurface: "9" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — US 3,005,379 Table A supplies one optical state only; 0.5 m is ARRIFLEX production-variant metadata and no internal focus gaps are modeled.",
  nominalFno: 1.400000081,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
