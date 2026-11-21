/**
 * Leica R mount SVG specification.
 *
 * Leitz introduced the three-lug R bayonet with the Leicaflex in 1964 and kept the bayonet, the 47 mm
 * register and the lock through the R9. What changed is the aperture and metering interface, so the
 * base profile holds only the bayonet, lock and index, and five variants overlay the lens generations:
 * `leica-r/1-cam` (one sloped cam, Leicaflex Standard), `leica-r/2-cam` (second sloped cam for the
 * Leicaflex SL / SL2 through-the-lens meter), `leica-r/3-cam` (both sloped cams plus the stepped R cam),
 * `leica-r/r-only` (stepped R cam alone) and `leica-r/rom` (R cam plus the electrical contact strip read
 * by the R8 / R9). The MVP figure renders the 3-cam generation, the one that fits every body.
 *
 * What is sourced: 47 mm register and 49 mm inside diameter [lr-1]; the lens goes in with its red dot
 * opposite the body's bayonet lock and locks with a short turn to the right, clockwise seen from the
 * camera front [lr-m1, lr-m2]; lock at 8 o'clock from the front [lr-3, lr-m1]; the sloped cam on the
 * aperture ring and its body feeler [lr-p2]; the one-piece stepped R cam with two prongs and its two
 * body followers [lr-p1]; the contact strip on R8 / R9 bodies and ROM lenses [lr-m1].
 *
 * What is only scaled from figures: the bayonet gap and flange angles come from the undimensioned camera-front
 * elevation in US4181419 (FIG. 1a), and the cam, R-cam and contact-strip angles from the lens-rear
 * photographs on p. 128 of the R9 instructions, mirrored into the camera-front frame and clocked by the
 * lock notch. No source found gives a radius, a lug thickness, a cam rise or the number of ROM contacts;
 * those values stay unknown or on the earlier unsourced estimate [lr-2] and are listed in openQuestions.
 */

import type { ContactFeature, MechanicalCoupling, MountProfileId, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeStandardAxialStack } from "./mountAuthoringShared.js";

const W = ["lr-1"]; // Wikipedia, flange focal distance table
const EST = ["lr-2"]; // earlier unsourced visual estimate (label only)
const M9 = ["lr-m1"]; // Leica R9 instructions
const MSL = ["lr-m2"]; // Leicaflex SL instructions
const P1 = ["lr-p1f"]; // US4181419 FIG. 1a, scaled
const LOCK = ["lr-3", "lr-m1", "lr-m2"]; // Wikipedia "Leica R bayonet" clock position + both manuals
const CAM = ["lr-m1", "lr-3"]; // R9 instructions photo, cams identified per Wikipedia

const BASE = "leica-r/base";
const ONE_CAM = "leica-r/1-cam";
const TWO_CAM = "leica-r/2-cam";
const THREE_CAM = "leica-r/3-cam";
const R_ONLY = "leica-r/r-only";
const ROM = "leica-r/rom";

const GAP_NOTE =
  "entry gap between two of the body bayonet segments 8 in US4181419 FIG. 1a (camera-front elevation); angles scaled from that undimensioned figure. The body flanges themselves sit between the gaps at about 330-30, 90-150 and 210-270 deg";
const LUG_NOTE =
  "lens bayonet segment 9, stored at the entry gap it passes through; the patent draws it only in perspective (FIG. 1b), so the span is the gap's and is an upper limit for the lug";
const PHOTO_NOTE =
  "angle scaled from the lens-rear photo on p. 128 of the R9 instructions, mirrored to the camera-front frame and clocked by the lock notch (taken as 240 deg); good to about 15 deg";

/** First Leicaflex cam: sloped, on the aperture ring, read by the Leicaflex Standard meter coupling. */
function cam1(profileId: MountProfileId, slug: string): MechanicalCoupling {
  return {
    featureId: `leicaflex-cam-1-${slug}`,
    side: "lens",
    profileId,
    centerAngleDeg: v(325, "photo_scaled", CAM),
    radiusMm: unknownV(M9),
    sizeOrTravel: "curved sloped cam inside the bayonet, arc of roughly 50 deg; rise not sourced",
    function: "passes the preselected aperture to the Leicaflex Standard meter coupling",
    compatibilityNotes: `first of the two Leicaflex control cams shown on p. 128 of the R9 instructions; ${PHOTO_NOTE}. Wikipedia rounds it to 12 o'clock`,
  };
}

