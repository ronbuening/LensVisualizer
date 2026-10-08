import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — NIKON NIKKOR Z 70-200mm f/2.8 VR S II
 *
 * Data source: WO 2026/172598 A1, Example 1 (Table 1, Fig. 1), Nikon Corporation; inventor Akino Takahashi.
 * Production correlation is convergent (18/16 construction, internal zoom, two-group floating focus, special-element
 * counts) but is not confirmed by Nikon. Native patent scale; no scaling applied.
 *
 * 18 elements / 16 groups, 4 aspherical surfaces (17, 18, 23, 34; κ = 1 in the patent equation, so K = 0).
 * Seven groups + − − + − + −. Internal zoom: G1, G4 and G7 fixed; G2 and G3 move imageward; G5 and G6 reverse.
 * Zoom-only gaps: D6, D8, D14. Zoom + focus gaps: D27, D31, D33 (D27/D33 reverse over zoom).
 * Stop SP is the patent's surface 19. The FL plate (surfaces 36–37) is authored in rearPlates; D37 = 0.174 in every
 * published state and is held fixed.
 *
 * FOCUS — CONSTRAINED RECONSTRUCTION (not published). Example 1 publishes infinity states only. Close-focus gaps are
 * solved paraxially: G5 imageward, G6 objectward, image plane fixed, object-to-image distance 0.38 / 0.60 / 0.80 m
 * (Nikon MFD at 70 / 135 / 200 mm). Wide and tele also meet Nikon's 0.30× / 0.25× maximum reproduction ratios
 * (unique admissible solutions). Nikon publishes no 135 mm ratio; the mid state uses a declared rule: the G6/G5 travel
 * ratio is the mean of the wide and tele solutions (−0.7956), giving β ≈ −0.253. Intermediate states interpolate.
 *
 * SEMI-DIAMETERS — not published. Base values are modeled: 1.04 × the largest real-ray height of the full-aperture
 * axial bundle, the full-field (Y = 21.7) chief ray and the 0.6-field ±0.5-pupil rays over 15 zoom/focus states,
 * rounded up to 0.05 mm, cemented doublets equalized. Six rims then follow the wide-end panel of patent Fig. 1
 * (0.0782 mm/px at 600 dpi, scale from 34 vertex spacings), where the drawing is 12–22% taller than the ray model:
 * L21 (7: 22.6, 8: 20.7), L61 (32/33: 18.3) and L71 (34A: 17.5, 35: 18.7). All other rims agree with the figure within
 * about 7% and are kept. Surfaces 12/13 are held at 18.72 mm, just above the tele axial marginal height (18.69 mm);
 * their rims would touch at 19.16 mm (the figure draws L32/L33 in edge contact). That band needs gapSagFrac = 0.96
 * (intrusion ≈ 95.4%).
 * STO sd is the real-ray value for f/2.891 at wide (buildLens recomputes it); the same fixed iris reproduces the
 * published f/2.904 and f/2.905 at mid and tele.
 *
 * FOCAL LENGTHS — focalLengthDesign and zoomPositions are the patent's printed f (71.402 / 134.997 / 195.996 mm). The
 * paraxial EFL computed from the tabulated surfaces is 71.404 / 135.000 / 196.005 mm (difference is table rounding).
 * nominalFno is the patent's FNO in the same wide / middle / tele order. fstopSeries starts at f/4 because the UI
 * prepends the wide-open value (f/2.89–2.91) itself; f/2.8 is the marketing aperture and is not reachable.
 * Nikon publishes 11 blades, f/22 minimum aperture and Z TC-1.4x / TC-2.0x compatibility (acceptsTeleconverters).
 *
 * Glass names are coordinate-compatible catalog counterparts; they do not establish supplier or melt.
 */

