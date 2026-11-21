/**
 * Pentax 67 mount SVG specification.
 *
 * The 6x7 / 67 / 67II body carries a dual bayonet: an inner three-lug bayonet for lenses from 35 mm to
 * 300 mm and an outer four-lug bayonet for the 400 mm to 1000 mm telephotos [p67-5], [p67-7]. The two are
 * different drawn geometry, so the base profile holds only what both share (throat, body mount ring,
 * register, mount screws) and two variants overlay the bayonets: `pentax-67/inner` (rendered) and
 * `pentax-67/outer`.
 *
 * Sourced: the 84.95 ± 0.04 mm mechanical back and the four-screw bayonet seat come from the 67II service
 * manual [p67-3]; the clockwise mounting turn and the red-dot index come from the maker operating manuals
 * [p67-4], [p67-5]; the 72 mm throat is a published secondary value [p67-6]. Inner lug sectors, ring
 * diameters, lock rotation angle and the aperture-lever position are still photo-scaled from unidentified
 * imagery [p67-2]. Nothing dimensions the outer bayonet, so it is recorded as a four-lug set of unknown
 * geometry. No patent for the dual bayonet was found.
 */

import type { CameraSideFeature, LensSideFeature, MountProfileId, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeStandardAxialStack } from "./mountAuthoringShared.js";

const BASE: MountProfileId = "pentax-67/base";
const INNER: MountProfileId = "pentax-67/inner";
const OUTER: MountProfileId = "pentax-67/outer";

const WIKI_FFD = ["p67-1"]; // register cross-check
const IMAGERY = ["p67-2"]; // unidentified body / lens-rear imagery (label-only, low confidence)
const SERVICE = ["p67-3"]; // 67II service manual
const MANUAL_67II = ["p67-4"]; // 67II operating manual
const MANUAL_6X7 = ["p67-5"]; // 6x7 operating manual
const WIKI_THROAT = ["p67-6"]; // published throat diameter
const WIKI_67 = ["p67-7"]; // dual-bayonet description
const MANUALS = [...MANUAL_67II, ...MANUAL_6X7];
const OUTER_REFS = [...MANUAL_6X7, ...WIKI_67];

const THROAT_DIAMETER_MM = 72;
/** Red-dot index, scaled from the 67II manual p. 18 perspective figure (about 9:30 seen from the front). */
const INDEX_ANGLE_DEG = 285;

const inner = makeBayonetFeatures({
  profileId: INNER,
  refs: IMAGERY,
  throatDiameterMm: THROAT_DIAMETER_MM,
  cameraOuterDiameterMm: 86,
  lensOuterDiameterMm: 84,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 90,
  indexCenterAngleDeg: INDEX_ANGLE_DEG,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes:
    "inner three-lug bayonet (count: 67II service manual lists three mount springs B3; owner's manual p. 14); centre, span and radii are photo-scaled",
  lockShapeNotes:
    "lock pin on the side away from the winding mechanism, i.e. the right-hand side seen from the camera front (67II service manual p. 44; 6x7 manual pp. 2 and 15 show the lens release there); clock angle and radius are photo-scaled",
  indexShapeNotes: "red dot on the body mount; angle scaled from the 67II manual p. 18 perspective figure, about ±15°",
  bodyThroatNotes: "72 mm throat opening (published secondary value)",
});

/**
 * The helper emits one profile and one ref list. Move the shared metal to the base profile, cite the
 * published throat where the throat radius is used, and give the index and lock features their real sources.
 */
function withSourcedOverrides<T extends CameraSideFeature | LensSideFeature>(feature: T): T {
  switch (feature.featureType) {
    case "body_throat":
      return {
        ...feature,
        profileId: BASE,
        centerAngleDeg: { ...feature.centerAngleDeg, sourceRefs: WIKI_THROAT },
        startAngleDeg: { ...feature.startAngleDeg, sourceRefs: WIKI_THROAT },
        endAngleDeg: { ...feature.endAngleDeg, sourceRefs: WIKI_THROAT },
        innerRadiusMm: { ...feature.innerRadiusMm, sourceRefs: WIKI_THROAT },
        outerRadiusMm: { ...feature.outerRadiusMm, sourceRefs: WIKI_THROAT },
      };
    case "mount_ring":
      return { ...feature, profileId: BASE, innerRadiusMm: { ...feature.innerRadiusMm, sourceRefs: WIKI_THROAT } };
    case "lens_throat":
      return {
        ...feature,
        centerAngleDeg: { ...feature.centerAngleDeg, sourceRefs: WIKI_THROAT },
        startAngleDeg: { ...feature.startAngleDeg, sourceRefs: WIKI_THROAT },
        endAngleDeg: { ...feature.endAngleDeg, sourceRefs: WIKI_THROAT },
        innerRadiusMm: { ...feature.innerRadiusMm, sourceRefs: WIKI_THROAT },
      };
    case "index_mark":
      return { ...feature, centerAngleDeg: v(INDEX_ANGLE_DEG, "photo_scaled", MANUAL_67II) };
    case "lock_pin":
    case "lock_notch":
      return { ...feature, centerAngleDeg: v(90, "photo_scaled", [...MANUAL_6X7, ...SERVICE]) };
    default:
      return feature;
  }
}

