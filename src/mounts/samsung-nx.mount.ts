/**
 * Samsung NX mount SVG specification.
 *
 * Samsung's APS-C mirrorless bayonet uses a 25.5 mm register and a fully electronic interface.
 * The NX10 user manual documents clockwise attachment. Samsung's NX10, NX200 and NX300 body service
 * manuals and the 30 mm / 85 mm lens service manuals give the part counts (four mount-plate screws,
 * eight contacts split five interface + three power, a sprung lens-lock shaft and a lens-detect
 * pin) and near-frontal photographs of the body mount and lens rear. Angles and diameters below are
 * scaled from those photographs: no dimensioned drawing or patent with stated mount geometry was
 * found, so they stay `photo_scaled`.
 *
 * Angle convention: camera-front frame, 0 deg at 12 o'clock, clockwise positive. `body-slot-n` is a body
 * retaining claw, not the open gap beside it, and the lens is drawn as mounted and locked, so each lens
 * lug sits behind the claw of the same number. The 60 deg lock rotation lives only in `lockGeometry`. Body photographs are front views (used as read); lens photographs are rear views
 * (converted with theta_front = (360 - theta_rear) mod 360).
 */

import type {
  CameraSideFeature,
  ContactFeature,
  LensSideFeature,
  MechanicalCoupling,
  MountSpecInput,
  ScrewGasketBaffle,
} from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const W = ["snx-1"];
const M = ["snx-2"];
const REF = [...W, ...M];
/** NX200 and NX300 service-manual front photographs of the body mount (camera-front view). */
const BODY_PHOTO = ["snx-3", "snx-4"];
/** 85 mm and 30 mm lens service-manual photographs of the lens rear (lens-rear view, mirrored here). */
const LENS_PHOTO = ["snx-6", "snx-7"];
/** Service manuals that list the mount parts by name and quantity. */
const PARTS = ["snx-3", "snx-4", "snx-5"];
const PROFILE = "samsung-nx/base";

const THROAT_RADIUS_MM = 21;
/** Stand-in radial band for the bayonet sectors (published 42 mm throat + 2.5 mm); not scaled. */
const LUG_OUTER_RADIUS_MM = 23.5;
const LUG_DEPTH_MM = 1.8;
const CAMERA_OUTER_RADIUS_MM = 30;
const LENS_OUTER_RADIUS_MM = 28.5;
const LENS_THROAT_RADIUS_MM = 20;
/** Lock pin, index dot and mount screws all sit on one circle of the body mount plate face. */
const PLATE_FACE_RADIUS_MM = 26.5;

/**
 * The three body retaining claws, numbered clockwise from the one at 12 o'clock. Claw ends read from two
 * body photographs (NX200 after removing 1.3 deg of photo roll, NX300). The open entry gaps between them
 * span 26-96, 163-217 and 271-332 deg.
 */
const BODY_SLOTS = [
  { centre: 359, start: 332, end: 26 },
  { centre: 129.5, start: 96, end: 163 },
  { centre: 244, start: 217, end: 271 },
];

/**
 * Lens lugs on a mounted, locked lens: lug ends read from the 85 mm and 30 mm lens-rear photographs,
 * mirrored to the camera-front frame. Each lug (55, 63 and 49 deg) sits behind the claw of the same number.
 */
const LENS_LUGS = [
  { centre: 3.5, start: 336, end: 31 },
  { centre: 118.5, start: 87, end: 150 },
  { centre: 252.5, start: 228, end: 277 },
];

const SLOT_NOTES =
  "body retaining claw, the solid part that holds a lens lug; the open entry gaps sit between the claws. Claw ends photo-scaled from the NX200 and NX300 service-manual front photos (reading error about 3-4 deg); radial band is a stand-in";
const LUG_NOTES =
  "lens bayonet lug drawn where it sits on a mounted lens, behind the body claw of the same number; ends photo-scaled from the 85 mm and 30 mm lens service-manual rear photos (mirrored to the camera-front frame); radial band is a stand-in";

