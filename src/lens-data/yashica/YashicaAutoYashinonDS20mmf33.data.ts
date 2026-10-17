import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,856,386 A (Yoshisato Fujioka, Yashica), Example 1: Table I and FIG. 1. 11 elements / 9 groups; all spherical.
 * The patent normalises Example 1 to f = 99.8; every length here is scaled by 20/99.8. Indices and Abbe
 * numbers are as printed. Table I is confirmed by the patent's own Table II: Seidel coefficients computed from
 * the printed radii, spacings and indices reproduce 98 of its 100 surface entries to the last printed digit
 * (one differs by one unit in the fifth decimal; the other, surface 16 column F, is a misprint in Table II).
 * Labels: elements are numbered 1-11 as in FIG. 1 and the "Lens" column of Table I; the patent text names the
 * same lenses IA-ID, IIA-IIB, IIIA and IVA-IVD. The group brackets I-IV are the patent's four functional groups
 * (focal lengths -24.3, -510, +20.8 and +74.9 mm); D1 and D2 are the two cemented pairs, elements 5-6 and 8-9.
 * Focus: the patent gives one infinity prescription and no focusing data, so no focus movement is modeled.
 * Stop: not tabulated and not drawn in FIG. 1; the text (col. 6) says only that the diaphragm is taken to lie
 * between groups III and IV. It is placed at the midpoint of that air space, and its radius is derived from the
 * design f-number, f/3.3. Table II is reproduced with an entrance pupil 123.0 patent units behind r1; its
 * paraxial conjugate lies 1.9 units past the vertex of r14, outside the air space, so the table does not fix the
 * station of a physical diaphragm.
 * Glass: the patent prints nd and vd only. Each label names a catalog glass that matches them within
 * |dnd| <= 1e-4 and |dvd| <= 0.15; it selects the dispersion curve and does not identify the 1974 supplier.
 * Semi-diameters: no source values. Surfaces 4-7 and 9-20 are estimated from the patent's FIG. 1 outline
 * (front-page and sheet-1 copies, 0.066 and 0.088 mm/px) and floor-checked by real-ray trace; surfaces 1-3
 * and 8 keep real-ray envelope heights (plus a 10 % margin) that sit within 2-7 % of the figure.
 * The f/3.3 axial beam and the 21.63 mm corner chief ray (48.0 deg) clear every rim. Off-axis bundles are
 * vignetted as drawn: the meridional pupil passing is about 94 % at 20 deg, 80 % at 30 deg, 63 % at 40 deg
 * and 33 % at the patent's 47.25 deg (about 96, 81, 58 and 26 % of the stop area over the whole pupil), so
 * full-pupil coverage of the outer field is not claimed.
 * FIG. 1 draws elements 1, 2 and 4 with a flange: a flat land and a cylinder beyond the end of the rear face.
 * The front and rear semi-diameters of those elements follow the two drawn curve ends, and the renderer joins them
 * with a straight chord. A square rim is not used there: the rear face of element 1 has |R| below the
 * flange height, and on elements 2 and 4 it would carry the rear face over the front corner of the next element.
 * The link to the production Auto Yashinon-DS 20mm f/3.3 rests on matching brochure specifications
 * (11 elements / 9 groups, f/3.3, 94.5 deg field); Yashica has not confirmed it.
 */

