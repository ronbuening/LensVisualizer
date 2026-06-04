import {
  arcSectorPath,
  featureCenterForView,
  formatSvgNumber,
  isKnownAngle,
  isKnownNumber,
  lengthOr,
  parseViewBox,
  polarPoint,
  sortFeaturesByAngle,
  statusForValue,
  viewBoxForSpecView,
} from "./geometry.js";
import type {
  CameraSideFeature,
  Contact,
  LensMountSpec,
  LensSideFeature,
  MechanicalCoupling,
  MountSvgView,
  ValueStatus,
} from "./types.js";

export type SvgPrimitive =
  | {
      kind: "circle";
      layer: string;
      cx: number;
      cy: number;
      r: number;
      className: string;
      label?: string;
    }
  | {
      kind: "path";
      layer: string;
      d: string;
      className: string;
      label?: string;
    }
  | {
      kind: "line";
      layer: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      className: string;
      label?: string;
    }
  | {
      kind: "rect";
      layer: string;
      x: number;
      y: number;
      width: number;
      height: number;
      className: string;
      label?: string;
    }
  | {
      kind: "text";
      layer: string;
      x: number;
      y: number;
      text: string;
      className: string;
    };

export interface MountSvgModel {
  spec: LensMountSpec;
  view: MountSvgView;
  viewBox: string;
  title: string;
  desc: string;
  metadata: Record<string, string>;
  primitives: SvgPrimitive[];
}

export const MOUNT_SVG_LAYER_ORDER = [
  "datum-axis",
  "format-frame",
  "clear-aperture",
  "camera-side-metal",
  "camera-side-core-interface",
  "camera-side-variant-electrical",
  "camera-side-variant-mechanical",
  "lens-side-metal",
  "lens-side-core-interface",
  "lens-side-variant-electrical",
  "lens-side-variant-mechanical",
  "axial-section",
  "uncertainty",
] as const;

const STATUS_CLASS: Record<ValueStatus, string> = {
  official: "status-official",
  measured: "status-measured",
  service_manual: "status-service-manual",
  secondary: "status-secondary",
  patent: "status-patent",
  photo_scaled: "status-photo-scaled",
  conflicting: "status-conflicting",
  unknown: "status-unknown",
  not_applicable: "status-not-applicable",
};

function classForStatus(status: ValueStatus): string {
  return STATUS_CLASS[status] ?? "status-unknown";
}

function stableLayerSort(a: SvgPrimitive, b: SvgPrimitive): number {
  return (
    MOUNT_SVG_LAYER_ORDER.indexOf(a.layer as (typeof MOUNT_SVG_LAYER_ORDER)[number]) -
    MOUNT_SVG_LAYER_ORDER.indexOf(b.layer as (typeof MOUNT_SVG_LAYER_ORDER)[number])
  );
}

function radialLayer(view: MountSvgView, featureType: string): string {
  if (featureType.includes("contact")) {
    return view === "camera_side_front_view" ? "camera-side-variant-electrical" : "lens-side-variant-electrical";
  }
  if (featureType.includes("coupling") || featureType.includes("lever") || featureType.includes("drive")) {
    return view === "camera_side_front_view" ? "camera-side-variant-mechanical" : "lens-side-variant-mechanical";
  }
  return view === "camera_side_front_view" ? "camera-side-core-interface" : "lens-side-core-interface";
}

function coreOuterRadius(spec: LensMountSpec, view: MountSvgView): number {
  const outer =
    view === "camera_side_front_view"
      ? spec.coreDimensions.cameraMountOuterDiameterMm
      : spec.coreDimensions.lensMountOuterDiameterMm;
  const throat = spec.coreDimensions.nominalThroatDiameterMm;
  return lengthOr(outer, lengthOr(throat, 44) + 10) / 2;
}

function coreThroatRadius(spec: LensMountSpec): number {
  return lengthOr(spec.coreDimensions.nominalThroatDiameterMm, 44) / 2;
}

function addLegend(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  const parsed = parseViewBox(viewBoxForSpecView(spec, view));
  const x = parsed.minX + 4;
  const y = parsed.minY + 7;
  primitives.push(
    { kind: "text", layer: "uncertainty", x, y, text: "solid: sourced", className: "legend-label" },
    { kind: "text", layer: "uncertainty", x, y: y + 5, text: "dash: inferred", className: "legend-label" },
    { kind: "text", layer: "uncertainty", x, y: y + 10, text: "dot: unknown", className: "legend-label" },
  );
}

