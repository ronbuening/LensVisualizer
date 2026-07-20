# Canon 50mm f/2.8 — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2,838,978  
**Application Number:** 586,691  
**Priority:** Japan, 12 November 1955  
**Filed:** 23 May 1956  
**Granted:** 17 June 1958  
**Inventor:** Jiro Mukai  
**Assignee:** Canon Camera Co., Inc.  
**Title:** *Four Lens Photographic Objective*  
**Embodiment analyzed:** Sole numerical example, $f=1$, $2\omega=46^\circ$, $F:2.8$.[^patent]

US 2,838,978 contains one numerical prescription. The worked-example table on printed page 2 and the table incorporated into the sole claim on printed page 3 agree in every radius, thickness, refractive index, and Abbe number. The example is therefore unambiguous within the patent.

The prescription is assigned to the Canon S 50mm f/2.8 optical family rather than exclusively to version I, II, or III. The evidence converges as follows:

1. **Element and group count.** The patent has four elements in three air-spaced components. Canon lists four elements in three groups for all three production versions.[^canon-i][^canon-ii][^canon-iii]
2. **Architecture.** The patent specifies a positive meniscus, a biconcave negative singlet, and a cemented negative-positive rear pair—the complete four-element triplet shown in Figure 1 and the sole claim.
3. **Focal length and aperture.** A uniform $50\times$ conversion of the normalized prescription gives a traced effective focal length of 50.0499 mm. The patent explicitly states $F:2.8$.
4. **Field and format.** The patent gives a $46^\circ$ full field. At the traced EFL, the rectilinear zero-distortion reference diameter is 42.4899 mm, close to the 43.2666 mm diagonal of a 24 × 36 mm frame. This is a projection reference, not a measured clear-aperture-limited image circle.
5. **Special elements and motion.** The prescription has seven spherical refracting surfaces, no aspherical terms, no special-dispersion designation, no stabilization group, and no variable internal separation.
6. **Minimum focus.** Canon lists 1.0 m for all three versions.[^canon-i][^canon-ii][^canon-iii] The patent supplies no finite-conjugate prescription or focus cam law, so the data file uses a labeled first-order rigid-cell model rather than asserting a production mechanism.
7. **Chronology.** Canon marketed version I in January 1955, version II in November 1957, and version III in February 1959.[^canon-i][^canon-ii][^canon-iii] The dates support family-level correspondence but do not prove prescription continuity among the three mechanical versions.

Canon describes the contemporary S system as a screw mount.[^canon-screw] The project taxonomy therefore records the production mount under its M39/LTM identifier. The available primary sources support the family identification, but not a version-exclusive attribution.

## Optical Architecture

The lens is an asymmetric four-element triplet in three components, with a positive-negative-positive component-power sequence:

- **Component 1:** L1, a positive meniscus singlet, surfaces 1–2.
- **Component 2:** L2, a biconcave negative singlet, surfaces 3–4.
- **Component 3:** L3–L4, a cemented negative-positive pair, surfaces 5–7, joined at surface 6.

The rear component must be treated as a cemented assembly. Surface 6 is an active boundary from $n_3=1.5111$ to $n_4=1.6910$ across a positive radius. Its surface power is positive. The standalone in-air focal lengths of L3 and L4 are therefore diagnostic shape-and-glass values only; the meaningful air-to-air focal length of the complete cemented component is $+29.0145$ mm.

At the $50\times$ conversion, the first-to-last vertex length is 20.7000 mm and the paraxial back focal distance is 39.5424 mm. The first-vertex-to-image track is 60.2424 mm. Since $TL/EFL=1.20365$, the lens is not telephoto. Since $BFD/EFL=0.79006$ and $BFD<EFL$, it is not retrofocus.

The patent uses the standard object-to-image radius convention in which $R>0$ places the center of curvature toward the image. The element descriptions and the recovered normalized EFL independently confirm the signs:

- $r_1>0$ and $r_2>0$ form the stated positive meniscus.
- $r_3<0$ and $r_4>0$ form the stated biconcave negative singlet; $|r_4|<|r_3|$ makes the image-side concavity stronger.
- $r_5=\infty$ and $r_6>0$ make L3 plano-concave and negative when isolated in air.
- $r_6>0$ and $r_7<0$ make L4 biconvex and positive.

All refractive indices are d-line values and all dispersions are Abbe numbers. No conic constants or aspherical polynomial coefficients are published.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex Toward the Object

**$n_d=1.6583$, $\nu_d=57.3$. Glass: Sumita K-LaK11 exact coordinate equivalent (658573); the original Canon melt is not identified. Standalone in-air $f=+29.8920$ mm.**[^sumita]

