## Patent Reference and Design Identification

**Patent:** JP1981-119109 A (特開昭56-119109)<br>
**Application Number:** 特願昭55-21884<br>
**Filed:** 23 February 1980<br>
**Published:** 18 September 1981<br>
**Inventor:** Yusuke Nanjo<br>
**Applicant:** Mamiya Koki Co., Ltd.<br>
**Title:** Wide-Angle Zoom Lens (広角ズームレンズ)
**Embodiment analyzed:** Example 1

The data model transcribes Example 1 of JP1981-119109 A and correlates it with the MAMIYA-SEKOR ZOOM E 28-50mm
f/3.5-4.5. The patent describes a retrofocus wide-angle zoom formed by a negative-power front major group and a
positive-power rear major group, with zooming produced by changing the air space between them. Example 1 contains nine
glass elements in eight air-separated lens groups and gives a variable f-number sequence of 1:3.5, 1:3.9, and 1:4.5.

The production correlation is treated as fixed for this analysis, but it is not presented as a manufacturer-confirmed
patent match. The evidence is convergent rather than singular:

1. The Mamiya E/EF lens manual lists the production Zoom 28-50mm f/3.5-4.5 E as an eight-group, nine-element lens,
   exactly matching the patent embodiment's physical count.
2. The patent's wide and tele maximum-aperture values, f/3.5 and f/4.5, coincide with the marketed variable-aperture
   designation. The manual separately describes the 28-50mm and 35-70mm E zooms as variable-maximum-aperture lenses.
3. The patent is normalized to $f=1$ at the wide end. Uniform scaling by 28 gives a computed wide EFL of 28.0021 mm and
   a tele EFL of 47.5505 mm. The wide endpoint therefore coincides closely with the marketed 28 mm value, while the
   tele endpoint remains distinctly shorter than the marketed 50 mm value. Marketing and design focal lengths are kept
   separate in the data file for this reason.
4. The patent gives a wide-end half field of 37.5° and a tele-end half field of 23.8°, corresponding to source full
   fields of 75° and 47.6°. The production manual lists 74°-47°, close to but not identical with the patent values.

The prescription in the data file is uniformly scaled by $s=28$. Every radius, axial spacing, semi-diameter, aperture
coordinate, and back focal distance is therefore 28 times the patent's normalized value. The design is entirely
spherical, so there are no aspheric coefficients requiring the $A_p/s^{p-1}$ scaling transform.

One source-reading correction is material. On the patent's Example 1 table, the decimal point in $r_{10}$ is faint and
the scan can be read as `-29152`. The prescription uses $r_{10}=-2.9152$ in normalized units, or -81.6256 mm after
scaling. This reading reproduces the published focal lengths, back focal distances, rear-group focal length, and
conditional expressions; the alternative -29.152 interpretation does not.

## Optical Architecture

Example 1 is an all-spherical two-major-group retrofocus zoom. Major group I has negative net power and consists of four
single-lens groups: a weak positive biconvex element, two negative menisci, and a final positive meniscus. Major group II
has positive net power and contains a positive biconvex element, a cemented positive-negative doublet, a negative
meniscus, and a final positive biconvex element. The physical count is therefore nine elements in eight lens groups.

Independent paraxial reconstruction from the final data arrays gives an EFL of -41.8908 mm for major group I and
+31.8920 mm for major group II. The opposing major-group powers are the defining wide-angle architecture: the negative
front unit and positive rear unit together produce the long back focal distance characteristic of the patent's
retrofocus form. At every published zoom state the computed back focal distance exceeds the computed EFL, satisfying
the project's retrofocus criterion. The design is not telephoto under the project's separate $TL/EFL<1$ definition.

The patent varies only the air separation between the two major groups within the lens prescription, while its listed
back focal distance also changes with zoom. In the scaled model, the total inter-major-group gap decreases from 22.638 mm
at wide to 13.860 mm at the intermediate state and 3.024 mm at tele. Referenced to a fixed image plane, those published
spacings imply that the front major group shifts 4.746 mm imageward from wide to tele while the rear major group shifts
14.868 mm objectward. This is a computed kinematic interpretation of the source spacings, not a separately published
mechanical travel specification.

The Mamiya lens manual describes the production 28-50mm E as a push-pull zoom with a combined double-action
zooming/focusing ring. That product-level mechanism is compatible with the patent's moving-major-group architecture, but
the manual does not publish internal optical-group travel.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**nd = 1.56883, νd = 56.2. Glass: 569562 — BAC4 catalog equivalent (production supplier unspecified). f = +186.9124 mm.**

L1 is the weak positive lead element of major group I. Its standalone focal length is much longer than those of the
following negative members, so it does not determine the front unit's net sign. Instead, the front group becomes negative
only after the strong divergence introduced farther back. This positive-first arrangement is consistent with the
patent's stated retrofocus front-group construction.

