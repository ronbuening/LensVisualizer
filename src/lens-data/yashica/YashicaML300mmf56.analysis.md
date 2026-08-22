# YASHICA ML 300mm f/5.6

## Patent Reference and Design Identification

**Patent:** JP1978-129629 (特開昭53-129629)<br>
**Application Number:** 特願昭52-44124<br>
**Filed:** 19 April 1977<br>
**Published:** 11 November 1978<br>
**Inventors:** Toshio Funejima (船島敏夫); Hamao Inagaki (稲垣浜夫)<br>
**Applicant:** Tokina Optical Co., Ltd. (トキナー光学株式会社)<br>
**Title:** 全長の短い望遠レンズ (“telephoto lens with short overall length”)
**Embodiment analyzed:** Example 2 (実施例2)

JP1978-129629 describes a compact six-element telephoto objective and supplies three numerical examples. The
LensVisualizer entry fixes Example 2 as the prescription correlated with the production **YASHICA ML 300mm f/5.6**.
The correlation is strong but inferential: neither the patent nor the period Yashica material explicitly states that
Example 2 became this production lens. [1]

The evidence converges on the selected production correlation:

1. Example 2 and the period Yashica lens-data table both specify six elements in three groups.
2. The patent specifies F/5.6, matching the marketed maximum aperture.
3. The patent specifies a full field of 8.5°, while the Yashica table gives 8°30′.
4. The period product document identifies the 300mm f/5.6 as a “compact” lens, consistent with the patent's stated aim of
   shortening a telephoto system.
5. The product document gives a 4.5 m minimum focusing distance and a 58 mm filter; these are retained as production
   metadata and mechanical context, not as prescription inputs.
6. A Yashica/Contax dealer price list effective 1 January 1980 lists the ML 300mm f/5.6 compact among the interchangeable
   lenses for the FR/FX system and identifies that system as Contax/Yashica mount. [2][3]

The production focal-length label and the design focal length are intentionally separate. The marketed lens is 300 mm;
the uniformly scaled Example 2 prescription computes to an EFL of **299.975734305 mm**. The production aperture and the
modeled design aperture are both F/5.6. The data taxonomy therefore uses `contax-yashica` and `135-full-frame` without
altering the patent's historical applicant, which remains Tokina Optical in the structured patent metadata.

## Optical Architecture

Example 2 is an all-spherical six-element, three-group telephoto design. In front-to-rear order it comprises a cemented
positive/negative doublet (L1-L2), a positive meniscus (L3) separated by a very small air space, a long internal air gap,
and a cemented negative/positive/negative rear triplet (L4-L6). Figure 1 of the patent shows the same compact front
collector followed by the much smaller rear triplet. [1]

The telephoto classification is computational rather than stylistic. From the final data arrays, the first surface to
paraxial image-plane track is **191.484864256 mm** and the EFL is **299.975734305 mm**, giving
`TL/EFL = 0.638334513`. Because this ratio is below unity, the model satisfies the project's telephoto definition. The
back focal distance is **75.144864256 mm**, or `BFD/EFL = 0.250503143`, so the design is not retrofocus.

The element focal lengths stored in the data file are air-to-air standalone values. They must not be read as the power of
the same elements while cemented into the actual lens. Matrix evaluation of the final prescription separates those
levels:

| Optical unit | Computed equivalent focal length | Interpretation |
|---|---:|---|
| L1-L2 cemented doublet D1 | +483.853858 mm | Net positive despite the negative L2 partner |
| L3 alone / second group | +185.744550 mm | Positive meniscus added immediately behind D1 |
| Front functional subsystem, S1-S5 | +136.670760 mm | Strong positive front subsystem in situ |
| L4-L6 cemented triplet T1 | -67.668230 mm | Strong negative rear telephoto group |

The long 91.74 mm air space between surfaces 5 and 6 therefore separates a strongly positive front subsystem from a
strongly negative rear subsystem. That positive-front/negative-rear interaction produces the short track relative to
focal length; it is more informative than treating the six standalone element focal lengths as additive powers.

The patent prescription is normalized to `f = 1.0`. The data file applies a uniform scale `s = 300` to published radii,
thicknesses, and air spaces. Refractive indices and Abbe numbers are unchanged. The rounded source prescription is not
rescaled a second time to force an exact 300.000 mm EFL. Since every optical surface is spherical and `asph` is empty,
there are no conic constants or polynomial coefficients to transform.

