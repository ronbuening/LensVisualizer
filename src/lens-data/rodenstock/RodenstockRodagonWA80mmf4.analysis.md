# Rodenstock Rodagon-WA 80mm f/4

## Patent Reference and Design Identification

**Patent:** DE 2818435 B1 (Auslegeschrift)
**Application number:** P 28 18 435.2-51
**Filed:** 27 April 1978
**Published:** 14 December 1978
**Inventors:** Franz Schlegel; Josef Weiß
**Applicant:** Optische Werke G. Rodenstock, 8000 München
**Title:** Vergrößerungsobjektiv
**Classification:** G 02 B 13/24
**Embodiment analyzed:** Sole numerical worked example, normalized to $f' = 100$

DE 2818435 B1 gives one numerical prescription for a six-element wide-angle enlarging objective. The prescription is normalized to $f' = 100$ at the e-line. The production Rodenstock Rodagon-WA 80mm f/4 is represented by applying a uniform 0.8 scale factor to all radii and axial separations.

The identification rests on convergent evidence.

1. The patent prescription has 6 elements in 4 air-separated groups: cemented doublet, positive meniscus, stop, positive meniscus, cemented doublet.
2. Rodenstock's enlarging-lens technical literature lists the Rodagon-WA 80mm f/4.0 as a 6-element / 4-group lens for 6×9 cm negatives.
3. The same Rodenstock table gives the Rodagon-WA 80mm f/4.0 a recommended scale range of 4–15×, a minimum aperture of f/22, a 40.5 mm filter thread, and an M39 × 1/26 mounting thread.
4. The patent text states that a preferred embodiment has a focal length of about 80 mm, an aperture ratio of 1:4, and vignetting-free illumination to a field angle of about 62° at half aperture (nominally f/8 for a 1:4 lens).
5. The computed e-line focal length of the unscaled patent prescription is 99.9216, close to the stated $f' = 100$ after allowing for tabular rounding.

The match is therefore stronger than a focal-length coincidence. The patent's topology, aperture, field claim, focal-length scale, and Rodenstock production table all point to the Rodagon-WA 80mm f/4 rather than to the ordinary Rodagon 80mm f/4.

## Optical Architecture

The Rodagon-WA 80mm f/4 is a quasi-symmetric wide-angle enlarging objective with 6 elements in 4 groups. Its layout is:

- **Group I:** L1 + L2 cemented doublet, net weakly negative.
- **Group II:** L3 positive meniscus before the stop.
- **Aperture stop:** in the central air space, not cemented into glass.
- **Group III:** L4 positive meniscus after the stop.
- **Group IV:** L5 + L6 cemented doublet, net weakly positive.

The patent's central spacing must be read carefully. The table gives $l_2 = 5.75$ from $r_5$ to the stop and $l_3 = 4.19$ from the stop to $r_6$. It then gives $d_4 = 5.02$ as the center thickness of L4 and $l_4 = 1.43$ as the air gap between $r_7$ and $r_8$. At production scale these become 4.600 mm, 3.352 mm, 4.016 mm, and 1.144 mm respectively.

The design is not a strictly symmetric double-Gauss copy. L1 uses a higher-index lanthanum crown, while L6 uses the dense crown glass shared by L3 and L4. The front doublet is net negative, the rear doublet is net positive, and the two isolated menisci are similar but not equal in power. This controlled asymmetry gives the lens a comparatively long image-side working distance while retaining a wide finite-conjugate field.

The patent emphasizes two mechanical simplifications. First, the cemented interfaces are flat. Second, the adjacent non-cemented lenses in each half are intended to touch at their outer rims, reducing dependence on spacer tolerances. In the data file, the inferred semi-diameters are placed just inside the literal touch height so the renderer preserves a small visible clearance in the narrow air gaps.

## Element-by-Element Analysis

The values in this section are production-scale values using d-line catalog equivalents for the patent's e-line glass data. Focal lengths are standalone in-air element focal lengths unless explicitly described as cemented-group values.

### L1 — Plano-Convex Positive

$n_d = 1.69100$, $\nu_d = 54.71$. Glass: N-LAK9 (Schott). $f = +29.812\,\text{mm}$.

L1 is the positive crown component of the front cemented doublet. Its front surface is the strongest positive refracting surface in the design. The rear surface is flat and cemented directly to L2, matching the patent's emphasis on simple flat cemented interfaces.

The high index of N-LAK9 allows the front power to be carried with a moderate radius at the 80 mm scale. It also breaks the front/rear glass symmetry because the corresponding rear positive element, L6, uses N-SK16 instead.

