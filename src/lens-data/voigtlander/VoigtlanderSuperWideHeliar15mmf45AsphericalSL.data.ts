import type { LensDataInput } from "../../types/optics.js";

/**
 * JPH11326756A Example 3, Table 5/6, Cosina Co., Ltd., Yoshihisa Yomogida.
 * Production correlation is inferred, not manufacturer-confirmed.
 * 8 elements / 6 groups / one asphere (14A). Native mm scale: 1.
 * Focus: NO_INTERNAL_RECONSTRUCTION, static distant-object prescription only.
 * Production MFD 0.3 m is metadata, not a reconstructed finite-conjugate state.
 * Stop position is published; its radius is calibrated from patent f/4.57.
 * Every surface semi-diameter is modeled from exact meridional bundle coverage
 * and the optical sections, constrained by edge/rim/conic/shared-gap checks.
 * Nominal 110.1-degree coverage is published; peripheral vignetting is retained.
 * HOYA coordinate-compatible catalog dispersion proxies do not identify
 * the source glass supplier, melt, partial dispersion, or production recipe.
 * All published radii, d-line indices, gaps and asphere coefficients retained.
 * No plates, dummy surfaces, scaling, or internal focus law invented.
 */

const LENS_DATA = {
  key: "voigtlander-super-wide-heliar-15mm-f45-aspherical-sl",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER SUPER WIDE-HELIAR 15mm f/4.5 Aspherical SL",
  subtitle: "JPH11326756A Example 3 — Cosina; production correlation inferred",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "PATENT DESIGN: 15.30 mm, f/4.57",
    "PUBLISHED FULL FIELD: 110.1°",
    "1 ASPHERICAL SURFACE; MODELED APERTURES",
  ],
  focalLengthMarketing: 15,
  focalLengthDesign: 15.301895770768887,
  apertureMarketing: 4.5,
  apertureDesign: 4.57,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H11-326756 A",
  patentAuthors: ["Yoshihisa Yomogida"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 1999,
  elementCount: 8,
  groupCount: 6,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -29.927234025800793,
      glass: "TAF1 class (HOYA; supplier unconfirmed)",

      role: "First negative front meniscus; part of the published front divergent pair. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -25.338153789416328,
      glass: "TAF1 class (HOYA; supplier unconfirmed)",

      role: "Second negative front meniscus; completes the front divergent pair. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.34,
      fl: 34.18462371115573,
      glass: "NBFD10 class (HOYA; supplier unconfirmed)",

      role: "Positive third element before the first cemented group. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      fl: 10.459919085623897,
      glass: "LAC8 class (HOYA; supplier unconfirmed)",

      role: "Positive component of the first cemented doublet. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.82,
      fl: -16.681878074216502,
      glass: "E-FEL1 class (HOYA; supplier unconfirmed)",

      role: "Negative component of the first cemented doublet. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 6.9793704501551295,
      glass: "TAF3 class (HOYA; supplier unconfirmed)",

      role: "Positive component of the second cemented doublet. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -8.86589429551874,
      glass: "E-FD15 class (HOYA; supplier unconfirmed)",

      role: "Negative component of the second cemented doublet. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.34,
      fl: -59.38396284207452,
      glass: "LAC13 class (HOYA; supplier unconfirmed)",

      role: "Rear negative meniscus with an object-side asphere. Catalog dispersion is a coordinate-compatible proxy, not a patent melt measurement.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.739,
      d: 1.2,
      nd: 1.7725,
      elemId: 1,
      sd: 12.6,
    },
    {
      label: "2",
      R: 11.2,
      d: 3.88,
      nd: 1,
      elemId: 0,
      sd: 9.9,
    },
    {
      label: "3",
      R: 25.576,
      d: 1.0,
      nd: 1.7725,
      elemId: 2,
      sd: 9.5,
    },
    {
      label: "4",
      R: 10.899,
      d: 2.75,
      nd: 1,
      elemId: 0,
      sd: 8.0,
    },
    {
      label: "5",
      R: 31.315,
      d: 2.98,
      nd: 1.834,
      elemId: 3,
      sd: 7.9,
    },
    {
      label: "6",
      R: -304.509,
      d: 5.05,
      nd: 1,
      elemId: 0,
      sd: 7.9,
    },
    {
      label: "7",
      R: 19.363,
      d: 3.39,
      nd: 1.713,
      elemId: 4,
      sd: 4.6,
    },
    {
      label: "8",
      R: -11.246,
      d: 0.7,
      nd: 1.54814,
      elemId: 5,
      sd: 4.6,
    },
    {
      label: "9",
      R: 50.0,
      d: 1.3,
      nd: 1,
      elemId: 0,
      sd: 4.6,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 2.13,
      nd: 1,
      elemId: 0,
      sd: 2.514215621350599,
    },
    {
      label: "11",
      R: 28.283,
      d: 6.03,
      nd: 1.8042,
      elemId: 6,
      sd: 5.5,
    },
    {
      label: "12",
      R: -6.337,
      d: 1.0,
      nd: 1.69895,
      elemId: 7,
      sd: 5.5,
    },
    {
      label: "13",
      R: 298.314,
      d: 2.3,
      nd: 1,
      elemId: 0,
      sd: 6.0,
    },
    {
      label: "14A",
      R: -15.197,
      d: 1.5,
      nd: 1.6935,
      elemId: 8,
      sd: 6.3,
    },
    {
      label: "15",
      R: -25.058,
      d: 14.5,
      nd: 1,
      elemId: 0,
      sd: 7.6,
    },
  ],
  asph: {
    "14A": {
      K: 3.993265,
      A4: -0.000195704,
      A6: 1.78495e-6,
      A8: -1.12758e-7,
      A10: 9.00778e-10,
      A12: 0,
      A14: 0,
    },
  },
  var: {},
  varLabels: [],
  groups: [],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "D2",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
  closeFocusM: 0.3,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: only the static distant-object patent prescription is modeled. The production manual-focus lens reaches 0.3 m, but no finite-focus spacings or internal mechanism are established; no optical motion is authored.",
  nominalFno: 4.57,
  fstopSeries: [4.57, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 10,
  yScFill: 0.35,
  scFill: 0.55,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 110.1,
    maxTraceFieldDeg: 55.05,
  },
} satisfies LensDataInput;

export default LENS_DATA;