The 569562 coordinate is also used by L6. HOYA BAC4 supplies a coordinate-compatible runtime dispersion curve, but the
patent identifies only the refractive index and Abbe number. The annotation therefore treats BAC4 as a catalog
equivalent and does not assign a historical supplier.

### L2 — Negative Meniscus, Concave to Image

**nd = 1.72000, νd = 50.2. Glass: 720502 — lanthanum crown class (vendor unresolved). f = -28.3040 mm.**

L2 is the strongest standalone negative element in major group I. Its -28.3040 mm focal length makes it the principal
single-element source of divergence in the front unit. The patent's architecture places this negative meniscus directly
after L1, producing the negative front-group behavior required for the retrofocus form.

Its refractive index is high while its Abbe number remains moderate. That combination supplies substantial refractive
power without requiring the very low Abbe number used by some of the later negative elements. No stronger chromatic
claim is made because the source does not provide line-index or partial-dispersion data.

### L3 — Negative Meniscus, Concave to Image

**nd = 1.51823, νd = 59.0. Glass: 518590 — crown class (vendor unresolved). f = -77.5693 mm.**

L3 continues the negative-power sequence in major group I, but its standalone power is appreciably weaker than L2. Its
higher Abbe number distinguishes it from the lower-dispersion-coordinate flint-like members used elsewhere in the
system. In the front-group power distribution, it extends the negative action without duplicating L2's combination of
high refractive index and stronger negative power.

The optical role described here follows from the verified power distribution and element order. The patent does not
assign a separate named aberration-correction function to L3.

### L4 — Positive Meniscus, Convex to Object

**nd = 1.67270, νd = 32.1. Glass: 673321 — dense flint class (vendor unresolved). f = +55.4885 mm.**

L4 is the final element of major group I. Its positive standalone power partially offsets the two preceding negative
menisci, but the complete four-element major group remains negative at -41.8908 mm EFL. The element therefore closes the
front major group without reversing its required retrofocus sign.

Its νd of 32.1 is substantially lower than those of L1-L3. This places a high-dispersion positive element inside a front
unit otherwise dominated by negative power. The Abbe data support discussion of ordinary chromatic balancing, but not
anomalous-dispersion or apochromatic behavior.

### L5 — Biconvex Positive

**nd = 1.77250, νd = 49.6. Glass: 773496 — lanthanum high-index class (vendor unresolved). f = +32.0652 mm.**

L5 begins major group II with strong positive standalone power. This is the first element after the variable inter-group
space and establishes the positive character of the rear major group. In the complete system, the rear group must
convert the divergent output of major group I into the final converging bundle while preserving sufficient back focus
for the SLR format.

The 1.77250/49.6 coordinate is repeated in L9. Modern catalog cross-reference tables contain several glasses at this
coordinate, but that agreement establishes only a material class/equivalence; it does not identify Mamiya's historical
glass supplier.

### L6 + L7 — Cemented Positive-Negative Doublet, Patent Lens Group 6

**L6: nd = 1.56883, νd = 56.2. Glass: 569562 — BAC4 catalog equivalent (production supplier unspecified). f = +19.9776 mm.**<br>
**L7: nd = 1.72342, νd = 38.0. Glass: 723380 — barium dense-flint class (vendor unresolved). f = -16.0211 mm.**

L6 and L7 are individually strong and of opposite sign, but their cemented combination is not equivalent to simply
adding their standalone focal lengths. When traced as the actual cemented group, including the n6→n7 refracting
interface at surface 12, patent lens group 6 has a weak net negative EFL of -157.6138 mm. This distinction between
standalone member power and cemented in-situ behavior is central to interpreting the pair.

The patent explicitly constrains this cemented group's focal length relative to major group II. The verified value
$|f_6|/f_{II}=4.9421$ lies inside the stated 4.7-5.5 interval. The patent associates this condition with preserving the
rear group's front-focus/compactness balance while avoiding excessive negative power in the following portion of the
rear unit.

The cemented interface also carries two of the patent's specific correction controls. The refractive-index difference is
$n_7-n_6=0.15459$, inside the patent's 0.1-0.35 range, which the text associates with Petzval-sum correction. The
interface-radius ratio is $|r_{12}|/f_{II}=0.70773$, inside the specified 0.6-0.9 interval; the patent discusses this
condition in connection with spherical-aberration correction. Surface 12 is modeled correctly as the transition into
L7, with the downstream element owning the cemented junction.

### L8 — Negative Meniscus, Concave to Image

**nd = 1.75520, νd = 27.5. Glass: 755275 — dense flint class (vendor unresolved). f = -43.8747 mm.**

