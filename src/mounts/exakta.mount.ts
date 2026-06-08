/**
 * Exakta mount SVG specification.
 *
 * Exakta is modeled as the inner three-pronged bayonet used by Kine Exakta/Exa-family 35 mm SLRs.
 * The external telephoto bayonet and manufacturer variants are left as open questions; this MVP
 * renders the core inner mount and the characteristic locking/release interface.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const J = ["exa-2"];
const REF = ["exa-1", "exa-2", "exa-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "exakta/base",
  refs: REF,
  throatDiameterMm: 33.8,
  cameraOuterDiameterMm: 43,
  lensOuterDiameterMm: 41,
  lugCentersDeg: [0, 120, 240],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 300,
  scalarStatus: "secondary",
  featureStatus: "patent",
  lugShapeNotes: "inner Exakta three-pronged bayonet",
  lockShapeNotes: "spring-loaded lens release / locking pin",
  bodyThroatNotes: "about 33.8 mm inner Exakta throat",
});

const EXAKTA_MOUNT = {
  mountId: "exakta",
  displayLabel: "Exakta",
  projectNote: "Ihagee Exakta/Exa bayonet family.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["lens_release_lever", "aperture_pod_clearance"],
      mvpOptional: ["external_bayonet", "mount_screws"],
      referenceGrade: ["variant_specific_cutouts", "external_bayonet_dimensions"],
    },
    profileModel: {
      baseProfileId: "exakta/base",
      selectedMvpProfileId: "exakta/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "exakta/base",
          profileType: "base",
          appliesTo: "inner Exakta bayonet lenses and bodies, 1936 onward",
          adds: ["three-pronged inner bayonet", "spring-loaded locking/release pin", "left-side release clearance"],
          removes: ["electrical contacts"],
          changes: ["external telephoto bayonet and later Topcon/Mamiya variants not yet modeled"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44.7, "secondary", REF),
    nominalThroatDiameterMm: v(33.8, "secondary", J),
    effectiveClearApertureMm: v(33.8, "secondary", J),
    cameraMountOuterDiameterMm: v(43, "photo_scaled", J),
    lensMountOuterDiameterMm: v(41, "photo_scaled", J),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(45, "patent", REF),
    lockRotationDeg: v(45, "patent", REF),
    lockRotationDirection: dirV("clockwise", "patent", REF),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 44.7,
    mountOuterDiameterMm: 43,
    lugEngagementDiameterMm: 38,
    sensorFilmDiameterMm: 43.3,
    featureStatus: "patent",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "lens-release-lever-clearance",
      side: "body",
      profileId: "exakta/base",
      centerAngleDeg: v(300, "photo_scaled", J),
      radiusMm: v(20, "photo_scaled", J),
      sizeOrTravel: "spring-loaded release lever/cut-out",
      function: "retains and releases the lens locking pin",
      compatibilityNotes: "some later Topcon/RTL variants need different cut-outs",
    },
    {
      featureId: "aperture-pod-pass-through",
      side: "lens",
      profileId: "exakta/base",
      centerAngleDeg: v(315, "photo_scaled", J),
      radiusMm: v(22, "photo_scaled", J),
      sizeOrTravel: "external pod / pressure diaphragm clearance",
      function: "allows Exakta auto-aperture pod lenses to actuate the body release",
      compatibilityNotes: "not present on all lenses; modeled as a family-visible compatibility feature",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(J, 4, 39, 1.8, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "exa-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "44.7 mm Exakta register",
      confidence: "medium",
    },
    {
      ref: "exa-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Exakta,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "https://japb.net/theory/lens-mounts/exakta/",
      archiveUrl: "https://japb.net/theory/lens-mounts/exakta/",
      archiveDate: "2026-06-06",
      appliesTo: "three-pronged inner bayonet, about 33.8 mm throat, release/locking pin, Exakta variants",
      confidence: "medium",
    },
    {
      ref: "exa-p1",
      sourceType: "patent",
      citation: "US2136149A, Ihagee quick-detachable lens mount patent. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US2136149A/en",
      archiveUrl: "https://patents.google.com/patent/US2136149A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Exakta-family quick-detachable bayonet research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "The current Exakta diagram models only the inner bayonet; external bayonet, Topcon Exakta, Mamiya Exakta and RTL cut-out variants remain unresolved.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "screwsGasketsBaffles"],
      candidateValues: ["inner bayonet only", "inner + external bayonet variant profiles"],
      resolution: "Add variant profiles from measured body/lens samples or dimensioned service drawings.",
    },
  ],
} satisfies MountSpecInput;

export default EXAKTA_MOUNT;
