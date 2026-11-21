/**
 * Hasselblad V mount SVG specification (500-series bayonet of 1957, also used by the 2000 and 200 series).
 *
 * The body carries four retaining flanges and the lens is turned clockwise to lock. The body drive shaft
 * key at the bottom of the mount cocks and trips the in-lens leaf shutter (or works the diaphragm of the
 * shutterless F / FE lenses). The base profile holds that mechanical interface. The `databus` variant adds
 * the four lens data-bus contacts of TCC / FE / CFE lenses and 200-series bodies.
 *
 * Evidence: counts, part names and the 71.40 mm body depth are stated in the factory service manual
 * [hv-3]; the locking direction and "1/5 of a revolution" are stated in the owner manuals [hv-4, hv-5].
 * Every angle and radius of the bayonet is scaled from manual drawings and is tagged `photo_scaled`:
 * flange spans, ring radii, index dot and release button from the dimensioned "Camera Body Dimensions"
 * front view [hv-4]; drive key, its index dot, the stop pin and the flange screws from the vector Fig. 29
 * of the service manual [hv-3], scaled so the flange-tip circle is the 69 mm throat [hv-2].
 *
 * `body-slot-n` is a body retaining flange, not the open gap beside it, and the lens is drawn as mounted:
 * each lens lug sits behind the flange of the same number. The earlier 1600F /
 * 1000F cameras use a different mount and are outside this spec; US2526433A [hv-p1] belongs to that era
 * and supports no value here.
 */

