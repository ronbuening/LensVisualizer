/**
 * Surface profile factories — transitional re-export of `geometry/surfaceProfile.ts`.
 *
 * The implementation lives in the geometry module. This path stays only until its importers move there, and is
 * then deleted.
 */

export {
  createAsphericProfile,
  createFlatProfile,
  createSphericalProfile,
  createSurfaceProfile,
  createTiltedPlaneProfile,
} from "../geometry/surfaceProfile.js";
