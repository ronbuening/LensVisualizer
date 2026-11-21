/**
 * Contax/Yashica (C/Y) mount SVG specification.
 *
 * The three-claw bayonet Carl Zeiss and Yashica introduced on the Contax RTS and Yashica FX-1 (1975): a
 * 45.5 mm register, a 48 mm throat, a red-dot index at 12 o'clock and a 72 deg turn to the right. There
 * are no electrical contacts. The lens talks to the body through three mechanical links
 * that every generation shares: the aperture-ring lug that drives the body's spring-loaded F-stop
 * connecting ring, the maximum-aperture (aperture scale) pin at 12 o'clock, and the automatic diaphragm
 * lever at 6 o'clock. Those sit in the base profile.
 *
 * AE and MM differ in drawn geometry by one link. MM lenses (introduced with the Contax 159MM in the
 * mid-1980s) add a program coupling pin that a lever outside the body bayonet reads, so program-capable
 * bodies can set the aperture themselves; the 159MM repair manual calls the lens part the "program
 * coupling pin" and the body parts the Theta lever and Theta base. The `contax-yashica/ae` variant
 * therefore adds nothing to the base, and `contax-yashica/mm` adds the program coupling. The equal
 * per-stop stroke the body expects of an MM lens's stop-down lever is a movement law, not a drawn
 * position, so it is recorded in the profile text only.
 *
 * Evidence. Register and throat are from Wikipedia mount tables [cy-1, cy-3]. The lock turn, index, lock
 * tab and the clock positions of the links are from the Wikipedia C/Y article and Yashica's own manuals
 * [cy-4, cy-m1, cy-m2]. Slot, screw and coupling angles are scaled from a straight-on photograph of a
 * Yashica FX-3 body flange [cy-ph1]; the Contax 159MM repair manual's front-view drawing (Fig. 21)
 * agrees with the flange edges to a few degrees and names the aperture follower [cy-sm1]. No source gives
 * a dimensioned drawing of the bayonet, so those values are `photo_scaled`. A few stand-in values with
 * no located source still rest on the label-only reference [cy-2]; `openQuestions` lists them.
 */

