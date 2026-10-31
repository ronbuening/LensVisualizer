# Canon EF 28–80mm f/3.5–5.6 II Audit

## 2026-10-30 — Original-PDF shape and glass review

Directly inspected `patents/US5899585.pdf`, US 5,899,585, granted May 4, 1999, Hideki Ogawa / Canon Kabushiki Kaisha (normalized Canon Inc.). SHA-256: `fe76f622bda4424367b7d4f7e8dc7485ceaf321fa218e9e9b3ad293411e3156f`. Numerical Example 1, PDF page 9 / printed column 6, contains all r1–r21, ten index/Abbe pairs and D8/D17 zoom separations. Figure 1(A–C), PDF page 2 / sheet 1 of 5, is explicitly a common schematic for Numerical Examples 1–4 (printed column 2 / PDF page 7). Figure 2(A–C), PDF page 3 / sheet 2, supplies Example 1 aberrations and directly prints all three f-numbers 3.46 / 4.51 / 5.88. The middle 4.51 is not inferred. Table 1 is PDF page 10 / printed column 8.

The original has eleven image-only pages. Its 2320 × 3408 one-bit rasters are native 300 ppi. Native extraction was inspected directly; enlarged viewing is magnification only. At wide angle, approximately 994 native pixels span the Example 1 optical stack of 82.67 mm, about 12.02 axial px/mm. The shared figure represents four different prescriptions, so a single scale does not establish exact Example 1 cap or mechanical-blank dimensions. A practical height reading uncertainty around ±1.5 mm includes ink and schematic uncertainty; correspondence differences among examples are a separate qualification. Movement arrows, brackets, stop blades and leaders were excluded.

Every one of ten air-spaced spherical elements and all concave ends were inspected. There are no cemented interfaces, hybrid/resin layers, separate cement media, source filters or rear plates in the numerical table. All source R/d, ten medium pairs, stop authority, zoom gaps and intentionally static focus controls remain. The original omits r21-to-image spacing; the retained inferred common image gap 37.732911 mm is a modeling inference, not a source correction.

### Shape disposition

The figure resolves a long negative L23 body with an air-facing rear shoulder. S14 clear sd increases 8.3 → 10.5 mm to follow that body, conservatively anchored to the neighboring L22 front cap at 10.5 mm and the common drawn outer height. S15 clear sd stays 7.2 mm; `rimExtensionSd: 10.5` adds the outer shoulder without extending its concave optical cap. One clear-cap field and one shoulder change. All other clear caps remain; one shoulder and zero inferred cuts are authored. There is no bonded-interface land or disconnected material wing.

Rejected trials preserve literal Example 1 geometry:

| Trial                                                      | Retained constraint                                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| S4 outer shoulder to 20.5 mm, preserving clear cap 14.1 mm | Land/gap intrusion 9.440 mm exceeds 8.811 mm allowed in the printed 9.790 mm gap to S5                         |
| S13 outer shoulder to 10.5 mm, preserving clear cap 8.3 mm | Land intrusion 1.039 mm exceeds 0.882 mm allowed in the printed 0.980 mm gap to S14                            |
| S15 clear cap 8.3 mm with outer 10.5 mm                    | Land intrusion 1.073 mm exceeds 0.801 mm allowed in the printed 0.890 mm gap to S16; retained clear cap 7.2 mm |

The source's shared square-ended schematic cannot be reproduced at every literal Example 1 surface/gap without these conflicts. No cap is shrunk to force a shoulder, and no R/d, cam or tolerance is changed. No distinct extra S2 shoulder is resolved on the nearly flat continuous stroke. Actual SVG comparison therefore retains qualified non-square ends at S4/S13 rather than manufacturing unsupported blocks.

### Every modeled medium

All ten numerical index/Abbe pairs match the original column 6. The definition says ni and νi without naming a spectral reference. Column 2 names d/g in aberration plots, which is contextual evidence and does not independently define prescription coordinates. The default d-line convention remains explicitly approximate through `indexReferenceNote`; all ten media are Unmatched. This qualifies missing source evidence, not a claim that conventional d inference is wrong.

| Elements  | Source index / Abbe | Prior conditional OHARA comparison | Current disposition |
| --------- | ------------------: | ---------------------------------- | ------------------- |
| L11       |      1.51633 / 64.1 | S-BSL7                             | Unmatched           |
| L12       |      1.70154 / 41.2 | S-BAH27                            | Unmatched           |
| L13       |      1.62299 / 58.2 | S-BSM15                            | Unmatched           |
| L14       |      1.76182 / 26.5 | S-TIH14                            | Unmatched           |
| L21 / L31 |      1.63854 / 55.4 | S-BSM18                            | Unmatched           |
| L22 / L32 |      1.66672 / 48.3 | S-BAH11                            | Unmatched           |
| L23       |      1.78472 / 25.7 | S-TIH11                            | Unmatched           |
| L24       |      1.58144 / 40.8 | S-TIL25                            | Unmatched           |

