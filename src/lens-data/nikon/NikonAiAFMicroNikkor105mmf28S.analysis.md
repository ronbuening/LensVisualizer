# NIKON AI AF MICRO-NIKKOR 105mm f/2.8 S

## Patent Reference and Design Identification

**Patent:** JPH0219814A<br>
**Application Number:** JP63-170118<br>
**Filed:** 1988-07-08<br>
**Published:** 1990-01-23<br>
**Inventor:** Keiji Moriyama<br>
**Applicant:** Nikon Corporation<br>
**Title:** Lens usable for short-distance photographing<br>
**Embodiment analyzed:** Example 5

The prescription is taken from Example 5 of JPH0219814A. The selected Japanese publication is the numerical authority: its Table 5 gives a 105.000 mm design at F/2.86, a full field of 23.2°, and three focus states from infinity through β = −0.5 to life size at β = −1.0. The publication also shows the corresponding three-group focusing architecture and the corrected conditional-expression table.[1]

The production correlation is fixed to the Nikon AI AF Micro-Nikkor 105mm f/2.8S. Nikon's retrospective account identifies Keiji Moriyama as the designer, states that the production design was completed at the end of 1987 and released in 1990, and describes a modified-Gauss six-element/five-group front system followed by a three-element rear converter. Nikon also states that the three elements before the aperture, the three elements after it, and the forward two elements of the rear converter move independently during focusing, and that the lens reaches 1:1 reproduction.[2] Nikon does not identify JPH0219814A by patent number, so the patent-to-product link remains a correlation rather than a manufacturer-confirmed patent attribution.

The correlation is supported by several independent correspondences:

1. Example 5 is a 105.000 mm, F/2.86 design; the production lens is marketed as 105 mm f/2.8.
2. The prescription contains nine elements in eight air-separated physical groups, matching Nikon's six-element/five-group modified-Gauss section plus three-element rear converter.
3. The patent's functional grouping is positive G1, positive G2, and negative G3, with the forward two elements of G3 forming a floating subgroup; this matches Nikon's description of the three independently moving focusing blocks.
4. The patent publishes β = −1.0 and, after reference-plane normalization, an object-to-focal-plane distance of 314.021 mm, consistent with the data file's rounded 0.314 m closest-focus metadata.
5. The 1988 filing and 1990 publication are contemporaneous with Nikon's statement that the design was completed at the end of 1987 and released in 1990.[1][2]

The data file separates marketed and design quantities. Its marketed focal length and aperture are 105 mm and f/2.8; the traced infinity EFL is 105.001123 mm and the modeled design aperture is F/2.86. No dimensional scaling is applied. The selected JP source's 23.2° full field is retained; the later US-family text gives 23.3°, but that family value is not substituted into this transcription.[1][3]

## Optical Architecture

The design has nine elements in eight air-separated physical groups. The patent organizes them functionally into three lens groups: G1 = L1–L3, G2 = L4–L6, and G3 = L7–L9. Independent paraxial calculation from the authored prescription gives group focal lengths of +164.0905 mm for G1, +76.6196 mm for G2, and −191.0513 mm for G3 at infinity. The resulting positive-positive-negative power distribution is the first-order structure described by the patent.[1]

Nikon characterizes the first six elements as a modified Gauss-type system and the last three as a teleconverter placed behind it.[2] The word “teleconverter” here describes the negative rear conversion group. Under the project's system-level classification, the complete lens is not telephoto: the infinity total track divided by EFL is 1.18527, greater than unity. It is also not retrofocus, since BFD/EFL is 0.41872 and the back focal distance is shorter than the EFL.

G1 contains two positive menisci followed by a negative meniscus. G2 begins with the lens's only cemented pair, L4–L5, followed by the positive L6. The L4–L5 cemented pair is weakly negative as an isolated air-bounded doublet, with a calculated focal length of −287.8134 mm, even though L4 alone is strongly negative and L5 alone is positive. Adding L6 makes the complete G2 strongly positive.

G3 is a negative rear converter composed of the floating L7–L8 subgroup and the fixed positive L9. L7–L8 has an isolated subgroup focal length of −50.8502 mm. Changing its separation from L9 at the published β = −0.5 state changes the complete G3 focal length from −191.0513 mm at infinity to −169.1456 mm, illustrating that the in-situ group behavior cannot be inferred by simply adding standalone element powers.

