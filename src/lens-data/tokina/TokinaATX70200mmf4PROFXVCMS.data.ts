import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP 5857306 B2 (Kenko Tokina), Example 1 / Figure 2: Tokina AT-X 70-200mm F4 PRO FX VCM-S. The match to the
 * production lens rests on construction: 19 elements / 14 groups arranged 4+5+2+8, with the maker's SD positions
 * at L3, L4 and L12.
 * All 34 rows of Table 1 (33 lens surfaces plus the stop s20) are used as printed; all spherical; no scaling and no
 * printed value changed.
 * Back focus: Table 1 prints no image-side spacing after s34. The paraxial back focus of the printed prescription is
 * 54.656 / 54.658 / 54.678 mm at the three zoom stations (0.022 mm spread), so the model uses one fixed 54.66 mm.
 * Figure 2, which is to scale, draws about 54.7 mm. The 54.66 mm is derived, not a printed value.
 * Focus: estimated internal focusing with only G1Y (L3-L4) moving, as the patent's mechanism specifies.
 * The patent plots close focus at 1 m object-to-image but prints no near spacings. A paraxial conjugate
 * solve advances G1Y 13.521832 / 13.528398 / 13.534466 mm toward the object at the three zoom stations,
 * reducing d4 and increasing d8 equally; all other groups, the iris and the image plane stay fixed.
 * Thirty-three inverse-distance samples approximate the continuous focus law. These are calculated
 * reconstruction points, not published travel or certified finite-focus MTF states. At 194 mm the
 * calculated near magnification is 1:3.566, against the maker's 1:3.57; it is not a fit constraint.
 * Zoom: only the printed 72 / 105 / 194 mm stations are authored. Linear interpolation between them would be up to
 * about 6.3 mm out of focus, so zoomStep 0.5 makes the slider step from station to station.
 * Source inconsistencies: the printed zoom-gap sums are 42.32 / 42.32 / 42.31 mm, and the 0.01 mm tele difference
 * is kept as printed. Table 3 prints |FG4Y/FG4| = 0.540 where the prescription traces 0.5437 (sourceErrata).
 * Aberration check: the printed prescription reproduces the distortion of Figures 3-5 (-3.1 / +0.3 / +2.5 % at the
 * corner) but not their spherical aberration. Traced d-line longitudinal aberration at the F/4.1 pupil edge is
 * -0.78 / -0.47 / -0.10 mm at 72 / 105 / 194 mm where the figures draw about -0.06 / +0.09 / +0.08 mm. No single
 * printed radius, spacing or index accounts for the difference, so nothing is changed.
 * Semi-diameters are estimated from Figure 2 (200 ppi raster, 3.993 px/mm over the s1-s34 vertex span, rims read at
 * the centre of the outline) and floor-checked by real-ray trace at the three stations. Every element follows its
 * drawn rim: L1 31.0, L2 30.2, L3 28.9, L4 28.1, L7 13.6 and L9 13.4 mm, with the drawn cemented-joint steps at
 * L5 / L6, L10 / L11 and L13 / L14. Two air-spaced pairs touch inside the drawn rims: s2 / s3 at 29.04 mm and
 * s14 / s15 at 12.43 mm. In each pair one face stops short of the contact and its element is drawn bevelled there:
 * s3 ends at 28.4 mm (front of L2) and s14 at 12.16 mm (rear of L8), while L1, L7 and L9 keep the square rims the
 * figure draws. The figure draws flat lands outside the curved part of s2 (from about 29 mm), s24 (about 11.4 mm)
 * and s31 (about 12.2-12.4 mm). Lands are not modelled: s2 runs to L1's rim, s24 carries L14's 13.0 mm rim (the
 * F/4.1 axial ray needs 12.06 mm there) and L18 keeps one 14.0 mm rim. Off-axis vignetting from these rims remains.
 * gapSagFrac 0.96 is the smallest two-decimal value that admits s14 at 12.16 mm (the tele F/4.1 axial ray needs
 * 12.148 mm there) beside s15: the two faces use 95.6 % of the 2.36 mm gap at that height and keep 0.10 mm of
 * air. It also admits s3 at 28.4 mm beside s2 (95.3 % of the 2.01 mm gap, 0.09 mm of air).
 * Stop: the patent states about F/4.1 and no iris diameter, so the iris radius is computed from F/4.1 at each
 * station (13.32-13.33 mm); it is not a printed dimension.
 * nd / vd are as printed. Glass names are the catalog glasses that match them and supply the dispersion curve
 * and dPgF; they do not identify the supplier. The stabilization doublet L15-L16 is modelled centred, and nothing
 * here certifies close-focus, stabilized or production MTF performance.
 */
