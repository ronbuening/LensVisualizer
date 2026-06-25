# Improvement Suggestions for src/optics

These notes were created while mapping imports, exports, and file relationships for this folder.

## Large files carry substantial maintenance weight

- Evidence: glassCatalogData.ts (3548 lines), validateLensData.ts (1138 lines), runtimeLens.ts (1080 lines), rayTrace.ts (757 lines)
- Implementation overview: For code-heavy modules, extract pure calculations or formatting helpers into adjacent files. For data/catalog-heavy modules, split records into focused shards behind the existing index or public export surface.
- Upstream considerations: Tests and call sites that import the current module path should keep working if the original file re-exports or delegates to the extracted helpers.
- Downstream considerations: Moving exported names directly can break imports in pages, components, tests, and scripts; perform the split in stages and run typecheck plus focused tests.

## Import cycles make this area harder to reason about

- Evidence: src/optics/compat.ts -> src/optics/analysis/analysisJobs.ts -> src/optics/analysis/distortion.ts -> src/optics/distortionAnalysis.ts -> src/optics/optics.ts; src/optics/compat.ts -> src/optics/analysis/analysisJobs.ts -> src/optics/analysis/distortion.ts -> src/optics/distortionAnalysis.ts -> src/optics/projection.ts
- Implementation overview: Move shared constants/types into a lower-level helper, invert UI-to-domain dependencies through function arguments, or introduce a narrow adapter module so each cycle has a clear direction.
- Upstream considerations: Breaking cycles can change initialization order, so preserve exported values and avoid moving side-effectful code without a regression check.
- Downstream considerations: Consumers may rely on barrel exports that currently hide the cycle; keep those barrels stable until imports have migrated.

