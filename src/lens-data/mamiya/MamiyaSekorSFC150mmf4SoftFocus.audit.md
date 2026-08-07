# Audit Log - Mamiya-Sekor SFC 150mm f/4 Soft Focus

Patent: JP S52-141223 A, Example 1 / Figure 3
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Diagram, glass, and source audit

### Figure and geometry review

- No matching local patent PDF is present in `patents/`, so the project's patent-figure audit procedure blocks a direct semi-diameter revision for this lens.
- `npm run audit:image-circle -- src/lens-data/mamiya/MamiyaSekorSFC150mmf4SoftFocus.data.ts` reports zero undersized surfaces.
- Reviewed all five surface-derived element types, D1/D2 cemented boundaries, G1–G3 spans, and rounded Abbe badges; they agree with the stored prescription and the supplied site screenshot.
- The removable softness-control discs remain correctly excluded because they are non-refracting pupil masks rather than prescription elements.

### Glass, labels, and identity review

- Strict and trusted Sellmeier coverage remains 5/5. Patent-coordinate class labels are retained because the source provides no source-backed production melt identities.
- No APD tag is added: the source data do not publish partial-dispersion evidence for an element-level designation.
- The compact `G1`, `G2`, and `G3` captions remain correct and legible.
- The production display name `MAMIYA-SEKOR SFC 150mm f/4 SOFT FOCUS` remains correct.
