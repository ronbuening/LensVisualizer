import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA - SAMYANG AF 14mm f/2.8 FE                                             ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: KR 10-1933088 B1, Numerical Example 1 (Samyang Optics Co., Ltd.).        ║
 * ║ Unscaled d-line prescription: 14 elements / 10 air-separated groups, 6 aspheric ║
 * ║ surfaces on 3 elements. Focus status: PUBLISHED. G21 alone translates; G11 and   ║
 * ║ G31 remain fixed. Published D1/D2 states are retained at infinity, MAG=-1/30,     ║
 * ║ and TL=0.2 m. The middle focusT coordinate is the normalized published focus-   ║
 * ║ distance coordinate 0.2/0.516934471 = 0.386896234, not a reconstructed state.   ║
 * ║                                                                                  ║
 * ║ The optional plane-parallel rear optical element (patent surfaces 26-27,          ║
 * ║ t=2.500 mm, n=1.51680) is excluded. Its optical thickness is replaced by         ║
 * ║ 2.500/1.51680 = 1.648206751 mm of air. Because patent D4 + D5 = 0.500000 mm in   ║
 * ║ every focus state and D5 is a trailing image/reference bookkeeping coordinate,   ║
 * ║ the model uses the fixed normalized rear spacing                                 ║
 * ║ D3 + 2.500/1.51680 + (D4 + D5) = 24.808206751 mm and does not author D5.         ║
 * ║                                                                                  ║
 * ║ Semi-diameters: patent H-Ape values are used verbatim on 5A (18.04 mm) and 6A   ║
 * ║ (15.21 mm). The remaining clear apertures are modeled from exact meridional ray  ║
 * ║ footprints at the published 57.031 deg infinity half-field, the inferred source  ║
 * ║ f/2.867 stop radius, Fig. 1 proportions, and current edge/slope/gap/conic checks.║
 * ║ The physical stop radius is inferred, not patent-published.                      ║
 * ║                                                                                  ║
 * ║ Glass labels intentionally remain six-digit/class or Unmatched annotations. The  ║
 * ║ patent publishes nd/vd only and no vendor, nC, nF, ng, PgF, or dPgF data; no      ║
 * ║ catalog-specific line indices are invented here.                                 ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

