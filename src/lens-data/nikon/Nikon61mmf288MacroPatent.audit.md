# Source and native validation audit

## Identity and custody

US 7,777,974 B2, whole Example 1. Patent design only; no retail identity. Original PDF, selected-page pixels, literal transcription and source hashes are preserved in the evidence packet. Literal dimensions, refractive indices, Abbe values, asphere equation conversion and both tabulated states remain unchanged. No camera plate or glass-catalog substitution is added.

## Preserved failures and correction

Initial native ingestion stopped before geometry or aperture checks because the publication-number metadata lacked country/kind-code spacing. The same publication identity was reformatted canonically. Original failure logs and pre-correction frozen files remain in the evidence packet.

No optical data changes followed the metadata correction.

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

Independent check against US 7,777,974 B2 Example 1 (Table 1, PDF pp. 23–24 page images): 20 surfaces (R, d, nd,
νd), the stop, three cemented pairs, the S17 asphere (κ = 1 → K = 0) and D8/D14/Bf at both states agree. Engine EFL
60.986 (printed 61.00), F/2.88, Bf 39.99 paraxial (printed 40.00), β −1.0001 at the close state (printed −1.00); the
printed conditional values reproduce. Front page: Nikon Corporation, inventor Hiroshi Yamamoto. No retail product
matches (the AF-S Micro 60mm f/2.8G is 12/9 with ED and two aspheres); the entry stays a patent design.
`audit:aperture` passes.

Deployment change: `catalog.imageFormat` "135-full-frame" (patent image height 21.6 mm).

Open: inferred rims depart from Fig. 1 (G2 drawn about 10.4 mm, file 13.8–15; L1 drawn about 12.7, file 14.5);
cemented ids D5/D7/D8 clash with gap label D8; name, subtitle, specs, glass and prose wording.

Hidden at deployment (`visible: false`): no production lens corresponds to this design, so the file stays in the
repository without a catalog page.

## 2026-11-10 — Glass labels

All eleven glass labels changed from "Unmatched patent nd/Vd" to exact catalog rows (Δnd ≤ 4e-6, |Δνd| ≤ 0.04): S-LAH97, J-LASF09A, S-LAL7Q, E-F2, S-TIH10, J-LAK14, S-LAM3, S-TIH53 (L8, L11) and S-LAH65V (L9, L10). Each element now traces on its catalog Sellmeier curve.
