# LEICA SUMMILUX-C 100mm T1.4 — US 8,508,864 B2, Example 3

## Patent Reference and Design Identification

**Patent:** US 8,508,864 B2
**Application Number:** US 12/966,586
**Filed:** December 13, 2010
**Granted:** August 13, 2013
**Inventor:** Iain A. Neil
**Assignee:** ACM Projektentwicklung GmbH
**Title:** Objective Lens System
**Embodiment analyzed:** Third Embodiment / Example 3, Table 5

The implemented prescription is the Third Embodiment of US 8,508,864 B2. The numerical source is Table 5 on PDF
pp. 30–31 (printed pp. 19–22), with the corresponding layout in Fig. 15, focus states in Figs. 16a–c, and performance
material in Fig. 17 and Tables 6–7. The model transcribes source surfaces S3–S26 and omits the plane-parallel front
filter L1/S1–S2. That omission follows the LensVisualizer data scope rather than a claim that the plate is physically
absent from the patent design. Its first-order reference-plane effect is retained as an air-equivalent S1→S3 shift; no geometric scale factor is
applied.

The production identification is a research correlation, not a manufacturer-confirmed patent attribution. The selected
embodiment and the SUMMILUX-C 100 mm share a nominal 100 mm focal length and a very fast cine-lens aperture class. The
patent example uses aspherical correction, while Leitz states that SUMMILUX-C lenses use aspherical elements and a patented
focusing mechanism; the manufacturer does not identify this patent, state that the production 100 mm has exactly the same
two aspheres, or publish the same moving-group prescription. Leitz also documents SUMMILUX-C use on a 2010 production,
placing the product line in the same period as the application. Those points support the comparison, but they do not
establish that the production lens uses this exact prescription.

Several differences remain material. The patent example is evaluated over a 28 mm image diagonal, whereas the current
Leitz SUMMILUX-C specification gives a 33 mm image circle. Table 5 places the F3 object plane 0.696 m in front of S1; after
normalizing to the project focus-control reference by adding the published 0.193248 m S1-to-image track, the patent F3
object-to-image distance is 0.889248 m. Leitz markets 0.99 m close focus. The patent reports +8.9% breathing under its
principal-ray-angle definition, whereas the manufacturer uses the marketing statement “No Breathing.” Finally, T1.4 is a
transmission number and is not evidence for an optical f-number. The final d-line model gives an optical wide-open value
of f/1.3976; the two quantities are therefore kept separate throughout this analysis.

## Optical Architecture

The active model contains 13 glass elements in 10 air-spaced physical groups. The patent organizes the powered system
into three functional blocks: fixed G1a, moving G1b, and moving G2. At the d line in the final model their F1 paraxial
focal lengths are approximately −133.594 mm, +72.413 mm, and +78.983 mm. G1a is therefore negative, while G1b and G2 are
positive. The combined G1a+G1b block remains positive at all three published focus states.

This power distribution is more informative than attaching a historical eponym to the design. The project does not call
the lens telephoto because the active physical track is longer than the effective focal length, and it does not call the
lens retrofocus because its rear distance is shorter than the effective focal length. It is best described here as a
long-focus, high-aperture cine prime with a fixed front block and two coordinated moving positive blocks.

At F1, the final d-line paraxial effective focal length is 99.243 mm and the collimated back focal length measured from the
last refracting surface is 44.764 mm. The modeled wide-open f-number is f/1.3976. These are computed design quantities;
100 mm and T1.4 remain marketed quantities.

The three cemented pairs are D1 = L3+L4, D2 = L6+L7, and D3 = L11+L12. Their d-line cemented-net F1 focal lengths are
approximately −966.060 mm, −142.432 mm, and −50.409 mm. Those figures are net powers of the bonded pairs in their
cemented form. They should not be confused with the isolated air-to-air focal lengths of the individual elements listed
below, and neither measure alone describes the full in-situ aberration contribution of an element inside the complete
lens.

The prescription has exactly one aperture stop, at patent S15 (`STO` in the data file), between moving G1b and the first
glass element of G2. Table 5 explicitly labels S15 as the stop. The Third Embodiment prose elsewhere calls S22 the
field stop/iris, but S22 is the aspherical rear surface of L12 and Fig. 15 places the diaphragm in the S15 region. The
data therefore follows Table 5 and Fig. 15 rather than the conflicting prose.

## Element-by-Element Analysis

The focal lengths in this section are independently computed isolated-element d-line values from the final data file.
For cemented elements, they are air-to-air standalone values used to characterize sign and strength; the bonded-pair
net powers are given separately above. They are not claims that each element behaves with the same power in the assembled
lens.

