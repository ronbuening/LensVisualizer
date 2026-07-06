# Audit Log - KODAK ENLARGING EKTAR 100mm f/4.5

Patent: US 2,279,384, Example 6

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["enlarging-lens"]`.
- Eastman Kodak's 1948 enlarging-equipment brochure lists the Kodak Enlarging Ektar 4-inch f/4.5 among Precision Enlarger lenses and accessories, matching this data file's production application context.
- `imageFormat` remains unset: the brochure lists multiple negative carriers and states lens choice depends on negative size, but the reviewed text does not bind the 4-inch f/4.5 lens to one canonical catalog format strongly enough to seed a single `imageFormat` id.

### Sources

- Eastman Kodak Corp., _Kodak Enlarging Equipment Brochure 1948_, Internet Archive item `kodak-enlarging-equipment-brochure-1948`, https://archive.org/details/kodak-enlarging-equipment-brochure-1948

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2279384.pdf`. The patent text publishes Example 6, but the drawing sheets show representative Examples 1, 4, 7, and 10 rather than a dedicated Example 6 figure. The patent does not publish clear apertures or semi-diameters.
- Example 6 belongs to the same f/4.5 group discussed around Example 4. Fig. 2 shows the relevant modified-triplet family: broad positive front and rear doublets with a narrow negative center element and a small central stop space.
- Stored SDs preserve that family silhouette: the front doublet is 11.4-14.0 mm, the inferred stop is 9.357 mm, the middle negative remains 11.4-12.0 mm, and the rear doublet expands to 15.4-15.8 mm.
- No SD values changed. Current values remain inferred from the patent family figure, the Example 6 prescription, f/4.5 stop geometry, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
