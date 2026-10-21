/**
 * Teleconverter composition — builds the host + converter prescription that `buildLens()` consumes.
 *
 * `attachTeleconverter()` returns a canonical lens: host surfaces, the junction gap, then the converter's
 * surfaces. Nothing downstream is converter-aware; the exact tracer, prepared states and every analysis see one
 * sequential lens whose stop is the host's. The composed data carries an `attachedTeleconverter` descriptor so the
 * UI can label the converter. Authored V2 inputs are ingested before composition.
 *
 * Fit rules and spacing live in `teleconverterCompatibility.ts`; this module does the merge and the first-order
 * rescale of the host metadata that `buildLens()` trusts (`nominalFno`, design focal length, f-stop series).
 */

import type { LensDataV2Input, TeleconverterDataV2Input } from "../../types/lensDataV2.js";
import type { AnnotationData, ElementData, LensData, LensProjectionConfig, SurfaceData } from "../../types/optics.js";
import type {
  TeleconverterData,
  TeleconverterGeometry,
  TeleconverterIncompatibility,
} from "../../types/teleconverter.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../utils/catalog/lensTaxonomy.js";
import { projectionFieldAngleForImageHeight, projectionImageHeightForAngle } from "../field/projection.js";
import { buildLabelIndex } from "./compileLabels.js";
import { buildStateSurfaces } from "../state/layout.js";
import { buildVarIndex } from "./compileControls.js";
import { zoomIndexToT } from "../state/stationTables.js";
import { traceParaxialSurfaces as traceSurfacesParaxial } from "../math/paraxial.js";
import { ingestTeleconverter } from "./ingestV2.js";
import { canonicalForView } from "./identity.js";
import { canonicalInput } from "./canonicalInput.js";
import type { CanonicalLens, CanonicalTeleconverter, IngestedPrescription } from "./canonical.js";
import { canonicalConstructionData } from "./constructionData.js";
import { expandCanonicalRearPlates } from "./rearPlates.js";
import { associateCanonical } from "./identity.js";
import { composeTeleconverter } from "./composeTeleconverter.js";
import {
  TELECONVERTER_LABEL_PREFIX,
  teleconverterCompatibility as fitTeleconverter,
} from "./teleconverterCompatibility.js";

/** Composition descriptors live beside canonical prescriptions, outside their semantic content. */
export function teleconverterCompatibility(
  host: Parameters<typeof fitTeleconverter>[0],
  tc: Parameters<typeof fitTeleconverter>[1],
) {
  if (canonicalForView(host)?.attachedTeleconverter) return { ok: false as const, reason: "stacked" as const };
  return fitTeleconverter(host, tc);
}

/** Readout label for the host's last gap once it ends at the converter instead of the image plane. */
const JUNCTION_GAP_LABEL = "D(TC)";

/** Thrown when a converter cannot be composed onto a host; `reason` is the failing fit rule. */
export class TeleconverterAttachError extends Error {
  readonly reason: TeleconverterIncompatibility | "first-order";

  constructor(hostKey: string, tcKey: string, reason: TeleconverterIncompatibility | "first-order") {
    super(`Teleconverter "${tcKey}" cannot be attached to lens "${hostKey}": ${reason}`);
    this.name = "TeleconverterAttachError";
    this.reason = reason;
  }
}

/**
 * Composed surface label for a converter surface.
 *
 * @param label - surface label as authored in the teleconverter file
 * @returns label unique within the composed prescription
 */
export function teleconverterSurfaceLabel(label: string): string {
  return `${TELECONVERTER_LABEL_PREFIX}${label}`;
}

/**
 * Compact group-row label for an attached converter, e.g. "TC 1.4×".
 *
 * @param magnification - nominal focal-length multiplier
 * @returns diagram label
 */
export function teleconverterGroupLabel(magnification: number): string {
  return `${TELECONVERTER_LABEL_PREFIX} ${magnification}×`;
}

/** Add a constant to every thickness in a scalar, focus vector, or zoom table of focus vectors. */
function shiftThicknessRange<T>(range: T, shiftMm: number): T {
  if (typeof range === "number") return (range + shiftMm) as T;
  if (Array.isArray(range)) return range.map((entry) => shiftThicknessRange(entry, shiftMm)) as T;
  return range;
}

function round(value: number, decimals: number): number {
  const scale = 10 ** decimals;
  return Math.round(value * scale) / scale;
}

