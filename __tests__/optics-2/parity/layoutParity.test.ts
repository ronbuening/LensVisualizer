import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { surfaceNormalAtHit } from "../../../src/optics/internal/surfaceIntersection.js";
import { doLayout, renderSag, sagSlope, thick } from "../../../src/optics/optics.js";
import { doLayout2 } from "../../../src/optics-2/compat.js";
import { createSurfaceProfile } from "../../../src/optics-2/math/surfaceProfile.js";
import { length, normalize } from "../../../src/optics-2/math/vector.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { OPTICS_2_PARITY_FIXTURES } from "./parityFixtures.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

function expectFiniteNumber(value: number, label: string): void {
  expect(Number.isFinite(value), label).toBe(true);
}

function expectClose(actual: number, expected: number, tolerance: number, label: string): void {
  expect(Math.abs(actual - expected), label).toBeLessThanOrEqual(tolerance);
}

describe("Optics 2 layout parity scaffold", () => {
  it("exercises current doLayout/thick over the parity fixture state matrix", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const lens = buildLens(LENS_CATALOG[fixture.key]);
      for (const state of fixture.states) {
        const aberrationT = state.aberrationT ?? 0;
        const layout = doLayout(state.focusT, state.zoomT, lens, aberrationT);

        expect(layout.z, `${fixture.key} ${state.id} z`).toHaveLength(lens.N);
        expect(layout.th, `${fixture.key} ${state.id} th`).toHaveLength(lens.N);
        expectFiniteNumber(layout.imgZ, `${fixture.key} ${state.id} imgZ`);
        for (let i = 0; i < lens.N; i++) {
          expect(layout.th[i]).toBe(thick(i, state.focusT, state.zoomT, lens, aberrationT));
          expectFiniteNumber(layout.z[i], `${fixture.key} ${state.id} z[${i}]`);
        }
      }
    }
  });

  it("captures current surface sag and slope boundaries through named tolerances", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const firstRenderableSurface = lens.S.findIndex((surface) => surface.sd > 0 && Math.abs(surface.R) < 1e14);
    expect(firstRenderableSurface).toBeGreaterThanOrEqual(0);

    const height = lens.S[firstRenderableSurface].sd * 0.5;
    expectFiniteNumber(renderSag(height, firstRenderableSurface, lens), "renderSag");
    expectFiniteNumber(sagSlope(height, firstRenderableSurface, lens), "sagSlope");
    expect(OPTICS_2_PARITY_TOLERANCES.surface.sag.abs).toBeLessThanOrEqual(1e-8);
    expect(OPTICS_2_PARITY_TOLERANCES.surface.slope.abs).toBeLessThanOrEqual(1e-8);
  });

  it("compares doLayout against the doLayout2 compatibility facade", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const lens = buildLens(LENS_CATALOG[fixture.key]);
      for (const state of fixture.states) {
        const aberrationT = state.aberrationT ?? 0;
        const legacy = doLayout(state.focusT, state.zoomT, lens, aberrationT);
        const optics2 = doLayout2(state.focusT, state.zoomT, lens, aberrationT);

        expect(optics2.z, `${fixture.key} ${state.id} z`).toEqual(legacy.z);
        expect(optics2.th, `${fixture.key} ${state.id} th`).toEqual(legacy.th);
        expect(optics2.imgZ, `${fixture.key} ${state.id} imgZ`).toBe(legacy.imgZ);
      }
    }
  });

  it("compares sag, slope, and normals against optics-2 surface profiles", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const lens = buildLens(LENS_CATALOG[fixture.key]);
      for (let surfaceIndex = 0; surfaceIndex < lens.N; surfaceIndex++) {
        const surface = lens.S[surfaceIndex];
        if (surface.sd <= 0) continue;

        const profile = createSurfaceProfile(surface, lens.asphByIdx[surfaceIndex]);
        for (const height of [0, surface.sd * 0.25, surface.sd * 0.75]) {
          const point = profile.pointAt(0, 0, height);
          const optics2Normal = profile.normalAt(point, 0);
          expectClose(length(optics2Normal), 1, 1e-12, `${fixture.key} ${surface.label} normal length`);

          const authoredNormal = surface.interaction?.normal;
          if (!authoredNormal) {
            expectClose(
              profile.sag(height),
              renderSag(height, surfaceIndex, lens),
              OPTICS_2_PARITY_TOLERANCES.surface.sag.abs,
              `${fixture.key} ${surface.label} sag ${height}`,
            );
            expectClose(
              profile.slope(height),
              sagSlope(height, surfaceIndex, lens),
              OPTICS_2_PARITY_TOLERANCES.surface.slope.abs,
              `${fixture.key} ${surface.label} slope ${height}`,
            );
          } else {
            const normalLength = Math.hypot(authoredNormal.y, authoredNormal.z);
            const normalY = authoredNormal.y / normalLength;
            const normalZ = authoredNormal.z / normalLength;
            const residual = normalY * point[1] + normalZ * point[2];
            expectClose(residual, 0, 1e-12, `${fixture.key} ${surface.label} tilted-plane residual`);
            if (Math.abs(normalZ) > 1e-12) {
              expectClose(
                profile.slope(height),
                -normalY / normalZ,
                OPTICS_2_PARITY_TOLERANCES.surface.slope.abs,
                `${fixture.key} ${surface.label} tilted-plane slope ${height}`,
              );
            }
          }

          const expectedNormal = authoredNormal
            ? normalize([0, authoredNormal.y, authoredNormal.z])
            : surfaceNormalAtHit(0, height, surfaceIndex, lens);
          expect(expectedNormal, `${fixture.key} ${surface.label} expected normal`).not.toBeNull();
          if (!expectedNormal) continue;

          for (let component = 0; component < 3; component++) {
            expectClose(
              optics2Normal[component],
              expectedNormal[component],
              OPTICS_2_PARITY_TOLERANCES.surface.normalComponent.abs,
              `${fixture.key} ${surface.label} normal[${component}] ${height}`,
            );
          }
        }
      }
    }
  });
});
