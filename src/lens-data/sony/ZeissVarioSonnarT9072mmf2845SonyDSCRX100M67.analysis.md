# SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP WO2019/188070 A1 (Japanese republication of international publication WO 2019/188070 A1)
**Application Number:** PCT/JP2019/008854 (Japanese national application 特願2020-509773)
**Filed:** 2019-03-06 (international filing date)
**Priority:** JP 2018-063855, 2018-03-29
**Published:** 2019-10-03 (international publication); JP republication issued 2021-04-01
**Inventors:** Koji Toyoda, Maya Kiyotoshi, Keita Kaifu, Kentaro Tawada
**Applicant:** Sony Corporation (ソニー株式会社)
**Title:** ズームレンズおよび撮像装置 (Zoom Lens and Imaging Device)
**Embodiment analyzed:** Numerical Example 3 (数値実施例3; Tables 7–9, Figs. 5–6)

The patent discloses a positive-lead six-group zoom for compact still cameras whose stated objectives are small size, a high zoom ratio and a large aperture that is maintained toward the telephoto end (¶0005, ¶0013). The data file SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 (Sony Cyber-shot RX100 VI / RX100 VII) transcribes Numerical Example 3. The inventors' names are given in the source script, which is how this publication prints them. The romanization shown for 海部 敬太 is the form under which he is named on US 9,423,598 B2, assigned to Sony Corporation; no primary-source romanization was located for the other three inventors.

The attribution of Example 3 to the ZEISS Vario-Sonnar T* lens of the Sony RX100 VI and RX100 VII is a research correlation. No Sony document naming this example as the production prescription has been located. The correlation rests on converging evidence:

1. **Element and group count.** Example 3 has 15 elements in 12 groups (three cemented pairs); Sony specifies 15 elements in 12 groups for both cameras.
2. **Aspherical elements.** Eight of the fifteen elements carry aspherical surfaces, matching Sony's count of eight aspherical elements.
3. **Field of view.** The patent's half-angles of 42.2° (wide) and 6.2° (tele) correspond to Sony's 84°–12.5° angle of view.
4. **Format and applicant.** Sony is the applicant; the design is described for a large sensor in a compact body (¶0013), consistent with the 1.0-type (13.2 × 8.8 mm) sensor of both cameras.
5. **Timing.** The 2018-03-29 priority date precedes Sony's announcement of the RX100 VI on 6 June 2018; the RX100 VII (2019) uses a lens with the same published specification.

Three differences qualify the correlation. The example's zoom ratio is 7.40× (Table 9) against the marketed 8× (9.0–72 mm); its f-numbers are 2.97 / 4.16 / 4.72 against the marketed F2.8–4.5; and its Table 8 lists 14 aspherical surfaces, whereas Sony's feature text for the RX100 VI and RX100 VII states 13 aspherical faces on the eight aspherical elements. The example may therefore be a close sibling of the production prescription rather than the manufactured design itself.

Numerical Example 2 of the same publication is nearer the marketed values on those three points: its Table 5 lists 13 aspherical surfaces (its L52 is aspherical on the image side only, ¶0089), and its tabulated zoom ratio and f-numbers lie closer to the marketed 8× and F2.8–4.5. Like Example 3, it has 15 elements in 12 groups with eight aspherical elements, so counting elements or groups does not separate the two.

Two further published discriminators favour Example 3. Its doubled half-angles agree with Sony's stated angle of view at both ends, while Example 2 is wider than the stated wide-end value. In Sony's published construction drawing for the camera, the second element of the third group appears with a near-flat object-side face and a strongly curved image-side face — the Example 3 form — rather than the meniscus of Example 2; this is a visual comparison against the drawing, not a measurement. The 13-surface figure comes from Sony's feature prose, whereas the element and group counts that Example 3 also satisfies come from the specification tables, and an advanced-aspherical element is a moulded structure whose faces a manufacturer need not count as a patent table does. Neither example is established as the production prescription; Example 3 is the transcribed embodiment.

