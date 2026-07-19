import type { LensDataInput } from "../../types/optics.js";

/**
 * OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5
 *
 * Data source: US 4,025,167, Embodiment 2, Yoshitsugi Ikeda / Olympus Optical Co., Ltd.
 * Patent prescription: f = 85.0-250.0 mm, F/5, 15 elements in 11 air-separated components.
 *
 * Optical layout: four zoom groups. Group I is the front focusing group; Group II is the negative variator;
 * Group III is the positive compensator; Group IV is a fixed positive relay. The patent does not specify an
 * aperture-stop surface in the numerical table. The stop is inserted here in the D2 air gap, 0.75 mm ahead of
 * Group III, as inferred from Fig. 2 and fitted so the paraxial entrance pupil gives approximately F/5 at all
 * three tabulated zoom positions.
 *
 * Patent erratum: the Embodiment 2 table prints r20 as 8.663 in the specification text. Claim 3 prints the
 * same surface as 28.663, which is consistent with adjacent embodiments and with the verified EFL/BFD trace.
 * This file uses r20 = 28.663.
 *
 * Zoom variables:
 *   - surface 5: D1, Group I to Group II. This also carries the front-group focus motion.
 *   - surface 12: first part of D2, Group II to the inserted stop. STO.d = 0.75 completes D2.
 *   - surface 15: D3, Group III to Group IV.
 *   - surface 26: paraxial BFD, set separately per zoom position to absorb patent table rounding.
 *
 * Close focus: production close focus is 2.0 m. The patent publishes aberration curves at 3 m but does not
 * provide close-focus variable spacings. The close-focus state is therefore paraxially inferred by advancing
 * Group I for a 2.0 m object distance measured from the film plane, with Groups II-IV and the image plane fixed.
 *
 * Semi-diameters: the patent omits clear apertures. Semi-diameters are estimated from on-axis marginal-ray and
 * full-frame chief-ray envelopes, then constrained by a 55 mm filter size, edge thickness, element SD ratios,
 * sd/|R| < 0.90, and cross-gap sag intrusion checks. They are clear-aperture estimates for rendering and
 * paraxial clipping, not a manufacturer's mechanical aperture drawing.
 */
