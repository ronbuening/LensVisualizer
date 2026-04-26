# Carl Zeiss Planar T* 50mm f/1.4 — Optical Analysis

## Patent Attribution

**US Patent 3,874,771** — *Photographic Objective of the Extended Gauss Type*
Filed: June 25, 1973 (German priority DE 2232101, June 30, 1972)
Granted: April 1, 1975
Inventors: Karl-Heinrich Behrens, Erhard Glatzel
Assignee: Carl Zeiss Stiftung d/b/a Carl Zeiss, Oberkochen, Germany

This analysis is based on **Example 5** (Table 5) of the patent, one of two "fine-corrected" embodiments designed for color photography at f/1.4. The patent provides five examples; Examples 1–3 are monochromatic rough forms at f/1.5, while Examples 4 and 5 are fully achromatized designs at f/1.4 with glass dispersion data (Abbe numbers). Both Examples 4 and 5 use identical glass types and share the 7-element/6-group configuration of the production lens; without direct confirmation from Zeiss, either (or a closely related derivative) could be the basis of the production design. Example 5 is analyzed here as the more likely candidate, being the final and presumably most refined example in the patent sequence.

The production Carl Zeiss Planar T* 50mm f/1.4 was announced in 1974 and first shipped in 1975 with the Contax RTS for the Contax/Yashica mount system. The optical design was subsequently carried over to the ZF.2 (Nikon F-mount) and ZE (Canon EF-mount) versions, making it one of the longest-lived fast-fifty optical formulas in continuous production.

The patent is normalized to an equivalent focal length of F = 1.0000. For the production 50mm lens, all linear dimensions scale by a factor of 50.

## Design Overview

The Planar T* 50mm f/1.4 is a **7-element, 6-group extended double-Gauss** design. It is entirely spherical — the patent explicitly states that the design achieves its imaging quality "without the need for using extreme shapes or aspherical surfaces or for using extreme glass types" (col. 3, lines 10–14). This is a significant claim: at f/1.4 with a 46.8° diagonal field, achieving adequate correction without aspheres demands considerable skill in glass selection and air-space tuning.

The seven elements divide into a front member (V, the German *Vorderglied*) comprising elements L1, L2, and L3 — all uncemented and air-spaced — and a rear member (H, *Hinterglied*) comprising elements L4 through L7, where L4 and L5 are cemented together while L6 and L7 are air-spaced. A large central air space (CS) separates the two members, serving as the location for the iris diaphragm.

### Key Computed Parameters (Verified by ABCD Matrix Ray Trace)

| Parameter | Normalized (F=1) | Scaled to 50mm |
|---|---|---|
| Effective focal length (EFL) | 1.0000 F | 50.00 mm |
| Back focal distance (BFD) | 0.7100 F | 35.50 mm |
| Overall length (OAL, vertex to vertex) | 0.8197 F | 40.98 mm |
| Total track (OAL + BFD) | 1.5296 F | 76.48 mm |
| Central air space (CS) | 0.2855 F | 14.27 mm |
| Maximum aperture | f/1.4 | — |
| Entrance pupil semi-diameter | 0.3571 F | 17.86 mm |
| Diagonal half-field (35mm format) | — | 23.4° |
| Petzval sum | 0.196 | — |
| Petzval radius | 5.10 F | 255 mm |
| Retrofit ratio (BFD/EFL) | 0.710 | — |

The Petzval sum of 0.196 yields a Petzval radius of approximately 255 mm at the production focal length — moderate by modern standards but typical for a fast double-Gauss of this era. The retrofit ratio of 0.71 provides adequate mirror clearance for the Contax/Yashica mount (45.5 mm flange distance), placing the rear vertex of L7 approximately 10 mm in front of the lens mount flange.

## Aspherical Surfaces

**There are none.** This is unambiguous: the patent text, all five numerical examples, and the claims describe an entirely spherical system. The correction of spherical aberration, field curvature, and coma at f/1.4 is achieved through the extended Gauss configuration itself — specifically through the careful distribution of refractive power among five air lenses (α, β, CS, γ, δ), the use of high-index lanthanum glasses, and the air-spacing (rather than cementing) of the front negative combination N1. This last feature — splitting L2 and L3 apart to create the divergent air lens β — is the design's central mechanism for controlling higher-order spherical aberration.

## Glass Identification

