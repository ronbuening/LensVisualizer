# Minolta MD Zoom 24-50mm f/4 — US 4,147,410 Embodiment 1

## Patent Reference and Design Identification

**Patent:** US 4,147,410
**Application Number:** 848,407
**Filed:** 4 November 1977
**Priority:** Japan 51-136627, 12 November 1976
**Granted:** 3 April 1979
**Inventors:** Masaichi Shimomura, Mitsuaki Horimoto
**Assignee:** Minolta Camera Co., Ltd. (printed as Minolta Camera Kabushiki Kaisha, Osaka)
**Title:** Two Group Wide Angle Zoom Lens System
**Classification:** Int. Cl.² G02B 15/16; U.S. Cl. 350/184
**Total claims:** 8
**Embodiment analyzed:** Embodiment 1 (Table 1, col. 6; reprinted verbatim as Claim 7, col. 8)

The patent discloses two numerical embodiments of a negative-positive two-group zoom intended for a 35 mm single-lens reflex camera, with a field angle "approaching 84 degrees" (col. 1, ll. 5–10). Embodiment 1 is transcribed here. Its Table 1 header gives f = 50 ~ 24, FNo. = 4 and 2ω = 47° ~ 84°; the variable air space d11 takes the values 1.66, 11.96 and 27.93 mm for the stations labelled f = 50, 35 and 24 (col. 6, ll. 10–17). The prescription contains 24 spherical surfaces and 13 elements; no aperture stop, back focus, semi-diameter, wavelength or focusing data are printed.

