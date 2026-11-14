## Patent Reference and Design Identification

**Patent:** US 4,452,512
**Application Number:** 505,891
**Title:** Wide angle zoom lens system
**Inventor:** Hiroshi Takase
**Assignee:** Olympus Optical Co., Ltd.
**Priority:** 18 September 1979 (Japan 54-119830)
**Filed:** 20 June 1983, as a continuation of Ser. No. 187,448 (filed 15 September 1980, abandoned)
**Granted:** 5 June 1984
**Example details:** Embodiment 1, columns 4–5, with its focal lengths and conditional values; aberration curves in Figs. 2A–2C (wide, intermediate and tele); the same numerical data is recited in claim 1. Native patent scale.

The patent describes a two-group wide-angle zoom of seven singlets for 35 mm still cameras, with a field of 62° to 35° and a zoom ratio of about 1.9, built from glasses of "relatively low refractive indices" that are cheap and easy to work. It gives six numerical examples. Embodiment 1 is the one transcribed, and the model is associated with the Olympus S Zuiko MC Auto-Zoom 35-70mm f/4 for the OM system. The patent does not name a product, so the identification rests on construction and specification:

1. Olympus's data sheet gives seven elements in seven groups, the patent's seven components of seven lens elements.
2. The data sheet's section drawing shows three elements ahead of the zoom air space and four behind it, with the diaphragm between the fifth and sixth elements: the layout of Fig. 1.
3. The example covers f = 36.0–68.5 mm at a constant F/4, with half-fields of 31° and 17.5° in Figs. 2A and 2C. The data sheet gives 35–70 mm, F4–22 and an angle of view of 63° to 34°. At the 21.63 mm corner of the 35 mm frame the model covers 64.2° to 34.8°.
4. The assignee is Olympus Optical, and the September 1979 priority precedes the data sheet, whose imprint reads 0381.
5. At 68.5 mm, near its shortest setting, the model's first vertex lies 67.0 mm ahead of the OM mount flange (46 mm flange distance); the data sheet gives a length of 71 mm at the 70 mm setting.

All six examples share the same construction and nearly the same focal range (36–68.5 mm, or 36–68 mm in Embodiments 4 and 5), and nothing in the data sheet singles one out. Embodiment 1 is the first example and the one the claim recites; it stands for the family, not for a confirmed factory prescription. The data sheet also lists a 0.75 m minimum focus, a 55 mm filter thread and a weight of 380 g. This lens is distinct from the earlier Zuiko MC Auto-Zoom 35-70mm f/3.6, a ten-element design from a different Olympus patent (US 4,153,338).

## Optical Architecture

Seven spherical singlets form a negative-leading two-group zoom. The front group G1 (L1–L3) has a printed focal length of fM = −64.742 mm and the rear group G2 (L4–L7) fU = +42.415 mm; the table reproduces both (−64.742 and +42.415 mm). G1 is two negative menisci followed by a positive flint meniscus. G2 is in triplet form: the patent treats L4 and L5 together as its front positive member (printed f45 = 24.238 mm), followed by the negative L6 and the positive L7.

Zooming changes only the air space d6 between the groups, printed as 36.741 mm at 36 mm and 0.550 mm at 68.5 mm. G2 is the variator: its magnification, f / fM, runs from −0.556 to −1.058, and it moves 21.29 mm toward the object as the focal length rises. G1 is the compensator that holds the image plane: it moves 15.03 mm toward the image up to 64.7 mm, where G2 works at unit magnification and the lens is shortest, and then returns 0.14 mm. The first vertex lies 127.93 mm from the image at 36 mm, 112.89 mm at 64.7 mm and 113.03 mm at 68.5 mm.

The patent prints neither the back focus nor any setting between the ends. The model adds nine solved stations between the two printed rows, paraxial and in the d-line. At each station d6 is set for the station's focal length, which for two fixed groups gives d6 = −39.538 + 2746.03 / f mm, and the back focus places the paraxial image on the fixed plane, which gives BF = 45.998 + 0.65514 (f − 36) mm. The solved stations are first-order states, not Olympus's cam.

| f (mm) | d6 | BF | Source |
|---:|---:|---:|---|
| 36 | 36.741 | 45.998 | d6 printed, BF solved |
| 42 | 25.844 | 49.928 | solved |
| 48 | 17.671 | 53.859 | solved |
| 54.5 | 10.848 | 58.117 | solved |
| 61.5 | 5.113 | 62.703 | solved |
| 68.5 | 0.550 | 67.290 | d6 printed, BF solved |

