## Patent Reference and Design Identification

**Patent:** DE 975 637 C\
**Filed:** 1 September 1954\
**Application published:** 5 April 1956\
**Grant announced:** 22 February 1962\
**Patent issued:** 15 March 1962\
**Inventor:** Günter Klemt, Kreuznach\
**Assignee:** Jos. Schneider & Co. Optische Werke, Kreuznach\
**Title:** _Optisches System großer Bildwinkelleistung_\
**Embodiment analyzed:** Sole numerical example

The patent's numerical example is an all-spherical, six-element system in four air-spaced components. It is normalized to $f' = 100$ at an aperture ratio of $1:8$ and states a back focal distance of $s' = 73.4$, a vertex-to-vertex optical length of $\sum d = 80.48$, and an approximately $100°$ field. The prescription table appears on patent page 2, the claims on page 3, and the sectional drawing on page 4.

The identification with the production Schneider-Kreuznach Super-Angulon 90mm f/8 rests on several independent matches:

1. Schneider's own brochure describes the Super-Angulon f/8 series as a nearly symmetric six-element, four-component design. That is the patent architecture exactly.
2. Independent paraxial tracing of the unscaled patent prescription gives $f' = 100.011317$ mm, $s' = 73.402337$ mm, and $\sum d = 80.48$ mm. These reproduce the patent's rounded values.
3. Schneider publishes an effective focal length of 90.3 mm, back focus of 66.3 mm, and principal-plane separation $HH' = 29.6$ mm for the production 90mm f/8. Scaling the prescription by
   $$
   k = \frac{90.3}{100.0113170318} = 0.9028978188
   $$
   gives a computed back focal distance of 66.274810 mm and $HH' = 29.437630$ mm.
4. Schneider specifies a $92°$ full-aperture field with a 187.0 mm image circle and a $100°$ field at f/22 with a 215.2 mm image circle. Rectilinear geometry with the published 90.3 mm effective focal length gives
   $$
   2(90.3)\tan 46° = 187.0168\ \text{mm}
   $$
   and
   $$
   2(90.3)\tan 50° = 215.2307\ \text{mm}.
   $$
5. The patent's f/8 aperture, inventor, assignee, field class, and filing date are consistent with Schneider's production series.

The match is therefore stronger than a focal-length resemblance alone: architecture, aperture, effective focal length, back focus, principal-plane separation, and both published field diameters converge on the same production lens. The data file uses Schneider's 90.3 mm effective focal length as the scaling authority rather than treating the marketed “90mm” marking as an exact design value.

## Optical Architecture

The Super-Angulon 90mm f/8 is a near-symmetric large-format wide-angle objective with a negative-positive-positive-negative component-power sequence:

- **Component I:** L1, a negative outer meniscus.
- **Component II:** L2+L3, a positive cemented doublet.
- **Stop space:** the 2.320447 mm production-scale air interval between the two doublets.
- **Component III:** L4+L5, a positive cemented doublet.
- **Component IV:** L6, a negative outer meniscus.

The production-scale vertex track is 72.665216 mm, or 0.804709 of the 90.3 mm effective focal length. Its back focal distance is 66.274810 mm, or 0.733940 of the effective focal length. The system is therefore compact, but it is not retrofocus: the back focal distance is shorter than the focal length. “Near-symmetric wide-angle” is the useful architectural classification; a conventional telephoto-group description would not represent its power distribution.

The aperture stop lies in the patent's $d_5$ “Blendenraum.” The numerical table does not divide that gap into front and rear portions, so the data file places the stop at its midpoint, consistent with the patent drawing on page 4. This insertion does not alter the paraxial prescription because the stop surface is flat and optically neutral.

The field-flattening behavior is best described through the required surface-by-surface Petzval expression,

$$
P = \sum_i \frac{n'_i-n_i}{R_i n_i n'_i}.
$$

At production scale, the four component contributions are:

| Component | Petzval contribution (mm⁻¹) |
|---|---:|
| I | -0.013321084 |
| II | +0.013075389 |
| III | +0.013300705 |
| IV | -0.013894940 |
| **Total** | **-0.000839930** |

The corresponding Petzval radius is $-1/P = 1190.575$ mm under this sign convention, and the normalized sum is $Pf' = -0.075846$. The residual is small but not zero. The cancellation occurs between the two positive cemented components and the two negative outer components; it should not be approximated by adding thin-lens element powers.

