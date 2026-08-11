/**
 * Shared assertions for the id-keyed detail registries (maker, mount, image
 * format): every canonical id must have an entry, and every entry must have
 * its required fields populated. Each registry's test file calls this once
 * and keeps its registry-specific lookup tests alongside.
 */

import { describe, expect, it } from "vitest";

export function describeDetailRegistry<T extends object>({
  registryName,
  registry,
  ids,
  idNoun,
  nonEmptyStringFields,
  positiveNumberFields = [],
}: {
  /** Name of the exported registry constant, used as the describe label. */
  registryName: string;
  registry: Readonly<Record<string, T>>;
  /** Canonical id list the registry must cover. */
  ids: readonly string[];
  /** Human phrase for the id kind, e.g. "known maker slug". */
  idNoun: string;
  /** Fields every entry must populate with a non-empty string. */
  nonEmptyStringFields: readonly (keyof T & string)[];
  /** Fields every entry must populate with a positive number. */
  positiveNumberFields?: readonly (keyof T & string)[];
}): void {
  describe(registryName, () => {
    it(`has a complete entry for every ${idNoun}`, () => {
      for (const id of ids) {
        expect(registry[id], `missing entry for "${id}"`).toBeDefined();
      }
      for (const [id, details] of Object.entries<T>(registry)) {
        const record = details as Record<string, unknown>;
        for (const field of positiveNumberFields) {
          expect(record[field], `${id}.${field}`).toBeGreaterThan(0);
        }
        for (const field of nonEmptyStringFields) {
          expect((record[field] as string).length, `${id}.${field}`).toBeGreaterThan(0);
        }
      }
    });
  });
}