### L2 — Biconvex Positive, fixed G1a

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +127.898 mm.**

L2 is the first powered element retained after omission of the source front filter. It is a high-Abbe positive element
and forms the front of fixed G1a. Its large clear semi-diameters, 35.58 mm at the front surface and 35.09 mm at the rear,
make it one of the aperture-defining front elements in the patent prescription.

Its role can be stated securely at the architectural level: it contributes positive power to a functional block whose
net power is negative. The data do not isolate a particular monochromatic aberration contribution for L2, so no stronger
claim is made about what it “corrects” by itself.

### L3 — Biconvex Positive, front member of D1

**nd = 1.74400, νd = 44.78. Glass: S-LAM2 (OHARA). f = +57.963 mm.**

L3 is a relatively strong positive element cemented directly to L4. The L3→L4 junction is patent S6; in the data model
that cemented interface correctly carries the downstream L4 medium and element identity. The pair is annotated D1.

Although L3 is strongly positive in isolation, the complete L3+L4 cemented pair is weakly negative, with a verified net
focal length of about −966.060 mm. This illustrates why isolated-element power should not be substituted for the power of
a cemented assembly.

### L4 — Biconcave Negative with aspherical rear surface, rear member of D1

**nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA). f = −45.060 mm.**

L4 is the negative partner in D1. Its rear surface is patent S7, represented as `7A`, and carries the first asphere in the
design. The element therefore combines substantial negative standalone power with a strongly shaped rear boundary.

The asphere materially changes the rim sag relative to the underlying sphere, but the executed calculations do not decompose the
result into separate spherical-aberration, coma, or distortion contributions. The defensible statement is that L4 supplies
negative power within fixed G1a and carries the first geometric aspheric correction surface.

### L5 — Biconcave Negative singlet

**nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA). f = −46.970 mm.**

L5 is an air-spaced negative singlet using the same OHARA S-NBM51 catalog coordinate as L4. It sits between the D1 and D2
cemented pairs and remains part of fixed G1a.

Its two concave surfaces make its negative sign unambiguous in the isolated-element calculation. The surrounding air gaps
are optically significant to the group behavior; the element should therefore be interpreted as part of the distributed
negative front block rather than as an independent corrector with a single assigned aberration task.

### L6 — Positive Meniscus, front member of D2

**nd = 1.76200, νd = 40.10. Glass: S-LAM55 (OHARA). f = +51.804 mm.**

L6 is the positive front member of the second cemented pair, D2. Its rear surface is the cemented interface with L7 at
patent S11.

The standalone positive power is stronger than the eventual negative net power of the bonded pair because L7 is a
stronger negative partner. The final d-line model gives D2 a net focal length of approximately −142.432 mm.

### L7 — Negative Meniscus, rear member of D2

**nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA). f = −40.087 mm.**

L7 completes D2 and ends fixed G1a at patent S12. Its relatively low Abbe number and negative power contrast with the
positive S-LAM55 element cemented ahead of it.

S12 is also one of the three published variable spacings. The glass element itself does not move relative to G1a; rather,
the S12 air gap changes as the following G1b element translates during focusing.

### L8 — Biconvex Positive moving G1b element

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +72.413 mm.**

L8 is the sole glass element of functional group G1b. Its isolated d-line focal length therefore equals the verified G1b
group focal length at F1, about +72.413 mm. Unlike G1a, G1b moves during focusing.

The patent and Figs. 16a–c show G1b moving toward object space as focus is brought closer. Relative to F1, the L8 front
vertex moves 0.497 mm toward the object at F2 and 1.010 mm at F3. Those motions come directly from the published S12
spacing changes and do not require an inferred focus reconstruction.

### L9 — Positive Meniscus in G2

**nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = +127.106 mm.**

L9 is the first glass element behind the stop and the first refracting element of moving G2. It uses the highest-Abbe
catalog glass in the prescription, S-FPL53.

The stop remains 0.900 mm in front of L9 in all three published states because it travels with G2 in the implemented
model. The patent's coordinated group motion therefore preserves the internal stop-to-L9 relationship while the entire
G2 block shifts toward object space.

### L10 — Weak Positive Meniscus in G2

**nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA). f = +6666.516 mm.**

L10 is a very weak positive meniscus when treated as an isolated air-to-air element. Its high refractive index and low
Abbe number make its material coordinates markedly different from the adjacent FPL elements, but the nearly balanced
surface curvatures leave little standalone paraxial power.

