## Patent Reference and Design Identification

**Patent:** US 2021/0263286 A1\
**Application Number:** US 17/174,832\
**Priority:** February 21, 2020 (JP 2020-027795)\
**Filed:** February 12, 2021\
**Published:** August 26, 2021\
**Inventor:** Junya Ichimura\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Optical system and image pickup apparatus having the same*\
**Embodiment analyzed:** Example 1 / Numerical Example 1

The prescription modeled here is the fixed Example 1 correlation for the CANON RF 50mm f/1.8 STM. The patent itself does not name that production lens, so the product identification is a modeling inference rather than a manufacturer-confirmed patent linkage. The correlation is nevertheless unusually tight across independent properties: the stored prescription computes to 49.5616 mm at f/1.8527, while Canon markets a 50 mm f/1.8 lens; both the patent example and production lens use six elements in five groups; the patent gives one physical resin element with two aspherical faces, while Canon specifies one PMo aspherical element; the patent image height is 21.64 mm, corresponding to a 43.28 mm image circle; and the patent's 2020 priority predates Canon's November 2020 announcement and December 2020 market introduction. Canon further specifies 0.30 m minimum focusing distance and 0.25× maximum magnification, and the constrained unit-focus reconstruction from this prescription independently gives 0.25005× at 0.30 m.

The selected US publication contains a substantive source defect in its printed Numerical Example 1 surface table. Several radii, axial separations, refractive indices, Abbe numbers, and effective diameters on publication page 4 are internally impossible: tracing the table as printed gives approximately 23.09 mm EFL and a negative back focal distance, contradicting the same example's stated 49.57 mm focal length and 25.67 mm back focus. The same-family JP 7414575 B2 / JP 2021-131499 A Numerical Example 1 provides a coherent version of the same table. Those same-family values reproduce the patent's stated first-order quantities and single-element focal lengths and are therefore used only to correct the selected US source error, not to substitute another embodiment.

No dimensional scaling is applied. The design is already a 50 mm-class full-frame prescription. The stored semi-diameters are the patent's published effective diameters divided by two; they are not inferred from a drawing or ray envelope. The aperture stop is likewise the patent's published diaphragm plane rather than an inferred placement. No sensor cover glass, filter, dummy surface, flare-cutter plane, or other omitted optical plate occurs in Numerical Example 1, so no air-equivalent plate correction is required.

## Optical Architecture

Example 1 is a six-element, five-group, modified double-Gauss-derived prime. The patent divides the system into a positive front unit `LF`, the aperture stop `STO`, and a positive rear unit `LR` (¶0016–¶0019). The front unit contains L11(+), L12(+), and L13(−), with L12 and L13 cemented. The rear unit contains L21(−), L22(+), and L23(+). The five physical groups are therefore L11; the cemented L12/L13 pair; L21; L22; and L23.

The design departs from a more symmetric double-Gauss arrangement by weakening the individual rear-unit powers and separating the rear-side joints. The patent explicitly connects this choice with reduced field curvature and with control of intermediate-angle coma, while the front unit is made relatively stronger than the rear unit (¶0019, ¶0024–¶0026). Independent paraxial calculation gives an effective focal length of +81.3147 mm for `LF` and +49.3825 mm for `LR`, so `fF/fR = 1.64663`, inside the patent's narrow preferred range.

The front half retains the familiar positive-positive-negative sequence associated with double-Gauss descendants, but the L12/L13 boundary is cemented rather than left as a strong air lens. The patent states that this cemented construction also suppresses total-reflection ghost paths associated with a comparable front-side air interface (¶0038–¶0041). Behind the stop, the relatively weak L21/L22 negative-positive pair is followed by the stronger positive L23.

The patent describes the strengthened front/rear power imbalance as increasing a “telephoto tendency” (¶0019). Under the project's quantitative classification, however, the complete design is not a telephoto lens: the computed first-surface-to-image track divided by EFL is 1.20208, greater than unity. It is also not retrofocus, because the computed BFD/EFL ratio is 0.51788 and the back focal distance remains shorter than the focal length.

## Element-by-Element Analysis

### L11 — Positive Meniscus

**nd = 1.83481, νd = 42.7. Glass: `835427 class (vendor unresolved)`. f = +56.3899 mm.**

