import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S NIKKOR 800mm f/5.6E FL ED VR                            ║
 * ╠════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2013-250293 A, Example 1. Research correlation to the production    ║
 * ║ lens is strong but is not manufacturer-confirmed patent attribution.           ║
 * ║                                                                                ║
 * ║ Model: source scale retained (s = 1). The patent design is f = 780.00 mm;      ║
 * ║ independent paraxial EFL from the rounded prescription is ≈779.921 mm.         ║
 * ║ Marketing 800 mm and f/5.6 remain separate from design f/5.658.                ║
 * ║                                                                                ║
 * ║ Construction: 21 modeled glass elements / 14 air-spaced physical groups when   ║
 * ║ the front protective glass HG is counted. Nikon markets 20 lens elements / 13  ║
 * ║ groups plus one protective glass.                                              ║
 * ║                                                                                ║
 * ║ Slip-in filter FL: source surfaces 31–32 (2.000 mm, nd 1.51680, νd 63.88) are  ║
 * ║ modeled as a drawn plane-parallel plate at the printed position, with the      ║
 * ║ printed 9.000 mm air gaps either side. Nikon's user's manual requires a filter ║
 * ║ in the slip-in holder whenever it is used (NC filter supplied), so the plate   ║
 * ║ belongs to the working prescription. It is not counted in elementCount /       ║
 * ║ groupCount. Physical track = 499.318 mm, matching Table 1 TL = 499.319 mm.     ║
 * ║                                                                                ║
 * ║ Focus status: PUBLISHED. Source d11/d16 spacings are retained for infinity, β  ║
 * ║ = -0.033, and β = -0.155. The intermediate focus coordinate is derived from    ║
 * ║ the solved 24.188275495 m focal-plane object distance and the production       ║
 * ║ manual-focus minimum 5.8 m; no internal spacing is rebuilt.                    ║
 * ║                                                                                ║
 * ║ Aperture stop: source surface 22. Physical stop diameter is not published. STO ║
 * ║ sd is calibrated from the modeled EFL and published FNO = 5.658 through the    ║
 * ║ paraxial entrance-pupil mapping; this is not independent diaphragm data.       ║
 * ║                                                                                ║
 * ║ Semi-diameters: estimated from Fig. 1, not patent-published. Rims were         ║
 * ║ measured on the 300/600-dpi render (≈0.375 mm/px, scale from the drawn glass   ║
 * ║ span) and checked against the exact axial marginal ray at all three focus      ║
 * ║ states, which every surface clears. gapSagFrac = 0.98 keeps the drawn G2 rims  ║
 * ║ across the 3.095 mm L6→L7 air space. Extreme off-axis front-group rays         ║
 * ║ vignette.                                                                      ║
 * ║                                                                                ║
 * ║ Example 1 is all-spherical/all-plane; no asphere coefficients are published.   ║
 * ║ The patent publishes nd/νd coordinates but no supplier, nC, nF, ng, or dPgF    ║
 * ║ values; glass labels are coordinate matches or class-level descriptions, not   ║
 * ║ supplier proof.                                                                ║
 * ╚════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-nikkor-800f56e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 800mm f/5.6E FL ED VR",
  subtitle: "JP 2013-250293 A, Example 1 — strong production correlation; not manufacturer-confirmed",
  specs: [
    "20 LENS ELEMENTS / 13 GROUPS + PROTECTIVE GLASS",
    "PATENT DESIGN EFL ≈ 779.921 mm",
    "DESIGN f/5.658",
    "PUBLISHED 2ω = 3.147°",
    "INNER FOCUS + VR",
  ],

  focalLengthMarketing: 800,
  focalLengthDesign: 779.9213606335094,
  apertureMarketing: 5.6,
  apertureDesign: 5.658,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2013-250293 A",
  patentAuthors: ["Masashi Yamashita", "Mitsuaki Wada"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2013,
  elementCount: 21,
  groupCount: 14,

  elements: [
    {
      id: 1,
      name: "HG",
      diagramLabel: "HG",
      label: "Front protective glass",
      type: "Protective Glass",
      nd: 1.5168,
      vd: 64.07,
      indexReference: "d",
      fl: 2481772.9242572743,
      glass: "J-BK7A (HIKARI)",
      role: "Patent G1a front protective glass; retained as an active optical element.",
    },
    {
      id: 2,
      name: "L1",
      diagramLabel: "L1",
      label: "Element L1",
      type: "Biconvex Positive",
      nd: 1.43382,
      vd: 95.13,
      indexReference: "d",
      fl: 362.5353962923034,
      glass: "CaF2 fluorite (Nikon specifies two fluorite elements; patent 1.43382/95.13)",
      apd: "inferred",
      apdNote:
        "Fluorite per Nikon's lens-construction diagram (the two large positives behind the protective glass), matching the CaF2 coordinate; the patent publishes nd/νd only.",
      role: "G1a positive front element.",
    },
    {
      id: 3,
      name: "L2",
      diagramLabel: "L2",
      label: "Element L2",
      type: "Biconvex Positive",
      nd: 1.43382,
      vd: 95.13,
      indexReference: "d",
      fl: 383.51525566221585,
      glass: "CaF2 fluorite (Nikon specifies two fluorite elements; patent 1.43382/95.13)",
      apd: "inferred",
      apdNote:
        "Fluorite per Nikon's lens-construction diagram (the two large positives behind the protective glass), matching the CaF2 coordinate; the patent publishes nd/νd only.",
      role: "G1a positive front element.",
    },
    {
      id: 4,
      name: "L3",
      diagramLabel: "L3",
      label: "Element L3",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.17,
      indexReference: "d",
      fl: -388.37483999354436,
      glass: "J-LAK10 (HIKARI)",
      role: "G1a negative element.",
    },
    {
      id: 5,
      name: "L4",
      diagramLabel: "L4",
      label: "Element L4",
      type: "Negative Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.58,
      indexReference: "d",
      fl: -197.2697722714868,
      glass: "J-LAK14 (HIKARI)",
      role: "G1b negative member of the cemented L4+L5 pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "L5",
      label: "Element L5",
      type: "Positive Meniscus, convex to object",
      nd: 1.49782,
      vd: 82.53,
      indexReference: "d",
      fl: 168.48430493907134,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED per Nikon's lens-construction diagram (the image-side member of the G1b pair and the rear member of the G3b VR pair), matching the J-FKH1 coordinate; the patent publishes nd/νd only.",
      role: "G1b positive member of the cemented L4+L5 pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      diagramLabel: "L6",
      label: "Element L6",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.08,
      indexReference: "d",
      fl: -128.6961200224182,
      glass: "J-LASF02 (HIKARI)",
      role: "First negative element of the moving G2 focus group.",
    },
    {
      id: 8,
      name: "L7",
      diagramLabel: "L7",
      label: "Element L7",
      type: "Positive Meniscus, concave to object",
      nd: 1.79504,
      vd: 28.7,
      indexReference: "d",
      fl: 103.94074352115982,
      glass: "J-LAFH3 (HIKARI)",
      role: "Positive member of the moving G2 cemented L7+L8 pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L8",
      diagramLabel: "L8",
      label: "Element L8",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.58,
      indexReference: "d",
      fl: -78.80039125493043,
      glass: "J-LAK14 (HIKARI)",
      role: "Negative member of the moving G2 cemented L7+L8 pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      diagramLabel: "L9",
      label: "Element L9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.36,
      indexReference: "d",
      fl: 117.35703952539525,
      glass: "J-FK5 (HIKARI)",
      role: "Positive member of the G3a cemented L9+L10 pair.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L10",
      diagramLabel: "L10",
      label: "Element L10",
      type: "Plano-Concave Negative, concave to object",
      nd: 1.79504,
      vd: 28.7,
      indexReference: "d",
      fl: -142.52867780237472,
      glass: "J-LAFH3 (HIKARI)",
      role: "Negative member of the G3a cemented L9+L10 pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.8,
      indexReference: "d",
      fl: 178.9941179919867,
      glass: "J-K3 (HIKARI)",
      role: "G3a positive element ahead of the aperture stop.",
    },
    {
      id: 13,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.58,
      indexReference: "d",
      fl: -68.87392113898262,
      glass: "J-LAK14 (HIKARI)",
      role: "First negative element of the laterally movable G3b VR subgroup.",
    },
    {
      id: 14,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Positive Meniscus, concave to object",
      nd: 1.58144,
      vd: 40.96,
      indexReference: "d",
      fl: 51.320161677174966,
      glass: "J-LF5 (HIKARI)",
      role: "Positive member of the G3b cemented L13+L14 pair.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.53,
      indexReference: "d",
      fl: -48.91083418553724,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED per Nikon's lens-construction diagram (the image-side member of the G1b pair and the rear member of the G3b VR pair), matching the J-FKH1 coordinate; the patent publishes nd/νd only.",
      role: "Negative member of the G3b cemented L13+L14 pair; satisfies the patent VR-group Abbe condition.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 37.96,
      indexReference: "d",
      fl: 43.406062530989445,
      glass: "J-F5 (HIKARI)",
      role: "Positive member of the G3c cemented L15+L16 pair.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L16",
      diagramLabel: "L16",
      label: "Element L16",
      type: "Negative Meniscus, concave to object",
      nd: 1.85026,
      vd: 32.36,
      indexReference: "d",
      fl: -49.40614012942742,
      glass: "J-LASF021 (HIKARI)",
      role: "Negative member of the G3c cemented L15+L16 pair immediately ahead of the slip-in filter FL.",
      cemented: "D5",
    },
    {
      id: 18,
      name: "FL",
      diagramLabel: "FL",
      label: "Slip-in filter",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 63.88,
      indexReference: "d",
      glass: "J-BK7 (HIKARI)",
      role: "Patent surfaces 31–32 slip-in filter plate; Nikon requires a filter in the holder (NC filter supplied), so it is part of the working prescription. Not counted in elementCount.",
    },
    {
      id: 19,
      name: "L17",
      diagramLabel: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.25,
      indexReference: "d",
      fl: 86.29068762475666,
      glass: "J-KF6 (HIKARI)",
      role: "G3c positive relay element after the slip-in filter FL.",
    },
    {
      id: 20,
      name: "L18",
      diagramLabel: "L18",
      label: "Element L18",
      type: "Positive Meniscus, concave to object",
      nd: 1.48749,
      vd: 70.36,
      indexReference: "d",
      fl: 88.40513983389214,
      glass: "J-FK5 (HIKARI)",
      role: "Positive front member of the G3c cemented L18+L19+L20 triplet.",
      cemented: "T1",
    },
    {
      id: 21,
      name: "L19",
      diagramLabel: "L19",
      label: "Element L19",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.56,
      indexReference: "d",
      fl: -31.637507236742792,
      glass: "J-LASF09A (HIKARI)",
      role: "Negative middle member of the G3c cemented L18+L19+L20 triplet.",
      cemented: "T1",
    },
    {
      id: 22,
      name: "L20",
      diagramLabel: "L20",
      label: "Element L20",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.96,
      indexReference: "d",
      fl: 111.27705738297146,
      glass: "J-LF5 (HIKARI)",
      role: "Positive rear member of the G3c cemented L18+L19+L20 triplet.",
      cemented: "T1",
    },
  ],

  surfaces: [
    { label: "1", R: 1200.3704, d: 5.0, nd: 1.5168, elemId: 1, sd: 70.5 },
    { label: "2", R: 1199.7897, d: 1.0, nd: 1.0, elemId: 0, sd: 70.5 },
    { label: "3", R: 188.5541, d: 21.1, nd: 1.43382, elemId: 2, sd: 70.3 },
    { label: "4", R: -915.9761, d: 20.0, nd: 1.0, elemId: 0, sd: 70.3 },
    { label: "5", R: 182.4294, d: 17.1, nd: 1.43382, elemId: 3, sd: 62.7 },
    { label: "6", R: -1837.1348, d: 3.32, nd: 1.0, elemId: 0, sd: 62.7 },
    { label: "7", R: -833.5252, d: 7.5, nd: 1.72, elemId: 4, sd: 60.6 },
    { label: "8", R: 422.3839, d: 75.0, nd: 1.0, elemId: 0, sd: 60.6 },
    { label: "9", R: 128.8258, d: 6.5, nd: 1.6968, elemId: 5, sd: 42.2 },
    { label: "10", R: 65.123, d: 16.5, nd: 1.49782, elemId: 6, sd: 39.2 },
    { label: "11", R: 266.7583, d: 52.967, nd: 1.0, elemId: 0, sd: 39.2 },
    { label: "12", R: -998.6861, d: 3.5, nd: 1.79952, elemId: 7, sd: 24.6 },
    { label: "13", R: 114.8928, d: 3.095, nd: 1.0, elemId: 0, sd: 24.6 },
    { label: "14", R: -354.6811, d: 5.5, nd: 1.79504, elemId: 8, sd: 22.8 },
    { label: "15", R: -67.482, d: 3.5, nd: 1.6968, elemId: 9, sd: 22.8 },
    { label: "16", R: 300.9593, d: 27.187, nd: 1.0, elemId: 0, sd: 22.8 },
    { label: "17", R: 113.3417, d: 6.6, nd: 1.48749, elemId: 10, sd: 23.0 },
    { label: "18", R: -113.316, d: 3.2, nd: 1.79504, elemId: 11, sd: 23.0 },
    { label: "19", R: 1e15, d: 2.25, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "20", R: 184.7146, d: 4.7, nd: 1.51823, elemId: 12, sd: 23.0 },
    { label: "21", R: -184.7146, d: 40.75, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "STO", R: 1e15, d: 21.93, nd: 1.0, elemId: 0, sd: 14.816215682537935 },
    { label: "23", R: -131.4267, d: 2.0, nd: 1.6968, elemId: 13, sd: 14.5 },
    { label: "24", R: 76.068, d: 1.545, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "25", R: -1181.7118, d: 6.0, nd: 1.58144, elemId: 14, sd: 16.0 },
    { label: "26", R: -29.159, d: 2.0, nd: 1.49782, elemId: 15, sd: 16.0 },
    { label: "27", R: 150.9647, d: 5.22, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "28", R: 87.5029, d: 7.0, nd: 1.60342, elemId: 16, sd: 16.4 },
    { label: "29", R: -36.256, d: 2.0, nd: 1.85026, elemId: 17, sd: 16.4 },
    { label: "30", R: -271.4943, d: 9.0, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "31", R: 1e15, d: 2.0, nd: 1.5168, elemId: 18, sd: 17.4 },
    { label: "32", R: 1e15, d: 9.0, nd: 1.0, elemId: 0, sd: 17.4 },
    { label: "33", R: 88.2621, d: 6.0, nd: 1.51742, elemId: 19, sd: 19.1 },
    { label: "34", R: -88.2621, d: 34.8, nd: 1.0, elemId: 0, sd: 19.1 },
    { label: "35", R: -1661.8745, d: 5.4, nd: 1.48749, elemId: 20, sd: 16.6 },
    { label: "36", R: -42.052, d: 2.0, nd: 1.816, elemId: 21, sd: 16.6 },
    { label: "37", R: 68.295, d: 4.3, nd: 1.58144, elemId: 22, sd: 16.6 },
    { label: "38", R: -1200.9959, d: 52.854, nd: 1.0, elemId: 0, sd: 16.6 },
  ],

  asph: {},

  focusPositions: [0, 0.2397855936928303, 1],
  var: {
    "11": [52.967, 56.441, 69.174],
    "16": [27.187, 23.713, 10.98],
  },
  varLabels: [
    ["11", "D11 (G1→G2)"],
    ["16", "D16 (G2→G3)"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 FOCUS", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "38" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
    { text: "D5", fromSurface: "28", toSurface: "30" },
    { text: "T1", fromSurface: "35", toSurface: "38" },
  ],

  closeFocusM: 5.8,
  focusDescription:
    "PUBLISHED inner focus: G2 moves imageward. Patent d11/d16 values are retained at infinity, β=-0.033, and β=-0.155; the intermediate UI coordinate is derived from the verified conjugate distance, with no reconstructed internal spacing.",

  nominalFno: 5.658,
  fstopSeries: [5.658, 8, 11, 16],

  gapSagFrac: 0.98,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
