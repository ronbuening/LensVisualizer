# Schneider-Kreuznach APO-Symmar 5.6/100 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,028,720
**Inventors:** Rolf Wartmann and Udo Schauss
**Applicant:** Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG
**Priority:** DE 197 54 758, December 10, 1997
**Filed:** December 7, 1998
**Granted:** February 22, 2000
**Title:** High Resolution Objective for Large-Format Photography
**Embodiment analyzed:** Second numerical embodiment

US 6,028,720, "High Resolution Objective for Large-Format Photography." Applicant: Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG, Bad Kreuznach, Germany. Inventors: Rolf Wartmann and Udo Schauss. Filed December 7, 1998 (US); priority date December 10, 1997 (DE 197 54 758). Granted February 22, 2000.

The prescription transcribed here is from the patent's **second numerical embodiment** (column 5, lines 1–20; restated in Claim 5), which corresponds to production lenses in the Schneider-Kreuznach APO-Symmar family. Since Example 2 uses an entirely lead-free, arsenic-free, and antimony-free glass palette — a stated design objective — it most likely represents the APO-Symmar L variant ("L" widely understood to denote the later environmentally-reformulated line), rather than the original APO-Symmar. The patent's scalability clause ("any desired scale," column 4) means this prescription covers the entire focal-length family; at the tabulated scale of $f' = 101.2$ mm, it maps to the 100 mm production focal length. Convergent evidence supporting this identification:

1. Element and group count: six elements in four groups — matching the production specification (6/4).
2. All-spherical design: no aspherical surfaces are specified in any embodiment of this patent.
3. Focal length: the patent states $f' = 101.2$ mm, consistent with the 100 mm marketed focal length.
4. Maximum aperture: F/5.6, matching the production specification.
5. Image back focal distance: $s' = 84.3$ mm, appropriate for a Copal #0 shutter mounting on large-format cameras.
6. The patent's stated design objective — diffraction-limited performance at F/11 and F/16 for large-format photography with tilt/shift capability — matches the APO-Symmar product line's market position.
7. Priority date (December 1997) is consistent with the APO-Symmar production timeline.

The patent specifies all refractive indices ($n_\mathrm{o}$) and Abbe numbers ($\nu_\mathrm{o}$) "calculated on the basis of the spectral line e" (546.1 nm), as stated explicitly in columns 4 and 5. This is confirmed by glass-catalog cross-referencing: three of the four glasses match published Schott/Ohara e-line values to five or more significant figures. The data file stores d-line (587.6 nm) values obtained by cross-referencing each identified glass against its published catalog, while the unmatched L3 glass uses a d-line index estimated from the e-line value via the Cauchy dispersion relationship.

## Optical Architecture

The APO-Symmar 5.6/100 is a **quasi-symmetric anastigmat** in the Plasmat family, comprising six elements in four air-separated groups arranged symmetrically about a central stop. The power distribution is: weakly-powered cemented doublet — positive meniscus — [stop] — positive meniscus — weakly-powered cemented doublet. The front doublet (L1+L2) is weakly negative ($f \approx -718$ mm) and the rear doublet (L5+L6) is weakly positive ($f \approx +1152$ mm); neither contributes substantial net power to the system, serving instead as chromatic correctors. The patent refers to both cemented groups as "negative" (Claim 1), describing their corrective function rather than their standalone power sign.

The architecture descends from the Dagor/Symmar lineage of symmetric anastigmats for large-format photography. The two positive meniscuses (L3, L4) flank the aperture and carry the primary converging power of the system, while the two cemented doublets (L1+L2 front; L5+L6 rear) function as near-zero-power chromatic corrector groups. The meniscuses' concave surfaces face one another across the stop, a hallmark of the Plasmat layout.

What distinguishes this design from its predecessors (the Symmar and Symmar-S) is the chromatic correction strategy. Earlier Schneider symmetric designs used "short flint" glasses (KzFS-type, high antimony content) in the negative elements of the cemented doublets to achieve apochromatic correction. This patent instead places anomalous-partial-dispersion glass in the positive elements of the cemented doublets (L1 and L6) and in both meniscuses (L3 and L4). This shift of emphasis, as the patent states, "relieve[s] the strain on the two outer components," enabling a refractive power combination that "noticeably reduced both coma and the field curvature" (column 2, lines 43–50). A further consequence is that all six elements can be made from lead-free, arsenic-free, and antimony-free glass.

