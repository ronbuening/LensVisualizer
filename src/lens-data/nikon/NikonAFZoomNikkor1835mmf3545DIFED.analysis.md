## Patent Reference and Design Identification

**Patent:** US 2001/0030812 A1
**Application Number:** US 09/800,525
**Filed:** 2001-03-08
**Priority:** JP 2000-070781 (2000-03-14); JP 2001-055060 (2001-02-28)
**Published:** 2001-10-18
**Inventor:** Akiko Furuta
**Applicant/Assignee:** Not stated on the cited US publication
**Title:** *ZOOM LENS SYSTEM*
**Embodiment analyzed:** Example 2

The prescription represented here is Example 2 of US 2001/0030812 A1, correlated to the production
Nikon AI AF Zoom-Nikkor 18-35mm f/3.5-4.5 D IF-ED. The patent and production lens are treated as a
fixed correlation for this analysis; the discussion does not imply that Nikon separately identified
Example 2 as the production prescription.

Several independent characteristics converge on that correlation:

1. The patent describes eleven physical lens elements, L11–L14 and L21–L27, arranged in eight
   air-separated groups. Nikon specifies 11 elements in 8 groups for the production lens.
2. Example 2 contains a 0.1000 mm optical layer on the aspherical front of L12, followed by an
   \(n_d=1.794997\) substrate. Nikon's lens manual specifies one compound aspherical lens element.
   Treating the thin layer and substrate as the two optical media of one physical compound-aspherical
   element is therefore a modeling inference supported by the production specification, although the
   patent does not identify the layer material as resin.
3. The patent focuses by translating the positive front subgroup G2a of G2 toward the image. Nikon
   describes the production lens as using Nikon Internal Focusing.
4. Example 2 publishes a near-focus row labeled \(R=0.33\) m at wide, intermediate, and telephoto
   positions. Nikon specifies a minimum focus distance of 0.33 m.
5. The patent's exact design positions are 18.50037, 25.00067, and 34.00123 mm, with corresponding
   F-numbers 3.59, 4.12, and 4.62. Those design values are kept separate from the marketed
   18–35mm f/3.5–4.5 designation; no uniform scaling is applied.
6. Example 2 gives a 101.84° full field at the wide end, close to Nikon's marketed 100° full-frame
   angle of view.
7. A paraxial trace of the published telephoto near-focus state gives a transverse magnification
   magnitude of approximately 0.148, consistent with Nikon's rounded maximum reproduction of 1/6.7.
   The patent's separate \(d_0\) table inconsistency is discussed under Focus Mechanism.
8. Nikon's product history places the AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED in its 2000 product
   group, contemporaneous with the patent's first 2000 priority filing.

The final model uses Nikon F mount and the 135/full-frame image format. The marketed focal-length
range is stored as 18–35 mm, while the modeled design endpoints are the independently traced
18.500314093 mm and 34.001110167 mm. The small difference between the patent's printed focal-length
rows and the traced values is consistent with the printed precision of the prescription.

Two source discrepancies are carried explicitly rather than silently corrected. First, Example 2
Table 2 prints \(\nu_d=5.30\) for surface 1. The model uses \(\nu_d=45.30\), because the same
\(n_d=1.794997\) material is printed as 45.30 elsewhere in Example 2 and at the corresponding
positions in Examples 1 and 3. Second, the patent prints \(X(14)-X(7)=2.34\) mm for its aspherical
condition, whereas direct evaluation of the printed equation and coefficients gives
2.423006488 mm. The coefficients, not the inconsistent result, govern the model.

No sensor cover, filter, inactive dummy plane, flare-cutter plane, or mechanical component is
included. Example 2 does not require an air-equivalent correction for an omitted rear plate.

## Optical Architecture

Example 2 is a two-main-group negative-positive super-wide zoom. G1 is negative. G2 is positive and
is divided into the positive front subgroup G2a and positive rear subgroup G2b. The aperture stop lies
in air between G2a and G2b. Zooming changes the separation between G1 and G2, while focusing is
performed independently by G2a.

The physical design contains 11 lens elements in 8 air-separated groups:

