## Patent Reference and Design Identification

**Patent:** US 3,459,469
**Priority:** November 4, 1965 (Japan 40/67,249)
**Filed:** November 2, 1966
**Granted:** August 5, 1969
**Inventor:** Yasuo Takahashi
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.
**Title:** *Lens System*
**Embodiment analyzed:** Example 1, the numerical example stated at $F = 1000$ mm

The data model represents the **PENTAX SUPER-TAKUMAR 135mm f/2.5** using the job-card-selected correlation to US
3,459,469 Example 1. The patent itself does not name the production lens, so this identification is a production
correlation rather than a manufacturer-confirmed patent assignment.

Several independent features converge on that correlation:

1. The patent describes a five-element, four-group telephoto objective, matching the five-element construction stated
   for the Super-Takumar 135mm f/2.5 in period Asahi Optical literature.
2. The patent aberration plots extend to $\omega = 9^\circ$, corresponding to an 18° full field. Period Asahi Optical
   literature also specifies an 18° angle of view for the production lens.
3. Uniformly scaling the patent example from $F = 1000$ mm by $s = 135/1000 = 0.135$ produces a computed EFL of
   **134.4983305 mm**, consistent with the marketed 135 mm focal length without altering the rounded patent
   prescription to force an exact 135.000 mm result.
4. The data model's aperture is **f/2.4907098**, derived from the disclosed stop/pupil reconstruction, while the
   production aperture remains the marketed **f/2.5**.
5. Period Asahi Optical literature gives a 1.5 m minimum focusing distance; that value is used only to constrain the
   modeled close-focus state because the patent publishes no focusing table.

The patent radii and axial spacings are uniformly scaled by 0.135. Back focus is recomputed from the scaled
prescription, while the inferred semi-diameters, stop geometry, and reconstructed focus travel are authored directly in
the resulting scaled coordinate system. The design is entirely spherical or plane, so there are no aspheric coefficients
to transform. No sensor cover plate, filter, inactive dummy plane, flare-cutter plane, or mechanical surface is
introduced into the sequential optical model, and no omitted plate
requires an air-equivalent rear-spacing correction.

The numerical transcription follows the rendered patent table on p. 3. No patent numerical error is corrected in the
data model; OCR artifacts were resolved against the rendered page rather than treated as source changes.

## Optical Architecture

The lens is a four-group telephoto objective with group power sequence **positive-positive-negative-positive**. The
first group is a cemented pair made from a negative L1 and positive L2; the pair is positive as a net group. L3 is a
separate positive meniscus, L4 is a strong plano-concave negative element, and L5 is a positive rear meniscus. This is
also the architecture described in the patent text, which specifically states that L1 and L2 are cemented into a unit
that functions as a single positive lens.

The scaled model has an EFL of **134.4983305 mm**, an infinity back focal distance of **42.7172941 mm**, and a
front-vertex-to-image track of **122.9477941 mm**. Its $TL/EFL = 0.91412134$, so it satisfies the project's strict
telephoto criterion. Its $BFD/EFL = 0.31760464$, so it is not retrofocus.

The principal architectural feature is the separation between the forward positive power and the strong negative L4.
The patent states that increasing the L3-to-L4 spacing raises telephotographic efficiency, while its first two
conditional power constraints keep that increase compatible with the intended chromatic and astigmatic balance. The
rear positive L5 follows the diaphragm and completes the four-group power distribution.

The patent specifies only that an unillustrated diaphragm lies between L4 and L5. The data file therefore inserts one
inferred `STO` in that published region, 4.000 mm behind surface 7 and 17.600 mm before surface 8. Its
**10.7191680 mm** physical semi-diameter is solved from the modeled pupil geometry so that the scaled 27.000 mm
entrance-beam semi-height corresponds to **f/2.4907098**. Neither the stop station nor its diameter is a published
patent dimension.

The patent also publishes no clear apertures. The stored semi-diameters are modeling inferences constrained by the
on-axis marginal ray, the 9° chief ray, the patent optical section, and the period 58 mm filter envelope. A direct
Figure 1 proportion audit showed that the ray-envelope-only L4 and L5 outlines were visibly undersized relative to the
front section, so their surfaces were enlarged to restore the patent section's rear-group proportions. They are not
measurements of production clear apertures.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.74077, νd = 27.7. Glass: 741278 class (vendor unspecified). f = -145.682718 mm.**

L1 is the negative front member of the cemented first group. Its rear surface is the shared cemented interface with L2.
The patent assigns the first element negative power and explains that the cemented first group is deliberately arranged
to be strongly corrected on the chromatic side so that it compensates the undercorrected tendency of the following
positive group.

The focal length stated above is the standalone thick-element focal length in air. It is not the in-situ contribution of
L1 inside the cemented pair and should not be interpreted as the focal length of G1.

### L2 — Positive Meniscus

**nd = 1.64000, νd = 60.2. Glass: 640602 class (vendor unspecified). f = +82.051163 mm.**

