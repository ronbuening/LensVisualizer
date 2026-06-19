# Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S

## Patent Reference and Design Identification

**Patent:** US 4,699,475
**Filed:** October 21, 1982
**Granted:** October 13, 1987
**Priority:** JP 56-176831, November 4, 1981
**Inventors:** Tomowaki Takahashi; Yasuhiro Aono
**Assignee:** Nippon Kogaku K.K.
**Title:** Zoom Lens Including a Wide Angle of View
**Embodiment analyzed:** Seventh Embodiment, Table 7

US 4,699,475 describes a compact normal zoom for the 35mm still-camera format. Its basic form is a positive first group, negative second group, and positive third group. In the fourth through seventh embodiments, the rear positive group is divided into independently moving G31 and G32 units, so the practical construction is a four-moving-unit positive-negative-positive-positive zoom.

The prescription represented here is the Table 7 35–105mm f/3.5–4.5 design, which is the source-supported match for the Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S.

The identification rests on the following convergent evidence.

1. Table 7 gives a 16-element, 12-group all-spherical prescription.
2. The patent states F = 35–105, zoom ratio 3, f-number 3.5–4.5, and image height y = 21.6mm for the seventh embodiment.
3. Nikon's historical account identifies the production AI Zoom-Nikkor 35–105mm f/3.5–4.5S as a 1983 Tomowaki Takahashi design and describes the 52mm filter-size requirement.
4. The patent emphasizes the same compact-front-aperture objective and states that each embodiment permits a 52mm filter diameter.
5. Figure 14 illustrates the seventh embodiment and shows the cemented L15/L16 rear pair that distinguishes Table 7 from Table 6.
6. Nikon describes the production lens as a four-group positive-negative-positive-positive zoom with all groups moving, matching the Table 7 kinematic layout.

## Optical Architecture

The design is an all-spherical, four-moving-unit normal zoom. Its group powers, computed from the transcribed prescription, are:

G1: positive, f = +66.29mm; G2: negative, f = −15.26mm; G31: positive, f = +37.85mm; G32: positive, f = +73.16mm.

The architecture derives from the established three-group positive-negative-positive zoom, but the rear positive master group is split into two positive subgroups. The G31-G32 spacing changes from 10.84mm at the wide end to 3.08mm at the telephoto end. This strengthens the combined rear group as the lens zooms longer: the computed G31+G32 focal length changes from +29.67mm at the wide end to +28.49mm at the middle position and +27.39mm at the telephoto end.

G1 is the positive front focusing group. G2 is the dominant negative variator. G31 and G32 jointly act as the rear master group and also participate in zoom compensation. The aperture stop is fixed 0.8mm ahead of L9. In the data file, the patent's total d14 spacing is therefore split into surface 14 to `STO` = d14 − 0.8mm, followed by `STO` to surface 15 = 0.8mm. This preserves the patent prescription's surface-to-surface spacing instead of adding an extra 0.8mm to the optical path.

The Type C zoom path described by the patent moves all groups toward the object side from the wide end to the telephoto end. G1, G31, and G32 move rectilinearly in the schematic cam representation; G2 follows a monotonic non-linear path with an inflection. This motion was intended to reduce the height at which the maximum-field chief ray passes through the front group, allowing the 52mm filter size.

## Element-by-Element Analysis

### G1 — Front Positive Collector, L1-L3

#### L1 — Negative Meniscus, convex to object

nd = 1.805, νd = 25.3. Glass: S-TIH6 (OHARA), dense flint. f = −118.3mm.

L1 is the front negative meniscus of the focusing group. Its high index allows useful negative bending without excessive physical thickness, and its dense-flint dispersion contributes the first chromatic counterweight to the two following crown positives. Its meniscus form also helps pull the high-field chief ray inward before it reaches the rest of the zoom system.

#### L2 — Biconvex Positive

nd = 1.603, νd = 60.6. Glass: S-BSM14 (OHARA), barium crown. f = +73.3mm.

L2 supplies most of the positive power in G1. The biconvex form distributes the refractive load between the two surfaces and works with L1 to keep the front group achromatized without cementing the front elements.

#### L3 — Positive Meniscus, convex to object

nd = 1.603, νd = 60.6. Glass: S-BSM14 (OHARA), barium crown. f = +103.5mm.

