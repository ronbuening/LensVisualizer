import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-I NIKKOR 300mm f/2.8D IF-ED                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPH04294310A, Example 1 (Nikon / Susumu Sato).              ║
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
 * ║                                                                              ║
 * ║  STOP MODEL: Example 1 gives only a schematic stop S after G3. A 14.0 mm    ║
 * ║  surface-20→STO split is inferred from Fig. 1. The STO semi-diameter is      ║
 * ║  solved from the actual rounded prescription so the infinity model is       ║
 * ║  exactly f/2.9 paraxially.                                                   ║
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
  key: "nikon-af-i-nikkor-300mm-f2-8d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-I NIKKOR 300mm f/2.8D IF-ED",
  subtitle: "JPH04294310A Example 1 — production correlation inferred from timing and architecture",
  specs: [
    "300mm f/2.8",
    "PATENT F=293.9647mm / FN=2.9",
    "11 ELEMENTS / 9 AIR-SPACED CLUSTERS",
    "PUBLISHED INNER FOCUS",
  ],

  focalLengthMarketing: 300,
  focalLengthDesign: 293.9647,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JPH04294310A",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1992,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.6,
      fl: 237.961792,
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
      fl: 190.561415,
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
      fl: -262.763246,
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
      fl: -78.104606,
      glass: "K-LaK14 (SUMITA catalog equivalent; production supplier unspecified)",
      cemented: "D1",
      role: "Front member of the weak-net-positive cemented rear component of G1.",
    },
    {
      id: 5,
      name: "L14b",
      label: "L14b",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 71.700928,
      glass: "J-PSKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      cemented: "D1",
      role: "Rear member of the weak-net-positive cemented rear component of G1.",
    },
    {
      id: 6,
      name: "L21a",
      label: "L21a",
      type: "Positive Meniscus",
      nd: 1.80384,
      vd: 33.9,
      fl: 100.87204,
      glass: "E-LAFH2 (HIKARI catalog correlation; patent vendor unspecified)",
      cemented: "D2",
      role: "Positive member of the net-negative cemented component in moving G2.",
    },
    {
      id: 7,
      name: "L21b",
      label: "L21b",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61,
      fl: -81.285442,
      glass: "SK5 (SUMITA catalog equivalent; production supplier unspecified)",
      cemented: "D2",
      role: "Negative member of the net-negative cemented component in moving G2.",
    },
    {
      id: 8,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.67025,
      vd: 57.5,
      fl: -70.611234,
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
      fl: 98.22677,
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
      fl: -98.530466,
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
      fl: 118.25649,
      glass: "FD3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Rear positive component of fixed G3.",
    },
  ],

  surfaces: [
    { label: "1", R: 117.124, d: 14.4, nd: 1.49782, elemId: 1, sd: 55.5 },
    { label: "2", R: 9945, d: 0.3, nd: 1, elemId: 0, sd: 53.3 },
    { label: "3", R: 121.736, d: 16.8, nd: 1.49782, elemId: 2, sd: 53.3 },
    { label: "4", R: -410.068, d: 4.1, nd: 1, elemId: 0, sd: 48.5 },
    { label: "5", R: -335.183, d: 4.7, nd: 1.7495, elemId: 3, sd: 46.5 },
    { label: "6", R: 480.374, d: 34.6628, nd: 1, elemId: 0, sd: 45.5 },
    { label: "7", R: 105.825, d: 3.5, nd: 1.6968, elemId: 4, sd: 29.5 },
    { label: "8", R: 35.452, d: 14.4, nd: 1.59319, elemId: 5, sd: 29.5 },
    { label: "9", R: 180.758, d: 5.134, nd: 1, elemId: 0, sd: 29.5 },
    { label: "10", R: -9945, d: 6.6, nd: 1.80384, elemId: 6, sd: 24.5 },
    { label: "11", R: -80.453, d: 2.3, nd: 1.58913, elemId: 7, sd: 23.4 },
    { label: "12", R: 119.561, d: 5.1, nd: 1, elemId: 0, sd: 22.8 },
    { label: "13", R: -172.119, d: 2.3, nd: 1.67025, elemId: 8, sd: 21.4 },
    { label: "14", R: 65.626, d: 15.8406, nd: 1, elemId: 0, sd: 21.1 },
    { label: "15", R: 153.713, d: 7.6, nd: 1.49782, elemId: 9, sd: 21.1 },
    { label: "16", R: -70.534, d: 2.5, nd: 1, elemId: 0, sd: 20.8 },
    { label: "17", R: -54.182, d: 2.3, nd: 1.80458, elemId: 10, sd: 20.3 },
    { label: "18", R: -174.411, d: 9.4, nd: 1, elemId: 0, sd: 20.4 },
    { label: "19", R: -280.977, d: 5.4, nd: 1.74, elemId: 11, sd: 20.3 },
    { label: "20", R: -67.273, d: 14, nd: 1, elemId: 0, sd: 20.5 },
    // Stop position is inferred from Fig. 1; the patent does not publish a numeric axial station or diameter.
    { label: "STO", R: 1e15, d: 99.42930976284507, nd: 1, elemId: 0, sd: 17.14298444186984 },
  ],

  asph: {},

  var: {
    "9": [5.134, 16.0229],
    "14": [15.8406, 4.9517],
  },
  varLabels: [
    ["9", "D9"],
    ["14", "D14"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2 (FOCUS)", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "20" },
  ],
  doublets: [
    { text: "L14", fromSurface: "7", toSurface: "9" },
    { text: "L21", fromSurface: "10", toSurface: "12" },
  ],

  // Patent R=2500 mm is measured object-plane to the source-defined image/reference plane.
  closeFocusM: 2.5,
  focusDescription:
    "PUBLISHED inner focus: negative G2 (surfaces 10-14) translates 10.8889 mm imageward; D9 increases and D14 decreases by the same amount. The authored image plane is fixed at the rounded prescription's infinity bare-air conjugate; the patent's approximately 0.685 mm Bf offset is unresolved and no unprescribed plate is modeled.",

  // The stop SD is solved from the actual rounded TypeScript prescription so the modeled infinity state is f/2.9.
  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22],

  // Full-stop on-axis rays are checked separately. The rendered off-axis diagnostic fan uses the unvignetted inner half-pupil.
  offAxisFractions: [-0.5, -0.25, 0, 0.25, 0.5],
  maxRimAngleDeg: 71,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