Key optical parameters:

| Parameter | Value |
|---|---|
| Effective focal length (patent, e-line) | 101.2 mm |
| EFL (computed, e-line) | ≈103.1 mm |
| EFL (computed, d-line) | ≈103.0 mm |
| Maximum aperture | F/5.6 |
| Back focal distance (patent, e-line) | 84.3 mm |
| BFD (computed, d-line) | ≈86.0 mm |
| Total track (front vertex to image) | ≈118.5 mm |
| Total track / EFL | ≈1.15 |
| BFD / EFL | ≈0.83 |
| Image circle (production, at f/22) | 145 mm |
| Angle of coverage (production, at f/22) | 72° |
| Petzval sum (computed, e-line) | $9.75 \times 10^{-4}$ mm$^{-1}$ |
| Petzval radius (computed) | ≈1026 mm |

The computed EFL of approximately 103 mm differs from the patent's stated 101.2 mm by roughly 1.8%. This small discrepancy is within the patent's explicitly stated tolerance band of ±5% on thicknesses and distances and ±10% on surface powers. It may also reflect rounding of the tabulated prescription values.

The image circle of 145 mm at f/22 fully covers 6×9 cm format (diagonal 101 mm) with generous room for shift and tilt movements, and provides usable coverage for 4×5 inch format (diagonal 163 mm) when stopped down, though with limited movement range.

## Element-by-Element Analysis

### L1 — Biconvex Positive (Front Doublet, Outer Element)

$n_e = 1.6052$, $\nu_e = 65.1$ → $n_d = 1.60311$, $\nu_d = 65.44$. Glass: S-PHM53 (OHARA) — phosphate crown, anomalous partial dispersion ($\Delta\theta_{g,F} \approx +0.0045$). $f_d = +32.9$ mm.

L1 is the outermost element of the front cemented doublet. Its front surface ($r_1 = +19.98$ mm) is strongly convex, while the rear surface ($r_2 = -2744.0$ mm) is nearly flat, giving it a near-plano-convex geometry within a biconvex shape. As the first element to encounter the incoming light, L1 provides strong positive power and bends marginal rays inward toward the optical axis.

The choice of S-PHM53 for this element is central to the patent's chromatic strategy. In the classical Symmar design, the negative elements of the cemented doublets carried the burden of anomalous dispersion correction, requiring antimony-containing short-flint glass. By shifting the anomalous-dispersion glass to the positive element instead, the patent achieves secondary-spectrum correction while eliminating the environmental and health hazards associated with antimony glass. S-PHM53 is a phosphate crown with positive anomalous partial dispersion ($\Delta\theta_{g,F} \approx +0.0045$), meaning its blue-violet dispersion departs from the normal line in the direction needed to correct secondary spectrum when paired with a conventional partner glass.

### L2 — Biconcave Negative (Front Doublet, Inner Element)

$n_e = 1.5498$, $\nu_e = 53.3$ → $n_d = 1.54739$, $\nu_d = 53.63$. Glass: N-BALF5 (Schott) — barium light flint, lead-free. $f_d = -26.8$ mm.

L2 is cemented to L1 at the nearly flat junction surface ($r_2 = -2744.0$ mm). Its rear surface ($r_3 = +14.74$ mm) is strongly convex toward the object, making L2 a biconcave negative element whose diverging power partially cancels L1's convergence. The cemented doublet L1+L2 is collectively weakly negative ($f \approx -718$ mm), meaning the front group contributes very little net power to the system — its primary role is chromatic correction.

N-BALF5 is a conventional barium light flint with near-normal partial dispersion. Because the anomalous-dispersion burden has been shifted to L1 (S-PHM53), L2 needs only to provide the appropriate Abbe number contrast for primary achromatic correction. The "N-" prefix in Schott's nomenclature indicates lead-free and arsenic-free composition, satisfying the patent's environmental requirement. The index step at the cemented junction is small ($\Delta n_e = 1.6052 - 1.5498 = 0.0554$), producing gentle refraction at that interface and reducing sensitivity to cementing errors.

### L3 — Positive Meniscus (Convex to Object)

