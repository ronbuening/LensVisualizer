# Audit Log - Mamiya-Sekor CS 35mm f/2.8

Patent: JP1978-066222, Example 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Glass classification and Sellmeier audit

### Catalog-equivalent review

| Element | Patent coordinates | Disposition | Reasoning |
|---|---:|---|---|
| G1, G3 | 1.48749 / 70.1 | S-FSL5 catalog equivalent | Existing catalog entry reproduces `nd` and differs by only about +0.14 in `vd`; used as a dispersion model without asserting the production supplier |
| G2 | 1.69480 / 55.5 | Retained unmatched | No public coefficient-backed entry closely reproduces both coordinates; the nearest common lanthanum-crown family is about +0.002 in `nd` |
| G4 | 1.75520 / 27.5 | Retained 755275 dense-flint class | Existing code resolution supplies trusted Sellmeier data; vendor identity remains ambiguous between close public entries |
| G5 | 1.74400 / 44.8 | Retained 744448 lanthanum-flint class | Existing code resolution supplies trusted Sellmeier data; the patent does not identify a production melt |
| G6 | 1.71300 / 53.9 | Retained 713539 lanthanum-crown class | Existing code resolution supplies trusted Sellmeier data; vendor identity remains ambiguous between close public entries |

### Coverage result

- Strict and trusted Sellmeier coverage increased from 3/6 to 5/6 elements after assigning the existing S-FSL5 catalog equivalent to G1 and G3.
- No new catalog entry was added. G2 lacks a source-backed public identity and coefficients, so creating an entry would encode unsupported dispersion data.
- The other three catalog-resolved classes remain vendor-neutral because the numerical match does not establish Mamiya's production supplier.

### Diagram and source review

- No matching local patent PDF is present in `patents/`, so the project's patent-figure audit procedure blocks a direct semi-diameter revision for this lens. The current image-circle audit reports zero undersized surfaces.
- Reviewed all six surface-derived element types, air-spaced group boundaries, and rounded Abbe badges; they agree with the stored prescription.
- Shortened the crowded functional captions from `FRONT G1–G2`, `MIDDLE G3–G4`, and `REAR G5–G6` to `G1–G2`, `G3–G4`, and `G5–G6` without changing their physical spans.
- The production display name `MAMIYA-SEKOR CS 35mm f/2.8` remains correct.
