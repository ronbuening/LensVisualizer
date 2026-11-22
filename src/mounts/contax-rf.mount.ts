/**
 * Contax rangefinder mount SVG specification.
 *
 * The Zeiss Ikon Contax mount (1932) is two bayonets on one axis. The inner bayonet sits in the rotating
 * focusing helicoid of the body and takes the 5 cm lenses, which have no helicoid of their own. The outer
 * bayonet is three lugs on the fixed ring around it and takes every other focal length; those lenses carry
 * their own helicoid and turn the body helicoid through a rear sleeve so the rangefinder still couples.
 *
 * Profiles: the base holds the throat, the two front rings and the registers. `contax-rf/inner-bayonet`
 * adds the three receiving slots, the spring catch and the 5 cm lens's lugs. `contax-rf/outer-bayonet`
 * adds the three body lugs and the lens hooks, and is the profile the MVP figure renders. Every body
 * carries both bayonets; the split is by which one a lens uses.
 *
 * Evidence: registers and the two bayonet diameters are published figures [crf-1, crf-3]. Mounting
 * direction, the red-dot indices, the catches and the 90 deg turn of the outer bayonet are stated in the
 * Zeiss Ikon instruction books [crf-m1, crf-m2]. The two-bayonet arrangement is in US1973213A [crf-p1],
 * which gives no dimensions. Every angle is scaled off one square-on photograph of a Kiev body, the
 * Soviet continuation of the pre-war Contax mount [crf-4], so it is `photo_scaled` and good to about
 * 3 deg. Lens-side lug widths are still the earlier stand-in [crf-2]. See openQuestions.
 */