$n_e = 1.5223$, $\nu_e = 69.5$ → $n_d \approx 1.52055$, $\nu_d \approx 69.9$. Glass: unmatched — phosphate crown class with positive anomalous partial dispersion; six-digit code approximately 520/695 (e-line). $f_d = +130.4$ mm.

L3 is the front positive meniscus that brackets the stop from the object side. Both surfaces are convex toward the object ($r_4 = +23.35$ mm, $r_5 = +34.66$ mm), with the rear surface more weakly curved. The meniscus geometry means that the element contributes positive power while presenting strongly curved concave surfaces toward the stop — a defining feature of the Plasmat layout that enables simultaneous correction of coma and astigmatism.

The patent explicitly requires that L3 be made of glass with anomalous partial dispersion, $n_e < 1.63$, and $\nu_e > 63$. The specified glass ($n_e = 1.5223$, $\nu_e = 69.5$) satisfies all three conditions. Its position in the glass map — low index, high Abbe number, positive anomalous dispersion — places it in the phosphate crown or fluorophosphate crown family. The specific catalog identity could not be confirmed against current Schott, Ohara, or Hoya publications; it may be a special-melt, a discontinued catalog glass, or a glass from a smaller manufacturer. What can be stated with confidence is that the glass has positive $\Delta\theta_{g,F}$, placing it above the normal line in the $P_{g,F}$–$\nu_d$ diagram.

### L4 — Positive Meniscus (Concave to Object)

$n_e = 1.5302$, $\nu_e = 76.6$ → $n_d = 1.52855$, $\nu_d = 76.98$. Glass: N-PK51 (Schott) — phosphate crown, strong positive anomalous partial dispersion ($\Delta P_{g,F} \approx +0.0252$). $f_d = +142.0$ mm.

L4 is the rear positive meniscus, the mirror-image counterpart to L3 across the stop. Both surfaces are concave toward the object ($r_6 = -46.19$ mm, $r_7 = -28.98$ mm), with the rear surface more strongly curved. Like L3, the meniscus shape contributes positive power while enabling off-axis aberration correction through the strongly curved air gap that faces the stop.

N-PK51 is one of Schott's premier anomalous-dispersion crowns, with $\Delta P_{g,F} \approx +0.025$ — substantially larger than the anomalous dispersion of the unidentified Glass 3 used in L3. This asymmetry between the two meniscus glasses is deliberate: by giving L4 stronger anomalous dispersion than L3, the designer introduces a controlled asymmetry in the secondary-spectrum correction on either side of the stop, which can be used to balance residual chromatic field aberrations (lateral color) that a perfectly symmetric design would not correct. The very high Abbe number ($\nu_e = 76.6$) also makes L4 the lowest-dispersion element in the system, minimizing primary chromatic contribution from the most powerful off-axis surfaces.

### L5 — Negative Meniscus (Rear Doublet, Inner Element)

$n_e = 1.5498$, $\nu_e = 53.3$ → $n_d = 1.54739$, $\nu_d = 53.63$. Glass: N-BALF5 (Schott) — barium light flint, lead-free. $f_d = -31.0$ mm.

L5 is the inner (stop-facing) element of the rear cemented doublet, occupying the mirror-symmetric position to L2. Both surfaces are concave toward the object ($r_8 = -16.28$ mm, $r_9 = -428.18$ mm), with the front surface strongly curved and the rear nearly flat. L5 is the same glass as L2 (N-BALF5), reflecting the quasi-symmetric architecture. Its strong negative power ($f_d = -31.0$ mm) is the primary diverging contribution in the rear half of the system.

### L6 — Positive Meniscus (Rear Doublet, Outer Element)

$n_e = 1.6052$, $\nu_e = 65.1$ → $n_d = 1.60311$, $\nu_d = 65.44$. Glass: S-PHM53 (OHARA) — phosphate crown, anomalous partial dispersion. $f_d = +34.8$ mm.

L6 is cemented to L5 at the nearly flat junction ($r_9 = -428.18$ mm), completing the rear doublet. Its rear surface ($r_{10} = -20.10$ mm) is strongly concave toward the object, giving L6 positive power. L6 uses the same anomalous-dispersion glass as L1 (S-PHM53), maintaining the quasi-symmetric chromatic correction strategy. The rear cemented doublet L5+L6 is collectively weakly positive ($f \approx +1152$ mm) — contrasting with the weakly negative front doublet ($f \approx -718$ mm). Both groups contribute negligible net refractive power to the system; their role is chromatic correction. The sign difference between the two doublets reflects the controlled departure from perfect symmetry.

