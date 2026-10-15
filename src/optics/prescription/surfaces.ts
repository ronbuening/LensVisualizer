/**
 * Compile physical surfaces — shared by runtime construction and prepared-state normalization.
 *
 * Keeps profiles and interactions identical before and after build-time constants are derived.
 */

import type { SurfaceData } from "../../types/optics.js";
import type { CompiledSurface } from "../types.js";
import { createSurfaceProfile } from "../geometry/surfaceProfile.js";
import { compileDiffractivePhase } from "../math/diffractivePhase.js";
import { compileSurfaceInteraction } from "./interactions.js";

/**
 * Compile the current physical prescription without constructing a runtime lens.
 *
 * @param runtimeSurfaces - surfaces with current gaps and apertures, in mm
 * @param sourceSurfaces - authored records retained for provenance
 * @param aspheresByIndex - coefficients indexed by physical surface
 * @returns immutable profiles and optical interaction records
 */
export function compileSurfaces(
  runtimeSurfaces: readonly SurfaceData[],
  sourceSurfaces: readonly SurfaceData[],
  aspheresByIndex: Readonly<Record<number, NonNullable<CompiledSurface["asphere"]>>>,
): readonly CompiledSurface[] {
  return Object.freeze(
    runtimeSurfaces.map((surface, physicalIndex) => {
      const asphere = aspheresByIndex[physicalIndex] ?? null;
      return Object.freeze({
        physicalIndex,
        label: surface.label,
        R: surface.R,
        d: surface.d,
        nd: surface.nd,
        sd: surface.sd,
        innerSd: surface.innerSd ?? null,
        clips: surface.clips !== false,
        elemId: surface.elemId,
        stopPlacement: surface.stopPlacement ?? null,
        asphere,
        diffractive: compileDiffractivePhase(surface.diffractive),
        interaction: compileSurfaceInteraction(surface.interaction),
        profile: createSurfaceProfile(surface, asphere ?? undefined),
        source: Object.freeze({ ...sourceSurfaces[physicalIndex] }),
      });
    }),
  );
}
