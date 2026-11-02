import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 3,817,603, sole example: Table 1, repeated in the claim, printed at nominal F = 100 mm.
 * All radii and gaps are scaled by 0.5. Indices and Abbe numbers are printed at the d-line.
 * Source correction: the US print gives r4 = 94.93 in both tables, a transposition of
 * 94.39, which DE 2224723 A1 prints. Corrected normalized EFL is 99.971 and F12 62.056
 * against printed 62.12; the printed r4 gives 99.724 and 61.892. The F12 residual stays
 * recorded as unresolved.
 * The patent prints no back focus. The last gap is the paraxial back focus of the corrected
 * prescription, which puts the image plane 67.7656 mm behind surface 1, with no refocus.
 * Semi-diameters are inferred: surface 1 is the f/1.7 beam plus 10 %, the others follow the
 * proportions of Figure 1 and clear the f/1.7 axial ray. Figure 1's arcs fit 24.7 px/mm across
 * the axis against 25.3 px/mm along it; at 24.7 the outer rims run about 5 % above the drawing.
 * Surfaces 6 and 7 end where the drawn curves end. Their rimExtensionSd lands draw the flat rims
 * of L3 and L4 in place of the drawn bevels and take no rays. L6 is drawn square-cut, so
 * surfaces 10 and 11 share one height. The patent marks no stop; it sits at the midpoint of the
 * 18.98 mm gap, z = 17.28 mm, with its radius solved from the paraxial f/1.7 pupil.
 * Infinity state only: closeFocusM is Pentax's stated 0.45 m and no focus travel is modeled.
 * The patent field is 45.4 degrees full against Pentax's 47 degrees. This is a patent design
 * associated with the SMC Pentax-M 50mm f/1.7, not a confirmed factory prescription.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-m-50mm-f17",
  maker: "Pentax",
  name: "PENTAX SMC M 50mm f/1.7",
  subtitle: "US 3,817,603, sole example — moderate match to the production lens; r4 misprint corrected",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 50 mm", "DESIGN F/1.7", "ALL SPHERICAL", "PATENT f = 100 SCALED × 0.5"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 50,
      design: 50,
    },
    fNumber: {
      marketing: 1.7,
      design: 1.7,
    },
  },
  source: {
    patentNumber: "US 3,817,603",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1974,
    authors: ["Yasuo Takahashi"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
    errata: [
      {
        status: "corrected",
        surface: "4",
        field: "R",
        printed: 94.93,
        applied: 47.195,
        evidence: ["source-summary", "aberration-figure"],
        note: "The US print gives r4 = 94.93 in Table 1 and the claim, a digit transposition of 94.39 (file value 47.195 at the 0.5 scale). The printed value traces to normalized EFL 99.724 and F12 61.892 against stated 100 and 62.12; 94.39 gives 99.971 and 62.056. Fig. 2A full-aperture spherical aberration reads about +.03 to +.04: printed value \u2212.024, corrected +.036. Fig. 2C distortion at 22.7\u00b0 reads \u2212.44%: printed \u2212.38%, corrected \u2212.44%. Table 2's 54 Seidel cells fit at rms 0.00036 corrected against 0.00647 printed. DE 2224723 A1 text prints r4 = 94,39 with the other ten radii equal to the US table (Google text; scan not viewed).",
      },
      {
        status: "unresolved",
        note: "With r4 corrected, F12 traces to 62.056 against printed 62.12 (\u22120.10%), which DE 2224723 A1 also prints; no single cell of the table explains it. Normalized EFL is 99.971 against nominal 100, and Table 2's Petzval column implies a normalizing F of about 99.97.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Front collector; its slightly negative rear radius limits distortion",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      glass: "TAF5 (HOYA coordinate equivalent; patent νd 46.8 versus catalog 46.6)",
      focalLengthMm: 84.63747104322509,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      role: "Shares the front positive power with L1; carries the corrected r4",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      glass: "TAF5 (HOYA coordinate equivalent; patent νd 46.8 versus catalog 46.6)",
      focalLengthMm: 48.90360893535522,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Flint meniscus ahead of the stop; concave rear face faces the stop gap",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      glass: "SF10 (SCHOTT catalog equivalent; production supplier unspecified)",
      focalLengthMm: -29.13239634620976,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      role: "Negative member of the cemented doublet behind the stop",
      nd: 1.6668,
      vd: 33.1,
      indexReference: "d",
      glass: "PBM39 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -27.262866221612676,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      role: "High-index positive member of the doublet; its index step at the junction corrects coma",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      glass: "TAF5 (HOYA coordinate equivalent; patent νd 46.8 versus catalog 46.6)",
      focalLengthMm: 30.338735980776068,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      role: "Rear positive singlet, working mainly through its strong rear face",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      glass: "TAF5 (HOYA coordinate equivalent; patent νd 46.8 versus catalog 46.6)",
      focalLengthMm: 54.2804795718613,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 69.64,
      d: 3.495,
      sd: 16.2,
      medium: 1,
    },
    {
      label: "2",
      R: -8164.25,
      d: 0.095,
      sd: 16.2,
    },
    {
      label: "3",
      R: 22.445,
      d: 3.995,
      sd: 14.9,
      medium: 2,
    },
    {
      label: "4",
      R: 47.195, // US 3,817,603 prints r4 = 94.93 (47.465 at 0.5 scale), a transposition of 94.39; corrected, see header and source.errata
      d: 2.585,
      sd: 14.4,
    },
    {
      label: "5",
      R: 102.775,
      d: 2.365,
      sd: 13.5,
      medium: 3,
    },
    {
      label: "6",
      R: 17.415,
      d: 4.745,
      sd: 10.7,
      rimExtensionSd: 13.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.745,
    },
    {
      label: "7",
      R: -19.185,
      d: 2.41,
      sd: 10.6,
      rimExtensionSd: 12.9,
      medium: 4,
    },
    {
      label: "8",
      R: 364.06,
      d: 4.505,
      sd: 12.9,
      medium: 5,
    },
    {
      label: "9",
      R: -26.415,
      d: 0.095,
      sd: 12.9,
    },
    {
      label: "10",
      R: 230.105,
      d: 2.765,
      sd: 12.5,
      medium: 6,
    },
    {
      label: "11",
      R: -54.555,
      d: 35.96558439057599,
      sd: 12.5,
    },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],
  focus: {
    closeFocusM: 0.45,
    description:
      "The patent publishes the infinity state only, so no element moves in this model. The production lens focuses to 0.45 m; its focus travel is not modeled. The image plane is computed, because the patent prints no back focus.",
  },
  aperture: {
    nominalFNumber: 1.7,
    fStops: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 45.4,
    maxTraceFieldDeg: 22.7,
  },
  layout: {
    yScFill: 0.38,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
