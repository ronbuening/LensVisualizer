/**
 * Hasselblad V mount SVG specification.
 *
 * V-system data is currently register/throat-led: the 74.9 mm register is well attested, while native
 * bayonet-sector geometry is represented as photo-scaled placeholder geometry pending a dimensioned
 * Hasselblad service drawing or measured sample.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["hv-1", "hv-2", "hv-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "hasselblad-v/base",
  refs: REF,
  throatDiameterMm: 69,
  cameraOuterDiameterMm: 78,
  lensOuterDiameterMm: 76,
  lugCentersDeg: [0, 120, 240],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 270,
  scalarStatus: "secondary",
  featureStatus: "patent",
  lugShapeNotes: "representative V-system bayonet sectors; exact lug geometry unresolved",
  lockShapeNotes: "V-system lock/release feature position photo-scaled",
});

const HASSELBLAD_V_MOUNT = {
  mountId: "hasselblad-v",
  displayLabel: "Hasselblad V",
  projectNote: "Hasselblad V-system medium-format bayonet mount.",
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
      referenceGrade: ["exact_bayonet_lug_geometry", "shutter_cocking_coupling_positions"],
    },
    profileModel: {
      baseProfileId: "hasselblad-v/base",
      selectedMvpProfileId: "hasselblad-v/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "hasselblad-v/base",
          profileType: "base",
          appliesTo: "Hasselblad V-system 500/200-series lenses and bodies",
          adds: ["medium-format bayonet interface", "lens shutter synchronization/cocking couplings"],
          removes: ["electrical contacts in the classic mechanical interface"],
          changes: ["early Hasselblad-related patent is treated as related lineage, not a complete V mount drawing"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(74.9, "secondary", REF),
    nominalThroatDiameterMm: v(69, "secondary", REF),
    effectiveClearApertureMm: v(69, "secondary", REF),
    cameraMountOuterDiameterMm: v(78, "patent", REF),
    lensMountOuterDiameterMm: v(76, "patent", REF),
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
    flangeFocalDistanceMm: 74.9,
    mountOuterDiameterMm: 78,
    lugEngagementDiameterMm: 72,
    sensorFilmDiameterMm: 79.2,
    featureStatus: "patent",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "leaf-shutter-cocking-coupler",
      side: "both",
      profileId: "hasselblad-v/base",
      centerAngleDeg: v(35, "patent", REF),
      radiusMm: v(34, "patent", REF),
      sizeOrTravel: "cocking shaft / interlock",
      function: "coordinates the lens leaf shutter with the body",
      compatibilityNotes: "placeholder until a dimensioned V-system coupling drawing is sourced",
    },
    {
      featureId: "aperture-shutter-release-coupler",
      side: "both",
      profileId: "hasselblad-v/base",
      centerAngleDeg: v(320, "patent", REF),
      radiusMm: v(34, "patent", REF),
      sizeOrTravel: "mechanical linkage",
      function: "body-to-lens shutter/aperture release coordination",
      compatibilityNotes: "position photo-scaled",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(REF, 4, 74, 2.5, [45, 135, 225, 315], "patent")],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "hv-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "74.9 mm Hasselblad V-mount register",
      confidence: "medium",
    },
    {
      ref: "hv-2",
      sourceType: "secondary",
      citation: "Film and Digital Times / IB/E Optics mount chart. Accessed 2026-06-06.",
      liveUrl: "FDTimes chart: https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveDate: "2026-06-06",
      appliesTo: "Hasselblad 500/200 V-system 74.9 mm FFD and 69 mm inside diameter chart entry",
      confidence: "medium",
    },
    {
      ref: "hv-p1",
      sourceType: "patent",
      citation: "US2526433A, early Hasselblad-related lens-mount/focusing patent. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US2526433A/en",
      archiveUrl: "https://patents.google.com/patent/US2526433A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Hasselblad mount-family research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "Bayonet lug count/spans and the V-system leaf-shutter coupling positions are not confirmed from a dimensioned source; current values are renderable placeholders.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade from Hasselblad service drawings or measured V-system body/lens samples.",
    },
  ],
} satisfies MountSpecInput;

export default HASSELBLAD_V_MOUNT;
