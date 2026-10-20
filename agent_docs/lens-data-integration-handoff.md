# Lens Data Integration Handoff

Use this copy when another AI is constructing a LensVisualizer prescription and companion analysis.

## AI Handoff Copy

Build the lens as one source-traceable pair: `LensName.data.ts` plus the optional same-stem
`LensName.analysis.md`. Start from `src/lens-data/TEMPLATE.data.ts.template` and follow
`LENS_DATA_SPEC.md` and `LENS_ANALYSIS_SPEC.md`; keep `schema: 2` and `satisfies LensDataV2Input`. The simplest integration
path is to place both drafts at the `src/lens-data/` root and run `npm run generate:metadata`, which moves the pair into
the derived maker folder and rewrites the `LensDataV2Input` import. If working directly in a maker folder, import from
`../../types/lensDataV2.js`. Audit logs are not moved automatically.
Author and edit catalog files in V2. Convert archived V1 arrivals with `npm run organize:lens-data` or
`npm run convert:lens-data -- --input <file> --write` before integration; see
[Adding Archived V1 Files](workflow.md#adding-archived-v1-files).
Use [Reading V1 Audits](../src/lens-data/LENS_DATA_SPEC.md#reading-v1-audits) for historical audit field names.

Transcribe one identified patent embodiment, preserve its signs and precision, and record every deviation from it.
Follow [Scope: What to Include](../src/lens-data/LENS_DATA_SPEC.md#scope-what-to-include) for filters, `rearPlates`,
dummy planes and active mirror/blocking surfaces. Use exactly one `STO`, with radius authority from
[Stop and Aperture](../src/lens-data/LENS_DATA_SPEC.md#stop-and-aperture). Check cemented-interface `medium`
assignments, `gaps` rows, `zoom.stations[]` and `focus.keyframes` against
[Surfaces](../src/lens-data/LENS_DATA_SPEC.md#surfaces) and [States](../src/lens-data/LENS_DATA_SPEC.md#states).
Never invent missing close-focus spacings: either keep the published state or label a constrained reconstruction in
the header, `focus.description`, and analysis. Mark source rows using
[Published Stations](../src/lens-data/LENS_DATA_SPEC.md#published-stations). Apply the spec's
[scaling rules](../src/lens-data/LENS_DATA_SPEC.md#data-sourcing-checklist) to all lengths and surface coefficients.

Add complete structured patent attribution (`source.patentNumber`, all `source.authors`, all `source.assignees`, and
`source.patentYear`) and retain a concise `subtitle` for the embodiment/correlation. Use only canonical `catalog.lensMounts` and
`catalog.imageFormat` ids. Put `dPgF`, `nC`, `nF`, and `ng` directly on `ElementV2Input`; there is no authored `spectral` block.
Resolve glass labels against the catalog and use `Unmatched (...)` when the stored `nd`/`νd` cannot defend a public
identity. Treat product-to-patent matching, glass equivalence, stop position, semi-diameters, and corrected source typos
as inferences unless the source explicitly establishes them.

Write the analysis from the final data file. Begin with the required bold-label patent metadata block, identify the
embodiment and correlation evidence, then cover architecture, elements, glass, focus, and aspheres when present. Exact
names, counts, indices, coefficients, focus motion, and scaling notes must agree across both files. Separate patent facts,
catalog-derived properties, and author/modeling inferences; do not make APO or partial-dispersion claims without direct
line-index/`dPgF` data or a validated Sellmeier match.

Recent Sony, Tamron, Vivitar, and Canon additions (July 15–21, 2026) repeatedly exposed the same integration problems:
weak production-to-patent correlation, inferred semi-diameters or stop placement presented as source data, cover/dummy
surfaces left in the prescription, close-focus rows reconstructed without disclosure, inconsistent asphere scaling,
speculative glass labels, patent-table typos silently “fixed,” and analysis metadata drifting from structured data.
Resolve these explicitly in the file header and analysis instead of hiding them in code adjustments.

Finish with:

```bash
npm run generate:metadata
npm run typecheck && npm run format:check && npm run lint && npm run test
```

Run `npm run build` when catalog/route/SEO metadata is affected, and `npm run generate:glass-reports` after glass-data
changes. Do not hand-edit generated reports. A lens is integrated only when the corpus tests pass and the rendered
silhouette, stop/pupil behavior, representative rays, focus/zoom endpoints, and analysis prose all agree with the
documented model.

Do not add per-lens or per-batch tests; see "Per-Lens And Audit Test Retention" in `agent_docs/architecture/testing.md`.

## Sources of Truth

- [`../src/lens-data/LENS_DATA_SPEC.md`](../src/lens-data/LENS_DATA_SPEC.md)
- [`../src/lens-data/LENS_ANALYSIS_SPEC.md`](../src/lens-data/LENS_ANALYSIS_SPEC.md)
- [`../src/lens-data/TEMPLATE.data.ts.template`](../src/lens-data/TEMPLATE.data.ts.template)
- [`adding_a_lens.md`](adding_a_lens.md)
- [`lens-patent-audit.md`](lens-patent-audit.md)
