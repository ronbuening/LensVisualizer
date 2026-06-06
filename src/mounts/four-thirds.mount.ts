/**
 * Four Thirds mount SVG specification.
 *
 * The original DSLR Four Thirds mount has a 38.67 mm register, about 44 mm throat, a three-pronged
 * bayonet, and nine electronic contacts at the bottom of the mount. It is modeled separately from
 * Micro Four Thirds because the register, throat, contact count, and lock/contact clocking differ.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const W = ["ft-1"];
const J = ["ft-2"];
const REF = ["ft-1", "ft-2", "ft-p1"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "four-thirds/base",
  refs: REF,
  throatDiameterMm: 44,
  cameraOuterDiameterMm: 50,
  lensOuterDiameterMm: 48,
  lugCentersDeg: [30, 150, 292],
  lugSpanDeg: 38,
  lockCenterAngleDeg: 270,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Four Thirds three-pronged tapered bayonet",
  lockShapeNotes: "locking groove at 9 o'clock",
});

const FOUR_THIRDS_MOUNT = {
  mountId: "four-thirds",
  displayLabel: "Four Thirds",
  projectNote: "Olympus/Panasonic Four Thirds DSLR mount.",
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
      baseProfileId: "four-thirds/base",
      selectedMvpProfileId: "four-thirds/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "four-thirds/base",
          profileType: "base",
          appliesTo: "Four Thirds DSLR lenses and bodies, 2003–2017",
          adds: ["three-pronged bayonet", "9-contact electronic interface", "9 o'clock lock groove"],
          removes: ["mechanical aperture/AF couplings"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(38.67, "secondary", W),
    nominalThroatDiameterMm: v(44, "secondary", J),
    effectiveClearApertureMm: v(44, "secondary", J),
    cameraMountOuterDiameterMm: v(50, "photo_scaled", J),
    lensMountOuterDiameterMm: v(48, "photo_scaled", J),
    contactCount: v(9, "secondary", J),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: v(60, "photo_scaled", J),
    lockRotationDeg: v(60, "photo_scaled", J),
    lockRotationDirection: dirV("clockwise", "photo_scaled", J),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 38.67,
    mountOuterDiameterMm: 50,
    lugEngagementDiameterMm: 46,
    sensorFilmDiameterMm: 21.64,
    includeElectricalPlane: true,
    electricalDiameterMm: 40,
  }),

  contacts: makeContactBank({
    profileId: "four-thirds/base",
    refs: REF,
    count: 9,
    startAngleDeg: 150,
    stepDeg: 7.5,
    radiusMm: 20,
  }),

  mechanicalCouplings: [],
  screwsGasketsBaffles: [makeMountScrews(J, 4, 46, 1.8, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "ft-1",
      sourceType: "secondary",
      citation: "“Four Thirds system,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Four_Thirds_system",
      archiveUrl: "http://web.archive.org/web/20260601114631/https://en.wikipedia.org/wiki/Four_Thirds_system",
      archiveDate: "2026-06-01",
      appliesTo: "bayonet type and 38.67 mm flange focal distance",
      confidence: "medium",
    },
    {
      ref: "ft-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Four Thirds,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "https://japb.net/theory/lensmounts/fourthirds/",
      archiveUrl: "http://web.archive.org/web/20260307053302/https://japb.net/theory/lensmounts/fourthirds/",
      archiveDate: "2026-03-07",
      appliesTo: "three-pronged bayonet, 9 o'clock lock groove, 9 contacts between 5:00 and 7:00",
      confidence: "medium",
    },
    {
      ref: "ft-p1",
      sourceType: "patent",
      citation: "US6910814B2, Four Thirds digital camera system with lens/body mount portions. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US6910814B2/en",
      archiveUrl: "https://patents.google.com/patent/US6910814B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Four Thirds lens-side and body-side mount portions",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "Four Thirds lug spans, contact pitch and screw positions are photo-scaled; core register and contact count are sourced.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Upgrade to a Four Thirds standard drawing or measured body/lens sample.",
    },
  ],
} satisfies MountSpecInput;

export default FOUR_THIRDS_MOUNT;