L3 is a weaker positive meniscus that completes the front collector. Reusing the same crown glass as L2 simplifies the glass palette. The concave rear side of L3 helps transition the ray bundle into the negative variator group while keeping the front-group Petzval contribution from becoming excessive.

### G2 — Negative Variator, L4-L8

#### L4 — Negative Meniscus, convex to object

nd = 1.796, νd = 45.5. Glass: J-LASF017 class, patent-rounded 796/455 lanthanum flint. f = −29.7mm.

L4 begins the negative variator. It is a strongly powered negative meniscus, and its high-index lanthanum-flint class glass keeps curvature and edge thickness within practical limits for the compact barrel target.

#### L5 + L6 — Cemented Doublet, near-afocal

L5: nd = 1.805, νd = 25.3. Glass: S-TIH6 (OHARA), dense flint. f = +28.1mm standalone.
L6: nd = 1.796, νd = 45.5. Glass: J-LASF017 class, patent-rounded 796/455 lanthanum flint. f = −28.9mm standalone.

The cemented L5/L6 pair has a computed focal length of approximately +1262mm and is therefore nearly afocal. Its function is mainly chromatic and pupil-zone correction inside G2 rather than first-order power. The short-radius cemented interface at R10 = −20.49mm is the important refracting surface in this pair.

#### L7 + L8 — Cemented Doublet, net negative

L7: nd = 1.713, νd = 53.9. Glass: S-LAL8 (OHARA), lanthanum crown. f = −13.3mm standalone.
L8: nd = 1.796, νd = 40.9. Glass: unmatched 796/409 lanthanum flint. f = +21.2mm standalone.

The L7/L8 doublet carries the dominant negative power in G2, with a computed focal length of −36.96mm. L7 is biconcave and L8 is biconvex. The rear surface of L8 is very weak (R14 = −696.58mm), so most of the doublet's power is concentrated at the first three surfaces of the cemented pair.

### G31 — Forward Positive Relay, L9-L11

#### L9 — Biconvex Positive

nd = 1.713, νd = 53.9. Glass: S-LAL8 (OHARA), lanthanum crown. f = +29.2mm.

L9 is the first powered element after the stop. It collects the diverging beam from G2 and begins the rear master group's converging action. Its shape factor q = −0.662 satisfies the patent's G31 condition for the first positive element.

#### L10 — Negative Meniscus, convex to image

nd = 1.805, νd = 25.3. Glass: S-TIH6 (OHARA), dense flint. f = −61.5mm.

L10 offsets L9 chromatically and contributes negative Petzval curvature within G31. It is a negative meniscus with both centers of curvature on the object side, leaving the convex face toward the image side.

#### L11 — Positive Meniscus, convex to object

nd = 1.568, νd = 56.0. Glass: N-BAK4 / S-BAL14 class, patent-rounded barium crown. f = +117.9mm.

L11 is a weak positive meniscus. It mainly trims astigmatism and coma after the L9/L10 pair. Its computed shape factor q = 2.895 is just below the patent's stated desirable lower bound of 3.0, so this analysis treats it as a marginal boundary case rather than as a fully satisfied inequality.

### G32 — Rear Positive Relay, L12-L16

#### L12 + L13 — Cemented Doublet, weak negative

L12: nd = 1.563, νd = 60.8. Glass: BACD11 / N-SK11 / S-BAL41 class, barium crown. f = +95.9mm standalone.
L13: nd = 1.796, νd = 45.5. Glass: J-LASF017 class, patent-rounded 796/455 lanthanum flint. f = −66.4mm standalone.

This cemented meniscus pair has a computed focal length of −301.9mm. Its weak negative first-order power and strong internal cemented curvature make it primarily a chromatic and oblique-aberration corrector. The radii used in the patent's G32 conditions are L12's object-side radius, r_a = 21.96mm, and L13's image-side radius, r_b = 20.50mm.

#### L14 — Biconvex Positive

nd = 1.518, νd = 60.3. Glass: unmatched 518/603 light crown. f = +47.0mm.

L14 is the main positive singlet in G32. It adds strong positive relay power at a rear-group location where chief-ray height remains significant. The exact catalog identity has not been resolved from current public catalogs, so the data file labels it as unmatched rather than forcing a speculative vendor name.

