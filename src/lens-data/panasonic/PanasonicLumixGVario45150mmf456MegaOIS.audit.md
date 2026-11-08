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
