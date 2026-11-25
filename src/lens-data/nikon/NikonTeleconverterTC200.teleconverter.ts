import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon's TC-200 uses the optics of Soichi Nakamura's TC-1. US 4,154,508,
 * Example 11 and Figure 11 give the seven spherical elements at 1:1 scale in mm.
 * The example and claim 21 print +37.545 mm for the first radius. With the
 * correction to +35.545 mm, the patent's master at its printed spacing gives
 * 103.29 mm, f/4.003 and 2.0017×, against 103.2 mm, f/4 and 2×. The converter
 * Petzval sum is −0.002118 per mm (printed −0.00211), and its focal length
 * is −76.49 mm (76.5 mm in magnitude on the dimensioned TC-200 drawing).
 *
 * Nikon specifies 44 mm between mounts. Placing the corrected optics for infinity
 * focus at that extension puts the host's original image plane 36.8649 mm behind
 * the first vertex and the new image 42.1249 mm behind the last vertex. The host
 * supplies the iris and focusing. Clear radii are estimates from Nikon's TC-1
 * section. Surface 2 has an outer land. Its clear radius and those of surfaces
 * 9 and 10 end inside the intersections of the corresponding spherical profiles.
 * The patent prints indices and Abbe numbers without naming a spectral line.
 * The helium d line is assumed. The two named glasses supply comparable dispersion.
 */

const TELECONVERTER_DATA = {
  schema: 2,
  key: "nikon-teleconverter-tc-200",
  maker: "Nikon",
  name: "NIKON TELECONVERTER TC-200",
  visible: true,
  subtitle: "US 4,154,508, Example 11 — Nippon Kogaku / Nakamura",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 5,
    specs: ["7 ELEMENTS / 5 GROUPS", "2× REAR CONVERTER", "ALL SPHERICAL"],
  },

  source: {
    patentNumber: "US 4,154,508",
    example: { label: "Example 11", id: "11" },
    patentYear: 1979,
    authors: ["Soichi Nakamura"],
    assignees: ["Nippon Kogaku K.K."],
  },

  magnification: 2,
  masterImageDistanceMm: 36.8649,
  minHostFNumber: 2,
  universal: false,
  incompatibleLensKeys: [
    "nikkor-afs-120-300f28e",
    "nikkor-afs-200-500f56e",
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
    "nikon-ai-af-s-nikkor-300mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-500mm-f4d-if-ed",
    "nikon-ai-nikkor-600mm-f56-if-ed",
    "nikon-ai-zoom-nikkor-360-1200mm-f11-ed",
    "nikon-ai-zoom-nikkor-80-200mm-f45",
    "nikon-nikkor-300mm-f45-ed",
    "nikon-nikkor-600mm-f56-ed",
  ],

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.4,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: -45.28,
      role: "Negative entrance meniscus with its more strongly curved face toward L2.",
      glass: "Unmatched (nd 1.79668 / νd 45.4)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.59507,
      vd: 35.6,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: 25.29,
      role: "Positive singlet between the two negative components of the forward group.",
      glass: "Unmatched (nd 1.59507 / νd 35.6)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.77279,
      vd: 49.4,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: -20.18,
      role: "Negative member of the forward cemented doublet.",
      glass: "Unmatched (nd 1.77279 / νd 49.4)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59507,
      vd: 35.6,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: 96.19,
      role: "Weak positive meniscus cemented to the back of L3.",
      glass: "Unmatched (nd 1.59507 / νd 35.6)",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 40.8,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: -76.02,
      role: "Thin negative meniscus cemented to the front of L6.",
      glass: "Unmatched (nd 1.79631 / νd 40.8)",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: 29.37,
      role: "Thick, low-index positive member that supplies the converging power of the rearward group.",
      glass: "E-C3 (Hoya equivalent)",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      indexReference: "d",
      indexReferenceNote: "The patent gives no reference wavelength. The model assumes the helium d line.",
      focalLengthMm: -55.13,
      role: "Symmetric negative singlet just behind the rear doublet.",
      glass: "TAF4 (Hoya equivalent)",
    },
  ],

  surfaces: [
    { label: "1", R: 35.545, d: 1, sd: 9.75, medium: 1 },
    { label: "2", R: 17.681, d: 1.3, sd: 8.8, rimExtensionSd: 9.75 },
    { label: "3", R: 33, d: 4.8, sd: 9.75, medium: 2 },
    { label: "4", R: -26.174, d: 1, sd: 9.75 },
    { label: "5", R: -25.59, d: 1, sd: 9.75, medium: 3 },
    { label: "6", R: 40.631, d: 2.75, sd: 9.75, medium: 4 },
    { label: "7", R: 136.497, d: 14.29, sd: 9.75 },
    { label: "8", R: 100.545, d: 1.5, sd: 15.95, medium: 5 },
    { label: "9", R: 37.535, d: 10, sd: 15.9, medium: 6 },
    { label: "10", R: -23.269, d: 0.1, sd: 15.9 },
    { label: "11", R: -87.1, d: 1, sd: 16.3, medium: 7 },
    { label: "12", R: 87.1, d: 42.1249, sd: 16.3 },
  ],

  groups: [
    { text: "Forward group", fromSurface: "1", toSurface: "7" },
    { text: "Rearward group", fromSurface: "8", toSurface: "12" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "8", toSurface: "10" },
  ],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
