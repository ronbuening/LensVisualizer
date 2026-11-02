/** Meridional mirror symmetry of a prepared state, shared by the aimed pupil launch and the MTF. */

import type { PreparedGeometry } from "../types.js";

/** Surface profiles whose sag depends on y or radius only, so a meridional field images symmetrically in x. */
const X_SYMMETRIC_PROFILES = new Set(["flat", "spherical", "aspheric", "tilted-plane"]);

/**
 * True when every surface is mirror-symmetric in x, so a ray and its mirror image across the y–z plane trace as
 * mirror images of each other, and a meridional ray stays in that plane.
 *
 * @param state - prepared optical state
 * @returns whether mirroring across the meridian is exact
 */
export function mirrorSymmetricAboutMeridian(state: PreparedGeometry): boolean {
  return state.surfaces.every((surface) => X_SYMMETRIC_PROFILES.has(surface.profile.kind));
}
