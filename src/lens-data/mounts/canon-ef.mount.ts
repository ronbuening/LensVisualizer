/**
 * Canon EF mount SVG specification.
 *
 * EF is honestly modeled as declared `base-only` (package Section 2.5): unlike Nikon F or Pentax K,
 * its physical interface never forked into incompatible generations, so one profile is the complete
 * MVP. It is the catalog's clean fully-electronic, coupling-free case — eight electrical contacts,
 * no mechanical aperture/AF levers — contrasting with the mechanically-coupled Nikon and Pentax
 * mounts.
 *
 * Headline dimensions (flange focal distance 44 mm, 54 mm throat, three unsymmetrical bayonet
 * prongs, eight electrical pins) are sourced from the Canon EF lens-mount reference [ef-1]; fine
 * angular geometry (lug spans, lock/index/contact clock positions) is photo-scaled and flagged in
 * openQuestions pending an official mount drawing.
 */

import type { MountSpecInput } from "../../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../../optics/mount/authoring.js";

const REF = ["ef-1"];

const CANON_EF_MOUNT = {
  mountId: "canon-ef",
  displayLabel: "Canon EF",
  projectNote: "Canon EF SLR mount.",
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
      baseProfileId: "canon-ef/base",
      selectedMvpProfileId: "canon-ef/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "canon-ef/base",
          profileType: "base",
          appliesTo: "all Canon EF lenses and EOS bodies, 1987–present",
          adds: ["three-prong bayonet", "lock pin/notch", "mounting index", "eight electrical contacts"],
          removes: [],
          changes: [],
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44, "secondary", REF),
    nominalThroatDiameterMm: v(54, "secondary", REF),
    effectiveClearApertureMm: v(54, "secondary", REF),
    cameraMountOuterDiameterMm: v(65, "photo_scaled", REF),
    lensMountOuterDiameterMm: v(63, "photo_scaled", REF),
    contactCount: v(8, "secondary", REF),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(60, "photo_scaled", REF),
    lockRotationDeg: v(60, "photo_scaled", REF),
    lockRotationDirection: dirV("clockwise", "secondary", REF),
  },

  cameraSideFeatures: [
    { featureId: "body-throat", featureType: "body_throat", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(27, "secondary", REF), depthMm: naV(), matesWith: "", shapeNotes: "54 mm throat opening" },
    { featureId: "body-mount-ring", featureType: "mount_ring", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(27, "secondary", REF), outerRadiusMm: v(32.5, "photo_scaled", REF), depthMm: naV(), matesWith: "", shapeNotes: "visible body mount ring" },
    { featureId: "body-slot-1", featureType: "bayonet_receiving_slot", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(30, "photo_scaled", REF), startAngleDeg: v(8, "photo_scaled", REF), endAngleDeg: v(52, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lug-1", shapeNotes: "unsymmetrical prong" },
    { featureId: "body-slot-2", featureType: "bayonet_receiving_slot", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(150, "photo_scaled", REF), startAngleDeg: v(130, "photo_scaled", REF), endAngleDeg: v(170, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lug-2", shapeNotes: "unsymmetrical prong" },
    { featureId: "body-slot-3", featureType: "bayonet_receiving_slot", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(290, "photo_scaled", REF), startAngleDeg: v(270, "photo_scaled", REF), endAngleDeg: v(310, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lug-3", shapeNotes: "unsymmetrical prong" },
    { featureId: "body-index-mark", featureType: "index_mark", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(33, "photo_scaled", REF), depthMm: naV(), matesWith: "lens-index-mark", shapeNotes: "red dot alignment index" },
    { featureId: "body-lock-pin", featureType: "lock_pin", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(270, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(28, "photo_scaled", REF), depthMm: v(2, "photo_scaled", REF), matesWith: "lens-lock-notch", shapeNotes: "locking pin near 9 o'clock" },
  ],

  lensSideFeatures: [
    { featureId: "lens-throat", featureType: "lens_throat", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "secondary", REF), startAngleDeg: v(0, "secondary", REF), endAngleDeg: v(360, "secondary", REF), innerRadiusMm: v(0, "secondary", REF), outerRadiusMm: v(26, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "rear opening" },
    { featureId: "lens-mount-ring", featureType: "lens_mount_ring", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: v(0, "photo_scaled", REF), endAngleDeg: v(360, "photo_scaled", REF), innerRadiusMm: v(26, "photo_scaled", REF), outerRadiusMm: v(31.5, "photo_scaled", REF), thicknessMm: naV(), matesWith: "", shapeNotes: "lens flange ring" },
    { featureId: "lens-lug-1", featureType: "bayonet_lug", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(30, "photo_scaled", REF), startAngleDeg: v(8, "photo_scaled", REF), endAngleDeg: v(52, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-slot-1", shapeNotes: "" },
    { featureId: "lens-lug-2", featureType: "bayonet_lug", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(150, "photo_scaled", REF), startAngleDeg: v(130, "photo_scaled", REF), endAngleDeg: v(170, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-slot-2", shapeNotes: "" },
    { featureId: "lens-lug-3", featureType: "bayonet_lug", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(290, "photo_scaled", REF), startAngleDeg: v(270, "photo_scaled", REF), endAngleDeg: v(310, "photo_scaled", REF), innerRadiusMm: v(27, "photo_scaled", REF), outerRadiusMm: v(30, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-slot-3", shapeNotes: "" },
    { featureId: "lens-index-mark", featureType: "index_mark", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(0, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(30, "photo_scaled", REF), thicknessMm: naV(), matesWith: "body-index-mark", shapeNotes: "aligns with body red dot" },
    { featureId: "lens-lock-notch", featureType: "lock_notch", profileId: "canon-ef/base", count: 1, centerAngleDeg: v(270, "photo_scaled", REF), startAngleDeg: unknownV(REF), endAngleDeg: unknownV(REF), innerRadiusMm: unknownV(REF), outerRadiusMm: v(28, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), matesWith: "body-lock-pin", shapeNotes: "receives body lock pin" },
  ],

  axialStack: [
    { planeId: "flange_datum", zPositionMm: v(0, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(65, "photo_scaled", REF) },
    { planeId: "bayonet_lug_engagement", zPositionMm: v(1.2, "photo_scaled", REF), thicknessMm: v(2, "photo_scaled", REF), diameterMm: v(60, "photo_scaled", REF) },
    { planeId: "electrical_contact_plane", zPositionMm: v(0.5, "photo_scaled", REF), thicknessMm: v(0.5, "photo_scaled", REF), diameterMm: v(50, "photo_scaled", REF) },
    { planeId: "sensor_film_plane", zPositionMm: v(-44, "secondary", REF), thicknessMm: v(0, "secondary", REF), diameterMm: v(43.3, "secondary", REF) },
  ],

  contacts: [
    { side: "body", contactNo: 1, profileId: "canon-ef/base", centerAngleDeg: v(204, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "VBAT" },
    { side: "body", contactNo: 2, profileId: "canon-ef/base", centerAngleDeg: v(212, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "P-GND" },
    { side: "body", contactNo: 3, profileId: "canon-ef/base", centerAngleDeg: v(220, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "VDD" },
    { side: "body", contactNo: 4, profileId: "canon-ef/base", centerAngleDeg: v(228, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "DCL" },
    { side: "body", contactNo: 5, profileId: "canon-ef/base", centerAngleDeg: v(236, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "DLC" },
    { side: "body", contactNo: 6, profileId: "canon-ef/base", centerAngleDeg: v(244, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "LCLK" },
    { side: "body", contactNo: 7, profileId: "canon-ef/base", centerAngleDeg: v(252, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "D-GND" },
    { side: "body", contactNo: 8, profileId: "canon-ef/base", centerAngleDeg: v(260, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0.5, "photo_scaled", REF), function: "COM" },
    { side: "lens", contactNo: 1, profileId: "canon-ef/base", centerAngleDeg: v(204, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "VBAT" },
    { side: "lens", contactNo: 2, profileId: "canon-ef/base", centerAngleDeg: v(212, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "P-GND" },
    { side: "lens", contactNo: 3, profileId: "canon-ef/base", centerAngleDeg: v(220, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "VDD" },
    { side: "lens", contactNo: 4, profileId: "canon-ef/base", centerAngleDeg: v(228, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "DCL" },
    { side: "lens", contactNo: 5, profileId: "canon-ef/base", centerAngleDeg: v(236, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "DLC" },
    { side: "lens", contactNo: 6, profileId: "canon-ef/base", centerAngleDeg: v(244, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "LCLK" },
    { side: "lens", contactNo: 7, profileId: "canon-ef/base", centerAngleDeg: v(252, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "D-GND" },
    { side: "lens", contactNo: 8, profileId: "canon-ef/base", centerAngleDeg: v(260, "photo_scaled", REF), centerRadiusMm: v(25, "photo_scaled", REF), widthMm: v(1.4, "photo_scaled", REF), heightMm: v(3, "photo_scaled", REF), shape: "pad", protrusionMm: v(0, "photo_scaled", REF), function: "COM" },
  ],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    { featureId: "body-mount-screws", featureType: "mount_screws", side: "body", count: v(6, "photo_scaled", REF), pcdMm: v(62, "photo_scaled", REF), diameterMm: v(2, "photo_scaled", REF), centerAnglesDeg: degListV([15, 75, 135, 195, 255, 315], "photo_scaled", REF), shape: "round" },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "ef-1",
      sourceType: "secondary",
      citation: "“Canon EF lens mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_EF_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260604022746/https://en.wikipedia.org/wiki/Canon_EF_lens_mount",
      archiveDate: "2026-06-04",
      appliesTo: "flange focal distance, throat, bayonet, eight electrical pins",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue: "Bayonet lug/slot angular spans and the lock-pin/index/contact clock positions are photo-scaled, not from an official drawing.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "body-lock-pin"],
      candidateValues: [],
      resolution: "Upgrade to an official Canon EF mount drawing or measured sample.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_EF_MOUNT;
