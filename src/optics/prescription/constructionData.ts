/** Numeric construction columns for the compiler and validator, never a source-preserving V1 file view. */
import type { ElementData, SurfaceData } from "../../types/optics.js";
import type { LensConstructionData } from "../types.js";
import type { CanonicalElement, CanonicalLens, CanonicalProvenance } from "./canonical.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";

/** Display metadata preserves whether the source supplied a reference line or APD claim. */
export function elementDisplayData(
  element: CanonicalElement,
  index: number,
  provenance?: CanonicalProvenance,
): ElementData {
  const { focalLengthMm, span, ...fields } = element;
  const out: ElementData = {
    ...fields,
    ...(focalLengthMm !== undefined ? { fl: focalLengthMm } : {}),
    ...(span ? { fromSurface: span[0], toSurface: span[1] } : {}),
  };
  if (provenance?.defaulted.includes(`elements[${index}].indexReference`)) delete out.indexReference;
  if (provenance?.defaulted.includes(`elements[${index}].apd`)) delete out.apd;
  return out;
}

/** Resolve optical notation to numeric columns; all values come from the canonical prescription. */
export function canonicalConstructionData(lens: CanonicalLens): LensConstructionData {
  const { catalog, source, zoom, focus, aperture } = lens;
  const list = <T>(values: (T | undefined)[] | undefined): T[] | undefined =>
    values?.every((value) => value !== undefined) ? (values as T[]) : undefined;
  const labels = <T extends { surface: string; label?: string }>(gaps: T[]): [string, string][] =>
    gaps.flatMap((gap) => (gap.label === undefined ? [] : [[gap.surface, gap.label] as [string, string]]));
  const stationLabels = zoom?.stations.map((station) => station.label);
  const zoomLabels = stationLabels?.some((label) => label !== undefined)
    ? stationLabels.filter((label): label is string => label !== undefined)
    : undefined;
  const control = lens.aberrationControl;
  const { focalLengthMm: _focalLength, fNumber: _fNumber, ...catalogFields } = catalog;
  const surfaces: SurfaceData[] = lens.surfaces.map((surface) => {
    const { medium, asphere: _asphere, R, ...fields } = surface;
    const nd =
      medium === null
        ? 1
        : typeof medium === "number"
          ? lens.elements.find((element) => element.id === medium)!.nd
          : lens.media.find((entry) => entry.id === medium)!.nd;
    return {
      ...fields,
      R: R === "flat" ? 1e15 : R,
      nd,
      elemId: typeof medium === "number" ? medium : 0,
      sd: surface.sd!,
    };
  });
  return {
    key: lens.key,
    maker: lens.maker,
    name: lens.name,
    subtitle: lens.subtitle,
    visible: lens.visible,
    publishedAt: lens.publishedAt,
    ...catalogFields,
    focalLengthMarketing: catalog.focalLengthMm?.marketing,
    focalLengthDesign: catalog.focalLengthMm?.design,
    apertureMarketing: catalog.fNumber?.marketing,
    apertureDesign: catalog.fNumber?.design,
    patentNumber: source.patentNumber,
    patentYear: source.patentYear,
    patentAuthors: source.authors,
    patentAssignees: source.assignees,
    sourceErrata: source.errata,
    elements: lens.elements.map((element) => elementDisplayData(element, 0)),
    surfaces,
    rearPlates: lens.rearPlates,
    projection: lens.projection,
    opticalPath: lens.opticalPath,
    perspectiveControl: lens.perspectiveControl,
    nominalFno: aperture.nominalFNumber ?? list(zoom?.stations.map((station) => station.nominalFNumber)),
    closeFocusM: focus.closeFocusM,
    focusPositions: focus.keyframes,
    focusStep: focus.step,
    focusDescription: focus.description,
    finiteConjugates: focus.conjugates?.map((conjugate) => ({
      focusT: focus.keyframes[conjugate.keyframe],
      zoomT: zoom && zoom.stations.length > 1 ? conjugate.zoomStation / (zoom.stations.length - 1) : 0,
      objectDistanceMm: conjugate.objectDistanceMm,
      distanceReference: conjugate.distanceReference,
      source: conjugate.source,
    })),
    publishedStations: zoom
      ? {
          zoom: zoom.stations.flatMap((station, index) => (station.published ? [index] : [])),
          ...(zoom.stations.some((station) => station.publishedFocus.length)
            ? { focus: zoom.stations.map((station) => station.publishedFocus) }
            : {}),
        }
      : focus.published?.length
        ? { focus: focus.published }
        : undefined,
    zoomPositions: zoom?.stations.map((station) => station.focalLengthMm),
    zoomLabels,
    zoomStep: zoom?.step,
    zoomApertureModel: zoom?.apertureModel === "fixed-iris" ? "fixed-iris" : undefined,
    zoomCloseFocusM: list(zoom?.stations.map((station) => station.closeFocusM)),
    zoomStopSemiDiameters: list(zoom?.stations.map((station) => station.stopSemiDiameter)),
    fstopSeries: aperture.fStops,
    maxFstop: aperture.maxFNumber,
    apertureStep: aperture.step,
    apertureBlades: aperture.blades,
    apertureBladeRoundedness: aperture.bladeRoundedness,
    var: Object.fromEntries(
      lens.gaps.map((gap) => [gap.surface, zoom ? gap.values : gap.values[0]]),
    ) as LensConstructionData["var"],
    varLabels: labels(lens.gaps),
    asph: Object.fromEntries(
      lens.surfaces.flatMap((surface) =>
        surface.asphere
          ? [
              [
                surface.label,
                Object.fromEntries(
                  ASPHERIC_COEFFICIENT_SCHEMA.flatMap(({ key, required }) => {
                    const value = surface.asphere![key] ?? (required ? 0 : undefined);
                    return value === undefined ? [] : [[key, value]];
                  }),
                ),
              ],
            ]
          : [],
      ),
    ) as LensConstructionData["asph"],
    aberrationControl: control
      ? {
          label: control.label,
          description: control.description,
          minLabel: control.minLabel,
          centerLabel: control.centerLabel,
          maxLabel: control.maxLabel,
          step: control.step,
          var: Object.fromEntries(control.gaps.map((gap) => [gap.surface, gap.values])),
          varLabels: labels(control.gaps),
        }
      : undefined,
    groups: lens.groups,
    doublets: lens.doublets,
    ...lens.layout,
    ...lens.rays,
    ...lens.checks,
  };
}
