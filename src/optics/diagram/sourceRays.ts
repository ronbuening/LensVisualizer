/** Verified-source diagram fans share MTF launch geometry while retaining SVG trace adapters. */
import type { ChromaticChannel, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { prepareSourceFieldLaunch, sourceLaunchRay } from "../field/sourceLaunch.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import { resolveLensSourceState, sourceFiniteConjugate } from "../sourceStates.js";
import { traceRayVector2, traceRayVectorChromatic2 } from "../trace/rayAdapters.js";

/**
 * Prepare one reference chief shared by every displayed wavelength and pupil ray.
 * @param L - runtime lens
 * @param focusT - normalized focus coordinate
 * @param zoomT - normalized zoom coordinate
 * @param aberrationT - aberration-control coordinate
 * @param fieldAngleDeg - field angle measured from the first vertex
 * @param pupilSemiDiameterMm - current pupil radius, used to seed aiming
 * @param zPos - surface positions in the diagram's fixed-image coordinate frame
 * @param stopSemiDiameterMm - physical iris radius
 * @returns ray sampler, or undefined to preserve existing unverified/unsupported diagram behavior
 */
export function prepareSourceDiagramFan(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  fieldAngleDeg: number,
  pupilSemiDiameterMm: number,
  zPos: number[],
  stopSemiDiameterMm: number,
): ((offsetMm: number, channel?: ChromaticChannel) => RayTraceResult) | undefined {
  const source = resolveLensSourceState(L.data, focusT, zoomT, aberrationT);
  if (!source) return undefined;
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  if (
    state.lens.flags.isFoldedOptics ||
    L.data.projection?.kind?.startsWith("fisheye") ||
    state.surfaces.some((s) => s.diffractive || (s.innerSd ?? 0) > 0 || s.interaction.type !== "refract")
  )
    return undefined;
  const launch = prepareSourceFieldLaunch(state, fieldAngleDeg, pupilSemiDiameterMm, sourceFiniteConjugate(source));
  if (!launch) throw new Error("The verified source ray could not be aimed through the physical stop.");
  const shift = (zPos[0] ?? state.z[0]) - state.z[0];
  return (offsetMm, channel) => {
    const ray = sourceLaunchRay(launch, 0, offsetMm);
    ray.origin = [ray.origin[0], ray.origin[1], ray.origin[2] + shift];
    const result = channel
      ? traceRayVectorChromatic2(ray, zPos, stopSemiDiameterMm, true, L, channel, focusT, zoomT, aberrationT)
      : traceRayVector2(ray, zPos, stopSemiDiameterMm, true, L, focusT, zoomT, aberrationT);
    // The generic vector adapter extends a fixed distance before the first hit. A close source
    // can lie inside that extension; begin at the shared launch plane instead of beyond the source.
    return { ...result, pts: [[ray.origin[2], ray.origin[1]], ...result.pts.slice(1)] };
  };
}