function addDatum(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  if (view === "axial_register_schematic") return;
  const radius = coreOuterRadius(spec, view);
  primitives.push(
    { kind: "line", layer: "datum-axis", x1: 0, y1: -radius, x2: 0, y2: radius, className: "datum-line" },
    { kind: "line", layer: "datum-axis", x1: -radius, y1: 0, x2: radius, y2: 0, className: "datum-line" },
    { kind: "circle", layer: "datum-axis", cx: 0, cy: 0, r: 1, className: "datum-center" },
    { kind: "text", layer: "datum-axis", x: 2, y: -radius + 4, text: "0 deg", className: "datum-label" },
  );
}

function addRadialCore(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  const metalLayer = view === "camera_side_front_view" ? "camera-side-metal" : "lens-side-metal";
  const outerRadius = coreOuterRadius(spec, view);
  const throatRadius = coreThroatRadius(spec);
  const outerStatus =
    view === "camera_side_front_view"
      ? spec.coreDimensions.cameraMountOuterDiameterMm.status
      : spec.coreDimensions.lensMountOuterDiameterMm.status;

  primitives.push(
    {
      kind: "circle",
      layer: metalLayer,
      cx: 0,
      cy: 0,
      r: outerRadius,
      className: classForStatus(outerStatus),
      label: "mount outer envelope",
    },
    {
      kind: "circle",
      layer: "clear-aperture",
      cx: 0,
      cy: 0,
      r: throatRadius,
      className: classForStatus(spec.coreDimensions.nominalThroatDiameterMm.status),
      label: "nominal throat",
    },
  );
}

function addRadialFeature(
  primitives: SvgPrimitive[],
  feature: CameraSideFeature | LensSideFeature,
  view: MountSvgView,
  fallbackRadius: number,
) {
  const layer = radialLayer(view, feature.featureType);
  const centerAngle = featureCenterForView(feature, view);
  const status = statusForValue(feature.centerAngleDeg);

  if (isKnownAngle(feature.startAngleDeg) && isKnownAngle(feature.endAngleDeg)) {
    const innerRadius = lengthOr(feature.innerRadiusMm, fallbackRadius - 3);
    const outerRadius = lengthOr(feature.outerRadiusMm, fallbackRadius);
    primitives.push({
      kind: "path",
      layer,
      d: arcSectorPath({
        innerRadiusMm: innerRadius,
        outerRadiusMm: outerRadius,
        startAngleDeg: feature.startAngleDeg.value,
        endAngleDeg: feature.endAngleDeg.value,
        view,
      }),
      className: classForStatus(status),
      label: feature.featureId,
    });
    return;
  }

  const angle = centerAngle ?? 330;
  const point = polarPoint(fallbackRadius - 2, angle);
  primitives.push(
    {
      kind: "circle",
      layer: "uncertainty",
      cx: point.x,
      cy: point.y,
      r: 1.6,
      className: "status-unknown",
      label: feature.featureId,
    },
    {
      kind: "text",
      layer: "uncertainty",
      x: point.x + 2,
      y: point.y,
      text: `${feature.featureId}: unknown`,
      className: "unknown-label",
    },
  );
}

function addContacts(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  const side = view === "camera_side_front_view" ? "body" : "lens";
  const contacts = spec.contacts.filter((contact) => contact.side === side);
  const layer = view === "camera_side_front_view" ? "camera-side-variant-electrical" : "lens-side-variant-electrical";
  const fallbackRadius = coreThroatRadius(spec) + 4;
  const fallbackStart = 42;
  const spacing = 5;

  contacts.forEach((contact: Contact, index) => {
    const rawAngle = isKnownAngle(contact.centerAngleDeg)
      ? contact.centerAngleDeg.value
      : fallbackStart + index * spacing;
    const angle = view === "lens_side_rear_view" ? 360 - rawAngle : rawAngle;
    const radius = lengthOr(contact.centerRadiusMm, fallbackRadius);
    const point = polarPoint(radius, angle);
    const width = lengthOr(contact.widthMm, 1.8);
    const height = lengthOr(contact.heightMm, 3);
    primitives.push({
      kind: "rect",
      layer,
      x: point.x - width / 2,
      y: point.y - height / 2,
      width,
      height,
      className: classForStatus(contact.centerAngleDeg.status),
      label: `${side} contact ${contact.contactNo}`,
    });
  });
}

