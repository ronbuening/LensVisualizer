/**
 * Zenza Bronica GS mount SVG specification.
 *
 * GS-1 uses a larger 6x7 leaf-shutter lens system. Public sources confirm the 85 mm register, while
 * the listed Bronica patent is treated as related mechanism context pending GS-specific drawings.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["bgs-1", "bgs-2", "bgs-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "bronica-gs/base",
  refs: REF,
  throatDiameterMm: 57,
  cameraOuterDiameterMm: 70,
  lensOuterDiameterMm: 68,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 36,
  lockCenterAngleDeg: 270,
  scalarStatus: "patent",
  featureStatus: "patent",
  lugShapeNotes: "representative Bronica GS bayonet sectors; exact geometry unresolved",
  lockShapeNotes: "lens release/lock position photo-scaled",
});

const BRONICA_GS_MOUNT = {
  mountId: "bronica-gs",
  displayLabel: "Zenza Bronica GS",
  projectNote: "Bronica GS-1 6x7 medium-format SLR mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["leaf_shutter_couplings"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["bayonet_lug_geometry", "shutter_cocking_coupling_positions"],
    },
    profileModel: {
      baseProfileId: "bronica-gs/base",
      selectedMvpProfileId: "bronica-gs/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "bronica-gs/base",
          profileType: "base",
          appliesTo: "Bronica GS-1 6x7 leaf-shutter lenses and bodies",
          adds: ["medium-format bayonet", "leaf-shutter cocking/release coupling", "aperture coupling"],
          removes: ["electrical contacts in the classic leaf-shutter lens mount"],
          changes: ["GS-specific mapping from the broader Bronica patent family remains unconfirmed"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(85, "secondary", REF),
    nominalThroatDiameterMm: v(57, "patent", REF),
    effectiveClearApertureMm: v(57, "patent", REF),
    cameraMountOuterDiameterMm: v(70, "patent", REF),
    lensMountOuterDiameterMm: v(68, "patent", REF),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(60, "patent", REF),
    lockRotationDeg: v(60, "patent", REF),
    lockRotationDirection: dirV("clockwise", "patent", REF),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 85,
    mountOuterDiameterMm: 70,
    lugEngagementDiameterMm: 64,
    sensorFilmDiameterMm: 89.6,
    featureStatus: "patent",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "leaf-shutter-cocking-coupler",
      side: "both",
      profileId: "bronica-gs/base",
      centerAngleDeg: v(40, "patent", REF),
      radiusMm: v(28, "patent", REF),
      sizeOrTravel: "cocking linkage",
      function: "cocks/arms the lens leaf shutter",
      compatibilityNotes: "placeholder until a GS service drawing is sourced",
    },
    {
      featureId: "aperture-control-coupler",
      side: "both",
      profileId: "bronica-gs/base",
      centerAngleDeg: v(320, "patent", REF),
      radiusMm: v(28, "patent", REF),
      sizeOrTravel: "lever",
      function: "body/lens aperture coordination",
      compatibilityNotes: "position photo-scaled",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(REF, 4, 66, 2.2, [45, 135, 225, 315], "patent")],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "bgs-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "85.0 mm Zenza Bronica GS register",
      confidence: "medium",
    },
    {
      ref: "bgs-2",
      sourceType: "secondary",
      citation: "“Bronica GS-1,” Camera-wiki.org. Accessed 2026-06-06.",
      liveUrl: "https://camera-wiki.org/wiki/Bronica_GS1",
      archiveUrl: "https://camera-wiki.org/wiki/Bronica_GS1",
      archiveDate: "2026-06-06",
      appliesTo: "GS-1 system identity and lens-mount distinction from SQ",
      confidence: "medium",
    },
    {
      ref: "bgs-p1",
      sourceType: "patent",
      citation: "US4063264A, Bronica lens-shutter SLR interchangeable-lens mount family. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Bronica mount-family and leaf-shutter coupling research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "GS bayonet sector geometry and leaf-shutter coupling positions are unresolved; GS and SQ share a register but are not assumed mechanically identical.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "coreDimensions"],
      candidateValues: [],
      resolution: "Upgrade from Bronica GS service manuals or measured GS body/lens samples.",
    },
  ],
} satisfies MountSpecInput;

export default BRONICA_GS_MOUNT;
