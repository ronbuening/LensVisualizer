/**
 * Mount spec → renderer-agnostic SVG document.
 *
 * `buildMountSvgDoc()` is the single computation behind both the static string serializer and the
 * live React component. It selects the base profile plus the chosen variant (geometry is never
 * averaged across eras), resolves each feature into millimetre-space primitives, applies the
 * lens-rear mirror for the rear view (and never writes mirrored angles back), accumulates the
 * bounding box, computes the deterministic viewBox, orders layers, and builds the title/desc/legend
 * that satisfy the package's accessibility/metadata requirements.
 *
 * Each element carries a feature `category` (which drives its color, so the parts of a mount are easy
 * to tell apart) and a value `status` (which drives its stroke dash, so photo-scaled/unknown values
 * read as schematic). Feature → shape rules are heuristic but stable: openings draw as circles,
 * mount rings as annuli, lugs/slots/collars as annular sectors, lock pins/notches and couplings as
 * small markers, index marks as inward triangles, and electrical contacts as small pads on their
 * pitch circle. When a dimension needed to draw a feature to scale is unknown, the feature still
 * renders — as a dotted placeholder anchored to the mount's reference radius — rather than being
 * silently dropped.
 */

import type {
  AngleValue,
  CameraSideFeature,
  ContactFeature,
  LengthValue,
  LensSideFeature,
  MechanicalCoupling,
  MountMechanism,
  MountSpec,
  ScrewGasketBaffle,
} from "../../types/mount.js";
import { CATEGORY_LABELS, CATEGORY_LEGEND_ORDER, categoryColor } from "./category.js";
import type { MountFeatureCategory } from "./category.js";
import { classifyCameraFeatureLayer, classifyLensFeatureLayer, MOUNT_LAYER_ORDER } from "./layers.js";
import type { MountLayerName } from "./layers.js";
import { mirrorAngleDeg, normalizeAngleDeg } from "./mirror.js";
import { annularSectorPath, circlePath, indexTrianglePath, polarToCartesian, ringPath } from "./polar.js";
import { accumulateAxialSection } from "./axialSection.js";
import type { MountLegendEntry, MountSvgDoc, MountSvgElement, MountSvgLayerGroup } from "./svgDoc.js";
import { combineStatus, isKnown, numberOr } from "./value.js";
import type { BBox } from "./viewBox.js";
import { computeViewBox, emptyBBox, includeCircle, includePoint } from "./viewBox.js";

export type MountView = "camera_side_front" | "lens_side_rear" | "axial_section";

/* ── featureType classification ── */

const OPENING_TYPES = new Set<string>([
  "body_throat",
  "lens_throat",
  "clear_aperture",
  "effective_clear_aperture",
  "body_baffle",
  "rear_opening",
  "rear_baffle",
  "rear_element_envelope",
]);
const RING_TYPES = new Set<string>(["mount_ring", "body_mount_ring", "lens_mount_ring"]);
const DOT_TYPES = new Set<string>(["lock_pin", "lock_notch", "lock_receiver", "alignment_pin", "screw", "mount_screw"]);
const INDEX_TYPES = new Set<string>(["index_mark"]);

type DrawKind = "opening" | "ring" | "sector" | "dot" | "index";

/** Feature category implied by the resolved draw kind. */
const KIND_CATEGORY: Record<DrawKind, MountFeatureCategory> = {
  opening: "opening",
  ring: "ring",
  sector: "bayonet",
  index: "index",
  dot: "lock",
};

function drawKindForType(featureType: string, hasSpan: boolean): DrawKind {
  if (OPENING_TYPES.has(featureType)) return "opening";
  if (RING_TYPES.has(featureType)) return "ring";
  if (DOT_TYPES.has(featureType)) return "dot";
  if (INDEX_TYPES.has(featureType)) return "index";
  return hasSpan ? "sector" : "dot";
}

/* ── shared drawing context ── */

interface DrawContext {
  elements: MountSvgElement[];
  bbox: BBox;
  /** Transform a stored (camera-front) angle into the view's frame. */
  angleOf: (deg: number) => number;
  /** True for the lens-rear view (sectors must reverse start/end). */
  mirror: boolean;
  /** Reference outer radius for placeholders and bbox anchoring. */
  refOuter: number;
  /** Reference throat radius. */
  throatR: number;
}

