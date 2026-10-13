import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true });

/**
 * Data contract for `zoomApertureModel: "fixed-iris"`.
 *
 * A fixed iris keeps the first station's radius, so every other station traces at whatever that radius gives. The
 * declaration is sound only when those are the f-numbers `nominalFno` states, which this sweep reads as the radius
 * traced from each station's f-number staying close to the fixed one. Declared on a zoom whose iris opens with focal
 * length, it would trace slow at the long end under an unchanged readout; this sweep fails instead.
 */

/** Largest share by which a station's traced iris radius may differ from the fixed one. */
const FIXED_IRIS_TOLERANCE = 0.03;

/**
 * Fixed-iris files outside the tolerance, each queued in Section H or I of agent_docs/sd-audit-queue.md. The Nikon
 * states station f-numbers its iris does not give (its patent is not held locally). On the two Vivitar Series 1 zooms
 * the stated tele marginal ray cannot be traced to the stop, so the radius compared with the fixed one is the
 * paraxial fallback. The sweep compares for equality, so a corrected file must leave this list and no file may join.
 */
const FIXED_IRIS_OFF_STATED: readonly string[] = [
  "nikon-af-s-dx-55-200-f4-5-6g-ed-vr-ii",
  "vivitar-s1-35-85-f28",
  "vivitar-s1-70-210-f28-4",
];

describe("zoom aperture model", () => {
  it("declares a fixed iris only where one radius gives the stated f-number at every station", () => {
    const fixedIris = Object.values(modules)
      .map(({ default: data }) => ({ ...LENS_DEFAULTS, ...data }) as LensData)
      .filter((data) => data.zoomApertureModel === "fixed-iris");
    expect(fixedIris.length).toBeGreaterThan(0);

    const offenders = fixedIris.flatMap((data) => {
      const fixedRadius = buildLens(data).stopPhysSD;
      const stationRadii = buildLens({ ...data, zoomApertureModel: undefined }).zoomStopSDs!;
      const worst = Math.max(...stationRadii.map((radius) => Math.abs(radius / fixedRadius - 1)));
      return worst > FIXED_IRIS_TOLERANCE ? [data.key] : [];
    });
    expect(offenders.sort()).toEqual([...FIXED_IRIS_OFF_STATED].sort());
  });
});