The very long isolated focal length should not be read as optical irrelevance. In the assembled lens the element is
embedded in a converging multi-element group and its refractive interfaces act on rays already shaped by L9 and the
preceding stop.

### L11 — Positive Meniscus, front member of D3

**nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA). f = +175.490 mm.**

L11 is the second S-FPL53 element and the positive front member of cemented pair D3. Its rear surface is the junction to
L12 at patent S21.

D3 as a bonded pair is strongly negative despite L11's positive standalone power. The verified d-line net focal length of
L11+L12 is approximately −50.409 mm, reflecting the substantially stronger negative power of L12.

### L12 — Biconcave Negative with aspherical rear surface, rear member of D3

**nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA). f = −40.084 mm.**

L12 is the negative rear member of D3. Its rear boundary is patent S22, represented as `22A`, and carries the second
asphere. This is also the surface incorrectly called the iris in one passage of the Third Embodiment prose.

The numerical table is internally clear: S22 is a refracting surface of L12, not the aperture stop. Its aspheric profile
is retained as an optical surface while the single physical stop remains S15.

### L13 — Positive Meniscus in G2

**nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA). f = +215.541 mm.**

L13 is a stronger positive S-NPH1 meniscus than L10. Table 5 prints the glass code as `80822` while naming the material
SNPH1. The data normalize that malformed code to OHARA S-NPH1 code `808228`, which is also the code printed for L10 and
the current OHARA catalog identity.

The raw five-digit source value is preserved in the evidence record. The corrected code is therefore a documented source
normalization rather than an unrecorded edit to the patent.

### L14 — Biconvex Positive rear element

**nd = 1.80400, νd = 46.58. Glass: S-LAH65V (OHARA; patent name SLAH65). f = +51.684 mm.**

L14 is the final powered element and a relatively strong positive biconvex component. The patent uses the legacy name
SLAH65 with code 804466; the current OHARA catalog uses S-LAH65V for the same code and d-line coordinate.

Its rear surface is S26, after which the published image distance changes with focus. At F1 the physical S26-to-image
spacing is 44.800 mm; the computed collimated d-line BFL is 44.764 mm. The small difference reflects the use of public
catalog glass coordinates rather than designer melt data and is retained rather than forced to zero.

## Glass Identification and Selection

The patent states that the listed glasses are available from OHARA, so the supplier identity is source evidence rather
than a brand-based inference. The model stores d-line `nd`/`νd` and a catalog-derived `dPgF` for each element; the
chromatic trace takes the full dispersion curve from the matching OHARA Sellmeier entry, because Table 5 publishes no line
indices. OHARA notes that catalog coordinates are representative values for glass types rather than exact melt data;
that limitation applies to all calculations using these public coordinates.

| OHARA glass | nd | νd | dPgF | Elements | Source/model note |
|---|---:|---:|---:|---|---|
| S-FPL51 | 1.49700 | 81.54 | +0.030850 | L2, L8 | High-Abbe low-dispersion glass in fixed G1a and moving G1b |
| S-FPL53 | 1.43875 | 94.93 | +0.049872 | L9, L11 | Highest-Abbe glass in the model; used twice in moving G2 |
| S-LAM2 | 1.74400 | 44.78 | −0.002980 | L3 | Positive member of D1 |
| S-NBM51 | 1.61340 | 44.27 | −0.006038 | L4, L5 | Negative elements in fixed G1a |
| S-LAM55 | 1.76200 | 40.10 | +0.000148 | L6 | Positive member of D2 |
| S-NBH8 | 1.72047 | 34.71 | −0.002018 | L7, L12 | Negative members of D2 and D3 |
| S-NPH1 | 1.80809 | 22.76 | +0.025182 | L10, L13 | High-index, low-Abbe menisci in G2 |
| S-LAH65V | 1.80400 | 46.58 | −0.008152 | L14 | Current OHARA name for patent SLAH65 / code 804466 |

The patent prose calls SFPL51 and SFPL53 "abnormal dispersion" glasses, although it attaches them to element numbers
(L2, L7 and L16; L4, L11, L12 and L13) that do not match Table 5. The table places S-FPL51 at L2 and L8 and S-FPL53 at L9
and L11, so those four elements carry the patent anomalous-dispersion tag in the data file.

The distribution of these glasses supports a careful chromatic interpretation without requiring an APO label. High-Abbe
S-FPL51 appears in the fixed front region and in the moving G1b element, while very-high-Abbe S-FPL53 appears twice in G2.
Those elements are interleaved with substantially lower-Abbe S-NBH8 and S-NPH1 components. This is consistent with
multi-region chromatic balancing, but the patent table does not assign each material a unique chromatic-correction task,
and the executed spectral evidence does not establish a system-level apochromatic classification.