The correlation with the Minolta MD Zoom 24-50mm f/4 (reported by third-party sources as introduced in 1978 as the MD Zoom Rokkor; Minolta's March 1981 catalog lists it as the 24-50mm f/4 MD Zoom) rests on convergent evidence:

1. **Assignee and timing.** The patent is assigned to Minolta, and its Japanese priority date (12 November 1976) precedes the 1978 introduction reported by third-party sources.
2. **Construction.** Example 1 has 13 elements in 11 air-separated groups, the construction stated in Minolta's March 1981 catalog. A third-party review's figure of 10 groups conflicts with the manufacturer and is not adopted.
3. **Focal range and field.** The computed design focal lengths, 24.51–48.59 mm, and the patent's 2ω = 84°–47° match the marketed 24–50 mm and the catalog's 84°–47° angles of view.
4. **Aperture.** The constant FNo. = 4 matches the marketed constant f/4.
5. **Zoom kinematics.** The computed overall length is greatest at the wide end and least between 35 and 40 mm. This agrees with a user report that the lens is longest at 24 mm and shortest near 35 mm.

No Minolta document names this patent or embodiment. The identification is therefore a production correlation, not a manufacturer confirmation. The sibling Embodiment 2 (Table 2, Claim 8) shares the 13-element layout but differs in glasses and in which sub-component of group I is cemented (see Design Heritage); it was used only as a diagnostic.

## Optical Architecture

Embodiment 1 is a two-group negative-positive zoom of the retrofocus type. The patent describes this class of two-group zoom as providing "a power distribution of a retrofocus type" (col. 1, ll. 40–43).

- **Group I** (L1–L6) has a computed focal length of −38.44 mm.
- **Group II** (L7–L13) has a computed focal length of +33.80 mm.

Each group is divided into three components, following the patent's own nomenclature (col. 3, ll. 25–56):

| Component | Elements | Sign | Standalone focal length |
|---|---|---|---|
| I-1 | L1 | positive | +202.67 mm |
| I-2 | L2–L5 (sub-components a = L2, b = L3, c = L4+L5) | negative | −19.47 mm |
| I-3 | L6 | positive | +78.80 mm |
| II-1 | L7, L8, L9 | positive | +23.43 mm |
| II-2 | L10+L11, cemented | negative | −18.75 mm |
| II-3 | L12, L13 | positive | +29.69 mm |

All component focal lengths are computed thick and isolated in air. The two cemented junctions are r8 (inside sub-component c) and r19 (inside II-2). Claim 2 ("the third lens sub-component is a doublet") and Claim 4 ("the fifth intermediate lens component is a doublet") describe exactly these two junctions (col. 7, l. 64 – col. 8, l. 4).

At every published station the back focal distance exceeds the focal length, so the system is retrofocus in the verified sense. The paraxial d-line infinity back focus is 38.32 mm at 24.51 mm, a ratio of 1.56. The track exceeds the focal length everywhere, so the design is never telephoto.

| Station (patent label) | d11 (mm) | EFL (mm) | Back focus (mm) | Track r1→image (mm) |
|---|---|---|---|---|
| f = 24 | 27.93 | 24.51 | 38.32 | 118.90 |
| f = 35 | 11.96 | 35.08 | 47.62 | 112.23 |
| f = 50 | 1.66 | 48.59 | 59.50 | 113.81 |

The printed labels f = 24 / 35 / 50 are nominal. The computed focal lengths differ from them by +2.1 % at the wide end and −2.8 % at the tele end. Table 1 and Claim 7 agree, and Embodiment 2 shows the same pattern (24.48 / 34.60 / 48.88 mm), so the labels are approximate rather than a transcription error. The zoom ratio of the prescription is 1.98.

**Kinematics.** Zooming changes only d11 and the back focus (col. 4, ll. 1–10).

- **Group II** carries the stop. With the film plane fixed, it moves monotonically 21.17 mm toward the object from wide to tele.
- **Group I** reverses direction. It first moves toward the film and then back toward the object.
- **Track minimum.** In the continuous two-group law, the track minimum is 111.94 mm at EFL = 38.44 mm. That equals |f_I|, the state in which group II images the virtual image of group I at unit magnification.

The data file therefore marks group I as a reversing group.

**Principal planes and the "modified triplet" rear group.** The patent explains that a Gauss-type rear group was unsuitable. Group II is instead a modified triplet arranged so that "its object side principal point will approach the first lens group as much as possible" (col. 5, ll. 29–43). The computed cardinal points confirm and quantify this:

- Group II's front principal point lies 2.06 mm behind its first vertex r12, inside L7, in a group 21.95 mm long.
- Group I's rear principal point lies 18.38 mm ahead of r11.
- At the tele station, with d11 = 1.66 mm, the principal-plane separation is therefore 22.10 mm. The two-group formula with these values reproduces all three published focal lengths.
- At tele, the focal length changes by 1.82 mm per millimetre of principal-plane separation.

Moving group II's principal point forward is thus the direct means of reaching the long end of the range without closing d11 further. With d11 already 1.66 mm, very little mechanical gap remains to close.

**Aperture stop (inferred).** The patent draws no diaphragm. The data file places the stop at the middle of d17, the 4.5 mm air space between II-1 and II-2, which is the largest internal air space of group II and the conventional diaphragm site of a triplet-type group.

No fixed iris can hold the published constant FNo. 4. If the iris were fixed so as to give f/4 at tele, the best candidate location would give f/2.95 at wide by the paraxial convention (f/2.90 under the real-ray convention used below). The data file therefore calibrates the iris radius to f/4 at each station:

- The radius runs from 5.65 mm at wide to 8.52 mm at tele.
- This uses the real-ray convention, with an entrance-beam radius of EFL/8.
- The paraxial f-number of the same iris runs from f/3.87 to f/3.68. The difference is pupil spherical aberration.

This schedule is a calibration to the published f-number, not a published diaphragm diameter.

## Element-by-Element Analysis

All indices and Abbe numbers are the patent's (d-line by inference; see Glass Identification). Focal lengths are standalone thick values in air from the data file. Statements about aberration contributions refer to the third-order component sums in the Aberration Correction Strategy section, computed with the inferred stop.

### Group I — negative front group

#### L1 — Positive Meniscus, convex to object (component I-1)

nd = 1.6000, νd = 64.4. Glass: Unmatched (600644 phosphate-crown class). f = +202.67 mm.

L1 is a weak positive meniscus (r1 = +94.69, r2 = +417.7). Condition (2), 0.1 ≤ |Φ_I-1/Φ_I| ≤ 0.5, governs its power; the prescription gives 0.190. The patent calls (2) "a primary condition" for correcting distortion while keeping the system compact (col. 4, ll. 45–50).

- **Above the upper limit,** distortion could still be corrected, but I-1 would have to grow in diameter.
- **Below the lower limit,** I-1's distortion would be insufficiently corrected and I-2 would be too weak to correct higher-order spherical aberration at the tele end (col. 4, ll. 51–62).

The computed third-order distribution supports the distortion role. At the wide station, I-1 contributes S_V = −1.09 against the +1.76 generated by sub-component a, the largest single distortion term in the system. At wide, the real chief ray to the 42° field crosses r1 at 25.75 mm from the axis, against 9.89 mm at tele for the 23.5° field. The wide-end off-axis bundles therefore set L1's modelled semi-diameter (27.35 mm), the largest in the system and inside the 72 mm filter thread.

#### L2 — Negative Meniscus, convex to object (sub-component a of I-2)

nd = 1.7435, νd = 49.2. Glass: 743492 lanthanum flint (NBF1 / S-LAM60 class; supplier unconfirmed). f = −40.44 mm.

The patent requires I-2 to consist of three sub-components whose absolute powers decrease from object to image, |φ1| > |φ2| > |φ3| (col. 3, ll. 37–46). It argues that a two-part I-2 would make simultaneous correction of distortion and astigmatism over a large field "extremely difficult" (col. 4, l. 63 – col. 5, l. 10).

L2 is φ1. Its rear surface, r4 = +21.13, is the strongest surface in group I (−0.0352 mm⁻¹). Condition (3), 0.3 ≤ |φ1/Φ_I-2| ≤ 0.6, limits L2's share of the I-2 power; the prescription gives 0.481. Above the upper limit, the distortion and astigmatism generated at this sub-component could not be corrected by the rest of group I. Below the lower limit, group I would need a larger diameter (col. 5, ll. 13–28).

In the third-order sums, sub-component a is the dominant source of the wide-end barrel distortion (S_V = +1.76 at the 42° station).

#### L3 — Negative Meniscus, convex to object (sub-component b of I-2)

nd = 1.7435, νd = 49.2. Glass: 743492 lanthanum flint (NBF1 / S-LAM60 class; supplier unconfirmed). f = −56.74 mm.

L3 is φ2, a second meniscus of the same glass, weaker than L2 (|φ| = 0.01763 against 0.02473 mm⁻¹). Splitting the negative power over two menisci of the same orientation reduces the power each surface must carry, which is the patent's argument for a multi-part I-2. At the wide station, b contributes S_V = +0.40, under a quarter of a's contribution.

At tele, b and the other two I-2 sub-components carry negative spherical aberration (I-2 total S_I = −0.52). This offsets the positive contribution of I-3. It is consistent with the patent's statement that I-2 must be strong enough to correct the higher-order spherical aberration at the long end.

#### L4 + L5 — Cemented doublet (sub-component c of I-2)

- **L4 — Biconvex Positive.** nd = 1.7106, νd = 43.3. Glass: Unmatched (711433 lanthanum-flint class). f = +73.72 mm.
- **L5 — Biconcave Negative.** nd = 1.6385, νd = 55.7. Glass: 639557 dense barium crown (S-BSM18 / BACD18 class; supplier unconfirmed). f = −58.93 mm.

Sub-component c is φ3. As a cemented pair it is nearly afocal, with a net focal length of −321.9 mm (|φ3| = 0.00311 mm⁻¹), which satisfies the descending-power rule by a wide margin. The cemented interface r8 (R = −86.7) has a power of only +0.00083 mm⁻¹.

The glass pairing puts the lower-Abbe glass in the positive element. In a thin-lens Abbe-only estimate, the chromatic powers of L4 and L5 nearly cancel (Σφ/νd = +0.000009 mm⁻¹ against a net power of −0.0031 mm⁻¹), so the doublet adds almost no first-order colour. This is an inference from nd/νd only.

Its third-order contributions are small throughout. The largest is S_I = −0.13 at tele, where it adds to the negative spherical aberration of a and b. The patent states no specific purpose for cementing c; Claim 2 simply recites it.

#### L6 — Positive Meniscus, convex to object (component I-3)

nd = 1.7174, νd = 29.4. Glass: 717294 dense flint (S-TIH1 / SF1 class; supplier unconfirmed). f = +78.80 mm.

L6 closes group I. The patent's description states that I-3 includes a positive meniscus element (col. 4, ll. 5–7); it is a description of the drawn embodiments rather than a stated requirement. Its dense-flint glass is the lowest-Abbe glass in group I.

In the first-order colour sums, I-3's axial-colour term (C_I = +0.0081 at wide) cancels the negative terms of a and b (−0.0044 and −0.0043). This leaves group I as a whole nearly free of axial colour (C_I = −0.0002 at wide, −0.0006 at tele). Over the three published stations, the system's first-order axial colour changes only from −0.23 to −0.17 mm (F−C back focus; see Glass Identification).

At tele, I-3 is also the largest positive spherical-aberration contributor in group I (S_I = +0.51).

### Group II — positive rear group (modified triplet)

#### L7 — Biconvex Positive (component II-1, first element)

nd = 1.5168, νd = 64.0. Glass: 517640 borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed). f = +78.37 mm.

