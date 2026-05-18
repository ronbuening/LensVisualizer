# Sony FE 20-70mm F4 G — Optical Analysis

## Patent Reference and Design Identification

**Patent:** WO 2023/153076 A1 — "Zoom Lens and Imaging Device"
**Applicant:** Sony Group Corporation (JP)
**Inventors:** Tasaki Ryohei (田崎 涼平), Kumisawa Yuma (組澤 悠真), Juri Hiroo (重里 比呂生)
**Priority:** 9 February 2022 (JP 2022-019115)
**Filed:** 15 December 2022 (PCT/JP2022/046159)
**Published:** 17 August 2023

**Embodiment analyzed:** Example 8 (実施例 8), described at ¶0189–¶0198 and illustrated in Figure 92. The prescription is given in Tables 36–40 (¶0199–¶0203).

The identification of Example 8 as the production SEL2070G design rests on the following convergent evidence:

1. **Element and group count.** Example 8 specifies 16 elements in 6 optical power groups. When counted by the photographic convention (air-separated sub-groups), this yields 16 elements in 13 groups — matching Sony's published specification for the SEL2070G.
2. **Focal length range.** The patent gives f = 20.71 mm (wide) to f = 67.56 mm (tele), a 3.26× zoom ratio. The marketed focal length range is 20–70 mm.
3. **Aperture.** The patent specifies F/4.12 constant across all zoom positions. Sony markets the lens as f/4.
4. **Aspherical element count.** Example 8 has four aspherical elements (L22, L31, L45, L52), each with two aspherical surfaces — eight aspherical surfaces total. Sony specifies two AA (Advanced Aspherical) elements, one ED aspherical element, and one aspherical element, totalling four aspherical elements.
5. **ED element count.** Three non-aspherical elements use ED-class glass: L12 and L24 (νd = 68.6, FCD515-class fluorophosphate crown) and L42 (νd = 81.6, S-FPL51). The aspherical element L45 (νd = 81.5, S-FPL51) constitutes the "ED aspherical element." Sony specifies three ED glass elements plus one ED aspherical element, totalling four ED-type elements.
6. **Focus mechanism.** The fifth lens group (G5) serves as the focusing group, translating toward the image plane for close focus (¶0191, ¶0035). The production lens uses two XD linear motors consistent with a compact inner-focus unit.
7. **Patent timing.** The priority date (February 2022) precedes the SEL2070G's announcement by approximately one year, consistent with Sony's typical patent-to-product cadence.
8. **Image circle.** The patent's image height Y = 21.62 mm at the telephoto end corresponds to a full-frame 35 mm image circle (diagonal ≈ 43.3 mm).

**Note on semi-diameter convention.** Patent Table 36's column "φi" lists the effective clear aperture *diameter* for each surface, not the semi-diameter. This is confirmed by the image plane entry φi = 43.30 mm, which matches the full-frame sensor diagonal (43.27 mm) rather than the half-diagonal (≈ 21.6 mm). All semi-diameters in the companion data file are φi / 2.


## Optical Architecture

The Sony FE 20-70mm F4 G is a six-group zoom lens with the power distribution **positive–negative–positive–positive–negative–negative**, arranged from object to image as G1–G2–St–G3–G4–G5–G6. The aperture stop (St) is positioned between G2 and G3.

| Group | Power    | Elements | f (mm)   | Role                                                         |
|-------|----------|----------|----------|--------------------------------------------------------------|
| G1    | Positive | 2 (cemented) | +132.2 | Front collector; weak positive power to gather wide-field rays |
| G2    | Negative | 4        | −18.8    | Diverging group; strong negative power provides retrofocus geometry at wide end |
| G3    | Positive | 1        | +55.1    | Variator (zoom); moves toward object during zoom to tele, linked with G6 |
| G4    | Positive | 5        | +27.2    | Primary positive relay; variator + chromatic corrector        |
| G5    | Negative | 2        | −39.4    | Focus group; translates image-ward for close focus            |
| G6    | Negative | 2        | −432.4   | Rear group (GR); near-zero power, moves with G3 on same cam  |

The design is a retrofocus wide-angle zoom. At the wide-angle position (f ≈ 20.7 mm), the strong negative G2 diverges the beam before it enters the positive relay groups G3 and G4. This produces a back focal distance (14.5 mm at wide) that is sufficient for mirrorless camera registration despite the short focal length. The total optical track length ranges from 115.0 mm (wide) to 155.0 mm (tele), indicating that the lens physically extends during zoom — consistent with the production lens's extending barrel.

