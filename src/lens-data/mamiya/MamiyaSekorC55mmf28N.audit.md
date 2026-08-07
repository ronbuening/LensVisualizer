# Audit Log - Mamiya-Sekor C 55mm f/2.8 N

Patent: JP S55-45883 B2, Example 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Diagram, glass, and source audit

### Figure and geometry review

- No matching local patent PDF is present in `patents/`, so the project's patent-figure audit procedure blocks a direct semi-diameter revision for this lens.
- `npm run audit:image-circle -- src/lens-data/mamiya/MamiyaSekorC55mmf28N.data.ts` reports zero undersized surfaces.
- Reviewed all eight surface-derived element types, D1/D2 cemented boundaries, two functional-block spans, and rounded Abbe badges; they agree with the stored prescription and the supplied site screenshot.

### Glass, labels, and identity review

- Strict and trusted Sellmeier coverage remains 8/8. The retained names are catalog-equivalent classes or vendor-neutral coordinate classes where the patent does not establish a production supplier.
- No APD tag is added: the source data do not publish partial-dispersion evidence for an element-level designation.
- `FRONT BLOCK` and `REAR BLOCK` remain legible and accurately describe the authored functional spans.
- The production display name `MAMIYA-SEKOR C 55mm f/2.8 N` remains correct.
