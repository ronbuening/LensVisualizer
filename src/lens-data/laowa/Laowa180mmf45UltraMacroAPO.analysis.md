## Patent Reference and Design Identification

**Patent:** CN 120276109 A  
**Application Number:** 202510619764.7  
**Filed:** 2025-05-14  
**Published:** 2025-07-08  
**Inventor:** Dayong Li (李大勇)  
**Applicant:** Anhui Changgeng Optics Technology Co., Ltd. (安徽长庚光学科技有限公司)  
**Title:** 一种双重对焦模式的微距镜头及摄像设备 (A macro lens with dual focusing modes and an imaging device)  
**Embodiment analyzed:** Example 1, ¶0065–0073 and Figure 1.

The prescription is associated with the LAOWA 180mm f/4.5 1.5× Ultra Macro APO (sold by Laowa as the FF 180mm F4.5 CA-Dreamer Macro 1.5X) by convergent construction evidence.
The association is an optical interpretation, not manufacturer confirmation that the production lens reproduces every
patent radius, spacing, glass melt, or tolerance. The primary numerical authority is the original Chinese publication:
the prescription is on PDF page 8, the focusing tables on page 9, and Figure 1 on page 14. [1]

1. The twelve lens elements form nine air-separated components, matching the manufacturer's twelve-element/nine-group
   specification and the detailed sequence in its optical section. The separate camera-side filter is excluded from
   that lens count. [1], [2], [3]
2. The leading part of the main focusing assembly contains two low-dispersion positive singlets. Their positions agree
   with the two green ED highlights in the manufacturer diagram; the fifth lens agrees with its high-index highlight.
   This is positional evidence, not a glass-supplier identification. [1], [3]
3. The patent separates long-travel manual macro focusing from a shorter-travel rear autofocus assembly. The ordinary
   AF and manual macro functions described in the manufacturer material are consistent with that architecture. [1], [4]
4. The patent's printed 174.9637 mm, f/4.6, and 7.02° half-field are near the product's 180 mm, f/4.5, and 13.7° full
   field, but remain distinct quantities. Its −1.5× macro station also agrees in magnitude with marketed 1.5×. [1], [2]
5. The application and publication precede the manufacturer's launch statement dated 2025-09-16, reproduced in the
   explicitly labeled press-release portion of the launch report. Timing supports, but does not establish, identity. [5]

As documented on 2026-10-08, current AF mounts are Canon EF, Sony E, Nikon Z, and Fujifilm X; current MF mounts are
Canon RF, L mount, and Nikon F. The current manual's specification table and the manufacturer's 2026-08-05 announcement
support the added X and F variants. The optical family is full-frame; the X-mount version serves APS-C bodies. [2], [4], [6]
These mount variants are distinct from the two patent focus configurations modeled below.

The manual currently available at its older upload URL includes revised mount and M/A information. Its tables still
print F4.6–32, although the headings and current product name say F4.5. The web page lists AF F4.5–22 and MF F4.5–32.
The model retains source f/4.6; its f/32 control limit does not certify the aperture range of every production version. [2], [4]
Example 2 supplies none of this model's numerical data. Numerical equality with the utility-model companion
CN224190307U is also unestablished because its original numerical publication was not compared.

## Optical Architecture

The numerical embodiment is an internally focusing telephoto-type macro design at infinity, with a positive front
group, positive central group, and negative rear group. The central group is divided into positive G2a and G2b;
the rear group is divided into negative G3a and G3b. These are functional groups, distinct from the nine physical
air-separated components. The power signs below are calculated from the tabulated radii, thicknesses, and d-line indices.

| Functional group | Source surfaces | Calculated standalone group focal length at infinity | Function                                          |
| ---------------- | --------------- | ---------------------------------------------------: | ------------------------------------------------- |
| G1               | 1–2             |                                       +274.479433 mm | Fixed front positive meniscus                     |
| G2a              | 3–9             |                                       +153.940956 mm | Leading portion of the manual macro assembly      |
| G2b              | 10–12           |                                        +83.628329 mm | Rear cemented portion of the same manual assembly |
| G3a              | 14–18           |                                        −40.512000 mm | Moving rear autofocus assembly                    |
| G3b              | 19–22           |                                       −635.589660 mm | Fixed, weakly negative rear pair                  |

