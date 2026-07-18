## Patent Reference and Design Identification

**Patent:** US 4,523,816  
**Application Number:** US 06/522,519  
**Filed:** August 12, 1983  
**Granted:** June 18, 1985  
**Inventor:** Melvyn H. Kreitzer  
**Assignee:** Vivitar Corporation, Santa Monica, California  
**Title:** Catadioptric Lens  
**Embodiment analyzed:** Figure 4 / Table IV / claim 9

The selected prescription is the fourth worked embodiment in Kreitzer's patent. It is a Cassegrain catadioptric system with fixed primary and secondary mirrors, a stationary positive rear corrector group G1, and a strong negative group G2 that moves axially for focusing. The association with the Vivitar Series 1 450mm f/4.5 VMC Aspherical Mirror is strong, although the patent does not name the commercial product explicitly:

1. Table IV states an equivalent focal length of 437.4 mm, while the patent describes the design class as approximately 450 mm at f/4.5.
2. Figure 4 shows the distinctive full-aperture aspheric corrector, annular primary mirror, central convex secondary, fixed positive G1, and movable negative G2 associated with the production lens.
3. Vivitar Corporation is the assignee, and the 1983 filing date coincides with the period in which the commercial 450mm f/4.5 appeared.
4. The corrector's $n_d=1.491$ and $\nu_d=57.2$ are consistent with PMMA-class optical plastic. A historical account attributed the production asphere to methyl methacrylate, but the patent itself specifies only optical constants, not the material name.

Figure 3 also uses an aspheric corrector. Figure 4 is distinguished by combining an aspheric corrector with a Cassegrain mirror pair rather than the Mangin arrangement of Figure 3. It is therefore inaccurate to describe Figure 4 as the patent's only aspheric embodiment.

The numerical example contains eight refractive elements, L1-L8, and two powered mirror surfaces, M1 and M2. Figure 4 additionally depicts a front protective plate P, a rear sealing plate LS, and a removable filter F. No prescription is supplied for those neutral plates, and the project excludes filters, so they are not invented in the companion data file.

The prescription is retained at its native patent scale. The commercial 450mm designation is treated as normal focal-length rounding; no uniform $450/437.4$ scale factor is applied to radii, axial distances, semi-diameters, or aspheric coefficients.

## Optical Architecture

The design is an internally focused Cassegrain catadioptric telephoto. Its seven physical air-spaced groups are:

1. central convex secondary mirror M2;
2. full-aperture aspheric corrector L1;
3. fixed positive cemented doublet G1, L2+L3;
4. annular concave primary mirror M1;
5. first cemented component of G2, L4+L5;
6. second cemented component of G2, L6+L7; and
7. rear singlet L8.

The physical object-to-image order differs from the optical encounter order. With the front vertex of L1 defined as $z=0$, the patent spacings place M2 at $z=-0.50$ mm, L1 from $z=0$ to $36.75$ mm, G1 from $z=53.00$ to $62.18$ mm, M1 at $z=64.05$ mm, and G2 from $z=66.43$ to $105.22$ mm. G1 is therefore nested in the clear central region immediately ahead of the annular primary, as shown in Figure 4.

For a ray entering through the usable annulus, the encounter order is:

$$
S1 \rightarrow S2 \rightarrow M1 \rightarrow S2 \rightarrow S1
\rightarrow M2 \rightarrow S1 \rightarrow S2 \rightarrow S3 \ldots S13.
$$

L1 is traversed three times: before the primary reflection, while returning toward the secondary, and after the secondary reflection. A single-pass sequential treatment is not an adequate first-order model of this embodiment.

M1 and M2 are modeled as first-surface mirrors. M1 is annular, allowing the post-secondary beam and G1 to occupy its clear center. M2 blocks the incoming pupil core and reflects the returning beam. The aperture is fixed; there is no iris diaphragm. The synthetic 48.60 mm entrance-pupil semi-diameter follows the patent's published 437.4 mm EFL and f/4.5 specification.

The paraxial focus of the retained printed table lies 197.623 mm behind the L1 front vertex. That distance is shorter than either the printed table's independently traced 590.178 mm EFL or the patent's stated 437.4 mm EFL, so the system remains telephoto under the patent's definition. The discrepancy between those two EFL values is documented below rather than silently repaired.

## Element-by-Element Analysis

### M2 - Convex Secondary Mirror

Reflective surface, $R=-143.54$ mm. Paraxial mirror focal-length magnitude $|R|/2=71.77$ mm.

