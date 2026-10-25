import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon AF-I Teleconverter TC-20E — US 5,253,112 A, Example 1 (Table 2, Fig. 1).
 * Seven elements in six air-separated groups, forming the patent's three lens units:
 * G1 (+; L1, L2, L3), G2 (−; the cemented L4 = L41 + L42) and G3 (+; L5, L6). All
 * surfaces are spherical. The match to the production TC-20E rests on construction
 * (Nikon assignee, 2×, 7 elements / 6 groups); Nikon has not confirmed the prescription.
 *
 * Table 2 R, d, nd and νd are entered as printed. The last gap is the printed back
 * focus, 57.75 mm.
 *
 * Master image distance: masterImageDistanceMm = 48.626 mm is derived from the patent's
 * printed converter back focus (57.75 mm) and its 2× magnification; the patent does not
 * print it. It puts the image 57.7486 mm behind the last vertex at 1.99937×. The literal
 * Table 1 master (EFL 293.3857 mm, back focus 78.1887 mm behind its last surface) with
 * the printed 30 mm junction d0 would give 48.19 mm instead, 1.98144× and a back focus of
 * 56.0163 mm, 1.73 mm short of the printed 57.75 mm. This file keeps 48.626 mm; on the
 * literal master that corresponds to a 29.5627 mm junction. Neither the prescription nor
 * this distance was tuned.
 *
 * Semi-diameters are not published. They are measured from Fig. 1 (scale from the
 * 46.0 mm first-to-last vertex track, checked on a second span) and checked with real
 * rays. L5 (surfaces 10–11) is drawn square-cut, so both faces carry 17.5 mm.
 *
 * The host supplies the aperture stop and focusing; the converter has no moving parts.
 * The converter attaches only to the AF-I Nikkor 300mm f/2.8D IF-ED (see
 * incompatibleLensKeys). minHostFNumber = 2.8 is a conservative bound from tracing a
 * full f/2.8 axial cone through the converter, not a test of any particular f/2.8 host.
 * With the patent's f/2.9 master lens, every axial ray and the 24 × 36 mm corner chief
 * ray clear the converter; the master's ordinary off-axis vignetting remains. An f/2.8
 * version of that master clips some rays, and loses one off-axis diagram ray, inside the
 * master itself, ahead of the converter (recorded in the audit). The patent's master
 * lens, its two protective plates and its stop were used only for these checks and are
 * not part of this file.
 *
 * Glass nd/νd are the patent's d-line values; the patent names no glasses. Labels give
 * the catalog glass at that coordinate (production supplier unspecified); L2, L3 and L41
 * have no catalog match and are labelled Unmatched. No partial dispersions or extra line
 * indices are added, because the patent gives none.
 */

