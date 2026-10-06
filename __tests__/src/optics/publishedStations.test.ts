import { describe, expect, it } from "vitest";
import { thick } from "../../../src/optics/optics.js";
import { attachTeleconverter } from "../../../src/optics/prescription/teleconverter.js";
import {
  isOnPublishedStation,
  nearestPublishedStation,
  publishedFocusStations,
  publishedStationAvailability,
  publishedStationGrid,
  publishedZoomStations,
} from "../../../src/optics/publishedStations.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import { focalLengthToZoomT, zoomTToFocalLength } from "../../../src/utils/state/zoomConversion.js";
import type { ZoomVarRange } from "../../../src/types/optics.js";
import {
  build,
  buildSimplePositiveElementLens,
  buildVariableStopGapLens,
  teleconverterFixture,
  teleconverterZoomHostData,
} from "./testLensFixtures.js";

const ZOOM_RANGE: ZoomVarRange = [
  [1, 2],
  [1.5, 2.5],
  [2, 3],
];
const CONJUGATE = {
  focusT: 1,
  zoomT: 0,
  objectDistanceMm: 500,
  distanceReference: "image-plane" as const,
  source: "Synthetic source table",
};

describe("published stations of a prime", () => {
  it("reports a single prescription when no gap moves", () => {
    const L = buildSimplePositiveElementLens("test-stations-fixed-prime");
    const availability = publishedStationAvailability(L);

    expect(publishedZoomStations(L)).toEqual([
      { index: 0, zoomT: 0, focalLengthMm: L.EFL, eflMm: L.EFL, fNumber: L.FOPEN },
    ]);
    expect(publishedFocusStations(L).map((station) => station.focusT)).toEqual([0]);
    expect(availability.available).toBe(false);
    expect(availability.limits.map((limit) => limit.kind)).toEqual(["single-prescription", "no-focus-travel"]);
    expect(nearestPublishedStation(L, 0.7, 0.9)).toEqual({ zoomIndex: 0, zoomT: 0, focusIndex: 0, focusT: 0 });
  });

  it("publishes infinity only until a focus keyframe is flagged", () => {
    const unflagged = buildVariableStopGapLens([1, 3], "test-stations-unflagged-prime");
    const flagged = buildVariableStopGapLens([1, 3], "test-stations-flagged-prime", undefined, {
      publishedStations: { focus: [1] },
    });

    expect(publishedStationAvailability(unflagged).limits.map((limit) => limit.kind)).toEqual([
      "single-prescription",
      "focus-infinity-only",
    ]);
    expect(nearestPublishedStation(unflagged, 0, 1).focusT).toBe(0);

    expect(publishedStationAvailability(flagged)).toMatchObject({ available: true, limits: [], composed: null });
    const stations = publishedFocusStations(flagged);
    expect(stations.map((station) => [station.index, station.focusT, station.isInfinity])).toEqual([
      [0, 0, true],
      [1, 1, false],
    ]);
    expect(stations[0].distanceM).toBeNull();
    expect(stations[1].distanceM).toBeCloseTo(flagged.closeFocusM, 12);
  });

  it("snaps to the nearest flagged keyframe and breaks ties toward infinity", () => {
    const L = buildVariableStopGapLens([1, 2, 3], "test-stations-three-keyframes", [0, 0.4, 1], {
      publishedStations: { focus: [1] },
    });

    expect(nearestPublishedStation(L, 0, 0.9)).toMatchObject({ focusIndex: 1, focusT: 0.4 });
    expect(nearestPublishedStation(L, 0, 0.2)).toMatchObject({ focusIndex: 0, focusT: 0 });
    expect(isOnPublishedStation(L, 0, 0.4)).toBe(true);
    expect(isOnPublishedStation(L, 0, 1)).toBe(false);
    expect(isOnPublishedStation(L, 0, 0.4, 0.5)).toBe(false);
  });

  it("treats a finite conjugate as a published station", () => {
    const L = buildVariableStopGapLens([1, 3], "test-stations-conjugate-prime", undefined, {
      finiteConjugates: [CONJUGATE],
    });

    const stations = publishedFocusStations(L);
    expect(stations.map((station) => station.focusT)).toEqual([0, 1]);
    expect(stations[1].conjugate).toEqual(CONJUGATE);
    expect(stations[0].conjugate).toBeNull();
  });
});

