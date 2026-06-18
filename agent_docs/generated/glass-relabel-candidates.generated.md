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

**Scope**: 2 mismatched surfaces across 1 unique groups.

## stored (nd=1.86074, vd=23.01) [code=861/230]  — 2 surfaces, current label resolves to TAFD25

Candidates:
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=-0.0018, Δvd=-0.28, codeΔ=4.8)

Surfaces:
- [NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D](../../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts) `1`: `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)`
- [NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D](../../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts) `3`: `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)`

---

## Summary

- **1** (nd, vd) groups have at least one candidate (2 surfaces) — actionable relabels.
- **0** (nd, vd) groups have NO candidate (0 surfaces) — needs patent verification or Unmatched relabeling.