const OUTER_SHAPE_NOTES =
  "outer four-lug bayonet for the 400 mm to 1000 mm lenses; the lugs are symmetric so the body can be set in any of four positions (90° pitch); clocking, spans and radii are not sourced";

const cameraSideFeatures: CameraSideFeature[] = [
  ...inner.cameraSideFeatures.map(withSourcedOverrides),
  {
    featureId: "body-outer-bayonet-lugs",
    featureType: "outer_bayonet_lug",
    profileId: OUTER,
    count: 4,
    centerAngleDeg: unknownV(OUTER_REFS),
    startAngleDeg: unknownV(OUTER_REFS),
    endAngleDeg: unknownV(OUTER_REFS),
    innerRadiusMm: unknownV(OUTER_REFS),
    outerRadiusMm: unknownV(OUTER_REFS),
    depthMm: unknownV(OUTER_REFS),
    matesWith: "lens-outer-bayonet-lugs",
    shapeNotes: OUTER_SHAPE_NOTES,
  },
];

const lensSideFeatures: LensSideFeature[] = [
  ...inner.lensSideFeatures.map(withSourcedOverrides),
  {
    featureId: "lens-outer-bayonet-lugs",
    featureType: "outer_bayonet_lug",
    profileId: OUTER,
    count: 4,
    centerAngleDeg: unknownV(OUTER_REFS),
    startAngleDeg: unknownV(OUTER_REFS),
    endAngleDeg: unknownV(OUTER_REFS),
    innerRadiusMm: unknownV(OUTER_REFS),
    outerRadiusMm: unknownV(OUTER_REFS),
    thicknessMm: unknownV(OUTER_REFS),
    matesWith: "body-outer-bayonet-lugs",
    shapeNotes: OUTER_SHAPE_NOTES,
  },
];

const axialStack = makeStandardAxialStack({
  refs: IMAGERY,
  flangeFocalDistanceMm: 84.95,
  mountOuterDiameterMm: 86,
  lugEngagementDiameterMm: 80,
  sensorFilmDiameterMm: 90.2,
}).map((plane) =>
  plane.planeId === "sensor_film_plane" ? { ...plane, zPositionMm: v(-84.95, "service_manual", SERVICE) } : plane,
);