| Published quantity | Sony RX100 VI / VII | Example 2 (Tables 4–6) | Example 3 (Tables 7–9) |
| --- | --- | --- | --- |
| Elements / groups | 15 / 12 | 15 / 12 | 15 / 12 |
| Aspherical elements / surfaces | 8 / 13 | 8 / 13 | 8 / 14 |
| Zoom ratio | 8.0× | 7.73× (Table 10) | 7.40× (Table 10) |
| Maximum f-number, wide / tele | 2.8 / 4.5 | 2.93 / 4.66 | 2.97 / 4.72 |
| Full field angle, wide / tele | 84.0° / 12.5° | 86.2° / 12.2° | 84.4° / 12.4° |

## Optical Architecture

Example 3 is a positive–negative–positive–positive–negative–positive zoom: GR1 (+), GR2 (−), GR3 (+), and a rear unit GRA of GR4 (+), GR5 (−) and GR6 (+) whose combined power is positive (¶0022–¶0023, ¶0067). The 15 elements comprise three in GR1, four in GR2, three in GR3, two in GR4, two in GR5 and one in GR6. The aperture stop (IR, S13) sits immediately in front of GR3 and moves with it (¶0101).

Computed in-air focal lengths of the groups in the scaled model are 43.3 mm (GR1), −7.13 mm (GR2), 19.66 mm (GR3), 20.86 mm (GR4), −49.63 mm (GR5) and 174.25 mm (GR6). GR2 is by far the strongest group; GR6 is weak.

### Zoom kinematics

All six groups move during zooming (¶0068, claim 6). With the image plane fixed, the scaled model gives the following objectward displacements from wide to tele: GR1 24.1 mm, GR3 with the stop 14.1 mm, GR4 17.9 mm, GR5 16.6 mm and GR6 13.0 mm. GR2 reverses: it moves 0.84 mm imageward between the wide and middle states and 3.38 mm objectward between middle and tele. The GR3–GR4 spacing D19 is also non-monotonic (5.130 → 1.206 → 1.278 mm). Because the patent publishes only three zoom states, the paths between them are not defined by the source; the data file interpolates the spacings linearly.

The patent explains the motion as a distribution of the zooming task. Changing the GR1–GR2, GR2–GR3 and GR3–GR4 spacings varies the lateral magnification of GR2, GR3 and GR4 respectively, which limits the travel of any one group. Varying the GR4–GR5 spacing adjusts GR5, described as the group mainly responsible for image formation. The GR5–GR6 spacing gives GR6 a zooming action and suppresses the change of field curvature with zoom (¶0035).

The total physical track from the first vertex to the image plane grows from 60.2 mm to 84.4 mm in the model, including the rear filter plates. The ratio of track to focal length is 1.27 at tele, the quantity bounded by condition (e). The paraxial back focus is shorter than the focal length at every published state, so by that criterion the system is not retrofocus at any state; by the track-to-focal-length criterion it is not a telephoto at any state either.

### Scaling and model conventions

The patent is normalized to f = 1.00 at the wide end. The data file multiplies all lengths by 9.0, anchoring the wide end to Sony's 9.0 mm, and transforms each aspherical coefficient as A_p/9^(p−1), leaving K and the refractive indices unchanged. The computed focal lengths of the scaled model are 9.01 / 23.60 / 66.27 mm (from the unscaled prescription: 1.0015 / 2.6226 / 7.3634, against the tabulated 1.00 / 2.63 / 7.40). A uniform scale preserves the example's zoom ratio, so the modeled tele focal length remains well short of the marketed 72 mm. Marketing and design focal lengths are kept separate in the data file.

A real chief ray traced through the stop centre at the patent's half-angles, including all aspherical terms, reaches image heights of 6.66 / 7.65 / 7.61 mm at this scale. The 1.0-type format half-diagonal is 7.93 mm, so the middle (96.5%) and tele (96.0%) values fall just inside it. Relative to f·tan ω the wide-end chief ray lands 18.5% short (barrel distortion), consistent with the large negative distortion plotted at the wide end in Fig. 13.

