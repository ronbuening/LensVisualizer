import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { thick } from "../../../src/optics/layout.js";
import {
  isOnPublishedStation,
  nearestPublishedStation,
  publishedFocusStations,
  publishedZoomStations,
} from "../../../src/optics/publishedStations.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

/**
 * Data contract for source-published stations.
 *
 * Patent-positions mode steps only through stations the source tabulates. Dense zoom station lists usually mix source
 * rows with solved or sampled control points, so such a lens must say which is which; and every station a lens
 * publishes must land on its authored gap row. The synthetic cases live in optics/publishedStations.test.ts; this
 * sweep proves the contract for the catalog.
 */

/** Authored zoom stations above which a lens must declare its published ones. */
const MAX_UNDECLARED_ZOOM_STATIONS = 3;

describe("published stations", () => {
  it("requires a zoom with a dense station list to declare its source rows", () => {
    const undeclared = Object.values(LENS_CATALOG)
      .filter((data) => (data.zoomPositions?.length ?? 0) > MAX_UNDECLARED_ZOOM_STATIONS)
      .filter((data) => data.publishedStations?.zoom === undefined)
      .map((data) => `${data.key}: ${data.zoomPositions!.length} zoom stations without publishedStations.zoom`);

    expect(undeclared).toEqual([]);
  });

  it("lands every declared station on its authored gap row", () => {
    const declared = Object.values(LENS_CATALOG).filter(
      (data) => data.publishedStations !== undefined || data.finiteConjugates !== undefined,
    );
    expect(declared.length).toBeGreaterThan(0);

    const offenders: string[] = [];
    for (const data of declared) {
      const L = buildLens(data);
      for (const zoomStation of publishedZoomStations(L)) {
        if (!Number.isFinite(zoomStation.focalLengthMm) || !Number.isFinite(zoomStation.fNumber)) {
          offenders.push(`${data.key}: zoom ${zoomStation.index} has no finite focal length or f-number`);
        }
        for (const focusStation of publishedFocusStations(L, zoomStation.index)) {
          const where = `${data.key}: zoom ${zoomStation.index} focus ${focusStation.index}`;
          const snapped = nearestPublishedStation(L, zoomStation.zoomT, focusStation.focusT);
          if (snapped.zoomIndex !== zoomStation.index || snapped.focusIndex !== focusStation.index) {
            offenders.push(`${where}: snaps to zoom ${snapped.zoomIndex} focus ${snapped.focusIndex}`);
          }
          if (!isOnPublishedStation(L, zoomStation.zoomT, focusStation.focusT)) {
            offenders.push(`${where}: not recognized as a station`);
          }
          for (const [label, authoredRange] of Object.entries(data.var ?? {})) {
            const keyframes = (L.isZoom ? (authoredRange as number[][])[zoomStation.index] : authoredRange) as number[];
            const expected = keyframes[focusStation.index];
            const actual = thick(L.labelIdx[label], focusStation.focusT, zoomStation.zoomT, L);
            if (Math.abs(actual - expected) > 1e-11) offenders.push(`${where}: gap ${label} ${actual} != ${expected}`);
          }
        }
      }
    }

    expect(offenders).toEqual([]);
  });
});
