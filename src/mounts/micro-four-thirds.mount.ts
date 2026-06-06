/**
 * Micro Four Thirds mount SVG specification.
 *
 * MFT is the mirrorless successor to Four Thirds: 19.25 mm register, about 38 mm throat, three-prong
 * bayonet, 3 o'clock lock groove, and 11 contacts across the top of the mount.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const J = ["mft-1"];
const REF = ["mft-1", "mft-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "micro-four-thirds/base",
  refs: REF,
  throatDiameterMm: 38,
  cameraOuterDiameterMm: 44,
  lensOuterDiameterMm: 42,
  lugCentersDeg: [30, 150, 292],
  lugSpanDeg: 38,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "patent",
  lugShapeNotes: "Micro Four Thirds three-pronged bayonet",
  lockShapeNotes: "locking groove at 3 o'clock",
});

const MICRO_FOUR_THIRDS_MOUNT = {
  mountId: "micro-four-thirds",
  displayLabel: "Micro Four Thirds",
  projectNote: "Micro Four Thirds mirrorless mount.",
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
      baseProfileId: "micro-four-thirds/base",
      selectedMvpProfileId: "micro-four-thirds/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "micro-four-thirds/base",
          profileType: "base",
          appliesTo: "Micro Four Thirds lenses and bodies, 2008–present",
          adds: ["three-pronged bayonet", "11-contact electronic interface", "3 o'clock lock groove"],
          removes: ["mechanical aperture/AF couplings"],
          changes: ["shorter register and two additional contacts vs Four Thirds"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(19.25, "secondary", J),
    nominalThroatDiameterMm: v(38, "secondary", J),
    effectiveClearApertureMm: v(38, "secondary", J),
    cameraMountOuterDiameterMm: v(44, "photo_scaled", J),
    lensMountOuterDiameterMm: v(42, "photo_scaled", J),
    contactCount: v(11, "secondary", J),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", J),
    lockAngleDeg: v(60, "photo_scaled", J),
    lockRotationDeg: v(60, "photo_scaled", J),
    lockRotationDirection: dirV("clockwise", "photo_scaled", J),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 19.25,
    mountOuterDiameterMm: 44,
    lugEngagementDiameterMm: 40,
    sensorFilmDiameterMm: 21.64,
    includeElectricalPlane: true,
    electricalDiameterMm: 34,
    featureStatus: "patent",
  }),

  contacts: makeContactBank({
    profileId: "micro-four-thirds/base",
    refs: REF,
    count: 11,
    startAngleDeg: 315,
    stepDeg: 9,
    radiusMm: 17,
    status: "patent",
  }),

  mechanicalCouplings: [],
  screwsGasketsBaffles: [makeMountScrews(J, 4, 40, 1.6, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "mft-1",
      sourceType: "secondary",
      citation: "“Lens Mounts: Micro Four Thirds,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "https://japb.net/theory/lensmounts/microfourthirds/",
      archiveUrl: "http://web.archive.org/web/20260120020226/https://japb.net/theory/lensmounts/microfourthirds/",
      archiveDate: "2026-01-20",
      appliesTo: "19.25 mm register, about 38 mm throat, 3 o'clock lock groove, 11 contacts from 10:30–1:30",
      confidence: "medium",
    },
    {
      ref: "mft-p1",
      sourceType: "patent",
      citation: "US6910814B2, Four Thirds predecessor mount patent lead. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US6910814B2/en",
      archiveUrl: "https://patents.google.com/patent/US6910814B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "related predecessor Four Thirds body/lens mount structure",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "Micro Four Thirds lug spans, contact pitch and screw positions are photo-scaled within the documented lock/contact bands.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Upgrade to the MFT standard drawing or measured body/lens sample.",
    },
  ],
} satisfies MountSpecInput;

export default MICRO_FOUR_THIRDS_MOUNT;