The combined G2 focal length is +67.594294 mm and the combined G3 focal length is −36.968263 mm at infinity.
The first-vertex-to-authored-image track is 150.069600 mm, or 0.857918 of the calculated 174.923065 mm infinity EFL.
This track convention includes the camera-side plate and physical image gap. The telephoto classification is
state-specific: the same infinity EFL and track ratio cannot be assigned to the macro configurations.

The stop is source surface 13, labeled STO in the model, between G2 and G3. It moves with G2 during manual focusing
as described in ¶0055 and Figure 1. The architectural distinction is the use of different moving assemblies for
macro and ordinary AF operation, rather than one continuous focus trajectory. [1]

Three cemented interfaces, at surfaces 8, 11, and 17, define D1, D2, and D3. The last negative and positive lenses
remain air-separated. The source's flat filter at surfaces 23–24 is physically traced through `rearPlates`, with
1.0000 mm of air before it, 2.0000 mm thickness, and 35.9416 mm of air after it. It is hidden in the lens drawing
and adds neither a production lens element nor a production lens group. No air-equivalent replacement is used. [1] (¶0063, ¶0069)

## Element-by-Element Analysis

The element focal lengths are standalone thick-lens values in air, rounded to six decimal places from the literal
source-model calculation. They are not additive in-situ powers of cemented components. Catalog names reproduce the
data annotations exactly and denote modeling equivalents; the original nd and νd values remain authoritative.
Element roles below describe position and group membership. Specific aberration assignments are attributed to the
patent where supported, rather than inferred solely from a glass name or a power sign.

### L1 — Positive Meniscus

nd = 1.6180, νd = 68.00. Glass: Unmatched (crown, native 1.6180/68.00). f = +274.479433 mm.

L1 is the isolated fixed front group G1, convex toward the object. Its positive power agrees with the general front-group
description in ¶0057–0058 and with Figure 1. It stays in place while either downstream focusing assembly moves.
The source coordinates remain unmatched; assigning a familiar crown solely by refractive index would change dispersion.

### L2 — Biconvex Positive

nd = 1.4970, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent). f = +89.695704 mm.

L2 leads G2a and is the first of the two low-dispersion positive singlets. The patent explicitly associates this
coordinate pair with G2a's low-dispersion material in ¶0090. Its ED position agrees with the manufacturer section.
Its movement is the movement of the complete G2 assembly in this example; no separate floating trajectory is supplied.

### L3 — Positive Meniscus

nd = 1.4970, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent). f = +74.376594 mm.

L3 is the second low-dispersion positive singlet in G2a and shares L2's native glass coordinates. Its different shape
and thickness give a different standalone focal length. The numerical model uses the listed spherical radii at surfaces
5–6. The unsupported asphere wording in ¶0087 does not supply a reconstructable surface departure.

### L4 — Biconcave Negative

nd = 1.80518, νd = 25.46. Glass: FD60 (HOYA, coordinate equivalent). f = −19.715166 mm.

L4 is the negative front member of D1, cemented to L5 at surface 8 within G2a. The patent's general description
assigns a corrective role to the negative/positive cemented construction following low-dispersion positive lenses
(¶0059–0060). It does not establish a separately measured aberration contribution for L4.

### L5 — Positive Meniscus

nd = 1.9229, νd = 20.88. Glass: E-FDS1 (HOYA, coordinate equivalent). f = +31.915524 mm.

L5 completes D1 and occupies the manufacturer's highlighted high-index position. The calculated cemented D1 focal
length is −43.050857 mm, so L5's positive standalone sign must not be used as the sign of the whole component.
The catalog-equivalent index rounds to the source value; the source index is not replaced by a catalog value.

### L6 — Negative Meniscus

