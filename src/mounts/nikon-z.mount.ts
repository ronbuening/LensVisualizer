/**
 * Nikon Z mount SVG specification.
 *
 * Nikon's full-frame mirrorless mount (2018): a short 16 mm flange focal distance and the largest
 * full-frame throat at 55 mm. Modeled `base-only` — it is a single fully-electronic interface (no
 * mechanical couplings); FX (full-frame) and DX (APS-C) share the same mount, so format is not a
 * mount variant. Distinctively it uses a FOUR-lug bayonet (vs three on the F-mount) and eleven
 * electrical contacts.
 *
 * Sourced layout: flange focal distance 16 mm and 55 mm throat [nz-1]. US10831084B2 discloses the
 * Nikon mirrorless four-claw bayonet embodiment, body/lens lock pin and receiving groove, and the
 * upper-arc 11 body/lens terminal order [nz-p1]. The JAPB teardown corroborates the 3 o'clock
 * locking groove and four-lug mount, but conflicts with the patent on contact-bank clocking; the
 * patent controls the terminal placement here. Lug spans, the mounting-index position, and lock
 * rotation angle/direction remain schematic/open.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const W = ["nz-1"]; // Wikipedia
const J = ["nz-2"]; // JAPB teardown
const P = ["nz-p1"]; // Nikon patent embodiment
const JP = ["nz-2", "nz-p1"];
const WP = ["nz-1", "nz-p1"];

const NIKON_Z_CONTACT_FUNCTIONS = [
  "HDATA hot-line data",
  "HCLK hot-line clock",
  "DATAL command-data input",
  "CLK command-data clock",
  "DATAB command-data output",
  "RDY command-ready signal",
  "GND circuit ground",
  "V33 circuit power",
  "PGND drive-power ground",
  "VBAT drive power",
  "LDET lens attachment detection",
] as const;

function patentUpperTerminalAngle(contactNo: number): number {
  return (30 - (contactNo - 1) * 6 + 360) % 360;
}

function makePatentTerminal(side: "body" | "lens", contactNo: number): ContactFeature {
  return {
    side,
    contactNo,
    profileId: "nikon-z/base",
    centerAngleDeg: v(patentUpperTerminalAngle(contactNo), "patent", P),
    centerRadiusMm: v(25.5, "patent", P),
    widthMm: v(1.3, "patent", P),
    heightMm: v(3, "patent", P),
    shape: side === "body" ? "spring pin" : "exposed pad",
    protrusionMm: v(side === "body" ? 0.5 : 0, "patent", P),
    function: NIKON_Z_CONTACT_FUNCTIONS[contactNo - 1] ?? "unspecified terminal",
  };
}

const NIKON_Z_MOUNT = {
  mountId: "nikon-z",
  displayLabel: "Nikon Z",
  projectNote: "Nikon Z mirrorless mount.",
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
      baseProfileId: "nikon-z/base",
      selectedMvpProfileId: "nikon-z/base",
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: "nikon-z/base",
          profileType: "base",
          appliesTo: "all Nikon Z lenses and bodies (FX and DX), 2018–present",
          adds: [
            "four straight-edged bayonet lugs",
            "locking pin/notch at 3 o'clock",
            "mounting index",
            "eleven-contact electrical block at the top (11–1 o'clock)",
          ],
          removes: ["all mechanical couplings (fully electronic)"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: [...WP, "nz-2"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(16, "secondary", W),
    nominalThroatDiameterMm: v(55, "secondary", W),
    effectiveClearApertureMm: v(55, "secondary", W),
    cameraMountOuterDiameterMm: v(66, "photo_scaled", J),
    lensMountOuterDiameterMm: v(64, "photo_scaled", J),
    contactCount: v(11, "patent", WP),
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
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(27.5, "secondary", W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "55 mm throat opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P),
      startAngleDeg: v(0, "patent", P),
      endAngleDeg: v(360, "patent", P),
      innerRadiusMm: v(27.5, "secondary", W),
      outerRadiusMm: v(33, "patent", JP),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "body-side mount section around the four-claw patent embodiment",
    },
    {
      featureId: "body-claw-29a",
      featureType: "body_bayonet_claw",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(49, "patent", JP),
      startAngleDeg: v(24, "patent", JP),
      endAngleDeg: v(74, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      depthMm: v(2, "patent", JP),
      matesWith: "lens-lug-39a",
      shapeNotes:
        "first body-side claw 29a, upper right and longest in the patent embodiment; Fig. 5A places the hot-line terminal lines near its roughly 50-degree sector while leaving the lock-pin gap clear",
    },
    {
      featureId: "body-claw-29d",
      featureType: "body_bayonet_claw",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(147, "patent", JP),
      startAngleDeg: v(126, "patent", JP),
      endAngleDeg: v(168, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      depthMm: v(2, "patent", JP),
      matesWith: "lens-lug-39d",
      shapeNotes: "fourth body-side claw 29d, lower right and third-longest in the patent embodiment",
    },
    {
      featureId: "body-claw-29c",
      featureType: "body_bayonet_claw",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(238, "patent", JP),
      startAngleDeg: v(214, "patent", JP),
      endAngleDeg: v(262, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      depthMm: v(2, "patent", JP),
      matesWith: "lens-lug-39c",
      shapeNotes: "third body-side claw 29c, lower left and second-longest in the patent embodiment",
    },
    {
      featureId: "body-claw-29b",
      featureType: "body_bayonet_claw",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(302, "patent", JP),
      startAngleDeg: v(284, "patent", JP),
      endAngleDeg: v(320, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      depthMm: v(2, "patent", JP),
      matesWith: "lens-lug-39b",
      shapeNotes:
        "second body-side claw 29b, upper left and shortest in the patent embodiment; Fig. 5A leaves the upper terminal holder between 29b and 29a",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: unknownV(J),
      endAngleDeg: unknownV(J),
      innerRadiusMm: unknownV(J),
      outerRadiusMm: v(33.5, "photo_scaled", J),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "white-dot mounting index",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(90, "patent", JP),
      startAngleDeg: v(90, "patent", JP),
      endAngleDeg: v(90, "patent", JP),
      innerRadiusMm: v(28.5, "patent", JP),
      outerRadiusMm: v(28.5, "patent", JP),
      depthMm: v(2, "patent", JP),
      matesWith: "lens-lock-notch",
      shapeNotes: "body-side lock pin from the patent embodiment; 3 o'clock clocking cross-checked by JAPB",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", W),
      startAngleDeg: v(0, "secondary", W),
      endAngleDeg: v(360, "secondary", W),
      innerRadiusMm: v(0, "secondary", W),
      outerRadiusMm: v(26.5, "photo_scaled", J),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "patent", P),
      startAngleDeg: v(0, "patent", P),
      endAngleDeg: v(360, "patent", P),
      innerRadiusMm: v(26.5, "patent", JP),
      outerRadiusMm: v(32, "patent", JP),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens-side mount section around the four-claw patent embodiment",
    },
    {
      featureId: "lens-lug-39a",
      featureType: "bayonet_lug",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(44, "patent", JP),
      startAngleDeg: v(14, "patent", JP),
      endAngleDeg: v(74, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      thicknessMm: v(2, "patent", JP),
      matesWith: "body-claw-29a",
      shapeNotes:
        "first lens-side claw 39a; renders upper left after the lens-rear mirror transform and spans the roughly 60-degree sector called out for Fig. 6",
    },
    {
      featureId: "lens-lug-39d",
      featureType: "bayonet_lug",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(129, "patent", JP),
      startAngleDeg: v(108, "patent", JP),
      endAngleDeg: v(150, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      thicknessMm: v(2, "patent", JP),
      matesWith: "body-claw-29d",
      shapeNotes:
        "fourth lens-side claw 39d; renders lower left after the lens-rear mirror transform, with clocking cross-checked against a production lens-side photo",
    },
    {
      featureId: "lens-lug-39c",
      featureType: "bayonet_lug",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(218, "patent", JP),
      startAngleDeg: v(194, "patent", JP),
      endAngleDeg: v(242, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      thicknessMm: v(2, "patent", JP),
      matesWith: "body-claw-29c",
      shapeNotes:
        "third lens-side claw 39c; renders lower right after the lens-rear mirror transform, with clocking cross-checked against a production lens-side photo",
    },
    {
      featureId: "lens-lug-39b",
      featureType: "bayonet_lug",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(296, "patent", JP),
      startAngleDeg: v(278, "patent", JP),
      endAngleDeg: v(314, "patent", JP),
      innerRadiusMm: v(27.5, "patent", JP),
      outerRadiusMm: v(30.5, "patent", JP),
      thicknessMm: v(2, "patent", JP),
      matesWith: "body-claw-29b",
      shapeNotes:
        "second lens-side claw 39b; renders lower in the upper-right quadrant after the lens-rear mirror transform, leaving the Fig. 6 upper terminal gap clear",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: unknownV(J),
      endAngleDeg: unknownV(J),
      innerRadiusMm: unknownV(J),
      outerRadiusMm: v(31, "photo_scaled", J),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: "nikon-z/base",
      count: 1,
      centerAngleDeg: v(90, "patent", JP),
      startAngleDeg: v(90, "patent", JP),
      endAngleDeg: v(90, "patent", JP),
      innerRadiusMm: v(28.5, "patent", JP),
      outerRadiusMm: v(28.5, "patent", JP),
      thicknessMm: v(2, "patent", JP),
      matesWith: "body-lock-pin",
      shapeNotes: "lens-side lock-pin receiving section from the patent; 3 o'clock clocking cross-checked by JAPB",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(66, "photo_scaled", J),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1, "photo_scaled", J),
      thicknessMm: v(2, "photo_scaled", J),
      diameterMm: v(58, "photo_scaled", J),
    },
    {
      planeId: "electrical_contact_plane",
      zPositionMm: v(0.5, "photo_scaled", J),
      thicknessMm: v(0.5, "photo_scaled", J),
      diameterMm: v(52, "photo_scaled", J),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-16, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [
    ...NIKON_Z_CONTACT_FUNCTIONS.map((_, index) => makePatentTerminal("body", index + 1)),
    ...NIKON_Z_CONTACT_FUNCTIONS.map((_, index) => makePatentTerminal("lens", index + 1)),
  ],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(6, "photo_scaled", J),
      pcdMm: v(63, "photo_scaled", J),
      diameterMm: v(2, "photo_scaled", J),
      centerAnglesDeg: degListV([20, 80, 140, 200, 260, 320], "photo_scaled", J),
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
      ref: "nz-1",
      sourceType: "secondary",
      citation: "“Nikon Z-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Nikon_Z-mount",
      archiveUrl: "http://web.archive.org/web/20260422214312/https://en.wikipedia.org/wiki/Nikon_Z-mount",
      archiveDate: "2026-04-22",
      appliesTo: "flange focal distance, 55 mm throat, and secondary corroboration for eleven contacts/four lugs",
      confidence: "high",
    },
    {
      ref: "nz-2",
      sourceType: "secondary",
      citation: "“Lens Mounts: Nikon Z,” JAPB (japb.net). Accessed 2026-06-04.",
      liveUrl: "https://japb.net/theory/lensmounts/nikon-z/",
      archiveUrl: "http://web.archive.org/web/20251115002307/https://japb.net/theory/lensmounts/nikon-z/",
      archiveDate: "2025-11-15",
      appliesTo:
        "locking groove at 3 o'clock and four straight-edged lugs; lower-arc contact placement is treated as conflicting secondary evidence",
      confidence: "medium",
    },
    {
      ref: "nz-p1",
      sourceType: "patent",
      citation:
        "US10831084B2, Nikon Z camera accessory/contact-terminal and body/lens-side mount structure. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US10831084B2/en",
      archiveUrl: "https://patents.google.com/patent/US10831084B2/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "four-claw body/lens bayonet embodiment, body lock pin and lens receiving groove, upper body/lens terminal holders, 11 body/lens terminals, terminal order, and terminal-to-claw relationship",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "US10831084B2 supports the four-claw bayonet, lock-pin/receiving-groove relationship, and 11-terminal order, but it is a patent embodiment rather than an official Nikon service drawing; absolute production lug spans, mounting-index clock position, lock rotation angle/direction, and screw positions remain schematic/photo-scaled.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "lockGeometry"],
      candidateValues: [],
      resolution: "Upgrade to an official Nikon Z mount drawing or measured sample.",
    },
    {
      issue:
        "JAPB describes the Nikon Z contact bank at 5-7 o'clock, while US10831084B2 places both body-side and lens-side terminal holding units in the upper portion and shows the patent terminal order on the upper arc. The MVP follows the Nikon patent for contact clocking.",
      affectedFields: ["contacts"],
      candidateValues: ["patent upper arc: 11-1 o'clock", "conflicting secondary lower arc: 5-7 o'clock"],
      resolution: "Keep the patent upper-arc placement unless an official Nikon service drawing supersedes it.",
    },
  ],
} satisfies MountSpecInput;

export default NIKON_Z_MOUNT;
