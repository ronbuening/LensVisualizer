import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELMARIT 90mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,995,980 sole example (Zimmermann & Knetsch,     ║
 * ║  Ernst Leitz G.m.b.H.; DE priority 21 Dec 1956). Modified Cooke    ║
 * ║  Triplet with cemented middle and rear doublets.                    ║
 * ║  5 elements / 3 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focusing (entire lens translates).                     ║
 * ║  Attribution: the patent names no product; the Elmarit 90 f/2.8    ║
 * ║  (1959) match is inferred from assignee, date, f/2.8 and the 5/3   ║
 * ║  cemented-middle/cemented-rear layout.                              ║
 * ║                                                                     ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent values are per 100 mm equivalent focal length; all R, d  ║
 * ║    and sd are scaled uniformly ×0.9 to the 90 mm production focal  ║
 * ║    length (EFL 90.11 mm). Claim table r₁ = +44.05 adopted (example  ║
 * ║    table prints +44.65; claim value gives EFL 100.12 vs 101.88).   ║
 * ║                                                                     ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent lists no SDs. Fig. 1 is drawn to scale (vertex spacings  ║
 * ║    agree within ~0.5 unit; 15.75 px per patent unit at 600 dpi):   ║
 * ║    L1 ≈ 16.9 mm, both doublets' flat rims ≈ 15.1 mm, r₅ curve end  ║
 * ║    ≈ 12.8 mm (bevel), r₆ ≈ 13.4 mm. r₃/r₄ set to 15.0 from the      ║
 * ║    figure (the earlier 14.0/13.8 clipped the f/2.8 axial marginal  ║
 * ║    ray, 14.07/13.97 mm). Other rims are earlier estimates within   ║
 * ║    ~7 % of the figure and are retained.                             ║
 * ║                                                                     ║
 * ║  NOTE ON STOP AND FOCUS:                                           ║
 * ║    Fig. 1 draws no diaphragm; the iris at the centre of air gap a₂ ║
 * ║    is a model choice. The stop radius is derived from the design   ║
 * ║    f-number, f/2.8; its real marginal-ray height is about 12.9 mm. ║
 * ║    The 1 m close-focus gap (84.40 mm) is a calculated paraxial      ║
 * ║    unit-focus extension (+10.07 mm) for 1 m object-to-image.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "leica-elmarit-90f28",
  maker: "Leica",
  name: "LEICA ELMARIT 90mm f/2.8",
  subtitle: "US 2,995,980 — ZIMMERMANN & KNETSCH / ERNST LEITZ",

  catalog: {
    lensMounts: ["leica-m", "leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 3 GROUPS", "f ≈ 90.1 mm", "F/2.8", "2ω ≈ 27.0°", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 3,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 90, design: 90.1 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 2,995,980",
    patentYear: 1961,
    authors: ["Otto Zimmermann", "Georg Knetsch"],
    assignees: ["Ernst Leitz GmbH"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      focalLengthMm: 49.7,
      glass: "N-LAK9 catalog equivalent (Schott; patent coordinate 691548; production supplier unspecified)",
      apd: false,
      role: "Front positive collector; strongly convex front, nearly flat rear. Lanthanum-crown coordinate enables strong power at moderate curvature.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: 63.3,
      glass: "SF4 catalog equivalent (patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Positive element of middle negative doublet; reversed-dispersion element (high dispersion in positive role) for sphero-chromatic correction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.6,
      focalLengthMm: -20.9,
      glass: "E-FD7 catalog equivalent (exact patent code 640346; production supplier unspecified)",
      apd: false,
      role: "Negative element of middle doublet; dominant negative power (strongest element). Lower dispersion than L2 per patent's reversed-doublet strategy.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.6,
      focalLengthMm: -41.0,
      glass: "F1 catalog equivalent (exact patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Negative element of rear doublet; nearly flat front, provides chromatic compensation against L5.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: 23.5,
      glass: "N-LAF2 catalog equivalent (historical LaF 2 family; production supplier unspecified)",
      apd: false,
      role: "Main positive image-former; thickest element, strongest positive power. LaF glass enables high power with moderate dispersion.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 39.645, d: 6.03, sd: 17.0, medium: 1 },
    { label: "2", R: -241.146, d: 6.3, sd: 16.0 },
    { label: "3", R: -44.136, d: 4.86, sd: 15.0, medium: 2 },
    { label: "4", R: -24.039, d: 2.7, sd: 15.0, medium: 3 },
    { label: "5", R: 31.383, d: 2.16, sd: 13.5 },
    // STO is a model choice (Fig. 1 draws no diaphragm) — centred in air gap a₂ (4.32 mm total)
    { label: "STO", R: "flat", d: 2.16 },
    { label: "6", R: -1194.003, d: 2.7, sd: 13.5, medium: 4 },
    { label: "7", R: 26.244, d: 8.343, sd: 14.0, medium: 5 },
    { label: "8", R: -44.937, sd: 14.5 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focusing — entire optical assembly translates forward via helicoid. Detachable head for Visoflex use.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ── */
  gaps: {
    "8": { label: "BF", values: [[74.33, 84.4]] }, // close value calculated: 1 m object-to-image, unit focus
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.45, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
