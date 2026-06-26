## Patent Reference and Design Identification

**Patent:** US 2016/0062096 A1  
**Application Number:** 14/829,011  
**Filed:** August 18, 2015  
**Published:** March 3, 2016  
**Priority:** JP 2014-173918, August 28, 2014  
**Inventor:** Takahiro Hatada  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens and Image Pickup Apparatus Including the Same  
**Embodiment analyzed:** Numerical Example 1 (¶0070)

The patent discloses three worked examples of a positive-lead inner-focus zoom lens for compact image-pickup apparatuses. Numerical Example 1 is the closest disclosed formula for the Canon PowerShot G7 X 8.8–36.8 mm f/1.8–2.8 lens.

The production-to-patent identification rests on convergent evidence rather than on a one-to-one production teardown. Canon's published production specification gives an 8.8–36.8 mm lens, 24–100 mm equivalent field, f/1.8–2.8 maximum aperture, 4.2× zoom ratio, 1.0-inch sensor, and 5 cm wide / 40 cm telephoto closest focusing distances. The patent prescription gives a nearby 9.06–35.69 mm, f/1.85–2.88, 3.94× optical formula with the same positive-lead compact zoom architecture. No uniform scale factor can map both patent endpoints to the marketed production endpoints, so the data file leaves the patent prescription unscaled and records production focal length and aperture as separate metadata.

The strongest identification point is the element architecture. Canon later published the Mark II optical construction as 11 elements in 9 groups, with one double-sided aspherical lens, one single-sided aspherical UA lens, one single-sided aspherical lens, and one UD lens. Numerical Example 1 has exactly 11 glass elements in 9 air-spaced groups, four aspherical surfaces on three elements, and one low-dispersion fluorophosphate element in the single-element focus unit. Example 2 has a six-lens-unit rear arrangement, and Example 3 embeds the focus function inside L3; both are therefore weaker matches for the production G7 X family.

Patent timing also supports the match. The Japanese priority date is August 28, 2014, and Canon's Camera Museum lists the PowerShot G7 X as marketed in October 2014. The timing is consistent with a production design reaching market shortly after the domestic priority filing.

## Optical Architecture

Numerical Example 1 is a five-lens-unit positive-lead zoom with an independently moving aperture stop:

L1(+) / L2(−) / stop / L3(+) / L4(+, focus) / L5(−).

The rear unit LB is positive as a whole and consists of L3, L4, and L5. The focus unit LF is the fourth lens unit L4, a single positive element. The patent's principal feature is that the optical system arranged on the image side of the focus unit, LBB = L5 in Example 1, has negative refractive power at the telephoto end. This is the arrangement claimed in the abstract and described for Example 1 in ¶0033.

| Unit | Patent surfaces | Elements | Standalone focal length | Function |
|---|---:|---:|---:|---|
| L1 | 1–3 | 2 cemented | +50.83 mm | Positive front collector |
| L2 | 4–9 | 3 air-spaced | −10.03 mm | Negative variator |
| SP | 10 | — | — | Independent aperture stop |
| L3 | 11–15 | 3 | +17.23 mm | Positive rear relay |
| L4 / LF | 16–17 | 1 | +23.26 mm | Positive inner-focus unit |
| L5 / LBB | 18–21 | 2 | −115.70 mm | Negative image-side relay / field corrector |

During zooming from wide to telephoto, the patent states that L1 follows an image-side-convex locus, L2 moves toward the image side while its interval from L1 increases, L3 and L4 move toward the object side, L5 follows an object-side-convex locus, and the aperture stop follows its own object-side-convex locus (¶0034). The total first-surface-to-image-plane length changes from 58.97 mm at the wide end to 67.77 mm at the telephoto end, so the optical system is a telescoping compact-camera zoom rather than a constant-length internal zoom.

## Element-by-Element Analysis

### Elements 1–2 (L1): Cemented Doublet — Negative Meniscus / Positive Meniscus

nd = 1.94595, νd = 18.0. Glass: FDS18-class dense flint (HOYA class). f = −93.74 mm.  
nd = 1.80420, νd = 46.5. Glass: TAF3 / N-LASF44 class lanthanum flint. f = +32.47 mm.  
Cemented doublet net: f = +50.83 mm.

The first unit is a cemented positive collector. Element 1 is a high-index, very high-dispersion negative meniscus; Element 2 is a higher-Abbe lanthanum-flint positive meniscus. The pair is net positive, and the large νd separation between the two glasses provides first-order chromatic correction before the beam reaches the negative variator.

