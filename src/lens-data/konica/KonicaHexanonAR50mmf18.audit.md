# 2026-09-05 UTC audit

- Source: `patents/JPA 1982108817-000000.pdf`, PDF page 5, Fig. 2, Example 1; rendered at 600 dpi.
- SD decision: Retained all SDs. Figure/data scale is approximately 0.91 with relative shape ratios 0.97-1.03; this is within figure uncertainty. Retained gapSagFrac=0.95 and the positive 0.064 mm shared-band clearance at S4/S5.
- Glass: 6/6 physical elements resolve to coordinate-compatible catalog curves; all patent nd/vd values retained and no production supplier inferred.
- Display: manufacturer/HEXANON AR identity retained; explicit diagram labels follow the patent component numbering. Zoom range typography uses an en dash.
- Verification: surface and image-circle audits passed before editing; final results and shared quality gates are recorded in [the batch record](../../../agent_docs/records/konica-ar-september5-audit.md).
- Visual check: inspected the patent crop and rasterized paths produced by the production SVG geometry helper. Live browser verification was unavailable (`No browser is available`).

## 2026-09-25 — MTF image-plane census

Source: local `patents/JPA 1982108817-000000.pdf`, Example 1, PDF p.3 lower right (printed p.85). Viewed the complete table and a 400 dpi crop. Compared all eleven radii, ten thicknesses/gaps and six nd/νd pairs. The data correctly applies ×0.5 to every dimension, including fB=69.999→34.9995. Infinity only; no plates or aspheres. The inferred stop splits source d6=18.50→9.25 into 5.19+4.06 without changing optical separation.

**Cause: transcription error plus source contradiction.** Source d4 is unambiguously 2.43, not the previously transcribed 2.45; changed model S4 d from 1.225 to 1.215. Other source values match. The native spacing sum is now 61.050 versus printed Σd=61.060; native EFL 100.497294121 and BFL 70.759211637 do not reproduce printed 100/69.999. No additional single source-supported misprint resolves these discrepancies. Keep all published values. Updated model EFL 50.248647060, BFL 35.379605819, authored final gap 34.9995 mm. Runtime offset **+0.344292 → +0.380106 mm**.

The smaller source gap triggered the conservative 95% sag-budget guard, although physical surfaces retain about 0.054 mm clearance. Kept inferred apertures unchanged and set the documented gapSagFrac to 0.96; buildLens geometry checks pass. This does not alter optical positions. Updated dependent analysis, deleted Section E row and recorded the prescription correction in the changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
