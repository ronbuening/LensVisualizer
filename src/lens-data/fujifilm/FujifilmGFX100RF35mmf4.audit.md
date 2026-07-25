# Audit Log — FUJIFILM FUJINON 35mm f/4 (GFX100RF)

Patent: US 2025/0362482 A1, Example 5 (Tables 13-15)

## 2026-06-25 — Patent partial-dispersion and APD status audit

Reviewed the local untracked image-only PDF `patents/US_2025362482_A1.pdf`. Because the PDF does not extract text with `pdftotext`, page 13 was rendered and checked visually against the data file.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11-L23 / S1-S19 | `dPgF` | omitted | patent-derived values from −0.00934 to +0.01675 | Table 13 publishes θgF for every material row. Values were transcribed as `ΔPgF = θgF - (0.6438 - 0.001682 * νd)` so code-only or fallback dispersion paths retain the patent partial-dispersion data. |
| L23 / S18 | `apd`, `apdNote` | `apd: false` | `apd: "patent"`, ΔPgF ≈ +0.01675 note | Table 13 lists nd=1.92119, νd=23.96, θgF=0.62025. The positive deviation is materially larger than the ordinary rows, so the ultra-high-index FDS24 rear lens merits the APD badge without being labeled ED. |

Notes:

- Table 13 does not publish clear-aperture or DA/semi-diameter values. Existing inferred `sd` values were retained after comparing the surface progression with the patent drawing and the file's stated edge-thickness / conic-limit constraints.
- Table 14 values already matched the data file: f=34.8463 mm, Bf=5.3962 mm, FNo=4.12, and 2ω=83.0°.
- No radius, spacing, focus, asphere, mount, format, or glass-name edits were made.

## 2026-07-24 - Patent-figure semi-diameter audit

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| 16 (L22 front) | `sd` | 11.60 | 12.30 | 44x33 corner ray needs >= 11.86 mm at t = 15.53 mm |
| 17 (L22 rear) | `sd` | 12.60 | 13.50 | needs >= 13.00 mm at t = 14.39 mm |

- Both surfaces are spherical; no aspheric departure bookkeeping was needed.
- FIG. 13 (Example 5, sheet 13) is the matching cross-section. The PDF has no text layer, so the sheet
  was found by rendering pages. Per-element photogrammetry on it was unusable for the front group -
  the focus-travel bracket under G1 mirrors the G1/G1f brackets above and contaminates both half
  envelopes - so the corrections come from the image-circle floor rather than the drawing.
- Note for a future pass: US 2025/0362482 FIG. 5 defines `hE2` as a surface's effective radius, so the
  tables may publish clear apertures directly. Reading them needs OCR.
- Verification: `npm run typecheck` passed; `npm run test` 2440 tests passed; cross-section re-rendered
  and compared with FIG. 13.
- Full method and per-lens results: agent_docs/patent-figure-sd-audit.md.
