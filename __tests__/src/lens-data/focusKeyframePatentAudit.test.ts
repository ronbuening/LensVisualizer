import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { zoomIndexToT } from "../../../src/optics/internal/lensState.js";
import { thick } from "../../../src/optics/layout.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true });

describe("patent focus-keyframe audit", () => {
  it("keeps every audited keyframe exact in the runtime interpolation path", () => {
    const keyframed = Object.entries(modules).filter(([, { default: data }]) => data.focusPositions !== undefined);

    expect(keyframed).toHaveLength(55);

    for (const [path, { default: data }] of keyframed) {
      const L = buildLens(data as LensData);
      const focusPositions = data.focusPositions!;

      for (const [label, authoredRange] of Object.entries(data.var ?? {})) {
        const zoomRanges = Array.isArray(authoredRange[0])
          ? (authoredRange as number[][])
          : [authoredRange as number[]];

        for (let zoomIndex = 0; zoomIndex < zoomRanges.length; zoomIndex++) {
          const zoomT = zoomIndexToT(zoomIndex, zoomRanges.length);
          for (let focusIndex = 0; focusIndex < focusPositions.length; focusIndex++) {
            expect(
              thick(L.labelIdx[label], focusPositions[focusIndex], zoomT, L),
              `${path}: ${label} zoom ${zoomIndex} focus ${focusIndex}`,
            ).toBeCloseTo(zoomRanges[zoomIndex][focusIndex], 11);
          }
        }
      }
    }
  });

  it("retains representative reversing and reconstructed-source states", () => {
    const byKey = new Map(Object.values(modules).map(({ default: data }) => [data.key, data]));

    expect(byKey.get("nikon-ai-af-micro-nikkor-105mm-f28s")?.var?.["15"]).toEqual([10, 7.238, 10]);
    expect(byKey.get("nikon-af-micro-nikkor-200mm-f4d")?.var?.["5"]).toEqual([6.6432, 14.2044, 6.6432]);
    expect(byKey.get("olympus-zuiko-auto-macro-90f2")?.var?.["18"]).toEqual([
      39.8578, 46.59164864864865, 69.56894054054054,
    ]);
    expect(byKey.get("sigma-35-f14-dgdn-art")?.var?.STO).toEqual([3.9908, 4.8959, 10.8551]);
    expect(byKey.get("vivitar-series-1-135mm-f2-3")?.var?.["10"]).toEqual([0.87, 10.4, 21.081081]);
  });
});
