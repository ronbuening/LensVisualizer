# PENTAX SMC FA* 300mm f/4.5 ED [IF]: optical design

## Patent Reference and Design Identification

**Patent:** US 4,812,026  
**Application Number:** US 153,683  
**Priority:** February 6, 1987, Japan 62-26787  
**Filed:** February 8, 1988  
**Granted:** March 14, 1989  
**Inventor:** Mitsunori Iima  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha (Asahi Kogaku Kogyo Co., Ltd.)  
**Title:** Telephoto Lens System  
**Embodiment analyzed:** Example 2 (FIG. 5; aberrations FIGS. 6–8), numerical table in col. 4–5, repeated in claim 6.

The patent sets out to make an inner-focusing telephoto that is "very compact (telephoto ratio ≤ 0.7)" at about f/4.5, light enough in its focusing group for an AF drive (col. 1). Both numerical examples are normalized to f = 100 mm, F 1:4.5, half-field ω = 4.1°. The model scales Example 2 uniformly by 3. Every radius and axial length is multiplied by 3; there are no aspheric coefficients to transform. The scaled system has a calculated EFL of 300.064 mm. Its first-vertex-to-image length of 203.94 mm gives a telephoto ratio of 0.68.

The production correlation is probable, not proven. Ricoh's catalog entry for the smc PENTAX-FA★300mm F4.5 ED[IF] gives 9 elements in 7 groups, three ED elements, an 8.2° angle of view, 2.0 m minimum focus, 0.17× maximum magnification, a 67 mm filter, 72.5 × 160 mm and 935 g. Its construction drawing shows four front singlets with ED glass in the first, second and fourth, a cemented pair ahead of the iris, a small cemented pair behind it, and a single rear meniscus. Both patent examples have exactly that topology and put ED-coordinate glass (1.49700/81.6) at L1, L2 and L4. Example 2 matches the drawing more closely in three places: the nearly flat rear face of L1 (r2 = 666.381 against 138.854 in Example 1), the nearly flat rear face of L4 (r8 = −259.715 against −82.282) and the nearly flat front of the focusing pair (r12 = −5892.525 against −236.315). Its L2–L3 air space is also roughly half that of Example 1 (d4 = 4.40 against 8.06), as the drawing's compact front cell suggests. The same optical formula probably appeared first in the F★ 300mm f/4.5 of the late 1980s; that is an inference, not a documented equivalence.

The scaled module's 158.5 mm from front vertex to the K-mount flange (45.46 mm before the image) agrees closely with the FA★'s 160 mm barrel length. The calculated close-focus distance of the patent's β = −1/6 state, 2.06 m object-to-image, matches the rated 2.0 m and 0.17×.

## Optical Architecture

The lens is a positive–positive–negative telephoto (col. 1–2):

- **Group 1** (G1 on the diagram; L1–L4): positive ED meniscus, positive ED meniscus, high-index negative, positive ED biconvex. Composite focal length f1–4 = 150.6 mm (f1,2,3,4/f = 0.502).
- **Group 2** (G2; L5/L6, bracket D1): a cemented doublet that is only weakly positive (calculated f = +1219 mm). The patent defines it as a positive group whose cemented interface controls spherical aberration.
- **Group 3** (G3; L7/L8, bracket D2, + L9): a cemented negative doublet (f7,8 = −60.6 mm) followed, after a long air space, by a weak positive meniscus (f = +225 mm) convex to the object.

The iris sits between group 2 and the focusing doublet. All 16 refracting surfaces are spherical. The front group does almost all of the converging, and the negative rear group stretches the focal length. That telephoto split is what lets a 300 mm lens fit within 0.68 of its focal length.

The patent's conditions and the Example 2 values it prints (col. 2, col. 5):