Both elements are menisci convex toward the object. This shape keeps the front curvature manageable while allowing the group to collect a large oblique field for a retractable 1-inch-format compact lens.

### Element 3 (L2 first element): Negative Meniscus

nd = 1.77250, νd = 49.6. Glass: S-LAH66N / S-LAH66 class (OHARA). f = −13.35 mm.

The first element of L2 is the strongest standalone negative element in the variator. Its rear surface, R = +9.356 mm, is steep and supplies much of the diverging action required for the wide-angle end. The meniscus form helps control coma and oblique spherical aberration while the moving L2 unit changes the system magnification during zooming.

### Element 4 (L2 second element): Biconcave Negative Asphere

nd = 1.76802, νd = 49.2. Glass: M-TAF101-class moldable lanthanum flint (HOYA). f = −20.34 mm.

Element 4 is a biconcave negative element with an aspherical front surface, surface 6A in the data file. The low transformation-temperature, moldable-glass assignment is consistent with a glass-molded aspherical element in a high-volume compact camera lens. This surface corrects aberrations generated by the steep L2 negative power, especially at the wide end where L2 works with a strongly divergent beam.

### Element 5 (L2 third element): Positive Meniscus

nd = 1.95906, νd = 17.5. Glass: S-NPH3 (OHARA). f = +33.30 mm.

The final L2 element is an extreme high-index, high-dispersion positive meniscus. It partially offsets the two preceding negative L2 elements while providing a strong dispersion contrast against the neighboring νd ≈ 49 glasses. This lets the variator retain substantial negative power without leaving all chromatic correction to the rear unit.

The computed minimum edge thickness at the patent-listed clear aperture remains positive, so the very high curvature does not require reducing the published effective diameter for rendering.

### Element 6 (L3 first element): Biconvex Positive, Double-Sided Asphere

nd = 1.76802, νd = 49.2. Glass: M-TAF101-class moldable lanthanum flint (HOYA). f = +15.29 mm.

Element 6 is the strongest positive standalone element in the design and carries aspherical profiles on both surfaces, 11A and 12A. It sits immediately behind the aperture stop, where the axial bundle diameter is compact and the asphere can efficiently correct spherical aberration at the f/1.85 design aperture.

This is the double-sided aspherical lens corresponding to Canon's published construction language. The same M-TAF101-class glass as Element 4 also indicates an economical molded-asphere strategy: one moldable glass family is used for both the negative L2 asphere and the strong positive L3 asphere.

### Elements 7–8 (L3 rear doublet): Positive Meniscus / Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: S-LAH55VS (OHARA). f = +14.79 mm.  
nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA). f = −10.13 mm.  
Cemented doublet net: f = −50.52 mm.

The rear part of L3 is a cemented doublet at surface 14. It is net negative, even though L3 as a whole remains strongly positive because of Element 6. The positive / negative cemented pairing supplies chromatic correction inside the relay group, while the strongly curved final surface R = +8.338 mm helps direct the beam toward the focus element.

This doublet should not be interpreted as a positive sub-unit simply because it belongs to the positive L3 unit. Its standalone cemented focal length is negative; the positive unit focal length arises from the strong Element 6 ahead of it.

### Element 9 (L4 / LF): Biconvex Positive Focus Element

nd = 1.49700, νd = 81.5. Glass: S-FPL51 / FCD1 / N-PK52A class fluorophosphate ED crown. f = +23.26 mm.

Element 9 is the entire focus unit. It is a single biconvex positive lens and the only element in the system with very high Abbe number. The patent's condition (7), `(r1 + r2)/(r1 − r2)`, evaluates to 0.262 for this element, within the range the patent identifies as favorable for controlling field-curvature variation during focusing (¶0058–¶0059).

At the telephoto end, the object-side system before the focus unit is nearly afocal. The independently computed value `|fpt/ft| = 58.82` is close in intent to the patent's tabulated 61.63 and is far above the claimed lower limit. That near-afocal state keeps the angle of the axial ray entering L4 small, reducing aberration variation as L4 moves.

### Element 10 (L5 first element): Biconcave Negative Asphere

nd = 1.85135, νd = 40.1. Glass: M-TAFD305-class moldable high-index lanthanum flint (HOYA). f = −24.99 mm.

Element 10 is a high-index negative element with an aspherical rear surface, surface 19A in the data file. It forms the negative component of L5 and is the most plausible prescription correlate for Canon's single-sided UA aspherical lens. The asphere is placed in the expanding image-side beam, where it can trim residual spherical aberration, coma, and field-shape errors after the moving focus unit.

