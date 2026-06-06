/**
 * Leica M mount SVG specification.
 *
 * Leica's rangefinder bayonet (1954): a very short 27.8 mm flange focal distance, a 44 mm bayonet
 * mount diameter, and a four-lug bayonet. The base profile holds the invariant bayonet plus the
 * patent-backed tactile keying / rangefinder-lever access features; the `leica-m/6-bit` variant overlays
 * the 6-bit lens-identification coding (a strip of six white/black marks on the lens flange, read
 * optically) found on recent lenses. There are no electrical contacts. The MVP figure renders the 6-bit
 * variant.
 *
 * Sourced scalars: flange focal distance 27.8 mm and 44 mm bayonet/inside diameter [leicam-1, leicam-3];
 * bayonet type and the 6-bit strip also per the JAPB reference [leicam-2]. US2618201A directly describes
 * the Leitz four-slot/four-lug bayonet embodiment, a selected lug/slot pair of different arcuate size,
 * tactile notch/protuberance keying, a selected-lug control cam, and a rangefinder-lever access recess
 * [leicam-p1]. Exact Leica M production clocking, lock/index positions, and 6-bit positions remain
 * photo-scaled or unknown and are flagged in openQuestions.
 */

import type { MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const W = ["leicam-1"]; // Wikipedia
const J = ["leicam-2"]; // JAPB teardown
const FDT = ["leicam-3"]; // Film and Digital Times / IB/E Optics chart
const P = ["leicam-p1"]; // Leitz four-lug bayonet patent embodiment
const PF = ["leicam-p1", "leicam-3"];
const WF = ["leicam-1", "leicam-3"];

const LEICA_M_MOUNT = {
  mountId: "leica-m",
  displayLabel: "Leica M",
  projectNote: "Leica M bayonet rangefinder mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "tactile_orientation_key", "index_mark", "rangefinder_cam"],
      variantRequired: ["six_bit_coding"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut"],
    },
    profileModel: {
      baseProfileId: "leica-m/base",
      selectedMvpProfileId: "leica-m/6-bit",
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: "leica-m/base",
          profileType: "base",
          appliesTo: "all Leica M lenses and bodies, 1954–present",
          adds: [
            "four bayonet lugs with one keyed lug/slot pair",
            "tactile orientation notch/protuberance",
            "mounting index",
            "rangefinder-lever access / selected-lug control cam",
          ],
          removes: ["electrical contacts (rangefinder mechanical interface)"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: [...WF, "leicam-p1"],
        },
        {
          profileId: "leica-m/6-bit",
          profileType: "variant",
          appliesTo: "6-bit-coded M lenses (digital M era)",
          adds: ["6-bit lens-identification coding (six white/black marks on the flange)"],
          removes: [],
          changes: ["camera reads lens identity optically"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: J,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(27.8, "secondary", W),
    nominalThroatDiameterMm: v(44, "secondary", FDT),
    effectiveClearApertureMm: v(44, "secondary", FDT),
    cameraMountOuterDiameterMm: v(52, "photo_scaled", W),
    lensMountOuterDiameterMm: v(50, "photo_scaled", W),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", W),
    lockAngleDeg: unknownV(W),
    lockRotationDeg: unknownV(W),
    lockRotationDirection: dirV("unknown", "unknown", []),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(22, "secondary", FDT),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "rangefinder mount opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(22, "secondary", FDT),
      outerRadiusMm: v(26, "photo_scaled", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "photo-scaled visible body mount ring around the 44 mm bayonet opening",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(45, "patent", P),
      startAngleDeg: v(23, "patent", P),
      endAngleDeg: v(67, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      depthMm: v(1.5, "patent", P),
      matesWith: "lens-lug-1",
      shapeNotes: "selected larger/keyed bayonet slot from US2618201A, normalized to Leica M clocking",
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(135, "patent", P),
      startAngleDeg: v(121, "patent", P),
      endAngleDeg: v(149, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      depthMm: v(1.5, "patent", P),
      matesWith: "lens-lug-2",
      shapeNotes: "one of the three smaller bayonet slots in the US2618201A four-slot embodiment",
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(225, "patent", P),
      startAngleDeg: v(211, "patent", P),
      endAngleDeg: v(239, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      depthMm: v(1.5, "patent", P),
      matesWith: "lens-lug-3",
      shapeNotes: "one of the three smaller bayonet slots in the US2618201A four-slot embodiment",
    },
    {
      featureId: "body-slot-4",
      featureType: "bayonet_receiving_slot",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(315, "patent", P),
      startAngleDeg: v(301, "patent", P),
      endAngleDeg: v(329, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      depthMm: v(1.5, "patent", P),
      matesWith: "lens-lug-4",
      shapeNotes: "one of the three smaller bayonet slots in the US2618201A four-slot embodiment",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(26.5, "photo_scaled", W),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "mounting index",
    },
    {
      featureId: "body-lock-pin",
      featureType: "alignment_pin",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(45, "patent", P),
      startAngleDeg: v(45, "patent", P),
      endAngleDeg: v(45, "patent", P),
      innerRadiusMm: v(24.5, "patent", PF),
      outerRadiusMm: v(24.5, "patent", PF),
      depthMm: v(1, "patent", P),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "tactile protuberance in the selected camera bayonet slot per US2618201A; production lock pin remains unverified",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(21, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(21, "photo_scaled", W),
      outerRadiusMm: v(25.5, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(45, "patent", P),
      startAngleDeg: v(23, "patent", P),
      endAngleDeg: v(67, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      thicknessMm: v(1.5, "patent", P),
      matesWith: "body-slot-1",
      shapeNotes: "selected larger/keyed bayonet lug from US2618201A, normalized to Leica M clocking",
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(135, "patent", P),
      startAngleDeg: v(121, "patent", P),
      endAngleDeg: v(149, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      thicknessMm: v(1.5, "patent", P),
      matesWith: "body-slot-2",
      shapeNotes: "one of the three smaller bayonet lugs in the US2618201A four-lug embodiment",
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(225, "patent", P),
      startAngleDeg: v(211, "patent", P),
      endAngleDeg: v(239, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      thicknessMm: v(1.5, "patent", P),
      matesWith: "body-slot-3",
      shapeNotes: "one of the three smaller bayonet lugs in the US2618201A four-lug embodiment",
    },
    {
      featureId: "lens-lug-4",
      featureType: "bayonet_lug",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(315, "patent", P),
      startAngleDeg: v(301, "patent", P),
      endAngleDeg: v(329, "patent", P),
      innerRadiusMm: v(22, "patent", PF),
      outerRadiusMm: v(25.5, "patent", PF),
      thicknessMm: v(1.5, "patent", P),
      matesWith: "body-slot-4",
      shapeNotes: "one of the three smaller bayonet lugs in the US2618201A four-lug embodiment",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(26, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: "leica-m/base",
      count: 1,
      centerAngleDeg: v(45, "patent", P),
      startAngleDeg: v(45, "patent", P),
      endAngleDeg: v(45, "patent", P),
      innerRadiusMm: v(24.5, "patent", PF),
      outerRadiusMm: v(24.5, "patent", PF),
      thicknessMm: v(1, "patent", P),
      matesWith: "body-lock-pin",
      shapeNotes: "tactile notch in the selected lens lug per US2618201A; production detent notch remains unverified",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(52, "photo_scaled", W),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1, "photo_scaled", W),
      thicknessMm: v(1.5, "photo_scaled", W),
      diameterMm: v(48, "photo_scaled", W),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-27.8, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "rangefinder-coupling-cam",
      side: "both",
      profileId: "leica-m/base",
      centerAngleDeg: v(45, "patent", P),
      radiusMm: v(18, "patent", P),
      sizeOrTravel: "selected-lug cam 9 / rangefinder-lever recess 14",
      function: "allows rangefinder-lever access and selected-lug control-cam actuation",
      compatibilityNotes:
        "US2618201A supports the cam/recess concept near the selected lug; exact Leica M production roller position remains unverified",
    },
    {
      featureId: "six-bit-coding",
      side: "lens",
      profileId: "leica-m/6-bit",
      centerAngleDeg: v(200, "photo_scaled", J),
      radiusMm: v(25, "photo_scaled", J),
      sizeOrTravel: "six white/black marks",
      function: "optical lens-identification coding",
      compatibilityNotes: "read by digital M bodies",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "photo_scaled", W),
      pcdMm: v(49, "photo_scaled", W),
      diameterMm: v(1.6, "photo_scaled", W),
      centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", W),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "leicam-1",
      sourceType: "secondary",
      citation: "“Leica M mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Leica_M_mount",
      archiveUrl: "http://web.archive.org/web/20221225162235/https://en.wikipedia.org/wiki/Leica_M_mount",
      archiveDate: "2022-12-25",
      appliesTo: "flange focal distance, 44 mm bayonet diameter, four lugs, rangefinder cam, 6-bit coding",
      confidence: "medium",
    },
    {
      ref: "leicam-3",
      sourceType: "secondary",
      citation: "Film and Digital Times / IB/E Optics mount chart. Accessed 2026-06-06.",
      liveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveDate: "2026-06-06",
      appliesTo: "Leica M 27.8 mm register and 44 mm inside diameter chart entry",
      confidence: "medium",
    },
    {
      ref: "leicam-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Leica M,” JAPB (japb.net). Accessed 2026-06-04.",
      liveUrl: "https://japb.net/theory/lensmounts/leica-m/",
      archiveUrl: "http://web.archive.org/web/20250429113337/https://japb.net/theory/lensmounts/leica-m/",
      archiveDate: "2025-04-29",
      appliesTo: "bayonet type, focusing-distance coupling, 6-bit coding strip",
      confidence: "medium",
    },
    {
      ref: "leicam-p1",
      sourceType: "patent",
      citation: "US2618201A, “Apparatus for detachably attaching camera objectives to cameras.” Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US2618201A/en",
      archiveUrl: "https://patents.google.com/patent/US2618201A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Leitz four-slot/four-lug bayonet embodiment, selected larger/keyed lug and slot, tactile notch/protuberance, selected-lug control cam, and rangefinder-lever access recess",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "US2618201A supports the four-lug bayonet, keyed lug/slot, tactile notch/protuberance, selected-lug cam, and rangefinder-lever access recess; exact Leica M production lug clocking/spans, production sprung-lock details, the mounting-index clock position, and 6-bit-coding positions still need an official drawing or measured sample.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to an official Leica M mount drawing or measured sample.",
    },
  ],
} satisfies MountSpecInput;

export default LEICA_M_MOUNT;
