# KMZ Zenitar 35mm f/1 — source and numerical audit

## 2026-11-06 — Package history

- **Source.** RU 2771147 C1, application 2021107901, filed 25 March 2021, published 27 April 2022; inventors Vladimir
  Aleksandrovich Bogdankov and Ilya Anatolevich Levin (full names as spelled on the patent's English p. 3); holder PAO
  Krasnogorsk Plant named after S.A. Zverev (KMZ), normalized to Krasnogorsk Mechanical Plant. One unnumbered worked
  example, Table 1 (printed p. 7), recorded as "Sole example"; layout and MTF in Figs. 1–2 (p. 9). Printed pages 3 and
  6–9 were read from renders and Table 1 agreed with the transcription.
- **Transcription.** Native 36 mm, no scaling: 17 radii plus the flat stop row, 18 spacings, 9 n/ν pairs and 17 face
  diameters, with sd = D/2. The printed aperture diaphragm (АД) row is `STO`, so model labels 13–18 carry the patent's
  R12–R17. L5–L6 are cemented at surface 10.
- **Printed vs derived.** Printed: f′ = 36 mm, 1:1.0, 2y′ = 43 mm, d18 = 17.3 mm, iris D12 = 30.8 mm. Derived: paraxial
  EFL 36.0138 mm, paraxial back focus 17.4096 mm, and a 31.467 mm stop diameter for F/1.0 (the printed 30.8 mm gives
  paraxial F/1.0217). The 0.110 mm difference between d18 and the paraxial back focus was held as an unresolved
  erratum at intake.
- **Glass.** Table 1 names no spectral line; the pairs were stored as nd/νd and every glass was left unmatched.
- **Focus.** Infinity only; no finite-focus data in the patent.
- **Element powers** (thick lens in air): L1 −59.4, L2 +84.7, L3 −133.6, L4 +54.4, L5 +39.6, L6 −23.5, L7 +79.9,
  L8 +53.6, L9 −84.5 mm.
- **Numerical checks.** MTF sampling at F/1–F/16 over image heights 0–21.5 mm, reference and estimated photopic
  spectra, converged through 50 lp/mm except one F/1 reference field near 19.35 mm (30 lp/mm). Element outlines showed
  no overlaps; the smallest non-cemented axial air space is 0.5 mm and the stop plane clears the glass by 1.3 mm.
- **Attribution.** Maker, nominal 35 mm f/1, M mount and nine elements in eight groups matched the Zenit store
  listing; Bogdankov's 2022 interview lists a 1.0/35 design; the 2018 launch predates the 2021 filing. A 35.9886 mm
  focal length seen only in a search-index snippet for a zenitcamera.com archive page, which could not be loaded, is
  not used.
- **Open at intake:** spectral line and glass identity; printed versus derived iris; d18 versus paraxial back focus;
  production identity; finite focus.

## 2026-11-08 — Deployment validation and production cleanup

Source re-read: Table 1 (printed p. 7) was read again from a 200 dpi render and checked row by row against the file:
17 radii, the stop row, 18 spacings, 9 n/ν pairs and 17 clear diameters (sd = D/2). No mismatches; no aspheres, no
variable gaps. The text (pp. 6–7) states f′ = 36 mm, 1:1.0, 2y′ = 43 mm, an object at infinity, a mirrorless-camera
application and an image formed "in the plane of best setting". The claim 3 index and dispersion bounds all hold.

First-order, patent vs model: f′ 36 mm vs paraxial EFL 36.014 mm (+0.04%); 1:1.0 vs design F/1.000; total track
112.5 mm in both. The printed 30.8 mm iris gives paraxial F/1.022; the model's stop, derived from F/1.0, is 31.47 mm
across (radius 15.734 mm). Printed d18 17.3 mm vs paraxial back focus 17.410 mm. The d-line longitudinal spherical
aberration is −0.087 / −0.091 / −0.132 mm at pupil 0.5 / 0.7 / 0.85, so those zones cross the axis 17.28–17.32 mm
behind the last surface: the printed d18 is the best-setting plane the patent describes, not a source error. The
`unresolved` erratum is deleted and the explanation moved to the header comment. Field: the 21.5 mm image height is
reached by a real chief ray at 30.75°, distortion +0.35% (patent: within 1.5%). 2·atan(21.5/36) = 61.69°, KMZ's
published 61.7°; a nominal 35 mm lens on the 43.27 mm diagonal would give 63.4°.

Maker-diagram comparison: KMZ publishes no construction diagram. The only drawing is patent Fig. 1 (p. 9), whose nine
elements, three components and stop position between components II and III the model reproduces; element shapes and
relative sizes agree with the rendered section.

Product evidence: the Zenit product page (read 2026-11-07) lists 35 mm, optical scheme 8/9, 0.8 m minimum focus,
61.7°, M mount and 74 × 88 mm. Newsshooter (28 September 2018) gives nine elements in eight groups, M mount, the
announcement with the Zenit M and expected European availability in December 2018. The Radojuva interview (April 2022)
has Bogdankov list the Zenitar 1.0/35 among the lenses he designed. No other mount version was found. With a 27.8 mm M
flange distance the model's front vertex lies 84.7 mm ahead of the flange, consistent with the 88 mm listed size.

Glass: a d-line catalog search and an e-line search of the same catalogs give 1.5750 / 41.30 = QF3 (CDGM) 1.57503 /
41.30 and 1.7552 / 27.52 = H-ZF6 (CDGM) 1.75520 / 27.53 (S-TIH4 OHARA 27.51 and E-FD4 HOYA 27.53 are equivalent).
Neither pair matches at the e line. 1.6920 / 55.05 (nearest LAK9 class, nd 1.6910) and 1.6595 / 57.35 (nearest K-LaK11,
nd 1.6583) match no row at either line. With 2 of 4 pairs (4 of 9 elements) matched, the table fails the 80% d-line
coordinate test, so all nine elements carry `indexReferenceNote`. CDGM is used for both matched pairs because it is the
one vendor whose catalog holds both exactly; both names resolve with |Δnd| ≤ 3e-5 and |Δνd| ≤ 0.01. No `apd`.

Checks after the edits: the surface validator prints OK; the aperture audit traces F/1.0 within 3% with no rim, trace
or iris limit; the image-circle audit does not list the lens as undersized; field coverage is 100% (30.8° reaches
21.50 of 21.50 mm, corner clear). The engine's first-order output is identical before and after; the element probe
differs only by the newly stored element focal lengths.

Fields changed:

- `key` `zenitar-35-f1-ru2771147-literal-research` → `kmz-zenitar-35mm-f1`; `name` → `KMZ ZENITAR 35mm f/1`;
  `subtitle` → `RU 2771147 C1, sole example — strong production correlation`; `visible` false → true.
- `catalog`: added `lensMounts` `["leica-m"]`, `imageCircleMm` 43 (the patent's 2y′ = 43 mm image field, which is also
  the field behind KMZ's 61.7°), `focalLengthMm.marketing` 35, `fNumber.marketing` 1, `closeFocusM.marketing` 0.8;
  `specs` rewritten to 9 ELEMENTS / 8 GROUPS, DESIGN f = 36 mm, DESIGN F/1.0, ALL SPHERICAL, 2ω = 61.7°.
- `source.errata` removed (see above); source fields put in schema order.
- Header comment rewritten as the house block: printed vs derived values, glass reading, stop, semi-diameters, image
  plane and focus.
- Elements: labels `Element n`; types from the signs of R (Negative Meniscus L1, L3, L9; Biconvex Positive L2, L4, L5,
  L7, L8; Biconcave Negative L6); specific roles; thick-lens `focalLengthMm`; glass labels and `indexReferenceNote` as
  above.
- `focus.description` rewritten in plain words with the 0.8 m production minimum; empty `gaps` removed; `groups` I, II,
  III added for the patent's three components; `layout` moved to the end; `\u` escapes replaced by literal characters.
- Analysis rewritten to the analysis skeleton: process wording, the sampled MTF matrix and geometry-run sections and
  the unrecovered archive citation removed; the 61.7° evidence, designer listing, mount, launch date and the
  filing-after-launch caveat added with sources.

Open: the production identity rests on correlation (no factory prescription; the patent was filed after launch). The
patent states no spectral line, and the production focusing movement is unpublished.
