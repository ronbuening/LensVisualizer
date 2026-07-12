## Patent Reference and Design Identification

**Patent:** US 3,884,556  
**Filed:** May 4, 1973  
**Priority:** May 10, 1972 (Japan 47-46084); September 6, 1972 (Japan 47-89313)  
**Granted:** May 20, 1975  
**Inventor:** Jihei Nakagawa  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** _Retrofocus Wide-Angle Lens System_  
**Embodiment analyzed:** Embodiment 4, Fig. 3; aberration plots in Figs. 11A-11C; repeated as Claim 5

The patent does not identify a commercial lens by model name. Embodiment 4 is nevertheless the strongest available match to the Olympus OM-system H.Zuiko Auto-W 24mm f/2.8, and the identification rests on several convergent points rather than on any single dimension:

1. Embodiment 4 is an $F/2.8$ design whose Fig. 11 aberration plots extend to a 42° half-field, corresponding to an approximately 84° full field. Olympus's 1979 product sheet specifies 24 mm, $F/2.8$, and an 84° angle of view.
2. The embodiment contains eight glass elements in seven air-spaced groups. The Olympus sheet specifies 8 elements in 7 groups, and its schematic shows the same broad topology: three front menisci, a thick positive fourth element, a cemented negative doublet, and two positive rear elements.
3. Uniform scaling of the normalized prescription by 24 gives a computed paraxial effective focal length of 23.9992 mm.
4. A rectilinear 24 mm lens at a 42° half-field gives an ideal rectilinear half-image height of 21.6097 mm, only 0.0236 mm smaller than the 21.6333 mm half-diagonal of the 36 × 24 mm frame.
5. Among the patent's $F/2.8$ examples, Embodiment 4 is the economical 8/7 construction. Several later examples use more elaborate fourth-component constructions and higher element counts.
6. The patent is assigned to Olympus and claims Japanese priority in 1972, consistent with the design period of the early OM wide-angle line.

The production match is not exact in every reconstructed quantity. At the Olympus-specified minimum focus of 0.25 m, the patent prescription under a unit-focus paraxial model gives approximately $-0.13635\times$ magnification, equivalent to a 264 × 176 mm object field on 36 × 24 mm film. The Olympus sheet instead gives a maximum photography range of 23 × 15 cm, or approximately $0.16\times$. The available documents do not establish whether that difference comes from production-prescription changes, rounding in the published field range, or the limits of a paraxial close-focus reconstruction.

The identification should therefore be read as **strongly supported but circumstantial**. Neither the patent nor the manufacturer sheet explicitly states that Embodiment 4 is the production prescription.

## Optical Architecture

Embodiment 4 is an all-spherical retrofocus wide-angle lens with eight elements in seven groups. Its component sequence is:

$$
+\; -\; -\; +\; -\; +\; +
$$

The first three elements form a net-negative front section. The remaining elements form a net-positive rear section containing a thick positive singlet, a cemented negative doublet, and two positive rear elements. The independently traced focal lengths are:

- front section L1-L3: $f_{123}=-16.5397$ mm;
- rear section L4-L7: $f_{4-7}=+19.3562$ mm;
- complete lens: $f=23.9992$ mm.

The negative front section moves the system's principal-plane geometry sufficiently to produce a back focal distance longer than the effective focal length. The computed ratio is

$$
\frac{\mathrm{BFD}}{\mathrm{EFL}}=1.5316,
$$

which satisfies the defining geometric condition for a retrofocus lens. This is not merely a wide-angle lens with a long barrel: its paraxial back focal distance exceeds its focal length.

The patent places the aperture stop in the air gap between L4 and L5. Fig. 3 shows the stop inside $d_8$, but the numerical table gives only the total gap. For the data file the stop is placed approximately 40% of the way from surface 8 to surface 9, as estimated from the drawing. That split does not alter first-order power because the stop is optically neutral, but it does affect entrance-pupil magnification and the rendered ray bundles.

