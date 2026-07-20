import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Nikon Fisheye-Nikkor 6mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,737,214, Example I, Yoshiyuki Shimizu /         ║
 * ║  Nippon Kogaku K.K.                                                ║
 * ║                                                                    ║
 * ║  12 glass elements in 9 groups, all spherical. The patent's        ║
 * ║  two flat filter surfaces R11/R12 are omitted per the data spec;   ║
 * ║  the R10-to-R13 spacing is folded as:                              ║
 * ║    25.0 mm air + 1.8 mm / 1.51823 + 2.8 mm air = 28.985591 mm.     ║
 * ║                                                                    ║
 * ║  Focus: production unit focus. The patent publishes no close-focus ║
 * ║  prescription, so the focus variable is a small last-gap extension ║
 * ║  estimated from the 6.3 mm fisheye projection constant at 0.25 m.  ║
 * ║                                                                    ║
 * ║  Stop: the aperture stop is not numerically specified in the       ║
 * ║  patent. It is inserted in the folded R10-to-R13 air space,        ║
 * ║  before the omitted filter plate, following the Fig. 1 layout.     ║
 * ║                                                                    ║
 * ║  Semi-diameters: patent-listed full effective diameters are used   ║
 * ║  where renderer-safe. The rear faces of L1-L3 are reduced from     ║
 * ║  the patent effective diameters to satisfy the spherical rim-slope ║
 * ║  renderer limit; rear group SDs are conservative estimates from    ║
 * ║  Fig. 1 proportions and edge/gap-sag checks.                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-fisheye-nikkor-6mm-f28",
  maker: "Nikon",
  name: "NIKON FISHEYE-NIKKOR 6mm f/2.8",
  subtitle: "US 3,737,214 Example I — Nippon Kogaku / Shimizu",
  specs: ["12 elements / 9 groups", "6 mm circular fisheye", "F/2.8", "220° angle of field", "All-spherical"],

  focalLengthMarketing: 6,
  focalLengthDesign: 6.3,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  projection: {
    kind: "fisheye-equidistant",
    focalLengthMm: 6.3,
    fullFieldDeg: 220,
    imageCircleMm: 23,
    maxTraceFieldDeg: 110,
  },
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,737,214",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1973,
  elementCount: 12,
  groupCount: 9,
  focusDescription: "Unit focus; entire optical assembly translates relative to the film plane.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -164.5,
      glass: "J-BK7A (HIKARI; N-BK7 / S-BSL7 equivalent)",
      role: "Large front dome; first stage of the graduated negative fisheye front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -106.9,
      glass: "J-BK7A (HIKARI; N-BK7 / S-BSL7 equivalent)",
      role: "Second negative meniscus; continues progressive inward bending of high-angle rays.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -37.6,
      glass: "J-BK7A (HIKARI; N-BK7 / S-BSL7 equivalent)",
      role: "Strongest of the three leading BK7 menisci; completes the primary negative front conversion.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      fl: -25.6,
      glass: "J-SK16 (HIKARI; N-SK16 / S-BSM16 equivalent)",
      role: "Dense-crown negative element; low-dispersion partner for the adjacent SF10 positive element.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      fl: 42.9,
      glass: "J-SF10 (HIKARI; N-SF10 / S-TIH10 equivalent)",
      role: "Dense-flint positive element; partially achromatizes and moderates the L4 front-group power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Weak Biconvex Positive",
      nd: 1.64831,
      vd: 33.8,
      fl: 172.1,
      glass: "J-SF2 class (HIKARI; patent nd is +0.00062 above current J-SF2)",
      role: "Weak positive lead element of the rearward relay group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.53375,
      vd: 55.4,
      fl: 35.6,
      glass: "534554 — crown glass (patent nd=1.53375, νd=55.4; no current HIKARI catalog match)",
      role: "Positive crown component of the first rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.5,
      fl: -59.6,
      glass: "J-LASF016 (HIKARI; S-LAH66 / TAF1 / N-LAF34 equivalent)",
      role: "High-index lanthanum-flint component of the positive first rear doublet.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 59.0,
      fl: 37.5,
      glass: "J-K3 (HIKARI; S-NSL3 equivalent)",
      role: "Crown component of the negative middle rear doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 40.8,
      fl: -31.5,
      glass: "Unmatched lanthanum dense flint (796/408; nearest current HIKARI glasses are J-LASF02/J-LASF03 class)",
      role: "High-index negative component of the field-flattening rear doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -36.9,
      glass: "J-SF1 (HIKARI; N-SF1 / S-TIH1 equivalent)",
      role: "Dense-flint leading element of the final positive achromat.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 29.3,
      glass: "J-BK7A (HIKARI; N-BK7 / S-BSL7 equivalent)",
      role: "Final BK7 crown element; completes the rear relay and presents a low-index last air interface.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 143.47, d: 7.0, nd: 1.5168, elemId: 1, sd: 106.5 },
    { label: "2", R: 52.5, d: 28.0, nd: 1.0, elemId: 0, sd: 46.7 },
    { label: "3", R: 76.4, d: 3.8, nd: 1.5168, elemId: 2, sd: 50.0 },
    { label: "4", R: 31.521, d: 21.8, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "5", R: 150.0, d: 3.0, nd: 1.5168, elemId: 3, sd: 28.0 },
    { label: "6", R: 17.1, d: 16.5, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "7", R: -60.0, d: 7.0, nd: 1.62041, elemId: 4, sd: 14.2 },
    { label: "8", R: 22.625, d: 0.6, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "9", R: 23.9, d: 12.6, nd: 1.72825, elemId: 5, sd: 14.0 },
    { label: "10", R: 78.988, d: 12.0, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "STO", R: 1e15, d: 16.98559111597057, nd: 1.0, elemId: 0, sd: 5.4 },
    { label: "13", R: 278.333, d: 3.0, nd: 1.64831, elemId: 6, sd: 9.0 },
    { label: "14", R: -185.42, d: 0.1, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "15", R: 52.03, d: 7.0, nd: 1.53375, elemId: 7, sd: 9.5 },
    { label: "16", R: -28.5, d: 2.0, nd: 1.7725, elemId: 8, sd: 9.5 },
    { label: "17", R: -77.0, d: 13.0, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "18", R: -45.0, d: 8.0, nd: 1.51823, elemId: 9, sd: 9.0 },
    { label: "19", R: -14.4, d: 0.6, nd: 1.79631, elemId: 10, sd: 8.2 },
    { label: "20", R: -34.5, d: 0.1, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "21", R: -110.0, d: 1.0, nd: 1.71736, elemId: 11, sd: 8.0 },
    { label: "22", R: 35.0, d: 3.5, nd: 1.5168, elemId: 12, sd: 8.0 },
    { label: "23", R: -25.763, d: 37.657, nd: 1.0, elemId: 0, sd: 8.0 },
  ],

  asph: {},
  var: {
    "23": [37.657, 37.819],
  },
  varLabels: [["23", "BF"]],
  groups: [
    { text: "FORWARD", fromSurface: "1", toSurface: "10" },
    { text: "REARWARD", fromSurface: "13", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 0.25,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.72,
  yScFill: 0.82,
  maxAspectRatio: 2.0,
} satisfies LensDataInput;

export default LENS_DATA;
