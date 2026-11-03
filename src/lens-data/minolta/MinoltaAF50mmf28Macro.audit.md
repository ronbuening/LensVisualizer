# Source and numerical audit

- Whole JP S59-228220 A Embodiment 3; probable family, not factory-exact.
- Literal prescription and frozen infinity plane retained; computed finite conjugates explicitly labeled where present.
- Stop/SD hypotheses selected before MTF; rejected shapes and all clipping/raw failures retained.
- Normal scalar native convergence is not independent phase/factory certification.
- Self-contained source/rebuild/report provenance and final integration receipts accompany private package.
- Model SHA256 `a819b2a57c43c68c09c154fe0beb8baca1bfe3e0d152505b5f4de0b43598ae01`.

## 2026-11-03 — Deployment validation and cleanup

Source re-read from the JP S59-228220 A scan (p. 5 table at 400 dpi, Figs. 3 and 6). Checked 13 radii, 12 spacings, 7 nd/νd
pairs, both variable gaps at both states and L.B./L.B.′. No mismatches; Σd = 54.200 as printed; every length is exactly ×0.5.
Embodiments 1 and 2 were read for comparison.

First order (50 mm scale): EFL 50.0006 vs 50.0; back focus 39.031 vs L.B./2 = 39.029; TL 66.131. Near state at β = −0.997:
object 78.38 mm from the front vertex, 199.9 mm object to image, back focus 44.704 vs L.B.′/2 = 44.682. L.B.′ − L.B. reproduces
the printed m3/m2, m1/m2 and m3/m1 in all three embodiments, so L.B./L.B.′ are the back focus, not an undefined datum. The
printed f3/f (−13.33) is about 3% above the thick-lens −12.94; the same offset appears in Embodiments 1 and 2. Real-ray
spherical aberration, field curves and distortion follow Fig. 6 at both endpoints. The Fig. 6 near "effective F 5.93" is not
reproduced (model about 5.2).

Maker comparison: the collector-hosted section matches 7/6, the element shapes and an iris in d6. Its vertex spacing fits
Embodiments 1 and 3 equally (rms 0.42 at f = 100; Embodiment 2 0.60). The MFD favours Embodiment 3 (199.9 mm vs 194 and 188).
The section's rear-element curvature leans toward Embodiment 1, and the third-party 60–106 mm barrel length toward
Embodiment 2's 45.6 mm front-group travel. Embodiment 3 is kept.

Fields changed in this pass. Data step: S3/S4 sd 8.4 → 8.6, S5/S6 8 → 8.2, S7–S9 7.5 → 7.8 (`audit:aperture --raise`; the
f/2.8 axial beam now passes, axis illumination 93.7 → 100%, corner 38.8 → 39.3%); `focus.description` corrected on L.B.
Wording step: header comment, `subtitle`, `specs`, element `role` text, `indexReferenceNote` removed (the table names Nd/νd),
`focus.description` and the conjugate `source` rewritten, and the analysis rewritten in plain terms. Glass labels (catalog
equivalents) and the file/key rename were set in a separate step of this pass.

Open: Embodiment choice rests on the evidence above; no factory prescription is known.
