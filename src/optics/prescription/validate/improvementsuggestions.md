# Improvement Suggestions for src/optics/prescription/validate

These notes were created while mapping imports, exports, and file relationships for this folder.

## Several files use deep relative imports

- Evidence: references.ts (2), schema.ts (2), teleconverter.ts (2), folded.ts (1), geometry.ts (1), index.ts (1)
- Implementation overview: Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.
- Upstream considerations: Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.
- Downstream considerations: Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.