The patent lists both refractive index (nd, at the helium d-line, 587.6 nm) and Abbe number (Vd) for each element in Examples 4 and 5. Because the assignee is Carl Zeiss Oberkochen, the production lens would have used glasses from the Schott catalog, Zeiss's in-house glass supplier. The identifications below match the patent's nd/Vd pairs against the Schott catalog. Note that many Schott glasses have been reformulated since the 1970s to remove lead and arsenic (the modern "N-" prefix denotes these eco-friendly reformulations), so the exact catalog names given here reflect the original 1970s designations where the nd/Vd match is nearest.

| Element | nd | Vd | Six-digit code | Glass identification | Confidence |
|---|---|---|---|---|---|
| L1 | 1.71700 | 47.99 | 717/480 | **Schott LaK 21** (nd=1.71700, Vd=47.98) | Exact match |
| L2 | 1.78831 | 47.37 | 788/474 | **Schott LaF 21** (nd≈1.788, Vd≈47.4) | Near-exact; modern N-LAF21 has nd=1.788, Vd=47.49 |
| L3 | 1.68893 | 31.17 | 689/312 | **Schott SF 56** (nd=1.68893, Vd=31.18) | Exact match |
| L4 | 1.72830 | 28.68 | 728/287 | **Schott SF 10 family** (nd=1.72825, Vd=28.41); Vd residual +0.27 | Close; likely a period-specific melt or related dense flint |
| L5 | 1.78831 | 47.37 | 788/474 | **Schott LaF 21** (same as L2) | Near-exact |
| L6 | 1.78831 | 47.37 | 788/474 | **Schott LaF 21** (same as L2 and L5) | Near-exact |
| L7 | 1.74400 | 44.77 | 744/448 | **Schott LaF 2** (nd=1.74400, Vd=44.77) | Exact match |

Several observations emerge from the glass map:

The design uses only **five distinct glass types** across seven elements (three lanthanum-bearing, two dense flints). Three elements (L2, L5, L6) share the same lanthanum flint glass (LaF 21), and two of the remaining four use exact-match catalog glasses (LaK 21 for L1 and LaF 2 for L7). This economy of glass types is typical of 1970s Zeiss practice, where Schott and Zeiss maintained a curated catalog relationship.

Five of the seven elements use **lanthanum-containing glasses** — LaK (lanthanum crown) and LaF (lanthanum flint) types — in the positive collecting positions (L1, L2, L5, L6, L7). These provide the high refractive index needed to flatten the Petzval surface while maintaining moderate dispersion for chromatic control. The two diverging elements (L3 and L4) are **dense flints** (SF family), which supply the high dispersion needed for chromatic correction at the cemented interface and across the air-spaced front negative combination.

L4, the front element of the cemented doublet, presents the most uncertain identification. Its nd = 1.72830 matches Schott SF 10 closely (nd = 1.72825), but its Vd = 28.68 deviates from SF 10's standard Vd of 28.41 by about +0.27 units. This could indicate a period-specific melt variant, a related glass that has since been discontinued, or a deliberate design-stage rounding. The mismatch is small enough that it does not materially affect the chromatic analysis.

## Element-by-Element Optical Analysis

### Front Member (V): Elements L1, L2, L3

The front member as a group has a focal length of 2.87F (143.5 mm at production scale), meaning it is a weakly positive collective group. Its role is to pre-converge the incoming beam toward the stop while introducing controlled amounts of negative spherical aberration and coma that will be balanced by the rear member.

**Element L1** — *Positive Meniscus (convex forward)*
- Surfaces: R1 = +44.45 mm, R'1 = +288.66 mm
- Thickness: 5.09 mm
- Glass: LaK 21 (nd = 1.71700, Vd = 47.99)
- Element focal length: +1.45F (+72.7 mm)

