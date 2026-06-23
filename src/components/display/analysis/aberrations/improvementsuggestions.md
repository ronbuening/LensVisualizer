# Improvement Suggestions for src/components/display/analysis/aberrations

These notes were created while mapping imports, exports, and file relationships for this folder.

## Several files use deep relative imports

- Evidence: useComaData.ts (7), useFieldCurvatureData.ts (6), useSphericalAberrationData.ts (6), SectionHeader.tsx (3), SphericalAberrationSection.tsx (3), AstigmatismSection.tsx (2)
- Implementation overview: Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.
- Upstream considerations: Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.
- Downstream considerations: Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.

