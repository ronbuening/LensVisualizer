/**
 * Pentax 645 mount SVG specification.
 *
 * The three-lug bayonet, the 70.87 mm register and the clockwise lock stayed fixed while the electrical and
 * autofocus interface grew, so the base profile holds only that invariant geometry and three variants overlay
 * each generation: `pentax-645/a` (645 A, 1984: seven lens information pins in two groups), `pentax-645/af`
 * (645 AF, 1997: twelve pins on one arc plus the AF coupler) and `pentax-645/af2` (645 AF2, 2010: the maker
 * adds "power contacts"; their position is not sourced, so only the AF coupler is drawn).
 *
 * Evidence. US6341902B1 [p645-p1] (Asahi, priority 1997-12-05, a medium-format SLR whose FIGS. 2 to 5 show the
 * 645 lens mounts) states in text that the pre-existing system has seven pins and the new one twelve, all on a
 * circle inside the mount ring and bayonet plate, with the seven old positions kept. It states no dimension,
 * angle or scale. Every angle taken from it is therefore `photo_scaled`: read off the figures about the fitted
 * mount-circle centre, to about +/-2 degrees. Radii taken from it are figure ratios applied to the 61.2 mm
 * throat, also `photo_scaled`. FIGS. 2 and 4 are lens rear views and were mirrored into the camera-front frame
 * (theta_front = (360 - theta_rear) mod 360); FIGS. 3 and 5 are body front views and were used as drawn.
 * Maker manuals [p645-m1..m4] give the mount names, what each generation adds and the clockwise lock in text
 * (`official`); angles scaled from their oblique line drawings are `photo_scaled` to about +/-10 degrees.
 *
 * Storage convention. The body is drawn as it is and the lens as mounted and locked. Each `body-slot-n` is a
 * body bayonet-plate claw (the metal that retains a lug); the open entry gaps lie between the claws. Each
 * `lens-lug-n` sits where FIGS. 2 and 4 draw it on a locked lens, behind the claw named in `matesWith`.
 * Claws and lugs are each numbered clockwise from the one nearest 12 o'clock, so the numbers of a mated pair
 * differ. Contacts and the AF coupler are also at their mounted positions; the turn from insertion to lock
 * lives only in `lockGeometry`.
 *
 * Still estimated: both outer diameters, the mount-ring radii, lug thickness, the aperture coupling, the mount
 * screws and the lug-engagement plane rest on the unreferenced imagery source [p645-2]; the lock pin and notch
 * are unknown. See `openQuestions`.
 */

