## Patent Reference and Design Identification

**Patent:** JP S38-11587 B (特許出願公告 昭38-11587)
**Application Number:** 昭31-19922
**Filed:** July 31, 1956 (converted from 昭31.7.31)
**Published:** July 8, 1963 (converted from 昭38.7.8)
**Inventor:** Yoshiya Matsui (松居 吉哉)
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)
**Title:** Gauss-type photographic objective lens (ガウス型写真対物レンズ)
**Example details:** Sole, unnumbered numerical example (p. 2: F = 1.0, 1:1.8, 2ω = 46°), Seidel coefficient table for f = 1.000, S₁ = ∞, P₁ = 0.5419 (pp. 2–3), Fig. 1 section and Fig. 2 aberration curves for f = 100 mm (p. 4).

The patent describes a six-element Gauss objective in which the usual cemented front doublet is split: a separate negative meniscus L3 stands behind the two positive menisci, and only the rear pair L4–L5 is cemented. Its one numerical example is normalized to F = 1.0. The data file multiplies every radius and spacing by 50, a uniform scale chosen for the 5cm production lens that is neither printed in millimetres nor fitted to the traced focal length; the traced EFL is 50.006 mm (1.000118 F).

The example is probably the optical design of the **Super Rokkor 5cm f/1.8**, engraved "5cm f/1.8 Chiyoda Kogaku Super Rokkor". Minolta (then Chiyoda Kōgaku Seikō) introduced it in May 1958 with the Minolta 35 Model IIB rangefinder, in Leica thread mount, and made an optically identical version for the Minolta Super A. It has six elements in five groups, ten aperture blades, f/1.8–22, a 46 mm filter thread and a 1 m minimum focus. The evidence for the correlation:

1. **Layout and aperture.** The 1 + 1 + 1 + 2 + 1 arrangement with a separate L3 and a single cemented rear pair gives six elements in five groups at f/1.8, the production lens's published construction.
2. **Field.** The printed 2ω = 46° is the 24 × 36 mm diagonal field of a 51 mm lens. At 55 mm the same diagonal subtends 42.9°.
3. **Back focus.** The back focus is 0.592 F, 29.6 mm at 50 mm, which places the rear vertex 0.8 mm ahead of the 28.8 mm Leica thread-mount flange.
4. **Timing.** The application was filed in July 1956, two years before the lens appeared.

The **Auto Rokkor-PF 55mm f/1.8**, the first standard lens for the SR mount (SR-2, 1958), is the SLR sibling with the same layout. Minolta's SR-7/SR-1 brochure (SR-109) shows it as "six lens components in five groups" with a 1 + 1 + 1 + 2 + 1 section and lists a 43° angle of view. This example fits it less well. At 55 mm its 32.6 mm back focus would put the rear vertex 10.9 mm inside the 43.5 mm SR flange, while the SR-mount Minolta standard lenses in this catalog have back focal distances of 36.0–36.9 mm.

The correlation is probable, not confirmed. No source names a designer or a patent for either product. A six-element, five-group double Gauss was a common layout. The construction drawing on minolta.su (marked "Lens QA Works") gives no source and could itself be derived from this patent. The data file is the patent example scaled to 50 mm, not a confirmed factory prescription. It uses the patent's 46° field (23° half-field), which reaches a 21.1 mm image height at this scale; the 24 × 36 mm corner lies at 23.5°, and no rim blocks it.

## Optical Architecture

The design is an all-spherical modified Gauss objective with **six elements in five air-separated groups and eleven refracting surfaces**. Only L4 and L5 are cemented, at r8. The two positive menisci L1 and L2 form the converging front; the separate negative meniscus L3 follows behind a thin diverging air space (t4); the large central air space t6 holds the stop; the cemented negative–positive pair L4–L5 and the biconvex L6 complete the rear.

The patent divides the system into four optical subsystems built around air spaces rather than elements: I (L1 with the converging air space t2), II (the diverging air space t4 with L3), III (the front surface r7 of L4 and the cemented surface r8) and IV (the converging air space t9 with L6). I and IV converge, II and III diverge. The patent attributes the flare of older Gauss objectives at intermediate field angles to an over-strong subsystem III; the usual remedy of moving part of its divergence to II had, in earlier lenses, been overdone, worsening astigmatism and the chromatic variation of spherical aberration. This design keeps the shift moderate: limits on t4, r4 and r5 stop the astigmatism of subsystem II from growing, and the index step n5 − n4 at the cemented surface lets subsystem III share the spherical-aberration and coma correction. These subsystems are optical, not mechanical groups.

The span from the first to the last vertex is Σt = 0.6770 F, or **33.850 mm** in the model; the derived paraxial back focus is 0.5922 F (**29.609 mm**), so the infinity image plane lies 63.459 mm behind the first vertex. The patent prints neither the back focus nor a total length.

### Stop position