import type { CameraSideFeature, LensSideFeature, MountProfileId, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const BASE: MountProfileId = "contax-rf/base";
const INNER: MountProfileId = "contax-rf/inner-bayonet";
const OUTER: MountProfileId = "contax-rf/outer-bayonet";

const W = ["crf-1"]; // Wikipedia register table
const STANDIN = ["crf-2"]; // earlier label-only estimate, kept only where nothing better exists
const R = ["crf-3"]; // Russian Wikipedia article (cites Sovetskoe Foto 1981 no. 4)
const P = ["crf-4"]; // Wikimedia Commons photograph of a Kiev body, camera-front view
const PR = ["crf-4", "crf-3"]; // radius scaled off the photograph against the published 49 mm
const M1 = ["crf-m1"]; // Contax II instruction book
const M = ["crf-m1", "crf-m2"]; // Contax II and IIa instruction books
const PAT = ["crf-p1"]; // US1973213A, arrangement only

/** Stand-in angular width of a lens lug or hook; no lens-rear source gives the real widths. */
const LENS_LUG_SPAN_DEG = 32;

const norm = (deg: number): number => ((deg % 360) + 360) % 360;

/** Receiving slot of the inner bayonet, in the rotating helicoid ring, drawn with focus locked at infinity. */
function innerSlot(index: number, startDeg: number, endDeg: number, centerDeg: number): CameraSideFeature {
  return {
    featureId: `body-slot-${index}`,
    featureType: "bayonet_receiving_slot",
    profileId: INNER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", P),
    startAngleDeg: v(startDeg, "photo_scaled", P),
    endAngleDeg: v(endDeg, "photo_scaled", P),
    innerRadiusMm: v(17.2, "photo_scaled", PR),
    outerRadiusMm: v(18, "secondary", R),
    depthMm: unknownV(P),
    matesWith: `lens-lug-${index}`,
    shapeNotes:
      "gap in the lip of the helicoid bore that lets a 5 cm lens's lug through; the three gaps are unequal, so the lens goes in one way only. Edges read off the Kiev photograph with the shadows lifted, good to about 3 deg. The ring turns with focusing; angles are for the infinity lock, where lenses are changed.",
  };
}

/** Lug of the 5 cm lens, stored at the angle of the slot it passes through. */
function innerLug(index: number, centerDeg: number): LensSideFeature {
  return {
    featureId: `lens-lug-${index}`,
    featureType: "bayonet_lug",
    profileId: INNER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", P),
    startAngleDeg: v(norm(centerDeg - LENS_LUG_SPAN_DEG / 2), "photo_scaled", STANDIN),
    endAngleDeg: v(norm(centerDeg + LENS_LUG_SPAN_DEG / 2), "photo_scaled", STANDIN),
    innerRadiusMm: v(17.2, "photo_scaled", PR),
    outerRadiusMm: v(18, "secondary", R),
    thicknessMm: unknownV(STANDIN),
    matesWith: `body-slot-${index}`,
    shapeNotes:
      "lug on the rear barrel of a 5 cm lens. Centre and radii are copied from the body slot it enters; the 32 deg width is the earlier stand-in, not a measurement, and the real lugs are unequal like the slots.",
  };
}

/** Fixed lug of the outer bayonet on the body. */
function outerLug(index: number, startDeg: number, endDeg: number, centerDeg: number): CameraSideFeature {
  return {
    featureId: `body-outer-lug-${index}`,
    featureType: "outer_bayonet_lug",
    profileId: OUTER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", P),
    startAngleDeg: v(startDeg, "photo_scaled", P),
    endAngleDeg: v(endDeg, "photo_scaled", P),
    innerRadiusMm: v(22.9, "photo_scaled", PR),
    outerRadiusMm: v(24.5, "secondary", R),
    depthMm: unknownV(P),
    matesWith: `lens-outer-hook-${index}`,
    shapeNotes:
      "outward lug on the fixed ring, set back behind the depth-of-field scale. Ends read off the Kiev photograph, good to about 3 deg. Outer radius is half the published 49 mm outer-bayonet diameter; the root radius is scaled off the photograph against it.",
  };
}

/** Inward hook of an outer-bayonet lens, stored at the angle of the body lug it locks behind. */
function outerHook(index: number, centerDeg: number): LensSideFeature {
  return {
    featureId: `lens-outer-hook-${index}`,
    featureType: "outer_bayonet_hook",
    profileId: OUTER,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", P),
    startAngleDeg: v(norm(centerDeg - LENS_LUG_SPAN_DEG / 2), "photo_scaled", STANDIN),
    endAngleDeg: v(norm(centerDeg + LENS_LUG_SPAN_DEG / 2), "photo_scaled", STANDIN),
    innerRadiusMm: v(22.9, "photo_scaled", PR),
    outerRadiusMm: v(24.5, "secondary", R),
    thicknessMm: unknownV(STANDIN),
    matesWith: `body-outer-lug-${index}`,
    shapeNotes:
      "inward hook inside the skirt of a lens with the outer mount. Centre and radii are copied from the body lug; the 32 deg width is the earlier stand-in, not a measurement.",
  };
}

const CONTAX_RF_MOUNT = {
  mountId: "contax-rf",
  displayLabel: "Contax RF",
  projectNote:
    "Contax rangefinder double bayonet: an inner bayonet in the body's focusing helicoid for 5 cm lenses and a fixed outer bayonet for all other focal lengths.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "hybrid",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["inner_bayonet_slots", "outer_bayonet_lugs", "rangefinder_coupling"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lens_side_lug_widths", "lug_axial_position", "helical_coupling_geometry"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: OUTER,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "Zeiss Ikon Contax I, II, III, IIa and IIIa bodies and the Kiev copies of the pre-war mount",
          adds: [
            "bore of the focusing helicoid (inner bayonet diameter)",
            "rotating helicoid ring with the distance scale",
            "fixed outer ring with the depth-of-field scale",
            "34.85 mm register at the outer bayonet seat and 31.85 mm at the inner seat",
          ],
          removes: ["electrical contacts", "SLR mirror clearance"],
          changes: [],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...W, ...R, ...P, ...PAT],
        },
        {
          profileId: INNER,
          profileType: "variant",
          appliesTo: "5 cm (2 inch) lenses, which have no helicoid and focus with the body's",
          adds: [
            "three unequal receiving slots in the helicoid bore",
            "spring catch on the helicoid ring that holds the lens's red-dot projection",
            "red-dot mounting index on the catch spring",
          ],
          removes: ["outer bayonet lugs and hooks (present on the body but not used by these lenses)"],
          changes: [
            "lens turns anti-clockwise, seen from the front, to lock; about 47 deg from the red dot to the catch on the Kiev photograph, against 90 deg for the outer bayonet",
          ],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...R, ...P, ...M, ...PAT, ...STANDIN],
        },
        {
          profileId: OUTER,
          profileType: "variant",
          appliesTo: "all lenses other than 5 cm, which carry their own focusing helicoid",
          adds: [
            "three fixed outward lugs on the outer ring",
            "three inward hooks in the lens skirt",
            "red-dot mounting index on the front plate",
            "rear sleeve of the lens that turns the body helicoid for rangefinder coupling",
          ],
          removes: ["inner receiving slots as a lens seat (the sleeve still engages them)"],
          changes: [
            "lens turns 90 deg anti-clockwise, seen from the front, to a stop; a catch on the lens then snaps in",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...R, ...P, ...M, ...PAT, ...STANDIN],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(34.85, "secondary", [...W, ...R]),
    nominalThroatDiameterMm: v(36, "secondary", R),
    effectiveClearApertureMm: v(34.4, "photo_scaled", PR),
    cameraMountOuterDiameterMm: v(49, "secondary", R),
    lensMountOuterDiameterMm: v(50, "photo_scaled", STANDIN),
    contactCount: naV(),
  },

  // Lock geometry is that of the selected outer-bayonet profile; the inner bayonet's shorter turn is
  // recorded on its profile row and in openQuestions.
  lockGeometry: {
    insertionAngleDeg: v(69, "photo_scaled", P),
    lockAngleDeg: v(339, "photo_scaled", [...P, ...M1]),
    lockRotationDeg: v(90, "official", M1),
    lockRotationDirection: dirV("counterclockwise", "official", M),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", R),
      startAngleDeg: v(0, "secondary", R),
      endAngleDeg: v(360, "secondary", R),
      innerRadiusMm: v(0, "secondary", R),
      outerRadiusMm: v(18, "secondary", R),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "bore of the body's focusing helicoid at the inner bayonet; the source gives 36 mm as the outer diameter of the inner bayonet",
    },
    {
      featureId: "body-helicoid-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", P),
      startAngleDeg: v(0, "photo_scaled", P),
      endAngleDeg: v(360, "photo_scaled", P),
      innerRadiusMm: v(18, "secondary", R),
      outerRadiusMm: v(21.6, "photo_scaled", PR),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "front face of the rotating helicoid, engraved with the distance scale; it carries the inner bayonet and turns with focusing. Outer edge scaled off the Kiev photograph.",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", P),
      startAngleDeg: v(0, "photo_scaled", P),
      endAngleDeg: v(360, "photo_scaled", P),
      innerRadiusMm: v(21.6, "photo_scaled", PR),
      outerRadiusMm: v(22.9, "photo_scaled", PR),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "fixed ring around the helicoid, engraved with the depth-of-field scale and the focusing index at 12 o'clock; the outer bayonet lugs stand out from behind it. Radii scaled off the Kiev photograph.",
    },
    innerSlot(1, 289, 0, 324.5),
    innerSlot(2, 62, 107, 84.5),
    innerSlot(3, 182, 232, 207),
    outerLug(1, 331, 27, 359),
    outerLug(2, 109, 144, 126.5),
    outerLug(3, 217, 252, 234.5),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(71, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: v(20.3, "photo_scaled", PR),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot the lens's red dot is set against before the lens is pushed in; on the Kiev photograph it sits on the catch spring. The instruction books state the red dots, not their angle.",
    },
    {
      featureId: "body-outer-index-mark",
      featureType: "index_mark",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: v(69, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: v(25.7, "photo_scaled", PR),
      depthMm: naV(),
      matesWith: "lens-outer-index-mark",
      shapeNotes:
        "red dot on the front plate beside the mount, used for lenses whose flange covers the helicoid ring. Angle and radius scaled off the Kiev photograph.",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(24.5, "photo_scaled", P),
      startAngleDeg: v(19, "photo_scaled", P),
      endAngleDeg: v(30, "photo_scaled", P),
      innerRadiusMm: v(18.7, "photo_scaled", PR),
      outerRadiusMm: v(20.3, "photo_scaled", PR),
      depthMm: unknownV(P),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "spring catch: a flat spring screwed to the helicoid ring, free end near 12 deg, over a recess from about 19 to 30 deg where the lens's projection is held. Pressing the spring frees the lens. Position scaled off the Kiev photograph.",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: INNER,
      count: 1,
      centerAngleDeg: unknownV(M),
      startAngleDeg: unknownV(M),
      endAngleDeg: unknownV(M),
      innerRadiusMm: unknownV(M),
      outerRadiusMm: unknownV(M),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear barrel of a 5 cm lens, which slides into the helicoid bore; its diameter and rear opening are not sourced, so it is drawn as a placeholder at the bore",
    },
    innerLug(1, 324.5),
    innerLug(2, 84.5),
    innerLug(3, 207),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(71, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: v(20.3, "photo_scaled", PR),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the projection of the lens barrel; stored at the body's red dot, where the lens goes in. The same projection ends up in the spring catch.",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(24.5, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: v(18.7, "photo_scaled", PR),
      outerRadiusMm: v(20.3, "photo_scaled", PR),
      thicknessMm: unknownV(P),
      matesWith: "body-lock-pin",
      shapeNotes:
        "the red-dot projection on the lens barrel that the spring catch holds; stored at the catch. Radii copied from the body recess.",
    },
    {
      featureId: "lens-outer-throat",
      featureType: "lens_throat",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: unknownV(PAT),
      startAngleDeg: unknownV(PAT),
      endAngleDeg: unknownV(PAT),
      innerRadiusMm: unknownV(PAT),
      outerRadiusMm: unknownV(PAT),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear sleeve of the lens (part 36 in the patent) that enters the helicoid bore; the patent shows it without dimensions, so it is drawn as a placeholder at the bore",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", STANDIN),
      startAngleDeg: v(0, "photo_scaled", STANDIN),
      endAngleDeg: v(360, "photo_scaled", STANDIN),
      innerRadiusMm: v(22.9, "photo_scaled", PR),
      outerRadiusMm: v(25, "photo_scaled", STANDIN),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "skirt of the lens that fits over the body's outer ring. Inner radius copied from the ring it seats on; the 50 mm outer diameter is the earlier stand-in.",
    },
    outerHook(1, 359),
    outerHook(2, 126.5),
    outerHook(3, 234.5),
    {
      featureId: "lens-outer-index-mark",
      featureType: "index_mark",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: v(69, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: unknownV(P),
      thicknessMm: naV(),
      matesWith: "body-outer-index-mark",
      shapeNotes:
        "red dot on the lens, stored at the front-plate dot it is set against; where on the barrel it sits is not sourced",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", R),
      thicknessMm: v(0, "secondary", R),
      diameterMm: v(49, "secondary", R),
    },
    {
      planeId: "inner_bayonet_seat",
      zPositionMm: v(-3, "secondary", R),
      thicknessMm: v(0, "secondary", R),
      diameterMm: v(36, "secondary", R),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", STANDIN),
      thicknessMm: v(1.8, "photo_scaled", STANDIN),
      diameterMm: v(47, "photo_scaled", STANDIN),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-34.85, "secondary", [...W, ...R]),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "rangefinder-coupling-sleeve",
      side: "both",
      profileId: OUTER,
      centerAngleDeg: unknownV(PAT),
      radiusMm: v(18, "secondary", R),
      sizeOrTravel: "rear sleeve of the lens latched to the body's rotating helicoid",
      function:
        "turning the lens's own focusing ring turns the body helicoid and with it the rangefinder cam; a cam inside the lens matches its focal length to the body's 5 cm movement",
      compatibilityNotes:
        "US1973213A shows the sleeve (36), its resilient latch (35) and the correction curve (33) without dimensions; the latch angle is not sourced, so the marker sits at 12 o'clock as a placeholder",
    },
  ],

  screwsGasketsBaffles: [],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "crf-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Contax rangefinder register",
      confidence: "medium",
    },
    {
      ref: "crf-2",
      sourceType: "secondary",
      citation: "Contax rangefinder mount visual references. Accessed 2026-06-06.",
      liveUrl: "camera-wiki / rangefinder mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "stand-in values only: 32 deg lens lug and hook width, 50 mm lens flange diameter, lug engagement plane in the axial view",
      confidence: "low",
    },
    {
      ref: "crf-3",
      sourceType: "secondary",
      citation:
        "“Байонет Contax RF,” Russian Wikipedia, revision of 2025-07-16; its dimensions cite V. Gutskin, “Kreplenie smennykh ob’ektivov,” Sovetskoe Foto, 1981, no. 4, p. 42. Accessed 2026-11-21.",
      liveUrl: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5%D1%82_Contax_RF",
      archiveUrl:
        "https://ru.wikipedia.org/w/index.php?title=%D0%91%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5%D1%82_Contax_RF&oldid=146423487",
      archiveDate: "2026-11-21",
      appliesTo:
        "34.85 mm register of the outer bayonet and 31.85 mm of the inner; 49 mm and 36 mm outer diameters of the outer and inner bayonets; three lugs on each; the inner bayonet turning with the helicoid",
      confidence: "medium",
    },
    {
      ref: "crf-4",
      sourceType: "field_photo",
      citation:
        "Runner1616, “Kiev-Contax mount.jpg,” Wikimedia Commons, 2018-12-23, CC BY-SA 4.0 (captioned “Contax pre-war rangefinder lens mount”). Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Kiev-Contax_mount.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Kiev-Contax_mount.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view, nearly square-on, of a Kiev body with no lens and focus locked at infinity; angles were read directly in the camera-front frame, with no mirroring: outer lug ends, inner slot edges, spring catch and red dots. Radii are scaled against the 49 mm outer bayonet. A Kiev stands in for a Zeiss Ikon body here.",
      confidence: "medium",
    },
    {
      ref: "crf-m1",
      sourceType: "official",
      citation:
        "Zeiss Ikon, Contax II instruction book (English), section V, “Changing the lenses,” pp. 22–24; scan in M. Butkus’s camera manual library. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/zeiss_ikon/zeiss_ikon_contax_ii/zeiss_ikon_contax_ii.htm",
      archiveUrl: "https://www.cameramanuals.org/zeiss_ikon/zeiss_ikon_contax_ii.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "5 cm lenses in the inner bayonet and all others in the outer; red dots set opposite each other; lens turned to the left to lock and to the right to release; spring catch for 5 cm lenses and a catch on the side of other lenses; outer-bayonet lenses turned through 90 deg to remove",
      confidence: "high",
    },
    {
      ref: "crf-m2",
      sourceType: "official",
      citation:
        "Zeiss Ikon, Contax IIa instruction book (English), “Changing the lenses,” pp. 28–29, figs. 36–38; scan in M. Butkus’s camera manual library. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/zeiss_ikon/zeiss_ikon_contax_iia/zeiss_ikon_contax_iia.htm",
      archiveUrl: "https://cameramanuals.org/zeiss_ikon/zeiss_ikon_contax_iia.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "post-war bodies use the same procedure: lenses changed with the mount locked at infinity, red dots opposite, lens turned to the left (anti-clockwise) until the catch snaps",
      confidence: "high",
    },
    {
      ref: "crf-p1",
      sourceType: "patent",
      citation:
        "H. Küppenbender, M. Nowicki, E. Goldberg and A. Mende, “Photographic camera with finder,” US1973213A, filed 1932-02-27 (Germany 1931-04-11), granted 1934-09-11. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US1973213A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/81/23/f8/e94f19bc0ae401/US1973213.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "arrangement only, from the description and the axial section in fig. 7: bayonet lock 40 holds the normal objective on the rotating stem 8, bayonet lock 34 holds other objectives on the camera, and latch 35 couples their inner part 36 to the stem. No dimensions, angles or front view.",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "Every angle here comes from one photograph of a Kiev body, not from a dimensioned drawing or a Zeiss Ikon body. Lug ends, slot edges, the catch and the red dots are good to about 3 deg at best.",
      affectedFields: ["cameraSideFeatures", "lockGeometry.insertionAngleDeg", "lockGeometry.lockAngleDeg"],
      candidateValues: [],
      resolution:
        "Replace with a Zeiss Ikon or Arsenal works drawing, a repair manual with a dimensioned mount, or a calibrated measurement of a Contax body. Searched without result: Zeiss Ikon patents (US1973213A has no front view; US2830513A is a later, different mount), Maizenberg's Soviet repair book, GOST 10332-63 (covers other mounts), Zeiss Historica Spring 2012.",
    },
    {
      issue:
        "Lens-side lug and hook widths are a 32 deg stand-in from the earlier label-only reference [crf-2], as are the 50 mm lens flange diameter and the lug engagement plane in the axial view. No lens-rear source was found.",
      affectedFields: ["lensSideFeatures", "coreDimensions.lensMountOuterDiameterMm", "axialStack"],
      candidateValues: [],
      resolution:
        "Measure or photograph square-on the rear of a 5 cm lens and of an outer-mount lens. Fig. 38 of the Contax IIa instruction book shows an outer-mount lens rear, but at an angle that cannot be scaled.",
    },
    {
      issue:
        "The turn that locks a 5 cm lens in the inner bayonet is not stated; the instruction books say only a slight turn. The Kiev photograph gives about 47 deg, from the red dot at 71 deg to the catch at 24.5 deg.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [47],
      resolution: "Confirm on a body, or from a drawing of the helicoid ring.",
    },
    {
      issue:
        "The catch of an outer-mount lens is on the lens and is not drawn: neither its angle nor the body feature it catches is sourced. The pin in the front plate beside the mount, near 47 deg on the Kiev photograph, is not drawn either, because no usable source states its function.",
      affectedFields: ["lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Find a repair manual or parts drawing for the Contax II or IIa front plate and an outer-mount lens.",
    },
    {
      issue:
        "The nominal throat was 44 mm; it is now the 36 mm inner bayonet. The 44 mm in general mount tables matches no opening on the photograph, where the bore scales to about 36 mm and the clear opening inside the lip to about 34.4 mm.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "coreDimensions.effectiveClearApertureMm"],
      candidateValues: [36, 44],
      resolution: "Confirm the bore and lip diameters against a works drawing or a measured body.",
    },
    {
      issue:
        "Sources disagree on the inner register. Russian Wikipedia gives 31.85 mm (3.00 mm behind the outer seat); a Japanese adapter review gives 31.75 mm.",
      affectedFields: ["axialStack"],
      candidateValues: [31.85, 31.75],
      resolution: "Confirm against a Zeiss Ikon drawing or the original Sovetskoe Foto table.",
    },
  ],
} satisfies MountSpecInput;

export default CONTAX_RF_MOUNT;