### L2 — Plano-Concave Negative

$n_d = 1.61336$, $\nu_d = 44.49$. Glass: N-KZFS4 class (Schott-preferred). $f = -21.351\,\text{mm}$.

L2 is the negative short-flint component of the front doublet. Its front cemented surface is flat, and its rear surface carries the negative power of the component. Together L1 and L2 form a weakly negative cemented doublet with a computed production-scale focal length of approximately $-242.3\,\text{mm}$.

The patent's e-line data for this glass, $n_e = 1.61669$ and $\nu_e = 44.07$, do not map uniquely to one modern Schott catalog entry. N-KZFS4 is retained as the preferred Schott-class identification because it is the historically plausible German Kurzflint equivalent and closely matches the index. Ohara S-NBM51 is a close cross-vendor equivalent and matches the e-line index more closely, but it is not used as the primary label in the data file.

### L3 — Positive Meniscus, Convex to Object

$n_d = 1.62041$, $\nu_d = 60.32$. Glass: N-SK16 (Schott). $f = +86.311\,\text{mm}$.

L3 is the isolated positive meniscus in the front half. Its two positive radii make it convex to the object side and concave toward the stop. It is the principal positive element in the front half after the weakly negative cemented doublet.

The patent notes that the directly adjacent non-cemented lenses touch at the circumference. For the L2/L3 pair, the scaled $r_3$ to $r_4$ air gap would close at a semi-diameter of about 8.60 mm. The data file uses 8.25 mm for those facing surfaces, preserving the mechanical intent while avoiding literal cross-gap contact in the renderer.

### L4 — Positive Meniscus, Concave to Object

$n_d = 1.62041$, $\nu_d = 60.32$. Glass: N-SK16 (Schott). $f = +99.657\,\text{mm}$.

L4 is the rear meniscus immediately behind the stop. Its two negative radii make it concave to the object side. It is slightly weaker than L3 and is part of the asymmetric power balance between the two halves of the objective.

The correct center thickness for L4 is $d_4 = 5.02$ in the patent table, or 4.016 mm at production scale. This value is distinct from the preceding stop-to-L4 air gap, $l_3 = 4.19$ in patent units.

### L5 — Plano-Concave Negative

$n_d = 1.61336$, $\nu_d = 44.49$. Glass: N-KZFS4 class (Schott-preferred). $f = -30.168\,\text{mm}$.

L5 is the negative component of the rear cemented doublet. It is materially paired with L2 but is optically weaker because its powered surface has a longer radius at production scale. This difference is one of the ways the design avoids strict symmetry.

The L4/L5 facing surfaces are also a near edge-touch pair. The scaled $r_7$ to $r_8$ air gap closes at about 8.47 mm semi-diameter. The data file uses 8.05 mm for the facing surfaces, again preserving a small clearance for renderer stability.

### L6 — Plano-Convex Positive

$n_d = 1.62041$, $\nu_d = 60.32$. Glass: N-SK16 (Schott). $f = +32.508\,\text{mm}$.

L6 is the final positive crown component. Its front cemented surface is flat and its rear surface is convex toward the image side. L5 and L6 form a weakly positive rear cemented doublet with a production-scale focal length of approximately $+283.0\,\text{mm}$.

The rear doublet's net positive power contrasts with the front doublet's net negative power. That power distribution is important: it supports the wide finite-conjugate field and the image-side distance required by the enlarging application.

## Glass Identification and Selection

The patent gives refractive indices and Abbe numbers at the e-line. The data file uses d-line catalog equivalents because the LensVisualizer data convention is d-line based.

| Patent glass | Patent $n_e$ / $\nu_e$ | Data-file glass | Catalog $n_d$ / $\nu_d$ | Elements | Notes |
| --- | ---: | --- | ---: | --- | --- |
| A | 1.69401 / 54.47 | N-LAK9 (Schott) | 1.69100 / 54.71 | L1 | High-index lanthanum crown; close e-line match. |
| B | 1.61669 / 44.07 | N-KZFS4 class (Schott-preferred) | 1.61336 / 44.49 | L2, L5 | Kurzflint / short-flint equivalent; Ohara S-NBM51 is a close cross-vendor match. |
| C | 1.62286 / 60.07 | N-SK16 (Schott) | 1.62041 / 60.32 | L3, L4, L6 | Dense crown; close e-line match. |

