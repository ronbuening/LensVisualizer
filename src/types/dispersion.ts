/** Shared dispersion descriptors for compiled optics and the runtime read model. */

import type { ChromaticChannel } from "./optics.js";
import type { GlassEntry } from "../optics/glassCatalog.js";

/** The quality of the dispersion data backing a per-surface index function. */
export type DispersionQuality = "air" | "sellmeier" | "lineIndices" | "abbe" | "constant";

/** A pre-resolved per-surface index lookup. */
export type SurfaceIndexFn = (channel: ChromaticChannel) => number;

/** Per-surface chromatic index resolver and provenance quality. */
export interface SurfaceDispersion {
  readonly fn: SurfaceIndexFn;
  readonly quality: DispersionQuality;
  /** Catalog entry the surface resolved to, when quality === 'sellmeier'. */
  readonly glassEntry?: GlassEntry;
}
