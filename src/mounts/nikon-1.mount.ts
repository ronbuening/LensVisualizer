/**
 * Nikon 1 mount SVG specification.
 *
 * Nikon's CX-format mirrorless mount uses a 17 mm register, three-pronged bayonet, 12 contacts, and a
 * 3 o'clock locking groove. The contact bank is placed across 10:30–1:30 per the JAPB description.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const W = ["n1-1"];
const J = ["n1-2"];
const REF = ["n1-1", "n1-2", "n1-p1", "n1-p2", "n1-p3", "n1-p4"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "nikon-1/base",
  refs: REF,
  throatDiameterMm: 40,
  cameraOuterDiameterMm: 48,
  lensOuterDiameterMm: 46,
  lugCentersDeg: [30, 150, 292],
  lugSpanDeg: 38,
  lockCenterAngleDeg: 90,
  scalarStatus: "patent",
  featureStatus: "patent",
  lugShapeNotes: "Nikon 1 three-pronged mirrorless bayonet",
  lockShapeNotes: "locking groove at 3 o'clock",
});

const NIKON_1_MOUNT = {
  mountId: "nikon-1",
  displayLabel: "Nikon 1",
  projectNote: "Nikon 1 / CX-format mirrorless mount.",
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
      baseProfileId: "nikon-1/base",
      selectedMvpProfileId: "nikon-1/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "nikon-1/base",
          profileType: "base",
          appliesTo: "Nikon 1 lenses and CX bodies, 2011–2018",
          adds: ["three-pronged bayonet", "lock notch at 3 o'clock", "12-contact electronic interface"],
          removes: ["all mechanical aperture/AF couplings"],
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
    flangeFocalDistanceMm: v(17, "secondary", W),
    nominalThroatDiameterMm: v(40, "photo_scaled", J),
    effectiveClearApertureMm: v(40, "photo_scaled", J),
    cameraMountOuterDiameterMm: v(48, "photo_scaled", J),
    lensMountOuterDiameterMm: v(46, "photo_scaled", J),
    contactCount: v(12, "secondary", J),
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
    flangeFocalDistanceMm: 17,
    mountOuterDiameterMm: 48,
    lugEngagementDiameterMm: 43,
    sensorFilmDiameterMm: 15.86,
    includeElectricalPlane: true,
    electricalDiameterMm: 38,
    featureStatus: "patent",
  }),

  contacts: makeContactBank({
    profileId: "nikon-1/base",
    refs: REF,
    count: 12,
    startAngleDeg: 315,
    stepDeg: 8.2,
    radiusMm: 18,
    status: "patent",
  }),

  mechanicalCouplings: [],
  screwsGasketsBaffles: [makeMountScrews(J, 4, 44, 1.6, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "n1-1",
      sourceType: "secondary",
      citation: "“Nikon 1-mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Nikon_1-mount",
      archiveUrl: "http://web.archive.org/web/20260422235205/https://en.wikipedia.org/wiki/Nikon_1-mount",
      archiveDate: "2026-04-22",
      appliesTo: "Nikon 1 mount identity and 17 mm register",
      confidence: "medium",
    },
    {
      ref: "n1-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Nikon 1,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "JAPB: https://japb.net/theory/lensmounts/nikon-1/",
      archiveUrl: "https://japb.net/theory/lensmounts/nikon-1/",
      archiveDate: "2026-06-06",
      appliesTo: "three-pronged bayonet, 3 o'clock lock groove, 12 contacts from 10:30–1:30",
      confidence: "medium",
    },
    {
      ref: "n1-p1",
      sourceType: "patent",
      citation: "US9075287B2, Nikon 1/CX-era camera accessory/body mount family. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US9075287B2/en",
      archiveUrl: "https://patents.google.com/patent/US9075287B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Nikon 1 accessory/body mount research lead",
      confidence: "medium",
    },
    {
      ref: "n1-p2",
      sourceType: "patent",
      citation: "US8430582B2, Nikon camera accessory mount family. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US8430582B2/en",
      archiveUrl: "https://patents.google.com/patent/US8430582B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Nikon 1/CX-era mount research lead",
      confidence: "medium",
    },
    {
      ref: "n1-p3",
      sourceType: "patent",
      citation: "US9164360B2, Nikon camera accessory mount family. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US9164360B2/en",
      archiveUrl: "https://patents.google.com/patent/US9164360B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Nikon 1/CX-era mount research lead",
      confidence: "medium",
    },
    {
      ref: "n1-p4",
      sourceType: "patent",
      citation: "US9645476B2, Nikon camera accessory mount family. Accessed 2026-06-06.",
      liveUrl: "Google Patents: https://patents.google.com/patent/US9645476B2/en",
      archiveUrl: "https://patents.google.com/patent/US9645476B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Nikon 1/CX-era mount research lead",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "Nikon 1 throat/outer diameters, lug spans and screw positions are photo-scaled; contact bank placement follows the documented 10:30–1:30 band.",
      affectedFields: ["coreDimensions", "cameraSideFeatures", "lensSideFeatures", "contacts", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Upgrade to a Nikon service drawing or measured Nikon 1 body/lens mount sample.",
    },
  ],
} satisfies MountSpecInput;

export default NIKON_1_MOUNT;
