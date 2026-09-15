# LEICA SUMMICRON-C 40mm f/2 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** DE 2 222 892 A1
**Filed:** 10 May 1972
**Published:** 22 November 1973
**Inventors:** Georg Knetsch; Hermann Desch; Heinz Marquardt; Walter Watz
**Applicant:** Ernst Leitz GmbH, 6330 Wetzlar
**Title:** *Photographisches Objektiv*
**Embodiment analyzed:** Example 3 = A1 Anspruch 4; the same prescription is renumbered as claim 3 in DE 2 222 892 C3

The A1 publication describes a six-lens Gauss-type photographic objective intended for the 24 × 36 mm format, with a
published aperture ratio of 1:2 and a half image angle of ±28.4°. Its numerical prescriptions are normalized to
$f=1.0$. The A1 text states that the worked embodiments occur in claims 2 through 5 in order; the third worked example is
therefore A1 claim 4, the table on PDF page 7 beginning with $r_1=+0.59994$. This mapping is important because the
neighboring table beginning with $r_1=+0.64442$ is the fourth worked embodiment, not the selected one. (DE 2 222 892 A1,
PDF pp. 3 and 7.)

The data model applies a uniform scale of 40.0 to every patent-derived length. The resulting Gaussian effective focal
length is 39.998699 mm, while the product remains described by its marketed 40 mm focal length. This is a modeling
normalization, not a claim that the patent itself publishes millimeter dimensions for the example.

The attribution to the production SUMMICRON-C 1:2/40 mm is a strong correlation, not manufacturer confirmation.
The convergent evidence is:

1. the patent applicant and the product brochure are both Ernst Leitz GmbH;
2. the normalized patent prescription scales directly to the marketed 40 mm focal length;
3. both patent and product specify f/2;
4. both describe six lens elements;
5. the patent publishes a 56.8° full field and the brochure gives 57°; and
6. the patent explicitly targets 24 × 36 mm, with filing/publication immediately preceding the 1974 LEICA CL brochure.

No located manufacturer document explicitly states that DE 2 222 892 Example 3 is the production SUMMICRON-C 40 mm
f/2. The production correlation should therefore not be read as a documented factory patent assignment.

The manufacturer brochure describes the LEICA CL bayonet as being of the LEICA M type, but separately states that the
SUMMICRON-C 1:2/40 mm cannot be used on a LEICA M. The data file consequently records the 135 full-frame image format but
leaves the mount taxonomy unset rather than collapsing that historical compatibility caveat into an ordinary Leica-M
classification.

## Optical Architecture

The selected prescription is an all-spherical six-element, four-group Gauss-type design. From object to image, its
physical grouping is:

- G1: L1, a positive singlet;
- G2: D1, the cemented L2/L3 meniscus;
- G3: D2, the cemented L4/L5 meniscus; and
- G4: L6, a positive rear singlet.

The aperture stop lies in the large air space between surfaces 5 and 6, separating the two cemented menisci. The patent
schematic shows the diaphragm inside this gap but does not dimension its exact axial position. The implemented model
therefore splits the scaled 9.6192 mm gap at its midpoint, 4.8096 mm on each side of `STO`. This is a disclosed modeling
choice and not a source-published stop coordinate. (DE 2 222 892 A1, PDF p. 10, schematic.)

Computed from the final data, the four air-spaced groups have a positive / negative / negative / positive power sequence.
The cemented D1 and D2 groups have net powers of -0.00983679 mm⁻¹ and -0.00969438 mm⁻¹ respectively. Treated as
isolated air-to-air subsystems, the complete front and rear blocks have equivalent powers of +0.01522545 mm⁻¹ and
+0.02180382 mm⁻¹. These subsystem powers are not in-situ contributions to the assembled lens: for a unit-height axial
paraxial ray in the complete system, the front and rear surface sets contribute +0.01522545 mm⁻¹ and +0.00977536 mm⁻¹,
which sum to the total system power +0.02500081 mm⁻¹. Standalone-element, cemented-group, isolated-subsystem, and in-situ
quantities are therefore kept distinct.

The patent specifically requires a strong front portion: its aggregate front-surface power must exceed $0.6/f$, and the
front refracting surfaces are described as hollow toward the stop. The implemented prescription satisfies that condition.
The patent also constrains the rear cemented meniscus through index and dispersion ordering and limits the last-surface
radius, total construction length, back focal distance, and field angle. Those conditions are evaluated explicitly below.

No surface is aspherical. There are no diffractive, folded, mirror, or perspective-control paths in the selected example.

## Element-by-Element Analysis

### L1 — Positive Meniscus

$n_e=1.81527$, $\nu_e=45.06$. Glass: **Unmatched** native e-line coordinate; supplier unresolved. Standalone
$f=+50.626$ mm.

L1 is the front positive singlet and the first air-spaced group. Its standalone power is +0.0197528 mm⁻¹. The patent's
front-block power condition applies to the complete pre-stop system rather than to L1 alone, so no particular aberration
correction is assigned to this element from power sign by itself.

