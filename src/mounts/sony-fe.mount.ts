/**
 * Sony E mount SVG specification.
 *
 * Sony's mirrorless mount (2010): an 18 mm flange focal distance and a 46.1 mm throat. The project
 * uses the `sony-fe` id for both APS-C (E) and full-frame (FE) lenses - format lives in
 * `imageFormat`, not in a separate mount. Modeled `base-only` - a single fully-electronic interface
 * (no mechanical couplings), with ten electrical contacts along the bottom of the mount.
 *
 * Sourced scalars: Sony documents the E-mount 18 mm flange focal length [se-official-1]; the 46.1 mm
 * production throat and ten-contact lineage are from the secondary Sony E-mount reference [se-1].
 * US9392150B2 directly documents the E/FE body mount embodiment: a 47 mm body-mount inside diameter,
 * three arc-like body latches and corresponding lens latches, ten contact pins at the bottom contact
 * holder, and the 35 mm full-frame image aperture geometry. The lock pin/notch, mounting-index clock,
 * outer diameters, and screw locations remain photo-scaled.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const O = ["se-official-1"]; // Sony official manual
const W = ["se-1"]; // Sony E-mount reference
const P1 = ["se-p1"]; // Sony E/FE body mount patent
const P1W = [...P1, ...W]; // Patent plus production E lineage

function makeSonyEContactBank(): ContactFeature[] {
  const centerAnglesDeg = [152, 158, 164, 170, 176, 182, 188, 194, 200, 206] as const;
  const buildSide = (side: "body" | "lens", protrusionMm: number): ContactFeature[] =>
    centerAnglesDeg.map((centerAngleDeg, index) => ({
      side,
      contactNo: index + 1,
      profileId: "sony-fe/base",
      centerAngleDeg: v(centerAngleDeg, "patent", P1W),
      centerRadiusMm: v(20.5, "patent", P1W),
      widthMm: v(1.3, "patent", P1W),
      heightMm: v(2.6, "patent", P1W),
      shape: side === "body" ? "pin" : "pad",
      protrusionMm: v(protrusionMm, "patent", P1W),
      function: `contact pin ${index + 1}`,
    }));

  return [...buildSide("body", 0.4), ...buildSide("lens", 0)];
}

const SONY_E_MOUNT = {
  mountId: "sony-fe",
  displayLabel: "Sony E",
  projectNote: "Sony E mount; the sony-fe id covers both full-frame FE and APS-C E lenses.",
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
      baseProfileId: "sony-fe/base",
      selectedMvpProfileId: "sony-fe/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "sony-fe/base",
          profileType: "base",
          appliesTo: "all Sony E / FE lenses and bodies (APS-C and full-frame), 2010-present",
          adds: ["bayonet lugs", "lock pin/notch", "mounting index", "ten-contact electrical block along the bottom"],
          removes: ["all mechanical couplings (fully electronic)"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: [...O, ...W, "se-p1"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(18, "official", O),
    nominalThroatDiameterMm: v(46.1, "secondary", W),
    effectiveClearApertureMm: v(47, "patent", P1W),
    cameraMountOuterDiameterMm: v(54, "photo_scaled", W),
    lensMountOuterDiameterMm: v(52, "photo_scaled", W),
    contactCount: v(10, "patent", P1W),
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
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P1W),
      startAngleDeg: v(0, "patent", P1W),
      endAngleDeg: v(360, "patent", P1W),
      innerRadiusMm: v(0, "patent", P1W),
      outerRadiusMm: v(23.5, "patent", P1W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "47 mm body-mount inside diameter R in US9392150B2; production E throat is commonly cataloged as 46.1 mm",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(23.5, "patent", P1W),
      outerRadiusMm: v(27, "photo_scaled", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(60, "patent", P1W),
      startAngleDeg: v(38, "patent", P1W),
      endAngleDeg: v(82, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      depthMm: v(1.8, "patent", P1W),
      matesWith: "lens-lug-1",
      shapeNotes: "arc-like body latch 31 in Fig. 5 of US9392150B2, normalized to the E-mount front-view clocking",
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(180, "patent", P1W),
      startAngleDeg: v(158, "patent", P1W),
      endAngleDeg: v(205, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      depthMm: v(1.8, "patent", P1W),
      matesWith: "lens-lug-2",
      shapeNotes: "arc-like body latch 31 in Fig. 5 of US9392150B2, normalized to the E-mount front-view clocking",
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(290, "patent", P1W),
      startAngleDeg: v(268, "patent", P1W),
      endAngleDeg: v(312, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      depthMm: v(1.8, "patent", P1W),
      matesWith: "lens-lug-3",
      shapeNotes: "arc-like body latch 31 in Fig. 5 of US9392150B2, normalized to the E-mount front-view clocking",
    },
    {
      featureId: "body-contact-pin-holder",
      featureType: "contact_pin_holder",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(180, "patent", P1W),
      startAngleDeg: v(145, "patent", P1W),
      endAngleDeg: v(215, "patent", P1W),
      innerRadiusMm: v(18.5, "patent", P1W),
      outerRadiusMm: v(22.5, "patent", P1W),
      depthMm: v(1, "patent", P1W),
      matesWith: "",
      shapeNotes: "sector-form contact pin holder 52 surrounding the contact pins 70 in Figs. 8-9 of US9392150B2",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(27.5, "photo_scaled", W),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "mounting index",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(270, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(24, "photo_scaled", W),
      depthMm: v(2, "photo_scaled", W),
      matesWith: "lens-lock-notch",
      shapeNotes: "lock pin (position unconfirmed by US9392150B2)",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P1W),
      startAngleDeg: v(0, "patent", P1W),
      endAngleDeg: v(360, "patent", P1W),
      innerRadiusMm: v(0, "patent", P1W),
      outerRadiusMm: v(20, "patent", P1W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "patent lens-mount inside diameter example is about 40 mm; production clear opening remains approximated by the body throat",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: v(0, "photo_scaled", W),
      endAngleDeg: v(360, "photo_scaled", W),
      innerRadiusMm: v(20, "patent", P1W),
      outerRadiusMm: v(26, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(60, "patent", P1W),
      startAngleDeg: v(38, "patent", P1W),
      endAngleDeg: v(82, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      thicknessMm: v(1.8, "patent", P1W),
      matesWith: "body-slot-1",
      shapeNotes: "corresponding lens latch family in US9392150B2",
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(180, "patent", P1W),
      startAngleDeg: v(158, "patent", P1W),
      endAngleDeg: v(205, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      thicknessMm: v(1.8, "patent", P1W),
      matesWith: "body-slot-2",
      shapeNotes: "corresponding lens latch family in US9392150B2",
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(290, "patent", P1W),
      startAngleDeg: v(268, "patent", P1W),
      endAngleDeg: v(312, "patent", P1W),
      innerRadiusMm: v(23, "patent", P1W),
      outerRadiusMm: v(25.5, "patent", P1W),
      thicknessMm: v(1.8, "patent", P1W),
      matesWith: "body-slot-3",
      shapeNotes: "corresponding lens latch family in US9392150B2",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(26.5, "photo_scaled", W),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: "sony-fe/base",
      count: 1,
      centerAngleDeg: v(270, "photo_scaled", W),
      startAngleDeg: unknownV(W),
      endAngleDeg: unknownV(W),
      innerRadiusMm: unknownV(W),
      outerRadiusMm: v(24, "photo_scaled", W),
      thicknessMm: v(2, "photo_scaled", W),
      matesWith: "body-lock-pin",
      shapeNotes: "receives body lock pin (position unconfirmed by US9392150B2)",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(54, "photo_scaled", W),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1, "photo_scaled", W),
      thicknessMm: v(1.8, "patent", P1W),
      diameterMm: v(49, "photo_scaled", W),
    },
    {
      planeId: "electrical_contact_plane",
      zPositionMm: v(0.5, "photo_scaled", W),
      thicknessMm: v(0.5, "photo_scaled", W),
      diameterMm: v(44, "photo_scaled", W),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-18, "official", O),
      thicknessMm: v(0, "official", O),
      diameterMm: v(43.267, "patent", P1W),
    },
  ],

  contacts: makeSonyEContactBank(),

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "photo_scaled", W),
      pcdMm: v(50, "photo_scaled", W),
      diameterMm: v(2, "photo_scaled", W),
      centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", W),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "se-official-1",
      sourceType: "official",
      citation: "Sony, PXW-FX9V/PXW-FX9T operating instructions, specifications table. Accessed 2026-06-06.",
      liveUrl: "https://pro.sony/s3/2019/12/06134306/4735109151.pdf",
      archiveUrl: "http://web.archive.org/web/20241126221518/https://pro.sony/s3/2019/12/06134306/4735109151.pdf",
      archiveDate: "2024-11-26",
      appliesTo: "E mount 18 mm flange focal length",
      confidence: "high",
    },
    {
      ref: "se-1",
      sourceType: "secondary",
      citation: '"Sony E-mount," Wikipedia. Accessed 2026-06-04.',
      liveUrl: "https://en.wikipedia.org/wiki/Sony_E-mount",
      archiveUrl: "http://web.archive.org/web/20230522152822/https://en.wikipedia.org/wiki/Sony_E-mount",
      archiveDate: "2023-05-22",
      appliesTo: "flange focal distance, 46.1 mm production throat, ten contacts, APS-C/full-frame",
      confidence: "medium",
    },
    {
      ref: "se-p1",
      sourceType: "patent",
      citation: 'US9392150B2, "Camera and optical apparatus." Accessed 2026-06-06.',
      liveUrl: "https://patents.google.com/patent/US9392150B2/en",
      archiveUrl: "https://patents.google.com/patent/US9392150B2/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Sony E/FE body mount inside diameter, three arc-like body/lens latches, ten bottom contact pins/contact holder, 35 mm full-frame aperture geometry, and contact-holder/mask relationship",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "US9392150B2 backs the E/FE body latch/contact-holder/full-frame geometry, but it does not document the production lock pin/notch, mounting-index clock, outer diameters, screw pattern, or exact production lug/contact clocking.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "lockGeometry", "screwsGasketsBaffles"],
      candidateValues: ["official Sony E mount mechanical drawing", "measured production E/FE body and lens sample"],
      resolution:
        "Upgrade remaining photo-scaled/unknown fields when an authoritative production drawing or measured sample is available.",
    },
  ],
} satisfies MountSpecInput;

export default SONY_E_MOUNT;
