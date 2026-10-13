import type { LensDataInput } from "../../types/optics.js";
/**
 * Samyang 100mm F2.8 ED UMC Macro; KR 10-2017-0073883 A, Example 1 (Table 1, Figure 1),
 * the patent's only numerical example.
 * The link to the production lens rests on its construction; Samyang has not confirmed
 * that these are the production radii, spacings or glasses.
 * 15 spherical elements in 12 groups. No scaling, asphere or index conversion.
 * Radii, glass thicknesses, air gaps through surface 27, nd and Vd are as printed
 * (d line, paragraph 0120).
 *
 * ELEMENT AND GROUP NAMES: name and diagramLabel carry the patent's reference signs
 * (L10, L11 in the first group; L20-L27 in the second; L30-L34 in the third), and label
 * carries the patent's ordinal (first lens ... fifteenth lens), which is also Samyang's
 * element count. The patent names the groups only as first, second and third lens
 * group; G1-G3 with the claimed power signs stand for them.
 *
 * MODELLING CHOICES where Table 1 is incomplete or disagrees with the rest of the patent:
 * - Stop: on plane row 18. Table 1 prints "19(STO)" on the powered front face of
 *   element 11, but Figure 1 draws a separate diaphragm between elements 10 and 11,
 *   paragraph 0064 places it next to element 10, and row 18 carries the table's only
 *   unrounded aperture, C = 11.92834 mm, which traces to f/2.904 against the printed
 *   Fno 2.9.
 * - Image gap: d28 = 40.64133495711856 mm is the paraxial in-air back focus of rows
 *   1-28. Table 1 has no image row; its last entry is D28 = 1.002. The printed summary
 *   Bf = 41.375 is 0.734 mm longer, which implies a plate the table does not list
 *   (Figure 1 draws a filter ahead of the image plane). No plate is modelled.
 * - Column C: the text calls it a diameter, but the values behave as semi-diameters
 *   (f/2.904 at the stop; condition 1 holds only with diameters of 2C), so they are
 *   used as sd.
 * These are readings of an inconsistent source, not proven corrections of it;
 * sourceErrata lists the inconsistencies as unresolved.
 *
 * NOTE ON SEMI-DIAMETERS: sd is Table 1's printed C column except on six surfaces.
 * Five are raised 0.01-0.02 mm to the height the f/2.904 axial ray reaches in the
 * printed, rounded prescription: S8 14.58 (C 14.57), S9 13.06 (C 13.04), S10 13.05
 * (C 13.03), S11 12.66 (C 12.64) and S19 10.71 (C 10.7). gapSagFrac 0.92 is the
 * smallest two-decimal allowance that admits the 9->10 pair at S10 13.05 (91.4% of its
 * 1.676 mm gap, 0.14 mm of rim air); the faces do not cross and Figure 1 draws them
 * meeting at the rim. S27 is held at 12.72 (C 13.23) because with both faces at the
 * printed value the 26->27 pair would fill 97.6% of its 2.514 mm gap; Figure 1 ends the
 * concave S27 arc at 12.5-12.9 mm on a flat land and runs the S26 face to the block
 * edge, so S26 carries the printed 13.23. S7 carries the printed 15.57.
 * Figure 1 draws every element as a square block about 1.2 mm outside its C and ends
 * the concave faces near C, so it confirms the column and sets no value.
 * The corner vignetting is the column's own: at 12.38 deg (21.63 mm image height) one
 * traced ray passes S1-S4 within 0.06 mm of their printed C and another passes S22-S28
 * within 0.02 mm of theirs, so those eleven values are the two rays that bound the
 * designer's corner bundle. Geometric transmission at 12.4 deg is 42.2% (45.8% with S27
 * at the printed 13.23). Do not widen the front or rear rims to reduce it.
 *
 * APERTURE: the patent states Fno 2.9; the lens is marketed as f/2.8. The 11.92834 mm
 * stop radius gives f/2.904147833 by exact ray trace (paraxial f/2.802621859). The
 * unaltered C column would admit f/2.907412160, limited at S9; with the five raised
 * rims the axial beam is limited by the iris at f/2.9041. The S27 rim adds some corner
 * clipping. Only the infinity, d-line geometry has been checked.
 *
 * FOCUS: the patent tabulates only the infinity state. Paragraphs 0051 and 0065
 * describe a fixed first group with elements 3-15 moving toward the object, but give
 * no travel or near-focus gaps, so var is empty and the infinity geometry holds at
 * every focus-slider position. closeFocusM 0.307 is the maker's stated minimum focus
 * distance, not a modelled state.
 *
 * nC/nF/ng are evaluated from the HOYA catalog dispersion formulas of the glasses the
 * patent names. They are catalog values, not line indices published in the patent or
 * melt data, and support no apochromatic or measured-performance claim.
 */