/**
 * Merge a converter's prescription behind a host's, without touching first-order metadata.
 *
 * Untrusted teleconverter validation merges behind a powerless reference host before ingest can succeed.
 * Production composition uses canonical records in `composeTeleconverter.ts`.
 *
 * - The host's last gap (scalar, focus/zoom table and aberration-control entry) becomes the junction gap. When a
 *   lens-side plate sits ahead of the converter the last gap is left alone — it still ends at that plate — and
 *   the junction becomes that plate's trailing gap instead.
 * - Converter labels get the reserved prefix and element ids continue after the host's, so every label- and
 *   id-keyed map (`asph`, `var`, annotations, element selection) stays unambiguous.
 * - Host `rearPlates` are kept: `expandCanonicalRearPlates()` emits the `platesAhead` leading ones in front of the
 *   converter and the rest behind its last surface.
 *
 * @param host - host lens data
 * @param tc - teleconverter data
 * @param geometry - spacing from `teleconverterGeometry()`
 * @returns host data with the converter's surfaces, elements and annotations appended
 */
export function mergeTeleconverterPrescription(
  host: LensData,
  tc: TeleconverterData,
  geometry: TeleconverterGeometry,
): LensData {
  const hostLast = host.surfaces[host.surfaces.length - 1];
  const junctionLabel = hostLast.label;
  const idOffset = Math.max(0, ...host.elements.map((element) => element.id));
  const lastTcIndex = tc.surfaces.length - 1;
  const { platesAhead } = geometry;
  /* With a plate ahead, the label the host gives its last gap ("BF", "to plate") is still accurate. */
  const junctionIsLastGap = platesAhead === 0;
  const rearPlates =
    platesAhead > 0 && host.rearPlates
      ? host.rearPlates.map((plate, index) =>
          index === platesAhead - 1 ? { ...plate, gapAfterMm: geometry.plateJunctionGapMm! } : plate,
        )
      : host.rearPlates;

  const surfaces: SurfaceData[] = [
    ...host.surfaces.slice(0, -1),
    { ...hostLast, d: hostLast.d + geometry.lastGapShiftMm },
    ...tc.surfaces.map((surface, index) => ({
      ...surface,
      label: teleconverterSurfaceLabel(surface.label),
      elemId: surface.elemId === 0 ? 0 : surface.elemId + idOffset,
      d: index === lastTcIndex ? geometry.finalGapMm : surface.d,
    })),
  ];

  /* Cemented tags are matched across the whole element list, so a converter "D1" must not pair with a host "D1". */
  const elements: ElementData[] = [
    ...host.elements,
    ...tc.elements.map((element) => ({
      ...element,
      id: element.id + idOffset,
      diagramLabel: element.diagramLabel ?? `T${element.id}`,
      ...(element.cemented !== undefined ? { cemented: `${TELECONVERTER_LABEL_PREFIX} ${element.cemented}` } : {}),
    })),
  ];

  const remapAnnotation = (annotation: AnnotationData, takenText: Set<string>): AnnotationData => ({
    /* Annotation text doubles as a React key in the diagram, so it must stay unique. */
    text: takenText.has(annotation.text) ? `${TELECONVERTER_LABEL_PREFIX} ${annotation.text}` : annotation.text,
    fromSurface: teleconverterSurfaceLabel(annotation.fromSurface),
    toSurface: teleconverterSurfaceLabel(annotation.toSurface),
  });
  /* A converter triplet authored "T1" would otherwise repeat the composed element label "T1" on the diagram. */
  const takenDoubletText = new Set([
    ...(host.doublets ?? []).map((annotation) => annotation.text),
    ...elements.slice(host.elements.length).flatMap((element) => element.diagramLabel ?? []),
  ]);
  const doublets =
    host.doublets || tc.doublets
      ? [
          ...(host.doublets ?? []),
          ...(tc.doublets ?? []).map((annotation) => remapAnnotation(annotation, takenDoubletText)),
        ]
      : undefined;

  /* Authored groups replace the group-movement overlay's element-span fallback, so a converter group is added only
   * when the host already authors groups; otherwise the overlay would show the converter alone. */
  const groups =
    host.groups && host.groups.length > 0
      ? [
          ...host.groups,
          {
            text: teleconverterGroupLabel(tc.magnification),
            fromSurface: teleconverterSurfaceLabel(tc.surfaces[0].label),
            toSurface: teleconverterSurfaceLabel(tc.surfaces[lastTcIndex].label),
          },
        ]
      : host.groups;

  const tcAsph = Object.fromEntries(
    Object.entries(tc.asph ?? {}).map(([label, coefficients]) => [teleconverterSurfaceLabel(label), coefficients]),
  );

  const merged: LensData = {
    ...host,
    surfaces,
    elements,
    attachedTeleconverter: {
      key: tc.key,
      name: tc.name,
      magnification: tc.magnification,
      hostKey: host.key,
      hostName: host.name,
      firstSurfaceLabel: teleconverterSurfaceLabel(tc.surfaces[0].label),
      lastSurfaceLabel: teleconverterSurfaceLabel(tc.surfaces[lastTcIndex].label),
      firstElementId: idOffset + Math.min(...tc.elements.map((element) => element.id)),
      ...(platesAhead > 0 ? { platesAhead } : {}),
      ...(tc.patentNumber !== undefined ? { patentNumber: tc.patentNumber } : {}),
      ...(tc.patentAuthors !== undefined ? { patentAuthors: tc.patentAuthors } : {}),
    },
    ...(host.asph || tc.asph ? { asph: { ...host.asph, ...tcAsph } } : {}),
    ...(host.var && junctionLabel in host.var
      ? { var: { ...host.var, [junctionLabel]: shiftThicknessRange(host.var[junctionLabel], geometry.lastGapShiftMm) } }
      : {}),
    ...(host.aberrationControl && junctionLabel in host.aberrationControl.var
      ? {
          aberrationControl: {
            ...host.aberrationControl,
            var: {
              ...host.aberrationControl.var,
              [junctionLabel]: shiftThicknessRange(host.aberrationControl.var[junctionLabel], geometry.lastGapShiftMm),
            },
          },
        }
      : {}),
    ...(rearPlates ? { rearPlates } : {}),
    ...(host.varLabels && junctionIsLastGap
      ? {
          varLabels: host.varLabels.map(([label, text]): [string, string] =>
            label === junctionLabel ? [label, JUNCTION_GAP_LABEL] : [label, text],
          ),
        }
      : {}),
    ...(groups ? { groups } : {}),
    ...(doublets ? { doublets } : {}),
  };

  /* A composed system is one lens: it takes no second converter and has no sibling configurations. */
  delete merged.acceptsTeleconverters;
  delete merged.opticalConfiguration;
  return merged;
}