const LENS_DATA = {
  schema: 2,
  key: "yashica-auto-yashinon-ds-20mm-f33",
  maker: "Yashica",
  name: "YASHICA AUTO YASHINON-DS 20mm f/3.3",
  subtitle: "US 3,856,386 A, Example 1 — production correlation unconfirmed",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 9 GROUPS", "DESIGN f = 20.00 mm", "DESIGN F/3.3", "ALL SPHERICAL", "INFINITY-ONLY MODEL"],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 20, design: 20.003244194481596 },
    fNumber: { marketing: 3.3, design: 3.3 },
  },

  source: {
    patentNumber: "US 3,856,386 A",
    patentYear: 1974,
    authors: ["Yoshisato Fujioka"],
    assignees: ["Yashica Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: -77.42984265053268,
      glass: "K-LaK10 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IA: front negative meniscus of functional group I. With Element 2 (IB) it forms the divergent pair whose combined focal length the patent bounds to balance distortion and coma against the long back focus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: -75.25720016512153,
      glass: "S-LAM3 (OHARA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IB: second negative meniscus of functional group I, air-spaced behind Element 1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: 49.48474023673046,
      glass: "K-LaK14 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IC: the positive element inside the net-negative functional group I.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: -31.640815871480637,
      glass: "K-LaK10 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens ID: rear negative meniscus of functional group I.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.1,
      indexReference: "d",
      focalLengthMm: -15.378720368003878,
      glass: "BASF7 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IIA: negative front member of the cemented pair that forms functional group II.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: 16.555344560719178,
      glass: "SF5 (SCHOTT; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IIB: thick positive rear member of the weakly negative cemented group II.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60717,
      vd: 40.2,
      indexReference: "d",
      focalLengthMm: 20.804073104815767,
      glass: "BASF3 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IIIA: the single positive lens forming functional group III, immediately ahead of the stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -9.523850161636611,
      glass: "FD3 (HOYA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IVA: negative front member of the cemented pair that opens functional group IV, behind the stop.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: 24.670992354579244,
      glass: "S-TIL25 (OHARA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IVB: positive rear member of the cemented pair in functional group IV.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      focalLengthMm: 34.70027146607293,
      glass: "K-LaK9 (SUMITA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IVC: positive meniscus of functional group IV, convex toward the image.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 39.8887277189646,
      glass: "LACL60 (HOYA; modern coordinate equivalent of the 1974 patent glass; supplier unconfirmed)",
      role: "Patent lens IVD: final positive element of functional group IV, a meniscus with a nearly flat front face.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.99799599198396, d: 2.7334669338677355, sd: 23.83191089086465, medium: 1 },
    { label: "2", R: 20.79759519038076, d: 5.350701402805611, sd: 17.08519492184534 },
    { label: "3", R: 36.61923847695391, d: 1.9138276553106215, sd: 17.08519492184534, medium: 2 },
    { label: "4", R: 21.33867735470942, d: 4.38877755511022, sd: 14.8 },
    { label: "5", R: 42.48697394789579, d: 7.637274549098197, sd: 15.1, medium: 3 },
    { label: "6", R: -169.47895791583167, d: 0.19438877755511022, sd: 15.1 },
    { label: "7", R: 24.06813627254509, d: 1.0541082164328657, sd: 10.4, medium: 4 },
    { label: "8", R: 11.488977955911823, d: 4.492985971943888, sd: 8.375109520878219 },
    { label: "9", R: -106.57314629258516, d: 1.122244488977956, sd: 8.4, medium: 5 },
    { label: "10", R: 12.056112224448897, d: 9.258517034068138, sd: 8.4, medium: 6 },
    { label: "11", R: -100.94188376753507, d: 0.09819639278557114, sd: 8.4 },
    { label: "12", R: 27.809619238476955, d: 8.202404809619239, sd: 6.3, medium: 7 },
    { label: "13", R: -20.565130260521045, d: 1.9088176352705413, sd: 6.3 },
    { label: "STO", R: "flat", d: 1.9088176352705413 },
    { label: "14", R: -12.87174348697395, d: 1.4549098196392785, sd: 5.1, medium: 8 },
    { label: "15", R: 16.324649298597194, d: 2.4809619238476954, sd: 5.9, medium: 9 },
    { label: "16", R: -111.66332665330663, d: 0.9478957915831664, sd: 5.9 },
    { label: "17", R: -25.695390781563127, d: 2.5771543086172346, sd: 6.6, medium: 10 },
    { label: "18", R: -12.911823647294591, d: 0.09819639278557114, sd: 6.6 },
    { label: "19", R: -699.5991983967936, d: 2.8617234468937873, sd: 8.4, medium: 11 },
    { label: "20", R: -24.66933867735471, d: 37.124037875107724, sd: 8.4 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes one infinity-focus prescription and no focusing data, so no focus movement is modeled. 0.3 m is the marketed minimum focus distance, not a modeled state.",
  },

  aperture: { nominalFNumber: 3.3, fStops: [3.3, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I (−)", fromSurface: "1", toSurface: "8" },
    { text: "II (−)", fromSurface: "9", toSurface: "11" },
    { text: "III (+)", fromSurface: "12", toSurface: "13" },
    { text: "IV (+)", fromSurface: "14", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