| Condition | Range | Example 2 | What it controls |
| --- | --- | --- | --- |
| (1) f1,2/f | 0.2–0.4 | 0.280 | Front-pair power: compactness vs. spherical aberration |
| (2) f1,2,3,4/f | 0.4–0.6 | 0.502 | Group 1 power: compactness vs. spherical aberration |
| (3) νIP − νIN | > 25 | 39.4 | Group 1 achromatization |
| (4) \|r5/r6\| | 5.5–7.0 | 6.777 | L3 bending for spherical aberration |
| (5) {(n6 − n5)/r10}·f | −2.2 to −1.3 | −1.892 | Cemented interface in group 2, spherical aberration |
| (6) r14/f | 0.12–0.16 | 0.142 | Field curvature |
| (7) r15/f | 0.19–0.23 | 0.210 | Distortion vs. astigmatism |
| (8) f7,8/f | −0.22 to −0.15 | −0.202 | Focusing-pair power: travel vs. close-range aberration change |
| (9) ν7,8 | > 80 | 85 | Achromatism of the focusing pair |

The model reproduces the conditions that can be recomputed from the table: |r5/r6| = 6.777, (n6 − n5)/r10·f = −1.892, r14/f = 0.142, r15/f = 0.210 and f7,8/f = −0.202.

## Element-by-Element Analysis

Focal lengths are thick elements isolated in air, at the ×3 scale. Glass names are catalog equivalents with the same printed nd/νd; the patent names no glasses, and the production melts are not identified.

### L1 — Positive Meniscus (nearly plano-convex)

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) / S-FPL51 class — ED fluorophosphate. f = +114.8 mm.

The front collector has a strongly convex front and a nearly flat rear face; after L4 it is the strongest positive element of group 1. With L2 it sets condition (1). Putting the strongest positive power in very low-dispersion glass is the first step of the group's chromatic correction. The rear face is close enough to flat that the maker's drawing shows it as a straight line.

### L2 — Positive Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) / S-FPL51 class — ED. f = +282.7 mm.

A weaker ED meniscus that shares the front convergence with L1. Splitting that power over two menisci keeps the angles of incidence, and so the spherical aberration, small at the full 67 mm entrance pupil.

### L3 — Biconcave Negative

nd = 1.79952, νd = 42.2. Glass: S-LAH52 (OHARA) — lanthanum dense flint. f = −43.3 mm.

The only negative element in group 1 and the flint partner of the three ED crowns. Condition (3) keeps the average Abbe-number gap between them above 25 (39.4 here). Nearly all of its power sits on the deep rear face: condition (4) holds |r5/r6| between 5.5 and 7.0. Below that range the patent reports undercorrected spherical aberration, and above it overcorrection that the other surfaces cannot undo (col. 3). FIG. 5 draws a broad flat-topped blank with a chamfer at the rear rim, which the model follows (26.75 mm front, 24.6 mm rear).

### L4 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) / S-FPL51 class — ED. f = +68.8 mm.

The strongest positive element in group 1 nests 0.66 mm behind L3. Its convex front nearly follows L3's concave rear, and its rear face is almost flat. L1–L4 together set condition (2), f1,2,3,4/f = 0.502. A weaker group 1 would lengthen the lens, and a stronger one would leave too much spherical aberration (col. 3).

### L5 / L6 — Cemented Doublet (Group 2)

- **L5:** nd = 1.58144, νd = 40.7. Glass: S-TIL25 (OHARA) / E-FL5 class — light flint. Biconvex positive, f = +34.5 mm.
- **L6:** nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA) / S-LAH66 class — lanthanum crown. Biconcave negative, f = −32.7 mm.

The two elements nearly cancel, leaving a weakly positive group just ahead of the iris. Its job is the cemented interface r10. Because L6 has the higher index, r10 is a diverging surface, and condition (5) limits its strength, here (n6 − n5)/r10·f = −1.892. Too strong overcorrects spherical aberration, and too weak undercorrects it (col. 3). FIG. 5 draws L5 with an almost knife-edge rim. The model holds L5 to 18.5 mm, which leaves a 0.6 mm edge.

### L7 / L8 — Cemented Focusing Doublet (Group 3a)

