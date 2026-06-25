# Audit Log - Carl Zeiss Jena Sonnar 50mm f/1.5

Patent: US 1,975,678, sole worked example
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and glass-status audit

### Source Note

- The exact patent PDF was added locally under `patents/US1975678.pdf` from the Google Patents image source and checked against the existing transcription.
- Rechecked the rendered table and Figure 1. The patent prescription is normalized at f=100 and the data file correctly uses a 0.5x scale for the Contax 50mm rendering.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Dense Crown (SK/SSK family, Schott Jena)` | `Unmatched (vintage Schott/Jena dense crown, patent nd=1.6375, νd=56.1)` | High-index crown status is retained, but no coefficient-backed local catalog match is close enough. |
| L2 / 3 | `glass` | `Barium Flint (BaF10 type, Schott)` | `Unmatched (vintage Schott/Jena BaF10-class barium flint, patent nd=1.6727, νd=47.3)` | The historical BaF10-class assignment remains descriptive, but it should not be treated as a resolved modern catalog glass. |
| L3 / 4 | `glass` | `Specialty Low-Index Crown...` | `Unmatched (patent ultra-low-index crown, nd=1.4075, νd=65.7; no practical catalog glass)` | The patent value remains internally consistent but physically anomalous for a cemented photographic glass. It is not marked APD. |
| L4 / 5 | `glass`, line indices | `Dense Flint (SF family, Schott Jena)` | `N-SF8 / SF8 equivalent` with C/F/g line indices | N-SF8 is a tight dense-flint equivalent; the data file keeps the patent nd at the d-line and uses N-SF8 line indices for chromatic tracing. |
| L5 / 7 | `glass` | `Light Flint (hist. Schott Jena)` | `Unmatched (vintage Schott/Jena light flint, patent nd=1.5481, νd=45.9)` | No coefficient-backed public match was identified. |
| L6 / 8 | `glass` | `Very Dense Crown (SSK51 type, Schott)` | `Unmatched (SSK51-class very dense crown, near N-SSK5; patent nd=1.6578, νd=51.2)` | N-SSK5 is a strong family-level match, but resolving it locally moves the d-line index away from the patent value, so this element remains Abbe fallback. |
| L7 / 9 | `glass` | `Crown (PSK3 type, Schott)` | `Unmatched (vintage Schott/Jena crown, patent nd=1.5488, νd=63.0)` | PSK3 is only approximate; the updated label avoids false catalog certainty. |

### Phase 2 - Prescription and SD review

- Rechecked all radii, thicknesses, air spaces, and glass constants against the patent table. The existing 0.5x scale is correct.
- Reconfirmed r8 positive from the patent drawing and EFL convergence.
- The patent does not publish semi-diameters. Existing SDs remain rational against the rendered cross-section and the runtime layout; no hidden trim diagnostics were reported.

### Verification

- Temporary Zeiss Jena diagnostic test - passed after the glass-label updates; runtime trim diagnostics empty for this lens.
