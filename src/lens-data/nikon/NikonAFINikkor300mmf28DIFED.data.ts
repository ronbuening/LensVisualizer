import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-I NIKKOR 300mm f/2.8 D IF-ED                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H04-294310 A, Example 1 (Nikon / Susumu Sato).              ║
 * ║  Production correlation is strong but inferential; the patent does not     ║
 * ║  name the commercial lens.                                                  ║
 * ║  11 elements / 9 air-spaced clusters / 3 patent functional groups.         ║
 * ║  All prescription surfaces are spherical.                                  ║
 * ║                                                                              ║
 * ║  Focus status: PUBLISHED. The negative G2 group (surfaces 10-14) moves      ║
 * ║  10.8889 mm imageward from infinity to the patent R=2500 mm state:          ║
 * ║  d9 5.1340→16.0229 mm and d14 15.8406→4.9517 mm.                            ║
 * ║                                                                              ║
 * ║  REAR REFERENCE-PLANE NORMALIZATION:                                        ║
 * ║  Patent Bf is 114.1141 / 114.1140 mm, but the rounded bare 20-surface       ║
 * ║  prescription focuses at 113.42930976284507 / 113.42898807900343 mm.        ║
 * ║  No unprescribed plate is modeled. The authored rear plane is fixed at the  ║
 * ║  infinity bare-air conjugate; the close-state residual is only 0.0003217 mm.║
 * ║  The approximately 0.685 mm patent-Bf offset remains source-unresolved.      ║
 * ║  Nikon's manual requires a 39 mm filter in the rear slip-in holder, and a   ║
 * ║  2 mm crown plate would supply about 0.68 mm, but no example table, prose   ║
 * ║  passage, or figure lists a plate, so none is modeled (source-listed only). ║
 * ║                                                                              ║
 * ║  STOP MODEL: Example 1 gives only a schematic stop S after G3. A 14.0 mm    ║
 * ║  surface-20→STO split is inferred from Fig. 1. The stop radius is derived   ║
 * ║  from the design f-number, f/2.9. The former calibration of the actual      ║
 * ║  rounded prescription gave exactly f/2.9 paraxially at infinity.            ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: not numerically published. Values are constrained by       ║
 * ║  the patent optical section, the H=51.0 infinity aperture reference,         ║
 * ║  full-stop on-axis marginal rays at infinity and the published close state,  ║
 * ║  and the defined 0.6-field / ±0.5-pupil off-axis diagnostic fan. Figure 1   ║
 * ║  shows the three L14 cemented-pair surfaces ending at one rim, so surfaces   ║
 * ║  7-9 share a 29.5 mm semi-diameter. Surface 8 remains steep;                 ║
 * ║  maxRimAngleDeg is 71° after edge-thickness and shared-gap checks.           ║
 * ║                                                                              ║
 * ║  SPECTRAL DATA: patent nd/νd remain authoritative. Catalog-resolved class ║
 * ║  and HIKARI correlations supply modeled curves without asserting a vendor. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-af-i-nikkor-300mm-f2-8d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-I NIKKOR 300mm f/2.8 D IF-ED",
  subtitle: "JP H04-294310 A Example 1 — production correlation inferred from timing and architecture",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "300mm f/2.8",
      "PATENT F=293.9647mm / FN=2.9",
      "11 ELEMENTS / 9 AIR-SPACED CLUSTERS",
      "PUBLISHED INNER FOCUS",
    ],
    elementCount: 11,
    groupCount: 9,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 300, design: 293.9647 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP H04-294310 A",
    patentYear: 1992,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 237.961792,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "Object-side positive component of G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 190.561415,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "Second positive component of the front G1 collector.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.2,
      focalLengthMm: -262.763246,
      glass: "J-LAF7 (HIKARI catalog correlation; patent vendor unspecified)",
      role: "Negative component within G1.",
    },
    {
      id: 4,
      name: "L14a",
      label: "L14a",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: -78.104606,
      glass: "K-LaK14 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Front member of the weak-net-positive cemented rear component of G1.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L14b",
      label: "L14b",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 71.700928,
      glass: "J-PSKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Rear member of the weak-net-positive cemented rear component of G1.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L21a",
      label: "L21a",
      type: "Positive Meniscus",
      nd: 1.80384,
      vd: 33.9,
      focalLengthMm: 100.87204,
      glass: "E-LAFH2 (HIKARI catalog correlation; patent vendor unspecified)",
      role: "Positive member of the net-negative cemented component in moving G2.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L21b",
      label: "L21b",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61,
      focalLengthMm: -81.285442,
      glass: "SK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative member of the net-negative cemented component in moving G2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.67025,
      vd: 57.5,
      focalLengthMm: -70.611234,
      glass: "S-LAL52 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second negative component of the moving G2 focus group.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 98.22677,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "Front positive component of fixed G3.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: -98.530466,
      glass: "SF6 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus within fixed G3.",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 28.2,
      focalLengthMm: 118.25649,
      glass: "FD3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Rear positive component of fixed G3.",
    },
  ],

  surfaces: [
    { label: "1", R: 117.124, d: 14.4, sd: 55.5, medium: 1 },
    { label: "2", R: 9945, d: 0.3, sd: 53.3 },
    { label: "3", R: 121.736, d: 16.8, sd: 53.3, medium: 2 },
    { label: "4", R: -410.068, d: 4.1, sd: 48.5 },
    { label: "5", R: -335.183, d: 4.7, sd: 46.5, medium: 3 },
    { label: "6", R: 480.374, d: 34.6628, sd: 45.5 },
    { label: "7", R: 105.825, d: 3.5, sd: 29.5, medium: 4 },
    { label: "8", R: 35.452, d: 14.4, sd: 29.5, medium: 5 },
    { label: "9", R: 180.758, sd: 29.5 },
    { label: "10", R: -9945, d: 6.6, sd: 24.5, medium: 6 },
    { label: "11", R: -80.453, d: 2.3, sd: 23.4, medium: 7 },
    { label: "12", R: 119.561, d: 5.1, sd: 22.8 },
    { label: "13", R: -172.119, d: 2.3, sd: 21.4, medium: 8 },
    { label: "14", R: 65.626, sd: 21.1 },
    { label: "15", R: 153.713, d: 7.6, sd: 21.1, medium: 9 },
    { label: "16", R: -70.534, d: 2.5, sd: 20.8 },
    { label: "17", R: -54.182, d: 2.3, sd: 20.3, medium: 10 },
    { label: "18", R: -174.411, d: 9.4, sd: 20.4 },
    { label: "19", R: -280.977, d: 5.4, sd: 20.3, medium: 11 },
    { label: "20", R: -67.273, d: 14, sd: 20.5 },
    // Stop position is inferred from Fig. 1; the patent does not publish a numeric axial station or diameter.
    { label: "STO", R: "flat", d: 99.42930976284507 },
  ],

  // Patent R=2500 mm is measured object-plane to the source-defined image/reference plane.
  focus: {
    closeFocusM: 2.5,
    description:
      "PUBLISHED inner focus: negative G2 (surfaces 10-14) translates 10.8889 mm imageward; D9 increases and D14 decreases by the same amount. The authored image plane is fixed at the rounded prescription's infinity bare-air conjugate; the patent's approximately 0.685 mm Bf offset is unresolved and no unprescribed plate is modeled.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "9": { label: "D9", values: [[5.134, 16.0229]] }, "14": { label: "D14", values: [[15.8406, 4.9517]] } },

  // The stop radius is derived from the design f-number, f/2.9.
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2 (FOCUS)", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "20" },
  ],
  doublets: [
    { text: "L14", fromSurface: "7", toSurface: "9" },
    { text: "L21", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.42 },

  // Full-stop on-axis rays are checked separately. The rendered off-axis diagnostic fan uses the unvignetted inner half-pupil.
  rays: { offAxisFractions: [-0.5, -0.25, 0, 0.25, 0.5] },

  checks: { maxRimAngleDeg: 71 },
} satisfies LensDataV2Input;

export default LENS_DATA;
