/**
 * Fujifilm X mount SVG specification.
 *
 * Fujifilm's APS-C mirrorless mount (2012): a 17.7 mm flange focal distance and a 44 mm throat.
 * Modeled `base-only` — a single fully-electronic interface (no mechanical couplings).
 *
 * Sourced layout: flange focal distance 17.7 mm, 44 mm throat, ten electrical contacts, three
 * straight-edged lugs [fx-1]; the locking groove at 4:30 and the contact bank across 4:30–7:30
 * (bottom of the mount) per the JAPB teardown [fx-2]. Lug spans, the index position, and the lock
 * rotation angle/direction are photo-scaled or unknown and flagged in openQuestions.
 */

import type { MountSpecInput } from "../../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../../optics/mount/authoring.js";

const W = ["fx-1"]; // Wikipedia
const J = ["fx-2"]; // JAPB teardown

const FUJIFILM_X_MOUNT = {
  mountId: "fujifilm-x",
  displayLabel: "Fujifilm X",
  projectNote: "Fujifilm X APS-C mirrorless mount.",
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
      baseProfileId: "fujifilm-x/base",
      selectedMvpProfileId: "fujifilm-x/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "fujifilm-x/base",
          profileType: "base",
          appliesTo: "all Fujifilm X lenses and bodies (APS-C), 2012–present",
          adds: [
            "three straight-edged bayonet lugs",
            "locking pin/notch at 4:30",
            "mounting index",
            "ten-contact electrical block at the bottom (4:30–7:30)",
          ],
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
    flangeFocalDistanceMm: v(17.7, "secondary", W),
    nominalThroatDiameterMm: v(44, "secondary", W),
    effectiveClearApertureMm: v(44, "secondary", W),
    cameraMountOuterDiameterMm: v(50, "photo_scaled", J),
    lensMountOuterDiameterMm: v(48, "photo_scaled", J),
    contactCount: v(10, "secondary", W),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: unknownV(W),
    lockRotationDeg: unknownV(W),
    lockRotationDirection: dirV("unknown", "unknown", []),
  },

  cameraSideFeatures: [
    { featureId: "body-throat", featureType: "body_throat", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "secondary", W), startAngleDeg: v(0, "secondary", W), endAngleDeg: v(360, "secondary", W), innerRadiusMm: v(0, "secondary", W), outerRadiusMm: v(22, "secondary", W), depthMm: naV(), matesWith: "", shapeNotes: "44 mm throat opening" },
    { featureId: "body-mount-ring", featureType: "mount_ring", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: v(0, "photo_scaled", J), endAngleDeg: v(360, "photo_scaled", J), innerRadiusMm: v(22, "secondary", W), outerRadiusMm: v(25, "photo_scaled", J), depthMm: naV(), matesWith: "", shapeNotes: "visible body mount ring" },
    { featureId: "body-slot-1", featureType: "bayonet_receiving_slot", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(30, "photo_scaled", J), startAngleDeg: v(10, "photo_scaled", J), endAngleDeg: v(50, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), depthMm: v(1.6, "photo_scaled", J), matesWith: "lens-lug-1", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "body-slot-2", featureType: "bayonet_receiving_slot", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(150, "photo_scaled", J), startAngleDeg: v(130, "photo_scaled", J), endAngleDeg: v(170, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), depthMm: v(1.6, "photo_scaled", J), matesWith: "lens-lug-2", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "body-slot-3", featureType: "bayonet_receiving_slot", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(290, "photo_scaled", J), startAngleDeg: v(270, "photo_scaled", J), endAngleDeg: v(310, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), depthMm: v(1.6, "photo_scaled", J), matesWith: "lens-lug-3", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "body-index-mark", featureType: "index_mark", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(25.5, "photo_scaled", J), depthMm: naV(), matesWith: "lens-index-mark", shapeNotes: "mounting index" },
    { featureId: "body-lock-pin", featureType: "lock_pin", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(135, "secondary", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(23, "photo_scaled", J), depthMm: v(2, "photo_scaled", J), matesWith: "lens-lock-notch", shapeNotes: "locking groove at 4:30 [fx-2]" },
  ],

  lensSideFeatures: [
    { featureId: "lens-throat", featureType: "lens_throat", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "secondary", W), startAngleDeg: v(0, "secondary", W), endAngleDeg: v(360, "secondary", W), innerRadiusMm: v(0, "secondary", W), outerRadiusMm: v(21, "photo_scaled", J), thicknessMm: naV(), matesWith: "", shapeNotes: "rear opening" },
    { featureId: "lens-mount-ring", featureType: "lens_mount_ring", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: v(0, "photo_scaled", J), endAngleDeg: v(360, "photo_scaled", J), innerRadiusMm: v(21, "photo_scaled", J), outerRadiusMm: v(24, "photo_scaled", J), thicknessMm: naV(), matesWith: "", shapeNotes: "lens flange ring" },
    { featureId: "lens-lug-1", featureType: "bayonet_lug", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(30, "photo_scaled", J), startAngleDeg: v(10, "photo_scaled", J), endAngleDeg: v(50, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), thicknessMm: v(1.6, "photo_scaled", J), matesWith: "body-slot-1", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "lens-lug-2", featureType: "bayonet_lug", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(150, "photo_scaled", J), startAngleDeg: v(130, "photo_scaled", J), endAngleDeg: v(170, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), thicknessMm: v(1.6, "photo_scaled", J), matesWith: "body-slot-2", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "lens-lug-3", featureType: "bayonet_lug", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(290, "photo_scaled", J), startAngleDeg: v(270, "photo_scaled", J), endAngleDeg: v(310, "photo_scaled", J), innerRadiusMm: v(22, "photo_scaled", J), outerRadiusMm: v(24.5, "photo_scaled", J), thicknessMm: v(1.6, "photo_scaled", J), matesWith: "body-slot-3", shapeNotes: "three-lug bayonet, straight edges [fx-1]" },
    { featureId: "lens-index-mark", featureType: "index_mark", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(0, "photo_scaled", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(24.5, "photo_scaled", J), thicknessMm: naV(), matesWith: "body-index-mark", shapeNotes: "aligns with body index" },
    { featureId: "lens-lock-notch", featureType: "lock_notch", profileId: "fujifilm-x/base", count: 1, centerAngleDeg: v(135, "secondary", J), startAngleDeg: unknownV(J), endAngleDeg: unknownV(J), innerRadiusMm: unknownV(J), outerRadiusMm: v(23, "photo_scaled", J), thicknessMm: v(2, "photo_scaled", J), matesWith: "body-lock-pin", shapeNotes: "receives body lock pin (4:30)" },
  ],

  axialStack: [
    { planeId: "flange_datum", zPositionMm: v(0, "secondary", W), thicknessMm: v(0, "secondary", W), diameterMm: v(50, "photo_scaled", J) },
    { planeId: "bayonet_lug_engagement", zPositionMm: v(1, "photo_scaled", J), thicknessMm: v(1.6, "photo_scaled", J), diameterMm: v(46, "photo_scaled", J) },
    { planeId: "electrical_contact_plane", zPositionMm: v(0.5, "photo_scaled", J), thicknessMm: v(0.5, "photo_scaled", J), diameterMm: v(42, "photo_scaled", J) },
    { planeId: "sensor_film_plane", zPositionMm: v(-17.7, "secondary", W), thicknessMm: v(0, "secondary", W), diameterMm: v(28.3, "secondary", W) },
  ],

  contacts: [
    { side: "body", contactNo: 1, profileId: "fujifilm-x/base", centerAngleDeg: v(135, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 2, profileId: "fujifilm-x/base", centerAngleDeg: v(145, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 3, profileId: "fujifilm-x/base", centerAngleDeg: v(155, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 4, profileId: "fujifilm-x/base", centerAngleDeg: v(165, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 5, profileId: "fujifilm-x/base", centerAngleDeg: v(175, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 6, profileId: "fujifilm-x/base", centerAngleDeg: v(185, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 7, profileId: "fujifilm-x/base", centerAngleDeg: v(195, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 8, profileId: "fujifilm-x/base", centerAngleDeg: v(205, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 9, profileId: "fujifilm-x/base", centerAngleDeg: v(215, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "body", contactNo: 10, profileId: "fujifilm-x/base", centerAngleDeg: v(225, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0.4, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 1, profileId: "fujifilm-x/base", centerAngleDeg: v(135, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 2, profileId: "fujifilm-x/base", centerAngleDeg: v(145, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 3, profileId: "fujifilm-x/base", centerAngleDeg: v(155, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 4, profileId: "fujifilm-x/base", centerAngleDeg: v(165, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 5, profileId: "fujifilm-x/base", centerAngleDeg: v(175, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 6, profileId: "fujifilm-x/base", centerAngleDeg: v(185, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 7, profileId: "fujifilm-x/base", centerAngleDeg: v(195, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 8, profileId: "fujifilm-x/base", centerAngleDeg: v(205, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 9, profileId: "fujifilm-x/base", centerAngleDeg: v(215, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
    { side: "lens", contactNo: 10, profileId: "fujifilm-x/base", centerAngleDeg: v(225, "photo_scaled", J), centerRadiusMm: v(20.5, "photo_scaled", J), widthMm: v(1.3, "photo_scaled", J), heightMm: v(2.6, "photo_scaled", J), shape: "pad", protrusionMm: v(0, "photo_scaled", J), function: "" },
  ],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    { featureId: "body-mount-screws", featureType: "mount_screws", side: "body", count: v(4, "photo_scaled", J), pcdMm: v(47, "photo_scaled", J), diameterMm: v(2, "photo_scaled", J), centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", J), shape: "round" },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "fx-1",
      sourceType: "secondary",
      citation: "“Fujifilm X-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Fujifilm_X-mount",
      archiveUrl: "http://web.archive.org/web/20251121080038/https://en.wikipedia.org/wiki/Fujifilm_X-mount",
      archiveDate: "2025-11-21",
      appliesTo: "flange focal distance, 44 mm throat, ten contacts, three lugs",
      confidence: "high",
    },
    {
      ref: "fx-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Fujifilm X,” JAPB (japb.net). Accessed 2026-06-04.",
      liveUrl: "https://japb.net/theory/lensmounts/fujifilm-x/",
      archiveUrl: "http://web.archive.org/web/20251016005946/https://japb.net/theory/lensmounts/fujifilm-x/",
      archiveDate: "2025-10-16",
      appliesTo: "locking groove at 4:30, ten contacts across 4:30–7:30, three straight-edged lugs",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue: "Lug angular spans, the mounting-index clock position, and the lock rotation angle/direction are photo-scaled or undocumented; per-contact clock positions are interpolated within the documented 4:30–7:30 band.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to an official Fujifilm X mount drawing or measured sample.",
    },
  ],
} satisfies MountSpecInput;

export default FUJIFILM_X_MOUNT;