/** Second Leicaflex cam: the correcting cam for the SL / SL2 through-the-lens meter. */
function cam2(profileId: MountProfileId, slug: string): MechanicalCoupling {
  return {
    featureId: `leicaflex-cam-2-${slug}`,
    side: "lens",
    profileId,
    centerAngleDeg: v(130, "photo_scaled", CAM),
    radiusMm: unknownV(M9),
    sizeOrTravel: "curved sloped cam inside the bayonet, arc of roughly 50 deg; rise not sourced",
    function: "passes the preselected aperture to the Leicaflex SL / SL2 through-the-lens meter",
    compatibilityNotes: `correcting cam of US3427946, carried on the aperture selector ring and read by a feeler in the body; ${PHOTO_NOTE}. Wikipedia rounds it to 6 o'clock`,
  };
}

/** Stepped R cam on the lens plus the two body followers drawn in the patent. */
function rCam(profileId: MountProfileId, slug: string): MechanicalCoupling[] {
  return [
    {
      featureId: `r-cam-${slug}`,
      side: "lens",
      profileId,
      centerAngleDeg: v(120, "photo_scaled", CAM),
      radiusMm: unknownV(M9),
      sizeOrTravel: "one-piece curved member with two axial prongs (US4181419, 14 and 15); arc length not sourced",
      function: "passes the preselected aperture and the lens's maximum aperture to Leica R bodies (R3 onward)",
      compatibilityNotes: `stepped R control cam, just inside the second Leicaflex cam; the stored angle is the leader point "a" in both photos, not a measured cam centre; ${PHOTO_NOTE}`,
    },
    {
      featureId: `r-cam-meter-follower-${slug}`,
      side: "body",
      profileId,
      centerAngleDeg: v(135, "photo_scaled", P1),
      radiusMm: unknownV(P1),
      sizeOrTravel: "contact protrusion 5a on a slide turning about the optical axis",
      function: "follows the R-cam prong whose position is the same on every lens (metering)",
      compatibilityNotes:
        "angle scaled from the undimensioned camera-front elevation US4181419 FIG. 1a; the patent presents this camera and its aperture indicator as an example only, so the position on production bodies is not confirmed",
    },
    {
      featureId: `r-cam-aperture-follower-${slug}`,
      side: "body",
      profileId,
      centerAngleDeg: v(230, "photo_scaled", P1),
      radiusMm: unknownV(P1),
      sizeOrTravel: "contact protrusion 7a on a second slide turning about the optical axis",
      function: "follows the R-cam prong whose position varies with the lens's maximum aperture",
      compatibilityNotes:
        "angle scaled from the undimensioned camera-front elevation US4181419 FIG. 1a; the patent presents this camera and its aperture indicator as an example only, so the position on production bodies is not confirmed",
    },
  ];
}

/** ROM contact strip, one marker per side; the number of contacts is not sourced. */
function romStrip(side: ContactFeature["side"]): ContactFeature {
  return {
    side,
    contactNo: 1,
    profileId: ROM,
    centerAngleDeg: v(345, "photo_scaled", CAM),
    centerRadiusMm: unknownV(M9),
    widthMm: unknownV(M9),
    heightMm: unknownV(M9),
    shape: "strip marker (individual contacts not modelled)",
    protrusionMm: unknownV(M9),
    function:
      side === "lens"
        ? "ROM contact strip on the lens, in the place of the first Leicaflex cam; arc of roughly 60 deg in the R9 instructions photo (p. 128). One marker stands for the whole strip"
        : "contact strip in the R8 / R9 bayonet that reads the lens strip; stored at the lens strip's angle. One marker stands for the whole strip",
  };
}