The glass palette is deliberately economical: one lanthanum crown, one dense crown, and one short flint class. The patent explicitly contrasts the invention with prior objectives using expensive glass types and states that the new objective should be capable of being made from inexpensive glass types. The design uses glass choice and power distribution rather than a large number of exotic elements.

Catalog anomalous partial-dispersion values are included in the data file as catalog-derived spectral metadata, not as patent-published values. Schott lists $\Delta P_{g,F} = -0.0071$ for N-LAK9, $-0.0100$ for N-KZFS4, and $-0.0011$ for N-SK16. This supports improved secondary-spectrum control, but the patent itself does not claim apochromatic correction.

## Focus Mechanism

The Rodagon-WA 80mm f/4 is an enlarging objective, not an internally focusing camera lens. The optical cell remains rigid. Focus and magnification are set by changing the relative lens, negative, and easel positions in the enlarger.

The patent states that the objective is intended for magnifications between 2× and 8×. Rodenstock's later production table specifies the Rodagon-WA 80mm f/4 for 4–15× with an optimum at 8×. The data file therefore contains no variable internal spacings. The `closeFocusM` value is only a catalog placeholder for a finite-conjugate lens and should not be read as a camera-lens minimum focusing distance.

## Verification Summary

Independent paraxial verification was performed from the patent table using a reduced-angle $y, n u$ trace and a separate ABCD matrix cross-check. The following values use the corrected patent spacing sequence, including $l_2 = 5.75$, $l_3 = 4.19$, $d_4 = 5.02$, and $l_4 = 1.43$.

| Quantity | Patent / target | Computed, patent e-line | Production d-line data file |
| --- | ---: | ---: | ---: |
| Effective focal length | $f' = 100$ normalized | 99.9216 | 79.9492 mm |
| Back focal distance from last glass surface | not tabulated | 77.5980 | 62.0893 mm |
| Front vertex to image plane | not tabulated | 123.1480 | 98.5293 mm |
| Surface-by-surface Petzval sum | not tabulated | 0.0012475 | 0.0015986 |
| Petzval radius | not tabulated | 801.6 | 625.6 mm |

The e-line computed focal length differs from the patent's normalized value by about −0.078%, which is consistent with rounded tabular data. The production-scale d-line focal length of 79.949 mm is effectively the nominal 80 mm production focal length.

The Rodenstock technical table lists a 77.0 mm flange focal length at infinity for the production 80mm Rodagon-WA. That is a mechanical datum from the mounting shoulder, not the same datum as the computed 62.09 mm distance from the final glass surface. The two values are compatible once the barrel geometry and rear-edge offset are recognized as separate from the optical last-surface datum.

The inferred semi-diameters were also checked geometrically. The maximum element front/rear semi-diameter ratio is 1.245, the narrow edge-contact gaps retain approximately 10.5% of their center air spacing at the chosen semi-diameter, and the modeled elements retain positive edge thickness with the selected clear apertures.

## Design Heritage and Context

DE 2818435 B1 cites DE-PS 25 11 061 as the relevant prior art. The patent describes the earlier objective as optically similar in broad construction but relatively long, heavy, and dependent on more expensive glasses. The stated aim of the new design is a wide-angle enlarging objective of short construction, high contrast, and good resolving power at 2–8× magnification and f/4, with inexpensive glasses.

The production Rodagon-WA line applies that design goal directly. Rodenstock's brochure describes the Rodagon-WA as a shorter-focal-length, larger-angle alternative to standard enlarging lenses, intended to give a larger projection area and reduce the required enlarger column height. The 80mm member is the 6×9 cm entry in that line.

## Sources

1. DE 2818435 B1, *Vergrößerungsobjektiv*, Optische Werke G. Rodenstock, published 14 December 1978. Primary source for the prescription, topology, design aim, field claim, and prior-art reference.
2. Rodenstock, *Everything you need to know about enlarging lenses*, archived enlarging-lens brochure. Source for production Rodagon-WA 80mm f/4 specifications: 6 elements / 4 groups, 6×9 cm maximum film size, 4–15× recommended scale range, f/22 minimum aperture, 40.5 mm filter thread, M39 × 1/26 screw thread, and 77.0 mm flange focal length at infinity.
3. SCHOTT Optical Glass Pocket Catalog and N-KZFS4 datasheet. Source for N-LAK9, N-KZFS4, and N-SK16 d-line catalog equivalents and partial-dispersion metadata.
4. OHARA S-NBM51 catalog sheet. Cross-check for the patent's short-flint e-line glass B ambiguity.