The patent's two rear plane plates (S29–S32), the optical filter FL placed between GR6 and the image plane (¶0106; seal glass or filters per ¶0020), are modeled in the data file's `rearPlates` field at the same ×9 scale: 0.288 mm of nd 1.5168 / νd 64.2, 1.251 mm of air, 0.486 mm of nd 1.5567 / νd 58.6 and 0.963 mm of air to the image plane. Every analysis traces them; the diagram does not draw them. The last lens spacing D28 is the patent's physical gap to the first plate, 4.986 / 13.527 / 17.964 mm. Its air-equivalent value including the plates is 7.702 / 16.243 / 20.680 mm. The model track therefore matches 9 × the tabulated overall length (60.21 / 69.12 / 84.42 mm) to the rounding of the table. As tabulated, the image plane lies 0.206 mm behind the paraxial focus at tele and 0.018 mm at wide; the data file keeps the published image plane.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens values in air in the scaled model; in-situ behaviour depends on ray heights and neighbouring elements. Glass designations name the catalog glass whose nd/νd reproduces the patent coordinate, with its six-digit class; the patent names no glass types, so these are coordinate identifications rather than supplier facts (see Glass Identification).

### GR1 — Front Positive Group

The patent gives GR1 three elements. Its discussion of prior art states that a first group of two or fewer elements makes aberration correction at the telephoto end, particularly chromatic correction, difficult as the zoom ratio rises (¶0017). The computed focal length of the cemented pair L11 + L12 is 183.0 mm, so most of the group's positive power comes from L13.

### L11 — Negative Meniscus, convex to object (C1 front)

nd = 1.9460, νd = 18.0. Glass: FDS18 (HOYA) — 946180 class, ultra-high-index dense flint (catalog coordinate match; supplier unconfirmed). f = −114.81 mm.

L11 is the object-side element of the cemented doublet C1, which has the largest semi-diameter in the model. Its very low Abbe number contrasts with L12 (νd 63.9). At Abbe-number level, the summed chromatic power Σ(φ/νd) of the GR1 elements is small compared with their summed refractive power Σφ, whether the element powers are taken as thin or thick lenses; the ratio of the two sums depends too strongly on that choice to be quoted as an effective Abbe number. These sums exclude partial dispersion and secondary spectrum.

### L12 — Biconvex Positive (C1 rear)

nd = 1.6200, νd = 63.9. Glass: PCD40 (HOYA) — 620639 class, dense phosphate crown (catalog coordinate match; supplier unconfirmed). f = 70.42 mm.

L12 is the positive crown of C1. Its weakly curved rear surface (S3, R = −26.062 source) faces the thin air space to L13. With the modeled semi-diameter, the edge thickness of L12 is one of the two constraints that limit the front clear aperture of the model.

### L13 — Positive Meniscus, convex to object

nd = 1.7292, νd = 54.7. Glass: TAC8 (HOYA) — 729547 class, lanthanum crown; OHARA S-LAL18 shares the coordinate (supplier unconfirmed). f = 56.41 mm.

L13 is the strongest positive element of GR1. As a meniscus it bends toward the object, and the D5 air space that follows it is the gap that opens most during zooming (0.387 to 21.987 mm).

### GR2 — Negative Variator

GR2 contains four elements and five aspherical surfaces. Its strong negative power comes from the two outer menisci L21 and L24. The cemented pair C2 between them is net positive, with f = 41.3 mm. As in GR1, the group's summed chromatic power at Abbe-number level is small relative to its refractive power.

### L21 — Negative Meniscus, concave to image (2× Asph)

nd = 1.8514, νd = 40.1. Glass: M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass (catalog coordinate match; supplier unconfirmed). f = −11.32 mm.

L21 is the strongest negative element in the design. Its rear surface (S7, R = 0.992 source) is the most steeply curved in the prescription. Both surfaces are aspherical; the rear surface carries the largest aspherical departure in the model (see Aspherical Surfaces).

### L22 — Biconcave Negative (1× Asph, C2 front)

nd = 1.8514, νd = 40.1. Glass: M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass (catalog coordinate match; supplier unconfirmed). f = −16.55 mm.

L22 is the object-side element of C2. Its object-side surface (S8) is aspherical.

### L23 — Biconvex Positive (C2 rear)

nd = 1.9460, νd = 18.0. Glass: FDS18 (HOYA) — 946180 class, ultra-high-index dense flint (catalog coordinate match; supplier unconfirmed). f = 12.32 mm.

