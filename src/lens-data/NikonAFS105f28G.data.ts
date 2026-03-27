// NikonAFS105f28G.data.ts
// Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED
// US 7,218,457 B2, Example 3 (Sensui, Nikon Corporation, 2007)
//
// Patent prescription at f = 104.00 mm (marketed as 105 mm).
// NOT rescaled — radii, thicknesses, and semi-diameters are at patent scale.
//
// 14 elements in 12 groups. All-spherical design. 1 ED element (L8, S-FPL51).
// Floating internal focus: G2 moves image-ward, G3 moves object-ward.
// VR element: G4a cemented doublet (L11+L12), shifts ⊥ axis.
// Surface 15 is a fixed dummy reference plane (flat, air) within the G3 assembly.
//
// Semi-diameters estimated via combined marginal + chief paraxial ray trace
// at f/2.88, Y_max = 21.60 mm, with ~8-10% mechanical clearance.
// Front elements constrained by 62 mm filter thread.

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "nikon-afs-105f28-vr-micro",
  name: "NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED",
  maker: "Nikon",
  subtitle: "US 7,218,457 B2 — Example 3 (Sensui, 2007)",
  specs: [
    "14 elements / 12 groups",
    "1 ED element (S-FPL51)",
    "All-spherical",
    "VR II (G4a shift)",
    "F-mount (FX)",
    "62 mm filter",
  ],
  focalLengthMarketing: 105,
  focalLengthDesign: 104.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2007,
  elementCount: 14,
  groupCount: 12,
  focusDescription:
    "Internal floating focus — G2 moves image-ward, G3 moves object-ward; G1, aperture stop, G4 fixed. Equal-and-opposite cam: ΔD8 = −ΔD13, ΔD14 = −ΔD20.",

  elements: [
    // ── G1: Front collecting group (fixed) ──────────────────
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.61,
      fl: 103.2,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Front positive collector; high-index lanthanum crown minimizes curvatures and Petzval contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.61272,
      vd: 58.75,
      fl: 95.0,
      glass: "S-BSM2 (OHARA)",
      apd: false,
      role: "Second positive element; barium crown provides moderate index, low dispersion.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.52,
      fl: -45.5,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "In-group chromatic corrector for G1; heavy flint counteracts LoCA from L1+L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex",
      nd: 1.7725,
      vd: 49.61,
      fl: 50.7,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Strongest G1 positive element; flat rear faces variable gap D8. Same glass as L1.",
    },
    // ── G2: Diverging group (moves image-ward) ──────────────
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58267,
      vd: 46.43,
      fl: -40.9,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Strong negative singlet; principal diverging element in G2. Petzval field flattener.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.87,
      fl: -43.1,
      glass: "Crown (no exact catalog match — likely proprietary or discontinued)",
      apd: false,
      cemented: "D1",
      role: "Front element of G2 cemented doublet; weak negative in unconventional pairing with dense-flint positive L7.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 46.5,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Rear element of G2 doublet; dense-flint positive — reversed from classical achromat. Monochromatic aberration corrector.",
    },
    // ── G3: Main converging group (moves object-ward) ───────
    {
      id: 8,
      name: "L8",
      label: "Element 8 (ED)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 115.6,
      glass: "S-FPL51 (OHARA) — ED fluorophosphate",
      apd: "inferred",
      apdNote: "S-FPL51: ΔPgF ≈ +0.028. Single ED element confirmed by Nikon product specifications.",
      role: "ED element; symmetric biconvex minimizes coma. Paired with dense flint L9 to attack secondary spectrum.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -64.0,
      glass: "S-TIH53W (OHARA) / SF57 (SCHOTT)",
      apd: false,
      cemented: "D2",
      role: "Very dense flint; extreme dispersion partners with ED L8 for quasi-apochromatic secondary spectrum correction.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      fl: 31.9,
      glass: "S-LAL59 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Lanthanum crown; principal converging element of G3. Thick element (7.0 mm) carries substantial power at both surfaces.",
    },
    // ── G4a: VR element (fixed axially, shifts ⊥ for VR) ───
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.94,
      fl: -27.4,
      glass: "S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)",
      apd: false,
      cemented: "D3",
      role: "Front element of VR doublet; nearly flat front (R ≈ 754 mm) concentrates action at cemented interface.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 62.2,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Rear element of VR doublet; same glass as L7. Cemented construction critical for lateral color control during VR shifts.",
    },
    // ── G4b: Field flattener / relay (fixed) ────────────────
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 58.96,
      fl: -113.4,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Field flattener; weak negative meniscus counteracts Petzval curvature. Low-index crown keeps own aberrations small.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      fl: 57.1,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "Rear positive relay; symmetric biconvex minimizes coma. High-index LaH maintains BFD for F-mount mirror clearance.",
    },
  ],

  surfaces: [
    // ── G1 ──────────────────────────────────────────────────
    { label: "1", R: 135.481, d: 4.8268, nd: 1.7725, elemId: 1, sd: 29.0 },
    { label: "2", R: -190.5454, d: 0.2, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "3", R: 49.725, d: 5.0443, nd: 1.61272, elemId: 2, sd: 27.5 },
    { label: "4", R: 328.1282, d: 3.2512, nd: 1.0, elemId: 0, sd: 23.0 },
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
    // ── G3 (surface 15 is a fixed dummy reference plane) ────
    { label: "15", R: 1e15, d: 2.4681, nd: 1.0, elemId: 0, sd: 14.0 }, // Fixed spacer
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

  var: {
    "8": [3.0, 21.289], // G1→G2 gap: G2 moves image-ward
    "13": [21.449, 3.16], // G2→STO gap
    STO: [14.484, 0.0], // STO→G3 gap: G3 moves object-ward
    "20": [2.0, 16.484], // G3→G4a gap
    "27": [53.12017, 52.48113], // BFD (slight change due to conjugate shift)
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

  closeFocusM: 0.314,
  nominalFno: 2.88,
  maxFstop: 32,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
