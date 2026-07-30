# Audit Log - Rodenstock Grandagon-N 90mm f/4.5

Patent: DE 2444954 A1, Patentanspruch 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2444954_A1.pdf`. The drawing sheet shows the symmetric eight-element wide-angle section.
- The patent publishes e-line prescription data but no clear-aperture semi-diameters.
- Stored SDs follow the same patent silhouette at the 90 mm scale: 25.2 mm at the outer front and rear, 12.2-13.0 mm around the central groups, and a 10.63 mm stop.
- No SD values changed. Current values remain inferred from the patent drawing, exact-ray stop geometry, and large-format coverage constraints.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-30 - SK3 catalog recovery

- Verified SUMITA SK3 in the vendor's 2025-11-07 all-glass catalog at `1.60881 / 58.9`.
- Relabeled L6 from the broader `SK3 / H-ZK4 class` wording to the coefficient-backed SK3 catalog equivalent; the patent-derived `58.86` Abbe value differs only by rounding.
- The historical production supplier remains unspecified. No prescription geometry changed.