#### L8 — Positive Meniscus, convex to object (II-1, second element)

nd = 1.5168, νd = 64.0. Glass: 517640 borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed). f = +44.39 mm.

#### L9 — Positive Meniscus, convex to object (II-1, third element)

nd = 1.5168, νd = 64.0. Glass: 517640 borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed). f = +128.83 mm.

II-1 is the front positive member of the triplet-type rear group. The patent states that its power is "realized by two or more lens elements" to support a large aperture ratio (col. 5, ll. 38–43). Example 1 uses three air-spaced crown elements. L8, the strongest of them, carries r14 = +19.80 (+0.0261 mm⁻¹).

Condition (4), 1.4 ≤ |Φ_II-1/Φ_II| ≤ 1.8, governs II-1's power relative to group II; the prescription gives 1.443, 0.043 above the lower limit. The patent ties the condition to spherical aberration and the Petzval sum (col. 5, ll. 44–66):

- **Above the upper limit,** spherical aberration becomes undercorrected at the tele end.
- **Below the lower limit,** the change of spherical aberration with zooming grows. The Petzval sum also falls far enough that the sagittal field deviates positively in the zonal-to-marginal region at the wide end.

The computed sums are consistent with that description. II-1 is the largest positive Petzval contributor among the components (S_IV = +0.21 at wide), and at tele it contributes S_I = +0.45.

