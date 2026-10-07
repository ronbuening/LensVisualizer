import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S NIKKOR 24-85mm f/3.5-4.5 G ED VR                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2011-221421 A, Example 4.                                     ║
 * ║ Selected research correlation to the production 24-85mm is convergent but ║
 * ║ not manufacturer-confirmed; patent-design and marketing quantities remain ║
 * ║ separate.                                                                 ║
 * ║                                                                            ║
 * ║ Patent architecture: 16 physical lens elements, 11 air-separated lens     ║
 * ║ components, 5 moving zoom groups (+ - + - +), and 3 aspherical surfaces.  ║
 * ║ The sequential table contains distinct thin nd=1.53610 / νd=41.42 media   ║
 * ║ at L21 and L51. They are retained as separate modeled material regions,   ║
 * ║ so `elements` has 18 entries while `elementCount` remains the patent's 16. ║
 * ║                                                                            ║
 * ║ Zoom: published infinity-focus d1-d4 states are preserved at wide, middle, ║
 * ║ and tele. The middle focal coordinate (48.0002430848 mm) and all three BF ║
 * ║ values are paraxially computed from the published prescription. G2 reverses║
 * ║ direction across the three fixed-image-plane source states.               ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent states that G2 moves  ║
 * ║ toward the object for near focus but publishes no numerical focus travel. ║
 * ║ Every zoom `var` pair therefore repeats the infinity value; the marketed   ║
 * ║ 0.38 m MFD is metadata only and is not used to invent a focus law.         ║
 * ║                                                                            ║
 * ║ Aperture model: the patent publishes no physical stop diameter. This model ║
 * ║ calibrates wide-open aperture to Figure 8's FNO labels 3.50 / 5.00 / 5.78 ║
 * ║ at the three modeled zoom states. Table 13's endpoint 3.60 / 5.80 values   ║
 * ║ remain a documented source discrepancy. STO.sd is the modeled wide-state   ║
 * ║ stop semi-diameter, not a source-published diaphragm dimension.            ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeled, not published. They were selected from exact   ║
 * ║ d-line meridional ray-envelope checks, a qualitative Figure 7 silhouette   ║
 * ║ check, and the current edge-thickness / rim-slope / conic / shared-gap     ║
 * ║ rules. Wide full-field rays show natural pupil truncation; no layout tuning║
 * ║ is used to conceal geometry failures.                                      ║
 * ║                                                                            ║
 * ║ Scale: s = 1.0. No prescription dimensions or asphere coefficients are     ║
 * ║ rescaled to force the patent's 87.20 mm endpoint to the marketed 85 mm.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-nikkor-24-85mm-f35-45g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24-85mm f/3.5-4.5 G ED VR",
  subtitle: "JP 2011-221421 A, Example 4 — selected production correlation; unconfirmed",
  specs: [
    "16 PHYSICAL ELEMENTS / 11 AIR-SPACED COMPONENTS / 5 ZOOM GROUPS",
    "PATENT DESIGN 24.70-87.20 mm",
    "MODELED F/3.50 / 5.00 / 5.78 (FIG. 8 CALIBRATION)",
    "3 ASPHERICAL SURFACES",
    "NO INTERNAL CLOSE-FOCUS RECONSTRUCTION",
  ],

  focalLengthMarketing: [24, 85],
  focalLengthDesign: [24.700144450895387, 87.20027451029127],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2011-221421 A",
  patentAuthors: ["Hiroshi Yamamoto"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2011,
  elementCount: 16,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: -113.08572953273159,
      glass: "847238 class (supplier unresolved)",
      role: "G1 front element; first member of source cemented component CL1.",
      cemented: "CL1",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.77249,
      vd: 49.61,
      indexReference: "d",
      fl: 98.85060398932735,
      glass: "773496 class (supplier unresolved)",
      role: "G1 positive member cemented to L11 in CL1.",
      cemented: "CL1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.62,
      indexReference: "d",
      fl: 108.63024580261093,
      glass: "816466 lanthanum-flint class",
      role: "Rear positive element of G1.",
    },
    {
      id: 4,
      name: "L21a",
      diagramLabel: "L21a",
      label: "L21 thin material region",
      type: "Thin Aspheric Material Layer",
      nd: 1.5361,
      vd: 41.42,
      indexReference: "d",
      fl: -2786.319073803334,
      glass: "Unmatched (nd=1.53610, νd=41.42; thin aspheric-layer material)",
      role: "Source Table 13 thin material region at the object-side asphere of physical lens L21.",
    },
    {
      id: 5,
      name: "L21b",
      diagramLabel: "L21b",
      label: "L21 bulk material region",
      type: "Negative Meniscus",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      fl: -19.239321717287677,
      glass: "835427 lanthanum-flint class",
      role: "Bulk material region of physical lens L21 in G2; bonded directly to L21a.",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.8348,
      vd: 42.72,
      indexReference: "d",
      fl: -89.15762180372217,
      glass: "835427 lanthanum-flint class",
      role: "Second negative lens component of G2.",
    },
    {
      id: 7,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.79,
      indexReference: "d",
      fl: 26.266181939187963,
      glass: "808228 high-dispersion flint class",
      role: "Positive member of the G2 cemented component CL2.",
      cemented: "CL2",
    },
    {
      id: 8,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Negative Lens (1× Asph)",
      nd: 1.82079,
      vd: 42.71,
      indexReference: "d",
      fl: -30.61437702578412,
      glass: "821427 class (supplier unresolved)",
      role: "Negative rear member of G2 CL2; image-side surface is aspherical.",
      cemented: "CL2",
    },
    {
      id: 9,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      indexReference: "d",
      fl: -35.280379981721204,
      glass: "904313 lanthanum-flint class",
      role: "Negative member of G3 cemented component CL3.",
      cemented: "CL3",
    },
    {
      id: 10,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.46,
      indexReference: "d",
      fl: 18.489013331358418,
      glass: "603655 crown class",
      role: "Positive member cemented to L31 in G3 CL3.",
      cemented: "CL3",
    },
    {
      id: 11,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      fl: 42.35097423539506,
      glass: "J-FKH1 — coordinate-compatible ED-class spectral proxy (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
      role: "Rear positive element of G3; sole very-high-Abbe source coordinate in Example 4.",
    },
    {
      id: 12,
      name: "L41",
      diagramLabel: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.45,
      indexReference: "d",
      fl: 23.78001982502827,
      glass: "001255 high-index flint class",
      role: "Positive member of G4 cemented stabilization component CL4.",
      cemented: "CL4",
    },
    {
      id: 13,
      name: "L42",
      diagramLabel: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.94,
      indexReference: "d",
      fl: -16.91139945825362,
      glass: "806409 class (supplier unresolved)",
      role: "Negative member cemented to L41; CL4 is the patent's transverse stabilization component.",
      cemented: "CL4",
    },
    {
      id: 14,
      name: "L43",
      diagramLabel: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      fl: -69.16124645899201,
      glass: "804466 lanthanum-flint class",
      role: "Rear negative element of G4.",
    },
    {
      id: 15,
      name: "L51a",
      diagramLabel: "L51a",
      label: "L51 thin material region",
      type: "Thin Aspheric Material Layer",
      nd: 1.5361,
      vd: 41.42,
      indexReference: "d",
      fl: 197.2741289433022,
      glass: "Unmatched (nd=1.53610, νd=41.42; thin aspheric-layer material)",
      role: "Source Table 13 thin material region at the object-side asphere of physical lens L51.",
    },
    {
      id: 16,
      name: "L51b",
      diagramLabel: "L51b",
      label: "L51 bulk material region",
      type: "Positive Lens",
      nd: 1.8061,
      vd: 40.94,
      indexReference: "d",
      fl: 29.118949036710664,
      glass: "806409 class (supplier unresolved)",
      role: "Bulk material region of physical lens L51 in G5; bonded directly to L51a.",
    },
    {
      id: 17,
      name: "L52",
      diagramLabel: "L52",
      label: "L52",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      indexReference: "d",
      fl: 49.19095722095168,
      glass: "487704 crown class",
      role: "Positive member of G5 cemented component CL5.",
      cemented: "CL5",
    },
    {
      id: 18,
      name: "L53",
      diagramLabel: "L53",
      label: "L53",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: -26.41036338596096,
      glass: "847238 class (supplier unresolved)",
      role: "Negative rear member cemented to L52 in G5 CL5.",
      cemented: "CL5",
    },
  ],

  surfaces: [
    { label: "1", R: 372.6274, d: 2.0, nd: 1.84666, elemId: 1, sd: 33.0 },
    { label: "2", R: 75.9854, d: 6.7706, nd: 1.77249, elemId: 2, sd: 31.0 },
    { label: "3", R: 14844.181, d: 0.1, nd: 1.0, elemId: 0, sd: 30.9 },
    { label: "4", R: 50.94, d: 4.9948, nd: 1.816, elemId: 3, sd: 27.5 },
    { label: "5", R: 114.4889, d: 3.1, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "6A", R: 73.7591, d: 0.1, nd: 1.5361, elemId: 4, sd: 12.8 },
    { label: "7", R: 70.2551, d: 1.35, nd: 1.8348, elemId: 5, sd: 12.8 },
    { label: "8", R: 12.9582, d: 7.0662, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "9", R: -45.1259, d: 1.0, nd: 1.8348, elemId: 6, sd: 10.2 },
    { label: "10", R: -115.7746, d: 0.1, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "11", R: 130.567, d: 3.985, nd: 1.80809, elemId: 7, sd: 10.0 },
    { label: "12", R: -25.0, d: 1.2, nd: 1.82079, elemId: 8, sd: 10.1 },
    { label: "13A", R: -5015.0001, d: 18.37739, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 7.410260781095673 },
    { label: "15", R: 24.398, d: 1.3049, nd: 1.90366, elemId: 9, sd: 8.6 },
    { label: "16", R: 13.4702, d: 4.2437, nd: 1.603, elemId: 10, sd: 8.85 },
    { label: "17", R: -57.0278, d: 0.1, nd: 1.0, elemId: 0, sd: 8.85 },
    { label: "18", R: 29.6013, d: 2.6177, nd: 1.49782, elemId: 11, sd: 9.6 },
    { label: "19", R: -71.1125, d: 1.99464, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "20", R: -37.4166, d: 2.45, nd: 2.00069, elemId: 12, sd: 9.5 },
    { label: "21", R: -15.022, d: 1.0, nd: 1.8061, elemId: 13, sd: 9.65 },
    { label: "22", R: 151.7344, d: 4.1314, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "23", R: -33.7925, d: 1.0, nd: 1.804, elemId: 14, sd: 10.5 },
    { label: "24", R: -87.2793, d: 5.90657, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "25A", R: 388.1656, d: 0.22, nd: 1.5361, elemId: 15, sd: 13.3 },
    { label: "26", R: -145.3355, d: 4.6004, nd: 1.8061, elemId: 16, sd: 13.4 },
    { label: "27", R: -20.4944, d: 0.3, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "28", R: -224.8928, d: 4.3669, nd: 1.48749, elemId: 17, sd: 13.3 },
    { label: "29", R: -21.8074, d: 1.0, nd: 1.84666, elemId: 18, sd: 13.3 },
    { label: "30", R: -900.0, d: 38.81814907849475, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: 3.3088e-8,
      A6: -3.8434e-8,
      A8: 7.4727e-11,
      A10: -1.035e-13,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -1.4327e-5,
      A6: -9.7737e-8,
      A8: 4.0776e-10,
      A10: -3.0925e-12,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -3.961e-5,
      A6: 4.0647e-9,
      A8: -9.6361e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [24.7, 48.00024308480147, 87.2],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [3.1, 3.1],
      [19.45499, 19.45499],
      [34.60972, 34.60972],
    ],
    "13A": [
      [18.37739, 18.37739],
      [7.76715, 7.76715],
      [1.5, 1.5],
    ],
    "19": [
      [1.99464, 1.99464],
      [4.84201, 4.84201],
      [6.59326, 6.59326],
    ],
    "24": [
      [5.90657, 5.90657],
      [3.05904, 3.05904],
      [1.3, 1.3],
    ],
    "30": [
      [38.81814907849475, 38.81814907849475],
      [47.46935537791394, 47.46935537791394],
      [56.18994076426702, 56.18994076426702],
    ],
  },
  varLabels: [
    ["5", "d1"],
    ["13A", "d2"],
    ["19", "d3"],
    ["24", "d4"],
    ["30", "BF (modeled paraxial)"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6A", toSurface: "13A" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "19" },
    { text: "G4 (-)", fromSurface: "20", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25A", toSurface: "30" },
  ],
  doublets: [
    { text: "CL1", fromSurface: "1", toSurface: "3" },
    { text: "CL2", fromSurface: "11", toSurface: "13A" },
    { text: "CL3", fromSurface: "15", toSurface: "17" },
    { text: "CL4", fromSurface: "20", toSurface: "22" },
    { text: "CL5", fromSurface: "28", toSurface: "30" },
  ],

  closeFocusM: 0.38,
  focusDescription:
    "The patent describes G2 moving toward the object for close focus but gives no numerical travel, so focus remains fixed at infinity. The 0.38 m minimum focus distance is a production specification.",

  nominalFno: [3.5, 5.0, 5.78],
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 8, 11, 16, 22],

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
