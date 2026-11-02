import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP 2001-330771 A, Numerical Example 2, correlated with the original Sigma 24mm F1.8 EX DG ASPHERICAL MACRO
 * (not the later DG DN or Art lenses). The correlation rests on construction; Sigma has not confirmed it.
 * Infinity focus only. The patent prints no back focus or total length, so the 38.58 mm image distance after
 * surface 22 is the paraxial back focus of the printed table (38.579 mm).
 * The printed table traces to f = 24.690 mm, the stated 24.69 mm; no scaling or correction is applied.
 * The patent tabulates one near state: d11 = 2.30 mm at OBJ = 50, read as an object 50 mm in front of surface 1
 * (about 1:2.6), with both groups advancing and the stop moving with G2. It is not modeled because the patent
 * prints no image distance for it. Sigma's 0.18 m minimum focus distance is product data, not modeled focus travel.
 * 10 glass elements + 2 resin layers (0.20 mm each) entered as separate elements = 12 element entries
 * in 9 air-separated groups.
 * Surface 5A is the air-side front of the resin layer on L3; surface 15A is the air-side rear of the resin layer
 * on L6. The patent's conic A = 1 corresponds to K = 0.
 * Prescription and aspheric coefficients are on PDF page 5 of the publication. Indices are d-line
 * (paragraph 0016). The stop radius follows from the patent's F/1.85.
 * The patent prints 0.72 for condition (3), D1c / f, where its own table gives 0.727; the table is kept as
 * printed (see sourceErrata).
 * gapSagFrac 0.9266: the F/1.85 axial marginal ray needs 11.343 mm at surface 18, and the default 0.90 would cap
 * the height shared by surfaces 18 and 19 at 11.19 mm. 0.9266 is the smallest four-decimal value that admits
 * 11.35 mm (0.9265 does not); 0.134 mm of air remains there.
 * The full axial beam passes every surface. Full-aperture off-axis beams are clipped at the inferred rims,
 * first at surface 18.
 * Glass names are compatible spectral proxies for the printed nd/vd. Catalog C/F/g indices
 * and partial-dispersion copies resolve centrally; none is source-published or a production melt.
 * NOTE ON SEMI-DIAMETERS: the patent prints none. Values are estimated from the Fig. 2 outline (PDF page 7) and
 * floor-checked by real-ray trace at F/1.85 and at the 21.63 mm image corner. Fig. 2 draws a flat land outside
 * the concave rear faces of L2, L3 and L8, and draws L9 square to its rim. Surface 4 is 17.5 mm, the rim-slope
 * limit (Fig. 2 ends the curve at about 17.7 mm). L3 and its resin layer (surfaces 5A, 6 and 7) are 16.9 mm,
 * one height so L3 keeps the flat top Fig. 2 draws at 16.85 mm; the drawn curve of surface 7 ends at about
 * 15.0 mm. Surfaces 4 and 5A nearly meet at the rim as drawn: 0.60 mm of air at 16.9 mm (92.1 % of the gap
 * taken by sag), inside the 0.9266 allowance above; the default 0.90 would cap L3 at 16.7 mm. Surface 18 is
 * held at 11.35 mm, just above the F/1.85 axial ray (11.343 mm), because surfaces 18 and 19 would meet at
 * 11.78 mm; L9 is 13.6 mm on both faces, following its square rim as drawn. L1 is square at
 * 26.65 mm, the front of L2 is 21.9 mm, L4 is 14.0 mm and L5 is 14.5 mm, each as Fig. 2 draws them; the F/1.85
 * axial ray needs 12.88 mm at L4 and 13.46 mm at L5. Behind the stop the rims are also the drawn heights: L6
 * and its resin layer 14.5 mm, the cemented pair L7–L8 13.4 mm at surfaces 16 and 17, L9 13.6 mm and L10
 * 14.7 mm, against F/1.85 axial ray heights of 13.70, 12.33, 11.51 and 11.44 mm. The renderer joins unequal
 * L2 rear now carries its source-drawn outer land to 21.9 mm while its clear cap stays 17.5.
 * S7 uses a drawing-inferred 5.8 mm cut depth (cap 15.0322 mm) with the full beam guard.
 * The S18 outer land remains constrained: it fails the unchanged gap rule to S19.
 * DIAGRAM LABELS: the group labels are the six sub-groups of Fig. 2. G1 is G1a–G1c ahead of the stop and G2 is
 * G2a–G2c behind it; in the patent's focusing each of the two moves as one unit.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-24mm-f18-ex-dg-aspherical-macro",
  maker: "Sigma",
  name: "SIGMA 24mm f/1.8 EX DG ASPHERICAL MACRO",
  subtitle: "JP 2001-330771 A, Example 2 — construction-based production correlation",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a", "four-thirds"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "DESIGN f = 24.69 mm",
      "DESIGN F/1.85",
      "2 HYBRID ASPHERICAL SURFACES / 2 ELEMENTS",
      "INFINITY FOCUS ONLY",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 24, design: 24.689902524838644 },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "JP 2001-330771 A",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 2001,
    authors: ["Shizuka Takemoto", "Norikazu Yokoi"],
    assignees: ["Sigma Corporation"],
    errata: [
      {
        status: "unresolved",
        note: "The patent prints 0.72 for condition (3), D1c / f, where its own table gives 0.727 (17.94 mm / 24.69 mm); the table is kept as printed.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: 197.73493660261215,
      glass: "BAFD8 (HOYA) / S-BAH28 (OHARA) coordinate-equivalent class; supplier unconfirmed",
      role: "Weak positive front meniscus; forms sub-group G1a of the first group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.3,
      indexReference: "d",
      focalLengthMm: -41.97559503120446,
      glass: "NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "Negative meniscus; first element of the diverging sub-group G1b.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "R1",
      label: "Element 3 resin layer",
      type: "Hybrid Resin Negative Meniscus (1× Asph)",
      nd: 1.5184,
      vd: 52.1,
      indexReference: "d",
      focalLengthMm: -630.2442841994746,
      glass: "Unmatched (hybrid optical resin; spectrum unpublished)",
      role: "Thin resin layer bonded to the front of L3; its air-side surface 5A is aspherical.",
      diagramLabel: "R1",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.1,
      indexReference: "d",
      focalLengthMm: -49.35225425709552,
      glass: "S-LAH51 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      role: "Negative meniscus glass body of the front hybrid asphere; completes G1b.",
      diagramLabel: "L3",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 100.77265148560294,
      glass: "S-TIH6 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      role: "Thick biconvex element with a weak front curve; first element of the converging sub-group G1c.",
      diagramLabel: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.3,
      indexReference: "d",
      focalLengthMm: 86.49002561496106,
      glass: "NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "Positive meniscus; completes G1c ahead of the variable gap d11 and the stop.",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 54.1,
      indexReference: "d",
      focalLengthMm: 37.89560188294225,
      glass: "LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "Biconvex positive element behind the stop; glass body of the rear hybrid asphere, sub-group G2a.",
      diagramLabel: "L6",
      cemented: "H2",
    },
    {
      id: 8,
      name: "R2",
      label: "Element 6 resin layer",
      type: "Hybrid Resin Positive Meniscus (1× Asph)",
      nd: 1.5184,
      vd: 52.1,
      indexReference: "d",
      focalLengthMm: 437.5724701736867,
      glass: "Unmatched (hybrid optical resin; spectrum unpublished)",
      role: "Thin resin layer bonded to the rear of L6; its air-side surface 15A is aspherical.",
      diagramLabel: "R2",
      cemented: "H2",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: 62.57288122811317,
      glass: "K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed)",
      role: "Positive meniscus crown; front element of the cemented negative doublet G2b.",
      diagramLabel: "L7",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -20.205856875556325,
      glass: "S-TIH4 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      role: "Biconcave flint; rear element of the cemented negative doublet G2b.",
      diagramLabel: "L8",
      cemented: "D1",
    },
    {
      id: 11,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 54.1,
      indexReference: "d",
      focalLengthMm: 89.21859233277661,
      glass: "LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "Positive meniscus; first element of the converging rear sub-group G2c.",
      diagramLabel: "L9",
    },
    {
      id: 12,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60625,
      vd: 63.1,
      indexReference: "d",
      focalLengthMm: 56.54377716515711,
      glass: "Unmatched (native 1.60625/63.1; no compatible catalog coordinate)",
      role: "Biconvex positive rear element; completes G2c.",
      diagramLabel: "L10",
    },
  ],

  surfaces: [
    { label: "1", R: 69.12, d: 4.33, sd: 26.65, medium: 1 },
    { label: "2", R: 130.23, d: 0.15, sd: 26.65 },
    { label: "3", R: 45.56, d: 1.5, sd: 21.9, medium: 2 },
    { label: "4", R: 19.5, d: 7.56, sd: 17.5, rimExtensionSd: 21.9 },
    {
      label: "5A",
      R: 65.45,
      d: 0.2,
      sd: 16.9,
      medium: 3,
      asphere: { K: 0, A4: 3.844e-6, A6: 1.0581e-8, A8: -9.9037e-12, A10: 5.055e-14 },
    },
    { label: "6", R: 54.47, d: 1.5, sd: 16.9, medium: 4 },
    { label: "7", R: 22.38, d: 12.9, sd: 16.9, rimCutDepthMm: 5.8 },
    { label: "8", R: 313.19, d: 10.08, sd: 14, medium: 5 },
    { label: "9", R: -107.94, d: 0.3, sd: 14 },
    { label: "10", R: 50.85, d: 7.86, sd: 14.5, medium: 6 },
    { label: "11", R: 160.23, d: 5.96, sd: 14.5 },
    { label: "STO", R: "flat", d: 4.69 },
    { label: "13", R: 99.14, d: 6.62, sd: 14.5, medium: 7 },
    { label: "14", R: -36.11, d: 0.2, sd: 14.5, medium: 8 },
    {
      label: "15A",
      R: -31.21,
      d: 2.19,
      sd: 14.5,
      asphere: { K: 0, A4: 1.3754e-5, A6: -3.6849e-9, A8: 2.6087e-12, A10: 3.967e-15 },
    },
    { label: "16", R: -50.03, d: 6.08, sd: 13.4, medium: 9 },
    { label: "17", R: -24.46, d: 3.24, sd: 13.4, medium: 10 },
    { label: "18", R: 42.88, d: 1.82, sd: 11.35 },
    { label: "19", R: -410.66, d: 3.75, sd: 13.6, medium: 11 },
    { label: "20", R: -55.29, d: 0.15, sd: 13.6 },
    { label: "21", R: 354.26, d: 4.75, sd: 14.7, medium: 12 },
    { label: "22", R: -37.76, d: 38.58, sd: 14.7 },
  ],

  focus: {
    closeFocusM: 0.18,
    step: 1,
    description:
      "Infinity focus only; every air gap stays fixed. The patent describes floating focus: G1 (G1a–G1c) and G2 (G2a–G2c, with the stop) both move toward the object, G1 by 0.62 times the travel of G2, so the gap d11 ahead of the stop narrows. It tabulates one near state: d11 = 2.30 mm (5.96 mm at infinity) at OBJ = 50, read as an object 50 mm ahead of the first surface, about 1:2.6. That state is not modeled because the patent prints no image distance for it. The 38.58 mm image distance at infinity is the paraxial back focus of the printed table; the patent prints no back focus. The production lens focuses to 0.18 m (1:2.7); that is product data, not modeled focus travel.",
  },

  aperture: { nominalFNumber: 1.85, fStops: [1.85, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "2" },
    { text: "G1b", fromSurface: "3", toSurface: "7" },
    { text: "G1c", fromSurface: "8", toSurface: "11" },
    { text: "G2a", fromSurface: "13", toSurface: "15A" },
    { text: "G2b", fromSurface: "16", toSurface: "18" },
    { text: "G2c", fromSurface: "19", toSurface: "22" },
  ],
  doublets: [
    { text: "H1", fromSurface: "5A", toSurface: "7" },
    { text: "H2", fromSurface: "13", toSurface: "15A" },
    { text: "D1", fromSurface: "16", toSurface: "18" },
  ],

  layout: { yScFill: 0.6 },

  checks: { gapSagFrac: 0.9266 },
} satisfies LensDataV2Input;

export default LENS_DATA;
