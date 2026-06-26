import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,751,485, Ninth Embodiment, Table 9.             ║
 * ║  Nikon / Kenzaburo Suzuki macro lens with patent-described VR.     ║
 * ║  13 elements / 8 air-separated groups, all spherical surfaces.     ║
 * ║  Focus: internal floating focus; G11 and G2 move while G12 and GL  ║
 * ║  remain axially fixed in the patent coordinate system.             ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                            ║
 * ║    The patent places S in the variable gap d14 between G2 and GL    ║
 * ║    but does not tabulate its exact axial split. The STO surface     ║
 * ║    below is inserted 5.0 mm object-side of surface 15 for rendering;║
 * ║    patent d14 is represented as surface 14 -> STO plus STO -> 15.  ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS MODEL:                                               ║
 * ║    The patent gives three focus states. This prime-lens data format║
 * ║    stores infinity and 1:1 endpoints only. The mid-focus d5         ║
 * ║    excursion at beta = -0.5 (d5 = 14.20990 mm) is documented in    ║
 * ║    the companion analysis but is not representable as a non-       ║
 * ║    monotonic intermediate waypoint in the endpoint var model.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear apertures. Semi-diameters are ║
 * ║    inferred for LensVisualizer rendering from paraxial ray fans,    ║
 * ║    then clamped to physical edge-thickness and cross-gap sag        ║
 * ║    constraints. They should not be read as Nikon production part    ║
 * ║    diameters.                                                       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ No sensor cover glass, filters, mechanical parts, or barrel   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-micro-nikkor-200mm-f4d",
  maker: "Nikon",
  name: "NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED",
  subtitle: "US 5,751,485 — Ninth Embodiment, Table 9",
  specs: [
    "13 elements / 8 groups",
    "200 mm",
    "f/4 marketed; patent F/4.07",
    "2ω = 12.23° patent",
    "1:1 macro; IF/CRC floating focus",
    "All-spherical",
  ],
  focalLengthMarketing: 200,
  focalLengthDesign: 199.9963,
  apertureMarketing: 4,
  apertureDesign: 4.07,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1998,
  elementCount: 13,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      ng: 1.83464,
      fl: -189.7,
      glass: "Unmatched dense lanthanum flint class (804/339 patent code)",
      cemented: "D1",
      role: "Front negative flint element cemented to the first ED crown element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      ng: 1.50527,
      fl: 122.5,
      glass: "J-FKH1 (HIKARI, ED fluorophosphate)",
      cemented: "D1",
      role: "First ED positive element in the front achromat.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      ng: 1.50527,
      fl: 171.5,
      glass: "J-FKH1 (HIKARI, ED fluorophosphate)",
      role: "Second ED element; completes the positive front floating sub-group G11.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 40.9,
      ng: 1.82107,
      fl: -104.5,
      glass: "Unmatched lanthanum flint class (796/409 patent code)",
      cemented: "D2",
      role: "Negative member of the stationary G12 cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.64,
      ng: 1.6154,
      fl: 71.7,
      glass: "S-BSM14 (OHARA)",
      cemented: "D2",
      role: "Positive crown member of the weak positive G12 doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 57.03,
      ng: 1.63639,
      fl: -60.4,
      glass: "S-BSM10-class (OHARA; patent νd = 57.03)",
      cemented: "D3",
      role: "Front negative member of the first G2 cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80384,
      vd: 33.89,
      ng: 1.83464,
      fl: 73.7,
      glass: "Unmatched dense lanthanum flint class (804/339 patent code)",
      cemented: "D3",
      role: "High-index positive member of the first G2 doublet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.41,
      ng: 1.84731,
      fl: 159.6,
      glass: "S-TIH6 (OHARA)",
      cemented: "D4",
      role: "Dense flint positive meniscus; front member of the dominant negative G2 doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.14,
      ng: 1.63317,
      fl: -42.9,
      glass: "S-BSM16-class (OHARA; patent νd = 60.14)",
      cemented: "D4",
      role: "Strong negative crown element; completes G2.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.08,
      ng: 1.71783,
      fl: -107.3,
      glass: "S-TIM28 (OHARA)",
      cemented: "D5",
      role: "Negative flint member at the front of the fixed rear group GL.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.14,
      ng: 1.63317,
      fl: 52.5,
      glass: "S-BSM16-class (OHARA; patent νd = 60.14)",
      cemented: "D5",
      role: "Strong positive crown member of the GL front relay doublet.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12 / GLP",
      type: "Negative Meniscus",
      nd: 1.77279,
      vd: 49.45,
      ng: 1.79232,
      fl: -113.4,
      glass: "S-LAH66-class (OHARA; close to patent 773/495 code)",
      role: "Patent-designated negative vibration-reduction element GLP; fixed in the production non-VR lens.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.54814,
      vd: 45.87,
      ng: 1.56328,
      fl: 177.1,
      glass: "S-TIL1-class (OHARA; patent νd = 45.87)",
      role: "Rear positive field-correcting meniscus before the 58.809 mm back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 197.7383, d: 2.5, nd: 1.80384, elemId: 1, sd: 31.0 },
    { label: "2", R: 85.6098, d: 7.0, nd: 1.49782, elemId: 2, sd: 27.8 },
    { label: "3", R: -206.2828, d: 0.3, nd: 1.0, elemId: 0, sd: 27.8 },
    { label: "4", R: 71.6067, d: 6.0, nd: 1.49782, elemId: 3, sd: 29.6 },
    { label: "5", R: 431.05366, d: 6.6433, nd: 1.0, elemId: 0, sd: 29.6 },
    { label: "6", R: 79.0168, d: 2.5, nd: 1.79631, elemId: 4, sd: 27.0 },
    { label: "7", R: 39.9554, d: 8.8, nd: 1.60311, elemId: 5, sd: 25.0 },
    { label: "8", R: 478.742, d: 5.14048, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "9", R: 196.4322, d: 2.0, nd: 1.6228, elemId: 6, sd: 21.5 },
    { label: "10", R: 31.4573, d: 5.0, nd: 1.80384, elemId: 7, sd: 20.0 },
    { label: "11", R: 62.3232, d: 3.7, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "12", R: -105.6139, d: 4.0, nd: 1.80518, elemId: 8, sd: 16.0 },
    { label: "13", R: -58.945, d: 2.0, nd: 1.62041, elemId: 9, sd: 16.0 },
    { label: "14", R: 49.1628, d: 40.12496, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "STO", R: 1e15, d: 5.0, nd: 1.0, elemId: 0, sd: 14.7416 },
    { label: "15", R: 1206.1834, d: 2.0, nd: 1.68893, elemId: 10, sd: 15.8 },
    { label: "16", R: 69.6055, d: 6.0, nd: 1.62041, elemId: 11, sd: 16.5 },
    { label: "17", R: -59.1728, d: 46.5, nd: 1.0, elemId: 0, sd: 18.4 },
    { label: "18", R: -72.7684, d: 2.5, nd: 1.77279, elemId: 12, sd: 18.0 },
    { label: "19", R: -436.1421, d: 0.4, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "20", R: 86.7935, d: 6.0, nd: 1.54814, elemId: 13, sd: 18.2 },
    { label: "21", R: 799.37974, d: 58.809, nd: 1.0, elemId: 0, sd: 18.2 },
  ],

  asph: {},

  var: {
    "5": [6.6433, 6.6433],
    "8": [5.14048, 37.14078],
    "14": [40.12496, 8.12466],
  },

  varLabels: [
    ["5", "d5: G11-G12"],
    ["8", "d8: G12-G2"],
    ["14", "d14a: G2-STO"],
  ],

  groups: [
    { text: "G11", fromSurface: "1", toSurface: "5" },
    { text: "G12", fromSurface: "6", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "14" },
    { text: "GL", fromSurface: "15", toSurface: "21" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "12", toSurface: "14" },
    { text: "D5", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.5,
  apertureBlades: 9,
  focusDescription:
    "Internal floating focus from US 5,751,485 Table 9. Endpoint model: G2 moves imageward as d8 increases from 5.14048 mm to 37.14078 mm and patent d14 decreases from 45.12496 mm to 13.12466 mm; d5 returns to its infinity value at 1:1 but has a mid-focus excursion to 14.20990 mm at beta = -0.5.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.74,
  yScFill: 0.72,
  rayLeadFrac: 0.28,
  offAxisFieldFrac: 0.25,
} satisfies LensDataInput;

export default LENS_DATA;