M2 is the central convex secondary. It receives the converging beam reflected by M1 and sends it forward through the corrector, G1, and the primary's central opening. The same disk forms the central obstruction for incoming light. The patent gives no clear aperture; the data-file semi-diameter of 27.5 mm is reconstructed from the repeated-pass marginal/chief-ray envelope and the Figure 4 geometry.

### L1 - Full-Aperture Aspheric Corrector

$n_d=1.491$, $\nu_d=57.2$. Glass: PMMA-class optical plastic, historically attributed; the patent does not name a material. Standalone in-air $f=+2256.19$ mm.

L1 is a thick plano-convex corrector with a plane polynomial asphere on S1 and a weak rear surface, $R=-1107.79$ mm. Its first-order refractive power is small, but its repeated traversal makes its higher-order correction important. The corrector primarily compensates spherical aberration from the spherical mirror pair and also participates in balancing the complete folded path.

At the adopted 51.0 mm semi-diameter, the S1 polynomial departure is $-0.204723$ mm from the plane base and the meridional slope angle is $-0.9513^\circ$. The profile is negative and monotonic over the modeled aperture; alternating coefficient signs do not by themselves imply multiple reversals in surface departure.

The PMMA identification is deliberately qualified. The optical constants are compatible with PMMA, and a historical account attributes the production corrector to methyl methacrylate, but the patent provides no chemical or trade-glass designation.

### L2 + L3 - Fixed Positive Cemented Doublet G1

**L2:** $n_d=1.517$, $\nu_d=64.2$. Glass: BSC7 (HOYA) equivalent, code 517/642. Biconvex positive. Standalone in-air $f=+91.02$ mm.

**L3:** $n_d=1.673$, $\nu_d=32.2$. Glass: E-FD5 (HOYA) equivalent, code 673/322. Negative meniscus. Standalone in-air $f=-183.85$ mm.

**Cemented G1:** $\phi=+0.005451215\ \text{mm}^{-1}$, $f=+183.445$ mm in air.

G1 is the stationary positive refractive group. Its crown/flint pairing provides achromatic correction for the rear refractive system while its positive power helps relay the post-secondary beam through the primary opening. The independently calculated power agrees with Table V's rounded $K_1=0.00545\ \text{mm}^{-1}$.

The adopted 23.7 mm equal semi-diameters leave 0.549 mm edge thickness in L2. A slightly larger paraxial corner-field envelope would make that positive element mechanically too thin, so the reconstruction accepts modest peripheral vignetting rather than inventing an impossible edge.

### M1 - Annular Concave Primary Mirror

Reflective surface, $R=-217.43$ mm. Paraxial mirror focal-length magnitude $|R|/2=108.715$ mm.

M1 is the spherical primary mirror that supplies most of the initial convergence. Its annular reflective region is modeled with a 51.0 mm outer semi-diameter and a 24.0 mm clear central semi-diameter. The clear center is large enough to contain the reconstructed G1 diameter and to pass the post-secondary beam. Neither aperture is published in Table IV; both are geometric reconstructions constrained by Figure 4 and ray clearance.

### L4 + L5 - First Cemented Component of Moving G2

**L4:** $n_d=1.720$, $\nu_d=50.3$. Glass: LAC10 (HOYA legacy) equivalent, code 720/504. Negative meniscus. Standalone in-air $f=-123.93$ mm.

**L5:** $n_d=1.728$, $\nu_d=26.1$. Glass: unmatched dense flint, code 728/261. Biconvex positive. Standalone in-air $f=+55.71$ mm.

**Cemented L4+L5:** $\phi=+0.009826068\ \text{mm}^{-1}$, $f=+101.770$ mm in air.

This doublet is net positive even though it belongs to the overall-negative moving group. L4 and L5 differ in refractive index by only 0.008 at the cemented interface, but their large Abbe-number separation provides a useful chromatic lever.

L5 is not assigned a catalog name. HOYA E-FD10 has essentially the same rounded index code, 728, but its Abbe code is 283 rather than the patent's 261. The difference is too large for a confident identification, so `Unmatched` is more accurate than a speculative legacy name.

The printed S8 radius is retained. Semi-diameters of 18.0 mm at S7 and 19.4 mm at S8 leave 1.027 mm minimum edge thickness. The unequal diameters remain within the project's 1.25 element-ratio limit and produce the tapered rear edge visible in Figure 4.

### L6 + L7 - Second Cemented Component of Moving G2