At the inferred stop position, the pre-stop matrix maps a 4.2856 mm entrance-pupil semi-diameter to a 5.7092 mm physical stop semi-diameter. The data file therefore uses 5.71 mm, reproducing $F/2.8$ paraxially.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d=1.7234$, $\nu_d=38.0$. Glass: S-BAH28 (OHARA) equivalent. Standalone in-air $f=+47.6047$ mm.

L1 is a positive meniscus rather than a conventional weak protective front element. The patent explicitly uses a comparatively strong positive first component to control the large negative distortion tendency of compact retrofocus systems. Its role is best understood through chief-ray geometry: the element changes the angular course of oblique bundles before the two negative menisci impose the principal retrofocus power.

The patent does not identify a supplier. OHARA S-BAH28 is used as an authoritative catalog equivalent; it is not asserted to be the production melt.

### L2 — Negative Meniscus, Convex to Object

$n_d=1.6228$, $\nu_d=57.1$. Glass: S-BSM10 (OHARA) equivalent. Standalone in-air $f=-21.5611$ mm.

L2 is the strongest negative singlet in the front section. Together with L3 it establishes the divergent front group needed for mirror clearance and compact front diameter. The patent warns that excessively strong negative power makes residual aberrations difficult to correct; its first conditional expression limits the combined focal length of L1-L3 for that reason.

S-BSM10 has catalog values $n_d=1.62280$ and $\nu_d=57.05$, making it a direct optical equivalent to the patent pair within normal rounding.

### L3 — Negative Meniscus, Convex to Object

$n_d=1.7130$, $\nu_d=54.0$. Glass: S-LAL8 (OHARA) equivalent. Standalone in-air $f=-24.3538$ mm.

L3 completes the net-negative front section. Its higher index permits substantial negative power without requiring curvature as extreme as a lower-index crown would need. It also creates the final chief-ray and marginal-ray conditions presented to the thick positive L4.

The catalog-equivalent match is S-LAL8 at $n_d=1.71300$ and $\nu_d=53.87$. The difference in Abbe number is consistent with the single-decimal precision of the patent table.

### L4 — Thick Biconvex Positive Singlet

$n_d=1.6141$, $\nu_d=55.0$. Glass: S-BSM9 (OHARA) equivalent. Standalone in-air $f=+23.7971$ mm.

L4 is the thick positive element on which the patent places substantial correction responsibility. Its scaled center thickness is 8.9064 mm. The patent states that a thick fourth component helps correct spherical aberration and astigmatism generated by the strongly negative second and third components, while also contributing to distortion control.

OHARA S-BSM9 is an essentially exact match at $n_d=1.61405$ and $\nu_d=54.99$. It is now a non-recommended/discontinued catalog type, which explains why it may be absent from short current-product lists.

### L5 — Cemented Biconcave Negative Doublet

**L5a:** $n_d=1.7618$, $\nu_d=27.1$. Glass: unmatched dense flint 762/271; current SF14-family glasses are the nearest catalog class. Standalone in-air $f=+13.8270$ mm.  
**L5b:** $n_d=1.8052$, $\nu_d=25.4$. Glass: S-TIH6 (OHARA) equivalent. Standalone in-air $f=-10.3284$ mm.  
**Complete cemented group:** $f=-38.3160$ mm.

The outer surfaces of the cemented group make the assembly biconcave and net negative. The front member is not itself a negative thin lens: evaluated independently in air, it is a positive meniscus. Its contribution inside the cemented doublet must therefore be described in situ, where the $n_d=1.7618$ to $1.8052$ junction supplies additional refractive power and aberration control. The standalone focal lengths are not additive element powers within the cemented assembly.

The cemented junction has normalized radius $r_{10}=-0.4098$, so its concavity faces the stop as required by the patent's preferred construction. The refractive-index step is

$$
1.8052-1.7618=0.0434<0.1,
$$

satisfying the patent's condition for sagittal-coma correction.

