/**
 * Canon FL mount SVG specification.
 *
 * FL (1964) is the FD predecessor in Canon's R/FL/FD breech-lock family: the body carries a fixed
 * flange with three outward bayonet lugs, and a rotating ring on the lens hooks its three inward claws
 * behind them. The lens barrel itself does not turn; a guide pin on the lens drops into a notch in the
 * top body lug. FL has one coupling, the automatic diaphragm lever, and none of the FD signal levers.
 *
 * Evidence, in short: register, bore and lug count are Canon's own figures; the tightening direction and
 * the red-dot / guide-pin alignment come from the Canon FT QL manual; lug and claw angles and radii
 * are scaled from an undimensioned Canon patent drawing (US3906534A FIG. 2, an FD-era lens on the same
 * body flange) and are therefore photo-scaled, not patent-stated; the diaphragm lever is scaled from one
 * photograph of an FL lens. The lens body does not turn on this mount, so the lens is drawn as it is on the camera; only the breech ring
 * turns, and its claws are drawn with the ring open (ring index at top), which is the state the sources show.
 */

import type { MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const PROFILE = "canon-fl/base";

/** Stand-in values that no cited source carries; listed in openQuestions. */
const W = ["fl-1"];
/** Canon Camera Museum, Canon FX: 42 mm flange back, 48 mm inner diameter, three outer lugs. */
const O = ["fl-o1"];
/** Canon FT QL instructions, p. 30: red dots, guide pin, tightening direction. */
const M = ["fl-m1"];
/** US3906534A FIG. 2 scaled against the 48 mm bore (undimensioned drawing). */
const F = ["fl-p1f"];
/** Photograph of a Canon FL 28 mm lens rear, scaled against the 48 mm rear shell. */
const PH = ["fl-ph1"];
const F_PH = ["fl-p1f", "fl-ph1"];
const ALL_REFS = ["fl-1", "fl-o1", "fl-o2", "fl-m1", "fl-p1", "fl-p1f", "fl-ph1"];

/* Radii in mm, scaled from US3906534A FIG. 2 with the washer bore C2 taken as 24 mm (48 mm official). */
const BORE_R = 24;
const FLANGE_ROOT_R = 26;
const LUG_OUTER_R = 27;
const CLAW_TIP_R = 26.5;
const RING_RELIEF_R = 27.7;
const SHELL_R = 23.6;
const RING_OUTER_R = 32.5;

const LUG_NOTE =
  "outward lug on the fixed body flange; angles and radii scaled from US3906534A FIG. 2 (lens-rear view, mirrored to the camera-front frame), about ±2 degrees";
const CLAW_NOTE =
  "inward claw of the rotating breech ring, drawn with the ring open, as on a detached lens and as the source figure shows it: each claw then sits in the gap between two body lugs, and tightening turns it clockwise behind the next lug by an amount no source states; scaled from US3906534A FIG. 2 (lens-rear view, mirrored), and the same three-relief pattern shows on the FL 28 mm ring photograph within about ±7 degrees";

function bodyLug(n: number, centerDeg: number, startDeg: number, endDeg: number, locksClaw: number) {
  return {
    featureId: `body-lug-${n}`,
    featureType: "bayonet_lug",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", F),
    startAngleDeg: v(startDeg, "photo_scaled", F),
    endAngleDeg: v(endDeg, "photo_scaled", F),
    innerRadiusMm: v(FLANGE_ROOT_R, "photo_scaled", F),
    outerRadiusMm: v(LUG_OUTER_R, "photo_scaled", F),
    depthMm: unknownV(F),
    matesWith: `lens-claw-${locksClaw}`,
    shapeNotes: `${LUG_NOTE}; lens-claw-${locksClaw} hooks behind it when the ring is turned clockwise`,
  } satisfies MountSpecInput["cameraSideFeatures"][number];
}

function lensClaw(n: number, centerDeg: number, startDeg: number, endDeg: number, hooksLug: number) {
  return {
    featureId: `lens-claw-${n}`,
    featureType: "breech_ring_claw",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", F_PH),
    startAngleDeg: v(startDeg, "photo_scaled", F_PH),
    endAngleDeg: v(endDeg, "photo_scaled", F_PH),
    innerRadiusMm: v(CLAW_TIP_R, "photo_scaled", F),
    outerRadiusMm: v(RING_RELIEF_R, "photo_scaled", F),
    thicknessMm: unknownV(F),
    matesWith: `body-lug-${hooksLug}`,
    shapeNotes: CLAW_NOTE,
  } satisfies MountSpecInput["lensSideFeatures"][number];
}

const CANON_FL_MOUNT = {
  mountId: "canon-fl",
  displayLabel: "Canon FL",
  projectNote: "Canon FL manual-focus SLR breech-lock mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "breech_lock",
  lockType: "breech_collar",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "index_mark", "breech_collar", "positioning_pin"],
      variantRequired: ["aperture_stop_down_lever"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["breech_ramp_undercut", "lever_travel"],
    },
    profileModel: {
      baseProfileId: PROFILE,
      selectedMvpProfileId: PROFILE,
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: PROFILE,
          profileType: "base",
          appliesTo: "Canon FL breech-lock lenses and bodies (FX, FP, Pellix, FT QL, TL), 1964–1971",
          adds: [
            "fixed body flange with three outward bayonet lugs",
            "lens-side rotating breech ring with three inward claws",
            "lens guide pin and body notch at 12 o'clock",
            "automatic diaphragm lever",
          ],
          removes: ["FD aperture-signal lever and full-aperture signal pin", "electrical contacts"],
          changes: ["predecessor to FD on the same 42 mm / 48 mm three-lug body flange"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ALL_REFS,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(42, "official", O),
    nominalThroatDiameterMm: v(48, "official", O),
    effectiveClearApertureMm: v(48, "secondary", W),
    cameraMountOuterDiameterMm: v(2 * LUG_OUTER_R, "photo_scaled", F),
    lensMountOuterDiameterMm: v(2 * RING_OUTER_R, "photo_scaled", PH),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", M),
    lockAngleDeg: unknownV(M),
    lockRotationDeg: unknownV(M),
    lockRotationDirection: dirV("clockwise", "official", M),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "official", O),
      startAngleDeg: v(0, "official", O),
      endAngleDeg: v(360, "official", O),
      innerRadiusMm: v(0, "official", O),
      outerRadiusMm: v(BORE_R, "official", O),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "48 mm bore of the body flange; the lens rear shell seats inside it",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", F),
      startAngleDeg: v(0, "photo_scaled", F),
      endAngleDeg: v(360, "photo_scaled", F),
      innerRadiusMm: v(BORE_R, "official", O),
      outerRadiusMm: v(FLANGE_ROOT_R, "photo_scaled", F),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "fixed body flange between the bore and the lug root; root radius scaled from US3906534A FIG. 2 (washer C)",
    },
    bodyLug(1, 359, 325, 33, 3),
    bodyLug(2, 122.5, 100.5, 144.5, 1),
    bodyLug(3, 237.5, 215.5, 259.5, 2),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", M),
      startAngleDeg: unknownV(M),
      endAngleDeg: unknownV(M),
      innerRadiusMm: unknownV(M),
      outerRadiusMm: unknownV(M),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot on the body front above the flange at 12 o'clock (Canon FT QL manual, p. 30 photograph); its radius is not sourced",
    },
    {
      featureId: "body-positioning-notch",
      featureType: "positioning_notch",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", F),
      startAngleDeg: v(357.5, "photo_scaled", F),
      endAngleDeg: v(2.5, "photo_scaled", F),
      innerRadiusMm: v(24.4, "photo_scaled", F),
      outerRadiusMm: v(LUG_OUTER_R, "photo_scaled", F),
      depthMm: unknownV(F),
      matesWith: "lens-positioning-pin",
      shapeNotes:
        "radial notch in the top lug that takes the lens guide pin (recess C3 in US3906534A; visible at 12 o'clock in the FT QL manual photograph); width and depth scaled from FIG. 2",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", F),
      startAngleDeg: v(0, "photo_scaled", F),
      endAngleDeg: v(360, "photo_scaled", F),
      innerRadiusMm: v(0, "photo_scaled", F),
      outerRadiusMm: v(SHELL_R, "photo_scaled", F),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "outline of the fixed rear shell that seats in the 48 mm body bore (shell 3 in US3906534A FIG. 2); the rear glass opening differs by lens and is not drawn",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", F_PH),
      startAngleDeg: v(0, "photo_scaled", F_PH),
      endAngleDeg: v(360, "photo_scaled", F_PH),
      innerRadiusMm: v(RING_RELIEF_R, "photo_scaled", F),
      outerRadiusMm: v(RING_OUTER_R, "photo_scaled", PH),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rotating breech ring; inner radius is the relieved part of its rear flange (US3906534A FIG. 2), outer radius is scaled from the FL 28 mm photograph (65 mm; the patent drawing scales to 65.6 mm)",
    },
    lensClaw(1, 67, 39.5, 95.5, 2),
    lensClaw(2, 180, 149, 212, 3),
    lensClaw(3, 292, 263.5, 320.5, 1),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", M),
      startAngleDeg: unknownV(M),
      endAngleDeg: unknownV(M),
      innerRadiusMm: unknownV(M),
      outerRadiusMm: v(RING_OUTER_R, "photo_scaled", PH),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the breech ring; the ring is at its insertion position when the dot is over the guide pin (Canon FT QL manual, p. 30), and the dot sits at the middle of the wide relief on the FL 28 mm photograph",
    },
    {
      featureId: "lens-positioning-pin",
      featureType: "alignment_pin",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", F_PH),
      startAngleDeg: unknownV(F),
      endAngleDeg: unknownV(F),
      innerRadiusMm: unknownV(F),
      outerRadiusMm: v(25.7, "photo_scaled", F_PH),
      thicknessMm: unknownV(F),
      matesWith: "body-positioning-notch",
      shapeNotes:
        "guide pin on the fixed mounting face of the lens (pin 4 in US3906534A); radius scaled from FIG. 2 (25.7 mm) and from the FL 28 mm photograph (about 25.9 mm)",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "official", O),
      thicknessMm: v(0, "official", O),
      diameterMm: v(2 * LUG_OUTER_R, "photo_scaled", F),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-42, "official", O),
      thicknessMm: v(0, "official", O),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "automatic-diaphragm-lever",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(167, "photo_scaled", PH),
      radiusMm: v(20, "photo_scaled", PH),
      sizeOrTravel: "lever standing out of an arc slot in the rear shell; travel not sourced",
      function: "automatic diaphragm stop-down: the body lever moves the lens lever at exposure",
      compatibilityNotes:
        "position of the lens lever at rest, scaled from one oblique photograph of an FL 28 mm lens (about ±6 degrees, ±1.5 mm); the body lever is drawn at the same place because it must meet it. FL bodies meter stopped down; there are no FD signal levers",
    },
    {
      featureId: "breech-lock-collar",
      side: "lens",
      profileId: PROFILE,
      centerAngleDeg: v(0, "photo_scaled", W),
      radiusMm: v(28, "photo_scaled", W),
      sizeOrTravel: "rotating collar",
      function: "clamps the lens to the body without rotating the lens barrel",
      compatibilityNotes: "shared Canon R/FL/FD breech-lock lineage; marker position is schematic",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: unknownV(W),
      pcdMm: unknownV(W),
      diameterMm: unknownV(W),
      centerAnglesDeg: degListV("unknown", "unknown", W),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "fl-1",
      sourceType: "secondary",
      citation: "“Canon FL lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_FL_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513020307/https://en.wikipedia.org/wiki/Canon_FL_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "Canon FL mount identity and 42 mm Canon FL/FD-family register",
      confidence: "medium",
    },
    {
      ref: "fl-o1",
      sourceType: "official",
      citation:
        "Canon Inc., “Canon FX,” Canon Camera Museum, Film Cameras (marketed April 1964), Lens Mount specification. Accessed 2026-11-21. Second copy: Canon's Japanese-language page for the same camera.",
      liveUrl: "https://global.canon/en/c-museum/product/film49.html",
      archiveUrl: "https://global.canon/ja/c-museum/product/film49.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: FL mount is a bayonet mount with 48 mm inner diameter and three outer lugs, 42 mm flange back, automatic aperture lever on the body and on the lens",
      confidence: "high",
    },
    {
      ref: "fl-o2",
      sourceType: "official",
      citation:
        "Canon Inc., “Canon F-1,” Canon Camera Museum, Film Cameras (marketed March 1971), Lens Mount specification. Accessed 2026-11-21. Second copy: Canon's Japanese-language page for the same camera.",
      liveUrl: "https://global.canon/en/c-museum/product/film78.html",
      archiveUrl: "https://global.canon/ja/c-museum/product/film78.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: the FD mount is the same three-lug spigot mount with 48 mm inner diameter and 42 mm flange back, introduced without changing the mount's basic specifications; used here only to justify reading the common body flange from an FD-era patent drawing",
      confidence: "high",
    },
    {
      ref: "fl-m1",
      sourceType: "official",
      citation:
        "Canon Camera Co., Canon FT QL Instructions, “Uses of Lenses: Changing Lenses,” p. 30 (PDF p. 32 of the cameramanuals.org scan). Accessed 2026-11-21. Second copy: ManualsLib, page 30 of 44.",
      liveUrl: "https://www.cameramanuals.org/canon_pdf/canon_ft_ql.pdf",
      archiveUrl: "https://www.manualslib.com/manual/3384540/Canon-Ft-Ql.html?page=30",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: match the red dot of the lens to the red dot on the camera mount, turn the bayonet ring to the right to fasten and to the left to remove, align the red dot and guide pin of the lens before mounting. The page's photographs are taken from the camera front and show the body red dot and the guide-pin notch at 12 o'clock; the removal arrow runs leftward over the top, so fastening is clockwise seen from the camera front. Photographs used for arrangement only, not scaled",
      confidence: "high",
    },
    {
      ref: "fl-p1",
      sourceType: "patent",
      citation:
        "T. Shirasaki (Canon K.K.), US3906534A, “Device for mounting and dismounting an interchangeable lens,” filed 1973-08-29 (Japanese priority 1972), granted 1975-09-16. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US3906534A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/8c/87/1b/6bcdb04f3d405e/US3906534.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text only, arrangement only: body mounting washer C with bayonet prongs C4 on its outer periphery, lens mounting surface 2 seated on the washer front face C1, shell 3 inside bore C2, positioning pin 4 on the lens in washer recess C3, connecting ring 5 threaded on the barrel with flange 7 and relieved portions, ring turned counterclockwise as seen in the lens-rear FIG. 2 to bring its claws to the rear of the prongs. The patent states no dimensions or angles, and it is an FD-era patent (ring detent 9/10/12 is not an FL part)",
      confidence: "medium",
    },
    {
      ref: "fl-p1f",
      sourceType: "patent_figure",
      citation:
        "US3906534A, FIG. 2 (drawing sheet 2 of 2): rear end view of the lens with the body mounting washer in section. Undimensioned drawing, scaled for this spec. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US3906534A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/4b/ee/ec/ef91431b848a50/US3906534-drawings-page-3.png",
      archiveDate: "2026-11-21",
      appliesTo:
        "lens-rear view; every angle converted to the camera-front frame by theta_front = (360 - theta_rear) mod 360. Scaled with the washer bore C2 taken as 48 mm: lug and claw edges, flange root, lug outer radius, claw tip and relief radii, rear shell, guide pin and notch. No scale or dimension is stated on the drawing, so these values are photo-scaled, about ±2 degrees and ±0.3 mm. The drawn lens is FD-era; the body flange is the part common with FL",
      confidence: "low",
    },
    {
      ref: "fl-ph1",
      sourceType: "secondary",
      citation:
        "H. W. Robeck, “Rear of Canon FL 28mm Lens and Super-Canomatic Lens R 50mm,” photograph, Wikimedia Commons, 2020-02-09, CC BY-SA 4.0. Accessed 2026-11-21. Second copy: the original file on upload.wikimedia.org.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Rear_of_Canon_FL_28mm_Lens_and_Super-Canomatic_Lens_R_50mm.jpg",
      archiveUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Rear_of_Canon_FL_28mm_Lens_and_Super-Canomatic_Lens_R_50mm.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "lens-rear view of an FL 28 mm lens (left lens in the frame), taken about 23 degrees off axis with the lens turned about 21 degrees clockwise; angles measured clockwise from the guide pin and converted by theta_front = (360 - theta_rear) mod 360. Scaled with the black rear shell taken as 48 mm: automatic diaphragm lever position, breech ring outer diameter, guide pin radius, and a check that the FL ring has the same three-relief pattern as the patent drawing. One uncalibrated oblique photograph",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned drawing of the FL (or common R/FL/FD) body flange or breech ring was found. Lug, claw, notch and pin angles and radii are scaled from US3906534A FIG. 2, which carries no dimensions and shows an FD-era lens; only the body flange is common with FL by Canon's own statement. The FL 28 mm photograph confirms the same wide-plus-two-narrow relief pattern on an FL ring, but only to about ±7 degrees.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "coreDimensions.cameraMountOuterDiameterMm"],
      candidateValues: [],
      resolution:
        "Replace with a Canon service drawing of the FX / FT QL / Pellix mount flange or an FL breech ring, or a calibrated measurement of a body and lens. Searched without result: Canon patents US3906534A, US3051067A, US3081680A and US2826118A, Canon Camera Museum FX, FT QL, FTb and F-1 pages, Canon FT QL instructions, and web searches for FL / FT / Pellix service manuals and dimensioned mount drawings.",
    },
    {
      issue:
        "The ring's lock rotation is not stated by any source. The earlier 90 degree figure was a stand-in and is withdrawn; the scaled lug and claw arcs would give full overlap after roughly 49 to 61 degrees of clockwise ring travel, which is an inference from an undimensioned drawing, not a sourced value.",
      affectedFields: ["lockGeometry.lockRotationDeg", "lockGeometry.lockAngleDeg"],
      candidateValues: ["49–61 (inferred from scaled FIG. 2)", 90],
      resolution: "Take the ring travel from a service manual or a measured lens on a body.",
    },
    {
      issue:
        "The automatic diaphragm lever is placed from a single oblique photograph of one FL lens (FL 28 mm). Its travel, its direction of travel, the body-side actuating lever geometry and any lens-to-lens variation are not sourced.",
      affectedFields: ["mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "Use a Canon FL lens or FX / FT QL body service manual, or the Canon FL automatic diaphragm patent if one can be identified.",
    },
    {
      issue:
        "Lug thickness and the axial position of the claw engagement are unknown. US3906534A says the ring claws come to the rear of the body lugs, so the engagement lies on the camera side of the flange face, but gives no depth. The earlier lug-engagement plane (a stand-in drawn 1.2 mm on the lens side) is withdrawn, and no engagement plane is drawn until its depth is sourced.",
      affectedFields: ["axialStack", "cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution: "Take lug thickness and claw depth from a service drawing or a measured flange.",
    },
    {
      issue:
        "Values still resting on fl-1 are stand-ins that the cited page does not carry: the effective clear aperture (set equal to the 48 mm bore), the 43.3 mm film-plane diameter (the 24 x 36 mm frame diagonal), and the schematic breech-collar marker. Body mount screws are set to unknown: the earlier four-screw 54 mm circle fell on the lug edge and had no source. The body index-dot radius is also unknown.",
      affectedFields: [
        "coreDimensions.effectiveClearApertureMm",
        "axialStack",
        "mechanicalCouplings",
        "screwsGasketsBaffles",
        "cameraSideFeatures",
      ],
      candidateValues: [],
      resolution: "Source each from a service manual or measured sample, or drop the stand-ins.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_FL_MOUNT;