import type { ContactFeature, MountProfileId, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const W = ["hv-1"]; // Wikipedia flange-distance table
const FDT = ["hv-2"]; // Film and Digital Times / IB/E Optics chart
const SM = ["hv-3"]; // factory service manual, 503CW and earlier 500-series bodies
const OM = ["hv-4"]; // 503cx / 500C/M instruction manual
const C500 = ["hv-5"]; // 500C instruction manual
const FE = ["hv-6"]; // 203FE instruction manual (hv-7 is the CFi / CFE lens leaflet)
const OM_SM = ["hv-4", "hv-3"];

const BASE: MountProfileId = "hasselblad-v/base";
const DATABUS: MountProfileId = "hasselblad-v/databus";

/** Arcs of the four body retaining flanges, read off the dimensioned front view [hv-4] at 1 deg resolution. */
const FLANGE_ARCS = "34 to 60, 121 to 151, 212 to 240 and 300 to 329 deg";

/**
 * The four body retaining flanges, numbered clockwise from the upper right. The open gaps between them
 * are centred near 1.5, 90.5, 181.5 and 270 deg.
 */
const SLOTS = [
  { n: 1, center: 47, start: 34, end: 60, note: "upper right" },
  { n: 2, center: 136, start: 121, end: 151, note: "lower right" },
  { n: 3, center: 226, start: 212, end: 240, note: "lower left" },
  { n: 4, center: 314.5, start: 300, end: 329, note: "upper left" },
] as const;

/**
 * Data-bus contact angles from the FE lens rear figure [hv-6], camera-front frame. The figure is a
 * perspective drawing; the angles are rectified against the rear-element ring and are good to about
 * 15 deg only.
 */
const DATABUS_ANGLES = [97, 104, 111, 118] as const;

const databusContacts: ContactFeature[] = (["body", "lens"] as const).flatMap((side) =>
  DATABUS_ANGLES.map((angle, index) => ({
    side,
    contactNo: index + 1,
    profileId: DATABUS,
    centerAngleDeg: v(angle, "photo_scaled", FE),
    centerRadiusMm: v(33.3, "photo_scaled", FE),
    widthMm: unknownV(FE),
    heightMm: unknownV(FE),
    shape: "pin",
    protrusionMm: unknownV(FE),
    function: "data-bus line (signal assignment not published)",
  })),
);

const HASSELBLAD_V_MOUNT = {
  mountId: "hasselblad-v",
  displayLabel: "Hasselblad V",
  projectNote: "Hasselblad V-system medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: [
        "bayonet_lugs",
        "index_mark",
        "rotation_stop_pin",
        "lens_release_button",
        "lens_drive_shaft_coupling",
      ],
      variantRequired: ["databus_contacts"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lens_lug_arcs", "lens_catch_engagement_point", "databus_contact_positions"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: BASE,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo:
            "Hasselblad 500-series, 2000-series and 200-series bodies with C, CF, CB, CFi, F and other V lenses, 1957 onward; not the 1600F / 1000F mount",
          adds: [
            "four body retaining flanges",
            "mounting index at 12 o'clock",
            "rotation stop pin",
            "lens release button",
            "body drive shaft key and lens drive coupling",
          ],
          removes: ["electrical contacts"],
          changes: [
            "F lenses have no leaf shutter but keep the same bayonet and drive coupling, so they need no profile of their own",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["hv-1", "hv-2", "hv-3", "hv-4", "hv-5", "hv-p2", "hv-p3"],
        },
        {
          profileId: DATABUS,
          profileType: "variant",
          appliesTo:
            "FE lenses on 200-series bodies such as the 203FE; CFE lenses carry the same data-bus connections for the 200 series",
          adds: ["four data-bus contact pins in the lens bayonet plate and matching body contacts"],
          removes: [],
          changes: ["the lens reports its aperture setting to the body metering system"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "partial",
          sourceRefs: ["hv-6", "hv-7"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(74.9, "secondary", ["hv-1", "hv-2"]),
    nominalThroatDiameterMm: v(69, "secondary", FDT),
    effectiveClearApertureMm: v(69, "secondary", FDT),
    cameraMountOuterDiameterMm: v(75.5, "photo_scaled", OM),
    lensMountOuterDiameterMm: v(74.4, "photo_scaled", OM_SM),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", ["hv-4", "hv-5"]),
    lockAngleDeg: v(72, "official", C500),
    lockRotationDeg: v(72, "official", C500),
    lockRotationDirection: dirV("clockwise", "official", ["hv-4", "hv-5"]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", FDT),
      startAngleDeg: v(0, "secondary", FDT),
      endAngleDeg: v(360, "secondary", FDT),
      innerRadiusMm: v(0, "secondary", FDT),
      outerRadiusMm: v(34.5, "secondary", FDT),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "69 mm circle through the tips of the four retaining flanges; the dimensioned front view scales to 68.7 mm",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", OM),
      startAngleDeg: v(0, "photo_scaled", OM),
      endAngleDeg: v(360, "photo_scaled", OM),
      innerRadiusMm: v(34.5, "secondary", FDT),
      outerRadiusMm: v(37.8, "photo_scaled", OM),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "front-plate ring around the bayonet opening; outer line scaled from the front view against its 46 mm axis-to-base dimension. The outermost ring line of service manual Fig. 29 scales to 37.3 mm",
    },
    ...SLOTS.map((slot) => ({
      featureId: `body-slot-${slot.n}`,
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(slot.center, "photo_scaled", OM),
      startAngleDeg: v(slot.start, "photo_scaled", OM),
      endAngleDeg: v(slot.end, "photo_scaled", OM),
      innerRadiusMm: v(34.5, "secondary", FDT),
      outerRadiusMm: v(36.3, "photo_scaled", OM),
      depthMm: unknownV(SM),
      matesWith: `lens-lug-${slot.n}`,
      shapeNotes: `body retaining flange (${slot.note}; part 103439, two screws each), the solid part that holds a lens lug; edges read from the dimensioned front view. The four flanges sit at ${FLANGE_ARCS}, with open gaps between them through which the lugs enter. Service manual Fig. 29 draws the two lower flanges as 27.8 deg arcs centred at 135.3 and 225.3 deg`,
    })),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", OM),
      startAngleDeg: v(0, "photo_scaled", OM),
      endAngleDeg: v(0, "photo_scaled", OM),
      innerRadiusMm: v(33.6, "photo_scaled", OM),
      outerRadiusMm: v(33.6, "photo_scaled", OM),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot on the inner land at the top of the mount; the lens red dot is set opposite it to insert the lens",
    },
    {
      featureId: "body-stop-pin",
      featureType: "alignment_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(153, "photo_scaled", SM),
      startAngleDeg: v(153, "photo_scaled", SM),
      endAngleDeg: v(153, "photo_scaled", SM),
      innerRadiusMm: v(34.8, "photo_scaled", SM),
      outerRadiusMm: v(34.8, "photo_scaled", SM),
      depthMm: unknownV(SM),
      matesWith: "lens-lug-2",
      shapeNotes:
        "small pin at the clockwise end of the lower-right flange (121 to 151 deg) in service manual Fig. 29 (152.7 deg, about 1.1 mm diameter as drawn). Read as stop pin 836107 from the exploded-view leader; the text does not name the pin in this figure. It stops the lug that entered through opening 2",
    },
    {
      featureId: "body-release-button",
      featureType: "lens_release_button",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(135, "photo_scaled", OM),
      startAngleDeg: unknownV(OM),
      endAngleDeg: unknownV(OM),
      innerRadiusMm: unknownV(OM),
      outerRadiusMm: v(47, "photo_scaled", OM),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "lens release (lens catch) button on the front plate at the lower right, outside the flange at 121 to 151 deg; it works lens catch lever 103440 behind the front plate. Service manual Fig. 29 puts it at 133.7 deg and 47.5 mm. Where the catch meets the lens is not shown in any source used",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", OM_SM),
      startAngleDeg: v(0, "photo_scaled", OM_SM),
      endAngleDeg: v(360, "photo_scaled", OM_SM),
      innerRadiusMm: v(0, "photo_scaled", OM_SM),
      outerRadiusMm: v(34.3, "photo_scaled", OM_SM),
      thicknessMm: naV(),
      matesWith: "body-throat",
      shapeNotes:
        "cylinder of the lens bayonet plate that enters the body throat, from the lens rear drawing on p. 6 of the 503cx manual; the rear-element opening differs from lens to lens and is not drawn",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", OM_SM),
      startAngleDeg: v(0, "photo_scaled", OM_SM),
      endAngleDeg: v(360, "photo_scaled", OM_SM),
      innerRadiusMm: v(34.3, "photo_scaled", OM_SM),
      outerRadiusMm: v(37.2, "photo_scaled", OM_SM),
      thicknessMm: naV(),
      matesWith: "body-mount-ring",
      shapeNotes:
        "lens seating flange. The drawing has no scale of its own: radii are scaled so that the lens drive coupling sits at the 26.4 mm radius of the body key it mates with",
    },
    ...SLOTS.map((slot) => ({
      featureId: `lens-lug-${slot.n}`,
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(slot.center, "photo_scaled", OM),
      startAngleDeg: v(slot.start, "photo_scaled", OM),
      endAngleDeg: v(slot.end, "photo_scaled", OM),
      innerRadiusMm: v(34.3, "photo_scaled", OM_SM),
      outerRadiusMm: v(36.1, "photo_scaled", OM_SM),
      thicknessMm: unknownV(OM),
      matesWith: `body-slot-${slot.n}`,
      shapeNotes:
        "lens bayonet lug drawn where it sits on a mounted lens, behind the body flange of the same number. The arc drawn is that flange, the engaged part; the lug's own length is not sourced",
    })),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", OM),
      startAngleDeg: unknownV(OM),
      endAngleDeg: unknownV(OM),
      innerRadiusMm: unknownV(OM),
      outerRadiusMm: unknownV(OM),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red index on the lens bayonet plate, stored at the body index it faces when the lens is inserted; its radius is not scaled",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(75.5, "photo_scaled", OM),
    },
    {
      planeId: "body_rear_plate",
      zPositionMm: v(-71.4, "service_manual", SM),
      thicknessMm: v(0, "service_manual", SM),
      diameterMm: unknownV(SM),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-74.9, "secondary", ["hv-1", "hv-2"]),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(79.2, "secondary", W),
    },
  ],

  contacts: databusContacts,

  mechanicalCouplings: [
    {
      featureId: "lens-drive-shaft",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(180, "photo_scaled", SM),
      radiusMm: v(26.4, "photo_scaled", SM),
      sizeOrTravel:
        "chisel key on the body shaft (head about 6.5 mm across as drawn) in a slotted disc on the lens. Factory key-angle gauge: cocked 8 to 9 deg, pre-released 118 deg (113 to 122), B position 268 to 273 deg, fully released 311 deg (306.5 to 321)",
      function:
        "winding turns the key to cock the lens shutter and open it for viewing; on release the key turns back to close the shutter, stop the lens down and fire it",
      compatibilityNotes:
        "at the bottom centre of the mount, 180.1 deg in service manual Fig. 29. US2992602 describes the objective key and slotted disc, US3715965 the same shaft driving the diaphragm of a lens with no shutter; neither gives its position. The dimensioned front view scales the key to 27.4 mm radius",
    },
    {
      featureId: "drive-shaft-index-dot",
      side: "body",
      profileId: BASE,
      centerAngleDeg: v(169, "photo_scaled", SM),
      radiusMm: v(26.4, "photo_scaled", SM),
      sizeOrTravel: "red dot about 1.2 mm across as drawn",
      function: "the key slot points at this dot when the body is cocked",
      compatibilityNotes:
        "168.8 deg in service manual Fig. 29, beside the key; the lens carries its own dot beside the coupling slot",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-flange-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(8, "service_manual", SM),
      pcdMm: v(81.3, "photo_scaled", SM),
      diameterMm: v(3.3, "photo_scaled", SM),
      centerAnglesDeg: degListV([124.6, 145.4, 215, 235.7], "photo_scaled", SM),
      shape:
        "round slotted heads, two per flange (screw 820425); only the four on the lower flanges are placed, because Fig. 29 shows the lower half of the mount",
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
      ref: "hv-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "74.9 mm Hasselblad V-mount register",
      confidence: "medium",
    },
    {
      ref: "hv-2",
      sourceType: "secondary",
      citation: "Film and Digital Times / IB/E Optics mount chart. Accessed 2026-06-06.",
      liveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveDate: "2026-06-06",
      appliesTo: "Hasselblad 500/200 V-system 74.9 mm FFD and 69 mm inside diameter chart entry",
      confidence: "medium",
    },
    {
      ref: "hv-3",
      sourceType: "service_manual",
      citation:
        "Victor Hasselblad AB, Service Manual, Camera body 503CW (with 501C, 503CXi, 503CX, 500C/M and 501CM sections), October 1996, revised to January 2001: p. 4:6 (PDF p. 18); p. 5:1 Fig. 29 (PDF p. 19); pp. 5:2 and 5:3 (PDF pp. 20 and 21); p. 6:1 Figs. 55 and 56 (PDF p. 32); section 11 exploded view and parts list (PDF pp. 44 and 45). Accessed 2026-11-21.",
      liveUrl: "https://dirapon.be/images/Brico/Hasselblad/500-503.PDF",
      archiveUrl: "https://www.scribd.com/document/496560651/Hasselblad-500-503-Sm-En",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text or parts list: four bayonet tongues (flange 103439, qty 4) held by eight screws, one lens catch 103440, one stop pin 836107, body length 71.40 mm from front bayonet to rear plate, key-angle gauge readings, and that 503CX and 500C/M parts not listed are the same. Scaled from Fig. 29, a camera-front view of the lower half of the mount drawn in vector form (angles used as read; lengths scaled so the 97.7 pt flange-tip arc is the 34.5 mm throat radius): drive key, its red dot, the pin at the clockwise end of the lower-right flange, the four lower flange screws",
      confidence: "medium",
    },
    {
      ref: "hv-4",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, Hasselblad 503cx / 500C/M Instruction Manual: p. 6 (drive shaft and lens drive coupling illustration), p. 7 (attaching and removing the lens), p. 32 (Camera Body Dimensions). Accessed 2026-11-21.",
      liveUrl: "https://www.pacificrimcamera.com/rl/01786/01786.pdf",
      archiveUrl: "https://www.cameramanuals.org/hasselblad/hasselblad_503cx.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: red index on the lens set opposite the one on the camera, lens turned clockwise until the catch locks, counter-clockwise to remove. Scaled from the p. 32 front view, a camera-front orthographic drawing dimensioned 46 mm from lens axis to base (144 px in the 300 dpi scan, so about 0.32 mm per px and 0.5 deg per px at the mount; angles used as read): the edges of the four flanges, which bound the receiving slots, flange root and ring radii, index dot, release button. Scaled from the p. 6 lens drawing, a lens-rear view drawn with the coupling uppermost (angles converted as 180 deg minus the clockwise offset from the coupling): bayonet-plate cylinder, lug and seating-flange radii",
      confidence: "medium",
    },
    {
      ref: "hv-5",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, Hasselblad 500C Instructions for Use, “Changing lenses” and “Shutter setting”: p. 21 with Figs. 20 and 21 in the later printing, p. 15 with Figs. 16 and 17 in the earlier printing. Accessed 2026-11-21.",
      liveUrl: "https://www.pacificrimcamera.com/rl/02660/02660.pdf",
      archiveUrl: "https://www.cameramanuals.org/hasselblad/hasselblad_500c.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text in both printings: four retaining lugs with only one starting point, removal by 1/5 of a revolution counter-clockwise, red dots set opposite each other, mount turned clockwise until the lens catch clicks; the figures show the cocking shaft and its red index at the bottom of the mount, seen from the camera front, and the lens catch button at the lower right. No value is scaled from these photos",
      confidence: "high",
    },
    {
      ref: "hv-6",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, Hasselblad 203FE Instruction Manual: p. 5 (Parts and Components, items 62 to 65), p. 30 (FE Lenses), p. 79 (troubleshooting) and the Lens Mount line of the specifications. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/hasselblad/hasselblad_203_fe/hasselblad_203_fe.htm",
      archiveUrl: "https://www.cameramanuals.org/hasselblad/hasselblad_203fe.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: four data-bus contact pins in the bayonet plate at the rear of FE lenses, four contact surfaces on lens and body, bayonet mount for FE, F, CF and C lenses with contacts for the FE lenses. Scaled from the p. 30 figure, a perspective lens-rear drawing (rectified against the rear-element ring, then converted as 180 deg minus the clockwise offset from the drive shaft): contact angles and pitch radius, good to about 15 deg",
      confidence: "low",
    },
    {
      ref: "hv-7",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, Hasselblad CFi, CFE Lenses Instruction Manual: parts list item 8 and the closing description. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/hasselblad/hasselblad_cfi_cfe_lenses/hasselblad_cfi_cfe_lenses.htm",
      archiveUrl: "https://www.cameramanuals.org/hasselblad/hasselblad_cfi_cfe_lenses.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "stated in text: the lens bayonet plate carries the red index, and CFE lenses add data-bus connections that pass lens data to the metering system of 200-series cameras; no position or dimension is given",
      confidence: "high",
    },
    {
      ref: "hv-p1",
      sourceType: "patent",
      citation:
        "A. P. Svensson, assignor to F. V. Hasselblad, US2526433A, “Mount for camera lenses” (Swedish priority 1944). Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US2526433A/en",
      archiveUrl: "https://patents.google.com/patent/US2526433A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "two-position sliding focusing mount of the 1600F era; it describes no part of the 500-series bayonet, states no dimension or angle, and no value in this spec cites it",
      confidence: "low",
    },
    {
      ref: "hv-p2",
      sourceType: "patent",
      citation:
        "B. H. Hedén, assignor to F. V. Hasselblad, US2992602A, “Mirror reflex cameras” (Swedish priority 1957): col. 2, about lines 40 to 50, col. 3, about lines 35 to 47, and Figs. 6 to 12. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US2992602A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/dc/6c/c2/acd86cc4baf922/US2992602.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "the lens shutter coupling of the 500C: objective key 7 on body shaft 22 and slotted disc 102 on the lens, and how the key turns to cock, close and fire the shutter. Figs. 7 to 9 draw the disc at the bottom of the lens without stating the view; no dimension or angle is given",
      confidence: "high",
    },
    {
      ref: "hv-p3",
      sourceType: "patent",
      citation:
        "A. I. Alfredsson, assignor to F. V. Hasselblad, US3715965A, “Preset diaphragm for interchangeable lenses of single-lens mirror reflex cameras” (Swedish priority 1970). Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US3715965A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/6c/96/ea/4aa2458019574d/US3715965.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "the same body shaft, a chisel-shaped pin at the edge of the lens mount turning about 270 deg on release and about 45 deg more after exposure, also drives the preset diaphragm of a lens that has no shutter; no dimension or position is given",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "The flange edges, the ring radii, index dot and release button are scaled from a small dimensioned drawing in the owner manual (about 0.5 deg and 0.3 mm per pixel; the four stated dimensions on that page give scales that differ by up to 1.5 percent). The flange centres read 47, 136, 226 and 314.5 deg, which may be a nominal 45, 135, 225 and 315. Flange thickness is not given anywhere.",
      affectedFields: ["cameraSideFeatures", "coreDimensions.cameraMountOuterDiameterMm", "axialStack"],
      candidateValues: [
        "lower-right flange arc 121.4 to 149.2 deg (service manual Fig. 29)",
        "ring diameter 74.6 mm (Fig. 29)",
      ],
      resolution:
        "Replace with a dimensioned Hasselblad front-plate drawing (front bayonet plate 40403) or a measured body.",
    },
    {
      issue:
        "The lens lugs are drawn as the arc engaged behind each body flange; their own length is not sourced. The one lens drawing used (503cx manual p. 6) shows a 36 deg opening in the lens flange from 149 to 185 deg in the mounted position, between long lug arcs; read that way the lens could turn only about 28 to 34 deg, not the 72 deg the 500C manual states. The lug count, lengths and the reason for the single starting point are therefore unresolved.",
      affectedFields: ["lensSideFeatures", "lockGeometry.lockRotationDeg", "lockGeometry.lockAngleDeg"],
      candidateValues: [
        72,
        "28 to 34 (inferred from the lens drawing)",
        "about 51 (index triangle in the 203FE lens figure)",
      ],
      resolution:
        "Measure a V lens rear or find a Carl Zeiss C / CF lens service drawing of the bayonet plate (the CB / CFE / CFi lens service manual was not reachable).",
    },
    {
      issue:
        "The point where lens catch lever 103440 engages the lens is not shown in the sources used, so no lock pin or lock notch is drawn; only the release button and the stop pin are placed. The stop pin is identified from the exploded-view leader, not from text.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution:
        "Read the lens catch position from a front-plate drawing or a photo taken square to the mount with the lens removed.",
    },
    {
      issue:
        "Drive key and stop pin radii rest on service manual Fig. 29 scaled to the 69 mm throat; the owner-manual front view scales the key to 27.4 mm instead of 26.4 mm. The four upper flange screws are not placed. The lens-side radii are scaled through that same key radius.",
      affectedFields: [
        "mechanicalCouplings",
        "screwsGasketsBaffles",
        "lensSideFeatures",
        "coreDimensions.lensMountOuterDiameterMm",
      ],
      candidateValues: [26.4, 27.4],
      resolution: "Upgrade from a dimensioned front gear / front plate drawing or a measured body and lens.",
    },
    {
      issue:
        "Data-bus variant: the count of four is stated by Hasselblad, but the contact angles and pitch radius come from one perspective figure and are good to about 15 deg; contact size, protrusion and signal assignment are unknown, and no body-side view of the contacts was found.",
      affectedFields: ["contacts"],
      candidateValues: [],
      resolution:
        "Read the contact positions from the 203FE / 205 service manual front-plate pages or a measured FE lens and 200-series body.",
    },
    {
      issue:
        "The 74.9 mm register is still a secondary value. The factory gauges give 71.40 mm from the front bayonet to the body rear plate; the film magazine manual's 3.55 mm picture-frame distance would make 74.95 mm, but that manual has no second copy to cite.",
      affectedFields: ["coreDimensions.flangeFocalDistanceMm", "axialStack"],
      candidateValues: [74.9, 74.95],
      resolution: "Cite a Hasselblad or Carl Zeiss statement of the flange focal distance.",
    },
  ],
} satisfies MountSpecInput;

export default HASSELBLAD_V_MOUNT;
