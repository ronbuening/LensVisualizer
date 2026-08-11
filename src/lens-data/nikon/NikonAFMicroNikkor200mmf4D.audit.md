# Audit Log - Nikon AF MICRO-NIKKOR 200mm f/4D IF-ED

Patent: US 5,751,485, Ninth Embodiment / Table 9

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5751485.pdf`. The brief-description text maps the Ninth Embodiment to FIG. 9 and Table 9.
- The patent includes effective-diameter variables for conditional expressions, but not a per-surface clear-aperture or semi-diameter table for Table 9.
- FIG. 9 shows large front floating groups, a smaller G2 before the stop, and the final GL/GLP group behind the stop. Stored SDs preserve that profile: 31.0-25.0 mm through G11/G12, 21.5-16.0 mm through G2, a 14.7416 mm stop, and about 15.8-18.2 mm through GL.
- No SD values changed. Current values remain inferred from FIG. 9, paraxial ray fans, edge-thickness limits, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-29 - Glass coverage follow-up

- Relabeled L1 and L7 from unresolved `804/339` class descriptions to coefficient-backed Hikari E-LAFH2.
- The Hikari catalog row is an exact match for the patent's `nd=1.80384`, `vd=33.89`, and code `804339`; its
  computed g-line index also agrees with the patent's stored `ng=1.83464`.
- Synchronized both element narratives and the glass-identification table. No prescription or SD values changed.

## 2026-07-29 - `796409` coefficient-source review

- Rendered and visually checked the patent prescription. Table 9 row 6 confirms L4 at
  `R = 79.0168`, `d = 2.5`, `nd = 1.79631`, and `vd = 40.90`, matching the stored row.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  OHARA S-LAH52 is `1.799516 / 42.225007`, outside the runtime d-line tolerance, while Hikari
  J-LASF03 is a materially different `1.80610 / 40.97`.
- Retained L4's explicit unmatched `796409` lanthanum-flint-class annotation. No supplier,
  nearest-neighbor model, prescription geometry, or spectral claim changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 5,751,485 Table 9 on rendered PDF page 33: L4 is `1.79631 / 40.90`.
- The later obsolete-inclusive HOYA source contains NBFD2 at `1.797199 / 41.143795`, resolving the earlier
  catalog-source blocker with a coefficient-backed match inside runtime tolerance.
- Relabeled L4 as a supplier-neutral NBFD2 optical equivalent and synchronized the analysis. No prescription,
  focus, aperture, or semi-diameter values changed.
