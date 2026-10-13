# MEYER OPTIK GÖRLITZ LYDITH 30mm f/3.5

## Patent Reference and Design Identification

**Patent:** DE 1 794 971\
**Registered:** 3 September 1959 (`eingetr. 3.9.59` on the supplied cover)\
**Other source date marking:** 30 December 1958 (legal role not normalized from the supplied pages)\
**Applicant:** VEB Feinoptisches Werk Görlitz\
**Inventor:** No individual inventor is identified on the supplied six-page patent source\
**Title:** *Photographisches Weitwinkel-Objektiv*\
**Embodiment analyzed:** `Zahlenbeispiel` / Example 1\

The implemented prescription is the sole numerical example in DE 1 794 971. The patent describes a five-element wide-angle objective for 24 × 36 mm single-lens-reflex cameras, with an opening ratio of 1:3.5, a full image angle of about 70°, and a back focal distance at least 1.2 times the focal length. Its numerical table is normalized to $f' = 100$ and gives $s'_o = 122.5$ as the rear Schnittweite. The table appears on PDF page 4 and is repeated on PDF page 5; the optical section on PDF page 6 confirms five air-spaced singlets and places the aperture stop between the fourth and fifth elements. [1, PDF pp. 3–6]

The production correlation is strong but not manufacturer-confirmed. Several independent characteristics converge:

1. The patent describes an approximately 30 mm, f/3.5 wide-angle for the 24 × 36 mm SLR format; Meyer manufacturer literature lists a 1:3.5/30 wide-angle in the 1961/62 program and a named `LYDITH 3,5/30` in the 1964 brochure. [1, PDF p. 3; 2; 3]
2. The patent uses five air-spaced singlets; the 1964 brochure describes the Lydith as a five-lens objective. [1, PDF pp. 3, 6; 3]
3. The patent gives about 70° full field; the 1964 brochure gives a 72° used field. These rounded values are compatible but are not treated as identical measurements. [1, PDF p. 3; 3]
4. The manufacturer literature places the 30/3.5 family in the correct historical period. In the 1964 specification table, the selected 0.33 m preselection-aperture row is marked for EXAKTA Varex, EXA I, EXA II, Pentacon/Praktica, and Praktina; the data maps those documented systems to the current canonical `exakta`, `m42`, and `praktina` mount ids. [2; 3]

No checked primary manufacturer source explicitly states that DE 1 794 971 is the production Lydith patent. The data file therefore preserves the attribution as a research correlation rather than a manufacturer-confirmed identity.

The numerical example is uniformly scaled by exactly $s = 0.3$ because the source defines $f' = 100$ while the production target is 30 mm. All radii, thicknesses, air spaces, and image-plane distances are multiplied by 0.3. The rounded source table is not renormalized to force a 30.000 mm calculated focal length: after scaling, the parsed model gives a design EFL of **30.579845 mm**, while 30 mm remains the marketed focal length. The same distinction is retained at the rear reference plane: the patent-scaled $s'_o$ is **36.75 mm** from the final vertex, whereas the rounded prescription calculates a paraxial BFD of **37.702841 mm** from that vertex. These differences are compatible with the documented source-precision sensitivity budget and remain explicit rather than being silently reconciled.

## Optical Architecture

The design is a five-element, five-group, all-spherical retrofocus wide-angle. From object to image it consists of a negative meniscus (L1), a long air space, a biconvex positive element (L2), a positive meniscus (L3), a biconcave negative element (L4), the aperture stop, and a final biconvex positive element (L5). All five elements are singlets in air. [1, PDF pp. 3, 6]

Its retrofocus classification is a computed first-order result rather than a name copied from the patent. In the final parsed model, the EFL is **30.579845 mm** and the paraxial BFD from the last vertex is **37.702841 mm**, giving BFD/EFL = **1.232931**. The source's own normalized values give $122.5/100 = 1.225$. Both satisfy the project definition $\mathrm{BFD} > \mathrm{EFL}$. The 39.870 mm first-to-last-vertex track is longer than the calculated EFL, with TL/EFL = 1.303800, so the design is not classified as telephoto.

The power distribution is not a simple negative-front/positive-rear two-group abstraction: L3 adds positive power ahead of the strongly negative L4, and L5 supplies a final positive element after the stop. When L2 through L5 are treated as an isolated functional rear block with their intervening air spaces, their calculated EFL is **27.352448 mm**. That number describes the isolated block only; it is not a cemented-group power and does not imply a separable production module.

The patent's motivation is explicitly tied to SLR mirror clearance: it states that a wide-angle objective for 24 × 36 mm reflex cameras requires a substantially greater Schnittweite than its focal length so that the folding mirror is not impeded. [1, PDF p. 3] The calculated long-back-focus behavior of the implemented model is consistent with that stated design problem.