At the production conversion, L1 has $R_1=+18.950$ mm, $R_2=+460.250$ mm, and center thickness 4.850 mm. The same-sign radii establish a positive meniscus rather than a biconvex element. The patent ratio $r_2/r_1=24.2876$ satisfies the required lower limit of 18.

The patent groups L1 with L4 in its positive-element mean-index condition. This is a system-level Petzval-control statement rather than evidence that either surface alone supplies the correction.

### L2 — Biconcave Negative Singlet

**$n_d=1.5930$, $\nu_d=34.3$. Glass: unmatched 593/343 medium-index flint. Standalone in-air $f=-18.2540$ mm.**

The converted radii are $R_3=-37.050$ mm and $R_4=+15.500$ mm, with a 1.350 mm center thickness. The opposite signs establish a biconcave element, and the smaller magnitude of $R_4$ confirms the stronger image-side concavity described by the patent.

No exact public catalog match is established. OHARA S-FTM16, for example, is $n_d=1.59270$, $\nu_d=35.31$; its index is close, but its Abbe number is 1.01 higher than the patent value.[^ohara] That residual is too large for a unique assignment.

### L3 — Plano-Concave Negative Member of the Rear Cemented Component

**$n_d=1.5111$, $\nu_d=60.6$. Glass: historical OHARA NSL7 close coordinate equivalent (511605 versus patent 511606); the original Canon melt is not identified. Standalone in-air $f=-34.0442$ mm.**[^ohara]

Surface 5 is plane and surface 6 has positive radius, so L3 is edge-thicker and negative when isolated in air. The patent's phrase “convex surface of their intercemented surfaces facing towards the object” describes the orientation of the shared interface, not the sign of L3 as an isolated lens.

The in-situ behavior differs materially from the isolated thick-lens value. At surface 6 the refractive index rises from 1.5111 to 1.6910 across a positive radius, giving positive surface power. Only the complete L3–L4 assembly has a defined air-to-air focal length.

OHARA's historical NSL7 reference is code 511605 with $\nu_d=60.49$. Relative to the patent, the coordinate residual is approximately $\Delta n_d=+0.00002$, $\Delta\nu_d=-0.11$. OHARA states that NSL7 is retained as a normal-line reference and is no longer produced.[^ohara]

### L4 — Biconvex Positive Rear Element

**$n_d=1.6910$, $\nu_d=54.8$. Glass: Sumita K-LaK9 exact coordinate equivalent (691548); OHARA S-LAL9 is near-exact. The original Canon melt is not identified. Standalone in-air $f=+16.4296$ mm.**[^sumita][^ohara]

The converted radii are $R_6=+17.400$ mm and $R_7=-27.450$ mm, with center thickness 6.800 mm. L4 is biconvex and positive. Cementing it to L3 gives an air-to-air rear-component focal length of $+29.0145$ mm, substantially weaker than L4 alone.

The patent uses the L3–L4 index difference in its coma-correction condition and couples the L4 thickness with the L1–L2 spacing to rectify meridional field curvature. These are component and system relationships rather than isolated surface functions.

## Glass Identification / Selection

The patent publishes only $n_d$ and $\nu_d$; it names no manufacturer or melt. Catalog names therefore establish coordinate equivalence only. The data file uses K-LaK11, NSL7, and K-LaK9 as explicit dispersion-model equivalents; none establishes Canon's supplier or original melt.

| Element | Patent code | Catalog assessment | Residual to patent $(\Delta n_d,\Delta\nu_d)$ |
|---|---:|---|---:|
| L1 | 658573 | Modeled with Sumita K-LaK11, an exact-coordinate equivalent | $(0.000000,0.00)$ |
| L2 | 593343 | Unmatched medium-index flint; OHARA S-FTM16 is nearby but non-unique | $(-0.000300,+1.01)$ |
| L3 | 511606 | Modeled with historical OHARA NSL7, a close coordinate equivalent | approximately $(+0.000020,-0.11)$ |
| L4 | 691548 | Modeled with Sumita K-LaK9, an exact-coordinate equivalent; OHARA S-LAL9 has $\nu_d=54.82$ | Sumita $(0.000000,0.00)$; OHARA $(0.000000,+0.02)$ |

The catalog curves improve chromatic tracing beyond a plain Abbe approximation, but they remain coordinate-equivalent models rather than recovered 1955 melt data. The patent does not provide line indices or partial-dispersion data that would support an apochromatic or secondary-spectrum claim.

## Focus Mechanism

US 2,838,978 provides one fixed prescription. It gives no variable separation, finite-conjugate state, principal-plane travel, group motion, or mechanical focusing description. Canon's records establish a 1.0 m closest focusing distance but do not publish maximum magnification for the three versions.[^canon-i][^canon-ii][^canon-iii]