- **L7:** nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA) / NBFD10 class — lanthanum dense flint. Plano-convex positive (r12 = −5892.5 native, effectively flat), f = +45.4 mm.
- **L8:** nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA) / S-LAH66 class — lanthanum crown. Biconcave negative, f = −25.7 mm.

The net-negative pair (f7,8 = −60.6 mm) is the inner-focus group, and the smallest optics in the lens. Condition (8) sets its power at f7,8/f = −0.202. Weaker means longer focus travel and a longer lens; stronger means larger aberration changes at close range (col. 3–4). Condition (9) requires the pair to be achromatized by itself (ν7,8 = 85 > 80) so that focusing does not reintroduce the color that groups 1 and 2 removed (col. 4). The rear face r14 is the field-curvature surface of condition (6).

### L9 — Positive Meniscus, convex to object

nd = 1.56138, νd = 45.2. Glass: LLF4 (SUMITA) class — light flint (code 561/452). f = +225.2 mm.

A fixed, weak rear meniscus. Its front face r15 is the subject of condition (7). Below the range distortion is well corrected but astigmatism grows, and above it distortion is undercorrected (col. 3). It also sets the exit-pupil position for the 61 mm back focus.

## Glass Identification and Selection

| Glass (catalog equivalent) | nd | νd | Elements | Role |
| --- | --- | --- | --- | --- |
| FCD1 (HOYA) / S-FPL51 class | 1.49700 | 81.6 | L1, L2, L4 | ED positive crowns of group 1 |
| S-LAH52 (OHARA) | 1.79952 | 42.2 | L3 | Group 1 flint, spherical-aberration overcorrector |
| S-TIL25 (OHARA) / E-FL5 class | 1.58144 | 40.7 | L5 | Group 2 positive |
| TAF1 (HOYA) / S-LAH66 class | 1.77250 | 49.6 | L6, L8 | High-index crown negatives at both cemented interfaces |
| S-LAH60 (OHARA) / NBFD10 class | 1.83400 | 37.2 | L7 | Focusing-pair positive |
| LLF4 (SUMITA) class | 1.56138 | 45.2 | L9 | Rear meniscus |

Each printed nd/νd pair matches the named catalog glass to the table's precision; LLF4's catalog νd is 45.3. The patent states that N is the d-line index (col. 4). The three 1.49700/81.6 elements are the three ED elements in Ricoh's description and drawing. The data file marks them `apd: "inferred"`: the patent prints no partial dispersions, so the anomalous dispersion and secondary-spectrum behavior come from the catalog fluorophosphate's P_g,F. This is a qualified spectral proxy, not a measured production glass. The chromatic strategy itself is classic: three low-dispersion crowns and one dense flint correct primary color in group 1, and condition (9) keeps the moving pair from undoing that correction.

## Focus Mechanism

The patent describes two focus branches and tabulates a β = −1/6 state for each (col. 5; claims 3 and 4).

| Gap (×3, mm) | Infinity | Inner focus, pair only (β = −1/6) | Rear focus, whole group 3 (β = −1/6) |
| --- | --- | --- | --- |
| d11 (L6 → L7) | 5.28 | 16.77 | 18.15 |
| d14 (L8 → L9) | 43.11 | 31.62 | 43.11 |
| fB | 61.02 | 61.02 | 48.15 |

The model uses the **inner-focus branch** (claim 3, FIG. 8). The cemented L7/L8 pair moves 11.49 mm toward the image while L1–L6, the iris and L9 stay fixed, so the lens length does not change. This suits the retail [IF] designation, though the name alone does not exclude the whole-group branch. The iris is placed at the midpoint of the infinity d11, 2.64 mm behind r11, because the patent does not dimension it. It stays with the front groups, so the iris-to-L7 gap grows from 2.64 to 14.13 mm.