- **G1:** L11, the physical compound-aspherical L12, L13, and L14.
- **G2a:** cemented L21 + L22, forming the inner-focus subgroup.
- **G2b:** cemented L23 + L24, cemented L25 + L26, and L27.
- **Stop:** between G2a and G2b at patent surface 13, stored as `STO`.

The data model contains 12 `elements` entries rather than 11 because the 0.1000 mm compound-asphere
layer and its L12 substrate are optically distinct media. This is a numerical representation of one
physical L12 element, not an assertion that the production lens contains a twelfth physical lens.

Independent group matrices give focal lengths of approximately −29.695190 mm for G1,
+82.843775 mm for G2a, and +63.119798 mm for G2b. These are group-level net powers with their
internal spacings preserved; they are not interchangeable with the standalone focal lengths of the
individual glass elements and do not, by themselves, describe each group's in-situ contribution to
the complete zoom.

At the three infinity zoom positions, the independently traced back focal distances are
38.294659, 46.497430, and 57.855287 mm, all greater than their corresponding EFLs. By the project's
strict definition the design is therefore retrofocus at all three modeled zoom positions. Its
surface-1-to-image tracks are much longer than the EFL, so it is not a telephoto design by the
project's `TL/EFL < 1` criterion.

The principal architectural choice is the combination of a strongly negative front group with a
positive rear system that preserves SLR mirror clearance, while a comparatively small positive
cemented subgroup performs internal focusing. The patent explicitly connects the G2a/G2b power
ratio to focusing travel and wide-end back focal length, rather than treating the focusing group as
an arbitrary floating correction group.

## Element-by-Element Analysis

### L11 — Negative Meniscus

\(n_d=1.794997,\ \nu_d=45.30\). Glass: **795453 class (vendor unspecified)**.
Standalone \(f=-40.975921\) mm.

L11 is the first negative meniscus of G1, with its convex surface facing the object as described in
the patent. Its negative power begins the angular expansion required by the negative-positive
wide-angle architecture. The class label is deliberately vendor-neutral: the prescription
coordinates are close to several dense lanthanum-flint-class catalog entries, but the patent does
not identify Nikon's actual melt supplier.

The surface-1 Abbe value is the one explicit source correction in the material table. The rendered
Table 2 page prints 5.30; the final data uses 45.30 and preserves the raw value in the audit.

### L12 — Compound Aspherical Negative Meniscus

The physical L12 is represented by two optical media:

- **L12 compound layer:** \(n_d=1.506250,\ \nu_d=55.63\). Glass:
  **Unmatched (compound-asphere layer; material not identified)**.
- **L12 substrate:** \(n_d=1.794997,\ \nu_d=45.30\). Glass:
  **795453 class (vendor unspecified)**.

The combined physical compound stack has a verified standalone focal length of
\(f=-74.182313\) mm in air.

The patent describes L12 as a negative meniscus with its convex surface facing the object. Its outer
surface is the only asphere in Example 2. Numerically, the table inserts a 0.1000 mm
\(n_d=1.506250\) layer between the aspherical surface and the \(n_d=1.794997\) substrate.
Nikon independently identifies one compound aspherical element in the production lens, supporting
the two-medium modeling treatment. The exact chemistry or manufacturing material of the thin layer
is not stated by the patent and is therefore left unmatched rather than labeled as a specific resin.

The asphere supplies the principal non-spherical shape control in the front negative group, where the
patent discusses the use of asphericity to control field curvature and distortion in a super-wide
negative-positive zoom. The detailed coefficient convention is treated separately below.

### L13 — Biconcave Negative

\(n_d=1.744000,\ \nu_d=44.79\). Glass: **H-LaF3B catalog equivalent (patent 744448; production supplier unspecified)**.
Standalone \(f=-47.314388\) mm.

L13 is the third negative element in G1 and is explicitly biconcave. Together with L11 and L12 it
provides the three-negative-element front structure discussed by the patent in connection with
curvature-of-field and distortion control. The element is air-spaced from both neighboring elements;
its standalone power therefore remains conceptually distinct from the net power of G1.

### L14 — Biconvex Positive

\(n_d=1.795040,\ \nu_d=28.56\). Glass: **J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified)**.
Standalone \(f=+53.069165\) mm.

