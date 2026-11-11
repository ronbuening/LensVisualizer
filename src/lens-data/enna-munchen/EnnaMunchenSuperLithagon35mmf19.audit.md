# Audit Log - ENNA MÜNCHEN SUPER-LITHAGON 35mm f/1.9

Patent: US 3,036,499 A, sole example (Table 1)

## 2026-11-11 - Authoring (external lens package, second revision)

- Authored against engine commit e3434b282 from Table 1, all 17 radii and 16 spacings uniformly scaled by 0.35
  (f = 100 → 35 mm); nd/νd as printed; design f/2.0. Element data matched the first revision.
- Stop: the first revision placed the stop a quarter of the way into l5; the second revision replaced that with the
  station read from the drawing, 11.1 + 6.9 units of the 18-unit gap (3.885 + 2.415 mm), measured from the R10 vertex.
- Semi-diameters read from the inner rims of the patent drawing (191-unit vertex span as scale, smaller side, bevels
  excluded); no rays were used to size them. Image gap is the paraxial back focus. Infinity only.
- A small pupil-grid trace at 0/16/24/32° found strong corner vignetting at 32°, mainly at the front surface and the
  cemented L7/L8 pair; the rims were not enlarged to remove it.
- Pending at hand-off (rim and stop review, repository checks, field qualification): closed by the deployment
  validation and cleanup pass below; rim fidelity remains open.

## Deployment validation (2026-11-11)

- Source: US 3,036,499 A (Google Patents PDF), kept as `patents/US3036499A.pdf`. All 17 R, 16 d and 9 nd/νd were read
  from the 300 dpi page image (the text layer drops "+" signs): an exact 0.35× transcription, no mismatches. EFL
  35.001 mm (100.003 at patent scale); design f/2.0, retail f/1.9 kept as `fNumber.marketing`.
- Index line: d (helium) confirmed; SF11, LaK9 and SK10 give the printed nd at 587.6 nm. DE 1,102,435 B (same family)
  shows R1 −250 / R3 −270 in Google's OCR; those are OCR sign errors (EFL 89.4 / 101.6), the US signs give 100.003.
- Product: Super-Lithagon 35mm f/1.9 (1958), 9 elements / 8 groups, Exakta and M42. The patent figure matches the
  element count, the cemented L7/L8 pair, plane R11 and R14 and the stop between L5 and L6. No public maker diagram found.
- Integration fix: `catalog.lensMounts` ["exakta", "m42"].
- Open for the cleanup pass: public wording (header, subtitle, specs, glass/type strings, focus description, analysis
  process prose and archive.org link), `EnnaMunchen…` file prefix; R1 is drawn near 19.5 mm against `sd` 17.4 (SD pass).
  (Wording and file prefix closed 2026-11-11; R1 rim carried to the Open list below.)

## 2026-11-11 — Cleanup and wording pass

- Header: replaced the package note with a box comment that keeps every fact (sole example, 0.35 scale from
  f = 100, d-line indices, patent f/2.0 against marketed f/1.9, drawing-read stop split, drawing-read rims, paraxial
  back gap 36.583 mm, infinity placeholder) and adds the OCR sign note for R1/R3.
- `subtitle`: "US3036499A sole example — qualified scaled representative; source f/2" → "US 3,036,499 A, sole
  example — Lautenbacher / Enna-Werk, matching the 9/8 production layout".
- `specs`: three package lines → "9 elements / 8 groups", "f ≈ 35.0 mm", "f/1.9 (patent f/2.0)", "2ω ≈ 63.4°",
  "all-spherical", following the sibling Lithagon files.
- `catalog.focalLengthMm.design`: 35 → 35.0011, the rounded traced EFL, as in the sibling Lithagon 35mm f/3.5
  (35.0008) and Ultra-Lithagon 28mm f/3.5 (28.00055) files.
- `focus`: `closeFocusM` written as 1e15 (same value); description is now "Infinity focus only; the patent gives no
  close-focus data, so no focus travel is modeled." No `catalog.closeFocusM.marketing`: no maker figure was confirmed.
- Element types: L6/L7 "Plano-concave Negative" → "Plano-Concave Negative", L8 "Plano-convex Positive" →
  "Plano-Convex Positive" (house spelling; shapes already matched the signs of R). Roles rewritten per element.
- Glass labels (all resolve to the named catalog row; Δ = catalog − patent): L1/L2 PC2 (Hoya), Δnd 0, Δνd −0.02;
  L3 LF2 (Sumita), Δnd 0, Δνd 0.00; L4 SK10 (Schott) → N-SK10, Δnd −0.00002, Δνd +0.10; L5 K5 (Sumita), Δnd 0,
  Δνd +0.01; L6/L7 SF11 (Schott), Δnd 0, Δνd +0.05; L8/L9 N-LAK9 (Schott), Δnd 0, Δνd −0.09. Rejected: S-BSM10 for
  L4 (Δνd +0.17). The period name "LaK9 (Schott)" does not resolve, so L8/L9 use N-LAK9; there is no Schott K5 row,
  so L5 names the Sumita row it resolves to.
- Analysis: removed workflow prose (revision history of the stop, JSON file names, pixel logs, ray-grid counts,
  package status lines) and the archive.org link; fixed run-together numbers; renamed "Inferred Apertures and
  Verification Limits" to "Model Scope and Limitations"; dropped the empty aspherical section; added the DE
  1,102,435 B family and its OCR sign errors, the patent's own conditions with their values (L5 power ratio 0.24,
  ν7/ν8 0.47, index-mean margin 0.113, intercept 1.045 f, length 2.96 f), the glass table and cited the M42 Lens
  Database and JAPB.
- Engine numbers before and after (identical): EFL 35.0011 mm, FOPEN 2, halfField 32°, stop radius 9.75497 mm, BFD
  36.5833 mm, total track 103.4333 mm. Surface audit OK; aperture audit within 3 % of the stated f-number, no rim
  limit.
- Open: R1 is drawn near 19.5 mm in the patent figure against `sd` 17.4 (the R2 rim); corner vignetting at 32° is
  heavy (front surface and cemented L7/L8 pair); maker minimum focus distance not confirmed (the Enna brochure scan
  at ihagee.org was unreachable during this pass, so its focus distances and 64° figure were not re-read).
