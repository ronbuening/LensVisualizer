/** Read-only configuration census. Candidate geometry is not evidence of a published conjugate. */
import { lensSourceStates } from "../src/optics/sourceStates.ts";

/**
 * Enumerate authored slider coordinates without certifying a distance or source.
 * @param data - authored prescription
 * @returns focus/zoom coordinates, including explicitly certified fixed configurations
 */
export function sourceStateCandidates(data) {
  const zoomCount = data.zoomPositions?.length ?? 1;
  const ranges = Object.values(data.var ?? {});
  const focusRanges = zoomCount > 1 ? ranges.flat() : ranges;
  const hasFocus = focusRanges.some((values) => Array.isArray(values) && new Set(values).size > 1);
  const focusPositions = hasFocus ? (data.focusPositions ?? [0, 1]) : [0];
  const candidates = focusPositions.flatMap((focusT) =>
    Array.from({ length: zoomCount }, (_, i) => ({ focusT, zoomT: zoomCount > 1 ? i / (zoomCount - 1) : 0 })),
  );
  for (const state of lensSourceStates(data)) {
    if (!candidates.some((c) => c.focusT === state.focusT && c.zoomT === state.zoomT))
      candidates.push({ focusT: state.focusT, zoomT: state.zoomT });
  }
  return candidates.sort((a, b) => a.zoomT - b.zoomT || a.focusT - b.focusT);
}

/**
 * Reconcile a complete inventory before applying a key filter or output limit.
 * @param entries - source files and evaluated data (including hidden configurations)
 * @param options - optional exact lens key and nonnegative output limit
 * @returns deterministic counts and per-prescription coverage, with no optical certification inferred
 */
export function sourceStateInventory(entries, { lensKey, limit = Infinity } = {}) {
  if (!(limit >= 0) || (limit !== Infinity && !Number.isInteger(limit))) throw new Error("Invalid inventory limit");
  const sorted = [...entries].sort((a, b) => a.data.key.localeCompare(b.data.key, "en"));
  if (lensKey && !sorted.some(({ data }) => data.key === lensKey)) throw new Error(`Unknown lens key: ${lensKey}`);
  const counts = { total: sorted.length, visible: 0, hiddenProduction: 0, referenceFixtures: 0 };
  for (const { file, data } of sorted) {
    if (file.replaceAll("\\", "/").startsWith("reference/")) counts.referenceFixtures++;
    else if (data.visible === false) counts.hiddenProduction++;
    else counts.visible++;
  }
  const lenses = sorted
    .filter(({ data }) => !lensKey || data.key === lensKey)
    .slice(0, limit)
    .map(({ file, data }) => {
      const states = lensSourceStates(data);
      const candidates = sourceStateCandidates(data).map((c) => ({
        ...c,
        stateId:
          states.find((s) => Math.abs(s.focusT - c.focusT) < 1e-8 && Math.abs(s.zoomT - c.zoomT) < 1e-8)?.id ?? null,
      }));
      return {
        key: data.key,
        file,
        visible: data.visible !== false,
        kind: file.replaceAll("\\", "/").startsWith("reference/") ? "reference-fixture" : "production",
        states,
        candidates,
        unverifiedCandidates: candidates.filter((c) => c.stateId === null).length,
      };
    });
  return { inventory: counts, selected: lenses.length, lenses };
}