The stored `dPgF` values are catalog-derived material properties computed from OHARA line data using the SCHOTT normal-line
convention. They are not copied from Table 5, which prints OHARA names/codes but not numerical line indices. Their presence
supports dispersion-aware material identification; it does not by itself prove a particular secondary-spectrum result for
the complete lens.

## Focus Mechanism

Focus status is **PUBLISHED**. No internal motion is reconstructed. Table 5 gives F1, F2, and F3 values for exactly three
variable spacings: S12, S14, and S26. Figs. 16a–c show the same mechanism: fixed G1a, moving G1b, and moving G2, with both
moving groups translating toward object space as the focus distance decreases.

| State | Patent object distance from S1 | S12 gap (mm) | S14 gap (mm) | S26-to-image (mm) | G1b shift from F1 (mm) | G2 shift from F1 (mm) |
|---|---:|---:|---:|---:|---:|---:|
| F1 | 1,000,010 mm | 1.810 | 14.200 | 44.800 | 0.000 | 0.000 |
| F2 | 1,440 mm | 1.313 | 7.672 | 51.824 | −0.497 | −7.025 |
| F3 | 696 mm | 0.800 | 1.300 | 58.709 | −1.010 | −13.910 |

The negative shift signs above denote motion toward the object relative to F1. The sum S12 + S14 + S26 is conserved to
the 0.001 mm precision of the source table, which keeps the image plane fixed to source rounding while the two internal
blocks move.

The focus control uses object-to-image distance when a published value can be formed. Table 5 gives S0-to-S1 distances
of 1.440 m at F2 and 0.696 m at F3, while the corresponding S1-to-image track is 0.193248 m in both states. The normalized
distances are therefore 1.633248 m and 0.889248 m, so the data file maps F2 to
`focusT = 0.5444659965908423 = 0.889248 / 1.633248`. Interpolation between the three published keyframes is a viewer/model
operation; only F1, F2, and F3 are patent-published mechanical states.

`closeFocusM = 0.889248` is the patent F3 object-to-image distance used by the project focus control. It is not the
production specification. Leitz publishes 0.99 m close focus for the SUMMILUX-C 100 mm, and the difference is retained as
part of the correlation limit rather than used to alter the published patent spacings.

## Aspherical Surfaces

The Third Embodiment has two rotationally symmetric even-order aspheres: patent S7 on the rear of L4 and patent S22 on the
rear of L12. They are labeled `7A` and `22A` in the data file. The patent equation is the standard conic sag form

\[
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2 h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14},
\]

with `c = 1/R`. Its printed `K` therefore maps directly to the LensVisualizer conic constant; no `KA − 1` conversion is
required. The prescription is unscaled (`s = 1.0`), so the coefficients are entered without scale transformation.

| Model / patent surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 7A / S7 | +0.3518 | −1.071e−6 | −1.440e−9 | −3.022e−13 | −5.736e−15 | +5.900e−18 | −1.142e−20 |
| 22A / S22 | 0 | +3.358e−6 | −1.009e−9 | +3.1845e−12 | −1.293e−14 | +2.044e−17 | −1.237e−20 |

Two source defects are explicitly corrected. S7's A4 term is printed with a double decimal as
`-0.1.071 × 10^-05`; the implemented value is `−1.071e−6`. S22's A8 term is printed without a multiplication sign as
`0.3184510^-11`; the implemented value is `+3.1845e−12`. The raw strings remain in the evidence record. Both readings were
stress-tested in the source-model ray reproduction before being carried into the final data.

At the patent's published semi-diameters, 7A/S7 has a verified aspheric departure of +0.403567 mm at 21.10 mm radial
height, while 22A/S22 departs by +0.636151 mm at 21.52 mm. These are total departures from the corresponding spherical
base at those exact source apertures, not generic edge departures at an assumed diameter.

The retained semi-diameters also satisfy the current geometric checks. The maximum actual rim-slope angle is 51.105°,
the minimum glass edge thickness is 2.031 mm, and all physical facing-surface edge clearances remain positive. Three
tight source air gaps exceed the default shared-band `gapSagFrac = 0.90` policy, so the data use a documented per-lens
value of 0.98. The verified maximum intrusion fraction is 0.967816; no source aperture was reduced to obtain the pass.

## Chromatic Correction Strategy

