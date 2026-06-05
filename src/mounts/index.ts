/**
 * Registry of authored mount specifications.
 *
 * Each `*.mount.ts` file is imported explicitly (rather than glob-discovered) so the React bundle's
 * import graph stays predictable, and normalized once here. Mounts without a spec are simply absent
 * from `MOUNT_SPECS`, so the mount page renders a diagram panel only when one exists — graceful and
 * incremental as more mounts are authored.
 */

import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";
import type { MountSpec } from "../types/mount.js";
import { normalizeMountSpec } from "../optics/mount/defaults.js";
import CANON_EF_MOUNT from "./canon-ef.mount.js";
import CANON_RF_MOUNT from "./canon-rf.mount.js";
import FUJIFILM_G_MOUNT from "./fujifilm-g.mount.js";
import FUJIFILM_X_MOUNT from "./fujifilm-x.mount.js";
import L_MOUNT from "./l-mount.mount.js";
import LEICA_M_MOUNT from "./leica-m.mount.js";
import NIKON_F_MOUNT from "./nikon-f.mount.js";
import NIKON_Z_MOUNT from "./nikon-z.mount.js";
import OLYMPUS_OM_MOUNT from "./olympus-om.mount.js";
import PENTAX_K_MOUNT from "./pentax-k.mount.js";
import SONY_A_MOUNT from "./sony-a.mount.js";
import SONY_E_MOUNT from "./sony-fe.mount.js";

export const MOUNT_SPECS: Partial<Record<LensMountId, MountSpec>> = {
  "canon-ef": normalizeMountSpec(CANON_EF_MOUNT),
  "canon-rf": normalizeMountSpec(CANON_RF_MOUNT),
  "fujifilm-g": normalizeMountSpec(FUJIFILM_G_MOUNT),
  "fujifilm-x": normalizeMountSpec(FUJIFILM_X_MOUNT),
  "l-mount": normalizeMountSpec(L_MOUNT),
  "leica-m": normalizeMountSpec(LEICA_M_MOUNT),
  "nikon-f": normalizeMountSpec(NIKON_F_MOUNT),
  "nikon-z": normalizeMountSpec(NIKON_Z_MOUNT),
  "olympus-om": normalizeMountSpec(OLYMPUS_OM_MOUNT),
  "pentax-k": normalizeMountSpec(PENTAX_K_MOUNT),
  "sony-a": normalizeMountSpec(SONY_A_MOUNT),
  "sony-fe": normalizeMountSpec(SONY_E_MOUNT),
};

/** True when a mount has an authored SVG specification. */
export function hasMountSpec(mountId: LensMountId): boolean {
  return MOUNT_SPECS[mountId] !== undefined;
}
