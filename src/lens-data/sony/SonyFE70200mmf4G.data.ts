import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sony FE 70-200mm F4 G OSS (SEL70200G)
 *
 * Data source: US 2015/0226945 A1, Numerical Example 1 (Sony; Matsui & Kaifu).
 * Four-group positive-negative-positive-positive telephoto zoom with G4 split into
 * G41/G42/G43. G42 is the compact moving focus group; G43A is the image-stabilization group.
 *
 * Prescription: 21 elements / 15 air-separated groups; three aspherical surfaces.
 * Patent infinity EFLs: 72.0974, 122.9480, 193.9726 mm. Patent total lens length: 190.0000 mm.
 * No scaling has been applied; the source lists no rear plate.
 * Source image-plane contradiction: Table 3's 190.0000 mm total length
 * implies BF = 42.9273 mm, but the wide-infinity prescription gives
 * EFL = 72.160241 mm (printed 72.0974) and BFL = 42.115294 mm.
 * All Table 1-3 entries match. Retain the published track and -0.812006 mm
 * offset rather than fitting BF to focus; see the audit sidecar.
 *
 * Aperture:
 *   The patent prints no stop diameter. nominalFno holds the Table 3 f-numbers, 4.1474 / 4.0559 / 4.1269
 *   at wide / middle / telephoto, and the wide-open iris radius at each zoom station is traced from them
 *   by a real marginal ray: 12.6067 / 12.5997 / 12.4248 mm. No single radius gives all three (spread
 *   1.45 %). The stop limits the axial beam at every station; no element rim clips it.
 *
 * Variable gaps:
 *   - d5, d12, d17: zoom-only gaps from patent Table 3.
 *   - d25, d28: zoom gaps from Table 3 plus a paraxial close-focus approximation for G42.
 *
 * Close-focus note:
 *   The patent publishes only infinity-focus gap values. Sony publishes an AF close-focus range
 *   of 1.0–1.5 m and maximum magnification of 0.13x. The close-focus values below keep total
 *   optical length constant and move G42 imageward by solving paraxial conjugates at 1.0 m
 *   (wide), 1.25 m (middle interpolation), and 1.5 m (telephoto). These are visualization
 *   values, not manufacturer-published service data.
 *
 * Semi-diameters:
 *   Patent semi-diameters are not listed. Values are conservative ray-trace estimates checked
 *   for rim slope, edge thickness, cross-gap sag intrusion, and element SD ratio <= 1.25.
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-70-200mm-f4-g-oss",
  maker: "Sony",
  name: "SONY FE 70-200mm f/4 G OSS",
  subtitle: "US 2015/0226945 A1 Example 1 — Sony / Matsui & Kaifu",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "21 elements / 15 groups",
      "70–200mm f/4 marketed",
      "72.10–193.97mm patent EFL",
      "3 aspherical surfaces",
      "G42 internal focus; G43A OSS group",
    ],
    elementCount: 21,
    groupCount: 15,
    focalLengthMm: { marketing: [70, 200], design: [72.0974, 193.9726] },
    fNumber: { marketing: 4, design: 4.1474 },
  },

  source: {
    patentNumber: "US 2015/0226945 A1",
    patentYear: 2015,
    authors: ["Takumi Matsui", "Keita Kaifu"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -357.6,
      glass: "N-SF66 / E-FDS1 class (923209; corrected from non-matching S-NPH2)",
      role: "High-index short-flint front achromat partner.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 134.9,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate; 497816)",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent publishes nd/vd only, so no patent dPgF is assigned.",
      role: "Low-dispersion positive element in the front achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 139.7,
      glass: "FCD100 / S-FPL53 class (Super ED fluorophosphate; 437951)",
      apd: "inferred",
      apdNote: "Super ED fluorophosphate class; patent publishes nd/vd only, so no patent dPgF is assigned.",
      role: "Secondary-spectrum correction in the first group.",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -31.4,
      glass: "TAFD35 / H-ZLaF4L class (911353)",
      role: "Strong variator negative element.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: -50.8,
      glass: "N-FK5 / FC5 / S-FSL5 class (487704)",
      role: "Low-dispersion negative member of the G2 achromat.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 34.7,
      glass: "N-SF66 / E-FDS1 class (923209)",
      role: "High-index high-dispersion positive member of the G2 achromat.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -75.1,
      glass: "N-LASF46A / S-LAH95 / TAFD25 class (904313)",
      role: "Rear negative field/variator element.",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: 131,
      glass: "S-TIH13 / E-FD13 class (741278)",
      role: "Positive compensator element separated by a thin air space from the following doublet.",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -97.7,
      glass: "N-SF66 / E-FDS1 class (923209)",
      role: "Dispersive negative member of the G3 achromat.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 65.1,
      glass: "S-BSM14 / N-SK14 / BACD14 class (603607)",
      role: "Positive crown member of the G3 achromat.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L411",
      label: "L411",
      type: "Biconvex Positive (front asphere)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 98,
      glass: "S-LAL13 / L-LAL13 / M-LAC130 class (694532)",
      role: "Main relay positive element; front surface S18 is aspherical.",
    },
    {
      id: 12,
      name: "L412",
      label: "L412",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 88.3,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate; 497816)",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent publishes nd/vd only, so no patent dPgF is assigned.",
      role: "Low-dispersion relay element.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L413",
      label: "L413",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -60.8,
      glass: "NBFD15 (Hoya) dense barium flint (806333)",
      role: "Negative flint member of the high-power relay achromat.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L414",
      label: "L414",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: 61,
      glass: "N-FK5 / FC5 / S-FSL5 class (487704)",
      role: "Post-stop positive relay element.",
    },
    {
      id: 15,
      name: "L421",
      label: "L421",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 55.7,
      glass: "S-TIH53 / FDS90 class (847238)",
      role: "Positive member of the moving focus doublet.",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L422",
      label: "L422",
      type: "Biconcave Negative (rear asphere)",
      nd: 1.76802,
      vd: 49.2,
      focalLengthMm: -25.2,
      glass: "M-TAF101 / LAM55-class moldable glass (768492)",
      role: "Negative member of the moving focus doublet; rear surface S28 is aspherical.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L431",
      label: "L431",
      type: "Biconvex Positive (front asphere; IS group)",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 35.4,
      glass: "S-BSL7 / BK7-class borosilicate crown (516641)",
      role: "Positive member of image-stabilization doublet G43A; front surface S29 is aspherical.",
      cemented: "D6",
    },
    {
      id: 18,
      name: "L432",
      label: "L432",
      type: "Negative Meniscus (IS group)",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -106.4,
      glass: "N-SF66 / E-FDS1 class (923209)",
      role: "Negative flint member of image-stabilization doublet G43A.",
      cemented: "D6",
    },
    {
      id: 19,
      name: "L433",
      label: "L433",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: -115,
      glass: "S-PHM52 / PCD4 / N-PSK53A class (618634)",
      role: "Rear-field correction element.",
    },
    {
      id: 20,
      name: "L434",
      label: "L434",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: 121.5,
      glass: "S-TIH11 / FD110 / N-SF11 class (785257)",
      role: "High-dispersion positive rear relay element.",
    },
    {
      id: 21,
      name: "L435",
      label: "L435",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -52.7,
      glass: "S-LAH58 / N-LASF31A / TAFD30 class (883408)",
      role: "Final negative field flattener and exit-pupil controller.",
    },
  ],

  surfaces: [
    { label: "1", R: 88.5064, d: 2, sd: 34.5, medium: 1 },
    { label: "2", R: 69.0334, d: 7.48, sd: 30, medium: 2 },
    { label: "3", R: -2244.1403, d: 0.15, sd: 29.8 },
    { label: "4", R: 52.6438, d: 7.5, sd: 28, medium: 3 },
    { label: "5", R: 365.7737, sd: 28 },
    { label: "6", R: -1884.0133, d: 1.4, sd: 18, medium: 4 },
    { label: "7", R: 29.0818, d: 5.4, sd: 14.4 },
    { label: "8", R: -108.3065, d: 1.3, sd: 14.4, medium: 5 },
    { label: "9", R: 32.1946, d: 4.08, sd: 14.4, medium: 6 },
    { label: "10", R: -6726.9797, d: 2.25, sd: 14.4 },
    { label: "11", R: -52.32, d: 1.4, sd: 14, medium: 7 },
    { label: "12", R: -231.82473, sd: 14 },
    { label: "13", R: 466.4764, d: 2.61, sd: 16.5, medium: 8 },
    { label: "14", R: -122.284, d: 0.1, sd: 16 },
    { label: "15", R: 74.9842, d: 1.5, sd: 16, medium: 9 },
    { label: "16", R: 40.5456, d: 3.8, sd: 16, medium: 10 },
    { label: "17", R: -1213.0433, sd: 16 },
    {
      label: "18A",
      R: 118.4694,
      d: 3,
      sd: 15.6,
      medium: 11,
      asphere: { K: 0, A4: -2.96279e-6, A6: -8.22788e-10, A8: 2.42576e-14, A10: 0 },
    },
    { label: "19", R: -157.7341, d: 0.15, sd: 15.4 },
    { label: "20", R: 33.01776, d: 3.25, sd: 14.5, medium: 12 },
    { label: "21", R: 128.9784, d: 1.2, sd: 14.5, medium: 13 },
    { label: "22", R: 35.3852, d: 3.7, sd: 14.4 },
    { label: "STO", R: "flat", d: 10.13 },
    { label: "24", R: 72.40901, d: 4, sd: 14, medium: 14 },
    { label: "25", R: -49.53014, sd: 14 },
    { label: "26", R: 104.08225, d: 2.38, sd: 13.4, medium: 15 },
    { label: "27", R: -85.38323, d: 0.8, sd: 13.4, medium: 16 },
    {
      label: "28A",
      R: 25.0888,
      sd: 13.4,
      asphere: { K: 0, A4: -1.26926e-6, A6: -3.93738e-9, A8: 8.82062e-12, A10: -2.02847e-14 },
    },
    {
      label: "29A",
      R: 31.01012,
      d: 4.58,
      sd: 12,
      medium: 17,
      asphere: { K: 0, A4: -9.2516e-7, A6: 3.36839e-10, A8: -2.5363e-11, A10: 9.61516e-14 },
    },
    { label: "30", R: -42.29211, d: 1, sd: 12, medium: 18 },
    { label: "31", R: -75.11155, d: 3, sd: 12 },
    { label: "32", R: 85.72552, d: 1.7, sd: 12.5, medium: 19 },
    { label: "33", R: 38.56, d: 5.32, sd: 12.5 },
    { label: "34", R: -35.34173, d: 2.49, sd: 13, medium: 20 },
    { label: "35", R: -26.5815, d: 4.3, sd: 13 },
    { label: "36", R: -28.77171, d: 1.5, sd: 13.5, medium: 21 },
    { label: "37", R: -77.31388, d: 42.9273, sd: 13.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.0974, nominalFNumber: 4.1474, label: "Wide" },
      { focalLengthMm: 122.948, nominalFNumber: 4.0559, label: "Middle" },
      { focalLengthMm: 193.9726, nominalFNumber: 4.1269, label: "Telephoto" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.0,
    description:
      "Internal focusing by G42, a compact cemented positive/negative doublet. Close-focus values approximate Sony's published AF close-focus range across the zoom.",
  },

  gaps: {
    "5": {
      label: "d5: G1–G2",
      values: [
        [1.5, 1.5],
        [22.9023, 22.9023],
        [32.3677, 32.3677],
      ],
    },
    "12": {
      label: "d12: G2–G3",
      values: [
        [24.0067, 24.0067],
        [16.6654, 16.6654],
        [1.1, 1.1],
      ],
    },
    "17": {
      label: "d17: G3–G41",
      values: [
        [16.461, 16.461],
        [2.4, 2.4],
        [8.5, 8.5],
      ],
    },
    "25": {
      label: "d25: G41–G42 / focus",
      values: [
        [4.5426, 5.7312266867],
        [2.4692, 5.183607002],
        [2.8188, 8.6471640439],
      ],
    },
    "28A": {
      label: "d28: G42–G43 / focus",
      values: [
        [7.0924, 5.9037733133],
        [9.1658, 6.451392998],
        [8.8162, 2.9878359561],
      ],
    },
  },

  aperture: { fStops: [4.1474, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9, bladeRoundedness: 0.8 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "17" },
    { text: "G41", fromSurface: "18A", toSurface: "25" },
    { text: "G42", fromSurface: "26", toSurface: "28A" },
    { text: "G43", fromSurface: "29A", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "20", toSurface: "22" },
    { text: "D5", fromSurface: "26", toSurface: "28A" },
    { text: "D6 / G43A", fromSurface: "29A", toSurface: "31" },
  ],

  layout: { scFill: 0.62, yScFill: 0.74 },
} satisfies LensDataV2Input;

export default LENS_DATA;