/**
 * Gaussian focal length at infinity focus for each zoom station (one entry for a prime).
 *
 * Mirrors the EFL `buildLens()` derives: a unit-height marginal ray traced through the station's surfaces, EFL = −1/u.
 * Rear plates are expanded first, exactly as `buildLens()` does: a plate ahead of the converter sets how far the
 * converter sits behind the host, so tracing the authored surfaces alone would misplace it.
 *
 * The first entry uses the surfaces as authored rather than the resolved `var` table, because that is the trace
 * `buildLens()` sizes the physical stop from. Validation lets an authored `d` differ from its `var` infinity value
 * by up to 1e-6 mm, and resolving the table here would move the stop by that much.
 */
function infinityFocalLengths(input: IngestedPrescription<CanonicalLens>): number[] {
  const data = canonicalConstructionData(expandCanonicalRearPlates(input.prescription, input.attachedTeleconverter));
  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  const stationCount = isZoom ? data.zoomPositions!.length : 1;
  const varByIdx = buildVarIndex(data.var, buildLabelIndex(data.surfaces));
  const focalLengths: number[] = [];
  for (let station = 0; station < stationCount; station++) {
    const surfaces =
      station === 0
        ? data.surfaces
        : buildStateSurfaces(
            data.surfaces,
            varByIdx,
            isZoom,
            0,
            zoomIndexToT(station, stationCount),
            {},
            0,
            data.focusPositions,
          );
    focalLengths.push(-1 / traceSurfacesParaxial(surfaces, 1, 0, { skipLastTransfer: true }).u);
  }
  return focalLengths;
}

/**
 * Narrow a declared rectilinear coverage angle by the focal ratio: tan(ω') = tan(ω) / ratio.
 *
 * Goes through the projection helpers so the tangent mapping stays in one place.
 */