const PENTAX_67_MOUNT = {
  mountId: "pentax-67",
  displayLabel: "Pentax 67",
  projectNote: "Pentax 6x7 / 67 medium-format dual bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["aperture_coupling", "outer_bayonet"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["exact_lug_geometry", "outer_bayonet_geometry"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: INNER,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "all Pentax 6x7, 67 and 67II bodies, 1969 onward",
          adds: ["72 mm throat and body mount ring", "84.95 mm register", "four-screw bayonet seat"],
          removes: [],
          changes: [],
          status: "partial",
          sourceRefs: [...SERVICE, ...WIKI_THROAT, ...WIKI_FFD],
        },
        {
          profileId: INNER,
          profileType: "variant",
          appliesTo: "inner-bayonet lenses, 35 mm to 300 mm, and inner-bayonet accessories",
          adds: [
            "three-lug inner bayonet",
            "red-dot mounting index",
            "body lock pin and lens notch",
            "automatic-aperture coupling",
          ],
          removes: [],
          changes: ["lug sectors, lock rotation angle and aperture-lever position are photo-scaled"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...MANUALS, ...SERVICE, ...WIKI_67, ...IMAGERY],
        },
        {
          profileId: OUTER,
          profileType: "variant",
          appliesTo: "outer-bayonet lenses, 400 mm to 1000 mm, and outer-bayonet extension tubes",
          adds: ["four-lug outer bayonet, symmetric so the body can be set in any of four positions"],
          removes: ["automatic-aperture linkage (stop-down operation only)"],
          changes: ["outer lug clocking, spans and radii are unknown; drawn as a placeholder"],
          status: "stub",
          sourceRefs: OUTER_REFS,
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(84.95, "service_manual", [...SERVICE, ...WIKI_FFD]),
    nominalThroatDiameterMm: v(THROAT_DIAMETER_MM, "secondary", WIKI_THROAT),
    effectiveClearApertureMm: v(72, "photo_scaled", IMAGERY),
    cameraMountOuterDiameterMm: v(86, "photo_scaled", IMAGERY),
    lensMountOuterDiameterMm: v(84, "photo_scaled", IMAGERY),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", IMAGERY),
    lockAngleDeg: v(60, "photo_scaled", IMAGERY),
    lockRotationDeg: v(60, "photo_scaled", IMAGERY),
    lockRotationDirection: dirV("clockwise", "official", MANUALS),
  },

  cameraSideFeatures,
  lensSideFeatures,
  axialStack,
  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "aperture-actuation-lever",
      side: "both",
      profileId: INNER,
      centerAngleDeg: v(55, "photo_scaled", IMAGERY),
      radiusMm: v(34, "photo_scaled", IMAGERY),
      sizeOrTravel: "lever",
      function: "body-driven aperture stop-down actuation",
      compatibilityNotes:
        "inner-bayonet automatic-aperture lenses only; outer-bayonet lenses have no automatic-aperture linkage. A separate aperture-value coupling (a lens tab driving the indexed ring under the body mount ring, service part O-K102) is not drawn because its position is not sourced",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(4, "service_manual", SERVICE),
      pcdMm: v(82, "photo_scaled", IMAGERY),
      diameterMm: v(3, "photo_scaled", IMAGERY),
      centerAnglesDeg: degListV([45, 135, 225, 315], "photo_scaled", [...SERVICE, ...IMAGERY]),
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
      ref: "p67-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 67 register",
      confidence: "medium",
    },
    {
      ref: "p67-2",
      sourceType: "secondary",
      citation: "Pentax 67 mount visual references. Accessed 2026-06-06.",
      liveUrl: "Pentax 6x7 / 67 body and lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "large bayonet and coupling placement",
      confidence: "low",
    },
    {
      ref: "p67-3",
      sourceType: "service_manual",
      citation:
        "Pentax 67II Service Manual, Product No. 27340, sections 2.16 and 6.15 (sheets 17/70, 42/70 and 43/70; viewer pages 18, 43 and 44). Accessed 2026-11-21.",
      liveUrl: "https://www.manualslib.com/manual/1157214/Pentax-67-Ii.html?page=18",
      archiveUrl: "https://www.scribd.com/document/269439309/Pentax67II-Service-Manual",
      archiveDate: "2026-11-21",
      appliesTo:
        "mechanical back standard 84.95 ± 0.04 mm (section 2.16); bayonet seat B2 fixed by four CNS 2.3 x 5.0 screws over four W8 shims, three mount springs B3, mount lock lever B33 and diaphragm coupler ring O-K102 (section 6.15); the exploded figures are undimensioned isometric views of the body front and support arrangement only",
      confidence: "high",
    },
    {
      ref: "p67-4",
      sourceType: "official",
      citation: "Pentax 67II Operating Manual, pp. 18 and 19. Ricoh Imaging. Accessed 2026-11-21.",
      liveUrl: "https://www.ricoh-imaging.co.jp/english/support/man-pdf/67II-2.pdf",
      archiveUrl: "https://www.manualslib.com/manual/121756/Pentax-67ii.html?page=20",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 18 text: align the red dots and turn the lens fully to the right until it clicks; p. 19: turn to the left with the lens release lever depressed; p. 18 figure 2 is a perspective view of the camera front (no angle conversion) used to scale the red-dot index",
      confidence: "high",
    },
    {
      ref: "p67-5",
      sourceType: "official",
      citation:
        "Asahi Optical Co., Asahi Pentax 6x7 operating manual, pp. 2, 14 and 15 (scan in the M. Butkus camera manual library). Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/pentax/pentax_6x7/pentax_6x7.htm",
      archiveUrl: "https://www.cameramanuals.org/pentax_pdf/pentax_6x7.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 14 text: match the red dots and turn the lens to the right to lock, to the left to remove; inner bayonet for 35 mm to 300 mm lenses, outer bayonet for 400 mm to 1000 mm lenses; pp. 2 and 15 photographs are camera-front and side views showing the lens release on the right-hand side seen from the front",
      confidence: "high",
    },
    {
      ref: "p67-6",
      sourceType: "secondary",
      citation: "“Lens mount,” Wikipedia, list of lens mounts, revision of 2026-11-13. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo: "Pentax 6x7 row: 72 mm throat diameter (uncited in the table) and 84.95 mm register",
      confidence: "low",
    },
    {
      ref: "p67-7",
      sourceType: "secondary",
      citation: "“Pentax 6×7,” Wikipedia, revision of 2026-11-09. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Pentax_6%C3%977",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Pentax_6%C3%977&oldid=1384743181",
      archiveDate: "2026-11-21",
      appliesTo:
        "inner three-flange and outer four-flange symmetric bayonets, four body positions on the outer bayonet, no automatic-aperture linkage on outer-bayonet lenses, lens aperture tab coupling to the indexed ring under the body mount ring",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "Inner-bayonet lug sectors are photo-scaled from unidentified imagery [p67-2]: centres 20°/140°/260°, 34° spans, lug radii and depth. The three-lug count is sourced, the geometry is not. No patent, service-manual drawing with angles, or measured sample was found.",
      affectedFields: ["cameraSideFeatures.body-slot-1..3", "lensSideFeatures.lens-lug-1..3"],
      candidateValues: [],
      resolution:
        "Measure a 6x7/67 body mount and an inner-bayonet lens rear, or find a dimensioned bayonet drawing. Searched on 2026-11-21: Google Patents for Asahi bayonet-mount filings from 1960 to 1985 (36 results); US3388647A and US3439600A (1965) turned out to be screw-mount patents, and none of the rest describes the 6x7 double bayonet.",
    },
    {
      issue:
        "Outer-bayonet geometry is unknown. Sources give only the count (four), the symmetry (four body positions) and the lens range (400 mm to 1000 mm). Clock position, spans, radii and how the outer lens locks are not sourced, so the outer profile renders as a placeholder.",
      affectedFields: [
        "cameraSideFeatures.body-outer-bayonet-lugs",
        "lensSideFeatures.lens-outer-bayonet-lugs",
        "mvp.profileModel.variantProfiles",
      ],
      candidateValues: [],
      resolution:
        "The Pentax 67 interchangeable-lens manual (cited by the 67II manual for outer-bayonet mounting), a service manual for an outer-bayonet lens, or a measured body and 400 mm-class lens.",
    },
    {
      issue:
        "Throat is a published secondary value (72 mm, uncited in its table); the effective clear aperture, both ring outer diameters (86 mm body, 84 mm lens) and the 60° lock rotation are still photo-scaled from unidentified imagery [p67-2].",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "lockGeometry.lockRotationDeg",
      ],
      candidateValues: [],
      resolution: "Measured body and lens samples, or a maker dimension drawing.",
    },
    {
      issue:
        "Index, lock pin, aperture lever and mount screws are placed from undimensioned figures. The red-dot index (285°) is scaled from a perspective manual figure, about ±15°. The lock pin (90°) is known only to sit on the right-hand side seen from the front. The aperture stop-down lever (55°, 34 mm radius) and the screw pitch circle and clock angles rest on unidentified imagery [p67-2]; the four-screw count is from the service manual. The aperture-value coupler ring (O-K102) and the lens tab that drives it are not drawn.",
      affectedFields: [
        "cameraSideFeatures.body-index-mark",
        "cameraSideFeatures.body-lock-pin",
        "lensSideFeatures.lens-lock-notch",
        "mechanicalCouplings.aperture-actuation-lever",
        "screwsGasketsBaffles.body-mount-screws",
      ],
      candidateValues: [],
      resolution:
        "The Asahi Pentax 6x7 service manual (Product No. 23400) exploded views read page by page, or a measured body and lens rear.",
    },
    {
      issue:
        "The low-confidence imagery source [p67-2] still carries drawn features: the inner lug sectors, ring diameters, lock rotation angle, aperture lever, and screw pitch circle. Patent searches for the Asahi dual bayonet and its aperture coupling (1965 to 1972) found nothing; US4017878A and DE1900677A1 are Asahi screw-to-bayonet adapter patents that do not describe this mount.",
      affectedFields: ["sourceRefs.p67-2"],
      candidateValues: [],
      resolution: "Replace [p67-2] once the values above have a dimensioned or measured source.",
    },
  ],
} satisfies MountSpecInput;

export default PENTAX_67_MOUNT;