Dividing the positive power over three elements keeps the individual surface powers moderate. The strongest II-1 surface (r14) is weaker than r4 or r20.

#### L10 + L11 — Cemented doublet (component II-2)

- **L10 — Positive Meniscus, concave to object.** nd = 1.8052, νd = 25.4. Glass: 805254 dense flint (SF6 / S-TIH6 class; supplier unconfirmed). f = +49.46 mm.
- **L11 — Biconcave Negative.** nd = 1.7569, νd = 29.7. Glass: Unmatched (757297 lanthanum dense-flint class). f = −13.72 mm.

II-2 is the negative middle member of the triplet, with a net focal length of −18.75 mm. Both of its glasses are high-index flints. Its rear surface, r20 = +18.24, is the strongest surface in the system (−0.0415 mm⁻¹). The cemented interface r19 is weak (+0.0020 mm⁻¹), so the doublet acts mainly as a single strong negative element made from two flints.

In a thin-lens Abbe-only estimate, the pair has an effective Abbe number of about 32. It is a dispersive negative member set between crown positive members (II-1 effective νd ≈ 63, II-3 ≈ 64), the classical triplet colour arrangement.

The third-order sums show II-2 opposing II-1 almost term for term:

- **Spherical aberration:** S_I = −0.51 against +0.45 at tele.
- **Petzval:** S_IV = −0.23 against +0.21 at wide.
- **Axial colour:** C_I = −0.085 against +0.058 at tele.

II-2 also produces the largest astigmatism term of any component (S_III = −0.41 at wide). The inferred stop sits immediately ahead of this doublet.

### Group II — rear positive component II-3

#### L12 — Positive Meniscus, concave to object (II-3, first element)

nd = 1.5168, νd = 64.0. Glass: 517640 borosilicate crown (N-BK7 / BSC7 class; supplier unconfirmed). f = +61.74 mm.

#### L13 — Biconvex Positive (II-3, rear element)

nd = 1.6000, νd = 64.4. Glass: Unmatched (600644 phosphate-crown class). f = +57.66 mm.

II-3 restores positive power behind the stop. L12 is concave to the object, and its rear surface r22 = −20.76 carries +0.0249 mm⁻¹. L13 is a nearly plano-convex element of the same 600644 glass as L1.

II-3 lies behind the stop, where the chief ray has already crossed the axis at the stop centre. Its distortion contribution is opposite in sign to II-1's (S_V = +0.65 against −0.49 at wide). II-3 is the only component of group II whose distortion term is barrel-signed.

## Glass Identification

The patent prints four-decimal indices and one-decimal Abbe numbers without a wavelength statement. The index reference is inferred to be the d-line: N10/ν10 = 1.8052/25.4 matches SF6-class nd/νd (1.80518/25.43), while the corresponding e-line index (1.81265) does not. Minolta's 1981 catalog states that the company made its own optical glass. Every label below is therefore a catalog class or a six-digit code, not a supplier identification.

The six current catalogs checked were OHARA, HOYA, Schott, Sumita, HIKARI and CDGM, as distributed with opticalglass 2.0.2. Historical 1980 coordinates (Robb & Mercado) were consulted for context only, because a control test on SF6 showed them to be unreliable for dense flints.

