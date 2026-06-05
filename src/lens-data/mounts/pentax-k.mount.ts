/**
 * Pentax K mount SVG specification.
 *
 * The original K bayonet foundation persisted while the electronic/AF/power interface evolved, so
 * the base profile holds only invariant geometry and named variants overlay each era: `pentax-k/ka`
 * (mechanical aperture coupling plus six information contacts), `pentax-k/kaf` (the AF screw-drive
 * coupler and a seventh contact), and `pentax-k/kaf2` (two power contacts inside the ring). Geometry
 * is never averaged across eras. The MVP figure renders the KA era.
 *
 * Headline dimensions (flange focal distance 45.46 mm, ~44 mm throat, three-lug bayonet, lock by an
 * approx. 70° clockwise turn viewed from the camera front) are sourced from the Pentax K-mount
 * reference [pk-1]; fine angular geometry (lug spans, lock/index/contact clock positions) is
 * photo-scaled and flagged in openQuestions pending an official mount drawing.
 */

import type { MountSpecInput } from "../../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../../optics/mount/authoring.js";

const REF = ["pk-1"];

const PENTAX_K_MOUNT = {
  mountId: "pentax-k",
  displayLabel: "Pentax K",
  projectNote: "Pentax K mount family.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["ka_contacts", "aperture_coupling", "af_screw_coupler", "power_contacts"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "pentax-k/base",
      selectedMvpProfileId: "pentax-k/ka",
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: "pentax-k/base",
          profileType: "base",
          appliesTo: "all Pentax K bodies and lenses, 1975–present",
          adds: ["three-lug bayonet", "lock pin/notch", "mounting index"],
          removes: [],
          changes: [],
          sourceRefs: REF,
        },
        {
          profileId: "pentax-k/ka",
          profileType: "variant",
          appliesTo: "KA (A-series) bodies and lenses, 1983+",
          adds: ["A-position information contacts (6)", "aperture stop-down coupler", "diaphragm release lever"],
          removes: [],
          changes: ["mechanical aperture simulation originates with the original K mount"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "pentax-k/kaf",
          profileType: "variant",
          appliesTo: "KAF autofocus bodies and lenses",
          adds: ["AF screw-drive coupler", "seventh digital information contact"],
          removes: [],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "pentax-k/kaf2",
          profileType: "variant",
          appliesTo: "KAF2 power-zoom bodies and lenses",
          adds: ["two power contacts inside the mounting ring"],
          removes: [],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(45.46, "secondary", REF),
    nominalThroatDiameterMm: v(44, "secondary", REF),
    effectiveClearApertureMm: v(44, "secondary", REF),
    cameraMountOuterDiameterMm: v(56, "photo_scaled", REF),
    lensMountOuterDiameterMm: v(52, "photo_scaled", REF),
    contactCount: v(6, "secondary", REF),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(70, "secondary", REF),
    lockRotationDeg: v(70, "secondary", REF),
    lockRotationDirection: dirV("clockwise", "secondary", REF),
  },

  cameraSideFeatures: [
    { featureId: "body-throat", featureType: "body_throat", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(22, "secondary", REF), depthMm: naV(), matesWith: "", shapeNotes: "~44 mm throat opening" },
    { featureId: "body-mount-ring", featureType: "mount_ring", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(22, "secondary", REF), outerRadiusMm: v(28, "photo_scaled", REF), depthMm: naV(), matesWith: "", shapeNotes: "visible body mount ring" },
    { featureId: "body-slot-1", featureType: "bayonet_receiving_slot", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(30, "photo_scaled", REF), startAngleDeg: v(12, "photo_scaled", REF), endAngleDeg: v(48, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.6, "photo_scaled", REF), matesWith: "lens-lug-1", shapeNotes: "" },
    { featureId: "body-slot-2", featureType: "bayonet_receiving_slot", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(150, "photo_scaled", REF), startAngleDeg: v(132, "photo_scaled", REF), endAngleDeg: v(168, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.6, "photo_scaled", REF), matesWith: "lens-lug-2", shapeNotes: "" },
    { featureId: "body-slot-3", featureType: "bayonet_receiving_slot", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(270, "photo_scaled", REF), startAngleDeg: v(252, "photo_scaled", REF), endAngleDeg: v(288, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.6, "photo_scaled", REF), matesWith: "lens-lug-3", shapeNotes: "" },
    { featureId: "body-index-mark", featureType: "index_mark", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(29, "photo_scaled", REF), depthMm: naV(), matesWith: "lens-index-mark", shapeNotes: "mounting index" },
    { featureId: "body-lock-pin", featureType: "lock_pin", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(330, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(23, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lock-notch", shapeNotes: "spring lock pin" },
  ],

  lensSideFeatures: [
    { featureId: "lens-throat", featureType: "lens_throat", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(21, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "rear opening" },
    { featureId: "lens-mount-ring", featureType: "lens_mount_ring", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(21, "photo_scaled", REF), outerRadiusMm: v(26, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "lens flange ring" },
    { featureId: "lens-lug-1", featureType: "bayonet_lug", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(30, "photo_scaled", REF), startAngleDeg: v(12, "photo_scaled", REF), endAngleDeg: v(48, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.6, "photo_scaled", REF), matesWith: "body-slot-1", shapeNotes: "" },
    { featureId: "lens-lug-2", featureType: "bayonet_lug", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(150, "photo_scaled", REF), startAngleDeg: v(132, "photo_scaled", REF), endAngleDeg: v(168, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.6, "photo_scaled", REF), matesWith: "body-slot-2", shapeNotes: "" },
    { featureId: "lens-lug-3", featureType: "bayonet_lug", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(270, "photo_scaled", REF), startAngleDeg: v(252, "photo_scaled", REF), endAngleDeg: v(288, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.6, "photo_scaled", REF), matesWith: "body-slot-3", shapeNotes: "" },
    { featureId: "lens-index-mark", featureType: "index_mark", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(27, "photo_scaled", REF), thicknessMm: naV(), matesWith: "body-index-mark", shapeNotes: "aligns with body index" },
    { featureId: "lens-lock-notch", featureType: "lock_notch", profileId: "pentax-k/base", count: 1, centerAngleDeg: v(330, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(23, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-lock-pin", shapeNotes: "receives body lock pin" },
  ],

  axialStack: [
    { planeId: "flange_datum", zPositionMm: v(0, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(56, "photo_scaled", REF) },
    { planeId: "bayonet_lug_engagement", zPositionMm: v(1.2, "photo_scaled", REF), thicknessMm: v(1.6, "photo_scaled", REF), diameterMm: v(49, "photo_scaled", REF) },
    { planeId: "sensor_film_plane", zPositionMm: v(-45.46, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(43.3, "secondary", REF) },
  ],

  contacts: [
    { side: "body", contactNo: 1, profileId: "pentax-k/ka", centerAngleDeg: v(215, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "A-contact" },
    { side: "body", contactNo: 2, profileId: "pentax-k/ka", centerAngleDeg: v(223, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "aperture-range" },
    { side: "body", contactNo: 3, profileId: "pentax-k/ka", centerAngleDeg: v(231, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "aperture-range" },
    { side: "body", contactNo: 4, profileId: "pentax-k/ka", centerAngleDeg: v(239, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "aperture-range" },
    { side: "body", contactNo: 5, profileId: "pentax-k/ka", centerAngleDeg: v(247, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "aperture-range" },
    { side: "body", contactNo: 6, profileId: "pentax-k/ka", centerAngleDeg: v(255, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "aperture-range" },
    { side: "lens", contactNo: 1, profileId: "pentax-k/ka", centerAngleDeg: v(215, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "A-contact" },
    { side: "lens", contactNo: 2, profileId: "pentax-k/ka", centerAngleDeg: v(223, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "aperture-range" },
    { side: "lens", contactNo: 3, profileId: "pentax-k/ka", centerAngleDeg: v(231, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "aperture-range" },
    { side: "lens", contactNo: 4, profileId: "pentax-k/ka", centerAngleDeg: v(239, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "aperture-range" },
    { side: "lens", contactNo: 5, profileId: "pentax-k/ka", centerAngleDeg: v(247, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "aperture-range" },
    { side: "lens", contactNo: 6, profileId: "pentax-k/ka", centerAngleDeg: v(255, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "aperture-range" },
    { side: "body", contactNo: 7, profileId: "pentax-k/kaf", centerAngleDeg: v(263, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "digital info" },
    { side: "lens", contactNo: 7, profileId: "pentax-k/kaf", centerAngleDeg: v(263, "photo_scaled", REF), centerRadiusMm: v(20.5, "photo_scaled", REF), widthMm: v(1.3, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "digital info" },
    { side: "body", contactNo: 8, profileId: "pentax-k/kaf2", centerAngleDeg: v(200, "photo_scaled", REF), centerRadiusMm: v(23.5, "photo_scaled", REF), widthMm: v(1.6, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "power" },
    { side: "body", contactNo: 9, profileId: "pentax-k/kaf2", centerAngleDeg: v(270, "photo_scaled", REF), centerRadiusMm: v(23.5, "photo_scaled", REF), widthMm: v(1.6, "photo_scaled", REF), heightMm: v(2.4, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "power" },
  ],

  mechanicalCouplings: [
    { featureId: "aperture-stop-down-coupler", side: "body", profileId: "pentax-k/ka", centerAngleDeg: v(300, "photo_scaled", REF), radiusMm: v(24, "photo_scaled", REF), sizeOrTravel: "lever", function: "sense aperture-ring setting", compatibilityNotes: "" },
    { featureId: "diaphragm-release-lever", side: "body", profileId: "pentax-k/ka", centerAngleDeg: v(285, "photo_scaled", REF), radiusMm: v(23, "photo_scaled", REF), sizeOrTravel: "lever", function: "hold open spring-loaded diaphragm", compatibilityNotes: "" },
    { featureId: "af-screw-coupler", side: "body", profileId: "pentax-k/kaf", centerAngleDeg: v(250, "photo_scaled", REF), radiusMm: v(18, "photo_scaled", REF), sizeOrTravel: "drive shaft", function: "mechanical AF drive", compatibilityNotes: "body-driven AF lenses" },
  ],

  screwsGasketsBaffles: [
    { featureId: "body-mount-screws", featureType: "mount_screws", side: "body", count: v(4, "photo_scaled", REF), pcdMm: v(50, "photo_scaled", REF), diameterMm: v(2, "photo_scaled", REF), centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", REF), shape: "round" },
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
      ref: "pk-1",
      sourceType: "secondary",
      citation: "“Pentax K-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Pentax_K-mount",
      archiveUrl: "http://web.archive.org/web/20260512111817/https://en.wikipedia.org/wiki/Pentax_K-mount",
      archiveDate: "2026-05-12",
      appliesTo: "flange focal distance, bayonet, lock angle, KA/KAF/KAF2 interface evolution",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue: "Throat diameter, bayonet lug spans, and lock/index/contact clock positions are photo-scaled, not from an official drawing.",
      affectedFields: ["nominalThroatDiameterMm", "cameraSideFeatures", "lensSideFeatures", "contacts"],
      candidateValues: [],
      resolution: "Upgrade to an official Pentax/Ricoh K-mount drawing or measured sample.",
    },
    {
      issue: "Contact count grows across KA (6) → KAF (7) → KAF2 (9); contactCount records the KA baseline.",
      affectedFields: ["contactCount"],
      candidateValues: [6, 7, 9],
      resolution: "Expose per-variant contact counts when variant selection drives the figure.",
    },
  ],
} satisfies MountSpecInput;

export default PENTAX_K_MOUNT;