L14 is the positive rear element of G1. Its relatively low Abbe number distinguishes it from the
three preceding negative elements and makes the front group more than a simple stack of negative
menisci. The complete G1 remains strongly negative at approximately −29.695190 mm net focal length.

J-LAFH3 supplies a compatible coefficient-backed dispersion curve for this patent coordinate. That
catalog equivalence is not evidence that Nikon used Hikari as the production supplier.

### L21–L22 — Cemented Positive Inner-Focus Subgroup G2a

**L21:** \(n_d=1.788000,\ \nu_d=47.38\). Glass:
**788474 class (vendor unspecified)**. Standalone \(f=-54.097023\) mm.

**L22:** \(n_d=1.501370,\ \nu_d=56.41\). Glass:
**501564 class (vendor unspecified)**. Standalone \(f=+32.903387\) mm.

L21 and L22 are cemented at the surface of radius +23.0254 mm. The final data correctly assigns the
cemented junction to the downstream L22 medium rather than inserting a synthetic cement layer.

Although L21 is negative when isolated in air and L22 is positive, the cemented pair is a positive
subgroup. Its verified net focal length is +82.843775 mm. That net is the quantity relevant to the
patent's G2a power ratio; the individual standalone focal lengths should not be added or compared as
if the two lenses remained air-spaced.

G2a is the complete internal-focus group. The patent states that focusing from infinity to a near
object is achieved by moving this subgroup toward the image. The adjacent air gaps on either side
change by equal and opposite amounts at each zoom position, preserving the G2a-to-G2b structural
spacing sum while translating the cemented doublet.

### L23–L24 — First Cemented Pair of G2b

**L23:** \(n_d=1.539960,\ \nu_d=59.47\). Glass:
**BAK2 catalog equivalent (patent 540595; production supplier unspecified)**. Standalone \(f=+22.324137\) mm.

**L24:** \(n_d=1.794997,\ \nu_d=45.30\). Glass:
**795453 class (vendor unspecified)**. Standalone \(f=-18.423300\) mm.

L23 and L24 form the first cemented pair in G2b. The patent describes L23 as biconvex and L24 as
biconcave. The two standalone powers are strong and opposite, but the cemented combination is only
weakly positive compared with either isolated member, with a verified net focal length of
+150.990431 mm.

This distinction is important for interpretation: the pair's in-situ function is governed by the
cemented interface and surrounding G2b optics, not by treating +22.3 mm and −18.4 mm as independent
thin lenses.

### L25–L26 — High-Dispersion / High-Abbe Cemented Pair of G2b

**L25:** \(n_d=1.834000,\ \nu_d=37.35\). Glass:
**NBFD10 catalog equivalent (patent 834374; production supplier unspecified)**. Standalone \(f=-19.395459\) mm.

**L26:** \(n_d=1.497820,\ \nu_d=82.52\). Glass:
**J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone \(f=+18.481122\) mm.

L25 and L26 are the second cemented pair of G2b. Their material contrast is the most conspicuous
chromatic pairing in the prescription: the refractive-index difference is 0.33618 and the Abbe-number
difference is 45.17. These values reproduce patent conditions (4) and (5). The patent explains those
conditions specifically in terms of limiting lateral chromatic aberration in the rear cemented
negative-positive pair.

Nikon's production documentation states that the lens contains one ED element. L26, with
\(\nu_d=82.52\), is the unique very-high-Abbe element in Example 2 and is therefore the defensible
production ED correlation. This is an identification inference, not a statement that the patent
itself labels L26 as ED or identifies its glass vendor.

The isolated powers of L25 and L26 nearly oppose one another. Their verified cemented net focal
length is +162.621449 mm. The full G2b, however, also contains L23–L24, the internal air gaps, and
L27; its group-level net focal length is much shorter, +63.119798 mm. The cemented-pair net and the
complete subgroup behavior are therefore kept separate.

### L27 — Final Biconvex Positive

\(n_d=1.539960,\ \nu_d=59.47\). Glass: **BAK2 catalog equivalent (patent 540595; production supplier unspecified)**.
Standalone \(f=+128.309853\) mm.

L27 is the final positive element of G2b and uses the same modeled material class as L23. It is much
weaker in isolation than L23 or L26. Positioned after the two cemented pairs, it completes the
positive rear subgroup before the zoom-dependent back focal distance to the image plane.