Between neighbouring stations the gaps are interpolated linearly, which leaves at most 0.039 mm of defocus (near 37.5 mm). Interpolating between the two printed rows alone would defocus the image by up to 3.40 mm, because d6 varies with 1/f while the back focus varies with f.

The patent shows no stop. The model places the iris in the middle of d10, between L5 and L6, where the data sheet's section draws the diaphragm, so it travels with G2. The patent plots F/4 at the wide, intermediate and tele settings; the model therefore sizes the iris for F/4 at every station, from 6.75 mm radius at 36 mm to 9.10 mm at 68.5 mm. One fixed iris radius would give F/4 at one end only: about F/5.4 at 68.5 mm if set for F/4 at 36 mm.

## Element-by-Element Analysis

Focal lengths are for each element alone in air; they match the patent's printed f1–f7.

### L1 — Negative Meniscus

nd = 1.63854, νd = 55.4. Glass: BSM18 (OHARA catalog equivalent). f = −86.38 mm.

The front element, convex to the object, with a deep concave rear face (r2 = 23.51 mm). It bends the wide-angle chief rays toward the axis and carries the weaker share of G1's negative power. Conditions (1) and (12) bound its power against fM (|f1/fM| = 1.334) and its front radius against the wide-end focal length (r1/fw = 1.178).

### L2 — Negative Meniscus

nd = 1.63854, νd = 55.4. Glass: BSM18 (OHARA catalog equivalent). f = −59.21 mm.

The strongest element of G1: nearly flat in front (r3 = 442.2 mm) and deeply concave at the rear (r4 = 34.77 mm). The patent ties r4 to the balance between spherical aberration and off-axis aberration (condition (13), r4/fw = 0.966) and the air space behind it to the same balance (condition (15), d4/fw = 0.124).

### L3 — Positive Meniscus

nd = 1.68893, νd = 31.1. Glass: S-TIM28 (OHARA catalog equivalent). f = +80.07 mm.

A flint meniscus, convex to the object, that closes G1. Its low Abbe number against the two crown negatives achromatizes the front group. Its front radius controls spherical aberration (condition (14), r5/fw = 0.897; the patent prints this ratio as "s/fw").

### L4 — Biconvex Positive

nd = 1.65160, νd = 58.7. Glass: S-LAL7 (OHARA catalog equivalent), a lanthanum crown of the LaK7 type. f = +51.95 mm.

The first element behind the zoom air space. With L5 it forms G2's front positive member; the patent asks that the two share that power about equally (condition (9), f5/f4 = 0.851) and that its front radius stay well above L5's (condition (8), r7/r9 = 1.675) to limit the change of astigmatism during zooming.

### L5 — Positive Meniscus

nd = 1.65830, νd = 57.3. Glass: S-LAL11 (OHARA catalog equivalent). f = +44.21 mm.

A meniscus convex to the object, just ahead of the iris. Its strong front face (r9 = 24.51 mm, condition (6), r9/fw = 0.681) is the main positive surface of G2's front member.

### L6 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA catalog equivalent). f = −20.44 mm.

The only dense-flint element and the negative member of G2's triplet form, behind the iris. Its strong rear face (r12 = 20.76 mm, condition (7), r12/fw = 0.578 printed, 0.577 from the table) controls spherical aberration; the air spaces on either side, d10 and d12, sum to 0.265 fw, inside condition (16)'s 0.15–0.35 range, to limit flare from coma while keeping the lens short.

### L7 — Biconvex Positive

nd = 1.63980, νd = 34.5. Glass: S-TIM27 (OHARA catalog equivalent). f = +42.52 mm.

The last element, with almost all its power on the strong rear face (r14 = −30.41 mm). Its focal length nearly equals G2's (condition (11), f7/fU = 1.003), and the front member L4–L5 has 0.570 of its focal length (condition (10)).

## Glass Identification

Five of the six distinct glasses match a catalog row to the printed digits. No catalog row prints L4's 1.65160 / 58.7; the LaK7-type rows sit at νd 58.5–58.6, and the label is OHARA S-LAL7 (νd 58.55), from the maker of four of the other five glasses. The table gives n and ν without naming a spectral line, but the aberration curves are drawn for the d and g lines, so the indices are taken as d-line.