| Code | nd / νd | Elements | Label | Nearest current candidates (Δnd, Δνd) | Role |
|---|---|---|---|---|---|
| 600644 | 1.6000 / 64.4 | L1, L13 | Unmatched (phosphate-crown class) | J-PSK03, S-PHM53 (+0.0030, +1.0); LBC3N (+0.0063, −0.7) | positive crown at both ends |
| 743492 | 1.7435 / 49.2 | L2, L3 | lanthanum flint, NBF1 / S-LAM60 class | NBF1 (−0.0002, +0.02); S-LAM60 (−0.0003, +0.1) | strong negative menisci |
| 711433 | 1.7106 / 43.3 | L4 | Unmatched (lanthanum-flint class) | LAFL4 (+0.0021, 0.0); J-LAF02, H-LaF62 (+0.0094, +0.3 to +0.4) | positive half of c |
| 639557 | 1.6385 / 55.7 | L5 | dense barium crown, S-BSM18 / BACD18 class | K-SK18, BACD18, S-BSM18 (< 0.0001, −0.2 to −0.3) | negative half of c |
| 717294 | 1.7174 / 29.4 | L6 | dense flint, S-TIH1 / SF1 class | SF1, S-TIH1, E-FD1 (< 0.0001, +0.1) | positive flint closing group I |
| 517640 | 1.5168 / 64.0 | L7, L8, L9, L12 | borosilicate crown, N-BK7 / BSC7 class | N-BK7, J-BK7A (0.0000, +0.1 to +0.2) | positive crowns of group II |
| 805254 | 1.8052 / 25.4 | L10 | dense flint, SF6 / S-TIH6 class | SF6, S-TIH6, K-SFLD6 (< 0.0001, < 0.05) | positive flint of II-2 |
| 757297 | 1.7569 / 29.7 | L11 | Unmatched (lanthanum dense-flint class) | NBFD29 (+0.0136, +0.04) | strong negative flint of II-2 |

The L1/L13 glass sits exactly at the edge of the round-trip window (Δnd = +0.0030 to S-PHM53 and J-PSK03), which the LensVisualizer resolver rejects. It is labelled Unmatched with its class stated. The 711433 glass lies 0.0021 in nd below HOYA LAFL4 (1.7127 / 43.3) at the same Abbe number, too far for a catalog-equivalent label, so it also stays Unmatched. The 757297 glass has no current catalog equivalent within Δnd 0.003 / Δνd 2; Embodiment 2 prints 1.7569 / 31.8 (the LaF11 coordinate) for the same element, but Table 1 and Claim 7 both print 29.7 and that value is kept.

The palette is conventional for the period. It contains no fluorite, ED or anomalous-partial-dispersion glass, and the patent publishes no line indices or partial dispersions. Chromatic statements in this analysis are first-order, Abbe-only estimates. They support no claim about secondary spectrum.

On that basis, the paraxial F−C back-focus difference is −0.23 mm at wide and −0.17 mm at tele (axial colour of the undercorrected sign). Lateral colour at the format corner is −0.013 to −0.020 mm. Group I's lateral-colour term (C_II = +0.015 at wide) is largely cancelled by group II's (−0.013).

## Focus Mechanism

The patent publishes infinity states only and does not describe focusing. Minolta's catalog gives a minimum focus of 2.3 ft (0.7 m) with separate focusing and zooming controls but does not say which group focuses. The data file therefore uses a **constrained reconstruction**:

- Group I translates toward the object (d11 grows) while group II and the film plane stay fixed.
- At each zoom keyframe, the extension is solved so that an object 700 mm from the film plane is imaged on the infinity film plane. The film-plane reference for the 0.7 m distance is an assumption.

Front-group focusing is a common mechanism for this type: it changes only d11 and leaves the zoom law intact. It is consistent with a user report that the front of the lens rotates during focusing. It is not, however, documented by Minolta.

| Station | d11 at infinity (mm) | d11 at 0.7 m (mm) | Extension (mm) | Magnification |
|---|---|---|---|---|
| 24.51 mm (published) | 27.93 | 30.30 | 2.37 | −0.039 |
| 35.08 mm (published) | 11.96 | 14.30 | 2.34 | −0.056 |
| 48.59 mm (published) | 1.66 | 4.01 | 2.35 | −0.077 |

The extension varies by only 0.03 mm over the zoom range, from 2.34 to 2.37 mm at all seven keyframes. That is the expected property of front-group focusing in a two-group zoom: the required extension depends essentially on f_I and the object distance, not on the zoom position. This is what allows a single focusing helicoid with one distance scale to hold focus across the zoom range (an inference; the barrel mechanics are not documented here).