nd = 1.90366, νd = 31.31. Glass: TAFD25 (HOYA, near coordinate equivalent). f = −40.322396 mm.

L6 begins D2 and the G2b subdivision. It is cemented to L7 at surface 11, and both translate with G2a in the selected
manual-focus example. TAFD25 is explicitly a near equivalent: its nominal catalog νd is 31.32 rather than the source
31.31. The source value is preserved in both focus configurations.

### L7 — Biconvex Positive

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA, coordinate equivalent). f = +27.517991 mm.

L7 completes D2 immediately before the stop. The cemented component is positive, with calculated focal length
+83.628329 mm; it is also the complete G2b group. The source's broader discussion allows split G2 motion, but
Example 1 instead translates G2a and G2b together. [1] (¶0044, ¶0065)

### L8 — Negative Meniscus

nd = 1.8830, νd = 45.80. Glass: Unmatched (high-index crown, native 1.8830/45.80). f = −57.982175 mm.

L8 is the negative singlet at the front of G3a, immediately behind the stop, with its concave face toward the image.
It moves with D3 during ordinary AF. This layout accords with ¶0061–0062, but the broader discussion of lightweight
materials does not identify this element as resin or as any particular manufacturer's glass.

### L9 — Biconvex Positive

nd = 1.78472, νd = 25.72. Glass: H-ZF13 (CDGM, coordinate equivalent). f = +53.409117 mm.

L9 is the positive front member of D3, beginning at surface 16. Its native coordinates differ from those that ¶0094
incorrectly assigns to the 16–17 region. The literal table establishes this high-dispersion positive member before
the lower-dispersion negative member; its presence does not make G3a positive overall.

### L10 — Biconcave Negative

nd = 1.6968, νd = 55.46. Glass: LAC14 (HOYA, coordinate equivalent). f = −38.479900 mm.

L10 begins at the cemented interface 17 and completes D3. Its coordinates are those mentioned with incorrect
numbering in ¶0094. The calculated D3 focal length is −148.735501 mm; the complete G3a remains negative after
combination with L8. Neither the source wording nor this coordinate pair establishes an additional production ED lens.

### L11 — Negative Meniscus

nd = 1.7292, νd = 58.67. Glass: Unmatched (crown, native 1.7292/58.67). f = −78.127977 mm.

L11 begins fixed G3b after the long variable gap behind G3a. The native glass pair remains unmatched in the catalog
survey. Paragraph ¶0063 describes the general rear assembly as compensating field curvature, distortion, and lateral
color, but the selected numerical example does not identify a separate contribution from L11.

### L12 — Biconvex Positive

nd = 1.5481, νd = 45.82. Glass: E-FEL1 (HOYA, coordinate equivalent). f = +90.253834 mm.

L12 is the final lens and the positive member of fixed G3b. The table places 0.1500 mm of air between L11 and L12,
so they are not a cemented doublet despite the later prose. Their net group is weakly negative. The camera-side
plane plate follows L12 but is not a thirteenth lens in this element sequence.

## Glass Identification and Selection

The source explicitly defines d-line indices in ¶0066. The following palette summarizes the model annotations;
“equivalent” means agreement or near agreement in catalog coordinates, not proof of supplier, composition, or melt.
The source has no measured spectral line indices, partial-dispersion values, or dispersion coefficients. [1], [8], [9]

