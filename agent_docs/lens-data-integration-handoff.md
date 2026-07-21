# Lens Data Integration Handoff

Use this copy when another AI is constructing a LensVisualizer prescription and companion analysis.

## AI Handoff Copy

Build the lens as one source-traceable pair: `LensName.data.ts` plus the optional same-stem
`LensName.analysis.md`. Start from `src/lens-data/TEMPLATE.data.ts.template` and follow
`LENS_DATA_SPEC.md` and `LENS_ANALYSIS_SPEC.md`; do not infer a new schema from older files. The simplest integration
path is to place both drafts at the `src/lens-data/` root and run `npm run generate:metadata`, which moves the pair into
the derived maker folder and rewrites the `LensDataInput` import. If working directly in a maker folder, import from
`../../types/optics.js`. Audit logs are not moved automatically.

Transcribe one identified patent embodiment, preserve its signs and precision, and record every deviation from it.
Exclude sensor cover glass, filters, inactive dummy/flare-cutter planes, and mechanical parts; when an omitted plate
affects source back focus, document the air-equivalent rear spacing. Keep only active mirror/blocking surfaces that the
modeled path can hit. Use exactly one `STO`; keep cemented-interface `elemId` assignments, variable-gap base values, and
zoom-position counts consistent. Never invent missing close-focus spacings: either keep the published state or label a
constrained reconstruction in the header, `focusDescription`, and analysis. If scaling by `s`, scale every length
(`R`, `d`, `sd`, image-plane coordinates) and transform `A_p` to `A_p / s^(p-1)` while leaving `K` unchanged.

Add complete structured patent attribution (`patentNumber`, all `patentAuthors`, all `patentAssignees`, and
`patentYear`) and retain a concise `subtitle` for the embodiment/correlation. Use only canonical `lensMounts` and
`imageFormat` ids. Put `dPgF`, `nC`, `nF`, and `ng` directly on `ElementData`; there is no authored `spectral` block.
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

## Sources of Truth

- [`../src/lens-data/LENS_DATA_SPEC.md`](../src/lens-data/LENS_DATA_SPEC.md)
- [`../src/lens-data/LENS_ANALYSIS_SPEC.md`](../src/lens-data/LENS_ANALYSIS_SPEC.md)
- [`../src/lens-data/TEMPLATE.data.ts.template`](../src/lens-data/TEMPLATE.data.ts.template)
- [`adding_a_lens.md`](adding_a_lens.md)
- [`lens-patent-audit.md`](lens-patent-audit.md)
