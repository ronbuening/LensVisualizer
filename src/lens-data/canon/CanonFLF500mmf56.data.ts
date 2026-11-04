import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP S47-8109 B, Example 1 (f = 100.0, F/5.6, 2ω = 5°), every R and d scaled uniformly ×5 to f = 500; n and ν as
 * printed. The patent prints n and ν without naming the line; all five indices match catalog d-line values, so they
 * are applied at the d line. L1 is CaF2 in the patent table and uses the catalog fluorite curve; L2, L4 and L5 use
 * Ohara catalog glasses with the same nd and νd within 0.1 (S-LAH52, S-LAL8, S-FTM16). L3 (printed FK5,
 * 1.48749 / 70.0) stays unmatched: the closest catalog row inside the νd tolerance, S-FSL5, moves the paraxial
 * g-line focus further from the patent's Fig. 8 curves. The 1969 production melts are unidentified.
 * Canon lists six elements in five groups; the sixth is an unprescribed thin front element, read as a protective
 * glass, and is not modelled. elementCount / groupCount give the modelled 5 / 4.
 * The image plane follows the printed L = 65.767 (front vertex to focal plane; ×5 = 328.835 mm), so the last gap is
 * L minus the axial track (125.600 mm). Paraxial BFD is 125.444 mm: the printed plane sits 0.156 mm behind paraxial
 * focus, a patent-internal inconsistency kept as printed. Computed EFL is 499.57 mm against the scaled f = 500.0.
 * No clear diameters or stop position are printed. The stop sits at the middle of d6 (Fig. 3 draws it at about 0.51
 * of the gap); the front sd of 48.2 mm is the F/5.6 axial beam at f = 500 plus 8 %, and the rear doublet's 19.3 mm
 * keeps Fig. 3's rear-to-front outline ratio of about 0.40.
 * Infinity focus only; the patent prints no close-focus state.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-f-500mm-f56",
  maker: "Canon",
  name: "CANON FL-F 500mm f/5.6",
  subtitle: "JP S47-8109 B, Example 1 — probable production correlation, front protective glass omitted",
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 500,
      design: 500,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    closeFocusM: { marketing: 10 },
    specs: [
      "5 ELEMENTS / 4 GROUPS (CANON 6/5 INCL. FRONT PROTECTOR)",
      "DESIGN f = 500 mm",
      "DESIGN F/5.6",
      "1 FLUORITE ELEMENT",
      "PATENT f = 100 SCALED × 5",
    ],
  },
  source: {
    patentNumber: "JP S47-8109 B",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa", "Shuji Koyanagi"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      glass: "CaF2 (fluorite crystal)",
      indexReference: "d",
      focalLengthMm: 187.646167407593,
      role: "Biconvex fluorite front element; the main positive power of the front group.",
      apd: "inferred",
      apdNote:
        "The patent table names this element CaF2 and Canon lists one fluorite element; the dispersion curve is the catalog CaF2 fit, not measured production material.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.3,
      glass: "S-LAH52 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -191.79556557069063,
      role: "Negative lanthanum-flint element of the front group, set against the fluorite for color correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.0,
      glass: "Unmatched (fluor crown, nd 1.48749 / νd 70.0)",
      indexReference: "d",
      indexReferenceNote:
        "The patent prints n and ν without naming a reference line; all five printed indices match catalog d-line values, so they are applied at the d line. Catalog glasses with this index have νd 70.24 to 70.45 against the printed 70.0, and the closest one moves the g-line focus away from the patent's aberration curves, so the dispersion here is estimated from nd and νd alone.",
      focalLengthMm: 233.79682226854194,
      role: "Positive meniscus closing the front group, ahead of the long air space to the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      glass: "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -45.22075259995423,
      role: "Negative front member of the cemented rear doublet, which gives the rear group its negative telephoto power.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      glass: "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 83.45540747803705,
      role: "Positive rear member of the cemented rear doublet.",
      cemented: "CD1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 123.765,
      d: 15.415000000000001,
      sd: 48.2,
      medium: 1,
    },
    {
      label: "2",
      R: -228.95499999999998,
      d: 16.025,
      sd: 48.2,
    },
    {
      label: "3",
      R: -183.46499999999997,
      d: 4.82,
      sd: 48.2,
      medium: 2,
    },
    {
      label: "4",
      R: 944.9250000000001,
      d: 3.37,
      sd: 48.2,
    },
    {
      label: "5",
      R: 109.17,
      d: 11.565000000000001,
      sd: 48.2,
      medium: 3,
    },
    {
      label: "6",
      R: 2500.31,
      d: 63.4875,
      sd: 48.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 63.4875,
    },
    {
      label: "7",
      R: -55.175,
      d: 7.4350000000000005,
      sd: 19.3,
      medium: 4,
    },
    {
      label: "8",
      R: 81.92500000000001,
      d: 17.63,
      sd: 19.3,
      medium: 5,
    },
    {
      label: "9",
      R: -114.84,
      d: 125.6,
      sd: 19.3,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Patent infinity state only; the production lens focuses to 10 m. The patent prints no close-focus spacing, so no focus movement is modelled.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 5.0,
    maxTraceFieldDeg: 2.5,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "Rear",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
