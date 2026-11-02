import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * smc PENTAX-FA* 300mm F4.5 ED [IF] — US 4,812,026 (Mitsunori Iima, Asahi Kogaku Kogyo), Example 2 / FIG. 5.
 * The patent is normalized to f = 100; every radius and axial length is scaled ×3 (EFL 300.064 mm). R, d, nd and
 * νd are the printed Example 2 values (also repeated in claim 6), unchanged. Printed fB 20.34 (61.02 mm) is kept as
 * the image distance; the Gaussian BFD is 61.060 mm (−0.040 mm residual, left as printed).
 * Production correlation is probable, not proven: Ricoh's FA* 300/4.5 section shows the same 9 elements / 7 groups,
 * ED glass at L1, L2 and L4 and the same cemented-pair layout. Example 1 shares the topology; Example 2 is chosen for
 * its near-flat L1 rear and L7 front faces and the shorter L2–L3 air space, which match the maker's drawing.
 * Stop: not dimensioned by the patent. The iris is placed at the midpoint of infinity d11 (2.64 + 2.64 mm) and
 * stays fixed with the front groups; its radius is derived from the f/4.5 design f-number.
 * Focus: the patent's inner-focus branch moves only the cemented L7/L8 pair (claim 3). The printed β = −1/6 row
 * (d11 = 5.59, d14 = 10.54, fB = 20.34, native) is the published close state. Intermediate keyframes follow the
 * paraxial conjugate law between the two printed states; they are not a factory cam. The patent's alternative
 * whole-third-group row (d11 = 6.05, fB = 16.05) is not modelled.
 * Semi-diameters: not printed. Measured from FIG. 5 at 300 dpi (7.235 px/mm from the r1–r16 vertex span) and
 * cross-checked against the Ricoh section's element-height ratios. FIG. 5's L1 (≈36.7 mm) would not fit the
 * production 67 mm filter / 72.5 mm barrel, so L1 is set to 33.5 mm (Ø67, just over the 33.34 mm f/4.5 axial beam)
 * and L2 to 30.5 mm, keeping FIG. 5's L2/L1 ratio of 0.91. L3 keeps FIG. 5's chamfered rear rim (26.75 /
 * 24.6 mm); L4 (24.6 mm) and L5 (18.5 mm) sit just under the drawn heights to keep 0.8 / 0.6 mm edges.
 * Axial f/4.5 and chief rays clear at both focus extremes; edge-of-field vignetting follows the drawn rims.
 * Glass names are coordinate-equal catalog equivalents of the printed nd/νd, not identified production melts.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-fa-star-300mm-f45-ed-if",
  maker: "Pentax",
  name: "PENTAX SMC FA* 300mm f/4.5 ED [IF]",
  subtitle: "US 4,812,026 A, Example 2 — probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: {
      marketing: 300,
      design: 300.06,
    },
    fNumber: {
      marketing: 4.5,
      design: 4.5,
    },
    specs: [
      "9 ELEMENTS / 7 GROUPS",
      "DESIGN f = 300.06 mm",
      "DESIGN F/4.5",
      "ALL SPHERICAL",
      "3 ED ELEMENTS",
      "INNER FOCUS",
    ],
  },
  source: {
    patentNumber: "US 4,812,026",
    example: { label: "Example 2", id: "2" },
    patentYear: 1989,
    authors: ["Mitsunori Iima"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (HOYA) / S-FPL51 class ED",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class; the patent lists nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 114.81,
      role: "Front ED collector with a near-flat rear face; with L2 it carries the first group's convergence (f1,2/f = 0.280).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (HOYA) / S-FPL51 class ED",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class; the patent lists nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 282.73,
      role: "Second ED meniscus, convex to the object; splits the front power with L1 to hold spherical aberration at f/4.5.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.2,
      glass: "S-LAH52 (OHARA)",
      focalLengthMm: -43.27,
      role: "Lanthanum-flint negative; its deep rear face (|r5/r6| = 6.777) overcorrects spherical aberration and achromatizes the ED crowns.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (HOYA) / S-FPL51 class ED",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class; the patent lists nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 68.76,
      role: "Third ED positive, nested 0.66 mm behind L3; closes the first group (f1–4/f = 0.502) with a near-flat rear face.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.7,
      glass: "S-TIL25 (OHARA) / E-FL5 class",
      focalLengthMm: 34.52,
      cemented: "D1",
      role: "Light-flint positive of the weakly positive second-group doublet, just ahead of the iris.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      glass: "TAF1 (HOYA) / S-LAH66 class",
      focalLengthMm: -32.67,
      cemented: "D1",
      role: "Lanthanum-crown negative; the index step at the cemented r10 face ((n6 − n5)/r10·f = −1.892) trims residual spherical aberration.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex Positive",
      nd: 1.834,
      vd: 37.2,
      glass: "S-LAH60 (OHARA) / NBFD10 class",
      focalLengthMm: 45.44,
      cemented: "D2",
      role: "Dense-flint positive of the focusing doublet, its front face nearly flat (r12 = −5892.5 native); moves with L8.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      glass: "TAF1 (HOYA) / S-LAH66 class",
      focalLengthMm: -25.68,
      cemented: "D2",
      role: "Negative half of the focusing doublet (f7,8/f = −0.202, ν7,8 = 85); its rear face (r14/f = 0.142) sets field curvature.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.56138,
      vd: 45.2,
      glass: "LLF4 (SUMITA) class",
      focalLengthMm: 225.17,
      role: "Fixed rear meniscus, convex to the object; its front face (r15/f = 0.210) balances distortion against astigmatism.",
    },
  ],
  surfaces: [
    { label: "1", R: 55.617, d: 15.03, sd: 33.5, medium: 1 },
    { label: "2", R: 1999.143, d: 1.02, sd: 33.5 },
    { label: "3", R: 68.904, d: 8.19, sd: 30.5, medium: 2 },
    { label: "4", R: 129.867, d: 13.2, sd: 30.5 },
    { label: "5", R: -270.186, d: 3.06, sd: 26.75, medium: 3 },
    { label: "6", R: 39.87, d: 0.66, sd: 24.6 },
    { label: "7", R: 35.574, d: 11.07, sd: 24.6, medium: 4 },
    { label: "8", R: -779.145, d: 17.85, sd: 24.6 },
    { label: "9", R: 52.053, d: 10.32, sd: 18.5, medium: 5 },
    { label: "10", R: -30.291, d: 2.88, sd: 18.5, medium: 6 },
    { label: "11", R: 157.593, d: 2.64, sd: 17.29 },
    { label: "STO", R: "flat" },
    { label: "12", R: -17677.575, d: 4.59, sd: 14.2, medium: 7 },
    { label: "13", R: -37.824, d: 1.98, sd: 14.2, medium: 8 },
    { label: "14", R: 42.663, sd: 14.2 },
    { label: "15", R: 62.958, d: 4.68, sd: 20.25, medium: 9 },
    { label: "16", R: 122.079, d: 61.02, sd: 20.25 },
  ],
  focus: {
    closeFocusM: 2.0635,
    keyframes: [0, 0.1192, 0.2341, 0.3442, 0.4496, 0.5507, 0.6478, 0.741, 0.8307, 0.9169, 1],
    published: [10],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 10,
        objectDistanceMm: 1859.512,
        distanceReference: "first-surface",
        source:
          "US 4,812,026 Example 2, inner-focus row at β = −1/6 (d11 = 5.59, d14 = 10.54, fB = 20.34; ×3). Object distance solved paraxially from that printed state (β = −0.1669).",
      },
    ],
    description:
      "Inner focus: the cemented L7/L8 pair moves 11.49 mm toward the image while L1–L6, the iris and L9 stay fixed. Infinity and the β = −1/6 close state are printed; positions between follow the paraxial conjugate law.",
  },
  gaps: {
    STO: {
      label: "D11 (iris–L7)",
      values: [[2.64, 3.789, 4.938, 6.087, 7.236, 8.385, 9.534, 10.683, 11.832, 12.981, 14.13]],
    },
    "14": {
      label: "D14",
      values: [[43.11, 41.961, 40.812, 39.663, 38.514, 37.365, 36.216, 35.067, 33.918, 32.769, 31.62]],
    },
  },
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  layout: {
    scFill: 0.65,
    yScFill: 0.3,
  },
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "11" },
    { text: "G3 (−)", fromSurface: "12", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
