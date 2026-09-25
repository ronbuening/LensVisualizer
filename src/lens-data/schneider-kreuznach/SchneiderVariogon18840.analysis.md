## Patent Reference and Design Identification

**Patent:** US 3,442,573<br>
**Filed:** September 21, 1965<br>
**Priority:** September 25, 1964 (Germany Sch 35,848)<br>
**Granted:** May 6, 1969<br>
**Inventor:** Karl Heinrich Macher<br>
**Assignee:** Jos. Schneider & Co., Optische Werke<br>
**Title:** Varifocal cinematographic objective for large-frame sizes and including a four-component forward lens group
and a four-lens rear group<br>
**Embodiment analyzed:** Example 1 / Fig. 1 / Table I

The implemented prescription is the first numerical embodiment of US 3,442,573. The patent describes a varifocal
cinematographic objective for the enlarged 8-mm/Super-8 frame of 4.22 × 5.69 mm and gives Example 1 a nominal focal-length
range of 8–40 mm, a relative aperture of 1:1.8, and a back focal length of 13.1 length units. The data file retains the
patent's millimeter-scale prescription without uniform scaling. (US3442573.pdf, PDF pp. 1, 3–4, Fig. 1 and Table I.)

The production correlation to the SCHNEIDER-KREUZNACH VARIOGON 8-40mm f/1.8 is convergent rather than manufacturer-confirmed.
Three independent source strands support the identification: the patent is assigned to Jos. Schneider & Co. and has the
same nominal 8–40 mm / f/1.8 / enlarged-Super-8 design target; a period Beaulieu 2008S brochure lists a Schneider Variogon
f/1.8 8/40; and Schneider-Kreuznach's Variogon retrospective describes the enlarged 4.22 × 5.69 mm Super-8 frame,
mechanically compensated zooms with two moving groups, and a beam-splitter/accessory region ahead of the iris in
narrow-gauge reflex designs. None of the retrieved Schneider sources explicitly states that US 3,442,573 Example 1 is the
production Variogon 1.8/8-40, so the attribution remains a research inference rather than a manufacturer declaration.

The Beaulieu brochure documents a C-mount production context, but the present data leaves `lensMounts` unset because the
current LensVisualizer taxonomy contains no C-mount identifier; that omission is a taxonomy constraint. `imageFormat` is
`super-8`, matching the patent's stated 4.22 × 5.69 mm image frame and Schneider's Variogon zoom-lens documentation.

## Optical Architecture

The design is a mechanically compensated zoom consisting of a four-component forward varifocal group followed by a fixed
rear objective. In the patent's functional notation, component I is fixed positive, component II is movable negative,
component III is movable negative, component IV is fixed positive, component V is an afocal reflex-prism/accessory region,
and component VI is the fixed rear objective. The implemented model contains 12 refractive lenses plus the flat reflex
prism P. In LensVisualizer counting, those 13 optical bodies form 11 air-separated physical groups; the six patent
components I–VI are larger functional assemblies rather than the `groupCount` definition.

Component I consists of the cemented L1–L2 pair followed by L3. Its computed isolated component focal length from the
final data is +58.047 mm, close to the patent's printed 57.99. Component II contains negative meniscus L4, a fixed 4.60 mm
air interval, and the cemented L5–L6 pair; its computed component focal length is -16.028 mm versus the patent's -16.0.
Component III is the single negative meniscus L7 at -34.094 mm, and component IV is the positive L8 at +25.134 mm. The
flat prism P is afocal in first order. The fixed rear objective VI is a four-singlet positive-positive-negative-positive
sequence with a computed component focal length of +19.474 mm versus the source value 19.49.

The patent's defining zoom motion occurs in components II and III. Component II moves monotonically toward the image over
the three published spacing states, while component III first moves toward the object and then reverses toward the image.
The intermediate published spacing set is therefore essential to the implementation: endpoint-only interpolation would
remove a source-published kinematic feature. The model uses the computed EFL of each published state as the monotonic
`zoomPositions` coordinate while retaining the original d5, d10, and d12 spacing triplets at those nodes.

All refracting surfaces in Example 1 are spherical, and the two prism faces plus the synthetic stop are plane. The patent
publishes no aspheric equation or coefficient set for this embodiment, so no aspheric surfaces are authored.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element-in-air values recomputed from the final data. They describe isolated
power only; they are not substitutes for the focal length or in-situ action of the larger patent components.

