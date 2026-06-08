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
import CONTAX_RF_MOUNT from "./contax-rf.mount.js";
import CONTAX_YASHICA_MOUNT from "./contax-yashica.mount.js";
import EXAKTA_MOUNT from "./exakta.mount.js";
import FIXED_LENS_CAMERA_MOUNT from "./fixed-lens-camera.mount.js";
import FOUR_THIRDS_MOUNT from "./four-thirds.mount.js";
import FUJIFILM_G_MOUNT from "./fujifilm-g.mount.js";
import FUJIFILM_X_MOUNT from "./fujifilm-x.mount.js";
import HASSELBLAD_H_MOUNT from "./hasselblad-h.mount.js";
import HASSELBLAD_V_MOUNT from "./hasselblad-v.mount.js";
import HASSELBLAD_XCD_MOUNT from "./hasselblad-xcd.mount.js";
import L_MOUNT from "./l-mount.mount.js";
import LEICA_LTM_MOUNT from "./leica-ltm.mount.js";
import LEICA_M_MOUNT from "./leica-m.mount.js";
import LEICA_R_MOUNT from "./leica-r.mount.js";
import M42_MOUNT from "./m42.mount.js";
import MICRO_FOUR_THIRDS_MOUNT from "./micro-four-thirds.mount.js";
import MINOLTA_SR_MOUNT from "./minolta-sr.mount.js";
import NIKON_1_MOUNT from "./nikon-1.mount.js";
import NIKON_F_MOUNT from "./nikon-f.mount.js";
import NIKON_S_MOUNT from "./nikon-s.mount.js";
import NIKON_Z_MOUNT from "./nikon-z.mount.js";
import OLYMPUS_OM_MOUNT from "./olympus-om.mount.js";
import PENTAX_110_MOUNT from "./pentax-110.mount.js";
import PENTAX_645_MOUNT from "./pentax-645.mount.js";
import PENTAX_67_MOUNT from "./pentax-67.mount.js";
import PENTAX_K_MOUNT from "./pentax-k.mount.js";
import SIGMA_SA_MOUNT from "./sigma-sa.mount.js";
import SONY_A_MOUNT from "./sony-a.mount.js";
import SONY_E_MOUNT from "./sony-fe.mount.js";
import ZEISS_CONTAREX_MOUNT from "./zeiss-contarex.mount.js";

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
  "contax-rf": normalizeMountSpec(CONTAX_RF_MOUNT),
  "contax-yashica": normalizeMountSpec(CONTAX_YASHICA_MOUNT),
  exakta: normalizeMountSpec(EXAKTA_MOUNT),
  "fixed-lens-camera": normalizeMountSpec(FIXED_LENS_CAMERA_MOUNT),
  "four-thirds": normalizeMountSpec(FOUR_THIRDS_MOUNT),
  "fujifilm-g": normalizeMountSpec(FUJIFILM_G_MOUNT),
  "fujifilm-x": normalizeMountSpec(FUJIFILM_X_MOUNT),
  "hasselblad-h": normalizeMountSpec(HASSELBLAD_H_MOUNT),
  "hasselblad-v": normalizeMountSpec(HASSELBLAD_V_MOUNT),
  "hasselblad-xcd": normalizeMountSpec(HASSELBLAD_XCD_MOUNT),
  "l-mount": normalizeMountSpec(L_MOUNT),
  "leica-ltm": normalizeMountSpec(LEICA_LTM_MOUNT),
  "leica-m": normalizeMountSpec(LEICA_M_MOUNT),
  "leica-r": normalizeMountSpec(LEICA_R_MOUNT),
  m42: normalizeMountSpec(M42_MOUNT),
  "micro-four-thirds": normalizeMountSpec(MICRO_FOUR_THIRDS_MOUNT),
  "minolta-sr": normalizeMountSpec(MINOLTA_SR_MOUNT),
  "nikon-1": normalizeMountSpec(NIKON_1_MOUNT),
  "nikon-f": normalizeMountSpec(NIKON_F_MOUNT),
  "nikon-s": normalizeMountSpec(NIKON_S_MOUNT),
  "nikon-z": normalizeMountSpec(NIKON_Z_MOUNT),
  "olympus-om": normalizeMountSpec(OLYMPUS_OM_MOUNT),
  "pentax-110": normalizeMountSpec(PENTAX_110_MOUNT),
  "pentax-645": normalizeMountSpec(PENTAX_645_MOUNT),
  "pentax-67": normalizeMountSpec(PENTAX_67_MOUNT),
  "pentax-k": normalizeMountSpec(PENTAX_K_MOUNT),
  "sigma-sa": normalizeMountSpec(SIGMA_SA_MOUNT),
  "sony-a": normalizeMountSpec(SONY_A_MOUNT),
  "sony-fe": normalizeMountSpec(SONY_E_MOUNT),
  "zeiss-contarex": normalizeMountSpec(ZEISS_CONTAREX_MOUNT),
};

/** True when a mount has an authored SVG specification. */
export function hasMountSpec(mountId: LensMountId): boolean {
  return MOUNT_SPECS[mountId] !== undefined;
}
