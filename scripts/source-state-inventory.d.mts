/** Type boundary for the read-only Node inventory helper. */
import type { LensData, LensSourceState } from "../src/types/optics.js";
type Data = Pick<LensData, "key"> & Partial<LensData>;
export function sourceStateCandidates(data: Partial<LensData>): { focusT: number; zoomT: number }[];
export function sourceStateInventory(
  entries: { file: string; data: Data }[],
  options?: { lensKey?: string; limit?: number },
): {
  inventory: { total: number; visible: number; hiddenProduction: number; referenceFixtures: number };
  selected: number;
  lenses: {
    key: string;
    file: string;
    visible: boolean;
    kind: string;
    states: readonly LensSourceState[];
    candidates: { focusT: number; zoomT: number; stateId: string | null }[];
    unverifiedCandidates: number;
  }[];
};
