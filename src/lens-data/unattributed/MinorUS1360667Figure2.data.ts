import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,360,667, Figure 2 numerical example (Charles Clayton Minor, 1920).
 * Literal unscaled radii, center thicknesses, air gaps and C/D/F indices;
 * four air-separated spherical elements, object at left. L2/L3 are NOT cemented.
 * Native sodium D indices use the engine's 589.2938 nm doublet-center convention.
 * Printed Abbe numbers are retained separately from the C/D/F-derived values.
 * No vendor/melt identity or measured g index is supplied by the patent.
 *
 * The source's "focal distance 65 mm" is ambiguous: the literal prescription
 * gives EFL 85.9065926111 mm and BFD 63.8406924899 mm at D. Figures 3 and 4
 * repeat the same 65 mm and f/2 wording, yet their prescriptions trace to
 * about 82.8 and 67.7 mm EFL, so the statement is not specific to this example.
 * Neither prescription nor indices are optimized to make 65 mm EFL. Catalog
 * design records the explicitly computed EFL, not a reinterpretation of the
 * printed focal distance. The title therefore names the patent example rather
 * than a 65mm f/2 rating. No commercial rating is established; marketing is unset.
 *
 * SEMI-DIAMETERS: inferred 19 mm square rim on L1 from the stated largest
 * diameter 38 mm; 17.6 mm on L2-L4 from Figure 2's height ratio (~280/303).
 * No source per-surface apertures exist. These rims are not enlarged to pass f/2.
 * STOP: inferred 9.5 mm behind r6 (0.5 mm before r7), within printed b3=10.00 mm;
 * the figure/text place D between L3 and L4, without a dimension.
 * FOCUS: computed D-line paraxial infinity BFD; illustrative 2 m unit focus,
 * not a patent close-focus prescription. No internal spacings move.
 * Printed f/2 and 65-degree field are source claims, not reproduced performance.
 */
const LENS_DATA = {
  schema: 2,
  key: "minor-us1360667-figure-2",
  visible: false, // Retain the original sodium-D integration example as a hidden source-backed fixture.
  maker: null, // Inventor known; no manufacturer or production lens is established.
  name: "MINOR PHOTOGRAPHIC OBJECTIVE (Figure 2 patent reconstruction)",
  subtitle: "US 1,360,667 Figure 2 (1920)",
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "D-LINE EFL ≈ 85.91 mm (computed)",
      'SOURCE: "FOCAL DISTANCE 65 mm" (same in Figs. 2–4)',
      "SOURCE f/2 = NOMINAL IRIS SETTING; GLASS-LIMITED",
      "f/2 AXIAL CLEAR BEAM ≈ 37.09 mm (computed)",
      "INFERRED CLEAR RADII / STOP POSITION",
      "SOURCE FULL FIELD ≈ 65° (unverified)",
    ],
    elementCount: 4,
    groupCount: 4,
    // Computed EFL of the literal historical prescription; not the ambiguous source 65 mm.
    focalLengthMm: { design: 85.9065926111 },
    fNumber: { design: 2 },
  },
  source: {
    patentNumber: "US 1,360,667 A",
    example: { label: "Figure 2", id: "2" },
    patentYear: 1920,
    authors: ["Charles Clayton Minor"],
    assignees: [],
    errata: [
      {
        status: "unresolved",
        note: 'The source states "focal distance 65 mm"; literal native-D paraxial EFL is 85.9066 mm and BFD 63.8407 mm. Figures 3 and 4 print the same 65 mm while their prescriptions trace to about 82.8 and 67.7 mm EFL (BFD 56.4 and 43.7 mm), so it does not describe this example specifically. Neither its meaning nor a correction is established; 65 mm is not relabeled as back focal distance.',
      },
      {
        status: "unresolved",
        note: "The source states f/2 and a largest lens diameter of 38 mm. The literal D-line EFL needs a 42.9533 mm paraxial entrance pupil at f/2, larger than the front glass. Against the source's own 65 mm, f/2 is a 32.5 mm beam, which fits the 38 mm lens; at the computed EFL that beam is f/2.64. The inferred glass apertures remain within the printed maximum. The f/2 control is a nominal iris setting, not a reproduced transmitted aperture or T-stop.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.6120,
      vd: 56.6,
      indexReference: "D",
      nC: 1.6088,
      nF: 1.61963,
      focalLengthMm: 113.0389201,
      glass: "Unmatched (historical crown; patent C/D/F)",
      role: "Front positive collector, convex toward the incident light.",
    },
    {
      id: 2,
      name: "L2",
      label: "Plano-convex positive crown",
      type: "Plano-Convex",
      nd: 1.5170,
      vd: 60.2,
      indexReference: "D",
      nC: 1.51446,
      nF: 1.52305,
      focalLengthMm: 60.9284333,
      glass: "Unmatched (historical crown; patent C/D/F)",
      role: "Positive member of the air-spaced L2/L3 combination.",
    },
    {
      id: 3,
      name: "L3",
      label: "Biconcave negative flint",
      type: "Biconcave Negative",
      nd: 1.6169,
      vd: 36.4,
      indexReference: "D",
      nC: 1.61205,
      nF: 1.62896,
      focalLengthMm: -31.7635589,
      glass: "Unmatched (historical dense flint; patent C/D/F)",
      role: "Strong negative member; shortest radius is its rear face.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear biconvex positive crown",
      type: "Biconvex Positive",
      nd: 1.5726,
      vd: 57.4,
      indexReference: "D",
      nC: 1.56967,
      nF: 1.57962,
      focalLengthMm: 67.3481495,
      glass: "Unmatched (historical crown; patent C/D/F)",
      role: "Rear positive element, behind the inferred diaphragm.",
    },
  ],
  surfaces: [
    { label: "1", R: 37.0, d: 4.34, sd: 19, medium: 1 },
    { label: "2", R: 76.0, d: 0.05, sd: 19 },
    { label: "3", R: 31.5, d: 6.90, sd: 17.6, medium: 2 },
    { label: "4", R: "flat", d: 1.20, sd: 17.6 },
    { label: "5", R: -160.0, d: 3.20, sd: 17.6, medium: 3 },
    { label: "6", R: 22.5, d: 9.5, sd: 17.6 },
    { label: "STO", R: "flat", d: 0.5 },
    { label: "7", R: 80.0, d: 7.24, sd: 17.6, medium: 4 },
    { label: "8", R: -72.0, sd: 17.6 },
  ],
  focus: {
    closeFocusM: 2,
    description: "Illustrative unit focus to 2 m; the patent supplies no close-focus prescription.",
  },
  gaps: {
    "8": { label: "BF", values: [[63.8406924899, 67.89141082323809]] },
  },
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },
  groups: [
    { text: "AIR-SPACED PAIR", fromSurface: "3", toSurface: "6" },
  ],
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
