import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON EF 600mm f/4 L IS USM
 * US 6,115,188 A, Numerical Example 22, PDF pages 78-79 / columns 32-33;
 * Figure 85, PDF page 56 / sheet 54, corresponding aberrations Figures 89A-89D.
 * Source gives 15 powered elements plus front protection HG and rear optical filter FL.
 * Restore source HG and draw physical FL: 17 media / 13 groups, including 15 powered elements.
 * Only inactive FC remains omitted; integral source HG is not treated as an optional accessory.
 * Production correlation is inferred; source does not name the marketed lens.
 *
 * DATED REUSE: retain active-15 coverage from 2026-08-20/21, source/image-plane review
 * from 2026-09-25 and FL addition from 2026-10-04. The 2026-10-30 scoped reopening checks
 * current HG/FL configuration, missing S12 air shoulder, source-reference qualifications
 * and current all-focus runtime. Old 600 dpi images were upsampled from native 300 ppi.
 *
 * SHAPE: restore R1/R2 HG: flat 6.00 mm, N 1.516330/nu 64.1, followed by 1.50 mm air.
 * All powered R/d, old caps, stops and numeric focus/control values remain unchanged.
 * S12 retains clear sd 45.0 and adds native-resolved rimExtensionSd 47.5, anchored to its
 * own front S11 cap. No opaque cemented-interface land or inferred cut. The retained
 * gapSagFrac 0.96 applies to the narrow R6-R7 source air gap; no tolerance is changed.
 * FL keeps physical t 2.00, N 1.516330, nu 64.4, D29=12.00 and D31+D32=103.78 mm.
 * It has no published aperture; existing sd 17.5 is a qualified beam estimate, supported
 * by a new maximum sampled transmitted height 16.194553 mm including diagram field.
 * The taller undimensioned FL blank does not establish a larger optical clear aperture.
 *
 * GLASS: column 32 defines Ni/nu_i without a wavelength. Keep all 17 numeric pairs and
 * the current d-line convention explicitly approximate through indexReferenceNote;
 * all 17 media are Unmatched; all 16 former catalog curves remain disabled. Prior
 * coordinate classes and production fluorite/UD associations remain conditional;
 * no source C/F/g, partial dispersion or APD value is supplied. No historical supplier,
 * melt, chemistry, cement or manufacturing identity is established.
 *
 * FOCUS: source L2 moves imageward but gives no finite table. Retain reconstructed
 * +18.829163964 mm travel to the correlated 5.5 m endpoint; linear intermediate motion
 * is illustrative and not continuously focus preserving. Transverse IS has no numeric
 * source decenter schedule and remains centered. Existing near-focus clipping remains.
 *
 * SOURCE LIMIT: printed physical distance R29-to-IP=117.78 mm versus modeled paraxial
 * BF 117.286743 mm leaves -0.493257 mm defocus. Preserve all printed R/d/N/nu; cause is
 * not isolated. Formalized as unresolved source.errata without numeric correction.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-600mm-f4l-is-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 22; production-correlated",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 13 GROUPS (15 POWERED PLUS HG AND FL)",
      "Patent f = 585.20 mm; computed EFL ≈ 585.328 mm",
      "Design F/4.12; marketed f/4",
      "2ω = 4.2°",
      "PRODUCTION-CORRELATED: 1 FLUORITE + 2 UD ELEMENTS",
      "Inner focus + transverse IS",
    ],
    elementCount: 17,
    groupCount: 13,
    acceptsTeleconverters: true, // Canon lists this host with Extender EF2x I/II/III.
    focalLengthMm: { marketing: 600, design: 585.2 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    example: { label: "Numerical Example 22", id: "22" },
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 22 printed R29-to-image physical distance is 12.00+2.00+64.77+39.01=117.78 mm, while literal R/d/N/nu arrays give paraxial physical BFL 117.286743145 mm (retained defocus -0.493256855 mm). No single source-backed misprint is isolated; preserve every printed value. Original source/image-plane audit date 2026-09-25; structured qualification added 2026-10-30.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Front source plate HG",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      glass: "Unmatched (source reference unspecified; historical HG medium unresolved)",
      role: "Integral front HG of source Numerical Example 22, R1/R2: physical 6.00 mm plate followed by 1.50 mm air. Clause c-7 gives protection/thermal-focus functions but no optional accessory status. Clear cap 77 mm is a native-figure relative estimate anchored to the retained first powered blank; no source aperture column exists.",
      diagramLabel: "HG",
    },
    {
      id: 2,
      name: "L1a-1",
      label: "L1a front positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 365.989798,
      glass:
        "Unmatched (source reference unspecified; prior 497815/497816 low-dispersion crown comparison is conditional only)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; no source partial dispersion or index-reference wavelength is published. Historical medium remains unresolved.",
      role: "Single positive front subunit L1a; front collector and low-dispersion correction.",
      diagramLabel: "L1a-1",
    },
    {
      id: 3,
      name: "L1b-1",
      label: "L1b positive",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 324.493634,
      glass:
        "Unmatched (source reference unspecified; prior 497815/497816 low-dispersion crown comparison is conditional only)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; no source partial dispersion or index-reference wavelength is published. Historical medium remains unresolved.",
      role: "Positive member of the net-negative middle subunit L1b.",
      diagramLabel: "L1b-1",
    },
    {
      id: 4,
      name: "L1b-2",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -230.532155,
      glass:
        "Unmatched (source reference unspecified; prior 835427 high-index lanthanum comparison is conditional only)",
      role: "Negative member that makes L1b net negative and balances the front positive power.",
      diagramLabel: "L1b-2",
    },
    {
      id: 5,
      name: "L1c-1",
      label: "L1c positive (fluorite correlation)",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 270.260667,
      glass: "Unmatched (source reference unspecified; prior Fluorite comparison is conditional only)",
      apd: "inferred",
      apdNote:
        "Production-correlated fluorite position; no source partial dispersion or index-reference wavelength is published. Historical medium remains unresolved.",
      role: "Positive member of rear subunit L1c; its production-fluorite association is conditional and does not identify the source medium.",
      diagramLabel: "L1c-1",
    },
    {
      id: 6,
      name: "L1c-2",
      label: "L1c negative meniscus",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -623.617174,
      glass: "Unmatched (source reference unspecified; prior 516641 crown comparison is conditional only)",
      role: "Negative meniscus completing the net-positive L1c subunit.",
      diagramLabel: "L1c-2",
    },
    {
      id: 7,
      name: "L2-1",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 215.019726,
      glass: "Unmatched (source reference unspecified; prior 805254 dense-flint comparison is conditional only)",
      role: "Positive front member of the cemented L2 inner-focus doublet.",
      diagramLabel: "L2-1",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L2-2",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -102.598687,
      glass:
        "Unmatched (source reference unspecified; prior 835427 high-index lanthanum comparison is conditional only)",
      role: "Negative rear member; the cemented L2 unit is net negative and translates for focus.",
      diagramLabel: "L2-2",
      cemented: "L2",
    },
    {
      id: 9,
      name: "L3a-1",
      label: "L3a negative",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -151.002645,
      glass: "Unmatched (source reference unspecified; prior 847238/847239 dense-flint comparison is conditional only)",
      role: "Negative front member of the cemented, net-positive L3a subunit.",
      diagramLabel: "L3a-1",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3a-2",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 91.77353,
      glass:
        "Unmatched (source reference unspecified; prior 603606/603607 SK14/BSM14 crown comparison is conditional only)",
      role: "Positive rear member that makes L3a net positive ahead of the IS subunit.",
      diagramLabel: "L3a-2",
      cemented: "L3a",
    },
    {
      id: 11,
      name: "L3b-1",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 93.422746,
      glass: "Unmatched (source reference unspecified; prior 847238/847239 dense-flint comparison is conditional only)",
      role: "Positive front member of the cemented pair inside the transverse IS subunit L3b.",
      diagramLabel: "L3b-1",
      cemented: "L3b-D1",
    },
    {
      id: 12,
      name: "L3b-2",
      label: "L3b cemented negative",
      type: "Biconcave Negative",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -68.565838,
      glass:
        "Unmatched (source reference unspecified; prior 603606/603607 SK14/BSM14 crown comparison is conditional only)",
      role: "Negative rear member of the L3b cemented pair.",
      diagramLabel: "L3b-2",
      cemented: "L3b-D1",
    },
    {
      id: 13,
      name: "L3b-3",
      label: "L3b negative singlet",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -76.551196,
      glass: "Unmatched (source reference unspecified; prior 804466 lanthanum comparison is conditional only)",
      role: "Negative singlet completing the strongly net-negative transverse IS subunit L3b.",
      diagramLabel: "L3b-3",
    },
    {
      id: 14,
      name: "L3c-1",
      label: "L3c positive singlet",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 148.247444,
      glass: "Unmatched (source reference unspecified; prior 720437 lanthanum-flint comparison is conditional only)",
      role: "Positive singlet at the front of the net-positive L3c subunit.",
      diagramLabel: "L3c-1",
    },
    {
      id: 15,
      name: "L3c-2",
      label: "L3c cemented positive",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 35,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: 75.722402,
      glass: "Unmatched (source reference unspecified; prior 750350 lanthanum-flint comparison is conditional only)",
      role: "Positive front member of the rear L3c cemented doublet.",
      diagramLabel: "L3c-2",
      cemented: "L3c-D1",
    },
    {
      id: 16,
      name: "L3c-3",
      label: "L3c cemented negative",
      type: "Biconcave Negative",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      focalLengthMm: -121.262876,
      glass: "Unmatched (source reference unspecified; prior 847238/847239 dense-flint comparison is conditional only)",
      role: "Negative rear member; the complete L3c subunit remains strongly net positive.",
      diagramLabel: "L3c-3",
      cemented: "L3c-D1",
    },
    {
      id: 17,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.4,
      indexReference: "d",
      indexReferenceNote:
        "Source column 32 defines Ni and Abbe nu_i without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled and historical media remain unresolved.",
      glass: "Unmatched (source reference unspecified; prior S-BSL7 comparison is conditional only)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 22, R30–R31), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Included with source HG in the 17-element/13-group correlated count.",
    },
  ],

  /* ── Surface prescription: source R1–R31, R16 relabeled STO; inactive FC R32 omitted ── */
  surfaces: [
    // Integral source HG, Numerical Example 22 R1/R2: no optional/removable status is supplied.
    // Native blank matches the first powered outer height; clear 77 mm remains an inferred cap.
    { label: "1", R: "flat", d: 6.0, sd: 77.0, medium: 1 },
    { label: "2", R: "flat", d: 1.5, sd: 77.0 },
    { label: "3", R: 231.902, d: 17.1, sd: 77.0, medium: 2 },
    { label: "4", R: -822.901, d: 43.59, sd: 77.0 },
    { label: "5", R: 150.427, d: 13.97, sd: 63.8, medium: 3 },
    { label: "6", R: 2167.786, d: 2.59, sd: 57.2 },
    { label: "7", R: -949.347, d: 5.9, sd: 57.2, medium: 4 },
    { label: "8", R: 242.065, d: 40.72, sd: 60.5 },
    { label: "9", R: 114.154, d: 13.86, sd: 53.0, medium: 5 },
    { label: "10", R: 4153.906, d: 0.5, sd: 53.0 },
    { label: "11", R: 83.069, d: 5.0, sd: 47.5, medium: 6 },
    { label: "12", R: 64.68, sd: 45.0, rimExtensionSd: 47.5 },
    { label: "13", R: 543.282, d: 4.65, sd: 33.0, medium: 7 },
    { label: "14", R: -253.137, d: 3.3, sd: 33.0, medium: 8 },
    { label: "15", R: 130.218, sd: 33.0 },
    { label: "STO", R: "flat", d: 7.02 },
    { label: "17", R: 138.0, d: 2.0, sd: 20.0, medium: 9 },
    { label: "18", R: 65.924, d: 4.66, sd: 20.0, medium: 10 },
    { label: "19", R: -335.894, d: 12.07, sd: 20.0 },
    { label: "20", R: 102.528, d: 2.75, sd: 16.5, medium: 11 },
    { label: "21", R: -341.854, d: 1.65, sd: 16.5, medium: 12 },
    { label: "22", R: 47.129, d: 3.77, sd: 15.3 },
    { label: "23", R: -149.43, d: 1.6, sd: 15.3, medium: 13 },
    { label: "24", R: 105.15, d: 3.52, sd: 15.5 },
    { label: "25", R: 121.151, d: 2.8, sd: 15.5, medium: 14 },
    { label: "26", R: -888.536, d: 6.96, sd: 15.5 },
    { label: "27", R: 79.378, d: 4.27, sd: 15.5, medium: 15 },
    { label: "28", R: -194.536, d: 1.9, sd: 15.5, medium: 16 },
    { label: "29", R: 218.38, d: 12.0, sd: 15.5 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 22, R30–R31), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: D31 + D32 to the image, inactive FC plane R32 omitted
    { label: "30", R: "flat", d: 2.0, sd: 17.5, medium: 17 },
    { label: "31", R: "flat", d: 103.78, sd: 17.5 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 5.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the source specifies imageward motion of cemented L2 but gives no finite spacing table. The existing 5.5 m reconstruction moves it 18.829163964 mm with equal D12/D15 changes. Intermediate motion is illustrative; L3b transverse IS has no numeric source schedule or authored axial state.",
  },

  gaps: {
    "12": { label: "L2 front gap", values: [[45.86, 64.689163964]] },
    "15": { label: "L2 rear gap", values: [[98.91, 80.080836036]] },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1a (+)", fromSurface: "3", toSurface: "4" },
    { text: "L1b (−)", fromSurface: "5", toSurface: "8" },
    { text: "L1c (+)", fromSurface: "9", toSurface: "12" },
    { text: "L2 FOCUS (−)", fromSurface: "13", toSurface: "15" },
    { text: "L3a (+)", fromSurface: "17", toSurface: "19" },
    { text: "L3b IS (−)", fromSurface: "20", toSurface: "24" },
    { text: "L3c (+)", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b-D1", fromSurface: "20", toSurface: "22" },
    { text: "L3c-D1", fromSurface: "27", toSurface: "29" },
  ],

  layout: { yScFill: 0.42 },

  /* The source geometry has a near-contact R6→R7 air gap at the required f/4 aperture. */
  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
