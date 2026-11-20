# LEICA SUPER-ANGULON 21mm f/4 — Audit Log

## Source and Initial State

No audit companion was present. The supplied data and analysis described the sole example of DE 1,107,416 B at infinity, with estimated clear apertures, a midpoint stop and the printed image plane. The independently supplied report judged the prescription valid with notes: every one of the thirteen radii, twelve thicknesses/spacings, printed back focus and nine nd/νd pairs matched the page images. No aspheres or variable gaps were present.

The patent's numerical table is printed in both the description and claim 2. Its dimensions are scaled by 0.21 from f′ = 100; the d-line glass values are unscaled. The front page prints “Günter Klemt und Karl Macher”; `Günter Klemt` and `Karl Heinrich Macher` remain the established corpus forms. The applicant is Jos. Schneider & Co., Optische Werke. Filing was 14 February 1957 and publication 25 May 1961; the document identifies itself as an addition to application Sch 16212 IX/42h.

The original model gave EFL 20.9965008722 mm, f/4.000, paraxial BFD 7.7374 mm, stored last gap 7.7280 mm and total length 52.2585 mm. The derived stop radius was 3.4114689219 mm. An initial visible scratch copy reproduced 67% field coverage, with the format-corner chief clipped at S12: 8.09 mm height exceeded its 6.8 mm rim. The aperture audit found no axial rim limit.

## 2026-11-20 — Deployment validation and cleanup

The independent validator read the 300-dpi patent page images and checked the complete numerical prescription, stop location, Fig. 1 rims and Fig. 2 spherical-aberration and distortion curves; no transcription mismatch was found. The verdict remains valid with notes, with a strong product link from Schneider manufacture, the 1957 filing before the Photokina 1958 introduction, nine elements in four cemented components, f/4 and the matching published product section.

The front page, numerical table, Fig. 1 and Fig. 2 images were also inspected during this pass. The two tested rear-rim changes in the validator's comparison copy were checked against the assigned edits; no other prescription or rim values were taken from that copy.

Changes:

- `visible`: false → true. `key`: `leica-super-angulon-21-f4-patent-tuning` → `leica-super-angulon-21mm-f4`. Name and maker remain `LEICA SUPER-ANGULON 21mm f/4` / `Leica`.
- `subtitle`: the paragraph about inferred apertures and a restricted field → `DE 1,107,416 B, Sole example — strong Super-Angulon production correlation`.
- `catalog.specs`: repeated infinity-only notices and process descriptions → `9 ELEMENTS / 4 GROUPS`, `DESIGN f = 21.00 mm`, `DESIGN F/4`, `ALL SPHERICAL`, `92° MARKETED FIELD`.
- `catalog.lensMounts`: `[leica-m]` → `[leica-m, leica-ltm]`. `catalog.closeFocusM.marketing`: absent → 0.4 m. The Leitz brochure, PDF p. 2, supports M and screw mounts, nine elements, 92° and f/4–22; the cited firsthand product review supports four groups and 0.4 m. Image format remains `135-full-frame`; element/group counts remain 9/4; focal-length design remains 21.00 mm to two decimals and aperture design remains f/4.
- `focus.closeFocusM`: 1 → 1e15. Its placeholder explanation → `Infinity focus only; the patent gives no close-focus spacings. The production lens focuses to 0.4 m.` No finite-focus prescription was added.
- `aperture.fStops`: `[4, 5.6, 8, 11, 16]` → `[4, 5.6, 8, 11, 16, 22]`; `maxFNumber`: 16 → 22, following Leitz literature.
- S12 `sd`: 6.8 → 8.8 mm; S13 `sd`: 10 → 11.3 mm, the Fig. 1 readings. The 45° chief meets them at 7.96/10.32 mm; the 24×36 corner at 8.10/10.61 mm. Both now clear. `projection.fullFieldDeg`: 70 → 92; `maxTraceFieldDeg`: 35 → 46, following the product angle while retaining the distinction from Fig. 2's 45° half-field.
- `source.sdSource`: `heuristic` → omitted, because S12/S13 now have figure evidence and other rims remain estimates.
- Every `type`: `Source Cemented Element` → shapes confirmed from radii and individual thick-element powers: negative meniscus L1/L3/L5/L7/L8/L9; positive meniscus L2; biconvex positive L4/L6. Element labels remain `Element N`; nine plain optical roles were added.
- Every `focalLengthMm`: absent → L1 −19.77, L2 +698.84, L3 −22.17, L4 +9.50, L5 −11.70, L6 +5.45, L7 −15.69, L8 −140.80, L9 −23.21 mm, from `probe.mjs --elements`.
- Cemented identifiers `D1`, `D2`, `T3`, `D4` → `C1`, `C2`, `C3`, `C4` on every member. Added one `doublets` entry per cemented component: S1–S3, S4–S6, S7–S10 (one triplet entry), S11–S13. Fig. 1 and the numerical table confirm the 2+2+3+2 split.
- File form `const data` / quoted keys / `export default data` → `const LENS_DATA`, plain identifier keys and matching export. The header now states source, scale and the stop/rim/image-plane evidence. Floating-point noise in R/d was rounded to the exact four-decimal dimensional values; no printed prescription value changed.
- Glass labels: all nine long `Unmatched (source …; supplier unproven)` strings → five named catalog equivalents and four plain `Unmatched (nd … / νd …)` labels, as detailed below. No per-element spectral indices were present to remove. All elements retain the patent's explicit d-line reference. No APD tags were added.
- Analysis: replaced the process language and internal evidence-file link with patent identification, architecture, four cemented-component subsections, a glass table, focus scope, image plane/apertures/field, aberration comparison and cited sources. H1 now equals `name`; `Applicant` → `Assignee`; publication year alone → 25 May 1961. The patent's parent f/8 system, plotted field and product angle are distinguished. An actual audit log was created because none existed.

