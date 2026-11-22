/**
 * Nikon S rangefinder mount SVG specification.
 *
 * The Nikon S mount (Nikon I of 1948 through the SP, S3 and S4) follows the Contax double bayonet: an
 * inner bayonet in the body's rotating focusing helicoid for 5 cm lenses, and three fixed outer lugs for
 * wide-angle and telephoto lenses, which carry their own helicoid. What Nikon changed is the focusing
 * movement, which is matched to a 5 cm lens of slightly shorter focal length than the Contax one, so
 * long and fast lenses from one system do not focus correctly on the other. That difference is in the
 * helicoid, not in anything these figures draw.
 *
 * Profiles: the base holds the throat, the two front rings, the red-dot index and the register.
 * `nikon-s/inner-bayonet` adds the receiving slots, the spring catch and the 5 cm lens's lugs.
 * `nikon-s/outer-bayonet` adds the body lugs and the lens hooks, and is the profile the MVP figure
 * renders. Every body carries both bayonets; the split is by which one a lens uses.
 *
 * Evidence: nothing here is copied from the Contax specification. The register and the bayonet
 * diameters are Wikipedia figures [ns-1, ns-3, ns-4]. Mounting direction, red dots and catches are
 * stated in Nippon Kogaku's Nikon SP instruction book [ns-m1]. Every angle is scaled off one photograph
 * of a Nikon SP body [ns-5], so it is `photo_scaled`; the outer lugs are good to about 3 deg and the
 * inner slot edges, which sit in shadow, to about 5 deg. Lens-side lug widths are still the earlier
 * stand-in [ns-2]. See openQuestions.
 */

import type { CameraSideFeature, LensSideFeature, MountProfileId, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const BASE: MountProfileId = "nikon-s/base";
const INNER: MountProfileId = "nikon-s/inner-bayonet";
const OUTER: MountProfileId = "nikon-s/outer-bayonet";

const W = ["ns-1"]; // Wikipedia register table
const STANDIN = ["ns-2"]; // earlier label-only estimate, kept only where nothing better exists
const NW = ["ns-3"]; // Wikipedia, Nikon S-mount infobox
const LM = ["ns-4"]; // Wikipedia, Lens mount comparison table
const P = ["ns-5"]; // Wikimedia Commons photograph of a Nikon SP body, camera-front view
const PN = ["ns-5", "ns-3"]; // radius scaled off the photograph against the published 49 mm
const M = ["ns-m1"]; // Nikon SP instruction book
const RW = ["ns-6"]; // Russian Wikipedia on the Contax mount and its Nikon variant

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
    innerRadiusMm: v(17, "secondary", LM),
    outerRadiusMm: v(18.25, "secondary", NW),
    depthMm: unknownV(P),
    matesWith: `lens-lug-${index}`,
    shapeNotes:
      "gap in the lip of the helicoid bore that lets a 5 cm lens's lug through; the three gaps are unequal. Edges read off the Nikon SP photograph with the shadows lifted, good to about 5 deg, and which arcs are the gaps is read from the darker, deeper arcs. The ring turns with focusing; angles are for the infinity lock, where lenses are changed. Inner radius is half the 34 mm throat in the mount table, taken as the clear opening inside the lip.",
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
    innerRadiusMm: v(17, "secondary", LM),
    outerRadiusMm: v(18.25, "secondary", NW),
    thicknessMm: unknownV(STANDIN),
    matesWith: `body-slot-${index}`,
    shapeNotes:
      "lug on the rear barrel of a 5 cm lens. Centre and radii are copied from the body slot it enters; the 32 deg width is the earlier stand-in, not a measurement.",
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
    innerRadiusMm: v(23.1, "photo_scaled", PN),
    outerRadiusMm: v(24.5, "secondary", NW),
    depthMm: unknownV(P),
    matesWith: `lens-outer-hook-${index}`,
    shapeNotes:
      "outward lug on the fixed ring; the top one carries the depth-of-field scale. Ends read off the Nikon SP photograph, good to about 3 deg. Outer radius is half the 49 mm external bayonet diameter in the infobox; the root radius is scaled off the photograph against it.",
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
    innerRadiusMm: v(23.1, "photo_scaled", PN),
    outerRadiusMm: v(24.5, "secondary", NW),
    thicknessMm: unknownV(STANDIN),
    matesWith: `body-outer-lug-${index}`,
    shapeNotes:
      "inward hook inside the skirt of a wide-angle or telephoto lens. Centre and radii are copied from the body lug; the 32 deg width is the earlier stand-in, not a measurement.",
  };
}