L23 places the highest-dispersion glass in the design (νd 18.0) in a positive element cemented to the lanthanum-flint L22 (νd 40.1). Within a negative group, a high-dispersion positive element opposing lower-dispersion negatives is the usual achromatizing arrangement; taken alone, however, C2 is net positive with its positive element in the more dispersive glass. The prescription does not state the chromatic balance intended for this pair.

### L24 — Negative Meniscus, concave to object (2× Asph)

nd = 1.8514, νd = 40.1. Glass: M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass (catalog coordinate match; supplier unconfirmed). f = −16.47 mm.

L24 closes GR2. Its strongly curved object-side surface (S11) faces C2, and both of its surfaces are aspherical.

### GR3 — Positive Group behind the Stop

GR3 consists of two positive elements and a negative meniscus, separated from one another rather than cemented in Example 3 (¶0102). Its Abbe-level chromatic sum Σ(φ/νd), taken over the standalone element powers, is −2.2e−04 mm⁻¹, of opposite sign to its positive power; the thin-lens form gives the same sign. At Abbe-number level this indicates that the negative L33 (νd 29.1) contributes more chromatic power than the two low-dispersion positives. The lateral magnification of GR3 changes from −4.500 at wide to 4.889 at tele, computed with the published infinity conjugates.

### L31 — Biconvex Positive (2× Asph)

nd = 1.6188, νd = 63.9. Glass: M-PCD4 (HOYA) — 619639 class, phosphate crown molding glass (catalog coordinate match; supplier unconfirmed). f = 14.49 mm.

L31 is the first element behind the stop and is aspherical on both surfaces. Table 8 lists the A4 coefficients of S14 and S15 with equal magnitude and opposite sign; the higher-order terms differ.

### L32 — Biconvex Positive (2× Asph)

nd = 1.4971, νd = 81.6. Glass: M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass (catalog coordinate match; supplier unconfirmed). f = 55.11 mm.

L32 is a weak positive element with a nearly flat front surface (S16) and a more strongly curved rear surface (S17), both aspherical. It is one of two elements in the M-FCD1 (497816) class.

### L33 — Negative Meniscus, concave to image

nd = 2.0010, νd = 29.1. Glass: TAFD55 (HOYA) — 001291 class, lanthanum dense flint; OHARA S-LAH99 shares the coordinate (supplier unconfirmed). f = −22.56 mm.

L33 has the highest refractive index in the design. Its concave rear surface (S19) faces the D19 air space, whose non-monotonic zoom behaviour is noted above.

### GR4 — Cemented Positive Group

GR4 is the single cemented doublet C3, with f = 20.86 mm. It pairs an M-FCD1-class biconvex element with an FDS18-class meniscus, and its summed chromatic power at Abbe-number level is close to zero relative to its refractive power. The lateral magnification of GR4 changes from 0.177 (wide) to −0.331 (tele).

### L41 — Biconvex Positive (1× Asph, C3 front)

nd = 1.4971, νd = 81.6. Glass: M-FCD1 (HOYA) — 497816 class, fluorophosphate ED molding glass (catalog coordinate match; supplier unconfirmed). f = 16.50 mm.

L41 carries the aspherical surface S20 on its object side.

### L42 — Negative Meniscus, concave to object (C3 rear)

nd = 1.9460, νd = 18.0. Glass: FDS18 (HOYA) — 946180 class, ultra-high-index dense flint (catalog coordinate match; supplier unconfirmed). f = −82.04 mm.

L42 is a weak negative meniscus. It forms a low-dispersion/high-dispersion positive–negative doublet with L41, the conventional form for an achromatizing pair; the patent publishes no partial-dispersion data to independently verify secondary-spectrum behaviour. The M-FCD1 catalog proxy supplies a spectral curve and supports an inferred ED/APD display tag, not a patent-listed glass identification.

### GR5 — Negative Group

GR5 consists of a positive meniscus and a biconcave negative element, air-spaced. The patent describes it as the group mainly responsible for image formation, controlled by the GR4–GR5 spacing (¶0035).

### L51 — Positive Meniscus, convex to image