Intermediate focus and zoom positions in the data file are linear interpolations between solved keyframes, not solved states.

## Aberration Correction Strategy

The patent's conditions are first-order power-distribution rules. Its text links each one to specific aberrations, which can be checked against a third-order (Seidel) decomposition of the implemented model.

**Normalization.** The coefficients below use these settings:

- marginal ray at an entrance height of EFL/8 (f/4);
- chief ray through the centre of the inferred stop at the published half-field;
- Welford's surface formulae, with the sign convention that positive S_V corresponds to barrel distortion here (confirmed with real rays).

Coefficients that depend on the stop position (coma S_II, astigmatism S_III, distortion S_V, lateral colour C_II) inherit the stop inference.

| Station | Group | S_I (sph.) | S_II (coma) | S_III (astig.) | S_V (dist.) | C_I (axial col.) | C_II (lat. col.) |
|---|---|---|---|---|---|---|---|
| Wide (42°) | I | −0.001 | +0.013 | −0.003 | +0.882 | −0.0002 | +0.0155 |
| Wide (42°) | II | +0.013 | −0.005 | +0.006 | −0.356 | +0.0038 | −0.0130 |
| Tele (23.5°) | I | −0.014 | +0.041 | +0.036 | +0.169 | −0.0006 | +0.0145 |
| Tele (23.5°) | II | +0.043 | −0.031 | −0.032 | −0.140 | +0.0032 | −0.0129 |

**Distortion.** At wide, the barrel distortion is generated in group I, essentially by sub-component a. It is reduced by I-1, a positive element far ahead of the stop, and by group II.

This decomposition gives quantitative content to the patent's use of condition (2) as the distortion condition. Within the model, the front positive meniscus provides the largest single term opposing the barrel distortion produced by the strong negative menisci behind it.

Real-ray distortion of the model is −3.42 % at 42°, −1.33 % at 32° and −0.29 % at 23.5°. At the wide end the distortion reaches its extremum of −3.61 % near 39.1° (0.1° scan), inside the 42° corner field.

**Field curvature.** The surface-by-surface Petzval sum is +0.002478 mm⁻¹, a Petzval radius of −403.5 mm, independent of zoom. It is the small remainder of opposing group sums: −0.0166 mm⁻¹ for the negative group I and +0.0191 mm⁻¹ for group II. The two-group negative-positive form thus provides most of its own Petzval correction.

**Spherical aberration and coma.** Spherical aberration is dominated by group II. Group I partly compensates it, more so at tele, where group I's sum reaches a third of group II's. This matches the patent's attribution of high-order tele spherical aberration to the power of I-2 (condition (2), lower-limit discussion).

Coma behaves differently. The two groups' coma sums are opposite in sign and of comparable size, with group I's the larger in magnitude. The net S_II is +0.008 at wide and +0.010 at tele.

The real-ray longitudinal spherical aberration of the model shows the following:

- **Wide:** a smooth undercorrection, −0.18 mm at the edge of the f/4 beam.
- **Tele:** a pronounced zonal undercorrection of −0.31 mm at about 0.75 of the pupil, turning to +0.17 mm at the edge.

**Colour.** As described under Glass Identification, group I is nearly free of axial colour on its own. Lateral colour is balanced between the two groups.

## Conditional Expressions

The patent states conditions (1)–(4) in column 2 (ll. 26–34), repeats them in column 3 (ll. 56–65) and recites them in Claim 1. The power ordering of the I-2 sub-components appears in column 3 and Claim 1. Powers here are standalone thick powers of each component in air, with I-1 = L1, I-2 = L2–L5, II-1 = L7–L9 and group II = L7–L13.

| Condition | Expression | Range | Embodiment 1 | Satisfied |
|---|---|---|---|---|
| (1) | \|Φ_II/Φ_I\| | 1.1 – 1.5 | 1.137 | yes |
| (2) | \|Φ_I-1/Φ_I\| | 0.1 – 0.5 | 0.190 | yes |
| (3) | \|φ1/Φ_I-2\| | 0.3 – 0.6 | 0.481 | yes |
| (4) | \|Φ_II-1/Φ_II\| | 1.4 – 1.8 | 1.443 | yes |
| — | \|φ1\| > \|φ2\| > \|φ3\| | — | 0.02473 > 0.01763 > 0.00311 mm⁻¹ | yes |