function pushElement(ctx: DrawContext, el: MountSvgElement): void {
  ctx.elements.push(el);
}

/** A feature flattened to the fields the drawer needs (camera depth and lens thickness unify here). */
interface DrawFeature {
  featureId: string;
  featureType: string;
  layer: MountLayerName;
  centerAngleDeg: AngleValue;
  startAngleDeg: AngleValue;
  endAngleDeg: AngleValue;
  innerRadiusMm: LengthValue;
  outerRadiusMm: LengthValue;
  sizeMm: LengthValue;
}

function drawFeature(ctx: DrawContext, f: DrawFeature): void {
  const hasSpan = isKnown(f.startAngleDeg) && isKnown(f.endAngleDeg);
  const kind = drawKindForType(f.featureType, hasSpan);
  const category = KIND_CATEGORY[kind];
  const status = combineStatus([
    f.centerAngleDeg.status,
    f.startAngleDeg.status,
    f.endAngleDeg.status,
    f.innerRadiusMm.status,
    f.outerRadiusMm.status,
  ]);
  const center = ctx.angleOf(normalizeAngleDeg(numberOr(f.centerAngleDeg, 0)));

  if (kind === "opening") {
    const r = numberOr(f.outerRadiusMm, numberOr(f.innerRadiusMm, ctx.throatR));
    pushElement(ctx, {
      layer: f.layer,
      kind: "path",
      attrs: { d: circlePath(0, 0, r) },
      category,
      status,
      fill: false,
      sortAngle: 0,
      sortKey: f.featureId,
    });
    includeCircle(ctx.bbox, 0, 0, r);
    return;
  }

  if (kind === "ring") {
    const inner = numberOr(f.innerRadiusMm, ctx.throatR);
    const outer = numberOr(f.outerRadiusMm, ctx.refOuter);
    pushElement(ctx, {
      layer: f.layer,
      kind: "path",
      attrs: { d: ringPath(0, 0, inner, outer) },
      category,
      status,
      fill: true,
      fillEvenOdd: inner > 0,
      sortAngle: 0,
      sortKey: f.featureId,
    });
    includeCircle(ctx.bbox, 0, 0, outer);
    return;
  }

  if (kind === "sector") {
    const inner = numberOr(f.innerRadiusMm, ctx.refOuter * 0.78);
    const outer = numberOr(f.outerRadiusMm, ctx.refOuter * 0.92);
    const rawStart = normalizeAngleDeg(numberOr(f.startAngleDeg, numberOr(f.centerAngleDeg, 0) - 12));
    const rawEnd = normalizeAngleDeg(numberOr(f.endAngleDeg, numberOr(f.centerAngleDeg, 0) + 12));
    // Mirroring is a reflection, so the clockwise sweep reverses: start↔end swap under the mirror.
    const start = ctx.mirror ? mirrorAngleDeg(rawEnd) : rawStart;
    const end = ctx.mirror ? mirrorAngleDeg(rawStart) : rawEnd;
    pushElement(ctx, {
      layer: f.layer,
      kind: "path",
      attrs: { d: annularSectorPath(0, 0, inner, outer, start, end) },
      category,
      status,
      fill: true,
      sortAngle: center,
      sortKey: f.featureId,
    });
    includeCircle(ctx.bbox, 0, 0, outer);
    return;
  }

  if (kind === "index") {
    const r = numberOr(f.outerRadiusMm, ctx.refOuter);
    const len = Math.max(1.5, ctx.refOuter * 0.1);
    pushElement(ctx, {
      layer: f.layer,
      kind: "path",
      attrs: { d: indexTrianglePath(0, 0, r, center, len, 3.5) },
      category,
      status,
      fill: true,
      sortAngle: center,
      sortKey: f.featureId,
    });
    includeCircle(ctx.bbox, 0, 0, r);
    return;
  }

  // dot: small marker at its placement radius/angle (lock pin/notch, alignment pin)
  const placeR = numberOr(f.outerRadiusMm, numberOr(f.innerRadiusMm, ctx.refOuter * 0.88));
  const dotR = Math.min(3, Math.max(0.6, ctx.refOuter * 0.035));
  const p = polarToCartesian(0, 0, placeR, center);
  pushElement(ctx, {
    layer: f.layer,
    kind: "circle",
    attrs: { cx: p.x, cy: p.y, r: dotR },
    category,
    status,
    fill: true,
    sortAngle: center,
    sortKey: f.featureId,
  });
  includePoint(ctx.bbox, p.x - dotR, p.y - dotR);
  includePoint(ctx.bbox, p.x + dotR, p.y + dotR);
}

