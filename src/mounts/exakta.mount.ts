/**
 * Exakta mount SVG specification.
 *
 * Ihagee's 1936 Kine Exakta bayonet: the lens carries three outward lugs on a short rear tube, the
 * body ring carries three inward flanges, and a spring latch pivoted on the body's fixing flange
 * hooks a pin on the lens. The base profile holds that invariant inner bayonet. Variant profiles
 * overlay what differs by generation: the Kine-era fixing flange, the Varex-era double bayonet
 * (outer bayonet for long lenses), Topcon's RE bodies (skirt, stop-down lever, aperture feeler), the
 * Exakta RTL 1000 internal stop-down pin, and the Mamiya Exakta-mount bodies (declared, not drawn).
 *
 * Evidence. US2136149A (Nuechterlein / Ihagee, 1938) is the Exakta bayonet patent, but it states no
 * angle, no dimension and no lug count; it supports the arrangement and the clockwise locking twist
 * only [exa-p1]. Scalars come from JAPB [exa-2]. Every angle and most radii are scaled from JAPB's
 * photos and, for the Kine profile, from the patent's undimensioned figures, so they stay
 * `photo_scaled` (about +/-5 deg, +/-1 mm) and are listed in openQuestions.
 *
 * Angle convention (the house one): every lens-side feature is stored at the camera-front angle of the
 * body feature it mates with, so lens-lug-n shares body-slot-n (the entry gap it passes through), the
 * index marks share 0 deg, and the lens pin shares the latch hook angle. The clockwise turn that carries
 * the lugs from the gaps to behind the body flanges lives only in lockGeometry (60 deg, derived).
 */