function narrowRectilinearFieldDeg(fieldDeg: number, ratio: number): number {
  const unit = { kind: "rectilinear" as const, label: "", shortLabel: "", focalScaleMm: 1 };
  const imageHeight = projectionImageHeightForAngle(unit, (fieldDeg * Math.PI) / 180);
  return (projectionFieldAngleForImageHeight({ ...unit, focalScaleMm: ratio }, imageHeight) * 180) / Math.PI;
}

function narrowProjection(
  projection: LensProjectionConfig | undefined,
  ratio: number,
): LensProjectionConfig | undefined {
  if (projection?.kind !== "rectilinear") return projection;
  return {
    ...projection,
    /* fullFieldDeg is 2ω, so the half angle is narrowed and doubled back. */
    ...(projection.fullFieldDeg !== undefined
      ? { fullFieldDeg: 2 * narrowRectilinearFieldDeg(projection.fullFieldDeg / 2, ratio) }
      : {}),
    ...(projection.maxTraceFieldDeg !== undefined
      ? { maxTraceFieldDeg: narrowRectilinearFieldDeg(projection.maxTraceFieldDeg, ratio) }
      : {}),
  };
}

/** Numeric header lines for the composed system; host `specs` are free text and describe the bare lens. */
function composedSpecs(
  host: CanonicalLens,
  tc: CanonicalTeleconverter,
  focalLengths: number[],
  fNumbers: number[],
): string[] {
  const specs: string[] = [];
  if (host.catalog.elementCount !== undefined && tc.catalog.elementCount !== undefined) {
    specs.push(
      `${host.catalog.elementCount} + ${tc.catalog.elementCount} elements (lens + ${tc.magnification}× converter)`,
    );
  } else {
    specs.push(`${tc.magnification}× converter attached`);
  }
  const first = focalLengths[0];
  const last = focalLengths[focalLengths.length - 1];
  specs.push(focalLengths.length > 1 ? `f = ${first.toFixed(2)}–${last.toFixed(2)} mm` : `f = ${first.toFixed(2)} mm`);
  if (fNumbers.length > 0) {
    const fastest = Math.min(...fNumbers);
    const slowest = Math.max(...fNumbers);
    specs.push(slowest - fastest > 0.05 ? `f/${fastest.toFixed(2)}–${slowest.toFixed(2)}` : `f/${fastest.toFixed(2)}`);
  }
  return specs;
}

/**
 * Compose a teleconverter onto a host lens.
 *
 * `buildLens()` derives the physical stop from `nominalFno` and the whole-system focal length, so appending a
 * converter would resize the host's iris. To keep the iris fixed, `nominalFno` is rescaled at every zoom station by
 * the exact paraxial ratio r = EFL(composed) / EFL(host): the entrance pupil EFL / (2·Fno) is then unchanged, and the
 * real trace to the stop — which only touches surfaces ahead of it — lands on the same radius.
 *
 * @param host - authored V2 host or canonical lens
 * @param tc - authored V2 converter or canonical converter
 * @returns canonical lens ready for `buildLens()`
 * @throws TeleconverterAttachError when the pair fails a fit rule or has no finite focal ratio
 */
