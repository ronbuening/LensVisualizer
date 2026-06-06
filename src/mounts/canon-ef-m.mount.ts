/**
 * Canon EF-M mount SVG specification.
 *
 * EF-M is Canon's APS-C mirrorless mount: 18 mm register, 47 mm throat, three-lug bayonet and a
 * fully electronic contact interface. The listed Canon patents are strong native mirrorless
 * bayonet/contact leads; angular dimensions here are still photo-scaled because the patent drawings
 * do not provide a complete production mount standard in millimetres.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const W = ["efm-1"];
const REF = ["efm-1", "efm-p1", "efm-p2"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "canon-ef-m/base",
  refs: REF,
  throatDiameterMm: 47,
  cameraOuterDiameterMm: 56,
  lensOuterDiameterMm: 54,
  lugCentersDeg: [32, 150, 292],
  lugSpanDeg: 42,
  lockCenterAngleDeg: 270,
  scalarStatus: "secondary",
  featureStatus: "patent",
  lugShapeNotes: "three EF-M mirrorless bayonet pawls/slots",
  lockShapeNotes: "lock notch/pin position photo-scaled from EF-family orientation",
});

const CANON_EF_M_MOUNT = {
  mountId: "canon-ef-m",
  displayLabel: "Canon EF-M",
  projectNote: "Canon EF-M APS-C mirrorless mount.",
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
      baseProfileId: "canon-ef-m/base",
      selectedMvpProfileId: "canon-ef-m/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "canon-ef-m/base",
          profileType: "base",
          appliesTo: "Canon EOS M / EF-M lenses and bodies, 2012–2023",
          adds: [
            "short-register APS-C mirrorless bayonet",
            "three bayonet pawls",
            "nine-contact electrical interface",
            "lock pin/notch and mounting index",
          ],
          removes: ["all mechanical aperture/AF couplings"],
          changes: ["47 mm throat and 18 mm register vs EF/EF-S 54 mm and 44 mm"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REF,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(18, "secondary", W),
    nominalThroatDiameterMm: v(47, "secondary", W),
    effectiveClearApertureMm: v(47, "secondary", W),
    cameraMountOuterDiameterMm: v(56, "patent", REF),
    lensMountOuterDiameterMm: v(54, "patent", REF),
    contactCount: v(9, "secondary", REF),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: v(60, "patent", REF),
    lockRotationDeg: v(60, "patent", REF),
    lockRotationDirection: dirV("clockwise", "secondary", REF),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 18,
    mountOuterDiameterMm: 56,
    lugEngagementDiameterMm: 51,
    sensorFilmDiameterMm: 28.35,
    includeElectricalPlane: true,
    electricalDiameterMm: 43,
    featureStatus: "patent",
  }),

  contacts: makeContactBank({
    profileId: "canon-ef-m/base",
    refs: REF,
    count: 9,
    startAngleDeg: 154,
    stepDeg: 6,
    radiusMm: 21.5,
    status: "patent",
  }),

  mechanicalCouplings: [],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 52, 1.8, [45, 135, 225, 315], "patent")],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "efm-1",
      sourceType: "secondary",
      citation: "“Canon EF-M lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_EF-M_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513020332/https://en.wikipedia.org/wiki/Canon_EF-M_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "18 mm flange focal distance, 47 mm throat, APS-C mirrorless mount identity",
      confidence: "medium",
    },
    {
      ref: "efm-p1",
      sourceType: "patent",
      citation:
        "US8830607B2, “Image pickup apparatus capable of interchanging lenses and lens mount therefor.” Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US8830607B2/en",
      archiveUrl: "https://patents.google.com/patent/US8830607B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "Canon mirrorless bayonet pawls, body-side/lens-side mount portions, contact portion",
      confidence: "medium",
    },
    {
      ref: "efm-p2",
      sourceType: "patent",
      citation: "US9638987B2, “Camera and camera accessory.” Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US9638987B2/en",
      archiveUrl: "https://patents.google.com/patent/US9638987B2/en",
      archiveDate: "2026-06-06",
      appliesTo: "multiple contact pins/contact surfaces arranged circumferentially in a Canon camera/accessory mount",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "EF-M bayonet span, screw PCD, lock/index clock positions, and per-contact pitch are photo-scaled from public photos/patent figures rather than production drawings.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Upgrade to an official Canon EF-M mount drawing or measured sample.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_EF_M_MOUNT;