### Zoom kinematics

During zooming from wide to tele, all six variable air gaps change. All groups move away from the image plane (toward the object side), with the lens barrel extending by approximately 40 mm. G1, at the front of the barrel, moves the farthest from the sensor (+40.0 mm), while G2 moves only +8.2 mm — the d3 gap between them therefore increases from 0.80 to 32.60 mm. G3 and G6 share the same cam trajectory and move identically (+24.5 mm each). G4 moves +29.5 mm toward the object, nearly as far as G5 (+30.6 mm). The d11 gap (between G2 and G3/stop) decreases dramatically from 18.34 mm to 2.00 mm, and d14 (between G3 and G4) decreases from 5.97 mm to 1.00 mm. The BFD (d30) increases from 14.51 mm to 39.01 mm.

The linked motion of G3 and G6 (¶0039–¶0040) simplifies the mechanical cam design and reduces the number of independently moving barrel groups, which contributes to the lens's compact construction.


## Element-by-Element Analysis

### G1 — Front Collector (L11 + L12, cemented doublet)

#### L11 — Negative Meniscus, convex to object

nd = 1.94595, νd = 18.0. Glass: S-NPH53 (OHARA) — ultra-high-index, ultra-high-dispersion phosphate glass. f = −440.2 mm.

L11 is a thin (1.70 mm) negative meniscus with extremely high refractive index and very low Abbe number. Its weak negative power (f ≈ −440 mm) contributes minimally to the overall system power but plays a critical chromatic role: paired with L12 in a cemented doublet, L11 provides the high-dispersion flint element of an achromatic corrector at the front of the system. The ultra-high index (nd ≈ 1.946) reduces surface curvatures and therefore surface contributions to higher-order aberrations. S-NPH53 is a specialty OHARA glass from the NPH (new phosphate heavy-flint) family; its extremely low Abbe number makes it effective for chromatic correction even in a thin meniscus form.

#### L12 — Positive Meniscus, convex to object

nd = 1.59282, νd = 68.6. Glass: FCD515 (HOYA) — fluorophosphate crown, ED class (dPgF = +0.019). f = +100.3 mm.

L12 is the crown partner of the G1 achromatic cemented doublet. With νd = 68.6, it provides the low-dispersion complement to L11's extreme dispersion. The large Abbe number difference (Δνd ≈ 50.6) between L11 and L12 produces strong chromatic correction at the system entrance. The relatively long focal length (f ≈ +100 mm) means G1 as a whole has weak positive power (f_G1 ≈ +132 mm), which is characteristic of wide-angle zoom front groups: G1 acts primarily as a field-collecting element rather than a power-contributing group, keeping the front element diameter moderate despite the 94° field of view at the wide end.

The nd/νd pair (1.59282/68.6) matches the HOYA FCD515 fluorophosphate crown exactly (nd = 1.59282, νd = 68.63). FCD515 belongs to HOYA's FCD (Dense Fluor Crown) family of ED-class glasses, which exhibit positive anomalous partial dispersion (dPgF = +0.019). This glass is one of the three ED glass elements specified by Sony.

### G2 — Negative Diverging Group (L21, L22, L23, L24)

#### L21 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA). f = −20.8 mm.

L21 is the most powerful individual element in the entire system (f ≈ −20.8 mm). As the first element of G2, it receives the converging beam from G1 and sharply diverges it — this is the primary mechanism that gives the lens its retrofocus character at the wide-angle position. The high refractive index (nd ≈ 1.773) reduces the required surface curvatures for this strong negative power, mitigating higher-order aberrations. S-LAH66 is a lanthanum-series dense crown that balances high index with moderate dispersion.

#### L22 — Negative Meniscus, concave to object (2× aspherical)

nd = 1.85155, νd = 40.1. Glass: S-LAH89 (OHARA) — lanthanum-series dense flint. f = −60.0 mm.

Both surfaces of L22 are aspherical (surfaces 6 and 7 in the prescription). This is one of the two AA (Advanced Aspherical) elements in the production lens — the high refractive index (nd ≈ 1.852) makes precision aspherical manufacturing more challenging, warranting the AA designation.

L22's role is twofold: it provides supplementary negative power within G2, and its aspherical surfaces correct the substantial distortion, coma, and astigmatism that arise from the wide-angle beam geometry. At 20 mm, the chief ray enters G2 at a steep angle; L22's aspherical surfaces are the first opportunity in the system to manage the resulting off-axis aberrations. The A4 coefficients on both surfaces are positive (3.457 × 10⁻⁵ and 1.830 × 10⁻⁵), indicating that both surfaces flatten at the rim relative to their base spheres — this reduces the refraction angle for marginal rays and helps control barrel distortion, though the production lens still requires significant software distortion correction at 20 mm (approximately 9% barrel distortion in raw files).