The glass distribution shows a repeated high-Abbe/low-Abbe pattern across the design rather than concentrating the
low-dispersion materials in only one location. S-FPL51 is present in fixed G1a and moving G1b, and S-FPL53 appears twice
inside G2. Lower-Abbe S-NBH8 and S-NPH1 elements occur in the cemented and air-spaced structures around them.

That arrangement is compatible with distributed longitudinal and secondary-spectrum control, especially in a lens whose
focus operation moves two positive functional blocks. The evidence, however, supports only the glass coordinates and the
calculated line-data properties. It does not support calling the design apochromatic, nor does it establish which single
surface or element is responsible for a measured chromatic residual. Any stronger system-level chromatic claim would
require corresponding final-model spectral tracing.

## Patent Conditions and Verified Example Performance

The patent gives both source performance tables and explicit design conditions. Table 6 reports full-field relative
illumination values above the claimed 35% floor for all three focus positions. The numerical minimum in the table is
53.3% at F2/full field; adjacent prose incorrectly summarizes the range as starting at 53.9%. The model preserves the
Table 6 numerical value and records the prose discrepancy rather than changing either source silently. Table 6 also
shows a maximum absolute distortion of 0.33%.

Those Table 6 illumination and distortion values are source facts only. They have not been independently
reproduced by a full aberration/illumination engine, so they should not be read as LensVisualizer-generated performance
predictions.

Table 7 gives 100 mm full-field chief-ray angles of 7.630°, 7.161°, and 6.752° for F1, F2, and F3. The source-model
e-line exact trace reproduces them within the printed 0.001° precision. The final d-line model gives corresponding chief
angles of 7.63356°, 7.16355°, and 6.75463°. The maximum remains below the patent's selected-example 9° statement and the
focus variation remains below the patent's 5° claim condition.

The patent defines focus breathing from the change in full-field object-space principal-ray angle and reports +8.9% for
the Third Embodiment. Independent e-line tracing gives 8.9369% under that same definition. This result is not directly
interchangeable with the manufacturer's “No Breathing” marketing statement because the source and manufacturer do not
publish a common measurement method or threshold.

The patent also describes the lens as approximately f/1.4. The final data retain the published physical stop and source
clear apertures rather than solving a new diaphragm diameter from that statement. Exact d-line tracing through those
authored apertures gives f/1.3976 at F1. Agreement with “approximately f/1.4” is therefore a model check, not proof of an
unpublished production iris diameter and not a T-stop calculation.

## Sources / References

1. Iain A. Neil, **“Objective Lens System,” US 8,508,864 B2**, granted August 13, 2013. Primary prescription: Third
   Embodiment, Table 5, PDF pp. 30–31 (printed pp. 19–22); layout Fig. 15; focus Figs. 16a–c; performance Fig. 17 and
   Tables 6–7. Searchable family text: https://patents.google.com/patent/US8508864B2/en
2. Leitz Cine, **SUMMILUX-C** product page, manufacturer source for marketed 100 mm member, T1.4–T22, Super 35 / 33 mm
   image circle, 0.99 m close focus, PL mount, and current product-line statements:
   https://www.leitz-cine.com/product/summilux-c
3. Leitz Cine, **The Switch — 2010**, manufacturer production page used only as timing evidence for SUMMILUX-C availability:
   https://www.leitz-cine.com/production/the-switch-2010
4. OHARA Corporation, **Optical Glass Pocket Catalog 2023-05**, source for S-FPL51, S-FPL53, S-LAM2, S-NBM51, S-LAM55,
   S-NBH8, and S-NPH1 catalog coordinates and line data:
   https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
5. OHARA Corporation, **S-LAH Glass Types / detailed data**, current S-LAH65V naming and code 804466:
   https://oharacorp.com/glass-type/optical-glass/s-lah/
6. OHARA Corporation, **Optical Glass Properties**, catalog/melt-data context:
   https://oharacorp.com/technical/optical-glass-properties/
7. SCHOTT, **TIE-29 Refractive Index and Dispersion**, used for the normal-line definition behind the stored `dPgF`
   calculations: https://www.schott.com/shop/medias/tie-29-refractive-index-and-dispersion-eng.pdf

## Image-plane source audit (2026-09-25)

MTF image-plane audit (2026-09-25): US8508864B2 Example 3, Table 5
(PDF pp. 30–31), matches the active radii, spacings, named glass codes
and the already documented aspheric typo interpretations. F1 retains
44.800 mm to the image, versus paraxial BFL 44.763797 mm (offset
-0.036203 mm). The front filter has no infinity-focus power; no rear
plate is listed. The small difference may include finite-aperture and
spectral design-focus choices, but these are not specified by the source.
Keep the published image distance rather than adjusting it to focus.
