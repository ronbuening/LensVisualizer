# Minolta MD 50mm f/1.7

## Patent Reference and Design Identification

**Patent:** JP S60-111215 A\
**Application Number:** JP S58-219768\
**Filed:** November 21, 1983\
**Published:** June 17, 1985\
**Inventor:** Sho Fukushima (福島 省)\
**Assignee:** Minolta Camera Co., Ltd.\
**Title:** *Rear Conversion Lens System* (リア・コンバージョンレンズ系)\
**Example details:** The unnumbered taking-lens table (撮影レンズ例), PDF p. 4, drawn in Figure 2, PDF p. 6. Examples 1–4 are converters for this lens. Figure 4 onward show the combined systems, so the patent has no aberration plot for this lens alone.

The prescription is the taking lens the patent prints ahead of its four numbered converter examples. The patent states that it shows the taking lens first and then Examples 1–4, and that the converter values apply to the combination with this lens (PDF p. 4). It is a master lens with no example number of its own, so the data file records no `source.example`. All eleven radii, ten axial spacings and six N/ν pairs are kept at the printed millimetre scale, and nothing is rescaled to the marketed 50 mm.

The link to the Minolta MD 50mm f/1.7 is a correlation, not a confirmed factory prescription. The patent names no product. The evidence converges as follows:

1. **Construction.** Minolta's system guide lists the MD 50mm f/1.7 with six elements in five groups ([2], printed p. 19), the count in Figure 2.
2. **Focal length and aperture.** The patent's background addresses standard lenses of about 50 mm (PDF p. 2). The printed power and FNo = 1.73 give a computed 51.50 mm at f/1.73, consistent with a marketed 50mm f/1.7.
3. **Close focus.** The printed extension dM = 7.65 mm gives 450.2 mm object to image at 1:6.73 as a unit-focus lens. The guide lists 0.45 m.
4. **Timing.** The November 1983 filing comes two years after the 1981 New MD lens ([3]).
5. **Section shape.** A third-party section by Lens QA Works ([3]) shows the same element order, with the cemented pair behind the stop. It is not a Minolta drawing and cites no source, so it supports the shape only.

The guide also gives a 47° angle of view, a 49 mm filter and f/1.7–f/16. The patent's 45.6° and F1.73 are its own design values and stay distinct from those figures. A filter thread does not establish an optical clear aperture.

The patent cannot separate the 1981 New MD from the 1985 AF 50mm f/1.7, which has the same six-element, five-group count and 49 mm filter ([4]). Earlier Minolta 50mm f/1.7 lenses are listed with the same count ([5]). Which production version this table matches, if any matches exactly, stays unresolved.

## Optical Architecture

The lens is a modified double-Gauss: two positive menisci and a negative meniscus ahead of the stop, then a cemented negative/positive pair and a final positive element. It has six glass elements, five groups and eleven refracting surfaces. All surfaces are spherical, and the table lists no plate or asphere. The track from S1 to S11 is 34.18 mm. US 4,444,473, the F/2.0 patent behind the MD 50mm f/2 in this catalog, has the same arrangement ([6]).

The central air space d6 = 11.62 mm runs from S6 at z = 12.31 mm to S7 at z = 23.93 mm. The table prints no stop. The iris marks in Figure 2 put it at about z = 18.34 mm with a radius of 9.9–11.3 mm; the range reflects the figure's differing axial and radial scales. The model uses z = 18.4 mm, splitting d6 into 6.09 + 5.53 mm, and a stop radius of 10.36 mm derived from the design f-number. At full aperture S6 and S7 clear the iris by about 2.1 mm each.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.72000, νd = 50.31. Glass: LAC10 (HOYA, coordinate equivalent). f = +62.18 mm` (standalone in air).

S1–S2 form the first positive collector, with a strong object-side curvature and a weak rear curvature. Both faces have a modeled clear radius of 16.4 mm, square-cut as Figure 2 draws them.

### L2 — Positive Meniscus

`nd = 1.69350, νd = 53.39. Glass: LAC13 (HOYA, coordinate equivalent). f = +66.52 mm` (standalone in air).

S3–S4 form the second positive meniscus, 0.16 mm behind L1. Both faces have a modeled clear radius of 14.0 mm, square-cut as Figure 2 draws them.

### L3 — Negative Meniscus

`nd = 1.67270, νd = 32.22. Glass: SF5 (SCHOTT, coordinate equivalent). f = −30.70 mm` (standalone in air).

S5–S6 form the negative element ahead of the stop. The modeled clear radii are 12.7/11.0 mm; the rear value follows the rim drawn in Figure 2, and a land carries S6 out to the 12.7 mm flat top. The concave rear face reaches back toward the stop.

### L4 — Biconcave Negative, Front Member of Cemented Pair C1

`nd = 1.62590, νd = 35.70. Glass: S-TIM1 (OHARA catalog equivalent; production supplier unspecified). f = −21.74 mm` (standalone in air).

S7–S8 form the negative front member of the cemented pair, with a center thickness of 0.88 mm. The modeled clear radii are 10.8/11.7 mm, and a land carries S7 out to the 11.7 mm flat top. S7 reaches forward toward the stop.

### L5 — Biconvex Positive, Rear Member of Cemented Pair C1

