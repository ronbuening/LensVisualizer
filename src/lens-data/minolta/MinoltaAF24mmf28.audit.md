# Source and numerical audit

- Whole US 4,759,619 Embodiment 2; probable family, not factory-exact.
- Literal prescription and frozen infinity plane retained; computed finite conjugates explicitly labeled where present.
- Stop/SD hypotheses selected before MTF; rejected shapes and all clipping/raw failures retained.
- Normal scalar native convergence is not independent phase/factory certification.
- Self-contained source/rebuild/report provenance and final integration receipts accompany private package.
- Model SHA256 `b1911b7a145da3192edf136a4c282d435d9536596c22ff864d509650ca3bf153`.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: Table 2 of US 4,759,619 (PDF pages 9–10, read from page renders of the scan) was checked row by row against the file
divided by 0.24: 16 radii, 15 spacings, 8 nd/νd pairs and the near d4. No mismatches. The printed spacings sum to 200.869 against the
printed Σd = 200.862; removing 0.007 from any single spacing moves f by less than 0.011 at f = 100, so no cell-level misprint can be
identified and all spacings stay as printed. Table 1 (Embodiment 1, not used) prints d5 = 4.743, which looks like a transposition of
4.473: that value restores its Σd to within 0.001 and its f to 100.0001.

First-order: f = 100.0028 at patent scale (24.0007 mm) against the printed 100.0; F/2.8 and 2ω = 84° match. Conditional values
|fF|/fR 4.015, r1/r2 0.275, r2/r3 16.64, d4/d6 1.188 and |r7/r8| 0.223 reproduce the printed 4.01, 0.28, 16.6, 1.19 and 0.22. The
patent prints no back focus; the computed paraxial value is 36.103 mm (track 84.311 mm). The near state (d4 27.728 at β = −0.1, rear
group moving) gives 238.418 mm from S1, β = −0.10006 and 0.3227 m object to image with the image plane fixed. The model's aberrations
agree with Fig. 5 in sign and size: spherical aberration −0.62 at 0.7 pupil and about zero at full aperture (f = 100 units), distortion
−2.11% at 42° with a −2.76% minimum, sagittal field −1.13 to +0.48 and meridional about −1.0 at the edge.

Maker comparison: the collector-site section (minolta.eazypix.de/AF/24_2,8_cross.jpg, object at top) shows eight singlets with the
same shapes. A least-squares fit of its axial spacings gives RMS residuals of 1.6 (Embodiment 2) against 3.35 (Embodiment 3) patent
units, with d4/d6 drawn at 1.22 (Embodiment 2 1.19, Embodiment 3 1.92). Embodiment 1 (L5 and L6 cemented, seven groups) and
Embodiments 4 and 5 (94°, ten elements) do not fit the marketed 8/8 construction. Retail data: 0.25 m minimum focus, 0.16×, 1985.

Checks after both steps: surface validator OK; aperture audit within 3% of f/2.8; field coverage 98% (42° reaches 21.15 of 21.65 mm);
no axial clipping; relative illumination 72.4% at 30° and 32.4% at 42° at f/2.8. Engine output identical before and after.

Fields changed. Data step: `focus.description` gained the retail 0.25 m / 0.16× statement; `closeFocusM` (0.3227 m, printed state),
`published`, the conjugate and `groups` F/R were checked and kept; no rim changes. Wording step: header comment, `subtitle`, `catalog.specs`,
every element `role`, `indexReferenceNote` removed from all eight elements (the table heads its columns Nd and νd), `focus.description`
rewritten in plain sentences; the analysis reworded throughout, glass named as catalog equivalents, "Verification Summary" replaced by
"Model Scope and Limitations", and package process text removed.

Open: none.
