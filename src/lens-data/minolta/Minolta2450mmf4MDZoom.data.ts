// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — MINOLTA MD ZOOM 24-50mm f/4                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,147,410, Embodiment 1 (Table 1; reprinted as      ║
 * ║    Claim 7). Minolta Camera K.K.; M. Shimomura and M. Horimoto.      ║
 * ║  Two-group negative-positive retrofocus wide-angle zoom. Product     ║
 * ║    correlation only: no Minolta document names this patent.          ║
 * ║  13 elements / 11 groups, all spherical (matches the 1981 Minolta    ║
 * ║    catalog construction).                                            ║
 * ║  Source correction: the Table 1 r21 row prints "d20 = 2.0"; read as  ║
 * ║    d21 = 2.0 (label misprint; Claim 7 prints d21). No value changed. ║
 * ║  No scaling. d-line coordinates (inferred: N10 = 1.8052 is SF6 nd).  ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: D11 and BF (zoom). D11 also carries focus.      ║
 * ║    Published stations: d11 = 27.93 / 11.96 / 1.66 (patent labels     ║
 * ║    f = 24 / 35 / 50; computed EFL 24.513 / 35.081 / 48.593 mm).      ║
 * ║    Derived stations at EFL 28 / 31.5 / 39.5 / 44 mm are computed     ║
 * ║    from the same two-group law; they are not patent data. They keep  ║
 * ║    linear-interpolation defocus below 0.12 mm (0.97 mm with only the ║
 * ║    three published stations).                                        ║
 * ║  Reversing group: group I moves imageward from 24 mm toward ~38 mm,  ║
 * ║    then objectward to 50 mm (track minimum at EFL ≈ 38.4 mm).        ║
 * ║  BF is the computed paraxial d-line infinity image distance at each  ║
 * ║    station (the patent prints no back focus or image distance).      ║
 * ║                                                                      ║
 * ║  Focus: CONSTRAINED RECONSTRUCTION. The patent publishes infinity    ║
 * ║    states only. Group I translates objectward (D11 grows) with group ║
 * ║    II and the film plane fixed; the extension is solved at every     ║
 * ║    station for an object 700 mm from the film plane (Minolta MFD     ║
 * ║    2.3 ft; film-plane reference assumed). Extension 2.343-2.369 mm.  ║
 * ║    The focusing group is not stated by Minolta or the patent.        ║
 * ║                                                                      ║
 * ║  NOTE ON STOP POSITION: not published. STO is inferred at the middle ║
 * ║    of d17 (2.25 mm behind r17), between components II-1 and II-2.    ║
 * ║    No fixed iris holds the published constant FNo. 4, so            ║
 * ║    the builder calibrates the iris radius                            ║
 * ║    to f/4 at each station (5.65 mm wide to 8.52 mm tele). That       ║
 * ║    schedule is calibrated, not a published diaphragm diameter.       ║
 * ║  NOTE ON SEMI-DIAMETERS: not published; modeled from exact           ║
 * ║    meridional ray envelopes over all seven stations at infinity and  ║
 * ║    close focus (f/4 axial beam, chief ray to the 21.63 mm format     ║
 * ║    corner, full pupil at 0.6 of the corner field), +2 % + 0.2 mm,    ║
 * ║    rounded up to 0.05 mm, then limited by geometry: SD 5 = 16.2 mm   ║
 * ║    (D4 gap intrusion; wide-corner bundle vignettes there) and        ║
 * ║    SD 20 = 7.5 mm (D20 gap). gapSagFrac 0.97: the f/4 axial beam at  ║
 * ║    tele needs 7.45 mm at r20, where the D20 rims close 96 % of the   ║
 * ║    2.19 mm gap; the default 0.90 cannot pass the published f/4.      ║
 * ║    Group II rims were then trimmed toward US 4,147,410 FIG. 1        ║
 * ║    (0.118 mm/px from the r1-r24 span; drawn L7 9.8, L12 7.0,         ║
 * ║    L13 7.3 mm): SD 12-15 = 10.6/10.6/10.4/10.2 and SD 21-24 =        ║
 * ║    8.1/8.2/8.3/8.3 mm, kept about 0.5 mm outside the f/4 axial       ║
 * ║    beam, so the wide corner bundle vignettes at L13.                 ║
 * ║    Group I rear (SD 6-11) was raised 5-8 % to the drawn rims         ║
 * ║    (L3 about 17, L4/L5 16.4, L6 14.8 mm): 16.2/16.0/16.0/16.0/       ║
 * ║    14.6/14.4 mm. SD 5 stays at its D4 gap limit.                     ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  No rear plates (SLR film camera).                                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-md-zoom-24-50-f4",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 24-50mm f/4",
  subtitle: "US 4,147,410 Embodiment 1 — Minolta / Shimomura, Horimoto; production correlation",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 11 GROUPS",
      "DESIGN f = 24.51-48.59 mm",
      "F/4 CONSTANT (INFERRED IRIS SCHEDULE)",
      "2ω = 84°-47°",
      "ALL-SPHERICAL",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: [24, 50], design: [24.513, 48.593] },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "US 4,147,410",
    patentYear: 1979,
    authors: ["Masaichi Shimomura", "Mitsuaki Horimoto"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6,
      vd: 64.4,
      focalLengthMm: 202.67,
      glass:
        "Unmatched (600644 phosphate-crown class; nearest current catalog coordinates sit at Δnd +0.003, outside the runtime window)",
      role: "Component I-1: weak positive front meniscus, convex to the object (condition (2))",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7435,
      vd: 49.2,
      focalLengthMm: -40.44,
      glass: "743492 — lanthanum flint (NBF1 / S-LAM60 class; supplier unconfirmed)",
      role: "Component I-2, sub-component a: strongest negative meniscus of I-2 (φ1; condition (3))",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7435,
      vd: 49.2,
      focalLengthMm: -56.74,
      glass: "743492 — lanthanum flint (NBF1 / S-LAM60 class; supplier unconfirmed)",
      role: "Component I-2, sub-component b: second negative meniscus (φ2)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7106,
      vd: 43.3,
      focalLengthMm: 73.72,
      glass:
        "Unmatched (711433 lanthanum-flint class; nearest catalog coordinate is HOYA LAFL4 at Δnd +0.0021, outside the relabel window)",
      role: "Component I-2, sub-component c (front): positive half of the weakly negative cemented doublet (φ3)",
      cemented: "c",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6385,
      vd: 55.7,
      focalLengthMm: -58.93,
      glass: "639557 — dense barium crown (S-BSM18 / BACD18 class; supplier unconfirmed)",
      role: "Component I-2, sub-component c (rear): negative half of the cemented doublet",
      cemented: "c",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7174,
      vd: 29.4,
      focalLengthMm: 78.8,
      glass: "717294 — dense flint (S-TIH1 / SF1 class; supplier unconfirmed)",
      role: "Component I-3: positive dense-flint meniscus closing group I",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.0,
      focalLengthMm: 78.37,
      glass: "517640 — borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed)",
      role: "Component II-1, first element: biconvex crown",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.0,
      focalLengthMm: 44.39,
      glass: "517640 — borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed)",
      role: "Component II-1, second element: strongest positive crown of group II",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.0,
      focalLengthMm: 128.83,
      glass: "517640 — borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed)",
      role: "Component II-1, third element (II-1 sets condition (4))",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.8052,
      vd: 25.4,
      focalLengthMm: 49.46,
      glass: "805254 — dense flint (SF6 / S-TIH6 class; supplier unconfirmed)",
      role: "Component II-2 (front): positive dense-flint meniscus, concave to the object",
      cemented: "II-2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7569,
      vd: 29.7,
      focalLengthMm: -13.72,
      glass: "Unmatched (757297 lanthanum dense-flint class; no current catalog glass within Δnd 0.003 / Δνd 2)",
      role: "Component II-2 (rear): strong biconcave flint, the principal negative power of group II",
      cemented: "II-2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.0,
      focalLengthMm: 61.74,
      glass: "517640 — borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed)",
      role: "Component II-3, first element: positive meniscus concave to the object",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6,
      vd: 64.4,
      focalLengthMm: 57.66,
      glass:
        "Unmatched (600644 phosphate-crown class; nearest current catalog coordinates sit at Δnd +0.003, outside the runtime window)",
      role: "Component II-3, rear element: biconvex closing element",
    },
  ],

  surfaces: [
    { label: "1", R: 94.69, d: 6.0, sd: 27.35, medium: 1 },
    { label: "2", R: 417.7, d: 0.2, sd: 25.45 },
    { label: "3", R: 73.24, d: 1.5, sd: 21.8, medium: 2 },
    { label: "4", R: 21.13, d: 7.5, sd: 17.0 },
    { label: "5", R: 148.3, d: 1.5, sd: 16.2, medium: 3 }, // SD limited by D4 gap intrusion
    { label: "6", R: 32.7, d: 3.5, sd: 16.2 },
    { label: "7", R: 129.8, d: 4.0, sd: 16.0, medium: 4 },
    { label: "8", R: -86.7, d: 1.0, sd: 16.0, medium: 5 }, // L4→L5 cemented junction
    { label: "9", R: 66.78, d: 2.5, sd: 16.0 },
    { label: "10", R: 33.47, d: 3.0, sd: 14.6, medium: 6 },
    { label: "11", R: 78.98, sd: 14.4 }, // D11: zoom + focus
    { label: "12", R: 53.95, d: 2.5, sd: 10.6, medium: 7 },
    { label: "13", R: -159.9, d: 0.1, sd: 10.6 },
    { label: "14", R: 19.8, d: 3.36, sd: 10.4, medium: 8 },
    { label: "15", R: 136.34, d: 0.1, sd: 10.2 },
    { label: "16", R: 22.44, d: 2.0, sd: 9.9, medium: 9 },
    { label: "17", R: 32.82, d: 2.25, sd: 9.4 }, // patent d17 = 4.5 split at the inferred stop
    { label: "STO", R: "flat", d: 2.25 }, // inferred stop; radius derived from the design f-number at each station
    { label: "18", R: -61.82, d: 2.0, sd: 8.65, medium: 10 },
    { label: "19", R: -24.57, d: 0.8, sd: 8.65, medium: 11 }, // L10→L11 cemented junction
    { label: "20", R: 18.24, d: 2.19, sd: 7.5 }, // SD limited by D20 gap intrusion
    { label: "21", R: -57.47, d: 2.0, sd: 8.1, medium: 12 }, // patent row prints "d20 = 2.0"; read as d21
    { label: "22", R: -20.76, d: 0.1, sd: 8.2 },
    { label: "23", R: 38.02, d: 2.3, sd: 8.3, medium: 13 },
    { label: "24", R: -375.8, sd: 8.3 }, // BF: computed paraxial image distance
  ],

  zoom: {
    // (moved from zoomPositions) Published stations: 24.513 (d11 = 27.93), 35.081 (11.96), 48.593 (1.66). 28 / 31.5 / 39.5 / 44 are derived.
    // (moved from publishedStations) Source rows only; the other zoom stations are solved or sampled control points.
    stations: [
      { focalLengthMm: 24.513, label: "Wide", published: true },
      { focalLengthMm: 28, published: false },
      { focalLengthMm: 31.5, published: false },
      { focalLengthMm: 35.081, published: true },
      { focalLengthMm: 39.5, published: false },
      { focalLengthMm: 44, published: false },
      { focalLengthMm: 48.593, label: "Tele", published: true },
    ],
  },

  focus: {
    closeFocusM: 0.7,
    description:
      "Reconstructed front-group focus: the patent publishes infinity states only. Group I translates toward the object (D11 grows) while group II and the film plane stay fixed; the 2.34-2.37 mm extension is solved at each zoom station for an object 0.7 m from the film plane (Minolta 2.3 ft minimum focus). Minolta does not state which group focuses.",
  },

  gaps: {
    // [d_infinity, d_close] per zoom station; close = 0.7 m object-to-film, group I extension (reconstruction)
    "11": {
      label: "D11",
      values: [
        [27.93, 30.2993],
        [21.327, 23.6828],
        [16.171, 18.5191],
        [11.96, 14.304],
        [7.816, 10.1591],
        [4.451, 6.7963],
        [1.66, 4.01],
      ],
    },
    // zoom only: BF unchanged by focusing (group II and film plane fixed)
    "24": {
      label: "BF",
      values: [
        [38.3236, 38.3236],
        [41.3902, 41.3902],
        [44.4672, 44.4672],
        [47.6159, 47.6159],
        [51.5013, 51.5013],
        [55.4586, 55.4586],
        [59.4964, 59.4964],
      ],
    },
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I (−)", fromSurface: "1", toSurface: "11" },
    { text: "II (+)", fromSurface: "12", toSurface: "24" },
  ],
  doublets: [
    { text: "c", fromSurface: "7", toSurface: "9" },
    { text: "II-2", fromSurface: "18", toSurface: "20" },
  ],

  layout: { yScFill: 0.32 },

  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
