# Improvement Suggestions for src/optics/analysis/aberration

These notes were created while mapping imports, exports, and file relationships for this folder.

## Large files carry substantial maintenance weight

- Evidence: fieldCurvature.ts (821 lines)
- Implementation overview: For code-heavy modules, extract pure calculations or formatting helpers into adjacent files. For data/catalog-heavy modules, split records into focused shards behind the existing index or public export surface.
- Upstream considerations: Tests and call sites that import the current module path should keep working if the original file re-exports or delegates to the extracted helpers.
- Downstream considerations: Moving exported names directly can break imports in pages, components, tests, and scripts; perform the split in stages and run typecheck plus focused tests.

## Several files use deep relative imports

- Evidence: bestFocus.ts (1), fieldCurvature.ts (1), offAxis.ts (1), shared.ts (1), types.ts (1)
- Implementation overview: Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.
- Upstream considerations: Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.
- Downstream considerations: Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.
