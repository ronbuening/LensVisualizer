# Improvement Suggestions for src/components/display/analysis

These notes were created while mapping imports, exports, and file relationships for this folder.

## Several files use deep relative imports

- Evidence: ChromaticTab.tsx (8), DistortionTab.tsx (8), VignettingTab.tsx (7), OpticalSummaryTab.tsx (6), PupilAberrationTab.tsx (6), AberrationsPanel.tsx (5)
- Implementation overview: Prefer a local index module or existing public surface for repeated cross-folder imports. Where a domain already has a stable barrel, migrate callers to that surface instead of reaching through multiple parent directories.
- Upstream considerations: Adding barrels can increase accidental public API area; document intended exports and avoid exposing internal helpers.
- Downstream considerations: Changing import paths is mechanically simple but can mask circular dependencies, so re-run lint/typecheck and inspect bundle warnings if new barrels are introduced.

## Analysis tab wiring spans display components and optics analysis adapters

- Evidence: The folder has many tab, chart, and hook modules that import prepared analysis state plus specialized optics analysis helpers.
- Implementation overview: Keep new analysis features behind one folder-local hook or adapter per tab, then expose only chart-ready data to presentational components.
- Upstream considerations: Moving computation too far into UI components can duplicate prepared-state work and slow slider interactions.
- Downstream considerations: Moving display formatting into optics helpers would make the pure engine depend on UI concerns; keep that boundary intact.

