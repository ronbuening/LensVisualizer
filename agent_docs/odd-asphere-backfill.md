# Odd-Order Asphere Backfill Queue

The optics engine supports odd-order aspheric coefficients (A3–A19, optional fields on
`AsphericCoefficients`) as of July 2026. Before that, lenses whose patents specify odd polynomial
terms stored even-order least-squares refits (or, in two cases, simply omitted the odd terms).
This file tracks the per-lens work of replacing those approximations with exact patent
transcriptions.

Companion references:

- `src/lens-data/LENS_DATA_SPEC.md` — the `asph` format, odd-order rules, and the KA → K
  conic conversion.
- `__tests__/src/lens-data/oddAsphereBackfill.test.ts` — the `BACKFILLS` departure regression
  table for completed backfills; add a table row for each new backfill.
- [patent-figure-sd-audit.md](patent-figure-sd-audit.md) — the follow-up audit of these lenses'
  semi-diameters and cross-section proportions against the same patent figures. Note that changing an
  aspheric surface's `sd` moves the quoted rim departure, so the data file, the analysis prose, and the
  test assertion have to be updated together.

## Completed reference backfills (July 2026)

| Lens file | Surface(s) | Notes |
|---|---|---|
| [ZeissTouit50mmf28Macro.data.ts](../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) | 4A, 7A | Exact A3–A15, KA = 1 → K = 0. Replaced refits with ≤0.026 µm residuals. |
| [FujifilmGF3570mmf4556.data.ts](../src/lens-data/fujifilm/FujifilmGF3570mmf4556.data.ts) | 11A, 12A | Exact A4–A10 incl. odd A5/A7/A9; A3 = 0 omitted. |
| [FujifilmGFX100RF35mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.ts) | 15A | Exact A4–A20 incl. odd A5–A19; K = +6.0896629652 unchanged. |
| [FujifilmX7018mmf28.data.ts](../src/lens-data/fujifilm/FujifilmX7018mmf28.data.ts) | 8A, 9A, 10A, 11A | Exact Example 1 Table 3 A3–A20; KA = 0 → K = −1 restores the patent paraboloid bases. |
| [FujifilmXF50f1.data.ts](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) | 15A, 16A | Exact Example 3 Table 12 A4–A20 incl. odd A5–A19; zero A3 omitted. |
| [FujifilmXF56mmf12.data.ts](../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | 13A, 14A | Exact Example 3 Table 9 A3–A20. |
| [FujifilmXF1655mmf28R.data.ts](../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) | 6A, 7A, 13A, 14A, 22A, 23A | Exact Example 1 Table 4 odd/even A4–A16; zero A3 omitted; KA converted with K = KA − 1. |
| [Sigma1424mmf28DGHSM.data.ts](../src/lens-data/sigma/Sigma1424mmf28DGHSM.data.ts) | 5A, 6A | Exact Numerical Example 1 A3–A16; standard K = 0 retained. |
| [FujifilmXF18mmf2.data.ts](../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) | 9A, 10A, 13A, 14A | Exact Example 4 Table 8 odd/even coefficients; KA converted with K = KA − 1. |
| [FujifilmXF23mmf14RLMWR.data.ts](../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.ts) | 21A, 22A, 25A, 26A | Exact Example 7 A4–A14 incl. odd terms, rescaled with Aₙ/s^(n−1); KA = 1 → K = 0. |
| [FujifilmXF35mmf14R.data.ts](../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | 10A, 11A | Exact Example 1 Table 2 A3–A20; KA = 0 → K = −1 restores the patent paraboloid bases. |
| [FujifilmGF23mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF23mmf4.data.ts) | 3A, 4A, 18A, 19A | Exact Example 1 A4–A16 incl. odd A5–A15; zero A3 omitted; KA converted with K = KA − 1. |
| [FujifilmXF16555mmf28RLMWRII.data.ts](../src/lens-data/fujifilm/FujifilmXF16555mmf28RLMWRII.data.ts) | 6A, 7A, 14A, 15A, 22A, 23A, 27A, 28A | Exact Example 1 Table 3 A3–A10; literal near-zero A3 terms retained; KA = 1 → K = 0. |
| [FujifilmXF60mmf24R.data.ts](../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) | 12A, 13A | Exact Example 1 Table 3 A3–A10; patent eccentricity converted with K = Kpat − 1. |
| [FujifilmXF33mmf14RLMWR.data.ts](../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.ts) | 20A, 21A, 25A, 26A | Exact Example 3 Table 12 A4–A12 incl. odd terms; zero A3 omitted; KA = 1 → K = 0. |
| [FujifilmXF23mmf2RWR.data.ts](../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.ts) | 7A, 8A, 13A, 14A | Exact Example 1 Table 3 A3–A20; KA = 1 → K = 0. |
| [FujifilmGF45mmf28.data.ts](../src/lens-data/fujifilm/FujifilmGF45mmf28.data.ts) | 16A, 17A | Exact Example 1 Table 3 A4–A12 incl. odd terms; zero A3 omitted; KA = 1 → K = 0. |
| [FujifilmGF3264mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.ts) | 6A, 15A, 16A, 22A, 23A | Exact Example 1 Table 3 A4–A16 incl. odd terms; zero A3 omitted; KA converted with K = KA − 1. |
| [FujifilmGF2035mmf4.data.ts](../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) | 3A, 4A, 10A, 11A, 17A, 18A, 22A, 23A | Exact Example 10 Table 30 A4–A10 incl. odd terms; zero A3 omitted; KA = 1 → K = 0. |
| [FujifilmGF100200mmf56.data.ts](../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.ts) | 31A, 32A | Exact Example 1 Table 3 A4–A20 incl. odd terms; zero A3 omitted; KA converted with K = KA − 1. |
| [FujifilmX100V23mmf2.data.ts](../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.ts) | 7A, 8A, 9A, 10A | Exact Example 1 Table 3 A3–A20; patent columns 8–11 mapped to data labels 7A–10A; KA = 1 → K = 0. |
| [FujifilmX10023mmf2.data.ts](../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) | 10A, 11A | Exact Example 1 Table 2 A3–A20; patent K = 0 converted to standard K = −1. |
| [Sigma1018mmf28DCDN.data.ts](../src/lens-data/sigma/Sigma1018mmf28DCDN.data.ts) | 4A | Exact Numerical Example 2 A3–A14; ordinary K = −0.2 retained. |

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
6. Add the lens's row of departure cases to the `BACKFILLS` table in `oddAsphereBackfill.test.ts`
   using analysis-quoted departure values (residual-style checks, like the GFX100RF refit guard,
   stay separate tests), then run the fast loop plus the full catalog validation
   (`npx vitest run __tests__/src/lens-data/oddAsphereBackfill.test.ts __tests__/src/utils/catalog/lensCatalog.test.ts`).
7. Visually check the lens page (cross-section, rays at wide aperture, aspheric-compare overlay).

## Queue

The tracked odd-order backfill queue is complete.

## Checked and excluded

These surfaced in greps for "odd"/"refit" but need no backfill:

- `SigmaDGDNA35mmf14` — patent's general form admits odd orders, but Example 1's odd coefficients
  are all zero (already documented in the data file).
- `NikonNikkorAFS1635mmf4` — odd polynomial coefficients all zero in Example 1.
- `NikonAFS28f14E`, `VoigtlanderNokton50f1` — "odd-order" refers to aberration symmetry
  discussion, not asphere coefficients.
- `CanonEF2880mmf3556II` — refit mention is unrelated to odd-order aspheres.