The data file uses a conditional rigid-cell model solely to make the focus control operational. Every internal spacing remains fixed and only the final image-space distance changes. With a fixed 1,000 mm object-plane-to-film-plane distance, the physical paraxial solution is:

| Quantity | Infinity | Conditional 1.0 m rigid-cell model |
|---|---:|---:|
| Effective focal length | 50.0499 mm | 50.0499 mm |
| Last vertex to image | 39.5424 mm | 42.3377 mm |
| Required cell extension | 0 | 2.7954 mm |
| Object plane to first vertex | $\infty$ | 936.9623 mm |
| Transverse magnification | 0 | $-0.05585$; magnitude 0.05585× |

These are computed implementation values, not manufacturer specifications. A different production datum or a non-rigid focusing mechanism would change the extension and magnification.

## Conditional Expressions

The patent states seven inequalities. Values below are calculated directly from the sole numerical example.[^patent]

| No. | Published condition | Example value | Result |
|---:|---|---:|---|
| 1 | $0.166<n_4-n_3<0.2$ | 0.179900 | Satisfied |
| 2 | $0.1f<d_6<0.15f$ | $0.136000f$ | Satisfied |
| 3 | $0.045f<d_2<0.075f$ | $0.072000f$ | Satisfied |
| 4 | $1.65<(n_1+n_4)/2<1.75$ | 1.674650 | Satisfied |
| 5 | $1.5<(n_2+n_3)/2<1.6$ | 1.552050 | Satisfied |
| 6 | $18<r_2/r_1<\infty$ | 24.287599 | Satisfied |
| 7 | $0.6f<|r_3|<0.84f$ | $0.741000f$ | Satisfied |

Under the verified radius convention, condition 7 is equivalent to $-0.84f<r_3<-0.6f$.

## Data-File Reconstruction Assumptions

### Scale

All radii, thicknesses, air spaces, and inferred semi-diameters are converted by exactly $50\times$ from the patent's normalized $f=1$ prescription. The independently computed EFL is 50.049915 mm. No secondary rescaling is applied to force the rounded prescription to exactly 50.000 mm.

### Aperture stop

The patent states $F:2.8$ but supplies neither stop position nor stop diameter. Figure 1 shows the four elements and labeled spacings but no distinct iris. The data file therefore treats stop geometry as an implementation inference.

`STO` is placed within the published $d_4=3.050$ mm air space, 2.000 mm behind surface 4 and 1.050 mm before the plane surface 5. This retains nonzero air on both sides of the iris and satisfies the project's signed sag-clearance rule. With that position, the front-system matrix coefficient is $A=0.776328864$. Solving for $F:2.8$ gives:

- entrance-pupil semi-diameter: 8.937485 mm;
- physical stop semi-diameter: 6.938427 mm;
- reconstructed paraxial aperture: $f/2.800000$.

The stop position is not a recovered patent dimension. Moving it within $d_4$ would alter pupil geometry and finite aberrations while leaving the first-order EFL unchanged.

### Semi-diameters and field metadata

The patent omits clear apertures, but Figure 1 draws all three components at broadly similar heights. The adopted values preserve that silhouette while staying above the wide-open on-axis surface-ray heights. They intentionally do not assert that the full $23^\circ$ bundle is unvignetted.

| Plane | Adopted semi-diameter | Figure-driven role |
|---|---:|---|
| 1 | 12.0 mm | L1 curved front, matched to its nearly plane rear |
| 2 | 12.0 mm | L1 rear edge |
| 3 | 10.5 mm | L2 front edge |
| 4 | 10.5 mm | L2 rear edge, matched to the front edge as drawn in Figure 1 |
| STO | 6.9384 mm | aperture-defining |
| 5 | 8.8 mm | L3 plane front, tapered only enough to preserve material clearance from L2 |
| 6 | 10.5 mm | cemented interface and shared L3–L4 rim |
| 7 | 10.5 mm | L4 rear edge, matched to L3's maximum height |

The data file also declares the patent's $46^\circ$ rectilinear full field explicitly. The inferred apertures satisfy the project's geometry constraints:

- maximum $sd/|R|=0.67742$ at surface 4;
- maximum spherical rim angle = $42.64^\circ$;
- maximum element front/rear semi-diameter ratio = 1.19318 at L3;
- minimum computed edge thickness = 0.72284 mm at L1;
- surface 2–3 signed sag intrusion = 1.63878 mm in a 3.60000 mm gap (45.52%);
- surface 4–5 material-to-material sag intrusion = 2.74030 mm across their combined 3.05000 mm gap at the shared 8.8 mm material band (89.85%);
- surface 4–STO signed sag intrusion at the stop aperture = 1.63969 mm in a 2.00000 mm gap (81.98%);
- STO–surface 5 intrusion = 0 in the remaining 1.05000 mm plane-to-plane gap.

