# LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL

## Patent Reference and Design Identification

**Patent:** US 5,161,060 A
**Filed:** February 15, 1991
**Priority:** February 20, 1990 (Federal Republic of Germany)
**Granted:** November 3, 1992
**Inventor:** Walter Watz
**Assignee:** Leica Camera GmbH
**Title:** *Camera Lens*
**Embodiment analyzed:** FIG. 1 preferred embodiment, corresponding to job-card Example 1

The prescription is the single fully tabulated FIG. 1 preferred embodiment in US 5,161,060. The patent specifies a
35 mm lens with relative aperture 1:1.4, five components, nine glass elements, a diaphragm between the second and third
components, and aspherical surfaces 4 and 13. The source table uses native e-line refractive coordinates, written as
$n_e$ and $\nu_e$, rather than d-line coordinates. The implemented data preserves that reference system with
`indexReference: "e"`. [US 5,161,060, PDF pp. 5–6, printed pp. 2–3.]

The production correlation is strong but remains an inference rather than a manufacturer-confirmed patent attribution.
Several independent identifiers converge:

1. Leica is both the patent assignee and the production-lens manufacturer.
2. The patent describes a 35 mm f/1.4 lens with nine elements in five components and two aspherical surfaces.
3. Leica's historical system handbook lists the **35 mm SUMMILUX-M f/1.4 ASPHERICAL**, order code **11873**, with
   nine elements in five components, two aspherical surfaces, a 64° field, Leica M rapid bayonet, 0.7 m minimum focus,
   and about 1:17.5 maximum magnification.
4. Leica Classic separately lists product 11873 as “Leica Summilux-M 11873 1,4/35mm ASPHERICAL.”
5. The patent's published 64° field, 0.7 m close-range statement, and 1:17.5 magnification agree with the historical
   Leica handbook values.

No Leica source in the dossier explicitly states that order code 11873 implements US 5,161,060. The data therefore
labels the correlation as inferred. The historical handbook leaf carries the print code 12/89; that code is retained as
a document marking and is not treated as a definitive launch date.

The marketed focal length is 35 mm. Recalculation from the final implemented prescription gives an e-line Gaussian EFL
of **35.411722 mm**. The marketed maximum aperture is f/1.4; the modeled f-number is also 1.4, but that equality results
from calibrating an unpublished physical stop diameter to the patent's f/1.4 target and is not an independent diaphragm
measurement.

## Optical Architecture

The patent does not assign this lens to a named historical design family. Structurally, the selected embodiment is a
five-component fast wide-angle prime with four cemented pairs and one single meniscus. The stop lies after G2 and before
G3. In source order the components are G1 = surfaces 1–3, G2 = 4–6, G3 = 8–9, G4 = 10–12, and G5 = 13–15; source plane
7 is the diaphragm.

The patent describes the component-power sequence as positive, negative, positive, positive, negative. Independent
paraxial calculation from the final data confirms the first four signs, but not the fifth. The isolated final-data
component powers are approximately +0.010845, −0.005587, +0.016766, +0.013010, and **+0.001100 mm⁻¹** for G1 through
G5. Thus G5 is slightly positive in the numerical prescription even though the patent prose and claim 2 call it
negative. The numerical table is retained without alteration; this contradiction is not reconciled by changing the
prescription.

The modeled surface-1-to-surface-15 vertex track is **46.440 mm**, while the e-line EFL is **35.411722 mm**. The Gaussian
BFD from the surface-15 vertex is **19.636496 mm**. Consequently, under the project's explicit terminology, the design is
neither “telephoto” (`TL/EFL = 1.31143`, not below 1) nor “retrofocus” (`BFD/EFL = 0.55452`, not above 1).

The patent gives 19 mm in prose for the intercept distance but tabulates **19.595 mm** from surface 15 to image plane 16
and explicitly defines that row as the image-plane separation. The implemented model follows the tabulated 19.595 mm.
The approximately 0.0415 mm difference between that source plane and the calculated Gaussian BFD is consistent with the
limited precision of the patent's three-decimal refractive indices; it is not removed by changing the rear spacing.

## Element-by-Element Analysis

### L1 / patent lens 30 — Biconcave Negative

**$n_e = 1.503$, $\nu_e = 56.1$. Glass: S-FTL10 coordinate-compatible spectral proxy; native e-line 503561, supplier/melt unproven. Standalone $f = -40.200$ mm.**

L1 is the negative member of the front cemented component G1. It is followed directly by L2 at the cemented surface 2,
so its standalone focal length describes the element isolated in air rather than its in-situ contribution. Together L1
and L2 form a component whose isolated net power is positive, approximately +0.010845 mm⁻¹. The patent identifies the
first component as positive and concave on the object side but does not assign a separate aberration-correction function
to L1 alone. [US 5,161,060, PDF p. 5, printed p. 2.]

