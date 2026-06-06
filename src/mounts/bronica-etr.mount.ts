/**
 * Zenza Bronica ETR mount SVG specification.
 *
 * The ETR entry is intentionally partial: the 69 mm register and ETR system identity are sourced, but
 * model-specific bayonet-sector and leaf-shutter coupling dimensions remain unresolved. The related
 * Bronica patent is used as mechanism context, not as a complete ETR production drawing.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["betr-1", "betr-2", "betr-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "bronica-etr/base",
  refs: REF,
  throatDiameterMm: 54,
  cameraOuterDiameterMm: 64,
  lensOuterDiameterMm: 62,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 36,
  lockCenterAngleDeg: 270,
  scalarStatus: "patent",
  featureStatus: "patent",
  lugShapeNotes: "representative Bronica ETR bayonet sectors; exact geometry unresolved",
  lockShapeNotes: "lens release/lock position photo-scaled",
});

const BRONICA_ETR_MOUNT = {
  mountId: "bronica-etr",
  displayLabel: "Zenza Bronica ETR",
  projectNote: "Bronica ETR 6x4.5 medium-format SLR mount.",
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
      baseProfileId: "bronica-etr/base",
      selectedMvpProfileId: "bronica-etr/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "bronica-etr/base",
          profileType: "base",
          appliesTo: "Bronica ETR / ETRS / ETRSi 6x4.5 leaf-shutter lenses and bodies",
          adds: ["medium-format bayonet", "leaf-shutter cocking/release coupling", "aperture coupling"],
          removes: ["electrical contacts in the classic leaf-shutter lens mount"],
          changes: ["ETR-specific mapping from the broader Bronica patent family remains unconfirmed"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(69, "secondary", REF),
    nominalThroatDiameterMm: v(54, "patent", REF),
    effectiveClearApertureMm: v(54, "patent", REF),
    cameraMountOuterDiameterMm: v(64, "patent", REF),
    lensMountOuterDiameterMm: v(62, "patent", REF),
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
    flangeFocalDistanceMm: 69,
    mountOuterDiameterMm: 64,
    lugEngagementDiameterMm: 59,
    sensorFilmDiameterMm: 69.7,
    featureStatus: "patent",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "leaf-shutter-cocking-coupler",
      side: "both",
      profileId: "bronica-etr/base",
      centerAngleDeg: v(40, "patent", REF),
      radiusMm: v(26, "patent", REF),
      sizeOrTravel: "cocking linkage",
      function: "cocks/arms the lens leaf shutter",
      compatibilityNotes: "placeholder until an ETR service drawing is sourced",
    },
    {
      featureId: "aperture-control-coupler",
      side: "both",
      profileId: "bronica-etr/base",
      centerAngleDeg: v(320, "patent", REF),
      radiusMm: v(26, "patent", REF),
      sizeOrTravel: "lever",
      function: "body/lens aperture coordination",
      compatibilityNotes: "position photo-scaled",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(REF, 4, 60, 2, [45, 135, 225, 315], "patent")],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "betr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "69.0 mm Zenza Bronica ETR register",
      confidence: "medium",
    },
    {
      ref: "betr-2",
      sourceType: "secondary",
      citation: "“Zenza Bronica ETRSi,” Lunar Stage. Accessed 2026-06-06.",
      liveUrl: "Lunar Stage: https://lunarstage.com/bronica-etrsi/",
      archiveUrl: "https://lunarstage.com/bronica-etrsi/",
      archiveDate: "2026-06-06",
      appliesTo: "ETR system identity, 69.0 mm flange-to-focal-plane distance",
      confidence: "medium",
    },
    {
      ref: "betr-p1",
      sourceType: "patent",
      citation: "US4063264A, Bronica lens-shutter SLR interchangeable-lens mount family. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Bronica mount-family and leaf-shutter coupling research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "ETR bayonet sector geometry and leaf-shutter coupling positions are unresolved; current figure is register-correct and renderable but not reference-grade.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "coreDimensions"],
      candidateValues: [],
      resolution: "Upgrade from Bronica ETR service manuals or measured ETR body/lens samples.",
    },
  ],
} satisfies MountSpecInput;

export default BRONICA_ETR_MOUNT;