L5a does not have a secure current-catalog identity. Current SF14-family entries converge closely in refractive index but not in dispersion: OHARA S-TIH14 is 1.76182 / 26.52, SCHOTT N-SF14 is 1.76182 / 26.53, HIKARI J-SF14 is 1.76182 / 26.58, and SUMITA SF14/K-SFLD14 is approximately 1.76182 / 26.5. None reproduces the patent's $\nu_d=27.1$. L5a is therefore labeled as unmatched dense flint 762/271 rather than assigned a modern catalog glass. It may be a legacy melt, a historical catalog variant, or rounded patent data; the sources do not distinguish among those possibilities. L5b is a direct S-TIH6 equivalent at $n_d=1.80518$, $\nu_d=25.42$.

### L6 — Positive Meniscus, Concave to Object

$n_d=1.6180$, $\nu_d=63.4$. Glass: S-PHM52 (OHARA) equivalent. Standalone in-air $f=+32.2041$ mm.

L6 begins the final positive pair. Its concave object-side form faces the stop and supports the patent's stated correction of spherical aberration and coma. The relatively high Abbe number gives the rear positive power lower dispersion than the dense-flint L5 group.

S-PHM52 is a direct catalog equivalent at $n_d=1.61800$, $\nu_d=63.33$.

### L7 — Weak-Front Biconvex Positive

$n_d=1.6180$, $\nu_d=63.4$. Glass: S-PHM52 (OHARA) equivalent. Standalone in-air $f=+43.9128$ mm.

L7 uses the same low-dispersion glass as L6. Its front radius is 953.1336 mm after scaling and is therefore weakly convex, not plane. Its rear radius is -27.9072 mm. The correct shape classification is **biconvex positive**, not plano-convex and not a positive meniscus.

This classification is consistent with the patent’s statement that, as aperture is increased, the last lens tends to become biconvex. Embodiment 4 is a direct numerical example of that tendency.

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$; it does not name glass manufacturers, melt codes, or partial-dispersion values. The table below therefore records authoritative catalog equivalents, not proven production-glass assignments.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog-equivalent classification                                           | Match assessment                                             |
| ------- | -----------: | -------------: | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| L1      |       1.7234 |           38.0 | S-BAH28 (OHARA), 1.72342 / 37.95                                            | Direct equivalent                                            |
| L2      |       1.6228 |           57.1 | S-BSM10 (OHARA), 1.62280 / 57.05                                            | Direct equivalent                                            |
| L3      |       1.7130 |           54.0 | S-LAL8 (OHARA), 1.71300 / 53.87                                             | Direct equivalent within patent rounding                     |
| L4      |       1.6141 |           55.0 | S-BSM9 (OHARA), 1.61405 / 54.99                                             | Direct equivalent; legacy/non-recommended type               |
| L5a     |       1.7618 |           27.1 | Unmatched 762/271; current SF14 family is approximately 1.76182 / 26.5-26.6 | Index match, dispersion mismatch; no secure catalog identity |
| L5b     |       1.8052 |           25.4 | S-TIH6 (OHARA), 1.80518 / 25.42                                             | Direct equivalent                                            |
| L6      |       1.6180 |           63.4 | S-PHM52 (OHARA), 1.61800 / 63.33                                            | Direct equivalent                                            |
| L7      |       1.6180 |           63.4 | S-PHM52 (OHARA), 1.61800 / 63.33                                            | Direct equivalent                                            |

Three points follow from this palette:

1. The design does not rely on an ED or fluorite-equivalent material identifiable from the patent data. No apochromatic claim is supportable from $n_d$ and $\nu_d$ alone.
2. The negative cemented group uses two high-index, high-dispersion glasses. Its cemented interface is therefore important for monochromatic correction as well as for system-level chromatic balance; it is not a conventional low-index-crown/high-index-flint achromat.
3. The two final positive elements use the lowest-dispersion glass in the prescription, giving the rear group useful longitudinal-color leverage against L1 and L5.

## Focus Mechanism

Olympus specifies straight-helicoid focusing and a minimum focus distance of 0.25 m. The data file treats this as a unit-focus reconstruction: all internal separations remain fixed while the complete optical assembly translates object-ward. The patent itself publishes only the infinity prescription and does not tabulate a close-focus state.

