// Root-level draft import. generate:metadata rewrites this path when the file is organized into a maker folder.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA MD ZOOM 50-135mm f/3.5                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,192,577, Example 1 (Shuji Ogino / Minolta).              ║
 * ║ Patent design: 51.5-131.5 mm, FNo. 3.6, 12 elements / 10 groups.           ║
 * ║ Production correlation is strong but is not manufacturer-confirmed patent   ║
 * ║ attribution. Marketed values remain separate: 50-135 mm f/3.5.             ║
 * ║                                                                              ║
 * ║ Zoom: published infinity endpoints only. Source order 131.5 -> 51.5 mm is  ║
 * ║ normalized to ascending zoomPositions 51.5 -> 131.5 mm. Gaps D5, D11, and  ║
 * ║ D13 vary only with zoom; no finite-focus spacing law is reconstructed.      ║
 * ║                                                                              ║
 * ║ STOP: Fig. 1 places the iris in D13 close to G8/R1. The model fixes the     ║
 * ║ stop 0.50 mm in front of surface 14, leaving D13 = 9.07 mm (wide) /         ║
 * ║ 2.00 mm (tele) ahead of STO. The stop radius is derived from the design     ║
 * ║ f-number (published FNo. 3.6) and held at every zoom station; it is not an  ║
 * ║ independently published diaphragm diameter.                                 ║
 * ║                                                                              ║
 * ║ IMAGE PLANE: Table 1 has no rear image distance. The modeled fixed image    ║
 * ║ plane is z = 163.167922 mm from surface 1, the mean of the two derived       ║
 * ║ paraxial image stations. D22 therefore varies by 0.010 mm across zoom to    ║
 * ║ preserve a fixed plane while retaining the source-rounded lens spacings.     ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: inferred from exact spherical-ray envelopes at both source   ║
 * ║ endpoints and zoomT = 0.25, 0.50, 0.75. On-axis rays sample the full stop;  ║
 * ║ off-axis rays use 0.6 of the interpolated patent half-field and the default  ║
 * ║ pupil fractions, with modeled mechanical clearance. No patent               ║
 * ║ semi-diameters are claimed. The envelope set was then fitted to the rims     ║
 * ║ drawn in US 4,192,577 FIG. 1 (pixel profile, 0.107 mm/px from the r1-r22     ║
 * ║ span): V1 was already within 2%; V2, V3, R1 rear and R2 were raised 5-10% to ║
 * ║ the drawn 13.5-14.1 mm, G4's front to 15.0 mm (drawn flange 15.9 mm), and    ║
 * ║ G12 to 13.2/13.8 mm. r7 stays at 12.6 mm, the D7 gap-intrusion limit.        ║
 * ║                                                                              ║
 * ║ No scaling, aspheres, rear plates, dummy planes, or finite-focus             ║
 * ║ reconstruction are used.                                                     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-md-zoom-50-135mm-f35",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 50-135mm f/3.5",
  subtitle: "US 4,192,577 — Example 1; strong production correlation, not manufacturer-confirmed attribution",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["12 ELEMENTS / 10 GROUPS", "PATENT 51.5-131.5mm", "PATENT F/3.6", "2ω = 47°-18°"],
    elementCount: 12,
    groupCount: 10,
    focalLengthMm: { marketing: [50, 135], design: [51.528241, 131.448239] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 4,192,577",
    patentYear: 1980,
    authors: ["Shuji Ogino"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element G1",
      type: "Negative Meniscus",
      nd: 1.8052,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -125.0763,
      glass: "805254 — dense-flint coordinate class (supplier/melt unresolved)",
      role: "Negative component of the front positive group's cemented pair.",
      diagramLabel: "G1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element G2",
      type: "Positive Meniscus",
      nd: 1.67,
      vd: 57.1,
      indexReference: "d",
      focalLengthMm: 98.0296,
      glass: "670571 — lanthanum-crown coordinate class (S-LAL52 catalog equivalent; supplier/melt unresolved)",
      role: "Positive component of the front positive group's cemented pair.",
      diagramLabel: "G2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element G3",
      type: "Positive Meniscus",
      nd: 1.6783,
      vd: 49,
      indexReference: "d",
      focalLengthMm: 116.9755,
      glass: "Unmatched (678490 lanthanum flint; no public catalog glass at this coordinate)",
      role: "Rear positive element of the front positive group V1.",
      diagramLabel: "G3",
    },
    {
      id: 4,
      name: "G4",
      label: "Element G4",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -31.5473,
      glass: "697555 — lanthanum-crown coordinate class (J-LAK14 catalog equivalent; supplier/melt unresolved)",
      role: "Front negative element of variator group V2.",
      diagramLabel: "G4",
    },
    {
      id: 5,
      name: "G5",
      label: "Element G5",
      type: "Biconcave Negative",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      focalLengthMm: -87.0069,
      glass: "Unmatched (658585 lanthanum crown; nearest LAK11 class at Δνd −1.2)",
      role: "Second negative element of variator group V2.",
      diagramLabel: "G5",
    },
    {
      id: 6,
      name: "G6",
      label: "Element G6",
      type: "Positive Meniscus",
      nd: 1.8052,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 59.1995,
      glass: "805254 — dense-flint coordinate class (supplier/melt unresolved)",
      role: "Positive rear element of variator group V2.",
      diagramLabel: "G6",
    },
    {
      id: 7,
      name: "G7",
      label: "Element G7",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 57.1,
      indexReference: "d",
      focalLengthMm: -112.6939,
      glass: "670571 — lanthanum-crown coordinate class (S-LAL52 catalog equivalent; supplier/melt unresolved)",
      role: "Single negative compensator group V3.",
      diagramLabel: "G7",
    },
    {
      id: 8,
      name: "G8",
      label: "Element G8",
      type: "Biconvex Positive",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      focalLengthMm: 55.2087,
      glass:
        "Unmatched (621613 dense crown; no public catalog glass at this coordinate, nearest SK16 class at Δnd −0.0010, Δνd −1.0)",
      role: "Front positive element of relay subgroup R1.",
      diagramLabel: "G8",
    },
    {
      id: 9,
      name: "G9",
      label: "Element G9",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64,
      indexReference: "d",
      focalLengthMm: 40.4212,
      glass: "517640 — crown coordinate class (N-BK7 / BSC7 family; supplier/melt unresolved)",
      role: "Positive component of the relay R1 cemented pair.",
      diagramLabel: "G9",
      cemented: "D2",
    },
    {
      id: 10,
      name: "G10",
      label: "Element G10",
      type: "Biconcave Negative",
      nd: 1.8074,
      vd: 31.6,
      indexReference: "d",
      focalLengthMm: -49.8094,
      glass:
        "Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8, no public dispersion coefficients)",
      role: "Negative component of the relay R1 cemented pair.",
      diagramLabel: "G10",
      cemented: "D2",
    },
    {
      id: 11,
      name: "G11",
      label: "Element G11",
      type: "Biconvex Positive",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      focalLengthMm: 67.6409,
      glass:
        "Unmatched (621613 dense crown; no public catalog glass at this coordinate, nearest SK16 class at Δnd −0.0010, Δνd −1.0)",
      role: "Weak front component of relay subgroup R2.",
      diagramLabel: "G11",
    },
    {
      id: 12,
      name: "G12",
      label: "Element G12",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: -65.9234,
      glass: "670472 — barium-flint coordinate class (BAF10 catalog equivalent; supplier/melt unresolved)",
      role: "Rear negative component of relay subgroup R2.",
      diagramLabel: "G12",
    },
  ],

  surfaces: [
    { label: "1", R: 86.86, d: 1.7, sd: 26.4, medium: 1 },
    { label: "2", R: 46.23, d: 5.9, sd: 25.5, medium: 2 },
    { label: "3", R: 148.12, d: 0.1, sd: 25.2 },
    { label: "4", R: 70.02, d: 4.6, sd: 24.9, medium: 3 },
    { label: "5", R: 580, sd: 24.6 },
    { label: "6", R: -683.8, d: 1.3, sd: 15, medium: 4 },
    { label: "7", R: 22.73, d: 4.6, sd: 12.6 },
    { label: "8", R: -268.06, d: 1.2, sd: 13.6, medium: 5 },
    { label: "9", R: 72.97, d: 0.5, sd: 13.6 },
    { label: "10", R: 33.01, d: 3, sd: 13.8, medium: 6 },
    { label: "11", R: 103, sd: 13.6 },
    { label: "12", R: -43.55, d: 1.2, sd: 13.3, medium: 7 },
    { label: "13", R: -104.04, sd: 13.5 },
    // Stop position inferred from Fig. 1; fixed 0.50 mm in front of surface 14 (relay-side placement).
    { label: "STO", R: "flat", d: 0.5 },
    { label: "14", R: 90.98, d: 4.5, sd: 13.8, medium: 8 },
    { label: "15", R: -54.03, d: 0.1, sd: 14 },
    { label: "16", R: 36.97, d: 6.5, sd: 13.8, medium: 9 },
    { label: "17", R: -45.15, d: 2, sd: 13.6, medium: 10 },
    { label: "18", R: 375.3, d: 27.5, sd: 13.5 },
    { label: "19", R: 295.8, d: 4, sd: 13.4, medium: 11 },
    { label: "20", R: -48.74, d: 7.05, sd: 13.5 },
    { label: "21", R: -24.41, d: 2, sd: 13.2, medium: 12 },
    { label: "22", R: -56.36, sd: 13.8 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 51.5, label: "Wide" },
      { focalLengthMm: 131.5, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "Front-group (V1) focus is inferred, not patent-stated; no finite-focus spacings (NO_INTERNAL_RECONSTRUCTION).",
  },

  // (moved from var) No finite-focus rows are published. Each inner pair therefore repeats the infinity value.
  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.09, 1.09],
        [34.69, 34.69],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [30.19, 30.19],
        [3.67, 3.67],
      ],
    },
    // Source D13 = 9.57 / 2.50 mm; 0.50 mm is reserved after STO to surface 14.
    "13": {
      label: "D13-to-STO",
      values: [
        [9.07, 9.07],
        [2, 2],
      ],
    },
    // Derived rear gap keeps the image plane fixed at z = 163.167922 mm despite 0.01 mm source rounding in total track.
    "22": {
      label: "BF",
      values: [
        [44.567922, 44.567922],
        [44.557922, 44.557922],
      ],
    },
  },

  aperture: { nominalFNumber: 3.6, fStops: [3.6, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "V1", fromSurface: "1", toSurface: "5" },
    { text: "V2", fromSurface: "6", toSurface: "11" },
    { text: "V3", fromSurface: "12", toSurface: "13" },
    { text: "R1", fromSurface: "14", toSurface: "18" },
    { text: "R2", fromSurface: "19", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
  ],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
