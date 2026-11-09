# Source and geometry audit

**Patent:** US 3,844,640
**Filed:** November 22, 1972
**Granted:** October 29, 1974
**Inventor:** Jihei Nakagawa
**Assignee:** Olympus Optical Co., Ltd.
**Title:** Large-aperture wide-angle photographic lens system
**Example details:** Physical PDF page 4, body and Claim 1; Figure 1 on page 2. Native focal length 1 scaled ×35.

The H.ZUIKO 35mm f/2 association is secondary, not a factory-certified prescription. The indexed PhotonsToPhotos record identifies this product, and the eight-element/seven-group architecture, scaled 35 mm focal length and f/2 aperture are consistent. The primary body and high-resolution claim crop both confirm R5 = 81.3104. The primary body and claim both print R7 = 0.7053, or 24.6855 mm; the secondary 24.6225 mm is not adopted.

Stop location follows the secondary scaffold: 1.6745 mm after S9, leaving 3.0400 mm before S10. Its radius is derived from f/2, not copied as patent data. Secondary SDs required corrections: S4 10.235 → 10.000 mm for the default rim slope, and S11–13 11.055 → 10.400 mm to clear the rear air gap. All other secondary radii remain unchanged.

Default geometry checks pass without gap-sag overrides, rim cuts or hidden rendering trims. Eleven focus states have zero trim. Literal radii, axial distances and glass constants round-trip to the source packet (the lens has no aspheric surfaces). Normalized radius/index fingerprints find no duplicate among the other 1,096 catalog prescriptions.

At infinity, full-pupil 64×64 sampling gives center/mid/edge transmitted fractions 1.000, 0.901, 0.243, with zero unaimed/failed samples. Edge angle is 32.000°. These are model-dependent pupil fractions, not measured illumination. The severe modeled edge vignetting is a conspicuous limitation of the assumed apertures, not evidence of factory performance.

Reference-line diffraction MTF was calculated at center, mid field and edge at the literal image plane, with a maximum grid of 128. All fields report converged. A separate best-axial-focus diagnostic shifts the plane -0.119751 mm; that shift is not baked into the model. Source-plane paraxial offset is 0.001560 mm. No agreement with empirical review charts is asserted. Near/intermediate MTF is not certified.

Source pixels inspected locally before modeling.

## 2026-11-09 — Deployment validation

Independent check of US 3,844,640 (single example, body and claim tables, p. 4 renders): 15 R, 14 d, 8 nd/νd, the
cemented S8 and f_B agree at one scale factor ×35 (r7 0.7053 → 24.6855; PhotonsToPhotos' 0.7035 is a misprint, and the
printed f_B reproduces only with 0.7053). Engine EFL 34.998, f/2, 2ω 64°, paraxial back focus 39.685 (39.683); all seven
patent conditions hold. Attribution probable to strong: the OM H.Zuiko Auto-W 35mm f/2 is 8 elements / 7 groups, 63°,
0.3 m, sold from 1974 (JP priority May 1972); the small mir.com.my drawing, flipped, shows the patent's layout.

Deployment change: `aperture.fStops` gains the missing f/2.8 stop.
Open: the close-focus state (0.489 m) comes from an illustrative back-focus shift, not from production (0.3 m by unit
focus); package wording and the analysis's copy of this log remain for the cleanup pass. (Closed in the cleanup pass
below.)

## 2026-11-09 — Cleanup and wording pass

Data file:

- Header comment rewritten in plain technical English. It keeps the patent, the single example, the ×35 scale, what
  is printed, the r7 and PhotonsToPhotos note, and how the stop and rims were set.
- Subtitle: "US 3,844,640 — qualified product association" → "US 3,844,640, Sole Example — probable to strong match
  to the production lens".
- `catalog.specs` added: 8 ELEMENTS / 7 GROUPS, DESIGN f = 35 mm, DESIGN F/2, ALL SPHERICAL, PATENT f = 1 SCALED × 35.
- `catalog.closeFocusM.marketing` = 0.3 (mir.com.my, allphotolenses).
- Focus: the illustrative 0.4892 m state (BF 39.683 → 42.7, not printed by the patent) is removed. The lens is static
  at infinity: `closeFocusM` 1e15, the `gaps` block is dropped, and S15 carries the printed d = 39.683 mm.
- `aperture.blades` = 6 (allphotolenses).
- `doublets` entry added for the cemented L4–L5 pair (S7–S9), so the D1 tag is drawn.
- Element roles added.
- All eight glass labels changed from `Unmatched` to exact OHARA equivalents, each within |Δnd| ≤ 0.0001 and
  |Δνd| ≤ 0.15 and each resolving to its row: S-BAH28, S-BSL7, S-TIH6, S-LAH53, S-TIM35, S-TIH1, S-LAL18, S-LAL14.
  `nd` and `vd` are unchanged.

Analysis: rewritten instead of copying this log. It adds the product history (H prefix = 8 elements, 1974–2002, 49 mm
filter on early copies, MC marking from late 1982, straight-helicoid unit focus to 0.3 m, six blades), the attribution
and its limits, the maker-drawing comparison, the patent's seven conditions, the r7 transcription note, the glass
table and the model's limits. It drops the process material (packet, scaffold, fingerprint, sampling-grid, MTF-grid
and test-status lines) and the incorrect asphere round-trip claim. The full-pupil edge fraction is now an independent
3D trace at the file's rims: 84 % at 19.2° and 30 % at 32° of the stop-filling f/2 beam. The earlier 0.901 and 0.243
used a denominator that was not stated and were not reproduced.

Engine, before → after: EFL 34.99838, FOPEN 2, half-field 32°, tracing half-field 28.478°, stop radius 8.77737 and
paraxial BFD 39.6846 are all unchanged; `closeFocusM` 0.4892 → 1e15. The surface audit is OK, and the aperture audit
reports no rim limit.

Open: Fig. 1 draws L6 and L7 rims touching at about 1.13 times the middle-group height (about 11.2 mm at the figure's
height scale), against 10.4 mm in the model at S11–S13. Raising them would need the S11/S12 edge clearance
re-checked, and it would reduce the modeled corner vignetting.