L11 is the front positive meniscus and has the largest published effective diameter in the prescription. The patent describes it as convex toward the object side (¶0017). Its comparatively high index allows substantial positive power without requiring the strongest curvature in the system, and it establishes the large front ray height before the beam narrows toward the stop.

The data file intentionally records only the neutral 835427 coordinate class. Current catalogs place the coordinate in the 835427 family: OHARA S-LAH55V/S-LAH55VS, HOYA TAFD5G/TAFD5F, HIKARI J-LASF05, and CDGM H-ZLaF55C/H-ZLaF55D reproduce the patent coordinate at its printed precision. The patent names no supplier, so these catalog matches establish a material class rather than Canon's production glass identity.

### L12 — Positive Meniscus

**nd = 1.79952, νd = 42.2. Glass: `800422 class (vendor unresolved)`. f = +29.5808 mm.**

L12 is the strongest standalone positive element in the front unit and is also the thickest axial element in the prescription, as described in ¶0017. It is cemented directly to L13. The positive power of L12 alone should therefore not be confused with the behavior of the finished cemented pair.

The 800422 class is reproduced at the patent's printed precision by OHARA S-LAH52 and S-LAH52Q, with nearby alternatives from other vendors. Because the source does not identify the melt, the data remains deliberately vendor-neutral.

### L13 — Negative Meniscus

**nd = 1.80518, νd = 25.4. Glass: `805254 class (vendor unresolved)`. f = −17.7445 mm.**

L13 is the strong negative meniscus immediately before the aperture stop. Its front surface is the cemented interface with L12, so the shared boundary in the data file carries L13's downstream refractive index and element identity. The patent explicitly states that L12 and L13 form a cemented lens whose combined refractive power is negative (¶0017).

Independent thick-lens calculation gives the cemented L12+L13 combination an EFL of −85.7730 mm. This is distinct from L12's +29.5808 mm and L13's −17.7445 mm standalone focal lengths: the net power depends on the shared curved interface and the finite thicknesses of both components.

The 805254 coordinates are reproduced essentially exactly by more than one catalog family, including SUMITA K-SFLD6 and a near-identical OHARA S-TIH 6 coordinate pair. That multiplicity is precisely why the file avoids assigning a specific supplier.

### L21 — Negative Meniscus

**nd = 1.67270, νd = 32.1. Glass: `673321 class (vendor unresolved)`. f = −58.2109 mm.**

L21 begins the rear unit and has the smallest published effective diameter of the six elements. The patent describes it as concave toward the object side, with the image-side surface having the larger radius magnitude (¶0017). Its standalone negative power is deliberately weak relative to the strong negative L13 before the stop.

The patent associates the weak L21/L22 powers with control of Petzval balance and field curvature (¶0022–¶0031). In the actual assembled spacing, the L21+L22 pair has an in-situ equivalent focal length of −141.666 mm. That value is not a standalone element property; it describes the combined transfer through L21, the intervening air gap, and L22.

The 673321 coordinate class has an exact OHARA S-TIM25 coordinate match and close alternatives elsewhere, but no supplier is established by the patent.

### L22 — Positive Resin Meniscus, Two Aspherical Faces

**nd = 1.53110, νd = 55.9. Glass: `Unmatched (resin material; patent nd=1.53110, vd=55.9)`. f = +113.0489 mm.**

L22 is a weak positive meniscus convex toward the image side and is the only aspherical physical element in the prescription. The patent explicitly identifies it as resin and explains that placing a weak aspherical positive element in this rear position facilitates balancing field curvature and spherical aberration while suppressing intermediate-angle coma (¶0026). Because both of L22's optical faces are aspherical, the data file contains two aspherical surfaces but only one aspherical element.

Canon's production specification of one PMo aspherical element is consistent with this architecture, but that consistency does not establish that the patent's L22 is literally the production PMo component. The patent-to-product connection remains the fixed correlation inference described above.

No public optical-glass catalog identity is assigned to L22. The source says resin, and the coordinate audit did not establish a specific polymer or supplier whose dispersion data can be used defensibly. The `Unmatched` annotation therefore preserves the patent's published `nd` and `νd` without inventing a glass name or Sellmeier model.

### L23 — Biconvex Positive

**nd = 1.73400, νd = 51.5. Glass: `734515 class (vendor unresolved)`. f = +41.5658 mm.**

