/**
 * Emit the package's machine-readable per-mount JSON block.
 *
 * A normalized `MountSpec` already has the exact shape of one record validated by
 * `lens-mount.schema.json`, so emission is essentially identity: serialize the spec with stable key
 * order and the renderer-computed per-view viewBoxes folded into `render.views`. Because the JSON is
 * derived from the typed object the renderer consumes, the emitted block conforms to the schema by
 * construction — this is why the project enforces the contract through TypeScript rather than ajv.
 */

import type { MountSpec } from "../../types/mount.js";
import { buildMountSvgDoc } from "./renderMount.js";

/**
 * Produce the per-mount JSON object, with `render.views.*.viewBox` filled from the rendered docs of
 * the selected MVP profile.
 *
 * @param spec — normalized mount spec
 * @returns a plain object ready to `JSON.stringify`, structurally identical to the schema record
 */
export function emitMountJson(spec: MountSpec): MountSpec {
  const selected = spec.mvp.profileModel.selectedMvpProfileId;
  const cameraDoc = buildMountSvgDoc(spec, selected, "camera_side_front");
  const lensDoc = buildMountSvgDoc(spec, selected, "lens_side_rear");
  const axialDoc = buildMountSvgDoc(spec, selected, "axial_section");

  return {
    ...spec,
    render: {
      ...spec.render,
      views: {
        cameraSideFront: { viewBox: cameraDoc.viewBox },
        lensSideRear: { viewBox: lensDoc.viewBox },
        axialSection: { viewBox: axialDoc.viewBox },
      },
    },
  };
}

/** Convenience: the emitted block as a pretty-printed JSON string. */
export function emitMountJsonString(spec: MountSpec): string {
  return JSON.stringify(emitMountJson(spec), null, 2);
}