## Glass Identification / Selection

The patent publishes \(n_d\) and \(\nu_d\) but no glass trade names, melt codes, Sellmeier
coefficients, C/F/g-line indices, or anomalous-partial-dispersion values. The final data retains
those coordinates and uses compatible coefficient-backed catalog equivalents where available.
The compound-asphere layer remains explicitly unmatched, and production suppliers remain unknown.

| Final data label | \(n_d\) | \(\nu_d\) | Used in | Interpretation |
|---|---:|---:|---|---|
| 795453 class | 1.794997 | 45.30 | L11, L12 substrate, L24 | Dense high-index class; vendor unresolved |
| Unmatched compound-asphere layer | 1.506250 | 55.63 | L12 compound layer | Thin optical layer; material chemistry not identified |
| H-LaF3B equivalent (744448) | 1.744000 | 44.79 | L13 | Compatible coefficient-backed curve; production supplier unspecified |
| J-LAFH3 equivalent (795286) | 1.795040 | 28.56 | L14 | Compatible coefficient-backed curve; production supplier unspecified |
| 788474 class | 1.788000 | 47.38 | L21 | High-index G2a negative member |
| 501564 class | 1.501370 | 56.41 | L22 | Lower-index positive G2a partner |
| BAK2 equivalent (540595) | 1.539960 | 59.47 | L23, L27 | Compatible coefficient-backed crown curve; production supplier unspecified |
| NBFD10 equivalent (834374) | 1.834000 | 37.35 | L25 | Compatible coefficient-backed dense-flint curve; production supplier unspecified |
| J-FKH1 equivalent (498825) | 1.497820 | 82.52 | L26 | Compatible ED curve; production supplier unspecified |

The catalog assignments above are optical equivalents only. They improve coefficient-backed
dispersion coverage but do not establish that Nikon used those vendors or production melts.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored. Consequently, this analysis does not describe the
lens as apochromatic and does not claim anomalous-partial-dispersion behavior. The supported
chromatic statement is narrower: the patent deliberately pairs a high-index, lower-Abbe negative
member with a much higher-Abbe positive member in L25–L26 and ties the resulting index and Abbe
differences to lateral-chromatic-aberration control.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal-focus reconstruction is used.

The patent states that G2a, the cemented L21–L22 doublet, moves toward the image when focusing from
infinity to a near object. The published variable intervals reproduce that mechanism exactly:
`d9` increases by the G2a travel while `d12` decreases by the same amount. Their sum is conserved
at each zoom position, and `Bf` does not change with focus.

| Zoom state | \(d_9\) infinity → near (mm) | \(d_{12}\) infinity → near (mm) | G2a imageward travel (mm) | \(B_f\) (mm) |
|---|---:|---:|---:|---:|
| Wide | 28.42071 → 32.42986 | 5.16566 → 1.15651 | 4.00915 | 38.29481 |
| Intermediate | 12.78191 → 16.60590 | 5.16566 → 1.34167 | 3.82399 | 46.49762 |
| Telephoto | 0.99974 → 4.95936 | 5.16566 → 1.20604 | 3.95962 | 57.85554 |

The near rows are labeled \(R=0.33\) m by the patent, and Nikon also specifies 0.33 m minimum focus.
The patent defines \(R\) as the object-to-image shooting distance and \(d_0\) as the object-to-first-surface
distance. Directly applying those definitions to Example 2 gives \(d_0\) plus the surface-1-to-image
track of 323.32998, 323.32999, and 323.33034 mm at wide, intermediate, and telephoto, rather than
330 mm. The \(d_0\) values implied by an exactly 330 mm geometric shooting distance would instead be
194.51882, 201.95481, and 202.37906 mm. Examples 1 and 3 satisfy their corresponding 0.33 m
geometric distance to the printed precision, so the Example 2 \(d_0\) row is treated as a source-table
inconsistency rather than a change of reference plane.

The published \(d_9\)/\(d_{12}\) motion remains internally exact. A separate paraxial conjugate solve of
those published near-focus spacings gives object-to-image distances of about 328.96 mm, consistent
with the rounded 0.33 m near setting. The data therefore preserves the source-published focus
spacings and retains `PUBLISHED` status; \(d_0\) is not used to reconstruct movement.

