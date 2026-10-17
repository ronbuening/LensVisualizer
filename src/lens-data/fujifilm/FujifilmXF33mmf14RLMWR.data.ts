import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FUJIFILM FUJINON XF33mmF1.4 R LM WR
 *
 * Data source: US 2022/0276464 A1, Example 3 (FUJIFILM Corporation).
 * Patent design: 15 elements / 10 groups, 4 aspherical surfaces on 2 elements.
 * Focus: inner focus; the complete second lens group G2 translates toward the object.
 *
 * Manufacturer metadata is used for marketed focal length, aperture, minimum focus,
 * image format, mount, and aperture-blade count. The patent prescription is retained
 * at its native f = 33.9303 mm scale rather than scaled to the rounded 33 mm label.
 *
 * NOTE ON COVER GLASS: Patent surfaces 27-28 are the generic optical member PP
 * representing a sensor cover/filter stack (t = 2.8500 mm, nd = 1.51680, vd = 64.20).
 * It is modeled physically in `rearPlates` (traced, not drawn) with the printed
 * 0.2010 mm gap to the image plane; surface 26A stores the patent's 9.4071 mm gap
 * to the plate. Air-equivalent back focus: 9.4071 + 2.8500 / 1.51680 + 0.2010 =
 * 11.4871 mm (patent Table 10 Bf 11.49).
 *
 * NOTE ON SEMI-DIAMETERS: The patent does not publish clear apertures. SDs here are
 * independently estimated from the infinity F1.44 marginal bundle, the APS-C field,
 * the 58 mm filter throat, element SD ratios, edge thickness, and signed cross-gap
 * sag intrusion. The tightest constraint is the biconvex air lens between surfaces
 * 16 and 17; the selected 8.94 mm shared SD leaves 4.131 mm of sag intrusion inside
 * the 4.600 mm air gap, under the 90% project limit.
 *
 * NOTE ON ASPHERES: Surfaces 20A, 21A, 25A, and 26A store the exact Example 3
 * Table 12 odd/even polynomials through A12. The patent's KA = 1 converts to
 * the standard spherical base K = 0; zero A3 terms are omitted.
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-xf-33mm-f14-r-lm-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 33mm f/1.4 R LM WR",
  subtitle: "US 2022/0276464 A1 Example 3 - FUJIFILM",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "33 mm APS-C standard prime",
      "15 elements / 10 groups",
      "3 ED elements / 2 aspherical elements",
      "Patent f = 33.93 mm, FNo = 1.44",
      "Inner focus, linear-motor production lens",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: 33, design: 33.9303252525 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "US 2022/0276464 A1",
    patentYear: 2022,
    authors: ["Taiga Noda", "Ryoko Tomioka"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front negative",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.42,
      focalLengthMm: -45.82,
      glass: "FK5 / S-FSL5 class fluor crown (487/704 code)",
      apd: false,
      role: "Negative front collector element; widens the field and begins the retro-Gauss front correction without being one of the marketed ED elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 dense positive",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: 52.03,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "High-index positive collector following the front negative element.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 ED crown",
      type: "Positive Meniscus (ED)",
      nd: 1.497,
      vd: 81.59,
      focalLengthMm: 89.21,
      glass: "S-FPL51 (OHARA) / FCD1 class ED fluorophosphate",
      apd: "inferred",
      apdNote:
        "Positive anomalous partial dispersion inferred from the S-FPL51/FCD1 glass class; not separately tabulated in the patent.",
      role: "First ED element; cemented to L14 for longitudinal chromatic correction in G1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 flint partner",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: -45.02,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "Flint partner for the first ED cemented doublet; the L13+L14 cell is net negative.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 dense lanthanum flint",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.54,
      focalLengthMm: 33.77,
      glass: "S-LAH59 class dense lanthanum flint (816/465 code)",
      apd: false,
      role: "Strong positive member of the second G1 cemented cell; high index supplies most of the first group's positive power.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L16",
      label: "L16 dense flint",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.27,
      focalLengthMm: -133.37,
      glass: "Dense flint (785/263 code; J-SFS3 / SF56A class, uncertain vendor)",
      apd: false,
      role: "High-dispersion cemented partner for L15; the L15+L16 cell is net positive.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L21",
      label: "L21 focus-front positive",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      focalLengthMm: 48.96,
      glass: "S-NPH3 (OHARA)",
      apd: false,
      role: "Very high-index short flint at the object side of the focus group; its object-side convex surface satisfies the focus-group shape condition.",
    },
    {
      id: 8,
      name: "L22",
      label: "L22 focus flint",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.79,
      focalLengthMm: -23.9,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense negative flint cemented to L23; begins the focus group's chromatic balancing.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L23",
      label: "L23 focus ED",
      type: "Positive Meniscus (ED)",
      nd: 1.59283,
      vd: 68.63,
      focalLengthMm: 37.06,
      glass: "FCD515 / FCD505 class ED (592/686 code; vendor not uniquely asserted)",
      apd: "inferred",
      apdNote:
        "Positive anomalous partial dispersion inferred from the ED glass class; not separately tabulated in the patent.",
      role: "First ED element inside the moving focus group; forms the object-side boundary of the biconvex air lens after its rear surface.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L24",
      label: "L24 focus ED",
      type: "Positive Meniscus (ED)",
      nd: 1.497,
      vd: 81.59,
      focalLengthMm: 86.5,
      glass: "S-FPL51 (OHARA) / FCD1 class ED fluorophosphate",
      apd: "inferred",
      apdNote:
        "Positive anomalous partial dispersion inferred from the S-FPL51/FCD1 glass class; not separately tabulated in the patent.",
      role: "Second ED element inside the moving focus group; the front surface forms the image-side boundary of the biconvex air lens.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L25",
      label: "L25 focus Ln",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.76,
      focalLengthMm: -22.92,
      glass: "E-FD13 (HOYA) / H-ZF50 class",
      apd: false,
      role: "Strongest negative lens in G2; this is the patent's Ln lens and lies object-side of Lp.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L26",
      label: "L26 focus Lp asphere",
      type: "Positive Meniscus (2x Asph)",
      nd: 1.85343,
      vd: 40.55,
      focalLengthMm: 20.36,
      glass: "L-LAH85V catalog equivalent (patent 853406; production supplier unspecified)",
      apd: false,
      role: "Strongest positive lens in G2 and the patent's Lp lens; both surfaces are aspheric and the rear surface is convex toward the image.",
    },
    {
      id: 13,
      name: "L31",
      label: "L31 rear positive",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      focalLengthMm: 25.19,
      glass: "TAFD37 class dense lanthanum flint (900/374 code)",
      apd: false,
      role: "Positive half of the near-afocal rear cemented corrector.",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L32",
      label: "L32 rear negative",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.26,
      focalLengthMm: -25.31,
      glass: "S-NBH52V (OHARA)",
      apd: false,
      role: "Negative half of the near-afocal rear cemented corrector; pairs with L31 for lateral color and field correction.",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L33",
      label: "L33 rear asphere",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.68863,
      vd: 31.19,
      focalLengthMm: -104.4,
      glass: "E-FD8 / SF8 class flint (689/312 code)",
      apd: false,
      role: "Rear negative double-aspheric meniscus; supplies most of G3's negative power and field-flattening action.",
    },
  ],

  surfaces: [
    { label: "1", R: -48.6592, d: 1.0, sd: 18.2, medium: 1 },
    { label: "2", R: 41.5771, d: 4.29, sd: 18.1 },
    { label: "3", R: 59.8074, d: 4.48, sd: 18.8, medium: 2 },
    { label: "4", R: -153.2429, d: 0.27, sd: 18.7 },
    { label: "5", R: -150.2108, d: 4.33, sd: 18.6, medium: 3 },
    { label: "6", R: -34.5615, d: 1.01, sd: 18.2, medium: 4 },
    { label: "7", R: 118.3516, d: 2.08, sd: 18.0 },
    { label: "8", R: 68.4344, d: 6.05, sd: 17.8, medium: 5 },
    { label: "9", R: -44.2924, d: 1.01, sd: 17.4, medium: 6 },
    { label: "10", R: -77.5628, d: 3.89, sd: 17.0 },
    { label: "STO", R: "flat" },
    { label: "12", R: 20.7479, d: 3.07, sd: 13.4, medium: 7 },
    { label: "13", R: 34.4785, d: 0.13, sd: 12.8 },
    { label: "14", R: 29.86, d: 0.8, sd: 11.6, medium: 8 },
    { label: "15", R: 11.912, d: 4.79, sd: 10.65, medium: 9 },
    { label: "16", R: 22.1252, d: 4.6, sd: 8.94 },
    { label: "17", R: -18.9247, d: 3.12, sd: 8.94, medium: 10 },
    { label: "18", R: -13.8596, d: 0.8, sd: 10.0, medium: 11 },
    { label: "19", R: -77.3222, d: 0.23, sd: 10.8 },
    {
      label: "20A",
      R: 116.2144,
      d: 5.39,
      sd: 11.0,
      medium: 12,
      asphere: {
        K: 0,
        A4: -3.6981763e-6,
        A6: -4.0513278e-8,
        A8: -3.6341727e-9,
        A10: 5.2747098e-11,
        A12: -1.934612e-13,
        A5: -2.1333775e-6,
        A7: 6.9611877e-8,
        A9: -6.6036497e-10,
        A11: 1.9268032e-12,
      },
    },
    {
      label: "21A",
      R: -19.9974,
      sd: 11.6,
      asphere: {
        K: 0,
        A4: 2.5810155e-5,
        A6: -2.3831105e-7,
        A8: -2.2444614e-9,
        A10: 4.626102e-11,
        A12: -1.7496157e-13,
        A5: -2.3012241e-6,
        A7: 8.5819314e-8,
        A9: -7.8049185e-10,
        A11: 2.2243703e-12,
      },
    },
    { label: "22", R: 94.5562, d: 5.12, sd: 11.6, medium: 13 },
    { label: "23", R: -29.0764, d: 1.01, sd: 11.2, medium: 14 },
    { label: "24", R: 41.7117, d: 3.13, sd: 11.0 },
    {
      label: "25A",
      R: -55.6907,
      d: 1.6,
      sd: 10.7,
      medium: 15,
      asphere: {
        K: 0,
        A4: -5.1121685e-5,
        A6: 3.0076039e-6,
        A8: -7.1088611e-9,
        A10: -5.9778978e-11,
        A12: 2.0239815e-13,
        A5: -1.7390876e-6,
        A7: -3.3080366e-7,
        A9: 2.5409968e-9,
        A11: -5.5852603e-12,
      },
    },
    {
      label: "26A",
      R: -250.0002,
      d: 9.4071,
      sd: 10.9,
      asphere: {
        K: 0,
        A4: -1.2432057e-4,
        A6: -5.5201108e-6,
        A8: 2.163724e-8,
        A10: 7.9300994e-11,
        A12: -3.8055727e-13,
        A5: 4.1913962e-5,
        A7: 2.6959548e-7,
        A9: -3.4446746e-9,
        A11: 8.1281733e-12,
      },
    }, // patent d26 to the PP plate
  ],

  focus: {
    closeFocusM: 0.3,
    step: 0.002,
    description:
      "Inner focus: the complete second lens group G2 translates 5.2416 mm toward the object from infinity to the patent close-focus state; G1, the stop, and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { STO: { label: "DD[11]", values: [[7.01, 1.7684]] }, "21A": { label: "DD[21]", values: [[1.71, 6.9516]] } },

  aperture: { nominalFNumber: 1.44, fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9, bladeRoundedness: 1 },

  /* ── Optical member PP (patent surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.201,
      source: "US 2022/0276464 A1, Example 3 Table 9 surfaces 27–28",
    },
  ],

  groups: [
    { text: "G1 fixed positive", fromSurface: "1", toSurface: "10" },
    { text: "G2 moving focus group", fromSurface: "12", toSurface: "21A" },
    { text: "G3 fixed negative rear", fromSurface: "22", toSurface: "26A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
  ],

  layout: { scFill: 0.62, yScFill: 0.72 },

  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