With these glasses the model follows the patent's spherical-aberration curves (Figs. 2A–2C): the d-line curve within about 0.01 mm at the wide, intermediate and tele settings, and the g-line curve within about 0.01 mm at the axis, its paraxial focus 0.04, 0.06 and 0.09 mm nearer the lens than the d-line focus against about 0.05, 0.07 and 0.09 mm in the plots. Its distortion is −3.9 % at 31° at 36 mm and +0.6 % at 17.5° at 68.5 mm, as plotted.

| Glass | nd | νd | Elements | Role |
|---|---:|---:|---|---|
| BSM18 (OHARA) | 1.63854 | 55.4 | L1, L2 | Front negative crowns |
| S-TIM28 (OHARA) | 1.68893 | 31.1 | L3 | Achromatizing flint of G1 |
| S-LAL7 (OHARA) | 1.65160 | 58.7 | L4 | G2 positive crown |
| S-LAL11 (OHARA) | 1.65830 | 57.3 | L5 | G2 positive crown |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | L6 | G2 negative dense flint |
| S-TIM27 (OHARA) | 1.63980 | 34.5 | L7 | Rear positive flint |

Conditions (4) and (5) keep the indices low: n1 and n2 below 1.65 (1.63854) and n4 and n5 below 1.7 (1.65160 and 1.65830). The patent links these limits to field curvature and to the aim of using inexpensive, easily machined glass. Only L6 exceeds 1.7.

## Focus Mechanism

The patent prints the infinity state only and names no focusing group, so the model holds infinity focus at every zoom setting. Olympus's data sheet lists focusing by rotating helicoid to 0.75 m but does not say which group moves; that focusing is not modeled.

## Conditional Expressions

Embodiment 1's printed values satisfy all sixteen conditions: (1) |f1/fM| = 1.334, (2) |f2/fM| = 0.914 and (3) |f3/fM| = 1.237 against limits of 1–1.5, 0.8–1.2 and 1–1.5; (4) and (5) as above; (6) r9/fw = 0.681 (0.6–0.8); (7) r12/fw = 0.578 (0.5–0.8); (8) r7/r9 = 1.675 (1.4–2.4); (9) f5/f4 = 0.851 (0.75–1.25); (10) f45/f7 = 0.570 (0.5–0.7); (11) f7/fU = 1.003 (0.9–1.2); (12) r1/fw = 1.178 (1.0–1.4); (13) r4/fw = 0.966 (0.8–1.5); (14) r5/fw = 0.897 (0.8–1.1); (15) d4/fw = 0.124 (0.1–0.14); and (16) (d10 + d12)/fw = 0.265 (0.15–0.35). The table reproduces each value to the printed digits except (7), 0.577.

## Model Scope and Limitations

The printed rows trace to f = 35.9999 and 68.5004 mm. The back focus, the nine intermediate stations, the stop position and every semi-diameter are model choices; none is printed. The semi-diameters follow Fig. 1, which is drawn at an intermediate zoom setting, and are checked against the ends of the ray fans in Figs. 2A–2C and by real-ray trace. L1's rear face ends in a flat land, as Fig. 1 draws it, but at 19.4 mm rather than the drawn 18.1 mm, where it meets L2's front face; a smaller cap would narrow the traced field at the wide end. L2 is therefore 17.9 mm across its front face against the drawn 19.3 mm, with a land on its rear face. L3 (17.4 mm), L4 (11.8 mm) and L5 (10.8 mm) match the figure within 4 %, and L4's rim closes the fans at 68.5 mm where the patent's plots close them. On the other side the patent's fans close at 0.57–0.65 of the pupil at the corner of each setting, as if a stop of about 8.4 mm radius sat at L7's rear face. Fig. 1 does not draw one, so the model keeps L7 at 10 mm and vignettes less at the corners than the patent's plots show.

## Sources

- US 4,452,512, *Wide angle zoom lens system*, Hiroshi Takase, Olympus Optical Co., Ltd., granted 5 June 1984.
- Olympus, *S Zuiko MC Auto-Zoom 1:4 f=35~70mm* data sheet (two pages, imprint 0381), from the Olympus OM document archive at [Zuikography](https://zuikography.com/olympus-om-archive/).
