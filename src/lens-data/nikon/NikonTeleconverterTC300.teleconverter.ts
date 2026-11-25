import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon TC-300, US 4,154,508, Example 2 (Figure 2 and claim 4). The patent gives ten
 * spherical radii, nine internal intervals in millimetres and five glass index/Abbe pairs.
 * All lengths retain the patent scale. The spectral reference is inferred to be helium d.
 * The glass labels identify catalog curves with matching indices and dispersion.
 *
 * The 300 mm master's paraxial back focus of 70.05349 mm and the printed 1.5423 mm
 * junction place its image 68.51119 mm behind the converter's first vertex. With the
 * converter fitted, the paraxial image lies 63.11192 mm behind its last vertex.
 * Nikon's TC-300 section gives clear-radius estimates of 13.3 mm across the front three
 * singlets and 19.8 mm across the rear two. The host supplies the iris and focus movement.
 * The converter clears an axial f/2.8 cone at the fast end of Nikon's AI coupling range.
 */

const TELECONVERTER_DATA = {
  schema: 2,
  key: "nikon-teleconverter-tc-300",
  maker: "Nikon",
  name: "NIKON TELECONVERTER TC-300",
  visible: true,
  subtitle: "US 4,154,508, Example 2 — Nippon Kogaku / Nakamura",
  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 5,
    specs: ["5 ELEMENTS / 5 GROUPS", "2× CONVERTER", "ALL SPHERICAL"],
  },
  source: {
    patentNumber: "US 4,154,508",
    example: {
      label: "Example 2",
      id: "2",
    },
    sdSource: "figure-measured",
    authors: ["Soichi Nakamura"],
    assignees: ["Nippon Kogaku K.K."],
    patentYear: 1979,
  },
  magnification: 2,
  masterImageDistanceMm: 68.51119,
  universal: false,
  minHostFNumber: 2.8,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.59507,
      vd: 35.6,
      indexReference: "d",
      focalLengthMm: 101.91,
      glass: "Unmatched (nd 1.59507 / νd 35.6)",
      role: "Positive entrance element of the diverging front group.",
      indexReferenceNote: "The patent gives no wavelength. The helium d line is inferred from the glass data.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.74443,
      vd: 49.4,
      indexReference: "d",
      focalLengthMm: -33.44,
      glass: "Unmatched (nd 1.74443 / νd 49.4)",
      role: "Supplies the negative power of the front group.",
      indexReferenceNote: "The patent gives no wavelength. The helium d line is inferred from the glass data.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59507,
      vd: 35.6,
      indexReference: "d",
      focalLengthMm: 112.42,
      glass: "Unmatched (nd 1.59507 / νd 35.6)",
      role: "Positive meniscus at the rear of the front group, convex toward the host lens.",
      indexReferenceNote: "The patent gives no wavelength. The helium d line is inferred from the glass data.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.50137,
      vd: 56.5,
      indexReference: "d",
      focalLengthMm: 94.42,
      glass: "K10",
      role: "Supplies the positive power of the rear group after the long air space.",
      indexReferenceNote: "The patent gives no wavelength. The helium d line is inferred from the glass data.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80454,
      vd: 39.5,
      indexReference: "d",
      focalLengthMm: -140.3,
      glass: "NBFD3",
      role: "Reduces the convergence introduced by L4 before the beam reaches the film.",
      indexReferenceNote: "The patent gives no wavelength. The helium d line is inferred from the glass data.",
    },
  ],
  surfaces: [
    { label: "1", R: 179.709, d: 3.7, sd: 13.3, medium: 1 },
    { label: "2", R: -90.827, d: 2, sd: 13.3 },
    { label: "3", R: -109.097, d: 2.1, sd: 13.3, medium: 2 },
    { label: "4", R: 32.52, d: 2.1, sd: 13.3 },
    { label: "5", R: 40.56, d: 4.2, sd: 13.3, medium: 3 },
    { label: "6", R: 99.049, d: 66.24, sd: 13.3 },
    { label: "7", R: 317.64, d: 6.2, sd: 19.8, medium: 4 },
    { label: "8", R: -55.266, d: 0.2, sd: 19.8 },
    { label: "9", R: -195.754, d: 1.8, sd: 19.8, medium: 5 },
    { label: "10", R: 267.716, d: 63.11192, sd: 19.8 },
  ],
  incompatibleLensKeys: [
    "nikkor-afs-120-300f28e",
    "nikkor-afs-200-500f56e",
    "nikon-af-i-nikkor-300mm-f2-8d-if-ed",
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
    "nikon-ai-af-s-nikkor-500mm-f4d-if-ed",
  ],
  groups: [
    { text: "Diverging group", fromSurface: "1", toSurface: "6" },
    { text: "Converging group", fromSurface: "7", toSurface: "10" },
  ],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