describe("published stations of a zoom", () => {
  it("publishes every authored zoom station at infinity by default", () => {
    const L = buildVariableStopGapLens(ZOOM_RANGE, "test-stations-default-zoom");
    const stations = publishedZoomStations(L);

    expect(stations.map((station) => [station.index, station.zoomT, station.focalLengthMm])).toEqual([
      [0, 0, 24],
      [1, 0.5, 50],
      [2, 1, 100],
    ]);
    stations.forEach((station) => {
      expect(station.fNumber).toBe(L.zoomFOPENs![station.index]);
      expect(station.eflMm).toBe(L.zoomEFLs![station.index]);
      expect(publishedFocusStations(L, station.index).map((focus) => focus.focusT)).toEqual([0]);
    });
    expect(publishedStationAvailability(L)).toMatchObject({
      available: true,
      zoomStationCount: 3,
      authoredZoomCount: 3,
      maxFocusStationCount: 1,
    });
  });

  it("restricts stepping to the listed zoom stations", () => {
    const L = buildVariableStopGapLens(ZOOM_RANGE, "test-stations-zoom-subset", undefined, {
      publishedStations: { zoom: [0, 2] },
    });

    expect(publishedZoomStations(L).map((station) => station.index)).toEqual([0, 2]);
    expect(publishedFocusStations(L, 1)).toEqual([]);
    expect(isOnPublishedStation(L, 0.5, 0)).toBe(false);
    expect(nearestPublishedStation(L, 0.5, 0).zoomIndex).toBe(0);
    expect(nearestPublishedStation(L, 0.6, 0)).toMatchObject({ zoomIndex: 2, zoomT: 1 });
  });

  it("keeps focus keyframes per zoom station", () => {
    const L = buildVariableStopGapLens(ZOOM_RANGE, "test-stations-per-zoom-focus", undefined, {
      publishedStations: { focus: [[1], [], [1]] },
    });

    expect(publishedFocusStations(L, 0).map((station) => station.focusT)).toEqual([0, 1]);
    expect(publishedFocusStations(L, 1).map((station) => station.focusT)).toEqual([0]);
    expect(nearestPublishedStation(L, 0.5, 1)).toEqual({ zoomIndex: 1, zoomT: 0.5, focusIndex: 0, focusT: 0 });
    expect(nearestPublishedStation(L, 1, 0.8)).toEqual({ zoomIndex: 2, zoomT: 1, focusIndex: 1, focusT: 1 });
  });

  it("lands every station on its authored gap row and survives the focal-length URL round trip", () => {
    const range: ZoomVarRange = Array.from({ length: 7 }, (_, station) => [1 + station * 0.37, 2.1 + station * 0.53]);
    const L = buildVariableStopGapLens(range, "test-stations-seven-station-zoom", undefined, {
      zoomPositions: [24, 28, 35, 50, 70, 85, 105],
      nominalFno: [2, 2, 2, 2, 2, 2, 2],
      publishedStations: { zoom: [0, 1, 2, 3, 4, 5, 6], focus: [1] },
    });

    for (const zoomStation of publishedZoomStations(L)) {
      for (const focusStation of publishedFocusStations(L, zoomStation.index)) {
        const station = nearestPublishedStation(L, zoomStation.zoomT, focusStation.focusT);
        expect(station.zoomIndex).toBe(zoomStation.index);
        expect(station.focusIndex).toBe(focusStation.index);
        expect(isOnPublishedStation(L, station.zoomT, station.focusT)).toBe(true);
        expect(thick(L.stopIdx, station.focusT, station.zoomT, L)).toBeCloseTo(
          range[zoomStation.index][focusStation.index],
          11,
        );
      }
      const focalLength = zoomTToFocalLength(zoomStation.zoomT, L)!;
      expect(focalLength).toBeCloseTo(zoomStation.focalLengthMm, 9);
      expect(nearestPublishedStation(L, focalLengthToZoomT(focalLength, L), 0).zoomIndex).toBe(zoomStation.index);
    }
  });
});

describe("published stations from lens data alone", () => {
  it("ignores indices outside the authored stations", () => {
    const grid = publishedStationGrid({
      zoomPositions: [24, 50, 100],
      publishedStations: { zoom: [0, 7], focus: [1, 4] },
    });

    expect(grid.zoom).toEqual([{ index: 0, zoomT: 0 }]);
    expect(grid.focusByZoomIndex).toEqual([
      [
        { index: 0, focusT: 0 },
        { index: 1, focusT: 1 },
      ],
      [],
      [],
    ]);
  });
});

describe("published stations of a converter-mounted system", () => {
  it("keeps the host's stations and reports the pairing", () => {
    const hostData = teleconverterZoomHostData({ publishedStations: { zoom: [0, 2] } });
    const composedData = attachTeleconverter(hostData, teleconverterFixture());
    const host = build(hostData);
    const composed = build(composedData);

    expect(composedData.publishedStations).toEqual({ zoom: [0, 2] });
    expect(validateLensData(composedData)).toEqual([]);
    expect(publishedStationAvailability(host).composed).toBeNull();
    expect(publishedStationAvailability(composed).composed).toEqual({
      teleconverterName: composedData.attachedTeleconverter!.name,
      hostName: hostData.name,
    });

    const hostStations = publishedZoomStations(host);
    const composedStations = publishedZoomStations(composed);
    expect(composedStations.map((station) => [station.index, station.zoomT])).toEqual(
      hostStations.map((station) => [station.index, station.zoomT]),
    );
    composedStations.forEach((station, i) => {
      expect(station.focalLengthMm).toBeGreaterThan(hostStations[i].focalLengthMm);
      expect(station.fNumber).toBeGreaterThan(hostStations[i].fNumber);
    });
  });
});