// The 2026-09-09 Figure 1 optical-rim audit reduced L12 and the final doublet; see the companion audit.
const LENS_DATA = {
  key: "samyang-af-14mm-f2p8-fe",
  maker: "Samyang",
  name: "SAMYANG AF 14mm f/2.8 FE",
  subtitle: "KR 10-1933088 B1 - Numerical Example 1",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "MARKETED 14mm f/2.8",
    "PARAXIAL EFL 14.5408 mm",
    "MODELED F/2.86767; PATENT HFOV 57.031 deg",
    "6 ASPHERICAL SURFACES / 3 ASPH ELEMENTS",
    "INNER FOCUS",
  ],

  focalLengthMarketing: 14,
  focalLengthDesign: 14.540814965552375,
  apertureMarketing: 2.8,
  apertureDesign: 2.8676723004254447,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "KR 10-1933088 B1",
  patentAuthors: ["Jae Myung Yu", "Hae Jin Lee", "Jung Du Lee"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2018,
  elementCount: 14,
  groupCount: 10,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 114.062,
    maxTraceFieldDeg: 57.031,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: 359.563099,
      glass: "697555 - LAK14-class lanthanum crown",
      role: "Positive front collector in the fixed negative G11 group.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L21",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: -40.559023,
      glass: "806333 - NBFD15/J-LASFH6-class dense flint",
      role: "Negative meniscus in G11 contributing the front retrofocus power distribution.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L31",
      label: "Element 3",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.805,
      vd: 40.9,
      fl: -46.178036,
      glass: "P-LASF47 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Double-aspheric negative meniscus in G11; the patent assigns front-group aspheres to aberration correction.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L41",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -44.719374,
      glass: "497816 - low-dispersion ED crown class",
      role: "Low-dispersion negative meniscus closing the fixed G11 group.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L51",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 22.717412,
      glass: "847238 - dense flint class",
      cemented: "C1",
      role: "Positive front member of the translating G21 focusing cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L61",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 20.88,
      fl: -82.419994,
      glass: "923209 - very-high-index dense flint class",
      cemented: "C1",
      role: "Negative cemented partner in the positive-net-power G21 focusing group.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L71",
      label: "Element 7",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.87795,
      vd: 37.3,
      fl: -1959.314489,
      glass: "Unmatched (nd=1.877950, vd=37.3)",
      role: "Weak negative double-aspheric follower moving with the positive-net-power G21 focusing group.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L81",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -15.565955,
      glass: "717295 - SF1/FD1-class dense flint",
      cemented: "C2",
      role: "Negative front member of the fixed G31 cemented triplet.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L91",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.01,
      fl: 9.974692,
      glass: "603380 - F5/F1-class flint",
      cemented: "C2",
      role: "Strong positive middle member of the G31 cemented triplet.",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L101",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -33.911722,
      glass: "847238 - dense flint class",
      cemented: "C2",
      role: "Negative rear member of the fixed G31 cemented triplet.",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L111",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.56384,
      vd: 60.83,
      fl: -35.589619,
      glass: "564608 - SK11/BACD11-class crown",
      role: "Negative relay/correction element in the fixed rear group after the stop.",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L121",
      label: "Element 12",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.58853,
      vd: 60.37,
      fl: 13.625278,
      glass: "S-BAL35 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Strong positive double-aspheric rear-group element.",
    },
    {
      id: 13,
      name: "L13",
      diagramLabel: "L131",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.782,
      vd: 37.1,
      fl: -10.306269,
      glass: "H-LaF7 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      cemented: "C3",
      role: "Negative front member of the final cemented doublet.",
    },
    {
      id: 14,
      name: "L14",
      diagramLabel: "L141",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 22.430314,
      glass: "497816 - low-dispersion ED crown class",
      cemented: "C3",
      role: "Low-dispersion positive rear member of the final cemented doublet.",
    },
  ],

  surfaces: [
    { label: "1", R: 110.229, d: 5.9, nd: 1.6968, elemId: 1, sd: 35.0 },
    { label: "2", R: 192.497, d: 0.1, nd: 1.0, elemId: 0, sd: 32.5 },
    { label: "3", R: 61.219, d: 2.32, nd: 1.8061, elemId: 2, sd: 26.0 },
    { label: "4", R: 20.952, d: 3.373, nd: 1.0, elemId: 0, sd: 17.8 },
    { label: "5A", R: 63.395, d: 2.65, nd: 1.805, elemId: 3, sd: 18.04 },
    { label: "6A", R: 22.996, d: 5.2, nd: 1.0, elemId: 0, sd: 15.21 },
    { label: "7", R: 37.48, d: 1.4, nd: 1.497, elemId: 4, sd: 14.0 },
    { label: "8", R: 13.779, d: 18.418548, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "9", R: 23.816, d: 4.2, nd: 1.84666, elemId: 5, sd: 8.5 },
    { label: "10", R: -91.888, d: 1.1, nd: 1.92286, elemId: 6, sd: 8.3 },
    { label: "11", R: 444.168, d: 0.1, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "12A", R: 200.0, d: 2.0, nd: 1.87795, elemId: 7, sd: 7.8 },
    { label: "13A", R: 178.331, d: 3.480179, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "14", R: 88.87, d: 0.9, nd: 1.71736, elemId: 8, sd: 7.3 },
    { label: "15", R: 9.878, d: 7.55, nd: 1.60342, elemId: 9, sd: 7.2 },
    { label: "16", R: -10.975, d: 0.9, nd: 1.84666, elemId: 10, sd: 6.9 },
    { label: "17", R: -18.434, d: 0.129, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "STO", R: 1e15, d: 2.963, nd: 1.0, elemId: 0, sd: 6.42393184945209 },
    { label: "19", R: -59.894, d: 0.9, nd: 1.56384, elemId: 11, sd: 8.2 },
    { label: "20", R: 30.341, d: 0.86, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "21A", R: 17.909, d: 6.61, nd: 1.58853, elemId: 12, sd: 8.0 },
    { label: "22A", R: -12.535, d: 0.1, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "23", R: -18.801, d: 0.9, nd: 1.782, elemId: 13, sd: 8.4 },
    { label: "24", R: 14.403, d: 7.65, nd: 1.497, elemId: 14, sd: 9.8 },
    { label: "25", R: -40.628, d: 24.80820675105485, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {
    "5A": {
      K: 0.391538,
      A4: 1.294741e-4,
      A6: -4.620516e-7,
      A8: 1.022139e-9,
      A10: -2.140571e-12,
      A12: 3.117095e-15,
      A14: -5.194795e-19,
      A16: -3.00603e-21,
    },
    "6A": {
      K: -0.952731,
      A4: 1.455188e-4,
      A6: -1.616711e-8,
      A8: -4.025521e-9,
      A10: 1.498157e-11,
      A12: -1.802555e-14,
      A14: 5.813824e-22,
      A16: -2.109536e-33,
    },
    "12A": {
      K: -58.835394,
      A4: 3.854496e-5,
      A6: -4.672307e-8,
      A8: 1.578082e-9,
      A10: -3.278302e-12,
      A12: -1.408525e-14,
      A14: -3.446867e-27,
    },
    "13A": {
      K: -63.853601,
      A4: 5.292057e-5,
      A6: -1.175961e-7,
      A8: 3.507457e-9,
      A10: -1.557372e-11,
      A12: 2.022021e-15,
      A14: 7.638678e-28,
    },
    "21A": {
      K: -0.478183,
      A4: -8.843514e-6,
      A6: 1.583978e-7,
      A8: -4.698134e-10,
      A10: -1.156605e-11,
      A12: 1.836682e-13,
      A14: 3.932483e-17,
      A16: -1.920661e-33,
    },
    "22A": {
      K: -0.741465,
      A4: 4.603878e-5,
      A6: -1.152029e-7,
      A8: 2.865089e-9,
      A10: -4.187808e-11,
      A12: 3.13381e-13,
      A14: 4.174785e-26,
      A16: -1.923668e-33,
    },
  },

  focusPositions: [0, 0.3868962338942183, 1],
  var: {
    "8": [18.418548, 18.786854, 19.865161],
    "13A": [3.480179, 3.111872, 2.033566],
  },
  varLabels: [
    ["8", "D1 (G11-G21)"],
    ["13A", "D2 (G21-G31)"],
  ],

  groups: [
    { text: "G11 (FIXED -)", fromSurface: "1", toSurface: "8" },
    { text: "G21 (FOCUS +)", fromSurface: "9", toSurface: "13A" },
    { text: "G31 (FIXED +)", fromSurface: "14", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "9", toSurface: "11" },
    { text: "C2", fromSurface: "14", toSurface: "17" },
    { text: "C3", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.2,
  focusDescription:
    "PUBLISHED inner focus: G21 translates imageward while G11 and G31 remain fixed; infinity, MAG=-1/30, and TL=0.2 m D1/D2 states are retained. The omitted rear plate is folded into a fixed air-equivalent rear datum, and D5 is not modeled as a signed gap.",

  nominalFno: 2.8676723004254447,
  fstopSeries: [2.8676723004254447, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
