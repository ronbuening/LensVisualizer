/** Trusted S2 composed-pair adapter. Delete this module and mapTrustedComposedLens in S5.P1.T4. */
import type { LensData } from "../../types/optics.js";
import { mapTrustedComposedLens } from "./ingestV1.js";

export function canonicalFromComposedPair(data: LensData) {
  return mapTrustedComposedLens(data);
}