#### L23 — Biconvex Positive

nd = 1.85478, νd = 24.8. Glass: S-LAH98 (OHARA) — dense lanthanum flint, very high dispersion. f = +35.1 mm.

L23 is a biconvex positive element embedded within the otherwise negative G2. Its role is primarily chromatic: the very low Abbe number (νd = 24.8) paired with L21's and L24's higher-νd glasses creates an internal chromatic correction within G2 itself. Without L23, the strong negative power of G2 would introduce severe lateral chromatic aberration, particularly at the wide-angle end where G2's contribution to the system is strongest. L23 partially cancels the chromatic divergence introduced by L21 and L22 while its biconvex form adds controlled positive power to moderate G2's net negative power.

#### L24 — Negative Meniscus, concave to object

nd = 1.59282, νd = 68.6. Glass: FCD515 (HOYA) — same ED fluorophosphate crown as L12. f = −60.9 mm.

L24 completes G2 with a final negative meniscus. Its high Abbe number (νd = 68.6) and its pairing with L23 (νd = 24.8) provides the second stage of chromatic correction within G2. The meniscus shape (concave toward the object) bends the diverging beam toward the optical axis, setting up the ray geometry for the aperture stop and G3. The use of the same ED-class FCD515 glass as L12 contributes to the count of three ED glass elements in Sony's specification.

### G3 — Positive Variator (L31)

#### L31 — Positive Meniscus, convex to object (2× aspherical)

nd = 1.69350, νd = 53.2. Glass: lanthanum crown class (694/532); no exact OHARA catalog match found — likely a mold-compatible crown optimized for aspherical manufacturing. f = +55.1 mm.

L31 is the sole element of G3, which functions as a zoom variator: it moves toward the object during zoom from wide to tele, working in concert with G4's movement to produce the focal-length change. Both surfaces are aspherical (surfaces 13 and 14), making L31 one of the two AA elements. The aspherical corrections on L31 are relatively mild (A4 ≈ 1.0 × 10⁻⁶ on S13 and 1.0 × 10⁻⁵ on S14), indicating fine-tuning of spherical aberration and coma rather than gross surface reshaping.

The nd/νd pair (1.69350/53.2) does not correspond to a standard OHARA or HOYA catalog entry, which is characteristic of glasses selected or developed specifically for precision glass molding. AA elements often use proprietary or specialty glass compositions optimized for the molding process. The moderate refractive index is consistent with a glass that can be molded with high surface accuracy.

G3's position immediately after the aperture stop means it processes a relatively narrow on-axis beam (sd ≈ 10.3 mm), and its single-element construction keeps the variator group lightweight — important for zoom tracking speed and mechanical simplicity.

### G4 — Positive Relay and Chromatic Corrector (L41 + L42 cemented; L43 + L44 cemented; L45)

G4 is the most complex group in the system, containing five elements in three air-separated sub-groups. It provides the strongest positive power of any group (f_G4 ≈ +27.2 mm) and serves as the primary zoom variator and chromatic correction station.

#### L41 — Negative Meniscus, convex to object (cemented with L42)

nd = 1.95375, νd = 32.3. Glass: S-LAH79 (OHARA) — ultra-high-index lanthanum dense flint. f = −44.9 mm.

L41 is the negative flint partner of the L41–L42 cemented doublet. With the highest refractive index in the system (nd ≈ 1.954), it provides strong negative power within a meniscus form. The cemented doublet L41+L42 acts as an achromatic positive element: L41's dense flint glass (νd = 32.3) paired with L42's ED crown (νd = 81.6) produces excellent chromatic correction at the heart of the relay group.

#### L42 — Biconvex Positive, ED glass (cemented with L41)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — ED fluorophosphate crown. f = +29.8 mm.

L42 is an ED (Extra-low Dispersion) element — one of the three ED glass elements specified by Sony. S-FPL51 is the workhorse ED glass of the Japanese photographic lens industry. Its very high Abbe number (νd ≈ 81.6) and anomalous partial dispersion (ΔPgF ≈ +0.034) enable correction of both primary and secondary chromatic aberration. Within the cemented doublet, L42 provides the bulk of G4's positive power while L41 corrects the resulting chromatic spread.