The aperture stop is inserted in the air gap between surfaces 6 and 7. The patent states a 5.5 mm separation from surface 7 and common motion with G2; the model places the stop 5.5 mm on the object side of surface 7. The magnitude and common motion are source facts, while the object-side direction is a modeling inference supported by the patent figure and claim structure. The physical stop semi-diameter, 12.553220 mm, is derived from the F/2.86 infinity model rather than published directly.[1]

The design is entirely spherical. No aspherical coefficients, cover glass, filter plate, inactive dummy surface, flare-cutter plane, or mechanical surface is introduced. The 17 patent refracting surfaces are preserved, with one optically neutral `STO` plane added only to represent the physical aperture. The cemented interface at surface 8 belongs to downstream element L5 in the data model.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.69350, νd = 53.7. Glass: 694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +97.1022 mm.**

L1 is the first positive collector of G1. Its relatively strong positive standalone power begins the converging front section, while its weak rear curvature keeps the element meniscus-shaped rather than biconvex. In the assembled G1 it works with L2 and the negative L3; the +97.1 mm standalone focal length should therefore not be read as the focal length of the front group itself.

### L2 — Positive Meniscus

**nd = 1.71700, νd = 48.1. Glass: 717481 — LAF3 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +77.8120 mm.**

L2 is the second positive component of G1 and has somewhat stronger standalone power than L1. Its positive contribution is balanced by L3 immediately behind it. The three-element G1 assembly has a much weaker net power, +164.0905 mm, than either positive element alone because of the negative L3 and the internal separations.

### L3 — Negative Meniscus

**nd = 1.67270, νd = 32.2. Glass: 673322 class (supplier-neutral). Standalone f = −46.6984 mm.**

L3 is the negative rear component of G1. Its substantially lower Abbe number than L1 and L2 supplies a materially different dispersion coordinate within the front moving group, but the patent provides no line-index or partial-dispersion data that would justify an apochromatic or anomalous-dispersion claim. G1 remains positive in aggregate despite L3's strong negative standalone power.

### L4 — Plano-Concave Negative

**nd = 1.62588, νd = 35.7. Glass: 626357 class (supplier-neutral). Standalone f = −38.6432 mm.**

L4 is the negative front component of the sole cemented doublet D1. Its rear surface is the planar cemented junction at surface 8, so its isolated negative power is set primarily by the strongly curved front face. L4 should not be treated as an independent air-spaced negative lens in the assembled design.

### L5 — Plano-Convex Positive

**nd = 1.69350, νd = 53.7. Glass: 694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +50.4167 mm.**

L5 is cemented directly to L4 across the planar surface 8 and supplies the positive half of D1. The isolated L4 and L5 powers are −38.6432 mm and +50.4167 mm respectively, but the cemented pair's calculated net focal length is only −287.8134 mm. This weakly negative cemented unit is therefore distinct from either constituent's standalone behavior.

### L6 — Biconvex Positive

**nd = 1.69350, νd = 53.7. Glass: 694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +68.8771 mm.**

L6 follows the cemented pair and turns the complete G2 into a positive group with a calculated EFL of +76.6196 mm. G2 moves independently from G1 during focusing and travels farther toward the object, reducing the G1–G2 separation as magnification rises.

### L7 — Positive Meniscus

**nd = 1.80458, νd = 25.5. Glass: 805255 class (supplier-neutral). Standalone f = +90.9900 mm.**

L7 is the positive first element of the floating G3F subgroup. Its high index and low Abbe number distinguish it sharply from the crowns in the front section, but no supplier or melt is identified by the patent. L7 and L8 move together as the forward part of the negative rear converter.

### L8 — Biconcave Negative

**nd = 1.80454, νd = 39.6. Glass: 805396 — NBFD3 (NIKON) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = −30.4224 mm.**

L8 is the strongest negative standalone element in the rear converter. Paired with L7 at a fixed internal separation, it makes G3F negative with a focal length of −50.8502 mm. The subgroup's axial position relative to L9 changes non-monotonically with focus, rather than simply translating in one direction across the entire range.

### L9 — Biconvex Positive

