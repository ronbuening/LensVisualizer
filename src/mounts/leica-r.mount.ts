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
 * What is only scaled from figures: the bayonet flange edges, the lock pin, the ring diameter and the six
 * ring screws come from a straight-on photograph of a Leicaflex SL body mount [lr-ph1]; the cam, R-cam and
 * contact-strip angles from the lens-rear photographs on p. 128 of the R9 instructions, mirrored into the
 * camera-front frame and clocked by the lock notch. US4181419 FIG. 1a draws the same three flanges at
 * top, lower right and lower left. No source found gives a lug thickness, a cam rise or the number of
 * ROM contacts; those values stay unknown or on the earlier unsourced estimate [lr-2] and are listed in
 * openQuestions.
 */

import type { ContactFeature, MechanicalCoupling, MountProfileId, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeStandardAxialStack } from "./mountAuthoringShared.js";

const W = ["lr-1"]; // Wikipedia, flange focal distance table
const EST = ["lr-2"]; // earlier unsourced visual estimate (label only)
const M9 = ["lr-m1"]; // Leica R9 instructions
const MSL = ["lr-m2"]; // Leicaflex SL instructions
const P1 = ["lr-p1f"]; // US4181419 FIG. 1a, scaled
const PH = ["lr-ph1"]; // Leicaflex SL body mount photograph, scaled
const LOCK = ["lr-3", "lr-m1", "lr-m2"]; // Wikipedia "Leica R bayonet" clock position + both manuals
const LOCK_PH = ["lr-ph1", "lr-3"]; // lock pin read off the body photograph; Wikipedia gives 8 o'clock
const CAM = ["lr-m1", "lr-3"]; // R9 instructions photo, cams identified per Wikipedia

const BASE = "leica-r/base";
const ONE_CAM = "leica-r/1-cam";
const TWO_CAM = "leica-r/2-cam";
const THREE_CAM = "leica-r/3-cam";
const R_ONLY = "leica-r/r-only";
const ROM = "leica-r/rom";

const GAP_NOTE =
  "solid body flange that retains a lens lug (bayonet segment 8 of US4181419); edges read off a straight-on photograph of a Leicaflex SL body mount, corrected for its 26 deg tilt with the six ring screws, good to about 3 deg. The three flanges differ in length and the open entry gaps between them are each about 73 deg wide (42 to 114, 158 to 232.5 and 273.5 to 347 deg)";
const LUG_NOTE =
  "lens bayonet segment 9, drawn where it sits on a mounted lens, behind the body flange at the same angle; US4181419 draws it only in perspective (FIG. 1b), so the drawn arc is the flange it engages and the lug's own length is not sourced";
const PHOTO_NOTE =
  "angle scaled from the lens-rear photo on p. 128 of the R9 instructions, mirrored to the camera-front frame and clocked by the lock notch (253.5 deg, from the body photograph); good to about 15 deg";