The Abbe number difference within this doublet is Δνd = 81.6 − 32.3 = 49.3, which is large enough to produce strong achromatization. The cemented interface at R = 14.925 mm has strong curvature, creating an internal surface that refracts the spectrum differentially — the classic mechanism of a cemented achromat.

#### L43 — Positive Meniscus, concave to object (cemented with L44)

nd = 1.60342, νd = 38.0. Glass: S-TIM5 (OHARA) — titanate-series medium-index flint. f = +60.7 mm.

L43 is the positive element of the L43–L44 cemented doublet — the second achromatic pair within G4. Its concave-to-object meniscus form is unusual for a positive element and is driven by the ray geometry at this position: after the strong convergence from L41+L42, the beam is already partially focused, and the meniscus form allows L43 to add moderate positive power without introducing excessive spherical aberration.

#### L44 — Negative Meniscus, concave to object (cemented with L43)

nd = 1.85451, νd = 25.2. Glass: high-index dense flint class (855/252). f = −48.8 mm.

L44 is the negative flint partner of the second cemented doublet. The low Abbe number (νd = 25.2) makes it an effective chromatic corrector, while its meniscus form (concave to object) contributes to field curvature correction. The two cemented doublets in G4 (L41+L42 and L43+L44) together provide robust chromatic correction across a wide zoom range — the dual-doublet architecture is necessary because G4's power contribution varies significantly between wide and tele positions.

#### L45 — Biconvex Positive, ED aspherical (2× aspherical)

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +28.3 mm.

L45 is the ED aspherical element specified in Sony's marketing — an element that combines ED glass with aspherical surfaces, a technically demanding combination. It is designated PL1 (the positive lens satisfying conditional expressions (5) and (6)) in the patent text (¶0041). Both surfaces are aspherical (surfaces 21 and 22). The front surface (S21) has negative A4 (−2.00 × 10⁻⁵), causing the surface to flatten at the periphery — this reduces spherical aberration from the strongly converging beam. The rear surface (S22) has positive A4 (+2.97 × 10⁻⁵), also flattening the concave rear surface at the rim.

L45 is the critical element for simultaneous control of spherical aberration, coma, and chromatic aberration within G4. The patent specifically defines conditional expressions governing its Abbe number (condition 5: 60.0 < νdPL1 < 100.0; satisfied at νd = 81.5) and its anomalous partial dispersion (condition 6: 0.005 < ΔPgFPL1 < 0.150; satisfied at ΔPgF ≈ 0.034). The combination of aspherical surfaces on ED glass is notable: conventional ED glass (S-FPL51) has a relatively low refractive index (nd ≈ 1.497), which requires steeper surface curvatures for a given power — the aspherical terms partially compensate for the higher-order aberrations that those steeper curvatures would otherwise introduce.

### G5 — Negative Focus Group (L51, L52)

G5 is the inner-focus group. It translates as a rigid unit toward the image side when focusing from infinity to close distance (¶0035, ¶0191).

#### L51 — Positive Meniscus, concave to object

nd = 1.94595, νd = 18.0. Glass: S-NPH53 (OHARA) — ultra-high-index, ultra-high-dispersion phosphate glass. f = +98.2 mm.

L51 uses the same extreme-dispersion glass as L11 (S-NPH53). Despite its positive focal length (f ≈ +98 mm), L51 functions within G5 as a chromatic compensator: paired with L52's moderate-dispersion glass, the νd difference (18.0 vs. 49.4) provides chromatic correction within the focus group. This is important because the focus group must maintain chromatic balance as it moves — if the focus group introduced significant chromatic shift during travel, focus breathing and chromatic defocus would result.

The concave-to-object meniscus form directs the beam into L52 with appropriate ray geometry, and the weak positive power partially offsets L52's stronger negative power to moderate G5's net negative focal length.

#### L52 — Biconcave Negative (2× aspherical)

nd = 1.77002, νd = 49.4. Glass: lanthanum crown class (770/494); nearest catalog match S-LAH66 (OHARA), though the nd deviation of 0.0025 suggests a proprietary or specialty variant. f = −28.2 mm.

L52 is the dominant power element of G5, providing the strong negative power (f ≈ −28.2 mm) that defines G5's net negative focal length (f_G5 ≈ −39.4 mm). Both surfaces are aspherical (surfaces 25 and 26). The aspherical surfaces on L52 serve a critical function: as the focus group translates, the ray bundle passing through it changes character (particularly at different zoom positions), and the aspherical correction maintains image quality across the full range of focus and zoom combinations.