const LEICA_R_MOUNT = {
  mountId: "leica-r",
  displayLabel: "Leica R",
  projectNote: "Leica R SLR bayonet mount, Leicaflex (1964) to R9.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["leicaflex_control_cams", "r_stepped_cam", "rom_contact_strip"],
      mvpOptional: ["mount_screws"],
      referenceGrade: [
        "dimensioned_lug_angles_and_radii",
        "cam_radii_and_rise",
        "rom_contact_count_and_pitch",
        "r_only_bayonet_keying",
        "automatic_diaphragm_lever_position",
      ],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: THREE_CAM,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "every Leicaflex and Leica R body and lens, 1964 to the R9",
          adds: [
            "three-lug bayonet",
            "47 mm register",
            "bayonet lock at 8 o'clock from the camera front, which is also the index the lens's red dot is set against",
            "automatic-diaphragm lever at the lens rear, worked by a body lever linked to the mirror (position not sourced, not drawn)",
          ],
          removes: ["rangefinder coupling", "threaded LTM interface"],
          changes: [],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: ["lr-1", "lr-2", "lr-3", "lr-m1", "lr-m2", "lr-p1", "lr-p3"],
        },
        {
          profileId: ONE_CAM,
          profileType: "variant",
          appliesTo: "1-cam lenses for the Leicaflex Standard, 1964 to 1968",
          adds: ["one sloped cam on the aperture ring"],
          removes: [],
          changes: ["stop-down metering only on SL / SL2 and R bodies; Leica warns against use on the R8 / R9"],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["lr-3", "lr-m1", "lr-m2"],
        },
        {
          profileId: TWO_CAM,
          profileType: "variant",
          appliesTo: "2-cam lenses for the Leicaflex SL and SL2, 1968 to 1976",
          adds: ["second sloped cam for the through-the-lens meter, opposite the first"],
          removes: [],
          changes: ["first cam kept for the Leicaflex Standard"],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["lr-3", "lr-m1", "lr-m2", "lr-p2"],
        },
        {
          profileId: THREE_CAM,
          profileType: "variant",
          appliesTo: "3-cam lenses, 1976 to 1988; fit every Leicaflex and Leica R body",
          adds: ["stepped R cam just inside the second sloped cam", "two R-cam followers in Leica R bodies"],
          removes: [],
          changes: ["both Leicaflex cams kept"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["lr-3", "lr-m1", "lr-p1", "lr-p2"],
        },
        {
          profileId: R_ONLY,
          profileType: "variant",
          appliesTo: "R-only lenses, 1988 to 1996; Leica R bodies from the R3 only",
          adds: ["stepped R cam", "two R-cam followers in Leica R bodies"],
          removes: ["both Leicaflex cams"],
          changes: [
            "bayonet altered slightly so the lens does not fit Leicaflex bodies; the altered geometry is not sourced and not drawn",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["lr-3", "lr-m1", "lr-p1"],
        },
        {
          profileId: ROM,
          profileType: "variant",
          appliesTo: "ROM lenses and R8 / R9 bodies, 1996 onward",
          adds: [
            "electrical contact strip on the lens in the place of the first Leicaflex cam",
            "matching contact strip in the R8 / R9 bayonet",
            "stepped R cam",
            "two R-cam followers in Leica R bodies",
          ],
          removes: ["both Leicaflex cams"],
          changes: ["lens data such as focal length go to the body electrically; does not fit Leicaflex bodies"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["lr-3", "lr-m1", "lr-p1"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(47, "secondary", ["lr-1", "lr-3"]),
    nominalThroatDiameterMm: v(49, "secondary", W),
    effectiveClearApertureMm: v(49, "secondary", W),
    cameraMountOuterDiameterMm: v(58, "photo_scaled", EST),
    lensMountOuterDiameterMm: v(56, "photo_scaled", EST),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", MSL),
    lockAngleDeg: v(45, "photo_scaled", MSL),
    lockRotationDeg: v(45, "photo_scaled", MSL),
    lockRotationDirection: dirV("clockwise", "official", ["lr-m2", "lr-m1"]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(24.5, "secondary", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "49 mm throat opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", EST),
      startAngleDeg: v(0, "photo_scaled", EST),
      endAngleDeg: v(360, "photo_scaled", EST),
      innerRadiusMm: v(24.5, "secondary", W),
      outerRadiusMm: v(29, "photo_scaled", EST),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring; outer diameter is an unsourced estimate",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(60, "photo_scaled", P1),
      startAngleDeg: v(30, "photo_scaled", P1),
      endAngleDeg: v(90, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-1",
      shapeNotes: `${GAP_NOTE}; its upper end is the drawn end of the top flange (about 30 deg); the lower end is hidden by a break-out and is placed by taking the hidden flange as wide as the top one. Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(180, "photo_scaled", P1),
      startAngleDeg: v(150, "photo_scaled", P1),
      endAngleDeg: v(210, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-2",
      shapeNotes: `${GAP_NOTE}; both ends are drawn and scale to about 148 and 213 deg. Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(300, "photo_scaled", P1),
      startAngleDeg: v(270, "photo_scaled", P1),
      endAngleDeg: v(330, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-3",
      shapeNotes: `${GAP_NOTE}; its upper end is the drawn end of the top flange (about 330 deg); the lower end is hidden by a break-out and is placed by taking the hidden flange as wide as the top one. Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(240, "secondary", LOCK),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(29.5, "photo_scaled", EST),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "the body has no separate index: the lens's red dot is set against the red bayonet lock (Leicaflex SL) or the bayonet release button (R9), at 8 o'clock from the front",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(240, "secondary", LOCK),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(25.5, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "bayonet locking pin at 8 o'clock from the camera front (Wikipedia); the release control sits at about 243 deg in the R9 front view and about 245 deg in the Leicaflex SL three-quarter view. Radius and depth are unsourced estimates",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", EST),
      startAngleDeg: v(0, "photo_scaled", EST),
      endAngleDeg: v(360, "photo_scaled", EST),
      innerRadiusMm: v(0, "photo_scaled", EST),
      outerRadiusMm: v(23.5, "photo_scaled", EST),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening; diameter is an unsourced estimate",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", EST),
      startAngleDeg: v(0, "photo_scaled", EST),
      endAngleDeg: v(360, "photo_scaled", EST),
      innerRadiusMm: v(23.5, "photo_scaled", EST),
      outerRadiusMm: v(28, "photo_scaled", EST),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring; diameters are unsourced estimates",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(60, "photo_scaled", P1),
      startAngleDeg: v(30, "photo_scaled", P1),
      endAngleDeg: v(90, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      thicknessMm: v(1.8, "photo_scaled", EST),
      matesWith: "body-slot-1",
      shapeNotes: `${LUG_NOTE}. Radii and thickness are unsourced estimates`,
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(180, "photo_scaled", P1),
      startAngleDeg: v(150, "photo_scaled", P1),
      endAngleDeg: v(210, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      thicknessMm: v(1.8, "photo_scaled", EST),
      matesWith: "body-slot-2",
      shapeNotes: `${LUG_NOTE}. Radii and thickness are unsourced estimates`,
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(300, "photo_scaled", P1),
      startAngleDeg: v(270, "photo_scaled", P1),
      endAngleDeg: v(330, "photo_scaled", P1),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      thicknessMm: v(1.8, "photo_scaled", EST),
      matesWith: "body-slot-3",
      shapeNotes: `${LUG_NOTE}. Radii and thickness are unsourced estimates`,
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(240, "secondary", LOCK),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(28.5, "photo_scaled", EST),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the lens's fixed ring, stored where it meets the body lock on insertion; after the turn it sits at about 290 deg in the Leicaflex SL instructions (p. 4 view)",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(240, "secondary", LOCK),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(25.5, "photo_scaled", EST),
      thicknessMm: v(1.8, "photo_scaled", EST),
      matesWith: "body-lock-pin",
      shapeNotes:
        "locking slot at 4 o'clock seen from the lens rear (Wikipedia), which is 240 deg in the camera-front frame; visible on the flange in both lens-rear photos on p. 128 of the R9 instructions. Radius and thickness are unsourced estimates",
    },
  ],

  axialStack: makeStandardAxialStack({
    refs: ["lr-1", "lr-2"],
    flangeFocalDistanceMm: 47,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 54,
    sensorFilmDiameterMm: 43.3,
  }),

  contacts: [romStrip("body"), romStrip("lens")],

  mechanicalCouplings: [
    cam1(ONE_CAM, "1-cam"),
    cam1(TWO_CAM, "2-cam"),
    cam2(TWO_CAM, "2-cam"),
    cam1(THREE_CAM, "3-cam"),
    cam2(THREE_CAM, "3-cam"),
    ...rCam(THREE_CAM, "3-cam"),
    ...rCam(R_ONLY, "r-only"),
    ...rCam(ROM, "rom"),
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "photo_scaled", P1),
      pcdMm: v(54, "photo_scaled", EST),
      diameterMm: v(2, "photo_scaled", EST),
      centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", P1),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: [
      "camera-side-variant-electrical",
      "camera-side-variant-mechanical",
      "lens-side-variant-electrical",
      "lens-side-variant-mechanical",
    ],
  },

  sourceRefs: [
    {
      ref: "lr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "47 mm Leica R register and 49 mm inside diameter",
      confidence: "medium",
    },
    {
      ref: "lr-2",
      sourceType: "secondary",
      citation: "Leica R mount visual references. Accessed 2026-06-06.",
      liveUrl: "Leica R camera/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "unsourced estimates that no dimensioned source has replaced: mount outer diameters, lug radii and thickness, lens rear opening, radial placement of the lock and index, mount-screw pitch circle and diameter, lug engagement plane",
      confidence: "low",
    },
    {
      ref: "lr-3",
      sourceType: "secondary",
      citation: "“Leica R bayonet,” Wikipedia, revision of 2026-06-03. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Leica_R_bayonet",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Leica_R_bayonet&oldid=1357537022",
      archiveDate: "2026-06-03",
      appliesTo:
        "three tabs, 47 mm register, locking pin at 8 o'clock from the body front and locking slot at 4 o'clock at the lens rear, which cam is which (cam 1, cams 2 and 3, ROM contacts in place of cam 1), generation years. The clock positions are uncited in the article and rounded to the hour",
      confidence: "low",
    },
    {
      ref: "lr-m1",
      sourceType: "official",
      citation:
        "Leica Camera AG, “LEICA R9 Instructions,” fold-out front view and pp. 108, 127–129 and 197. Accessed 2026-11-21.",
      liveUrl: "https://125px.com/docs/manuals/camera/35mm/leica/R9%20Instructions_en.pdf",
      archiveUrl: "https://www.manualslib.com/manual/1968838/Leica-R9.html?page=133",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: red point on the lens set opposite the bayonet release button, lens turned slightly to the right, contact strip on the bayonet of the R9 and of ROM lenses, R control cam needed from the R3 on, Leicaflex cams removed when contacts are fitted. Figures: fold-out front view with the lens release button, part 1.1, at lower left (camera-front view; parts list on p. 108); two lens-rear photos on p. 128 showing the R cam, both Leicaflex cams and the contact strip. Angles scaled from the p. 128 photos were mirrored with theta_front = (360 - theta_rear) mod 360 after turning each photo so its lock notch sits at 120 deg in the rear view",
      confidence: "medium",
    },
    {
      ref: "lr-m2",
      sourceType: "official",
      citation: "Ernst Leitz GmbH Wetzlar, “LEICAFLEX SL Instructions,” pp. 4, 12, 14 and 16. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/leica/leicaflex_sl/leicaflex_sl.htm",
      archiveUrl: "https://www.cameramanuals.org/leica_pdf/leicaflex_sl.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: red dot on the lens lined up with the red bayonet lock, a short turn to the right locks it (p. 16); SL lenses carry two cams in the bayonet mount, earlier Leicaflex lenses one (pp. 12, 14). Figures: p. 16 shows the turn as a clockwise arrow seen from the camera front; the p. 4 three-quarter front view shows the mounted red dot about 45 deg clockwise of the lock, which is the only basis for the 45 deg turn",
      confidence: "medium",
    },
    {
      ref: "lr-p1",
      sourceType: "patent",
      citation:
        "W. Schlapp and W. Wiessner (Ernst Leitz Wetzlar GmbH), US4181419, “Interchangeable lens for SLR-cameras having TTL light metering,” 1980 (priority DE2651263, 1976). Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US4181419A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/f2/13/08/42f97eafb8047a/US4181419.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text (col. 3–4): one setting member on the aperture ring with two prongs, one at the same position on every lens for metering and one placed by maximum aperture, each read by a slide in the body; bayonet segments 8 on the body and 9 on the lens. The patent states no angle or dimension; FIG. 1a is cited separately as [lr-p1f]",
      confidence: "medium",
    },
    {
      ref: "lr-p1f",
      sourceType: "patent_figure",
      citation:
        "US4181419, FIG. 1a: front elevation of the camera mount. Undimensioned drawing, scaled for this spec. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US4181419A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/f2/13/08/42f97eafb8047a/US4181419.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front elevation, used with no mirroring. No dimension or scale is stated, so readings stay photo-scaled: the three body bayonet segments (and so the entry gaps between them), the four mount screws and the two R-cam followers",
      confidence: "low",
    },
    {
      ref: "lr-p2",
      sourceType: "patent",
      citation:
        "H. Broschke, W. Holle and W. Wiessner (Ernst Leitz GmbH), US3427946, “Single lens reflex cameras,” 1969 (German priority application L 51,782). Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US3427946A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/88/f6/bb/ea685e4f228feb/US3427946.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text (col. 4): correcting cam on the lens's diaphragm selector ring, curved about the optical axis with an axial rise, read by a feeler in the body for the through-the-lens meter. FIGS. 1, 2, 5 and 6 are top views; they give no angular position around the mount and no dimensions",
      confidence: "high",
    },
    {
      ref: "lr-p3",
      sourceType: "patent",
      citation:
        "W. Schlapp and W. Wiessner (Ernst Leitz Wetzlar GmbH), US4504134, “Photographic objective with automatic diaphragm,” 1985. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US4504134A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/09/ce/2e/4b010ad69675dc/US4504134.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: a lever at the rear of the lens is worked by a diaphragm control lever on the camera side that follows the reflex mirror. FIG. 2 is a fragmentary lens-rear view whose orientation on the camera is not stated, so no angle was taken from it",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned drawing of the bayonet was found. The body flanges (about 330-30, 90-150 and 210-270 deg) and the entry gaps between them (centres 60, 180, 300 deg, about 60 deg each) are scaled from the undimensioned front elevation US4181419 FIG. 1a, where two of the three flanges are partly hidden; the lens lug spans are copied from the gaps and are only an upper limit; lug radii, thickness and both mount outer diameters are still the earlier unsourced estimate [lr-2].",
      affectedFields: [
        "cameraSideFeatures.body-slot-1..3",
        "lensSideFeatures.lens-lug-1..3",
        "cameraMountOuterDiameterMm",
        "lensMountOuterDiameterMm",
        "axialStack.bayonet_lug_engagement",
      ],
      candidateValues: [],
      resolution:
        "Needs a Leitz service drawing, a Leicaflex or Leica R repair manual with the bayonet ring, or a calibrated measurement. Searched: Google Patents pages for US4181419, US3427946, US4504134, DE1772018, DE1282442, DE1220723, GB1096268; Leicaflex SL and R9 instructions; Wikipedia, apotelyt, JAPB, photoethnography. Only paid Leicaflex service manuals were located.",
    },
    {
      issue:
        "The turn to lock is stated by Leitz only as short or slight. 45 deg is scaled from one three-quarter view (Leicaflex SL instructions p. 4) and could be off by 10 deg or more; the earlier unsourced estimate was 60 deg. The two readings do not agree: in US4181419 FIG. 1a a gap centre is 60 deg from the next flange centre, so a 45 deg turn would leave each lug 15 deg short of centred behind its flange. Either the turn is nearer 60 deg, or the lugs sit off-centre when locked, or the figure's equal 60 deg division is schematic.",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg"],
      candidateValues: [45, 60],
      resolution: "Measure on a body and lens, or find a service drawing.",
    },
    {
      issue:
        "Cam, R-cam and contact-strip angles are scaled from two small lens-rear photos (R9 instructions p. 128) and clocked by the lock notch, itself placed only as 8 o'clock. Wikipedia instead rounds cam 1 to 12 o'clock and cams 2 and 3 to 6 o'clock, about 30 deg from the scaled values. No radius, arc length or cam rise is sourced, so the radii are unknown and the markers sit at a placeholder radius. The two body followers come from a patent figure of a camera the patent presents as an example only; the Leicaflex and SL / SL2 body feelers are not placed at all.",
      affectedFields: ["mechanicalCouplings", "cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: ["cam 1 at 325 or 0 deg", "cam 2 at 130 or 180 deg", "R cam at 120 or 180 deg"],
      resolution: "Needs a dimensioned Leitz drawing of the lens rear or a measured lens of each generation.",
    },
    {
      issue:
        "The ROM strip is one marker per side. The number of contacts, their pitch, pad size and radius were not found in any source that could be cited; the R9 instructions call it only a contact strip. The 3-cam MVP profile has no contacts, so contactCount stays not_applicable.",
      affectedFields: ["contacts", "coreDimensions.contactCount"],
      candidateValues: [],
      resolution:
        "Find a Leica patent or service document for the R8 lens contacts (none located), or count and measure on a ROM lens and an R8 / R9 body.",
    },
    {
      issue:
        "R-only and ROM lenses are said to have a slightly altered bayonet that keeps them off Leicaflex bodies. No source describes the alteration, so those profiles draw the base bayonet unchanged. The automatic-diaphragm lever and its body lever are documented (US4504134) but no source gives their angle, so they are not drawn.",
      affectedFields: ["lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Compare an R-only lens flange with a 3-cam one, or find the Leitz conversion instructions.",
    },
  ],
} satisfies MountSpecInput;

export default LEICA_R_MOUNT;