With the 0.25 m camera-to-subject distance measured from the image plane, the finite-conjugate solution is:

| State                                       | Last-surface-to-image distance |                                Change |
| ------------------------------------------- | -----------------------------: | ------------------------------------: |
| Infinity, patent-scaled data state          |                     36.7632 mm |                                     — |
| Infinity, independently computed best focus |                     36.7569 mm |   -0.0063 mm from patent-scaled value |
| 0.25 m, reconstructed                       |                     40.0292 mm | +3.2660 mm from the stored data state |

The physical extension from the independently computed infinity focus is 3.2723 mm. Relative to the stored patent-scaled BFD, the close-focus gap increase is 3.2660 mm. The 40.0292 mm endpoint follows from solving the complete camera-to-subject conjugate and avoids mixing the computed extension with the patent-rounded infinity BFD.

At this close state, the paraxial lateral magnification is $-0.13635\times$, corresponding to an object field of approximately 264 × 176 mm on a 36 × 24 mm frame. Olympus's published 23 × 15 cm maximum photography range is appreciably tighter. The close-focus state is therefore useful as a transparent model of the patent prescription, not as proof that the production lens follows exactly the same finite-conjugate prescription.

No floating group is represented. That choice follows the fixed internal spacings in the patent and the manufacturer's straight-helicoid description, but it remains a modeling interpretation rather than a patent-published focus table.

## Conditional Expressions

The patent's principal construction limits are satisfied without adjustment.

### Front-section focal length

$$
0.4f<|f_{123}|<0.8f, \qquad f_{123}<0.
$$

Independent trace:

$$
\frac{f_{123}}{f}=-0.68918.
$$

Thus $0.4<0.68918<0.8$. It also satisfies Claim 10's narrower interval:

$$
0.64<0.68918<0.72.
$$

### Combined axial thickness of L4 and L5

The patent defines

$$
D_4=d_7=0.3711f
$$

and

$$
D_5=d_9+d_{10}=0.2536f+0.0549f=0.3085f.
$$

Therefore

$$
D_4+D_5=0.6796f.
$$

This satisfies both the general condition $0.5f<D_4+D_5<f$ and Claim 10's narrower condition $0.65f<D_4+D_5<0.84f$.

### Cemented-doublet conditions

The L5 junction satisfies both preferred conditions stated near the end of the description:

$$
r_{10}=-0.4098<0
$$

and

$$
n_{L5b}-n_{L5a}=0.0434<0.1.
$$

## Paraxial and Geometric Verification

A surface-by-surface comparison against both the Embodiment 4 table and its repetition in Claim 5 found no transcription error in the 15 radii, 14 prescribed intersurface spacings, eight $n_d$/$\nu_d$ pairs, normalized focal length, $F/2.8$ aperture, $f_B=1.5318$, or $f_{123}=-0.689$ values. The full prescription was then independently evaluated with an air-to-air reduced-angle matrix trace. The normalized system matrix is

$$
\begin{bmatrix}
1.5315880 & 1.4165689\\
-1.0000329 & -0.2720154
\end{bmatrix},
$$

with determinant 1.0000000. After scaling by 24, the equivalent physical matrix has the same $A$, $C$, and $D$ terms while $B$ scales to 33.99765 mm.

| Quantity             |     Patent | Independent result |          Difference |
| -------------------- | ---------: | -----------------: | ------------------: |
| Normalized EFL       |     1.0000 |          0.9999671 |           -0.00329% |
| Scaled EFL           | 24.0000 mm |         23.9992 mm |          -0.0008 mm |
| Normalized BFD       |     1.5318 |          1.5315376 |            -0.0171% |
| Scaled BFD           | 36.7632 mm |         36.7569 mm |          -0.0063 mm |
| Normalized $f_{123}$ |     -0.689 |         -0.6891766 |          -0.0001766 |
| Matrix determinant   |     1.0000 |          1.0000000 | numerical agreement |

