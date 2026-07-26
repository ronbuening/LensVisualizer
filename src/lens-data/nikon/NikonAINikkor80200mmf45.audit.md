# Audit Log — NIKON AI ZOOM-NIKKOR 80-200mm f/4.5

Patent: US 4,223,981, Embodiment 1, FIG. 1

## 2026-07-25 — Patent-figure SD and glass-coverage audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / 16 | `glass` | `Unmatched (757317 ... E-LAF11 correspondence)` | `E-LAF11 (HIKARI; historical 757316 match to patent 757317 class)` | The historical Nikon/Hikari formula-3 row reproduces `nd = 1.756920`; its `νd = 31.591` rounds consistently with the patent's one-decimal 31.7 class. |
| L8 / 18 | `glass` | `713539 — lanthanum crown class` | `J-LAK8 (HIKARI; 713540 match to patent 713539 class)` | The coefficient-backed Hikari row reproduces `nd = 1.713000`; its `νd = 53.96` agrees with the patent's one-decimal 53.9 class. |

These are coefficient-backed class-equivalent assignments, not claims about Nikon's production melts. Strict
Sellmeier coverage increased from 10/12 to 12/12 elements.

### Phase 2 — Retained-information and semi-diameter audit

The patent does not publish clear apertures. FIG. 1 was measured after a 300 dpi render and normalized by the other
element heights so the page's drawing scale did not become an absolute millimeter claim.

| Surfaces | Before SD (mm) | After SD (mm) | Justification |
|---|---:|---:|---|
| 14 / 15 | 13.0 / 13.2 | 15.0 / 15.0 | L6 was visibly short relative to the variator and rear relay in FIG. 1. |
| 16 / 17 | 13.3 / 13.5 | 15.0 / 15.0 | L7 shares the relay-front clear-height band with L6 in the patent section. |

The other group-height ratios were within the drawing's practical measurement tolerance and were retained. The stop
semi-diameter was not changed.

### Phase 3 — Spectral / metadata enrichment

- No line-index or anomalous-partial-dispersion values are published, so none were fabricated.
- Existing E-LAF11 and J-LAK8 catalog rows were reused; no lens-specific catalog data was added.

### Phase 4 — Analysis sync

- Updated the glass table and element narratives for E-LAF11 and J-LAK8.
- Recorded the FIG. 1 relay-front SD correction and removed stale pre-correction geometry figures.

### Verification

- `npm run audit:surface -- ./src/lens-data/nikon/NikonAINikkor80200mmf45.data.ts` — passed.
- `npm run audit:image-circle -- ./src/lens-data/nikon/NikonAINikkor80200mmf45.data.ts` — 0 undersized.
- `npm run audit:patent-figure -- ... US4223981.pdf 2 ... --dpi=300` — rerun after the SD correction.
- `npm test -- dispersion.test.ts` — passed (47 tests).
- `npm run generate:glass-reports` — passed (7 report scans).
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed with 3 pre-existing warnings.
- `npm run test` — passed (207 files, 2440 tests).
- `npm run build` — passed (942 routes prerendered).