The aperture stop position is also published: it is surface 13 between G2a and G2b, 1.5000 mm before
surface 14. Its physical diameter is not published. The authored `STO.sd = 8.6` mm is an inferred
clearance ceiling, while the wide-open stop opening is derived from the per-zoom
`nominalFno = [3.59, 4.12, 4.62]`. It is not presented as a patent-specified iris radius.

## Aspherical Surfaces

Example 2 has one aspherical surface, the front of the compound L12 element, stored as `3A`.

The patent writes the sag as

\[
X(y)=
\frac{y^2/r}{1+\sqrt{1-\kappa(y/r)^2}}
+C_2y^2+C_4y^4+C_6y^6+C_8y^8+C_{10}y^{10}.
\]

Its printed \(\kappa=5.4350\) is not the project's standard conic constant. LensVisualizer uses

\[
Z(h)=
\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}
+\sum A_ph^p,
\]

so the correct conversion is

\[
K=\kappa-1=4.4350.
\]

No dimensional scale is applied, so the polynomial coefficients are transcribed without a scale
transform:

| Project term | Value |
|---|---:|
| \(K\) | 4.4350 |
| \(A_4\) | \(+7.18760\times10^{-6}\ {\rm mm}^{-3}\) |
| \(A_6\) | \(+3.64120\times10^{-9}\ {\rm mm}^{-5}\) |
| \(A_8\) | \(+3.99180\times10^{-11}\ {\rm mm}^{-7}\) |
| \(A_{10}\) | \(+3.32250\times10^{-14}\ {\rm mm}^{-9}\) |
| \(A_{12},A_{14}\) | 0 |

The patent also prints \(C_2=0\); there is therefore no authored quadratic polynomial term beyond
the conic base.

At the verified modeled semi-diameter of 15.0 mm, the polynomial contribution relative to the conic
base is 0.526812 mm. The total aspheric sag is 3.677719 mm, which is a 1.058830 mm departure from
the same-radius spherical sag. The actual aspherical rim slope is approximately 36.26°, and the authored
semi-diameter remains below the current 98%-of-conic-domain validation limit of 18.608119 mm.
These quantities are modeling results at the validated rim, not patent-published clear-aperture
dimensions.

Direct evaluation at the patent's condition-test heights gives

\[
X(7)=0.591592920\ {\rm mm},\qquad
X(14)=3.014599408\ {\rm mm},
\]

and therefore

\[
X(14)-X(7)=2.423006488\ {\rm mm}.
\]

The value satisfies the patent's required \(2<X(14)-X(7)<2.5\) interval but does not reproduce the
printed Table 2 result of 2.34 mm. The discrepancy is retained as a source inconsistency; no
coefficient or sign is adjusted to force the table value.

The semi-diameters throughout the lens are inferred rather than patent-published. They were
constructed from the modeled marginal/chief-ray envelopes and checked against edge thickness,
actual rim slope, conic-domain limits, cross-gap intrusion, off-axis containment, and render-trim
constraints. They should therefore be read as model geometry, not as production mechanical
dimensions.

## Chromatic Correction Strategy

The patent's most explicit chromatic design rule concerns the cemented L25–L26 pair. It requires a
large refractive-index difference and a large Abbe-number difference between the negative and
positive members. Example 2 gives

\[
n_1-n_2=1.834000-1.497820=0.336180
\]

and

\[
\nu_2-\nu_1=82.52-37.35=45.17.
\]

The patent states that these bounds are intended to prevent the cemented interface from becoming
too strongly curved and to restrain lateral chromatic aberration, particularly off axis in the
super-wide regime. This is a source-grounded chromatic claim.

The production lens is specified by Nikon as containing one ED element. L26 is the only
very-high-Abbe member of the prescription and is therefore identified as the `498825` production
correlation, with J-FKH1 used only as a compatible catalog dispersion curve. Because the patent supplies no line indices or
partial-dispersion data, the analysis does not infer secondary-spectrum or apochromatic performance
from \(\nu_d\) alone.

## Conditional Expressions

The patent uses six numerical conditions to constrain the design. Recalculation from the modeled
prescription gives the following results.