import type { ContactFeature, MountProfileId, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const BASE = "pentax-645/base" satisfies MountProfileId;
const A = "pentax-645/a" satisfies MountProfileId;
const AF = "pentax-645/af" satisfies MountProfileId;
const AF2 = "pentax-645/af2" satisfies MountProfileId;

const W = ["p645-1"]; // Wikipedia, flange focal distance
const L = ["p645-2"]; // unreferenced body/lens imagery (low confidence)
const T = ["p645-3"]; // Wikipedia, lens-mount table throat
const P = ["p645-p1"]; // US6341902B1, text
const PF = ["p645-p1f"]; // US6341902B1 FIGS. 2 to 5, scaled
const M_NII = ["p645-m1"]; // 645NII operating manual
const M_Z = ["p645-m2"]; // 645Z menu reference (specifications)
const M_D = ["p645-m3"]; // 645D operating manual
const M_645 = ["p645-m4"]; // 645 (1984) operating manual

/** Throat radius, from the 61.2 mm throat [p645-3]. */
const THROAT_R = 30.6;
/** Body claw tip and lens lug root: 0.920 of the throat radius in US6341902B1 FIGS. 2 to 5. */
const LUG_ROOT_R = 28.1;
/** Lens lug tip: 0.984 of the throat radius in US6341902B1 FIGS. 2 and 4. */
const LUG_TIP_R = 30.1;
/** Contact pin circle: 0.831 of the throat radius in US6341902B1 FIGS. 2 and 4. */
const PIN_CIRCLE_R = 25.4;
/** Lens rear opening inside the protection ring: 0.723 of the throat radius in US6341902B1 FIGS. 2 and 4. */
const REAR_OPENING_R = 22.1;

/**
 * The twelve pins of US6341902B1, in the patent's own lettering (col. 12, ll. 43-57). Angles are the FIG. 2
 * lens-rear readings mirrored into the camera-front frame, rounded to 0.5 degrees. Pins a-d and j-l are the
 * seven pre-existing (645 A) pins; FIG. 4 puts them at the same angles to within 0.2 degrees.
 */
const PINS = [
  { letter: "a", angleDeg: 325, role: "Fmin2/DATA", preExisting: true },
  { letter: "b", angleDeg: 331.5, role: "Fmin1/SCK", preExisting: true },
  { letter: "c", angleDeg: 338, role: "Fmax1", preExisting: true },
  { letter: "d", angleDeg: 344, role: "Fmax2", preExisting: true },
  { letter: "e", angleDeg: 350.5, role: "(dummy)", preExisting: false },
  { letter: "f", angleDeg: 356.5, role: "PGND", preExisting: false },
  { letter: "g", angleDeg: 3, role: "VLENS (VBATT)", preExisting: false },
  { letter: "h", angleDeg: 9, role: "LENS N/O", preExisting: false },
  { letter: "i", angleDeg: 15.5, role: "CONTL/VDD", preExisting: false },
  { letter: "j", angleDeg: 22.5, role: "LS/ACK", preExisting: true },
  { letter: "k", angleDeg: 28.5, role: "Fmin3/RES", preExisting: true },
  { letter: "l", angleDeg: 35, role: "A/M", preExisting: true },
];

/** One generation's pin bank on both sides; body and lens pins share an angle because they meet when locked. */
function pinBank(profileId: MountProfileId, pins: typeof PINS): ContactFeature[] {
  return (["body", "lens"] as const).flatMap((side) =>
    pins.map((pin, index) => ({
      side,
      contactNo: index + 1,
      profileId,
      centerAngleDeg: v(pin.angleDeg, "photo_scaled", PF),
      centerRadiusMm: v(PIN_CIRCLE_R, "photo_scaled", PF),
      widthMm: v(1.3, "photo_scaled", PF),
      heightMm: v(1.3, "photo_scaled", PF),
      shape: side === "body" ? "round pin, sprung" : "round pin",
      protrusionMm: unknownV(PF),
      function: `pin ${pin.letter}: ${pin.role}`,
    })),
  );
}

const SLOT_NOTES =
  "body bayonet-plate claw projecting inward from the throat; edges scaled from US6341902B1 FIG. 5 (body front view), FIG. 3 agrees within 1 degree; radii are figure ratios of the 61.2 mm throat. The open entry gaps are 324.5 to 28 (top, over the pin plate), 104 to 163 and 214.5 to 261.5 degrees";
const LUG_NOTES =
  "edges scaled from US6341902B1 FIG. 4 (lens rear view of a mounted lens, mirrored to the camera-front frame), drawn at the locked position; radii are figure ratios of the 61.2 mm throat";

const PENTAX_645_MOUNT = {
  mountId: "pentax-645",
  displayLabel: "Pentax 645",
  projectNote: "Pentax 645 medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["aperture_coupling", "lens_information_contacts", "af_coupler", "power_contacts"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_and_claw_dimensions", "contact_pitch", "power_contact_positions"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: AF,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "all Pentax 645 bodies and lenses, 1984 onward",
          adds: ["three-lug bayonet", "70.87 mm register", "clockwise lock", "mounting index", "aperture coupling"],
          removes: [],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...W, ...T, ...P, ...M_645, ...M_D],
        },
        {
          profileId: A,
          profileType: "variant",
          appliesTo: "645 A mount: Pentax 645 (1984) and 645 A lenses",
          adds: ["seven lens information pins in two groups (four and three) inside the mount"],
          removes: [],
          changes: ["manual focus only; no AF coupler"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "partial",
          sourceRefs: [...P, ...M_645],
        },
        {
          profileId: AF,
          profileType: "variant",
          appliesTo: "645 AF mount: Pentax 645N / 645NII (1997 onward) and FA 645 lenses",
          adds: ["five more pins between the two 645 A groups, twelve on one arc", "AF coupler"],
          removes: [],
          changes: ["the seven 645 A pin positions are kept, so 645 A lenses and bodies still connect"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...P, ...M_NII, ...M_D],
        },
        {
          profileId: AF2,
          profileType: "variant",
          appliesTo: "645 AF2 mount: Pentax 645D / 645Z and D FA 645 / DA 645 lenses",
          adds: ["power contacts (position and count not sourced, not drawn)"],
          removes: [],
          changes: [
            "the maker lists AF coupler, lens information contacts and power contacts; only the body AF coupler is drawn because no dimensioned or front-view source for the 645 AF2 contact bank was found",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...M_Z, ...M_D],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(70.87, "secondary", W),
    nominalThroatDiameterMm: v(61.2, "secondary", T),
    effectiveClearApertureMm: v(61.2, "secondary", T),
    cameraMountOuterDiameterMm: v(72, "photo_scaled", L),
    lensMountOuterDiameterMm: v(70, "photo_scaled", L),
    contactCount: v(12, "patent", P),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", PF),
    lockAngleDeg: v(60, "photo_scaled", PF),
    lockRotationDeg: v(60, "photo_scaled", PF),
    lockRotationDirection: dirV("clockwise", "official", [...M_D, ...M_NII, ...M_645]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", T),
      startAngleDeg: v(0, "secondary", T),
      endAngleDeg: v(360, "secondary", T),
      innerRadiusMm: v(0, "secondary", T),
      outerRadiusMm: v(THROAT_R, "secondary", T),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "61.2 mm throat opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", L),
      startAngleDeg: v(0, "photo_scaled", L),
      endAngleDeg: v(360, "photo_scaled", L),
      innerRadiusMm: v(THROAT_R, "secondary", T),
      outerRadiusMm: v(36, "photo_scaled", L),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring; outer radius is an unreferenced estimate",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(66, "photo_scaled", PF),
      startAngleDeg: v(28, "photo_scaled", PF),
      endAngleDeg: v(104, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(THROAT_R, "secondary", T),
      depthMm: v(1.8, "photo_scaled", L),
      matesWith: "lens-lug-2",
      shapeNotes: `right claw, 76 degrees; ${SLOT_NOTES}`,
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(188.75, "photo_scaled", PF),
      startAngleDeg: v(163, "photo_scaled", PF),
      endAngleDeg: v(214.5, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(THROAT_R, "secondary", T),
      depthMm: v(1.8, "photo_scaled", L),
      matesWith: "lens-lug-3",
      shapeNotes: `bottom claw, 51.5 degrees; ${SLOT_NOTES}`,
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(293, "photo_scaled", PF),
      startAngleDeg: v(261.5, "photo_scaled", PF),
      endAngleDeg: v(324.5, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(THROAT_R, "secondary", T),
      depthMm: v(1.8, "photo_scaled", L),
      matesWith: "lens-lug-1",
      shapeNotes: `left claw, 63 degrees; ${SLOT_NOTES}`,
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(305, "photo_scaled", M_D),
      startAngleDeg: v(305, "photo_scaled", M_D),
      endAngleDeg: v(305, "photo_scaled", M_D),
      innerRadiusMm: naV(),
      outerRadiusMm: v(36.5, "photo_scaled", L),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot on the left of the mount seen from the front; angle scaled from the oblique line drawing in the 645D manual p. 11, about +/-10 degrees; radius is an unreferenced estimate",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: unknownV([...M_D, ...PF]),
      startAngleDeg: unknownV([...M_D, ...PF]),
      endAngleDeg: unknownV([...M_D, ...PF]),
      innerRadiusMm: unknownV([...M_D, ...PF]),
      outerRadiusMm: unknownV([...M_D, ...PF]),
      depthMm: unknownV([...M_D, ...PF]),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "position not sourced. The lens unlock button sits at about 235 degrees in the 645D manual p. 11 drawing, but the pin is not shown; US6341902B1 FIGS. 2 and 4 show an unlabelled notch in the outer edge of lens-lug-3 at about 180 degrees",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", PF),
      startAngleDeg: v(0, "photo_scaled", PF),
      endAngleDeg: v(360, "photo_scaled", PF),
      innerRadiusMm: v(0, "photo_scaled", PF),
      outerRadiusMm: v(REAR_OPENING_R, "photo_scaled", PF),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear opening inside the insulating protection ring that carries the pins; radius is a figure ratio (0.723) of the 61.2 mm throat from US6341902B1 FIGS. 2 and 4",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", L),
      startAngleDeg: v(0, "photo_scaled", L),
      endAngleDeg: v(360, "photo_scaled", L),
      innerRadiusMm: v(THROAT_R, "photo_scaled", PF),
      outerRadiusMm: v(35, "photo_scaled", L),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "lens flange ring; inner edge taken at the throat radius, where the mount ring begins in US6341902B1 FIGS. 2 and 4; outer radius is an unreferenced estimate",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(309, "conflicting", PF),
      startAngleDeg: v(293.5, "conflicting", PF),
      endAngleDeg: v(324.5, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(LUG_TIP_R, "photo_scaled", PF),
      thicknessMm: v(1.8, "photo_scaled", L),
      matesWith: "body-slot-3",
      shapeNotes: `narrow lug behind the left claw: 31 degrees in FIG. 4 (pre-existing lens) but 45.5 degrees in FIG. 2 (new lens) of the same patent, which starts it at 279.5 degrees; both figures end it at 324.5. The FIG. 4 edges are stored; ${LUG_NOTES}`,
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(57.75, "photo_scaled", PF),
      startAngleDeg: v(28, "photo_scaled", PF),
      endAngleDeg: v(87.5, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(LUG_TIP_R, "photo_scaled", PF),
      thicknessMm: v(1.8, "photo_scaled", L),
      matesWith: "body-slot-1",
      shapeNotes: `59.5 degree lug behind the right claw; FIG. 2 agrees within 0.5 degrees; ${LUG_NOTES}`,
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(192.25, "photo_scaled", PF),
      startAngleDeg: v(166.5, "photo_scaled", PF),
      endAngleDeg: v(218, "photo_scaled", PF),
      innerRadiusMm: v(LUG_ROOT_R, "photo_scaled", PF),
      outerRadiusMm: v(LUG_TIP_R, "photo_scaled", PF),
      thicknessMm: v(1.8, "photo_scaled", L),
      matesWith: "body-slot-2",
      shapeNotes: `51.5 degree lug behind the bottom claw, with a slanted end at 218 degrees and an unlabelled notch in its outer edge at 177 to 182.5 degrees; FIG. 2 agrees within 0.5 degrees; ${LUG_NOTES}`,
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(305, "photo_scaled", M_D),
      startAngleDeg: v(305, "photo_scaled", M_D),
      endAngleDeg: v(305, "photo_scaled", M_D),
      innerRadiusMm: naV(),
      outerRadiusMm: v(35.5, "photo_scaled", L),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot that meets the body index when the lens is offered up; kept at the body index angle; radius is an unreferenced estimate",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: BASE,
      count: 1,
      centerAngleDeg: unknownV([...M_D, ...PF]),
      startAngleDeg: unknownV([...M_D, ...PF]),
      endAngleDeg: unknownV([...M_D, ...PF]),
      innerRadiusMm: unknownV([...M_D, ...PF]),
      outerRadiusMm: unknownV([...M_D, ...PF]),
      thicknessMm: unknownV([...M_D, ...PF]),
      matesWith: "body-lock-pin",
      shapeNotes: "position not sourced; shares the body lock pin angle once that is known",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(72, "photo_scaled", L),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", L),
      thicknessMm: v(1.8, "photo_scaled", L),
      diameterMm: v(2 * LUG_TIP_R, "photo_scaled", PF),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-70.87, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(69.7, "secondary", W),
    },
  ],

  contacts: [
    ...pinBank(
      A,
      PINS.filter((pin) => pin.preExisting),
    ),
    ...pinBank(AF, PINS),
  ],

  mechanicalCouplings: [
    {
      featureId: "aperture-coupling",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(320, "photo_scaled", L),
      radiusMm: v(31, "photo_scaled", L),
      sizeOrTravel: "lever/cam",
      function: "aperture actuation and reporting",
      compatibilityNotes: "unreferenced estimate, representative for the 645 family; not located in any source found",
    },
    {
      featureId: "af-coupler",
      side: "body",
      profileId: AF,
      centerAngleDeg: v(130, "photo_scaled", M_D),
      radiusMm: unknownV(M_D),
      sizeOrTravel: "drive shaft",
      function: "screw-drive autofocus from the body AF motor",
      compatibilityNotes:
        "angle scaled from the oblique 645D manual p. 11 drawing (a 645 AF2 body), about +/-10 degrees; carried to 645 AF because FA 645 lenses autofocus on both; radius not sourced",
    },
    {
      featureId: "af-driven-coupler",
      side: "lens",
      profileId: AF,
      centerAngleDeg: v(130, "photo_scaled", [...M_D, ...M_NII]),
      radiusMm: unknownV(M_D),
      sizeOrTravel: "driven shaft receiver",
      function: "receives the body AF coupler",
      compatibilityNotes:
        "the 645NII manual p. 17 names an AF coupler on the lens; stored at the body coupler angle it mates with",
    },
    {
      featureId: "af-coupler-af2",
      side: "body",
      profileId: AF2,
      centerAngleDeg: v(130, "photo_scaled", M_D),
      radiusMm: unknownV(M_D),
      sizeOrTravel: "drive shaft",
      function: "screw-drive autofocus from the body AF motor",
      compatibilityNotes:
        "labelled AF coupler in the 645D manual p. 11 drawing; angle scaled from that oblique drawing, about +/-10 degrees; radius not sourced",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "photo_scaled", L),
      pcdMm: v(68, "photo_scaled", L),
      diameterMm: v(2.5, "photo_scaled", L),
      centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", L),
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
      ref: "p645-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 645 register",
      confidence: "medium",
    },
    {
      ref: "p645-2",
      sourceType: "secondary",
      citation: "Pentax 645 mount visual references. Accessed 2026-06-06.",
      liveUrl: "Pentax 645 body/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "outer diameters, mount-ring radii, lug thickness, lug-engagement plane, aperture coupling and mount screws",
      confidence: "low",
    },
    {
      ref: "p645-3",
      sourceType: "secondary",
      citation: "“Lens mount,” Wikipedia, table row “Pentax 645”. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo: "61.2 mm throat diameter; the table gives no citation for it",
      confidence: "low",
    },
    {
      ref: "p645-p1",
      sourceType: "patent",
      citation:
        'US6341902B1, "Photographic lens recognition system for a camera body," Asahi Kogaku Kogyo K.K., priority JP 09-336028 (1997-12-05). Accessed 2026-11-21.',
      liveUrl: "https://patents.google.com/patent/US6341902B1/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/48/94/2c/fd55faa9c410d2/US6341902.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "medium-format SLR lens mounts. Text: seven pre-existing pins and twelve new pins on a circle inside the mount ring and bayonet plate, old positions kept (col. 1 ll. 36-56, col. 10 ll. 23-47), pin roles (col. 12 ll. 43-57). No dimension, angle or scale is stated; the figures are cited separately as [p645-p1f]",
      confidence: "high",
    },
    {
      ref: "p645-p1f",
      sourceType: "patent_figure",
      citation:
        "US6341902B1, FIGS. 2 to 5: lens rear and body front views of the pre-existing and new mounts. Undimensioned drawings, scaled for this spec. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US6341902B1/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/48/94/2c/fd55faa9c410d2/US6341902.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "FIGS. 2 and 4 are lens rear views, mirrored with theta_front = (360 - theta_rear) mod 360; FIGS. 3 and 5 are body front views, used as drawn. No dimension, angle or scale is stated, so every reading stays photo-scaled: bayonet claw and lug edges, radii as ratios of the throat, and the pin angles and pin-circle radius",
      confidence: "medium",
    },
    {
      ref: "p645-m1",
      sourceType: "official",
      citation: "Pentax 645NII Operating Manual, Asahi Optical Co., Ltd. Accessed 2026-11-21.",
      liveUrl: "https://www.ricoh-imaging.co.jp/english/support/man-pdf/645NII.pdf",
      archiveUrl: "https://www.manualslib.com/manual/259899/Pentax-645n2.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "645 AF mount named as the 645 A mount with AF coupler and lens information contacts (specifications, p. 88); lens turned to the right to lock (p. 16); AF coupler on the lens (p. 17)",
      confidence: "high",
    },
    {
      ref: "p645-m2",
      sourceType: "official",
      citation: "PENTAX 645Z Menu Reference, main specifications, Ricoh Imaging Co., Ltd. Accessed 2026-11-21.",
      liveUrl: "https://www.ricoh-imaging.co.jp/english/support/man-pdf/645z_menu.pdf",
      archiveUrl: "https://www.manualslib.com/manual/878377/Pentax-645-Z.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "645AF2 mount named with AF coupler, lens information contacts and power contacts; accepts 645AF2, 645AF and 645A lenses (p. R45)",
      confidence: "high",
    },
    {
      ref: "p645-m3",
      sourceType: "official",
      citation: "PENTAX 645D Operating Manual, maker PDF hosted by Ricoh Imaging. Accessed 2026-11-21.",
      liveUrl: "https://www.ricoh-imaging.co.jp/english/support/man-pdf/645d.pdf",
      archiveUrl: "https://www.manualslib.com/manual/417746/Pentax-645d.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: align the red lens mount index and turn the lens clockwise (p. 24). Figure, p. 11: oblique camera-front line drawing labelling lens information contacts, lens mount index, lens unlock button and AF coupler; angles scaled from it after fitting the mount ellipse, about +/-10 degrees",
      confidence: "medium",
    },
    {
      ref: "p645-m4",
      sourceType: "official",
      citation:
        "ペンタックス645 使用説明書 (Pentax 645 operating manual), Asahi Optical Co., Ltd. Accessed 2026-11-21.",
      liveUrl: "https://www.ricoh-imaging.co.jp/japan/support/man-pdf/645.pdf",
      archiveUrl: "https://www.ricoh-imaging.co.jp/japan/support/man-pdf/645-2.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "645 A mount name and lens information contacts label (p. 4, full PDF only); red indexes aligned and lens turned right until it clicks (p. 10); lens information contacts are inside the mount (p. 11). The archive copy is the maker's split part holding pp. 6-15",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "Claw and lug angles are scaled from US6341902B1 FIGS. 2 to 5, which state no angle or scale. Readings repeat to about 1 degree between the old and new figures except the narrow lug (lens-lug-1), drawn 31 degrees wide in FIG. 4 and 45.5 degrees in FIG. 2. Which sectors of the lens figures are lugs is inferred, not labelled: only the 59.5, 51.5 and 31 degree sectors fit through the 63.5, 59 and 47 degree body gaps. The bottom lug is drawn running 3.5 degrees past its claw (218 against 214.5 degrees), which is within the figure tolerance.",
      affectedFields: ["cameraSideFeatures.body-slot-*", "lensSideFeatures.lens-lug-*"],
      candidateValues: ["lens-lug-1 start 293.5, span 31 (FIG. 4)", "lens-lug-1 start 279.5, span 45.5 (FIG. 2)"],
      resolution:
        "A dimensioned Pentax bayonet drawing, a 645 / 645N service manual with mount-part drawings, or a measured lens and body. Searched: Google Patents pages for Asahi contact patents (US4653889A and JPS60243643A are K-mount; US5570153A is a joint Asahi/Nikon two-format bayonet), Ricoh manual downloads, Wikipedia, iso3200.org; a Google Patents search for Asahi bayonet-mount and lens-contact filings from 1960 to 2002 (136 results read by title). JPS60201328A (Asahi, 1984, mount locking device) is not tied to a camera model and Google Patents carries no figures for it; J-PlatPat document display was under maintenance on 2026-11-21.",
    },
    {
      issue:
        "Lock rotation angle is not stated by any source found. The 60 degree value is the earlier estimate; turning the locked lugs back until each clears its entry gap admits about 60 to 64 degrees on the patent-figure edges. Direction (clockwise from the front) is stated by the maker manuals.",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg"],
      candidateValues: [60, 62, 64],
      resolution: "Maker service data or a measured sample.",
    },
    {
      issue:
        "Lock pin and lock notch positions are unknown and render as placeholders at 0 degrees. Candidates: near the lens unlock button (about 235 degrees in the 645D manual drawing) or the unlabelled notch in lens-lug-3 of US6341902B1 FIGS. 2 and 4 (about 180 degrees with the lens locked).",
      affectedFields: ["cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: [180, 235],
      resolution: "Service manual exploded view or a measured body.",
    },
    {
      issue:
        "Throat 61.2 mm is an uncited Wikipedia table value; no maker, patent or service figure for it was found. Every radius scaled from the patent figures (lug root 28.1, lug tip 30.1, pin circle 25.4, rear opening 22.1 mm) is a ratio of that throat and moves with it. The 70.87 mm register is also still secondary: the Ricoh 645 lens line-up PDF Wikipedia cites for it no longer states a register.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.flangeFocalDistanceMm",
        "cameraSideFeatures",
        "lensSideFeatures",
        "contacts",
      ],
      candidateValues: [61, 61.2],
      resolution: "Maker drawing or calibrated measurement.",
    },
    {
      issue:
        "Both outer diameters, the mount-ring outer radii, the index-mark radii, lug thickness, the lug-engagement plane, the aperture coupling (drawn outside the throat radius, which cannot be right) and the four mount screws still rest only on the unreferenced imagery source p645-2. The same patent-figure ratios would give about 67 mm (body ring) and 65 mm (lens ring) outer diameters, but those outer circles are not corroborated between figures and were not adopted.",
      affectedFields: [
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "mechanicalCouplings.aperture-coupling",
        "screwsGasketsBaffles.body-mount-screws",
        "axialStack.bayonet_lug_engagement",
      ],
      candidateValues: [
        "body outer 72 (estimate)",
        "body outer 67 (patent ratio)",
        "lens outer 70 (estimate)",
        "lens outer 65 (patent ratio)",
      ],
      resolution:
        "Measured sample or service manual. US6341902B1 FIGS. 2 and 4 also show three unlabelled arc windows in the lens rear ring that may include the aperture lever slot.",
    },
    {
      issue:
        "645 AF pin positions follow the patent embodiment; that the production 645N / 645NII and FA 645 lenses carry all twelve pins is not confirmed by a photograph or service document. The body-front figures (FIGS. 3 and 5) place pins j to l about 2 to 4 degrees further clockwise than the lens-rear figures used here. Pin diameter (1.3 mm) is a figure ratio and pin protrusion is unknown.",
      affectedFields: ["contacts", "coreDimensions.contactCount"],
      candidateValues: [7, 12],
      resolution: "645N service manual or a measured body and lens.",
    },
    {
      issue:
        "645 AF2 power contacts are named by the maker but not located. The 645D manual drawing shows one contact arc at the top of the mount with at least ten pins visible, and the patent's twelve-pin set already includes lens power pins (PGND, VLENS), so the power contacts may lie within that arc; this is not confirmed. No lens-side 645 AF2 geometry is drawn, and which D FA 645 / DA 645 lenses omit the AF coupler or use an electromagnetic diaphragm was not sourced.",
      affectedFields: ["contacts", "mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "A Hoya / Ricoh patent or service manual for the 645D or 645Z mount, or front-view photographs with a scale. contactCount records the 645 AF figure of twelve.",
    },
  ],
} satisfies MountSpecInput;

export default PENTAX_645_MOUNT;
