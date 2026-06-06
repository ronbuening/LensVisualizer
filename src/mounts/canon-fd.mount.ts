/**
 * Canon FD mount SVG specification.
 *
 * FD is a breech-lock manual-focus SLR mount: the lens is inserted and the lens-side locking ring
 * tightens around the stationary bayonet. The native geometry is FD/FL-family rather than a modern
 * rotating-lens bayonet, so the diagram uses the standard annular feature vocabulary with the
 * breech collar and aperture couplings called out as mechanical overlays.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeMountScrews, makeStandardAxialStack } from "./mountAuthoringShared.js";

const W = ["fd-1"];
const J = ["fd-2"];
const REF = ["fd-1", "fd-2", "fd-p1", "fd-p2"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "canon-fd/base",
  refs: REF,
  throatDiameterMm: 48,
  cameraOuterDiameterMm: 58,
  lensOuterDiameterMm: 56,
  lugCentersDeg: [30, 150, 270],
  lugSpanDeg: 40,
  lockCenterAngleDeg: 0,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "FD/FL breech-lock bayonet seating sectors",
  lockShapeNotes: "alignment/locking pin used with the lens-side breech collar",
  indexShapeNotes: "red alignment dot/pin for breech-lock insertion",
});

const CANON_FD_MOUNT = {
  mountId: "canon-fd",
  displayLabel: "Canon FD",
  projectNote: "Canon FD manual-focus SLR breech-lock mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "breech_lock",
  lockType: "breech_collar",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "index_mark", "breech_collar"],
      variantRequired: ["aperture_stop_down_lever", "aperture_indicator_lever"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["breech_ramp_undercut", "lever_travel"],
    },
    profileModel: {
      baseProfileId: "canon-fd/base",
      selectedMvpProfileId: "canon-fd/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "canon-fd/base",
          profileType: "base",
          appliesTo: "Canon FD breech-lock lenses and bodies, 1971–1979",
          adds: [
            "FD/FL breech-lock bayonet",
            "lens-side rotating locking collar",
            "stop-down lever",
            "aperture indicator lever",
          ],
          removes: ["electrical contacts"],
          changes: ["adds selected-aperture reporting over the earlier FL interface"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(42, "secondary", W),
    nominalThroatDiameterMm: v(48, "secondary", J),
    effectiveClearApertureMm: v(48, "secondary", J),
    cameraMountOuterDiameterMm: v(58, "photo_scaled", J),
    lensMountOuterDiameterMm: v(56, "photo_scaled", J),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", J),
    lockAngleDeg: v(90, "secondary", J),
    lockRotationDeg: v(90, "secondary", J),
    lockRotationDirection: dirV("clockwise", "secondary", J),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 42,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 53,
    sensorFilmDiameterMm: 43.3,
  }),

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "stop-down-lever",
      side: "both",
      profileId: "canon-fd/base",
      centerAngleDeg: v(45, "photo_scaled", J),
      radiusMm: v(23, "photo_scaled", J),
      sizeOrTravel: "lever",
      function: "camera stops the aperture down at exposure",
      compatibilityNotes: "FD retained the FL breech-lock seating geometry but added exposure-automation communication",
    },
    {
      featureId: "aperture-indicator-lever",
      side: "both",
      profileId: "canon-fd/base",
      centerAngleDeg: v(320, "photo_scaled", J),
      radiusMm: v(24, "photo_scaled", J),
      sizeOrTravel: "lever",
      function: "reports selected aperture from lens to body",
      compatibilityNotes: "FD-specific addition over FL",
    },
    {
      featureId: "breech-lock-collar",
      side: "lens",
      profileId: "canon-fd/base",
      centerAngleDeg: v(0, "photo_scaled", J),
      radiusMm: v(28, "photo_scaled", J),
      sizeOrTravel: "rotating collar, approx. 90 degrees free rotation",
      function: "clamps the lens to the body without rotating the lens barrel",
      compatibilityNotes:
        "new FD/FDn later moves the locking action to the lens barrel rather than a separate chrome collar",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(J, 4, 54, 2, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "fd-1",
      sourceType: "secondary",
      citation: "“Canon FD lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_FD_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513020333/https://en.wikipedia.org/wiki/Canon_FD_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "42 mm flange focal distance and FD lineage",
      confidence: "medium",
    },
    {
      ref: "fd-2",
      sourceType: "secondary",
      citation: "“Lens mounts: Canon FD,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "JAPB: https://japb.net/theory/lensmounts/canon-fd/",
      archiveUrl: "https://japb.net/theory/lensmounts/canon-fd/",
      archiveDate: "2026-06-06",
      appliesTo:
        "breech-lock type, 42 mm register, stop-down and aperture-indicator levers, approx. 90 degree collar rotation",
      confidence: "medium",
    },
    {
      ref: "fd-p1",
      sourceType: "patent",
      citation: "US3906534A, “Device for mounting and dismounting an interchangeable lens.” Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US3906534A/en",
      archiveUrl: "https://patents.google.com/patent/US3906534A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Canon breech-lock mounting/dismounting mechanism research lead",
      confidence: "low",
    },
    {
      ref: "fd-p2",
      sourceType: "patent",
      citation: "US4251134A, Canon interchangeable-lens safety/mechanism patent. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US4251134A/en",
      archiveUrl: "https://patents.google.com/patent/US4251134A/en",
      archiveDate: "2026-06-06",
      appliesTo: "Canon FD-era safety/mechanical mount research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "FD/FL breech-lock sector spans, collar ramp details, and lever clock positions are photo-scaled; the patent leads are related mechanism patents, not a full production mount drawing.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to Canon service drawings or measured FD body/lens samples.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_FD_MOUNT;