export function attachTeleconverter(
  host: LensDataV2Input | CanonicalLens,
  tc: TeleconverterDataV2Input | CanonicalTeleconverter,
): CanonicalLens {
  const hostInput = canonicalForView(host) ?? canonicalInput(host);
  const converterInput =
    "kind" in tc
      ? { prescription: tc, provenance: { format: 2 as const, defaulted: [], ignored: {} } }
      : ingestTeleconverter(tc);
  const hostLens = hostInput.prescription;
  const converter = converterInput.prescription;
  const fit = teleconverterCompatibility(hostLens, converter);
  if (!fit.ok) throw new TeleconverterAttachError(host.key, tc.key, fit.reason);
  const pair = composeTeleconverter(hostInput, converterInput, fit.geometry);
  const hostFocalLengths = infinityFocalLengths(hostInput);
  const focalLengths = infinityFocalLengths(pair);
  const ratios = focalLengths.map((focalLength, station) => focalLength / hostFocalLengths[station]);
  if (ratios.some((ratio) => !Number.isFinite(ratio) || ratio <= 0)) {
    throw new TeleconverterAttachError(host.key, tc.key, "first-order");
  }

  const firstRatio = ratios[0];
  const lastRatio = ratios[ratios.length - 1];
  const magnification = converter.magnification;
  const hostFno = hostLens.aperture.nominalFNumber ?? hostLens.zoom?.stations.map((station) => station.nominalFNumber!);
  const fNumbers =
    hostFno === undefined
      ? []
      : ratios.map((ratio, station) => (Array.isArray(hostFno) ? hostFno[station] : hostFno) * ratio);

  const scaleFocal = (
    value: number | [number, number],
    wide: number,
    tele: number,
    decimals?: number,
  ): number | [number, number] => {
    const scaled = (focal: number, ratio: number) =>
      decimals === undefined ? focal * ratio : round(focal * ratio, decimals);
    return Array.isArray(value) ? [scaled(value[0], wide), scaled(value[1], tele)] : scaled(value, wide);
  };

  /* The converter moves the image plane back, so image-referenced object distances grow by the same amount. */
  const extensionMm = fit.geometry.extensionMm;
  const extensionM = extensionMm / 1000;
  const formatDiagonal = isImageFormatId(hostLens.catalog.imageFormat)
    ? IMAGE_FORMAT_BY_ID[hostLens.catalog.imageFormat].diagonalMm
    : undefined;

  const lens = pair.prescription;
  lens.key = `${hostLens.key}-x-${converter.key}`;
  lens.name = `${hostLens.name} + ${converter.name}`;
  lens.catalog.specs = composedSpecs(hostLens, converter, focalLengths, fNumbers);
  if (fNumbers.length > 0) {
    if (lens.zoom) {
      delete lens.aperture.nominalFNumber;
      lens.zoom.stations.forEach((station, index) => {
        station.nominalFNumber = fNumbers[index];
      });
    } else lens.aperture.nominalFNumber = fNumbers[0];
  }
  if (hostLens.catalog.focalLengthMm?.design !== undefined)
    lens.catalog.focalLengthMm!.design = scaleFocal(hostLens.catalog.focalLengthMm?.design, firstRatio, lastRatio);
  if (hostLens.catalog.focalLengthMm?.marketing !== undefined)
    lens.catalog.focalLengthMm!.marketing = scaleFocal(
      hostLens.catalog.focalLengthMm?.marketing,
      magnification,
      magnification,
      1,
    );
  lens.zoom?.stations.forEach((station, index) => {
    station.focalLengthMm = round(hostLens.zoom!.stations[index].focalLengthMm * ratios[index], 2);
    if (station.closeFocusM !== undefined) station.closeFocusM += extensionM;
    delete station.label;
  });
  if (hostLens.catalog.fNumber?.marketing !== undefined)
    lens.catalog.fNumber!.marketing = round(hostLens.catalog.fNumber?.marketing * magnification, 1);
  if (hostLens.catalog.fNumber?.design !== undefined)
    lens.catalog.fNumber!.design = hostLens.catalog.fNumber?.design * firstRatio;
  /* Keep the quick-stop filter's rounding and ceiling exactly as on the bare hostLens. */
  lens.aperture.fStops = hostLens.aperture.fStops.map((fStop) => round(fStop * firstRatio, 3));
  lens.aperture.maxFNumber = Math.ceil(hostLens.aperture.maxFNumber * firstRatio * 10 - 1e-9) / 10;
  lens.focus.closeFocusM = hostLens.focus.closeFocusM + extensionM;
  for (const conjugate of lens.focus.conjugates ?? []) {
    if (conjugate.distanceReference === "image-plane") conjugate.objectDistanceMm += extensionMm;
  }
  if (hostLens.catalog.imageCircleMm !== undefined && formatDiagonal !== undefined)
    lens.catalog.imageCircleMm = Math.max(
      hostLens.catalog.imageCircleMm,
      Math.min(hostLens.catalog.imageCircleMm * magnification, formatDiagonal),
    );
  if (hostLens.projection) lens.projection = narrowProjection(hostLens.projection, firstRatio);
  if (hostLens.catalog.elementCount !== undefined && converter.catalog.elementCount !== undefined)
    lens.catalog.elementCount = hostLens.catalog.elementCount + converter.catalog.elementCount;
  if (hostLens.catalog.groupCount !== undefined && converter.catalog.groupCount !== undefined)
    lens.catalog.groupCount = hostLens.catalog.groupCount + converter.catalog.groupCount;
  associateCanonical(lens, pair);
  return lens;
}
