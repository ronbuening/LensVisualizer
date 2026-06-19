# Audit Log — Nikon Series E 100mm f/2.8

Patent: US 4,303,314, Embodiment 1 / Claim 2

## 2026-06-19 — Test failure and local patent review

- Local patent source: `patents/US4303314.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Embodiment 1, Claim 2, and Fig. 1.

### Correction

| Field | Before | After | Reason |
|---|---|---|---|
| L1 surface 1 `sd` | 24.5 | 21.2 | The prior rim height made L1 edge thickness negative against the printed `r1`, `r2`, and `d1` values. |
| L1 surface 2 `sd` | 24.0 | 20.8 | Keeps the rear clear aperture consistent with the corrected front rim and the narrow L1-L2 air gap. |
| L1 `glass` | `N-SK4 (Schott) / BACD4 class` | `613586 — dense crown (line-index backfill; patent nd=1.61272, νd=58.6)` | The patent gives only `nd`/`νd`; the data file now records a code-based unresolved entry rather than asserting a vendor procurement source. |

## 2026-06-19 — L2 semi-diameter refinement

| Field | Before | After | Reason |
|---|---|---|---|
| L2 surface 3 `sd` | 24.0 | 20.6 | Brings the second element into the same visual aperture envelope as L1 and L3 in Fig. 1. |
| L2 surface 4 `sd` | 20.5 | 19.2 | Keeps the rear clear aperture between L1 rear (`20.8`) and L3 front (`18.5`) while preserving edge and gap clearance. |

### Prescription and layout

- Embodiment 1 was matched surface-by-surface against the data file: radii, thicknesses, `nd`, `vd`, and back-focus agree with the patent table.
- Fig. 1 shows the same positive-positive-negative-stop-positive layout and supports a first element that is smaller than the 52 mm front mechanical envelope.
- The stop remains an inferred split of `d6` at the visual mid-gap position. This is a rendering choice and does not change the patent paraxial prescription.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The corrected L1 SDs pass the signed cross-gap and edge-thickness checks that produced the original test failure. The remaining SDs remain plausible against Fig. 1 and the compact Series E barrel envelope.

### Glass disposition

- L1 now preserves the patent `613586` pair with authored line-index backfill.
- L2, L3, and L4 retain their existing catalog-backed/class labels because their stored `nd`/`vd` values match the patent and resolve consistently.
- `npm run generate:glass-reports` and the targeted failing tests passed after this correction.