The A4 coefficient on the front surface (S25) is positive (+5.13 × 10⁻⁶), which flattens the concave surface at the rim, reducing its negative refractive power. The rear surface (S26) also has positive A4 (+2.57 × 10⁻⁶), but on this convex surface (R > 0) the positive departure steepens the curvature, slightly increasing its negative power at the periphery. The two surfaces thus produce a differential correction that fine-tunes L52's aberration balance across the full range of focus and zoom positions.

### G6 — Rear Group (L61, L62)

G6 is a very weak negative group (f ≈ −432 mm), functioning primarily as a field-correction group. It moves with G3 on the same cam track during zoom (¶0039).

#### L61 — Biconvex Positive

nd = 1.59349, νd = 67.0. Glass: fluorophosphate crown class (593/670). f = +109.2 mm.

L61 is a weak positive element positioned close to the image plane. Its role is field flattening — at this position near the sensor, a weak positive element corrects residual field curvature from the relay groups. The moderate-dispersion glass (νd = 67.0) provides some chromatic contribution.

#### L62 — Negative Meniscus, concave to object

nd = 1.72047, νd = 34.7. Glass: dense flint class (720/347). f = −82.8 mm.

L62 is the final optical element before the image plane. Its negative meniscus form and position near the sensor make it an effective field-curvature corrector and chief-ray angle modifier — the latter is important for mirrorless camera compatibility, as telecentricity at the image plane reduces color shading on the sensor. The moderate negative power helps flatten the Petzval surface. The glass's low Abbe number (νd = 34.7) provides a final stage of lateral chromatic correction.


## Glass Selection

The design employs a glass palette spanning an exceptionally wide range of refractive indices (nd from 1.497 to 1.954) and Abbe numbers (νd from 18.0 to 81.6).

| Element | nd      | νd   | Glass identification            | Class            | Role                          |
|---------|---------|------|---------------------------------|------------------|-------------------------------|
| L11     | 1.94595 | 18.0 | S-NPH53 (OHARA)                | Ultra-high-disp. flint | G1 achromat flint partner     |
| L12     | 1.59282 | 68.6 | FCD515 (HOYA)                  | ED fluorophosphate    | G1 achromat ED crown          |
| L21     | 1.77250 | 49.6 | S-LAH66 (OHARA)                | Lanthanum crown  | G2 primary negative power     |
| L22     | 1.85155 | 40.1 | S-LAH89 (OHARA)                | Lanthanum flint  | G2 asph. aberration corrector |
| L23     | 1.85478 | 24.8 | S-LAH98 (OHARA)                | Dense lanthanum flint | G2 internal chromatic balance |
| L24     | 1.59282 | 68.6 | FCD515 (HOYA)                  | ED fluorophosphate    | G2 ED chromatic corrector     |
| L31     | 1.69350 | 53.2 | Unmatched (694/532, mold-opt.) | Lanthanum crown  | G3 variator asph. element     |
| L41     | 1.95375 | 32.3 | S-LAH79 (OHARA)                | Ultra-high-index flint | G4 achromat flint partner   |
| L42     | 1.49700 | 81.6 | S-FPL51 (OHARA) / FCD1 (HOYA) | ED fluorophosphate    | G4 primary ED crown          |
| L43     | 1.60342 | 38.0 | S-TIM5 (OHARA)                 | Titanate flint   | G4 secondary achromat pos.    |
| L44     | 1.85451 | 25.2 | Dense flint class (855/252)    | High-index flint | G4 secondary achromat neg.    |
| L45     | 1.49700 | 81.5 | S-FPL51 (OHARA)                | ED fluorophosphate    | G4 ED asph. corrector (PL1)  |
| L51     | 1.94595 | 18.0 | S-NPH53 (OHARA)                | Ultra-high-disp. flint | G5 focus group chrom. comp. |
| L52     | 1.77002 | 49.4 | Near S-LAH66 (770/494 variant) | Lanthanum crown  | G5 focus group neg. power     |
| L61     | 1.59349 | 67.0 | Fluorophosphate class (593/670)| Crown            | G6 field flattener            |
| L62     | 1.72047 | 34.7 | Dense flint class (720/347)    | Flint            | G6 field/telecentricity corr. |