The patent separately publishes `fB = 0.2505` rather than a final prescription-table spacing after S9. LensVisualizer
requires an image-plane distance on the last sequential surface, so the data file uses the independently recomputed BFL
of **75.144864256 mm** instead of the rounded `0.2505 × 300 = 75.150 mm`. This is a model completion of the image-plane
spacing, not a change to any published refracting surface.

The patent gives no cover glass, filter plate, dummy surface, flare-cutter plane, or other inactive optical bookkeeping
plane in Example 2. None is therefore removed from the sequential prescription. The physical filter thread documented
for the production lens is mechanical metadata and is not modeled as an optical plate.

The aperture stop requires a separate modeling qualification. The patent states that its Seidel calculation places the
stop at the tangent plane of the first surface, but it does not publish a separate mechanical iris plane or diameter.
The data file therefore places one flat `STO` coincident with S1 as an inference from that calculation convention. With
no refracting power before the stop, the stop is also the paraxial entrance pupil; enforcing F/5.6 gives an inferred
semi-diameter of **26.783547706 mm**. [1]

The patent also publishes no clear semi-diameters. All surface `sd` values in the data file are therefore modeled rather
than source-transcribed. They were constrained by the F/5.6 pupil, the patent optical section, the production 58 mm front
envelope, and traced ray containment. The final geometry retains positive edge thickness throughout; the limiting L5
edge thickness is **0.353157 mm**, and the largest spherical rim angle is **25.030650°** at surface 8. These figures are
validation results for the modeled apertures, not claimed manufacturing dimensions.

## Element-by-Element Analysis

The focal lengths in this section are the verified standalone air-to-air values stored in the final data file. Cemented
net power and in-situ subsystem behavior are described separately above.

### L1 — Biconvex Positive, front member of D1

**nd = 1.48749, νd = 70.4. Glass: 487704 - FK5 class (vendor unresolved). f = +133.963891 mm.**

L1 is the positive crown-like front member of the cemented first group. Its high Abbe number is not incidental: the
patent explicitly requires both the first and third elements to have `ν > 65`. In the actual cemented doublet, L1's
positive power is moderated by L2 rather than acting as the +133.96 mm isolated singlet represented by its standalone
focal length. [1]

### L2 — Biconcave Negative, rear member of D1

**nd = 1.75690, νd = 31.8. Glass: 757318 - E-LAF11 catalog equivalent (production supplier unspecified). f = -180.725674 mm.**

L2 is cemented directly to L1. Its substantially lower Abbe number provides the dispersive contrast within the front
pair, while its negative standalone power reduces the net power of D1. The patent also constrains the magnitude of the
shared cemented-interface radius through `|r2| > 0.48 f`, tying this pair's geometry to the intended compact correction.
No separate cement layer is present in the model; surface 2 changes directly into the L2 medium. [1]

### L3 — Positive Meniscus

**nd = 1.48749, νd = 70.4. Glass: 487704 - FK5 class (vendor unresolved). f = +185.744550 mm.**

L3 repeats the high-Abbe coordinate class of L1 and follows the front cemented doublet across only 0.30 mm in the scaled
model. Its isolated power is positive, but its more important in-situ role is to complete the strong S1-S5 positive
subsystem. The patent's composite focal-length condition for the first three lenses is satisfied at
`f1,2,3/f = 0.455569200`, close to the source's rounded 0.456.

### L4 — Biconcave Negative, front member of T1

**nd = 1.81600, νd = 46.8. Glass: 816468 - S-LAH59 catalog equivalent (production supplier unspecified). f = -30.410016 mm.**

L4 begins the compact cemented rear triplet after the large internal air space. Its high refractive index and strong
negative standalone power make it the first part of the rear negative subsystem. The patent requires `n4 > 1.75`; the
stored 1.81600 value satisfies that condition without assigning the element to a particular historical glass vendor. [1]

### L5 — Biconvex Positive, central member of T1

**nd = 1.59340, νd = 34.8. Glass: Unmatched (nd=1.59340, vd=34.8; patent theta_gF=0.589). f = +28.929010 mm.**