const LENS_DATA = {
  key: "olympus-zuiko-auto-zoom-85-250mm-f5",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5",
  subtitle: "US 4,025,167 Embodiment 2 — Olympus / Ikeda",
  specs: ["15 elements / 11 groups", "85-250mm", "f/5 constant aperture", "2ω ≈ 29°-10°", "All-spherical"],

  focalLengthMarketing: [85, 250],
  focalLengthDesign: [85.1196, 250.0038],
  apertureMarketing: 5,
  apertureDesign: 5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,025,167",
  patentAuthors: ["Yoshitsugi Ikeda"],
  patentAssignees: ["Olympus Optical Co., Ltd."],
  patentYear: 1977,
  elementCount: 15,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 206.3,
      glass: "S-FSL5 (OHARA) / FK5 class",
      role: "Weak front positive lens in the focusing group; controls front-group spherical aberration variation.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 127.6,
      glass: "S-BSM16 (OHARA) / N-SK16 class",
      role: "Positive crown half of the front-group achromat.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      fl: -204.8,
      glass: "S-TIH11 (OHARA) / SF11 class",
      role: "Negative flint half of the front-group achromat.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56873,
      vd: 63.2,
      fl: -127.7,
      glass: "569632 — dense crown (patent glass code)",
      role: "First negative variator element.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.76182,
      vd: 26.6,
      fl: 68.8,
      glass: "FD140 (HOYA) / PBH14 (OHARA) class",
      role: "Positive flint half of the reversed negative variator doublet.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.4,
      fl: -48.0,
      glass: "PSK53A / K-PSKn2 class",
      role: "Negative high-Abbe half of the reversed negative variator doublet.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.56873,
      vd: 63.2,
      fl: -102.7,
      glass: "569632 — dense crown (patent glass code)",
      role: "Rear negative meniscus of the variator group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62012,
      vd: 49.7,
      fl: 47.2,
      glass: "K-SSK9 (Sumita) / BSM28 class",
      role: "Positive half of the compensator doublet.",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.72151,
      vd: 29.2,
      fl: -79.7,
      glass: "S-TIH18 (OHARA) / FD18 class",
      role: "Negative flint half of the compensator doublet.",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49831,
      vd: 65.0,
      fl: 75.1,
      glass: "498650 — borosilicate crown (patent glass code)",
      role: "First positive element of the fixed relay group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.54739,
      vd: 53.6,
      fl: 51.8,
      glass: "N-BALF5 / BAL5 class",
      role: "Positive half of the relay negative-power cemented component.",
      cemented: "C4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      fl: -27.9,
      glass: "S-LAH53 (OHARA)",
      role: "High-index lanthanum-flint half of the relay negative-power cemented component.",
      cemented: "C4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 52.1,
      glass: "F8 class (Hikari / HOYA)",
      role: "Strong positive relay element after the long relay air gap.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 43.7,
      fl: -37.6,
      glass: "J-LAF02 class (Hikari; patent 720/437)",
      role: "Rear relay negative element for field and astigmatism correction.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      fl: 101.2,
      glass: "N-SK11 (SCHOTT) / BACD11 (HOYA) class",
      role: "Final positive relay element near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 152.515, d: 6.27, nd: 1.48749, elemId: 1, sd: 27.3 },
    { label: "2", R: -291.307, d: 0.59, nd: 1.0, elemId: 0, sd: 27.0 },
    { label: "3", R: 121.674, d: 5.8, nd: 1.62041, elemId: 2, sd: 26.8 },
    { label: "4", R: -222.315, d: 2.41, nd: 1.78472, elemId: 3, sd: 26.2 },
    { label: "5", R: 583.052, d: 1.03, nd: 1.0, elemId: 0, sd: 25.8 },
    { label: "6", R: -569.43, d: 1.7, nd: 1.56873, elemId: 4, sd: 15.0 },
    { label: "7", R: 83.352, d: 2.0, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "8", R: 1e15, d: 4.0, nd: 1.76182, elemId: 5, sd: 14.7 },
    { label: "9", R: -52.45, d: 1.5, nd: 1.618, elemId: 6, sd: 14.5 },
    { label: "10", R: 69.088, d: 4.51, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "11", R: -47.831, d: 1.7, nd: 1.56873, elemId: 7, sd: 14.1 },
    { label: "12", R: -267.438, d: 44.25, nd: 1.0, elemId: 0, sd: 14.1 },
    { label: "STO", R: 1e15, d: 0.75, nd: 1.0, elemId: 0, sd: 13.42 },
    { label: "13", R: 158.234, d: 5.52, nd: 1.62012, elemId: 8, sd: 15.1 },
    { label: "14", R: -35.438, d: 1.51, nd: 1.72151, elemId: 9, sd: 15.4 },
    { label: "15", R: -94.092, d: 16.71, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "16", R: 42.042, d: 5.67, nd: 1.49831, elemId: 10, sd: 18.2 },
    { label: "17", R: -325.217, d: 0.6, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "18", R: 37.123, d: 10.6, nd: 1.54739, elemId: 11, sd: 18.0 },
    { label: "19", R: -107.794, d: 2.52, nd: 1.8061, elemId: 12, sd: 16.3 },
    { label: "20", R: 28.663, d: 39.0, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "21", R: 100.383, d: 7.17, nd: 1.59551, elemId: 13, sd: 19.4 },
    { label: "22", R: -43.65, d: 3.0, nd: 1.0, elemId: 0, sd: 19.4 },
    { label: "23", R: -38.74, d: 2.05, nd: 1.72, elemId: 14, sd: 19.5 },
    { label: "24", R: 91.922, d: 7.5, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "25", R: 78.964, d: 6.0, nd: 1.56384, elemId: 15, sd: 21.5 },
    { label: "26", R: -200.325, d: 54.0374319328, nd: 1.0, elemId: 0, sd: 21.8 },
  ],

  asph: {},

  zoomPositions: [85, 151.4, 250],
  zoomStep: 0.004,
  zoomLabels: ["85mm", "250mm"],

  var: {
    "5": [
      [1.03, 10.8738108715],
      [32.28, 42.1235841244],
      [48.06, 57.9035329394],
    ],
    "12": [
      [44.25, 44.25],
      [26.79, 26.79],
      [0.74, 0.74],
    ],
    "15": [
      [16.71, 16.71],
      [3.0, 3.0],
      [13.27, 13.27],
    ],
    "26": [
      [54.0374319328, 54.0374319328],
      [53.9201853657, 53.9201853657],
      [53.9117772352, 53.9117772352],
    ],
  },
  varLabels: [
    ["5", "D1 / Focus"],
    ["12", "D2a"],
    ["15", "D3"],
    ["26", "BF"],
  ],

  groups: [
    { text: "G1 Focus", fromSurface: "1", toSurface: "5" },
    { text: "G2 Variator", fromSurface: "6", toSurface: "12" },
    { text: "G3 Compensator", fromSurface: "13", toSurface: "15" },
    { text: "G4 Relay", fromSurface: "16", toSurface: "26" },
  ],
  doublets: [
    { text: "C1 L2-L3", fromSurface: "3", toSurface: "5" },
    { text: "C2 L5-L6", fromSurface: "8", toSurface: "10" },
    { text: "C3 L8-L9", fromSurface: "13", toSurface: "15" },
    { text: "C4 L11-L12", fromSurface: "18", toSurface: "20" },
  ],

  closeFocusM: 2.0,
  focusDescription:
    "Front-group focusing. Group I advances for close focus; close-focus D1 values are paraxially inferred for 2.0 m because the patent gives 3 m aberration curves but no close-focus spacing table.",
  nominalFno: 5,
  fstopSeries: [5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.82,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
