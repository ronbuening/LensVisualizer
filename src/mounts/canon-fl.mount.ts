/**
 * Canon FL mount SVG specification.
 *
 * FL is the FD predecessor in Canon's R/FL/FD breech-lock family. It shares the 42 mm register and
 * breech-lock seating concept, but predates the FD aperture-reporting interface. Geometry is modeled
 * as a conservative FL-family breech-lock diagram with the surviving unknowns explicitly flagged.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const W = ["fl-1"];
const REF = ["fl-1", "fl-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "canon-fl/base",
  refs: REF,
  throatDiameterMm: 48,
  cameraOuterDiameterMm: 58,
  lensOuterDiameterMm: 56,
  lugCentersDeg: [30, 150, 270],
  lugSpanDeg: 40,
  lockCenterAngleDeg: 0,
  scalarStatus: "secondary",
  featureStatus: "patent",
  lugShapeNotes: "FL/FD breech-lock bayonet seating sectors",
  lockShapeNotes: "alignment/locking pin used with the lens-side breech collar",
});

const CANON_FL_MOUNT = {
  mountId: "canon-fl",
  displayLabel: "Canon FL",
  projectNote: "Canon FL manual-focus SLR breech-lock mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "breech_lock",
  lockType: "breech_collar",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "index_mark", "breech_collar"],
      variantRequired: ["aperture_stop_down_lever"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["breech_ramp_undercut", "lever_travel"],
    },
    profileModel: {
      baseProfileId: "canon-fl/base",
      selectedMvpProfileId: "canon-fl/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "canon-fl/base",
          profileType: "base",
          appliesTo: "Canon FL breech-lock lenses and bodies, 1964–1971",
          adds: ["FL/FD-family breech-lock bayonet", "lens-side rotating locking collar", "automatic diaphragm lever"],
          removes: ["FD selected-aperture reporting linkage", "electrical contacts"],
          changes: ["predecessor to FD, with simpler aperture communication"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(42, "secondary", W),
    nominalThroatDiameterMm: v(48, "secondary", W),
    effectiveClearApertureMm: v(48, "secondary", W),
    cameraMountOuterDiameterMm: v(58, "photo_scaled", W),
    lensMountOuterDiameterMm: v(56, "photo_scaled", W),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: v(90, "photo_scaled", W),
    lockRotationDeg: v(90, "photo_scaled", W),
    lockRotationDirection: dirV("clockwise", "photo_scaled", W),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 42,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 53,
    sensorFilmDiameterMm: 43.3,
    featureStatus: "patent",
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "automatic-diaphragm-lever",
      side: "both",
      profileId: "canon-fl/base",
      centerAngleDeg: v(45, "photo_scaled", W),
      radiusMm: v(23, "photo_scaled", W),
      sizeOrTravel: "lever",
      function: "automatic diaphragm stop-down",
      compatibilityNotes: "FL bodies meter by stop-down rather than FD open-aperture automation",
    },
    {
      featureId: "breech-lock-collar",
      side: "lens",
      profileId: "canon-fl/base",
      centerAngleDeg: v(0, "photo_scaled", W),
      radiusMm: v(28, "photo_scaled", W),
      sizeOrTravel: "rotating collar",
      function: "clamps the lens to the body without rotating the lens barrel",
      compatibilityNotes: "shared Canon R/FL/FD breech-lock lineage",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(W, 4, 54, 2, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "fl-1",
      sourceType: "secondary",
      citation: "“Canon FL lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_FL_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513020307/https://en.wikipedia.org/wiki/Canon_FL_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "Canon FL mount identity and 42 mm Canon FL/FD-family register",
      confidence: "medium",
    },
    {
      ref: "fl-p1",
      sourceType: "patent",
      citation: "US3906534A, “Device for mounting and dismounting an interchangeable lens.” Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US3906534A/en",
      archiveUrl: "https://patents.google.com/patent/US3906534A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Canon breech-lock lineage research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "FL-specific lug/collar geometry and diaphragm-lever position are unresolved; current diagram is a renderable FL-family approximation.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to Canon FL service drawings or measured body/lens samples.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_FL_MOUNT;
