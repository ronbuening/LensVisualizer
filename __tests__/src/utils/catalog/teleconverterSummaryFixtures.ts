/**
 * Generated teleconverter summaries plus one synthetic published converter.
 *
 * Page and search tests need a published converter whatever the catalog holds: while every real converter is a
 * hidden test model, the generated list has nothing a visitor could reach. The real entries stay in place so the
 * same tests also assert that hidden ones are left out.
 */

import type { TeleconverterSummary } from "../../../../src/utils/catalog/teleconverterSummaries.js";

/** Published converter that mounts on one real catalog lens. */
export const PUBLISHED_TELECONVERTER_SUMMARY: TeleconverterSummary = {
  key: "synthetic-published-teleconverter",
  name: "SYNTHETIC 2× Teleconverter",
  visible: true,
  magnification: 2,
  lensMounts: ["fujifilm-x"],
  compatibleLensKeys: ["fuji-xf-50140mm-f28"],
};

/**
 * `vi.mock` factory body for `src/generated/teleconverter-summaries.json`.
 *
 * @param importOriginal - vitest's loader for the real generated module
 * @returns the generated summaries with the synthetic published converter appended
 */
export async function withPublishedTeleconverter(
  importOriginal: () => Promise<unknown>,
): Promise<{ default: TeleconverterSummary[] }> {
  const generated = (await importOriginal()) as { default: TeleconverterSummary[] };
  return { default: [...generated.default, PUBLISHED_TELECONVERTER_SUMMARY] };
}