/** First Leicaflex cam: sloped, on the aperture ring, read by the Leicaflex Standard meter coupling. */
function cam1(profileId: MountProfileId, slug: string): MechanicalCoupling {
  return {
    featureId: `leicaflex-cam-1-${slug}`,
    side: "lens",
    profileId,
    centerAngleDeg: v(338.5, "photo_scaled", CAM),
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
    centerAngleDeg: v(143.5, "photo_scaled", CAM),
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
      centerAngleDeg: v(133.5, "photo_scaled", CAM),
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
    centerAngleDeg: v(358.5, "photo_scaled", CAM),
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
          sourceRefs: ["lr-1", "lr-2", "lr-3", "lr-m1", "lr-m2", "lr-ph1", "lr-p1", "lr-p3"],
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
    cameraMountOuterDiameterMm: v(59, "photo_scaled", PH),
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
      outerRadiusMm: v(29.5, "photo_scaled", PH),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "visible body mount ring; outer diameter scaled from the Leicaflex SL body photograph by taking the ring bore as the 49 mm throat (about 59 mm, good to 1 mm)",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(14.5, "photo_scaled", PH),
      startAngleDeg: v(347, "photo_scaled", PH),
      endAngleDeg: v(42, "photo_scaled", PH),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-1",
      shapeNotes: `${GAP_NOTE}; the top flange, the longest (about 55 deg). Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(136, "photo_scaled", PH),
      startAngleDeg: v(114, "photo_scaled", PH),
      endAngleDeg: v(158, "photo_scaled", PH),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-2",
      shapeNotes: `${GAP_NOTE}; the lower-right flange (about 44 deg). Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(253, "photo_scaled", PH),
      startAngleDeg: v(232.5, "photo_scaled", PH),
      endAngleDeg: v(273.5, "photo_scaled", PH),
      innerRadiusMm: v(24.5, "photo_scaled", EST),
      outerRadiusMm: v(27, "photo_scaled", EST),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lug-3",
      shapeNotes: `${GAP_NOTE}; the left flange (about 41 deg), beside the lock pin. Radii and depth are unsourced estimates`,
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(253.5, "photo_scaled", LOCK_PH),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(29.5, "photo_scaled", EST),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "the body has no separate index: the lens's red dot is set against the red bayonet lock (Leicaflex SL) or the bayonet release button (R9). Stored at the lock pin's angle; the red release lever of the Leicaflex SL sits just outside the ring at about 256 deg in the body photograph",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(253.5, "photo_scaled", LOCK_PH),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(28, "photo_scaled", PH),
      depthMm: v(1.8, "photo_scaled", EST),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "bayonet locking pin in the face of the mount ring, on the screw circle, at 253.5 deg in the Leicaflex SL body photograph (Wikipedia rounds it to 8 o'clock); the release control sits at about 243 deg in the R9 front view and about 245 deg in the Leicaflex SL three-quarter view. Radius scaled from the photograph against the 49 mm throat; depth is an unsourced estimate",
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
      centerAngleDeg: v(14.5, "photo_scaled", PH),
      startAngleDeg: v(347, "photo_scaled", PH),
      endAngleDeg: v(42, "photo_scaled", PH),
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
      centerAngleDeg: v(136, "photo_scaled", PH),
      startAngleDeg: v(114, "photo_scaled", PH),
      endAngleDeg: v(158, "photo_scaled", PH),
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
      centerAngleDeg: v(253, "photo_scaled", PH),
      startAngleDeg: v(232.5, "photo_scaled", PH),
      endAngleDeg: v(273.5, "photo_scaled", PH),
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
      centerAngleDeg: v(253.5, "photo_scaled", LOCK_PH),
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
      centerAngleDeg: v(253.5, "photo_scaled", LOCK_PH),
      startAngleDeg: unknownV(LOCK),
      endAngleDeg: unknownV(LOCK),
      innerRadiusMm: unknownV(LOCK),
      outerRadiusMm: v(28, "photo_scaled", PH),
      thicknessMm: v(1.8, "photo_scaled", EST),
      matesWith: "body-lock-pin",
      shapeNotes:
        "locking slot cut into the rim of the lens flange, visible in both lens-rear photos on p. 128 of the R9 instructions; stored at the angle and radius of the body pin it takes (Wikipedia rounds it to 4 o'clock seen from the lens rear). Thickness is an unsourced estimate",
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
      count: v(6, "photo_scaled", PH),
      pcdMm: v(56, "photo_scaled", PH),
      diameterMm: v(2, "photo_scaled", EST),
      centerAnglesDeg: degListV([0, 60, 120, 180, 240, 300], "photo_scaled", PH),
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
        "camera-front elevation, used with no mirroring. No dimension or scale is stated, so readings stay photo-scaled: the two R-cam followers. It also sketches three body bayonet segments at the top, lower right and lower left, which the body photograph [lr-ph1] confirms and now supplies",
      confidence: "low",
    },
    {
      ref: "lr-ph1",
      sourceType: "field_photo",
      citation:
        "HBR, “R-Mount of Leicaflex SL.JPG” (R-Bajonett einer Leicaflex SL), Wikimedia Commons, 2009-06-28. Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:R-Mount_of_Leicaflex_SL.JPG",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/R-Mount_of_Leicaflex_SL.JPG",
      archiveDate: "2026-11-21",
      appliesTo:
        "photograph of the body mount from the camera front, so angles are used unmirrored. The camera is tilted about 26 deg about the horizontal; the six ring screws (60 deg apart) give the centre and the correction, and the lower-left screw then reads 239 deg against a nominal 240. Flange edges, lock pin and screw positions are read off the image; lengths are scaled by taking the ring bore as the 49 mm throat. One body of one model, undimensioned, so every reading stays photo-scaled (about 3 deg, 1 mm)",
      confidence: "medium",
    },
    {
      ref: "lr-p4",
      sourceType: "patent",
      citation:
        "P. Loseries, Ernst Leitz GmbH, DE1810353 (filed 1968-11-22; B2 1977, C3 1977), “Bajonettverriegelung”. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/DE1810353C3/en",
      archiveUrl: "https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=DE000001810353C3",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: the body bayonet ring is a stamped part held under a threaded retaining ring whose collar centres the lens, and a spring bolt behind one lens bayonet tab locks the lens. Figs. 2 to 4 are schematic and draw the ring openings at the top, right and left, the reverse of the body photograph [lr-ph1]; no dimension or angle is stated and no value in this spec cites it",
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
        "No dimensioned drawing of the bayonet was found. The body flanges (347 to 42, 114 to 158 and 232.5 to 273.5 deg) are read off one straight-on photograph of a Leicaflex SL body mount, corrected for tilt with the six ring screws and good to about 3 deg; the ring diameter, screw circle and lock pin radius are scaled from the same photograph by taking the ring bore as the 49 mm throat. US4181419 FIG. 1a draws the same three flanges in a small sketch. DE1810353 (Leitz, 1968) Figs. 2 to 4 draw the stamped body bayonet ring with its openings at the top, right and left, the reverse of the photograph, so that schematic is not used. The lens lugs are drawn as the flange arcs they sit behind; their own lengths, every flange and lug radius, the lens flange diameter and all thicknesses are unsourced.",
      affectedFields: [
        "cameraSideFeatures.body-slot-1..3",
        "lensSideFeatures.lens-lug-1..3",
        "cameraMountOuterDiameterMm",
        "lensMountOuterDiameterMm",
        "axialStack.bayonet_lug_engagement",
      ],
      candidateValues: [],
      resolution:
        "Needs a Leitz service drawing, a Leicaflex or Leica R repair manual with the bayonet ring, or a calibrated measurement of a body and a lens rear. Searched: Google Patents (Leitz, bayonet, 1960 to 1985, 82 results) and the pages for US4181419, US3427946, US4504134, DE1810353, DE1772018, DE1282442, DE1220723, GB1096268; DEPATISnet for the DE1810353 figures; Wikimedia Commons; Leicaflex SL and R9 instructions; Wikipedia, apotelyt, JAPB, photoethnography. Only paid Leicaflex service manuals were located.",
    },
    {
      issue:
        "The turn to lock is stated by Leitz only as short or slight. 45 deg is scaled from one three-quarter view (Leicaflex SL instructions p. 4) and could be off by 10 deg or more; the earlier unsourced estimate was 60 deg. In the body photograph each entry gap is about 73 deg wide and a gap centre is 58 to 64 deg from the centre of the next flange clockwise, so a lug that starts centred in its gap and ends centred behind its flange would turn about 60 deg. Lug lengths are not sourced, so the photograph does not settle it.",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg"],
      candidateValues: [45, 60],
      resolution: "Measure on a body and lens, or find a service drawing.",
    },
    {
      issue:
        "Cam, R-cam and contact-strip angles are scaled from two small lens-rear photos (R9 instructions p. 128) and clocked by the lock notch, placed at the 253.5 deg of the body pin in the Leicaflex SL photograph. Wikipedia instead rounds cam 1 to 12 o'clock and cams 2 and 3 to 6 o'clock, 20 to 45 deg from the scaled values. No radius, arc length or cam rise is sourced, so the radii are unknown and the markers sit at a placeholder radius. The two body followers come from a patent figure of a camera the patent presents as an example only; the Leicaflex and SL / SL2 body feelers are not placed at all.",
      affectedFields: ["mechanicalCouplings", "cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: ["cam 1 at 338.5 or 0 deg", "cam 2 at 143.5 or 180 deg", "R cam at 133.5 or 180 deg"],
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
