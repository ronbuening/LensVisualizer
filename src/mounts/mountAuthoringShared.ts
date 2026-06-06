import type {
  AxialPlane,
  CameraSideFeature,
  ContactFeature,
  LensSideFeature,
  MountProfileId,
  ScrewGasketBaffle,
  ValueStatus,
} from "../types/mount.js";
import { degListV, naV, unknownV, v } from "../optics/mount/authoring.js";

function normAngle(angleDeg: number): number {
  return ((angleDeg % 360) + 360) % 360;
}

interface BayonetFeatureConfig {
  profileId: MountProfileId;
  refs: string[];
  throatDiameterMm: number;
  cameraOuterDiameterMm: number;
  lensOuterDiameterMm: number;
  lugCentersDeg: number[];
  lugSpanDeg?: number;
  lugDepthMm?: number;
  lockCenterAngleDeg: number;
  indexCenterAngleDeg?: number;
  scalarStatus?: ValueStatus;
  featureStatus?: ValueStatus;
  lugShapeNotes: string;
  lockShapeNotes?: string;
  indexShapeNotes?: string;
  bodyThroatNotes?: string;
  lensThroatNotes?: string;
}

export function makeBayonetFeatures(config: BayonetFeatureConfig): {
  cameraSideFeatures: CameraSideFeature[];
  lensSideFeatures: LensSideFeature[];
} {
  const {
    profileId,
    refs,
    throatDiameterMm,
    cameraOuterDiameterMm,
    lensOuterDiameterMm,
    lugCentersDeg,
    lugShapeNotes,
    lockCenterAngleDeg,
    indexCenterAngleDeg = 0,
    scalarStatus = "secondary",
    featureStatus = "photo_scaled",
  } = config;
  const throatRadiusMm = throatDiameterMm / 2;
  const cameraOuterRadiusMm = cameraOuterDiameterMm / 2;
  const lensOuterRadiusMm = lensOuterDiameterMm / 2;
  const lugInnerRadiusMm = throatRadiusMm;
  const lugOuterRadiusMm = Math.min(Math.max(throatRadiusMm + 2.5, throatRadiusMm), cameraOuterRadiusMm);
  const lensThroatRadiusMm = Math.max(throatRadiusMm - 1, 0);
  const lugSpanDeg = config.lugSpanDeg ?? 38;
  const lugDepthMm = config.lugDepthMm ?? 1.8;
  const lockRadiusMm = Math.min(throatRadiusMm + 1, cameraOuterRadiusMm);

  const cameraSideFeatures: CameraSideFeature[] = [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId,
      count: 1,
      centerAngleDeg: v(0, scalarStatus, refs),
      startAngleDeg: v(0, scalarStatus, refs),
      endAngleDeg: v(360, scalarStatus, refs),
      innerRadiusMm: v(0, scalarStatus, refs),
      outerRadiusMm: v(throatRadiusMm, scalarStatus, refs),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: config.bodyThroatNotes ?? `${throatDiameterMm} mm throat opening`,
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId,
      count: 1,
      centerAngleDeg: v(0, featureStatus, refs),
      startAngleDeg: v(0, featureStatus, refs),
      endAngleDeg: v(360, featureStatus, refs),
      innerRadiusMm: v(throatRadiusMm, scalarStatus, refs),
      outerRadiusMm: v(cameraOuterRadiusMm, featureStatus, refs),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring",
    },
    ...lugCentersDeg.map((centerAngleDeg, index) => ({
      featureId: `body-slot-${index + 1}`,
      featureType: "bayonet_receiving_slot",
      profileId,
      count: 1,
      centerAngleDeg: v(centerAngleDeg, featureStatus, refs),
      startAngleDeg: v(normAngle(centerAngleDeg - lugSpanDeg / 2), featureStatus, refs),
      endAngleDeg: v(normAngle(centerAngleDeg + lugSpanDeg / 2), featureStatus, refs),
      innerRadiusMm: v(lugInnerRadiusMm, featureStatus, refs),
      outerRadiusMm: v(lugOuterRadiusMm, featureStatus, refs),
      depthMm: v(lugDepthMm, featureStatus, refs),
      matesWith: `lens-lug-${index + 1}`,
      shapeNotes: lugShapeNotes,
    })),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId,
      count: 1,
      centerAngleDeg: v(indexCenterAngleDeg, featureStatus, refs),
      startAngleDeg: unknownV(refs),
      endAngleDeg: unknownV(refs),
      innerRadiusMm: unknownV(refs),
      outerRadiusMm: v(cameraOuterRadiusMm + 0.5, featureStatus, refs),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: config.indexShapeNotes ?? "mounting index",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId,
      count: 1,
      centerAngleDeg: v(lockCenterAngleDeg, featureStatus, refs),
      startAngleDeg: unknownV(refs),
      endAngleDeg: unknownV(refs),
      innerRadiusMm: unknownV(refs),
      outerRadiusMm: v(lockRadiusMm, featureStatus, refs),
      depthMm: v(lugDepthMm, featureStatus, refs),
      matesWith: "lens-lock-notch",
      shapeNotes: config.lockShapeNotes ?? "lock pin/notch position is photo-scaled",
    },
  ];

  const lensSideFeatures: LensSideFeature[] = [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId,
      count: 1,
      centerAngleDeg: v(0, scalarStatus, refs),
      startAngleDeg: v(0, scalarStatus, refs),
      endAngleDeg: v(360, scalarStatus, refs),
      innerRadiusMm: v(0, scalarStatus, refs),
      outerRadiusMm: v(lensThroatRadiusMm, featureStatus, refs),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: config.lensThroatNotes ?? "rear opening",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId,
      count: 1,
      centerAngleDeg: v(0, featureStatus, refs),
      startAngleDeg: v(0, featureStatus, refs),
      endAngleDeg: v(360, featureStatus, refs),
      innerRadiusMm: v(lensThroatRadiusMm, featureStatus, refs),
      outerRadiusMm: v(lensOuterRadiusMm, featureStatus, refs),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring",
    },
    ...lugCentersDeg.map((centerAngleDeg, index) => ({
      featureId: `lens-lug-${index + 1}`,
      featureType: "bayonet_lug",
      profileId,
      count: 1,
      centerAngleDeg: v(centerAngleDeg, featureStatus, refs),
      startAngleDeg: v(normAngle(centerAngleDeg - lugSpanDeg / 2), featureStatus, refs),
      endAngleDeg: v(normAngle(centerAngleDeg + lugSpanDeg / 2), featureStatus, refs),
      innerRadiusMm: v(lugInnerRadiusMm, featureStatus, refs),
      outerRadiusMm: v(lugOuterRadiusMm, featureStatus, refs),
      thicknessMm: v(lugDepthMm, featureStatus, refs),
      matesWith: `body-slot-${index + 1}`,
      shapeNotes: lugShapeNotes,
    })),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId,
      count: 1,
      centerAngleDeg: v(indexCenterAngleDeg, featureStatus, refs),
      startAngleDeg: unknownV(refs),
      endAngleDeg: unknownV(refs),
      innerRadiusMm: unknownV(refs),
      outerRadiusMm: v(lensOuterRadiusMm + 0.5, featureStatus, refs),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId,
      count: 1,
      centerAngleDeg: v(lockCenterAngleDeg, featureStatus, refs),
      startAngleDeg: unknownV(refs),
      endAngleDeg: unknownV(refs),
      innerRadiusMm: unknownV(refs),
      outerRadiusMm: v(lockRadiusMm, featureStatus, refs),
      thicknessMm: v(lugDepthMm, featureStatus, refs),
      matesWith: "body-lock-pin",
      shapeNotes: "receives body lock pin",
    },
  ];

  return { cameraSideFeatures, lensSideFeatures };
}