const TELECONVERTER_DATA = {
  schema: 2,
  key: "nikon-af-i-tc20e",
  maker: "Nikon",
  name: "NIKON AF-I TELECONVERTER TC-20E 2x",
  subtitle: "US 5,253,112 A — Example 1",

  catalog: {
    lensMounts: ["nikon-f"],
    specs: ["7 ELEMENTS / 6 GROUPS", "2× REAR CONVERTER", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
  },

  source: {
    patentNumber: "US 5,253,112 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 1993,
    authors: ["Kenzaburo Suzuki", "Yoshinari Hamanishi"],
    assignees: ["Nikon Corporation"],
  },

  magnification: 2,
  masterImageDistanceMm: 48.626,
  universal: false,
  minHostFNumber: 2.8,

  // Conservative release qualification policy, not a physical incompatibility claim.
  // Only the documented representative host has full design-plane MTF evidence.
  incompatibleLensKeys: [
    "nikkor-afs-120-300f28e",
    "nikkor-afs-200-500f56e",
    "nikon-af-i-nikkor-400mm-f28d-if-ed",
    "nikon-af-i-nikkor-600mm-f4d-if-ed",
    "nikon-af-s-70-200mm-f28g-vr-ii",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-tc-in",
    "nikon-af-s-nikkor-300mm-f4e-pf-ed-vr",
    "nikon-af-s-nikkor-400mm-f28e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4g-ed-vr",
    "nikon-af-s-nikkor-500mm-f56e-pf-ed-vr",
    "nikon-af-s-nikkor-600mm-f4d-if-ed-ii",
    "nikon-af-s-nikkor-600mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-70-200mm-f4g-ed-vr",
    "nikon-af-s-nikkor-800f56e-fl-ed-vr",
    "nikon-afs-105f28-vr-micro",
    "nikon-afs-70-200-f28e-fl",
    "nikon-afs-80-400-f45-56g",
    "nikon-afs-vr-200400f4g-if-ed",
    "nikon-afs-vr-zoom-nikkor-70-200-f28g-if-ed",
    "nikon-afs-zoom-nikkor-80-200mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-300mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-500mm-f4d-if-ed"
],

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.12,
      indexReference: "d",
      focalLengthMm: 88.590521,
      glass: "F5 (SCHOTT nearest catalog glass, νd 38.03 vs printed 38.12; production supplier unspecified)",
      role: "Front positive element of converter unit G1; the patent's positive lens nearest the master lens",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.79668,
      vd: 45.42,
      indexReference: "d",
      focalLengthMm: -22.111417,
      glass: "Unmatched (patent nd 1.79668, νd 45.42; no catalog glass at this coordinate)",
      role: "Negative element between the two positives of converter unit G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59507,
      vd: 35.51,
      indexReference: "d",
      focalLengthMm: 31.366476,
      glass: "Unmatched (patent nd 1.59507, νd 35.51; no catalog glass at this coordinate)",
      role: "Rear positive element of converter unit G1, which is only weakly positive overall (f = +765.8 mm)",
    },
    {
      id: 4,
      name: "L41",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.84042,
      vd: 43.3,
      indexReference: "d",
      focalLengthMm: -17.918783,
      glass: "Unmatched (patent nd 1.84042, νd 43.30; no catalog glass at this coordinate)",
      role: "Negative front element of the cemented L4 doublet that forms converter unit G2 (f = −38.5 mm); the converter's highest-index glass, which the patent uses to keep the Petzval sum small",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L42",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.57501,
      vd: 41.55,
      indexReference: "d",
      focalLengthMm: 35.675463,
      glass: "J-LF7 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Positive rear element of the cemented L4 doublet in converter unit G2",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      indexReference: "d",
      focalLengthMm: 41.798082,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive front element of converter unit G3 (f = +87.5 mm), in the converter's lowest-dispersion glass",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7481,
      vd: 52.28,
      indexReference: "d",
      focalLengthMm: -74.927987,
      glass: "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative rear element of converter unit G3",
    },
  ],

  surfaces: [
    { label: "1", R: 171.6366, d: 3.0, sd: 14.2, medium: 1 },
    { label: "2", R: -77.1275, d: 2.0, sd: 14.2 },
    { label: "3", R: -84.398, d: 2.0, sd: 13, medium: 2 },
    { label: "4", R: 22.4963, d: 1.5, sd: 13 },
    { label: "5", R: 26.7257, d: 5.1, sd: 12.7, medium: 3 },
    { label: "6", R: -57.4817, d: 7.8, sd: 12.7 },
    { label: "7", R: -39.4253, d: 2.0, sd: 13.8, medium: 4 },
    { label: "8", R: 24.9311, d: 6.0, sd: 13.8, medium: 5 },
    { label: "9", R: -105.6051, d: 3.9, sd: 14.2 },
    { label: "10", R: 84.0445, d: 10.0, sd: 17.5, medium: 6 },
    { label: "11", R: -25.8484, d: 0.2, sd: 17.5 },
    { label: "12", R: -139.9927, d: 2.5, sd: 17.3, medium: 7 },
    { label: "13", R: 94.2001, d: 57.75, sd: 17.3 },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "9" },
    { text: "G3", fromSurface: "10", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
