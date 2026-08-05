# Improvement Suggestions for src/optics/glassCatalogEntries

These notes were created while mapping imports, exports, and file relationships for this folder.

## Large files carry substantial maintenance weight

- Evidence: ohara.ts (1827 lines), hoya.ts (1128 lines), hikari.ts (1066 lines)
- Implementation overview: For code-heavy modules, extract pure calculations or formatting helpers into adjacent files. For data/catalog-heavy modules, split records into focused shards behind the existing index or public export surface.
- Upstream considerations: Tests and call sites that import the current module path should keep working if the original file re-exports or delegates to the extracted helpers.
- Downstream considerations: Moving exported names directly can break imports in pages, components, tests, and scripts; perform the split in stages and run typecheck plus focused tests.