**L6:** $n_d=1.834$, $\nu_d=37.3$. Glass: NBFD10 (HOYA) equivalent, code 834/373. Biconcave negative. Standalone in-air $f=-36.73$ mm.

**L7:** $n_d=1.517$, $\nu_d=64.2$. Glass: BSC7 (HOYA) equivalent, code 517/642. Positive meniscus. Standalone in-air $f=+90.33$ mm.

**Cemented L6+L7:** $\phi=-0.016477101\ \text{mm}^{-1}$, $f=-60.690$ mm in air.

L6 is the strongest negative refractive element in the design. Its high index permits substantial negative power without an excessively steep first surface, while L7 supplies a low-dispersion crown partner. HOYA's official cross-reference identifies NBFD10 with the 834/373 code and lists SCHOTT N-LASF40 as its close cross-vendor equivalent; only the HOYA name is retained in the data file.

The cemented surface S10, $R=31.89$ mm, is the binding geometric feature. Semi-diameters of 20.0 mm at S9, 16.0 mm at S10, and 19.5 mm at S11 retain 0.527 mm edge thickness in L7 and keep both cemented elements within the prescribed front/rear diameter ratio. A 17.0 mm cemented-interface SD was rejected because it reduced that edge to only 0.095 mm.

### L8 - Rear Negative Meniscus

$n_d=1.720$, $\nu_d=50.3$. Glass: LAC10 (HOYA legacy) equivalent, code 720/504. Negative meniscus. Standalone in-air $f=-73.36$ mm.

L8 completes the negative moving group and contributes rear field and Petzval correction. Both radii are negative, $R_{12}=-44.48$ mm and $R_{13}=-286.84$ mm, so the numerical prescription defines a negative meniscus. The patent prose calls L8 biconcave, but that shape description conflicts with Table IV; the numerical radii take precedence.

### Moving Group G2 as a Whole

With the printed S8 radius, the complete three-component group has:

$$
K_2=-0.020636328\ \text{mm}^{-1}, \qquad f_{G2}=-48.458\ \text{mm}.
$$

The independently calculated ratio is:

$$
\left|\frac{K_2}{K_1}\right|=3.7856.
$$

This exceeds the patent condition $1.8<|K_2/K_1|<3.5$ and differs from Table V's rounded ratio 3.413. Together with the repeated-pass EFL discrepancy, that is evidence of an internal inconsistency in the published example. The group power is a standalone in-air value; the behavior of G2 in the converging post-mirror beam is not equivalent to simply treating it as an isolated thin negative lens.

## Glass Identification and Selection

The patent supplies only rounded $n_d$ and $\nu_d$ values. It does not identify manufacturers. Catalog names therefore denote authoritative current or legacy equivalents, not proof of the actual production melt.

| Element(s) | $n_d$ | $\nu_d$ | Identification | Catalog basis | Function |
|---|---:|---:|---|---|---|
| L1 | 1.491 | 57.2 | PMMA-class optical plastic | Historical material attribution; no patent trade name | Full-aperture aspheric corrector |
| L2, L7 | 1.517 | 64.2 | BSC7 (HOYA) equivalent | Official code 517/642 | Low-dispersion crown partner |
| L3 | 1.673 | 32.2 | E-FD5 (HOYA) equivalent | Official code 673/322 | Flint partner in G1 |
| L4, L8 | 1.720 | 50.3 | LAC10 (HOYA legacy) equivalent | Official legacy code 720/504 | High-index, moderate-dispersion negative elements |
| L5 | 1.728 | 26.1 | Unmatched dense flint 728/261 | E-FD10 is 728/283 and is not an adequate match | High-dispersion positive member |
| L6 | 1.834 | 37.3 | NBFD10 (HOYA) equivalent | Official code 834/373 | Principal negative refractive power |

L4 and L8 sit near the conventional crown/flint Abbe boundary. Their exact family label is less important than the design function: they combine high index with markedly lower dispersion than L5 and L6. L6, at $\nu_d=37.3$, is unambiguously a dense lanthanum flint. The companion catalog now contains the exact legacy HOYA LAC10 and NBFD10 vendor-polynomial records, so all three of those elements use coefficient-backed dispersion rather than Abbe fallback.

That raises strict coefficient coverage from three to six of the eight refractive elements. PMMA remains an intentionally qualified historical material attribution rather than a grade-specific catalog assignment, and the 728/261 dense flint remains explicitly unmatched.

No anomalous-partial-dispersion or multi-line refractive-index data are supplied in the patent. The prescription therefore supports an achromatic interpretation but not a quantitative apochromatic claim.