### L1–L2 — Cemented front pair D1

**L1:** nd = 1.62299, νd = 58.12. Glass: 623581 — crown class (supplier unproven). Isolated-air f = +58.102 mm.<br>
**L2:** nd = 1.80518, νd = 25.46. Glass: 805255 — dense-flint class (supplier unproven). Isolated-air f = -96.510 mm.

L1 is the biconvex positive front member. L2 is the high-index negative meniscus cemented directly to it at the shared r2
surface. The two elements together form the positive doublet named by the patent at the front of component I. Their
computed cemented-stack focal length is +135.743 mm; after the following L3 is included, component I as a whole becomes the
substantially stronger +58.047 mm positive group. (US3442573.pdf, PDF pp. 1, 3–4.)

The data does not assign a historical glass supplier to either coordinate. Both elements therefore retain neutral
six-digit/class labels rather than converting modern cross-vendor catalog matches into a claim about the original melt.

### L3 — Positive meniscus completing component I

**L3:** nd = 1.62299, νd = 58.12. Glass: 623581 — crown class (supplier unproven). Isolated-air f = +95.865 mm.

L3 is the positive meniscus following the cemented front pair across the 0.10 mm air space. It shares the same published
nd/νd coordinate as L1 but is an independent singlet. Together with D1 it completes the fixed positive front component I.
The patent's prose identifies this lens as a positive meniscus; the present analysis does not assign a more specific
aberration-correction role because the source does not do so and no aberration decomposition has been used to establish
one.

### L4 — Negative meniscus, first member of moving component II

**L4:** nd = 1.67790, νd = 55.52. Glass: 678555 — lanthanum-crown class (supplier unproven). Isolated-air f = -26.196 mm.

L4 is the first dispersive member of the first moving negative component. The patent explicitly describes it as a negative
meniscus with a concave rear surface. It moves together with the following L5–L6 cemented pair while their internal 4.60 mm
air space remains fixed. The negative power quoted here is the isolated singlet value; component II's assembled focal
length is -16.028 mm.

### L5–L6 — Cemented doublet D2 inside component II

**L5:** nd = 1.80518, νd = 25.46. Glass: 805255 — dense-flint class (supplier unproven). Isolated-air f = +46.934 mm.<br>
**L6:** nd = 1.46450, νd = 65.79. Glass: 464658 — FK3 / fluor-crown class (exact vintage supplier unproven).
Isolated-air f = -24.537 mm.

The patent calls L5–L6 an achromatic doublet and describes the pair as biconcave in overall form. The isolated elements
have opposite signs, but their cemented stack is negative, with a computed focal length of -48.033 mm. In the complete
component II, this doublet follows L4 across the fixed 4.60 mm air interval and translates with it as a single zooming
assembly. (US3442573.pdf, PDF pp. 3–4.)

The low-index, high-Abbe L6 coordinate is compatible with an FK3/fluor-crown class, but the patent publishes no glass name,
line indices, or partial-dispersion data. The analysis therefore does not infer anomalous-dispersion or apochromatic
performance from the class label alone.

### L7 — Moving negative component III

**L7:** nd = 1.62041, νd = 60.29. Glass: 620603 — crown class (supplier unproven). Isolated-air f = -34.094 mm.

L7 is a single negative meniscus and constitutes component III by itself. Its standalone focal length therefore also equals
the computed focal length of component III. It is the zoom member whose source-state motion reverses around the published
intermediate spacing set: its front vertex moves 1.74 mm objectward from the wide endpoint to the intermediate state and
then 2.59 mm imageward from the intermediate state to the tele endpoint.

### L8 — Fixed positive component IV

**L8:** nd = 1.62230, νd = 53.14. Glass: S-BSM22 — coordinate-compatible spectral proxy (supplier unproven).
Isolated-air f = +25.134 mm.

L8 is the biconvex positive singlet that forms component IV. It remains fixed while components II and III move. Its source
coordinate is preserved as an unmatched historical class rather than forced to a modern catalog identity. The computed
+25.134 mm focal length agrees, within the source-precision tolerance used in the dossier, with the patent's printed
+25.02 mm component value.

### P — Plane-parallel reflex prism

**P:** nd = 1.51680, νd = 64.20. Glass: 517642 — BK7-class crown (supplier unproven). First-order power: afocal.