nd = 1.8467, νd = 23.8. Glass: FDS90 (HOYA) — 847238 class, dense flint; SCHOTT N-SF57 shares the coordinate (supplier unconfirmed). f = 51.63 mm.

L51 is a positive dense-flint meniscus bending toward the image, separated from L52 by a thin air space.

### L52 — Biconcave Negative (2× Asph)

nd = 1.8514, νd = 40.1. Glass: M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass (catalog coordinate match; supplier unconfirmed). f = −25.34 mm.

L52 provides the negative power of GR5 and is aspherical on both surfaces (S25, S26).

### GR6 — Rear Positive Group

GR6 is a single element; the patent attributes a zooming action and suppression of field-curvature change to its motion (¶0035).

### L61 — Positive Meniscus, convex to object (2× Asph)

nd = 1.8514, νd = 40.1. Glass: M-TAFD305 (HOYA) — 851401 class, lanthanum flint molding glass (catalog coordinate match; supplier unconfirmed). f = 174.25 mm.

L61 is the weakest element in the design at first order, yet both of its surfaces carry negative aspherical departures of similar size that are among the largest in the model (see Aspherical Surfaces).

## Glass Identification

The patent gives only nd and νd for each medium (¶0064) and no glass names, supplier or partial-dispersion data. Each coordinate was nevertheless compared with vendor catalog data (HOYA, OHARA, SCHOTT, SUMITA, HIKARI and CDGM), and the data file names the catalog glass that reproduces it to the printed precision, together with its six-digit class. These are catalog-derived identifications of the coordinates, not published glass designations.

| Code / class | nd | νd | Elements | Catalog glass reproducing the coordinate (nd / νd from the catalog dispersion formula) | Other catalog glasses at the same printed coordinate |
| --- | ---: | ---: | --- | --- | --- |
| 946180 — ultra-high-index dense flint | 1.9460 | 18.0 | L11, L23, L42 | HOYA FDS18 (1.94594 / 17.98) | none (CDGM H-ZF88, νd 17.94, prints 17.9) |
| 620639 — dense phosphate crown | 1.6200 | 63.9 | L12 | HOYA PCD40 (1.61997 / 63.88) | none located |
| 729547 — lanthanum crown | 1.7292 | 54.7 | L13 | HOYA TAC8 (1.72916 / 54.67) | OHARA S-LAL18; SUMITA K-LaK18; CDGM H-LAK52 |
| 851401 — lanthanum flint, molding glass | 1.8514 | 40.1 | L21, L22, L24, L52, L61 | HOYA M-TAFD305 (1.85135 / 40.10) | none located |
| 619639 — phosphate crown, molding glass | 1.6188 | 63.9 | L31 | HOYA M-PCD4 (1.61881 / 63.86) | none located |
| 497816 — fluorophosphate ED crown, molding glass | 1.4971 | 81.6 | L32, L41 | HOYA M-FCD1 (1.49710 / 81.56) | HOYA FCD1, OHARA S-FPL51 and SCHOTT N-PK52A are nearby bulk-glass coordinates; a 0.0001 index difference does not establish production identity |
| 001291 — lanthanum dense flint | 2.0010 | 29.1 | L33 | HOYA TAFD55 (2.00100 / 29.13) | OHARA S-LAH99 |
| 847238 — dense flint | 1.8467 | 23.8 | L51 | HOYA FDS90 (1.84666 / 23.78) | SCHOTT N-SF57; CDGM H-ZF52 |

Among the catalogs examined, only HOYA's reproduces all eight coordinates, and two of them only as HOYA precision-molding glasses: the 619639 and 497816 coordinates match M-PCD4 and M-FCD1, while nearby bulk fluorophosphate crowns such as FCD1 and S-FPL51 differ by 0.0001 in nominal index. That small difference favors the closer molding-grade proxy but cannot exclude other production melts. For FDS18 and M-TAFD305 the catalog index lies on the rounding boundary of the fourth printed decimal, and the catalog dispersion formula reproduces it to about one unit in the sixth decimal. The data file therefore uses HOYA names. This is an inference from catalog coincidence across the whole palette; the patent does not name a supplier, and melts from other vendors cannot be excluded where they share a coordinate.

