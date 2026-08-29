## Patent Reference and Design Identification

**Lens:** KONICA ZOOM-HEXANON AR 70–150mm f/4
**Patent:** JPS58137812A (特開昭58-137812)
**Application Number:** JP57018900A (特願昭57-18900)
**Filed:** 1982-02-10
**Published:** 1983-08-16
**Inventors:** Makoto Sakano; Norikazu Arai; Shozo Ishiyama; Tadashi Kojima; Hiroshi Miyamae
**Applicant:** Konishiroku Photo Industry Co., Ltd.
**Title:** *Inner focusing system of zoom lens* (ズームレンズのインナーフォーカシング方式)
**Embodiment analyzed:** Example 1

The prescription represented here is Example 1 of JPS58137812A. The production correlation is the fixed identification for this model; it is not presented as a manufacturer-confirmed patent match. Several independent characteristics converge on the Konica Zoom-Hexanon AR 70–150mm f/4:

1. Konica's manufacturer-authored FP-1 manual lists a 70–150mm zoom with a constant f/4 maximum aperture and a 15-element/12-group construction. The same manual places the lens in the Konica 35mm SLR system and gives a 0.8 m minimum focusing distance.
2. Patent Example 1 contains 15 physical elements in 12 air-separated groups and publishes zoom states of 72.164, 97.746, and 146.388 mm, closely bracketing the marketed 70–150mm range.
3. The patent describes a four-functional-group positive–negative–positive–positive zoom in which the second group varies focal length, the third compensates image-plane motion, and a lens within the fourth group performs focusing. The Example 1 prescription identifies that focus lens as the plano-concave negative L12 at surfaces 20–21.
4. The source's inner-focus mechanism is consistent with the production lens's short 0.8 m minimum focusing distance. The patent itself tabulates Example 1 focusing only to an object–image distance of 1.2 m; the 0.8 m state in the data file is therefore a constrained reconstruction rather than a published patent row.

The data file retains the patent at its native scale. No uniform scaling, radius correction, thickness correction, or index conversion has been applied. The marketed focal range remains 70–150mm, while the independently recomputed Gaussian design endpoints stored in the data file are 72.062790 and 146.196286 mm. The production aperture is separately recorded as f/4; the modeled optical stop is discussed below because the patent does not publish one.

## Optical Architecture

Example 1 is a four-functional-group +−++ zoom. The physical prescription contains 15 elements and 12 air-separated groups, with three cemented pairs. Patent Figure 1 shows the same broad organization: a relatively large front group, a compact moving negative variator, a positive compensator, and a longer rear master group containing the internal focus lens.

The first functional group, G1 (L1–L3), is positive in net power and remains fixed in the modeled zoom sequence. Its front cemented pair D1 combines a negative-meniscus L1 with a positive-meniscus L2; the pair is net positive even though L1 is negative when considered alone. L3 is an additional positive singlet. This distinction matters: individual-element focal length, cemented-pair net power, and the intrinsic paraxial power of a complete functional group are not interchangeable quantities.

G2 (L4–L7) is the negative variator. It contains a weak positive L4, a negative L5, and the cemented L6–L7 pair D2, which is net negative. The complete G2 group has negative intrinsic paraxial power. Across the three published zoom states its front station moves imageward by approximately 11.22 mm at the middle state and 21.66 mm at the tele state relative to the wide position. This motion provides the principal change in focal length.

G3 is the cemented L8–L9 pair D3. It is positive in net power and serves as the compensator. Its motion is deliberately non-monotonic: it moves about 3.72 mm imageward at the middle state and returns essentially to its wide-state axial station at the tele endpoint. The corresponding D15 air gap changes from 6.310 to 2.592 and back to 6.310 mm. This reversal is the axial compensation that allows the image plane and rear master group to remain effectively stationary while G2 varies magnification.

G4 (L10–L15) is the positive master group. The group is stationary through zoom to the precision of the published table, but it contains the moving focus element L12. The master begins with two positive menisci, inserts the negative plano-concave focus element, and then uses a positive L13, a strong negative L14, and a final positive L15. The complete G4 group nevertheless has positive intrinsic paraxial power; its system behavior results from a mixed-power relay rather than from a uniformly positive sequence.

The source spacing table gives a first-vertex-to-image track of approximately 139.88–139.89 mm across the three states. By the project's strict terminology, the complete zoom is not uniformly a telephoto architecture on a track/EFL basis: only the tele endpoint has `TL/EFL < 1`. No state satisfies the project's retrofocus test `BFD > EFL`.

## Element-by-Element Analysis

### D1 — L1 / L2 front cemented pair