const LENS_DATA = {
  key: "nikkor-z-70-200f28-vr-s-ii",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 70-200mm f/2.8 VR S II",
  subtitle: "WO 2026/172598 A1 Example 1 — strong production correlation; not manufacturer-confirmed",
  specs: ["18 ELEMENTS / 16 GROUPS", "f = 71.4–196.0 mm", "F/2.89–2.91", "2ω = 34.7°–12.5°", "4 ASPHERICAL SURFACES"],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [71.402, 195.996],
  apertureMarketing: 2.8,
  apertureDesign: 2.891,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2026/172598 A1",
  patentAuthors: ["Akino Takahashi"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2026,
  elementCount: 18,
  groupCount: 16,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.32,
      fl: 327.78,
      glass: "J-FK5 (HIKARI) — 487703 class; supplier unconfirmed",
      apd: false,
      role: "G1 front positive meniscus, convex to object",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.74,
      fl: -294.14,
      glass: "NBFD29 (HOYA) — 770297 class; supplier unconfirmed",
      apd: false,
      role: "G1 negative flint meniscus, convex to object; achromatizing partner within G1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.43384,
      vd: 95.24,
      fl: 135.65,
      glass: "CaF2 (fluorite crystal) — inferred from nd, θgF and Nikon's one-fluorite construction",
      apd: "inferred",
      apdNote:
        "Calcium fluoride inferred; CaF2 PgF ≈ 0.539, ΔPgF ≈ +0.055 vs the engine normal line (not a patent statement)",
      role: "G1 rear plano-convex element; principal positive power of G1",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.55298,
      vd: 55.07,
      fl: -82.86,
      glass: "J-KZFH4 (HIKARI) — 553551 class; supplier unconfirmed",
      apd: false,
      role: "Sole element of negative zoom group G2",
    },
    {
      id: 5,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5186,
      vd: 69.89,
      fl: -83.58,
      glass: "J-PKH1 (HIKARI) — 519699 class; supplier unconfirmed",
      apd: false,
      role: "G3 front biconcave negative element",
    },
    {
      id: 6,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: 88.1,
      glass:
        "TAFD40 (HOYA) — 2.00069/25.46 coordinate also listed as CDGM H-ZLaF90A and HIKARI J-LASFH17; supplier unresolved",
      apd: false,
      role: "G3 high-index positive meniscus, convex to object",
    },
    {
      id: 7,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      fl: -125.97,
      glass: "FCD100 (HOYA) — 437951 class; supplier unconfirmed",
      apd: "inferred",
      apdNote: "FCD100-class coordinate; catalog PgF ≈ 0.534, ΔPgF ≈ +0.050 vs the engine normal line",
      role: "G3 rear biconcave negative element in ultra-low-dispersion glass",
    },
    {
      id: 8,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.622,
      vd: 30.66,
      fl: 103.04,
      glass: "J-SFH8 (HIKARI) — 622307 class; supplier unconfirmed (dPgF carries the patent θgF)",
      apd: "inferred",
      apdNote:
        "Patent θgF = 0.625 (conditions 10/14); dPgF = 0.625 − (0.6438 − 0.001682·30.66) ≈ +0.0328. Unconfirmed candidate for Nikon's SR element",
      dPgF: 0.0328,
      role: "G4 front positive meniscus; the patent's 'lens A' of conditions (8)–(10)",
    },
    {
      id: 9,
      name: "L42",
      diagramLabel: "L42",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      fl: 93.8,
      glass: "M-FCD1 (HOYA) — 497816 class, moldable ED; supplier unconfirmed",
      apd: "inferred",
      apdNote: "FCD1-class coordinate; catalog PgF ≈ 0.539, ΔPgF ≈ +0.032 vs the engine normal line",
      role: "G4 double-sided aspheric biconvex element ahead of the stop",
    },
    {
      id: 10,
      name: "L43",
      diagramLabel: "L43",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      fl: -35.2,
      glass: "NBFD25 (HOYA) — 855252 class; supplier unconfirmed",
      apd: false,
      role: "Negative flint member of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 11,
      name: "L44",
      diagramLabel: "L44",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 100.46,
      glass: "J-FKH1 (HIKARI) — 498826 class; supplier unconfirmed",
      apd: "inferred",
      apdNote: "J-FKH1-class coordinate; catalog PgF ≈ 0.539, ΔPgF ≈ +0.034 vs the engine normal line",
      role: "Positive ED member of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 12,
      name: "L45",
      diagramLabel: "L45",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59306,
      vd: 66.97,
      fl: 49.42,
      glass: "J-PSKH4 (HIKARI) — 593670 class; not coordinate-identical (Δnd +0.00043), supplier/melt unresolved",
      apd: false,
      role: "Aspheric positive member of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L46",
      diagramLabel: "L46",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.74,
      fl: -199.15,
      glass: "J-SFH1 (HIKARI) — 808227 class; supplier unconfirmed",
      apd: false,
      role: "Negative flint member of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 14,
      name: "L47",
      diagramLabel: "L47",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: 92.21,
      glass: "NBFD15 (HOYA) — 806333 class, also CDGM H-ZLaF56B; supplier unresolved",
      apd: false,
      role: "G4 rear positive meniscus",
    },
    {
      id: 15,
      name: "L51",
      diagramLabel: "L51",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.74,
      fl: 130.73,
      glass: "J-SFH1 (HIKARI) — 808227 class; supplier unconfirmed",
      apd: false,
      role: "Positive member of focus group G5",
    },
    {
      id: 16,
      name: "L52",
      diagramLabel: "L52",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.35,
      fl: -37.72,
      glass: "J-LASF014 (HIKARI) — 788474 class; supplier unconfirmed",
      apd: false,
      role: "Negative member of focus group G5",
    },
    {
      id: 17,
      name: "L61",
      diagramLabel: "L61",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.68376,
      vd: 37.64,
      fl: 64.8,
      glass: "J-KZFH6 (HIKARI) — 684376 class; supplier unconfirmed",
      apd: false,
      role: "Sole element of positive focus group G6",
    },
    {
      id: 18,
      name: "L71",
      diagramLabel: "L71",
      label: "Element 18",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58335,
      vd: 59.55,
      fl: -83.23,
      glass:
        "583595 class — CDGM D-ZK2A / HOYA M-BACD12 coordinate family; not coordinate-identical, supplier unresolved",
      apd: false,
      role: "Fixed rear negative meniscus G7, concave to object",
    },
  ],

  surfaces: [
    { label: "1", R: 148.0643, d: 5.2, nd: 1.48749, elemId: 1, sd: 35.1 }, // G1: L11 front
    { label: "2", R: 1994.3176, d: 0.2, nd: 1, elemId: 0, sd: 35 }, // L11 rear → air
    { label: "3", R: 80.0925, d: 1.75, nd: 1.77047, elemId: 2, sd: 34.2 }, // L12 front
    { label: "4", R: 58.6156, d: 0.15, nd: 1, elemId: 0, sd: 33.15 }, // L12 rear → air
    { label: "5", R: 58.8499, d: 12.3, nd: 1.43384, elemId: 3, sd: 33.15 }, // L13 front (fluorite)
    { label: "6", R: 1e15, d: 2.309, nd: 1, elemId: 0, sd: 32.65 }, // L13 rear (plane) → air [VAR zoom D6]
    { label: "7", R: 175.6186, d: 1.2, nd: 1.55298, elemId: 4, sd: 22.6 }, // G2: L21 front
    { label: "8", R: 36.2521, d: 16.234, nd: 1, elemId: 0, sd: 20.7 }, // L21 rear → air [VAR zoom D8]
    { label: "9", R: -87.8742, d: 1.2, nd: 1.5186, elemId: 5, sd: 18.7 }, // G3: L31 front
    { label: "10", R: 85.9441, d: 0.92, nd: 1, elemId: 0, sd: 19.05 }, // L31 rear → air
    { label: "11", R: 61.6974, d: 3.35, nd: 2.00069, elemId: 6, sd: 19.55 }, // L32 front
    { label: "12", R: 199.9422, d: 3.78, nd: 1, elemId: 0, sd: 18.72 }, // L32 rear → air
    { label: "13", R: -65.6269, d: 1.3, nd: 1.437, elemId: 7, sd: 18.72 }, // L33 front
    { label: "14", R: 343.5775, d: 44.546, nd: 1, elemId: 0, sd: 19.9 }, // L33 rear → air [VAR zoom D14]
    { label: "15", R: 44.899, d: 5.2, nd: 1.622, elemId: 8, sd: 20.8 }, // G4: L41 front
    { label: "16", R: 143.2662, d: 1.14, nd: 1, elemId: 0, sd: 20.6 }, // L41 rear → air
    { label: "17A", R: 51.0231, d: 7.3, nd: 1.4971, elemId: 9, sd: 20.3 }, // L42 front (asph)
    { label: "18A", R: -515.3446, d: 3.46, nd: 1, elemId: 0, sd: 19.7 }, // L42 rear (asph) → air
    { label: "STO", R: 1e15, d: 6.57, nd: 1, elemId: 0, sd: 17.96 }, // aperture stop SP (patent surface 19)
    { label: "20", R: 510.7413, d: 1.25, nd: 1.85451, elemId: 10, sd: 17.35 }, // L43 front (D1)
    { label: "21", R: 28.375, d: 4.9, nd: 1.49782, elemId: 11, sd: 17.35 }, // L43→L44 junction
    { label: "22", R: 61.8272, d: 2.35, nd: 1, elemId: 0, sd: 17.35 }, // L44 rear → air
    { label: "23A", R: 52.6942, d: 8.15, nd: 1.59306, elemId: 12, sd: 17.1 }, // L45 front (asph, D2)
    { label: "24", R: -62.24, d: 1.15, nd: 1.80809, elemId: 13, sd: 17.1 }, // L45→L46 junction
    { label: "25", R: -102.3307, d: 1.45, nd: 1, elemId: 0, sd: 17.1 }, // L46 rear → air
    { label: "26", R: 53.2315, d: 3.1, nd: 1.8061, elemId: 14, sd: 16.55 }, // L47 front
    { label: "27", R: 182.6567, d: 3.004, nd: 1, elemId: 0, sd: 16.3 }, // L47 rear → air [VAR zoom+focus D27]
    { label: "28", R: 286.532, d: 2.6, nd: 1.80809, elemId: 15, sd: 13.45 }, // G5: L51 front
    { label: "29", R: -166.6633, d: 1.1, nd: 1, elemId: 0, sd: 13.05 }, // L51 rear → air
    { label: "30", R: -303.2044, d: 1.2, nd: 1.788, elemId: 16, sd: 12.4 }, // L52 front
    { label: "31", R: 33.0069, d: 29.459, nd: 1, elemId: 0, sd: 11.6 }, // L52 rear → air [VAR zoom+focus D31]
    { label: "32", R: 133.0887, d: 5.4, nd: 1.68376, elemId: 17, sd: 18.3 }, // G6: L61 front
    { label: "33", R: -65.3298, d: 5.625, nd: 1, elemId: 0, sd: 18.3 }, // L61 rear → air [VAR zoom+focus D33]
    { label: "34A", R: -34.6941, d: 1.4, nd: 1.58335, elemId: 18, sd: 17.5 }, // G7: L71 front (asph)
    { label: "35", R: -123.343, d: 29.75, nd: 1, elemId: 0, sd: 18.7 }, // L71 rear → physical gap to FL
  ],

  rearPlates: [
    {
      label: "FL",
      thicknessMm: 1.6,
      nd: 1.5168,
      vd: 64.13,
      glass: "J-BK7A",
      gapAfterMm: 0.174,
      source: "WO 2026/172598 A1, Example 1, Table 1 surfaces 36–37 (D37 printed variable; 0.174 in all states)",
    },
  ],

  asph: {
    "17A": { K: 0, A4: -1.14012e-6, A6: -3.66784e-11, A8: 0, A10: 0, A12: 0, A14: 0 },
    "18A": { K: 0, A4: 1.30042e-6, A6: 1.61832e-10, A8: -1.7047e-13, A10: 0, A12: 0, A14: 0 },
    "23A": { K: 0, A4: -1.60023e-6, A6: 8.51352e-11, A8: -5.5987e-13, A10: 0, A12: 0, A14: 0 },
    "34A": { K: 0, A4: 5.46682e-6, A6: 2.52568e-10, A8: 4.7014e-12, A10: -4.3092e-15, A12: 0, A14: 0 },
  },

  var: {
    // Zoom-only gaps (identical infinity/close values; Table 1 W/M/T)
    "6": [
      [2.309, 2.309],
      [34.81, 34.81],
      [51.249, 51.249],
    ],
    "8": [
      [16.234, 16.234],
      [12.596, 12.596],
      [10.303, 10.303],
    ],
    "14": [
      [44.546, 44.546],
      [15.684, 15.684],
      [1.537, 1.537],
    ],
    // Zoom + focus gaps: infinity from Table 1; close values are the constrained reconstruction (not published)
    "27": [
      [3.004, 8.109],
      [5.45, 14.1968],
      [3.287, 16.0724],
    ],
    "31": [
      [29.459, 19.9307],
      [25.898, 10.1925],
      [29.79, 7.7394],
    ],
    "33": [
      [5.625, 10.0483],
      [6.74, 13.6987],
      [5.011, 14.2762],
    ],
  },
  varLabels: [
    ["6", "D6"],
    ["8", "D8"],
    ["14", "D14"],
    ["27", "D27"],
    ["31", "D31"],
    ["33", "D33"],
  ],

  zoomPositions: [71.402, 134.997, 195.996],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−)", fromSurface: "7", toSurface: "8" },
    { text: "G3 (−)", fromSurface: "9", toSurface: "14" },
    { text: "G4 (+)", fromSurface: "15", toSurface: "27" },
    { text: "G5 (−)", fromSurface: "28", toSurface: "31" },
    { text: "G6 (+)", fromSurface: "32", toSurface: "33" },
    { text: "G7 (−)", fromSurface: "34A", toSurface: "35" },
  ],
  doublets: [
    { text: "D1", fromSurface: "20", toSurface: "22" }, // L43 + L44
    { text: "D2", fromSurface: "23A", toSurface: "25" }, // L45 + L46
  ],

  closeFocusM: 0.38,
  zoomCloseFocusM: [0.38, 0.6, 0.8],
  focusDescription:
    "Two-group floating internal focus (patent ¶0140): G5 moves toward the image and G6 toward the object; G1–G4, G7 and the image plane stay fixed. Close-focus spacings are a constrained reconstruction, not patent data: solved for Nikon's 0.38 / 0.6 / 0.8 m minimum focus distances, with 0.30× at wide and 0.25× at tele. The 135 mm state uses a declared travel-ratio rule (β ≈ 0.25×), and intermediate states are interpolated.",

  nominalFno: [2.891, 2.904, 2.905],
  zoomApertureModel: "fixed-iris",
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 11,
  acceptsTeleconverters: true, // Nikon lists Z TELECONVERTER TC-1.4x / TC-2.0x compatibility

  gapSagFrac: 0.96, // surfaces 12/13 tele axial aperture; see header
  scFill: 0.65,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
