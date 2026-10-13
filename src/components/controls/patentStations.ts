/**
 * patentStations — turns a lens's source-published stations into the labels, notes and stepping rule that
 * DiagramControls shows in patent-positions mode.
 *
 * Pure and React-free: station provenance comes from `src/optics/publishedStations.ts`; this module only decides
 * how a station reads on a button and where focus lands when the zoom station changes.
 */
import { formatDist } from "../../optics/optics.js";
import {
  publishedFocusStations,
  publishedStationAvailability,
  publishedZoomStations,
  STATION_COORDINATE_TOLERANCE,
} from "../../optics/publishedStations.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { StationOption } from "./StationStepper.js";

/** Focal length in mm, to the authored precision used by the zoom slider's endpoint labels. */
function focalLengthLabel(focalLengthMm: number): string {
  return `${Number(focalLengthMm.toFixed(2))} mm`;
}

/**
 * Build one button per published zoom station.
 *
 * @param L - runtime lens object
 * @returns options whose `id` is the index into `zoomPositions`; empty for a prime
 */
export function zoomStationOptions(L: RuntimeLens): StationOption[] {
  if (!L.isZoom) return [];
  return publishedZoomStations(L).map((station) => ({
    id: station.index,
    label: focalLengthLabel(station.focalLengthMm),
    ariaLabel: `Zoom ${focalLengthLabel(station.focalLengthMm)}`,
  }));
}

/**
 * Build one button per published focus station at a zoom station.
 *
 * The distance shown is the focus slider's own label for that keyframe. Only a certified conjugate is a source
 * distance, so the button title says which kind it is.
 *
 * @param L - runtime lens object
 * @param zoomIndex - index into `zoomPositions`; 0 for a prime
 * @param zoomT - canonical zoom slider value of that station [0, 1]
 * @returns options whose `id` is the index into `focusPositions`, infinity first
 */
export function focusStationOptions(L: RuntimeLens, zoomIndex: number, zoomT: number): StationOption[] {
  return publishedFocusStations(L, zoomIndex).map((station) => {
    const label = formatDist(station.focusT, L, zoomT);
    return {
      id: station.index,
      label,
      ariaLabel: station.isInfinity ? "Focus infinity" : `Focus ${label}`,
      title: station.isInfinity
        ? "Infinity focus"
        : station.conjugate
          ? `Source-certified conjugate: ${station.conjugate.source}`
          : "Source-tabulated focus row; the distance is the focus slider's label for it",
    };
  });
}

/**
 * Choose the focus position after stepping to another zoom station.
 *
 * The focus keyframe is kept when the target zoom station publishes the same one; otherwise focus returns to
 * infinity, which every published zoom station has. Object distance is deliberately not preserved: remapping it
 * would land between keyframes.
 *
 * @param L - runtime lens object
 * @param targetZoomIndex - index into `zoomPositions` being stepped to
 * @param focusT - current focus slider value [0 = infinity, 1 = close focus]
 * @returns canonical focus slider value at the target zoom station
 */
export function focusTAfterZoomStep(L: RuntimeLens, targetZoomIndex: number, focusT: number): number {
  const kept = publishedFocusStations(L, targetZoomIndex).find(
    (station) => Math.abs(station.focusT - focusT) < STATION_COORDINATE_TOLERANCE,
  );
  return kept ? kept.focusT : 0;
}

export interface PatentStationNotes {
  /** Line under the zoom stations; undefined when there is nothing to qualify. */
  zoom?: string;
  /** Line under the focus stations; undefined when there is nothing to qualify. */
  focus?: string;
}

/**
 * Explain what the station buttons leave out at the current zoom station.
 *
 * @param L - runtime lens object
 * @param zoomIndex - current index into `zoomPositions`; 0 for a prime
 * @returns always-visible notes for the zoom and focus steppers
 */
export function patentStationNotes(L: RuntimeLens, zoomIndex: number): PatentStationNotes {
  const availability = publishedStationAvailability(L);
  const limit = (kind: string) => availability.limits.find((entry) => entry.kind === kind)?.text;
  const composed = availability.composed
    ? "Teleconverter mounted — host-lens stations, combined focal length and f-number"
    : undefined;

  const zoomParts = [
    availability.zoomStationCount < availability.authoredZoomCount
      ? `${availability.zoomStationCount} of ${availability.authoredZoomCount} modeled zoom positions are source rows`
      : undefined,
    composed,
  ].filter(Boolean);

  const focusStationCount = publishedFocusStations(L, zoomIndex).length;
  const focus =
    limit("focus-infinity-only") ??
    (!L.isZoom ? limit("single-prescription") : undefined) ??
    limit("no-focus-travel") ??
    (focusStationCount <= 1 && L.isZoom
      ? `Close focus is not tabulated at ${focalLengthLabel(L.zoomPositions![zoomIndex])}`
      : undefined);

  return {
    zoom: zoomParts.length > 0 ? zoomParts.join(" · ") : undefined,
    /* A prime has no zoom row, so its converter note rides on the focus row. */
    focus: L.isZoom ? focus : [focus, composed].filter(Boolean).join(" · ") || undefined,
  };
}