**L1 — Negative Meniscus.** nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). Standalone f = −134.360553 mm.
**L2 — Positive Meniscus.** nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). Standalone f = +78.206553 mm.

L1 and L2 share the cemented interface at surface 2. Their individual standalone powers have opposite signs, but the cemented pair is net positive. The pair forms the front part of G1 and is followed by the positive L3 singlet. The substantial νd contrast between L1 and L2 is consistent with ordinary first-order chromatic balancing within the pair, but the source does not provide the line-index or partial-dispersion data required for any apochromatic claim.

### L3 — Biconvex Positive

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). Standalone f = +151.956401 mm.**

L3 is the rear singlet of G1. Together with D1 it completes a net-positive front functional group. Its standalone power is substantially weaker than that of L2, so the front group's behavior should be understood as the combined action of the cemented pair and this additional positive element rather than as a single dominant lens.

### L4 — Positive Meniscus

**nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). Standalone f = +212.134969 mm.**

L4 begins the moving variator group G2. Although L4 itself is weakly positive, the complete G2 group is negative because of the stronger negative elements that follow. Its role is therefore not correctly described by its standalone sign alone; it operates as the front member of a net-negative moving group.

### L5 — Biconcave Negative

**nd = 1.69680, νd = 55.5. Glass: J-LAK14 coefficient proxy (patent 697555; production supplier unspecified). Standalone f = −58.445020 mm.**

L5 supplies substantial negative power inside G2. It is air-spaced from L4 and from the rear cemented pair D2. The short air gaps and strong curvatures in this part of the variator make the local geometry important to the clear-aperture model; the LensVisualizer semi-diameters here are inferred rather than patent-published.

### D2 — L6 / L7 rear variator cemented pair

**L6 — Biconcave Negative.** nd = 1.69680, νd = 55.5. Glass: J-LAK14 coefficient proxy (patent 697555; production supplier unspecified). Standalone f = −27.092347 mm.
**L7 — Positive Meniscus.** nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). Standalone f = +59.627555 mm.

L6 is the strongest negative contributor in this cemented pair when considered alone. L7 is positive, but the combined D2 pair remains net negative. In the complete variator, the pair works with L4 and L5 to produce the negative G2 power that drives the zoom ratio. As with D1, the contrasting νd values support primary chromatic balancing without establishing anomalous-dispersion or APO behavior.

### D3 — L8 / L9 compensator cemented pair

**L8 — Biconvex Positive.** nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). Standalone f = +45.139881 mm.
**L9 — Negative Meniscus.** nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). Standalone f = −113.379504 mm.

D3 is net positive and constitutes the complete G3 compensator. Its axial motion is much smaller than the variator's and reverses direction between the middle and tele states. The resulting compensation keeps the rear master group and the image plane nearly fixed while the variator changes focal length.

### L10 — Positive Meniscus

**nd = 1.51112, νd = 60.5. Glass: NSL7 coefficient proxy (patent 511605; production supplier unspecified). Standalone f = +59.972652 mm.**

L10 is the first positive element of G4. Its relatively high νd compared with several of the preceding high-index elements marks a change in the rear-group glass palette, but no vendor-specific identity is defensible from the patent coordinates alone.

### L11 — Positive Meniscus

**nd = 1.51112, νd = 60.5. Glass: NSL7 coefficient proxy (patent 511605; production supplier unspecified). Standalone f = +74.360352 mm.**

L11 follows L10 across a very small air gap. The two positive menisci form the front converging portion of the master group. L11 is immediately followed by the air space in which the modeled aperture stop is inserted; that stop location is an inference and is not shown as a numerical surface in the patent table.

### L12 — Plano-Concave Negative Inner-Focus Element

**nd = 1.71736, νd = 29.5. Glass: SF1 coefficient proxy (patent 717295; production supplier unspecified). Standalone f = −39.268986 mm.**

L12 is the third physical lens from the object side within G4 and is the element the patent assigns to focusing in Example 1. Its front surface is plane and its rear surface is concave, giving it substantial negative standalone power. For closer focus it translates toward the image plane while the rest of G4 remains fixed.

The required travel is strongly zoom-dependent. In the data model's reconstructed 0.8 m state, L12 moves 1.223080314 mm at the wide state, 2.244087999 mm at the middle state, and 5.264790649 mm at the tele state, all measured imageward from the published base prescription. These are modeled finite-conjugate solutions, not patent Table 6 values.

### L13 — Biconvex Positive

**nd = 1.56732, νd = 42.8. Glass: S-TIL26 coefficient proxy (patent 567428; production supplier unspecified). Standalone f = +46.777735 mm.**