| Condition | Verified Example 2 value | Patent table | Assessment |
|---|---:|---:|---|
| \(0.002 < \Sigma P_i < 0.004\), with \(P_i=\phi_i/(n_i n_i')\) | 0.003318271 | 0.00332 | Pass |
| \(1.3 < f_{21}/f_{22} < 1.5\) | 1.312484785 | 1.312 | Pass |
| \(1.5 < |f_1|/f_w < 2\) | 1.605118165 | 1.605 | Pass |
| \(0.335 < n_1-n_2\) | 0.336180 | 0.336 | Pass |
| \(45 < \nu_2-\nu_1\) | 45.17 | 45.17 | Pass |
| \(2 < X(14)-X(7) < 2.5\) | 2.423006488 mm | 2.34 mm | Inequality passes; printed result does not reproduce |

For the first condition, the Petzval sum is evaluated surface by surface as
\(\phi/(n\,n')\), not from element focal lengths. For the third condition the magnitude of the
negative G1 focal length and the independently traced wide-end EFL are used, consistent with the patent's positive displayed ratio. The sixth
condition is the only one whose displayed Example 2 numerical result does not reproduce from the
printed prescription.

## Verification Summary

Independent tracing of the final prescription gives the following infinity-state first-order
results:

| State | Traced EFL (mm) | Patent focal-length row (mm) | Traced BFL (mm) | Patent \(B_f\) (mm) |
|---|---:|---:|---:|---:|
| Wide | 18.500314093 | 18.50037 | 38.294659469 | 38.29481 |
| Intermediate | 25.000589686 | 25.00067 | 46.497429891 | 46.49762 |
| Telephoto | 34.001110167 | 34.00123 | 57.855287282 | 57.85554 |

The sequential height/reduced-angle trace, an independent conventional \((y,u)\) ABCD construction,
and basis-ray reconstruction agree to machine precision. The Petzval sum is
0.003318271290 mm\(^{-1}\). The published focus-gap conservation is reproduced to numerical
precision at all three zoom positions.

The inferred geometry also satisfies the current optical and geometry checks. The minimum modeled
element edge thickness is 0.634966 mm. The limiting air gap is the 0.7 mm gap from surface 16 to 17;
at the shared 7.4 mm semi-diameter the remaining physical axial clearance is 0.088728 mm. Default
modeled on-axis and 0.60-field off-axis ray samples remain inside the authored apertures at all six
wide/intermediate/telephoto × infinity/near states.

These semi-diameter and clearance values are author/modeling results, not published Nikon mechanical
dimensions. No layout parameter is used to conceal invalid lens geometry.

## Sources

1. **US 2001/0030812 A1**, Akiko Furuta, *ZOOM LENS SYSTEM*, published 2001-10-18.
   Example 2 is described in ¶0053–¶0056; the numerical prescription and variable intervals are in
   Table 2 on PDF page 18. The aspherical convention is given in ¶0043–¶0045, and the design
   conditions are discussed in ¶0036–¶0041.
2. **Nikon Imaging Japan — AI AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED.**
   https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_zoom-nikkor_18-35mm_f35-45d_if-ed/
   Used for production identity, 11-element/8-group construction, 35 mm/FX coverage, 100°–62°
   field, 0.33 m minimum focus, 1/6.7 maximum reproduction, and other marketed specifications.
3. **Nikon instruction manual — AF Zoom-Nikkor ED 18-35mm f/3.5-4.5D IF.**
   https://nij.nikon.com/cms/support/manual/nikkor/AF_18-35mm_%2880%29_05.pdf
   Used for Nikon F-bayonet identity, 11 elements/8 groups, one compound aspherical element, one ED
   element, Nikon Internal Focusing, and 0.33 m closest focus.
4. **Nikon Product History — 2000.**
   https://imaging.nikon.com/imaging/information/products_history/2000/
   Used for release-period correlation.
5. `NikonAFZoomNikkor1835mmf3545DIFED.stage4.audit.md`,
   `NikonAFZoomNikkor1835mmf3545DIFED.stage4.verify.py`, and
   `NikonAFZoomNikkor1835mmf3545DIFED.stage4.results.json`.
   These local audit artifacts provide the independent paraxial, Petzval, focus, asphere, glass,
   semi-diameter, and geometry verification used for computed statements above.