The 9.00 mm prism lies between component IV and the diaphragm/rear objective region. Both prism faces are plane, so the
prism contributes no refracting-surface Petzval power and no first-order optical power, while its finite refractive
thickness still changes axial translation. The model deliberately retains P rather than replacing it by an
air-equivalent spacing. This matches the selected patent embodiment and preserves the source location of the diaphragm
region. (US3442573.pdf, PDF pp. 1, 3–4, Fig. 1 and Table I.)

### L9 — First positive singlet of rear objective VI

**L9:** nd = 1.67790, νd = 55.52. Glass: 678555 — lanthanum-crown class (supplier unproven). Isolated-air f = +34.962 mm.

L9 begins the fixed four-singlet rear objective. The patent specifies the sequence of VI as positive, positive, negative,
positive; L9 is the first positive member. The data assigns no additional aberration role beyond that source architecture.

### L10 — Second positive singlet of rear objective VI

**L10:** nd = 1.74400, νd = 44.90. Glass: 744449 — lanthanum-flint class (supplier unproven). Isolated-air f = +24.168 mm.

L10 is the second positive member of component VI. It follows L9 across the patent's 0.05 mm air interval. The very small
gap is preserved as published; it is not converted into a cemented interface.

### L11 — Negative singlet of rear objective VI

**L11:** nd = 1.78470, νd = 26.10. Glass: 785261 — dense-flint class (supplier unproven). Isolated-air f = -7.763 mm.

L11 is the only negative member in the fixed rear four-singlet sequence and has the strongest isolated power magnitude of
those four elements. The patent constrains the neighboring air spaces rather than assigning a detailed aberration role:
d20 must be smaller than both d17 and d19, while d22 must lie between 0.1 and 0.2 of the total axial length of component VI.
Those conditions are satisfied by the final data.

### L12 — Final positive singlet

**L12:** nd = 1.71300, νd = 53.89. Glass: 713539 — lanthanum-crown class (supplier unproven). Isolated-air f = +10.590 mm.

L12 is the biconvex final singlet of component VI. The nd value requires a source-reading note: text extraction can produce
1.7300, but direct inspection of rendered Table I and the repeated claim table shows 1.71300. The data therefore preserves
1.71300 as a transcription correction to the OCR reading, not as a proposed correction to the patent. (US3442573.pdf,
PDF pp. 4–5.)

With L9–L12 assembled at the published spacings, component VI computes to +19.474 mm, compared with the patent's 19.49.
The four rear singlets remain fixed throughout the authored zoom range.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not identify glass manufacturers or catalog names.
The data therefore uses neutral six-digit/class labels tied to the published nd/νd coordinates. Modern catalog-coordinate
matches were used only to classify plausible glass families; they are not treated as proof of the historical supplier or
melt. No nC, nF, ng, or dPgF values are authored because those quantities are not published for Example 1 and no exact
catalog identity has been adopted.

| Authored glass label | nd | νd | Used by | Interpretation in this model |
|---|---:|---:|---|---|
| 623581 — crown class | 1.62299 | 58.12 | L1, L3 | Coordinate/class only; supplier unproven |
| 805255 — dense-flint class | 1.80518 | 25.46 | L2, L5 | Coordinate/class only; supplier unproven |
| 678555 — lanthanum-crown class | 1.67790 | 55.52 | L4, L9 | Coordinate/class only; supplier unproven |
| 464658 — FK3 / fluor-crown class | 1.46450 | 65.79 | L6 | Vintage class inference; supplier unproven |
| 620603 — crown class | 1.62041 | 60.29 | L7 | Coordinate/class only; supplier unproven |
| S-BSM22 coordinate-compatible spectral proxy | 1.62230 | 53.14 | L8 | No exact supplier identity asserted |
| 517642 — BK7-class crown | 1.51680 | 64.20 | P | Class only; supplier unproven |
| 744449 — lanthanum-flint class | 1.74400 | 44.90 | L10 | Coordinate/class only; supplier unproven |
| 785261 — dense-flint class | 1.78470 | 26.10 | L11 | Coordinate/class only; supplier unproven |
| 713539 — lanthanum-crown class | 1.71300 | 53.89 | L12 | Coordinate/class only; supplier unproven |

The strongest source-supported chromatic statement is the patent's own description of L5–L6 as an achromatic doublet.
The available prescription does not support a stronger claim about secondary-spectrum correction because the model has no
published partial-dispersion or multi-line index set.

## Focus Mechanism