function addMechanicalCouplings(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  const side = view === "camera_side_front_view" ? "body" : "lens";
  const layer = view === "camera_side_front_view" ? "camera-side-variant-mechanical" : "lens-side-variant-mechanical";
  const fallbackRadius = coreOuterRadius(spec, view) - 3;

  spec.mechanicalCouplings
    .filter((coupling) => coupling.side === side || coupling.side === "both")
    .forEach((coupling: MechanicalCoupling, index) => {
      const rawAngle = isKnownAngle(coupling.centerAngleDeg) ? coupling.centerAngleDeg.value : 210 + index * 16;
      const angle = view === "lens_side_rear_view" ? 360 - rawAngle : rawAngle;
      const radius = lengthOr(coupling.radiusMm, fallbackRadius);
      const point = polarPoint(radius, angle);
      primitives.push(
        {
          kind: "rect",
          layer,
          x: point.x - 1.8,
          y: point.y - 1.8,
          width: 3.6,
          height: 3.6,
          className: classForStatus(coupling.centerAngleDeg.status),
          label: coupling.featureId,
        },
        {
          kind: "text",
          layer: "uncertainty",
          x: point.x + 2.5,
          y: point.y + 1,
          text: coupling.featureId,
          className: "feature-label",
        },
      );
    });
}

function addRadialView(primitives: SvgPrimitive[], spec: LensMountSpec, view: MountSvgView) {
  addDatum(primitives, spec, view);
  addRadialCore(primitives, spec, view);
  const features: Array<CameraSideFeature | LensSideFeature> =
    view === "camera_side_front_view" ? [...spec.cameraSideFeatures] : [...spec.lensSideFeatures];
  const fallbackRadius = coreOuterRadius(spec, view);

  sortFeaturesByAngle(features)
    .filter((feature) => !feature.featureType.includes("opening") && feature.featureType !== "mount_ring")
    .forEach((feature) => addRadialFeature(primitives, feature, view, fallbackRadius));

  addContacts(primitives, spec, view);
  addMechanicalCouplings(primitives, spec, view);
  addLegend(primitives, spec, view);
}

function addAxialView(primitives: SvgPrimitive[], spec: LensMountSpec) {
  const ffd = isKnownNumber(spec.coreDimensions.flangeFocalDistanceMm)
    ? spec.coreDimensions.flangeFocalDistanceMm.value
    : 45;
  const sensorHeight = 43.3;
  const lensSideEnd = 12;
  primitives.push(
    { kind: "line", layer: "datum-axis", x1: -ffd - 4, y1: 0, x2: lensSideEnd, y2: 0, className: "datum-line" },
    { kind: "line", layer: "axial-section", x1: 0, y1: -24, x2: 0, y2: 24, className: "status-official" },
    { kind: "text", layer: "axial-section", x: 1.5, y: -21, text: "flange datum", className: "feature-label" },
    {
      kind: "line",
      layer: "axial-section",
      x1: -ffd,
      y1: -sensorHeight / 2,
      x2: -ffd,
      y2: sensorHeight / 2,
      className: classForStatus(spec.coreDimensions.flangeFocalDistanceMm.status),
    },
    {
      kind: "text",
      layer: "axial-section",
      x: -ffd + 1.5,
      y: sensorHeight / 2 + 4,
      text: `sensor / film plane (${formatSvgNumber(ffd)} mm)`,
      className: "feature-label",
    },
    {
      kind: "rect",
      layer: "axial-section",
      x: -2,
      y: -16,
      width: 4,
      height: 32,
      className: "status-secondary",
      label: "mount stack schematic",
    },
    {
      kind: "rect",
      layer: "uncertainty",
      x: -10,
      y: -20,
      width: 10,
      height: 40,
      className: "status-unknown",
      label: "body clearance unknown",
    },
    {
      kind: "text",
      layer: "uncertainty",
      x: -9,
      y: -17,
      text: "clearance envelope unknown",
      className: "unknown-label",
    },
  );
  addLegend(primitives, spec, "axial_register_schematic");
}

