import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — KONICA ZOOM-HEXANON AR 35-70mm f/4                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPS57-19708A / JP1982-019708, Example 1.                    ║
 * ║  The production correlation to the Konica Zoom-Hexanon AR 35-70mm f/4     ║
 * ║  is strong but remains a correlation, not a manufacturer statement that     ║
 * ║  Example 1 is the released prescription. Native patent scale is retained.   ║
 * ║                                                                              ║
 * ║  8 elements / 7 air-separated groups / all-spherical.                      ║
 * ║  Two moving zoom groups: negative front group and positive rear group.      ║
 * ║  Zoom variable gap: D7. Image-space gap D15 is also zoom-dependent.         ║
 * ║  No zoom-group reversal occurs across the three authored source states.     ║
 * ║                                                                              ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that normal    ║
 * ║  focusing extends the front group; Konica publishes 0.8 m minimum focus     ║
 * ║  measured from the film plane. Close-focus D7 values are code-solved for    ║
 * ║  that film-plane conjugate while the rear group and D15 remain fixed.       ║
 * ║                                                                              ║
 * ║  Aperture: Example 1 aberration plots explicitly use F3.5 as full open,     ║
 * ║  while the production lens is marketed as f/4. The modeled f-number is      ║
 * ║  therefore 3.5 (`nominalFno` / `apertureDesign`), with f/4 retained only as ║
 * ║  `apertureMarketing`. The patent locates the stop somewhere inside the      ║
 * ║  3.00 mm S9-S10 air interval but gives no coordinate; the interval is split ║
 * ║  1.50/1.50 mm as a disclosed neutral midpoint inference. The stop radius is ║
 * ║  derived from the design f-number at each zoom station, not from a          ║
 * ║  patent-published iris diameter. The wide-open iris radius traced from      ║
 * ║  f/3.5 is 8.468 / 9.831 / 11.786 mm at wide / middle / tele.                ║
 * ║                                                                              ║
 * ║  Semi-diameters are inferred. They were derived from the patent Y=21.6 mm   ║
 * ║  field, modeled f/3.5 marginal/chief rays, the Fig. 1 optical-section        ║
 * ║  proportions, and current geometry limits. Full-field vignetting is allowed ║
 * ║  to begin at air-separated element boundaries where needed; the current     ║
 * ║  default 0.60-field bundles remain contained and no cemented interface is   ║
 * ║  used as an unintended aperture.                                             ║
 * ║                                                                              ║
 * ║  The patent publishes only nd/νd coordinates. It does not publish nC, nF,   ║
 * ║  ng, dPgF, or a glass manufacturer; vendor-neutral six-digit coordinate      ║
 * ║  classes are retained and no spectral line data are invented.                ║
 * ║                                                                              ║
 * ║  No sensor cover glass, filter, inactive dummy/flare-cutter plane, folded    ║
 * ║  path, asphere, perspective-control, or independent aberration-control plane ║
 * ║  is present in the selected numerical example.                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-zoom-hexanon-ar-35-70mm-f4",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 35-70mm f/4",
  subtitle: "JPS57-19708A — Example 1; production correlation inferred",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "35-70mm MARKETING / 36.003-68.092mm PATENT",
      "f/4 MARKETING / f/3.5 PATENT MODEL",
      "ALL-SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: [35, 70], design: [35.99875525557899, 68.1428253490933] },
    fNumber: { marketing: 4, design: 3.5 },
  },

  source: {
    patentNumber: "JP 1982-019708 A",
    patentYear: 1982,
    authors: ["Tadashi Kojima", "Takashi Matsumaru"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      indexReference: "d",
      focalLengthMm: 181.82736710232376,
      glass: "658509 class (vendor unresolved)",
      apd: false,
      role: "Weak positive first element of the negative front zoom group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: 105.36160420759714,
      glass: "620363 class (vendor unresolved)",
      apd: false,
      role: "Positive member of the cemented second front-group component.",
      diagramLabel: "L2a",
      cemented: "D1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -23.348405173953847,
      glass: "806409 class (vendor unresolved)",
      apd: false,
      role: "Strong negative member of the cemented second front-group component.",
      diagramLabel: "L2b",
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 101.43335215945898,
      glass: "805254 class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus completing the net-negative front zoom group.",
      diagramLabel: "L3",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      indexReference: "d",
      focalLengthMm: 40.151675292576485,
      glass: "658509 class (vendor unresolved)",
      apd: false,
      role: "First positive element of the rear zoom group, immediately ahead of the stop region.",
      diagramLabel: "L4",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 50.22710056667035,
      glass: "603607 class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus following the aperture-stop interval in the rear group.",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -18.529557774189815,
      glass: "805254 class (vendor unresolved)",
      apd: false,
      role: "Strong negative singlet in the rear group.",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: 38.946097229707036,
      glass: "620363 class (vendor unresolved)",
      apd: false,
      role: "Final positive element of the rear group ahead of the image space.",
      diagramLabel: "L7",
    },
  ],

  /* ── Surface prescription ── */
  // Fig. 1(a/b) optical rims: L3 ≈ 14.5 mm, L7 ≈ 8.8 mm. Rounded L3 SDs preserve
  // the front/rear ratio; L7 stays at 10 mm to clear the default fan throughout zoom/focus.
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 470.801, d: 3.4, sd: 24.8, medium: 1 },
    { label: "2", R: -160.089, d: 0.1, sd: 23.5 },
    { label: "3", R: 268.303, d: 4.3, sd: 23.2, medium: 2 },
    { label: "4", R: -85.825, d: 1.5, sd: 21.0, medium: 3 },
    { label: "5", R: 24.296, d: 7.8, sd: 20.5 },
    { label: "6", R: 29.32, d: 2.7, sd: 15.0, medium: 4 },
    { label: "7", R: 43.862, sd: 14.8 },
    { label: "8", R: 32.854, d: 4.2, sd: 13.2, medium: 5 },
    // Patent D9 is 3.00 mm. The stop is only localized to this interval, so the gap is split at a neutral midpoint.
    { label: "9", R: -128.495, d: 1.5, sd: 12.5 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "10", R: 18.365, d: 5.3, sd: 11.6, medium: 6 },
    { label: "11", R: 41.578, d: 2.3, sd: 10.9 },
    { label: "12", R: -113.747, d: 1.5, sd: 10.6, medium: 7 },
    { label: "13", R: 17.273, d: 5.1, sd: 10.6 },
    { label: "14", R: 86.723, d: 3, sd: 10.0, medium: 8 },
    { label: "15", R: -33.024, sd: 10.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 36.003, label: "Wide" },
      { focalLengthMm: 50 },
      { focalLengthMm: 68.092, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.8,
    description:
      "CONSTRAINED_RECONSTRUCTION: Example 1 publishes only infinity zoom spacings. The patent states that normal focusing extends the front group, while Konica's production specification gives 0.8 m minimum focus measured from the film plane. D7 close-focus values are code-solved at each zoom state for that film-plane conjugate with the rear group and D15 held fixed. No additional internal movement is invented.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "7": {
      label: "D7 (ZOOM + FOCUS)",
      values: [
        [34.08, 39.57075346039778],
        [14.397, 19.807154896959325],
        [1, 6.394245779881329],
      ],
    },
    "15": {
      label: "BF (ZOOM)",
      values: [
        [40.729477566880206, 40.729477566880206],
        [49.412000034684766, 49.412000034684766],
        [60.59851564109962, 60.59851564109962],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "7" },
    { text: "REAR", fromSurface: "8", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