/* ── side-specific feature mapping ── */

function cameraFeatureToDraw(f: CameraSideFeature): DrawFeature {
  return {
    featureId: f.featureId,
    featureType: f.featureType,
    layer: classifyCameraFeatureLayer(f.featureType),
    centerAngleDeg: f.centerAngleDeg,
    startAngleDeg: f.startAngleDeg,
    endAngleDeg: f.endAngleDeg,
    innerRadiusMm: f.innerRadiusMm,
    outerRadiusMm: f.outerRadiusMm,
    sizeMm: f.depthMm,
  };
}

function lensFeatureToDraw(f: LensSideFeature): DrawFeature {
  return {
    featureId: f.featureId,
    featureType: f.featureType,
    layer: classifyLensFeatureLayer(f.featureType),
    centerAngleDeg: f.centerAngleDeg,
    startAngleDeg: f.startAngleDeg,
    endAngleDeg: f.endAngleDeg,
    innerRadiusMm: f.innerRadiusMm,
    outerRadiusMm: f.outerRadiusMm,
    sizeMm: f.thicknessMm,
  };
}

function drawContact(ctx: DrawContext, c: ContactFeature, electricalLayer: MountLayerName): void {
  const r = numberOr(c.centerRadiusMm, ctx.refOuter * 0.8);
  const height = numberOr(c.heightMm, Math.max(1, ctx.refOuter * 0.05));
  const widthMm = numberOr(c.widthMm, Math.max(1, ctx.refOuter * 0.05));
  const halfSpan = r > 0 ? ((widthMm / 2 / r) * 180) / Math.PI : 4;
  const status = combineStatus([c.centerAngleDeg.status, c.centerRadiusMm.status, c.widthMm.status]);
  const centerRaw = normalizeAngleDeg(numberOr(c.centerAngleDeg, 0));
  const center = ctx.angleOf(centerRaw);
  const start = ctx.mirror ? mirrorAngleDeg(center + halfSpan) : center - halfSpan;
  const end = ctx.mirror ? mirrorAngleDeg(center - halfSpan) : center + halfSpan;
  pushElement(ctx, {
    layer: electricalLayer,
    kind: "path",
    attrs: { d: annularSectorPath(0, 0, r - height / 2, r + height / 2, start, end) },
    category: "contact",
    status,
    fill: true,
    sortAngle: center,
    sortKey: `contact-${c.side}-${c.contactNo}`,
  });
  includeCircle(ctx.bbox, 0, 0, r + height / 2);
}

function drawCoupling(ctx: DrawContext, c: MechanicalCoupling, mechLayer: MountLayerName): void {
  const r = numberOr(c.radiusMm, ctx.refOuter * 0.7);
  const status = combineStatus([c.centerAngleDeg.status, c.radiusMm.status]);
  const center = ctx.angleOf(normalizeAngleDeg(numberOr(c.centerAngleDeg, 0)));
  const markR = Math.min(2.6, Math.max(0.8, ctx.refOuter * 0.03));
  const p = polarToCartesian(0, 0, r, center);
  pushElement(ctx, {
    layer: mechLayer,
    kind: "circle",
    attrs: { cx: p.x, cy: p.y, r: markR },
    category: "coupling",
    status,
    fill: false,
    sortAngle: center,
    sortKey: c.featureId,
  });
  includePoint(ctx.bbox, p.x - markR, p.y - markR);
  includePoint(ctx.bbox, p.x + markR, p.y + markR);
}