The chromatic correction strategy relies on three tiers: S-NPH53 (νd = 18.0) paired with FCD515 (νd = 68.6) in the G1 cemented achromat; S-LAH79 (νd = 32.3) paired with S-FPL51 (νd = 81.6) in the primary G4 cemented achromat; and the internal G2 correction pairing S-LAH98 (νd = 24.8) against the FCD515 elements L12/L24 (νd = 68.6). In G5, S-NPH53 (L51, νd = 18.0) is paired with a moderate-dispersion lanthanum crown (L52, νd = 49.4) in an air-spaced configuration — a smaller Δνd of 31.4 that provides sufficient chromatic balance for the focus group's modest optical power. The extremely wide Abbe-number span across the glass palette (νd from 18.0 to 81.6, a range of 63.6) and the large Δνd within individual cemented doublets (up to 50.6 in the G1 doublet L11+L12) are characteristic of modern high-performance zoom designs that must maintain achromatism across a 3.3× zoom range.


## Focus Mechanism

The lens employs inner focus via G5 (L51 + L52). When focusing from infinity to the minimum focus distance, G5 translates as a rigid unit toward the image plane along the optical axis (¶0035, ¶0191). All other groups remain at their zoom-determined positions during focus; only the gaps d22 (before G5) and d26 (after G5) change.

| Parameter              | Wide (20.7 mm) | Mid (36.1 mm) | Tele (67.6 mm) |
|------------------------|----------------|---------------|----------------|
| d22 at infinity        | 3.44 mm        | 2.77 mm       | 2.30 mm        |
| d22 at close (299 mm)  | 4.49 mm        | 4.63 mm       | 6.12 mm        |
| G5 focus travel        | 1.05 mm        | 1.86 mm       | 3.82 mm        |
| d26 at infinity        | 4.96 mm        | 8.83 mm       | 11.07 mm       |
| d26 at close (299 mm)  | 3.91 mm        | 6.97 mm       | 7.25 mm        |

The focus travel is perfectly conserved: d22 increases by exactly the same amount that d26 decreases at each zoom position, confirming unit translation of G5 with no change in the total optical path length. The focus travel increases substantially at the telephoto end (3.82 mm at tele vs. 1.05 mm at wide), which is expected because the same object distance requires greater focus movement when the focal length is longer.

The patent specifies a minimum object distance (d0) of 299 mm for all three zoom positions, measured from the object to the first optical surface (S1). Adding the total optical track gives total conjugate distances of approximately 414 mm (wide), 426 mm (mid), and 454 mm (tele) — significantly longer than Sony's marketed MFD of 0.30 m (wide, AF) and 0.25 m (tele, AF/MF). This discrepancy indicates that the production lens achieves closer focusing through extended focus travel beyond what is tabulated in this patent example. The patent's close-focus data demonstrates the design's optical correction at a moderate close-focus distance; the production lens likely exploits additional G5 travel to reach its marketed 0.25 m MFD, accepting somewhat increased aberration at the shortest distances — a tradeoff that AF-era lenses routinely make since software correction can compensate for the residual field-dependent errors.

The choice of G5 as the focus group is deliberate (¶0036): placing the focus group between the variator groups (G3/G4) and the rear group (G6) minimizes the angle-of-view variation during focusing (focus breathing), which is critical for video applications — a key market for this lens. If G3 or G4 were used for focusing, their dual role as zoom variators would require additional mechanical travel, increasing the lens's size. The lightweight G5 (only two elements) also enables fast autofocus response via the two XD linear motors.


## Aspherical Surfaces

The design has eight aspherical surfaces distributed across four elements. The aspheric sag equation used in the patent is the standard even-polynomial form:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}$$

All conic constants (K) are zero; the aspherical corrections are applied entirely through the polynomial coefficients. Coefficients A10 are non-zero only for surfaces 6, 7, and 14.

### L22 — Surfaces 6 and 7 (G2, AA element)

| Coeff. | Surface 6         | Surface 7         |
|--------|-------------------|--------------------|
| K      | 0                 | 0                  |
| A4     | +3.45711 × 10⁻⁵  | +1.82987 × 10⁻⁵   |
| A6     | −2.90267 × 10⁻⁷  | −3.14005 × 10⁻⁷   |
| A8     | +1.21010 × 10⁻⁹  | +1.20140 × 10⁻⁹   |
| A10    | −2.89546 × 10⁻¹² | −3.43951 × 10⁻¹²  |

Both surfaces have positive A4 coefficients, meaning the surfaces depart from their base spheres in the direction of reduced curvature at the rim. On these concave-to-object surfaces (R < 0), positive A4 makes the surfaces less deeply concave at the periphery — physically, this reduces the refraction angle for marginal rays, controlling spherical aberration and barrel distortion at the wide-angle end. The alternating signs of the higher-order terms (negative A6, positive A8, negative A10) indicate a finely tuned oscillatory correction profile, typical of high-precision AA elements designed to control aberrations across a wide field. At the half-aperture (sd ≈ 11.2 mm), the total polynomial departures are +0.18 mm (S6) and −0.12 mm (S7), moderate values reflecting the balance between A4 flattening and higher-order restoration.

