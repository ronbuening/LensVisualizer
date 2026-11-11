# Panasonic LUMIX G VARIO 45-150mm f/4.0-5.6 ASPH. MEGA O.I.S. — Audit

## Package history (condensed from the 2026-11-06 lens package)

The package transcribed US 2013/0335617 A1, Numerical Example 4 (Tables 13–16, Fig. 13) as a family-level model of
the H-FS45150. What follows keeps its findings; its process records are not repeated here.

- **Optics.** All 22 surface rows, both aspheres and the five variable gaps at all six printed states were entered as
  printed, in patent millimetres and d-line indices, with no scaling. Integration added only identity, display and
  source metadata.
- **Back focus.** The 18.9311 mm gap after surface 22 is the back focus. The patent's surface 23 (flat, BF 0) is a
  reference plane, not an optical interface. No image-plane shift and no sensor plate was introduced.
- **Focus.** Three infinity and three 1000 mm close states, all printed. The package read the 1000 mm as measured from
  the first surface, on the strength of a paraxial conjugate check. States between the printed ones are interpolation,
  not source data.
- **Rims.** Estimated from the figure. The common G2 rim (surfaces 4–8) was cut from 7.7 to 7.4 mm before any ray
  check because the facing L4 and L5 sags exceeded the default 90 % gap rule; no rim was resized for performance.
- **Glass.** All twelve elements kept their printed nd/νd under `Unmatched (...)` labels. The package held that
  spectral MTF was limited by a missing partial dispersion at νd 70.4; that was wrong, since FK5-class catalog glass
  matches L11 (corrected below).
- **Open at the time.** Production prescription unconfirmed; rims and mechanical closures estimated; continuous zoom
  and focus motion and the O.I.S. shift not modelled.

## 2026-11-08 — Deployment validation and production cleanup

**Source re-read.** `patents/US20130335617A1.pdf`, 53 pp., read from 200 dpi renders: front page (application
13/916,931 filed 13 June 2013; priorities JP 2012-135512 of 15 June 2012 and JP 2013-088142 of 19 April 2013;
inventors Takuya Imaoka, Tsuneo Uchida, Shunichiro Yoshinaga, Masafumi Sueyoshi; applicant Panasonic Corporation);
Example 4 on pp. 48–49 (Tables 13–16); Fig. 13 on sheet 13; embodiment text ¶¶0111–0119; asphere definition ¶0225
(κ inside (1 + κ)); close object distance ¶0232; O.I.S. decentring table ¶0236 (0.4457 mm for Example 4); conditions
pp. 43–44 and Table 33 on p. 52. Google Patents lists the grant as US 9,250,423 B2 (2 February 2016). The data file's
22 surface rows (R, d, nd, νd), both aspheres (K, A4–A10) and the 30 variable-gap values match the tables with no
differences. The validation report found the same; it also measured Fig. 13(a) and found the stored rims within about
5 % of the drawing, with G2 at 7.4 mm against about 7.8 mm drawn.

**First order, patent against model.**

- EFL 45.4004 / 80.8563 / 144.0003 mm printed; 45.3995 / 80.8546 / 143.9975 mm computed.
- F-number 4.16038 / 5.24260 / 5.75634 printed and authored per station; the engine stop radius is 5.156 / 5.179 /
  5.170 mm.
- Paraxial BFD 18.9307 / 18.9304 / 18.9298 mm against the fixed 18.9311 mm gap (0.4–1.3 µm).
- Overall length 91.9007 / 107.1967 / 129.9016 mm printed; the printed d values sum to 91.8999 / 107.1952 / 129.8999
  mm. The 0.0008–0.0017 mm difference is in the printed totals; the d values are kept.
- Half-field: real chief rays to the printed 10.815 mm image height leave at 13.44° / 7.54° / 4.27°, against the
  printed 13.4388° / 7.5382° / 4.2739°.
- Unit focal lengths G1–G6 match Table 15 (110.9980 / −26.4973 / 21.5864 / −40.3398 / −83.7515 / 54.8150 mm computed
  against 110.99793 / −26.49721 / 21.58657 / −40.33975 / −83.75158 / 54.81473).
- Close focus: the printed close gaps focus paraxially on objects 1000.15 / 1000.02 / 999.99 mm from surface 1, which
  supports the first-surface reading. G4 travel 0.8654 / 2.1859 / 5.4529 mm toward the image.
- Longitudinal spherical aberration at most 0.037 mm at full aperture, so no sign misprint is indicated.
- All ten conditions of Table 33 reproduce for Example 4 (1.5638, 60.8, 33.3, 0.810, 1.41, 0.77, 0.87, 0.43, 0.86,
  63.5).