L1 is the front positive element (designated Pv in the patent's structural analysis). It is a strongly unequal-sided meniscus: the front surface has a relatively tight 44.5 mm radius while the rear surface is nearly flat at 288.7 mm. This meniscus shape reduces surface reflection losses and minimizes the contribution to spherical aberration compared to a biconvex form at the same power. Its role is to provide the primary positive refractive power of the front group, bending the incoming marginal rays inward. The LaK 21 glass is a lanthanum crown with high index (1.717) and moderate dispersion (Vd ≈ 48), enabling a shallower front curvature (and thus less surface aberration) than a lower-index glass would require for the same power.

**Element L2** — *Positive Meniscus (convex forward)*
- Surfaces: R2 = +21.80 mm, R'2 = +34.06 mm
- Thickness: 4.86 mm
- Glass: LaF 21 (nd = 1.78831, Vd = 47.37)
- Element focal length: +1.31F (+65.4 mm)

L2 is the second collecting element, and the one with the strongest curvatures among the positive front-group elements. Its front radius of only 21.8 mm at production scale is among the steepest in the system (exceeded only by L3's rear surface at 15.3 mm and L4's front surface at 17.3 mm). The meniscus shape (both surfaces convex toward the object) controls the angle of incidence at each surface, reducing higher-order spherical aberration. The LaF 21 glass (nd = 1.788) is the highest-index material in the design, and its use here is critical: the high index reduces the bending angle at each surface for a given power, directly suppressing fifth-order spherical aberration, which is the dominant residual at f/1.4. The air space between L1 and L2 is extraordinarily thin (0.059 mm at production scale), making them essentially a close-contact pair — but deliberately not cemented. This air gap (air lens α) has a positive refractive power sum, contributing to the delicate balance of air-lens powers that the patent's conditions A through C specify.

**Element L3** — *Negative Meniscus (convex forward)*
- Surfaces: R3 = +47.09 mm, R'3 = +15.32 mm
- Thickness: 1.19 mm
- Glass: SF 56 (nd = 1.68893, Vd = 31.17)
- Element focal length: −0.67F (−33.5 mm)

L3 is the first of two diverging elements and plays a pivotal role in the extended Gauss correction strategy. It is a thin, strongly negative meniscus with its steeper (rear) surface facing the central air space. The air space between L2 and L3 (air lens β, 1.59 mm at production) forms a powerfully divergent air lens whose refractive power sum is negative — one of the patent's key conditions (A1). This air lens β partially relieves the overcorrecting effect of the central air space (CS) by distributing the negative power across two air lenses rather than concentrating it at the stop, enabling control of higher-order spherical aberration.

The SF 56 glass has the lowest Abbe number (31.17) and moderate index (1.689) among the front elements, identifying it as a dense flint. Its high dispersion relative to the surrounding lanthanum glasses creates a chromatic divergence that is later corrected by the rear group's cemented doublet.

### Central Air Space (CS) and Aperture Stop

The central space between L3 and L4 is 14.27 mm at production scale — by far the largest gap in the system, occupying over a third of the OAL. The iris diaphragm sits within this space. The CS constitutes the third air lens, and the patent's condition A2 requires its refractive power sum to be negative, with a magnitude between 8.09 and 12.50 times the refractive power of air lens β. This large multiplier reflects the CS's dominant role in overcorrecting the Petzval sum and introducing the negative spherical aberration contribution that characterizes all double-Gauss designs.

The aperture stop position within the CS is not specified by the patent and must be inferred from the lens cross-section diagram (Fig. 1). In the production lens, it sits approximately at the midpoint of the CS, roughly 7.1 mm behind the rear vertex of L3.

### Rear Member (H): Elements L4, L5, L6, L7

The rear member has a focal length of 0.86F (42.8 mm) — significantly more powerful than the front group. This asymmetry is characteristic of retrofocus-influenced Gauss designs that must provide adequate back focal distance for SLR mirror clearance.

**Element L4** — *Biconcave Negative* (cemented to L5)
- Surfaces: R4 = −17.32 mm, R'4 = +374.02 mm (junction)
- Thickness: 1.15 mm
- Glass: SF 10 family (nd = 1.72830, Vd = 28.68)
- Element focal length: −0.45F (−22.7 mm)
- Cemented group: N2 (negative combination, with L5)

L4 is the second diverging element, positioned immediately behind the stop. Its front surface (R4 = −17.32 mm) is a steeply concave surface facing the stop — the deepest concavity in the system. This surface is the primary source of negative Petzval contribution from the rear group. The junction surface at R'4 = +374 mm is nearly flat (radius over 370 mm), which means the cemented interface between L4 and L5 contributes almost no refractive power — its function is purely chromatic, creating the index step (Δn = 0.060) needed for color correction without introducing geometric aberrations.

L4 is the strongest negative element in the system, with a focal length of −22.7 mm (−0.45F) — more powerful than L3 at −33.5 mm. Its steep front surface bending is necessary to generate sufficient negative Petzval contribution behind the stop, where the marginal ray height is large and the aberration leverage is greatest.

The SF 10-family glass (dense flint, Vd = 28.68) is paired with the LaF 21 lanthanum flint of L5 to form the system's primary achromatic correction. Despite both being classified as "flints" in Schott nomenclature, their dispersions differ by nearly a factor of two (Vd = 28.68 vs. 47.37), which provides the differential dispersion needed for color correction.

**Element L5** — *Biconvex Positive* (cemented to L4)
- Surfaces: R5 = +374.02 mm (junction), R'5 = −30.36 mm
- Thickness: 5.15 mm
- Glass: LaF 21 (nd = 1.78831, Vd = 47.37)
- Element focal length: +0.72F (+35.8 mm)
- Cemented group: N2 (with L4)

L5 is the strongest positive element in the rear group and the thickest element behind the stop (5.15 mm). Its rear surface (R'5 = −30.36 mm) is the primary positive refracting surface of the rear member, bending the rays back toward the axis after their divergence through the CS and L4. The high-index LaF 21 glass again reduces surface angles and suppresses higher-order aberrations.

Together, the cemented doublet L4+L5 has a combined focal length of −1.66F (−82.9 mm) — net negative. This is a hallmark of the extended Gauss design: the inner doublet near the stop is a diverging unit, not a converging one. Its negative power contributes to Petzval flattening while the individual elements' opposite dispersions provide chromatic correction. The patent designates this pair as N2, the rear negative combination, mirroring the front negative combination N1 (L2+L3, which are air-spaced rather than cemented).

**Element L6** — *Positive Meniscus (concave forward)*
- Surfaces: R6 = −87.43 mm, R'6 = −28.25 mm
- Thickness: 4.38 mm
- Glass: LaF 21 (nd = 1.78831, Vd = 47.37)
- Element focal length: +1.03F (+51.3 mm)

L6 begins the rear positive combination (PH in the patent's nomenclature). It is a meniscus with both surfaces concave toward the object — a shape that is qualitatively the mirror image of L2's convex-forward meniscus in the front group. This approximate symmetry about the stop (though the curvatures differ substantially: L2 is far more strongly curved) is characteristic of the double-Gauss heritage and contributes to the cancellation of odd-order aberrations (coma, distortion, lateral chromatic aberration).

The air space between L5 and L6 (air lens γ, 0.28 mm at production) is thin but not as extreme as the α space between L1 and L2 (0.059 mm). The patent's conditions B1 and B2 constrain the refractive power sums of the first air lens (α) and last air lens (δ, between L6 and L7) to be within specific ranges of the total system power, and condition C constrains their ratio (Q = φα / φδ) to be between 0.944 and 1.310. This balanced distribution of positive air-lens power at the extremes of the system is key to minimizing asymmetric coma in wide-open inclined beams.

**Element L7** — *Biconvex Positive*
- Surfaces: R7 = +164.68 mm, R'7 = −130.81 mm
- Thickness: 2.83 mm
- Glass: LaF 2 (nd = 1.74400, Vd = 44.77)
- Element focal length: +1.97F (+98.4 mm)

L7 is the final element, a weakly positive biconvex lens that provides the last course correction before the image plane. Its curvatures are gentle compared to the inner elements (164.7 mm and 130.8 mm at production), reflecting its role as a field-flattening corrector rather than a primary power element. The air space between L6 and L7 (air lens δ, 0.13 mm at production) is very thin — though not the thinnest gap in the system (that distinction belongs to the α space between L1 and L2 at just 0.059 mm). Together, L6 and L7 form a near-contact positive pair. The LaF 2 glass (nd = 1.744, Vd = 44.77) is a moderate-index lanthanum flint, slightly lower in index than the LaF 21 used elsewhere — this difference helps fine-tune the marginal chromatic balance at the system exit.

## Focus Mechanism

The patent provides prescription data at infinity focus only and does not describe a focusing mechanism. The production Zeiss Planar T* 50mm f/1.4 employs **unit focusing** — the entire optical assembly moves forward as a rigid unit when focusing to closer distances. The minimum focus distance of the C/Y mount version is 0.45 m (1.5 ft); the later ZF/ZE versions reduced this to 0.35 m.

In a unit-focus system, only the back focal distance (BFD) changes during focusing. As the lens moves forward to focus closer, the image conjugate shortens and the BFD increases. No internal element spacings change, which means the aberration balance shifts at close focus — a characteristic of the design that manifests as the modest softness at wider apertures noted by reviewers of this lens when shooting near the minimum focus distance.

Because this is unit focus with a single variable gap (the BFD), the close-focus BFD can be computed from the ABCD system matrix and the total conjugate distance. At 0.45 m object-to-film distance with the full thick-lens model, the required BFD increases from 35.50 mm to approximately 42.6 mm, an extension of about 7.1 mm. This corresponds to a magnification of approximately −0.14.

## Aberration Correction Strategy

The patent text lays out the design philosophy through six conditions (A1, A2, B1, B2, B3, and C) that govern the distribution of refractive power among the air lenses. These conditions encode the following correction strategy:

**Conditions A1 and A2** control the spherical aberration balance. By distributing negative air-lens power between β (the L2–L3 air space) and CS (the central stop space) in a specific ratio, the overcorrecting effect of the central air lens is partially relieved. This reduces higher-order (fifth and seventh order) spherical aberration contributions, which are the dominant limitation at f/1.4.

**Conditions B1, B2, and B3** control the field correction. The positive air lenses α (L1–L2 space) and δ (L6–L7 space) are constrained both individually and in sum to ensure that the imaging power extends to the margins of the field. The balanced positive power at the system extremes corrects field curvature and astigmatism across the full 47° diagonal.

**Condition C** controls coma symmetry. The ratio of air lens α's power to air lens δ's power (Q = φα / φδ) is constrained to be near unity (between 0.944 and 1.310), ensuring that the asymmetric coma contributions from the front and rear positive air lenses nearly cancel. For Example 5, the patent's Table 6 gives Q = 1.0385, very close to balanced.

The net result is a design that achieves at f/1.4 what earlier Gauss derivatives could only accomplish at f/2: adequate correction of the five Seidel aberrations plus higher-order spherical and coma terms, with reasonable chromatic performance for color photography, all without aspherical surfaces.

## Summary

The Carl Zeiss Planar T* 50mm f/1.4, as described in US Patent 3,874,771 Example 5, represents a mature and elegant expression of the extended double-Gauss design philosophy. Its seven all-spherical elements use only five distinct glass types from the Schott catalog — three lanthanum-bearing (LaK 21, LaF 21, LaF 2) and two dense flints (SF 56, SF 10) — achieving f/1.4 performance through meticulous tuning of the five air-lens powers rather than through exotic surfaces or materials. The design's longevity — announced in 1974 and manufactured through the 2020s in various mount iterations — is a testament to the robustness of Behrens and Glatzel's correction strategy, which trades the theoretical perfection of aspherical designs for a rugged, manufacturable system that delivers consistent imaging quality across millions of production units.

---

## Appendix: Verified Prescription Data (Example 5, Scaled to F = 50 mm)

| Surface | R (mm) | d (mm) | nd (after) | Element |
|---|---|---|---|---|
| S1 (L1 front) | +44.452 | 5.091 | 1.71700 | L1 |
| S2 (L1 rear) | +288.661 | 0.059 | 1.00000 | air |
| S3 (L2 front) | +21.804 | 4.856 | 1.78831 | L2 |
| S4 (L2 rear) | +34.062 | 1.589 | 1.00000 | air |
| S5 (L3 front) | +47.086 | 1.187 | 1.68893 | L3 |
| S6 (L3 rear) | +15.324 | 14.273 | 1.00000 | air (CS/stop) |
| S7 (L4 front) | −17.319 | 1.148 | 1.72830 | L4 |
| S8 (L4–L5 junction) | +374.022 | 5.150 | 1.78831 | L5 |
| S9 (L5 rear) | −30.357 | 0.284 | 1.00000 | air |
| S10 (L6 front) | −87.426 | 4.385 | 1.78831 | L6 |
| S11 (L6 rear) | −28.250 | 0.128 | 1.00000 | air |
| S12 (L7 front) | +164.680 | 2.835 | 1.74400 | L7 |
| S13 (L7 rear) | −130.808 | 35.497 | 1.00000 | air (BFD) |
