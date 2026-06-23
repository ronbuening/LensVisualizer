# Improvement Suggestions for src/optics/analysis

These notes were created while mapping imports, exports, and file relationships for this folder.

## Import cycles make this area harder to reason about

- Evidence: src/optics/compat.ts -> src/optics/analysis/analysisJobs.ts -> src/optics/analysis/distortion.ts -> src/optics/distortionAnalysis.ts -> src/optics/optics.ts; src/optics/compat.ts -> src/optics/analysis/analysisJobs.ts -> src/optics/analysis/distortion.ts -> src/optics/distortionAnalysis.ts -> src/optics/projection.ts
- Implementation overview: Move shared constants/types into a lower-level helper, invert UI-to-domain dependencies through function arguments, or introduce a narrow adapter module so each cycle has a clear direction.
- Upstream considerations: Breaking cycles can change initialization order, so preserve exported values and avoid moving side-effectful code without a regression check.
- Downstream considerations: Consumers may rely on barrel exports that currently hide the cycle; keep those barrels stable until imports have migrated.

