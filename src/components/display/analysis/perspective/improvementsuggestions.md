# Improvement Suggestions for src/components/display/analysis/perspective

These notes were created while mapping imports, exports, and file relationships for this folder.

## Several files use deep relative imports

- Evidence: PerspectiveDistortionView.tsx (5), PerspectiveChromaticCurves.tsx (3), PerspectiveChromaticRayFans.tsx (3), perspectiveAnalysisUi.tsx (2), PerspectiveBokehAnalysis.tsx (2), PerspectiveChromaticAnalysis.tsx (2)
- Implementation overview: Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.
- Upstream considerations: Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.
- Downstream considerations: Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.