The patent calls t6 = 0.2017 F the stop interval but gives no split, and it prints the entrance pupil at **P₁ = 0.5419 F** behind the first surface with its Seidel table. The model places the stop at the paraxial image of that pupil formed by S1–S6: 5.2989 mm behind S6 and 4.7861 mm ahead of S7, which sum to the scaled t6 of 10.085 mm. Reading P₁ the other way (in front of the first surface) would put the stop outside t6 altogether. The pupil-dependent Seidel coefficients (II, III, V) recompute with this stop position (see below), which confirms the reading. The stop radius, 8.59 mm (a 17.2 mm iris), is derived from the patent's F/1.8.

### Clear apertures

The patent prints no clear apertures. The semi-diameters follow the element outlines of Fig. 1 scaled to the 33.850 mm vertex span: 16.6 mm for L1, 13.8 mm for L2 and L3, 10.0 mm for the cemented pair and 11.4 mm for L6, with smaller clear radii of 9.3 mm on the deeply curved rear face of L3 (S6) and 8.5 mm on the front face of L4 (S7). Flat rim extensions on S6 and S7 stand in for the chamfered edges drawn there. These are estimates from the figure, not published dimensions.

## Element-by-Element Analysis

Focal lengths are for each element alone in air at the 50 mm scale; the values for L4 and L5 do not describe their combined power as a cemented pair.

### L1 — Positive Meniscus, convex to object

nd = 1.67790, νd = 55.5. Glass: LAC12 (Hoya) catalog equivalent; supplier unspecified. f = +70.95 mm.

The front collector, nearly plano-convex (r2 = 3.083 F). Its high index meets the patent's condition n1 > 1.65, which the patent gives as necessary for removing spherical aberration while keeping the Petzval sum low.

### L2 — Positive Meniscus, convex to object

nd = 1.67790, νd = 55.5. Glass: LAC12 (Hoya) catalog equivalent; supplier unspecified. f = +44.44 mm.

The thick second collector, 0.15 mm behind L1 and of the same glass. Its rear radius r4 = 1.1123 F lies inside the patent's range 0.8 F < r4 < 1.5 F, which sets how strongly the off-axis beam is refracted at the air space t4.

### L3 — Negative Meniscus, convex to object

nd = 1.69900, νd = 30.1. Glass: SF15 (Sumita) catalog equivalent; supplier unspecified. f = −23.70 mm.

The separate negative element that distinguishes this layout from the four-group Gauss. With the diverging air space t4 = 0.036 F in front of it (0.02 F < t4 < 0.05 F) it forms subsystem II; its front radius r5 = 1.7096 F satisfies r4 < r5 < 2.2 r4. Its strongly curved rear face (r6 = 0.2755 F) faces the stop; it is the only flint ahead of the stop.

### L4 — Biconcave Negative

nd = 1.57490, νd = 39.2. Glass: Unmatched (no exact catalog row; supplier unspecified). f = −20.47 mm.

The front element of the cemented doublet and the lowest-index glass in the lens. Its front radius r7 = −0.3374 F lies inside −0.4 F < r7 < −0.28 F.

### L5 — Biconvex Positive

nd = 1.66670, νd = 48.4. Glass: BAF11 (Sumita) catalog equivalent; supplier unspecified. f = +22.44 mm.

The rear element of the cemented doublet. The cemented surface r8 = 0.7920 F (0.6 F < r8 < 1.2 F) separates indices that differ by n5 − n4 = 0.0918; this step lets subsystem III share the spherical-aberration and coma correction, reduces its negative astigmatism and the Petzval sum, and lowers flare from the upper part of the off-axis beam.

### L6 — Biconvex Positive

nd = 1.67000, νd = 47.2. Glass: BAF10 (Hoya) catalog equivalent; supplier unspecified. f = +48.81 mm.

The rear collector, weakly curved in front (r10 = 2.133 F) and 0.15 mm behind the doublet. With the converging air space t9 it forms subsystem IV.

## Glass Identification

| Element | nd | νd | Catalog equivalent | Δnd / Δνd |
| --- | --- | --- | --- | --- |
| L1, L2 | 1.6779 | 55.5 | LAC12 (Hoya) | 0.0000 / +0.02 |
| L3 | 1.6990 | 30.1 | SF15 (Sumita) | −0.00005 / −0.10 |
| L4 | 1.5749 | 39.2 | Unmatched | — |
| L5 | 1.6667 | 48.4 | BAF11 (Sumita) | +0.00002 / 0.00 |
| L6 | 1.6700 | 47.2 | BAF10 (Hoya) | +0.00003 / −0.01 |

The patent prints nd and νd (d line, 587.6 nm) for each element and names no glass or supplier. The catalog equivalents match the printed values within rounding and give the model a dispersion curve; they are not identifications of the 1956 melts. The 575/392 glass of L4 has no exact catalog row and keeps its printed values. Five of the six elements exceed nd 1.65 (the patent requires it of L1, L2, L5 and L6); only L4 is lower. L3 is the only dense flint (νd 30.1), and the cemented pair joins the 575/392 flint to a 667/484 barium flint. No partial-dispersion data are printed, so no secondary-spectrum claim follows.