**Maker diagram.** Panasonic Japan's construction diagram for the H-FS45150 (URL in the analysis, [M3]) shows twelve
elements in nine groups in Example 4's arrangement, with L6 and L9 marked aspherical and L8 marked UHR. This comparison
is taken from the validation report; the image was not re-downloaded. The report notes that panasonic.jp's
specification table lists one aspherical lens while its own diagram and Panasonic's English-language specifications
list two. All eight examples share this layout and both aspherical surfaces; Table 33 shows Example 4 alone with L2 at
1.5638 / 60.8, but no public source picks one example, and the patent's camera embodiment (¶0222) names Embodiment 1.
Example 4 is kept as a representative example.

**Fields changed.**

- `key`: `panasonic-45-150-e4-research-preflight` → `panasonic-lumix-g-vario-45-150mm-f4-56-mega-ois`.
- `name`: `PANASONIC 45–150mm family — conditional patent model` →
  `PANASONIC LUMIX G VARIO 45-150mm f/4.0-5.6 ASPH. MEGA O.I.S.`
- `subtitle`: replaced with
  `US 2013/0335617 A1, Numerical Example 4 — representative of eight near-identical examples`.
- `catalog`: added `lensMounts: ["micro-four-thirds"]`, `imageFormat: "four-thirds"`, `focalLengthMm.marketing`
  [45, 150], `fNumber.marketing` 4 and `closeFocusM.marketing` 0.9 (Panasonic's MFD; the model's close rows stay at
  the patent's 1000 mm state, 1.09–1.13 m to the image). `focalLengthMm.design` [45.4004, 144.0003] → [45.4, 144];
  `fNumber.design` 4.16038 → 4.16.
- `specs`: six disclaimer lines → `12 ELEMENTS / 9 GROUPS`, `DESIGN f = 45.40–144.00 mm`, `DESIGN F/4.16–5.76`,
  `2 ASPHERICAL SURFACES / 2 ELEMENTS`, `1 UHR ELEMENT`.
- Elements: house labels (`Element N`), shape types from the signs of R (matching the patent's ¶¶0111–0116 shape
  words), specific roles, thick-lens `focalLengthMm` and `indexReference: "d"`. Glass labels `Unmatched (...)` →
  catalog equivalents, each resolving with Δnd ≤ 6e-6 and Δνd ≤ 0.13: NBFD15 (L1, L3), S-BAL41 (L2), FDS18 (L4),
  E-FD10 (L5, closer in νd than S-TIH10), K-VC89 (L6; D-ZLaF52LA rejected, its nd 1.81000 misses the printed
  1.80998), S-LAL18 (L7), TAFD55 (L8), D-K59 (L9, the only catalog match), S-LAH66 (L10), FK5 Sumita (L11), S-TIH53
  (L12). No `apd` tags: Panasonic lists no ED element, and L8 is its UHR (high-index) element.
- Cemented names and doublet labels `D1`/`D2`/`D3` → `L1+L2`, `L3+L4`, `L7+L8`.
- `focus.description` and the three conjugate `source` strings rewritten in plain words; `closeFocusM` floating-point
  noise trimmed (1.0918998999999998 → 1.0918999, same value).
- `aperture.blades: 7` added (Panasonic's specification).
- `source` block moved after `catalog` to follow the schema order; header comment replaced with the house block.
- Analysis rewritten to the spec skeleton. Removed: twelve boilerplate element sections, the νd 70.4 partial-dispersion
  claim, the gap-rule and evidence-custody wording. Added: product facts with sources (Panasonic support page;
  Panasonic North America release of 18 July 2012; panasonic.jp diagram), the family-level identification, zoom
  motion, conditions table, O.I.S. and model limits.

**Checks after the edit.** Built and paraxial outputs unchanged (EFL, FOPEN, half-field, stop radius, BFD, close
conjugates). Surface audit OK; aperture audit: all three stations within 3 % of the stated f-number, no rim, trace or
iris limit; image-circle audit: not undersized; field coverage full at all three stations. Clear-aperture trace at
10.815 mm, infinity and close focus: no clipped axial beam or blocked chief ray. Off-axis, up to about two-thirds of
one side of the meridional bundle is cut at G1, about half at G2 and about a fifth at L6 and L10; no rim changed.

**Open:**

- The production prescription is not published; Example 4 stands for the family.
- Zoom between the printed stations is linear interpolation of the printed gaps. Paraxial focus drifts up to about
  0.57 mm ahead of the image plane near zoomT 0.3 and 2.67 mm behind it near zoomT 0.8; a solved cam (as in the
  100-300 file) would remove this.
- Panasonic's 0.9 m MFD and 0.17× are not modelled; the patent's close state is 1000 mm from the front lens.
- The O.I.S. decentring of L9 is not modelled.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the local page at the wide, middle and tele stations at infinity and at the 1000 mm close state, the zoom and
focus motion overlays at the wide and tele ends, and the element inspector for L4, L6, L8 and L9, against Fig. 13(a)
(sheet 13, PDF p. 14; ¶0242 ties Numerical Example 4 to Fig. 13), Tables 13–16 (PDF pp. 48–49), Fig. 14 (sheet 14,
PDF p. 15) and ¶¶0111–0119. No maker image was viewed; the deployment-validation section above records Panasonic's
drawing as Example 4's twelve elements in nine groups, with L6 and L9 aspherical and L8 the UHR element.

Scale. Fig. 13(a) was read at its native 300 dpi. The S1 vertex sits at x = 1099 px and the image line at
x = 1892.5 px, 793.5 px for the 91.8999 mm wide-angle length, 8.634 px/mm; every vertex from S1 to S22 then lands
within 1.5 px of the wide-angle spacings, so the panel is Example 4 at wide. Vertically, the stop ticks end 44 and 45
px from the axis (5.15 mm against the engine's 5.156 mm stop), and L8's rear arc follows R 11.2704 within 1 px out
to 5.5 mm.

Rims, read at the centre of the outline stroke on both sides of the axis (mm, stored value in brackets): L1 14.07
(14.1); L2 rear 13.6 (14.1); G2 box 7.70 (7.4, held below the drawing by the gap rule recorded above); L6 7.99 (8.1);
L7 7.30 (7.5); L8 edge 6.78 (7.5 front, 7 rear); L9 6.02 (6.2); L10 4.98 (5); L11 8.14 (8.3); L12 10.83 (11). All are
within about 4 % of the stored rims and in the drawn order of heights, and L3–L5, L6, L7, L9, L11 and L12 render
square-cut as drawn, so no `sd` changed. The figure steps the rim down by 0.4–0.6 mm at the cemented faces of L1+L2
and L7+L8; a cemented face carries one rim in the model, so L8's edge slopes from 7.5 to 7 mm instead of stepping.

The one drawn feature the model lacked is a land on L8's concave rear face (surface 13). Fig. 13(a) ends the arc
with a stroke square to the axis, 14 px (1.62 mm) behind the vertex, and the arc meets it 5.7–5.8 mm from the axis
against a 6.775 mm edge (58.5 px): q = 0.85, 0.82–0.88 for one pixel at the cap end and the edge. Following
LENS_DATA_SPEC.md (Rim cuts), the cut radius is q × sd = 5.95 mm and the depth is the cap's sag there, 1.70 mm. The
inferred-cut beam check places the furthest wide-open ray at 5.530 mm on surface 13 (zoom 0.70, 1.97°), 0.42 mm
inside the cut.

| Face | Kind | Figure | Baseline | Final | Light cost | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| 13 (L8 rear) | land (`rimCutDepthMm`) | stroke 1.62 mm behind the vertex; cap end 5.7–5.8 mm of a 6.78 mm edge | none; cap to `sd` 7 | `rimCutDepthMm` 1.7 (cap end 5.95 mm, edge 7 mm) | 0.0 points | keep: no loss, drawn by the figure |

No other face carries a cut or land; every `sd` equals its baseline. Against the baseline rims, `rimcost.mjs` finds a
worst loss of 0.0 points at the three printed stations and at zoom fractions 0, 0.125, … 1; corner transmission wide
open at infinity stays 60.8 / 79.9 / 54.8 % at wide, middle and tele. With a real object 1000 mm in front of surface 1,
a skew-ray lattice to the 10.815 mm corner passes 63.9 / 82.4 / 65.4 % before and after. After the edit the surface
validator, including the inferred-cut beam rule, reports no errors; the aperture audit has all three stations within
3 % of the stated F-number with no rim, trace or iris limit; the image circle is not undersized; traced corner
coverage is 100 % at all three stations; the engine's EFL 45.3995 mm, FOPEN 4.16038, half-field 17.68° and stop
radius 5.156 mm are unchanged.

Labels and tags, found correct. Names L1–L12 are the patent's. Every type agrees with the signs of R and with
¶¶0111–0116 (L1 and L10 negative menisci convex to the object; L2, L6, L7 and L9 biconvex; L3, L5 and L8 biconcave;
L4 a positive meniscus convex to the object; L11 a negative and L12 a positive meniscus concave to the object). The
`A` suffix sits on surfaces 10 and 16 only, Table 13's asterisks and Fig. 13's marks on L6 and L9. The stop is drawn
between L8 and L9 (¶0113). Group brackets G1 (1–3), G2 (4–8), G3 (9–16A), G4 (17–18), G5 (19–20) and G6 (21–22) are
Fig. 13's units; the cemented brackets L1+L2, L3+L4 and L7+L8 do not collide with the D gap labels. No `apd` tag is
due: Panasonic marks no ED element, and L8's TAFD55 is a high-index glass. The inspector shows each tagged-or-aspheric
element's glass line and focal length (L4 +24.54, L6 +21.95, L8 −10.21, L9 +34.38 mm). All twelve glass labels
resolve (Δνd ≤ 0.13). The header comment cited ¶0115 for L9's O.I.S. role; that paragraph describes G5, and the
citation is now ¶0117.

Movement, found correct. Tables 15 and 16 match the file in wide, middle, tele order. From wide to tele, measured from
the image plane, G1 moves −91.90 → −107.20 → −129.90 mm, G3 −58.44 → −68.24 → −75.16, G4 −39.99 → −47.00 → −55.89
and G5 −22.27 → −29.62 → −34.82: all toward the object and monotonic, as Fig. 13's arrows and ¶0118 give. G2 and G6
stay fixed (D8 + D16 + D18 + D20 = 36.5129 / 36.5127 / 36.5127 mm). D16 + D18 is constant at each station, so only
L10 moves in focus, toward the image by 0.8654 / 2.1859 / 5.4529 mm (¶0119 and Fig. 13's arrow). Keyframe 0 is
infinity and keyframe 1 the 1000 mm state; the focus slider ends at ∞ and 1.09 m at wide, the zoom slider at 45.4
and 144 mm.

Colour and field against Fig. 14 (infinity, d, F and C lines). On-axis focus from the d-line paraxial image, model
against plot (paraxial / full aperture, mm): wide C +0.084 / −0.003 against +0.083 / 0.00, F −0.078 / +0.038
against −0.076 / +0.035, d marginal −0.037 against −0.036; middle d marginal +0.020 against +0.017, and C and F
paraxial +0.040 and +0.027 against two curves at +0.031 and +0.039 that cannot be told apart at the axis; tele d
−0.035 against −0.031, C +0.033 / −0.021 against +0.028 / −0.024, F +0.046 / +0.084 against +0.057 / +0.093. The tele
F line sits about 0.01 mm short of the plot. The most sensitive element is L4: FDS18's catalog νd of 17.98 against
the printed 18.0 moves the tele F focus about 0.009 mm on its own, so the residual is within the rounding of the
printed Abbe numbers, and no label is more than 0.13 off in νd. Distortion at full field is −0.32 / +1.08 / +0.52 %
against −0.35 / +0.99 / +0.44 % plotted. Astigmatism at 10.8 mm agrees at the middle station (s −0.051, t
−0.008 mm against about −0.05 and −0.01) but not at the ends: wide s −0.025, t +0.054 against about 0.00 and +0.085;
tele s −0.103, t −0.187 against about −0.005 and +0.01. The model's curves follow the Petzval sum of the printed radii
and indices (−0.059 mm at 10.8 mm at every station); the plotted tele curves would need a much flatter Petzval field.

**Open:**

- Fig. 14's astigmatism at the wide and tele stations is not reproduced (tele t −0.187 mm modelled against about
  +0.01 plotted at 10.8 mm); the prescription matches Tables 13–15 and the cause is not found.

## 2026-11-08 — Third review: diagram, labels and movement

Re-checked against Fig. 13(a), Tables 13–16, ¶¶0111–0119, ¶0226 and Fig. 14, with the local page at every station
and both focus states, both motion overlays and all twelve inspectors. No field changed.

- Scale re-proved at 8.633 px/mm (S9, S13, S19 and S22 within 1.1 px; stop ticks 5.13–5.18 mm). Every rim reads
  within 4 % of its stored value. The L8 land is drawn on both sides, 1.56–1.62 mm behind the vertex (q 0.85).
- Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points at the stations and at zoom
  fractions every 0.0625. With a real object 1000 mm away the corner is 64.0 / 82.3 / 65.4 % with or without the land.
- Labels, types, focal lengths, roles, badges, brackets and the stop agree with the patent. All 30 gaps match Tables
  15–16; L10 alone moves toward the image, 0.8654 / 2.1859 / 5.4529 mm (¶0119).
- Table 14's asphere values, order and signs are the file's, and ¶0226's sag is the engine's. Reversing or dropping
  the aspheric terms moves the full-field foci by 0.6–3.7 mm. Fig. 14's three panels imply third-order Petzval sags
  of about −0.045, −0.06 and −0.013 mm at 10.8 mm, but the Petzval sum does not change with zoom (−0.059 mm here). All
  eight examples plot the same flat tele field, so the tele mismatch most likely comes from how the plots were made.
- L2's S-BAL41 (νd 60.67) does not round to the printed 60.8. A 564608 curve (N-SK11) brings the tele F line to
  +0.053 / +0.091 mm against +0.057 / +0.093 plotted, so L2 now carries N-SK11 (SCHOTT catalog equivalent).

**Open:** the astigmatism line above, and the four deployment-validation lines, which the patent cannot settle.
