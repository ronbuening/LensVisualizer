# Audit Log - Rodenstock Apo-Sironar-W 150mm f/5.6

Patent: DE 3907928 A1, Table 5

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_3907928_A1.pdf`. The drawing sheet shows FIG. 1 for the wide-aperture Apo-Sironar family.
- The data file already documents that Table 5 is internally inconsistent and that this is an EFL-reconciled reconstruction. The patent omits clear-aperture semi-diameters.
- FIG. 1 shows a broad front half, stop close to the first rear surface, and a broad rear half of comparable scale. Stored SDs follow that drawing: about 15.0-12.0 mm before the stop, a 10.992 mm stop, and about 12.0-14.0 mm through the rear reconstruction.
- No SD values changed. Current values remain inferred from the patent figure, the reconstructed Table 5 model, and renderer sag/edge constraints.

## 2026-07-29 - Patent-rounded glass disposition

- Rechecked local `patents/DE_3907928_A1.pdf`, Table 5. The reconstruction's R, d, nd, and νd values remain
  unchanged.
- S1 `N-BK7 class` -> unmatched rounded crown at 1.520 / 64.2.
- S9 `FK3 class` -> unmatched rounded fluor-crown at 1.460 / 65.8.
- S11 `N-KZFS5 class` -> unmatched rounded short flint at 1.650 / 39.6.
- Table 5's coarse rounding cannot establish unique catalog rows; the analysis now treats those names as family
  comparisons only.

## 2026-08-07 - Legacy K10 catalog recovery

- The official Schott K10 datasheet supplies Sellmeier coefficients for `nd=1.50137`, `νd=56.41`, code 501564.
- The Table 5 L4 annotation already identifies K10 as a patent-rounded Schott equivalent, so it now resolves through the vendor curve without strengthening the claim on the other coarsely rounded rows.
- The local `patents/DE_3907928_A1.pdf` review recorded above remains the prescription source. No geometry changed.

## 2026-10-19 - Archived and hidden

Replaced at key `rodenstock-apo-sironar-w-150f56` by the seven-element DE 3907928 C2 Table 5 model
(`RodenstockApoSironarW150mmf56.data.ts`). This file now uses key `rodenstock-apo-sironar-w-150f56-a1-reconstruction`
with `visible: false`. Reasons recorded in the replacement's audit log: this reconstruction adds an unprinted
CaF2-class element and a flat closing surface (8 elements, a four-lens rear group against claim 1 and Rodenstock's
7/5), and its chief ray is blocked at surfaces 1–3 before the 252 mm image circle (coverage ends near 36°).