These values keep the renderer consistent with the patent silhouette. They remain inferred clear apertures, not production measurements or a no-vignetting guarantee at the published field edge.

## Verification Summary

### Independent paraxial trace

The prescription was evaluated independently with reduced-angle $[y,n\theta]^T$ and conventional-angle $[y,\theta]^T$ ABCD implementations. At the normalized patent scale, the first-to-last-surface matrices agree within $1.11\times10^{-16}$:

$$
M=\begin{bmatrix}
0.790058597106 & 0.355701678963\\
-0.999002693816 & 0.815956015013
\end{bmatrix},\qquad \det M=1.000000000000.
$$

The normalized EFL is 1.000998301796, reproducing the stated $f=1$ normalization to 0.0998% despite the prescription's limited printed precision.

### System quantities at the $50\times$ conversion

| Quantity | Computed value |
|---|---:|
| Effective focal length | 50.049915 mm |
| Back focal distance, last vertex to paraxial image | 39.542366 mm |
| Signed front focal distance from first vertex | −40.838529 mm |
| First-to-last vertex length | 20.700000 mm |
| First vertex to paraxial image | 60.242366 mm |
| $BFD/EFL$ | 0.790059 |
| $TL/EFL$ | 1.203646 |
| Rectilinear reference diameter at $46^\circ$ | 42.489857 mm |

### Standalone, component, and contiguous-subassembly powers

| Optical unit | Focal length at $50\times$ |
|---|---:|
| L1 standalone in air | +29.891974 mm |
| L2 standalone in air | −18.254041 mm |
| L3 standalone in air | −34.044218 mm |
| L4 standalone in air | +16.429628 mm |
| Cemented rear component L3–L4 | +29.014507 mm |
| Front contiguous subassembly L1–L2 | −123.755889 mm |
| Rear contiguous subassembly L2–L3–L4 | −138.251557 mm |
| Complete objective | +50.049915 mm |

The standalone L3 and L4 focal lengths are not additive substitutes for the cemented component. The shared interface changes medium and carries its own positive power.

### Surface-by-surface Petzval sum

Each contribution uses

$$
P_i=\frac{\Phi_i}{n_i n_i'},\qquad \Phi_i=\frac{n_i'-n_i}{R_i},
$$

rather than an element-level thin-lens approximation.

| Surface | $P_i$ (mm$^{-1}$) |
|---:|---:|
| 1 | +0.020948433 |
| 2 | −0.000862516 |
| 3 | −0.010047331 |
| 4 | −0.024016362 |
| 5 | 0.000000000 |
| 6 | +0.004046179 |
| 7 | +0.014886482 |
| **Sum** | **+0.004954886** |

The reciprocal magnitude is 201.820987 mm. This is a paraxial Petzval metric, not a finite-field best-focus surface.

The patent's plotted spherical aberration, sine-condition deviation, astigmatism, and distortion cannot be reproduced quantitatively from the printed prescription alone because the stop geometry and clear apertures are absent. No numerical aberration values are inferred from those plots.

## Sources

[^patent]: Jiro Mukai, *Four Lens Photographic Objective*, US 2,838,978, filed 23 May 1956 and granted 17 June 1958; Figure 1 and aberration plots on the drawing sheet, worked prescription on printed page 2, and repeated claim table on printed page 3 of the supplied patent scan.
[^canon-i]: Canon Camera Museum, “CANON 50mm f/2.8 I,” marketed January 1955; 3 groups, 4 elements, 1.0 m closest focusing distance, 34 mm filter diameter, minimum aperture f/16: https://global.canon/en/c-museum/product/s50.html
[^canon-ii]: Canon Camera Museum, “CANON 50mm f/2.8 II,” marketed November 1957; 3 groups, 4 elements, 1.0 m closest focusing distance, 40 mm filter diameter, minimum aperture f/22: https://global.canon/en/c-museum/product/s51.html
[^canon-iii]: Canon Camera Museum, “CANON 50mm f/2.8 III,” marketed February 1959; 3 groups, 4 elements, 1.0 m closest focusing distance, 40 mm filter diameter, minimum aperture f/22: https://global.canon/en/c-museum/product/s52.html
[^canon-screw]: Canon Camera Museum, “FL50mm f/1.8 I,” describing its predecessor as the “S (screw) mount 50mm f/1.8 lens”: https://global.canon/en/c-museum/product/fl102.html
[^sumita]: Sumita Optical Glass, official all-glasses Zemax catalog, including K-LaK9 (691548) and K-LaK11 (658573): https://www.sumita-opt.co.jp/en/download/
[^ohara]: OHARA, *Optical Glass Pocket Catalog*, including S-FTM16 (593353), S-LAL9 (691548), and the historical NSL7/PBM2 normal-line references: https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
