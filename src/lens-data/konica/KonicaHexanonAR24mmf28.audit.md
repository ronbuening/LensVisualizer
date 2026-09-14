# 2026-09-05 UTC audit

- Source: `patents/JPA 1980087117-000000.pdf`, PDF page 5, Fig. 1, Example 1; rendered at 600 dpi.
- SD decision: Retained all SDs. Dense leader lines corrupt automated ENV/RIM results (several repeated 16.08 mm values); manual inspection of the clear optical outlines supports the existing apertures, including the cross-gap-limited L6/L7 pair.
- Glass: 8/8 physical elements resolve to coordinate-compatible catalog curves; all patent nd/vd values retained and no production supplier inferred.
- Display: manufacturer/HEXANON AR identity retained; explicit diagram labels follow the patent component numbering. Zoom range typography uses an en dash.
- Verification: surface and image-circle audits passed before editing; final results and shared quality gates are recorded in [the batch record](../../../agent_docs/records/konica-ar-september5-audit.md).
- Visual check: inspected the patent crop and rasterized paths produced by the production SVG geometry helper. Live browser verification was unavailable (`No browser is available`).

Coverage improves from 4/8 to 8/8: L2/L3 use qualified S-BAL35 curves, L7 uses J-LAK7R, and L4 resolves through the newly sourced PBH23 `785262` catalog row. The two ESLint precision failures were redundant digits in standalone `fl` literals; canonical numeric spelling preserves identical JavaScript values.