Ten previously resolved catalog curves are disabled. Thirty catalog-derived per-lens C/F/g fields and ten catalog-derived ΔPgF fields are removed. The source publishes none of them, no relative partial-dispersion table and no APD evidence. No genuine published spectral value is removed. Prior names remain conditional comparisons only; no historical supplier, melt, chemistry, lead content or manufacturing route is established. Per-element labels, consolidated analysis and source qualifications agree.

### Aperture, zoom and rendering verification

Surface and image-circle probes pass. A 65-position diagnostic copy reproduces actual runtime geometry to within 3.6×10⁻15 mm at focus 0/0.5/1. Identical infinity/close gaps intentionally supply no finite-focus reconstruction, so quantitative traces are at infinity. Every one of 65 sampled corner chiefs clears. All 65 pass the unchanged aperture census criterion; its exact definition is distinct from real image-space working f-number.

`audit-aperture.mjs` computes the paraxial iris f-number `f_reference × |stop-height ratio| / (2 × iris radius)`, then scales by the iris-admitted axial launch radius divided by the largest fully clearing axial launch radius. Here the iris limits the beam, so the latter ratio is approximately one. Source-node census values are 3.459999997 / 4.509999996 / 5.879999995, within its existing 3% criterion. This establishes sampled beam clearance under the retained derived/paraxial iris convention, not a physical source radius schedule.

`computeWorkingFNumber` instead reads the actual aimed iris-rim ray as `1 / (2 n′ sin θ′)`. Its source-node results are:

| Station | Source nominal | Derived iris radius | Real working f-number | Relative difference | Separate 3% real-working comparison |
| ------- | -------------: | ------------------: | --------------------: | ------------------: | ----------------------------------- |
| Wide    |           3.46 |         8.582619 mm |           3.519465815 |          +1.718665% | Within                              |
| Middle  |           4.51 |         8.582622 mm |           4.640390870 |          +2.891150% | Within                              |
| Tele    |           5.88 |         8.554149 mm |           6.060981572 |          +3.077918% | Exceeds                             |

All 65 aimed real marginal rays trace, but only 56/65 lie within 3% of nominal; nine samples from zoom 0.875 onward exceed 3%, with maximum +3.080506% at zoom 0.984375. These outcomes are not both called a 3% pass. The difference in quantity does not establish a genuine source iris error. Printed targets, iris authority and thresholds remain unchanged.

Source stations are separated from illustrative intervals in the first-order census. The fixed inferred image gap gives source-node BF residuals −0.008429 / −0.030984 / −0.107726 mm. At zoom 0.78125, EFL is 61.986601 mm versus displayed 65.232500 mm, and BF 34.988657 mm versus image gap 37.732911 mm, giving −2.744254 mm defocus. Source gaps have only three stations and no compensator cam; linear interpolation remains illustrative and not focus-preserving.

At 21 zoom states × eight aperture presets, all 168 working-ray calls trace. Baseline/candidate results and every 193-point circular-pupil passing count are unchanged over axial, half-field and corner fields at those states (63 fields total). All 193 axial samples pass. Source-node corner counts are 116 / 175 / 163 of 193, retaining off-axis vignetting rather than claiming full-pupil illumination. The actual renderer at 21 zoom states gives 210 finite, singly connected, closed element paths with zero hidden trimming; corner aiming reaches approximately 21.65 mm. Source-station SVGs were compared with native Figure 1(A–C). No inferred cut requires a beam exemption or cut probe. Source fidelity, sampled runtime clearance, the unmodeled finite-focus mechanism and production correlation remain separate conclusions.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 10 of 10 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

10 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| L11 | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| L12 | 1.70154 / 41.2 | S-BAH27 | -0.000004 | +0.039 |
| L13 | 1.62299 / 58.2 | S-BSM15 | +0.000002 | -0.034 |
| L14 | 1.76182 / 26.5 | S-TIH14 | +0.000001 | +0.018 |
| L21 | 1.63854 / 55.4 | S-BSM18 | -0.000001 | -0.020 |
| L22 | 1.66672 / 48.3 | S-BAH11 | -0.000002 | +0.025 |
| L23 | 1.78472 / 25.7 | S-TIH11 | +0.000003 | -0.017 |
| L24 | 1.58144 / 40.8 | S-TIL25 | -0.000001 | -0.052 |
| L31 | 1.63854 / 55.4 | S-BSM18 | -0.000001 | -0.020 |
| L32 | 1.66672 / 48.3 | S-BAH11 | -0.000002 | +0.025 |