function drawScrewsGaskets(ctx: DrawContext, sg: ScrewGasketBaffle, metalLayer: MountLayerName): void {
  if (!Array.isArray(sg.centerAnglesDeg.value)) return;
  const pcd = numberOr(sg.pcdMm, ctx.refOuter * 0.9);
  const r = pcd / 2;
  const dotR = Math.min(2, Math.max(0.5, numberOr(sg.diameterMm, ctx.refOuter * 0.04) / 2));
  for (const angle of sg.centerAnglesDeg.value) {
    const center = ctx.angleOf(normalizeAngleDeg(angle));
    const p = polarToCartesian(0, 0, r, center);
    pushElement(ctx, {
      layer: metalLayer,
      kind: "circle",
      attrs: { cx: p.x, cy: p.y, r: dotR },
      category: "screw",
      status: sg.centerAnglesDeg.status,
      fill: false,
      sortAngle: center,
      sortKey: `${sg.featureId}-${normalizeAngleDeg(angle)}`,
    });
    includePoint(ctx.bbox, p.x - dotR, p.y - dotR);
    includePoint(ctx.bbox, p.x + dotR, p.y + dotR);
  }
}

/** Center crosshair + 0° (12 o'clock) reference tick shared by the front and rear views. */
function pushDatumMarkers(ctx: DrawContext): void {
  const cross = Math.max(1, ctx.refOuter * 0.05);
  pushElement(ctx, {
    layer: "datum-axis",
    kind: "line",
    attrs: { x1: -cross, y1: 0, x2: cross, y2: 0 },
    category: "datum",
    status: "official",
    fill: false,
    sortAngle: -2,
    sortKey: "datum-cross-h",
  });
  pushElement(ctx, {
    layer: "datum-axis",
    kind: "line",
    attrs: { x1: 0, y1: -cross, x2: 0, y2: cross },
    category: "datum",
    status: "official",
    fill: false,
    sortAngle: -1,
    sortKey: "datum-cross-v",
  });
  const tickOuter = ctx.refOuter * 1.06;
  const a = polarToCartesian(0, 0, ctx.refOuter, 0);
  const b = polarToCartesian(0, 0, tickOuter, 0);
  pushElement(ctx, {
    layer: "datum-axis",
    kind: "line",
    attrs: { x1: a.x, y1: a.y, x2: b.x, y2: b.y },
    category: "datum",
    status: "official",
    fill: false,
    sortAngle: 0,
    sortKey: "datum-zero-tick",
  });
  includePoint(ctx.bbox, b.x, b.y);
}

/* ── profile selection ── */

/** A feature belongs to the figure when it is in the base profile or the selected variant. */
function profilePredicate(spec: MountSpec, selectedProfileId: string): (profileId: string) => boolean {
  const base = spec.mvp.profileModel.baseProfileId;
  return (profileId: string) => profileId === base || profileId === selectedProfileId;
}

/* ── reference radii ── */

function referenceRadii(spec: MountSpec, side: "camera" | "lens"): { refOuter: number; throatR: number } {
  const outerDia =
    side === "camera" ? spec.coreDimensions.cameraMountOuterDiameterMm : spec.coreDimensions.lensMountOuterDiameterMm;
  const throatR = numberOr(spec.coreDimensions.nominalThroatDiameterMm, NaN) / 2;
  const ringR = numberOr(outerDia, NaN) / 2;
  const refOuter = isFinite(ringR) ? ringR : isFinite(throatR) ? throatR * 1.25 : 28;
  return { refOuter, throatR: isFinite(throatR) ? throatR : refOuter * 0.8 };
}

/* ── doc assembly ── */

function viewLabel(view: MountView): string {
  if (view === "camera_side_front") return "camera-side front view";
  if (view === "lens_side_rear") return "lens-side rear view";
  return "axial / register schematic";
}

function profileSlug(profileId: string): string {
  const slash = profileId.indexOf("/");
  return slash >= 0 ? profileId.slice(slash + 1) : profileId;
}

function mechanismLabel(mechanism: MountMechanism): string {
  return mechanism.replace(/_/g, "-");
}

function buildLegend(elements: MountSvgElement[]): MountLegendEntry[] {
  const present = new Set<MountFeatureCategory>(elements.map((el) => el.category));
  return CATEGORY_LEGEND_ORDER.filter((category) => present.has(category)).map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    color: categoryColor(category),
  }));
}