export function buildMountSvgModel(spec: LensMountSpec, view: MountSvgView): MountSvgModel {
  const primitives: SvgPrimitive[] = [];
  if (view === "axial_register_schematic") addAxialView(primitives, spec);
  else addRadialView(primitives, spec, view);

  const viewLabel =
    view === "camera_side_front_view"
      ? "camera-side front view"
      : view === "lens_side_rear_view"
        ? "lens-side rear view"
        : "axial register schematic";
  const profileId = spec.mvp.profileModel.selectedMvpProfileId;
  const ffd = spec.coreDimensions.flangeFocalDistanceMm.value;
  const throat = spec.coreDimensions.nominalThroatDiameterMm.value;

  return {
    spec,
    view,
    viewBox: viewBoxForSpecView(spec, view),
    title: `${spec.displayLabel} mount - ${viewLabel} (${profileId})`,
    desc: `${spec.displayLabel} ${viewLabel}; flange focal distance ${String(ffd)} mm; nominal throat ${String(
      throat,
    )} mm.`,
    metadata: {
      mountId: spec.mountId,
      profileId,
      view,
      schemaVersion: spec.schemaVersion,
    },
    primitives: primitives.sort(stableLayerSort),
  };
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeText(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function primitiveToSvg(primitive: SvgPrimitive): string {
  const label = "label" in primitive ? primitive.label : undefined;
  const dataLabel = label ? ` data-label="${escapeAttribute(label)}"` : "";
  if (primitive.kind === "circle") {
    return `<circle class="${primitive.className}" cx="${formatSvgNumber(primitive.cx)}" cy="${formatSvgNumber(
      primitive.cy,
    )}" r="${formatSvgNumber(primitive.r)}"${dataLabel}/>`;
  }
  if (primitive.kind === "line") {
    return `<line class="${primitive.className}" x1="${formatSvgNumber(primitive.x1)}" y1="${formatSvgNumber(
      primitive.y1,
    )}" x2="${formatSvgNumber(primitive.x2)}" y2="${formatSvgNumber(primitive.y2)}"${dataLabel}/>`;
  }
  if (primitive.kind === "rect") {
    return `<rect class="${primitive.className}" x="${formatSvgNumber(primitive.x)}" y="${formatSvgNumber(
      primitive.y,
    )}" width="${formatSvgNumber(primitive.width)}" height="${formatSvgNumber(primitive.height)}"${dataLabel}/>`;
  }
  if (primitive.kind === "path") {
    return `<path class="${primitive.className}" d="${escapeAttribute(primitive.d)}"${dataLabel}/>`;
  }
  return `<text class="${primitive.className}" x="${formatSvgNumber(primitive.x)}" y="${formatSvgNumber(
    primitive.y,
  )}">${escapeText(primitive.text)}</text>`;
}

export function renderMountSvgString(spec: LensMountSpec, view: MountSvgView): string {
  const model = buildMountSvgModel(spec, view);
  const titleId = `${spec.mountId}-${view}-title`;
  const descId = `${spec.mountId}-${view}-desc`;
  const metadata = escapeText(JSON.stringify(model.metadata));
  const body = model.primitives.map(primitiveToSvg).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${titleId} ${descId}" viewBox="${
    model.viewBox
  }"><title id="${titleId}">${escapeText(model.title)}</title><desc id="${descId}">${escapeText(
    model.desc,
  )}</desc><metadata>${metadata}</metadata><style>${MOUNT_SVG_STYLE_TEXT}</style>${body}</svg>`;
}

export const MOUNT_SVG_STYLE_TEXT = `
.datum-line{stroke:#7d8590;stroke-width:.35;fill:none}
.datum-center{fill:#7d8590;stroke:none}
.datum-label,.feature-label,.unknown-label,.legend-label{font-family:'JetBrains Mono','SF Mono','Fira Code',monospace;font-size:2.7px;fill:#5f6b76}
.legend-label{font-size:2.4px}
.status-official,.status-measured{stroke:#334155;stroke-width:.8;fill:none}
.status-secondary,.status-service-manual{stroke:#64748b;stroke-width:.65;fill:none}
.status-patent{stroke:#475569;stroke-width:.65;fill:none}
.status-photo-scaled{stroke:#64748b;stroke-width:.65;stroke-dasharray:2.4 1.4;fill:none}
.status-conflicting{stroke:#b45309;stroke-width:.75;stroke-dasharray:2.2 1 .5 1;fill:none}
.status-unknown{stroke:#94a3b8;stroke-width:.55;stroke-dasharray:.7 1.5;fill:none}
.status-not-applicable{display:none}
rect.status-secondary,rect.status-photo-scaled,rect.status-unknown{fill:#e2e8f0;fill-opacity:.2}
path.status-photo-scaled,path.status-secondary{fill:#cbd5e1;fill-opacity:.16}
`;
