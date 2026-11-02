# Audit Log — Nikon AI Nikkor 35mm f/2

Patent: US 3,507,558, single numerical example.

## 2026-06-24 — Patent recheck, glass status, and SD provenance

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / surface 6 | `glass` | `Legacy 515/546 crown/light-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.51454`, `νd=54.62`. No coefficient-backed public catalog match was verified for `515546`; retaining the explicit legacy/code-family label is more honest than forcing a near catalog glass. |
| L6 / surface 9 | `glass` | `Legacy 744/494 lanthanum-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.74443`, `νd=49.4`. The row remains code-family `744494`; no exact coefficient-backed public catalog source was found. |
| L7 / surface 11 | `glass` | `Legacy 767/462 dense lanthanum-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.76684`, `νd=46.2`. The row remains code-family `767462`; no exact coefficient-backed public catalog source was found. |

### Phase 2 — Retained-information audit

- Rechecked local `patents/US3507558.pdf` against the data file and companion analysis sidecar.
- The normalized patent table is `f=1.0`, `2ω=62°`, `F:2`, `B.f=1.1337`; current data uses the documented `×35.000` scale factor.
- Surface radii, axial thicknesses, refractive indices, and Abbe numbers in the data file agree with the patent table after scaling and rounding.
- The patent does not publish per-surface clear apertures or semi-diameters. It only states that the front lens diameter can be about `1.3f` and the filter/attachment diameter about `1.5f`; the current `sd` values remain renderer-safe estimates constrained by the f/2 pupil trace, off-axis clearance, 52 mm attachment standard, and edge/sag checks.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows were found in the extracted local patent text.
- APD status remains `false` for all elements. High-index status remains descriptive only: L1, L5, L6, L7, and L8 are high-index glasses by `nd`, but the patent does not identify them as anomalous-dispersion materials.

### Phase 4 — Analysis sync

- Current analysis sidecar already matches this audit: it identifies the scaled prescription, explains the front-diameter note, treats L4/L6/L7 as unresolved legacy code-family glasses, and avoids APO/APD claims.

## 2026-07-30 SUMITA KF3 coefficient recovery

- Added SUMITA's discontinued-inclusive KF3 vendor polynomial at catalog code `515546`.
- Relabeled L4 to the KF3 optical equivalent; its `1.51454 / 54.62` coordinate agrees within patent rounding.
- The production supplier remains unspecified, and no prescription geometry changed.

## 2026-10-30 — Fresh shape and glass reinspection

The 2026-10-30 review directly inspected local `US3507558.pdf`: sole-example Figure 1 on PDF page1 at 600 dpi/native 300 dpi, and the prescription plus repeated Claim2 table on page3. The r1–r14 vertex span gives approximately 12.3 native pixels per scaled lens mm. All exposed faces and both cemented interfaces were checked. S4 retains its 14.8 mm curved cap and gains an exposed land to the existing 18.45 mm L2 front rim. Native q≈0.78 ±0.008 at a≈240-pixel edge agrees with the slightly larger adopted cap q=0.802. The source's taper behind the first cemented doublet is retained: its body edge is sloped to the continuous cap end, without an independently resolved flat land. No additional cut or cemented land is justified. The ×35 scale, source prescription, inferred stop and calculated unit-extension controls remain unchanged.

All eight source nd/νd pairs are exact and preserved. Six current curves (N-LAK8, N-BK7, J-BASF6, KF3, SF56A and LAF2) are available and explicitly qualified as spectral proxies. L6=1.74443/49.4 and L7=1.76684/46.2 remain unresolved legacy coordinates with Abbe-based spectral fallback; no near glass is forced onto them. The source supplies no C/F/g indices, partial-dispersion values or APD evidence, and no production supplier or melt is established.

Surface/circle checks pass; the format corner reaches 100% and the aperture is iris-limited at f/2.0. Nine actual SVG states have eight finite paths and zero trim. At the calculated close conjugate D0=200.8300 mm the full 8.427124 mm iris passes 25/25 aimed axial samples. Source/catalog checks and shared glass suites pass (94 tests).