| Used by     | Native nd / νd  | Model glass annotation                            | Identification limit            |
| ----------- | --------------- | ------------------------------------------------- | ------------------------------- |
| L1          | 1.6180 / 68.00  | Unmatched (crown, native 1.6180/68.00)            | No compatible pair recovered    |
| L2, L3      | 1.4970 / 81.61  | FCD1 (HOYA, coordinate equivalent)                | Low-dispersion equivalent       |
| L4          | 1.80518 / 25.46 | FD60 (HOYA, coordinate equivalent)                | Coordinate equivalent           |
| L5          | 1.9229 / 20.88  | E-FDS1 (HOYA, coordinate equivalent)              | Index agrees at source rounding |
| L6          | 1.90366 / 31.31 | TAFD25 (HOYA, near coordinate equivalent)         | Nominal catalog νd = 31.32      |
| L7          | 1.60342 / 38.01 | E-F5 (HOYA, coordinate equivalent)                | Coordinate equivalent           |
| L8          | 1.8830 / 45.80  | Unmatched (high-index crown, native 1.8830/45.80) | No compatible pair recovered    |
| L9          | 1.78472 / 25.72 | H-ZF13 (CDGM, coordinate equivalent)              | Coordinate equivalent           |
| L10         | 1.6968 / 55.46  | LAC14 (HOYA, coordinate equivalent)               | Coordinate equivalent           |
| L11         | 1.7292 / 58.67  | Unmatched (crown, native 1.7292/58.67)            | No compatible pair recovered    |
| L12         | 1.5481 / 45.82  | E-FEL1 (HOYA, coordinate equivalent)              | Index agrees at source rounding |
| Rear filter | 1.5168 / 64.20  | BSC7 (HOYA, coordinate equivalent)                | Camera-side plate only          |

The survey covers CDGM, HIKARI, HOYA, OHARA, SCHOTT, and SUMITA manufacturer catalogs. [8], [9], [11], [12], [13], [14]
The three unmatched lens
coordinates are retained rather than forced onto same-index glasses with materially different Abbe numbers.
Named glasses resolve equivalent catalog curves in the application; they do not convert those curves into measured
patent spectra. No proxy nC, nF, ng, or ΔPgF is copied into the source prescription.

The chromatic design logic is consistent with the low-dispersion positive singlets and the following mixed-index,
mixed-dispersion cemented components described in ¶0060 and ¶0090. That qualitative correspondence does not quantify
secondary-spectrum correction. “APO” remains the product designation: the source coordinates and substitute curves
do not certify apochromatic performance, anomalous partial dispersion, or the manufacturer's chromatic claims.

## Focus Mechanism

The MF and AF data files are complete configurations of the same optical family. MF is the canonical visible member;
AF is a hidden alternative selected through `opticalConfiguration`. Their shared geometry and glass data are identical
at infinity. The discrete stations are published; intermediate interpolation is an application convenience, not a
recovered cam profile, motor command, or firmware control law.

In MF, G1 and G3 remain fixed while G2, including the stop, travels toward the object. The total tabulated G2 travel
is 31.0539 mm from infinity to the −1.5× station. The two G2 subdivisions do not move independently in Example 1.
The native negative reproduction-ratio signs are retained. [1] (¶0065, ¶0071)

| MF source station | D(2), mm | D(13), mm | D(18), mm |
| ----------------- | -------: | --------: | --------: |
| Infinity          |  31.8334 |    1.0000 |   26.4211 |
| −1.0×             |  10.4054 |   22.4280 |   26.4211 |
| −1.5×             |   0.7795 |   32.0539 |   26.4211 |

In AF, G3a moves toward the image and G3b is described as fixed. Although ¶0065 calls G2 fixed, D(2) changes by
0.0017–0.0018 mm in the printed table. These changes are preserved. At the closest AF station, G3a's absolute
displacement is 3.3930 mm, while the decrease in D(18) is 3.3929 mm; the printed spacings leave a 0.0001 mm total-track
residue relative to infinity. No table value is adjusted to enforce the idealized prose. [1] (¶0073)

| AF source label     | D(2), mm | D(13), mm | D(18), mm |
| ------------------- | -------: | --------: | --------: |
| Infinity            |  31.8334 |    1.0000 |   26.4211 |
| 8750.00 mm, −0.02×  |  31.8351 |    1.5126 |   25.9068 |
| 1350.00 mm, −0.128× |  31.8352 |    4.3912 |   23.0282 |

The literal prescription gives the following paraxial conjugates at the unchanged source image plane. Object-to-first-
vertex distance and object-to-image distance are different reference quantities; neither silently replaces a patent label.