function groupAndOrderLayers(elements: MountSvgElement[]): MountSvgLayerGroup[] {
  const groups: MountSvgLayerGroup[] = [];
  for (const name of MOUNT_LAYER_ORDER) {
    const layerEls = elements
      .filter((el) => el.layer === name)
      .sort((a, b) => a.sortAngle - b.sortAngle || (a.sortKey < b.sortKey ? -1 : a.sortKey > b.sortKey ? 1 : 0));
    if (layerEls.length > 0) groups.push({ name, elements: layerEls });
  }
  return groups;
}

/**
 * Render one mount view into a fully-resolved SVG document.
 *
 * @param spec — normalized mount spec
 * @param selectedProfileId — the variant to overlay on the base (or the base id for base-only)
 * @param view — which of the three views to render
 */
export function buildMountSvgDoc(spec: MountSpec, selectedProfileId: string, view: MountView): MountSvgDoc {
  const elements: MountSvgElement[] = [];
  const bbox = emptyBBox();
  const inProfile = profilePredicate(spec, selectedProfileId);

  if (view === "axial_section") {
    accumulateAxialSection(spec, elements, bbox);
  } else {
    const mirror = view === "lens_side_rear";
    const side = mirror ? "lens" : "camera";
    const { refOuter, throatR } = referenceRadii(spec, side);
    const ctx: DrawContext = {
      elements,
      bbox,
      angleOf: mirror ? mirrorAngleDeg : (deg: number) => deg,
      mirror,
      refOuter,
      throatR,
    };
    // Seed the bounds with the reference ring so the figure is always bounded.
    includeCircle(bbox, 0, 0, refOuter);
    pushDatumMarkers(ctx);

    if (mirror) {
      for (const f of spec.lensSideFeatures) {
        if (inProfile(f.profileId)) drawFeature(ctx, lensFeatureToDraw(f));
      }
      for (const c of spec.contacts) {
        if (c.side === "lens" && inProfile(c.profileId)) drawContact(ctx, c, "lens-side-variant-electrical");
      }
      for (const c of spec.mechanicalCouplings) {
        if ((c.side === "lens" || c.side === "both") && inProfile(c.profileId))
          drawCoupling(ctx, c, "lens-side-variant-mechanical");
      }
      for (const sg of spec.screwsGasketsBaffles) {
        if (sg.side === "lens" || sg.side === "both") drawScrewsGaskets(ctx, sg, "lens-side-metal");
      }
    } else {
      for (const f of spec.cameraSideFeatures) {
        if (inProfile(f.profileId)) drawFeature(ctx, cameraFeatureToDraw(f));
      }
      for (const c of spec.contacts) {
        if (c.side === "body" && inProfile(c.profileId)) drawContact(ctx, c, "camera-side-variant-electrical");
      }
      for (const c of spec.mechanicalCouplings) {
        if ((c.side === "body" || c.side === "both") && inProfile(c.profileId))
          drawCoupling(ctx, c, "camera-side-variant-mechanical");
      }
      for (const sg of spec.screwsGasketsBaffles) {
        if (sg.side === "body" || sg.side === "both") drawScrewsGaskets(ctx, sg, "camera-side-metal");
      }
    }
  }

  const ffd = numberOr(spec.coreDimensions.flangeFocalDistanceMm, NaN);
  const throat = numberOr(spec.coreDimensions.nominalThroatDiameterMm, NaN);
  const ffdText = isFinite(ffd) ? `${ffd} mm` : "unknown";
  const throatText = isFinite(throat) ? `${throat} mm` : "unknown";
  const slug = profileSlug(selectedProfileId);
  const idBase = `${spec.mountId}-${slug}-${view}`;
  const title = `${spec.displayLabel} mount — ${viewLabel(view)} (${slug})`;
  const desc =
    `${spec.displayLabel} ${mechanismLabel(spec.mechanism)} mount, ${viewLabel(view)}. ` +
    `Flange focal distance ${ffdText}, nominal throat ${throatText}. Profile ${selectedProfileId}.`;

  return {
    schemaVersion: spec.schemaVersion,
    mountId: spec.mountId,
    profileId: selectedProfileId,
    view,
    viewBox: computeViewBox(bbox),
    title,
    desc,
    titleId: `${idBase}-title`,
    descId: `${idBase}-desc`,
    layers: groupAndOrderLayers(elements),
    legend: buildLegend(elements),
  };
}
