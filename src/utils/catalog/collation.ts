/**
 * Pinned collator for catalog sorting.
 *
 * Prerendered pages sort names under Node's `en` locale; a visitor whose
 * locale collates differently (e.g. sv/fi/da/nb place ö/ü after z) would
 * re-sort at hydration and trigger a React hydration mismatch. Every
 * catalog comparator and page-level sort must use this collator instead of
 * bare `localeCompare` so server and client always agree. Patent numbers
 * keep their own numeric-aware collator in `patentRecords.ts`.
 */
export const catalogCollator = new Intl.Collator("en");
