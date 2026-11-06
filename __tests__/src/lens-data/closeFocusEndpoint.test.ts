import { describe, expect, it } from "vitest";
import { CATALOG_CONSTRUCTION_FIXTURES, buildFixtureLens as buildLens } from "../optics/constructionFixtures.js";
import { modeledFocusDistanceAt } from "../../../src/optics/state/fieldAdapters.js";
import { closeFocusAtZoom, zoomIndexToT } from "../../../src/optics/state/stationTables.js";

/**
 * Data contract: the close-focus distance is where the close row focuses.
 *
 * At every zoom station, the focus label at the close end (the close row's paraxial in-focus object-to-image
 * distance) lies within `CLOSE_FOCUS_LABEL_FRACTION` of the authored close-focus distance: the station's own
 * `closeFocusM`, else `focus.closeFocusM`. A maker's production figure that differs belongs in
 * `catalog.closeFocusM.marketing`, which the focus readout names beside the label.
 */

/** Share by which the close row's modeled distance may differ from the authored close-focus distance. */
const CLOSE_FOCUS_LABEL_FRACTION = 0.05;

/**
 * Files whose authored close-focus distance stays off the close row's modeled distance, each with the reason. The
 * sweep compares for equality, so a corrected file must leave this list and no file may join.
 */
const CLOSE_FOCUS_EXEMPT: Readonly<Record<string, string>> = {
  "fujifilm-fujinon-xf-8-16mm-f28-r-lm-wr":
    "source-printed 500 mm-from-image-plane state; two-decimal gap rounding at 8 mm moves the paraxial distance ~6 %",
  "nikon-1-nikkor-vr-10-30mm-f35-56-pd-zoom":
    "source-printed D = 200 mm state; two-decimal gap rounding at 10 mm moves the paraxial distance ~6 %",
  "olympus-zuiko-digital-ed-7-14mm-f4":
    "source-printed 250 mm object-to-image state; the printed +0.069 mm image-plane offset at 7 mm moves it ~8 %",
  "tamron-a062-20-40mm-f28-di-iii-vxd":
    "source-printed 300 mm state at W/M/T; the stations between them are interpolated and illustrative",
};

describe("close-focus endpoint", () => {
  it("keeps every catalog close-focus distance on its close row, but for the listed files", () => {
    const found: string[] = [];
    for (const data of Object.values(CATALOG_CONSTRUCTION_FIXTURES)) {
      const L = buildLens(data);
      const stations = (L.isZoom && L.zoomPositions?.length) || 1;
      for (let zoomIndex = 0; zoomIndex < stations; zoomIndex++) {
        const zoomT = zoomIndexToT(zoomIndex, stations);
        const modeled = modeledFocusDistanceAt(1, L, zoomT);
        if (modeled === null) continue;
        const authored = closeFocusAtZoom(zoomT, L);
        if (Math.abs(modeled / authored - 1) <= CLOSE_FOCUS_LABEL_FRACTION) continue;
        found.push(
          `${data.key} zoom ${zoomIndex}: close row focuses at ${modeled.toFixed(3)} m, authored ${authored} m`,
        );
      }
    }
    const offenders = [...new Set(found.map((line) => line.split(" ")[0]))].sort();
    expect(offenders, found.join("\n")).toEqual(Object.keys(CLOSE_FOCUS_EXEMPT).sort());
  });
});