The physical stop is less completely specified than the refracting prescription. The source drawing locates the diaphragm between L4 and L5, but gives neither a dimensioned stop station nor a physical aperture diameter. [1, PDF p. 6] The final model therefore divides the scaled 2.79 mm L4–L5 air space at its midpoint, 1.395 mm on each side of `STO`. The modeled stop semi-diameter is **5.027251 mm** and produces an entrance-pupil semi-diameter of **4.368549 mm**, yielding the calibrated modeled f-number of **3.5**. Agreement with f/3.5 is a calibration target, not independent evidence for the historical diaphragm diameter.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.5696, νd = 63.1. Glass: H-ZK1 — compatible spectral proxy (historical supplier/melt unresolved). Standalone f = −36.000 mm.**

L1 is the isolated negative front element. Its negative standalone power and its separation from L2 establish the divergent front section characteristic of the long-back-focus architecture. The patent specifically describes a negative meniscus on the long-conjugate side followed, after a large air space, by the positive rear sequence. [1, PDF p. 3]

The data file does not assign L1 a vendor glass. The source supplies only the d-line coordinate pair, and the catalog review did not establish a defensible historical supplier or melt identity. The class label is therefore intentionally weaker than a named catalog-glass attribution.

### L2 — Biconvex Positive

**nd = 1.6405, νd = 34.5. Glass: E-FD7 — compatible spectral proxy (historical supplier/melt unresolved). Standalone f = +28.296 mm.**

L2 is the first strong positive element after the long L1–L2 air space. Its isolated positive focal length is shorter than that of L3 and L5, but this standalone value must not be read as its in-situ contribution to the complete system; the front negative element and the intervening separations materially alter the assembled first-order behavior.

The patent identifies L2 as the biconvex collecting lens following the front meniscus. [1, PDF p. 3] The final analysis does not assign a specific aberration-correction task to L2 because neither the patent text nor the executed first-order calculations isolate such a contribution.

### L3 — Positive Meniscus

**nd = 1.5887, νd = 61.0. Glass: SK5 — compatible spectral proxy (historical supplier/melt unresolved). Standalone f = +41.538 mm.**

L3 is a positive meniscus positioned immediately ahead of the negative fourth element. It adds positive power within the compact rear section while preserving the source's five-singlet architecture. The patent describes this element as a positive meniscus whose curvature faces the object side, followed by the biconcave dispersing lens. [1, PDF p. 3]

Its crown-class coordinate is a class-level description only. No line-index or anomalous-partial-dispersion data are authored for this element, so the model makes no APO or secondary-spectrum claim from the glass label.

### L4 — Biconcave Negative

**nd = 1.7617, νd = 26.5. Glass: S-TIH14 — compatible spectral proxy (historical supplier/melt unresolved). Standalone f = −13.500 mm.**

L4 is the strongest negative standalone element in the prescription and sits immediately before the aperture stop. The patent singles it out in its design conditions: the d-line refractive index is to exceed 1.75, the Abbe number is to be below 27, and its center thickness is to exceed 0.1 of the normalized focal length. Example 1 gives $n_d = 1.7617$, $\nu_d = 26.5$, and $d_4/f' = 0.112$, satisfying all three conditions. [1, PDF pp. 3–5]

Those constraints establish that the high-index, low-Abbe negative element is an intentional part of the patent's architecture. They do not, by themselves, identify its historical glass supplier or prove a particular chromatic-aberration contribution, so the analysis stops short of such an attribution.

### L5 — Biconvex Positive

**nd = 1.6197, νd = 60.4. Glass: N-SK16 — compatible spectral proxy (historical supplier/melt unresolved). Standalone f = +22.078 mm.**

L5 is the final positive singlet, located after the aperture stop. The patent describes it as a biconvex collecting lens whose more strongly curved surface faces the image plane. [1, PDF p. 3] In the implemented prescription its rear surface is correspondingly much stronger in curvature than its front surface.

The element closes the positive rear section after the dense-flint L4 and stop. As with the other elements, its standalone focal length is an isolated air-to-air result and should not be interpreted as an additive in-situ power contribution.

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.5696 / 63.1 | H-ZK1 (qualified catalog proxy) |
| L2 | 1.6405 / 34.5 | E-FD7 (qualified catalog proxy) |
| L3 | 1.5887 / 61 | SK5 (qualified catalog proxy) |
| L4 | 1.7617 / 26.5 | S-TIH14 (qualified catalog proxy) |
| L5 | 1.6197 / 60.4 | N-SK16 (qualified catalog proxy) |

H-ZK1 was added from the [official CDGM datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZK1.pdf), including its published Sellmeier constants. Its 1.56888 / 62.96 coordinate is a close spectral analogue; it is not evidence of CDGM manufacture of these historical lenses.

