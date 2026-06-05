/**
 * Mount-spec normalization: fills the fixed scaffolding authors omit.
 *
 * `*.mount.ts` files export `MountSpecInput`, leaving out the invariant blocks (schema version, the
 * package coordinate convention, the render margins/precision, and a representative metadata block).
 * `normalizeMountSpec()` fills them so the rest of the pipeline — renderer, JSON emitter, validator —
 * always sees a complete `MountSpec`. Per-view `viewBox` stays "unknown" here; the renderer computes
 * the real viewBox per view.
 */

import type {
  CoordinateConvention,
  MountDocMetadata,
  MountSpec,
  MountSpecInput,
  RenderBlock,
} from "../../types/mount.js";
import { MOUNT_SCHEMA_VERSION } from "../../types/mount.js";
import { numberOr } from "./value.js";

/** The single coordinate convention all mounts are stored in (package Section 4). */
export const MOUNT_COORDINATE_CONVENTION: CoordinateConvention = {
  units: "mm_deg",
  zDatum: "flange_datum",
  zPositive: "toward_lens",
  angleZero: "top_dead_center_camera_front_view",
  anglePositive: "clockwise_camera_front_view",
  storedAngleFrame: "camera_front_view",
  lensRearMirror: "theta_out = (360 - theta) mod 360",
  angleSpanRule: "clockwise_sweep_start_to_end_mod_360",
};

/** Fixed render block; per-view viewBox is filled by the renderer. */
export function mountRenderScaffold(): RenderBlock {
  return {
    unitMapping: "1_user_unit_per_mm",
    marginFraction: 0.1,
    numericPrecision: 3,
    views: {
      cameraSideFront: { viewBox: "unknown" },
      lensSideRear: { viewBox: "unknown" },
      axialSection: { viewBox: "unknown" },
    },
  };
}

/** Build a representative metadata block from identity + headline dimensions (package Section 9.3). */
function representativeMetadata(input: MountSpecInput): MountDocMetadata {
  const ffd = numberOr(input.coreDimensions.flangeFocalDistanceMm, NaN);
  const throat = numberOr(input.coreDimensions.nominalThroatDiameterMm, NaN);
  const ffdText = isFinite(ffd) ? `${ffd} mm` : "unknown";
  const throatText = isFinite(throat) ? `${throat} mm` : "unknown";
  return {
    title: `${input.displayLabel} mount`,
    desc: `${input.displayLabel} mount — flange focal distance ${ffdText}, nominal throat ${throatText}.`,
    view: "unknown",
    profileId: input.mvp.profileModel.baseProfileId,
  };
}

/** Fill defaulted fields, returning a complete spec the pipeline can consume. */
export function normalizeMountSpec(input: MountSpecInput): MountSpec {
  return {
    ...input,
    schemaVersion: input.schemaVersion ?? MOUNT_SCHEMA_VERSION,
    coordinateConvention: input.coordinateConvention ?? MOUNT_COORDINATE_CONVENTION,
    render: input.render ?? mountRenderScaffold(),
    metadata: input.metadata ?? representativeMetadata(input),
  };
}