The palette is dominated by high-index glasses: 11 of the 15 elements have nd above 1.7, including all five 851401-class elements, which carry most of the design's aspherical surfaces. The only low-dispersion (νd > 80) glass is the 497816 class, used in L32 in GR3 and L41 in GR4. Glasses of that coordinate are commonly anomalous in partial dispersion, but the patent gives no ΔPgF and the data file stores no spectral line data, so no apochromatic or secondary-spectrum claim is made. The chromatic statements in the element sections rest on Abbe-number-level sums of element powers only. The two M-FCD1 elements are displayed as inferred ED/APD, with their spectral curves supplied by the catalog rather than invented patent line indices. The patent's Figs. 13–15 plot spherical aberration at the C, d and g lines for the three zoom states; they are a design record, not a substitute for glass identities.

## Focus Mechanism

The patent's camera description states that focusing is performed by moving a predetermined lens of the imaging lens under the lens drive controller (¶0058, ¶0060). It does not identify the focusing group for any numerical example, and Example 3 publishes infinity-focus spacings only. The data file therefore models no focus motion: every focus position repeats the infinity spacing at each zoom state, and the focus control produces no internal movement.

Sony specifies a minimum focus distance of approximately 8 cm at the wide end and 1.0 m at the tele end. Those two distances alone do not determine which group moves or how far, so no close-focus spacing has been reconstructed.

## Aspherical Surfaces

Table 8 gives 14 aspherical surfaces: S6, S7 (L21); S8 (L22); S11, S12 (L24); S14, S15 (L31); S16, S17 (L32); S20 (L41); S25, S26 (L52); and S27, S28 (L61). Four of the five GR2 surfaces are on the two outer menisci, and every element of GR3 except L33 is aspherical on both sides.

The patent defines the surface (¶0065–¶0066) with sag x along the axis, height y, paraxial curvature c = 1/R, conic constant K and coefficients Ai. As printed, the base term reads y²c²/[1 + {1 − (1 + K)y²c²}^1/2]. That numerator is dimensionally inconsistent, and the tabulated focal lengths are reproduced only with base curvature c. The standard form is therefore used:

