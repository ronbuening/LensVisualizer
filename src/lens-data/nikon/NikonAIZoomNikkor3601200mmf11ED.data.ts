import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI ZOOM-NIKKOR 360-1200mm f/11 ED               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,743,384 Example I / Claim 4, Soichi Nakamura,   ║
 * ║  Nippon Kogaku K.K.; Certificate of Correction dated 1974-03-05.   ║
 * ║                                                                    ║
 * ║  Ultra-telephoto zoom: positive / negative / positive afocal       ║
 * ║  variator followed by a fixed positive telephoto relay.            ║
 * ║  20 elements / 12 air-separated groups, all spherical.             ║
 * ║                                                                    ║
 * ║  Zoom: groups f2 and f3 move rearward from 360 mm to 1200 mm.      ║
 * ║  Variable gaps: D7, D15, D21.  The aperture stop is not tabulated  ║
 * ║  in the patent; STO is inferred in the f3-to-relay gap immediately ║
 * ║  behind surface 21, preserving the published D21 total.            ║
 * ║                                                                    ║
 * ║  Focus: US3743384 publishes the infinity zoom prescription only.   ║
 * ║  Production minimum focus is recorded as 6 m, but no close-focus   ║
 * ║  prescription is disclosed here, so this file models zoom motion   ║
 * ║  only rather than inventing a focus mechanism.                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent omits clear apertures. SDs are conservative estimates  ║
 * ║  from paraxial marginal/chief-ray envelopes plus edge-thickness,   ║
 * ║  cross-gap sag, and 122 mm front-accessory constraints. The front  ║
 * ║  collector is intentionally capped below the full paraxial corner   ║
 * ║  envelope; the rendered model therefore accepts ordinary corner     ║
 * ║  vignetting rather than impossible front-element edge thickness.    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and variable zoom gaps                         ║
 * ║    ✗ Sensor glass, filters, mechanical hardware, and hoods        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-zoom-nikkor-360-1200mm-f11-ed",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 360-1200mm f/11 ED",
  subtitle: "US 3,743,384 Example I — Nippon Kogaku / Soichi Nakamura",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "20 elements / 12 groups",
      "360-1200 mm",
      "f/11 constant aperture",
      "Nikon F mount",
      "All-spherical ultra-telephoto zoom",
    ],
    elementCount: 20,
    groupCount: 12,
    focalLengthMm: { marketing: [360, 1200], design: [360.04, 1188.41] },
    fNumber: { marketing: 11, design: 11 },
  },

  source: {
    patentNumber: "US 3,743,384",
    patentYear: 1973,
    authors: ["Soichi Nakamura"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front ED-type singlet",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      focalLengthMm: 517.1,
      glass: "Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)",
      role: "Primary collector element of the front convergent group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Front triplet positive",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      focalLengthMm: 395.9,
      glass: "Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)",
      role: "Positive low-dispersion member ahead of the apochromatic front corrector pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Front triplet negative",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: -272.7,
      glass: "LaF2 / N-LAF2 class (Schott, 744/449)",
      role: "High-index negative corrector in the front apochromatic component.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Front triplet rear positive",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: 658.2,
      glass: "N-SK5 / S-BAL35 class (589/612)",
      role: "Rear positive meniscus of the front chromatic corrector.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Variator first doublet positive",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: 165.3,
      glass: "SF4 / N-SF4 (Schott, 755/276)",
      role: "High-index flint member of the first negative variator component.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Variator first doublet negative",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: -123.7,
      glass: "N-SK5 / S-BAL35 class (589/612)",
      role: "Lower-index crown member completing the weak negative cemented component.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Hyperchromatic doublet negative",
      type: "Biconcave Negative",
      nd: 1.48606,
      vd: 81.5,
      focalLengthMm: -142.1,
      glass: "Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)",
      role: "Strong negative low-dispersion member of the hyperchromatic variator doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Hyperchromatic doublet positive",
      type: "Positive Meniscus",
      nd: 1.58875,
      vd: 51.2,
      focalLengthMm: 394.7,
      glass: "589512 — BAL7 catalog equivalent (OHARA; production supplier unspecified)",
      role: "Weak positive barium-crown member paired with the low-dispersion negative L7.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Variator rear singlet",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -216.5,
      glass: "N-BK7 / S-BSL7 class (517/642)",
      role: "Final biconcave singlet of the negative variator group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Compensator first doublet positive",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 226.0,
      glass: "N-SK16 / S-BSM16 class (620/603)",
      role: "Positive meniscus member of the front compensator doublet.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Compensator first doublet negative",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 36.9,
      focalLengthMm: -651.0,
      glass: "F3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Weak negative flint partner for chromatic balance in the first compensator component.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Compensator second doublet positive",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      focalLengthMm: 217.3,
      glass: "Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)",
      role: "Low-dispersion positive member of the rear compensator doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Compensator second doublet negative",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -457.7,
      glass: "SF4 / N-SF4 (Schott, 755/276)",
      role: "Dense flint member paired with low-dispersion L12 for over-corrected chromatism.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Relay front singlet",
      type: "Biconvex Positive",
      nd: 1.51454,
      vd: 54.6,
      focalLengthMm: 420.1,
      glass: "KF3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Entrance positive singlet of the telephoto relay.",
    },
    {
      id: 15,
      name: "L15",
      label: "Relay triplet positive",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      focalLengthMm: 167.4,
      glass: "Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)",
      role: "Low-dispersion positive member of the near-afocal relay triplet.",
      cemented: "T2",
    },
    {
      id: 16,
      name: "L16",
      label: "Relay triplet negative",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: -101.8,
      glass: "LaF2 / N-LAF2 class (Schott, 744/449)",
      role: "High-index negative member of the relay chromatic corrector triplet.",
      cemented: "T2",
    },
    {
      id: 17,
      name: "L17",
      label: "Relay triplet rear positive",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 45.0,
      focalLengthMm: 290.1,
      glass: "BAF12 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Rear positive member completing the near-afocal relay triplet.",
      cemented: "T2",
    },
    {
      id: 18,
      name: "L18",
      label: "Relay rear singlet",
      type: "Biconvex Positive",
      nd: 1.50137,
      vd: 56.5,
      focalLengthMm: 384.5,
      glass: "K10 catalog equivalent (patent 501565; production supplier unspecified)",
      role: "Symmetric positive singlet ahead of the telephoto rear negative doublet.",
    },
    {
      id: 19,
      name: "L19",
      label: "Telephoto rear doublet negative",
      type: "Biconcave Negative",
      nd: 1.74443,
      vd: 49.4,
      focalLengthMm: -68.7,
      glass: "M-NBF1 catalog equivalent (patent 744494; production supplier unspecified)",
      role: "Strong negative rear member producing the telephoto relay behavior.",
      cemented: "D5",
    },
    {
      id: 20,
      name: "L20",
      label: "Telephoto rear doublet positive",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: 101.5,
      glass: "F5 / S-TIM5 class (Schott/Ohara, 603/380)",
      role: "Positive flint member completing the rear negative telephoto doublet.",
      cemented: "D5",
    },
  ],

  surfaces: [
    { label: "1", R: 441.5, d: 8.0, sd: 60.0, medium: 1 },
    { label: "2", R: -580.0, d: 0.2, sd: 60.0 },
    { label: "3", R: 274.2, d: 9.5, sd: 58.0, medium: 2 },
    { label: "4", R: -638.1, d: 1.0, sd: 58.0 },
    { label: "5", R: -638.1, d: 4.0, sd: 58.0, medium: 3 },
    { label: "6", R: 298.2, d: 6.0, sd: 58.0, medium: 4 },
    { label: "7", R: 1281.5, sd: 58.0 },

    { label: "8", R: 8939.7, d: 4.7, sd: 27.0, medium: 5 },
    { label: "9", R: -126.6, d: 2.6, sd: 27.0, medium: 6 },
    { label: "10", R: 172.9, d: 6.0, sd: 27.0 },
    { label: "11", R: -166.7, d: 1.3, sd: 26.0, medium: 7 },
    { label: "12", R: 118.3, d: 3.0, sd: 26.0, medium: 8 },
    { label: "13", R: 238.7, d: 6.0, sd: 26.0 },
    { label: "14", R: -149.8, d: 2.6, sd: 25.0, medium: 9 },
    { label: "15", R: 444.7, sd: 25.0 },

    { label: "16", R: -3106.9, d: 3.5, sd: 26.0, medium: 10 },
    { label: "17", R: -134.2, d: 2.6, sd: 26.0, medium: 11 },
    { label: "18", R: -203.7, d: 0.2, sd: 26.0 },
    { label: "19", R: 398.1, d: 4.7, sd: 26.0, medium: 12 },
    { label: "20", R: -143.2, d: 2.6, sd: 26.0, medium: 13 },
    { label: "21", R: -246.4, d: 0.5, sd: 26.0 },

    { label: "STO", R: "flat" },

    { label: "22", R: 344.6, d: 4.0, sd: 32.0, medium: 14 },
    { label: "23", R: -577.7, d: 6.2, sd: 32.0 },
    { label: "24", R: 85.8, d: 6.0, sd: 29.4, medium: 15 },
    { label: "25", R: -1535.0, d: 13.5, sd: 29.4, medium: 16 },
    { label: "26", R: 80.0, d: 6.3, sd: 29.4, medium: 17 },
    { label: "27", R: 136.359, d: 139.4, sd: 29.4 },
    { label: "28", R: 385.1, d: 2.7, sd: 24.0, medium: 18 },
    { label: "29", R: -385.1, d: 15.2, sd: 24.0 },
    { label: "30", R: -124.9, d: 2.8, sd: 21.5, medium: 19 },
    { label: "31", R: 87.5, d: 4.4, sd: 21.5, medium: 20 },
    { label: "32", R: -200.4, d: 235.201, sd: 21.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 360, label: "360 mm" },
      { focalLengthMm: 1200, label: "1200 mm" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 6,
    description:
      "Patent publishes infinity zoom spacings only; production lens focuses to 6 m, but close-focus optical spacings are not disclosed. This file models zoom-only movement.",
  },

  gaps: {
    "7": {
      label: "D7 f1-f2",
      values: [
        [11.258, 11.258],
        [211.258, 211.258],
      ],
    },
    "15": {
      label: "D15 f2-f3",
      values: [
        [64.853, 64.853],
        [4.248, 4.248],
      ],
    },
    STO: {
      label: "D21 f3-relay",
      values: [
        [142.638, 142.638],
        [3.244, 3.244],
      ],
    },
  },

  aperture: { nominalFNumber: 11, fStops: [11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "f1 +421", fromSurface: "1", toSurface: "7" },
    { text: "f2 -87", fromSurface: "8", toSurface: "15" },
    { text: "f3 +191", fromSurface: "16", toSurface: "21" },
    { text: "f4 relay", fromSurface: "22", toSurface: "32" },
  ],
  doublets: [
    { text: "T1", fromSurface: "5", toSurface: "7" },
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "T2", fromSurface: "24", toSurface: "27" },
    { text: "D5", fromSurface: "30", toSurface: "32" },
  ],

  layout: { svgW: 1440, svgH: 540, scFill: 0.86, yScFill: 0.72, maxAspectRatio: 4.0, lensShiftFrac: 0.04 },

  rays: { rayLeadFrac: 0.2 },
} satisfies LensDataV2Input;

export default LENS_DATA;