Conditions (1) and (4) are both close to their lower limits, at 0.037 and 0.043 above them.

- **Condition (1)** is linked to back focus. Above its upper limit, the patent says the wide-end back focus would become too short for the reflex mirror, and group II's aperture ratio would require more elements. Below the lower limit, wide-end distortion would increase (col. 4, ll. 11–44). The computed wide-end back focus of 38.32 mm is 1.56 times the focal length.
- **Condition (4)** is linked to spherical aberration and the Petzval sum, as discussed under II-1.

## Verification Summary

The model was checked with two independent paraxial engines (a y–nu trace and an ABCD product, which agree to below 1e-9 mm) and an exact meridional and skew ray tracer, all run on the transcribed data. Table 1 and Claim 7 were transcribed separately and agree value for value. One label misprint is corrected: the r21 row of Table 1 prints "d20 = 2.0"; it is read as d21 = 2.0, the reading Claim 7 prints, and no value changes. No scaling is applied.

The following elements of the data file are modelled rather than published:

- **Stop.** The stop position and the per-station iris radii are inferred and calibrated, as described under Optical Architecture.
- **Back focus.** The back focus is the computed paraxial d-line infinity image distance at each station.
- **Semi-diameters.** These come from exact ray envelopes of the f/4 axial beam, the corner chief ray and off-axis bundles at all modelled zoom and focus states, with geometric limits at r5 and r20. Group II (r12–r15 and r21–r24) was then trimmed toward the smaller rims drawn in FIG. 1, stopping where the f/4 axial beam still clears; the drawn L12 and L13 rims (about 7.0 and 7.3 mm) are smaller than that beam at the tele station, so the figure is not followed exactly and the wide-station corner bundle is vignetted at L13. The rear of group I (r6–r11) was raised 5–8 % to the drawn rims of L3–L6; r5 stays at its air-gap limit.
- **Intermediate stations.** Four of the seven zoom keyframes (EFL 28, 31.5, 39.5 and 44 mm) are derived from the patent's two-group law, not published. They keep the interpolated infinity image within 0.115 mm of the film plane between keyframes.
- **Viewer field display.** LensVisualizer's paraxial-linear chief-ray model displays a 35.8° wide-end half-field. Exact chief rays to the 42.4° format corner, however, pass every modelled semi-diameter.

**Comparison with the patent's aberration plots.** The model's real-ray aberrations were compared with values digitized from FIGS. 3–5 (Embodiment 1). The plotted values are hand-plot readings with an uncertainty of about ±0.03 mm and ±0.2 %, and the patent states no image-plane reference.

| Figure | Station | Quantity | Patent plot | Model |
|---|---|---|---|---|
| 5a | 24 mm | Spherical aberration, f/4 edge | −0.18 mm | −0.18 mm |
| 5b | 24 mm | Tangential / sagittal focus, 42° | −0.36 / +0.16 mm | −0.19 / +0.49 mm |
| 5c | 24 mm | Distortion, 42° | −3.7 % | −3.42 % |
| 4a | 35 mm | Spherical aberration, f/4 edge | −0.09 mm | −0.11 mm |
| 4b | 35 mm | Tangential / sagittal focus, 32° | −0.14 / +0.05 mm | −0.25 / +0.10 mm |
| 4c | 35 mm | Distortion, 32° | −1.24 % | −1.33 % |
| 3a | 50 mm | Spherical aberration, zonal minimum / edge | −0.30 / −0.03 mm | −0.31 / +0.17 mm |
| 3b | 50 mm | Tangential / sagittal focus, 23.5° | −0.26 / −0.16 mm | −0.23 / −0.13 mm |
| 3c | 50 mm | Distortion, 23.5° | −0.1 % | −0.29 % |

**Where the model and plots agree.**
- Spherical aberration agrees closely at wide and middle and in the tele zonal minimum.
- Distortion agrees within 0.3 percentage points at all three stations.
- The tele field curves agree within 0.03 mm.

**Where they differ, and how far the source can settle it.** To judge how much the printed precision itself determines each quantity, every printed radius, thickness and index was varied within half its last digit (200 samples, fixed seed). The resulting 5–95 % spread contains:
- the plotted edge spherical aberration at all three stations;
- the middle-station field curves;
- both tele field-curve values.

It does not contain:
- the wide-station sagittal focus (plotted +0.16 mm against a model spread of +0.43 to +0.54 mm);
- the wide-station tangential focus, which lies just outside;
- the plotted distortion values at any of the three stations.

