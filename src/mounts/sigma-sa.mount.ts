/**
 * Sigma SA mount SVG specification.
 *
 * Sigma's all-electronic autofocus SLR bayonet (SA-300, 1992, through the sd Quattro H, 2018). The base
 * profile holds what every SA body and lens shares: the three-lug inner bayonet (SA-IB), the axial lock
 * pin and groove, the 12 o'clock index, and the seven-contact bank in a 5 + 2 grouping. Two variants
 * overlay the generations: `sigma-sa/sa-ib-ob` for the dual-bayonet bodies (SA-300 to SD10), which add
 * an outer bayonet (SA-OB) on the mount ring and two extra body pins, and `sigma-sa/sa-ib` for the
 * inner-bayonet-only bodies (SD14 onward) and the late lenses that carry extra pads. The MVP figure
 * renders `sigma-sa/sa-ib`.
 *
 * Sourced values: 44.00 mm register [ssa-1, ssa-2]; lens bayonet barrel radius 22.2 mm, lug outer
 * radius 23.6 mm, lug faces 3.05 mm and 4.6 mm behind the flange, and a 25.2 mm locating spigot 0.89 mm
 * high, all from Westin's measured Pentax K / Sigma SA section (stated accuracy ±0.3 mm) [ssa-5];
 * clockwise attachment and the SA-IB / SA-OB naming from Sigma's manuals [ssa-6, ssa-7]. Lug, lock,
 * index and contact angles are scaled from JAPB's rear photographs of two SA lenses, with Westin's
 * 22.2 mm barrel radius as the scale [ssa-2, ssa-4, ssa-5], and checked against JAPB's SA-300 body
 * photograph [ssa-3] and a Commons sd Quattro photograph [ssa-8]. There is no mechanical aperture or
 * metering coupling [ssa-2, ssa-5].
 *
 * Angle convention: both rear photographs show the lens in its locked orientation (the pads line up
 * with the body pins), and the lens is drawn that way: lugs, lock notch and contacts sit where the
 * photographs put them. `body-slot-n` is the body claw that retains lug n, drawn over that lug because the
 * body claw edges were not scaled separately. Only the lens index is drawn at the body index (they line up
 * for insertion, 60° anticlockwise of the locked dot). The rotation lives only in `lockGeometry`.
 *
 * JP H04-242732 A (Sigma, filed 1990) describes a three-claw mount with an axial spring-loaded lock pin
 * in the camera mount face and a tapered groove in the lens mount face [ssa-p1]. It states no angles or
 * dimensions and does not name the SA mount, so no value carries `patent` status.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeMountScrews } from "./mountAuthoringShared.js";

const BASE = "sigma-sa/base" as const;
const DUAL = "sigma-sa/sa-ib-ob" as const;
const INNER = "sigma-sa/sa-ib" as const;

const W = ["ssa-1"]; // Wikipedia register table
const WJ = ["ssa-1", "ssa-2"];
const J = ["ssa-2"]; // JAPB page and annotated 18-50 mm lens rear photo
const JB = ["ssa-3"]; // JAPB SA-300 body photo
const JS = ["ssa-2", "ssa-5"]; // JAPB lens rear photo scaled by Westin's 22.2 mm barrel radius
const JBS = ["ssa-3", "ssa-5"]; // JAPB SA-300 body photo, same scale reference
const JLS = ["ssa-4", "ssa-5"]; // JAPB 30 mm lens rear photo, same scale reference
const WS = ["ssa-5"]; // Westin measured section
const MANUALS = ["ssa-6", "ssa-7"]; // Sigma SD9 and SD14 user manuals
const PHOTOS = ["ssa-3", "ssa-8"]; // body photographs: SA-300 and sd Quattro

/**
 * Lens lugs on a mounted, locked lens, clockwise from 12 o'clock, as photographed (camera-front frame).
 * The lens enters 60° anticlockwise of this.
 */
const LUGS = [
  { n: 1, center: 26.5, start: 3, end: 50 },
  { n: 2, center: 157.5, start: 132, end: 183 },
  { n: 3, center: 263.5, start: 241, end: 286 },
] as const;