| Source station | Calculated magnification | Object to first vertex, mm | Object to image, mm |
| -------------- | -----------------------: | -------------------------: | ------------------: |
| MF −1.0×       |                −1.000858 |                 205.029078 |          355.098678 |
| MF −1.5×       |                −1.496157 |                 154.685769 |          304.755369 |
| AF 8750.00 mm  |                −0.019692 |                8861.536157 |         9011.605757 |
| AF 1350.00 mm  |                −0.127528 |                1352.603618 |         1502.673318 |

The AF labels lack an explicit distance datum, and neither tested reference plane reproduces them exactly. The model's
`closeFocusM` and source-station controls use calculated object-to-image distances. The advertised 300 mm object-to-image
minimum, approximately 150 mm working distance, and ordinary 1.5 m AF limit remain separate manufacturer quantities. [2], [4]
No `finiteConjugates` certification is asserted.

Public ray launch and inverse-distance UI labels are also separate approximations. At the intermediate MF control
position 0.4291136361, the executed public launch uses 533.435221 mm object-to-image distance while the UI label is
710.197355 mm. At the final MF station the corresponding values are 304.768734 mm and 304.755369 mm. The application's
effective-f-number summaries are approximate exposure-related outputs, not measurements of the physical iris or an
additional focus constraint; they do not establish a production macro aperture schedule.

The patent discusses stepping or voice-coil actuation generically in ¶0041; it does not establish the production motor.
Current manufacturer M/A assist permits coarse manual macro positioning followed by fine autofocus. This prevents a
blanket claim that current hardware is manual-only below 1.5 m, but does not imply unrestricted full-travel macro AF.
Neither the manual nor the firmware announcements supply a combined numerical group-motion law for this model. [4], [6], [7]

## Aspherical Surfaces and Source Contradictions

The reproducible numerical model is all-spherical. Paragraph ¶0087 calls surfaces 5–6 aspherical, but no aspheric
equation, coefficients, conic constants, or table markers are supplied. The model therefore retains the tabulated
radii with an empty asphere definition. The effect of any missing aspheric departure is unknown; the numerical model
cannot be claimed to reproduce an unspecified aspheric production design.

Other narrative inconsistencies are resolved by preserving the numerical table and Figure 1, not by repairing their values:

- Paragraph ¶0089 calls G1 a negative meniscus at surfaces 7–8. The figure and table place positive G1 at 1–2;
  surfaces 7–8 belong to L4 within G2a.
- Paragraph ¶0088 assigns surfaces 7–8 to G2b. Figure 1 and the prescription place them in G2a; G2b occupies 10–12.
- Paragraph ¶0093 calls the rear 19–22 assembly cemented. The explicit 0.1500 mm air gap after surface 20 is retained.
- Paragraph ¶0094 assigns 1.6968/55.46 to surfaces 16–17 and calls it ED. That medium begins at 17; surface 16 begins
  1.78472/25.72. The wording is not used to invent another ED element or replace either medium.

Consequently, the patent's qualitative performance discussion and Figure 2 are source assertions, not reproduced
measurements of this literal spherical model. Source prose alone cannot close the missing-asphere or spectral gaps.

## Conditional Expressions

The patent balances focusing power and travel through six conditions (¶0039–0054; numerical summary ¶0084, PDF page 11).
F2, F2a, F3, and F3a denote the named group focal lengths at infinity; FL denotes system focal length. MA is the
maximum macro magnification magnitude and S2a and S3a denote the respective travel quantities used by the source comparison.
The calculation below uses the model's infinity FL; the final travel ratio follows the change in D(18), as in the
verification calculation, and must not be confused with G3a's slightly different absolute displacement.

| Condition                  | Required range | Calculated from literal model | Printed Example 1 |
| -------------------------- | -------------- | ----------------------------: | ----------------: |
| F2 / FL                    | 0.2 to 0.7     |                      0.386423 |             0.386 |
| absolute value of F2a / FL | 0.5 to 1.2     |                      0.880050 |              0.88 |
| FL / (MA × S2a)            | 0.5 to 5       |                      3.755257 |             3.756 |
| absolute value of FL / F3a | 1.0 to 6       |                      4.317809 |             4.319 |
| absolute value of F3 / F3a | 0.5 to 2.5     |                      0.912526 |             0.913 |
| S2a / S3a                  | 5 to 35        |                      9.152613 |             9.152 |

