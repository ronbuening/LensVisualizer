# Improvement Suggestions for src/optics/aberration

These notes were created while mapping imports, exports, and file relationships for this folder.

## Large files carry substantial maintenance weight

- Evidence: coma.ts (1051 lines), bokeh.ts (764 lines), fieldCurvature.ts (739 lines), offAxis.ts (672 lines)
- Implementation overview: For code-heavy modules, extract pure calculations or formatting helpers into adjacent files. For data/catalog-heavy modules, split records into focused shards behind the existing index or public export surface.
- Upstream considerations: Tests and call sites that import the current module path should keep working if the original file re-exports or delegates to the extracted helpers.
- Downstream considerations: Moving exported names directly can break imports in pages, components, tests, and scripts; perform the split in stages and run typecheck plus focused tests.

