import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 5,640,277 A, Example 1, Figure 1 and column 12. Native scale, all spherical.
 * The nine elements in eight air-separated groups match Nikon's production
 * section closely. The patent gives no production prescription or clear diameters.
 *
 * The fixed iris travels with G2. Its radius is derived from the patent's f/1.43.
 * G2 moves 10.8091 mm toward the object at the published 1:10 station. The
 * calculated object-to-image distance is 0.952 m. Nikon's 0.85 m minimum
 * is listed separately in the catalog.
 *
 * Rims are inferred from Figure 1 and checked against Nikon's Tale 41 section.
 * See the audit for the drawn lands and the cap at S9, where L5 nearly meets L4.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikkor-85f14d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 85mm f/1.4 D IF",
  subtitle: "US 5,640,277 A Example 1 — Nikon / Kouichi Ohshita",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "f = 85.0 mm",
      "f/1.43 (patent) · f/1.4 (marketed)",
      "28.6° (patent) · 28°30′ (Nikon)",
      "ALL SPHERICAL",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 1.4, design: 1.43 },
    closeFocusM: { marketing: 0.85 },
  },

  source: {
    patentNumber: "US 5,640,277 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 1997,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.42,
      focalLengthMm: 104.32,
      glass: "Unmatched (low-dispersion glass)",
      role: "The front positive lens gathers the wide beam. Its relatively low dispersion helps balance the high-dispersion negative lens in G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.80411,
      vd: 46.55,
      focalLengthMm: 112.47,
      glass: "Unmatched (high-index positive glass)",
      role: "Adds positive power to the fixed front converter ahead of the negative meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.46,
      focalLengthMm: -53.67,
      glass: "Unmatched (high-dispersion flint)",
      role: "The rear negative lens in G1 limits beam convergence and contributes to chromatic correction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80454,
      vd: 39.61,
      focalLengthMm: 70.85,
      glass: "Unmatched (high-index positive glass)",
      role: "Positive front element of the moving group, paired with L5 before the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.75,
      focalLengthMm: -44.55,
      glass: "Unmatched (high-dispersion flint)",
      role: "The concave rear face borders the stop and faces the concave front of L6a.",
    },
    {
      id: 6,
      name: "L6a",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      focalLengthMm: -43.5,
      glass: "E-FD5 (HOYA catalog equivalent)",
      role: "Negative member of the cemented doublet behind the stop.",
      cemented: "L6",
    },
    {
      id: 7,
      name: "L6b",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.86994,
      vd: 39.82,
      focalLengthMm: 36.56,
      glass: "Unmatched (very high-index positive glass)",
      role: "Positive member of the cemented doublet. Its high index helps limit field curvature.",
      cemented: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.78797,
      vd: 47.47,
      focalLengthMm: 82.95,
      glass: "Unmatched (high-index positive glass)",
      role: "The last element in the moving group supplies positive power behind the doublet.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.7481,
      vd: 52.3,
      focalLengthMm: 1300.04,
      glass: "E-LAKH1 (Hikari catalog equivalent)",
      role: "Weak fixed rear compensator that limits aberration changes during focusing.",
    },
  ],

  surfaces: [
    // G1: fixed front converter (L1–L3).
    { label: "1", R: 54.6447, d: 10.4, sd: 33, medium: 1 },
    { label: "2", R: 386.2789, d: 0.1, sd: 33 },
    { label: "3", R: 41.3841, d: 8.1, sd: 28, medium: 2 },
    { label: "4", R: 69.6421, d: 4.7, sd: 28, rimCutDepthMm: 5.1 },
    { label: "5", R: 108.1534, d: 2.4, sd: 23.5, medium: 3 },
    { label: "6", R: 28.1317, sd: 23.5, rimCutDepthMm: 8.5 },

    // G2: moving inner-focus group (L4–L7 and the stop).
    { label: "7", R: 46.3814, d: 4.4, sd: 18, medium: 4 },
    { label: "8", R: 238.4203, d: 2.4, sd: 18 },
    { label: "9", R: -84.9337, d: 2.2, sd: 16.36, medium: 5 }, // The full blank height would cross S8.
    { label: "10", R: 44.2102, d: 4, sd: 16.2, rimExtensionSd: 17.5 },
    { label: "STO", R: "flat", d: 3.4 }, // Patent row 11, 4 mm behind S10.
    { label: "12", R: -53.7011, d: 2, sd: 16, rimExtensionSd: 17.3, medium: 6 },
    { label: "13", R: 65.2634, d: 9.5, sd: 17.3, medium: 7 },
    { label: "14", R: -57.8447, d: 0.1, sd: 17.3 },
    { label: "15", R: 93.4589, d: 3.5, sd: 17.3, medium: 8 },
    { label: "16", R: -213.8583, sd: 17.3 },

    // Fixed rear compensator, L8, followed by the tabulated back focus.
    { label: "17", R: -326.6053, d: 2, sd: 17.3, medium: 9 },
    { label: "18", R: -245.1387, d: 38.1202, sd: 17.3 },
  ],

  focus: {
    closeFocusM: 0.95213406348,
    description:
      "The middle group and aperture stop move together toward the subject. The front and rear groups stay fixed. The patent's near position is about 0.95 m from the image plane.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 835.81,
        distanceReference: "first-surface",
        sourceMagnification: "0.1000",
        source:
          "US 5,640,277 A, Example 1, column 12 (PDF p. 33) prints β = −0.1000 for this pair of variable gaps. The object distance is solved from the prescription.",
      },
    ],
    published: [1],
  },

  gaps: {
    "6": { label: "G1–G2", values: [[17.7999, 6.9908]] },
    "16": { label: "G2–G3", values: [[1.2001, 12.0092]] },
  },

  aperture: { nominalFNumber: 1.43, fStops: [1.43, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9, bladeRoundedness: 0.7 },

  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (focus)", fromSurface: "7", toSurface: "16" },
    { text: "G3 (fixed)", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [{ text: "L6", fromSurface: "12", toSurface: "14" }],

  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