All six inequalities hold. Conditions 3, 4, and 6 do not reproduce the last printed digits under the stated
half-last-digit comparison. Substituting the source's printed FL gives 3.756129 and 4.318812 for conditions 3 and 4,
explaining their rounded agreement under that convention; condition 6 remains 9.152613. Inequality compliance does
not justify changing the source radii or suppressing the summary residuals.

## Verification Summary

The source dimensions are unscaled and all tabulated radii, thicknesses, indices, Abbe numbers, and focus columns are
preserved. Independently coded scalar and matrix first-order calculations agree with the parsed final models.
The infinity EFL is 174.923065 mm versus the printed 174.9637 mm, a −0.040635 mm residual. The paraxial back focal
distance from the plate's rear surface is 35.985491 mm, while the source image gap is 35.9416 mm. Thus the unchanged
source image lies 0.043891 mm before paraxial infinity focus. These literal source-summary discrepancies remain visible.

The patent supplies neither numerical clear apertures nor a physical iris diameter. The semi-diameters are inferred
from Figure 1 and checked against exact rays and geometry. The stored stop radius, 9.147572930 mm, is calibrated
to the full source infinity f/4.6 marginal cone, whose entrance height is 19.013376598 mm. This calibration is not
independent evidence that a manufactured diaphragm has that radius.

The full source f/4.6 ray needs a shared radius of at least 14.092901 mm at S6–S7, whereas the default gap rule
limits it to 13.932375 mm. Changing only the inferred semi-diameters cannot satisfy both constraints while preserving
that ray and the literal prescription.

The critical inferred aperture is 14.1 mm at S7, the shared radius the gap rule tests; S6 is 16.5 mm, the square-cut
rim Figure 1 draws for L3, and overhangs the smaller L4 face. The shared-gap intrusion fraction is
0.921833524; the 0.90, 0.92, and 0.921 allowances fail, while the selected 0.922 allowance passes. Thus 92.2% is
the smallest passing one-decimal-percent stage for these apertures. Every other gap separately passes the 0.90 rule at
the sampled states. The original 0.9382 mm axial separation is unchanged, and the ideal common-radius axial clearance
is 0.073335787 mm. The adjustment changes the validation allowance, not the source prescription.

S7 clears the nominal full-f/4.6 marginal ray by only 0.007098743 mm. Hypothetical source-digit corners can exceed
that radial allowance. Positive ideal-surface separation and literal-table ray transmission do not establish
manufacturing safety, source-digit-corner robustness, centering tolerances, thermal margins, or assembly clearance.
The validation is deliberately limited to the tabulated values and stated inferred apertures.

Portable geometry checks sample 42 focus states per configuration. Native application calculations trace 6,150
sampled three-dimensional rays across the two configurations, using five source/intermediate states per mode,
five fields, and three aperture settings. Physical rim clipping and independently classified front misses remain
in the results; there are no unexplained failures or transmitted-ray sidewall violations in that sample.
Another 150 exact stop-aimed on-axis rays reach the image, including the native f/4.6 cone. Native render diagnostics
report zero hidden trimming, and the format and actual UI chief-ray checks pass at the tested stations.

The cemented D3 block carries one 9.5 mm semi-diameter at S16, S17 and S18, as Figure 1 draws it; the unvignetted
full-frame bundle needs at most 9.00 mm there at the five published states. The earlier sampled-ray statistics were
taken with S6 at 14.2 mm and S17/S18 at 10.0 mm and were not repeated. The D1 cement and rear surfaces, S8 and S9,
carry 15.5 mm, close to the 15.7 mm block Figure 1 draws and above the 15.0 mm of L12, while L4's front face stays at
the 14.1 mm shared radius; the doublet's edge therefore renders with a slight taper that the figure does not show. These checks concern the chosen physical apertures and
sampled rays, not a guarantee of uniform illumination over every field, pupil coordinate, or intermediate focus.
The source 7.02° half-field applies at infinity; using that angle as a finite-conjugate stress test does not assert
that the patent publishes the same angular field at macro distances.

