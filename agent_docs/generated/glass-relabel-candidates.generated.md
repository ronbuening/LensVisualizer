# Glass Relabel Candidates (auto-generated)

Companion to [catalog-mismatches.generated.md](catalog-mismatches.generated.md). For each rejected
catalog mismatch, this report searches the catalog for a *better* candidate whose reference index and
Abbe number both match within tolerance (Δn ±0.003, Δν ±2).

**Regenerate** with `npm run generate:reports -- glassRelabelCandidatesScan`.

## How to use this report

- **One candidate, vd matches closely**: high-confidence relabel target.
  Edit the `glass:` string in the lens-data file to the candidate name.
- **Multiple candidates**: choose by family hint in the original annotation
  (e.g. an `S-LAH...` annotation with three S-LAH candidates picks the closest LAH).
  When ΔPgF is shown, prefer the candidate with the smallest |ΔPgF| — partial
  dispersion distinguishes glasses that tie on (nd, vd).
- **Embedded code in annotation** (e.g. `(903/313)`): when present, candidates are
  ranked by code distance — the code is independent ground truth.
- **No candidate**: relabel as `Unmatched (...reason)` and add a row to
  [glass-relabel-followup.md](../glass-relabel-followup.md) for per-lens patent verification.

**Scope**: 1 mismatched surfaces across 1 unique groups.

## stored (d: n=1.59340, ν=34.80) [code=593/348]  — 1 surface, current label resolves to LF7

Candidates:
- **S-FTM16** (nd=1.59270, νd=35.31, Δn=-0.0007, Δν=+0.51, codeΔ=5.4)
- **FF5** (nd=1.59270, νd=35.45, Δn=-0.0007, Δν=+0.65, codeΔ=6.8)

Surfaces:
- [OLYMPUS ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) `12`: `593348 — LF7-class light flint (no exact public catalog match)`

---

## Summary

- **1** (nd, vd) groups have at least one candidate (1 surfaces) — actionable relabels.
- **0** (nd, vd) groups have NO candidate (0 surfaces) — needs patent verification or Unmatched relabeling.