#### L15 + L16 — Cemented Doublet, weak negative

L15: nd = 1.563, νd = 60.8. Glass: BACD11 / N-SK11 / S-BAL41 class, barium crown. f = +34.2mm standalone.
L16: nd = 1.796, νd = 40.9. Glass: unmatched 796/409 lanthanum flint. f = −32.7mm standalone.

The L15/L16 doublet is weakly negative as a cemented pair, with a computed focal length of −414.7mm. It is the rear chromatic corrector. The seventh embodiment cements L15 and L16; this is one of the features that separates Table 7 from the sixth embodiment.

## Glass Identification

The glass table avoids circular catalog assignment. Exact current OHARA matches are used only where the patent-rounded nd/νd values agree with catalog codes. Where the patent value does not resolve cleanly to a current public catalog entry, the data file uses a class or `Unmatched` label.

| Patent nd / νd | Corrected identification | Elements | Notes |
|---:|---|---|---|
| 1.805 / 25.3 | S-TIH6 (OHARA), 805/254 dense flint | L1, L5, L10 | Exact code-class match to the patent values. |
| 1.603 / 60.6 | S-BSM14 (OHARA), 603/607 barium crown | L2, L3 | Exact code-class match. |
| 1.796 / 45.5 | J-LASF017 class, 795/453-455 | L4, L6, L13 | Close class match; patent values are rounded. |
| 1.713 / 53.9 | S-LAL8 (OHARA), 713/539 lanthanum crown | L7, L9 | Exact code-class match. |
| 1.796 / 40.9 | Unmatched 796/409 lanthanum flint | L8, L16 | Not forced to S-LAH52; S-LAH52 is closer to 800/422 and is materially different in Abbe number. |
| 1.568 / 56.0 | N-BAK4 / S-BAL14 class, 569/560-563 | L11 | Rounded barium-crown class, not an exact stored-index match. |
| 1.563 / 60.8 | BACD11 / N-SK11 / S-BAL41 class, 564/608-607 | L12, L15 | Cross-reference match. |
| 1.518 / 60.3 | Unmatched 518/603 light crown | L14 | No confident current catalog match was assigned. |

The design uses conventional crown/flint achromatization. It does not contain ED, fluorite, or anomalous-partial-dispersion glass in the modern sense.

## Focus and Zoom Kinematics

The production lens focuses by translating the first group. The patent supplies only infinity-focus zoom spacings for Table 7, so the data file does not invent close-focus air-gap changes. The close-focus metadata is set to the normal non-macro close-focus distance of 1.4m; the production macro range is not modeled because the patent does not publish the required close-focus prescription.

The infinity zoom spacings transcribed into the data file are:

| Spacing | Wide | Mid | Tele | Interpretation |
|---|---:|---:|---:|---|
| d6 | 0.98mm | 10.62mm | 19.77mm | G1-G2 air spacing |
| d14, total patent value | 12.52mm | 6.77mm | 1.49mm | r14-to-r15 total air spacing |
| surface 14 to `STO` | 11.72mm | 5.97mm | 0.69mm | d14 minus fixed stop-to-L9 spacing |
| `STO` to r15 | 0.80mm | 0.80mm | 0.80mm | Stop remains 0.8mm ahead of L9 |
| d20 | 10.84mm | 6.96mm | 3.08mm | G31-G32 air spacing |
| Bf | 52.36mm | 65.30mm | 78.24mm | Patent back focal distance |

The resulting patent-preserved total track, front vertex to image plane, is 127.80mm at the wide end, 140.75mm at the middle position, and 153.68mm at the telephoto end.

## Conditional Expressions

The seventh embodiment satisfies the patent's main zoom-share condition:

| Condition | Computed value | Status |
|---|---:|---|
| 0.5 < v2 / v < 0.9 | 1.817 / (103 / 36.2) = 0.639 | Satisfied |

The G31 shape-factor values, using q = (R2 + R1) / (R2 − R1), are:

| Element | Computed q | Patent condition | Status |
|---|---:|---|---|
| L9 | −0.662 | 0.3 < |q| < 1.0 | Satisfied |
| L10 | +3.480 | 2.0 < q < 5.0 | Satisfied |
| L11 | +2.895 | 3.0 < q < 8.0 | Marginally below |