L8 supplies a distinct negative stage after the cemented sixth lens group. Its νd of 27.5 is the lowest Abbe number in
the prescription, while its standalone focal length remains substantially weaker in magnitude than the positive and
negative members of the cemented pair.

The patent specifically constrains the rear-surface radius of this element, $r_{15}$. The verified
$r_{15}/f_{II}=0.72608$ lies inside the 0.65-0.85 range. The patent connects this condition with the balance among
astigmatism, distortion, and coma; it notes that moving beyond either bound degrades that balance in different ways.
This is therefore one of the few element-local aberration roles stated directly by the patent rather than inferred from
power alone.

### L9 — Biconvex Positive

**nd = 1.77250, νd = 49.6. Glass: 773496 — lanthanum high-index class (vendor unresolved). f = +34.7531 mm.**

L9 is the final positive element of major group II. It follows L8's negative meniscus and restores positive power toward
the image side. Together with L5 and the internally compensated L6/L7 pair, it contributes to the rear major group's
verified +31.8920 mm EFL.

Its material coordinate is identical to L5's. Reusing the same high-index, moderate-dispersion coordinate at both ends
of major group II is a source fact of the prescription; any inference about a common physical melt or vendor would go
beyond the available evidence.

## Glass Identification and Selection

The patent gives only d-line refractive index and Abbe number. It does not name a glass maker, glass trade name,
Fraunhofer C/F/g indices, partial-dispersion ratio, or ΔPgF. The data file therefore stores neutral coordinate/class
labels and deliberately omits nC, nF, ng, and dPgF. No APO or anomalous-partial-dispersion claim follows from the
available source data.

| Coordinate / class | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 569562 — BAC4 catalog equivalent | 1.56883 | 56.2 | L1, L6 | Qualified dispersion proxy; supplier unspecified |
| 720502 — lanthanum crown class | 1.72000 | 50.2 | L2 | High-index, moderate-dispersion crown coordinate |
| 518590 — crown class | 1.51823 | 59.0 | L3 | Lower-index, higher-Abbe crown coordinate |
| 673321 — dense flint class | 1.67270 | 32.1 | L4 | High-dispersion positive-element coordinate |
| 773496 — lanthanum high-index class | 1.77250 | 49.6 | L5, L9 | High-index rear-group positive-element coordinate |
| 723380 — barium dense-flint class | 1.72342 | 38.0 | L7 | Negative member of cemented group 6 |
| 755275 — dense flint class | 1.75520 | 27.5 | L8 | Lowest-Abbe coordinate in the design |

The seven coordinate pairs span νd = 27.5 to 59.0 and are distributed across both positive and negative elements. That
spread is consistent with conventional primary chromatic balancing in an all-spherical photographic zoom. It is not,
by itself, evidence of anomalous partial dispersion or apochromatic correction.

Modern catalog cross references support the neutrality of the code-based labeling. For example, the 1.77250/49.60
coordinate appears in current cross-reference data as CDGM H-LaF50B, Hoya TAF1, Schott N-LAF34, and OHARA S-LAH66.
Those equivalents validate the optical coordinate but do not establish which material Mamiya actually purchased for
the historical lens.

## Focus Mechanism

