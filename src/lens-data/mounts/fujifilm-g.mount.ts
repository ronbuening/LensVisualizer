/**
 * Fujifilm G mount SVG specification.
 *
 * Fujifilm's GFX digital medium-format mount (announced 2016, GFX 50S in 2017): a 26.7 mm flange
 * focal distance and a large 65 mm throat for the 43.8 × 32.9 mm (44×33) sensor. Modeled `base-only`
 * — a single fully-electronic interface (no mechanical couplings).
 *
 * Sourced layout: flange focal distance 26.7 mm, 65 mm throat, three bayonet tabs [fg-1]; the locking
 * notch at 4:30 and the contact bank across 5–7 o'clock (bottom) per the JAPB teardown [fg-2]. The
 * contact count is recorded as conflicting — Wikipedia lists twelve, the JAPB teardown counts eleven.
 * Tab spans, the index position, and per-contact clock positions are photo-scaled and flagged in
 * openQuestions.
 */

import type { MountSpecInput } from "../../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../../optics/mount/authoring.js";

const W = ["fg-1"]; // Wikipedia
const J = ["fg-2"]; // JAPB teardown
const WJ = ["fg-1", "fg-2"];

const FUJIFILM_G_MOUNT = {
  mountId: "fujifilm-g",
  displayLabel: "Fujifilm G",
  projectNote: "Fujifilm G/GFX digital medium-format mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["electrical_contacts"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "fujifilm-g/base",
      selectedMvpProfileId: "fujifilm-g/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "fujifilm-g/base",
          profileType: "base",
          appliesTo: "all Fujifilm G/GFX lenses and bodies (44×33 medium format), 2017–present",
          adds: ["three bayonet tabs", "locking pin/notch at 4:30", "mounting index", "electrical block at the bottom"],
          removes: ["all mechanical couplings (fully electronic)"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: W,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(26.7, "secondary", W),
    nominalThroatDiameterMm: v(65, "secondary", W),
    effectiveClearApertureMm: v(65, "secondary", W),
    cameraMountOuterDiameterMm: v(78, "photo_scaled", J),
    lensMountOuterDiameterMm: v(76, "photo_scaled", J),
    contactCount: v(12, "conflicting", WJ),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: unknownV(W),
    lockRotationDeg: unknownV(W),
    lockRotationDirection: dirV("unknown", "unknown", []),
  },

  cameraSideFeatures: [
    { featureId: "body-throat", featureType: "body_throat", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "secondary", W), startAngleDeg: v(0, "secondary", W), endAngleDeg: v(360, "secondary", W), innerRadiusMm: v(0, "secondary", W), outerRadiusMm: v(32.5, "secondary", W), depthMm: naV(), matesWith: "", shapeNotes: "65 mm throat opening" },
    { featureId: "body-mount-ring", featureType: "mount_ring", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: v(0, "photo_scaled", J), endAngleDeg: v(360, "photo_scaled", J), innerRadiusMm: v(32.5, "secondary", W), outerRadiusMm: v(39, "photo_scaled", J), depthMm: naV(), matesWith: "", shapeNotes: "visible body mount ring" },
    { featureId: "body-slot-1", featureType: "bayonet_receiving_slot", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(30, "photo_scaled", J), startAngleDeg: v(10, "photo_scaled", J), endAngleDeg: v(50, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), depthMm: v(2.2, "photo_scaled", J), matesWith: "lens-lug-1", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "body-slot-2", featureType: "bayonet_receiving_slot", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(150, "photo_scaled", J), startAngleDeg: v(130, "photo_scaled", J), endAngleDeg: v(170, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), depthMm: v(2.2, "photo_scaled", J), matesWith: "lens-lug-2", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "body-slot-3", featureType: "bayonet_receiving_slot", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(290, "photo_scaled", J), startAngleDeg: v(270, "photo_scaled", J), endAngleDeg: v(310, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), depthMm: v(2.2, "photo_scaled", J), matesWith: "lens-lug-3", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "body-index-mark", featureType: "index_mark", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(39.5, "photo_scaled", J), depthMm: naV(), matesWith: "lens-index-mark", shapeNotes: "mounting index" },
    { featureId: "body-lock-pin", featureType: "lock_pin", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(135, "secondary", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(33.5, "photo_scaled", J), depthMm: v(2, "photo_scaled", J), matesWith: "lens-lock-notch", shapeNotes: "locking notch at 4:30 [fg-2]" },
  ],

  lensSideFeatures: [
    { featureId: "lens-throat", featureType: "lens_throat", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "secondary", W), startAngleDeg: v(0, "secondary", W), endAngleDeg: v(360, "secondary", W), innerRadiusMm: v(0, "secondary", W), outerRadiusMm: v(31.5, "photo_scaled", J), thicknessMm: naV(), matesWith: "", shapeNotes: "rear opening" },
    { featureId: "lens-mount-ring", featureType: "lens_mount_ring", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: v(0, "photo_scaled", J), endAngleDeg: v(360, "photo_scaled", J), innerRadiusMm: v(31.5, "photo_scaled", J), outerRadiusMm: v(38, "photo_scaled", J), thicknessMm: naV(), matesWith: "", shapeNotes: "lens flange ring" },
    { featureId: "lens-lug-1", featureType: "bayonet_lug", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(30, "photo_scaled", J), startAngleDeg: v(10, "photo_scaled", J), endAngleDeg: v(50, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), thicknessMm: v(2.2, "photo_scaled", J), matesWith: "body-slot-1", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "lens-lug-2", featureType: "bayonet_lug", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(150, "photo_scaled", J), startAngleDeg: v(130, "photo_scaled", J), endAngleDeg: v(170, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), thicknessMm: v(2.2, "photo_scaled", J), matesWith: "body-slot-2", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "lens-lug-3", featureType: "bayonet_lug", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(290, "photo_scaled", J), startAngleDeg: v(270, "photo_scaled", J), endAngleDeg: v(310, "photo_scaled", J), innerRadiusMm: v(32.5, "photo_scaled", J), outerRadiusMm: v(36, "photo_scaled", J), thicknessMm: v(2.2, "photo_scaled", J), matesWith: "body-slot-3", shapeNotes: "three-tab bayonet, straight edges [fg-2]" },
    { featureId: "lens-index-mark", featureType: "index_mark", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(38.5, "photo_scaled", J), thicknessMm: naV(), matesWith: "body-index-mark", shapeNotes: "aligns with body index" },
    { featureId: "lens-lock-notch", featureType: "lock_notch", profileId: "fujifilm-g/base", count: 1, centerAngleDeg: v(135, "secondary", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(33.5, "photo_scaled", J), thicknessMm: v(2, "photo_scaled", J), matesWith: "body-lock-pin", shapeNotes: "receives body lock pin (4:30)" },
  ],

  axialStack: [
    { planeId: "flange_datum", zPositionMm: v(0, "secondary", W), thicknessMm: v(0, "secondary", W), diameterMm: v(78, "photo_scaled", J) },
    { planeId: "bayonet_lug_engagement", zPositionMm: v(1.2, "photo_scaled", J), thicknessMm: v(2.2, "photo_scaled", J), diameterMm: v(70, "photo_scaled", J) },
    { planeId: "electrical_contact_plane", zPositionMm: v(0.5, "photo_scaled", J), thicknessMm: v(0.5, "photo_scaled", J), diameterMm: v(62, "photo_scaled", J) },
    { planeId: "sensor_film_plane", zPositionMm: v(-26.7, "secondary", W), thicknessMm: v(0, "secondary", W), diameterMm: v(54.8, "secondary", W) },
  ],

  contacts: [
    { side: "body", contactNo: 1, profileId: "fujifilm-g/base", centerAngleDeg: v(150, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 2, profileId: "fujifilm-g/base", centerAngleDeg: v(155, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 3, profileId: "fujifilm-g/base", centerAngleDeg: v(160, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 4, profileId: "fujifilm-g/base", centerAngleDeg: v(165, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 5, profileId: "fujifilm-g/base", centerAngleDeg: v(170, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 6, profileId: "fujifilm-g/base", centerAngleDeg: v(175, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 7, profileId: "fujifilm-g/base", centerAngleDeg: v(180, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 8, profileId: "fujifilm-g/base", centerAngleDeg: v(185, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 9, profileId: "fujifilm-g/base", centerAngleDeg: v(190, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 10, profileId: "fujifilm-g/base", centerAngleDeg: v(195, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 11, profileId: "fujifilm-g/base", centerAngleDeg: v(200, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 12, profileId: "fujifilm-g/base", centerAngleDeg: v(205, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0.5, "photo_scaled", J), function: "12th per Wikipedia; JAPB counts 11" },
    { side: "lens", contactNo: 1, profileId: "fujifilm-g/base", centerAngleDeg: v(150, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 2, profileId: "fujifilm-g/base", centerAngleDeg: v(155, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 3, profileId: "fujifilm-g/base", centerAngleDeg: v(160, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 4, profileId: "fujifilm-g/base", centerAngleDeg: v(165, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 5, profileId: "fujifilm-g/base", centerAngleDeg: v(170, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 6, profileId: "fujifilm-g/base", centerAngleDeg: v(175, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 7, profileId: "fujifilm-g/base", centerAngleDeg: v(180, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 8, profileId: "fujifilm-g/base", centerAngleDeg: v(185, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 9, profileId: "fujifilm-g/base", centerAngleDeg: v(190, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 10, profileId: "fujifilm-g/base", centerAngleDeg: v(195, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 11, profileId: "fujifilm-g/base", centerAngleDeg: v(200, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 12, profileId: "fujifilm-g/base", centerAngleDeg: v(205, "photo_scaled", J), centerRadiusMm: v(30, "photo_scaled", J), widthMm: v(1.4, "photo_scaled", J), heightMm: v(3, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "12th per Wikipedia; JAPB counts 11" },
  ],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    { featureId: "body-mount-screws", featureType: "mount_screws", side: "body", count: v(6, "photo_scaled", J), pcdMm: v(74, "photo_scaled", J), diameterMm: v(2.5, "photo_scaled", J), centerAnglesDeg: degListV([20, 80, 140, 200, 260, 320], "photo_scaled", J), shape: "round" },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "fg-1",
      sourceType: "secondary",
      citation: "“Fujifilm G-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Fujifilm_G-mount",
      archiveUrl: "http://web.archive.org/web/20251219110027/https://en.wikipedia.org/wiki/Fujifilm_G-mount",
      archiveDate: "2025-12-19",
      appliesTo: "flange focal distance, 65 mm throat, three tabs, twelve contacts",
      confidence: "high",
    },
    {
      ref: "fg-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Fujifilm G,” JAPB (japb.net). Accessed 2026-06-04.",
      liveUrl: "https://japb.net/theory/lensmounts/fujifilm-g/",
      archiveUrl: "http://web.archive.org/web/20250623124111/https://japb.net/theory/lensmounts/fujifilm-g/",
      archiveDate: "2025-06-23",
      appliesTo: "locking notch at 4:30, eleven contacts across 5–7 o'clock, three straight-edged tabs",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue: "Contact count conflicts: Wikipedia lists twelve electrical connectors, the JAPB teardown counts eleven; twelve is modeled.",
      affectedFields: ["contactCount", "contacts"],
      candidateValues: [11, 12],
      resolution: "Reconcile against an official Fujifilm G mount drawing or measured sample.",
    },
    {
      issue: "Tab angular spans, the mounting-index clock position, and the lock rotation angle/direction are photo-scaled or undocumented; per-contact clock positions are interpolated within the documented 5–7 o'clock band.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to an official Fujifilm G mount drawing or measured sample.",
    },
  ],
} satisfies MountSpecInput;

export default FUJIFILM_G_MOUNT;