The first-to-last-surface track is 40.4856 mm. The computed first-vertex-to-image distance at infinity is 77.2425 mm. These are optical prescription dimensions and should not be equated directly with the external barrel length or flange position.

The surface-by-surface Petzval sum is calculated as

$$
P=\sum_i \frac{\phi_i}{n_i n'_i}=0.00504174\ \mathrm{mm}^{-1},
$$

where $\phi_i=(n'_i-n_i)/r_i$. Under the sign convention used here, the corresponding Petzval radius is

$$
R_P=-\frac{1}{P}=-198.344\ \mathrm{mm}.
$$

This value is not derived from thin-lens element powers; it is the required surface-by-surface calculation.

## Semi-Diameter Reconstruction

The patent provides no clear-aperture or semi-diameter table. The data-file diameters are therefore inferred rather than transcribed. The reconstruction used the following sequence:

1. estimate the stop location from the non-dimensioned Fig. 3 schematic;
2. calculate the $F/2.8$ marginal-ray scale;
3. trace on-axis marginal and oblique chief/marginal rays;
4. reduce diameters where required by physical edge thickness and signed cross-gap sag;
5. retain conservative rendering apertures without presenting them as production measurements.

The selected semi-diameters satisfy the project-specific binding checks:

- maximum $sd/|R|=0.8744<0.90$;
- maximum front/rear semi-diameter ratio within one element is 1.2063, below 1.25;
- minimum computed edge thickness is approximately 0.628 mm;
- every signed cross-gap sag intrusion is below 90% of its axial air gap.

The tightest gap is between L5 and L6: the signed sag intrusion is 1.0600 mm in a 1.2000 mm air gap, below the 1.0800 mm limit. The L2-to-L3 gap is the other controlling region, with 3.3422 mm intrusion in a 3.7368 mm gap, or 89.44% of the gap.

A paraxial check of the viewer's default oblique bundles at $0.6\times42°$ and pupil fractions through $\pm0.75$ found all sampled rays inside the selected apertures; the highest utilization was 0.9853 at the rear surface of L2. This check does not convert the inferred diameters into patent data or establish full-field production vignetting behavior.

These inferred apertures are suitable for rendering and first-order ray visualization. They should not be presented as measured production clear apertures.

## Design Context

US 3,884,556 is a systematic compact-retrofocus patent rather than a single-lens disclosure. Its first three embodiments are slower $F/3.5$ constructions; Embodiments 4-8 explore faster $F/2.8$ variants with differing fourth-component forms and, in the later examples, more elaborate positive assemblies. Embodiment 4 is notable because it reaches the faster aperture with only eight elements and one cemented group.

The patent supports the optical architecture, prescription, focal ratio, and field. It does not by itself prove that every commercial coating or cosmetic variant used an unchanged prescription, nor does it establish external barrel dimensions.

## Sources

- Jihei Nakagawa, assigned to Olympus Optical Co., Ltd., US Patent 3,884,556, _Retrofocus Wide-Angle Lens System_, filed May 4, 1973 and granted May 20, 1975. Embodiment 4 appears in columns 5-6 and is repeated in Claim 5; Fig. 3 shows the lens section; Claim 10 states the narrower construction limits.
- Olympus Optical Co., Ltd., _H.Zuiko Auto-W 1:2.8 f=24mm_, OM System product sheet, October 1979. The sheet supplies the 24 mm focal length, 84° angle, 8-element/7-group construction, $F/2.8$-16 aperture range, 0.25 m minimum focus, 23 × 15 cm maximum photography range, and straight-helicoid specification.
- OHARA Corporation, current catalog pages and technical data for S-BAH28, S-BSM10, S-LAL8, S-BSM9, S-TIH14, S-TIH6, and S-PHM52.
- SCHOTT, _Optical Glass Datasheet N-SF14_; Nikon/HIKARI, _Optical Glass Catalog 2023_; SUMITA Optical Glass, current Zemax/AGF catalog data. These were used only to test the unmatched L5a 762/271 glass against current SF14-family entries.
