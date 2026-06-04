import canonEf from "./records/canon-ef.json";
import nikonF from "./records/nikon-f.json";
import pentaxK from "./records/pentax-k.json";
import type { LensMountSpec } from "./types.js";
import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";
import { isLensMountId } from "../utils/catalog/lensTaxonomy.js";

const MOUNT_SPECS = [canonEf, nikonF, pentaxK] as unknown as LensMountSpec[];

export const MOUNT_SPEC_BY_ID = Object.fromEntries(MOUNT_SPECS.map((spec) => [spec.mountId, spec])) as Partial<
  Record<LensMountId, LensMountSpec>
>;

export function hasMountSpec(mountId: unknown): mountId is LensMountId {
  return isLensMountId(mountId) && mountId in MOUNT_SPEC_BY_ID;
}

export function getMountSpec(mountId: LensMountId): LensMountSpec | null {
  return MOUNT_SPEC_BY_ID[mountId] ?? null;
}

export type { LensMountSpec, MountSvgView } from "./types.js";
export { buildMountSvgModel, renderMountSvgString } from "./svgRenderer.js";
export {
  calculateViewBox,
  clockwiseSweepDeg,
  mirrorLensRearAngleDeg,
  normalizeAngleDeg,
  sortFeaturesByAngle,
  viewBoxForDiameter,
} from "./geometry.js";
