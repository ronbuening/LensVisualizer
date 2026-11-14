# Source and native validation audit

## Identity and custody

US 8,363,333 B2, whole Numerical Embodiment 1. Patent design only; no retail identity. Original PDF, selected-page pixels, literal transcription and source hashes are preserved in the evidence packet. Literal dimensions, refractive indices, Abbe values, asphere equation conversion and both tabulated states remain unchanged. No camera plate or glass-catalog substitution is added.

## Preserved failures and correction

Initial native ingestion stopped before geometry or aperture checks because the publication-number metadata lacked country/kind-code spacing. The same publication identity was reformatted canonically. Original failure logs and pre-correction frozen files remain in the evidence packet.

The first aperture census was rim-limited at S12, f/3.14402 versus f/2.9. The only subsequent optical-data changes are inferred cap radii at S10/S11/S12, from 17.824 to 19.387 mm. The standard census supplied the minimum ray height; original Fig. 1 supports retaining a square cemented-group rim. Both endpoints retained positive iris clearance and zero rendered trim. No source values or gap-sag allowance changed.

## Completed checks

- Source literal and asphere audits, independent sampled static geometry and bounded alias/scaled-radius duplicate checks.
- Exact baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2,253 commits.
- Native construction, both discrete endpoint iris clearance and zero rendered trim.
- Official infinity aperture census, within its 3% criterion.
- Printed-plane infinity reference geometric and diffraction MTF at axis/half/full source image height, converged through 40 lp/mm, maximum grid 128.
- Scoped final formatting with object-semantic equality to the native-tested data.

## Qualifications and remaining gates

Printed image planes and original first-order residuals are retained, as detailed in the analysis. Derived near distances are not printed or certified endpoints. Finite MTF remains unavailable, and finite aperture performance is not qualified. Exact spectral dispersion is unknown; broadband was not run. No measured production or retail performance is claimed.

Full type/lint/corpus/build integration, independent review and normal installation remain pending. No commit, push, PR, deployment or readiness claim is included. Earlier checkpoints retain historical status labels; this audit describes the current scoped evidence.

## 2026-11-10 — Deployment validation

Independent check against US 8,363,333 B2 Numerical Embodiment 1 (PDF p. 43 page image): 24 surfaces (R, d, N(d),
νd), the stop, three cemented interfaces including the 0.200 mm resin layer, the S3 asphere and four variable gaps
at both states agree. Engine EFL 87.799 (printed 87.80), F/2.9, BFD 67.93, TL 205.94; close state f 58.799, β
−1.0000. Front page: Pentax Ricoh Imaging Company, Ltd., inventor Tatsuyuki Onozaki. No Pentax product matches (the
HD D FA645 Macro 90mm is a different design, already in the catalog from US 2013/0222925 A1); the entry stays a
patent design. `audit:aperture` passes.

Deployment change: `catalog.imageFormat` "645" (image circle 69.7 mm).

Open: inferred rims depart from Fig. 1 (rear group drawn about 17 mm, file up to 24.7 mm; front group drawn about
25.6 mm, file 22.8); "Unmatched" labels on eleven d-line catalog glasses; name, subtitle, specs and prose wording.

Hidden at deployment (`visible: false`): no production lens corresponds to this design, so the file stays in the
repository without a catalog page.

## 2026-11-10 — Glass labels

Twelve glass labels changed from "Unmatched patent nd/Vd" to exact catalog rows (Δnd ≤ 3.2e-6, |Δνd| ≤ 0.05), HOYA where HOYA has the row: TAFD5G (L1, L7), TAC8, BACD14 (L4, L12), N-SK11, BAFD7, FCD1, BACD5, FDS90, BAFD8 and FD60. The 0.200 mm resin layer (L2) stays unmatched.