import type { CameraSideFeature, LensSideFeature, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const J = ["exa-2"]; // JAPB text dimensions and annotated photos
const WJ = ["exa-1", "exa-2"]; // Wikipedia register table + JAPB
const P = ["exa-p1"]; // US2136149A
const PF = ["exa-p1f"]; // US2136149A Figs. 1, 3 and 5, scaled
const JP = ["exa-2", "exa-p1f"];
const JW = ["exa-2", "exa-4"]; // JAPB photo + Westin/Markerink "46" diameter

const BASE = "exakta/base";
const KINE = "exakta/kine";
const OUTER = "exakta/outer-bayonet";
const TOPCON = "exakta/topcon-re";
const RTL = "exakta/rtl-1000";
const MAMIYA = "exakta/mamiya-prismat";

/** Lug/flange engagement depth is an unsourced stand-in carried over from the first draft. */
const LUG_DEPTH_MM = 1.8;

function bodySlot(index: number, centerDeg: number): CameraSideFeature {
  return {
    featureId: `body-slot-${index}`,
    featureType: "bayonet_receiving_slot",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", JP),
    startAngleDeg: v((centerDeg + 320) % 360, "photo_scaled", JP),
    endAngleDeg: v((centerDeg + 40) % 360, "photo_scaled", JP),
    innerRadiusMm: v(16.9, "secondary", J),
    outerRadiusMm: v(19, "photo_scaled", J),
    depthMm: v(LUG_DEPTH_MM, "photo_scaled", J),
    matesWith: `lens-lug-${index}`,
    shapeNotes:
      "entry gap, about 80 deg wide, that the lens lug passes through. The three inward body flanges (each about 40 deg) sit between the gaps at about 345/105/225 deg, and the lugs lock behind them. Scaled from the JAPB Varex VX front photo and US2136149A Fig. 3, both camera-front views",
  };
}

function lensLug(index: number, centerDeg: number): LensSideFeature {
  return {
    featureId: `lens-lug-${index}`,
    featureType: "bayonet_lug",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", JP),
    startAngleDeg: v((centerDeg + 327.5) % 360, "photo_scaled", JP),
    endAngleDeg: v((centerDeg + 32.5) % 360, "photo_scaled", JP),
    innerRadiusMm: v(16.9, "photo_scaled", J),
    outerRadiusMm: v(18.75, "secondary", J),
    thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", J),
    matesWith: `body-slot-${index}`,
    shapeNotes:
      "about 65 deg lug, stored at the angle of the entry gap it passes through; once turned it sits behind a body flange (flanges at about 345/105/225 deg). Span and spacing scaled from JAPB lens-rear photos (Biotar, Oreston) and US2136149A Fig. 5, all lens-rear views converted with theta_front = (360 - theta_rear). 37.5 mm over the lugs is JAPB's stated figure",
  };
}

function outerLug(index: number, centerDeg: number): CameraSideFeature {
  return {
    featureId: `body-outer-lug-${index}`,
    featureType: "outer_bayonet_lug",
    profileId: OUTER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", J),
    startAngleDeg: v(centerDeg - 20, "photo_scaled", J),
    endAngleDeg: v(centerDeg + 20, "photo_scaled", J),
    innerRadiusMm: v(22, "photo_scaled", J),
    outerRadiusMm: v(23, "photo_scaled", JW),
    depthMm: unknownV(J),
    matesWith: `lens-outer-hook-${index}`,
    shapeNotes:
      "outward lug on the rim of the body bayonet ring; position taken from where the Telemegor's hooks sit when locked, lug span read off the outline on the JAPB Varex VX front photo (low resolution)",
  };
}

function outerHook(index: number, centerDeg: number): LensSideFeature {
  return {
    featureId: `lens-outer-hook-${index}`,
    featureType: "outer_bayonet_hook",
    profileId: OUTER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", J),
    startAngleDeg: v(centerDeg - 17, "photo_scaled", J),
    endAngleDeg: v(centerDeg + 17, "photo_scaled", J),
    innerRadiusMm: v(22, "photo_scaled", J),
    outerRadiusMm: v(23, "photo_scaled", JW),
    thicknessMm: unknownV(J),
    matesWith: `body-outer-lug-${index}`,
    shapeNotes:
      "inward hook, about 34 deg, on long lenses with the outer mount; stored at the angle of the body outer lug it grips. Angles from the JAPB photo of a 500 mm Telemegor rear (lens-rear view, mirrored and clocked by its locking pin); radii copied from the mating body lug",
  };
}

const EXAKTA_MOUNT = {
  mountId: "exakta",
  displayLabel: "Exakta",
  projectNote: "Ihagee Exakta/Exa bayonet family, with Topcon, Mamiya and Exakta RTL 1000 variants.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_latch_and_pin", "index_mark"],
      variantRequired: [
        "outer_bayonet",
        "lens_release_lever",
        "front_shutter_release_for_pod_lenses",
        "topcon_re_stop_down_lever_and_aperture_feeler",
        "rtl_1000_internal_stop_down_pin",
      ],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["dimensioned_lug_and_flange_angles", "outer_bayonet_dimensions", "lug_engagement_depth"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: OUTER,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "every Exakta-mount body and lens, 1936 to the 1970s (Ihagee, Topcon, Mamiya, Pentacon)",
          adds: [
            "three-lug inner bayonet on a 38 mm body bore",
            "spring latch hook on the body and locking pin on the lens",
            "red-dot index at 12 o'clock",
          ],
          removes: ["electrical contacts"],
          changes: [],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: ["exa-1", "exa-2", "exa-p1", "exa-m1"],
        },
        {
          profileId: KINE,
          profileType: "variant",
          appliesTo: "Kine Exakta bodies as drawn in US2136149A (1936 to about 1950), inner bayonet only",
          adds: ["narrow fixing flange", "latch lever pivot and knob as drawn in the patent"],
          removes: ["outer bayonet"],
          changes: ["all values are proportions scaled from undimensioned patent figures"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: P,
        },
        {
          profileId: OUTER,
          profileType: "variant",
          appliesTo:
            "Ihagee bodies with the double bayonet (Exakta Varex / VX onward; introduced 1951 per JAPB), with long lenses on the outer mount and pod or rocker auto-diaphragm lenses",
          adds: [
            "three outward lugs on the bayonet ring rim (outer bayonet)",
            "three inward hooks on long-lens mounts",
            "wide fixing flange with the release lever",
            "front shutter release reached by the lens's auto-diaphragm pod",
          ],
          removes: [],
          changes: ["fixing flange is wider than on the Kine Exakta"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["exa-2", "exa-4", "exa-m1"],
        },
        {
          profileId: TOPCON,
          profileType: "variant",
          appliesTo: "Topcon RE Super / Super D and later RE bodies with RE Auto-Topcor lenses (1963 onward)",
          adds: [
            "outer skirt around the mount",
            "body-to-lens aperture stop-down lever in an arcuate slot",
            "lens-to-body aperture feeler in an arcuate slot (full-aperture metering)",
          ],
          removes: ["outer bayonet lugs", "front shutter release for pod lenses"],
          changes: ["different release lever shape", "mount screws clocked differently from Ihagee bodies"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: J,
        },
        {
          profileId: RTL,
          profileType: "variant",
          appliesTo: "Exakta RTL 1000 (Pentacon, 1969 to 1973) and its inner-release lenses",
          adds: [
            "aperture stop-down pin on the lens rear, worked from inside the body",
            "flange cut-out that clears the release-lever knob of older bodies",
          ],
          removes: [],
          changes: [
            "right-hand body release; older external-release lenses use a coupling point on the camera's left side",
            "outer bayonet rim retained",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["exa-2", "exa-m2"],
        },
        {
          profileId: MAMIYA,
          profileType: "variant",
          appliesTo: "Mamiya Prismat Exakta-mount bodies (1961)",
          adds: ["body pin at the right front that works a reversed pressure diaphragm on the lens"],
          removes: [],
          changes: ["earliest bodies carried both bayonets, later ones dropped the outer one"],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "stub",
          sourceRefs: J,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44.7, "secondary", WJ),
    nominalThroatDiameterMm: v(33.8, "secondary", J),
    effectiveClearApertureMm: v(32.5, "secondary", J),
    cameraMountOuterDiameterMm: v(56, "photo_scaled", J),
    lensMountOuterDiameterMm: v(47, "photo_scaled", J),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", ["exa-m1", "exa-2"]),
    lockAngleDeg: v(60, "photo_scaled", JP),
    lockRotationDeg: v(60, "photo_scaled", JP),
    lockRotationDirection: dirV("clockwise", "patent", ["exa-p1", "exa-m1"]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", J),
      startAngleDeg: v(0, "secondary", J),
      endAngleDeg: v(360, "secondary", J),
      innerRadiusMm: v(0, "secondary", J),
      outerRadiusMm: v(16.9, "secondary", J),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "about 33.8 mm clear opening inside the three body flanges (JAPB's throat figure)",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: v(0, "photo_scaled", J),
      endAngleDeg: v(360, "photo_scaled", J),
      innerRadiusMm: v(16.9, "secondary", J),
      outerRadiusMm: v(19, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "annulus holding the three inward flanges, out to the body bore. The 38 mm bore is scaled from the JAPB Varex VX front photo and must pass the 37.5 mm lug circle JAPB states; no source read here gives it as a dimension",
    },
    bodySlot(1, 45),
    bodySlot(2, 165),
    bodySlot(3, 285),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: unknownV(J),
      endAngleDeg: unknownV(J),
      innerRadiusMm: unknownV(J),
      outerRadiusMm: v(27, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red aligning dot at 12 o'clock on the fixing flange (JAPB Varex VX front photo); the VX 1000 manual names it but gives no position",
    },
    {
      featureId: "body-lock-latch",
      featureType: "lock_receiver",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(70, "photo_scaled", JP),
      startAngleDeg: unknownV(JP),
      endAngleDeg: unknownV(JP),
      innerRadiusMm: unknownV(JP),
      outerRadiusMm: v(22.8, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "lens-lock-pin",
      shapeNotes:
        "hooked end of the spring latch, on the right of the mount seen from the front. US2136149A describes the latch, its pivot on the fixing flange and the knob, and Figs. 1 and 3 (camera-front views) put it on this side; the angle is scaled from the JAPB Varex VX photo (69 deg), with the patent figure reading about 81 deg and the Topcon RE Super photo 70 deg",
    },
    {
      featureId: "body-kine-fixing-flange",
      featureType: "mount_ring",
      profileId: KINE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", PF),
      startAngleDeg: v(0, "photo_scaled", PF),
      endAngleDeg: v(360, "photo_scaled", PF),
      innerRadiusMm: v(19, "photo_scaled", J),
      outerRadiusMm: v(24.2, "photo_scaled", PF),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "attaching flange 3 of US2136149A Fig. 3, scaled as flange/bore = 1.275 times the 38 mm bore; the patent gives no dimension, so this is a proportion off an undimensioned drawing",
    },
    {
      featureId: "body-fixing-flange",
      featureType: "mount_ring",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: v(0, "photo_scaled", J),
      endAngleDeg: v(360, "photo_scaled", J),
      innerRadiusMm: v(19, "photo_scaled", J),
      outerRadiusMm: v(28, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "bayonet ring and wide fixing flange of the Varex VX, about 56 mm across, scaled from the JAPB front photo against the 38 mm bore",
    },
    outerLug(1, 40),
    outerLug(2, 160),
    outerLug(3, 280),
    {
      featureId: "body-topcon-mount-plate",
      featureType: "mount_ring",
      profileId: TOPCON,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: v(0, "photo_scaled", J),
      endAngleDeg: v(360, "photo_scaled", J),
      innerRadiusMm: v(19, "photo_scaled", J),
      outerRadiusMm: v(29.9, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "flat mount plate inside the skirt, scaled from the JAPB Topcon RE Super front photo",
    },
    {
      featureId: "body-topcon-skirt",
      featureType: "mount_ring",
      profileId: TOPCON,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: v(0, "photo_scaled", J),
      endAngleDeg: v(360, "photo_scaled", J),
      innerRadiusMm: v(29.9, "photo_scaled", J),
      outerRadiusMm: v(30.9, "photo_scaled", J),
      depthMm: unknownV(J),
      matesWith: "",
      shapeNotes:
        "raised outer skirt that shields the levers; drawn as a full ring, but the photo shows it open from about 88 to 122 deg where the release lever passes",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", J),
      startAngleDeg: v(0, "secondary", J),
      endAngleDeg: v(360, "secondary", J),
      innerRadiusMm: v(0, "secondary", J),
      outerRadiusMm: v(16.25, "secondary", J),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "32.5 mm inside diameter of the lens bayonet tube (JAPB)",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: v(0, "photo_scaled", J),
      endAngleDeg: v(360, "photo_scaled", J),
      innerRadiusMm: v(16.25, "secondary", J),
      outerRadiusMm: v(23.5, "photo_scaled", J),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "bayonet tube and seating shoulder of one sample lens (JAPB Biotar 58 mm rear photo, scaled against the 37.5 mm lug circle); the shoulder diameter varies from lens to lens",
    },
    lensLug(1, 45),
    lensLug(2, 165),
    lensLug(3, 285),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", ["exa-2", "exa-m1"]),
      startAngleDeg: unknownV(J),
      endAngleDeg: unknownV(J),
      innerRadiusMm: unknownV(J),
      outerRadiusMm: v(24, "photo_scaled", J),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the lens, stored at the body dot's angle: the VX 1000 manual says the two dots line up for insertion. Where it sits on the lens relative to the lugs and pin is not shown in any photo read here",
    },
    {
      featureId: "lens-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(70, "photo_scaled", JP),
      startAngleDeg: unknownV(JP),
      endAngleDeg: unknownV(JP),
      innerRadiusMm: unknownV(JP),
      outerRadiusMm: v(21.2, "photo_scaled", J),
      thicknessMm: unknownV(J),
      matesWith: "body-lock-latch",
      shapeNotes:
        "pin on the lens's rear ring, parallel to the axis (pin 16 of US2136149A), stored at the latch hook angle it locks into. Radius scaled from the JAPB Biotar rear photo; the body photo puts the hook at 22.8 mm and the patent figure at 21.8 mm, so the true radius is known to about 1 mm",
    },
    outerHook(1, 40),
    outerHook(2, 160),
    outerHook(3, 280),
  ],

  axialStack: makeStandardAxialStack({
    refs: WJ,
    flangeFocalDistanceMm: 44.7,
    mountOuterDiameterMm: 56,
    lugEngagementDiameterMm: 37.5,
    sensorFilmDiameterMm: 43.3,
    featureStatus: "photo_scaled",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "kine-release-lever-pivot",
      side: "body",
      profileId: KINE,
      centerAngleDeg: v(110, "photo_scaled", PF),
      radiusMm: v(22, "photo_scaled", PF),
      sizeOrTravel: "pivot screw 8 of the latch",
      function: "pivot of the spring-pressed locking latch on the fixing flange",
      compatibilityNotes:
        "scaled off US2136149A Fig. 3 (camera-front view, undimensioned); the same figure reads the hook about 12 deg clockwise of the Varex photo, so treat the angle as arrangement only",
    },
    {
      featureId: "kine-release-lever-knob",
      side: "body",
      profileId: KINE,
      centerAngleDeg: v(128, "photo_scaled", PF),
      radiusMm: v(29.7, "photo_scaled", PF),
      sizeOrTravel: "knob 11; pressed toward the ring to swing the hook outward",
      function: "releases the lens pin from the latch hook",
      compatibilityNotes: "scaled off US2136149A Fig. 3 (camera-front view, undimensioned)",
    },
    {
      featureId: "lens-release-lever-pivot",
      side: "body",
      profileId: OUTER,
      centerAngleDeg: v(88, "photo_scaled", J),
      radiusMm: v(25, "photo_scaled", J),
      sizeOrTravel: "pivot screw of the spring-loaded release lever",
      function: "pivot of the lens release lever on the fixing flange",
      compatibilityNotes: "JAPB Varex VX front photo",
    },
    {
      featureId: "lens-release-lever-knob",
      side: "body",
      profileId: OUTER,
      centerAngleDeg: v(110, "photo_scaled", J),
      radiusMm: v(32.2, "photo_scaled", J),
      sizeOrTravel: "knob at the lever's free end, beyond the flange rim; pressed toward the lens to release",
      function: "releases the lens pin from the latch hook",
      compatibilityNotes:
        "wide-flanged lenses need a cut-out here (JAPB shows one on a Trioplan-N and on RTL 1000 lenses); RE Auto-Topcor lenses may foul the lever on some Exakta bodies",
    },
    {
      featureId: "body-front-shutter-release",
      side: "body",
      profileId: OUTER,
      centerAngleDeg: v(52, "photo_scaled", J),
      radiusMm: v(40, "photo_scaled", J),
      sizeOrTravel: "front-mounted shutter release button",
      function: "pressed through the lens's auto-diaphragm pod or rocker, which stops the lens down first",
      compatibilityNotes: "absent on Topcon RE and Mamiya bodies; the RTL 1000 keeps a coupling point on this side",
    },
    {
      featureId: "aperture-pod-pass-through",
      side: "lens",
      profileId: OUTER,
      centerAngleDeg: v(52, "photo_scaled", J),
      radiusMm: v(40, "photo_scaled", J),
      sizeOrTravel: "external pod or rocker arm over the body's shutter release",
      function: "two-stage pass-through: stops the diaphragm down, then trips the body release",
      compatibilityNotes:
        "position copied from the body release it must sit over; only on auto-diaphragm lenses (pod from about 1956). The pod collides with the Topcon skirt",
    },
    {
      featureId: "topcon-release-lever-pivot",
      side: "body",
      profileId: TOPCON,
      centerAngleDeg: v(89, "photo_scaled", J),
      radiusMm: v(24, "photo_scaled", J),
      sizeOrTravel: "pivot screw of the release lever",
      function: "pivot of the lens release lever",
      compatibilityNotes: "JAPB Topcon RE Super front photo",
    },
    {
      featureId: "topcon-release-lever-tail",
      side: "body",
      profileId: TOPCON,
      centerAngleDeg: v(110, "photo_scaled", J),
      radiusMm: v(38, "photo_scaled", J),
      sizeOrTravel: "long lever tail reaching past the skirt",
      function: "releases the lens pin from the latch hook",
      compatibilityNotes: "JAPB Topcon RE Super front photo",
    },
    {
      featureId: "topcon-stop-down-lever",
      side: "both",
      profileId: TOPCON,
      centerAngleDeg: v(284, "photo_scaled", J),
      radiusMm: v(22.7, "photo_scaled", J),
      sizeOrTravel: "arcuate slot from about 269 to 299 deg, about 1.5 mm wide",
      function: "body-to-lens aperture stop-down lever",
      compatibilityNotes:
        "from the JAPB RE Super front photo; the oblique RE Auto-Topcor rear photo puts the lens-side lever at about 257 to 283 deg",
    },
    {
      featureId: "topcon-aperture-feeler",
      side: "both",
      profileId: TOPCON,
      centerAngleDeg: v(2, "photo_scaled", J),
      radiusMm: v(27.6, "photo_scaled", J),
      sizeOrTravel: "arcuate slot from about 331 to 34 deg, about 1.4 mm wide",
      function: "lens-to-body feeler that reads the aperture ring for full-aperture metering",
      compatibilityNotes:
        "from the JAPB RE Super front photo; the RE Auto-Topcor rear photo gives the lens slot as about 329 to 26 deg. Some RE bodies place the skirt inside the feeler",
    },
    {
      featureId: "rtl-internal-stop-down-pin",
      side: "lens",
      profileId: RTL,
      centerAngleDeg: v(180, "photo_scaled", J),
      radiusMm: v(23.2, "photo_scaled", J),
      sizeOrTravel: "spring pin on the lens rear face",
      function: "internally operated pressure diaphragm, worked by the RTL 1000 body",
      compatibilityNotes:
        "from the JAPB Oreston rear photo (lens-rear view, mirrored and clocked by its locking pin). The body-side plunger was not seen in any source read; JAPB has photographic evidence of this pin on four lenses only",
    },
    {
      featureId: "rtl-release-lever-cutout",
      side: "lens",
      profileId: RTL,
      centerAngleDeg: v(135, "photo_scaled", J),
      radiusMm: v(28, "photo_scaled", J),
      sizeOrTravel: "flange cut-out from about 93 to 178 deg, from about 24 mm radius to the rim",
      function: "clears the release-lever knob when the lens goes on an older Exakta body",
      compatibilityNotes: "from the JAPB Oreston rear photo",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(J, 4, 50, 3, [47, 128, 233, 312])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "exa-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "44.7 mm Exakta register",
      confidence: "medium",
    },
    {
      ref: "exa-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Exakta,” JAPB (japb.net). Accessed 2026-06-06; photos re-read 2026-11-21.",
      liveUrl: "https://japb.net/theory/lens-mounts/exakta/",
      archiveUrl: "https://japb.net/theory/lens-mounts/exakta/",
      archiveDate: "2026-06-06",
      appliesTo:
        "Stated: 44.7 mm register, about 33.8 mm throat, 32.5 mm inside diameter, 37.5 mm over the lugs, equally spaced three-lug bayonet, variant descriptions. Photo-scaled: Varex VX and Topcon RE Super bodies (camera-front views, used as shot) and Biotar, Telemegor, Oreston and RE Auto-Topcor rears (lens-rear views, mirrored with theta_front = 360 - theta_rear and clocked by the lens pin at the latch hook)",
      confidence: "medium",
    },
    {
      ref: "exa-p1",
      sourceType: "patent",
      citation:
        "K. Nuechterlein, “Lens mount,” US2136149A, assigned to Ihagee Kamerawerk Steenbergen & Co., filed 1937-06-04, granted 1938-11-08.",
      liveUrl: "https://patents.google.com/patent/US2136149A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/db/83/3f/b6a3c99dd0fd5b/US2136149.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Text: spaced inward flanges on the body ring whose number may vary, complementary lens flanges, spring latch pivoted on the fixing flange, pin on the lens ring, stop screw, removal by an anti-clockwise twist (p. 1 col. 2; p. 2 col. 1 lines 1-60). No angle, dimension or lug count is stated. The figures are cited separately as [exa-p1f]",
      confidence: "high",
    },
    {
      ref: "exa-p1f",
      sourceType: "patent_figure",
      citation:
        "US2136149A, Figs. 1, 3 and 5 (drawing sheet). Undimensioned drawings, scaled for this spec. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US2136149A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/db/83/3f/b6a3c99dd0fd5b/US2136149.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Figs. 1 and 3 are camera-front views (used unmirrored, sheet turned so the captions read upright); Fig. 5 is a lens-rear view (mirrored with theta_front = 360 - theta_rear). No scale or dimension is stated, so readings are proportions off the drawings and stay photo-scaled: flange, gap and lug angles as a cross-check on the JAPB photos, and the Kine-era fixing flange, latch pivot and knob",
      confidence: "low",
    },
    {
      ref: "exa-m1",
      sourceType: "official",
      citation: "Ihagee Kamerawerk, “EXAKTA VX 1000” instruction manual, scan in M. Butkus's camera manual library.",
      liveUrl: "https://www.butkus.org/chinon/exakta/exakta_vx1000/exakta_vx1000.htm",
      archiveUrl: "https://www.butkus.org/chinon/exakta/exakta_vx1000/exakta_vx1000.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Section “Changing the lens”: press the locking lever toward the lens, turn left until the red dots line up, insert with dots aligned and turn right until it locks; parts list names the red aligning dots and the lens locking lever. Directions are given as seen from the camera front",
      confidence: "high",
    },
    {
      ref: "exa-m2",
      sourceType: "official",
      citation: "“EXAKTA RTL 1000 with Internal Metering” brochure, scan in M. Butkus's camera manual library.",
      liveUrl: "https://www.butkus.org/chinon/exakta/exakta_rtl1000/exakta_rtl_1000.htm",
      archiveUrl: "https://www.cameramanuals.org/exakta/exakta_rtl1000-02.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Original Exakta quick-change bayonet kept; internally operated pressure diaphragm; right-hand release with a coupling point on the camera's left side for external-release lenses; long telephotos fit the outer bayonet rim. No dimensions",
      confidence: "medium",
    },
    {
      ref: "exa-4",
      sourceType: "secondary",
      citation:
        "S. H. Westin, “Camera Mounts Sorted by Register,” data from W.-J. Markerink, last modified 2016-02-11.",
      liveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-by-register.html",
      archiveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-alphabetical.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "Row “Exakta/Topcon RE, bayonet, 44.7, 46”. The diameter column is not defined on the page; 46 mm agrees with the photo-scaled circle over the outer bayonet lugs and is cited only as support for it",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned drawing of the bayonet was found. US2136149A states no angle, dimension or lug count, so every lug, slot, flange, latch and index angle is scaled from JAPB photos (about +/-5 deg) and rounded to 5 deg on a 120 deg pitch. The 38 mm bore and the 60 deg lock rotation (slot centre to flange centre; the lens pin reads 60 to 70 deg from the red dot to the hook) are derived from those readings, not stated anywhere read. Lens-side features are stored at the angle of their mating body feature, so the lens red dot and lugs are not drawn where they sit on a locked lens.",
      affectedFields: [
        "lockGeometry.lockAngleDeg",
        "lockGeometry.lockRotationDeg",
        "body-slot-1",
        "body-slot-2",
        "body-slot-3",
        "lens-lug-1",
        "lens-lug-2",
        "lens-lug-3",
        "body-mount-ring",
        "body-lock-latch",
        "lens-lock-pin",
        "body-index-mark",
        "lens-index-mark",
      ],
      candidateValues: ["flange centres 345/105/225 deg (photos)", "flange centres 4/125/242 deg (patent Fig. 3)"],
      resolution:
        "Find an Ihagee or Pentacon workshop drawing or repair manual (Upton's Exakta repair book and the Pentacon Exa repair manual were named in forums but not obtainable), or measure a body and lens.",
    },
    {
      issue:
        "Lug and flange thickness (1.8 mm) and the axial position of the lug engagement plane are unsourced stand-ins from the first draft. US2136149A Figs. 2 and 4 show the body flanges inset toward the film side of the ring, with no dimension.",
      affectedFields: ["axialStack.bayonet_lug_engagement", "body-slot-1.depthMm", "lens-lug-1.thicknessMm"],
      candidateValues: [],
      resolution: "Measure a lens bayonet tube and body ring, or find a sectioned service drawing.",
    },
    {
      issue:
        "Outer bayonet: lug positions come from the hooks on one Telemegor rear photo, lug spans from a low-resolution outline, and the 46 mm lug circle from photo scaling supported only by an undefined “46” in the Westin/Markerink table. Introduction year conflicts between sources (1951 per JAPB; 1953 per Wrotniak, not cited).",
      affectedFields: [
        "body-outer-lug-1",
        "body-outer-lug-2",
        "body-outer-lug-3",
        "lens-outer-hook-1",
        "body-fixing-flange",
      ],
      candidateValues: [46],
      resolution:
        "No Ihagee outer-bayonet patent was found by search; needs an Espacenet/DEPATISnet assignee search or a measured body.",
    },
    {
      issue:
        "Mount screws, fixing-flange diameters, release-lever pivot and knob, and the front shutter release are photo-scaled from one Varex VX body. Topcon RE bodies clock their four screws differently (about 55/125/235/305 deg on about 53 mm) and screws are not profile-scoped, so only the Ihagee pattern is drawn. The Kine profile is scaled from undimensioned patent figures.",
      affectedFields: [
        "screwsGasketsBaffles",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "mechanicalCouplings",
      ],
      candidateValues: [],
      resolution: "Measure sample bodies of each generation.",
    },
    {
      issue:
        "Topcon RE: no Tokyo Kogaku patent showing the production mount was found (US3163097A describes a coaxial resistor ring coupled to the lens preset ring, not the RE Super's lever and feeler slots), so the skirt, stop-down lever and aperture feeler are photo-scaled. The earlier Topcon R / Auto-Topcor pod placement is not modeled.",
      affectedFields: [
        "topcon-stop-down-lever",
        "topcon-aperture-feeler",
        "body-topcon-skirt",
        "body-topcon-mount-plate",
      ],
      candidateValues: [],
      resolution: "Find the RE Super repair manual or a Tokyo Kogaku mount patent (J-PlatPat assignee search).",
    },
    {
      issue:
        "Exakta RTL 1000: the body-side internal release plunger and the RTL body's flange and outer-bayonet geometry were not seen; only the lens-side pin and cut-out are placed. Mamiya Prismat bodies are declared as a profile with no drawn geometry because no photo or drawing of their body pin was found.",
      affectedFields: ["rtl-internal-stop-down-pin", "rtl-release-lever-cutout", "exakta/mamiya-prismat"],
      candidateValues: [],
      resolution: "Find Pentacon RTL 1000 service documents and a Mamiya Prismat mount photo or patent.",
    },
  ],
} satisfies MountSpecInput;

export default EXAKTA_MOUNT;