`nd = 1.69350, νd = 53.39. Glass: LAC13 (HOYA, coordinate equivalent). f = +26.02 mm` (standalone in air).

S8–S9 form the positive rear member, sharing S8 with L4. The modeled clear radii are 11.7/12.3 mm. S8 is the tightest surface for the axial beam, which reaches 11.34 mm there at infinity and 11.69 mm at closest focus. Figure 2 steps L5 about 0.4 mm past L4 at S8; one rim on the cemented face cannot show that step. Together L4 and L5 have f = −569.4 mm in air, so the pair adds little net power.

### L6 — Biconvex Positive

`nd = 1.78100, νd = 44.55. Glass: Unmatched (code 781446; no public catalog row). f = +49.84 mm` (standalone in air).

S10–S11 form the final positive element, with a modeled clear radius of 12.3 mm on both faces and a center thickness of 2.80 mm. S10 is nearly flat at R = 374.955 mm, so S11 carries most of the power. The printed R11 = −43.293 mm is confirmed by the sag of r11 in Figure 2 and by the converter data.

## Glass Identification and Selection

The table labels N and ν without a spectral line. The data file treats them as d-line values, which is an assumption.

| Element | Patent N / ν | Catalog equivalent | Catalog nd / νd |
|---|---|---|---|
| L1 | 1.7200 / 50.31 | LAC10 (HOYA) | 1.72000 / 50.35 |
| L2, L5 | 1.6935 / 53.39 | LAC13 (HOYA) | 1.69350 / 53.34 |
| L3 | 1.6727 / 32.22 | SF5 (SCHOTT) | 1.67270 / 32.21 |
| L4 | 1.6259 / 35.70 | S-TIM1 (OHARA) | 1.62588 / 35.70 |
| L6 | 1.7810 / 44.55 | Unmatched | No catalog row |

The labels are catalog equivalents at the patent's coordinates and do not establish which supplier Minolta used. L6 stays unmatched: the 781445–781446 coordinate recurs across Minolta patents, but no public catalog row lies at 1.7810/44.55, and no glass is guessed for it. Its dispersion in the model comes from the patent's N and ν alone. L3 and L4 have the lowest ν of the six, and the positive elements run from ν = 44.55 to 53.39.

## Focus Mechanism

Unit focus: the whole lens moves forward as one piece, and only the back focus changes. The patent describes the taking lens as a whole-extension type, shows it extended to its closest focusing position in Figure 1(b), and defines dM as that extension (PDF pp. 2 and 5). The table prints dM = 7.65 mm.

| State | Back focus | Object to image | Magnification |
|---|---|---|---|
| Infinity | 36.884 mm (computed) | Infinite | 0 |
| Closest focus | 44.534 mm (computed + printed dM) | 450.2 mm | 1:6.73 |

The 450.2 mm result agrees with the 0.45 m the guide lists ([2]). The patent prints no aberration data for this lens alone at closest focus. With the iris unchanged, the axial beam runs wider behind the stop at closest focus: at S10 it reaches 12.21 mm against 11.68 mm at infinity.

## Model Scope and Limitations

The patent prints the power and not a focal length or back focus. The model computes EFL = 51.498 mm and a back focus of 36.884 mm, which places the infinity image plane at z = 71.064 mm. The computed power 0.019418 mm⁻¹ rounds to the printed φM = 0.0194.

The converter data give an independent check. The printed e1, B1, β1 and β2 of Examples 1–4, taken with each converter's own prescription, imply f = 51.47–51.50 mm and a back focus of 36.85–36.90 mm. The model reproduces e1 to within 0.02 mm and β1 and β2 to within 0.002.

The patent prints no clear apertures. The semi-diameters are estimated from Figure 2, which measures 14.3 px/mm along the axis and 13.6–14.0 px/mm across it, and are checked against traced rays. All are modeled values rather than production data, and the stop position is likewise inferred from the figure. The full f/1.73 beam passes on axis at infinity and at closest focus. Off axis the modeled rims transmit 81.2 % of the stop's beam at 11.4° and 36.2 % at 22.8°, limited mainly at S1 and S11.

The printed half-field of 22.8° reaches an image height of 21.46 mm, slightly short of the 21.63 mm corner of a 36 × 24 mm frame.

## Sources

1. JP S60-111215 A, Minolta Camera, 1985: [J-PlatPat record](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S60-111215/11/ja); [Google Patents](https://patents.google.com/patent/JPS60111215A/en). Taking-lens table PDF p. 4; Figure 2 PDF p. 6.
2. Minolta, [A Guide to the Minolta SLR System](https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf), printed p. 19 (scan on a third-party site).
3. [Minolta MD 50mm 1:1.7 review](https://minolta.su/minolta-md-50mm-f1-7/) on minolta.su, with the [Lens QA Works section](https://minolta.su/wp-content/uploads/2018/06/md5017_tony_optical_design2.png). Third-party drawing with no cited source.
4. [Minolta AF 50mm f/1.7](https://en.wikipedia.org/wiki/Minolta_AF_50mm_f/1.7), Wikipedia.
5. [Minolta Rokkor-PF 50mm f/1.7](https://www.cinelenswiki.com/lens:minoltarokkorpf-50mmf1.7), Cinelens Wiki.
6. US 4,444,473, Minolta Camera, 1984: [Google Patents](https://patents.google.com/patent/US4444473).