### L2 — Positive Member of Front Cemented Meniscus D1

$n_e=1.81527$, $\nu_e=45.06$. Glass: **Unmatched** native e-line coordinate; supplier unresolved. Standalone
$f=+28.443$ mm.

L2 uses the same native e-line coordinate pair as L1 and is the positive member of D1. Its standalone power is
+0.0351577 mm⁻¹. Because the next element is cemented directly to it, the behavior of D1 is better represented by the
combined cemented power than by either standalone element in isolation.

### L3 — Negative Member of Front Cemented Meniscus D1

$n_e=1.79180$, $\nu_e=25.87$. Glass: **SF56A class**, SCHOTT coordinate-equivalent; supplier and melt unproven.
Standalone $f=-18.467$ mm.

L3 is the stronger negative member of D1, with standalone power -0.0541510 mm⁻¹. The cemented L2/L3 assembly has a net
power of -0.00983679 mm⁻¹ in the final scaled prescription. Its stop-facing surface is strongly curved and forms the
front boundary of the large central air space.

### L4 — Negative Member of Rear Cemented Meniscus D2

$n_e=1.64062$, $\nu_e=35.09$. Glass: **S-TIM6**; coordinate-compatible spectral proxy, supplier unconfirmed.
Standalone $f=-40.667$ mm.

L4 is the stop-side negative member of D2. Its standalone power is -0.0245898 mm⁻¹. The patent requires the stop-side
member of this rear cemented meniscus to have a lower refractive index than the image-side member; the selected values
satisfy $1.64062<1.69232$. The A1 publication contains a separate Abbe-number inequality error for the same pair, discussed
under the conditional expressions below.

### L5 — Positive Member of Rear Cemented Meniscus D2

$n_e=1.69232$, $\nu_e=49.18$. Glass: **Unmatched** native e-line coordinate; supplier unresolved. Standalone
$f=+75.403$ mm.

L5 is the image-side positive member of D2. Its standalone power is +0.0132620 mm⁻¹; together with L4 the cemented group
has net power -0.00969438 mm⁻¹. The corrected C3 text places the stop-side Abbe number below the image-side value, which
matches the selected table's $35.09<49.18$ ordering.

### L6 — Rear Positive Meniscus

$n_e=1.64304$, $\nu_e=59.85$. Glass: **N-LAK21 class**, SCHOTT near-exact coordinate match; supplier and melt
unproven. Standalone $f=+35.694$ mm.

L6 is the final positive singlet nearest the image plane, with standalone power +0.0280162 mm⁻¹. Its front surface is
nearly plane at the implemented scale, while its final surface supplies the stronger curvature. The last-surface radius
also participates directly in one of the patent's construction inequalities.

## Glass Identification and Selection

The patent tabulates $n_e$ and $\nu_e$, not d-line $n_d$ and $\nu_d$. The data therefore preserves the source coordinate
system with `indexReference: "e"`; the historical `nd` and `vd` field names in the schema contain native e-line values for
this lens. No d-line conversion has been imposed.

| Element | Patent index / Abbe | Reference | Runtime spectral model | Index residual / Abbe residual |
|---|---|---|---|---|
| L1 | 1.81527 / 45.06 | e-line | Unmatched; patent-coordinate fallback | No compatible catalog curve |
| L2 | 1.81527 / 45.06 | e-line | Unmatched; patent-coordinate fallback | No compatible catalog curve |
| L3 | 1.79180 / 25.87 | e-line | SF56A; supplier-neutral proxy | -0.000001 / 0.003 |
| L4 | 1.64062 / 35.09 | e-line | S-TIM6; supplier-neutral proxy | -0.000008 / 0.035 |
| L5 | 1.69232 / 49.18 | e-line | Unmatched; patent-coordinate fallback | No compatible catalog curve |
| L6 | 1.64304 / 59.85 | e-line | N-LAK21; supplier-neutral proxy | -0.000003 / 0.008 |

The class labels are catalog comparisons, not evidence that Leitz used the named modern vendor melts in production.
Likewise, candidate catalog line indices and partial-dispersion data are not copied into the prescription. The final data
contains no `nC`, `nF`, `ng`, or `dPgF` fields, so the analysis makes no apochromatic or anomalous-partial-dispersion claim.
The unmatched entries remain explicit rather than being forced to a speculative glass name.

## Focus Mechanism

The LEICA CL brochure states that the production SUMMICRON-C focuses helically from infinity to 0.8 m. The selected patent
example, however, publishes only one prescription state and no finite-focus spacing table. A minimum focusing distance by
itself does not determine whether the optical cell translates rigidly, whether any internal spacing changes, or what the
close-focus back focal distance would be.

The implemented status is therefore **NO_INTERNAL_RECONSTRUCTION**. `closeFocusM: 0.8` is retained as production metadata,
but the data file has no focus `var` entries. No close-focus internal motion, breathing value, or finite-focus optical
performance is inferred from the brochure specification.

