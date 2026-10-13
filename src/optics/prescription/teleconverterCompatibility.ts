/**
 * Teleconverter fit rules — whether a converter can be mounted on a host lens, and the axial spacing that results.
 *
 * Import-free on purpose: `scripts/generate-build-metadata.mjs` loads this file under plain Node (type stripping
 * only, no `.js` → `.ts` resolution) to precompute each converter's host list, so the runtime predicate and the
 * build-time list cannot diverge. Every import here must stay `import type`.
 *
 * All spacing is air-equivalent. A converter is positioned by its virtual object — the host's native image plane,
 * `masterImageDistanceMm` behind the converter's first vertex — so hosts that list a sensor cover plate and hosts
 * that fold it into their back focus resolve to the same junction.
 */

import type { LensData, RearPlateData } from "../../types/optics.js";
import type {
  TeleconverterCompatibility,
  TeleconverterData,
  TeleconverterGeometry,
} from "../../types/teleconverter.js";

/** Prefix of every composed converter surface label; reserved in authored lens data. */
export const TELECONVERTER_LABEL_PREFIX = "TC";

/** Smallest air gap accepted at the junction and behind the converter; below this the glass is in contact. */
export const MIN_TELECONVERTER_GAP_MM = 0.1;

/** Host fields the fit rules read; satisfied by both defaulted `LensData` and raw `LensDataInput` modules. */
export type TeleconverterHost = Pick<
  LensData,
  | "key"
  | "lensMounts"
  | "acceptsTeleconverters"
  | "attachedTeleconverter"
  | "opticalPath"
  | "projection"
  | "perspectiveControl"
  | "nominalFno"
  | "surfaces"
  | "rearPlates"
  | "var"
  | "aberrationControl"
>;

/**
 * Sum of the air-equivalent distances of a plate stack: Σ(t/n + gapAfter).
 *
 * Adding the physical gap before the first plate gives the legacy folded back-focus value, so migrations can check
 * that paraxial focus is unchanged.
 *
 * @param plates - authored rear plates
 * @returns air-equivalent length of the plates and trailing gaps in mm
 */
export function rearPlateAirEquivalentMm(plates: readonly RearPlateData[]): number {
  return plates.reduce((sum, plate) => sum + plate.thicknessMm / plate.nd + plate.gapAfterMm, 0);
}

/** Collect every finite thickness in a scalar, focus vector, or zoom table of focus vectors. */
function collectThicknesses(range: unknown, out: number[]): void {
  if (typeof range === "number") {
    if (Number.isFinite(range)) out.push(range);
  } else if (Array.isArray(range)) {
    for (const entry of range) collectThicknesses(entry, out);
  }
}

/**
 * Every authored thickness of the host's last gap: the scalar `d` plus each focus, zoom and aberration-control entry.
 *
 * @param host - host lens data
 * @returns authored last-gap thicknesses in mm; empty when the host has no surfaces
 */
function hostLastGapThicknesses(host: TeleconverterHost): number[] {
  const last = host.surfaces[host.surfaces.length - 1];
  if (!last) return [];
  const values: number[] = [];
  collectThicknesses(last.d, values);
  collectThicknesses(host.var?.[last.label], values);
  collectThicknesses(host.aberrationControl?.var?.[last.label], values);
  return values;
}

/**
 * Split a host's rear plates into those ahead of the converter and those behind it.
 *
 * `rearPlates` holds two kinds of plate. Camera-side cover glass sits within a few millimetres of the image and stays
 * behind the converter. A lens-side drop-in filter sits tens of millimetres ahead, belongs to the lens, and stays in
 * front of the converter. A plate is ahead when its rear face is at least `masterImageDistanceMm` (air-equivalent)
 * from the image, i.e. at or in front of the converter's first vertex; because that distance only shrinks toward the
 * image, the plates ahead are always a leading run.
 *
 * @param plates - host rear plates, ordered lens → image
 * @param masterImageDistanceMm - converter's virtual object distance
 * @returns the count ahead, the air-equivalent distance from the last one's rear face to the image, and the
 *   air-equivalent length of the plates behind
 */
function splitRearPlates(
  plates: readonly RearPlateData[],
  masterImageDistanceMm: number,
): { ahead: number; lastAheadRearFaceToImage: number; behindAirEq: number } {
  /* Walk image → lens accumulating each rear face's distance to the image. */
  let rearFaceToImage = 0;
  for (let i = plates.length - 1; i >= 0; i--) {
    const behindAirEq = rearFaceToImage;
    rearFaceToImage += plates[i].gapAfterMm;
    if (rearFaceToImage >= masterImageDistanceMm) {
      return { ahead: i + 1, lastAheadRearFaceToImage: rearFaceToImage, behindAirEq };
    }
    rearFaceToImage += plates[i].thicknessMm / plates[i].nd;
  }
  return { ahead: 0, lastAheadRearFaceToImage: 0, behindAirEq: rearFaceToImage };
}