The near-symmetry of the outer groups is evident in the glass pairings: L1/L6 share S-PHM53, and L2/L5 share N-BALF5. The surfaces are approximately reversed: $r_1 = +19.98$ mirrors $r_{10} = -20.10$, $r_2 = -2744$ mirrors $r_9 = -428$ (both nearly flat), and $r_3 = +14.74$ mirrors $r_8 = -16.28$. The match is close but not exact, reflecting deliberate design optimization away from perfect symmetry.

## Glass Selection and Chromatic Correction Strategy

The design uses four distinct glasses, with two glasses shared symmetrically across the stop:

| Glass | $n_e$ | $\nu_e$ | $n_d$ | $\nu_d$ | Identification | Elements | $\Delta\theta_{g,F}$ |
|---|---|---|---|---|---|---|---|
| S-PHM53 | 1.6052 | 65.1 | 1.60311 | 65.44 | OHARA S-PHM53 | L1, L6 | +0.0045 |
| N-BALF5 | 1.5498 | 53.3 | 1.54739 | 53.63 | Schott N-BALF5 | L2, L5 | Near-normal |
| Unmatched | 1.5223 | 69.5 | ~1.52055 | ~69.9 | Phosphate crown class | L3 | Positive (est.) |
| N-PK51 | 1.5302 | 76.6 | 1.52855 | 76.98 | Schott N-PK51 | L4 | +0.0252 |

