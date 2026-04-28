/**
 * Local ray-rendering types for DiagramSVG and its extracted render layers.
 *
 * These remain scoped to the diagram feature because they describe rendered SVG
 * segment geometry rather than the raw optics-engine trace results.
 */

import type { ChromaticChannel } from "../../types/optics.js";

export interface RaySegment {
  sp: number[][];
  gp: number[][];
}

export interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
  axis: "onAxis" | "offAxis";
}
