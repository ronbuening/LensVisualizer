# Audit Log — Voigtländer Heliar

Patent: US 716,035

## 2026-06-23 — Full Voigtländer local-patent sweep

- Expected local patent source: `patents/` entry for US 716,035.
- Searched the local untracked `patents/` folder by filename patterns and full extracted PDF text references; no exact US 716,035 patent PDF was present.
- No glass, APD, high-index, prescription, or semidiameter changes were made. This lens remains unaudited against the requested local patent until the source PDF is added to `patents/`.

## 2026-06-23 — Stop placement adjustment

- Source checked: Google Patents PDF/drawing for US 716,035, since the local `patents/` copy is still absent.
- Patent text places the blind/shutter directly behind the central lens, and the drawing shows a visible clearance rather than a coincident stop surface.
- Moved `STO` off S5 while preserving the full 8.1-unit rear-side air space: S5→STO changed from `0.0` to `1.6`, and STO→S6 changed from `8.1` to `6.5`.
- No powered-surface radii, glasses, BFD, EFL, or total optical track changed.

## 2026-09-08 — First-hosted audit source preparation (lens 6, incomplete)

- US716035 was missing from the local patent inventory. Retrieved the original three-page patent PDF from Google Patents: https://patentimages.storage.googleapis.com/c4/e7/9e/d0bcd0e74bf9a3/US716035.pdf into ignored `patents/US716035.pdf`. Do not stage the PDF. Source landing page: https://patents.google.com/patent/US716035A/en.
- Visually inspected all three pages. Drawing is PDF p1, prescription prose p2 right column through p3 left column. The arrows in the drawing explicitly put d3 across the air space and d4 across the central lens, supporting current d3=8.1 air and d4=1.6 glass without relying solely on an EFL fit.
- Source radii: +41.0, +25.76, −583.8, −44.76; remaining half is symmetric. Normalized f=100, opening=25 and usable image diameter=80; shutter immediately behind central lens. Current stop offset 1.6 is inferred, not a published distance. Focus range/travel are also inferred.
- Source glass indices are labeled nD and nG′: first pair 1.5638/1.5811; second 1.6080/1.6217. These are not published νd=42/57. The source prose's element letters and crown/flint wording are internally inconsistent; preserve that caveat. Do not silently equate G′ with the modern g-line or D with helium d when adding spectral values.
- Surfaced glass labels currently overstate Schott N-SK2 identification and the center's lack of chromatic contribution. Existing analysis contains approximate Abbe numbers, but data labels must also distinguish estimates from patent values. Central element has dispersive power even without a cemented interface.
- Next: production live view, high-DPI rim comparison, coherent inferred close-focus calculation and conservative glass/analysis updates. No production edits made for this lens yet.

### Corrections and live review in progress

- Production live diagram inspected on 2026-09-08; corrected local infinity/1 m states inspected. Surface audit passes. Full batch gates remain pending.
- Removed unsupported historical Schott glass identities; labels now disclose patent nD with estimated Abbe 42/57 and unknown supplier. Corrected central element chromatic-role statement and outer doublet power explanation.
- Replaced thin-lens 11.14 mm extension with 12.7177245072 mm, solved using the complete paraxial prescription at 1000 mm object-to-image distance. Close rear gap is 98.2377245072 mm. Added independent finite-object and camera-anchored movement regression coverage (not yet executed).
- Rewrote analysis against the original source, including nD/G′ conventions, source text ambiguities, inferred stop offset/focus schedule, and direct drawing evidence for d3/d4.
- 600 dpi figure crop: approximately 1245 px first-to-last span / 28.2 normalized units; about 515 px half-height gives 11.7 units. Retained current rim allowances pending batch image-circle/hidden-trim checks.
- Local controls show close focus 1.00 m and BF (modeled) 98.24; all optics move toward the object. Follow-up: inspect the aperture readout (wide-open EP 25.61 versus nominal example opening 25) and complete midpoint/stop-down/motion-chart review.

- Midpoint/f16/movement-chart checks complete: BF 91.88, stop diameter 5.24, all three groups travel objectward 12.72 mm, zoom disabled. No visual overlap. The wide-open EP 25.61 readout comes from local pupil magnification (`entrancePupilAtState2`, stopSD/yRatio); the iris itself is derived by tracing the nominal EFL/(2 FNO) ray. Analysis distinguishes this calculated pupil estimate from the source opening of 25.
- Image-circle audit reports skipped because this normalized example has no canonical imageFormat. This is not a coverage pass. The source 80-unit circle is recorded in the analysis; explicit 40-unit image-height coverage must be checked separately before batch completion.


### Batch follow-up

Explicit image-circle proxy check with source semi-height 40 mm: minimum distance ahead of image is 85.52 mm, so Y minus distance times max(1,Y/f) is non-positive at every surface. No floor violation; this does not establish corner performance.