const LUG_NOTES =
  "angles scaled from the bayonet outline on JAPB's 18-50 mm lens rear photo (lens-rear view of a locked lens; converted with theta_front = 360 - theta_rear); radii and axial thickness from Westin's measured section (±0.3 mm)";

/** Contact angles as photographed on the lens, which match the SA-300 body pins to within about 1°. */
const SHARED_CONTACT_ANGLES = [159.6, 165.4, 171.1, 176.9, 182.6, 194.4, 202.9];
/** Extra pads on the pictured 30 mm F1.4, continuing the five-pad group at the same pitch. */
const LATE_LENS_PAD_ANGLES = [153.5, 147.6, 141.7];

function bodyPin(
  contactNo: number,
  profileId: typeof BASE | typeof DUAL,
  angle: number,
  radius: number,
): ContactFeature {
  const refs = profileId === BASE ? JS : JBS;
  return {
    side: "body",
    contactNo,
    profileId,
    centerAngleDeg: v(angle, "photo_scaled", refs),
    centerRadiusMm: v(radius, "photo_scaled", refs),
    widthMm: unknownV(JB),
    heightMm: unknownV(JB),
    shape: "pin",
    protrusionMm: unknownV(JB),
    function: "",
  };
}

function lensPad(
  contactNo: number,
  profileId: typeof BASE | typeof INNER,
  angle: number,
  radius: number,
): ContactFeature {
  const refs = profileId === BASE ? JS : JLS;
  return {
    side: "lens",
    contactNo,
    profileId,
    centerAngleDeg: v(angle, "photo_scaled", refs),
    centerRadiusMm: v(radius, "photo_scaled", refs),
    widthMm: v(1.4, "photo_scaled", JS),
    heightMm: v(2.4, "photo_scaled", JS),
    shape: "pad",
    protrusionMm: unknownV(J),
    function: "",
  };
}