$$x = \frac{c y^2}{1 + \sqrt{1 - (1+K) c^2 y^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12} + A_{14} y^{14}$$

All K values are zero (spherical base) in this convention, so no conic conversion is needed. Only even orders A4–A14 are tabulated. The coefficients below are the patent values in the patent's normalized units; the data file stores A_p/9^(p−1).

| Surface | A4 | A6 | A8 | A10 | A12 | A14 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| S6 (L21) | 1.3031E−01 | 4.4081E−01 | −2.3232E+00 | 3.7099E+00 | −2.4751E+00 | 5.6650E−01 |
| S7 (L21) | 1.4543E−01 | 9.9128E−01 | −6.3685E−01 | −5.0565E−01 | −4.6411E+00 | 6.3786E+00 |
| S8 (L22) | −2.1216E−01 | 6.7770E−01 | 9.4616E−01 | −1.2160E+01 | 2.4780E+01 | −2.4863E+01 |
| S11 (L24) | 1.0680E−01 | −2.3338E+00 | 1.2842E+01 | −3.0536E+01 | 2.8981E+01 | 0 |
| S12 (L24) | −1.1380E−01 | −1.7494E+00 | 1.2071E+01 | −3.7882E+01 | 5.6582E+01 | −3.3275E+01 |
| S14 (L31) | −8.1287E−02 | 7.6301E−02 | −2.6472E+00 | 2.0457E+01 | −7.3130E+01 | 8.7011E+01 |
| S15 (L31) | 8.1287E−02 | 1.2346E−02 | −3.0496E+00 | 2.8683E+01 | −1.0933E+02 | 1.3482E+02 |
| S16 (L32) | −5.3728E−02 | −9.4957E−02 | 1.1984E+00 | −4.1855E−01 | 3.7121E+00 | −1.9696E+01 |
| S17 (L32) | −8.9416E−02 | 3.9474E−02 | 2.1479E+00 | −1.6562E+01 | 7.6001E+01 | −1.2159E+02 |
| S20 (L41) | −6.0335E−02 | 4.9599E−02 | −7.6253E−02 | −2.2952E+00 | 1.3599E+01 | −2.2110E+01 |
| S25 (L52) | −1.5904E−02 | 6.0013E−02 | 4.8285E−02 | −1.6278E+00 | 3.4267E+00 | 0 |
| S26 (L52) | −3.2515E−02 | 1.5169E−01 | −3.7975E−01 | −4.6992E−01 | 2.0905E+00 | 0 |
| S27 (L61) | −2.6370E−01 | 2.5349E−01 | 1.3288E−02 | −1.2118E+00 | 1.7294E+00 | 0 |
| S28 (L61) | −2.4386E−01 | 2.4902E−01 | 1.3003E−01 | −1.5175E+00 | 2.0202E+00 | 0 |

The coefficients include large high-order terms of mixed sign, so the net shape is better judged from the total departure at the rim than from any single coefficient. The patent does not publish semi-diameters, so the departures below are evaluated at the semi-diameters modeled in the data file and would change with a different aperture assumption. The largest departure is on the rear of L21, 0.386 mm at a semi-diameter of 5.30 mm, followed by the front of L21 at 0.245 mm. Both L61 surfaces depart negatively by similar amounts, −0.247 mm (S27) and −0.223 mm (S28). The front of L31 departs by −0.123 mm; no other surface departs by more than 0.103 mm. The patent does not state the manufacturing method. All eight aspherical elements use one of the three coordinates that match HOYA precision-molding glasses (851401, 619639 and 497816), and none of the seven spherical elements does; this is consistent with glass-molded aspheres but is not evidence of the manufacturing method.

## Conditional Expressions

The patent's conditions and the Table 10 values for Example 3 are compared below with values recomputed from the unscaled prescription.

| Condition | Expression | Range | Table 10 | Recomputed |
| --- | --- | --- | ---: | ---: |
| (a) | LT45/LW45 | 0.5–1.8 | 1.27 | 1.274 |
| (b) | LT46/LW46 | 1.0–2.0 | 1.46 | 1.460 |
| (c) | (β3W/β3T)·(β4W/β4T) | > 1.8 | 2.02 | 0.494 as printed; 2.026 reciprocal |
| (d) | (β3W/β3T)/(β4W/β4T) | 1.0–5.0 | 1.77 | 1.716 |
| (e) | DT/FT | < 1.4 | 1.27 | 1.268 (Table 9 DT and f); 1.273 (summed spacings, computed f) |
| (f) | FT/FW | > 5.0 | 7.40 | 7.400 (table f); 7.353 (computed focal lengths) |

Conditions (a), (b), (e) and (f) reproduce within the rounding of Table 10. The recomputed value of (d) is lower than the tabulated 1.77 but within the stated range. Condition (c), evaluated as printed in the claims and ¶0036, gives 0.49 for Example 3 and would fail its own inequality. The reciprocal product (β3T/β3W)·(β4T/β4W) gives the tabulated 2.02; the same inversion reproduces Example 2's tabulated value (2.050 against 2.06). The printed ratios appear to be inverted relative to the tabulated numbers. This is a discrepancy within the source; the prescription itself is unaffected.

## Image Stabilization

The patent states that any group, or part of a group, can be shifted approximately perpendicular to the optical axis to shift the image, and that shifting the whole of GR4 does so with little change in aberrations (¶0050). Sony lists Optical SteadyShot for both cameras. No source examined identifies the production stabilizing group, so the data file models no decentering.

## Verification Summary

The scaled prescription was traced with independent sequential y–nu and ABCD methods. The two agree to numerical precision, and the focal lengths are exactly nine times those of the unscaled prescription.

| Quantity | Wide | Middle | Tele |
| --- | ---: | ---: | ---: |
| EFL, scaled model (mm) | 9.013 | 23.604 | 66.271 |
| Patent f × 9 (mm) | 9.00 | 23.67 | 66.60 |
| Patent FNo (calibration target) | 2.97 | 4.16 | 4.72 |
| Stop radius reproducing FNo (mm) | 4.04 | 3.92 | 4.16 |
| Entrance-pupil radius (mm) | 1.52 | 2.84 | 7.02 |
| Entrance pupil from S1 (mm) | 12.43 | 30.88 | 83.94 |
| Exit pupil from image plane (mm) | −31.60 | −35.37 | −43.43 |
| Track, S1 to image (mm) | 60.24 | 69.08 | 84.39 |
| Paraxial BFD, air-equivalent (mm) | 7.68 | 16.17 | 20.47 |
| Real chief-ray image height at patent ω (mm) | 6.66 | 7.65 | 7.61 |

The patent gives f-numbers but no diaphragm diameter, so the stop radii are calibrated to reproduce those f-numbers rather than verified against them. They differ between states: a single fixed iris equal to the wide-end radius would give f/4.04 at the middle state and f/4.87 at tele. The data file therefore uses an iris schedule inferred from the published f-numbers; that schedule is an inference, not a published value. The Petzval sum of the scaled model, Σφ/(n·n′), is 0.00309 mm⁻¹; it is a paraxial quantity and is not used here to predict field curvature.

Semi-diameters are not published. The data file sizes them from real-ray envelopes at the three zoom states (the full-aperture axial bundle, the 0.6-field bundle and the full-field chief ray) with clearance, then reduces the GR1 values where the edge thickness of L12 and L13 would otherwise fall well below 0.3 mm; at its larger front semi-diameter the edge of L13 is just under 0.3 mm. In the model, the front cemented pair has a semi-diameter of 13.30 mm and L13 12.35 mm. The axial and 0.6-field bundles and the corner chief ray pass unvignetted at the three published states and at intermediate interpolated states; this reflects the modeled apertures, not the production lens's vignetting.

## Sources

- Sony Corporation. *ズームレンズおよび撮像装置* (Zoom Lens and Imaging Device). Japanese republication JP WO2019/188070 A1 of international publication WO 2019/188070 A1; international application PCT/JP2019/008854; priority JP 2018-063855. Claims 1–9; ¶0005, ¶0013, ¶0017, ¶0020, ¶0022–¶0035, ¶0036–¶0050, ¶0058–¶0068, ¶0099–¶0115; Tables 7–10; Figs. 5, 6, 13–15.
- Google Patents record for WO2019188070A1, https://patents.google.com/patent/WO2019188070A1/en (family metadata only).
- Sony. DSC-RX100M6 specifications, https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx100m6/specifications.
- Sony. DSC-RX100M7 specifications, https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx100m7/specifications.
- Sony. DSC-RX100M7 features and specifications (aspherical-element and aspherical-face counts), https://www.sony.com/za/electronics/cyber-shot-compact-cameras/dsc-rx100m7/specifications.
- Sony Corporation. Press release 「広角から望遠までの新開発24-200mmズームレンズ、世界最速0.03秒の高速AF搭載『RX100 VI』発売」, 6 June 2018 (Japanese announcement of the DSC-RX100M6).
- Sony UK. DSC-RX100M6 specifications and features (eight aspherical elements with 13 aspherical surfaces; four AA and two ED elements), https://www.sony.co.uk/electronics/cyber-shot-compact-cameras/dsc-rx100m6/specifications.
- US 9,423,598 B2, *Zoom lens and imaging apparatus* (Sony Corporation; inventors Takumi Matsui, Keita Kaifu), as listed at https://patents.justia.com/inventor/keita-kaifu (romanization of 海部 敬太).
- Sony Corporation. *ズームレンズおよび撮像装置*, JP WO2019/188070 A1, Numerical Example 2, ¶0084–¶0098, Tables 4–6 (sibling-example comparison only).
- Glass catalog data: HOYA, https://www.hoya-opticalworld.com/english/datadownload/index.html; OHARA, https://www.ohara-inc.co.jp/en/product/catalog/; SCHOTT, https://www.schott.com/en-us/products/optical-glass-p1000267/downloads; HIKARI, https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf; CDGM, https://www.cdgmgd.com/database/toWebDatabase.htm?url=database; SUMITA, https://www.sumita-opt.co.jp/download_files/cn/catalog/cn-catalog-2407.pdf; formula data recomputed from the refractiveindex.info database (CC0; HOYA 2017-04-01 Zemax catalog and OHARA, SCHOTT, SUMITA, CDGM entries), https://github.com/polyanskiy/refractiveindex.info-database.
