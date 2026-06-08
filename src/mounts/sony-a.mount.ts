/**
 * Sony A mount SVG specification.
 *
 * The Minolta AF / Sony A SLR-SLT mount (Minolta Maxxum/Dynax, 1985; adopted by Sony in 2006): a
 * 44.5 mm flange focal distance and a 49.7 mm mount diameter. Modeled `base-only` - it carries BOTH
 * a mechanical AF screw-drive coupler and aperture-control arm AND an electronic contact block, like
 * the Pentax KAF family.
 *
 * Sourced scalars: flange focal distance 44.5 mm, 49.7 mm mount diameter, AF screw drive plus a
 * mechanical aperture arm plus electronic contacts [sa-1]. US4659203A directly documents the
 * Minolta three-claw bayonet family. JPH01302238A documents the early five-contact electrical group
 * and the body aperture-control member/lens diaphragm pin. JPH09211645A documents the later eight
 * body/lens contact terminals, their functions, the index, the lock pin/hole, and clockwise bayonet
 * engagement. Fine production clocking, the AF screw-drive shaft position, and screw locations remain
 * photo-scaled.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const W = ["sa-1"]; // Minolta A-mount system reference
const P1 = ["sa-p1"]; // Minolta three-claw bayonet patent
const P2W = ["sa-p2", "sa-1"]; // Early contact/aperture patent + production lineage
const P3 = ["sa-p3"]; // Later eight-terminal bayonet mount patent
const P3W = [...P3, ...W]; // Later patent + production lineage
const P13W = [...P1, ...P3, ...W]; // Bayonet foundation + later Minolta/Sony A lineage

const SONY_A_CONTACT_FUNCTIONS = [
  "circuit power",
  "motor power",
  "motor ground",
  "lens/circuit ground",
  "serial data output",
  "communication request",
  "serial clock",
  "serial data input",
] as const;

function makeSonyAContactBank(): ContactFeature[] {
  const centerAnglesDeg = [152, 160, 168, 176, 184, 192, 200, 208] as const;
  const buildSide = (side: "body" | "lens", protrusionMm: number): ContactFeature[] =>
    centerAnglesDeg.map((centerAngleDeg, index) => ({
      side,
      contactNo: index + 1,
      profileId: "sony-a/base",
      centerAngleDeg: v(centerAngleDeg, "patent", P3W),
      centerRadiusMm: v(22.5, "patent", P3W),
      widthMm: v(1.3, "patent", P3W),
      heightMm: v(2.6, "patent", P3W),
      shape: side === "body" ? "pin" : "pad",
      protrusionMm: v(protrusionMm, "patent", P3W),
      function: SONY_A_CONTACT_FUNCTIONS[index] ?? "patent contact terminal",
    }));

  return [...buildSide("body", 0.4), ...buildSide("lens", 0)];
}

const SONY_A_MOUNT = {
  mountId: "sony-a",
  displayLabel: "Sony A",
  projectNote: "Minolta/Sony A SLR/SLT mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["electrical_contacts", "af_screw_coupler", "aperture_arm"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "sony-a/base",
      selectedMvpProfileId: "sony-a/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "sony-a/base",
          profileType: "base",
          appliesTo: "all Minolta AF / Sony A lenses and bodies (full-frame and APS-C DT), 1985-present",
          adds: [
            "bayonet lugs",
            "lock pin/notch",
            "mounting index",
            "AF screw-drive coupler",
            "mechanical aperture-control arm",
            "electrical contact block",
          ],
          removes: [],
          changes: ["original Minolta 5-pin interface grew to eight contacts"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: [...W, "sa-p1", "sa-p2", "sa-p3"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44.5, "secondary", W),
    nominalThroatDiameterMm: v(49.7, "secondary", W),
    effectiveClearApertureMm: v(49.7, "secondary", W),
    cameraMountOuterDiameterMm: v(57, "photo_scaled", W),
    lensMountOuterDiameterMm: v(55, "photo_scaled", W),
    contactCount: v(8, "patent", P3W),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: unknownV(P3),
    lockRotationDeg: unknownV(P3),
    lockRotationDirection: dirV("clockwise", "patent", P3),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(24.85, "secondary", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "49.7 mm mount opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(24.85, "secondary", W),
      outerRadiusMm: v(28.5, "photo_scaled", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(30, "patent", P13W),
      startAngleDeg: v(10, "patent", P13W),
      endAngleDeg: v(50, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      depthMm: v(1.8, "patent", P13W),
      matesWith: "lens-lug-1",
      shapeNotes: "three Minolta/Sony A locking claws from US4659203A/JPH09211645A, normalized to A-mount clocking",
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(150, "patent", P13W),
      startAngleDeg: v(130, "patent", P13W),
      endAngleDeg: v(170, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      depthMm: v(1.8, "patent", P13W),
      matesWith: "lens-lug-2",
      shapeNotes: "three Minolta/Sony A locking claws from US4659203A/JPH09211645A, normalized to A-mount clocking",
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(290, "patent", P13W),
      startAngleDeg: v(270, "patent", P13W),
      endAngleDeg: v(310, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      depthMm: v(1.8, "patent", P13W),
      matesWith: "lens-lug-3",
      shapeNotes: "three Minolta/Sony A locking claws from US4659203A/JPH09211645A, normalized to A-mount clocking",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P3W),
      startAngleDeg: v(0, "patent", P3W),
      endAngleDeg: v(0, "patent", P3W),
      innerRadiusMm: v(28, "patent", P3W),
      outerRadiusMm: v(29, "patent", P3W),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "mounting index 13 in JPH09211645A, normalized to top-dead-center",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(270, "patent", P3W),
      startAngleDeg: v(270, "patent", P3W),
      endAngleDeg: v(270, "patent", P3W),
      innerRadiusMm: v(25.5, "patent", P3W),
      outerRadiusMm: v(25.5, "patent", P3W),
      depthMm: v(2, "patent", P3W),
      matesWith: "lens-lock-notch",
      shapeNotes: "lock pin 17 positioned to engage lens lock hole 26 in JPH09211645A",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(23.85, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(23.85, "photo_scaled", W),
      outerRadiusMm: v(27.5, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(30, "patent", P13W),
      startAngleDeg: v(10, "patent", P13W),
      endAngleDeg: v(50, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      thicknessMm: v(1.8, "patent", P13W),
      matesWith: "body-slot-1",
      shapeNotes: "lens locking claw 23a-23c family in JPH09211645A",
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(150, "patent", P13W),
      startAngleDeg: v(130, "patent", P13W),
      endAngleDeg: v(170, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      thicknessMm: v(1.8, "patent", P13W),
      matesWith: "body-slot-2",
      shapeNotes: "lens locking claw 23a-23c family in JPH09211645A",
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(290, "patent", P13W),
      startAngleDeg: v(270, "patent", P13W),
      endAngleDeg: v(310, "patent", P13W),
      innerRadiusMm: v(24.85, "patent", P13W),
      outerRadiusMm: v(27.5, "patent", P13W),
      thicknessMm: v(1.8, "patent", P13W),
      matesWith: "body-slot-3",
      shapeNotes: "lens locking claw 23a-23c family in JPH09211645A",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P3W),
      startAngleDeg: v(0, "patent", P3W),
      endAngleDeg: v(0, "patent", P3W),
      innerRadiusMm: v(27.5, "patent", P3W),
      outerRadiusMm: v(28.5, "patent", P3W),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: "sony-a/base",
      count: 1,
      centerAngleDeg: v(270, "patent", P3W),
      startAngleDeg: v(270, "patent", P3W),
      endAngleDeg: v(270, "patent", P3W),
      innerRadiusMm: v(25.5, "patent", P3W),
      outerRadiusMm: v(25.5, "patent", P3W),
      thicknessMm: v(2, "patent", P3W),
      matesWith: "body-lock-pin",
      shapeNotes: "lens lock hole 26 receiving body lock pin 17 in JPH09211645A",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(57, "photo_scaled", W),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", W),
      thicknessMm: v(1.8, "patent", P13W),
      diameterMm: v(52, "photo_scaled", W),
    },
    {
      planeId: "electrical_contact_plane",
      zPositionMm: v(0.5, "photo_scaled", W),
      thicknessMm: v(0.5, "photo_scaled", W),
      diameterMm: v(46, "photo_scaled", W),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-44.5, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: makeSonyAContactBank(),

  mechanicalCouplings: [
    {
      featureId: "af-screw-coupler",
      side: "body",
      profileId: "sony-a/base",
      centerAngleDeg: v(250, "photo_scaled", W),
      radiusMm: v(20, "photo_scaled", W),
      sizeOrTravel: "drive shaft",
      function: "mechanical (screw-drive) AF",
      compatibilityNotes: "non-SAM/SSM lenses",
    },
    {
      featureId: "aperture-control-arm",
      side: "body",
      profileId: "sony-a/base",
      centerAngleDeg: v(300, "patent", P2W),
      radiusMm: v(24, "patent", P2W),
      sizeOrTravel: "lever/arm",
      function: "mechanical aperture actuation",
      compatibilityNotes: "body-side aperture control member 14 in JPH01302238A",
    },
    {
      featureId: "lens-aperture-pin",
      side: "lens",
      profileId: "sony-a/base",
      centerAngleDeg: v(300, "patent", P2W),
      radiusMm: v(24, "patent", P2W),
      sizeOrTravel: "diaphragm pin",
      function: "lens diaphragm pin actuated by the body aperture control member",
      compatibilityNotes: "lens-side diaphragm pin 9 in JPH01302238A",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(5, "photo_scaled", W),
      pcdMm: v(54, "photo_scaled", W),
      diameterMm: v(2, "photo_scaled", W),
      centerAnglesDeg: degListV([30, 102, 174, 246, 318], "photo_scaled", W),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: [
      "camera-side-variant-electrical",
      "camera-side-variant-mechanical",
      "lens-side-variant-electrical",
      "lens-side-variant-mechanical",
    ],
  },

  sourceRefs: [
    {
      ref: "sa-1",
      sourceType: "secondary",
      citation: '"Minolta A-mount system," Wikipedia. Accessed 2026-06-04.',
      liveUrl: "https://en.wikipedia.org/wiki/Minolta_A-mount_system",
      archiveUrl: "http://web.archive.org/web/20221225232256/https://en.wikipedia.org/wiki/Minolta_A-mount_system",
      archiveDate: "2022-12-25",
      appliesTo: "flange focal distance, 49.7 mm mount diameter, AF screw drive, aperture arm, electronic contacts",
      confidence: "medium",
    },
    {
      ref: "sa-p1",
      sourceType: "patent",
      citation: 'US4659203A, "Bayonet mount arrangement." Accessed 2026-06-06.',
      liveUrl: "https://patents.google.com/patent/US4659203A/en",
      archiveUrl: "https://patents.google.com/patent/US4659203A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Minolta three-set bayonet claw arrangement with one upper and two lateral engagements, body/lens claws/recesses, and spring portions behind body claws",
      confidence: "high",
    },
    {
      ref: "sa-p2",
      sourceType: "patent",
      citation:
        'JPH01302238A, "Interchangeable lens exchanging electrical signal with camera main body." Accessed 2026-06-06.',
      liveUrl: "https://patents.google.com/patent/JPH01302238A/en",
      archiveUrl: "https://patents.google.com/patent/JPH01302238A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Minolta five-terminal lens/body signal contact group, power/ground-first contact geometry, bayonet claw, lens diaphragm pin, and body aperture-control member",
      confidence: "high",
    },
    {
      ref: "sa-p3",
      sourceType: "patent",
      citation: 'JPH09211645A, "Bayonet mount device of lens interchangeable camera." Accessed 2026-06-06.',
      liveUrl: "https://patents.google.com/patent/JPH09211645A/en",
      archiveUrl: "https://patents.google.com/patent/JPH09211645A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Minolta/Sony A-style body/lens mount faces, three locking claws, clockwise engagement, index, eight body/lens contacts 15a-15h/25a-25h, lock pin/hole, and contact/claw overlap",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "The current base renders the later eight-terminal A interface from JPH09211645A; the original five-terminal Minolta interface in JPH01302238A is not split into a separate variant.",
      affectedFields: ["mvp.profileModel", "contactCount", "contacts"],
      candidateValues: [5, 8],
      resolution:
        "Add generation profiles if the application needs original 5-pin Minolta AF bodies/lenses separately.",
    },
    {
      issue:
        "Fine production clock positions, AF screw-drive coupler position, mount-ring diameter, and screw pattern remain photo-scaled; the bayonet count, electrical contact count/functions, lock/index presence, clockwise engagement, and aperture-control member are patent-backed.",
      affectedFields: [
        "cameraSideFeatures",
        "lensSideFeatures",
        "contacts",
        "mechanicalCouplings",
        "screwsGasketsBaffles",
      ],
      candidateValues: ["official Minolta/Sony mount drawing", "measured production sample"],
      resolution:
        "Upgrade remaining photo-scaled values to measured/official when an authoritative production drawing is available.",
    },
  ],
} satisfies MountSpecInput;

export default SONY_A_MOUNT;
