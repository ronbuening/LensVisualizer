# Glass Relabel Candidates (auto-generated)

Companion to [catalog-mismatches.generated.md](catalog-mismatches.generated.md). For each rejected
catalog mismatch, this report searches the catalog for a *better* candidate whose nd AND vd
both match the stored values within tolerance (nd ±0.005, vd ±3).

**Regenerate** with `npm test -- glassRelabelCandidatesScan`.

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

**Scope**: 2 mismatched surfaces across 2 unique groups.

## stored (nd=1.72730, vd=29.02)  — 1 surface, current label resolves to S-TIH18

Candidates:
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=+0.0009, Δvd=-0.56)
- **E-FD10** (nd=1.72825, vd=28.32, Δnd=+0.0009, Δvd=-0.70)
- **H-ZF4A** (nd=1.72825, vd=28.32, Δnd=+0.0010, Δvd=-0.70)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0010, Δvd=-0.61)

Surfaces:
- [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) `7`: `SF18 / S-TIH18 class (stored patent n_e)`

## stored (nd=1.73430, vd=28.47)  — 1 surface, current label resolves to SF10

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) `3`: `SF10 class (Schott legacy; stored patent n_e)`

---

## Summary

- **1** (nd, vd) groups have at least one candidate (1 surfaces) — actionable relabels.
- **1** (nd, vd) groups have NO candidate (1 surfaces) — needs patent verification or Unmatched relabeling.
