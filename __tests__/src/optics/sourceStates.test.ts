/** Configuration matching must not turn approximate slider positions into certified source geometry. */
import { describe, expect, it } from "vitest";
import { lensSourceStates, resolveLensSourceState, sourceFiniteConjugate } from "../../../src/optics/sourceStates.js";
import type { LensSourceState } from "../../../src/types/optics.js";

const finite: LensSourceState = {
  id: "half-size",
  label: "1:2",
  focusT: 0.7123456789,
  zoomT: 0.5,
  source: "Synthetic source",
  conjugate: {
    kind: "finite",
    objectDistanceMm: 300,
    distanceReference: "first-surface",
    distanceProvenance: "published",
  },
};
describe("source states", () => {
  it("preserves exact coordinates and rejects interpolated and altered geometry", () => {
    const data = { sourceStates: [finite] };
    expect(resolveLensSourceState(data, finite.focusT, 0.5)).toEqual(finite);
    expect(resolveLensSourceState(data, 0.712, 0.5)).toBeUndefined();
    expect(resolveLensSourceState(data, finite.focusT, 0.5001)).toBeUndefined();
    expect(resolveLensSourceState(data, finite.focusT, 0.5, 0.01)).toBeUndefined();
    expect(lensSourceStates({})).toEqual([]);
  });
  it("normalizes legacy entries without changing finite launch values", () => {
    const legacy = sourceFiniteConjugate(finite)!;
    const data = { finiteConjugates: [legacy] };
    expect(sourceFiniteConjugate(resolveLensSourceState(data, finite.focusT, 0.5))).toEqual(legacy);
    expect(lensSourceStates(data)[0].id).toMatch(/^[a-z0-9-]+$/);
    expect(lensSourceStates(data)).toEqual(lensSourceStates(data));
  });
  it("uses the declared conjugate rather than treating coordinate zero as infinity", () => {
    expect(sourceFiniteConjugate({ ...finite, focusT: 0 })?.objectDistanceMm).toBe(300);
    expect(sourceFiniteConjugate({ ...finite, focusT: 1, conjugate: { kind: "infinity" } })).toBeUndefined();
  });
});