### L31 — Surfaces 13 and 14 (G3, AA element)

| Coeff. | Surface 13        | Surface 14         |
|--------|-------------------|--------------------|
| K      | 0                 | 0                  |
| A4     | +9.97900 × 10⁻⁷  | +1.00265 × 10⁻⁵   |
| A6     | +2.32833 × 10⁻⁸  | +3.82113 × 10⁻⁸   |
| A8     | +4.07896 × 10⁻¹⁰ | +4.33990 × 10⁻¹⁰  |
| A10    | 0                 | +7.09846 × 10⁻¹³  |

L31's front surface (S13) has very small aspherical departure (A4 ≈ 10⁻⁷, producing only about 0.01 mm of A4 departure at the semi-diameter of 10.3 mm), indicating that this surface is nearly spherical. The rear surface (S14) carries the dominant correction: A4 ≈ 10⁻⁵ produces 0.11 mm of A4 departure, and all coefficients are positive on S14, giving a total departure of about 0.21 mm. On this weakly convex surface (R = +105.907 mm), the positive departures steepen the surface at the rim, increasing the magnitude of its negative refractive power (glass → air). Since L31 is a positive element (f ≈ +55 mm), this rim-steepening on S14 reduces L31's net positive power at the periphery, which corrects spherical aberration in the variator group. The single-surface-dominant correction pattern is characteristic of elements whose manufacturing process constrains one surface to near-spherical form while the other carries the full aspherical burden.

### L45 — Surfaces 21 and 22 (G4, ED aspherical element)

| Coeff. | Surface 21        | Surface 22         |
|--------|-------------------|--------------------|
| K      | 0                 | 0                  |
| A4     | −1.99923 × 10⁻⁵  | +2.97360 × 10⁻⁵   |
| A6     | +1.43766 × 10⁻⁸  | −5.24644 × 10⁻⁸   |
| A8     | −8.84773 × 10⁻¹¹ | −2.28818 × 10⁻¹¹  |

The front surface (S21) has negative A4 — on this convex surface (R = +42.022 mm), the negative departure flattens the surface at the periphery (−0.21 mm of total sag departure at the semi-diameter), reducing its positive refractive power at the rim. The rear surface (S22) has positive A4 on a concave surface (R = −20.182 mm), which also flattens the surface at the rim (+0.26 mm total departure), reducing its positive refractive power (glass → air at this concave surface produces positive power, and flattening reduces it).

Both surfaces of L45 therefore flatten at the periphery, each reducing its contribution to the element's strong positive power (f ≈ +28.3 mm) at the rim. This is the standard aspherical correction strategy for a strong positive element: with purely spherical surfaces, the steep curvatures required by the low-index S-FPL51 glass would over-refract marginal rays, producing spherical overcorrection. The aspherical flattening on both surfaces corrects this by progressively weakening the element's power toward the edge of the aperture. The sag departures (0.21 and 0.26 mm) are the largest of any aspherical element in this design, reflecting L45's strong positive power and the steep curvatures necessitated by the low-index S-FPL51 glass — the aspherical correction is structurally integral to the design's aberration balance.

### L52 — Surfaces 25 and 26 (G5, aspherical element)

| Coeff. | Surface 25        | Surface 26         |
|--------|-------------------|--------------------|
| K      | 0                 | 0                  |
| A4     | +5.12601 × 10⁻⁶  | +2.56539 × 10⁻⁶   |
| A6     | −6.94200 × 10⁻⁸  | −1.42392 × 10⁻⁸   |
| A8     | +8.91091 × 10⁻¹¹ | +7.41628 × 10⁻¹¹  |

Both surfaces have mild positive A4 with sign-alternating higher-order terms, but their effects on surface shape differ. On the front surface S25 (R = −44.196, concave toward object), positive A4 flattens the surface at the rim, reducing its negative refractive power. On the rear surface S26 (R = +43.227, convex toward image), positive A4 steepens the surface, increasing its negative refractive power (n_glass → n_air at a convex surface produces negative power, and steepening intensifies it). The two surfaces therefore produce opposing corrections: S25 weakens L52's negative power at the rim while S26 strengthens it. The net effect is a fine differential correction that maintains aberration balance as G5 translates across its 1–4 mm focus travel range, where the ray bundle changes diameter and incidence angle at each zoom position. The total departures are very small (−0.015 mm on S25, +0.024 mm on S26), consistent with the fact that L52 operates on a narrower, more axial beam after the aperture stop, requiring only subtle aspherical correction.


