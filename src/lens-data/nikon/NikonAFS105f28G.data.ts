/**
 * US7218457B2 Example 3, Table 3 and Figures 9A–9C.
 * Fourteen elements, eleven air-separated components, three cemented doublets.
 * All three focus stations retained. Source varying BF conflicts slightly with
 * its fixed G1/G4 narrative; camera anchoring exposes that source difference.
 * No cover glass or filter rows occur in this selected prescription.
 */
import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "nikon-afs-105f28-vr-micro",
  name: "NIKON AF-S VR MICRO-NIKKOR 105mm f/2.8 G IF-ED",
  maker: "Nikon",
  subtitle: "US 7,218,457 B2 — Example 3 (Sensui, 2007)",
  specs: [
    "14 elements / 11 groups",
    "Patent example; compatible glass counterparts",
    "All-spherical",
    "Centered VR configuration",
    "F-mount (FX)",
    "f/2.88 patent aperture",
  ],
  focalLengthMarketing: 105,
  focalLengthDesign: 104.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 7,218,457 B2",
  patentAuthors: ["Takayuki Sensui"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2007,
  elementCount: 14,
  groupCount: 11,
  focusDescription:
    "Source infinity, 0.5× and 1× focus stations: G2 moves imageward and G3 objectward. Published BF changes by 0.63904 mm despite the fixed-group description, producing that common camera-relative offset. The source varying iris diameter and lateral VR motion are not simulated.",

  elements: [
    // ── G1: Front collecting group (fixed) ──────────────────
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.61,
      fl: 103.17,
      glass: "S-LAH66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive front singlet in G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.61272,
      vd: 58.75,
      fl: 95,
      glass: "BACD4 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive meniscus in G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.52,
      fl: -45.49,
      glass: "S-TIH1 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative singlet in G1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex",
      nd: 1.7725,
      vd: 49.61,
      fl: 50.73,
      glass: "S-LAH66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Plano-convex rear singlet in G1",
    },
    // ── G2: Diverging group (moves image-ward) ──────────────
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58267,
      vd: 46.43,
      fl: -40.85,
      glass: "BAF3 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative singlet in moving G2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.87,
      fl: -42.99,
      glass: "S-TIL6 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D1",
      role: "Negative front element of cemented doublet D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 45.17,
      glass: "S-TIH6 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D1",
      role: "Positive rear element of cemented doublet D1",
    },
    // ── G3: Main converging group (moves object-ward) ───────
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 115.62,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Low-dispersion positive singlet in moving G3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -65.28,
      glass: "S-TIH53W — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D2",
      role: "Negative front element of cemented doublet D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      fl: 32.77,
      glass: "S-BSM16 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D2",
      role: "Positive rear element of cemented doublet D2",
    },
    // ── G4a: VR element (fixed axially, shifts ⊥ for VR) ───
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.94,
      fl: -27.37,
      glass: "S-LAH53 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D3",
      role: "Negative front element of G4a stabilization doublet; centered here",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 54.86,
      glass: "S-TIH6 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      cemented: "D3",
      role: "Positive rear element of G4a stabilization doublet; centered here",
    },
    // ── G4b: Field flattener / relay (fixed) ────────────────
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 58.96,
      fl: -113.38,
      glass: "S-NSL3 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative meniscus in G4b",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      fl: 57.11,
      glass: "S-LAH51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive rear singlet in G4b",
    },
  ],

  surfaces: [
    // ── G1 ──────────────────────────────────────────────────
    { label: "1", R: 135.481, d: 4.8268, nd: 1.7725, elemId: 1, sd: 25.0 },
    { label: "2", R: -190.5454, d: 0.2, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "3", R: 49.725, d: 5.0443, nd: 1.61272, elemId: 2, sd: 23.5 },
    { label: "4", R: 328.1282, d: 3.2512, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "5", R: -301.4048, d: 1.3, nd: 1.71736, elemId: 3, sd: 22.5 },
    { label: "6", R: 36.6648, d: 0.2601, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "7", R: 39.1876, d: 5.0203, nd: 1.7725, elemId: 4, sd: 15.0 },
    { label: "8", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 18.0 }, // D8 (variable)
    // ── G2 ──────────────────────────────────────────────────
    { label: "9", R: -184.4593, d: 1.1, nd: 1.58267, elemId: 5, sd: 17.5 },
    { label: "10", R: 27.3895, d: 4.0524, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "11", R: -173.3863, d: 1.2519, nd: 1.53172, elemId: 6, sd: 12.0 }, // L6 (D1 front)
    { label: "12", R: 26.3938, d: 4.0212, nd: 1.80518, elemId: 7, sd: 15.0 }, // L6→L7 junction
    { label: "13", R: 89.6909, d: 21.449, nd: 1.0, elemId: 0, sd: 14.5 }, // D13 (variable)
    // ── Aperture stop ───────────────────────────────────────
    { label: "STO", R: 1e15, d: 14.484, nd: 1.0, elemId: 0, sd: 12.9 }, // D14 (variable)
    // ── G3 (surface 15 is an air reference plane moving with G3) ────
    { label: "15", R: 1e15, d: 2.4681, nd: 1.0, elemId: 0, sd: 14.0 }, // Air reference spacer, not a lens or filter
    { label: "16", R: 114.4253, d: 3.0007, nd: 1.497, elemId: 8, sd: 14.5 }, // L8 front
    { label: "17", R: -114.4253, d: 0.15, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "18", R: 52.1409, d: 1.1283, nd: 1.84666, elemId: 9, sd: 14.0 }, // L9 (D2 front)
    { label: "19", R: 26.564, d: 6.9913, nd: 1.62041, elemId: 10, sd: 13.5 }, // L9→L10 junction
    { label: "20", R: -77.9021, d: 2.0, nd: 1.0, elemId: 0, sd: 13.0 }, // D20 (variable)
    // ── G4a (VR) ────────────────────────────────────────────
    { label: "21", R: 754.4676, d: 1.1, nd: 1.8061, elemId: 11, sd: 13.0 }, // L11 (D3 front)
    { label: "22", R: 21.4197, d: 4.805, nd: 1.80518, elemId: 12, sd: 12.5 }, // L11→L12 junction
    { label: "23", R: 37.4268, d: 8.821, nd: 1.0, elemId: 0, sd: 12.0 }, // G4a→G4b air gap
    // ── G4b ─────────────────────────────────────────────────
    { label: "24", R: -27.164, d: 1.1, nd: 1.51823, elemId: 13, sd: 14.0 },
    { label: "25", R: -51.22, d: 0.15, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "26", R: 88.6706, d: 4.9019, nd: 1.7859, elemId: 14, sd: 15.0 },
    { label: "27", R: -88.6706, d: 53.12017, nd: 1.0, elemId: 0, sd: 15.5 }, // D27 / BFD (variable)
  ],

  asph: {},

  focusPositions: [0, 0.7763697575697683, 1],
  var: {
    "8": [3.0, 12.247, 21.289], // G1→G2 gap: G2 moves image-ward
    "13": [21.449, 12.203, 3.16], // G2→STO gap
    STO: [14.484, 6.965, 0.0], // STO→G3 gap: G3 moves object-ward
    "20": [2.0, 9.519, 16.484], // G3→G4a gap
    "27": [53.12017, 52.48194, 52.48113], // BFD (slight change due to conjugate shift)
  },
  varLabels: [
    ["8", "D8"],
    ["13", "D13"],
    ["STO", "D14"],
    ["20", "D20"],
    ["27", "BF"],
  ],

  groups: [
    { text: "G1 (+55 mm)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (−38 mm)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (+42 mm)", fromSurface: "16", toSurface: "20" },
    { text: "G4a VR (−49 mm)", fromSurface: "21", toSurface: "23" },
    { text: "G4b (+109 mm)", fromSurface: "24", toSurface: "27" },
  ],
  doublets: [
    { text: "D1 (L6+L7)", fromSurface: "11", toSurface: "13" },
    { text: "D2 (L9+L10)", fromSurface: "18", toSurface: "20" },
    { text: "D3 (L11+L12) VR", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 0.30984563,
  nominalFno: 2.88,
  maxFstop: 32,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22, 32],
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
