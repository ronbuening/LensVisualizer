import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2013-019993 A, Example 2 / Figure 3 / Tables 4-5.
 * Design candidate, not an established production prescription.
 * Nine elements, five air-separated components, four optical groups.
 * Original conic conversion K=kappa-1 is correct and retained.
 * Optical rims inferred from the exact figure; source gives no clear apertures.
 * Unit focusing is described, but the 0.58 m endpoint is a reconstruction.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-af-s-58f14g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 58mm f/1.4 G",
  subtitle: "JP2013-019993A EXAMPLE 2 (NEAR MATCH) — NIKON / HARUO SATO",
  specs: [
    "9 ELEMENTS / 5 GROUPS · PATENT DESIGN CANDIDATE",
    "f = 58.0216 mm (PATENT)",
    "F/1.45 (PATENT)",
    "2ω = 41.72°",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 58,
  focalLengthDesign: 58.0216,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentNumber: "JP 2013-019993 A",
  patentAuthors: ["Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2013,
  elementCount: 9,
  groupCount: 5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",

  /* ── Elements ──
   *  9 elements, front to rear. Patent group designations noted.
   *  Glass identifications are INFERENTIAL from nd/νd catalog matching.
   */
  elements: [
    {
      id: 1,
      name: "La",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.74443,
      vd: 49.53,
      fl: 91.0,
      glass: "Unidentified glass (nd 1.74443, vd 49.53)",
      apd: false,
      role: "Front positive collector with aspherical correction for spherical aberration and lower coma. Ga (Group 1, positive).",
    },
    {
      id: 2,
      name: "Lb1p",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.34,
      fl: 59.8,
      glass: "J-LASKH2 (Hikari, inferred coordinate counterpart)",
      apd: false,
      cemented: "Lb1",
      role: "Front element of cemented chromatic corrector doublet. Gb (Group 2, negative).",
    },
    {
      id: 3,
      name: "Lb1n",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.31,
      fl: -99.0,
      glass: "S-FSL5 (OHARA, inferred coordinate counterpart)",
      apd: false,
      cemented: "Lb1",
      role: "Rear element of chromatic corrector doublet; low dispersion controls primary color. Gb.",
    },
    {
      id: 4,
      name: "Lb2",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.16,
      fl: -51.6,
      glass: "E-FD8 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Classical Gauss diverging meniscus; strongest negative element in front half. Petzval field flattening. Gb.",
    },
    {
      id: 5,
      name: "Lcn",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.46,
      fl: -22.3,
      glass: "H-ZF4A (CDGM, inferred coordinate counterpart)",
      apd: false,
      cemented: "Lc",
      role: "Front element of post-stop corrector doublet; high dispersion for chromatic balancing. Gc (Group 3, negative).",
    },
    {
      id: 6,
      name: "Lcp",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.77,
      fl: 32.0,
      glass: "S-LAH58 (OHARA, inferred coordinate counterpart)",
      apd: false,
      cemented: "Lc",
      role: "Rear element of post-stop corrector; nd = 1.883 drives Petzval correction. Gc.",
    },
    {
      id: 7,
      name: "Ldp1",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.66,
      fl: 37.1,
      glass: "S-LAH58 (OHARA, approximate coordinate counterpart)",
      apd: false,
      cemented: "Ld",
      role: "Front positive of rear power triplet; high index for Petzval control. Gd (Group 4, positive).",
    },
    {
      id: 8,
      name: "Ldn",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.78,
      fl: -41.4,
      glass: "J-LLF6 (Hikari, inferred coordinate counterpart)",
      apd: false,
      cemented: "Ld",
      role: "Central negative of rear triplet; symmetric biconcave shape factor ≈ 0 optimizes coma and spherical aberration balance. Gd.",
    },
    {
      id: 9,
      name: "Ldp2",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.74443,
      vd: 49.53,
      fl: 38.6,
      glass: "Unidentified glass (same source coordinates as La)",
      apd: false,
      cemented: "Ld",
      role: "Rear positive of triplet with aspherical exit surface; corrects upper coma, sagittal coma, spherical aberration, and distortion. Gd.",
    },
  ],

  /* ── Surface prescription ──
   *  15 source surfaces including the stop, front to rear.
   *  Patent surface numbers preserved in labels.
   *  Aperture stop at patent surface 8, between Gb and Gc.
   */
  surfaces: [
    { label: "1A", R: 52.8577, d: 6.0, nd: 1.74443, elemId: 1, sd: 23.5 }, // La front (aspherical)
    { label: "2", R: 229.3475, d: 0.1, nd: 1.0, elemId: 0, sd: 23.5 }, // La rear → air
    { label: "3", R: 40.3738, d: 6.0, nd: 1.755, elemId: 2, sd: 19.8 }, // Lb1p front
    { label: "4", R: 354.9744, d: 1.5, nd: 1.48749, elemId: 3, sd: 19.8 }, // Lb1p→Lb1n junction
    { label: "5", R: 42.4134, d: 4.1038, nd: 1.0, elemId: 0, sd: 19.8 }, // Lb1n rear → air
    { label: "6", R: 290.8467, d: 1.5, nd: 1.68893, elemId: 4, sd: 16.9 }, // Lb2 front
    { label: "7", R: 31.6359, d: 6.0, nd: 1.0, elemId: 0, sd: 16.9 }, // Lb2 rear → air
    { label: "STO", R: 1e15, d: 6.0, nd: 1.0, elemId: 0, sd: 14.0 }, // Aperture stop (patent surface 8)
    { label: "9", R: -30.7873, d: 1.7, nd: 1.72825, elemId: 5, sd: 16.8 }, // Lcn front
    { label: "10", R: 35.1427, d: 7.0, nd: 1.883, elemId: 6, sd: 16.8 }, // Lcn→Lcp junction
    { label: "11", R: -131.1407, d: 0.1, nd: 1.0, elemId: 0, sd: 16.8 }, // Lcp rear → air
    { label: "12", R: 118.7661, d: 6.0, nd: 1.883, elemId: 7, sd: 16.8 }, // Ldp1 front
    { label: "13", R: -44.2318, d: 1.5, nd: 1.53172, elemId: 8, sd: 16.8 }, // Ldp1→Ldn junction
    { label: "14", R: 44.2683, d: 6.0, nd: 1.74443, elemId: 9, sd: 16.8 }, // Ldn→Ldp2 junction
    { label: "15A", R: -77.2943, d: 38.7, nd: 1.0, elemId: 0, sd: 16.8 }, // Ldp2 rear (aspherical) → air; d = BFD
  ],

  /* ── Aspherical coefficients ──
   *  K = patent κ − 1 (see header note on conic convention).
   *  Patent A2 = 0 for all surfaces (omitted per spec).
   */
  asph: {
    "1A": {
      K: -0.4279,
      A4: 1.10084e-7,
      A6: 6.21998e-10,
      A8: -4.25694e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 13.1597,
      A4: 8.65514e-6,
      A6: 4.15194e-9,
      A8: 1.25812e-11,
      A10: 1.22728e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Single variable gap: BFD (surface 15A d) changes with focus.
   *  Extension ≈ 7.3 mm for 0.58 m close focus (paraxial computation).
   *  BFD increases as lens extends forward from sensor.
   */
  var: {
    "15A": [38.7, 46.003],
  },

  varLabels: [["15A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Ga (+)", fromSurface: "1A", toSurface: "2" },
    { text: "Gb (−)", fromSurface: "3", toSurface: "7" },
    { text: "Gc (−)", fromSurface: "9", toSurface: "11" },
    { text: "Gd (+)", fromSurface: "12", toSurface: "15A" },
  ],

  doublets: [
    { text: "Lb1", fromSurface: "3", toSurface: "5" },
    { text: "Lc", fromSurface: "9", toSurface: "11" },
    { text: "Ld", fromSurface: "12", toSurface: "15A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.58,
  focusDescription:
    "Unit focus per patent paragraph 75: all groups and the stop move objectward. The 0.58 m endpoint and extension are a paraxial reconstruction; no finite-focus station or motor mechanism is specified for Example 2.",

  /* ── Aperture configuration ── */
  nominalFno: 1.45,
  fstopSeries: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
