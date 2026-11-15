import { describe, expect, it } from "vitest";
import {
  focusStationOptions,
  focusTAfterZoomStep,
  patentStationNotes,
  zoomStationOptions,
} from "../../../../src/components/controls/patentStations.js";
import { attachFixtureTeleconverter as attachTeleconverter } from "../../optics/constructionFixtures.js";
import type { ZoomVarRange } from "../../../../src/types/optics.js";
import { formatDist, formatDistanceM } from "../../../../src/optics/optics.js";
import { publishedFocusStations } from "../../../../src/optics/publishedStations.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import {
  build,
  buildSimplePositiveElementLens,
  buildVariableStopGapLens,
  teleconverterFixture,
  teleconverterZoomHostData,
} from "../../optics/testLensFixtures.js";

const ZOOM_RANGE: ZoomVarRange = [
  [1, 2],
  [1.5, 2.5],
  [2, 3],
];

describe("patent station labels", () => {
  it("labels zoom stations by their authored focal length and offers none for a prime", () => {
    const zoom = buildVariableStopGapLens(ZOOM_RANGE, "test-labels-zoom", undefined, {
      zoomPositions: [80, 82.5, 85.129],
    });

    expect(zoomStationOptions(zoom)).toEqual([
      { id: 0, label: "80 mm", ariaLabel: "Zoom 80 mm" },
      { id: 1, label: "82.5 mm", ariaLabel: "Zoom 82.5 mm" },
      { id: 2, label: "85.13 mm", ariaLabel: "Zoom 85.13 mm" },
    ]);
    expect(zoomStationOptions(buildSimplePositiveElementLens("test-labels-prime"))).toEqual([]);
  });

  it("labels tabulated rows with the slider's distance and certified conjugates with the source's", () => {
    const source = "Synthetic source table";
    const L = buildVariableStopGapLens([1, 2, 3], "test-labels-focus", [0, 0.5, 1], {
      publishedStations: { focus: [1] },
      finiteConjugates: [{ focusT: 1, zoomT: 0, objectDistanceMm: 500, distanceReference: "image-plane", source }],
    });

    const options = focusStationOptions(L, 0, 0);
    // A tabulated row reads the focus slider's label; the certified conjugate reads the source's 500 mm.
    const slider = formatDist(0.5, L, 0);
    expect(options.map((option) => [option.id, option.label, option.ariaLabel])).toEqual([
      [0, "∞", "Focus infinity"],
      [1, slider, `Focus ${slider}`],
      [2, "50 cm", "Focus 50 cm"],
    ]);
    expect(options[1].title).toContain("Source-tabulated focus row");
    expect(options[2].title).toBe(`Source-certified conjugate; the distance is the source's: ${source}`);
    const solved = buildVariableStopGapLens([1, 2, 3], "test-labels-solved", [0, 0.5, 1], {
      publishedStations: { focus: [1] },
      finiteConjugates: [
        {
          focusT: 1,
          zoomT: 0,
          objectDistanceMm: 500,
          distanceReference: "first-surface",
          sourceMagnification: "0.10",
          source,
        },
      ],
    });
    expect(focusStationOptions(solved, 0, 0)[2].title).toBe(
      `Source-certified conjugate; the distance is solved from the source's magnification: ${source}`,
    );
  });

  it("adds the total track to a certified distance measured from the first surface", () => {
    const L = buildVariableStopGapLens([1, 2], "test-labels-first-surface", undefined, {
      finiteConjugates: [
        { focusT: 1, zoomT: 0, objectDistanceMm: 500, distanceReference: "first-surface", source: "x" },
      ],
    });
    const station = publishedFocusStations(L, 0)[1];
    const state = prepareRuntimeState(L, 1, 0);
    expect(station.certifiedDistanceM).toBeCloseTo((500 + state.imgZ - state.z[0]) / 1000, 12);
    expect(focusStationOptions(L, 0, 0)[1].label).toBe(formatDistanceM(station.certifiedDistanceM!));
  });
});

describe("focus after a zoom step", () => {
  it("keeps a focus row the target station also tabulates and otherwise returns to infinity", () => {
    const L = buildVariableStopGapLens(ZOOM_RANGE, "test-step-focus", undefined, {
      publishedStations: { focus: [[1], [], [1]] },
    });

    expect(focusTAfterZoomStep(L, 2, 1)).toBe(1);
    expect(focusTAfterZoomStep(L, 1, 1)).toBe(0);
    expect(focusTAfterZoomStep(L, 2, 0)).toBe(0);
  });
});

describe("patent station notes", () => {
  it("counts source rows when other zoom stations are modeled, and names a station without close focus", () => {
    const L = buildVariableStopGapLens(ZOOM_RANGE, "test-notes-subset", undefined, {
      publishedStations: { zoom: [0, 2], focus: [[1], [], []] },
    });

    expect(patentStationNotes(L, 0)).toEqual({ zoom: "2 of 3 modeled zoom positions are source rows" });
    expect(patentStationNotes(L, 2).focus).toBe("Close focus is not tabulated at 100 mm");
  });

  it("says when no close-focus row is certified, when focus is not modeled, and when a prime has one prescription", () => {
    const unflagged = buildVariableStopGapLens(ZOOM_RANGE, "test-notes-unflagged");
    const zoomOnly = buildVariableStopGapLens(
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      "test-notes-zoom-only",
    );

    expect(patentStationNotes(unflagged, 0)).toEqual({
      focus: "No close-focus position is certified as source-tabulated",
    });
    expect(patentStationNotes(zoomOnly, 0)).toEqual({ focus: "Focus travel is not modeled" });
    expect(patentStationNotes(buildSimplePositiveElementLens("test-notes-prime"), 0)).toEqual({
      focus: "Single patent prescription — no other tabulated positions",
    });
  });

  it("flags a converter-mounted system on the zoom row", () => {
    const composed = build(attachTeleconverter(teleconverterZoomHostData(), teleconverterFixture()));
    expect(patentStationNotes(composed, 0).zoom).toBe(
      "Teleconverter mounted — host-lens stations, combined focal length and f-number",
    );
  });
});
