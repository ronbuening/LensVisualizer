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
import CANON_EF_M_MOUNT from "./canon-ef-m.mount.js";
import CANON_EF_S_MOUNT from "./canon-ef-s.mount.js";
import CANON_FD_MOUNT from "./canon-fd.mount.js";
import CANON_FL_MOUNT from "./canon-fl.mount.js";
import CANON_RF_MOUNT from "./canon-rf.mount.js";
import BRONICA_ETR_MOUNT from "./bronica-etr.mount.js";
import BRONICA_GS_MOUNT from "./bronica-gs.mount.js";
import BRONICA_SQ_MOUNT from "./bronica-sq.mount.js";
import EXAKTA_MOUNT from "./exakta.mount.js";
import FOUR_THIRDS_MOUNT from "./four-thirds.mount.js";
import FUJIFILM_G_MOUNT from "./fujifilm-g.mount.js";
import FUJIFILM_X_MOUNT from "./fujifilm-x.mount.js";
import HASSELBLAD_V_MOUNT from "./hasselblad-v.mount.js";
import L_MOUNT from "./l-mount.mount.js";
import LEICA_M_MOUNT from "./leica-m.mount.js";
import MICRO_FOUR_THIRDS_MOUNT from "./micro-four-thirds.mount.js";
import NIKON_1_MOUNT from "./nikon-1.mount.js";
import NIKON_F_MOUNT from "./nikon-f.mount.js";
import NIKON_Z_MOUNT from "./nikon-z.mount.js";
import OLYMPUS_OM_MOUNT from "./olympus-om.mount.js";
import PENTAX_K_MOUNT from "./pentax-k.mount.js";
import SONY_A_MOUNT from "./sony-a.mount.js";
import SONY_E_MOUNT from "./sony-fe.mount.js";

export const MOUNT_SPECS: Partial<Record<LensMountId, MountSpec>> = {
  "bronica-etr": normalizeMountSpec(BRONICA_ETR_MOUNT),
  "bronica-gs": normalizeMountSpec(BRONICA_GS_MOUNT),
  "bronica-sq": normalizeMountSpec(BRONICA_SQ_MOUNT),
  "canon-ef": normalizeMountSpec(CANON_EF_MOUNT),
  "canon-ef-m": normalizeMountSpec(CANON_EF_M_MOUNT),
  "canon-ef-s": normalizeMountSpec(CANON_EF_S_MOUNT),
  "canon-fd": normalizeMountSpec(CANON_FD_MOUNT),
  "canon-fl": normalizeMountSpec(CANON_FL_MOUNT),
  "canon-rf": normalizeMountSpec(CANON_RF_MOUNT),
  exakta: normalizeMountSpec(EXAKTA_MOUNT),
  "four-thirds": normalizeMountSpec(FOUR_THIRDS_MOUNT),
  "fujifilm-g": normalizeMountSpec(FUJIFILM_G_MOUNT),
  "fujifilm-x": normalizeMountSpec(FUJIFILM_X_MOUNT),
  "hasselblad-v": normalizeMountSpec(HASSELBLAD_V_MOUNT),
  "l-mount": normalizeMountSpec(L_MOUNT),
  "leica-m": normalizeMountSpec(LEICA_M_MOUNT),
  "micro-four-thirds": normalizeMountSpec(MICRO_FOUR_THIRDS_MOUNT),
  "nikon-1": normalizeMountSpec(NIKON_1_MOUNT),
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
