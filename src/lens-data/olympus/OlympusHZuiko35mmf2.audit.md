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
used a denominator that was not stated and were not reproduced. (Corrected in the semi-diameter pass below: 0.243 is
the engine's own transmission at 32°, and the analysis now quotes the engine curve.)

Engine, before → after: EFL 34.99838, FOPEN 2, half-field 32°, tracing half-field 28.478°, stop radius 8.77737 and
paraxial BFD 39.6846 are all unchanged; `closeFocusM` 0.4892 → 1e15. The surface audit is OK, and the aperture audit
reports no rim limit.

Open: Fig. 1 draws L6 and L7 rims touching at about 1.13 times the middle-group height (about 11.2 mm at the figure's
height scale), against 10.4 mm in the model at S11–S13. Raising them would need the S11/S12 edge clearance
re-checked, and it would reduce the modeled corner vignetting. (Closed in the semi-diameter pass below: S11–S13 are
now 11.0 mm.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US3844640.pdf`, page 2, Fig. 1, the section of the single example. The page is a 1-bit scan at 72 ppi
and was measured at its native resolution. The optical axis is tilted by 0.72° on the scan, so each height was read
from the local axis line, and top and bottom readings were averaged.

Scale: the S1 and S15 vertex crossings are 766.5 px apart for 47.667 mm, giving 0.0622 mm/px along the axis. The S4
vertex lands within 0.01 mm of the prescription. Arc fits to S1, S4 and S10 give 0.0585–0.062 mm/px across the axis,
so the drawing is close to isotropic. Heights were therefore converted with the cemented pair's height (163.35 px for
10.01 mm, 0.0613 mm/px). At that scale L1 and L2 read within 0.2 % of the file.

| Surface | Starting sd | Fig. 1 | Final sd | Evidence |
|---|---|---|---|---|
| S1/S2 (L1) | 19.94 | 19.92 | 19.94 | agrees |
| S3 (L2 front) | 16.19 | 16.21 | 16.19 | agrees |
| S4 (L2 rear) | 10.0 | 10.47 (end of the arc at the bevel) | 10.0 | −4.5 %; the rim-slope limit for R = 11.193 mm caps it at 10.07 |
| S5 (L3 front) | 9.46 | 9.83 | 9.46 | −3.8 %, noise |
| S6 (L3 rear) | 9.06 | 8.58 (end of the arc at the chamfer) | 9.06 | +5.6 %, noise |
| S7–S9 (L4–L5) | 10.01 | 10.01 (scale reference) | 10.01 | reference |
| S10 (L6 front) | 10.77 | 10.88 (end of the arc at the chamfer) | 10.77 | agrees |
| S11 (L6 rear) | 10.4 | 11.55 (square rim, touching L7) | 11.0 | raised to 0.02 mm short of contact with S12 |
| S12/S13 (L7) | 10.4 | 11.55 (square rim) | 11.0 | raised; square rim kept |
| S14/S15 (L8) | 10.97 | 11.59 | 10.97 | −5.3 %, noise; level with L6 and L7 as drawn |

S11 and S12 meet at 11.07 mm, so the figure's 11.55 mm cannot be reached. At 11.0 mm their combined sag is 1.382 mm of
the 1.4 mm gap, a fraction of 0.987. `checks.gapSagFrac` is therefore 0.99, the smallest two-decimal value that admits
it; 0.98 is refused. With the raise, L6, L7 and L8 stand level as drawn, 10 % taller than the cemented pair against
about 15 % in the figure.

Light, wide open at infinity against the starting rims (engine geometric transmission): mid-field gains up to 1.7
points (5.8° 99.3 → 100, 8.7° 97.7 → 99.4, 11.6° 95.8 → 97.2). From 20.4° outward the curve barely moves: 76.7 → 77.0 %
at 20.4°, and 24.3 % at 32° before and after. The corner is limited mainly by L8:
raising L8 alone to 14 mm would give 43 %. No rim lost light.

Clearance: the surface, image-circle and aperture audits pass. The traced chief ray reaches the 21.65 mm corner at
32.3°. A real-ray f/2 axial trace no longer flags S12 or S13; at 10.4 mm it did, by 0.01 and 0.39 mm. Engine EFL
34.998, f/2, half-field 32° and stop radius 8.777 are unchanged. The lens has one printed state (infinity), checked
live.

Maker drawing (mir.com.my, 112 × 130 px, front to the right): mirrored, it agrees in order and grouping: two large
front menisci, the middle group with one cemented pair, then three rear elements of similar height. It is too small
to check rim proportions beyond L1 being about twice the middle group, which the model also has.

Open: none for rims.

## 2026-11-09 — Second review: diagram, labels and movement

Compared: the local page with Fig. 1 (page 2, native 72 ppi 1-bit scan, deskewed by 0.75° on a least-squares axis fit),
and the model's d/g spherical aberration, field curves and distortion with Figs. 2–4. Scale: S1–S15 span 767.5 px for
47.667 mm (16.1 px/mm along the axis); heights on the cemented pair's 163.5 px for 10.01 mm (16.33 px/mm). Arc fits to
S1, S4 and S10 imply 17.2–18 px/mm if the drawing were isotropic, so heights could read 4–5 % lower; no verdict
changes on either scale. Readings at the pair scale: L1 20.0 (19.94), L2 front 16.2 (16.19), S4 arc end 10.65 (10.0),
L3 9.9 (9.46/9.06), L5–L7 flat tops and L7 tips 11.68 (11.0/10.97), S10 arc end 10.7 (10.77).

Rims: no change. Every rim is within 7 % of the figure. L5 and L6 cannot rise past 11.07 mm, where S11 and S12 touch:
11.05 is refused by the 0.99 gap-intrusion limit. L7 stays level with them, as drawn. S4 is refused above 10.07 mm
(rim slope 64.5° at 10.1). The L2 bevel (figure: a 2.5 mm flat top, then a chamfer to the S4 arc) and the small 45°
chamfer at L5's front corner are drawn by the renderer's straight rim joins. A vertical land on S4 or S10 would not
match either chamfer better: on L2 it cuts the mismatched area only from 4.7 to 4.5 mm². No lands or cuts; against
the baseline rims the worst loss is 0.0 points, with up to 1.7 points gained at 8.7°.

Labels: Fig. 1 labels the seven components L1–L7, and the file's sequential L1–L8 clashed from L5 on. Element names
and new `diagramLabel`s now follow the figure: ids 4 and 5 are L4a and L4b (the cemented L4), and ids 6–8 are L5–L7;
ids 4–8 were named L4–L8. Roles, header note and analysis are renamed to match. The D1 bracket spans S7–S9, the
stop sits in d9 between L4b and L5, and types agree with the R signs and the patent's lens descriptions. Inspector FLs
are present, there are no aspheres and no `apd` tags, and the patent names no special glass. The focus slider reads
"Not modeled" (static lens, infinity only).

Stop: neither the text (only "when the stop is almost fully opened", col. 2) nor Fig. 1 locates it. The plots support
d9. With the stop 1.6745 mm into d9 the model gives, at 32°, distortion −2.07 %, meridional −0.0207f and sagittal
−0.0002f, against about −2.2 to −2.3 %, −0.023f and 0 in Figs. 3–4. At 16° the distortion is −0.73 % (patent −0.76 %).
Across d9 the 32° distortion runs −2.16 to −1.85 % and the meridional focus −0.016 to −0.022f; distortion favours the
front of d9 and the meridional curve 2.5–3.5 mm in, so the 1.6745 mm position is consistent and is kept. A stop in d4
puts the 32° meridional focus beyond −0.12f. The 0.55 mm space d6 is the patent's "layer-like" gap (condition vi).

Colour (Fig. 2, d and g): model d LSA +0.0015f at the f/2 margin and −0.0039f at 0.7 (patent +0.0019f, −0.0046f).
g minus d is +0.0019f at 0.5, +0.0029f at 0.7 and +0.0048f at the margin (patent +0.0018f, +0.0029f, about +0.005 to
+0.007f). All eight glasses resolve to OHARA Sellmeier rows; no line is off beyond the reading error.

Open: none.