L5 is individually a strong positive element but operates between two negative members inside a net-negative cemented
triplet. The patent gives its standalone normalized focal length as approximately 0.096; recomputation from the final
data gives `f5/f = 0.096430034`, satisfying the stated `0.09 f < f5 < 0.11 f` condition.

The patent also singles out L5 with `θ5 = (ng-nF)/(nF-nC) = 0.589` and requires `θ5 > 0.585`. This is a relative partial-
dispersion ratio, not anomalous-deviation `dPgF`. Because the source does not supply absolute `nC`, `nF`, or `ng`, the
data file does not fabricate those line indices and does not convert `θ5` into `dPgF`. No APO or anomalous-dispersion
classification follows from this entry alone.

### L6 — Negative Meniscus, rear member of T1

**nd = 1.78800, νd = 47.5. Glass: 788475 - lanthanum glass class (vendor unresolved). f = -56.866289 mm.**

L6 closes the rear cemented triplet with negative standalone power. Its index satisfies the patent's `n6 > 1.75`
condition. Together L4, L5, and L6 form a net-negative cemented assembly even though the central L5 is positive. This
triplet's in-situ action, across the long separation from the front subsystem, is the principal source of the verified
telephoto shortening.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not identify glass manufacturers. The data file
therefore preserves optical-coordinate classes rather than assigning specific HOYA, SCHOTT, OHARA, HIKARI, SUMITA, or
CDGM melts. A coordinate-first comparison finds close or exact modern/archival analogues across several of those
catalogs, but coordinate agreement is not evidence of historical supplier identity. [4][5][6][7][8][9]

| Elements | nd | νd | Stored glass annotation | Status |
|---|---:|---:|---|---|
| L1, L3 | 1.48749 | 70.4 | `487704 - FK5 class (vendor unresolved)` | Coordinate class |
| L2 | 1.75690 | 31.8 | `757318 - E-LAF11 catalog equivalent (production supplier unspecified)` | Qualified dispersion proxy |
| L4 | 1.81600 | 46.8 | `816468 - S-LAH59 catalog equivalent (production supplier unspecified)` | Qualified dispersion proxy |
| L5 | 1.59340 | 34.8 | `Unmatched (nd=1.59340, vd=34.8; patent theta_gF=0.589)` | Unresolved |
| L6 | 1.78800 | 47.5 | `788475 - lanthanum glass class (vendor unresolved)` | Coordinate class |

The patent's chromatic strategy is expressed through ordinary index/Abbe constraints and L5's relative partial-
dispersion ratio. It explicitly discusses avoiding costly fluorite or unusually dispersive specialty materials. The
available source data therefore supports discussion of dispersion balancing within the cemented groups, but it does not
support an ED, fluorite, APO, or anomalous-dispersion product classification. [1]

E-LAF11 and S-LAH59 supply coordinate-compatible runtime dispersion curves without identifying the production supplier.
No `nC`, `nF`, `ng`, or `dPgF` values are authored. This is deliberate: deriving `nF-nC` from `nd` and `νd` does not fix
the absolute C/F indices, and `θ5` fixes only the ratio of two dispersion intervals. Selecting one catalog analogue and
copying its line indices would turn an unresolved coordinate match into an unsupported historical-material claim.

## Focus Mechanism

The production lens is documented to focus to **4.5 m**, but JP1978-129629 Example 2 publishes no finite-object
prescription, focus-spacing table, magnification state, or focusing-group movement. The data file therefore uses the
status **NO_INTERNAL_RECONSTRUCTION**: `closeFocusM` retains the production specification while `var` and `varLabels`
remain empty. [1][2]

Consequently, the source does not establish whether the production implementation achieved focusing by unit extension,
internal movement, or another mechanical arrangement. The analysis does not infer a focus mechanism from the 4.5 m
minimum-focus specification alone.

## Conditional Expressions

JP1978-129629 defines eight conditions for the short telephoto form. Each is satisfied by the final data prescription.
Quantities below are evaluated in the patent's normalized `f = 1` coordinate system; the dimensional scale factor does
not change the dimensionless tests. [1]