interface ContactBankConfig {
  profileId: MountProfileId;
  refs: string[];
  count: number;
  startAngleDeg: number;
  stepDeg: number;
  radiusMm: number;
  widthMm?: number;
  heightMm?: number;
  bodyProtrusionMm?: number;
  status?: ValueStatus;
  functions?: string[];
}

export function makeContactBank(config: ContactBankConfig): ContactFeature[] {
  const {
    profileId,
    refs,
    count,
    startAngleDeg,
    stepDeg,
    radiusMm,
    widthMm = 1.3,
    heightMm = 2.8,
    bodyProtrusionMm = 0.4,
    status = "photo_scaled",
    functions = [],
  } = config;
  const contacts: ContactFeature[] = [];

  for (const side of ["body", "lens"] as const) {
    for (let i = 0; i < count; i += 1) {
      contacts.push({
        side,
        contactNo: i + 1,
        profileId,
        centerAngleDeg: v(normAngle(startAngleDeg + i * stepDeg), status, refs),
        centerRadiusMm: v(radiusMm, status, refs),
        widthMm: v(widthMm, status, refs),
        heightMm: v(heightMm, status, refs),
        shape: "pad",
        protrusionMm: v(side === "body" ? bodyProtrusionMm : 0, status, refs),
        function: functions[i] ?? "",
      });
    }
  }

  return contacts;
}

interface AxialStackConfig {
  refs: string[];
  flangeFocalDistanceMm: number;
  mountOuterDiameterMm: number;
  lugEngagementDiameterMm: number;
  sensorFilmDiameterMm: number;
  includeElectricalPlane?: boolean;
  electricalDiameterMm?: number;
  scalarStatus?: ValueStatus;
  featureStatus?: ValueStatus;
}

export function makeStandardAxialStack(config: AxialStackConfig): AxialPlane[] {
  const {
    refs,
    flangeFocalDistanceMm,
    mountOuterDiameterMm,
    lugEngagementDiameterMm,
    sensorFilmDiameterMm,
    scalarStatus = "secondary",
    featureStatus = "photo_scaled",
  } = config;
  const stack: AxialPlane[] = [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, scalarStatus, refs),
      thicknessMm: v(0, scalarStatus, refs),
      diameterMm: v(mountOuterDiameterMm, featureStatus, refs),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, featureStatus, refs),
      thicknessMm: v(1.8, featureStatus, refs),
      diameterMm: v(lugEngagementDiameterMm, featureStatus, refs),
    },
  ];

  if (config.includeElectricalPlane) {
    stack.push({
      planeId: "electrical_contact_plane",
      zPositionMm: v(0.5, featureStatus, refs),
      thicknessMm: v(0.5, featureStatus, refs),
      diameterMm: v(config.electricalDiameterMm ?? lugEngagementDiameterMm - 4, featureStatus, refs),
    });
  }

  stack.push({
    planeId: "sensor_film_plane",
    zPositionMm: v(-flangeFocalDistanceMm, scalarStatus, refs),
    thicknessMm: v(0, scalarStatus, refs),
    diameterMm: v(sensorFilmDiameterMm, scalarStatus, refs),
  });

  return stack;
}

export function makeMountScrews(
  refs: string[],
  count: number,
  pcdMm: number,
  diameterMm: number,
  anglesDeg: number[],
  status: ValueStatus = "photo_scaled",
): ScrewGasketBaffle {
  return {
    featureId: "body-mount-screws",
    featureType: "mount_screws",
    side: "body",
    count: v(count, status, refs),
    pcdMm: v(pcdMm, status, refs),
    diameterMm: v(diameterMm, status, refs),
    centerAnglesDeg: degListV(anglesDeg, status, refs),
    shape: "round",
  };
}