**nd = 1.51680, νd = 64.1. Glass: 517641 — J-BK7A (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +80.1283 mm.**

L9 is the fixed positive rear component G3R. It remains stationary with respect to the image plane in the three published focus states, while G3F changes its separation from it. The fixed surface-17-to-image distance of 43.966 mm is preserved throughout the published focus range.

## Glass Identification and Selection

The patent gives only d-line refractive indices and Abbe numbers. It does not identify glass suppliers or melt names, and it supplies no nC, nF, ng, PgF, or ΔPgF values. The data file retains those coordinates and uses compatible catalog curves as spectral proxies without assigning production identities.

| Glass class | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 694537 / H-LaK6A proxy | 1.69350 | 53.7 | L1, L5, L6 | High-index, moderate-dispersion coordinate; production supplier unresolved |
| 717481 / LAF3 proxy | 1.71700 | 48.1 | L2 | High-index positive-group coordinate; production supplier unresolved |
| 673322 | 1.67270 | 32.2 | L3 | Higher-dispersion negative-front-group coordinate |
| 626357 | 1.62588 | 35.7 | L4 | Negative cemented-doublet coordinate |
| 805255 | 1.80458 | 25.5 | L7 | Very high-index, low-Abbe rear-group coordinate |
| 805396 / NBFD3 proxy | 1.80454 | 39.6 | L8 | Very high-index rear negative coordinate with higher νd than L7; production supplier unresolved |
| 517641 / J-BK7A proxy | 1.51680 | 64.1 | L9 | Crown-like fixed rear positive coordinate; production supplier unresolved |

A six-vendor coordinate audit found coefficient-backed catalog curves within the project's nd/νd compatibility window for every element. The selected curves are explicitly supplier-neutral spectral proxies because more than one vendor candidate can fit a patent coordinate. The patent supplies no line indices or partial-dispersion deviation, so the analysis does not assign anomalous partial dispersion or claim apochromatic correction.[4–9]

## Focus Mechanism

The patent publishes three focus states, so the optical focus status is `PUBLISHED`, not a constrained reconstruction. G1 and G2 both move toward the object as focusing approaches 1:1, with G2 moving farther than G1. The front subgroup of G3, G3F = L7–L8, has a reversing float: it moves 2.762 mm toward the image at β = −0.5 and returns to its infinity axial station at β = −1.0. L9 and the image plane remain fixed.[1]

| State | β | Object distance DO (mm) | d6 (mm) | d11 (mm) | d15 (mm) | Bf (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | 0 | ∞ | 22.982 | 3.807 | 10.000 | 43.966 |
| Intermediate | −0.500 | 240.890 | 19.805 | 31.432 | 7.238 | 43.966 |
| Life size | −1.000 | 141.864 | 17.682 | 56.809 | 10.000 | 43.966 |

Relative to infinity, G1 moves −21.686 mm and G2 −24.863 mm at β = −0.5; at β = −1.0 their movements are −47.702 mm and −53.002 mm. The corrected movement ratio Δs2/Δs1 is therefore 1.14650 at β = −0.5 and 1.11111 at β = −1.0, within the patent's corrected 1.0–1.4 condition.

The image-space finite-conjugate check gives β = −0.5000017 for the intermediate state and β = −0.9999862 at life size, with source-precision imaging residuals of 0.000100 mm and 0.001263 mm respectively. At β = −1.0, the patent's object-to-surface-1 distance plus the modeled surface-1-to-image distance gives 314.021 mm from object to focal plane; the data file stores the rounded `closeFocusM` value of 0.314 m.

The data representation stores all three published configurations as focus keyframes. The β = −0.5 state is placed at normalized `focusT = 0.8113045208264971`, following the viewer's existing inverse-distance convention: the 0.314 m catalog minimum-focus distance divided by the independently normalized 0.387031 m object-to-image distance. At that keyframe, d6, d11, and d15 exactly reproduce the patent's 19.805 mm, 31.432 mm, and 7.238 mm values. Runtime interpolation between published states is piecewise linear visualization; it is not asserted to be the patent's unreported continuous mechanical trajectory. No intermediate state was reconstructed or invented.

Nikon's retrospective independently describes the same qualitative mechanism: the three elements before the aperture, the three behind it, and the forward two elements of the rear converter form three independently moving focus blocks, with the post-aperture block moving farther than the pre-aperture block.[2]

## Conditional Expressions

The selected publication contains eight design conditions. Its procedural correction sheet reverses condition (1) from the originally printed Δs1/Δs2 to the corrected Δs2/Δs1 and supplies corrected Table 6 values above unity. The data and audit follow the corrected form; no prescription radius, thickness, or refractive index is silently altered.[1]

| No. | Condition | Verified value from authored prescription | Result |
|---:|---|---:|---|
| 1 | 1.0 < Δs2/Δs1 < 1.4 | 1.146500 at β = −0.5; 1.111106 at β = −1.0 | Pass |
| 2 | 0.7 < f12/f < 1.0 | 0.714279 | Pass |
| 3 | 1.8 < f1/f12 < 2.6 | 2.187870 | Pass |
| 4 | 1.7 < f1/f2 < 2.7 | 2.141626 | Pass |
| 5 | −1 < q < −0.7 | −0.867617 | Pass |
| 6 | 0.7 < f3(φA + φB) < 0.9 | 0.824613 | Pass |
| 7 | 0.2 < f3F/f3 < 0.3 | 0.266160 | Pass |
| 8 | 0.8 < f3′/f3 < 1.3 | 0.885342 | Pass |

Condition (6) is slightly above the 0.823 value printed for Example 5. The independently calculated 0.824613 follows from the rounded published prescription and still lies comfortably inside the stated interval. This difference is treated as a source-precision effect, not as a reason to alter the patent numbers.

## Verification Summary

Independent sequential y–ν tracing and ABCD multiplication of the authored infinity prescription agree to better than 10⁻⁹ mm for both EFL and BFD. The infinity EFL is 105.001123 mm versus the patent's nominal 105.000 mm, and the calculated BFD from surface 17 is 43.966368 mm versus the published 43.966 mm. These residuals are consistent with the source's three-decimal radii and spacings.[1]

The infinity entrance pupil has a calculated diameter of 36.713679 mm. With the inferred physical stop radius of 12.553220 mm, this reproduces F/2.860000. The patent does not publish the physical stop diameter, so that radius is a derived modeling quantity rather than a source fact.

The surface-by-surface Petzval calculation uses φ/(n·n′) and sums to +0.0008978023 mm⁻¹, corresponding to a paraxial Petzval radius of −1113.83 mm in the adopted sign convention. This small net sum is consistent with the patent's stated concern that an overly strong negative rear converter would otherwise drive the Petzval balance too negative.[1][3]

The patent does not tabulate clear semi-diameters. The data file's semi-diameters are inferred from exact marginal- and chief-ray envelopes over all three published states, including the reversing β = −0.5 configuration. At surface 1, the calculated axial marginal-ray heights are 18.2655 mm, 15.5988 mm, and 14.4623 mm for infinity, β = −0.5, and β = −1.0, closely reproducing Figure 11's plotted H values of 18.3, 15.5, and 14.4 mm.[1]

The inferred geometry retains positive edge thickness across every element, with a minimum checked shared-band thickness of 0.8698 mm. The largest actual spherical rim angle is 37.052°, and the independently traced non-stop ray envelope retains at least 0.5261 mm of semi-diameter clearance. Shared-band cross-gap intrusion passes the 0.90×gap criterion in all three published configurations. These are model-validation results, not patent-published mechanical dimensions.

No asphere convention or coefficient transformation applies because every optical surface is spherical. No scale factor is used. No cover/filter plate or inactive dummy surface is omitted from the selected numerical example, and no air-equivalent rear-spacing correction is required.

## Sources / References

1. Nikon Corporation, **JPH0219814A**, “Lens usable for short-distance photographing,” published 1990-01-23. Numerical authority: Example 5 Table 5; corrected condition table; Figures 6 and 11; procedural correction sheet. Supplied patent PDF. Searchable family record: <https://patents.google.com/patent/JPH0219814A/en>.
2. Nikon Imaging, **“NIKKOR — The Thousand and One Nights No.72: AI AF Micro-Nikkor 105mm f/2.8S.”** <https://imaging.nikon.com/imaging/information/story/0072/>.
3. Keiji Moriyama / Nikon Corporation, **US4986643A, “Lens system capable of close-up photographing.”** English-family text used only to clarify scan-obscured prose and equation labels, not to replace the selected Japanese prescription: <https://patents.google.com/patent/US4986643A>.
4. OHARA, optical-glass catalog and data resources: <https://www.oharacorp.com/optical-glass/>.
5. HOYA Optics, optical-glass catalog resources: <https://www.hoya-opticalworld.com/english/>.
6. SCHOTT, optical-glass collection and datasheets: <https://www.us.schott.com/shop/medias/schott-optical-glass-collection-datasheets-english-us-march2018.pdf>.
7. HIKARI, optical-glass catalog resources: <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>.
8. CDGM, optical-glass catalog resources: <https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods>.
9. SUMITA Optical Glass, catalog and download resources: <https://www.sumita-opt.co.jp/en/download/>.