## Conditional Expressions and Source Discrepancy

The patent places several explicit constraints on the design. With the source normalization scaled by exactly 40.0, the
final implemented prescription gives the following checks:

| Patent condition | Verified implemented value | Result |
|---|---:|---|
| Front-block power $>0.6/f$ | 0.01522545 mm⁻¹ > 0.01500000 mm⁻¹ | Pass |
| Rear stop-side index $<$ image-side index | 1.64062 < 1.69232 | Pass |
| Rear Abbe relation as printed in A1 | 35.09 > 49.18 | **Fail as printed** |
| Rear Abbe relation corrected in C3 | 35.09 < 49.18 | Pass |
| $|r_{10}|<0.635f$ | 22.8904 mm < 25.4000 mm | Pass |
| Construction length $<1.25f$ | 48.2381 mm < 50.0000 mm | Pass |
| Back focal distance $<0.6f$ | 23.6397 mm < 24.0000 mm | Pass |
| Full image angle $\ge 55°$ | 56.8° | Pass |

The A1 Abbe-number wording is a genuine source contradiction, not a numerical mismatch to be hidden by tolerance. A1 says
that the stop-side member has the greater Abbe number, whereas every selected-table value gives the opposite ordering.
The later corrected DE 2 222 892 C3 explicitly changes the relation to “smaller,” consistent with $35.09<49.18$. The
implemented data preserves the table values and treats C3 as the documentary correction to the inequality, not as a
replacement prescription. (DE 2 222 892 A1, PDF p. 3; DE 2 222 892 C3, corrected condition b.)

## Verification Summary

All numerical values in this section are recomputed from the final `LeicaSummicronC40mmf2.data.ts` prescription rather
than from a separate intended copy. The scaled infinity model gives an EFL of 39.998699 mm, a BFD of 23.639671 mm from
the surface-10 vertex, a 24.5984 mm internal vertex track, and a 48.238071 mm surface-1-to-image construction length. The
surface-by-surface Petzval sum is +0.004860293 mm⁻¹.

The physical diaphragm diameter is not published. The model places the stop at the inferred midpoint of the central air
gap and calibrates its semi-diameter to 6.550351 mm so that the paraxial entrance-pupil semi-diameter is 9.999675 mm and
the modeled f-number is 2.000000. Agreement with f/2 is therefore a calibration result, not independent evidence for the
production diaphragm diameter.

The patent also supplies no clear semi-diameters. The implemented surface semi-diameters are modeled from exact spherical
ray envelopes through ±17.04° (60% of the published half-field), with at least 8% radial clearance and upward rounding to
0.01 mm. The geometry checks retain positive edge thicknesses; the smallest modeled edge thickness is 0.136911 mm at L1,
and the steepest modeled rim slope is 60.512° at surface 3, below the documented approximately 64.2° default limit.

At the full published ±28.4° field, the modeled chief rays clear the authored apertures. Coarse full-pupil sampling at
each field extreme yields 66 clear rays out of 101, with the remainder aperture-clipped or geometrically missing. The
modeled semi-diameters should therefore be read as conservative visualization/tracing apertures, not measured production
clear apertures or a claim of an unvignetted f/2 corner pupil.

## Sources / References

1. Deutsches Patentamt, **DE 2 222 892 A1**, *Photographisches Objektiv*, filed 10 May 1972, published 22 November 1973,
   Ernst Leitz GmbH. Supplied 10-page scan; prescription and embodiment mapping from PDF pp. 2–7, schematic on PDF p. 10.
2. Deutsches Patentamt, **DE 2 222 892 C3**, corrected publication, 24 February 1977. Used only for the corrected rear
   Abbe-number inequality and the corroborating image-side back focal distance $s'=0.5910$.
   https://patents.google.com/patent/DE2222892C3/de
3. Ernst Leitz GmbH, **LEICA CL brochure**, Notice 112-92a/frz., I/74/GY/g. Used for SUMMICRON-C 1:2/40 mm product
   specifications, six-element count, 57° field, helical focus to 0.8 m, and CL bayonet wording.
   https://summilux.net/documents/LeicaCL-brochure.pdf
4. SCHOTT, **Optical Glass Collection**, June 2025 collection. Used for the SF56A and N-LAK21 native e-line coordinate
   comparisons. https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
5. CDGM Glass Co., Ltd., **Optical Glass Database**. Used for the historical 636353/F6 class cross-reference.
   https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
6. Authoritative catalog entry points additionally checked during the glass audit: OHARA Optical Glass Catalog,
   https://oharacorp.com/glass-catalog/ ; HOYA Optics Division,
   https://www.hoya-opticalworld.com/english/datadownload/index.html ; HIKARI Optical Glass,
   https://www.hikari-g.co.jp/optical_glass/catalog/ ; SUMITA Optical Glass,
   https://www.sumita-opt.co.jp/en/download/ .