## Focus Mechanism

The primary and secondary mirrors, L1, and G1 remain fixed. Focusing is accomplished by axial translation of the complete negative group G2, L4-L8. This is the invention's central mechanical advantage: the large mirror assembly can remain aligned and sealed while the smaller rear refractive group moves.

The variable spacing is the air gap between S5 and S6, tabulated as 4.25 mm for Table IV. Movement of G2 also changes the back-focus relationship to the fixed image plane. The patent states generally that its embodiments cover magnification from zero at infinity to approximately $\beta=-0.125$ at about 3 m, but Table IV provides no second G2 position, no finite-conjugate EFL, and no back-focus value for another state.

The data file therefore stores only the published configuration. It does not invent a close-focus gap, group travel, or EFL-breathing curve. The required `closeFocusM` field uses the patent's approximate 3 m statement and should not be read as a verified production-lens minimum focus distance.

## Aspherical Surfaces

Only S1, the plane front surface of L1, is aspherical in Figure 4. The patent uses the standard even-polynomial form:

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}
+D h^4+E h^6+F h^8+G h^{10},
$$

where $c=1/R$. For S1, $R=\infty$ and $c=0$, so the conic base term vanishes. The tabulated $K=0.010$ has no geometrical effect for this plane base; the surface is defined entirely by the polynomial terms.

| Data-file term | Patent symbol | Value |
|---|---|---:|
| $K$ | $K$ | $+1.0\times10^{-2}$ |
| $A_4$ | $D$ | $-2.89\times10^{-8}\ \text{mm}^{-3}$ |
| $A_6$ | $E$ | $+3.65\times10^{-13}\ \text{mm}^{-5}$ |
| $A_8$ | $F$ | $-5.79\times10^{-16}\ \text{mm}^{-7}$ |
| $A_{10}$ | $G$ | $+9.13\times10^{-20}\ \text{mm}^{-9}$ |

The verified departures are:

| Semi-diameter $h$ | $Z(h)$ | Meridional slope angle |
|---:|---:|---:|
| 48.6 mm | -0.167728 mm | -0.8171° |
| 51.0 mm | -0.204723 mm | -0.9513° |

The data file copies these coefficients without scaling. A uniform focal-length rescale would require corresponding inverse-power changes to the polynomial coefficients; none are applied.

## Verification Summary

### Repeated-Pass Paraxial Method

The first-order audit used a signed-index $y$-$n u$ trace in physical coordinates. Refractive surfaces were revisited in the actual encounter order, and each mirror reflection changed the sign of the propagation index. This method reproduces the expected $|R|/2$ mirror behavior and independently calculates EFL, back focus, standalone group powers, and surface ray heights.

### Table IV Internal Inconsistency

Table IV and claim 9 both print $R_8=-204.60$ mm. That value is legible in the patent and is not an OCR error. It is nevertheless internally inconsistent with the same patent's EFL and Table V group power.

| Quantity | Printed $R_8=-204.60$ mm | Reconstructed $R_8=-143.54$ mm | Patent target |
|---|---:|---:|---:|
| Full repeated-pass EFL | 590.178 mm | 437.427 mm | 437.4 mm |
| BFD from S13 | 92.403 mm | 63.040 mm | not stated |
| $K_1$ | +0.005451 mm⁻¹ | +0.005451 mm⁻¹ | +0.00545 mm⁻¹ |
| $K_2$ | -0.020636 mm⁻¹ | -0.018536 mm⁻¹ | -0.0186 mm⁻¹ |
| $|K_2/K_1|$ | 3.7856 | 3.4004 | 3.413 |

Solving only S8 for the published 437.4 mm EFL gives $R_8=-143.52965$ mm. The nearest two-decimal value, $-143.54$ mm, is already printed in Table IV as the M2 radius. Substituting that value at S8 would simultaneously restore the system EFL and the independently calculated G2 power while leaving every other radius, spacing, refractive index, and mirror position unchanged.

That substitution is a useful diagnostic hypothesis, but the companion data file does not use it. It retains the legible $R_8=-204.60$ mm value printed in both Table IV and claim 9 and records the inconsistency explicitly instead of altering a source value without corroboration.

### Native Scale and Image Plane

No production scaling is applied. The retained printed prescription has:

- full repeated-pass EFL: 590.178 mm;
- BFD from S13: 92.403 mm;
- image-plane position from S1: 197.623 mm;
- diagonal full field on 24x36 mm: 5.6626°; and
- patent-nominal entrance-pupil semi-diameter at 437.4 mm and f/4.5: 48.60 mm.

The 450mm product designation remains `focalLengthMarketing`; the patent's stated 437.4 mm value remains `focalLengthDesign`. The explicit image plane, rather than that metadata field, follows the paraxial focus of the retained numerical table.

### Semi-Diameter Reconstruction

The patent does not publish clear apertures. Semi-diameters were reconstructed from repeated-pass paraxial marginal and chief rays, then constrained by annular clearance, spherical/aspheric rim slope, edge thickness, signed cross-gap sag intrusion, and the 1.25 maximum front/rear diameter ratio. The model deliberately permits normal peripheral vignetting where a full corner-field envelope would require physically impossible positive-element edges.

| Surface or region | Adopted semi-diameter | Governing consideration |
|---|---:|---|
| Synthetic entrance stop | 48.60 mm | Published 437.4 mm / (2 × 4.5) |
| M2 | 27.50 mm | Returning-beam envelope and central obstruction |
| L1 and M1 outer radius | 51.00 mm | Entrance annulus and primary marginal ray |
| M1 clear center | 24.00 mm | G1 diameter and post-secondary beam clearance |
| G1, S3-S5 | 23.70 mm | L2 edge thickness 0.549 mm |
| S6 / S7 | 22.50 / 18.00 mm | L4 ratio exactly 1.25 |
| S8 | 19.40 mm | L5 edge thickness 1.027 mm |
| S9 / S10 | 20.00 / 16.00 mm | L6 ratio exactly 1.25 |
| S11 | 19.50 mm | L7 edge thickness 0.527 mm |
| S12-S13 | 16.50 mm | Rear ray envelope and ample edge thickness |

The opposed negative surfaces across the 0.72 mm S8-S9 air gap separate toward their rims rather than intruding into one another. The largest positive signed intrusion is 4.590 mm across the much larger 23.08 mm S11-S12 gap. All reconstructed element semi-diameter ratios are at or below 1.25, and the thinnest computed refractive edge is 0.527 mm at L7.

## Folded / Mirror Path Verification

The data file stores surfaces in physical front-to-rear order but uses automatic folded-path tracing. Its intended interaction sequence is:

1. incoming rays inside the M2 disk are blocked;
2. annular rays pass through L1 and reflect from M1;
3. returning rays re-cross L1 and reflect from the rear-active face of M2;
4. the post-secondary beam crosses L1 a third time, enters G1, passes through M1's clear center, and traverses G2; and
5. rays terminate at the explicit image plane.

The synthetic `STO` plane represents the fixed f/4.5 entrance pupil. It is not an iris shown in the patent. M2B and M1B are renderer backing surfaces with no optical power. The data coordinate system places S1 at $z=3.5$ mm, so the explicit image plane is at $z=201.123458$ mm; this is the same physical image location as 197.623458 mm measured from S1.

The unprescribed protective plate P, sealing plate LS, and removable filter F are omitted. Their inclusion with invented thicknesses or glass constants would be less faithful than leaving them out.

## Design Heritage and Context

The patent's principal contribution is not the use of a Cassegrain mirror pair by itself, but the combination of fixed mirrors with a movable strong negative refractive group. Conventional mirror focusing can require axial movement of a large, alignment-sensitive primary. Kreitzer instead places the focusing motion in the smaller rear refractive assembly while keeping the mirror spacing fixed.

The printed prescription's high ratio $|K_2/K_1|\approx3.79$ gives the moving group substantial focus leverage but also falls outside the patent's own upper bound, reinforcing the source-consistency caveat. Because Table IV provides only one spacing state, its finite-conjugate behavior cannot be quantified responsibly from this example alone.

## Sources

- Kreitzer, Melvyn H. **Catadioptric Lens.** US Patent 4,523,816, filed August 12, 1983; granted June 18, 1985. Figure 4, Table IV, Table V, and claim 9 are the primary prescription sources.
- HOYA Group, Optics Division. **Official Optical Glass Cross Reference Index** and **Glass Polished Lenses** listings. Used for the 517/642, 673/322, 720/504, 728/283, and 834/373 catalog comparisons.
- CameraQuest. **Vivitar 450/4.5 Series One.** Secondary historical source for the production-lens association, T-mount description, and methyl-methacrylate attribution to former Vivitar executive Nelson Davis. These statements are not treated as patent facts or manufacturer-published hard specifications.