Each new glass label was tested with `trylabel.mjs` in the neighboring corpus form, `<glass> (<vendor> catalog equivalent; production supplier unspecified)`, and resolves to the stated vendor. Differences below are catalog Sellmeier C/d/F values minus the printed pair:

| Element | Old label                  | New catalog label |           Δnd |      Δνd |
| ------- | -------------------------- | ----------------- | ------------: | -------: |
| L2      | Unmatched, 1.46450 / 65.79 | FK3 (Schott)      | −0.0000000185 | −0.02133 |
| L4      | Unmatched, 1.60729 / 49.25 | BAF5 (Hoya)       | +0.0000022456 | +0.08690 |
| L6      | Unmatched, 1.61772 / 49.78 | N-SSK8 (Schott)   | +0.0000082061 | +0.04916 |
| L7      | Unmatched, 1.78470 / 26.10 | SF56A (Schott)    | +0.0000010858 | −0.02319 |
| L9      | Unmatched, 1.65844 / 50.84 | N-SSK5 (Schott)   | +0.0000000585 | +0.04292 |

The report's seven index matches do not yield seven pairs within this pass's strict Abbe limit. L1's nearest S-LAL11 (Ohara) has Δnd −0.0000044021 / Δνd −0.15741; L5's SBF2 (Hoya) has Δnd −0.0000000914 / Δνd −0.15695 (declared catalog νd 51.64, Δνd −0.16). Both exceed 0.15 and remain unmatched, alongside L3 and L8. Catalog matches do not establish original supplier identity.

After formatting, `built.mjs` reports EFL 20.9965008722 mm and f/4.000, unchanged to reporting precision; `probe.mjs` reports BFD 7.7374 mm and last gap 7.7280 mm before and after. The −0.0094 mm paraxial residual remains at the printed image plane. Stop radius remains 3.4114689219 mm, total length 52.2585 mm and default focus step 0.004. Declared half-field changes 35 → 46°, and the routine drawing/tracing half-field changes 29.6326 → 36.2033°.

Audit results:

- Surface audit: `OK — no validation errors` after the rim changes.
- Aperture audit: one station within 3% of f/4; zero rim, trace, iris or failed stations. No raise was needed.
- Field-coverage audit with `--below=1.01`: 67% → 99%; modeled 46.0° reaches 21.52 mm of the 21.65 mm format radius; corner 46.2° clear; diagnosis `ok`; zero skipped.
- Image-circle audit: still `UNDERSIZED` at S11–S13, one checked and zero skipped. The audit explicitly marks the wide-angle exit-pupil proxy unreliable. Its floors are 9.10/12.61/13.68 mm versus adopted 6.8/8.8/11.3 mm. S11's radius magnitude is only 7.6377 mm, so enlarging to its proxy floor is not supported; direct corner-chief tracing takes precedence for this limitation.
- Prettier check passes for all three files. The data file contains no `//` comments. Analysis H1 matches the lens name, all four required bold metadata rows are present, and twelve H2/H3 headings are present. Exactly one final deployment section is present. A numerical before/after comparison confirms R/d differ only by less than 1e-12 from decimal cleanup; nd/νd, reference line and stop remain unchanged, and only the assigned S12/S13 rims changed. `git diff --check` passes for the tracked lens files.
- The requested shared-server page screenshot produced no image; the headless command reported macOS power-monitor and DNS-watch errors. The server runs from the read-only main checkout, which does not contain this new lens, so the edited worktree page could not be reviewed there. No server was started or modified. No tool or edit was refused.

The Fig. 2 comparison retains the validator's f′ = 100-scale longitudinal spherical-aberration values: −0.25/−0.90 mm in the model at f/4 and the f/5.57 zone, versus approximately −0.28/−0.94 mm read from the figure. Distortion at 45° is −9.9‰ versus approximately −7.6‰, with matching sign and shape.

Sources: [patent](https://patents.google.com/patent/DE1107416B/); [Leitz brochure, PDF p. 2](https://www.pacificrimcamera.com/rl/01191/01191.pdf); [product review](https://www.kenrockwell.com/leica/21mm-f4.htm); [product optical section](http://allphotolenses.com/public/files/optical/86649b22361edca67e5766be172191bd.jpg); [mount and introduction history](https://www.summichronica.com/screw-mount-lenses-21mm).

Open: remaining estimated rims await the separate semi-diameter pass; S11's figure reading is about 6.9 mm versus 6.8 mm retained, and the other estimated rims were outside this assignment. The wide-angle image-circle proxy warning remains. Four glass identities and all production suppliers/melts are unresolved. No finite-focus source states or factory confirmation of the exact prescription have been found. The routine 36.20° display-ray limit remains smaller than the independently traced format field. The shared `clearap.mjs` Newton solve can fail beyond about 41.5° on the steep S11/S12 surfaces, as recorded by the validator; this is not evidence to change the prescription.