The classical approach to apochromatic correction in symmetric large-format objectives (as described in the patent's cited prior art, DE PS 1 258 134) placed KzFS-type "short flint" glass — characterized by negative anomalous partial dispersion and high antimony content — in the negative elements of the cemented doublets. The patent's Example 2 inverts this: anomalous-dispersion glass appears in the positive elements L1 and L6 (S-PHM53, with positive $\Delta\theta_{g,F}$) and in both meniscuses L3 and L4 (both with positive $\Delta\theta_{g,F}$, L4 being the stronger contributor via N-PK51). The negative elements L2 and L5 use N-BALF5, a conventional barium light flint with near-normal partial dispersion.

This inversion is the patent's central innovation. By concentrating the chromatic correction duty on the four positive elements rather than the two negative ones, the designer gained additional degrees of freedom in the refractive power distribution of the cemented doublets. The patent notes that this "relieve[d] the strain" on the outer doublets, allowing a power combination that substantially reduced coma and field curvature compared to the predecessor Symmar designs (column 2, lines 43–50). A practical consequence is that all six elements are free of lead, arsenic, and antimony — an explicitly stated design objective.

The deliberate use of different anomalous-dispersion glasses for L3 (six-digit code ~520/695) and L4 (N-PK51, code 529/770) breaks the perfect symmetry of the chromatic correction. In a symmetric design, lateral color is zero by construction, but residual secondary spectrum is doubled. By giving the rear meniscus (L4) substantially more anomalous dispersion than the front meniscus (L3), the designer can tune the balance of secondary spectrum across the field, trading marginal amounts of lateral color for improved field-wide sharpness — a trade-off that is especially valuable in large-format lenses designed to cover generous image circles for tilt/shift movements.

## Semi-Diameter Constraints and Mechanical Vignetting

The patent does not specify semi-diameters. SDs were estimated via combined marginal and chief ray tracing at approximately 60% of the full field with 8% mechanical clearance.

The two 1.20 mm air gaps — d3 (between L2 and L3) and d7 (between L4 and L5) — impose the most severe constraints on surface clear apertures. In both gaps, the strongly curved surfaces facing each other ($r_3 = 14.74$ / $r_4 = 23.35$ in the front gap; $r_7 = -28.98$ / $r_8 = -16.28$ in the rear gap) produce sag intrusions that consume the available air gap at relatively small heights. In the d3 gap, the two surfaces physically intersect at $h \approx 8.85$ mm; in the d7 gap, a similar intersection occurs at a comparable height. To satisfy the cross-gap sag constraint at 95% of the gap (gapSagFrac = 0.95), surface SDs in both gaps are capped at approximately 8.5 mm.

At f/5.6, the marginal ray reaches approximately 9.8 mm at the S3–S4 junction and 8.8 mm at the S7–S8 junction. The marginal ray thus exceeds the geometrically available clear aperture at the front doublet–meniscus junction, indicating that the production lens experiences mechanical vignetting at full aperture in this region. This is a typical characteristic of Plasmat-family designs: the physically tight gap between the doublet and meniscus cells, often dictated by the shutter bore diameter (Copal #0: ≈24.6 mm bore), clips the beam at the widest aperture. The effect is modest and vanishes rapidly upon stopping down (by f/8 the marginal ray has shrunk well within the available aperture), and the resulting light falloff at full aperture is acceptable in the large-format context where most photography occurs at f/11–f/22.

## Focusing

The Schneider APO-Symmar is used on large-format view cameras, where focusing is accomplished by **unit focus** — the entire lens moves axially relative to the film plane via the camera's bellows and rail mechanism. There are no internal focusing groups; the prescription defines a single air-spacing configuration. The patent provides data for infinity focus only.

The patent's back focal distance of $s' = 84.3$ mm (computed d-line value ≈86.0 mm) represents the distance from the last optical surface ($r_{10}$) to the image plane at infinity focus. As the lens is racked forward to focus on closer objects, this distance increases. At a representative close focus distance of 0.5 m, the required bellows extension is approximately 26.7 mm, increasing the BFD to approximately 112.7 mm. The Copal #0 shutter mounting used in the production lens does not participate in the optical design — it is purely a mechanical component housing the aperture blades between the front and rear cells.

Because the design is quasi-symmetric and optimized for distant subjects, close-focus performance degrades gradually with decreasing object distance due to the absence of floating-element correction. The patent's stated design target is "free selection of positions of the film plane in terms of shift and tilt" at working apertures of F/11 to F/22, implying the primary use case is architecture and landscape photography at or near infinity.

## Aspherical Surfaces

This design is entirely spherical. No aspherical surfaces are specified in any of the patent's four numerical embodiments or in the claims. The absence of aspheric surfaces is consistent with the large-format photography tradition, where manufacturing cost, lens-element diameter, and the relatively modest aperture (F/5.6) make classical all-spherical designs practical.

## Petzval Sum and Field Flatness

The computed Petzval sum is $\Sigma = 9.75 \times 10^{-4}$ mm$^{-1}$, yielding a Petzval radius of approximately 1026 mm. This is a notably small Petzval sum for a 100 mm lens (dimensionless product $\Sigma \times f' \approx 0.10$), indicating excellent intrinsic field flatness.

The small Petzval sum is achieved primarily through the meniscus geometry. For a meniscus element with surfaces of the same sign, the Petzval contributions of the front and rear surfaces carry opposite signs and largely cancel. The net Petzval contribution of a thin meniscus in air is proportional to $(n-1)/n \times (1/R_1 - 1/R_2)$; when $R_1$ and $R_2$ are of the same sign and similar magnitude, the factor $(1/R_1 - 1/R_2)$ is small, yielding a small net Petzval even though the element has useful refractive power. This is the classical advantage of the Plasmat layout over designs that use biconvex elements, where front and rear Petzval contributions compound rather than cancel.

A secondary mechanism is the Petzval contribution from the cemented doublets. The front doublet contributes $-5.19 \times 10^{-3}$ mm$^{-1}$ and the rear doublet contributes $-3.09 \times 10^{-3}$ mm$^{-1}$, while the two meniscuses contribute $+4.79 \times 10^{-3}$ and $+4.45 \times 10^{-3}$ mm$^{-1}$ respectively. The substantial negative Petzval from the doublets partially cancels the positive meniscus contributions, leaving the small net sum of $+9.75 \times 10^{-4}$ mm$^{-1}$.

Improved field flatness was a primary design objective of this patent. The patent states that the predecessor standard objective (DE PS 1 258 134) achieved "approximately 20 Lp/mm" only at F/22 in the image center, with performance "decreas[ing] very quickly with increasing image height." The APO-Symmar design targets 30–50 Lp/mm at working apertures of F/8 to F/16 across the full image circle — a substantially more demanding specification.

## Design Heritage and Context

The Schneider Symmar lineage traces to the Dagor, designed by Emil von Hoegh in 1892 — one of the earliest symmetric anastigmats. The original Symmar, introduced in the 1920s, used the same six-element, four-group symmetric architecture with cemented triplets or doublets bracketing the stop. The Symmar-S (1972) abandoned the convertibility feature of earlier Symmar lenses in favor of improved field flatness and multi-coating. The APO-Symmar continued this evolution with apochromatic correction via anomalous-dispersion glass.

The patent's Example 2 represents a departure from the earlier APO-Symmar models (which used short-flint glass for the negative doublet elements, per Example 1 and the third variant in the patent). By moving the anomalous-dispersion burden to the positive elements, Example 2 achieves the same level of secondary-spectrum correction while using an entirely environment-friendly glass palette. This formulation aligns with the "L" designation in the later APO-Symmar L product line, which Schneider described as "using new environmentally friendly glass compositions."

The patent contains four distinct numerical prescriptions sharing the same 6/4 quasi-symmetric Plasmat architecture: Examples 1 and 3 (column 4, column 5) use $n_e = 1.6808$ / $\nu_e = 55.1$ and $n_e = 1.6167$ / $\nu_e = 44.2$ — values consistent with denser crowns and heavier flints typical of the original APO-Symmar. Example 2 (column 5) and a fourth prescription in Claim 6 (column 8) both use the environmentally-friendly glass palette. The Claim 6 prescription simplifies the glass selection further by using the same glass (N-PK51) for both meniscuses L3 and L4, achieving perfect glass symmetry across the stop — whereas Example 2 uses a distinct (unidentified) phosphate crown for L3.

## Verification Summary

Paraxial ray tracing using ABCD matrix methods at both the e-line and d-line confirms the analysis:

| Parameter | Patent stated | Computed (e-line) | Computed (d-line) |
|---|---|---|---|
| EFL | 101.2 mm | 103.06 mm | 103.03 mm |
| BFD | 84.3 mm | 86.00 mm | 85.97 mm |

The patent-to-computed discrepancies (EFL ≈1.8%, BFD ≈2.0%) fall within the patent's explicitly stated tolerance band of ±5% on distances. The Petzval sum ($9.75 \times 10^{-4}$ mm$^{-1}$) was computed via the surface-by-surface formula $\varphi_i / (n_i \cdot n_i')$ at the e-line.

Element focal lengths (d-line, standalone thick-lens in-air convention):

| Element | Type | $f_d$ (mm) |
|---|---|---|
| L1 | Biconvex Positive | +32.9 |
| L2 | Biconcave Negative | −26.8 |
| L3 | Positive Meniscus | +130.4 |
| L4 | Positive Meniscus | +142.0 |
| L5 | Negative Meniscus | −31.0 |
| L6 | Positive Meniscus | +34.8 |
| D1 (L1+L2) | Cemented doublet | ≈−718 |
| D2 (L5+L6) | Cemented doublet | ≈+1152 |

Cemented doublet focal lengths were computed via three-surface sequential paraxial ray traces. The near-zero net powers of both doublets confirm their role as chromatic correctors rather than power-contributing groups.

Semi-diameters were validated against five independent constraints: sd/|R| < 0.90, edge thickness > 0.3 mm, cross-gap sag intrusion ≤ 0.95 × gap, element front/rear SD ratio ≤ 3.0, and cemented junction consistency. The binding constraint throughout the design is the cross-gap sag intrusion in the narrow 1.20 mm air gaps (d3 and d7), which limits inner-element SDs to approximately 8.5 mm. This produces modest mechanical vignetting at f/5.6, consistent with production Plasmat designs.

## Sources

1. US 6,028,720 — R. Wartmann, U. Schauss, "High Resolution Objective for Large-Format Photography," Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG. Granted February 22, 2000. Priority DE 197 54 758 (December 10, 1997).
2. Schott AG, *Optical Glass Datasheet Collection* (May 2019 / January 2017 editions) — datasheets for N-BALF5, N-PK51.
3. OHARA GmbH, *S-PHM53 Datasheet* (January 2025) — code(d) 603655, code(e) 605651.
4. Schneider-Kreuznach, *Large Format Lenses* product brochure (undated, circa 2000s), via Linhof.com archival PDF — APO-Symmar specifications (6 elements / 4 groups, 72° coverage, image circles by focal length).
5. LargeFormatPhotography.info, *Large Format Lens Specifications Database* — APO-Symmar 100mm: 6/4, f/5.6, 145 mm image circle.