/**
 * Axial spacing of a host + converter system.
 *
 * With every host plate behind the converter:
 *   junction gap = host back focus (air) − `masterImageDistanceMm`
 * With lens-side plates ahead, the host's last gap still ends at the first plate and the junction follows the last
 * plate ahead:
 *   junction gap = that plate's rear face to the image (air) − `masterImageDistanceMm`
 * Either way:
 *   final gap    = converter back focus (air) − host plates behind the converter (air)
 *
 * @param host - host lens data
 * @param tc - teleconverter data
 * @returns plate split, junction spacing, final gap and image-plane extension in mm
 */
export function teleconverterGeometry(host: TeleconverterHost, tc: TeleconverterData): TeleconverterGeometry {
  const hostPlates = host.rearPlates ?? [];
  const split = splitRearPlates(hostPlates, tc.masterImageDistanceMm);
  const lastGaps = hostLastGapThicknesses(host);

  let lastGapShiftMm = 0;
  let plateJunctionGapMm: number | null = null;
  let minJunctionGapMm: number;
  if (split.ahead > 0) {
    plateJunctionGapMm = split.lastAheadRearFaceToImage - tc.masterImageDistanceMm;
    minJunctionGapMm = plateJunctionGapMm;
  } else {
    lastGapShiftMm = rearPlateAirEquivalentMm(hostPlates) - tc.masterImageDistanceMm;
    minJunctionGapMm = lastGaps.length > 0 ? Math.min(...lastGaps) + lastGapShiftMm : -Infinity;
  }

  const tcLast = tc.surfaces[tc.surfaces.length - 1];
  const tcAirBackFocus = (tcLast?.d ?? 0) + rearPlateAirEquivalentMm(tc.rearPlates ?? []);
  let tcVertexLength = 0;
  for (let i = 0; i < tc.surfaces.length - 1; i++) tcVertexLength += tc.surfaces[i].d;

  return {
    platesAhead: split.ahead,
    lastGapShiftMm,
    plateJunctionGapMm,
    minJunctionGapMm,
    finalGapMm: tcAirBackFocus - split.behindAirEq,
    extensionMm: tcVertexLength + tcAirBackFocus - tc.masterImageDistanceMm,
  };
}

/**
 * Decide whether a converter can be mounted on a host lens.
 *
 * Fit needs a shared mount and either a universal converter or a host that declares acceptance. The remaining rules
 * reject systems the engine cannot compose faithfully: folded paths, fisheye projections, perspective-control
 * movement (the converter is camera-fixed while the movement model poses the whole prescription), and any state
 * where the glass would touch — including a host plate the converter's body would have to occupy.
 *
 * @param host - host lens data (defaulted or raw)
 * @param tc - teleconverter data
 * @returns the composed spacing when compatible, otherwise the first failing rule
 */
export function teleconverterCompatibility(host: TeleconverterHost, tc: TeleconverterData): TeleconverterCompatibility {
  const hostMounts: readonly string[] = host.lensMounts ?? [];
  if (!tc.lensMounts.some((mount) => hostMounts.includes(mount))) return { ok: false, reason: "mount" };
  if (host.attachedTeleconverter) return { ok: false, reason: "stacked" };
  if (tc.universal !== true && host.acceptsTeleconverters !== true) return { ok: false, reason: "not-declared" };
  if (tc.incompatibleLensKeys?.includes(host.key)) return { ok: false, reason: "excluded" };

  const folded =
    host.opticalPath !== undefined ||
    host.surfaces.some((surface) => surface.interaction !== undefined && surface.interaction.type !== "refract");
  if (folded) return { ok: false, reason: "folded-host" };
  if (host.projection !== undefined && host.projection.kind !== "rectilinear") {
    return { ok: false, reason: "projection" };
  }
  if (host.perspectiveControl !== undefined) return { ok: false, reason: "perspective-control" };

  if (tc.minHostFno !== undefined) {
    const fastest = Array.isArray(host.nominalFno) ? Math.min(...host.nominalFno) : host.nominalFno;
    /* A tiny tolerance keeps a host at exactly the limit from failing on float noise. */
    if (typeof fastest === "number" && fastest < tc.minHostFno - 1e-9) return { ok: false, reason: "host-too-fast" };
  }

  const geometry = teleconverterGeometry(host, tc);
  if (!(geometry.minJunctionGapMm >= MIN_TELECONVERTER_GAP_MM) || !(geometry.finalGapMm >= MIN_TELECONVERTER_GAP_MM)) {
    return { ok: false, reason: "clearance" };
  }
  return { ok: true, geometry };
}