The final data deliberately carries **NO_INTERNAL_RECONSTRUCTION** for focusing. US 3,442,573 provides the zoom motion of
components II and III but no finite-object numerical prescription, no focus travel table, and no unique set of object-
distance-dependent spacings. Its general description says that nominally stationary positive components may have limited
adjustability for focusing, while Schneider's Variogon retrospective describes subject-distance setting with the front
group. Those statements establish the existence and general location of focusing behavior, not a solvable Example 1
focus law.

`closeFocusM` is therefore metadata rather than an optical focus state. The data uses 0.9144 m, corresponding to the
3-foot focusing limit published for a Bauer C2 installation of the Schneider Variogon f/1.8 8-40 mm. All authored
focus-pair values in `var` are identical at a given zoom node, so the LensVisualizer prescription contains no invented
close-focus internal movement. The Bauer limit is production-variant evidence only and should not be read as proof that
all Variogon 8-40 barrels use the same focusing range.

## Zoom Kinematics and First-Order Behavior

Table I gives two variable-spacing endpoints, and the patent text supplies one intermediate d5/d10/d12 set. The patent
labels the overall range only as nominal 8 to 40; it does not label the intermediate state with a focal length. Recomputing
the final data gives the following control states:

| State | d5 / d10 / d12 (mm) | Computed EFL (mm) | BFD from r24 (mm) |
|---|---:|---:|---:|
| Wide endpoint | 0.47 / 27.74 / 1.69 | 8.260539 | 13.162519 |
| Published intermediate | 18.13 / 8.34 / 3.43 | 20.002420 | 13.161474 |
| Tele endpoint | 27.28 / 1.78 / 0.84 | 39.952456 | 13.155948 |

The 8.260539 mm wide result is not silently rounded into an exact 8.000 mm design value. The patent's 8 mm number is
retained as the marketed/nominal endpoint, while `focalLengthDesign` records the computed 8.260539 to 39.952456 mm range.
Likewise, the intermediate 20.002420 mm coordinate is a calculation from the published spacing set rather than a focal
length printed beside that state in the patent.

The first-to-last refracting-vertex track is 84.60 mm in all three source states. The three variable gaps also retain the
patent's constant sum d5+d10+d12 = 29.90 mm. Using r1 as the fixed coordinate origin, the front vertex of component II lies
at 14.37, 32.03, and 41.18 mm at the three nodes. Component III lies at 50.81, 49.07, and 51.66 mm. Thus component II moves
monotonically imageward, whereas component III reverses direction around the intermediate state.

The computed BFDs differ slightly from the patent's one-decimal 13.1 mm statement because the prescription itself is
rounded. The 13.1559–13.1625 mm calculated values remain within the dossier's 0.10 mm source-precision tolerance. The data
retains the source-stated 13.1 mm rear image spacing after r24 rather than changing the prescription to force exact
Gaussian focus.

## Aperture Stop, Pupils, and Modeled Clear Apertures

The patent shows diaphragm D inside d16, after prism P and before L9, but does not give its numerical axial coordinate or
physical diameter. The implemented stop is therefore explicitly modeled. Its plane is placed 1.70 mm after r16 and
1.80 mm before r17, preserving the published d16 = 3.50 mm total. The split is inferred from Fig. 1 rather than a table
entry. The stop semi-diameter is 5.4131 mm and is calibrated to reproduce the source f/1.8 claim across the three authored
zoom nodes; it is not an independently measured diaphragm size.

| State | Entrance-pupil SD (mm) | Modeled f-number |
|---|---:|---:|
| Wide endpoint | 2.294462 | 1.800104 |
| Published intermediate | 5.556042 | 1.800060 |
| Tele endpoint | 11.098959 | 1.799829 |

The fixed physical stop and fixed rear objective produce a fixed exit-pupil solution in this paraxial model, while the
moving front groups change the entrance-pupil magnification strongly with focal length. This changing entrance pupil is
what allows the calibrated model to remain essentially f/1.8 across the three published zoom states.

The Figure 1 optical-rim review enlarged surfaces 6/7 from 8.0/7.3 to 11.2/10.2 mm and surfaces 8/9 from 7.0 to 8.5 mm. The latter remain below the approximately 9.8 mm drawn rim because a larger common rim violates the 7→8 air-gap clearance.

No semi-diameters are published in the patent. The data's clear apertures are modeled from the ray envelope, the patent
section, and the current geometry constraints. The enlarged rims remain constrained by positive edge thickness and the shared air-gap intrusion limit; these are modeled clear apertures, not manufacturer dimensions.