L23 is the final and strongest positive element in the rear unit. It is biconvex, with the image-side surface having the stronger curvature, matching the patent description in ¶0017. Its +41.5658 mm standalone EFL is much stronger than L22's +113.0489 mm, so L23 supplies the principal positive recovery after the weak L21/L22 negative-positive pair.

The 734515 coordinate class lies essentially on several catalog materials, including OHARA S-LAL59, HIKARI J-LAK09, and CDGM H-LaK54. These are catalog-coordinate comparisons only; the stored lens data does not treat any of them as an identified Canon production glass.

## Glass Identification and Selection

The patent publishes `nd` and `νd` but no glass trade names. Its convention is explicitly Fraunhofer d-line, with `νd = (Nd − 1)/(NF − NC)` and the d, F, C, and g wavelengths stated in ¶0049. The data therefore retains d-line coordinates throughout.

| Element | Stored material annotation | nd | νd | Catalog-audit interpretation |
|---|---|---:|---:|---|
| L11 | `835427 class (vendor unresolved)` | 1.83481 | 42.7 | OHARA, HOYA, HIKARI, and CDGM entries reproduce the 835427 coordinate at source precision; vendor unresolved |
| L12 | `800422 class (vendor unresolved)` | 1.79952 | 42.2 | OHARA S-LAH52/S-LAH52Q reproduce the 800422 coordinate at source precision; vendor unresolved |
| L13 | `805254 class (vendor unresolved)` | 1.80518 | 25.4 | SUMITA K-SFLD6 exact; OHARA S-TIH 6 essentially exact; vendor unresolved |
| L21 | `673321 class (vendor unresolved)` | 1.67270 | 32.1 | Exact OHARA S-TIM25 coordinates; vendor unresolved |
| L22 | `Unmatched (resin material; patent nd=1.53110, vd=55.9)` | 1.53110 | 55.9 | Patent explicitly says resin; no defensible public catalog identity assigned |
| L23 | `734515 class (vendor unresolved)` | 1.73400 | 51.5 | Near-exact OHARA, HIKARI, and CDGM coordinates; vendor unresolved |

The coordinate matches are used only to test whether the stored indices represent plausible public material classes. They are not used to overwrite the patent prescription or to assert a supplier. This distinction matters because multiple vendors publish materials at nearly the same `nd`/`νd` coordinates.

