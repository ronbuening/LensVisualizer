import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER APO-LANTHAR 28mm f/2 Aspherical VM        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2026-98935 A, Example 2 (Cosina Co., Ltd.).        ║
 * ║ 12 elements / 8 groups; four aspherical surfaces.                  ║
 * ║ Focus status: PUBLISHED. G1 and G2 move independently toward the   ║
 * ║ object; D11 (STO→S12) is 3.83→3.36 mm and D21 (S21→IMG) is        ║
 * ║ 18.21→20.28 mm. No close-focus reconstruction is introduced.       ║
 * ║                                                                    ║
 * ║ SOURCE DISCREPANCY: the printed close endpoint (D0 = 428.00 mm)    ║
 * ║ has first-order matrix B = +6.097174 mm rather than zero. The      ║
 * ║ published endpoint is retained without repair.                     ║
 * ║                                                                    ║
 * ║ SCALING: none. Radii, spacings, and asphere coefficients remain    ║
 * ║ at patent scale. The patent uses standard conic K.                 ║
 * ║                                                                    ║
 * ║ SEMI-DIAMETERS: inferred from the modeled F/2.06 stop, exact        ║
 * ║ meridional marginal/chief-ray envelopes through 37.02° half field, ║
 * ║ hand measurements of patent Fig. 3, and current geometry rules.     ║
 * ║ Relative element heights follow Fig. 3: L11/L12 are smaller than    ║
 * ║ L10, while L14/L15 step up behind L13 and L16 is only slightly      ║
 * ║ taller than the front L9 element.                                   ║
 * ║                                                                    ║
 * ║ STOP: the patent omits its diameter. STO sd = 7.9141613257 mm      ║
 * ║ enforces F/2.06 against the 29.1260062712 mm paraxial EFL computed ║
 * ║ from this prescription.                                            ║
 * ║                                                                    ║
 * ║ GLASS: names are catalog-equivalent matches or explicitly          ║
 * ║ disclosed proxies, not patent-stated vendors. Patent dPgF is       ║
 * ║ retained directly. L9 and L13r use exact catalog curves; L16 uses  ║
 * ║ a disclosed line-index proxy. APD flags follow the six positions   ║
 * ║ marked in Cosina's production section, mapped by topology.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-apo-lanthar-28mm-f2-aspherical-vm",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 28mm f/2 Aspherical VM",
  subtitle: "JP 2026-98935 A Example 2 — closest production correlation: VM 0.5 m focus state",
  specs: [
    "12 ELEMENTS / 8 GROUPS",
    "28mm f/2 (PRODUCTION)",
    "f = 28.84mm / F2.06 (PATENT)",
    "2ω = 74.04°",
    "4 ASPHERICAL SURFACES",
    "6 / 12 APD GLASS ELEMENTS",
    "DOUBLE-FLOATING FOCUS",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 29.126006271204375,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2026-98935 A",
  patentAuthors: ["Nozomu Mishima"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2026,
  elementCount: 12,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L9",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5168,
      vd: 64.2,
      fl: -42.90144,
      glass: "H-K9LGT (CDGM) equivalent — 517642",
      apd: false,
      apdNote:
        "Patent ΔPgF = +0.0031; this position is not one of the six APD elements marked in Cosina's production section.",
      dPgF: 0.0031,
      nC: 1.5143265355014959,
      nF: 1.522376656476826,
      ng: 1.5266903171582615,
      role: "Front negative meniscus; both surfaces are aspherical and establish the wide-angle entrance geometry.",
    },
    {
      id: 2,
      name: "L10f",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8515,
      vd: 40.78,
      fl: 52.423822,
      glass: "S-LAH89 (OHARA) equivalent — 852408",
      apd: false,
      apdNote:
        "Patent ΔPgF = -0.0054; this position is not one of the six APD elements marked in Cosina's production section.",
      dPgF: -0.0054,
      nC: 1.8453,
      nF: 1.86618,
      ng: 1.87807,
      role: "Positive half of the negative L10 cemented pair; high index bends the front bundle compactly.",
      cemented: "L10",
    },
    {
      id: 3,
      name: "L10r",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7888,
      vd: 28.43,
      fl: -36.365402,
      glass: "S-NBH58 (OHARA) equivalent — 789284",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = +0.0037.",
      dPgF: 0.0037,
      nC: 1.78076,
      nF: 1.8085,
      ng: 1.82518,
      role: "Negative half of L10; forms the net-negative G1b front corrector with L10f.",
      cemented: "L10",
    },
    {
      id: 4,
      name: "L11",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 33.291042,
      glass: "TAFD55 (HOYA) equivalent — 001291",
      apd: false,
      apdNote:
        "Patent ΔPgF = +0.0036; this position is not one of the six APD elements marked in Cosina's production section.",
      dPgF: 0.0036,
      nC: 1.9910461402030342,
      nF: 2.025403881691904,
      ng: 2.0460011117376657,
      role: "Strong positive G1c singlet that recovers power after the negative front subsections.",
    },
    {
      id: 5,
      name: "L12f",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 28.982846,
      glass: "TAFD37A (HOYA) equivalent — 900374",
      apd: false,
      apdNote:
        "Patent ΔPgF = -0.0044; this position is not one of the six APD elements marked in Cosina's production section.",
      dPgF: -0.0044,
      nC: 1.8933260531486942,
      nF: 1.9174194697943583,
      ng: 1.9313130902894817,
      role: "Positive half of the net-positive L12 cemented doublet immediately before the stop.",
      cemented: "L12",
    },
    {
      id: 6,
      name: "L12r",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      fl: -39.294469,
      glass: "NBFD25 (HOYA) equivalent — 855252",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = +0.0072.",
      dPgF: 0.0072,
      nC: 1.8447296685445198,
      nF: 1.878699672495783,
      ng: 1.8994309735035382,
      role: "Negative partner in L12; balances the strong positive front component and secondary spectrum.",
      cemented: "L12",
    },
    {
      id: 7,
      name: "L13f",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      fl: -12.673277,
      glass: "S-NBH8 (OHARA) equivalent — 720347",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = -0.0025.",
      dPgF: -0.0025,
      nC: 1.71437,
      nF: 1.73512,
      ng: 1.74723,
      role: "Strong negative front half of the net-negative L13 doublet behind the stop.",
      cemented: "L13",
    },
    {
      id: 8,
      name: "L13r",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62846,
      vd: 59.17,
      fl: 19.31697,
      glass: "J-PSKH8 (HIKARI) equivalent — 628592",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = +0.0139.",
      dPgF: 0.0139,
      nC: 1.625268,
      nF: 1.635889,
      ng: 1.641791,
      role: "Anomalous-dispersion positive partner in L13; combines with L13f into a weak net-negative unit.",
      cemented: "L13",
    },
    {
      id: 9,
      name: "L14",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.90525,
      vd: 35.04,
      fl: 20.62574,
      glass: "S-LAH93 (OHARA) equivalent — 905350",
      apd: false,
      apdNote:
        "Patent ΔPgF = -0.0005; this position is not one of the six APD elements marked in Cosina's production section.",
      dPgF: -0.0005,
      nC: 1.89768,
      nF: 1.92351,
      ng: 1.93862,
      role: "Strong positive G2b singlet and the principal positive-power component of the rear group.",
    },
    {
      id: 10,
      name: "L15f",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 33.532749,
      glass: "FCD705 (HOYA) equivalent — 550755",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = +0.0277.",
      dPgF: 0.0277,
      nC: 1.5481010815705685,
      nF: 1.5553904824529587,
      ng: 1.559326656732765,
      role: "Low-dispersion positive half of L15; supplies the rear unit's strongest positive anomalous dispersion.",
      cemented: "L15",
    },
    {
      id: 11,
      name: "L15r",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      fl: -23.541155,
      glass: "S-NBH8 (OHARA) equivalent — 720347",
      apd: "inferred",
      apdNote:
        "Cosina's production section marks this position as APD; the mapping is inferred from the matching Example 2 topology. Patent ΔPgF = -0.0025.",
      dPgF: -0.0025,
      nC: 1.71437,
      nF: 1.73512,
      ng: 1.74723,
      role: "Negative partner in L15; makes the cemented pair net negative and controls rear-group color power.",
      cemented: "L15",
    },
    {
      id: 12,
      name: "L16",
      label: "Element 12",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: -129.492431,
      glass: "Unmatched (806407 class; HIKARI Q-LASF03S line-index proxy; no joint nd/νd/ΔPgF match)",
      apd: false,
      apdNote:
        "Patent ΔPgF = -0.0056; this position is not one of Cosina's six marked APD elements. nC/nF/ng use the disclosed Q-LASF03S proxy; no public candidate matches nd, νd, and ΔPgF jointly.",
      dPgF: -0.0056,
      nC: 1.800166,
      nF: 1.819952,
      ng: 1.83121,
      role: "Weak negative double-sided asphere near the image plane; final field and higher-order correction element.",
    },
  ],

  surfaces: [
    { label: "1A", R: 120.686, d: 1.2, nd: 1.5168, elemId: 1, sd: 11.5 },
    { label: "2A", R: 18.667, d: 5.17, nd: 1.0, elemId: 0, sd: 9.66 },
    { label: "3", R: -26.163, d: 3.1, nd: 1.8515, elemId: 2, sd: 9.5 },
    { label: "4", R: -17.394, d: 1.0, nd: 1.7888, elemId: 3, sd: 9.5 },
    { label: "5", R: -45.31, d: 0.3, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "6", R: 35.585, d: 3.33, nd: 2.001, elemId: 4, sd: 8.5 },
    { label: "7", R: -500.0, d: 0.31, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "8", R: 51.264, d: 3.86, nd: 1.90043, elemId: 5, sd: 8.6 },
    { label: "9", R: -51.262, d: 1.0, nd: 1.85451, elemId: 6, sd: 8.6 },
    { label: "10", R: 98.206, d: 3.84, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "STO", R: 1e15, d: 3.83, nd: 1.0, elemId: 0, sd: 7.914161325746969 },
    { label: "12", R: -19.549, d: 1.0, nd: 1.72047, elemId: 7, sd: 9.0 },
    { label: "13", R: 17.5, d: 5.84, nd: 1.62846, elemId: 8, sd: 9.0 },
    { label: "14", R: -34.531, d: 0.3, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "15", R: 36.135, d: 4.92, nd: 1.90525, elemId: 9, sd: 10.4 },
    { label: "16", R: -36.135, d: 0.15, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "17", R: 580.103, d: 5.15, nd: 1.55032, elemId: 10, sd: 10.6 },
    { label: "18", R: -19.0, d: 1.0, nd: 1.72047, elemId: 11, sd: 10.6 },
    { label: "19", R: 161.504, d: 5.64, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "20A", R: -116.659, d: 2.1, nd: 1.8061, elemId: 12, sd: 12 },
    { label: "21A", R: 1000.0, d: 18.21, nd: 1.0, elemId: 0, sd: 12 },
  ],

  asph: {
    "1A": {
      K: 0.0,
      A4: 1.563e-5,
      A6: -2.0081e-7,
      A8: 1.7924e-9,
      A10: -8.9064e-12,
      A12: 1.845e-14,
      A14: 0.0,
    },
    "2A": {
      K: 1.111,
      A4: -2.4287e-6,
      A6: -3.687e-7,
      A8: 2.3518e-9,
      A10: -1.5366e-11,
      A12: 0.0,
      A14: 0.0,
    },
    "20A": {
      K: 52.843,
      A4: -3.286e-5,
      A6: 0.0,
      A8: 0.0,
      A10: 0.0,
      A12: 0.0,
      A14: 0.0,
    },
    "21A": {
      K: 0.0,
      A4: 4.4019e-6,
      A6: 4.5548e-8,
      A8: -6.0419e-11,
      A10: 1.081e-12,
      A12: -4.5187e-15,
      A14: 0.0,
    },
  },

  var: {
    STO: [3.83, 3.36],
    "21A": [18.21, 20.28],
  },
  varLabels: [
    ["STO", "D11"],
    ["21A", "BF"],
  ],

  groups: [
    { text: "G1a", fromSurface: "1A", toSurface: "2A" },
    { text: "G1b", fromSurface: "3", toSurface: "5" },
    { text: "G1c", fromSurface: "6", toSurface: "10" },
    { text: "G2a", fromSurface: "12", toSurface: "14" },
    { text: "G2b", fromSurface: "15", toSurface: "16" },
    { text: "G2c", fromSurface: "17", toSurface: "21A" },
  ],
  doublets: [
    { text: "L10", fromSurface: "3", toSurface: "5" },
    { text: "L12", fromSurface: "8", toSurface: "10" },
    { text: "L13", fromSurface: "12", toSurface: "14" },
    { text: "L15", fromSurface: "17", toSurface: "19" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "PUBLISHED double-floating endpoints: G1 and G2 move independently toward the object; " +
    "D11 3.83→3.36 mm and BF 18.21→20.28 mm. The printed endpoint is preserved although " +
    "its first-order object-to-image matrix has B = +6.097 mm.",

  nominalFno: 2.06,
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 12,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