The patent embodiment publishes infinity-focus zoom states only. It gives no close-focus spacing table, focus-group
travel, image magnification at close focus, or other optical constraint from which a unique close-focus prescription can
be reconstructed. The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`: every close member of every variable-gap
pair is identical to its corresponding infinity value.

The production lens manual specifies a minimum focusing distance of 2 ft / 0.6 m and describes a combined
zooming/focusing ring. It also states that the push-pull 28-50mm zoom reaches its close focusing distance without a
separate special close-focusing mechanism. These are product-level mechanical facts, not a published internal optical
focus prescription. Accordingly, `closeFocusM: 0.6` is retained as catalog metadata while the optical model remains at
the patent's published infinity states.

No focus travel, close-focus EFL, close-focus pupil geometry, or close-focus aberration behavior is inferred in this
analysis.

## Aperture Stop and Clear-Aperture Model

The patent's Figure 1 draws the iris in the variable d8 air space immediately object-side of major group II, but the
Example 1 table does not supply a numerical stop coordinate or stop diameter. The data model therefore inserts exactly
one `STO` at an inferred position 0.0500 normalized unit before surface r9, equivalent to 1.4000 mm after the ×28 scale.
This is a modeling inference from the drawing rather than a source-published dimension.

The stored `STO.sd` of 7.323855 mm is the wide-end base radius associated with the inferred stop position and the
published f/3.5 state. Independent paraxial calculation gives required stop radii of 7.32385, 7.13275, and 7.19920 mm for
the source f-number sequence at wide, intermediate, and tele states. Because the patent does not disclose the iris
mechanism well enough to choose a unique physical stop law, the authoritative wide-open aperture description in the data
file is the source sequence `nominalFno: [3.5, 3.9, 4.5]`, not a claim that one recovered stop diameter exactly generates
all three states.

The patent also publishes no clear semi-diameters. The modeled semi-diameters were derived from marginal/chief-ray
containment, the relative silhouette in Figure 1, and the current geometric validity constraints. A 600-dpi review of
the supplied Figure 1 scan supports 7.0 mm rims for L5-L7, preserving the visibly narrower central rear cluster. These
values are model geometry, not source transcription. The final model preserves positive edge thickness, remains below the current
rim-slope limit, and keeps cross-gap sag intrusion below the permitted shared-gap fraction at every defined zoom state.
Full-field rays can vignette naturally at ordinary air-separated element boundaries; the validated default 0.6-field
bundle remains contained.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical surface appears in the Example 1 active
prescription, and none is added to the model.

## Conditional Expressions

The patent supplies four inequalities that tie the rear-group geometry and material choices to its stated correction
strategy. Using the final scaled data file does not change the dimensionless ratios.

| Patent condition | Verified value | Result | Patent-described purpose |
|---|---:|---|---|
| $4.7f_{II}<|f_6|<5.5f_{II}$ | $|f_6|/f_{II}=4.94212$ | Pass | Rear-group power and compactness/front-focus balance |
| $0.1<n_7-n_6<0.35$ | 0.15459 | Pass | Petzval-sum correction at the cemented pair |
| $0.6f_{II}<|r_{12}|<0.9f_{II}$ | $|r_{12}|/f_{II}=0.70773$ | Pass | Spherical-aberration balance at the cemented interface |
| $0.65f_{II}<r_{15}<0.85f_{II}$ | $r_{15}/f_{II}=0.72608$ | Pass | Balance of astigmatism, distortion, and coma |

The computed rear-major-group focal length is +31.89196 mm and the cemented sixth lens group's focal length is
-157.61379 mm. These are in-situ group results. They should not be confused with the standalone focal lengths of L6
(+19.9776 mm) and L7 (-16.0211 mm), which are calculated for each physical element in air.

## Verification Summary

Independent sequential height/reduced-angle tracing and an independently assembled ABCD matrix agree to machine
precision for all three published zoom states. The source-scaled focal and back-focus values are reproduced within the
0.014 mm tolerance implied by the patent's printed precision.

| State | Source zoom anchor | Computed EFL | Nominal f/# | Source BFD | Computed BFL |
|---|---:|---:|---:|---:|---:|
| Wide | 28.000 mm | 28.00207 mm | 3.5 | 37.716 mm | 37.70939 mm |
| Intermediate | 34.328 mm | 34.31569 mm | 3.9 | 42.504 mm | 42.51602 mm |
| Tele | 47.544 mm | 47.55047 mm | 4.5 | 52.584 mm | 52.59181 mm |

The surface-by-surface Petzval sum, evaluated as $\phi/(n n')$, is +0.002887465 mm⁻¹ after scaling. This numerical sum is
reported in the project's sign convention without assigning a standalone Petzval-radius interpretation.

The semi-diameter model also survives the relevant independent geometry checks: minimum element edge thickness is
0.91033 mm, maximum spherical rim angle is 56.9565°, and the largest positive cross-gap intrusion ratio is 0.83982,
below the 0.90 modeled limit. The design is all-spherical, so conic-height and asphere-departure checks do not apply.

These computed quantities verify internal consistency of the modeled Example 1 prescription. They do not convert the
patent's normalized 47.55 mm tele endpoint into the production lens's marketed 50 mm endpoint, and they do not add an
unpublished close-focus or pupil prescription.

## Sources and References

- JP1981-119109 A (特開昭56-119109), *Wide-Angle Zoom Lens* (広角ズームレンズ), Example 1, supplied patent publication,
  pp. 33-36.
- Mamiya, *Mamiya-Sekor E and Mamiya-Sekor EF Lenses* instruction manual, especially the lens specification table and
  push-pull zoom instructions: <https://www.cameramanuals.org/mamiya_pdf/mamiya-sekor_ze_lenses.pdf>.
- Mamiya, *ZE-2 Quartz* instruction manual, specification section for 24×36 mm picture format and Mamiya-Sekor E-series
  lens compatibility: <https://www.butkus.org/chinon/mamiya/mamiya_ze-2/mamiya_ze-2.pdf>.
- CDGM, optical-glass cross-reference database, including the 1.77250/49.60 coordinate and cross-vendor equivalents:
  <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=25&url=database>.
- SCHOTT, optical-glass technical/catalog documentation for the international six-digit glass-code convention:
  <https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c>.
