import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PANASONIC LUMIX G VARIO 45-150mm f/4.0-5.6 ASPH. MEGA O.I.S. (H-FS45150) — US 2013/0335617 A1, Numerical Example 4
 * (Tables 13–16; Embodiment 4, Fig. 13, ¶¶0111–0119). Panasonic Corporation; inventors Takuya Imaoka, Tsuneo Uchida,
 * Shunichiro Yoshinaga and Masafumi Sueyoshi. Filed 13 June 2013 with JP priority 15 June 2012 and 19 April 2013;
 * granted later as US 9,250,423 B2. Patent millimetres and d-line indices, unscaled; no printed radius, thickness,
 * index, Abbe number, asphere coefficient or variable spacing is altered. Surface 23 (a flat plane with BF 0) is the
 * patent's image-side reference, not an optical surface, so the 18.9311 mm gap after surface 22 is the back focus.
 *
 * Production correlation: Panasonic lists 12 elements in 9 groups with two aspherical elements and one UHR element.
 * Example 4 has that construction, with aspheres on the image sides of L6 (surface 10) and L9 (surface 16) and L8 at
 * nd 2.00100. All eight of the patent's examples share this layout and these two aspherical surfaces, so Example 4 is
 * a representative choice, not a unique match. Panasonic has not published the prescription.
 *
 * Six units (+ − + − − +). From wide to tele G1 moves monotonically toward the object, G3, G4 and G5 move on paths
 * slightly convex toward the object, and G2 and G6 stay fixed (¶0118). The stop sits between L8 and L9 and moves with
 * G3. Zoom varies D3, D8, D16, D18 and D20; D16 and D18 also change with focus. L9 alone (G3b) decentres for O.I.S.
 * (¶0117); Example 4 needs 0.4457 mm at tele (¶0236). Decentring is not modelled.
 *
 * FOCUS: G4 (L10) moves toward the image for close focus (¶0119). All six printed states are kept: infinity (Table 15)
 * and close focus (Table 16) at the wide, middle and tele stations. The patent gives the close object distance as
 * 1000 mm without naming its reference point; the printed close gaps focus paraxially on an object 1000.15 / 1000.02 /
 * 999.99 mm in front of surface 1, so the distance is read from the first surface. Each station's closeFocusM is that
 * 1000 mm plus the station's first-surface-to-image length. G4 travels 0.8654 / 2.1859 / 5.4529 mm. Panasonic's 0.9 m
 * minimum focus is not in the patent and is not modelled.
 *
 * BETWEEN STATIONS: zoom interpolates the printed gaps linearly; this is not the production cam. The paraxial focus
 * then sits up to about 0.57 mm ahead of the image plane near zoomT 0.3 and up to about 2.67 mm behind it near zoomT
 * 0.8 (EFL about 116 mm). Interpolated close states focus between about 760 and 1130 mm from surface 1.
 *
 * STOP: surface 14 as printed. Its radius is derived from the printed F-numbers 4.16038 / 5.24260 / 5.75634 (about
 * 5.16–5.18 mm at all three stations), not from a published iris diameter. F/22 and seven blades are Panasonic's.
 *
 * SEMI-DIAMETERS: not printed. Estimated from Fig. 13(a) (wide, infinity) and floor-checked by real-ray trace; an
 * independent re-measurement of the figure agrees within about 5 %. G2 (surfaces 4–8) is 7.4 mm against about 7.7 mm
 * drawn: at 7.7 mm the facing L4 rear and L5 front sags would fill 97 % of their 1.1474 mm air gap, and at 7.4 mm they
 * fill 89 %. Fig. 13(a) ends L8's concave rear face (surface 13) at about 0.85 of the element's edge radius, with a
 * flat land square to the axis out to the edge; rimCutDepthMm 1.7 draws that land 1.7 mm behind the vertex (cap end
 * 5.95 mm, edge 7 mm). The cut is inferred from the figure and clears every traced wide-open beam, at infinity and at
 * the 1000 mm close state. Axial bundles at the printed F-numbers and chief rays to the printed 10.815 mm image height
 * clear every rim at every station, at infinity and at close focus. The rims vignette the corner bundle: at the
 * printed half-field up to about two-thirds of one side of the meridional bundle is cut at G1, about half at G2 and
 * about a fifth at L6 and L10.
 *
 * ASPHERES: the patent's κ sits in the (1 + κ) form, the engine's convention, and is 0 on both surfaces; even orders
 * A4–A10 (Table 14).
 *
 * Glass names are nd/νd catalog equivalents that select a dispersion curve; supplier and melt are not established.
 * Table 15 prints overall lengths of 91.9007 / 107.1967 / 129.9016 mm; the printed d values sum to 91.8999 /
 * 107.1952 / 129.8999 mm. The d values are kept.
 */