### Element 11 (L5 second element): Positive Crown

nd = 1.63854, νd = 55.4. Glass: S-BSM18 (OHARA). f = +32.32 mm.

The last glass element is a weakly curved positive crown that partially offsets Element 10. Its rear surface is nearly flat in optical effect (R = −542.945 mm), and the two-element L5 unit remains net negative at −115.70 mm. In the claimed architecture, this negative LBB group is not incidental; it is the image-side system behind the focus unit that supports the telephoto focus-sensitivity condition.

## Glass Identification and Selection

The patent lists only nd and νd, so glass names are catalog matches or class identifications. The data file uses explicit line indices where a public OHARA catalog match is direct. It avoids using a vendor name when the match is only a six-digit class match.

| Element | nd | νd | Assignment used | Status |
|---:|---:|---:|---|---|
| 1 | 1.94595 | 18.0 | FDS18-class dense flint (HOYA class) | close six-digit match |
| 2 | 1.80420 | 46.5 | TAF3 / N-LASF44 class | close six-digit match |
| 3 | 1.77250 | 49.6 | S-LAH66N / S-LAH66 class (OHARA) | direct six-digit class match |
| 4 | 1.76802 | 49.2 | M-TAF101-class (HOYA moldable) | moldable glass class match |
| 5 | 1.95906 | 17.5 | S-NPH3 (OHARA) | direct match |
| 6 | 1.76802 | 49.2 | M-TAF101-class (HOYA moldable) | moldable glass class match |
| 7 | 1.83481 | 42.7 | S-LAH55VS (OHARA) | direct match |
| 8 | 1.85478 | 24.8 | S-NBH56 (OHARA) | direct match |
| 9 | 1.49700 | 81.5 | S-FPL51 / FCD1 / N-PK52A class | direct ED-class match |
| 10 | 1.85135 | 40.1 | M-TAFD305-class (HOYA moldable) | moldable glass class match |
| 11 | 1.63854 | 55.4 | S-BSM18 (OHARA) | direct match |

The palette is flint-heavy: nine of the eleven elements have νd below 50. That is normal for a compact, fast zoom whose aberration correction depends heavily on high refractive index rather than on large air spaces. Element 9 is the only ED-class crown. The design should therefore be described as a compact, well-corrected achromatized zoom with one anomalous-dispersion contributor, not as an apochromatic design.

The three aspherical elements align with moldable Hoya-class glasses: M-TAF101 for Elements 4 and 6, and M-TAFD305 for Element 10. The assignment is consistent with glass-molded aspheres rather than hybrid resin-on-glass aspheres.

## Focus Mechanism

The focus unit LF is L4, a single positive S-FPL51-class element. The patent states that the focus-direction arrow represents movement from infinity to close distance (¶0032), and FIG. 1 shows that motion toward the object side. For any objectward L4 focus motion, d15 decreases and d17 increases; the patent table itself publishes the infinity-focus zoom spacings, not a finite-distance d15/d17 spacing table.

At infinity focus, the gaps around L4 are:

| Zoom state | d15: L3 to L4 | d17: L4 to L5 | Total L4 clearance |
|---|---:|---:|---:|
| Wide | 8.38 mm | 1.40 mm | 9.78 mm |
| Intermediate | 7.60 mm | 2.95 mm | 10.55 mm |
| Telephoto | 6.58 mm | 10.04 mm | 16.62 mm |

The patent publishes aberration plots at 0.10 m wide and 0.50 m telephoto but does not publish the corresponding close-focus air-gap tables. A direct paraxial solve using only L4 motion gives the following patent-distance estimates: 0.760 mm of objectward L4 travel at 0.10 m wide, and 1.914 mm at 0.50 m telephoto. Those numbers are verification estimates, not transcribed patent spacings.

The data file uses production-endpoint close-focus metadata instead of the patent plot distances: 0.05 m at wide and 0.40 m at telephoto. The intermediate close state is an internal smooth modeling point and is not a published Canon or patent value.

| Data-file close model | Target object distance | L4 objectward travel | d15 close | d17 close | Source status |
|---|---:|---:|---:|---:|---|
| Wide | 0.05 m | 1.352 mm | 7.028 mm | 2.752 mm | production endpoint, paraxial estimate |
| Intermediate | 0.20 m | 1.009 mm | 6.591 mm | 3.959 mm | internal modeling point |
| Telephoto | 0.40 m | 2.384 mm | 4.196 mm | 12.424 mm | production endpoint, paraxial estimate |

