/** Frozen UI read model assembled from compiled records and the canonical source. */
import type { RuntimeLens } from "../../types/optics.js";
import type { CompiledLens } from "../types.js";
import { associateRuntime } from "./identity.js";

// A catalog-owned compiled lens must not keep a closed viewer (and its analysis caches) alive.
// Reachable callers still share one view; only an unreferenced view may be rebuilt.
const VIEWS = new WeakMap<CompiledLens, WeakRef<RuntimeLens>>();

/** Bind a derived view to its compiled owner; also permits explicit synthetic test views. */
export function associateRuntimeView(lens: CompiledLens, runtime: RuntimeLens): void {
  VIEWS.set(lens, new WeakRef(runtime));
  associateRuntime(runtime, lens);
}

/** Assemble from completed records only. This never compiles, resolves materials or prepares geometry. */
export function runtimeView(lens: CompiledLens): RuntimeLens {
  const cached = VIEWS.get(lens)?.deref();
  if (cached) return cached;
  const control = lens.aberrationControl;
  const runtime = Object.freeze({
    source: lens.source,
    ...(lens.attachedTeleconverter ? { attachedTeleconverter: lens.attachedTeleconverter } : {}),
    S: lens.constructionSurfaces.map((surface, i) => ({ ...surface, sd: lens.surfaces[i].sd })),
    N: lens.surfaces.length,
    ES: lens.displayElementSpans,
    elements: lens.elements.map((element) => element.source).filter((element) => !element.synthetic),
    lastLensSurfaceIdx: lens.lastLensSurfaceIndex,
    ...lens.indices,
    varByIdx: lens.variables.bySurfaceIndex,
    varLabels: lens.variables.labels,
    groups: lens.annotations.groups,
    doublets: lens.annotations.doublets,
    perspectiveControl: lens.perspectiveControl,
    aberrationControl: control
      ? {
          label: control.label,
          description: control.description,
          minLabel: control.minLabel,
          centerLabel: control.centerLabel,
          maxLabel: control.maxLabel,
          step: control.step,
          varByIdx: control.varBySurfaceIndex,
          varLabels: control.varLabels,
        }
      : null,
    projection: lens.projection.config,
    opticalPath: lens.opticalPath,
    stopIdx: lens.stop.surfaceIndex,
    labelIdx: lens.labelToSurfaceIndex,
    ...lens.constants,
  }) as RuntimeLens;
  associateRuntimeView(lens, runtime);
  return runtime;
}
