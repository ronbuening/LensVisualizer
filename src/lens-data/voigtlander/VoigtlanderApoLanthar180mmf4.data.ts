import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2003-270529 A, Example 2 (Cosina Co., Ltd., Yoshihisa Yomogida). Table 2 is transcribed at patent scale.
 * Nine spherical elements in seven air-spaced groups. Figure 3 shows three functional groups and two doublets.
 * The stop divides the printed 22.74 mm gap after S12 into about 5.00 mm before the stop and 17.74 mm after it.
 * Figure 3 gives its position; the radius follows the stated f/4. The patent gives no numerical clear apertures.
 * Clear radii follow the rim profiles in Figure 3 and Cosina's section, with clearance for the axial f/4 beam.
 * The middle doublets step down behind their negative elements with tapered rims, where both drawings show
 * square shoulders. No opaque lands are assumed.
 * Table 2 leaves the final spacing blank and gives no finite-focus table. Back focus is calculated at infinity
 * and at Cosina's 1.2 m object-to-image distance with inferred unit focus.
 * Element focal lengths are calculated for each thick element in air.
 * The catalog glass curves match the printed helium d-line coordinates and approximate dispersion.
 * Cosina marks Elements 2 and 3 as anomalous low-dispersion glass. The production prescription is unconfirmed.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-apo-lanthar-180-f4",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus",
  subtitle: "JP 2003-270529 A, Example 2 — Cosina Co., Ltd. / Yoshihisa Yomogida",

  catalog: {
    lensMounts: ["nikon-f", "canon-fd", "m42", "pentax-k", "minolta-sr", "olympus-om", "contax-yashica"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 7 GROUPS", "DESIGN f = 178 mm", "DESIGN F/4", "ALL SPHERICAL", "2 APD GLASS ELEMENTS"],
    closeFocusM: { marketing: 1.2 },
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 180, design: 178 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "JP 2003-270529 A",
    example: { label: "Example 2", id: "2" },
    patentYear: 2003,
    authors: ["Yoshihisa Yomogida"],
    assignees: ["Cosina Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L41",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.4,
      focalLengthMm: 186.54,
      glass: "FK5 (Sumita spectral proxy)",
      role: "Weakest of the three positive front menisci.",
    },
    {
      id: 2,
      name: "L42",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 103.55,
      glass: "FCD1 (HOYA spectral proxy)",
      apd: "inferred",
      apdNote: "Cosina marks this position as anomalous low-dispersion glass. FCD1 provides a comparison curve.",
      role: "Positive meniscus immediately behind the front element.",
    },
    {
      id: 3,
      name: "L43",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 97.49,
      glass: "FCD1 (HOYA spectral proxy)",
      apd: "inferred",
      apdNote: "Cosina marks this position as anomalous low-dispersion glass. FCD1 provides a comparison curve.",
      role: "Strongest front meniscus, at the exit of G4.",
    },
    {
      id: 4,
      name: "L51",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.3,
      focalLengthMm: -31.99,
      glass: "NBFD10 (HOYA spectral proxy)",
      cemented: "D1",
      role: "High-index negative member of the first cemented doublet.",
    },
    {
      id: 5,
      name: "L52",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 52.98,
      glass: "BSC7 (HOYA spectral proxy)",
      cemented: "D1",
      role: "Lower-dispersion positive member of the first cemented doublet.",
    },
    {
      id: 6,
      name: "L53",
      label: "Element 6",
      type: "Biconcave",
      nd: 1.8061,
      vd: 40.7,
      focalLengthMm: -21.52,
      glass: "NBFD13 (HOYA spectral proxy)",
      cemented: "D2",
      role: "Strong biconcave negative member of the second cemented doublet.",
    },
    {
      id: 7,
      name: "L54",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      focalLengthMm: 33.35,
      glass: "E-FD10 (HOYA spectral proxy)",
      cemented: "D2",
      role: "Dispersive positive member of the second cemented doublet.",
    },
    {
      id: 8,
      name: "L61",
      label: "Element 8",
      type: "Biconvex",
      nd: 1.72825,
      vd: 28.3,
      focalLengthMm: 66.69,
      glass: "E-FD10 (HOYA spectral proxy)",
      role: "Positive rear singlet immediately after the stop.",
    },
    {
      id: 9,
      name: "L62",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -51.91,
      glass: "LAH66 (OHARA spectral proxy)",
      role: "Negative rear singlet that leaves G6 weakly diverging.",
    },
  ],

  surfaces: [
    // G4: three air-spaced positive menisci
    { label: "1", R: 59.189, d: 4.55, sd: 22.3, medium: 1 },
    { label: "2", R: 165.276, d: 0.2, sd: 22.3 },
    { label: "3", R: 34.194, d: 7.22, sd: 21.3, medium: 2 },
    { label: "4", R: 94.761, d: 0.2, sd: 21.3 },
    { label: "5", R: 38.044, d: 6.31, sd: 19.4, medium: 3 },
    { label: "6", R: 167.359, d: 2.17, sd: 19.4 },

    // G5: two cemented doublets
    { label: "7", R: 119.461, d: 1.6, sd: 17.0, medium: 4 },
    { label: "8", R: 21.675, d: 6.81, sd: 14.6, medium: 5 },
    { label: "9", R: 92.885, d: 3.42, sd: 14.6 },
    { label: "10", R: -497.54, d: 1.6, sd: 13.3, medium: 6 },
    { label: "11", R: 18.0, d: 5.8, sd: 12.1, medium: 7 },
    { label: "12", R: 60.09, d: 5.0, sd: 12.1 },

    // Figure 3 places the stop about 22% of the way through the printed 22.74 mm air gap.
    { label: "STO", R: "flat", d: 17.74 },

    // G6: two air-spaced singlets
    { label: "13", R: 54.531, d: 2.44, sd: 8.8, medium: 8 },
    { label: "14", R: -435.606, d: 1.84, sd: 8.8 },
    { label: "15", R: -33.837, d: 1.2, sd: 9.0, medium: 9 },
    { label: "16", R: -219.876, sd: 9.0 },
  ],

  focus: {
    closeFocusM: 1.2,
    description:
      "The model moves all nine elements forward together by 46.48 mm at 1.2 m. The patent gives no close-focus spacings.",
  },
  gaps: { "16": { label: "BF", values: [[54.75638, 101.23648]] } },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G4 (FRONT)", fromSurface: "1", toSurface: "6" },
    { text: "G5 (MIDDLE)", fromSurface: "7", toSurface: "12" },
    { text: "G6 (REAR)", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { scFill: 0.5, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