**Effect of the stop position.** Moving the stop through d17 changes the wide-station tangential focus by about 0.8 mm, and by about 1.2 mm across all of group II's air spaces from d11 to d17. Over that whole range the sagittal value stays near +0.5 mm. The plotted field curves therefore do not identify a better stop location: no single position reproduces all three stations. The source of the wide-angle sagittal difference is not established. The model's semi-diameters, stop and focus law are not adjusted to fit the plots.

## Design Heritage

The patent positions itself against the German Offenlegungsschrift of 8 July 1976 (col. 1, ll. 26–50). The front page lists DE 2557547 (7/1976) among the references cited. The patent characterizes that publication as a two-group zoom whose negative first group has a positive front component, a positive rear component and a negative component between them. The patent describes it as leaving higher-order spherical aberration undercorrected at the long end and as allowing large changes of distortion and coma during zooming.

Embodiment 1 keeps that skeleton for group I: positive I-1, negative I-2, positive I-3. Its specific contributions are:

- a three-part negative I-2 with descending powers;
- a triplet-derived rear group whose principal point is moved forward;
- the four power-ratio conditions.

Embodiment 2 (Table 2) applies the same scheme with a different cementing choice. Its cemented junctions lie at r6, joining the two elements of sub-component b (the arrangement of Claim 3), and at r13 near the front of group II. Example 1 cements sub-component c (r8) and II-2 (r19) instead.

In production, third-party sources report two versions with the same 13-element, 11-group construction: the 1978 MD Zoom Rokkor(-X) and the 1981 MD Zoom. Minolta does not state that the two versions share identical optics.

## Sources

1. M. Shimomura and M. Horimoto, "Two Group Wide Angle Zoom Lens System," US Patent 4,147,410, granted 3 April 1979; application 848,407, filed 4 November 1977; assignee Minolta Camera Kabushiki Kaisha. Cited by column and line, by Table 1 (col. 6) and Claim 7 (col. 8), and by FIGS. 1 and 3–5 (drawing sheets 1–2).
2. Minolta Corporation, Photographic Division, *1981/1982 Catalog* (Dealer Notebook, entire contents), Ramsey, NJ, March 1981. Lens specifications on pp. C10 and C12; statement on in-house optical glass on p. C1. Scan: https://www.pacificrimcamera.com/rl/00063/00063.pdf; the lens section is also issued separately as Part 4 (Lenses), https://www.pacificrimcamera.com/rl/00052/00052.pdf (Pacific Rim Camera Reference Library, index at https://www.pacificrimcamera.com/rl/rlminoltamisc.htm).
3. lens-db.com, "Minolta MD ROKKOR 24-50mm F/4" and "Minolta MD 24-50mm F/4" (citing the March 1981 catalog), https://lens-db.com/minolta-md-rokkor-24-50mm-f4-1978/, retrieved 2 October 2026. Third-party corroboration of construction, minimum focus, filter size and model history.
4. Kamerastore, "Minolta 24-50mm f4 MD Zoom Rokkor" (first version, 1978), https://kamerastore.com/en-us/products/minolta-24-50mm-f4-md-zoom-rokkor-minolta-md, retrieved 1 October 2026.
5. Dyxum forum, "Samples: Minolta MD ZOOM ROKKOR 24-50mm F4," https://www.dyxum.com/dforum/samples-minolta-md-zoom-rokkor-2450mm-f4_topic114744.html, retrieved 1 October 2026.
6. MFlenses forum, "MINOLTA MD Rokkor 24-50mm 1:4," https://forum.mflenses.com/minolta-md-rokkor-24-50mm-14-t49410.html, retrieved 1 October 2026 (user report on focusing rotation and zoom length).
7. The Rokkor Files, "Minolta 24-50mm f/4 Review," https://www.rokkorfiles.com/24-50mm.htm, retrieved 1 October 2026 (source of the 10-group figure not adopted here).
8. OHARA, HOYA, Schott, Sumita, HIKARI and CDGM optical-glass catalog data as distributed with opticalglass 2.0.2 (PyPI); file identities and hashes are recorded in the companion evidence file.
9. W. J. Robb and R. I. Mercado, "Calculation of refractive indices using Buchdahl's chromatic coordinate," *Applied Optics* 22(8), 1198–1215 (1983), doi:10.1364/AO.22.001198 (historical 1980 catalog coordinates, context only).
10. W. T. Welford, *Aberrations of Optical Systems*, Adam Hilger, Bristol, 1986, chapter 8 (surface formulae for the Seidel aberrations and chromatic coefficients used in the Aberration Correction Strategy section).