const LENS_DATA = {
  schema: 2,
  key: "tokina-at-x-70-200mm-f4-pro-fx-vcm-s",
  maker: "Tokina",
  name: "TOKINA AT-X 70-200mm f/4 PRO FX VCM-S",
  subtitle: "JP 5857306 B2, Example 1 — qualified production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 14 GROUPS",
      "DESIGN f = 72–194 mm",
      "DESIGN F/4.1",
      "ALL SPHERICAL",
      "ESTIMATED G1Y INNER FOCUS TO 1 m",
    ],
    elementCount: 19,
    groupCount: 14,
    focalLengthMm: { marketing: [70, 200], design: [71.98580960205994, 193.97187363326634] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "JP 5857306 B2",
    patentYear: 2016,
    authors: ["Katsuya Hirano", "Eiichi Yasuda"],
    assignees: ["Kenko Tokina Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "Table 3 prints |FG4Y/FG4| = 0.540, but the printed prescription traces 0.5437; no value is changed.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -199.09969168407216,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative front meniscus of the fixed subgroup G1X; air-spaced from L2",
      diagramLabel: "L1",
      dPgF: 0.015053668027861122,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.4,
      indexReference: "d",
      focalLengthMm: 257.6556262881089,
      glass: "S-PHM53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus of the fixed subgroup G1X",
      diagramLabel: "L2",
      dPgF: 0.0063959408339324675,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 141.08214173956344,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Tokina's construction diagram marks this element as SD glass (FK01); the patent prints only nd = 1.49700 and νd = 81.5 and names no glass.",
      role: "First positive element of the focus subgroup G1Y",
      diagramLabel: "L3",
      dPgF: 0.030742538991392454,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 224.57040093493904,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Tokina's construction diagram marks this element as SD glass (FK01); the patent prints only nd = 1.49700 and νd = 81.5 and names no glass.",
      role: "Second positive element of the focus subgroup G1Y",
      diagramLabel: "L4",
      dPgF: 0.030742538991392454,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 88.32524535972566,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the front cemented doublet of the variator G2",
      diagramLabel: "L5",
      cemented: "D1",
      dPgF: 0.016742550777214982,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -55.07403394874346,
      glass: "L-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative element of the front cemented doublet of the variator G2",
      diagramLabel: "L6",
      cemented: "D1",
      dPgF: -0.002558334813007046,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -53.18129744723707,
      glass: "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the second cemented doublet of the variator G2",
      diagramLabel: "L7",
      cemented: "D2",
      dPgF: -0.008143737244217575,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 65.88733711933149,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the second cemented doublet of the variator G2",
      diagramLabel: "L8",
      cemented: "D2",
      dPgF: 0.016742550777214982,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -42.48942294603724,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative rear singlet of the variator G2",
      diagramLabel: "L9",
      dPgF: -0.0076947089450264405,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.6,
      indexReference: "d",
      focalLengthMm: 35.33690577626045,
      glass: "S-LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive element of the cemented compensator G3",
      diagramLabel: "L10",
      cemented: "D3",
      dPgF: -0.0025920779628301194,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35.0,
      indexReference: "d",
      focalLengthMm: -60.450358974592525,
      glass: "S-LAM66 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus cemented to L10 in the compensator G3",
      diagramLabel: "L11",
      cemented: "D3",
      dPgF: 0.0014663811893945722,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 100.85347011990933,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Tokina's construction diagram marks this element as SD glass (FK01); the patent prints only nd = 1.49700 and νd = 81.6 and names no glass.",
      role: "Positive meniscus directly behind the stop; front element of the fixed subgroup G4X",
      diagramLabel: "L12",
      dPgF: 0.03230302590426204,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      focalLengthMm: -70.55164899956523,
      glass: "S-LAH60V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the cemented doublet of G4X",
      diagramLabel: "L13",
      cemented: "D4",
      dPgF: -0.0004357506013965562,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 46.27054113846116,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the cemented doublet of G4X",
      diagramLabel: "L14",
      cemented: "D4",
      dPgF: 0.0043277423652714475,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 37.67083857590125,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the stabilization doublet G4Y",
      diagramLabel: "L15",
      cemented: "D5",
      dPgF: 0.016742550777214982,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -21.176292358101744,
      glass: "S-LAM55 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative element of the stabilization doublet G4Y",
      diagramLabel: "L16",
      cemented: "D5",
      dPgF: 0.00017269921044360537,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      indexReference: "d",
      focalLengthMm: 60.20549255617132,
      glass: "S-BSM25 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive front singlet of the rear subgroup G4Z",
      diagramLabel: "L17",
      dPgF: -0.0020913850839844317,
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -60.84034539111274,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus singlet of the rear subgroup G4Z",
      diagramLabel: "L18",
      dPgF: 0.016742550777214982,
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: 91.48790034992581,
      glass: "S-BAH27 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive last element of the rear subgroup G4Z",
      diagramLabel: "L19",
      dPgF: 0.002109539072522204,
    },
  ],

  surfaces: [
    { label: "1", R: 155.134, d: 2.4, sd: 31.0, medium: 1 },
    { label: "2", R: 78.296, d: 2.01, sd: 31.0 },
    { label: "3", R: 119.756, d: 4.71, sd: 28.4, medium: 2 },
    { label: "4", R: 514.76, sd: 30.2 },
    { label: "5", R: 73.597, d: 7.65, sd: 28.9, medium: 3 },
    { label: "6", R: -1432.057, d: 0.25, sd: 28.9 },
    { label: "7", R: 120.901, d: 5.15, sd: 28.1, medium: 4 },
    { label: "8", R: -1432.057, sd: 28.1 },
    { label: "9", R: -235.475, d: 3.35, sd: 16.5, medium: 5 },
    { label: "10", R: -57.127, d: 1.5, sd: 16.0, medium: 6 },
    { label: "11", R: 57.127, d: 2.75, sd: 16.0 },
    { label: "12", R: 322.974, d: 1.4, sd: 13.6, medium: 7 },
    { label: "13", R: 37.686, d: 3.18, sd: 13.6, medium: 8 },
    { label: "14", R: 111.666, d: 2.36, sd: 12.16 },
    { label: "15", R: -47.205, d: 1.2, sd: 13.4, medium: 9 },
    { label: "16", R: 144.341, sd: 13.4 },
    { label: "17", R: 163.473, d: 6.33, sd: 14.0, medium: 10 },
    { label: "18", R: -26.391, d: 1.5, sd: 14.5, medium: 11 },
    { label: "19", R: -59.473, sd: 14.5 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "21", R: 28.23, d: 4.5, sd: 14.5, medium: 12 },
    { label: "22", R: 61.209, d: 0.5, sd: 14.5 },
    { label: "23", R: 31.332, d: 1.5, sd: 14, medium: 13 },
    { label: "24", R: 20.0, d: 6.91, sd: 13.0, medium: 14 },
    { label: "25", R: 156.487, d: 12.62, sd: 13.0 },
    { label: "26", R: -483.745, d: 3.47, sd: 11.5, medium: 15 },
    { label: "27", R: -30.02, d: 1.2, sd: 11.5, medium: 16 },
    { label: "28", R: 35.494, d: 5.73, sd: 11.5 },
    { label: "29", R: 51.87, d: 3.54, sd: 13.5, medium: 17 },
    { label: "30", R: -163.596, d: 5.95, sd: 13.5 },
    { label: "31", R: -21.264, d: 1.5, sd: 14, medium: 18 },
    { label: "32", R: -37.384, d: 0.2, sd: 14 },
    { label: "33", R: 266.207, d: 3.58, sd: 16, medium: 19 },
    { label: "34", R: -84.104, d: 54.66, sd: 16 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72, label: "Wide", published: true },
      { focalLengthMm: 105, published: true },
      { focalLengthMm: 194, label: "Tele", published: true },
    ],
    step: 0.5,
  },

  focus: {
    closeFocusM: 1,
    keyframes: [
      0, 0.03125, 0.0625, 0.09375, 0.125, 0.15625, 0.1875, 0.21875, 0.25, 0.28125, 0.3125, 0.34375, 0.375, 0.40625,
      0.4375, 0.46875, 0.5, 0.53125, 0.5625, 0.59375, 0.625, 0.65625, 0.6875, 0.71875, 0.75, 0.78125, 0.8125, 0.84375,
      0.875, 0.90625, 0.9375, 0.96875, 1,
    ],
    description:
      "ESTIMATED internal focus: only G1Y (L3–L4) moves, toward the object by 13.522 / 13.528 / 13.534 mm at the three zoom stations for a 1.0 m object-to-image distance. The patent identifies that group and plots 1 m states but prints no focus travel; these spacings are calculated. The front and rear gaps change equally in opposite directions; all other groups, the iris and the image plane stay fixed. Focus interpolates 33 calculated inverse-distance samples. Zoom still steps through the printed 72, 105 and 194 mm stations; its unmodeled intermediate cam would otherwise be up to 6.3 mm out of focus. Back focus stays at the derived 54.66 mm, and the stabilization doublet remains centred.",
  },

  gaps: {
    "4": {
      label: "d4 (G1X–G1Y)",
      values: [
        [
          15.25, 14.967621, 14.671799, 14.370161, 14.062512, 13.748646, 13.428347, 13.101388, 12.76753, 12.426522,
          12.078098, 11.721979, 11.357869, 10.985455, 10.604406, 10.214371, 9.81498, 9.405835, 8.986518, 8.556581,
          8.115546, 7.662904, 7.198109, 6.720578, 6.229683, 5.724752, 5.205059, 4.669821, 4.118191, 3.549252, 2.962009,
          2.355376, 1.728168,
        ],
        [
          15.25, 14.961431, 14.665604, 14.363961, 14.056306, 13.742435, 13.42213, 13.095165, 12.7613, 12.420286,
          12.071855, 11.715728, 11.351609, 10.979187, 10.598129, 10.208085, 9.808684, 9.399529, 8.980201, 8.550252,
          8.109204, 7.656549, 7.19174, 6.714194, 6.223284, 5.718336, 5.198626, 4.663369, 4.111719, 3.542759, 2.955493,
          2.348835, 1.721602,
        ],
        [
          15.25, 14.955518, 14.659687, 14.35804, 14.050381, 13.736504, 13.416195, 13.089225, 12.755357, 12.414337,
          12.065902, 11.70977, 11.345647, 10.97322, 10.592157, 10.202108, 9.802702, 9.393542, 8.974209, 8.544255,
          8.103202, 7.650542, 7.185728, 6.708176, 6.217261, 5.712308, 5.192592, 4.657329, 4.105674, 3.536709, 2.949437,
          2.342773, 1.715534,
        ],
      ],
    },
    "8": {
      label: "d8",
      values: [
        [
          2.4, 2.682379, 2.978201, 3.279839, 3.587488, 3.901354, 4.221653, 4.548612, 4.88247, 5.223478, 5.571902,
          5.928021, 6.292131, 6.664545, 7.045594, 7.435629, 7.83502, 8.244165, 8.663482, 9.093419, 9.534454, 9.987096,
          10.451891, 10.929422, 11.420317, 11.925248, 12.444941, 12.980179, 13.531809, 14.100748, 14.687991, 15.294624,
          15.921832,
        ],
        [
          18.3, 18.588569, 18.884396, 19.186039, 19.493694, 19.807565, 20.12787, 20.454835, 20.7887, 21.129714,
          21.478145, 21.834272, 22.198391, 22.570813, 22.951871, 23.341915, 23.741316, 24.150471, 24.569799, 24.999748,
          25.440796, 25.893451, 26.35826, 26.835806, 27.326716, 27.831664, 28.351374, 28.886631, 29.438281, 30.007241,
          30.594507, 31.201165, 31.828398,
        ],
        [
          34.99, 35.284482, 35.580313, 35.88196, 36.189619, 36.503496, 36.823805, 37.150775, 37.484643, 37.825663,
          38.174098, 38.53023, 38.894353, 39.26678, 39.647843, 40.037892, 40.437298, 40.846458, 41.265791, 41.695745,
          42.136798, 42.589458, 43.054272, 43.531824, 44.022739, 44.527692, 45.047408, 45.582671, 46.134326, 46.703291,
          47.290563, 47.897227, 48.524466,
        ],
      ],
    },
    "16": {
      label: "d16",
      values: [
        [
          26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06,
          26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06, 26.06,
          26.06, 26.06, 26.06,
        ],
        [
          19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71,
          19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71, 19.71,
          19.71, 19.71, 19.71,
        ],
        [
          1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
          1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
        ],
      ],
    },
    "19": {
      label: "d19",
      values: [
        [
          13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86,
          13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86, 13.86,
          13.86, 13.86, 13.86,
        ],
        [
          4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31,
          4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.31,
        ],
        [
          5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82,
          5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82, 5.82,
        ],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G1Y (focus group)", fromSurface: "5", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "19" },
    { text: "G4", fromSurface: "21", toSurface: "34" },
    { text: "G4Y (stabilizer)", fromSurface: "26", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.65, yScFill: 0.6 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