The patent explicitly makes the inner cemented components thick and gives their stop-side surfaces plane or nearly plane. It also makes the negative elements of those doublets approximately concentric. Those choices allow astigmatism and field curvature to be corrected without the extreme outer-surface bending found in some earlier very-wide-angle systems.

## Element-by-Element Analysis

The focal lengths below are **standalone in-air shape focal lengths at production scale**. They are useful for describing each physical element, but they are not the element's in-situ power inside a cemented assembly. The actual cemented-component focal lengths are +48.775 mm for L2+L3 and +48.250 mm for L4+L5.

### L1 — Negative Meniscus, convex to object

**nd = 1.46450, νd = 65.7. Glass: FK3 class (465/657; probable historical Schott FK3, supplier not stated). f = -51.480 mm.**

L1 is a low-index, low-dispersion negative meniscus. Its production-scale radii are +165.8533 mm and +20.8208 mm. The strong rear curvature gives the element negative power while the meniscus form bends large-field bundles toward the front cemented component without requiring a strongly powered first surface.

The patent requires the corresponding outer elements to have $n_d < 1.5$. L1's $n_d = 1.4645$ satisfies that condition and limits dispersion at a location where off-axis ray heights are large.

### L2 — Negative Meniscus, front cemented component

**nd = 1.71740, νd = 29.5. Glass: SF1 (Schott match). f = -65.422 mm.**

L2 is the high-index, high-dispersion negative member of the front cemented doublet. Its two positive radii form a negative meniscus convex to the object. The difference between its production-scale radii is 10.428470 mm, close to its 10.058282 mm center thickness; this is the approximately concentric construction described by the patent.

At the L2/L3 cemented interface, the index change is

$$
|1.7174-1.5601| = 0.1573,
$$

which exceeds the patent's 0.12 minimum. This large interface step supplies substantial chromatic and monochromatic correction without introducing an air surface.

### L3 — Positive Meniscus, front cemented component

**nd = 1.56010, νd = 47.0. Glass: 560/470 LLF3/PBL3/FEL3 class; supplier unresolved. f = +22.821 mm.**

L3 is the positive member of the front doublet. Its strongly curved cemented face is followed by a stop-side radius of +944.3769 mm at production scale, which is optically very weak and corresponds to the patent's “nearly plane” description.

Although L3 is positive, its $\nu_d = 47.0$ places it in the light-flint region rather than the crown region. It is lower in dispersion than L2 and therefore serves as the lower-dispersion partner in the achromat. The doublet's net focal length is +48.775 mm; that in-situ component value, not the +22.821 mm standalone element value, describes its behavior in the assembled lens.

### L4 — Plano-Convex Positive, convex to image

**nd = 1.58270, νd = 46.5. Glass: BAF3 class (583/465; Schott N-BAF3 or Hikari J-BAF3 equivalent). f = +21.817 mm.**

L4 begins the rear cemented component with a plane stop-side face and a strongly curved rear cemented face. It is the close counterpart of L3, but its slightly higher index and different bending deliberately break exact symmetry.

The prior BaF4 identification is not supported by the constants. Hikari J-BAF3 is $n_d = 1.582670$, $\nu_d = 46.48$, differing from the patent by only 0.000030 and 0.02. Schott N-BAF3 is likewise close at $n_d = 1.58272$, $\nu_d = 46.64$. By contrast, Hikari J-BAF4 is $n_d = 1.605620$, $\nu_d = 43.49$, far outside transcription tolerance. The defensible identification is therefore BAF3 class, not BAF4.

### L5 — Negative Meniscus, rear cemented component

**nd = 1.71740, νd = 29.5. Glass: SF1 (Schott match). f = -57.488 mm.**

L5 is the negative high-index member of the rear doublet. Both radii are negative, giving a negative meniscus concave to the object. It uses the same optical constants as L2 but is not an exact geometrical mirror, allowing residual astigmatism, coma, and field curvature to be balanced across the asymmetric object and image spaces.

The L4/L5 cemented index step is

$$
|1.5827-1.7174| = 0.1347,
$$

again exceeding the patent's 0.12 minimum. The complete L4+L5 component has an in-situ focal length of +48.250 mm.

### L6 — Negative Meniscus, concave to object

**nd = 1.46450, νd = 65.7. Glass: FK3 class (465/657; probable historical Schott FK3, supplier not stated). f = -49.265 mm.**

