import type { LensDataInput } from "../../types/optics.js";

/**
 * FUJINON XF23mmF2.8 R WR
 *
 * Data source: US 2026/0118637 A1, Example 4 (FUJIFILM Corporation / Taiga Noda).
 * Patent prescription: f = 22.66 mm, FNo. = 2.89, 2omega = 68.2 deg at infinity.
 * Production metadata: 23 mm f/2.8, Fujifilm X mount APS-C, 8 elements / 6 groups, two aspherical elements.
 * Focus: unit/full-group focus. The patent varies only DD[15], the back-focus gap, from 11.087 mm to
 * 14.713 mm at beta = -0.16x.
 *
 * Semi-diameters: one half of the patent-listed ED values unless noted. Surface 12 is conservatively
 * enlarged from the patent ED/2 value of 5.240 mm to 5.520 mm so the L25 front/rear rendered span remains
 * within the project element-SD ratio rule while still exceeding the patent's effective-diameter requirement.
 *
 * Aspheres: the patent uses KA = 1, corresponding to standard conic K = 0. The patent also includes odd
 * A5/A7/A9/A11 terms. The renderer supports even-order terms only, so the data file stores least-squares
 * even-order A4-A14 fits over each patent semi-diameter. Maximum polynomial residual over the clear aperture:
 * S1 0.097 um, S2 0.062 um, S14 0.103 um, S15 0.046 um.
 *
 * Cover glass / sensor stack is not included.
 */