const NIKON_S_MOUNT = {
  mountId: "nikon-s",
  displayLabel: "Nikon S",
  projectNote:
    "Nikon S rangefinder double bayonet: an inner bayonet in the body's focusing helicoid for 5 cm lenses and a fixed outer bayonet for wide-angle and telephoto lenses.",
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
      referenceGrade: ["lens_side_lug_widths", "inner_register", "contax_compatibility_offsets"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: OUTER,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "Nikon I, M, S, S2, SP, S3, S4 and S3M bodies",
          adds: [
            "bore of the focusing helicoid (internal bayonet diameter)",
            "rotating helicoid ring with the distance scale",
            "fixed outer ring",
            "red-dot mounting index on the front plate",
            "34.85 mm register",
          ],
          removes: ["electrical contacts", "SLR mirror clearance"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...W, ...NW, ...LM, ...P, ...M, ...RW, ...STANDIN],
        },
        {
          profileId: INNER,
          profileType: "variant",
          appliesTo: "standard 5 cm lenses, which have no helicoid and focus with the body's",
          adds: [
            "three unequal receiving slots in the helicoid bore",
            "spring catch on the helicoid ring that holds the lens",
          ],
          removes: ["outer bayonet lugs and hooks (present on the body but not used by these lenses)"],
          changes: [
            "lens turns counter-clockwise, seen from the front, until it clicks; about 41 deg from the red dot to the catch on the Nikon SP photograph",
          ],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...NW, ...LM, ...P, ...M, ...STANDIN],
        },
        {
          profileId: OUTER,
          profileType: "variant",
          appliesTo: "wide-angle and telephoto lenses, which carry their own focusing helicoid",
          adds: ["three fixed outward lugs on the outer ring", "three inward hooks in the lens skirt"],
          removes: ["inner receiving slots as a lens seat"],
          changes: [
            "lens turns counter-clockwise, seen from the front, until it clicks and the safety catch on the lens sets; the angle of the turn is not stated",
          ],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...NW, ...P, ...M, ...STANDIN],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(34.85, "secondary", [...W, ...NW]),
    nominalThroatDiameterMm: v(36.5, "secondary", NW),
    effectiveClearApertureMm: v(34, "secondary", LM),
    cameraMountOuterDiameterMm: v(49, "secondary", NW),
    lensMountOuterDiameterMm: v(50, "photo_scaled", STANDIN),
    contactCount: naV(),
  },

  // Lock geometry is that of the selected outer-bayonet profile. The instruction book gives the
  // direction but not the angle of the turn.
  lockGeometry: {
    insertionAngleDeg: v(66, "photo_scaled", P),
    lockAngleDeg: unknownV(M),
    lockRotationDeg: unknownV(M),
    lockRotationDirection: dirV("counterclockwise", "official", M),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", NW),
      startAngleDeg: v(0, "secondary", NW),
      endAngleDeg: v(360, "secondary", NW),
      innerRadiusMm: v(0, "secondary", NW),
      outerRadiusMm: v(18.25, "secondary", NW),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "bore of the body's focusing helicoid at the internal bayonet, 36.5 mm in the infobox; the mount table gives a 34 mm throat, taken here as the clear opening inside the lip",
    },
    {
      featureId: "body-helicoid-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", P),
      startAngleDeg: v(0, "photo_scaled", P),
      endAngleDeg: v(360, "photo_scaled", P),
      innerRadiusMm: v(18.25, "secondary", NW),
      outerRadiusMm: v(21.4, "photo_scaled", PN),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "front face of the rotating helicoid, with the black distance scale; it carries the inner bayonet and turns with focusing. Outer edge scaled off the Nikon SP photograph.",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", P),
      startAngleDeg: v(0, "photo_scaled", P),
      endAngleDeg: v(360, "photo_scaled", P),
      innerRadiusMm: v(21.4, "photo_scaled", PN),
      outerRadiusMm: v(23.1, "photo_scaled", PN),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "fixed ring around the helicoid, with the focusing index at 12 o'clock; the outer bayonet lugs stand out from it. Radii scaled off the Nikon SP photograph, good to about half a millimetre.",
    },
    innerSlot(1, 288, 0, 324),
    innerSlot(2, 60, 106, 83),
    innerSlot(3, 181, 233, 207),
    outerLug(1, 332, 26, 359),
    outerLug(2, 109, 141, 125),
    outerLug(3, 219, 249, 234),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(66, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: v(26.6, "photo_scaled", PN),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot on the front plate beside the mount; the lens's red dot is set against it before the lens goes on, for both bayonets. Angle and radius scaled off the Nikon SP photograph.",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(25.5, "photo_scaled", P),
      startAngleDeg: v(20, "photo_scaled", P),
      endAngleDeg: v(31, "photo_scaled", P),
      innerRadiusMm: v(20.2, "photo_scaled", PN),
      outerRadiusMm: v(20.7, "photo_scaled", PN),
      depthMm: unknownV(P),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "spring catch: a flat spring screwed to the helicoid ring, free end with its button near 15 deg, over a recess from about 20 to 31 deg where the lens is held. Depressing the spring frees the lens. Position scaled off the Nikon SP photograph.",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: unknownV(M),
      startAngleDeg: unknownV(M),
      endAngleDeg: unknownV(M),
      innerRadiusMm: unknownV(M),
      outerRadiusMm: unknownV(M),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear barrel of the lens that enters the helicoid bore; its diameter and rear opening are not sourced for either lens class, so it is drawn as a placeholder at the bore",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(66, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: unknownV(P),
      outerRadiusMm: unknownV(P),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the lens barrel, stored at the body's red dot, where the lens goes on; where on the barrel it sits is not sourced",
    },
    innerLug(1, 324),
    innerLug(2, 83),
    innerLug(3, 207),
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: INNER,
      count: 1,
      centerAngleDeg: v(25.5, "photo_scaled", P),
      startAngleDeg: unknownV(P),
      endAngleDeg: unknownV(P),
      innerRadiusMm: v(20.2, "photo_scaled", PN),
      outerRadiusMm: v(20.7, "photo_scaled", PN),
      thicknessMm: unknownV(P),
      matesWith: "body-lock-pin",
      shapeNotes:
        "the part of a 5 cm lens that the spring catch holds; stored at the catch, with radii copied from the body recess. Its shape is not sourced.",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: OUTER,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", STANDIN),
      startAngleDeg: v(0, "photo_scaled", STANDIN),
      endAngleDeg: v(360, "photo_scaled", STANDIN),
      innerRadiusMm: v(23.1, "photo_scaled", PN),
      outerRadiusMm: v(25, "photo_scaled", STANDIN),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "skirt of the lens that fits over the body's outer ring. Inner radius copied from the ring it seats on; the 50 mm outer diameter is the earlier stand-in.",
    },
    outerHook(1, 359),
    outerHook(2, 125),
    outerHook(3, 234),
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", NW),
      thicknessMm: v(0, "secondary", NW),
      diameterMm: v(49, "secondary", NW),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", STANDIN),
      thicknessMm: v(1.8, "photo_scaled", STANDIN),
      diameterMm: v(47, "photo_scaled", STANDIN),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-34.85, "secondary", [...W, ...NW]),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "rangefinder-focusing-coupler",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(180, "photo_scaled", STANDIN),
      radiusMm: v(18, "photo_scaled", STANDIN),
      sizeOrTravel: "helical/cam coupling",
      function: "couples lens focus to rangefinder mechanism",
      compatibilityNotes:
        "marker position is the earlier stand-in; the coupling runs through the body helicoid, whose movement is matched to Nikon's own 5 cm lens rather than the Contax one",
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
      ref: "ns-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Nikon S rangefinder register",
      confidence: "medium",
    },
    {
      ref: "ns-2",
      sourceType: "secondary",
      citation: "Nikon S rangefinder mount visual references. Accessed 2026-06-06.",
      liveUrl: "camera-wiki / Nikon S mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "stand-in values only: 32 deg lens lug and hook width, 50 mm lens flange diameter, lug engagement plane in the axial view, rangefinder coupling marker",
      confidence: "low",
    },
    {
      ref: "ns-3",
      sourceType: "secondary",
      citation: "“Nikon S-mount,” Wikipedia, revision of 2026-10-07. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Nikon_S-mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Nikon_S-mount&oldid=1378943424",
      archiveDate: "2026-11-21",
      appliesTo:
        "infobox: 36.5 mm internal bayonet and 49 mm external bayonet, 34.85 mm flange distance, three tabs. The infobox figures carry no citation there.",
      confidence: "low",
    },
    {
      ref: "ns-4",
      sourceType: "secondary",
      citation: "“Lens mount,” Wikipedia, revision of 2026-11-13, comparison table. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo: "Nikon S row: 34.85 mm flange focal distance and 34 mm throat",
      confidence: "medium",
    },
    {
      ref: "ns-5",
      sourceType: "field_photo",
      citation:
        "S. Shenoy, “Nikon-S-mount.jpg,” Wikimedia Commons, 2009-11-21, CC BY 3.0 (Nikon SP body without lens). Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Nikon-S-mount.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Nikon-S-mount.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view of a Nikon SP with no lens and focus at infinity; the mount sits right of the frame centre but its front rings image as circles, so angles were read directly in the camera-front frame, with no mirroring: outer lug ends, inner slot edges, spring catch and red dot. Radii are scaled against the 49 mm external bayonet.",
      confidence: "medium",
    },
    {
      ref: "ns-m1",
      sourceType: "official",
      citation:
        "Nippon Kogaku, Nikon SP Instructions, “Changing Lenses,” pp. 14–15, figs. 14–15; scan in M. Butkus’s camera manual library. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/nikon/nikon_sp/nikon_sp.htm",
      archiveUrl: "https://www.cameramanuals.org/nikon_pdf/nikon_sp.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "lenses changed at infinity; red dot on the lens lined up with the red dot on the body; lens turned counter-clockwise until it clicks and clockwise to remove; spring catch for the standard lens and a safety catch on wide-angle and telephoto lenses",
      confidence: "high",
    },
    {
      ref: "ns-6",
      sourceType: "secondary",
      citation:
        "“Байонет Contax RF,” Russian Wikipedia, revision of 2025-07-16; its Nikon passage cites K. Nakamura (Photoethnography) and S. Gandy (CameraQuest). Accessed 2026-11-21.",
      liveUrl: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5%D1%82_Contax_RF",
      archiveUrl:
        "https://ru.wikipedia.org/w/index.php?title=%D0%91%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5%D1%82_Contax_RF&oldid=146423487",
      archiveDate: "2026-11-21",
      appliesTo:
        "the Nikon variant of the mount: focusing movement worked out for a 51.6 mm lens instead of the Contax 52.3 mm, a difference of up to 7 deg of ring rotation at the closest distance, and Contax lenses focusing exactly on a Nikon body only at infinity. Not used for any Nikon dimension.",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "Every angle here comes from one photograph of a Nikon SP body, not from a dimensioned drawing. Outer lug ends, the catch and the red dot are good to about 3 deg; the inner slot edges sit in shadow and are good to about 5 deg.",
      affectedFields: ["cameraSideFeatures", "lockGeometry.insertionAngleDeg"],
      candidateValues: [],
      resolution:
        "Replace with a Nippon Kogaku drawing, a repair manual with a dimensioned mount, or a calibrated measurement of a body. The Nikon SP repair manual compiled by E. Romney (1984) shows the focusing mount only in undimensioned exploded views and sets the flange distance with shims without stating it.",
    },
    {
      issue:
        "The instruction book gives the direction of the locking turn but not its angle. The Zeiss Ikon Contax II book states 90 deg for outer-bayonet lenses, and the outer lugs measured here sit within about 3 deg of those on a Contax-pattern body, but no usable source states the Nikon angle.",
      affectedFields: ["lockGeometry.lockRotationDeg", "lockGeometry.lockAngleDeg"],
      candidateValues: [90],
      resolution:
        "Confirm on a body or from Nippon Kogaku documentation; then set the lock angle from the 66 deg red dot.",
    },
    {
      issue:
        "Lens-side lug and hook widths are a 32 deg stand-in from the earlier label-only reference [ns-2], as are the 50 mm lens flange diameter and the lug engagement plane in the axial view. No lens-rear source was found, and the safety catch on wide-angle and telephoto lenses is not drawn because its position is not sourced.",
      affectedFields: ["lensSideFeatures", "coreDimensions.lensMountOuterDiameterMm", "axialStack"],
      candidateValues: [],
      resolution: "Measure or photograph square-on the rear of a 5 cm Nikkor and of an outer-mount Nikkor.",
    },
    {
      issue:
        "The register of the inner bayonet is not drawn. A Japanese adapter review gives 31.95 mm for Nikon S against 31.75 mm for Contax, and one mount list gives 34.54 mm instead of 34.85 mm for the outer register; neither could be added as a source.",
      affectedFields: ["axialStack", "coreDimensions.flangeFocalDistanceMm"],
      candidateValues: [31.95, 34.85, 34.54],
      resolution: "Confirm both registers from Nikon documentation or a measured body.",
    },
    {
      issue:
        "The nominal throat was 44 mm; it is now the 36.5 mm internal bayonet, with the 34 mm table throat as the clear opening. Both are uncited Wikipedia figures; on the photograph the bore scales to roughly 35.5 mm.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "coreDimensions.effectiveClearApertureMm"],
      candidateValues: [36.5, 34, 44],
      resolution: "Confirm the bore and lip diameters against a drawing or a measured body.",
    },
    {
      issue:
        "What separates Nikon S from Contax is not drawn: the body helicoid is matched to a 5 cm lens of about 51.6 mm focal length against about 52.3 mm for Contax, so the two agree at infinity and drift apart at close range [ns-6]. No helicoid lead or rotation figure was found, and the rangefinder coupling marker is still the earlier stand-in position [ns-2].",
      affectedFields: ["mechanicalCouplings"],
      candidateValues: [],
      resolution: "Add the helicoid lead and the rangefinder cam travel from a repair manual if one states them.",
    },
  ],
} satisfies MountSpecInput;

export default NIKON_S_MOUNT;