### L2 / patent lens 32 — Biconvex Positive

**$n_e = 1.820$, $\nu_e = 45.1$. Glass: TAFD10 coordinate-compatible spectral proxy; native e-line 820451, supplier/melt unproven. Standalone $f = +28.382$ mm.**

L2 supplies the stronger positive standalone power in G1 and shares the cemented interface at surface 2 with L1. The
combination of a negative first element and stronger positive second element produces the positive net G1 power verified
from the final prescription. No public supplier/melt identity is assigned to the 820451 coordinate, and no unsupported
spectral-line data are attached to the element.

### L3 / patent lens 34 — Biconvex Positive with Aspherical Front Surface

**$n_e = 1.820$, $\nu_e = 45.1$. Glass: TAFD10 coordinate-compatible spectral proxy; native e-line 820451, supplier/melt unproven. Standalone $f = +23.924$ mm.**

L3 begins the second cemented component and carries the first asphere at surface 4A. In the implemented representation,
its vertex radius is the equation-consistent value derived from the patent's $K(1)$ coefficient rather than the slightly
rounded radius printed in the construction table. L3 is cemented to negative L4; the pair has a small net negative
isolated power, approximately −0.005587 mm⁻¹, in agreement with the patent's sign description of G2.

The patent's design discussion attributes the use of its two convex aspherical surfaces to improved correction in the
marginal image region and to avoiding more difficult aspherical forms. That statement applies to the design strategy as a
whole; it does not establish a separately quantified aberration contribution for L3. [US 5,161,060, PDF p. 5, printed
p. 2.]

### L4 / patent lens 36 — Biconcave Negative

**$n_e = 1.694$, $\nu_e = 31.0$. Glass: N-SF8 coordinate-compatible spectral proxy; native e-line 694310, supplier/melt unproven. Standalone $f = -18.422$ mm.**

L4 is the negative member of G2 and follows L3 without an air gap at surface 5. Its standalone power is stronger in
magnitude than L3's positive standalone power, leaving the cemented component weakly negative. The patent describes G2 as
convex on the object side and negative overall, which is consistent with the final numerical prescription. It does not
publish a separate material name for the 694310 coordinate.

### L5 / patent lens 38 — Positive Meniscus, Concave to Object

**$n_e = 1.792$, $\nu_e = 47.2$. Glass: N-LAF21 coordinate-compatible spectral proxy; native e-line 792472, supplier/melt unproven. Standalone $f = +59.644$ mm.**

L5 is the only single-element component. It lies immediately behind the stop and is a positive meniscus with its concave
face toward the object, matching the patent description of G3. Because G3 contains no cemented partner, L5's standalone
power is also the isolated component power. A nearby modern HIKARI high-index lanthanum-glass coordinate was found during the glass audit, but the
source does not establish its historical supplier. N-LAF21 supplies a compatible spectral proxy with the original native-e coordinates retained.

### L6 / patent lens 40 — Biconcave Negative

**$n_e = 1.652$, $\nu_e = 33.6$. Glass: SF2 coordinate-compatible spectral proxy; native e-line 652336, supplier/melt unproven. Standalone $f = -26.711$ mm.**

L6 begins the fourth component as its negative member. It is cemented to L7 at surface 11. The final-data calculation
keeps the distinction between this standalone negative power and the net behavior of the pair: G4 as a whole is positive,
with isolated power approximately +0.013010 mm⁻¹. A close modern HIKARI coordinate supports only a broad dense-flint
class description; it is not treated as proof of the historical glass.

### L7 / patent lens 42 — Biconvex Positive

**$n_e = 1.820$, $\nu_e = 45.1$. Glass: TAFD10 coordinate-compatible spectral proxy; native e-line 820451, supplier/melt unproven. Standalone $f = +22.469$ mm.**

L7 is the positive member of G4 and has the stronger standalone power of the two elements in that cemented component.
Its combination with L6 yields the positive G4 sign stated by the patent. The repeated 820451 coordinate is preserved
literally across L2, L3, L7, and L8 while TAFD10 provides a spectral proxy without identifying the original supplier.

### L8 / patent lens 44 — Biconvex Positive with Aspherical Front Surface

**$n_e = 1.820$, $\nu_e = 45.1$. Glass: TAFD10 coordinate-compatible spectral proxy; native e-line 820451, supplier/melt unproven. Standalone $f = +25.860$ mm.**

L8 begins G5 and carries the second aspherical surface at 13A. Its equation-consistent vertex radius is taken from
$1/K(1)$ in the patent's own sag equation. L8 is cemented to negative L9 at surface 14. As with L3, the asphere is part of
the patent's two-surface marginal-image correction strategy, but no separate quantitative aberration role for L8 is
published.

### L9 / patent lens 46 — Biconcave Negative