Infinity and the printed close state are the only published focus positions. A paraxial solve of the printed close state puts the object 1859.5 mm in front of the first vertex (2.063 m to the image) at β = −0.1669, consistent with the nominal 1/6. The focus slider's intermediate positions follow that paraxial conjugate law (focus coordinate ∝ 1/distance); they are not a factory helicoid or cam. Moving the pair shortens the system focal length from 300 mm to about 232 mm at the close state, the usual focus breathing of a negative inner-focus group.

## Aperture, Stop and Clear Apertures

The iris radius comes from the f/4.5 design f-number: 12.37 mm at infinity, with a 66.7 mm entrance pupil. The maker lists f/32 as the minimum aperture. The patent prints no clear apertures. The rims were measured from FIG. 5 at 7.235 px/mm, a scale taken from the 142.92 mm r1–r16 vertex span and confirmed on d1, d8 and d14. They agree with the element-height ratios of Ricoh's drawing (L2/L1 ≈ 0.90, L3/L1 ≈ 0.73, L4/L1 ≈ 0.67). The front pair is the exception. At the figure's scale L1 would be about Ø73.4 mm, which cannot sit inside the FA★'s 67 mm filter thread and 72.5 mm barrel. L1 is therefore limited to Ø67.0 mm, just over the 66.7 mm f/4.5 entrance pupil, and L2 is reduced in the figure's proportion.

| Element | Rim (mm) | Basis |
| --- | --- | --- |
| L1 | 33.5 | 67 mm filter / 72.5 mm barrel limit (FIG. 5 draws ≈36.7); axial beam 33.34; 4.1 mm edge |
| L2 | 30.5 | FIG. 5 L2/L1 ratio 0.91 applied to the reduced L1; 4.7 mm edge |
| L3 | 26.75 / 24.6 | FIG. 5 front rim / chamfered rear rim |
| L4 | 24.6 | FIG. 5 (≈24.9); held at 24.6 for a 0.8 mm edge |
| L5 / L6 | 18.5 / 18.5 / 17.29 | FIG. 5 draws ≈19.0; L5 edge limited to 0.6 mm |
| L7 / L8 | 14.2 | FIG. 5 |
| L9 | 20.25 | FIG. 5; 3.0 mm edge |

The full f/4.5 axial beam and the corner chief ray pass at both infinity and the close state. Off-axis, the drawn front rims cut the outer half of the 4.1° corner bundle, the ordinary mechanical vignetting of a compact telephoto. It follows the drawn rims and is not removed by widening them.

## Aspherical Surfaces

None. Every surface is spherical, as printed.

## Model Scope and Limitations

- The printed fB of 20.34 (61.02 mm) is kept as the image distance. The Gaussian back focus of the scaled table is 61.060 mm, leaving a −0.040 mm residual at the authored image plane. The calculated EFL is 300.064 mm against the normalized 300 mm.
- The iris position, every clear aperture and the intermediate focus law are modelling choices, described above.
- FIG. 5's front element (Ø73.4 mm at the figure's scale) is larger than the FA★'s 72.5 mm barrel and 67 mm filter allow. The model follows the physical limit for L1 and L2 (Ø67.0 / Ø61.0 mm) and FIG. 5 for every other rim. With only 0.16 mm of L1 margin over the f/4.5 axial beam, the production front cell may itself trim the extreme marginal rays slightly.
- Example 1 and the whole-group focus branch are alternatives the patent presents equally. Production identity with Example 2 is a probable correlation from the maker's drawing, not a confirmed factory prescription.

## Sources

1. [US 4,812,026 (Google Patents)](https://patents.google.com/patent/US4812026A/en): FIG. 1 and FIG. 5 sections (sheets 1 and 3), conditions and their discussion (col. 2–4), Examples 1–2 and the focus rows (col. 4–5), claims 1–6 (col. 5–8).
2. [Ricoh official discontinued 35 mm lens catalog](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index35_others.html), FA★300mm F4.5 ED[IF] entry (specifications, three ED elements, inner focus).
3. [Ricoh optical construction image for the FA★300mm F4.5 ED[IF]](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/image/construct/t-fa300f45.jpg).