## Focus Mechanism

Only infinity focus is modeled. The patent prints the example for an object at infinity (S₁ = ∞) and gives no focusing data. The Super Rokkor 5cm f/1.8 focuses to 1 m; that near state is not modeled.

## Conditional Expressions

The patent states the following conditions (p. 1 and the claim; its table writes the radii as π, Fig. 1 as r); the example meets all of them:

| Condition | Example |
| --- | --- |
| n1, n2, n5, n6 > 1.65 | 1.6779, 1.6779, 1.6667, 1.6700 |
| n5 − n4 > 0.065 (see below) | 0.0918 |
| 0.6 F < Σt < 0.75 F | 0.6770 F |
| 0.02 F < t4 < 0.05 F | 0.0360 F |
| 0.18 F < t6 < 0.24 F | 0.2017 F |
| 0.8 F < r4 < 1.5 F | 1.1123 F |
| r4 < r5 < 2.2 r4 | 1.7096 F (2.2 r4 = 2.447 F) |
| −0.4 F < r7 < −0.28 F | −0.3374 F |
| 0.6 F < r8 < 1.2 F | 0.7920 F |

The index condition is printed three ways: n5 − n4 > 0.0065 on p. 1, n5 − n4 > 0.065 on p. 2 and n5 − n5 > 0.065 in the claim. The example's 0.0918 satisfies both numerical forms, and the claim's n5 − n5 is evidently a misprint for n5 − n4. None of the variants affects the prescription.

## Aberration Coefficients

The patent prints third-order (Seidel) coefficients for every surface — spherical aberration I, coma II, astigmatism III, Petzval p and distortion V — for f = 1.000, S₁ = ∞ and P₁ = 0.5419. Recomputed from the printed prescription with the entrance pupil 0.5419 F behind the first surface, 53 of the 55 surface entries agree within 0.0006 and the Petzval column within 0.0002, which confirms the radii, the indices and the pupil position used for the stop. The two exceptions are both on surface 7: I7 is printed −1.4771 where the prescription gives −1.6763, and II7 is printed −0.9146 where it gives +0.9146. The printed column sums (ΣI = 0.2403, ΣII = −0.0066) agree with the recomputed values, not with the printed entries, so both are misprints in the coefficient table. The sums show a small residual spherical aberration (ΣI = 0.24), near-zero coma, slightly negative astigmatism and distortion (ΣIII = −0.035, ΣV = −0.084) and a Petzval sum of 0.237, a Petzval radius of about 4.2 F (211 mm at 50 mm).

## Model Scope and Limitations

- The 50 mm scale is chosen for the production lens; the patent example is normalized, and the production prescription is not published.
- At full aperture the geometric transmission falls to about 50 % at 20° and 31 % at the 23° edge of the patent's field.
- The stop position is derived from the printed entrance pupil, the back focus from the paraxial trace, and the clear apertures from Fig. 1.
- The model uses catalog dispersion curves for five elements and an Abbe-number estimate for L4; polychromatic results are approximations.
- Traced at the f = 100 mm scale of Fig. 2, the d- and g-line spherical aberration matches the printed curves, and the astigmatism and distortion match them through about 19°. Toward the 23° edge the printed curves are milder than the trace: at 23° the printed distortion is about −0.15 % and the traced −0.48 %.
- Only infinity focus is modeled.

## Sources

- [JP S38-11587 B on J-PlatPat](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S38-011587/12/ja), four pages: text, prescription and Seidel table (pp. 1–3), Figs. 1 and 2 (p. 4).
- [Minolta SR-7 / SR-1 brochure (SR-109)](https://vintagecameradigest.com/wp-content/uploads/2022/09/sr1-sr7-opt.pdf), printed p. 13 (Auto Rokkor F1.8/55mm, six components in five groups, section, 50 cm minimum distance) and p. 27 (interchangeable-lens table: 43°, 55 mm filter).
- [minolta.su: Chiyoda Kogaku 50mm 1:1.8 (Super Rokkor)](https://minolta.su/chiyoda-kogaku-50mm-f1-8/), engraving, May 1958 introduction with the Minolta 35 Model IIB, Leica thread and Super A versions, 6/5 construction, 10 blades, f/1.8–22, 46 mm filter, 1 m, construction drawing.
- [minolta.su: Auto Rokkor PF 55mm 1:1.8 (AR I)](https://minolta.su/minolta-auto-rokkor-pf-55mm-f1-8/), introduction with the SR-2 in 1958, 6/5 construction, 0.5 m.
- [National Diet Library bibliography](https://ndlsearch.ndl.go.jp/books/R100000136-I1970023484900524197), for the romanization Yoshiya Matsui of 松居吉哉.
