# Source and numerical audit

- Whole US4610514 E3/Table3; probable family, not unique factory identity.
- Source ZIP SHA256 `f8c05bb01f3350e7edaad215d9179d3e07636954b1989e32f63e67d51ccd75c3`;28CRC entries/27payload hashes pass.
- Printed Nd/nu-d and infinity prescription; source unsigned beta1/10 motion retained as context only.
- Uniform1.35× hypothesis; derived plane128.0861233236873mm fixed before traces.
- Fig7 bevel-aware caps and stop.91gap hypothesis frozen before rays; all clipping retained.
- Initial CSV-adapter and canonical-mount metadata rejections preserved; no numerical source edits.
- Four final geometry passes and one+5%SD rejection;24nominal/9control MTF fields converge without applied refocus.
- Zero raw pupil failures/unaimed rays; complete209sample bundles retained.
- Model SHA256 `1db76eca71ddc91525b4ee2d57037b9e2652883644c3f88477694d918d119212`.
- Current compiled viewer/rebuild/corpus/custody receipts accompany private package.

## 2026-11-03 — Deployment validation and cleanup

**Patent re-read.** US 4,610,514 has no text layer; the pages were read from images. All 39 printed values of Table 3
(12 R, 11 d including variable d7 and d10, 7 Nd, 7 νd, and the β = 1/10 values d7 = 19.79 and d10 = 19.23) agree
with the data file at ×1.35; there are no mismatches and no aspheres. The front page (number, Sep. 9 1986 date, Oct. 6
1983 filing, inventor Akiyoshi Nakamura, Minolta Camera K.K., JP priorities 57-176702/3) agrees with `source`. The
Certificate of Correction amends prose, condition labels and Table 5, not Table 3.

**Patent vs model, first order.**

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL | f = 100 (135 at ×1.35) | 100.038 at patent scale, 135.05 mm |
| F-number, half-field | 2.8, 9° | 2.80, 9° |
| Back focus | not printed | 31.709 at patent scale, 42.81 mm |
| f(I+II), l1/l2, D/Σd, νa − νb | 1.79f, 0.582, 0.275, 24.2 | 1.794f, 0.582, 0.275, 24.2 |
| β = 1/10 state | d7 19.79, d10 19.23 | β −0.1006 on the fixed plane, 1.525 m object to image |

LSA is −0.049 at patent scale at 0.7 of the pupil and +0.004 at full aperture, matching Fig. 8A; distortion is +0.61%
at 9° against about +0.8% plotted. Embodiments 1, 2 and 5 have the same 7/5 layout, F2.8, 18° and moving group
(scaled TL 127.95, 128.18 and 130.07 mm against 128.09 mm); Embodiment 5 falls outside condition (1). Embodiments 4
(F2.5, 24°) and 6 (F4, 7/6) do not fit.

**Maker comparison.** mhohner.de, Photo Jottings and KEH give 7 elements / 5 groups, internal focus with no length
change, 1.0 m, 1:6.25, f/32, 55 mm filter and a 1985 release; the package cites the 9000AF brochure (page 39) for the
same construction. The brochure PDF and the collector-hosted section
(minolta.eazypix.de/AF/135_2,8_cross.jpg) were not viewed. No corpus file models this patent or lens.

**Fields changed.** Data step: S5 `sd` 22.5 → 21.1 (to the cemented joint; corner light unchanged at every field, 67.4%
at 9°); `closeFocusM` 1e15 → 1.5248 with `published: [1]`; `gaps` STO (D7b) 1.74474 → 9.07524 and 10 (D10) 33.291 →
25.9605, the stop fixed with Unit I; `groups` I, II, III added. Wording step: header, `subtitle`, `specs`, element
`name` L1–L7 → E1–E7 (the patent's L1–L5 label components), every `role`, `focus.description`, the
`indexReferenceNote` boilerplate removed; the analysis was reworded and its test-run and package-history text removed.

Open: whether the stop moves with Unit II, and the spacings for the production 1.0 m focus, are not printed.