L13 is the first positive relay element behind the moving focus lens. It remains fixed while L12 moves in the air space ahead of it. Its standalone power is comparable in magnitude to the focus element but opposite in sign; the actual focusing sensitivity is an in-situ property of the complete G4 arrangement rather than a simple difference of these isolated focal lengths.

### L14 — Biconcave Negative

**nd = 1.77250, νd = 49.6. Glass: J-LASF016 coefficient proxy (patent 773496; production supplier unspecified). Standalone f = −22.704946 mm.**

L14 is the strongest negative standalone element in the prescription. It sits between the positive L13 and positive L15, creating a mixed-power rear relay. J-LASF016 supplies a compatible spectral curve for the patent's `nd=1.77250, νd=49.6`; the label does not claim that HIKARI supplied the production glass.

### L15 — Biconvex Positive

**nd = 1.59551, νd = 39.2. Glass: E-F8 coefficient proxy (patent 596392; production supplier unspecified). Standalone f = +53.561787 mm.**

L15 is the final positive imaging element. The patent then gives a 38.255 mm back-focus spacing from surface 27 to the image plane. The data model preserves that source spacing exactly even though the Gaussian BFL independently recomputed from the rounded prescription is slightly shorter.

## Glass Identification and Selection

The patent provides d-line refractive index and Abbe number only. It does not identify glass manufacturers or catalog names, and it does not publish `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The data file names coordinate-compatible catalog curves solely as spectral coefficient proxies; each annotation keeps the production supplier explicitly unspecified.

| Coordinate code | nd | νd | Elements | Interpretation in this model |
|---|---:|---:|---|---|
| S-TIH6 proxy (805254) | 1.80518 | 25.4 | L1, L4, L7, L9 | High-index, low-Abbe coordinate class |
| S-BSM15 proxy (623582) | 1.62299 | 58.2 | L2, L3, L8 | Higher-Abbe class used in G1 and G3 |
| J-LAK14 proxy (697555) | 1.69680 | 55.5 | L5, L6 | Negative variator elements |
| NSL7 proxy (511605) | 1.51112 | 60.5 | L10, L11 | Higher-Abbe front pair of the master group |
| SF1 proxy (717295) | 1.71736 | 29.5 | L12 | Low-Abbe inner-focus element |
| S-TIL26 proxy (567428) | 1.56732 | 42.8 | L13 | Rear positive relay element |
| J-LASF016 proxy (773496) | 1.77250 | 49.6 | L14 | Strong negative rear corrector |
| E-F8 proxy (596392) | 1.59551 | 39.2 | L15 | Final positive element |

The three cemented pairs all combine elements with materially different νd values. That is consistent with conventional primary chromatic balancing in cemented groups, but the available data does not resolve secondary spectrum. No element is labeled ED, anomalous-dispersion, fluorite, or APO in this model, and no such performance claim is made.

The named catalog rows provide coefficient-backed chromatic tracing for every element. Authored `nC`, `nF`, `ng`, and `dPgF` remain omitted because the patent does not publish those fields; the proxy curves improve spectral completeness without turning modern catalog identity into a historical production claim.

## Focus Mechanism

The patent's central design idea is inner focusing without translating the large first lens group. Example 1 implements that idea by moving L12, the plano-concave negative element inside G4, toward the image side. G1 remains fixed, G2 and G3 perform zooming, and the remainder of G4 is stationary during focus. The focusing mechanism is therefore a single internal translating element with one mechanical degree of freedom.

Patent Table 6 publishes the focus-element motion over object–image distances from 10 m down to 1.2 m. Its endpoint focal-length rows are 72.198 and 146.453 mm, slightly offset from Table 1's 72.164 and 146.388 mm zoom endpoints. Using the Table 1 endpoint prescriptions against those nearest Table 6 rows, independent sequential y–ν tracing gives a maximum absolute motion residual of 0.003336867 mm, below the table's stated 0.009 mm maximum error. The manufacturer-authored FP-1 manual gives the production lens a 0.8 m minimum focusing distance, but the patent does not tabulate Example 1 at that distance.

The data file therefore labels the 0.8 m endpoint `CONSTRAINED_RECONSTRUCTION`. The solution holds the image plane fixed and preserves the total air space surrounding L12. Because the model inserts the aperture stop midway through the original 4.00 mm s19→s20 air gap, focus is represented by the air spacing from the inferred stop to surface 20 and by the spacing from surface 21 to L13:

| Published zoom state | STO→s20 at infinity (mm) | STO→s20 at 0.8 m (mm) | s21→s22 at infinity (mm) | s21→s22 at 0.8 m (mm) | L12 imageward shift (mm) |
|---:|---:|---:|---:|---:|---:|
| 72.164 | 2.000000 | 3.223080 | 15.000000 | 13.776920 | 1.223080314 |
| 97.746 | 2.000000 | 4.244088 | 15.000000 | 12.755912 | 2.244087999 |
| 146.388 | 2.000000 | 7.264791 | 15.000000 | 9.735209 | 5.264790649 |

The surface-19-to-stop spacing remains 2.000 mm, so the complete focus-adjacent air-space sum remains 19.000 mm at every defined zoom/focus endpoint. At 0.8 m, the independently traced paraxial magnification reaches approximately −0.104× at the wide state, −0.138× at the middle state, and −0.208× at the tele state. Those magnifications are computed model results, not manufacturer-published reproduction ratios.

## Verification Summary

The companion data file is an all-spherical, native-scale transcription of Example 1 plus one explicitly inferred aperture-stop plane. No patent optical surface was removed, and no sensor cover glass, filter, inactive dummy plane, flare cutter, or other non-participating optical plate appears in the Example 1 table. Consequently, no rear-spacing air-equivalent correction is required. There are no aspheric surfaces, so no conic-convention conversion or aspheric-coefficient scaling applies.

The patent publishes three focal-length states and a constant 38.255 mm back-focus value. Independent paraxial tracing of the final data arrays gives:

| Published state (mm) | Computed Gaussian EFL (mm) | Computed Gaussian BFL from s27 (mm) | First vertex→image track (mm) |
|---:|---:|---:|---:|
| 72.164 | 72.062790 | 38.171221 | 139.888 |
| 97.746 | 97.607135 | 38.171391 | 139.890 |
| 146.388 | 146.196286 | 38.180572 | 139.880 |

The small systematic EFL and BFL differences are retained as source-versus-Gaussian discrepancies in the rounded prescription; they are not corrected by altering the patent data. Sequential y–ν propagation and an independent ABCD matrix product agree to floating-point precision. The surface-by-surface Petzval sum, using `φ/(n·n′)`, is +0.002170699763 mm⁻¹; its reciprocal is +460.680937 mm and is treated only as the signed paraxial Petzval-curvature diagnostic, not as a literal best-focus image-surface radius.

The aperture model requires particular caution. Example 1 publishes neither the stop position nor its diameter, and Figure 1 does not show an unambiguous iris. LensVisualizer therefore inserts exactly one stationary `STO` at the midpoint of the source's 4.00 mm s19→s20 air gap, preserving the source gap as 2.00 + 2.00 mm at infinity. The modeled stop semi-diameter is 8.511342052 mm. A geometry-valid stop compatible with the inferred clear apertures gives a modeled nominal f-number of f/4.3, while the manufacturer specification remains f/4.0. The two values are deliberately kept separate rather than treating the modeled f/4.3 as a production specification or the marketed f/4 as a patent-derived pupil result.

The patent likewise publishes no surface semi-diameters. Every `sd` in the data file is therefore a modeling inference based on traced on-axis marginal rays, full-135-format chief rays, the relative proportions of patent Figure 1, the production 67 mm maximum diameter and 55 mm filter envelope, and the current geometry constraints. A 600-dpi Figure-1 comparison found L3 too large relative to the front cemented pair and L13-L15 about 30-40% undersized relative to the drawing's whole-lens scale. L3 was reduced from 17.5/17.0 mm to 14.5/14.0 mm, while the rear three rims were enlarged to 10.0, 11.2, and 12.8 mm. The revised surfaces pass edge-thickness, rim-slope, shared-gap, and image-circle validation. These checks verify the modeled geometry; they do not convert the inferred semi-diameters into measured production apertures.

## Sources and References

1. Japanese Patent Office, **JPS58137812A**, *Inner focusing system of zoom lens*, published 1983-08-16. Original scan used for transcription: p. 1 metadata; p. 2 Example 1 and Table 1; p. 5 focus-motion tables; p. 6 Figure 1 optical section; p. 7 movement curves. Secondary machine-readable page: <https://patents.google.com/patent/JPS58137812A/en>.
2. Konica, **Konica FP-1 instruction manual**, manufacturer-authored manual scan. The interchangeable-lens table identifies the 70–150mm zoom as f/4.0–f/22, 15 elements/12 groups, 34–16° field, 0.8 m minimum focus, 102 mm length, 67 mm maximum diameter, 500 g, 55 mm filter, and built-in hood; the camera specification gives a 24 × 36 mm picture size and Konica bayonet mount. <https://butkus.org/chinon/konica/konica_fp-1/konica_fp-1.pdf>.