The patent does not provide per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`, and the neutral class labels are insufficient to establish a unique Sellmeier model. The data file consequently omits those spectral fields. No apochromatic or anomalous-partial-dispersion behavior is claimed from the Abbe coordinates alone.

## Focus Mechanism

The patent states that focusing is performed by simultaneously feeding the front unit `LF`, the aperture stop `STO`, and the rear unit `LR` in response to object distance (¶0048). This is a rigid unit-focus mechanism: the optical assembly translates as a whole and the internal separations remain fixed. The patent does not publish finite-distance spacing rows for Example 1.

The data therefore uses a `CONSTRAINED_RECONSTRUCTION`, not a purported transcription of a published close-focus state. Canon's official 0.30 m minimum focusing distance supplies the external scalar constraint. For this reconstruction, that specification is normalized to the image/sensor plane as the object-to-image-plane distance; this reference-plane normalization is a modeling choice rather than a patent-published close-focus spacing. Solving the finite-conjugate paraxial condition while preserving every internal spacing gives the following two states:

| State | S12 → image plane | Equivalent unit travel | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 25.667112 mm | 0 | 0 |
| 0.30 m reconstructed close state | 38.059827 mm | 12.392715 mm outward | −0.250047× |

The magnitude of the reconstructed close-focus magnification rounds to Canon's published 0.25×. This agreement is an independent check on the production correlation and on the one-degree-of-freedom unit-focus interpretation, but the close spacing remains reconstructed because the patent never prints it.

Canon specifies STM as the production focusing drive. That is a mechanical product specification and does not alter the patent's optical statement that the full lens unit moves rigidly.

## Aspherical Surfaces

Both aspherical surfaces belong to L22 and are stored as `9A` and `10A`. The patent's equation uses the standard conic form directly:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

The patent's `k` is therefore the same standard conic constant `K` used by the data model; no κ-to-K conversion is required. Both surfaces have `K = 0`, so their base conics are spherical. No dimensional scaling is applied, and the aspheric coefficients are therefore stored without any scale transformation. `A14 = 0` is present only to satisfy the current data schema; it is not a published nonzero term.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) | A12 (mm⁻¹¹) |
|---|---:|---:|---:|---:|---:|---:|
| 9A | 0 | −4.12032×10⁻⁵ | −2.90015×10⁻⁷ | −4.67119×10⁻⁹ | +7.90646×10⁻¹¹ | −9.28470×10⁻¹³ |
| 10A | 0 | −2.41619×10⁻⁵ | −3.29146×10⁻⁷ | +1.91098×10⁻¹⁰ | −9.28593×10⁻¹³ | −2.29193×10⁻¹³ |

The published effective diameters give semi-diameters of 7.760 mm at 9A and 9.070 mm at 10A. At those radii, independent sag evaluation gives polynomial departures of −0.255825 mm and −0.412545 mm, respectively. These values describe the difference from each surface's spherical base conic at the verified rim; they are not extrapolated beyond the published clear apertures.

The patent attributes the L22 aspherical form to balancing field curvature and spherical aberration and to reducing intermediate-angle coma in the compact rear unit (¶0019, ¶0026). No separate asphere manufacturing process is specified in the patent itself. Canon's production specification calls its single aspherical element PMo, but the analysis does not treat that product description as direct proof of the patent element's manufacturing process.

## Air-Lens Relationships and Aberration Strategy

Two strongly shaped air spaces are explicit parts of the patent's design logic. The first lies between the image-side surface of the front unit and the object-side surface of L21, across the aperture-stop region. The patent defines its shape through condition (5) and connects it with suppression of sagittal flare as the system departs from classical double-Gauss symmetry (¶0027–¶0029). For the stored prescription, the corresponding shape factor is 0.18822.

The second air lens lies between L21 and L22. Its two boundaries are both concave toward the object side in the ordinary sequential sign convention, but their relative curvature produces the strongly negative patent shape factor of −11.35411 in condition (6). The patent states that this relationship helps preserve Petzval balance after weakening the individual L21 and L22 powers (¶0030–¶0031).

This rear-side strategy is visible in the independently computed powers. L21 is only −58.2109 mm and L22 only +113.0489 mm as standalone elements, while L23 is a considerably stronger +41.5658 mm positive element. The design therefore does not rely on one very strong rear negative/positive pair. Instead, the rear unit spreads power among three elements and uses the L21/L22 air-lens shape plus the two L22 aspheres to obtain the behavior described by the patent.

The front cemented L12/L13 pair serves a different purpose. Its combined power is negative, but eliminating a strong air interface there also follows the patent's ghost-suppression argument in ¶0038–¶0041. The design thus uses air-lens shaping selectively: it preserves two optically purposeful air spaces while cementing the front positive/negative pair where the patent identifies a stray-light disadvantage to an air gap.

## Conditional Expressions

The patent gives twelve design conditions and progressively narrower preferred ranges. Recalculation from the stored prescription places Example 1 inside every narrow `(b)` range.

| Condition | Quantity | Computed value | Preferred `(b)` range | Result |
|---:|---|---:|---|---|
| 1 | `fF/fR` | 1.64663 | 1.50–1.80 | Pass |
| 2 | `f22/f` | 2.28098 | > 1.50 | Pass |
| 3 | `f21/f` | −1.17452 | −1.30 to −0.70 | Pass |
| 4 | `f23/f` | 0.83867 | 0.50–0.90 | Pass |
| 5 | front air-lens shape factor | 0.18822 | 0.15–0.40 | Pass |
| 6 | rear air-lens shape factor | −11.35411 | < −1.00 | Pass |
| 7 | `BF/f` | 0.51788 | 0.45–0.60 | Pass |
| 8 | `Lst/f` | 0.84999 | 0.70–0.90 | Pass |
| 9 | `TTL/f` | 1.20208 | 1.10–1.30 | Pass |
| 10 | `d12/d13` | 6.09091 | 5.5–7.0 | Pass |
| 11 | `N22/N23` | 0.88299 | 0.80–0.90 | Pass |
| 12 | `NdF/NdR` | 1.10161 | 1.06–1.20 | Pass |

Condition (1) captures the deliberately stronger front-unit power; conditions (2)–(4) constrain the weak L21/L22 powers and stronger L23; conditions (5)–(6) encode the two air-lens shapes; conditions (7)–(9) constrain back focus, stop position, and overall track; condition (10) governs the thick L12/thin L13 cemented relationship; and conditions (11)–(12) constrain the index distribution in the rear unit and between the two major units.

The patent's summary Table 1 is not fully synchronized with the detailed Example 1 prescription. In particular, its Example 1 focal length, TTL, diaphragm distance, and ratios derived from those values differ from the coherent detailed surface table and Various Data. The analysis therefore follows the corrected detailed Numerical Example 1 prescription and independently recomputed quantities rather than forcing the model to match the stale summary row.

## Verification Summary

Independent first-order calculation from the final stored arrays gives an EFL of 49.561602 mm, BFD of 25.667112 mm, and first-surface-to-image track of 59.577112 mm. The corresponding patent Various Data are 49.57 mm, 25.67 mm, and 59.59 mm. The modeled f-number from the physical stop and entrance pupil is 1.852705, agreeing with the patent's displayed f/1.85 while remaining separate from Canon's marketed f/1.8.

The entrance pupil diameter is 26.75094 mm for the published 16.24 mm physical stop. Surface-by-surface Petzval calculation using $\phi/(nn')$ sums to +0.00361826 mm⁻¹. The six stored standalone element focal lengths independently reproduce the patent's single-lens values to its printed precision, while the cemented and in-situ combinations remain distinct quantities as described above.

The patent image height of 21.64 mm corresponds to a 43.28 mm image circle, consistent with the `135-full-frame` format classification used in the data file. Canon's marketed diagonal field is 46°, while the patent's 23.58° half-field corresponds to 47.16° full field; these are retained as separate production and design quantities rather than reconciled by rescaling.

The published effective diameters also remain geometrically viable in the stored model. The maximum calculated rim-slope angle is 47.24°, the minimum element edge thickness is 1.711 mm, and the tightest positive shared-band cross-gap sag intrusion is 55.0% of its axial gap. These checks use the actual spherical/aspherical rim slopes and shared material bands rather than the obsolete universal `sd/|R|` proxy.

## Sources and References

1. Junya Ichimura, Canon Kabushiki Kaisha, **US 2021/0263286 A1**, *Optical system and image pickup apparatus having the same*, published August 26, 2021. Selected source and Example 1. https://patents.google.com/patent/US20210263286A1/en
2. Canon Kabushiki Kaisha, **JP 7414575 B2 / JP 2021-131499 A**, Numerical Example 1. Same-family correction source used only to resolve the corrupt US Example 1 surface table. https://patents.google.com/patent/JP7414575B2/en
3. Canon U.S.A., **RF50mm F1.8 STM — Technical Specifications**. Production focal length, aperture, RF mount, 0.30 m MFD, 0.25× maximum magnification, 46° diagonal field, 6 elements in 5 groups, one PMo aspherical element, seven blades, and STM. https://www.usa.canon.com/support/p/rf50mm-f1-8-stm
4. Canon Camera Museum, **RF50mm F1.8 STM**. Production introduction date and corroborating product specifications. https://global.canon/en/c-museum/product/rf498.html
5. Canon U.S.A., **Canon Adds Two RF Lenses And PIXMA PRO Printer**, November 3, 2020. Production announcement and December 2020 availability. https://www.usa.canon.com/newsroom/2020/20201103-lens
6. OHARA, **Optical Glass Catalog**. Coordinate comparison for candidate glass classes. https://www.ohara-inc.co.jp/en/product/catalog/
7. HOYA, **Optical Glass Data Download**. Coordinate comparison for candidate glass classes. https://www.hoya-opticalworld.com/english/datadownload/index.html
8. Nikon / HIKARI, **Optical Glass Catalog**. Coordinate comparison for candidate glass classes. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
9. SUMITA Optical Glass, **Catalog Data**. Coordinate comparison for candidate glass classes. https://www.sumita-opt.co.jp/en/download/
10. SCHOTT Advanced Optics, **Optical Glass Catalog**. Coordinate comparison for candidate glass classes. https://www.us.schott.com/shop/advanced-optics/en/search/
11. CDGM, **Colourless Optical Glass Database**. Coordinate comparison for candidate glass classes. https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