const LENS_DATA = {
  schema: 2,
  key: "panasonic-lumix-g-vario-45-150mm-f4-56-mega-ois",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G VARIO 45-150mm f/4.0-5.6 ASPH. MEGA O.I.S.",
  subtitle: "US 2013/0335617 A1, Numerical Example 4 — representative of eight near-identical examples",
  visible: true,
  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    imageCircleMm: 21.63,
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "DESIGN f = 45.40–144.00 mm",
      "DESIGN F/4.16–5.76",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 UHR ELEMENT",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: {
      marketing: [45, 150],
      design: [45.4, 144],
    },
    fNumber: {
      marketing: 4,
      design: 4.16,
    },
    closeFocusM: {
      marketing: 0.9,
    },
  },
  source: {
    patentNumber: "US 2013/0335617 A1",
    example: {
      label: "Numerical Example 4",
      id: "4",
    },
    patentYear: 2013,
    authors: ["Takuya Imaoka", "Tsuneo Uchida", "Shunichiro Yoshinaga", "Masafumi Sueyoshi"],
    assignees: ["Panasonic Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: -116.7785,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Flint negative meniscus, convex toward the object, at the front of the cemented first-group doublet",
      cemented: "L1+L2",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      indexReference: "d",
      focalLengthMm: 56.5348,
      glass: "N-SK11 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Crown biconvex positive of the cemented first-group doublet; the element of the patent's conditions (1) and (2)",
      cemented: "L1+L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: -18.1726,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong biconcave negative opening the fixed second group, cemented to L4",
      cemented: "L3+L4",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18,
      indexReference: "d",
      focalLengthMm: 24.5438,
      glass: "FDS18 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Very high-dispersion positive meniscus, convex toward the object, cemented behind L3 in the second group",
      cemented: "L3+L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -45.5606,
      glass: "E-FD10 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative closing the fixed second group",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.80998,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 21.9455,
      glass: "K-VC89 (SUMITA catalog equivalent, a moulding glass; production supplier unspecified)",
      role: "High-index biconvex positive opening the third group, aspherical on its image side (surface 10)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 17.2785,
      glass: "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index biconvex positive of the cemented doublet ahead of the stop",
      cemented: "L7+L8",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.1,
      indexReference: "d",
      focalLengthMm: -10.2099,
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      role: "UHR biconcave negative (nd 2.001) of the cemented doublet, directly ahead of the stop",
      cemented: "L7+L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.5176,
      vd: 63.5,
      indexReference: "d",
      focalLengthMm: 34.3781,
      glass: "D-K59 (CDGM catalog equivalent, a moulding glass; production supplier unspecified)",
      role: "O.I.S. element behind the stop (sub-unit G3b), aspherical on its image side (surface 16); its stabilizing shift is not modeled",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -40.3398,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus, convex toward the object, forming the focus group G4; moves toward the image for close focus",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -83.7515,
      glass: "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Weak crown negative meniscus, concave toward the object, forming the zooming unit G5",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 54.815,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint positive meniscus, concave toward the object, forming the fixed rear group G6",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 56.732,
      d: 1.1,
      sd: 14.1,
      medium: 1,
    },
    {
      label: "2",
      R: 35.0922,
      d: 4.023,
      sd: 14.1,
      medium: 2,
    },
    {
      label: "3",
      R: -333.4923,
      sd: 14.1,
    },
    {
      label: "4",
      R: -158.762,
      d: 0.7,
      sd: 7.4,
      medium: 3,
    },
    {
      label: "5",
      R: 16.1697,
      d: 2.2053,
      sd: 7.4,
      medium: 4,
    },
    {
      label: "6",
      R: 49.7377,
      d: 1.1474,
      sd: 7.4,
    },
    {
      label: "7",
      R: -58.5099,
      d: 0.7,
      sd: 7.4,
      medium: 5,
    },
    {
      label: "8",
      R: 77.0265,
      sd: 7.4,
    },
    {
      label: "9",
      R: 20.7792,
      d: 3.0547,
      sd: 8.1,
      medium: 6,
    },
    {
      label: "10A",
      R: -114.8753,
      d: 0.6336,
      sd: 8.1,
      asphere: {
        K: 0,
        A4: 1.25359e-5,
        A6: -8.52468e-9,
        A8: -9.66856e-11,
        A10: 2.43778e-13,
      },
    },
    {
      label: "11",
      R: 13.9442,
      d: 3.505,
      sd: 7.5,
      medium: 7,
    },
    {
      label: "12",
      R: -116.7351,
      d: 1.4505,
      sd: 7.5,
      medium: 8,
    },
    {
      label: "13",
      R: 11.2704,
      d: 3.6496,
      sd: 7,
      rimCutDepthMm: 1.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.2246,
    },
    {
      label: "15",
      R: 22.3752,
      d: 2.3917,
      sd: 6.2,
      medium: 9,
    },
    {
      label: "16A",
      R: -83.7427,
      sd: 6.2,
      asphere: {
        K: 0,
        A4: 1.30246e-5,
        A6: -2.51365e-7,
        A8: 9.13729e-9,
        A10: -1.07104e-10,
      },
    },
    {
      label: "17",
      R: 39.0639,
      d: 0.6,
      sd: 5,
      medium: 10,
    },
    {
      label: "18",
      R: 17.2183,
      sd: 5,
    },
    {
      label: "19",
      R: -21.5451,
      d: 0.7,
      sd: 8.3,
      medium: 11,
    },
    {
      label: "20",
      R: -46.1035,
      sd: 8.3,
    },
    {
      label: "21",
      R: -65.376,
      d: 2.1896,
      sd: 11,
      medium: 12,
    },
    {
      label: "22",
      R: -27.5587,
      d: 18.9311,
      sd: 11,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 45.4004,
        nominalFNumber: 4.16038,
        closeFocusM: 1.0918999,
        label: "Wide",
        publishedFocus: [1],
      },
      {
        focalLengthMm: 80.8563,
        nominalFNumber: 5.2426,
        closeFocusM: 1.1071952,
        label: "Mid",
        publishedFocus: [1],
      },
      {
        focalLengthMm: 144.0003,
        nominalFNumber: 5.75634,
        closeFocusM: 1.1298999,
        label: "Tele",
        publishedFocus: [1],
      },
    ],
  },
  focus: {
    closeFocusM: 1.0918999,
    description:
      "PUBLISHED: the patent prints infinity and a close state with the object 1000 mm in front of the first lens surface at the wide, middle and tele stations. For close focus G4 (L10) moves toward the image by 0.87, 2.19 and 5.45 mm at the three stations. Positions between the printed stations interpolate the printed gaps linearly and are not the production cam, so between the middle and tele stations the image can sit up to about 2.7 mm from best focus and the indicated close distance is approximate. Panasonic's 0.9 m minimum focus is not in the patent and is not modeled.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1000,
        distanceReference: "first-surface",
        source:
          "US 2013/0335617 A1, Numerical Example 4, Tables 15 and 16: printed close-focus gaps for a 1000 mm object distance, which the gaps focus when it is measured from the first lens surface",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 1000,
        distanceReference: "first-surface",
        source:
          "US 2013/0335617 A1, Numerical Example 4, Tables 15 and 16: printed close-focus gaps for a 1000 mm object distance, which the gaps focus when it is measured from the first lens surface",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 1000,
        distanceReference: "first-surface",
        source:
          "US 2013/0335617 A1, Numerical Example 4, Tables 15 and 16: printed close-focus gaps for a 1000 mm object distance, which the gaps focus when it is measured from the first lens surface",
      },
    ],
  },
  gaps: {
    "3": {
      label: "D3",
      values: [
        [6.1809, 6.1809],
        [21.4764, 21.4764],
        [44.1811, 44.1811],
      ],
    },
    "8": {
      label: "D8",
      values: [
        [17.406, 17.406],
        [7.6009, 7.6009],
        [0.6869, 0.6869],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [17.1221, 16.2567],
        [16.7857, 14.5998],
        [20.4688, 15.0159],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [0.45, 0.45],
        [7.7966, 7.7966],
        [12.9996, 12.9996],
      ],
    },
    "16A": {
      label: "D16",
      values: [
        [1.5348, 2.4002],
        [4.3295, 6.5154],
        [2.3574, 7.8103],
      ],
    },
  },
  aperture: {
    fStops: [4.16038, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2",
      fromSurface: "4",
      toSurface: "8",
    },
    {
      text: "G3",
      fromSurface: "9",
      toSurface: "16A",
    },
    {
      text: "G4",
      fromSurface: "17",
      toSurface: "18",
    },
    {
      text: "G5",
      fromSurface: "19",
      toSurface: "20",
    },
    {
      text: "G6",
      fromSurface: "21",
      toSurface: "22",
    },
  ],
  doublets: [
    {
      text: "L1+L2",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L3+L4",
      fromSurface: "4",
      toSurface: "6",
    },
    {
      text: "L7+L8",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
  layout: {
    yScFill: 0.3,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