import type { CameraSideFeature, LensSideFeature, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const BASE = "contax-yashica/base";
const AE = "contax-yashica/ae";
const MM = "contax-yashica/mm";

const FFD = ["cy-1"]; // Wikipedia, flange focal distance table
const LABEL = ["cy-2"]; // label-only reference kept for stand-in values with no located source
const THROAT = ["cy-3"]; // Wikipedia, lens mount table (48 mm throat)
const WIKI = ["cy-4"]; // Wikipedia, Contax/Yashica SLRs (lens mount section)
const MANUALS = ["cy-m1", "cy-m2"]; // Contax RTS and Yashica FR owner manuals
const SM159 = ["cy-sm1"]; // Contax 159MM repair manual
const BODY_PHOTO = ["cy-ph1"]; // Yashica FX-3 body flange photograph
const LENS_PHOTO = ["cy-ph2"]; // Yashica ML 50 mm f/2 rear photograph

const WIKI_MANUALS = [...WIKI, ...MANUALS];
const PHOTO_SM = [...BODY_PHOTO, ...SM159];
const PHOTOS = [...BODY_PHOTO, ...LENS_PHOTO];

/**
 * The three retaining flanges of the body ring in the camera-front frame, numbered clockwise from the one
 * at 12 o'clock. The open entry gaps between them span 18 to 67, 147 to 198 and 252 to 316 deg;
 * `clawMaxSpanDeg` is the width of the gap anticlockwise of each flange, which its lens claw enters through.
 */
const SLOTS = [
  { index: 1, startDeg: 316, endDeg: 18, centerDeg: 347, clawMaxSpanDeg: 64 },
  { index: 2, startDeg: 67, endDeg: 147, centerDeg: 107, clawMaxSpanDeg: 49 },
  { index: 3, startDeg: 198, endDeg: 252, centerDeg: 225, clawMaxSpanDeg: 51 },
] as const;

/** Inner radius of the body's retaining flanges, scaled from the body photo against the 48 mm throat. */
const SLOT_INNER_RADIUS_MM = 22.3;
const THROAT_RADIUS_MM = 24;
/** Body mount ring outer diameter, scaled the same way (about +/-1 mm). */
const BODY_OUTER_DIAMETER_MM = 59.5;

function bodySlot(slot: (typeof SLOTS)[number]): CameraSideFeature {
  return {
    featureId: `body-slot-${slot.index}`,
    featureType: "bayonet_receiving_slot",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(slot.centerDeg, "photo_scaled", BODY_PHOTO),
    startAngleDeg: v(slot.startDeg, "photo_scaled", BODY_PHOTO),
    endAngleDeg: v(slot.endDeg, "photo_scaled", BODY_PHOTO),
    innerRadiusMm: v(SLOT_INNER_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    outerRadiusMm: v(THROAT_RADIUS_MM, "secondary", THROAT),
    depthMm: v(1.8, "photo_scaled", LABEL),
    matesWith: `lens-lug-${slot.index}`,
    shapeNotes:
      "retaining flange of the stainless body ring, the solid part that holds a lens claw; the open entry gaps sit between the flanges. Edges read off a straight-on Yashica FX-3 flange photo (camera-front view, about +/-2 deg); the Contax 159MM repair manual Fig. 21 front-view drawing shows the same three unequal gaps. Depth is a stand-in",
  };
}

function lensLug(slot: (typeof SLOTS)[number]): LensSideFeature {
  return {
    featureId: `lens-lug-${slot.index}`,
    featureType: "bayonet_lug",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(slot.centerDeg, "photo_scaled", BODY_PHOTO),
    startAngleDeg: v((slot.centerDeg - slot.clawMaxSpanDeg / 2 + 360) % 360, "photo_scaled", BODY_PHOTO),
    endAngleDeg: v((slot.centerDeg + slot.clawMaxSpanDeg / 2) % 360, "photo_scaled", BODY_PHOTO),
    innerRadiusMm: v(SLOT_INNER_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    outerRadiusMm: v(THROAT_RADIUS_MM, "secondary", THROAT),
    thicknessMm: v(1.8, "photo_scaled", LABEL),
    matesWith: `body-slot-${slot.index}`,
    shapeNotes:
      "lens claw, drawn where it sits on a mounted lens, behind the body flange of the same number, at that flange's centre. The claw arcs were not measured (the lens-rear photo was too low in contrast), so the claw is drawn with the width of the entry gap anticlockwise of its flange, which it must pass through; that is an upper bound. Thickness is a stand-in",
  };
}

const CONTAX_YASHICA_MOUNT = {
  mountId: "contax-yashica",
  displayLabel: "Contax / Yashica",
  projectNote: "Contax/Yashica manual-focus SLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: [
        "aperture_ring_coupling",
        "maximum_aperture_pin",
        "automatic_diaphragm_lever",
        "mm_program_coupling_pin",
      ],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["dimensioned_lug_and_slot_angles", "coupling_radii_and_travel", "lug_engagement_depth"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: MM,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "every Contax/Yashica manual-focus SLR body and lens, 1975 to 2005",
          adds: [
            "three-claw bayonet with three unequal flanges and gaps",
            "body lock tab and lens claw notch",
            "red-dot index at 12 o'clock",
            "aperture-ring coupling to the body's F-stop connecting ring",
            "maximum-aperture (aperture scale) pin",
            "automatic diaphragm lever",
          ],
          removes: ["electrical contacts"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...FFD, ...THROAT, ...WIKI, ...MANUALS, ...SM159, "cy-sm2", ...PHOTOS],
        },
        {
          profileId: AE,
          profileType: "variant",
          appliesTo:
            "AE lenses (1975 onward) and bodies without program modes (for example Contax RTS and RTS II, Yashica FR and FX-3)",
          adds: [],
          removes: ["program coupling pin"],
          changes: ["aperture-priority and manual exposure only; draws the base geometry unchanged"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...WIKI, ...SM159, "cy-sm2"],
        },
        {
          profileId: MM,
          profileType: "variant",
          appliesTo: "MM lenses (introduced with the Contax 159MM, mid-1980s) on program-capable bodies",
          adds: ["program coupling pin on the lens, read by the body's Theta lever outside the bayonet"],
          removes: [],
          changes: [
            "program exposure modes, in which the body sets the aperture; MM lenses mark the minimum aperture in green",
            "the body stops the diaphragm lever part-way by counting encoder pulses, eight per aperture step, so the lever stroke is equal per stop",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...WIKI, ...SM159],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(45.5, "secondary", FFD),
    nominalThroatDiameterMm: v(48, "secondary", THROAT),
    effectiveClearApertureMm: v(48, "secondary", THROAT),
    cameraMountOuterDiameterMm: v(BODY_OUTER_DIAMETER_MM, "photo_scaled", BODY_PHOTO),
    lensMountOuterDiameterMm: v(56, "photo_scaled", LABEL),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", WIKI_MANUALS),
    lockAngleDeg: v(72, "secondary", WIKI),
    lockRotationDeg: v(72, "secondary", WIKI),
    lockRotationDirection: dirV("clockwise", "secondary", WIKI_MANUALS),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", THROAT),
      startAngleDeg: v(0, "secondary", THROAT),
      endAngleDeg: v(360, "secondary", THROAT),
      innerRadiusMm: v(0, "secondary", THROAT),
      outerRadiusMm: v(THROAT_RADIUS_MM, "secondary", THROAT),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "48 mm throat, measured across the open gaps (the widest opening of the body ring)",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", BODY_PHOTO),
      startAngleDeg: v(0, "photo_scaled", BODY_PHOTO),
      endAngleDeg: v(360, "photo_scaled", BODY_PHOTO),
      innerRadiusMm: v(THROAT_RADIUS_MM, "secondary", THROAT),
      outerRadiusMm: v(BODY_OUTER_DIAMETER_MM / 2, "photo_scaled", BODY_PHOTO),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "stainless body mount ring; outer edge scaled from the FX-3 flange photo against the 48 mm throat, about +/-1 mm",
    },
    ...SLOTS.map(bodySlot),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", WIKI_MANUALS),
      startAngleDeg: unknownV(BODY_PHOTO),
      endAngleDeg: unknownV(BODY_PHOTO),
      innerRadiusMm: unknownV(BODY_PHOTO),
      outerRadiusMm: v(30.8, "photo_scaled", BODY_PHOTO),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "red dot at 12 o'clock on the body, just outside the mount ring; radius scaled from the FX-3 photo",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(15, "secondary", WIKI),
      startAngleDeg: unknownV(BODY_PHOTO),
      endAngleDeg: unknownV(BODY_PHOTO),
      innerRadiusMm: unknownV(BODY_PHOTO),
      outerRadiusMm: v(22.7, "photo_scaled", BODY_PHOTO),
      depthMm: v(1.8, "photo_scaled", LABEL),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "spring-loaded lock tab at about 12:30, at the clockwise end of the top retaining flange; it drops into a notch in one lens claw and is withdrawn by the release button on the body front. Clock position from the Wikipedia article; the FX-3 photo shows a small tab there, which gives the radius. Depth is a stand-in",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", LABEL),
      startAngleDeg: v(0, "photo_scaled", LABEL),
      endAngleDeg: v(360, "photo_scaled", LABEL),
      innerRadiusMm: v(0, "photo_scaled", LABEL),
      outerRadiusMm: v(23, "photo_scaled", LABEL),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening; stand-in radius",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", LABEL),
      startAngleDeg: v(0, "photo_scaled", LABEL),
      endAngleDeg: v(360, "photo_scaled", LABEL),
      innerRadiusMm: v(23, "photo_scaled", LABEL),
      outerRadiusMm: v(28, "photo_scaled", LABEL),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring; stand-in radii",
    },
    ...SLOTS.map(lensLug),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", WIKI_MANUALS),
      startAngleDeg: unknownV(LABEL),
      endAngleDeg: unknownV(LABEL),
      innerRadiusMm: unknownV(LABEL),
      outerRadiusMm: v(28.5, "photo_scaled", LABEL),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "red dot on the lens barrel, matched to the body dot before turning; stand-in radius",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(15, "secondary", WIKI),
      startAngleDeg: unknownV(BODY_PHOTO),
      endAngleDeg: unknownV(BODY_PHOTO),
      innerRadiusMm: unknownV(BODY_PHOTO),
      outerRadiusMm: v(22.7, "photo_scaled", BODY_PHOTO),
      thicknessMm: v(1.8, "photo_scaled", LABEL),
      matesWith: "body-lock-pin",
      shapeNotes:
        "notch in one lens claw, stored at the body lock tab it receives when locked (the article places it at about 11:30 seen from the lens rear, which is 12:30 in the camera-front frame). Radius copied from the body tab",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", FFD),
      thicknessMm: v(0, "secondary", FFD),
      diameterMm: v(BODY_OUTER_DIAMETER_MM, "photo_scaled", BODY_PHOTO),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", LABEL),
      thicknessMm: v(1.8, "photo_scaled", LABEL),
      diameterMm: v(53, "photo_scaled", LABEL),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-45.5, "secondary", FFD),
      thicknessMm: v(0, "secondary", FFD),
      diameterMm: v(43.3, "secondary", FFD),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "aperture-ring-coupling",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(38, "photo_scaled", PHOTO_SM),
      radiusMm: v(20, "photo_scaled", BODY_PHOTO),
      sizeOrTravel:
        "pin on a spring-loaded ring; rests against its f/1.2 stop and is pushed clockwise (camera front) by the lens; travel per stop not given by any source",
      function: "set-aperture input: a lug on the lens aperture ring positions the body's F-stop connecting ring",
      compatibilityNotes:
        "Same on AE and MM. Angle is the pin at rest (no lens) in the FX-3 photo; the 159MM repair manual Fig. 21 draws it at about 45 deg and the Wikipedia article says about 2 o'clock. The radius is the apparent one in a front photo; the pin sits behind the flange plane",
    },
    {
      featureId: "maximum-aperture-pin",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(0, "secondary", WIKI),
      radiusMm: unknownV(LENS_PHOTO),
      sizeOrTravel: "fixed pin on the lens; radius not given by any source",
      function: "aperture scale coupling: tells the body the lens's maximum aperture for the finder aperture display",
      compatibilityNotes:
        "On AE and MM lenses at about 12 o'clock. Only bodies with a finder aperture scale carry the follower (the 159MM drawing shows a block at 12 o'clock inside the throat; the FX-3 has none)",
    },
    {
      featureId: "automatic-diaphragm-lever",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(177, "photo_scaled", PHOTOS),
      radiusMm: v(17, "photo_scaled", BODY_PHOTO),
      sizeOrTravel: "lever; stroke not given in mm by any source",
      function: "the body's automatic diaphragm action lever closes the lens diaphragm at exposure",
      compatibilityNotes:
        "About 6 o'clock inside the bayonet. Angle is the body lever at rest in the FX-3 photo; the lens lever sits at about 173 deg (camera-front frame) in the ML 50 mm f/2 rear photo. The radius is apparent, well behind the flange. With an MM lens the body stops this lever part-way in program mode (eight encoder pulses per stop, 159MM repair manual p. 52)",
    },
    {
      featureId: "mm-program-coupling",
      side: "both",
      profileId: MM,
      centerAngleDeg: v(150, "secondary", WIKI),
      radiusMm: unknownV(SM159),
      sizeOrTravel: "pin on the lens and a lever (Theta lever) on the body; size and radius not given by any source",
      function: "tells a program-capable body that an MM lens is mounted",
      compatibilityNotes:
        "MM lenses and program-capable bodies (Contax 159MM onward) only. Position is the article's 'about 5 o'clock on the body, outside the bayonet'. The 159MM repair manual names the parts (program coupling pin, Theta lever, Theta base) without a position; its Fig. 21 draws an unlabelled lever outside the ring at about 138 deg",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "secondary", PHOTO_SM),
      pcdMm: v(54.7, "photo_scaled", BODY_PHOTO),
      diameterMm: v(2, "photo_scaled", LABEL),
      centerAnglesDeg: degListV([55, 124, 240, 305], "photo_scaled", BODY_PHOTO),
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
      ref: "cy-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "45.5 mm Contax/Yashica register",
      confidence: "medium",
    },
    {
      ref: "cy-2",
      sourceType: "secondary",
      citation: "Contax/Yashica mount visual references. Accessed 2026-06-06.",
      liveUrl: "JAPB / camera-wiki Contax-Yashica mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "stand-in values with no located source: lens mount outer diameter, lens throat and flange radii, lug thickness and engagement plane, lens index radius, screw diameter",
      confidence: "low",
    },
    {
      ref: "cy-3",
      sourceType: "secondary",
      citation: "“Lens mount,” Wikipedia, revision of 2026-11-13. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo: "mount table row for Contax/Yashica: 48 mm throat, 45.5 mm flange focal distance, bayonet",
      confidence: "medium",
    },
    {
      ref: "cy-4",
      sourceType: "secondary",
      citation: "“Contax/Yashica SLRs,” Wikipedia, revision of 2026-10-17, section “Lens mount”. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Contax/Yashica_SLRs",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Contax/Yashica_SLRs&oldid=1380717752",
      archiveDate: "2026-11-21",
      appliesTo:
        "red index dot at 12 o'clock seen from the camera front; 72 deg clockwise turn to lock; lock notch at about 11:30 on a lens claw seen from the lens rear, mating a body tab at about 12:30; body diaphragm lever at 6 o'clock and aperture keying lever at 2 o'clock inside the bayonet; lens aperture scale pin at 12 o'clock; MM indicator at about 5 o'clock on the body outside the bayonet. Clock positions are approximate; the article cites Reynolds (1978), Heiberg (1979), a Yashica FX-1 dealer catalog and JAPB",
      confidence: "medium",
    },
    {
      ref: "cy-m1",
      sourceType: "official",
      citation:
        "Yashica Co., Ltd., Contax RTS instruction manual, c. 1975 (scan hosted by M. Butkus). Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/contax/contax_rts/contax_rts.htm",
      archiveUrl: "https://www.cameramanuals.org/contax/contax_rts.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "specification line 'Contax/Yashica Mount (three-claw bayonet mount)'; mounting text: match the red dot on the lens barrel with the one on the body, then give the lens a right turn until it click-stops; removal with the lens release button held",
      confidence: "high",
    },
    {
      ref: "cy-m2",
      sourceType: "official",
      citation:
        "Yashica Co., Ltd., Yashica FR instruction manual, c. 1976 (scan hosted by M. Butkus). Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/yashica/yashica_fr/yashica_fr.htm",
      archiveUrl: "https://www.cameramanuals.org/yashica_pdf/yashica_fr.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "specification line naming the three-claw bayonet and its internal linkage (aperture scale coupling lever, aperture keying lever, automatic diaphragm action lever); 'How to Mount the Lens': match the red dots, right turn until it self-locks with a click",
      confidence: "high",
    },
    {
      ref: "cy-sm1",
      sourceType: "service_manual",
      citation:
        "Contax 159MM Repair Manual, Kyocera, mid-1980s (scan listed on the Contax 139 Resource documents page). Accessed 2026-11-21.",
      liveUrl: "https://www.contax139.co.uk/documentation",
      archiveUrl: "https://drive.google.com/open?id=0B4O3Tuo7UDz3d1o1M29rLU9VZW8",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 17 and Fig. 21 (mirror box and mount seen from the camera front, no dimensions or stated scale): 'Pin of F. Stop Connecting Ring' inside the throat at upper right, pushed 'until stops (f/1.2 aperture position)' and returned by spring; four mount-ring screws and three unequal bayonet gaps as drawn. p. 7 Fig. 5: Theta Lever Cover on the front cover. p. 70: 'older type lens without the program coupling pin'. pp. 51-53: in program mode the body stops the automatic diaphragm action lever by encoder pulse count, '8 pulses per 1 step', tested with an MM lens. p. 48: body flange back 45.42 +0.02/-0.03 mm from the body mount plane to the film rail plane",
      confidence: "high",
    },
    {
      ref: "cy-sm2",
      sourceType: "service_manual",
      citation:
        "Contax RTS II Quartz Repair Manual, Yashica Co., Ltd., c. 1982 (scan listed on the Contax 139 Resource documents page). Accessed 2026-11-21.",
      liveUrl: "https://www.contax139.co.uk/documentation",
      archiveUrl: "https://drive.google.com/open?id=0B4O3Tuo7UDz3Vk9uNWJPaE83cHc",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 29 and Fig. 48: 'Push Aperture Linkage Pin in the direction of the arrow until it stops (f/1.2 aperture position)' on the F. Stop Ring; shows the same aperture follower on a body that predates MM lenses. No mount dimensions",
      confidence: "high",
    },
    {
      ref: "cy-ph1",
      sourceType: "field_photo",
      citation:
        "Mliu92, “Contax-Yashica mount, body.jpg” (mounting flange of a Yashica FX-3), Wikimedia Commons, 2026-06-30. Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Contax-Yashica_mount,_body.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Contax-Yashica_mount%2C_body.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "straight-on photograph from the camera front, so angles are used unmirrored. Flange edges, screw positions, index dot, lock tab, aperture follower pin and diaphragm lever read off the image; lengths scaled by taking the circle through the open gaps as the 48 mm throat. One body of one model; no calibrated scale",
      confidence: "medium",
    },
    {
      ref: "cy-ph2",
      sourceType: "field_photo",
      citation:
        "Mliu92, “Contax-Yashica mount, lens.jpg” (mounting flange of a Yashica ML 50 mm f/2), Wikimedia Commons, 2026-06-30. Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Contax-Yashica_mount,_lens.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Contax-Yashica_mount%2C_lens.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "photograph from the lens rear with the lens clocked as mounted; angles converted with theta_front = (360 - theta_rear) mod 360. Used for the diaphragm lever (about 187 deg rear, 173 deg front) and to confirm the maximum-aperture pin near 12 o'clock. One Yashica ML lens; no calibrated scale",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned drawing of the bayonet was found. Flange edges are scaled from one FX-3 flange photo (about +/-2 deg), with the 159MM repair manual Fig. 21 drawing as an undimensioned cross-check; the lens claws are drawn behind the flanges at the width of the gaps they enter through, an upper bound, because their own spans were not measured. Searched: web and Google Patents for Yashica, Kyocera and Carl Zeiss bayonet or aperture-coupling patents (none found for the mount itself; JPS58100837A and JPS58216227A cover a multi-mode aperture ring and state no angles or dimensions), the Contax RTS, RTS II and 159MM and Yashica FR repair manuals, and the RTS and FR owner manuals.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution:
        "A factory mount drawing, a service manual with mount dimensions, or calibrated measurement of a body and lens.",
    },
    {
      issue:
        "The 159MM repair manual gives the body flange back as 45.42 +0.02/-0.03 mm from the body mount plane to the film rail plane (p. 48), against the 45.5 mm register in secondary tables. The stored value stays at the nominal 45.5 mm.",
      affectedFields: ["coreDimensions.flangeFocalDistanceMm", "axialStack"],
      candidateValues: [45.5, 45.42],
      resolution:
        "A Zeiss or Kyocera statement of the nominal register and of how the body adjustment figure relates to it.",
    },
    {
      issue:
        "Coupling angles are photo-scaled and their radii are the apparent ones in a front photo (the parts sit behind the flange). The maximum-aperture pin has no radius, and no source gives the aperture follower's travel per stop or the diaphragm lever's stroke.",
      affectedFields: ["mechanicalCouplings"],
      candidateValues: [],
      resolution: "A lens or body service manual with coupling dimensions, or calibrated measurement.",
    },
    {
      issue:
        "The MM program coupling is placed only by the Wikipedia article's 'about 5 o'clock on the body, outside the bayonet'; its radius is unknown. The 159MM repair manual names the parts without a position, and its Fig. 21 draws an unlabelled lever outside the ring at about 138 deg. The MM stop-down lever's proportional stroke is not dimensioned by any source found.",
      affectedFields: ["mechanicalCouplings.mm-program-coupling"],
      candidateValues: [150, 138],
      resolution: "A Contax 159MM or 167MT service drawing of the Theta lever, or an MM lens repair manual.",
    },
    {
      issue:
        "The lock tab is placed by the Wikipedia article's clock position (about 12:30) and its radius by the FX-3 photo. The lens release button on the body front is not modelled.",
      affectedFields: ["cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: [],
      resolution: "A service manual drawing of the lock tab and the notch in the lens claw.",
    },
    {
      issue:
        "Mount screw positions and pitch circle are photo-scaled from the FX-3 photo (four screws; the 159MM drawing shows four in similar positions). Screw diameter is a stand-in.",
      affectedFields: ["screwsGasketsBaffles.body-mount-screws"],
      candidateValues: [],
      resolution: "A parts list or assembly chart with the screw size and positions.",
    },
    {
      issue:
        "The label-only reference cy-2 still carries stand-in values no located source supports: lens mount outer diameter (56 mm), lens throat and flange radii, lug thickness and slot depth (1.8 mm), the lug engagement plane, the lens index radius and the screw diameter.",
      affectedFields: [
        "coreDimensions.lensMountOuterDiameterMm",
        "lensSideFeatures.lens-throat",
        "lensSideFeatures.lens-mount-ring",
        "lensSideFeatures.lens-index-mark",
        "axialStack.bayonet_lug_engagement",
      ],
      candidateValues: [],
      resolution: "Measurement of a C/Y lens rear and a body mount ring section, or a lens service manual.",
    },
  ],
} satisfies MountSpecInput;

export default CONTAX_YASHICA_MOUNT;
