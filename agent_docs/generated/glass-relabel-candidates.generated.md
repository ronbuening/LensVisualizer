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

**Scope**: 1 mismatched surfaces across 1 unique groups.

## stored (nd=1.69402, vd=31.20)  — 1 surface, current label resolves to N-SF8

Candidates:
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=+0.0049, Δvd=-1.07)
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=+0.0049, Δvd=-1.15)

Surfaces:
- [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) `6`: `SF8 class dense flint (patent e-line index stored)`

---

## Summary

- **1** (nd, vd) groups have at least one candidate (1 surfaces) — actionable relabels.
- **0** (nd, vd) groups have NO candidate (0 surfaces) — needs patent verification or Unmatched relabeling.