const LENS_DATA = {
  key: "fujifilm-xf-23mm-f28-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 23mm f/2.8 R WR",
  subtitle: "US 2026/0118637 A1 Example 4",
  specs: ["23mm", "f/2.8", "8 elements / 6 groups", "2 aspherical elements", "APS-C"],

  focalLengthMarketing: 23,
  focalLengthDesign: 22.66,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["fujifilm-x" as const],
  imageFormat: "aps-c" as const,
  patentNumber: "US 2026/0118637 A1",
  patentAuthors: ["Taiga Noda"],
  patentAssignees: ["Fujifilm Corp"],
  patentYear: 2026,
  elementCount: 8,
  groupCount: 6,
  apertureBlades: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front asphere",
      type: "Biconcave Negative (2x Asph)",
      nd: 1.51625,
      vd: 64.05,
      fl: -25.12,
      glass: "BK7 / BSL7-class borosilicate crown (516/641, catalog-class)",
      dPgF: 0.0001,
      role: "Negative front collector; widens the field and carries first-order aspherical correction.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 positive front-group lens",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 16.38,
      glass: "S-LAH66-class lanthanum flint (OHARA 773/496 class)",
      dPgF: -0.0091,
      role: "Strong positive member of G1; supplies most of the front-group convergence.",
    },
    {
      id: 3,
      name: "L21",
      label: "L21 negative in first rear doublet",
      type: "Biconcave Negative",
      nd: 1.73037,
      vd: 32.23,
      fl: -7.93,
      glass: "730322 - NBFD32 (HOYA dense barium flint; no Sellmeier catalog entry)",
      dPgF: 0.0004,
      cemented: "D1",
      role: "Negative high-dispersion front member of the first cemented doublet in G2.",
    },
    {
      id: 4,
      name: "L22",
      label: "L22 positive in first rear doublet",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      fl: 6.95,
      glass: "TAFD32-class dense tantalum flint (871/407)",
      dPgF: -0.007,
      cemented: "D1",
      role: "Very high-index positive partner; D1 is the dominant positive cemented unit in G2.",
    },
    {
      id: 5,
      name: "L23",
      label: "L23 positive in second rear doublet",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.55,
      fl: 18.26,
      glass: "S-LAH59 / TAF5 / ZLaF54-class lanthanum flint (816/466)",
      dPgF: -0.0085,
      cemented: "D2",
      role: "Positive member of the weak near-afocal D2 corrector doublet.",
    },
    {
      id: 6,
      name: "L24",
      label: "L24 negative in second rear doublet",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.89,
      fl: -17.42,
      glass: "SF2 / E-FD2-class dense flint (648/339)",
      dPgF: 0.0071,
      cemented: "D2",
      role: "Negative partner of D2; its rear surface forms the object-side boundary of the biconvex air lens.",
    },
    {
      id: 7,
      name: "L25",
      label: "L25 rear negative meniscus",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.33,
      fl: -14,
      glass: "F2 / E-F2-class flint (620/363)",
      dPgF: 0.0059,
      role: "Negative meniscus directly before the final positive asphere; contributes lateral-color correction.",
    },
    {
      id: 8,
      name: "L26",
      label: "L26 rear asphere",
      type: "Near Plano-Convex Positive (2x Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: 16.12,
      glass: "NBFD13 / M-NBFD130 (HOYA, 806407 code)",
      dPgF: -0.0059,
      role: "Final positive field-shaping element with two aspherical surfaces.",
    },
  ],

  surfaces: [
    { label: "1A", R: -23.0829, d: 0.5, nd: 1.51625, elemId: 1, sd: 5.375 },
    { label: "2A", R: 29.818, d: 0.2, nd: 1, elemId: 0, sd: 4.885 },
    { label: "3", R: 15.69, d: 2.44, nd: 1.7725, elemId: 2, sd: 4.8 },
    { label: "4", R: -60.9873, d: 2.01, nd: 1, elemId: 0, sd: 4.565 },
    { label: "STO", R: 1e15, d: 2.64, nd: 1, elemId: 0, sd: 3.815 },
    { label: "6", R: -18.331, d: 0.51, nd: 1.73037, elemId: 3, sd: 3.68 },
    { label: "7", R: 8.57, d: 3.27, nd: 1.8707, elemId: 4, sd: 3.775 },
    { label: "8", R: -16.9, d: 0.15, nd: 1, elemId: 0, sd: 3.8 },
    { label: "9", R: 21.2106, d: 2.19, nd: 1.816, elemId: 5, sd: 4.26 },
    { label: "10", R: -47.7372, d: 0.58, nd: 1.64769, elemId: 6, sd: 4.46 },
    { label: "11", R: 14.8411, d: 4.34, nd: 1, elemId: 0, sd: 4.66 },
    { label: "12", R: -6.7821, d: 0.5, nd: 1.62004, elemId: 7, sd: 5.52 },
    { label: "13", R: -31.8496, d: 0.15, nd: 1, elemId: 0, sd: 6.89 },
    { label: "14A", R: 299.733, d: 5.07, nd: 1.8061, elemId: 8, sd: 8.785 },
    { label: "15A", R: -13.4793, d: 11.087, nd: 1, elemId: 0, sd: 9.475 },
  ],

  asph: {
    "1A": {
      K: 0,
      A4: 9.497508457078e-4,
      A6: -6.761105044362e-5,
      A8: 4.028969629048e-6,
      A10: -1.590645215066e-7,
      A12: 3.52324641026e-9,
      A14: -3.254265546869e-11,
    },
    "2A": {
      K: 0,
      A4: 1.053575703948e-3,
      A6: -7.362232260896e-5,
      A8: 5.287463180942e-6,
      A10: -2.607576329113e-7,
      A12: 7.289334379609e-9,
      A14: -8.440034094901e-11,
    },
    "14A": {
      K: 0,
      A4: 7.710491405891e-6,
      A6: 2.578243733923e-6,
      A8: -6.407336824841e-8,
      A10: 9.688026729695e-10,
      A12: -8.085746576752e-12,
      A14: 2.745031468296e-14,
    },
    "15A": {
      K: 0,
      A4: 7.12688391973e-5,
      A6: 5.540052011596e-7,
      A8: 7.483914187703e-9,
      A10: -3.193306710973e-12,
      A12: -3.779219201546e-13,
      A14: 4.882876103257e-16,
    },
  },

  var: {
    "15A": [11.087, 14.713] as [number, number],
  },
  varLabels: [["15A", "BF / DD[15]"]] as [string, string][],

  groups: [
    { text: "G1 (+)", fromSurface: "1A", toSurface: "4" },
    { text: "G2 (+)", fromSurface: "6", toSurface: "15A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "6", toSurface: "8" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  closeFocusM: 0.2,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  focusDescription:
    "Unit/full-group focus. Patent Example 4 moves the full optical system and changes only DD[15] from 11.087 mm at infinity to 14.713 mm at beta = -0.16x.",
  scFill: 0.56,
  yScFill: 0.64,
};

export default LENS_DATA satisfies LensDataInput;
