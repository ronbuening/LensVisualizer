/** Canonical pair merge; keeps source echoes beside the remapped surfaces and media. */
import type { AnnotationData } from "../../types/optics.js";
import type { TeleconverterGeometry } from "../../types/teleconverter.js";
import type { CanonicalLens, CanonicalTeleconverter, IngestedPrescription } from "./canonical.js";
import { TELECONVERTER_LABEL_PREFIX as PREFIX } from "./teleconverterCompatibility.js";

/**
 * Append a converter before first-order metadata is rescaled by the public composer.
 *
 * @param host - ingested host, including schema defaults and source echoes
 * @param converter - ingested converter
 * @param geometry - compatible junction and image gaps in mm
 * @returns independent canonical pair with a display and plate-placement descriptor
 */
export function composeTeleconverter(
  host: IngestedPrescription<CanonicalLens>,
  converter: IngestedPrescription<CanonicalTeleconverter>,
  geometry: TeleconverterGeometry,
): IngestedPrescription<CanonicalLens> {
  const result = structuredClone(host);
  const lens = result.prescription;
  const tc = structuredClone(converter.prescription);
  const surfaceOffset = lens.surfaces.length;
  const elementOffset = lens.elements.length;
  const idOffset = Math.max(0, ...lens.elements.map((element) => element.id));
  const label = (value: string) => `${PREFIX}${value}`;
  const last = lens.surfaces[surfaceOffset - 1];
  const mediumIds = new Map<string, string>();
  for (const medium of tc.media) {
    let found = lens.media.find((candidate) => Object.is(candidate.nd, medium.nd));
    if (!found) {
      found = { id: `m${lens.media.length + 1}`, nd: medium.nd };
      lens.media.push(found);
    }
    mediumIds.set(medium.id, found.id);
  }
  last.d += geometry.lastGapShiftMm;
  for (const gap of lens.gaps) {
    if (gap.surface !== last.label) continue;
    gap.values = gap.values.map((row) => row.map((value) => value + geometry.lastGapShiftMm));
    if (geometry.platesAhead === 0 && gap.label !== undefined) gap.label = "D(TC)";
  }
  for (const gap of lens.aberrationControl?.gaps ?? []) {
    if (gap.surface === last.label) {
      const shift = <T>(value: T): T =>
        (Array.isArray(value) ? value.map(shift) : (value as number) + geometry.lastGapShiftMm) as T;
      gap.values = shift(gap.values);
    }
  }
  if (geometry.platesAhead > 0) lens.rearPlates![geometry.platesAhead - 1].gapAfterMm = geometry.plateJunctionGapMm!;
  lens.surfaces.push(
    ...tc.surfaces.map((surface, index) => ({
      ...surface,
      label: label(surface.label),
      medium:
        typeof surface.medium === "number"
          ? surface.medium + idOffset
          : typeof surface.medium === "string"
            ? mediumIds.get(surface.medium)!
            : null,
      d: index === tc.surfaces.length - 1 ? geometry.finalGapMm : surface.d,
    })),
  );
  lens.elements.push(
    ...tc.elements.map((element) => ({
      ...element,
      id: element.id + idOffset,
      diagramLabel: element.diagramLabel ?? `T${element.id}`,
      ...(element.span ? { span: element.span.map(label) as [string, string] } : {}),
      ...(element.cemented !== undefined ? { cemented: `${PREFIX} ${element.cemented}` } : {}),
    })),
  );
  const taken = new Set([
    ...(lens.doublets ?? []).map((annotation) => annotation.text),
    ...lens.elements.slice(elementOffset).flatMap((element) => element.diagramLabel ?? []),
  ]);
  const annotation = (entry: AnnotationData): AnnotationData => ({
    text: taken.has(entry.text) ? `${PREFIX} ${entry.text}` : entry.text,
    fromSurface: label(entry.fromSurface),
    toSurface: label(entry.toSurface),
  });
  if (lens.doublets || tc.doublets) lens.doublets = [...(lens.doublets ?? []), ...(tc.doublets ?? []).map(annotation)];
  if (lens.groups?.length)
    lens.groups.push({
      text: `${PREFIX} ${tc.magnification}×`,
      fromSurface: label(tc.surfaces[0].label),
      toSurface: label(tc.surfaces[tc.surfaces.length - 1].label),
    });
  delete lens.catalog.acceptsTeleconverters;
  delete lens.catalog.opticalConfiguration;
  result.attachedTeleconverter = {
    key: tc.key,
    name: tc.name,
    magnification: tc.magnification,
    hostKey: lens.key,
    hostName: lens.name,
    firstSurfaceLabel: label(tc.surfaces[0].label),
    lastSurfaceLabel: label(tc.surfaces[tc.surfaces.length - 1].label),
    firstElementId: idOffset + Math.min(...tc.elements.map((element) => element.id)),
    ...(geometry.platesAhead > 0 ? { platesAhead: geometry.platesAhead } : {}),
    ...(tc.source.patentNumber !== undefined ? { patentNumber: tc.source.patentNumber } : {}),
    ...(tc.source.authors !== undefined ? { patentAuthors: tc.source.authors } : {}),
  };
  const remapPath = (path: string) =>
    path.replace(
      /^(surfaces|elements)\[(\d+)\]/,
      (_, kind: string, index: string) =>
        `${kind}[${Number(index) + (kind === "surfaces" ? surfaceOffset : elementOffset)}]`,
    );
  const belongsToPair = (path: string) => /^(surfaces|elements)\[/.test(path);
  if (converter.provenance.v1?.emptyContainers.includes("asph")) {
    result.provenance.v1 ??= { emptyContainers: [] };
    if (!result.provenance.v1.emptyContainers.includes("asph")) result.provenance.v1.emptyContainers.push("asph");
  }
  result.provenance.defaulted.push(...converter.provenance.defaulted.filter(belongsToPair).map(remapPath));
  for (const [path, value] of Object.entries(converter.provenance.ignored)) {
    if (belongsToPair(path)) result.provenance.ignored[remapPath(path)] = structuredClone(value);
  }
  return result;
}
