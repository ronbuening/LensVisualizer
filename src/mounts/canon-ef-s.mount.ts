/**
 * Canon EF-S mount SVG specification.
 *
 * EF-S keeps the EF bayonet/register geometry but adds APS-C/short-back-focus compatibility markers:
 * the white-square mounting index and a rear projection that prevents EF-S lenses from mounting on
 * full-frame EF bodies. Canon's EOS R white paper is used for the shared 44 mm EF-family flange back
 * distance and 54 mm inner diameter. The patent leads are EF-family connector/bayonet records rather
 * than a separate EF-S native mount specification, so fine angular geometry remains
 * EF-derived/photo-scaled.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const O = ["efs-official-1"]; // Canon EOS white paper
const W = ["efs-1"]; // Wikipedia EF-S
const J = ["efs-2"]; // JAPB EF family
const REF = ["efs-1", "efs-2"];

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: "canon-ef-s/base",
  refs: REF,
  throatDiameterMm: 54,
  cameraOuterDiameterMm: 65,
  lensOuterDiameterMm: 63,
  lugCentersDeg: [30, 150, 292],
  lugSpanDeg: 44,
  lockCenterAngleDeg: 270,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "EF-derived three unsymmetrical straight-edged bayonet prongs",
  lockShapeNotes: "locking groove at 9 o'clock per EF-family layout",
  indexShapeNotes: "EF-S white-square mounting index",
});

const CANON_EF_S_MOUNT = {
  mountId: "canon-ef-s",
  displayLabel: "Canon EF-S",
  projectNote: "Canon EF-derived APS-C DSLR mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["electrical_contacts", "ef_s_rear_projection"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "canon-ef-s/base",
      selectedMvpProfileId: "canon-ef-s/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "canon-ef-s/base",
          profileType: "base",
          appliesTo: "Canon EF-S APS-C DSLR lenses and compatible EOS bodies, 2003–present",
          adds: [
            "EF bayonet/register geometry",
            "white-square EF-S mounting index",
            "rear projection/short-back-focus compatibility guard",
            "EF-family electrical contact block",
          ],
          removes: ["full-frame EF body compatibility for EF-S lenses"],
          changes: ["APS-C image circle and shorter permissible rear element clearance vs EF"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: [...O, ...REF, "efs-p1", "efs-p2"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44, "official", O),
    nominalThroatDiameterMm: v(54, "official", O),
    effectiveClearApertureMm: v(54, "official", O),
    cameraMountOuterDiameterMm: v(65, "photo_scaled", J),
    lensMountOuterDiameterMm: v(63, "photo_scaled", J),
    contactCount: v(8, "secondary", REF),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(60, "photo_scaled", J),
    lockRotationDeg: v(60, "photo_scaled", J),
    lockRotationDirection: dirV("clockwise", "secondary", J),
  },

  cameraSideFeatures,
  lensSideFeatures,

  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 44,
    mountOuterDiameterMm: 65,
    lugEngagementDiameterMm: 60,
    sensorFilmDiameterMm: 28.35,
    includeElectricalPlane: true,
    electricalDiameterMm: 50,
  }),

  contacts: makeContactBank({
    profileId: "canon-ef-s/base",
    refs: REF,
    count: 8,
    startAngleDeg: 152,
    stepDeg: 8,
    radiusMm: 25,
    functions: ["VBAT", "P-GND", "VDD", "DCL", "DLC", "LCLK", "D-GND", "COM"],
  }),

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    makeMountScrews(J, 6, 62, 2, [15, 75, 135, 195, 255, 315]),
    {
      featureId: "ef-s-rear-projection-baffle",
      featureType: "rear_projection_baffle",
      side: "lens",
      count: v(1, "secondary", W),
      pcdMm: v(46, "photo_scaled", J),
      diameterMm: v(42, "photo_scaled", J),
      centerAnglesDeg: { value: [0], status: "photo_scaled", sourceRefs: J },
      shape: "aps-c rear projection / EF-S interlock",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "efs-official-1",
      sourceType: "official",
      citation: "Canon, “EOS R System White Paper,” EOS system history section. Accessed 2026-06-06.",
      liveUrl: "https://downloads.canon.com/nw/camera/misc-pages/eos-r/pdf/canon_eos_r_white_paper.pdf",
      archiveUrl:
        "http://web.archive.org/web/20251117083223/http://downloads.canon.com/nw/camera/misc-pages/eos-r/pdf/canon_eos_r_white_paper.pdf",
      archiveDate: "2025-11-17",
      appliesTo: "shared EF-family 54 mm inner diameter and 44 mm flange back distance",
      confidence: "high",
    },
    {
      ref: "efs-1",
      sourceType: "secondary",
      citation: "“Canon EF-S lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Canon_EF-S_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260525113504/https://en.wikipedia.org/wiki/Canon_EF-S_lens_mount",
      archiveDate: "2026-05-25",
      appliesTo: "44 mm flange focal distance, APS-C/short-back-focus EF-S distinction",
      confidence: "medium",
    },
    {
      ref: "efs-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Canon EF,” JAPB (japb.net). Accessed 2026-06-06.",
      liveUrl: "https://japb.net/theory/lensmounts/canon-ef/",
      archiveUrl: "http://web.archive.org/web/20260521090927/https://japb.net/theory/lensmounts/canon-ef/",
      archiveDate: "2026-05-21",
      appliesTo: "EF-family three-prong bayonet, 44 mm register, EF-S white-square index note",
      confidence: "medium",
    },
    {
      ref: "efs-p1",
      sourceType: "patent",
      citation: "JPS62195633A, Canon camera/lens bayonet and contact connector family. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/JPS62195633A/en",
      archiveUrl: "https://patents.google.com/patent/JPS62195633A/en",
      archiveDate: "2026-06-06",
      appliesTo: "EF-era bayonet/contact research lead",
      confidence: "low",
    },
    {
      ref: "efs-p2",
      sourceType: "patent",
      citation: "US4999659A, Canon camera accessory/contact connector family. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4999659A/en",
      archiveUrl: "https://patents.google.com/patent/US4999659A/en",
      archiveDate: "2026-06-06",
      appliesTo: "EF-era contact connector research lead",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "EF-S shares the EF bayonet/register envelope, but the rear projection and exact white-square/index geometry are not dimensioned by the available sources.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "screwsGasketsBaffles", "contacts"],
      candidateValues: [],
      resolution: "Upgrade with an official EF-S body/lens mount drawing or measured EF-S sample.",
    },
  ],
} satisfies MountSpecInput;

export default CANON_EF_S_MOUNT;