| Patent condition | Verified value | Result |
|---|---:|---|
| `0.4 f < f1,2,3 < 0.5 f` | 0.455569200 | Pass |
| `0.27 f < d5 < 0.32 f` | 0.305800000 | Pass |
| `ν1, ν3 > 65` | 70.4, 70.4 | Pass |
| `|r2| > 0.48 f` | 0.520620000 | Pass |
| `θ5 > 0.585` | 0.589 | Pass |
| `n4, n6 > 1.75` | 1.81600, 1.78800 | Pass |
| `n5 < 1.63` | 1.59340 | Pass |
| `0.09 f < f5 < 0.11 f` | 0.096430034 | Pass |

These conditions constrain the front positive subsystem, the unusually large separation before the rear triplet, the
front high-Abbe glasses, the front cemented-interface curvature, and the index/dispersion choices within the rear
triplet. Their simultaneous satisfaction is consistent with the patent's intended compact telephoto architecture rather
than serving as a product-identification proof by itself.

## Verification Summary

The final TypeScript arrays were recomputed with both sequential height/reduced-angle tracing and an independent ABCD
matrix product. The two methods agree to better than `1e-12` in the system-matrix entries, and the air-to-air determinant
is unity to floating-point precision. The verified design quantities are:

| Quantity | Final-data result |
|---|---:|
| EFL | 299.975734305 mm |
| BFL from S9 | 75.144864256 mm |
| S1-S9 vertex span | 116.340000000 mm |
| S1-image track | 191.484864256 mm |
| TL/EFL | 0.638334513 |
| BFD/EFL | 0.250503143 |
| Modeled f-number | 5.600000000 |
| Petzval sum, source-normalized scale | -0.125499984986 |

The patent's rounded summary values (`f = 1.0`, `fB = 0.2505`, `T = 0.638`, `f1,2,3 = 0.456`, and `f5 = 0.096`) are
consistent with the recomputation from the printed prescription. The surface-by-surface Petzval values likewise agree
at the precision justified by the printed prescription. Direct `φ/(n n')` evaluation differs from the table only in
the last published decimal at S4, S8, and S9: +1.4097586 versus +1.4097, -0.8179223 versus -0.8180, and +2.2729030
versus +2.2730. Each difference is at most 1.0e-4 in the source-normalized units, and the computed sum still rounds to
the published -0.1255. These are therefore treated as source-precision effects rather than prescription errors. [1]

The modeled semi-diameters pass the specified geometry and ray checks: all element edge thicknesses remain positive,
actual spherical rim slopes remain below the current limit, air-gap sag intrusion remains within the shared-band policy,
the full on-axis pupil boundary clears, all configured ray fans clear, and the full-field chief ray reaches the image
plane. These checks validate the LensVisualizer geometry but do not turn the inferred aperture diameters into patent or
manufacturer specifications.

## Sources and References

1. **JP1978-129629 / 特開昭53-129629**, 全長の短い望遠レンズ, original uploaded patent scan. Front-page metadata on
   scan p. 1; design description and conditions on scan pp. 1-3; Example 2 prescription on scan p. 3; Seidel table and
   optical section on scan p. 4.
2. **Yashica/Contax dealer lens-data document**, period manufacturer-issued product material, archival mirror at Pacific
   Rim Camera: <https://www.pacificrimcamera.com/rl/02068/02068.pdf>. The ML 300mm f/5.6 compact row gives 6 elements /
   3 groups, 8°30′ angle of view, 4.5 m minimum focus, f/5.6-22, 58 mm filter, built-in shade, and 66 × 147.5 mm size.
3. **Yashica/Contax Confidential Dealer Price List No. 10**, effective 1 January 1980, archival transcription/mirror:
   <https://manuals.plus/m/4255d2823b288f17af4cbcfbcf000c097d4305f94d7921a2b083a801973828cc>.
4. **HOYA Optical Glass data downloads and cross-reference:** <https://www.hoya-opticalworld.com/english/datadownload/index.html>
   and <https://www.hoya-opticalworld.com/english/products/crossreference.html>.
5. **SCHOTT Advanced Optics glass search:** <https://www.us.schott.com/shop/advanced-optics/en/search/>.
6. **OHARA optical-glass pocket catalog:** <https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf>.
7. **HIKARI optical-glass catalog:** <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>.
8. **SUMITA optical-glass ZEMAX catalog:** <https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf>.
9. **CDGM / New Huaguang optical-glass handbook:** <https://hbnhg.com/uploadfiles/2026/02/20260213172542451.pdf>.
