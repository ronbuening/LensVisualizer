# Odd-Order Asphere Backfill Queue

The optics engine supports odd-order aspheric coefficients (A3–A19, optional fields on
`AsphericCoefficients`) as of July 2026. Before that, lenses whose patents specify odd polynomial
terms stored even-order least-squares refits (or, in two cases, simply omitted the odd terms).
This file tracks the per-lens work of replacing those approximations with exact patent
transcriptions.

Companion references:

- `src/lens-data/LENS_DATA_SPEC.md` — the `asph` format, odd-order rules, and the KA → K
  conic conversion.
- `__tests__/src/lens-data/oddAsphereBackfill.test.ts` — departure regression assertions for
  completed backfills; extend it with each new backfill.

## Completed reference backfills (July 2026)

| Lens file | Surface(s) | Notes |
|---|---|---|
| [ZeissTouit50mmf28Macro.data.ts](../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) | 4A, 7A | Exact A3–A15, KA = 1 → K = 0. Replaced refits with ≤0.026 µm residuals. |
| [FujifilmGF3570mmf4556.data.ts](../src/lens-data/fujifilm/FujifilmGF3570mmf4556.data.ts) | 11A, 12A | Exact A4–A10 incl. odd A5/A7/A9; A3 = 0 omitted. |
| [FujifilmGFX100RF35mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.ts) | 15A | Exact A4–A20 incl. odd A5–A19; K = +6.0896629652 unchanged. |

## Backfill workflow

1. Read the lens's `.analysis.md` for the preserved patent coefficient tables. If the analysis
   only summarizes "leading coefficients", re-transcribe the full table from the patent first.
2. Convert the conic: patents writing the denominator as √(1 − KA·C²h²) use K = KA − 1
   (KA = 1 → K = 0 spherical base; KA = 0 → K = −1 paraboloid base).
3. Replace the refit `asph` block with the exact patent values. Omit zero-valued odd terms;
   keep required A4–A14 (as 0 when unused).
4. If the prescription was uniformly scaled by factor s (e.g. XF23 f/1.4 scaled to 23 mm),
   rescale each polynomial coefficient: Aₙ(scaled) = Aₙ(patent) / s^(n−1).
5. Update the data-file header note and the analysis file's "renderer is even-order only" /
   refit statements (keep the patent tables — they are the canonical source).
6. Add departure assertions to `oddAsphereBackfill.test.ts` using analysis-quoted departure or
   residual values, then run the fast loop plus the full catalog validation
   (`npx vitest run __tests__/src/lens-data/oddAsphereBackfill.test.ts __tests__/src/utils/catalog/lensCatalog.test.ts`).
7. Visually check the lens page (cross-section, rays at wide aperture, aspheric-compare overlay).

## Queue

Ordered roughly by expected visual/analytical impact (refit residual size, or terms dropped
entirely). Residuals are the values documented in each analysis file.

| Priority | Lens file | Surfaces | Complications / notes |
|---|---|---|---|
| 1 | [FujifilmX7018mmf28.data.ts](../src/lens-data/fujifilm/FujifilmX7018mmf28.data.ts) | S8A, S9A, S10A, S11A | Worst refits: 7 µm (S10A), 9 µm (S11A). Patent uses a paraboloid base (K = −1 in renderer convention); current refit uses K = 0. |
| 2 | [FujifilmXF50f1.data.ts](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) | L2a both surfaces | Odd terms (A5–A19) and higher evens (A16–A20) were **omitted entirely**, not refit — profile is approximate at large heights on an f/1.0 lens. |
| 3 | [FujifilmXF56mmf12.data.ts](../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | *13, *14 | Odd terms omitted (approximation noted in data header). |
| 4 | [FujifilmXF1655mmf28R.data.ts](../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) | all 6 aspheric surfaces | Odd orders A5–A15 non-zero on every surface; on S7A the A5 term alone is ~1.49 mm of rim sag. |
| 5 | [Sigma1424mmf28DGHSM.data.ts](../src/lens-data/sigma/Sigma1424mmf28DGHSM.data.ts) | 5, 6 | Refit residuals 1.59 / 1.64 µm. Patent already uses standard K. |
| 6 | [FujifilmXF18mmf2.data.ts](../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) | 4 aspheric surfaces | Odd A3–A15; A5 on S13 contributes >8 mm edge sag. |
| 7 | [FujifilmXF23mmf14RLMWR.data.ts](../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.ts) | 4 aspheres | Prescription uniformly scaled to 23 mm — rescale Aₙ by 1/s^(n−1). Odd A5–A13. |
| 8 | [FujifilmXF35mmf14R.data.ts](../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | S12A, S13A(?) | Patent K = 0 in its own convention = paraboloid base → K = −1 here; polynomial encodes sphere-vs-parabola departure. |
| 9 | [FujifilmGF23mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF23mmf4.data.ts) | see analysis | Odd terms through A15; patent even/odd terms partially cancel, so dropping odds is not an option. |
| 10 | [FujifilmXF16555mmf28RLMWRII.data.ts](../src/lens-data/fujifilm/FujifilmXF16555mmf28RLMWRII.data.ts) | see analysis | Odd A3–A9; full patent Table 3 preserved in analysis. |
| 11 | [FujifilmXF60mmf24R.data.ts](../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) | S12A, S13A | Odd A3–A9; tables preserved in analysis. |
| 12 | [FujifilmXF33mmf14RLMWR.data.ts](../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.ts) | 4 aspheres | A3 = 0; odd A5–A11 non-zero. |
| 13 | [FujifilmXF23mmf2RWR.data.ts](../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.ts) | see analysis | Odd A3, A5, A7, … present. |
| 14 | [FujifilmGF45mmf28.data.ts](../src/lens-data/fujifilm/FujifilmGF45mmf28.data.ts) | 2 surfaces | A3 = 0; odd A5, A7, A9, A11 active. |
| 15 | [FujifilmGF3264mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.ts) | see analysis | Even fit A4–A16 against full patent sag; conic preserved. |
| 16 | [FujifilmGF2035mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) | see analysis | Odd A5/A7/A9. Analysis only *summarizes* patent coefficients — may need patent re-transcription. |
| 17 | [FujifilmGF100200mmf56.data.ts](../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.ts) | see analysis | Odd+even A3–A20; analysis lists only leading coefficients — may need patent re-transcription. |
| 18 | [FujifilmX100V23mmf2.data.ts](../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.ts) | see analysis | Patent sums m = 3..20 (18 coefficients per surface). |
| 19 | [FujifilmX10023mmf2.data.ts](../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) | see analysis | Odd terms documented; older patent conventions — verify conic form. |
| 20 | [Sigma1018mmf28DCDN.data.ts](../src/lens-data/sigma/Sigma1018mmf28DCDN.data.ts) | 4 | Refit residual only 0.014 µm — lowest impact. |

## Checked and excluded

These surfaced in greps for "odd"/"refit" but need no backfill:

- `SigmaDGDNA35mmf14` — patent's general form admits odd orders, but Example 1's odd coefficients
  are all zero (already documented in the data file).
- `NikonNikkorAFS1635mmf4` — odd polynomial coefficients all zero in Example 1.
- `NikonAFS28f14E`, `VoigtlanderNokton50f1` — "odd-order" refers to aberration symmetry
  discussion, not asphere coefficients.
- `CanonEF2880mmf3556II` — refit mention is unrelated to odd-order aspheres.