**$n_e = 1.624$, $\nu_e = 36.1$. Glass: F2 coordinate-compatible spectral proxy; native e-line 624361, supplier/melt unproven. Standalone $f = -24.788$ mm.**

L9 is the rear negative element of G5. Current OHARA PBM2R and HIKARI J-F2 entries are both coordinate-compatible with the
native e-line pair, but neither establishes the original Leica supplier or melt. The data therefore records only the
coordinate class.

The L8/L9 pair exposes the principal source contradiction in this embodiment. Using the final equation-consistent surface
13A radius and the published media, G5 has a small **positive** isolated power of about +0.001100 mm⁻¹, corresponding to
an isolated EFL near +909 mm. The patent's detailed description and claim 2 instead call the fifth component negative.
The numerical prescription remains internally coherent as a complete 35 mm system, so the analysis preserves both facts
rather than changing the table to force the prose sign.

## Glass Identification and Selection

The patent specifies six distinct optical-material coordinates, all in the native e-line $n_e/\nu_e$ system. It does not
name glass manufacturers. The model retains those native coordinates and uses compatible catalog Sellmeier curves as spectral proxies. These
curves do not identify the historical supplier or melt; no catalog line-index overrides are copied into the prescription.

| Native e-line coordinate | Elements | Authored disposition | Catalog context |
|---|---|---|---|
| 503561 | L1 | S-FTL10 spectral proxy | Native-e coordinate match; supplier/melt unproven |
| 820451 | L2, L3, L7, L8 | TAFD10 spectral proxy | Compatible native-e coordinates; supplier/melt unproven |
| 694310 | L4 | N-SF8 spectral proxy | Compatible native-e coordinates; supplier/melt unproven |
| 792472 | L5 | N-LAF21 spectral proxy | Compatible native-e coordinates; supplier/melt unproven |
| 652336 | L6 | SF2 spectral proxy | Compatible native-e coordinates; supplier/melt unproven |
| 624361 | L9 | F2 spectral proxy | Compatible native-e coordinates; supplier/melt unproven |

This distinction matters for spectral interpretation. The data contains no authored `nC`, `nF`, `ng`, or `dPgF` fields,
and none of the candidate modern glass identities is treated as a validated historical supplier/melt match. The
prescription therefore does not support an APO or anomalous-partial-dispersion claim. Chromatic conclusions should remain
within the limits of the patent's own published aberration plots and the retained e-line/Abbe coordinates.

## Focus Mechanism

The implemented focus status is **NO_INTERNAL_RECONSTRUCTION**. The patent publishes only one numerical prescription.
It states that the preferred embodiment retains image quality at close range down to **0.7 m** and gives a linear
magnification of about **1:17.5**, but it provides no second spacing table, moving-group identity, movement direction, or
other constraints sufficient to solve an internal optical motion law. [US 5,161,060, PDF p. 6, printed p. 4.]

The historical Leica system handbook independently describes a **non-rotating focusing mount** and gives the same
infinity-to-0.7 m range and approximately 1:17.5 magnification. That mechanical description still does not determine
which optical group or groups move internally. Accordingly, `var` is empty in the data file, and the 0.7 m value is a
published performance endpoint rather than a reconstructed close-focus prescription.

The available evidence therefore does not justify classifying the optical focusing scheme as unit focus, inner focus,
rear focus, or floating focus. Any such classification would require mechanism-constraining evidence not present in the
selected patent or manufacturer material used for this dossier.

## Aspherical Surfaces

The patent places aspheres on source surfaces **4** and **13**, implemented as **4A** and **13A**. Its equation is not the
usual conic-plus-even-polynomial form. Instead it gives

$$
p(s)=\sum_{n=1}^{6}K(n)\left(\frac{s^2}{2}\right)^n,
$$

and explicitly states that $K(1)$ is the reciprocal of the vertex radius. [US 5,161,060, PDF p. 6, printed p. 3.]

LensVisualizer's authored asphere form has no independent $A_2$ term. The exact representation therefore uses the
standard conic carrier with **K = −1**, for which the base sag becomes exactly $h^2/(2R)$, together with
$R=1/K(1)$ and $A_{2n}=K(n)/2^n$ for $n\ge2$. The `K = -1` values in the data are algebraic carriers for the patent's
direct polynomial; they are not a claim that Leica specified paraboloidal physical surfaces.

The final mapped coefficients are:

| Surface | Vertex radius R (mm) | Carrier K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 4A | 28.3462781337 | −1 | −9.7585e−6 | −3.925875e−8 | +3.2073125e−10 | −2.1098125e−12 | +4.71109375e−15 |
| 13A | 60.0276127018 | −1 | −5.85875e−6 | +4.007375e−9 | +1.285e−11 | −1.7418125e−13 | +3.7078125e−16 |