const LENS_DATA = {
  key: "samyang-100mm-f28-ed-umc-macro",
  name: "SAMYANG 100mm f/2.8 ED UMC MACRO",
  maker: "Samyang",
  sourceErrata: [
    {
      status: "unresolved",
      note: 'Table 1 prints "19(STO)" on the powered front face of element 11, while Figure 1 and paragraph 0064 show a separate diaphragm next to element 10, where plane row 18 carries the only unrounded aperture value (11.92834 mm). The model places the stop on row 18; either position traces to f/2.904, so the printed F-number does not decide between them.',
    },
    {
      status: "unresolved",
      note: "Table 1 ends at row 28 with D = 1.002 and has no image row, and the text defines the printed Bf = 41.375 from element 12 in one place and element 15 in another. The model uses the in-air paraxial back focus of rows 1–28, 40.641 mm; the 0.734 mm difference is consistent with the filter plate Figure 1 draws but Table 1 does not list, and no plate is modelled.",
    },
    {
      status: "unresolved",
      note: "Column C is described as a diameter, but its values act as semi-diameters: the stop value traces to f/2.904 and condition 1 holds only with diameters of 2C. As printed, the rounded values also sit 0.001–0.015 mm inside the f/2.904 axial ray on surfaces 8–11 and 19, so those five are modelled 0.01–0.02 mm larger; surface 26 is modelled at 12.72 mm against the printed 13.23 mm to keep it clear of surface 27, which adds some corner vignetting.",
    },
    {
      status: "unresolved",
      note: "The printed summary does not match Table 1: f1 = 53.1259 and f2 = −88.477 against computed group focal lengths of −752.4, +51.2 and −88.3 mm, and T2 = 91.07 against 90.62 mm from surface 1 to the stop. Condition 8 as defined gives T1/T2 = 0.363, outside its 2–3 range (the reciprocal is 2.757), and claim 1 calls element 14 convex to the object where the radii, abstract, paragraph 0059 and Figure 1 make it convex to the image; Table 1 is used as printed.",
    },
  ],
  subtitle: "KR 10-2017-0073883 A, Example 1 — construction-based production correlation",
  specs: ["15 ELEMENTS / 12 GROUPS", "DESIGN f = 98.04 mm", "DESIGN F/2.9", "ALL SPHERICAL", "INFINITY-ONLY MODEL"],
  focalLengthMarketing: 100,
  focalLengthDesign: 98.0430261983309,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: [
    "canon-ef",
    "nikon-f",
    "pentax-k",
    "sony-a",
    "canon-ef-m",
    "fujifilm-x",
    "samsung-nx",
    "sony-fe",
    "four-thirds",
    "micro-four-thirds",
  ],
  imageFormat: "135-full-frame",
  patentNumber: "KR 10-2017-0073883 A",
  patentAuthors: ["Jong Young Park", "Jung Du Lee"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2017,
  elementCount: 15,
  groupCount: 12,
  elements: [
    {
      id: 1,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.658436,
      vd: 50.85,
      fl: -132.443126682,
      glass: "BACED5 (Hoya; source-named catalog equivalent)",
      role: "Negative meniscus, convex to the object; front element of the fixed first group.",
      nC: 1.65454401837,
      nF: 1.66749143632,
      ng: 1.67471001071,
    },
    {
      id: 2,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.785897,
      vd: 43.93,
      fl: 151.440632361,
      glass: "NBFD11 (Hoya; source-named catalog equivalent)",
      role: "Positive meniscus, convex to the object; completes the weakly negative fixed first group.",
      nC: 1.78053255045,
      nF: 1.79842051906,
      ng: 1.80845837934,
    },
    {
      id: 3,
      name: "L20",
      diagramLabel: "L20",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.92286,
      vd: 20.88,
      fl: 54.006024749,
      glass: "E-FDS1 (Hoya; source-named catalog equivalent)",
      role: "Plano-convex high-index element that opens the central group; the position Samyang marks HR.",
      nC: 1.91037567834,
      nF: 1.95457312693,
      ng: 1.9828139743,
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.496997,
      vd: 81.61,
      fl: 59.333673524,
      glass: "FCD1 (Hoya; source-named catalog equivalent)",
      apd: "inferred",
      apdNote:
        "Samyang marks this position ED; FCD1 (νd 81.61) is an extra-low-dispersion crown whose catalog lines give ΔPgF ≈ +0.032, and the tag is inferred from the patent/product correlation, not stated in the patent.",
      role: "Low-dispersion positive front element of the first cemented pair; the position Samyang marks ED.",
      nC: 1.49513747764,
      nF: 1.50122750457,
      ng: 1.50450912671,
      cemented: "D1",
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.846663,
      vd: 23.78,
      fl: -28.444777161,
      glass: "FDS90 (Hoya; source-named catalog equivalent)",
      role: "High-dispersion negative rear element of the first cemented pair.",
      nC: 1.83649191249,
      nF: 1.87208870412,
      ng: 1.89413034128,
      cemented: "D1",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.487489,
      vd: 70.44,
      fl: 39.664113022,
      glass: "FC5 (Hoya; source-named catalog equivalent)",
      role: "Positive crown front element of the second cemented pair.",
      nC: 1.48535000402,
      nF: 1.49227052409,
      ng: 1.49594250735,
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      diagramLabel: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.846663,
      vd: 23.78,
      fl: -43.479932607,
      glass: "FDS90 (Hoya; source-named catalog equivalent)",
      role: "Negative flint meniscus, convex to the image; rear element of the second cemented pair.",
      nC: 1.83649191249,
      nF: 1.87208870412,
      ng: 1.89413034128,
      cemented: "D2",
    },
    {
      id: 8,
      name: "L25",
      diagramLabel: "L25",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      fl: -50.822873943,
      glass: "E-FD8 (Hoya; source-named catalog equivalent)",
      role: "Negative front element of the third cemented pair.",
      nC: 1.68250612113,
      nF: 1.70461517554,
      ng: 1.71785801799,
      cemented: "D3",
    },
    {
      id: 9,
      name: "L26",
      diagramLabel: "L26",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.46,
      fl: 41.656523808,
      glass: "FD60 (Hoya; source-named catalog equivalent)",
      role: "Positive rear element of the third cemented pair.",
      nC: 1.79610909458,
      nF: 1.82773885579,
      ng: 1.8472131129,
      cemented: "D3",
    },
    {
      id: 10,
      name: "L27",
      diagramLabel: "L27",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.719998,
      vd: 50.34,
      fl: 96.575494449,
      glass: "LAC10 (Hoya; source-named catalog equivalent)",
      role: "Positive singlet that closes the central group, immediately ahead of the stop.",
      nC: 1.71567865885,
      nF: 1.72998029196,
      ng: 1.73784961376,
    },
    {
      id: 11,
      name: "L30",
      diagramLabel: "L30",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.701543,
      vd: 41.15,
      fl: -56.397481007,
      glass: "BAFD7 (Hoya; source-named catalog equivalent)",
      role: "Negative meniscus, convex to the object; first of the five rear singlets.",
      nC: 1.69650852119,
      nF: 1.71355737635,
      ng: 1.72339475217,
    },
    {
      id: 12,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.487489,
      vd: 70.44,
      fl: -78.538864086,
      glass: "FC5 (Hoya; source-named catalog equivalent)",
      role: "Biconcave negative singlet of the rear group.",
      nC: 1.48535000402,
      nF: 1.49227052409,
      ng: 1.49594250735,
    },
    {
      id: 13,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.834001,
      vd: 37.35,
      fl: 28.95342882,
      glass: "NBFD10 (Hoya; source-named catalog equivalent)",
      role: "Strong positive singlet of the rear group.",
      nC: 1.82742030392,
      nF: 1.84975259312,
      ng: 1.86268424279,
    },
    {
      id: 14,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.516798,
      vd: 64.2,
      fl: -109.114112394,
      glass: "BSC7 (Hoya; source-named catalog equivalent)",
      role: "Negative meniscus, convex to the image, in the rear group.",
      nC: 1.51431870283,
      nF: 1.52236873773,
      ng: 1.52666971664,
    },
    {
      id: 15,
      name: "L34",
      diagramLabel: "L34",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.32,
      fl: -93.311527424,
      glass: "E-FD10 (Hoya; source-named catalog equivalent)",
      role: "Negative meniscus, convex to the image; last element of the lens.",
      nC: 1.72082031297,
      nF: 1.74653490636,
      ng: 1.76211465316,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 65.34,
      d: 2.7,
      nd: 1.658436,
      elemId: 1,
      sd: 23.9,
    },
    {
      label: "2",
      R: 36.74,
      d: 1.2,
      nd: 1,
      elemId: 0,
      sd: 22.3,
    },
    {
      label: "3",
      R: 36.68,
      d: 5.0,
      nd: 1.785897,
      elemId: 2,
      sd: 22.3,
    },
    {
      label: "4",
      R: 49.84,
      d: 41.91508,
      nd: 1,
      elemId: 0,
      sd: 21.5,
    },
    {
      label: "5",
      R: 49.84,
      d: 5.2,
      nd: 1.92286,
      elemId: 3,
      sd: 17.1,
    },
    {
      label: "6",
      R: 1000000000000000.0,
      d: 0.261807,
      nd: 1,
      elemId: 0,
      sd: 16.75,
    },
    {
      label: "7",
      R: 37.81,
      d: 6.926214,
      nd: 1.496997,
      elemId: 4,
      sd: 15.57,
    },
    {
      label: "8",
      R: -125.84,
      d: 2.0,
      nd: 1.846663,
      elemId: 5,
      sd: 14.58, // Source C=14.57; the f/2.904 axial ray reaches 14.578 here.
    },
    {
      label: "9",
      R: 30.0,
      d: 1.676098,
      nd: 1,
      elemId: 0,
      sd: 13.06, // Source C=13.04; the f/2.904 axial ray reaches 13.054 here.
    },
    {
      label: "10",
      R: 59.26,
      d: 7.5,
      nd: 1.487489,
      elemId: 6,
      sd: 13.05, // Source C=13.03; the f/2.904 axial ray reaches 13.042 here.
    },
    {
      label: "11",
      R: -27.51,
      d: 2.0,
      nd: 1.846663,
      elemId: 7,
      sd: 12.66, // Source C=12.64; the f/2.904 axial ray reaches 12.655 here.
    },
    {
      label: "12",
      R: -112.49,
      d: 1.742473,
      nd: 1,
      elemId: 0,
      sd: 12.78,
    },
    {
      label: "13",
      R: -37.42,
      d: 2.0,
      nd: 1.68893,
      elemId: 8,
      sd: 12.78,
    },
    {
      label: "14",
      R: 556.29,
      d: 5.7,
      nd: 1.805181,
      elemId: 9,
      sd: 13.53,
    },
    {
      label: "15",
      R: -35.53,
      d: 0.1,
      nd: 1,
      elemId: 0,
      sd: 13.95,
    },
    {
      label: "16",
      R: 138.12,
      d: 4.5,
      nd: 1.719998,
      elemId: 10,
      sd: 13.74,
    },
    {
      label: "17",
      R: -138.12,
      d: 0.202,
      nd: 1,
      elemId: 0,
      sd: 13.5,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 3.0,
      nd: 1,
      elemId: 0,
      sd: 11.92834,
    },
    {
      label: "19",
      R: 80.36,
      d: 2.0,
      nd: 1.701543,
      elemId: 11,
      sd: 10.71, // Source C=10.7; the f/2.904 axial ray reaches 10.7007 here.
    },
    {
      label: "20",
      R: 26.24,
      d: 8.201572,
      nd: 1,
      elemId: 0,
      sd: 9.91,
    },
    {
      label: "21",
      R: -76.9,
      d: 2.0,
      nd: 1.487489,
      elemId: 12,
      sd: 9.7,
    },
    {
      label: "22",
      R: 76.9,
      d: 5.0,
      nd: 1,
      elemId: 0,
      sd: 10.4,
    },
    {
      label: "23",
      R: 58.93,
      d: 5.767684,
      nd: 1.834001,
      elemId: 13,
      sd: 13.0,
    },
    {
      label: "24",
      R: -39.09,
      d: 0.390847,
      nd: 1,
      elemId: 0,
      sd: 13.23,
    },
    {
      label: "25",
      R: -51.63,
      d: 2.0,
      nd: 1.516798,
      elemId: 14,
      sd: 13.13,
    },
    {
      label: "26",
      R: -619.72,
      d: 2.514227,
      nd: 1,
      elemId: 0,
      sd: 13.23,
    },
    {
      label: "27",
      R: -35.03,
      d: 2.0,
      nd: 1.72825,
      elemId: 15,
      sd: 12.72, // Source C=13.23; held here so the 26->27 pair fills 89.9% of its gap, not 97.6%.
    },
    {
      label: "28",
      R: -74.04,
      d: 40.64133495711856, // In-air paraxial back focus of rows 1-28; Table 1 prints D28=1.002 and no image row.
      nd: 1,
      elemId: 0,
      sd: 13.85,
    },
  ],
  asph: {},
  var: {},
  varLabels: [],
  nominalFno: 2.9041478325761796,
  closeFocusM: 0.307,
  fstopSeries: [2.9041478325761796, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,
  focusDescription:
    "The patent tabulates only the infinity state. It describes rear focusing with the first group fixed and the second and third groups (L20–L34, elements 3–15) moving toward the object for close focus (paragraphs 0051 and 0065), but gives no travel or near-focus gaps, so no focusing is modelled and the lens stays at infinity for every focus setting. The production lens focuses to 0.307 m at 1:1.",
  groups: [
    {
      text: "G1 (−) FIXED",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "G2 (+)",
      fromSurface: "5",
      toSurface: "17",
    },
    {
      text: "G3 (−)",
      fromSurface: "19",
      toSurface: "28",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "D2",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "D3",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
  yScFill: 0.72,
  scFill: 0.66,
  gapSagFrac: 0.92,
} satisfies LensDataInput;
export default LENS_DATA;