const cameraSideFeatures: CameraSideFeature[] = [
  {
    featureId: "body-throat",
    featureType: "body_throat",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "secondary", REF),
    startAngleDeg: v(0, "secondary", REF),
    endAngleDeg: v(360, "secondary", REF),
    innerRadiusMm: v(0, "secondary", REF),
    outerRadiusMm: v(THROAT_RADIUS_MM, "secondary", REF),
    depthMm: naV(),
    matesWith: "",
    shapeNotes: "42 mm throat opening as published; which diameter the 42 mm figure denotes is an open question",
  },
  {
    featureId: "body-mount-ring",
    featureType: "mount_ring",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", BODY_PHOTO),
    startAngleDeg: v(0, "photo_scaled", BODY_PHOTO),
    endAngleDeg: v(360, "photo_scaled", BODY_PHOTO),
    innerRadiusMm: v(THROAT_RADIUS_MM, "secondary", REF),
    outerRadiusMm: v(CAMERA_OUTER_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    depthMm: naV(),
    matesWith: "",
    shapeNotes:
      "chrome mount plate (PLATE-MOUNT LENS); outer diameter photo-scaled against the stated body widths (NX200 116.5 mm, NX300 122 mm), about +/-2 mm; the raw readings are 61.6 mm and 61.3 mm, and 60 mm allows for the mount plane sitting nearer the camera than the body outline",
  },
  ...BODY_SLOTS.map(
    (slot, index): CameraSideFeature => ({
      featureId: `body-slot-${index + 1}`,
      featureType: "bayonet_receiving_slot",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(slot.centre, "photo_scaled", BODY_PHOTO),
      startAngleDeg: v(slot.start, "photo_scaled", BODY_PHOTO),
      endAngleDeg: v(slot.end, "photo_scaled", BODY_PHOTO),
      innerRadiusMm: v(THROAT_RADIUS_MM, "photo_scaled", REF),
      outerRadiusMm: v(LUG_OUTER_RADIUS_MM, "photo_scaled", REF),
      depthMm: v(LUG_DEPTH_MM, "photo_scaled", REF),
      matesWith: `lens-lug-${index + 1}`,
      shapeNotes: SLOT_NOTES,
    }),
  ),
  {
    featureId: "body-index-mark",
    featureType: "index_mark",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(300, "photo_scaled", BODY_PHOTO),
    startAngleDeg: unknownV(BODY_PHOTO),
    endAngleDeg: unknownV(BODY_PHOTO),
    innerRadiusMm: unknownV(BODY_PHOTO),
    outerRadiusMm: v(PLATE_FACE_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    depthMm: naV(),
    matesWith: "lens-index-mark",
    shapeNotes:
      "red dot on the mount plate face, 15 deg anticlockwise of the upper-left plate screw (297 deg on the NX200 photo, 301 deg on the NX300 photo)",
  },
  {
    featureId: "body-lock-pin",
    featureType: "lock_pin",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(90, "photo_scaled", BODY_PHOTO),
    startAngleDeg: unknownV(BODY_PHOTO),
    endAngleDeg: unknownV(BODY_PHOTO),
    innerRadiusMm: unknownV(BODY_PHOTO),
    outerRadiusMm: v(PLATE_FACE_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    depthMm: v(LUG_DEPTH_MM, "photo_scaled", REF),
    matesWith: "lens-lock-notch",
    shapeNotes:
      "sprung lock shaft (SHAFT LENS LOCK) through the mount plate face beside the lens-release button; 92 deg on the NX200 photo, 89 deg on the NX300 photo; protrusion is a stand-in",
  },
];

const lensSideFeatures: LensSideFeature[] = [
  {
    featureId: "lens-throat",
    featureType: "lens_throat",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "secondary", REF),
    startAngleDeg: v(0, "secondary", REF),
    endAngleDeg: v(360, "secondary", REF),
    innerRadiusMm: v(0, "secondary", REF),
    outerRadiusMm: v(LENS_THROAT_RADIUS_MM, "photo_scaled", REF),
    thicknessMm: naV(),
    matesWith: "",
    shapeNotes: "rear opening (stand-in radius, lens-specific)",
  },
  {
    featureId: "lens-mount-ring",
    featureType: "lens_mount_ring",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", ["snx-7"]),
    startAngleDeg: v(0, "photo_scaled", ["snx-7"]),
    endAngleDeg: v(360, "photo_scaled", ["snx-7"]),
    innerRadiusMm: v(LENS_THROAT_RADIUS_MM, "photo_scaled", REF),
    outerRadiusMm: v(LENS_OUTER_RADIUS_MM, "photo_scaled", ["snx-7"]),
    thicknessMm: naV(),
    matesWith: "",
    shapeNotes:
      "lens flange ring; outer diameter photo-scaled on the 30 mm F2 against its stated 61.5 mm maximum barrel diameter (flange = 0.93 of the rear rim), about +/-2 mm",
  },
  ...LENS_LUGS.map(
    (lug, index): LensSideFeature => ({
      featureId: `lens-lug-${index + 1}`,
      featureType: "bayonet_lug",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(lug.centre, "photo_scaled", LENS_PHOTO),
      startAngleDeg: v(lug.start, "photo_scaled", LENS_PHOTO),
      endAngleDeg: v(lug.end, "photo_scaled", LENS_PHOTO),
      innerRadiusMm: v(THROAT_RADIUS_MM, "photo_scaled", REF),
      outerRadiusMm: v(LUG_OUTER_RADIUS_MM, "photo_scaled", REF),
      thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", REF),
      matesWith: `body-slot-${index + 1}`,
      shapeNotes: LUG_NOTES,
    }),
  ),
  {
    featureId: "lens-index-mark",
    featureType: "index_mark",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(300, "photo_scaled", ["snx-3", "snx-4", "snx-6"]),
    startAngleDeg: unknownV(["snx-6"]),
    endAngleDeg: unknownV(["snx-6"]),
    innerRadiusMm: unknownV(["snx-6"]),
    outerRadiusMm: v(LENS_OUTER_RADIUS_MM + 0.5, "photo_scaled", ["snx-6"]),
    thicknessMm: naV(),
    matesWith: "body-index-mark",
    shapeNotes:
      "red dot on the barrel just outside the flange, shown at the insertion alignment with the body dot; on the lens it sits in line with the centre of the contact bank, so it is at 12 o'clock once locked; radial position is lens-specific",
  },
  {
    featureId: "lens-lock-notch",
    featureType: "lock_notch",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(90, "photo_scaled", ["snx-6"]),
    startAngleDeg: unknownV(["snx-6"]),
    endAngleDeg: unknownV(["snx-6"]),
    innerRadiusMm: unknownV(["snx-6"]),
    outerRadiusMm: v(PLATE_FACE_RADIUS_MM, "photo_scaled", ["snx-6"]),
    thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", REF),
    matesWith: "body-lock-pin",
    shapeNotes:
      "oblong slot in the lens flange face that receives the body lock shaft; at 9 o'clock in the 85 mm lens-rear photo with the contacts at top, which is 90 deg in the camera-front frame",
  },
];

const CONTACT_COUNT = 8;
const CONTACT_START_DEG = 328.5;
const CONTACT_STEP_DEG = 9;
const CONTACT_RADIUS_MM = 18;
const CONTACT_REFS = ["snx-3", "snx-4", "snx-6"];
const INTERFACE_CONTACT =
  "interface signal: one of SIO3_SCK, SIO3_MISO, SIO3_MOSI, LENS_SYNC, LENS_RB (per-pin order not established)";
const POWER_CONTACT = "power group: one of GND, DP, MP (per-pin order not established)";

/**
 * Eight contacts numbered clockwise in the camera-front frame. Contacts 1-5 are the short
 * CONTACT-INTERFACE pins and 6-8 the longer CONTACT-IF POWER pins (NX200 exploded view, release
 * button side). Angle and radius are photo-scaled; pad width, height and protrusion are stand-ins.
 */
const contacts: ContactFeature[] = (["body", "lens"] as const).flatMap((side) =>
  Array.from(
    { length: CONTACT_COUNT },
    (_, i): ContactFeature => ({
      side,
      contactNo: i + 1,
      profileId: PROFILE,
      centerAngleDeg: v((CONTACT_START_DEG + i * CONTACT_STEP_DEG) % 360, "photo_scaled", CONTACT_REFS),
      centerRadiusMm: v(CONTACT_RADIUS_MM, "photo_scaled", CONTACT_REFS),
      widthMm: v(1.3, "photo_scaled", M),
      heightMm: v(2.8, "photo_scaled", M),
      shape: side === "body" ? "pin" : "pad",
      protrusionMm: v(side === "body" ? 0.4 : 0, "photo_scaled", M),
      function: i < 5 ? INTERFACE_CONTACT : POWER_CONTACT,
    }),
  ),
);

const mechanicalCouplings: MechanicalCoupling[] = [
  {
    featureId: "lens-detect-pin",
    side: "body",
    profileId: PROFILE,
    centerAngleDeg: v(150, "photo_scaled", BODY_PHOTO),
    radiusMm: v(19.5, "photo_scaled", BODY_PHOTO),
    sizeOrTravel: "spring-loaded axial pin inside the throat (SHAFT LENS DETECT with SPRING LENS DETECT PIN)",
    function: "pressed by the mounted lens so the body's lens-detect switch reports a lens is attached",
    compatibilityNotes:
      "listed in the NX10, NX200 and NX300 service parts lists; 148 deg on the NX200 photo, 151 deg on the NX300 photo; the pin sits below the flange plane so its scaled radius is approximate",
  },
];

const screwsGasketsBaffles: ScrewGasketBaffle[] = [
  {
    featureId: "body-mount-screws",
    featureType: "mount_screws",
    side: "body",
    count: v(4, "service_manual", PARTS),
    pcdMm: v(2 * PLATE_FACE_RADIUS_MM, "photo_scaled", BODY_PHOTO),
    diameterMm: v(1.8, "photo_scaled", M),
    centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", BODY_PHOTO),
    shape: "round",
  },
];

const SAMSUNG_NX_MOUNT = makeSimpleMountSpec({
  mountId: "samsung-nx",
  displayLabel: "Samsung NX",
  projectNote: "Samsung NX APS-C mirrorless bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: [...REF, ...PARTS, ...LENS_PHOTO],
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["electrical_contacts"],
  referenceGrade: ["exact_lug_geometry", "contact_pitch", "mount_outer_diameter"],
  appliesTo: "Samsung NX lenses and APS-C NX bodies, 2010–2015",
  adds: [
    "three-sector short-register bayonet with unequal sectors",
    "eight-contact fully electronic interface (five interface pins, three power pins)",
    "body-side sprung lock shaft and red mounting index on the mount plate face",
    "spring-loaded lens-detect pin inside the throat",
  ],
  removes: ["mechanical aperture and autofocus couplings"],
  changes: [
    "single base interface; NX Mini uses the separate, incompatible NX-M mount",
    "NX10 (2010), NX200 (2011) and NX300 (2013) service manuals show the same four-screw plate, eight contacts, index and lock positions; only the plate screw thread differs by body",
  ],
  flangeFocalDistanceMm: v(25.5, "secondary", W),
  nominalThroatDiameterMm: v(42, "secondary", W),
  effectiveClearApertureMm: v(42, "secondary", W),
  cameraMountOuterDiameterMm: v(2 * CAMERA_OUTER_RADIUS_MM, "photo_scaled", BODY_PHOTO),
  lensMountOuterDiameterMm: v(2 * LENS_OUTER_RADIUS_MM, "photo_scaled", ["snx-7"]),
  contactCount: v(CONTACT_COUNT, "service_manual", ["snx-3", "snx-5"]),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", M),
    lockAngleDeg: v(60, "photo_scaled", ["snx-3", "snx-4", "snx-6"]),
    lockRotationDeg: v(60, "photo_scaled", ["snx-3", "snx-4", "snx-6"]),
    lockRotationDirection: dirV("clockwise", "official", M),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: [...REF, ...BODY_PHOTO],
    flangeFocalDistanceMm: 25.5,
    mountOuterDiameterMm: 2 * CAMERA_OUTER_RADIUS_MM,
    lugEngagementDiameterMm: 2 * LUG_OUTER_RADIUS_MM,
    sensorFilmDiameterMm: 28.35,
    includeElectricalPlane: true,
    electricalDiameterMm: 2 * CONTACT_RADIUS_MM,
  }),
  contacts,
  mechanicalCouplings,
  screwsGasketsBaffles,
  sourceRefs: [
    {
      ref: "snx-1",
      sourceType: "secondary",
      citation: "“Samsung NX-mount,” Wikipedia. Accessed 2026-08-02.",
      liveUrl: "https://en.wikipedia.org/wiki/Samsung_NX-mount",
      archiveUrl: "http://web.archive.org/web/20260623060500/https://en.wikipedia.org/wiki/Samsung_NX-mount",
      archiveDate: "2026-06-23",
      appliesTo: "25.5 mm flange focal distance, 42 mm mount diameter, APS-C NX identity",
      confidence: "medium",
    },
    {
      ref: "snx-2",
      sourceType: "official",
      citation: "Samsung NX10 User Manual, version 1.3, pp. 17 and 21. Accessed 2026-08-02.",
      liveUrl: "https://www.samsung.com/ca/support/model/EV-NX10ZZBABCA/",
      archiveUrl: "https://nxfiles.nx.tc/files/NX10/Manual/NX10_English.pdf",
      archiveDate: "2026-08-02",
      appliesTo:
        "clockwise attachment and the mount/index/release arrangement; its illustrations were the first basis for the contact pad size, lug radial band and screw diameter stand-ins that are still unscaled",
      confidence: "medium",
    },
    {
      ref: "snx-3",
      sourceType: "service_manual",
      citation:
        "Samsung Electronics, NX200 Service Manual (NX200_ENG_SM_110921), 2011: p. 3-13 (PDF p. 26) front photo “Remove the 4 screws”, M.SCREW(M1.7X5/NI), and the mount-plate exploded photo; p. 7-4 (PDF p. 66) flange-back adjust value; p. 8-8 (PDF p. 81) Inner Mount Holder Assy exploded view and parts list. Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/3738435/Samsung-Nx200.html",
      archiveUrl: "https://nxfiles.nx.tc/files/NX200/Service-Manual/NX200_ENG_SM_110921.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view (angles used as read, less 1.3 deg photo roll taken from the four plate screws and the contact row): claw ends, index dot, lock shaft, lens-detect pin, screw positions, contact pitch; diameters scaled against the 116.5 mm body width. Stated in text or parts list: four plate screws, CONTACT-INTERFACE x5 and CONTACT-IF POWER x3, 25.55 mm flange-back adjust value",
      confidence: "medium",
    },
    {
      ref: "snx-4",
      sourceType: "service_manual",
      citation:
        "Samsung Electronics, NX300 Service Manual, 2013: p. 3-13 (PDF p. 27) Figs. 3-23 and 3-24, “Remove the 4 screws” and the PLATE-MOUNT LENS / MOUNT-INNER / SHAFT-LENS DETECT sequence; PDF p. 71 flange-back adjust specification; PDF pp. 9–10 body dimensions. Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/1584164/Samsung-Nx300.html",
      archiveUrl: "https://nxfiles.nx.tc/files/NX300/Service-Manual/Samsung_NX300_Service_manual.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view (angles used as read; the four plate screws show no photo roll): second reading of claw ends, index dot, lock shaft, lens-detect pin, screw positions and contact pitch; diameters scaled against the 122 mm body width. Stated in text: four plate screws, 25.55 mm flange-back adjust specification",
      confidence: "medium",
    },
    {
      ref: "snx-5",
      sourceType: "service_manual",
      citation:
        "Samsung Electronics, NX10 Service Manual: pp. 3-6 and 3-7 (PDF pp. 23–24) Mount Holder Assembly exploded view and parts list (MOUNT LENS, SCREW 2.0*6.0 PAN x4, SHAFT LENS LOCK, SHAFT LENS DETECT, ASSY-BASE IF PIN); p. 7-5 (PDF p. 53) Lens PCB signal names. Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/1189368/Samsung-Nx10.html",
      archiveUrl: "https://nxfiles.nx.tc/files/NX10/Service-Manual/Samsung_NX10_Service_manual.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "part names and quantities for the first NX body: four mount-plate screws, lock and lens-detect shafts, and the eight interface signal names (SIO3_SCK, SIO3_MISO, SIO3_MOSI, LENS_SYNC, LENS_RB, GND, DP, MP); no angles or dimensions taken from it",
      confidence: "high",
    },
    {
      ref: "snx-6",
      sourceType: "service_manual",
      citation:
        "Samsung Electronics, NX Lens XL1103 (85 mm F1.4 ED SSA) Service Manual, 2011: p. 3-2 (PDF p. 11) Figs. 3-1 and 3-2, lens-rear photographs. Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/4019926/Samsung-Nx-Lens-Xl1103.html",
      archiveUrl: "https://nxfiles.nx.tc/files/Lens/Service-Manual/XL1103_LENS_ENG_121024_85mm.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "lens-rear view, mirrored to the camera-front frame after removing 4.4 deg of photo roll (taken from the index dot and contact-row centre): lens lug ends, lock slot at 9 o'clock, red index in line with the contact-row centre (which with the body dot near 300 deg gives the 60 deg lock rotation), eight pads at about 9 deg pitch with a wider sixth pad",
      confidence: "medium",
    },
    {
      ref: "snx-7",
      sourceType: "service_manual",
      citation:
        "Samsung Electronics, NX Lens XL1012 (30 mm F2) Service Manual, 2011: p. 1-1 (PDF p. 3) “Max. Diameter x Length 61.5x21.5mm”; p. 2-1 (PDF p. 4) “Align the red mark on the lens with the red mark on the camera body … Rotate the lens clockwise until it locks into place”; p. 4-2 (PDF p. 14) lens-rear photograph. Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/4032702/Samsung-Nx-Lens-Xl1012.html",
      archiveUrl: "https://nxfiles.nx.tc/files/Lens/Service-Manual/XL1012_LENS_ENG_121015_30mm.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "lens-rear view, mirrored to the camera-front frame (low-resolution photo, lens turned about 17 deg from the mounted orientation, corrected from the contact-row centre): second reading of the lens lug ends; lens flange diameter scaled against the stated 61.5 mm barrel diameter",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue:
        "No dimensioned drawing or patent with stated NX mount geometry was located, so lug and slot angles, lock rotation, index, lock pin, lens-detect pin, screw positions, contact pitch and both outer diameters are scaled from service-manual photographs (angles about +/-3-4 deg, diameters about +/-2 mm). Searched: Samsung NX10, NX200, NX300 and NX1 body service manuals and the 30 mm, 18-55 mm and 85 mm lens service manuals (parts lists and photos only, no mount drawings); Samsung patents KR10-2012-0138199 and KR10-2012-0138201 (lens communication, no geometry), KR101567816B1 / US8414204B2 lens adapter and US2010/0166417A1 (no dimensions or angles).",
      affectedFields: [
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "cameraSideFeatures",
        "lensSideFeatures",
        "lockGeometry",
        "contacts",
        "mechanicalCouplings",
        "screwsGasketsBaffles",
      ],
      candidateValues: [],
      resolution:
        "Upgrade from a Samsung mechanical drawing, a mount patent with stated angles, or a measured NX body and lens.",
    },
    {
      issue:
        "Bayonet radial bands (21 to 23.5 mm), lug depth and thickness (1.8 mm), lens rear opening (20 mm radius), contact pad width, height and protrusion, lock-pin protrusion and the drawn screw diameter are unscaled stand-ins carried over from the first draft. Lens lugs are stored on their slot's centre angle; the lens photos put them within 2.5 deg of that.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "axialStack", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Measure a body mount plate, MOUNT-INNER ring and lens mount, or find a drawing.",
    },
    {
      issue:
        "The commonly published 42 mm mount diameter is secondary-sourced and it is unclear which diameter it denotes. Photo scaling puts the mount-plate opening near 45 mm and the claw-to-claw and lens-lug diameters near 40-42 mm.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "coreDimensions.effectiveClearApertureMm"],
      candidateValues: ["42 mm"],
      resolution: "Confirm whether 42 mm denotes the clear throat or another mount-diameter convention.",
    },
    {
      issue:
        "The 25.5 mm register is secondary-sourced. The NX200 and NX300 service manuals give a mount-to-CMOS flange-back adjust value of 25.55 mm (-35/+15, printed “mm” but evidently micrometres), measured on a Kyoritsu RSM-5000; that band does not include 25.50 mm, so it may be a mechanical distance that allows for the sensor cover glass.",
      affectedFields: ["coreDimensions.flangeFocalDistanceMm", "axialStack"],
      candidateValues: ["25.5 mm", "25.55 mm"],
      resolution:
        "Find a Samsung statement of the design register, or establish what the service adjust value measures.",
    },
    {
      issue:
        "Contact functions are known only as groups: five interface pins (contacts 1-5) and three power pins (contacts 6-8, release-button side), with signal names from the NX10 Lens PCB. Which pin carries which signal is not established; the lens-side sixth pad is wider than the rest.",
      affectedFields: ["contacts"],
      candidateValues: [],
      resolution: "Trace an NX body contact block or lens flex to assign each signal to its pin.",
    },
    {
      issue:
        "Mount-plate screw thread differs by body: SCREW 2.0*6.0 PAN on the NX10, M1.7x5 on the NX200. The screw count (4) is from the parts lists; the pitch circle and 45 deg positions are photo-scaled, and the drawn diameter is a stand-in.",
      affectedFields: ["screwsGasketsBaffles"],
      candidateValues: ["M2.0 (NX10)", "M1.7 (NX200)"],
      resolution: "Minor feature; settle with a measured body or drawing.",
    },
  ],
  includeElectricalLayers: true,
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default SAMSUNG_NX_MOUNT;
