/**
 * Nikon F mount SVG specification.
 *
 * Base bayonet foundation plus two named variant overlays: `nikon-f/ai-s` (the mechanical
 * Automatic-Indexing meter-coupling ridge and lens-speed indexing post) and `nikon-f/af-d` (the
 * CPU electrical contacts and the AF screw-drive coupler). Geometry is never averaged across eras —
 * each variant only overlays its own features on the invariant base. The MVP figure renders the
 * AI-S variant.
 *
 * Headline dimensions (flange focal distance 46.5 mm, 44 mm throat, three-lug bayonet, lock by
 * counter-clockwise rotation when viewed from the camera front) are sourced from the Nikon F-mount
 * reference [nf-1]; fine angular geometry (lug spans, index/lock clock positions, contact pitch) is
 * photo-scaled and flagged in openQuestions pending an official mount drawing. Nikon F is the
 * package Section 4.1 lens-rear mirror validation reference: its mounting-index clock position is
 * stored in the camera-front frame and the mirror gate confirms the transform is the left-right
 * reflection.
 */

import type { MountSpecInput } from "../../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../../optics/mount/authoring.js";

const REF = ["nf-1"];

const NIKON_F_MOUNT = {
  mountId: "nikon-f",
  displayLabel: "Nikon F",
  projectNote: "Nikon F SLR mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["ai_meter_coupling_ridge", "cpu_contacts", "af_screw_coupler"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "nikon-f/base",
      selectedMvpProfileId: "nikon-f/ai-s",
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: "nikon-f/base",
          profileType: "base",
          appliesTo: "all Nikon F bodies and lenses, 1959–present",
          adds: ["three-lug bayonet", "lock pin/notch", "mounting index"],
          removes: [],
          changes: [],
          sourceRefs: REF,
        },
        {
          profileId: "nikon-f/ai-s",
          profileType: "variant",
          appliesTo: "AI / AI-S manual-focus lenses (1977+)",
          adds: ["meter coupling ridge", "lens speed indexing post"],
          removes: [],
          changes: ["aperture indexing automated vs pre-AI rabbit-ear prong"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "nikon-f/af-d",
          profileType: "variant",
          appliesTo: "AF / AF-D autofocus lenses with CPU",
          adds: ["CPU electrical contacts", "AF screw-drive coupler"],
          removes: [],
          changes: ["electronic aperture/distance reporting added"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(46.5, "secondary", REF),
    nominalThroatDiameterMm: v(44, "secondary", REF),
    effectiveClearApertureMm: v(44, "secondary", REF),
    cameraMountOuterDiameterMm: v(54, "photo_scaled", REF),
    lensMountOuterDiameterMm: v(50, "photo_scaled", REF),
    contactCount: v(5, "photo_scaled", REF),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(54, "photo_scaled", REF),
    lockRotationDeg: v(54, "photo_scaled", REF),
    lockRotationDirection: dirV("counterclockwise", "secondary", REF),
  },

  cameraSideFeatures: [
    { featureId: "body-throat", featureType: "body_throat", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(22, "secondary", REF), depthMm: naV(), matesWith: "", shapeNotes: "44 mm throat opening" },
    { featureId: "body-mount-ring", featureType: "mount_ring", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(22, "secondary", REF), outerRadiusMm: v(27, "photo_scaled", REF), depthMm: naV(), matesWith: "", shapeNotes: "visible body mount ring" },
    { featureId: "body-slot-1", featureType: "bayonet_receiving_slot", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(60, "photo_scaled", REF), startAngleDeg: v(44, "photo_scaled", REF), endAngleDeg: v(76, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.5, "photo_scaled", REF), matesWith: "lens-lug-1", shapeNotes: "" },
    { featureId: "body-slot-2", featureType: "bayonet_receiving_slot", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(180, "photo_scaled", REF), startAngleDeg: v(164, "photo_scaled", REF), endAngleDeg: v(196, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.5, "photo_scaled", REF), matesWith: "lens-lug-2", shapeNotes: "" },
    { featureId: "body-slot-3", featureType: "bayonet_receiving_slot", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(300, "photo_scaled", REF), startAngleDeg: v(284, "photo_scaled", REF), endAngleDeg: v(316, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), depthMm: v(1.5, "photo_scaled", REF), matesWith: "lens-lug-3", shapeNotes: "" },
    { featureId: "body-index-mark", featureType: "index_mark", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(60, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(28, "photo_scaled", REF), depthMm: naV(), matesWith: "lens-index-mark", shapeNotes: "mounting index for alignment" },
    { featureId: "body-lock-pin", featureType: "lock_pin", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(300, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(23, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lock-notch", shapeNotes: "spring lock pin" },
  ],

  lensSideFeatures: [
    { featureId: "lens-throat", featureType: "lens_throat", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(21, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "rear opening" },
    { featureId: "lens-mount-ring", featureType: "lens_mount_ring", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(21, "photo_scaled", REF), outerRadiusMm: v(25, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "lens flange ring" },
    { featureId: "lens-lug-1", featureType: "bayonet_lug", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(60, "photo_scaled", REF), startAngleDeg: v(44, "photo_scaled", REF), endAngleDeg: v(76, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.5, "photo_scaled", REF), matesWith: "body-slot-1", shapeNotes: "" },
    { featureId: "lens-lug-2", featureType: "bayonet_lug", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(180, "photo_scaled", REF), startAngleDeg: v(164, "photo_scaled", REF), endAngleDeg: v(196, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.5, "photo_scaled", REF), matesWith: "body-slot-2", shapeNotes: "" },
    { featureId: "lens-lug-3", featureType: "bayonet_lug", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(300, "photo_scaled", REF), startAngleDeg: v(284, "photo_scaled", REF), endAngleDeg: v(316, "photo_scaled", REF), innerRadiusMm: v(22, "photo_scaled", REF), outerRadiusMm: v(24.5, "photo_scaled", REF), thicknessMm: v(1.5, "photo_scaled", REF), matesWith: "body-slot-3", shapeNotes: "" },
    { featureId: "lens-index-mark", featureType: "index_mark", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(60, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(26, "photo_scaled", REF), thicknessMm: naV(), matesWith: "body-index-mark", shapeNotes: "aligns with body index" },
    { featureId: "lens-lock-notch", featureType: "lock_notch", profileId: "nikon-f/base", count: 1, centerAngleDeg: v(300, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(23, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-lock-pin", shapeNotes: "receives body lock pin" },
  ],

  axialStack: [
    { planeId: "flange_datum", zPositionMm: v(0, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(54, "photo_scaled", REF) },
    { planeId: "bayonet_lug_engagement", zPositionMm: v(1.2, "photo_scaled", REF), thicknessMm: v(1.5, "photo_scaled", REF), diameterMm: v(49, "photo_scaled", REF) },
    { planeId: "sensor_film_plane", zPositionMm: v(-46.5, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(43.3, "secondary", REF) },
  ],

  contacts: [
    { side: "body", contactNo: 1, profileId: "nikon-f/af-d", centerAngleDeg: v(348, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "CPU" },
    { side: "body", contactNo: 2, profileId: "nikon-f/af-d", centerAngleDeg: v(354, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "CPU" },
    { side: "body", contactNo: 3, profileId: "nikon-f/af-d", centerAngleDeg: v(0, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "CPU" },
    { side: "body", contactNo: 4, profileId: "nikon-f/af-d", centerAngleDeg: v(6, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "CPU" },
    { side: "body", contactNo: 5, profileId: "nikon-f/af-d", centerAngleDeg: v(12, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.4, "photo_scaled", REF), function: "CPU" },
    { side: "lens", contactNo: 1, profileId: "nikon-f/af-d", centerAngleDeg: v(348, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "CPU" },
    { side: "lens", contactNo: 2, profileId: "nikon-f/af-d", centerAngleDeg: v(354, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "CPU" },
    { side: "lens", contactNo: 3, profileId: "nikon-f/af-d", centerAngleDeg: v(0, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "CPU" },
    { side: "lens", contactNo: 4, profileId: "nikon-f/af-d", centerAngleDeg: v(6, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "CPU" },
    { side: "lens", contactNo: 5, profileId: "nikon-f/af-d", centerAngleDeg: v(12, "photo_scaled", REF), centerRadiusMm: v(20, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(2.5, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "CPU" },
  ],

  mechanicalCouplings: [
    { featureId: "ai-meter-coupling-ridge", side: "both", profileId: "nikon-f/ai-s", centerAngleDeg: v(25, "photo_scaled", REF), radiusMm: v(26, "photo_scaled", REF), sizeOrTravel: "ridge on aperture ring", function: "open-aperture metering coupling", compatibilityNotes: "AI/AI-S follower on body" },
    { featureId: "lens-speed-indexing-post", side: "body", profileId: "nikon-f/ai-s", centerAngleDeg: v(35, "photo_scaled", REF), radiusMm: v(24, "photo_scaled", REF), sizeOrTravel: "post on mounting flange", function: "maximum-aperture indexing", compatibilityNotes: "" },
    { featureId: "af-screw-coupler", side: "body", profileId: "nikon-f/af-d", centerAngleDeg: v(250, "photo_scaled", REF), radiusMm: v(19, "photo_scaled", REF), sizeOrTravel: "screwdriver blade", function: "mechanical AF drive", compatibilityNotes: "body-driven AF lenses" },
  ],

  screwsGasketsBaffles: [
    { featureId: "body-mount-screws", featureType: "mount_screws", side: "body", count: v(5, "photo_scaled", REF), pcdMm: v(50, "photo_scaled", REF), diameterMm: v(2, "photo_scaled", REF), centerAnglesDeg: degListV([30, 102, 174, 246, 318], "photo_scaled", REF), shape: "round" },
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
      ref: "nf-1",
      sourceType: "secondary",
      citation: "“Nikon F-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Nikon_F-mount",
      archiveUrl: "http://web.archive.org/web/20260513020722/https://en.wikipedia.org/wiki/Nikon_F-mount",
      archiveDate: "2026-05-13",
      appliesTo: "flange focal distance, throat, bayonet, lock direction, AI/CPU features",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue: "Exact bayonet lug/slot angular spans and the mounting-index/lock-pin clock positions are photo-scaled, not from an official drawing.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "body-index-mark", "body-lock-pin"],
      candidateValues: [],
      resolution: "Upgrade to an official Nikon mount drawing or measured sample.",
    },
    {
      issue: "CPU contact count and pitch vary across AF/AF-D/AF-I/AF-S/AI-P lenses; the five modeled contacts are representative.",
      affectedFields: ["contacts", "contactCount"],
      candidateValues: [5, 8, 10],
      resolution: "Document per-lens contact maps in dedicated variant profiles.",
    },
  ],
} satisfies MountSpecInput;

export default NIKON_F_MOUNT;
