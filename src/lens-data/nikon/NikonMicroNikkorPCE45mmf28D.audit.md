# Audit Log — NIKON PC-E MICRO-NIKKOR 45mm f/2.8D ED

Patent: US 7,656,591 B2, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US7656591.pdf`.
- Table 1 confirms the relevant rows:
  - surface 3 / L12: nd = 1.75692, νd = 31.59
  - surface 8 / L23: nd = 1.56732, νd = 42.72

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L12 | `Proprietary high-dispersion lanthanum flint (757/316)` | `757316 — high-dispersion lanthanum flint...` | No exact public coefficient-backed match found; kept unresolved with unbroken code. |
| L23 | `Proprietary flint (567/427)` | `S-TIL26 (OHARA, 567428)` | Existing coefficient-backed catalog entry close to the patent row. |

### Catalog-search disposition

- Search for `757316` found no defensible exact match in public coefficient-backed catalogs.
- `S-TIL26` is close enough to the rounded patent row to replace the previous generic proprietary label for L23.
- Updated the analysis table to move L23 out of the unmatched set and leave L12 unresolved.

## 2026-06-04 — Sweep 3 local patent recheck

Local patent source: `patents/US7656591.pdf` (untracked local file).

- Re-extracted the local PDF with `pdftotext -layout`.
- The patent prescription publishes `nd` and `νd` for the glass rows, including L12 and the ED L21, but no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows were found in the extracted text.
- No data-file spectral backfill was made from this pass.

## 2026-08-11 — E-LAF11 catalog correction

- Rechecked the retained Hikari catalog data and found E-LAF11 at `nd = 1.75692`, `νd = 31.591329`, code `757316`.
- Replaced the stale unmatched disposition for L12 with an E-LAF11 catalog-equivalent label. The match supplies a
  coefficient-backed curve while leaving the production supplier unidentified.

## 2026-10-30 — Fresh source lands, complete glass and APD review

- Directly inspected original `patents/US7656591.pdf`: Example 1 Figure 1 on PDF p. 2 at 600 dpi, all nine Table 1 media/definitions and conditions on p. 12, and Figure 2A/2B plots on p. 3. Explicit conventions: d = 587.6 nm, g = 435.8 nm. Table FNO 2.89 versus plot 2A FNO 2.87 is a source difference; retain the existing table-based design 2.89 and marketing 2.8. Source R/d, all nine nd/νd pairs and floating-focus controls remain unchanged. Conditional ν32 = 70.76 versus numerical glass 70.45 is likewise retained as a source inconsistency, not called ordinary rounding or used to alter the glass.
- Reviewed every convex/concave and cemented face. S2 keeps clear cap 20.8 with land to old outer rim 22.5 mm; source q ≈ 0.876 ± 0.007 (native half-edge about 266 px, approximately 11.5–11.8 native px/mm, 300 ppi scan). Adopted q 0.924444 / land 1.7 mm preserves its prior optical cap. S5 grows continuously to 17.4 mm; S6 keeps clear 13.4 with land to 17.4 mm. Its source q ≈ 0.78 ± 0.01 (native half-edge about 205 px), adopted q 0.770115 / land 4.0 mm. These extensions do not reduce either optical cap and do not claim a published numerical aperture.
- L12's approximate 19.7 mm full-height trial fails S2→S3: 5.25 mm sag exceeds 5.130 allowed across 5.700 mm. Use conservative connected continuous S3/S4 caps 19.5 mm within the real gap bound, recording the remaining source-outline difference. S11 and S17 grow continuously to their existing 12.8 mm partner rims. Full L33 front 12.2 trial fails S14→S15 (1.84 > 1.710 mm allowed in 1.900); retain its prior 11.7 mm cap without a fabricated flat land. Other faces have no further supported usable trims.
- L21's former family annotation selected loose FCD1 (1.497/81.61), although current J-FKH1 offers 1.49782/82.57 against source 1.49782/82.56. Use the closer qualified J-FKH1 spectral proxy. All nine media have compatible coefficient coverage; supplier/melt/composition remain unspecified. The inherited inferred APD badge now explicitly refers to the correlated production ED position, not proof of FPL51 family identity or a source-published spectral anomaly. Removed unsupported formulation/secondary-spectrum claims and incorrect exact/rounding labels; no numeric θgF, dPgF or extra spectral-line values are added.
- Runtime source G index remains exactly 1.49782. Proxy change gives R 1.495960253491→1.495980310932, B 1.502050269818→1.502009281952, V 1.505331886270→1.505256465624; these are modeled curve differences, not patent measurements. Other selected coefficient curves remain unchanged.
- Focused surface, image-circle, stated aperture and centered source-field checks pass; nine actual SVG focus/zoom-grid views have connected outlines and no automatic rim trim. Catalog consistency passes. The existing 58.6 mm source design-circle versus extreme-shift illumination limitation remains; centered checks do not establish full diagonal-shift throughput.