L6 is the rear counterpart of L1. Its production-scale radii are -21.0465 mm and -269.9032 mm. The element supplies the negative rear-component Petzval contribution and completes the broad near-symmetry around the stop.

The slight difference between L1 and L6 focal lengths is real and follows from their unequal corresponding radii. The design is near-symmetric, not exactly symmetric.

## Glass Identification

The patent publishes only $n_d$ and $\nu_d$; it does not name a glass supplier. Catalog names therefore indicate an exact match or glass class, not proof of the production melt.

| Elements | Patent nd / νd | Identification | Catalog comparison | Confidence |
|---|---:|---|---|---|
| L1, L6 | 1.46450 / 65.7 | FK3 class, code 465/657 | Historical Schott-edited tables associate these constants with FK3 | Probable class; supplier unproved |
| L2, L5 | 1.71740 / 29.5 | SF1 | Schott SF1: 1.71736 / 29.51; residuals 0.00004 / 0.01 | Exact class match |
| L3 | 1.56010 / 47.0 | LLF3/PBL3/FEL3 class, code 560/470 | Historical cross-vendor class values are approximately 1.56013 / 47.0–47.1 | Class match; supplier unresolved |
| L4 | 1.58270 / 46.5 | BAF3 class, code 583/465 | Hikari J-BAF3: 1.582670 / 46.48; Schott N-BAF3: 1.58272 / 46.64 | Exact class match |

The palette follows the patent's stated index strategy: low-index outer meniscuses, high-index dense flints in the negative halves of the cemented components, and intermediate-index positive partners. L3 and L4 both have $\nu_d < 50$ and are therefore flints by dispersion, despite their positive optical power and the “barium” family name associated with BAF3.

No anomalous-partial-dispersion or apochromatic claim is made. The patent supplies only d-line index and Abbe number, which are sufficient to describe an achromatic pairing but not secondary-spectrum behavior.

## Focus Mechanism

The optical cell has no internal focusing group. A view camera focuses by moving the entire lens relative to the film plane, so the only variable spacing in the data file is the final back-focus interval.

At infinity, the independently calculated optical back focal distance is 66.274810 mm from the rear lens vertex to the paraxial image plane. Schneider rounds this to 66.3 mm in its technical table.

This back focal distance must not be confused with flange focal distance. Schneider's Compur 0 mounting entry for the same lens lists a flange focal distance of 99.4 mm. The extra distance arises from the shutter, cells, and principal-plane location. Consequently, the optical BFD alone does not establish that every camera requires a recessed lens board.

The data file needs a finite close-focus endpoint. It uses 1.0 m object-to-image distance as an explicit visualization convention, not a manufacturer minimum. Paraxial conjugate solving gives:

| State | Object distance from first vertex | Back focus | Bellows extension over infinity |
|---|---:|---:|---:|
| Infinity | ∞ | 66.274810 mm | 0 mm |
| 1.0 m visualization endpoint | 850.599329 mm | 76.735454 mm | 10.460644 mm |

The finite state satisfies $850.599329 + 72.665216 + 76.735454 = 1000.000000$ mm.

## Conditional Expressions

The patent's three claims impose dimensional and refractive-index conditions. The following values are evaluated on the unscaled $f' = 100$ prescription; uniform scaling leaves all ratios unchanged.

### Claim 1 — Thick cemented components and compact total length

$$
\sum_{3}^{4} d \ge 0.25\sum_{1}^{9}d,
\qquad
\sum_{6}^{7} d \ge 0.25\sum_{1}^{9}d,
$$

$$
\sum_{1}^{9}d \le 0.85f'.
$$

- Front cemented component: $d_3+d_4=22.11$, versus the minimum $0.25(80.48)=20.12$. It occupies 27.4727% of the track.
- Rear cemented component: $d_6+d_7=21.02$, again versus 20.12. It occupies 26.1183% of the track.
- Total track: $80.48 \le 85.00$.

All three conditions are satisfied.

### Claim 2 — Meniscus-shaped outer air spaces

$$
0.20f' \le d_2+d_8 \le 0.40f'.
$$

The numerical example gives

$$
d_2+d_8=15.22+15.22=30.44,
$$

which is 30.44% of $f'$ and lies inside the permitted 20–40% range.

### Claim 3 — Refractive-index distribution

