import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5
 *
 * Data source: US 4,025,167, Embodiment 2, Yoshitsugi Ikeda / Olympus Optical Co., Ltd.
 * Patent prescription: f = 85.0-250.0 mm, F/5, 15 elements in 11 air-separated components.
 *
 * Optical layout: four zoom groups. Group I is the front focusing group; Group II is the negative variator;
 * Group III is the positive compensator; Group IV is a fixed positive relay.
 *
 * Aperture stop: the patent gives no stop position. The Embodiment 2 table and Claim 3 list no stop surface,
 * Figs. 1-3 draw only the lens elements, and the text never mentions a diaphragm. The STO row is a modeling
 * inference with no figure basis: a flat surface in the D2 air gap, 0.75 mm ahead of r13, moving with
 * Group III. Its inputs are the patent's F = 1:5 for the whole 85.0-250.0 mm range (table header; F5 on the
 * Figs. 6A-6C and 7A-7C plots at f = 85.0, 151.4 and 250.0), the tabulated D1-D3 spacings, and the requirement
 * that one fixed opening give F/5 at all three positions. A single semi-diameter at this plane does so
 * paraxially within 0.05%. The stop radius is derived from the design f-number at wide and held at every zoom
 * station. The fixed-opening requirement excludes Groups I and II, where the paraxial F/5 marginal-ray height
 * changes with zoom (8.12 / 10.21 / 13.33 mm at r12), and is met anywhere from Group III to the image
 * (13.836 / 13.825 / 13.824 mm at r16). The on-axis F-number therefore does not depend on the choice within
 * that region; pupil position, vignetting and off-axis ray selection do. The 0.75 mm offset leaves 0.74 mm to
 * r12 at 250 mm, where D2 is 1.49 mm.
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
  schema: 2,
  key: "olympus-zuiko-auto-zoom-85-250mm-f5",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5",
  subtitle: "US 4,025,167 Embodiment 2 — Olympus / Ikeda",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["15 elements / 11 groups", "85-250mm", "f/5 constant aperture", "2ω ≈ 29°-10°", "All-spherical"],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: [85, 250], design: [85.1196, 250.0038] },
    fNumber: { marketing: 5, design: 5 },
  },

  source: {
    patentNumber: "US 4,025,167",
    patentYear: 1977,
    authors: ["Yoshitsugi Ikeda"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 206.3,
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
      focalLengthMm: 127.6,
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
      focalLengthMm: -204.8,
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
      focalLengthMm: -127.7,
      glass: "BAL22 (OHARA catalog equivalent; production supplier unspecified; patent 569632)",
      role: "First negative variator element.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.76182,
      vd: 26.6,
      focalLengthMm: 68.8,
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
      focalLengthMm: -48.0,
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
      focalLengthMm: -102.7,
      glass: "BAL22 (OHARA catalog equivalent; production supplier unspecified; patent 569632)",
      role: "Rear negative meniscus of the variator group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62012,
      vd: 49.7,
      focalLengthMm: 47.2,
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
      focalLengthMm: -79.7,
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
      focalLengthMm: 75.1,
      glass: "BSL3 (OHARA catalog equivalent; production supplier unspecified; patent 498650)",
      role: "First positive element of the fixed relay group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.54739,
      vd: 53.6,
      focalLengthMm: 51.8,
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
      focalLengthMm: -27.9,
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
      focalLengthMm: 52.1,
      glass: "E-F8 (HOYA catalog-equivalent to F8 class; patent supplier unspecified)",
      role: "Strong positive relay element after the long relay air gap.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: -37.6,
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
      focalLengthMm: 101.2,
      glass: "N-SK11 (SCHOTT) / BACD11 (HOYA) class",
      role: "Final positive relay element near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 152.515, d: 6.27, sd: 27.3, medium: 1 },
    { label: "2", R: -291.307, d: 0.59, sd: 27.0 },
    { label: "3", R: 121.674, d: 5.8, sd: 26.8, medium: 2 },
    { label: "4", R: -222.315, d: 2.41, sd: 26.2, medium: 3 },
    { label: "5", R: 583.052, sd: 25.8 },
    { label: "6", R: -569.43, d: 1.7, sd: 15.0, medium: 4 },
    { label: "7", R: 83.352, d: 2.0, sd: 14.8 },
    { label: "8", R: "flat", d: 4.0, sd: 14.7, medium: 5 },
    { label: "9", R: -52.45, d: 1.5, sd: 14.5, medium: 6 },
    { label: "10", R: 69.088, d: 4.51, sd: 14.3 },
    { label: "11", R: -47.831, d: 1.7, sd: 14.1, medium: 7 },
    { label: "12", R: -267.438, sd: 14.1 },
    { label: "STO", R: "flat", d: 0.75 },
    { label: "13", R: 158.234, d: 5.52, sd: 15.1, medium: 8 },
    { label: "14", R: -35.438, d: 1.51, sd: 15.4, medium: 9 },
    { label: "15", R: -94.092, sd: 15.6 },
    { label: "16", R: 42.042, d: 5.67, sd: 18.2, medium: 10 },
    { label: "17", R: -325.217, d: 0.6, sd: 18.0 },
    { label: "18", R: 37.123, d: 10.6, sd: 18.0, medium: 11 },
    { label: "19", R: -107.794, d: 2.52, sd: 16.3, medium: 12 },
    { label: "20", R: 28.663, d: 39.0, sd: 15.8 },
    { label: "21", R: 100.383, d: 7.17, sd: 19.4, medium: 13 },
    { label: "22", R: -43.65, d: 3.0, sd: 19.4 },
    { label: "23", R: -38.74, d: 2.05, sd: 19.5, medium: 14 },
    { label: "24", R: 91.922, d: 7.5, sd: 19.5 },
    { label: "25", R: 78.964, d: 6.0, sd: 21.5, medium: 15 },
    { label: "26", R: -200.325, sd: 21.8 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 85, label: "85mm" }, { focalLengthMm: 151.4 }, { focalLengthMm: 250, label: "250mm" }],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 2.0,
    description:
      "Front-group focusing. Group I advances for close focus; close-focus D1 values are paraxially inferred for 2.0 m because the patent gives 3 m aberration curves but no close-focus spacing table.",
  },

  gaps: {
    "5": {
      label: "D1 / Focus",
      values: [
        [1.03, 10.8738108715],
        [32.28, 42.1235841244],
        [48.06, 57.9035329394],
      ],
    },
    "12": {
      label: "D2a",
      values: [
        [44.25, 44.25],
        [26.79, 26.79],
        [0.74, 0.74],
      ],
    },
    "15": {
      label: "D3",
      values: [
        [16.71, 16.71],
        [3.0, 3.0],
        [13.27, 13.27],
      ],
    },
    "26": {
      label: "BF",
      values: [
        [54.0374319328, 54.0374319328],
        [53.9201853657, 53.9201853657],
        [53.9117772352, 53.9117772352],
      ],
    },
  },

  aperture: { nominalFNumber: 5, fStops: [5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

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

  layout: { scFill: 0.82, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