## Focus Mechanism

The focus disposition is **NO_INTERNAL_RECONSTRUCTION**. DE 1 794 971 supplies one nominal prescription and no finite-focus spacing table, moving-group description, or internal-focus kinematics. A production minimum-focus distance does not determine a unique internal motion law, so the data file contains no variable air-gap model and no synthetic close-focus optical state.

The `closeFocusM` value of **0.33 m** is manufacturer metadata for the historical preselection-aperture 1:3.5/30 variant selected for the catalog record. The 1964 Meyer brochure also contains a separate automatic-aperture 1:3.5/30 row with **0.40 m** minimum focus. [3] The selected 0.33 m row is marked for EXAKTA Varex, EXA I, EXA II, Pentacon/Praktica, and Praktina; the corresponding current taxonomy ids are `exakta`, `m42`, and `praktina`. The 0.33 m value therefore identifies the selected mechanical production variant; it is not a patent-derived optical constraint and is not used to move any surface in the model.

## Conditional Expressions

The patent states six explicit conditions relevant to the selected example. They are evaluated in the source's own $f' = 100$ normalization, not by substituting the EFL recalculated from the rounded table.

| Patent condition | Example 1 value | Result |
| --- | ---: | --- |
| $s'_o/f' \ge 1.2$ | 1.225 | Pass |
| $n_4 > 1.75$ | 1.7617 | Pass |
| $\nu_{d,4} < 27$ | 26.5 | Pass |
| $d_4/f' > 0.1$ | 0.112 | Pass |
| $r_1/|r_2| > 4$ | 4.735849 | Pass |
| $r_1/f' > 2.5$ | 2.51 | Pass |

The last distinction matters because the rounded table calculates an EFL above the printed normalization. Replacing the patent-defined $f' = 100$ with that recalculated value would alter the final inequality and would no longer be a direct test of the patent's stated condition. [1, PDF pp. 3–5]

## Verification Summary

The final model was recomputed from the parsed `.data.ts` rather than from a separate hard-coded production prescription. Independent reduced-angle and ABCD branches agree within the verifier's numerical tolerance, and the same parsed values produce the **30.579845 mm** EFL and **37.702841 mm** paraxial BFD quoted above.

The surface-by-surface Petzval calculation uses $\phi/(n n')$ at each refracting surface. Its total is **+0.006564409 mm⁻¹**, corresponding to a Petzval radius of **+152.336628 mm**. This is a first-order Petzval quantity; it is not a traced best-focus field-curvature measurement.

Semi-diameters are unpublished modeling apertures. The exact local patent p. 6 optical rims refine L2 to 10 mm, L3 to 7.5 mm, L4 to 6.1 mm and L5 to 6.8 mm. L2/L3 retain modest clearance over the drawing; the stepped front meniscus and calibrated stop are retained. See the audit sidecar for measurements. These apertures do not certify unvignetted full-field production performance.

All ten refracting surfaces are spherical. There are no aspheric coefficients, cemented interfaces, zoom states, diffractive surfaces, or reconstructed focus states in this model.

## Sources / References

1. **DE 1 794 971**, *Photographisches Weitwinkel-Objektiv*, supplied six-page patent scan. Relevant locations: PDF p. 1 (bibliographic markings and applicant), p. 3 (design description, format, aperture, field, long-back-focus and glass conditions), pp. 4–5 (`Zahlenbeispiel` and claims), p. 6 (optical section and stop ordering).
2. **VEB Feinoptisches Werk Görlitz**, *Fertigungsprogramm 1961/1962 — Neue Objektive für Kleinbild-Kameras*. Manufacturer literature archived by Ihagee: https://ihagee.org/Lenzen/HMG34-1962KBObjneu.pdf
3. **VEB Feinoptisches Werk Görlitz**, 1964 lens brochure, `LYDITH 3,5/30` entries and specification table. Manufacturer literature archived by Ihagee: https://www.ihagee.org/Lenzen/HMG40-1964-30-400.pdf
4. **OHARA Corporation**, current optical-glass detailed data: https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf
5. **HOYA Corporation Optics Division**, glass cross-reference index: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. **SCHOTT AG**, optical-glass datasheets: https://media.schott.com/api/public/content/820eba3413cc4e788433a3751f8edba9?download=true&v=97b3ea2b
7. **HIKARI GLASS CO., LTD. / Nikon Corporation**, optical-glass catalog 2023: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
8. **Chengdu Guangming Optoelectronic Corp. (CDGM)**, optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. **SUMITA OPTICAL GLASS, Inc.**, official optical-glass data downloads: https://www.sumita-opt.co.jp/en/download/
