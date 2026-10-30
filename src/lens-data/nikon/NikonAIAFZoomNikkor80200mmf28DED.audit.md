# Audit Log — Nikon AI AF Zoom-Nikkor 80-200mm f/2.8D ED

Patent: US 5,579,171 A, Example 3 / Figure 3.

## 2026-08-08 — Patent-figure SD, diagram-label, name, and glass audit

- Compared both zoom endpoints with Figure 5 on patent page 6. The ray-overlaid drawing limits precise rim
  photogrammetry, but its large three-element front unit, narrow negative second unit, central positive unit, and
  reduced final relay agree with the modeled envelopes. No figure-supported SD correction cleared the audit threshold.
- Added L1–L16 patent-source labels while retaining G1–G4 functional-unit and D1–D5 cemented-pair annotations.
- Corrected the product display name to Nikon's `AI AF Zoom-Nikkor 80-200mm f/2.8D ED` designation.
- Rechecked all rounded `νd` diagram badges and the three production ED positions. Thirteen of sixteen elements have
  coefficient-backed catalog equivalents; only the two `805255` dense-flint positions and the `744450` lanthanum-flint
  position remain explicitly unmatched. No catalog name is presented as a production-supplier claim.

## 2026-08-11 — Hikari catalog follow-up

- Visually rechecked Example 3 / Table 4 in the local patent PDF. Surfaces 10 and 22 confirm the two authored
  `1.804580 / 25.50` rows.
- Added Hikari's first-party J-SF6 power-series row (`1.80518 / 25.45`, code `805255`) and assigned that compatible
  public curve to L7 and L14. The `0.00060` index residual and `-0.05` Abbe residual are both inside the runtime safety
  window; the labels do not claim that Hikari supplied the production glass.
- Fifteen of sixteen elements now have coefficient-backed catalog equivalents. L15 (`1.74400 / 45.00`) remains the
  only explicit unmatched row.

## 2026-08-18 — H-LaF3B equivalent backfill

- Re-rendered `patents/US5579171.pdf`, PDF page 15. Example 3 / Table 4 row 25 confirms L15 at
  `nd = 1.744000`, `νd = 45.00`.
- Assigned the existing CDGM H-LaF3B curve as an optical equivalent. Its catalog coordinate differs by
  `Δnd = 0.000000` and `Δνd = -0.10`, and the same equivalent is already used for Nikon's 744450 rows in
  two related telephoto prescriptions. The production supplier remains unspecified.
- All sixteen glass elements now have coefficient-backed dispersion models.

## 2026-10-30 — Fresh original-source shape and glass review

- Directly inspected local `patents/US5579171.pdf`: **correct Figure 3, PDF p. 4**, 600 dpi crop, associated third-embodiment text (p. 14), and complete Table 4 prescription/glasses/endpoints (p. 15). Native raster is 300 ppi (`pdfimages -list`), so the render is 2×. All sixteen elements, five cemented interfaces, and convex/concave faces were inspected. The old Figure 5 / PDF 6 reference in historical audit prose is an error: that is the fifth embodiment 35–105 mm with a front filter, not this third-embodiment 80.94–196 mm model. Current data/analysis references are corrected; no unrelated filter or geometry is imported.
- Figure 3 resolves a vertical outer stroke on L15's concave rear S26. Mean source q ≈ 0.875, edge ≈ 118 native px, one-pixel band ±0.0159, separate ink ambiguity ≈ ±0.02. First-to-last vertex span gives ≈ 8.4 native px/mm. Measured-proportion trial depth 2.80 mm gives cap 12.343 mm but fails the beam guard: reach 12.9799 mm at zoom 0.8 / field 5.43° requires at least 13.0299 mm. Adopted inferred depth 3.16 mm gives cap 13.069140 / outer 14 mm (q = 0.93351); the trim is moved outward for complete beam access. Other shallow curves and ray crossings do not establish additional lands. Source gaps and the existing 0.97 gap-sag policy remain unchanged.
- Fresh glass-only reinspection confirms all 16 Table 4 index/Abbe pairs. All16 resolve to compatible coefficient-backed catalog curves, including current H-LaF3B for L15 and J-SF6 for L7/L14. Historical unmatched counts in dated notes are superseded. Table 4 labels refractive index/Abbe number without an explicit wavelength; the existing conventional d-line interpretation is retained and qualified, without an invented source wavelength or e-line conversion. No C/F/g or partial-dispersion datum is printed here; none is authored. Production ED-position correlation remains separate from catalog supplier/chemistry or APD proof. All source media values, resolver selections and RGB/V responses remain identical.
- Public source figure and curve-count wording are synchronized. Focused surface/image-circle/aperture/field checks and actual nine-state SVG review are recorded with this batch; finite paths, zero hidden trim. Source R/d, stop, endpoint/interpolation/focus controls and all tolerances remain unchanged. Dense inferred-cut sweep results follow below.

- Dense independent inferred-cut probe: 21 zoom × 21 focus states, grid 41, 0.5° field steps, 4,450,677 beam rays. S26 cap 13.069140 mm, margin 0.05 mm, maximum refined reach 12.9794 mm at zoom 0.6 / focus 0 / field 6.492°. Zero clipped, within-margin, or unlaunchable rays/fields.