$$
n_d(L_1,L_6)<1.5,
\qquad
n_d(L_2,L_5)>1.7,
$$

with both cemented-interface index steps greater than 0.12.

- $n_d(L_1)=n_d(L_6)=1.4645<1.5$.
- $n_d(L_2)=n_d(L_5)=1.7174>1.7$.
- Front interface: $|1.7174-1.5601|=0.1573>0.12$.
- Rear interface: $|1.7174-1.5827|=0.1347>0.12$.

All four index tests are satisfied.

## Semi-Diameter and Data-File Implementation

The patent does not publish clear apertures. Semi-diameters were therefore inferred from the drawing rather than treated as tabulated dimensions. The revised profile follows the visible rim-height sequence: large outer menisci, narrower cemented groups, and much smaller stop-facing faces.

Exact spherical intersections and vector Snell refraction were used to check that drawing-led profile. Ray sets were solved through the physical stop at the manufacturer-published limits of $46°$ half-field at f/8 and $50°$ half-field at f/22. The resulting geometry checks are:

- maximum $sd/|R| = 0.893336$;
- maximum front/rear semi-diameter ratio within an element = 1.666667;
- minimum calculated edge thickness = 7.251480 mm;
- largest signed cross-gap sag intrusion = 4.9909% of the associated air gap.

At the viewer's 30° field, the complete sampled pupil clears. At the full-aperture $46°$ field and the stopped-down $50°$ field, the chief ray and a substantial pupil interval remain traceable while extreme samples vignette. This is consistent with Schneider publishing a smaller full-aperture image circle and the full 100° coverage only when stopped down; it should not be read as a factory aperture specification.

The f/8 physical stop semi-diameter is 6.241943 mm. It was obtained from the front-system paraxial matrix so that the entrance-pupil semi-diameter is

$$
\frac{90.3}{2(8)}=5.64375\ \text{mm}.
$$

## Verification Summary

Two independent matrix implementations—surface/translation multiplication and reduced-angle $y$-$n\theta$ tracing—were used for the first-order checks. Exact Snell tracing was used separately for the semi-diameter work.

| Quantity | Independently computed | Source value | Difference |
|---|---:|---:|---:|
| Patent-scale EFL | 100.011317 mm | 100 mm | +0.011317 mm |
| Patent-scale BFD | 73.402337 mm | 73.4 mm | +0.002337 mm |
| Patent-scale vertex track | 80.480000 mm | 80.48 mm | 0 |
| Production-scale EFL | 90.300000 mm | 90.3 mm | 0 |
| Production-scale BFD | 66.274810 mm | 66.3 mm | -0.025190 mm |
| Production-scale $HH'$ | 29.437630 mm | 29.6 mm | -0.162370 mm |
| $92°$ rectilinear image circle | 187.016775 mm | 187.0 mm | +0.016775 mm |
| $100°$ rectilinear image circle | 215.230699 mm | 215.2 mm | +0.030699 mm |

The remaining differences are smaller than the precision with which the patent and manufacturer tables state their values. No radius, thickness, refractive index, or Abbe number in the patent table required correction.

## Sources

1. DE 975 637 C, Günter Klemt / Jos. Schneider & Co. Optische Werke, _Optisches System großer Bildwinkelleistung_, especially prescription table p. 2, claims p. 3, and sectional drawing p. 4.
2. Jos. Schneider & Co. Optische Werke, _Photographic Lenses: Super-Angulon 1:5.6 / Super-Angulon 1:8_, technical tables pp. 2 and 4: <https://www.pacificrimcamera.com/rl/02156/02156.pdf>.
3. SCHOTT, _Optical Glass Datasheet SF1_: <https://media.schott.com/api/public/content/bb675cb9047d468b9e3d75dc05952882>.
4. Hikari Glass / Nikon, _BAF Optical Glass Catalog_ (J-BAF3 and J-BAF4 constants): <https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/baf.html>.
5. SCHOTT, _Optical Glass Datasheet Collection of Inquiry Glasses_ (N-BAF3): <https://media.schott.com/api/public/content/1d833344084d4c21852de588600f6bb1>.
6. Hans Bach and Norbert Neuroth, eds., _The Properties of Optical Glass_, Schott Series on Glass and Glass Ceramics, Springer, DOI 10.1007/978-3-642-57769-7, used for historical glass-code cross-references.