The public pupil fan uses a paraxial launch envelope and can oversample the physical iris, particularly at macro
stations. Physically clipped outer fan samples are therefore kept distinct from the separately solved full-iris
on-axis cone. Sampled containment, source fidelity, and the qualified construction association do not certify
production image quality, an exact autofocus distance scale, or a continuous manufactured focus mechanism.

## Sources

1. [CN 120276109 A, original Chinese publication][1]. Front-page bibliographic data; ¶0039–0063 design rationale;
   ¶0065–0073, PDF pages 8–9, Example 1 prescription and focus tables; ¶0084–0094, PDF page 11, conditions and
   conflicting performance commentary; Figure 1, PDF page 14.
2. [Laowa official FF 180mm F4.5 CA-Dreamer Macro 1.5X product page][2], captured 2026-10-08. Product quantities
   are manufacturer statements and remain separate from patent numerical data.
3. [Laowa official optical construction diagram][3], captured 2026-10-08. Qualitative component sequence and
   ED/high-index highlighting; no numerical aperture or production-glass prescription is supplied.
4. [Laowa official 180mm manual, retrieved revision][4], captured 2026-10-08. PDF page 6 contains the Chinese
   specification and mount table; page 12 the English specification table; page 10 the English M/A instructions.
   The upload-directory date does not identify the currently served revision.
5. [Manufacturer launch press release reproduced by DPReview][5], datelined 2025-09-16. Only the explicitly
   attributed manufacturer statement supplies the launch-date and international product-name evidence.
6. [Laowa new-mount announcement][6], page dated 2026-08-05, with manufacturer poster supporting AF X and MF F
   additions and current M/A operation; captured 2026-10-08.
7. [Laowa M/A firmware announcement][7], page dated 2026-04-16, read together with the current manual and later
   mount announcement. It does not provide a numerical optical-control trajectory.
8. [HOYA optical-glass catalog, 2026-07-07 snapshot][8], including obsolete entries. Named HOYA annotations are
   coordinate-equivalent curves; published nominal values and original source values are kept separate.
9. [CDGM optical-glass catalog][9]. H-ZF13 supports the selected L9 coordinate equivalent; catalog agreement is
   not identification of the production supplier.
10. [Searchable record of CN 120276109 A][10], supplementary to the original PDF.
11. [OHARA optical-glass catalog, 2026-07-01 snapshot][11], preserving prefixed and unprefixed glass identities.
12. [SCHOTT preferred and special optical-glass catalog, June 2025 B][12], manufacturer catalog archive.
13. [Nikon HIKARI optical-glass catalog, 2022-07-01 data snapshot][13], manufacturer catalog archive.
14. [SUMITA optical-glass catalog][14], manufacturer Zemax data. Catalog snapshots were retrieved on 2026-10-06
    and rechecked for this analysis; this is not a claim of fresh downloads from every vendor.

[1]: https://patentimages.storage.googleapis.com/e3/7e/a5/9fc23eb003f5d6/CN120276109A.pdf
[2]: https://www.laowalens.com/camera-lens-90
[3]: https://www.laowalens.com/Public/Uploads/uploadfile/images/20250912/3.jingtoujiegoutuxiangqingye-416.png
[4]: https://www.laowalens.com/Public/Uploads/uploadfile/files/20250805/FF180mmF4.5CA-DreamerMacro1.5Xshuomingshu.pdf
[5]: https://www.dpreview.com/news/8252091816/laowa-180mm-f4p5-1p5x-ultra-macro-lens-announcement/
[6]: https://www.laowalens.com/company-news-357
[7]: https://laowalens.com/company-news-318
[8]: https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf
[9]: https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf
[10]: https://patents.google.com/patent/CN120276109A/en
[11]: https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip
[12]: https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351
[13]: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/nikon-hikari20220701.zip
[14]: https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