const SIGMA_SA_MOUNT = {
  mountId: "sigma-sa",
  displayLabel: "Sigma SA",
  projectNote: "Sigma SA autofocus SLR/DSLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
      variantRequired: ["outer_bayonet", "extra_body_contacts", "late_lens_contacts"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["exact_lug_geometry", "contact_pinout", "outer_bayonet_dimensions"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: INNER,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "all Sigma SA bodies and lenses, 1992-2018",
          adds: [
            "three-lug inner bayonet (SA-IB)",
            "axial lock pin and lock groove",
            "12 o'clock mounting index",
            "seven electrical contacts in a 5 + 2 grouping",
          ],
          removes: ["mechanical aperture and metering couplings (the mount is all-electronic)"],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "partial",
          sourceRefs: ["ssa-1", "ssa-2", "ssa-3", "ssa-5", "ssa-6", "ssa-7", "ssa-8", "ssa-p1"],
        },
        {
          profileId: DUAL,
          profileType: "variant",
          appliesTo:
            "dual-bayonet bodies, 1992-2006: SA-300 through SD10 (the SD9 and SD10 manuals name both SA-IB and SA-OB)",
          adds: [
            "outer bayonet (SA-OB) on the body mount ring periphery, never used by a Sigma lens",
            "two extra body contact pins with no lens counterpart",
          ],
          removes: [],
          changes: ["outer bayonet geometry is not dimensioned by any source found"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: ["ssa-2", "ssa-3", "ssa-6"],
        },
        {
          profileId: INNER,
          profileType: "variant",
          appliesTo: "inner-bayonet-only bodies, 2007-2018 (SD14 through sd Quattro H), and late SA lenses",
          adds: ["extra pads on late lenses, extending the five-pad group; no body pin meets them"],
          removes: ["outer bayonet (SA-OB)", "the two extra body contact pins"],
          changes: [],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "partial",
          sourceRefs: ["ssa-2", "ssa-4", "ssa-7", "ssa-8"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(44, "secondary", WJ),
    nominalThroatDiameterMm: v(44.4, "secondary", WS),
    effectiveClearApertureMm: v(44.4, "secondary", WS),
    cameraMountOuterDiameterMm: v(61, "photo_scaled", JBS),
    lensMountOuterDiameterMm: v(62, "photo_scaled", JS),
    contactCount: v(7, "secondary", J),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", PHOTOS),
    lockAngleDeg: v(60, "photo_scaled", J),
    lockRotationDeg: v(60, "photo_scaled", J),
    lockRotationDirection: dirV("clockwise", "official", MANUALS),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", WS),
      startAngleDeg: v(0, "secondary", WS),
      endAngleDeg: v(360, "secondary", WS),
      innerRadiusMm: v(0, "secondary", WS),
      outerRadiusMm: v(22.2, "secondary", WS),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "opening between the body claws, taken as Westin's measured lens bayonet barrel radius (22.2 mm, ±0.3 mm); the body bore was not measured separately",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", JBS),
      startAngleDeg: v(0, "photo_scaled", JBS),
      endAngleDeg: v(360, "photo_scaled", JBS),
      innerRadiusMm: v(22.2, "secondary", WS),
      outerRadiusMm: v(30.5, "photo_scaled", JBS),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "body mount ring; outer radius scaled from JAPB's oblique SA-300 photo (camera-front view) with the lock pin radius as the scale, good to about ±1 mm",
    },
    ...LUGS.map((lug) => ({
      featureId: `body-slot-${lug.n}`,
      featureType: "bayonet_receiving_slot",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(lug.center, "photo_scaled", J),
      startAngleDeg: v(lug.start, "photo_scaled", J),
      endAngleDeg: v(lug.end, "photo_scaled", J),
      innerRadiusMm: v(22.2, "secondary", WS),
      outerRadiusMm: v(23.6, "secondary", WS),
      depthMm: v(1.55, "secondary", WS),
      matesWith: `lens-lug-${lug.n}`,
      shapeNotes: `body claw that retains lens lug ${lug.n}, drawn over that lug's locked position; ${LUG_NOTES}; the body claw edges were not scaled separately`,
    })),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", PHOTOS),
      startAngleDeg: unknownV(PHOTOS),
      endAngleDeg: unknownV(PHOTOS),
      innerRadiusMm: unknownV(PHOTOS),
      outerRadiusMm: v(30.5, "photo_scaled", JBS),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot on the mount ring face at 12 o'clock on the SA-300 and the sd Quattro; drawn at the ring edge, its own radius is not scaled",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(252, "photo_scaled", JS),
      startAngleDeg: unknownV(JS),
      endAngleDeg: unknownV(JS),
      innerRadiusMm: unknownV(JS),
      outerRadiusMm: v(26.5, "photo_scaled", JS),
      depthMm: unknownV(JS),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "axial spring-loaded pin in the mount ring face, lower left seen from the camera front; angle and radius are those of the lens lock groove on JAPB's lens rear photo (JAPB text: groove at roughly 03:45 in the lens-rear view), and the pin sits at 250-255° on JAPB's SA-300 photo and beside the same screw on the sd Quattro photo. JP H04-242732 A describes the pin-and-tapered-groove lock without angles",
    },
    {
      featureId: "body-outer-bayonet",
      featureType: "outer_bayonet_lug",
      profileId: DUAL,
      count: 1,
      centerAngleDeg: unknownV(JB),
      startAngleDeg: unknownV(JB),
      endAngleDeg: unknownV(JB),
      innerRadiusMm: unknownV(JB),
      outerRadiusMm: unknownV(JB),
      depthMm: unknownV(JB),
      matesWith: "",
      shapeNotes:
        "outer bayonet (SA-OB) relief on the ring periphery of the dual-bayonet bodies; visible on JAPB's SA-300 photo but too oblique to scale, so count, angles and radii are unknown placeholders",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", WS),
      startAngleDeg: v(0, "photo_scaled", WS),
      endAngleDeg: v(360, "photo_scaled", WS),
      innerRadiusMm: v(0, "photo_scaled", WS),
      outerRadiusMm: v(20.7, "photo_scaled", WS),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear opening inside the bayonet barrel; scaled from the bore drawn in Westin's section (2.835 drawing units per mm), which he does not label with a dimension",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", JS),
      startAngleDeg: v(0, "photo_scaled", JS),
      endAngleDeg: v(360, "photo_scaled", JS),
      innerRadiusMm: v(20.7, "photo_scaled", WS),
      outerRadiusMm: v(31, "photo_scaled", JS),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "metal lens flange plate; outer radius scaled from JAPB's rear photos of the 18-50 mm (30.8 mm) and 30 mm F1.4 (31.2 mm). Westin measures a 25.2 mm radius locating spigot standing 0.89 mm proud of the flange face",
    },
    ...LUGS.map((lug) => ({
      featureId: `lens-lug-${lug.n}`,
      featureType: "bayonet_lug",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(lug.center, "photo_scaled", J),
      startAngleDeg: v(lug.start, "photo_scaled", J),
      endAngleDeg: v(lug.end, "photo_scaled", J),
      innerRadiusMm: v(22.2, "secondary", WS),
      outerRadiusMm: v(23.6, "secondary", WS),
      thicknessMm: v(1.55, "secondary", WS),
      matesWith: `body-slot-${lug.n}`,
      shapeNotes: `${LUG_NOTES}; JAPB notes three tapered and three straight lug edges`,
    })),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", J),
      startAngleDeg: unknownV(J),
      endAngleDeg: unknownV(J),
      innerRadiusMm: unknownV(J),
      outerRadiusMm: v(26.6, "photo_scaled", JS),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red dot on the rear flange face, stored aligned with the body index; on JAPB's lens rear photo of a locked lens it sits 60° clockwise of that position in the camera-front frame",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(252, "photo_scaled", JS),
      startAngleDeg: unknownV(JS),
      endAngleDeg: unknownV(JS),
      innerRadiusMm: unknownV(JS),
      outerRadiusMm: v(26.5, "photo_scaled", JS),
      thicknessMm: unknownV(JS),
      matesWith: "body-lock-pin",
      shapeNotes:
        "lock groove in the rear flange face, at 107.6° in the lens-rear view of JAPB's 18-50 mm photo (252.4° camera-front); stored at the body lock pin it receives when locked",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(61, "photo_scaled", JBS),
    },
    {
      planeId: "lens_locating_spigot",
      zPositionMm: v(-0.89, "secondary", WS),
      thicknessMm: v(0.89, "secondary", WS),
      diameterMm: v(50.4, "secondary", WS),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(-3.05, "secondary", WS),
      thicknessMm: v(1.55, "secondary", WS),
      diameterMm: v(47.2, "secondary", WS),
    },
    {
      planeId: "electrical_contact_plane",
      zPositionMm: unknownV(J),
      thicknessMm: unknownV(J),
      diameterMm: v(40.4, "photo_scaled", JS),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-44, "secondary", WJ),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(43.3, "secondary", W),
    },
  ],

  contacts: [
    ...SHARED_CONTACT_ANGLES.map((angle, index) => bodyPin(index + 1, BASE, angle, 20.2)),
    bodyPin(8, DUAL, 211.2, 20.5),
    bodyPin(9, DUAL, 215.6, 18.1),
    ...SHARED_CONTACT_ANGLES.map((angle, index) => lensPad(index + 1, BASE, angle, 20.2)),
    ...LATE_LENS_PAD_ANGLES.map((angle, index) => lensPad(index + 8, INNER, angle, 20.1)),
  ],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [makeMountScrews(JB, 4, 56, 2, [53, 129, 224, 311])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
  },

  sourceRefs: [
    {
      ref: "ssa-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "44 mm Sigma SA register",
      confidence: "medium",
    },
    {
      ref: "ssa-2",
      sourceType: "secondary",
      citation:
        "P. Buttler, “Lens Mounts: Sigma SA mount,” JAPB (japb.net), updated May 2025, with the annotated rear photograph of a Sigma 18-50mm 1:3.5-5.6 DC. Accessed 2026-11-21.",
      liveUrl: "https://japb.net/theory/lensmounts/sigma-sa/",
      archiveUrl: "https://japb.net/wp-content/uploads/2025/05/ID-Sigma-SA.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "44.00 mm register; three-pronged bayonet; lock groove at roughly 03:45; 5 + 2 contact grouping; no mechanical communication; outer bayonet dropped with the SD14. The photograph is a lens-rear view of a lens in its locked orientation: lug, lock groove, index dot and pad angles are scaled from it and converted with theta_front = (360 - theta_rear) mod 360",
      confidence: "medium",
    },
    {
      ref: "ssa-3",
      sourceType: "secondary",
      citation:
        "P. Buttler, photograph of a Sigma SA-300 body mount, in “Lens Mounts: Sigma SA mount,” JAPB (japb.net), updated May 2025. Accessed 2026-11-21.",
      liveUrl: "https://japb.net/theory/lensmounts/sigma-sa/",
      archiveUrl: "https://japb.net/wp-content/uploads/2025/05/Sigma-sa-300-dual-mount.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view, oblique: index dot at 12 o'clock, lock pin at lower left, nine body pins (the shared 2 + 5 plus two extra), four ring screws, ring outer radius and the outer bayonet relief of a dual-bayonet body",
      confidence: "low",
    },
    {
      ref: "ssa-4",
      sourceType: "secondary",
      citation:
        "P. Buttler, rear photograph of a Sigma 30 mm f/1.4 EX HSM, in “Lens Mounts: Sigma SA mount,” JAPB (japb.net), updated May 2025. Accessed 2026-11-21.",
      liveUrl: "https://japb.net/theory/lensmounts/sigma-sa/",
      archiveUrl: "https://japb.net/wp-content/uploads/2025/05/SA-30f1.4-1-s-l1600.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "lens-rear view of a locked late lens: ten pads (8 + 2), the extra three continuing the five-pad group; flange plate outer radius. Angles converted with theta_front = (360 - theta_rear) mod 360",
      confidence: "medium",
    },
    {
      ref: "ssa-5",
      sourceType: "secondary",
      citation:
        "S. H. Westin, “Comparison: Sigma SA mount vs. Pentax K,” dimensioned section drawing dated 28 May 2004, Cornell University Program of Computer Graphics. Accessed 2026-11-21.",
      liveUrl: "https://www.graphics.cornell.edu/~westin/misc/sigma-mount.html",
      archiveUrl: "https://www.graphics.cornell.edu/~westin/misc/pentax-sigma-compare.png",
      archiveDate: "2026-11-21",
      appliesTo:
        "axial half-section of the lens mount: labelled radii 17.3, 22.2 and 25.2 mm and depths 0.89, 3.05, 4.6 and 7 mm; lug outer radius 23.6 mm and bore 20.7 mm read from the drawing at its 2.835 units per mm scale. Notes state the dimensions come from measurements of actual lenses and bodies, believed accurate to ±0.3 mm, and that Sigma has no mechanical aperture coupling",
      confidence: "medium",
    },
    {
      ref: "ssa-6",
      sourceType: "official",
      citation: "Sigma Corporation, SD9 User's Manual (English), pp. 11 and 23-24. Accessed 2026-11-21.",
      liveUrl: "https://www.sigma-global.com/en/support/manual/",
      archiveUrl: "https://www.sigma-global.com/en/support/download/SD9Users_Manual_Engl.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 23: the SD9 uses the SA inside and outside bayonet mount (SA-IB and SA-OB); align the red marks and rotate the lens clockwise to lock, counter-clockwise to remove; p. 24: electrical contacts on the lens mount surface",
      confidence: "high",
    },
    {
      ref: "ssa-7",
      sourceType: "official",
      citation: "Sigma Corporation, SD14 User's Manual (English), pp. 11 and 24-25. Accessed 2026-11-21.",
      liveUrl: "https://www.sigma-global.com/en/support/manual/",
      archiveUrl: "https://www.sigma-global.com/en/support/download/SD14Users_Manual_en.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 24: align the red marks and rotate the lens clockwise to lock; p. 25: counter-clockwise to remove; no outer bayonet is named, unlike the SD9 and SD10 manuals",
      confidence: "high",
    },
    {
      ref: "ssa-8",
      sourceType: "field_photo",
      citation:
        "Morio, “Sigma sd Quattro front-left 2016 China P&E,” Wikimedia Commons, CC BY-SA 4.0, taken 2016-04-23. Accessed 2026-11-21.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Sigma_sd_Quattro_front-left_2016_China_P%26E.jpg",
      archiveUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Sigma_sd_Quattro_front-left_2016_China_P%26E.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view, oblique, of an inner-bayonet-only body: index dot at 12 o'clock, seven body pins (2 + 5), lock pin at lower left, five ring screws; arrangement only, nothing is scaled from it",
      confidence: "medium",
    },
    {
      ref: "ssa-p1",
      sourceType: "patent",
      citation:
        "M. Katayama (Sigma Corp.), “Mount lock device for camera,” JP H04-242732 A, filed 1990-12-28, published 1992-08-31 (granted as JP 3062957 B2). Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/JPH04242732A/en",
      archiveUrl: "https://www.j-platpat.inpit.go.jp/c1801/PU/JP-H04-242732/11/en",
      archiveDate: "2026-11-21",
      appliesTo:
        "paragraphs 0009-0011: three bayonet claws on each mount, a spring-loaded lock pin projecting axially from the camera mount face, a tapered lock groove in the lens mount face and a release button. Text only; no angles or dimensions, the SA mount is not named, and the stated left/right sides are opposite to the production photographs",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "Lug and slot angles are photo-scaled from the bayonet outline JAPB drew on one lens rear photograph (about ±3°; the leading edge of lug 1 is hidden under an annotation marker). Body claw edges were not scaled. No Sigma drawing, service manual or patent with lug angles was found.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: ["lug 1: 303-350", "lug 2: 72-123", "lug 3: 181-226"],
      resolution:
        "Replace with a Sigma service drawing or a calibrated measurement of a body and lens. Searched: Google Patents (Sigma Corp, bayonet/mount, 1988-1996), J-PlatPat, Espacenet, Sigma support manuals, JAPB, Westin's mount pages, Wikimedia Commons.",
    },
    {
      issue:
        "Lock pin position (252°, radius 26.5 mm), the 60° lock rotation and the index position are photo-scaled. JP H04-242732 A describes the lock but gives no angles, and its figures could not be viewed (J-PlatPat document display was under maintenance and Espacenet was behind a bot check on 2026-11-21).",
      affectedFields: ["lockGeometry", "cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [60],
      resolution: "Confirm against a dimensioned drawing or measured sample; view the patent figures 2 and 3.",
    },
    {
      issue:
        "Contact pitch (about 5.8° in the five-group, 8.5° in the pair), radius (about 20.2 mm) and pad size are photo-scaled; the pinout is unknown. JAPB's text gives late lenses a 7 + 2 grouping but its 30 mm F1.4 photograph shows 8 + 2, so the late-lens pad count is unsettled. The two extra SA-300 body pins are placed from one oblique photograph.",
      affectedFields: ["contacts", "coreDimensions.contactCount", "axialStack"],
      candidateValues: ["7 shared", "9 body pins on SA-300", "9 or 10 pads on late lenses"],
      resolution: "Measure a body and an early and a late lens; document the signal on each contact.",
    },
    {
      issue:
        "The outer bayonet (SA-OB) of the SA-300 to SD10 bodies has no dimensioned source. JAPB's SA-300 photograph shows relief around the ring periphery near 45-130°, 205-245° and 295-325°, but the view is too oblique to store as geometry.",
      affectedFields: ["cameraSideFeatures"],
      candidateValues: [],
      resolution: "Measure a dual-bayonet body or find a Sigma drawing of the SA-OB flange.",
    },
    {
      issue:
        "The throat is entered as Westin's measured lens bayonet barrel diameter (44.4 mm, ±0.3 mm); 44 mm is the commonly listed figure but no source found here states it, and the body bore was not measured.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "coreDimensions.effectiveClearApertureMm"],
      candidateValues: [44, 44.4],
      resolution: "Measure the opening between the body claws.",
    },
    {
      issue:
        "Mount ring diameters and the screw pattern are photo-scaled: the body ring and its four screws from JAPB's oblique SA-300 photograph, the lens flange plate from two lens photographs. The sd Quattro photograph shows five screws, so the screw pattern is body-specific.",
      affectedFields: [
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "screwsGasketsBaffles",
      ],
      candidateValues: [],
      resolution: "Measure the ring of an SA-300-era body and of an SD14-or-later body.",
    },
    {
      issue:
        "Westin's section records a fixed lug inside the lens rear, between radii 17.3 mm and 20.7 mm and reaching 7 mm behind the flange. It is not drawn because its angular position and purpose are not documented.",
      affectedFields: ["lensSideFeatures", "axialStack"],
      candidateValues: [],
      resolution: "Identify the part on a lens sample and record its angle.",
    },
  ],
} satisfies MountSpecInput;

export default SIGMA_SA_MOUNT;