The source construction table prints radii 28.346 mm and 60.026 mm. Those are slightly rounded relative to the radii
implied by the published $K(1)$ values. The final data uses the equation-consistent radii above while the raw printed
values remain preserved in the evidence record.

At the modeled semi-diameters of **12.6 mm** on 4A and **14.2 mm** on 13A, the mapped sag equation is algebraically
identical to the source polynomial within floating-point precision. Relative to same-radius spherical vertex carriers,
the modeled departures are approximately **−0.49061 mm** and **−0.24143 mm**, respectively. These departures are quoted
only at the modeled apertures; the patent does not publish those clear semi-diameters.

The patent argues that its two convex aspherical surfaces permit the desired marginal-image correction without resorting
to more difficult aspherical forms used in prior designs. It does not identify the production manufacturing process, so
this analysis does not classify the surfaces as molded, polished, hybrid, or otherwise.

## Verification Summary

All numerical quantities in this section are recomputed from the final `.data.ts` revision rather than from a separate
copy of the intended prescription. Sequential height/reduced-angle tracing and a separately implemented ABCD matrix
calculation agree for the first-order model.

| Quantity | Final implemented result | Interpretation |
|---|---:|---|
| EFL | 35.411722 mm | e-line Gaussian result; patent heading gives nominal 35 mm |
| Gaussian BFD | 19.636496 mm | from surface-15 vertex; source image-plane spacing is 19.595 mm |
| Surface 1 → surface 15 track | 46.440 mm | physical vertex track excluding rear image spacing |
| Petzval sum | +0.00405420 mm⁻¹ | surface-by-surface $\phi/(n n')$ over the 14 refracting surfaces |
| Stop semi-diameter | 9.754773 mm | modeled calibration, not a published physical diaphragm dimension |
| Entrance-pupil diameter | 25.294087 mm | computed from the calibrated stop and front subsystem |
| Modeled f-number | 1.400000 | calibration match to the published f/1.4 target |

The patent publishes no surface semi-diameters. The data-file apertures are therefore modeled values derived from traced
ray envelopes and the relative aperture ordering visible in FIG. 1. The portable geometry checks find positive
edge thickness and air-gap clearance, acceptable actual rim slopes, valid conic domains, and containment of the required
sampled ray bundles. These results support the authored geometry, but they are not production `buildLens()` or
`computeElementRenderDiagnostics()` results; those remain integration checks.

The prescription contains no sensor cover glass, filter, inactive dummy plane, or mechanical plane, and no dimensional
scale factor is applied. The precise source surface-15-to-image-plane spacing of 19.595 mm is retained directly; there is
no air-equivalent rear-plate conversion.

## Sources and References

1. Walter Watz, **“Camera Lens,” US Patent 5,161,060**, assigned to Leica Camera GmbH, granted November 3, 1992.
   Primary prescription: FIG. 1 and construction/asphere tables on supplied PDF pp. 5–6 (printed pp. 2–3); close-range
   discussion on PDF p. 6 (printed p. 4).
2. **Leica, *Handbook of the Leica System Photography***, historical handbook scan, product page for “35 mm
   SUMMILUX-M f/1.4 ASPHERICAL,” order code 11873, printed page 5-6, page code 12/89. Archived scan:
   https://www.pacificrimcamera.com/rl/03384/03384.pdf
3. **Leica Camera AG / Leica Classic**, product-list PDF identifying “Leica Summilux-M 11873 1,4/35mm ASPHERICAL”:
   https://classic.leica-camera.com/media/58/09/9f/1738594230/ListeEinbruch-final.pdf
4. **Leica Camera AG**, Leica M-A technical data, used for Leica M-bayonet / 35 mm system context:
   https://leica-camera.com/sites/default/files/pm-56106-Technical-Data-Leica-M-A_EN.pdf
5. **OHARA Corporation**, S-FTL10 optical-glass datasheet, used only as native-e coordinate-candidate evidence:
   https://oharacorp.com/wp-content/uploads/2023/06/esftl10.pdf
6. **OHARA INC.**, PBM2R optical-glass datasheet, used only as native-e coordinate-candidate evidence:
   https://www.ohara-inc.co.jp/assets/en/product/pdf/epbm02r.pdf
7. **HIKARI GLASS CO., LTD.**, current optical-glass catalog, used for native-e coordinate-neighbor/candidate checks:
   https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf

## Image-plane source audit (2026-09-25)

MTF source audit: the e-line prescription gives BFL 19.636496 against
published S15-to-image 19.595 mm (offset +0.041496), EFL 35.411722
against nominal 35. The source discusses best focusing and −0.07 mm
defocus for field curvature, but does not tie those to the S15 spacing.
Retain the equation-consistent aspheres and published image plane; do not
interpret this small offset as a proven designer optimum.
