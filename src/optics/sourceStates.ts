/** Source configuration identity shared by analysis, controls and URL restoration. */
import type { FiniteConjugate, LensData, LensSourceState } from "../types/optics.js";

type SourceData = Pick<LensData, "sourceStates" | "finiteConjugates">;

/**
 * Normalize legacy finite declarations without inferring any new source configurations.
 * @param data - validated authored prescription
 * @returns selectable configurations, with deterministic IDs for legacy stations
 */
export function lensSourceStates(data: SourceData): readonly LensSourceState[] {
  return [
    ...(data.sourceStates ?? []),
    ...(data.finiteConjugates ?? []).map(
      (c): LensSourceState => ({
        id: `legacy-${String(c.focusT).replaceAll(".", "-")}-${String(c.zoomT).replaceAll(".", "-")}`,
        label: `${(c.objectDistanceMm / 1000).toPrecision(3)} m`,
        focusT: c.focusT,
        zoomT: c.zoomT,
        source: c.source,
        conjugate: {
          kind: "finite",
          objectDistanceMm: c.objectDistanceMm,
          distanceReference: c.distanceReference,
          distanceProvenance: "published",
        },
      }),
    ),
  ];
}

/**
 * Match authored coordinates, never snap a nearby slider position into a source state.
 * @param data - validated source declarations
 * @param focusT - exact normalized focus coordinate
 * @param zoomT - exact normalized zoom coordinate
 * @param aberrationT - neutral (zero) is the only certified aberration-control configuration
 * @returns the matching source configuration, or undefined for unverified geometry
 */
export function resolveLensSourceState(
  data: SourceData,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): LensSourceState | undefined {
  if (aberrationT !== 0) return undefined;
  return lensSourceStates(data).find((s) => Math.abs(s.focusT - focusT) < 1e-8 && Math.abs(s.zoomT - zoomT) < 1e-8);
}

/**
 * Adapt explicit source geometry to the existing finite-ray contract.
 * @param state - source configuration; infinity is independent of its slider coordinate
 * @returns finite launch metadata, or undefined for infinity/unverified geometry
 */
export function sourceFiniteConjugate(state: LensSourceState | undefined): FiniteConjugate | undefined {
  if (state?.conjugate.kind !== "finite") return undefined;
  return {
    focusT: state.focusT,
    zoomT: state.zoomT,
    source: state.source,
    objectDistanceMm: state.conjugate.objectDistanceMm,
    distanceReference: state.conjugate.distanceReference,
  };
}