L2 is the positive member cemented directly to L1. The shared interface is surface 2, and the data file assigns that
junction to downstream element L2 in accordance with the current prescription convention. When L1 and L2 are evaluated
together as a cemented unit in air, their computed net EFL is **+193.134658 mm**. This positive net group behavior is
distinct from either element's standalone focal length.

The large difference between the two stored Abbe numbers, νd = 27.7 for L1 and νd = 60.2 for L2, is consistent with
the patent's stated use of the cemented pair to manage longitudinal chromatic balance. The data does not identify a specific
historical glass vendor for either element.

### L3 — Positive Meniscus

**nd = 1.61025, νd = 56.5. Glass: SUMITA SK1 catalog equivalent; production supplier unspecified. f = +108.206555 mm.**

L3 forms the second air-separated group. It adds positive power ahead of the long L3-to-L4 separation that the patent
uses as part of the telephoto configuration. The patent describes the first cemented group as compensating chromatic
undercorrection associated with this following positive section; the present analysis therefore treats that statement as
a property of the patent's system-level balancing strategy rather than assigning a vendor-specific dispersion behavior
to L3.

The patent pair is an exact match to the legacy SK1 coordinate published in an archival SUMITA optical-glass table.
An independently retained legacy catalog record also publishes the six-term Schott-form polynomial. Evaluating it gives
`nC = 1.606981`, `nd = 1.610249`, `nF = 1.617781`, and `ng = 1.623700`, reproducing the archival manufacturer's
`1.60698 / 1.61025 / 1.61778 / 1.62370` row. The data therefore uses SUMITA SK1 as a coefficient-backed optical
equivalent while continuing to leave the production supplier and historical melt unspecified.

### L4 — Plano-Concave Negative

**nd = 1.72000, νd = 43.7. Glass: 720437 class (vendor unspecified). f = -37.500000 mm.**

L4 is the strongest negative standalone element in the prescription and forms the third group. Its plane front face and
strongly curved rear face create the negative rear power that gives the system its compact telephoto behavior. The
patent's conditions involving the rear radius of L4 and the front radius of L5 are tied to coma, astigmatism, and
distortion control; those constraints are system conditions and should not be reduced to an isolated claim about L4's
standalone focal length.

The modeled aperture stop lies after this element, but its exact position is inferred because the patent gives only the
L4-to-L5 region for the diaphragm.

### L5 — Positive Meniscus

**nd = 1.72000, νd = 43.7. Glass: 720437 class (vendor unspecified). f = +79.792031 mm.**

L5 is the positive rear group following the diaphragm. Its front surface has substantially greater curvature than its
rear surface, matching the patent's qualitative description. Together with L4, it completes the negative-positive rear
power pairing used by the telephoto arrangement.

L5 shares the same stored nd/νd coordinate pair as L4, but the patent does not identify a glass manufacturer. The data
therefore records the same generic coordinate class for both without claiming a vendor-specific historical material.

## Glass Identification and Selection

The patent publishes nd and νd coordinates but no glass names, line-index tables, or glass manufacturer. The data file
therefore preserves coordinate classes rather than assigning modern vendor names where several catalogs provide close
or equivalent points.

| Coordinate class | nd | νd | Elements | Data treatment |
|---|---:|---:|---|---|
| 741278 class | 1.74077 | 27.7 | L1 | Vendor unspecified |
| 640602 class | 1.64000 | 60.2 | L2 | Vendor unspecified |
| SUMITA SK1 catalog equivalent | 1.61025 | 56.5 | L3 | Exact coordinate and spectral-line match; production supplier unspecified |
| 720437 class | 1.72000 | 43.7 | L4, L5 | Vendor unspecified |

Cross-vendor comparison does not justify a historical production-vendor assignment for any element. Exact or near-exact
coordinate examples differ by vendor and catalog generation. L3 is the one defensible coefficient-backed exception:
SUMITA's archival SK1 row reproduces both the patent coordinate and the independently published C/d/F/g line indices.
The catalog-equivalent wording supplies its measured dispersion curve without claiming that Asahi used SUMITA glass.

No `nC`, `nF`, `ng`, or `dPgF` values are authored directly on the elements. L3 instead receives the cross-checked SK1
catalog polynomial, while the other elements use their compatible catalog equivalents or retained patent fallbacks.
The analysis makes no APO, ED, or anomalous-partial-dispersion claim; chromatic interpretation remains limited to the
patent's description of power and Abbe-number balancing among the groups.

## Focus Mechanism

The focus state is **`CONSTRAINED_RECONSTRUCTION`**. US 3,459,469 publishes no focusing table, no close-focus spacing,
and no internal or floating-group movement. The data model therefore does not infer an internal focusing mechanism.

For visualization, all internal optical spacings remain fixed and focusing is represented as whole-unit translation
relative to a fixed image plane. In the stored sequential coordinates, that is equivalent to changing only the final
air gap after surface 9:

| State | R9-to-image spacing | Interpretation |
|---|---:|---|
| Infinity | 42.7172941 mm | Computed paraxial BFD |
| 1.5 m MFD | 57.4634638 mm | Constrained reconstructed close-focus state |

