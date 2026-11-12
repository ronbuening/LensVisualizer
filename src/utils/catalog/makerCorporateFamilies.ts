/**
 * Sourced corporate families of catalog makers.
 *
 * The universal relationship map groups models without a patent under an undated catalog-maker hub. When a maker is
 * the same company lineage as a corporate family that patent assignees already belong to (see
 * `assigneeCorporateHistory.ts`), the hub joins that family, so the maker's book-derived models sit in the same network
 * as its patents. Keys are maker slugs (`scripts/maker-prefixes.mjs`); each family name must match an assignee's
 * `corporateFamily` entry exactly.
 */

import type { CorporateFamilyPeriod } from "../../types/catalog.js";

export const MAKER_CORPORATE_FAMILIES: Readonly<Record<string, readonly CorporateFamilyPeriod[]>> = {
  kmz: [
    {
      family: "KMZ",
      effectiveFrom: "1942",
      sourceUrl: "https://bigenc.ru/c/krasnogorskii-zavod-imeni-s-a-zvereva-dfb513",
      note: "The catalog maker KMZ is the Krasnogorsk Mechanical Plant, organized in Krasnogorsk in 1942.",
    },
  ],
};