The patent defines focus sensitivity as `ES = (1 − βf²) × βr²` (¶0053). Table 1 gives βft = 0.01 and βrt = 1.13 for Example 1, so the focus element has near-zero magnification at the telephoto end while the image-side LBB group supplies useful relay magnification. This is the basis for moving one small element rather than a heavier group.

## Aspherical Surfaces

The patent uses the standard even-polynomial sag expression (¶0068–¶0069):

$$
X = \frac{h^2/R}{1 + \sqrt{1 - (1 + k)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10}
$$

Here `k` is the ordinary conic constant; all four aspherical surfaces in Numerical Example 1 have `k = 0`. The data file appends an `A` suffix to each aspherical surface label.

**Surface 6A** — Element 4 front, R = −18.059 mm  
A4 = −2.29119e−005, A6 = 8.28299e−008, A8 = −1.20260e−008, A10 = 1.04155e−010.

**Surface 11A** — Element 6 front, R = +15.470 mm  
A4 = −4.42389e−005, A6 = 1.20948e−007. Higher terms are absent in the patent and are set to zero in the data file.

**Surface 12A** — Element 6 rear, R = −45.132 mm  
A4 = 1.80026e−005, A6 = 3.00368e−007, A8 = −3.24113e−009, A10 = 2.62387e−011.

**Surface 19A** — Element 10 rear, R = +444.580 mm  
A4 = 5.63992e−005, A6 = −4.35159e−008, A8 = −9.87071e−010, A10 = 8.77351e−012.

The aspheres are distributed where they are optically efficient: one in the negative variator, two immediately behind the stop in the high-power positive relay element, and one in the image-side negative L5 group.

## Chromatic Correction Strategy

Chromatic correction is distributed across the zoom rather than concentrated in a single classic achromatic pair. L1 uses a high-dispersion dense flint against a higher-Abbe lanthanum flint. L2 uses the very high-dispersion S-NPH3-class positive element against moderate-dispersion lanthanum elements. L3 adds a cemented positive / negative doublet with a substantial Abbe-number split.

The single ED-class Element 9 reduces secondary-spectrum burden in the focus group and rear relay, but one S-FPL51-class element is not enough to justify calling the zoom apochromatic. In the data file, line-index fields are populated for the direct OHARA matches so downstream chromatic tracing can use better-than-Abbe-only dispersion where the catalog supports it.

## Conditional Expressions

The patent defines eleven conditional expressions in ¶0044–¶0066 and tabulates values for Example 1 in Table 1. Expressions involving only the paraxial prescription were recomputed independently. βft, βrt, and hgt are finite-ray quantities and are reported from the patent table.

| # | Expression | Computed / source value | Patent Table 1 value | Result |
|---:|---|---:|---:|---|
| 1 | `|fpt/ft|` | 58.82 | 61.63 | satisfied |
| 2 | `ff/ft` | 0.652 | 0.65 | satisfied |
| 3 | `|frt/ft|` | 3.244 | 3.24 | satisfied |
| 4 | `βft` | patent finite-ray value | 0.01 | satisfied |
| 5 | `βrt` | patent finite-ray value | 1.13 | satisfied |
| 6 | `dft/dt` | 0.097 using first surface to image plane; 0.119 using first surface to last glass surface | 0.12 | satisfied |
| 7 | `(r1 + r2)/(r1 − r2)` | 0.262 | 0.26 | satisfied |
| 8 | `Fnot/(ft/fw)` | 0.732 | 0.73 | satisfied |
| 9 | `f1/ft` | 1.425 | 1.42 | satisfied |
| 10 | `|f2/fw|` | 1.106 | 1.11 | satisfied |
| 11 | `hgt/(Ymax × Fnot)` | patent finite-ray value | 0.57 | satisfied |

The residual difference in expression (1) is expected because the object-side subsystem before L4 is nearly afocal at telephoto; small changes in reference-plane treatment shift the effective `fpt` value substantially while leaving the design intent unchanged. Expression (6) agrees with the patent when `dt` is interpreted as first surface to last glass surface, even though ¶0047 defines total lens length as first surface to image plane. The full first-surface-to-image-plane interpretation gives 6.58 / 67.77 = 0.097, still inside the claimed range.

## Verification Summary

The prescription was re-entered from the patent table and checked with an independent paraxial y–ν ray trace. The following values are computed from the data-file prescription at infinity focus.

| Quantity | Wide | Intermediate | Telephoto |
|---|---:|---:|---:|
| EFL computed | 9.061 mm | 16.381 mm | 35.668 mm |
| EFL patent table | 9.06 mm | 16.39 mm | 35.69 mm |
| BFD computed | 8.878 mm | 13.276 mm | 12.378 mm |
| BFD patent table | 8.90 mm | 13.30 mm | 12.40 mm |
| Total track computed | 58.99 mm | 58.96 mm | 67.77 mm |
| Total track patent table | 58.97 mm | 58.94 mm | 67.77 mm |
| Paraxial half-field from table image height | 35.53° | 25.03° | 12.47° |
| Patent table half-field | 35.52° | 25.03° | 12.46° |

The patent's aberration drawing for FIG. 2A labels the wide-angle plot at approximately `ω = 41.6°`, while the numerical table reports `35.52°` from image height 6.47 mm. The data file follows the numerical table for paraxial verification and records the production format as 1-inch type. The 41.6° figure is consistent with the marketed 24 mm-equivalent diagonal field, so it is not treated as a prescription-table error.

Standalone thick-lens focal lengths are: Element 1 −93.74 mm, Element 2 +32.47 mm, Element 3 −13.35 mm, Element 4 −20.34 mm, Element 5 +33.30 mm, Element 6 +15.29 mm, Element 7 +14.79 mm, Element 8 −10.13 mm, Element 9 +23.26 mm, Element 10 −24.99 mm, and Element 11 +32.32 mm. The L1 cemented doublet is +50.83 mm. The L3 rear cemented doublet, Elements 7–8, is −50.52 mm.

The Petzval sum was computed surface by surface as `Σφ/(n n') = 0.004039 mm⁻¹`, corresponding to a Petzval radius of approximately −247.6 mm under the sign convention used here. This value is independent of zoom position because zooming changes only air gaps, not surface powers.

The patent's "Effective diameter" column was treated as full clear diameter. Each data-file semi-diameter is one half of that value. The aperture-stop entry is likewise treated as a clear semi-diameter for layout and ray clipping; the wide-open f-number sequence is taken from the patent / production f-number data rather than inferred from a fixed stop clear aperture at every zoom state. A direct edge-thickness and cross-gap sag check passes using these semi-diameters. The tightest element rim is Element 5, with about 0.62 mm computed edge thickness. The tightest cross-gap check is the L2 gap from surface 5 to surface 6A; the combined sag intrusion is about 3.58 mm against a 4.28 mm 90%-of-gap allowance.

## Design Context

The PowerShot G7 X was Canon's first premium 1-inch-class compact zoom in the 24–100 mm-equivalent f/1.8–2.8 category. The patent formula shows how Canon obtained that specification: high-index compact groups, three molded aspherical elements, and a very small single-element ED focus unit working in front of a negative rear LBB group.

The same marketed 8.8–36.8 mm f/1.8–2.8, 24–100 mm-equivalent lens specification appears in later G7 X Mark II and Mark III material. The Mark II specification also repeats the same 11-elements-in-9-groups construction and the same special-element count. The patent should still be read as a disclosed numerical embodiment, not as a public factory prescription for every production revision.

## Sources

- US 2016/0062096 A1, Hatada, Canon Kabushiki Kaisha, "Zoom Lens and Image Pickup Apparatus Including the Same." Prescription, zoom spacings, aspherical coefficients, conditional expressions, and motion descriptions are from Numerical Example 1 and the associated specification text.
- Canon Camera Museum, PowerShot G7 X product page. Market date, marketed focal length, 35 mm-equivalent range, optical zoom ratio, and aperture range.
- Canon U.S.A. PowerShot G7 X support specifications. Production focal length, optical zoom ratio, closest focusing distance, autofocus type, and maximum aperture.
- Canon Latin America PowerShot G7 X Mark II specifications. Production construction statement, marketed lens range, focus range, and maximum aperture for the later model sharing the same public lens specification.
- OHARA optical glass catalog and comparative glass table. S-FPL51, S-LAH66/S-LAH66N class, S-NPH3, S-LAH55VS, S-NBH56, S-BSM18, and cross-vendor S-FPL51 / FCD1 / N-PK52A identification.
- HOYA optical glass catalog and cross-reference data. FDS18, TAF3, M-TAF101, M-TAFD305, and six-digit code cross-checks.
