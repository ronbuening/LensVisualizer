# SIGMA 70mm f/2.8 DG MACRO | Art — audit log

## 2026-10-27 — Source correction and construction

Source: the 42-page JP 2019-144441 A PDF and Sigma's A018 page. Example 1 was chosen as a related design, not a proven factory prescription; Example 5 stayed a close alternative. The older MACRO 70mm f/2.8 EX DG source is a different design and was not reused.

Correction at surface 18, field d: printed 0 → 1.9577 mm, then 24.6561 mm at −0.5× and 47.7614 mm at −1×. These are d18 + d19, from the printed d18 of 0 / 7.6984 / 30.8037 and d19 of 1.9577 / 16.9577 / 16.9577. S19 glass stays 0.9000 mm. Evidence kinds: `source-summary` and `claims`. Claim 15 condition (13) with the printed Example 1 value 0.67 separates literal 0.453329 from summed 0.674079. No missing dummy plane is claimed and no source plane was optimized.

Unresolved: the printed G3 start of surface 20 conflicts with complete L11–L13, and the group annotation follows S19–24. Physical tracks of 126.8312 / 150.9810 / 175.6310 mm differ from the printed 126.83 / 150.95 / 175.57 mm; image planes unchanged. Indexed grant text repeats the error; the grant PDF was not obtained, so there is no family-publication evidence.

Geometry: rims inferred from Figure 1, with S2/S3 capped at 13.49 mm and S20/S21 at 12.09 mm below the default 90% sag limit. No gap-sag or rim-slope override and no prescription change. The LPF is a physical rear plate, 1.45 mm thick, 1 mm gap after, 51.0113 mm of air before. K = 0, A4–A14 and the printed PgF/PdC line derivations retained.

Focus: 65 inferred controls keep the printed two-gap paths and exact printed states, with published indices 32 and 64 (infinity implicit). Residual ranges −0.0193446431 to +0.0285968628 mm along the monotone path; not a recovered factory cam. d0 of 151.0718 and 82.2506 mm is referenced to the first surface. closeFocusM 0.2578816 is the physical source sum, not the rounded retail 0.258.

Limits at that date: design-plane C/d/F edge tangential MTF at 40 lp/mm of 0.3841 / 0.2884 / 0.3293 with blocked pupil samples, measured with an older stop radius. The chief-ray check targets Y = 21.63 mm, separate from the 21.65 mm MTF corner; finite MTF angles are referenced to the first surface. Source planes were not shifted to best MTF.

## 2026-10-31 — Deployment validation and fix pass

Source re-read against pp. 17–18: 95 fields (24 R, 22 fixed d, 13 nd/νd pairs, 21 asphere terms, rear plate) plus PgF, PdC, all gap rows and d0; no mismatches. Page images agree with the text layer. Front page, inventor (仲本純平) and applicant agree. The asphere form is (1 + K), with K = 0 throughout.

First-order, patent against model at infinity / −0.5× / −1×: EFL 67.95 / 63.74 / 60.05 against 67.958 / 63.746 / 60.055; 2ω 35.40 / 26.59 / 21.07 against 35.395 / 26.583 / 21.058; TL 126.83 / 150.95 / 175.57 against 126.831 / 150.981 / 175.631; β −0.50008 and −1.00022. Paraxial residuals +0.01028 / +0.01805 / +0.02860 mm are family-wide (Example 5 +0.0099 / +0.0181 / +0.0289). The printed TL shortfall is also family-wide, up to 0.063 mm in Example 6.

The d18 + d19 correction was reproduced independently. Literal d18 fails EFL, 2ω, TL, β (−0.5295 / −1.0591), condition (13) and condition (10) (1.2292 against 1.2214 summed, printed 1.22). d19 alone and d19 as L11 thickness also fail. Example 5 supports it as `sibling-example` evidence; the errata evidence array was left at its two kinds. G3 start: S19 per Figure 1 and ¶0114, −372.294 mm; Examples 1 and 5 both print 20.

Maker's drawing: compared by the coordinating review, not by this pass. L1 is drawn as ordinary glass and L5's width overlays Example 1, so Example 1 stands over Example 5. Sigma's text gives 2 FLD, 2 SLD, 1 high-index anomalous, 2 aspherical; L6 and L9 as the SLD positions come from the glass census, because no drawing was available locally.

Stop: engine radius 10.616 mm, EPD 23.43 mm, replacing the earlier 10.6658 mm figure. Working f/# from the real marginal ray is 2.914 / 3.860 / 4.823 against the printed 2.90 / 3.86 / 4.99, replacing 2.90089 / 3.84284 / 4.80233. No stop override. A fixed iris reproduces all printed F-numbers in Examples 2, 4 and 6 and misses at −1× in Examples 1, 3 and 5; the 11.87 mm S16 limit is an interpretation and is not modeled. The MTF table was removed from the analysis because it came from the older stop radius.

Glass: Unmatched 13 → 2. Eleven elements resolved as HOYA coordinate equivalents (FC5 twice, FD60, TAFD32, E-FDS1, FCD100 twice, FCD515, E-FD5, NBFD10, BACD16), recurring across examples, with printed PgF within 0.0002 of the catalog row. L9 and L13 stay Unmatched: their indices sit 0.0010 and 0.0033 below M-FCD500 and M-NBFD130. The printed nC/nF/ng derivations were kept, since they are source values rather than catalog copies, so chromatic results do not change. `apd: "inferred"` on L5, L10 (FLD) and L6, L9 (SLD). L4 stays untagged as a high-index element.

Fields changed: `name`, `subtitle`, `specs`, element `label`, `role`, `glass`, `apd`, `apdNote`, `cemented` and doublet text (D → C), gap label, `focus.description`, conjugate and rear-plate `source`, errata notes, header. Analysis: L1, L4 and L10 shapes corrected; Example 5 stated. No R, d, nd, νd, asphere, rim or gap number changed.

Open: the production prescription stays unconfirmed; the printed 4.99 at 1:1 stays unreproduced; the cause of the TL shortfall is not established.
