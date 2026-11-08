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

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the local page at infinity (`focus=1` and both movement overlays show the same static state) against Fig. 1 of
RU 2771147 C1 (p. 9), the patent's only drawing and the drawing of its sole example, rendered at the scan's native 382
dpi. Fig. 1 numbers the nine lenses 1–9, brackets components I, II and III, marks the aperture diaphragm with ticks
between lenses 6 and 7, and draws the image line. Scale along the axis: 15.96 px/mm from the vertex crossings of faces 1
and 18 (1519 px over 95.2 mm); the other fifteen vertices fall within 0.25 mm. Scale across the axis: 15.58 px/mm from
the image line, ±335 px for the printed 2y′ = 43 mm, confirmed by arc fits of faces 2, 9, 11 and 18 (15.45–15.72 px/mm).
The scan is 2.4% narrower across the axis than along it and its axis line tilts 0.39°, so every height below is read
from the local axis at the across-axis scale and is the mean of the two sides.

Rims: every `sd` is half the printed clear diameter D of Table 1 (p. 7) and equals the baseline. Figure against file, in
mm: face 1 28.8 / 29.0; face 2 curve end 23.2 / 22.95; L2 23.0 / 23.1 and 22.85; L3 23.3, drawn square / 22.45 and
23.35; L4 25.0 / 25.0 and 25.1; face 9 21.35 / 21.45; cemented face 10 20.0 / 20.1; face 11 curve end 15.35 / 15.45;
diaphragm tick 15.45 / printed 15.4 (the engine's 15.73 stop is untouched); L7 15.3 / 15.35 and 15.2; L8 14.2, drawn
square / 14.2 and 13.25; L9 11.7, drawn square / 11.7 and 11.35. All agree within 4% except L8's rear face (7%), which
is inside the 10% band with the drawn step order already right. The printed diameters stay and no `sd` changes.

Lands: Fig. 1 draws two flat rear lands that the baseline rendered as slanted bevels. L1's rear curve ends at 22.9–23.5
mm, and a vertical stroke 16.5–17.0 mm behind the front vertex (face 2's rim lies at 16.85 mm) rises to the 28.8 mm
outer edge, which runs flat forward to the front rim. L6's rear curve ends at 15.2–15.5 mm, and a vertical stroke at
70.85 mm (face 11's rim lies at 70.95 mm) rises to a flat 20.0 mm flange that runs forward to the cemented rim.
`rimExtensionSd` draws each land at the height of the face it meets, so both elements are square as drawn. There are no
cuts: no face ends below its baseline `sd`.

| Face         | Kind | Figure reading                | Baseline          | Final                           | Light cost | Verdict                |
| ------------ | ---- | ----------------------------- | ----------------- | ------------------------------- | ---------- | ---------------------- |
| 2 (L1 rear)  | land | curve end 23.2, land to 28.8  | sd 22.95, no land | sd 22.95, `rimExtensionSd` 29.0 | 0.0 points | keep: slight (no cost) |
| 11 (L6 rear) | land | curve end 15.35, land to 20.0 | sd 15.45, no land | sd 15.45, `rimExtensionSd` 20.1 | 0.0 points | keep: slight (no cost) |

The final `rimcost.mjs` run against the baseline loses 0.0 points at every field from 0° to 30.8°: transmission stays
95.7% on axis and 29.7% at 30.8°. Fig. 1 also draws L5 square back to the cemented plane with a step down to L6's
flange; a land cannot sit on a cemented face, so L5's short slanted edge from 21.45 to 20.1 mm stays.

Checked and found correct:

- Labels: L1–L9 are the patent's lens numbers 1–9 (p. 6 and Fig. 1). The brackets I (faces 1–2), II (3–11) and III
  (13–18) enclose the same lenses as Fig. 1, D1 (faces 9–11) is the one cemented pair, and the file has no gap labels
  for it to clash with. Every type agrees with the radius signs. The stored thick-lens focal lengths equal the probe's
  (−59.44, +84.66, −133.62, +54.41, +39.62, −23.48, +79.95, +53.57 and −84.51 mm; D1 −106.25 mm). The inspector shows L1
  as a Negative Meniscus in QF3 at −59.44 mm and L6 as a Biconcave Negative in H-ZF6 at −23.48 mm, tagged DOUBLET D1.
  Every role is true.
- Stop and surfaces: STO is drawn between L6 and L7, 7.85 mm behind face 11, as Table 1 places the АД row. All faces are
  spherical (claim 2; Table 1 prints no asphere), so no label carries an `A`. No `apd` tag: the patent names no special
  glass and KMZ publishes no construction diagram.
- Movement: none is modeled, and `focus.description` says so. `focus=1` changes nothing, the focus slider's far end
  reads "Not modeled", and the movement overlay reports no modeled focus or zoom group movement.
- Colour: the patent prints no spherical, chromatic, astigmatism or distortion curves, only the polychromatic MTF of
  Fig. 2, so no line-by-line comparison is possible. The QF3 and H-ZF6 labels match the printed ν within 0.01. The
  model's axial colour at 0.97 of the pupil spans 163 µm from C to F.
- Unmatched glass: Table 1 (p. 7) prints only n and ν and claim 3 (p. 8) only ranges; the patent gives no glass name,
  extra line index or partial dispersion. There is one example. The 1.6920 / 55.05 pair serves four elements, which
  claim 3 ties together (n3 = n4 = n7 = n8), so it reads as one real melt; 1.6595 / 57.35 appears once, on L5.
- Checks after the edit: the surface validator prints OK; the aperture audit finds no rim limit and traces F/1.0 within
  3%; the image-circle audit lists nothing undersized; field coverage is 100%. The engine's half-field (28.10°),
  f-number (F/1.000) and EFL (36.014 mm) are unchanged.

Open: on the page, the STO label's first letter touches the top corner of L6's land, because the renderer centres the
label on the stop 1.65 mm behind the land.