The G32 radius-ratio conditions are satisfied when f32 = +73.16mm:

| Ratio | Computed value | Condition | Status |
|---|---:|---|---|
| r_a / f32 | 21.96 / 73.16 = 0.300 | 0.2 < r_a/f32 < 0.4 | Satisfied |
| r_b / f32 | 20.50 / 73.16 = 0.280 | 0.2 < r_b/f32 < 0.4 | Satisfied |

## Verification Summary

An independent paraxial y-u ray trace was run from the transcribed Table 7 prescription, preserving d14 as the total r14-to-r15 spacing and splitting it only to insert the stop 0.8mm ahead of L9. The computed effective focal lengths are somewhat longer than the patent's rounded nominal focal-length labels, but the table spacings and radii are retained exactly.

| Position | Computed EFL | Patent nominal F | Difference | Computed paraxial BFL | Patent Bf |
|---|---:|---:|---:|---:|---:|
| Wide | 37.39mm | 36.2mm | +3.3% | 53.30mm | 52.36mm |
| Mid | 62.15mm | 60.0mm | +3.6% | 66.63mm | 65.30mm |
| Tele | 106.58mm | 103.0mm | +3.5% | 79.92mm | 78.24mm |

The surface-by-surface Petzval sum, computed as Σφ/(n·n′), is +0.002358mm⁻¹, corresponding to a Petzval radius of approximately +424.1mm. Element-level thin-lens Petzval approximations were not used.

The data file's semi-diameters are estimated, because the patent does not publish clear-aperture radii. They were constrained by paraxial stop-edge rays, the 52mm filter objective, edge thickness, element front/rear semi-diameter ratio, and cross-gap sag clearance. The chosen values are rendering-safe estimates rather than patent-listed mechanical apertures.

## Aberration Performance

The patent publishes seventh-embodiment aberration plots as Figures 22A-22C. These plots show spherical aberration, astigmatism, and distortion for the wide, intermediate, and telephoto positions at image height y = 21.6mm. They should be interpreted as patent-design plots, not production measurement data.

The patent's seventh-embodiment distortion plot is drawn on a ±2% scale, but the production lens should not be described as necessarily held within ±2% distortion. Nikon's own retrospective text reports −4.6% distortion at infinity at the 35mm position, dropping to −1.4% at short distance. The correct reading is therefore that the patent plot shows the design target behavior, while production distortion must be sourced from production-oriented references.

## Design Heritage and Context

This lens belongs to Nikon's early-1980s compact normal-zoom redesign program. Nikon's retrospective account states that design work began around 1981, trial production occurred in spring 1982, mass production began in summer 1982, and the lens was released in April 1983. The patent priority date of November 4, 1981 fits that development sequence.

The primary design problem was not simply achieving a 3× zoom ratio. The harder constraint was doing so with a 52mm filter thread in a practical Nikon F-mount barrel. The patent's Type C motion reduces the front-group chief-ray height at the wide-to-middle part of the zoom range, where the front aperture requirement would otherwise be largest. Splitting the rear positive group into G31 and G32 then provides additional zoom and compensation leverage without making the front group larger.

## Sources

1. US 4,699,475, Takahashi and Aono, “Zoom Lens Including a Wide Angle of View,” Nippon Kogaku K.K., granted October 13, 1987. Primary prescription source: Table 7 / Seventh Embodiment.
2. Nikon Imaging, “NIKKOR - The Thousand and One Nights No.71: AI Zoom-Nikkor 35-105mm f/3.5-4.5S,” official Nikon historical article. https://imaging.nikon.com/imaging/information/story/0071/
3. Nikon, “Zoom-Nikkor 35-105mm f/3.5~4.5” instruction manual, official Nikon manual archive. https://cdn-10.nikon-cdn.com/pdf/manuals/archive/Zoom-Nikkor%2035-105mm%20f-3.5-4.5.pdf
4. HIKARI Glass Co., Ltd., J-LASF017 data sheet and LASF catalog listing.
5. HOYA GROUP Optics Division, “Glass Cross Reference Index,” used for six-digit nd/νd glass-code cross-checks.
6. OHARA optical glass catalog/datasheets for S-TIH6, S-BSM14, and S-LAL8 class verification.
