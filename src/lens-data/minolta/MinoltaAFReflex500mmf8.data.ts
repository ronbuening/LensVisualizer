import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — Minolta AF Reflex 500mm f/8                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,951,078, Table 1 / Embodiment 1 (Okada / Minolta).   ║
 * ║  All-spherical catadioptric Cassegrain with two Mangin mirrors.          ║
 * ║  Patent design EFL: 495.9725 mm from independent paraxial trace.         ║
 * ║  Manufacturer spec: 500mm F8 Reflex, 5 groups / 7 elements, but Sony     ║
 * ║  states that the published group/element count includes the required     ║
 * ║  plug-in normal or ND4X filter.                                          ║
 * ║                                                                            ║
 * ║  NOTE ON FILTER MODELING:                                                 ║
 * ║    The patent includes r15-r16 as a 2.0 mm plane-parallel plug-in filter. ║
 * ║    Project data rules exclude filters from the surfaces array, so r15-r16 ║
 * ║    are folded into the final air-equivalent BFD:                          ║
 * ║      d14_to_IMG = d14 + d15 / n_filter + BFD_after_r16                   ║
 * ║                 = 2.7 + 2.0 / 1.5168 + 62.3611466 = 66.379712 mm.         ║
 * ║                                                                            ║
 * ║  NOTE ON SHARED PRIMARY BLANK:                                            ║
 * ║    The patent uses the primary mirror blank in two radial roles. M1 is    ║
 * ║    the silvered annular shell (r3/r4/r5). L5 is the clear central plug    ║
 * ║    of the same glass blank used later as the third member of the rear     ║
 * ║    cemented relay (r11/r12). They share the same axial stations, radii,   ║
 * ║    glass, and center thickness, but are split into complementary rendered ║
 * ║    regions so the tracer can distinguish the annular mirror from the      ║
 * ║    central refractive relay path.                                         ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║    Patent Table 1 gives no general clear apertures. The stop and central  ║
 * ║    obstruction are derived from FNO(OUT)=6.59, FNO(IN)=18.20, and the     ║
 * ║    listed inside effective radius on r2=13.5. Other SDs are conservative  ║
 * ║    paraxial/diagram estimates checked against edge thickness, annular     ║
 * ║    nesting, and cross-gap sag constraints.                                ║
 * ║                                                                            ║
 * ║  NOTE ON FOCUS:                                                           ║
 * ║    The patent publishes only the infinity prescription. Close focus is    ║
 * ║    therefore not optically modeled; the manufacturer MFD is retained.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-reflex-500mm-f8",
  maker: "Minolta",
  name: "MINOLTA AF Reflex 500mm f/8",
  subtitle: "US 4,951,078 Embodiment 1 — Okada / Minolta",
  specs: [
    "500 mm f/8 fixed",
    "f = 495.97 mm patent EFL",
    "f/7.07 area-equivalent annular design aperture",
    "5 groups / 7 elements incl. plug-in filter",
    "All-spherical catadioptric Cassegrain",
  ],

  focalLengthMarketing: 500,
  focalLengthDesign: 495.9725,
  apertureMarketing: 8,
  apertureDesign: 7.07,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,951,078",
  patentAuthors: ["Takashi Okada"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1990,
  elementCount: 7,
  groupCount: 5,

  opticalPath: {
    surfaceOrder: [
      "1",
      "2",
      "STO",
      "OBS",
      "M1F",
      "M1R",
      "M1F",
      "SEC_R",
      "SEC_M",
      "SEC_R",
      "9",
      "10",
      "L5F",
      "L5R",
      "13",
      "14",
    ],
    imagePlane: { z: 153.979711986463, label: "IMG" },
    maxInteractions: 20,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front meniscus corrector",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 626.17,
      glass: "BSC7 / N-BK7 class (517/642)",
      apd: false,
      role: "Full-aperture front corrector ahead of the folded mirror group.",
    },
    {
      id: 2,
      name: "M1",
      label: "Annular primary Mangin mirror shell",
      type: "Annular Mangin Primary Mirror",
      nd: 1.67,
      vd: 57.07,
      fl: 110.34,
      glass: "670571 - lanthanum crown (catalog unresolved)",
      apd: false,
      fromSurface: "M1F",
      toSurface: "M1R",
      role: "Second-surface concave primary mirror; annular shell of the shared primary blank.",
    },
    {
      id: 3,
      name: "M2",
      label: "Secondary Mangin mirror",
      type: "Mangin Secondary Mirror",
      nd: 1.5168,
      vd: 64.2,
      fl: -37.0,
      glass: "BSC7 / N-BK7 class (517/642)",
      apd: false,
      fromSurface: "SEC_M",
      toSurface: "SEC_R",
      role: "Convex diverging secondary mirror returning the beam through the primary center.",
    },
    {
      id: 4,
      name: "L3",
      label: "Relay positive element",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      fl: 33.08,
      glass: "LAC8 / N-LAK8 class (713/539)",
      apd: false,
      cemented: "T1",
      role: "Strong positive member of the rear cemented relay.",
    },
    {
      id: 5,
      name: "L4",
      label: "Relay negative element",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -48.72,
      glass: "BSC7 / N-BK7 class (517/642)",
      apd: false,
      cemented: "T1",
      role: "Negative middle member of the rear cemented relay.",
    },
    {
      id: 6,
      name: "L5",
      label: "Clear central plug of primary blank",
      type: "Nearly Afocal Meniscus",
      nd: 1.67,
      vd: 57.07,
      fl: -1636.42,
      glass: "670571 - lanthanum crown (catalog unresolved)",
      apd: false,
      fromSurface: "L5F",
      toSurface: "L5R",
      cemented: "T1",
      role: "Clear central refractive part of the same physical blank as the annular primary mirror shell.",
    },
    {
      id: 7,
      name: "L6",
      label: "Rear negative field corrector",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 57.07,
      fl: -97.15,
      glass: "670571 - lanthanum crown (catalog unresolved)",
      apd: false,
      role: "Rear negative meniscus controlling Petzval curvature and final relay aberrations.",
    },
  ],

  surfaces: [
    { label: "1", R: 273.895, d: 8.1, nd: 1.5168, elemId: 1, sd: 40.0 },
    { label: "2", R: 1765.069, d: 1.0, nd: 1.0, elemId: 0, sd: 38.6 },

    // Keep the separate blocker infinitesimally behind the stop so the explicit path does not double-hit one plane.
    { label: "STO", R: 1e15, d: 0.001, nd: 1.0, elemId: 0, sd: 37.63 },
    { label: "OBS", R: 1e15, d: 2.199, nd: 1.0, elemId: 0, sd: 13.5, interaction: { type: "block" } },

    // Physical front-to-rear order places the secondary mirror before the primary.
    // The opticalPath first skips it, then revisits SEC_R → SEC_M → SEC_R after the primary reflection.
    {
      label: "SEC_M",
      R: -104.503,
      d: 4.7,
      nd: 1.5168,
      elemId: 3,
      sd: 15.0,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "SEC_R", R: -560.818, d: 41.2, nd: 1.0, elemId: 0, sd: 15.0 },

    { label: "9", R: -232.291, d: 4.2, nd: 1.713, elemId: 4, sd: 12.0 },
    { label: "10", R: -21.573, d: 7.5, nd: 1.5168, elemId: 5, sd: 12.0 },

    // L5F/L5R are the central clear plug; M1F/M1R are the complementary annular mirror shell.
    // The zero axial gaps are intentional same-station splits with non-overlapping radial material bands.
    { label: "L5F", R: -168.58, d: 0.0, nd: 1.67, elemId: 6, sd: 12.0 },
    { label: "M1F", R: -168.58, d: 11.7, nd: 1.67, elemId: 2, sd: 38.5, innerSd: 13.5 },
    {
      label: "M1R",
      R: -204.757,
      d: 0.0,
      nd: 1.0,
      elemId: 0,
      sd: 38.5,
      innerSd: 13.5,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "L5R", R: -204.757, d: 4.5, nd: 1.0, elemId: 0, sd: 12.0 },

    { label: "13", R: -23.966, d: 2.5, nd: 1.67, elemId: 7, sd: 11.2 },
    { label: "14", R: -39.52, d: 66.379711986463, nd: 1.0, elemId: 0, sd: 11.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "L1 front corrector", fromSurface: "1", toSurface: "2" },
    { text: "M2 secondary", fromSurface: "SEC_M", toSurface: "SEC_R" },
    { text: "M1 annular primary", fromSurface: "M1F", toSurface: "M1R" },
    { text: "Rear cemented relay", fromSurface: "9", toSurface: "L5R" },
    { text: "Rear field corrector", fromSurface: "13", toSurface: "14" },
  ],

  doublets: [{ text: "T1", fromSurface: "9", toSurface: "L5R" }],

  closeFocusM: 4.0,
  focusDescription:
    "Production lens minimum focus is 4.0 m. US 4,951,078 publishes only the infinity prescription, so close-focus optical spacings are not modeled.",

  nominalFno: 8,
  fstopSeries: [8],
  maxFstop: 8,

  scFill: 0.66,
  yScFill: 0.72,
  offAxisFieldFrac: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