At 0.6 of the source-frame half-field, an exact meridional pupil scan clips the outer wide-end pupil rays at surface 11,
the front of moving component III. Surface 10, the air boundary immediately before it, was raised from 5.10 to 7.20 mm
so the wide-end chief ray reaches the 4.22 × 5.69 mm frame corner (3.54 mm at 23.8°); the tele-end shared-gap check
covers only the radial band both surfaces share, which surface 11's 5.10 mm rim still bounds. The surface-11 clipping is
retained as modeled vignetting rather than enlarging surface 11 enough to violate the tele-end shared-gap clearance rule.
It does not establish the production lens's full-field vignetting, because the source does not publish measured
production vignetting.

## Patent Conditions and Paraxial Verification

The source gives several construction conditions in addition to the prescription table. The final data preserves all of
the directly evaluable Example 1 relationships:

- The component-VI axial length is 15.4 mm.
- d22/15.4 = 0.146104, which lies between the stated 0.1 and 0.2 limits.
- d20 is smaller than both d17 and d19.
- |r10/r11| = 3.975092 lies inside the patent's evaluated lower and upper bounds.
- |r7/r9| = 1.042921 lies inside the patent's evaluated lower and upper bounds.
- d14+d15+d16 remains 13.5 mm after the synthetic stop splits d16 into 1.70 + 1.80 mm.
- d5+d10+d12 remains 29.9 mm at each of the three source zoom nodes.

These are construction checks, not measures of image quality. The synthetic stop contributes zero optical power, and the
flat prism surfaces likewise contribute zero Petzval terms. Recomputing the complete final prescription surface by surface
with the dossier convention φ/(n·n′) gives a Petzval sum of 0.007574025613 mm⁻¹, with reciprocal magnitude 132.030185 mm.
That scalar is reported only as a first-order property; it is not treated as a direct field-curvature or corner-performance
prediction.

The final-data paraxial solution was independently evaluated by sequential height/reduced-angle tracing and a separate ABCD
matrix product. The two methods agree to the recorded numerical tolerance at each authored zoom node. The same final data
also reproduces the patent's printed component focal lengths within the source-precision tolerances used in the dossier.

## Sources and References

1. **United States Patent Office, US 3,442,573**, Karl Macher, "Varifocal cinematographic objective for large-frame
   sizes and including a four-component forward lens group and a four-lens rear group," granted May 6, 1969. The
   packaged `US3442573.pdf` is the primary prescription source; Fig. 1 and Table I are on PDF pp. 1 and 4 respectively,
   with the repeated Example 1 claim table on PDF p. 5.
2. **Schneider-Kreuznach**, "Variogon - Zoom Lenses / What is a VARIOGON lens?" Manufacturer retrospective:
   https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf
3. **Beaulieu**, "2008S brochure." Period manufacturer brochure documenting a Schneider Variogon f/1.8 8/40 production
   option and C-mount camera context:
   https://www.electronicsandbooks.com/edt/manual/Hardware/B/Beaulieu/bealieu%202008s%20brochure.pdf
4. **Bauer**, "C1 / C2 Operating Instructions." Manufacturer manual used only for the 3 ft / 0.9144 m production
   close-focus metadata of the C2 installation:
   https://museu.rtp.pt/media/2021/07/bauer-c1-c2.pdf

## Live diagram and coverage review

Canonical `super-8` now supplies the 5.69 × 4.22 mm gate explicitly described in US 3,442,573 (6th May 1969), with a 7.08 mm minimum coverage diagonal. No larger optical circle is asserted. The diagram uses the patent labels L1–L12 and P; the prism no longer shifts the rear element numbering. L2 is biconcave (r2 < 0, r3 > 0), correcting its earlier meniscus label. Component II moves imageward with zoom; III first moves objectward, then reverses imageward. The published three stations and unmodeled-focus status are preserved.

## Image-plane source audit (2026-09-25)

MTF source audit: Table I (PDF p. 4) matches all dimensions and nd/νd
pairs, including the internal 9 mm reflex prism. No rear plate is omitted.
Wide EFL 8.260539 vs printed 8 and BFL 13.162519 vs 13.1 leave
+0.062519 mm offset. Preserve published values; the source invokes
Gaussian back-focus constancy and does not specify a best-focus convention.