The difference, **14.7461697 mm**, is the equivalent forward travel of the complete lens with a fixed film plane. The
1.5 m object-to-image constraint yields a computed lateral magnification of **-0.10963831**. These values describe the
model reconstruction, not a patent-published focusing cam or a documented production mechanical travel.

The 1.5 m minimum focusing distance comes from period Asahi Optical product literature. No motor, helicoid pitch, or
other drive-system detail is asserted because those quantities are outside the patent prescription and the validated
data file.

## Conditional Expressions

US 3,459,469 gives five conditions governing cumulative power, the rear L4 radius, the front L5 radius, and the L3-to-L4
air separation. Uniform scaling preserves these dimensionless relationships. Evaluated against the final scaled
TypeScript arrays with $F = 135$ mm, all five conditions pass:

| Condition | Scaled evaluation | Result |
|---|---|---|
| I | $64.285714 < F_{1,2,3}=71.075557 < 84.375000$ mm | PASS |
| II | $192.857143 < F_{1,2,3,4}=317.760950 < 385.714286$ mm | PASS |
| III | $0.17F=22.95 < R_7=27.0$ mm | PASS |
| IV | $0.3F=40.5 < R_8=54.635985$ mm | PASS |
| V | $24.3 < l_2=29.9997 < 40.5$ mm | PASS |

The cumulative focal lengths in conditions I and II are in-situ cumulative-system quantities. They are not the same as
the standalone focal lengths of L1-L4 or the standalone net focal length of the L1/L2 cemented pair.

## Verification Summary

Independent sequential y-ν tracing and ABCD accumulation from the final TypeScript arrays give the same first-order
system. The scaled EFL is **134.4983305 mm** and the infinity BFD is **42.7172941 mm**. At the patent's 9°
maximum plotted
half-field, the paraxial image height is **21.3024428 mm**, compared with a 36 × 24 mm frame half diagonal of
**21.6333077 mm**.

Petzval curvature was recomputed surface by surface as $\phi/(n n')$. After multiplication by the recomputed EFL, the
individual contributions reproduce the patent's rounded Seidel-P column with a maximum absolute residual of
**0.00081313**. The scaled Petzval sum is **+6.9452891 × 10^-4 mm^-1**.

The inferred clear-aperture model also passes independent geometry checks: all five elements have positive edge
thickness, the maximum actual spherical rim-slope angle is **37.8022°**, and all shared-band air-gap checks pass the
current 0.90 gap-sag policy. The most restrictive positive intrusion occurs between surface 7 and the inferred stop and
remains below the allowed limit. These are validation results for the authored geometry, not evidence that the inferred
semi-diameters reproduce every production mechanical aperture.

The model contains exactly one stop and no aspheric surfaces. Because the prescription is all-spherical, there is no
conic convention or polynomial scaling to interpret. Independent edge, slope, conic-applicability, and shared-band
cross-gap calculations require **0.0 mm** hidden trim under the current geometry policy.

## Sources and References

1. Yasuo Takahashi, **US 3,459,469, *Lens System***, assigned to Asahi Kogaku Kogyo Co., Ltd., granted August 5,
   1969. The diaphragm statement and architectural description are on p. 2; the numerical example and Seidel table are
   on p. 3.
2. Asahi Optical Co., ***Asahi Pentax Lenses & Accessories — Complete System of Photography***, period manufacturer
   brochure, p. 11. The lens table records the Super-Takumar 135mm f/2.5 as a five-element 35 mm SLR lens with
   18° angle of view, 1.5 m minimum focus, f/22 minimum aperture, and 58 mm filter size; the same page describes the
   42 mm threaded
   Pentax mount.
3. RICOH IMAGING, **Lens Mount Compatibility**, current manufacturer reference classifying Super TAKUMAR lenses as
   screw-mount (`S`) 35 mm lenses: https://www.ricoh-imaging.co.jp/english/products/lens/suit_mount.html
4. OHARA Corporation, **Optical Glass** catalog and current glass-type data, including S-TIH13 and S-BSM-class entries:
   https://oharacorp.com/glass/
5. HOYA GROUP Optics Division, **Optical Glass Data** download: https://www.hoya-opticalworld.com/english/datadownload/
6. Nikon Corporation / HIKARI GLASS CO., LTD., **Optical Glass (J-series)** catalog:
   https://www.nikon.com/business/components/lineup/materials/optical-glass/
7. SCHOTT, **Optical Glass** datasheets and glass-type overview:
   https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
8. CDGM GLASS CO., LTD., **Optical Glass Database**: https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
9. SUMITA OPTICAL GLASS, Inc., archival manufacturer optical-glass table; the SK1 row gives $nd=1.61025$,
   $νd=56.5$: https://web.stanford.edu/class/ee347/SumitaAll.PDF
10. AbbeTrex, **Sumita SK1** legacy glass record; six-term Schott-form dispersion polynomial:
    https://abbetrex.com/glass/sumita/sumita-sk1/