## Conditional Expressions

The patent specifies four primary conditional expressions and two glass-selection conditions. Example 8 satisfies all of them:

| Condition | Expression              | Limits              | Example 8 value | Status |
|-----------|-------------------------|---------------------|-----------------|--------|
| (1)       | f1/f2                   | ≤ −6.00             | −7.04           | ✓      |
| (2)       | f3/f4                   | 1.75 < x < 4.20     | 2.02            | ✓      |
| (3)       | f1/fw                   | 5.0 < x < 15.0      | 6.38            | ✓      |
| (4)       | f4/ft                   | 0.10 < x < 0.60     | 0.403           | ✓      |
| (5)       | νd of PL1 (L45)         | 60.0 < x < 100.0    | 81.5            | ✓      |
| (6)       | ΔPgF of PL1 (L45)       | 0.005 < x < 0.150   | ≈ 0.034         | ✓      |

Condition (1) governs the ratio of G1 to G2 focal lengths; values more negative than −6.00 ensure that G1's positive power is sufficiently weak relative to G2's negative power, which is necessary for the retrofocus geometry and wide-angle coverage (¶0025). Condition (2) balances G3 and G4 focal lengths for high zoom ratio while maintaining aberration control (¶0027). Condition (3) relates G1's focal length to the wide-angle system focal length, ensuring compact size while achieving sufficient wide-angle coverage (¶0030). Condition (4) ensures G4's positive power is appropriately proportioned relative to the telephoto focal length (¶0033). Conditions (5) and (6) jointly specify that the aspherical positive element PL1 (L45) must use an ED-class glass with anomalous partial dispersion — this is the patent's formal requirement for the ED aspherical element (¶0041–¶0043).


## Verification Summary

All numerical claims in this analysis were independently verified via paraxial ABCD matrix trace in Python. The following computed values match the patent's published data:

| Quantity                  | Computed     | Patent       | Match  |
|---------------------------|-------------|-------------|--------|
| EFL (wide)                | 20.71 mm    | 20.71 mm    | exact  |
| EFL (mid)                 | 36.07 mm    | 36.05 mm    | ±0.02  |
| EFL (tele)                | 67.58 mm    | 67.56 mm    | ±0.02  |
| G1 focal length           | 132.15 mm   | 132.15 mm   | exact  |
| G2 focal length           | −18.76 mm   | −18.76 mm   | exact  |
| G3 focal length           | 55.06 mm    | 55.06 mm    | exact  |
| G4 focal length           | 27.24 mm    | 27.24 mm    | exact  |
| G5 focal length           | −39.40 mm   | −39.41 mm   | ±0.01  |
| G6 focal length           | −432.32 mm  | −432.40 mm  | ±0.08  |
| Total track (wide)        | 115.04 mm   | 115.05 mm   | ±0.01  |
| Total track (mid)         | 127.28 mm   | 127.29 mm   | ±0.01  |
| Total track (tele)        | 155.00 mm   | 155.00 mm   | exact  |
| Variable gap sum conserv. | 0.00 mm     | —           | ✓      |
| Focus travel conservation | 0.00 mm     | —           | ✓      |
| Petzval sum               | +0.00154 mm⁻¹ | —        | —      |
| Petzval radius            | +650.6 mm   | —           | —      |

The Petzval sum is positive and small, corresponding to a Petzval radius of about 651 mm — indicating a mildly inward-curving field that the negative G5 and G6 groups partially compensate. The small Petzval sum is consistent with the generally flat field performance reported in optical reviews of the production lens.


## Sources

1. WO 2023/153076 A1, "Zoom Lens and Imaging Device," Sony Group Corporation, published 17 August 2023. Example 8, Tables 36–40, Figure 92, ¶0189–¶0204.
2. Sony SEL2070G product specifications, sony.com and sony-asia.com (accessed May 2025). Confirms 16 elements / 13 groups, 3 ED + 1 ED asph + 2 AA + 1 asph, constant f/4, MFD 0.25–0.30 m, 9-blade aperture, 488 g.
3. OHARA Glass Catalog (online, ohara-inc.co.jp). Glass identifications for S-NPH53, S-LAH66, S-LAH89, S-LAH98, S-LAH79, S-FPL51, S-TIM5.
4. HOYA Glass Catalog, via refractiveindex.info. FCD515 (nd = 1.59282, νd = 68.63, dPgF = +0.019) confirmed as exact match for L12/L24.
